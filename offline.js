// Offline browser utilities. No website account, cookies, or server proxy.
window.no_log = true;
window.no_log_event = true;
window.offlineNotice = function (message) {
  let notice = document.getElementById('offline-notice');
  if (!notice) {
    notice = document.createElement('div');
    notice.id = 'offline-notice';
    notice.style.cssText = 'position:fixed;bottom:52px;left:50%;transform:translateX(-50%);z-index:99999;padding:12px 20px;border-radius:8px;background:#182532;color:white;font:14px sans-serif;pointer-events:none';
    document.body.appendChild(notice);
  }
  notice.textContent = message;
  clearTimeout(window.offlineNoticeTimer);
  window.offlineNoticeTimer = setTimeout(() => notice.remove(), 3500);
};
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:6px;right:6px;z-index:9999;display:flex;gap:6px;font:12px sans-serif';
  bar.id = 'offline-save-tools';
  const exportButton = document.createElement('button');
  exportButton.textContent = '导出存档';
  exportButton.onclick = () => {
    try { downloadSave(window.offlineSave.export(), 'star-defender-save.json'); }
    catch(error){ offlineNotice(error.message); }
  };
  const importButton = document.createElement('button');
  importButton.textContent = '导入存档';
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json,application/json'; input.hidden = true;
  importButton.onclick = () => input.click();
  input.onchange = async () => {
    try {
      const file=input.files[0]; if(!file)return;
      if(file.size>5*1024*1024)throw new Error('存档文件过大');
      const text=await file.text();window.offlineSave.validate(text);
      if(!confirm('导入会替换当前进度，并自动保存一份导入前备份。是否继续？'))return;
      window.offlineSave.import(text); location.reload();
    } catch(error){offlineNotice('导入失败：'+error.message);}
    finally{input.value='';}
  };
  const previousButton=document.createElement('button');
  previousButton.textContent='导出导入前备份';
  previousButton.onclick=()=>{
    const text=localStorage.getItem('star-defender-before-import');
    if(text)downloadSave(text,'star-defender-before-import.json');
    else offlineNotice('尚无导入前备份');
  };
  bar.append(exportButton,importButton,previousButton,input);
  document.body.appendChild(bar);
  // Only show save tools on the title screen; never cover combat controls.
  bar.style.display = 'none';
  const install = setInterval(() => {
    if (!window.cc || !cc.director) return;
    clearInterval(install);
    const update = () => { bar.style.display = cc.director.getScene()?.name === 'startScene' ? 'flex' : 'none'; };
    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, update);
    update();
  }, 100);
});

function downloadSave(text, name) {
  const url=URL.createObjectURL(new Blob([text],{type:'application/json'}));
  const link=document.createElement('a');link.href=url;link.download=name;link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
window.offlineSave = (() => {
  const key='ppgames_starcraft';
  const player=()=>{if(!window.__require)throw new Error('请等待游戏加载完成');return __require('playerData').default;};
  function validate(text){
    if(typeof text!=='string'||text.length>5*1024*1024)throw new Error('无效存档大小');
    const envelope=JSON.parse(text);
    if(envelope.format!=='star-defender-local-v1'||typeof envelope.data?.[key]!=='string')throw new Error('不是本游戏的存档');
    const raw=envelope.data[key],p=player(),encoded=raw.slice(2,-2);
    const hash=__require('utils').utils.my_md5(encoded,p.md5_key,false);
    if(raw.slice(0,2)!==hash.slice(0,2)||raw.slice(-2)!==hash.slice(-2))throw new Error('存档校验失败');
    const data=JSON.parse(p.strDecrypt(encoded));
    const numeric=(v)=>typeof v==='number'&&Number.isFinite(v)&&v>=0;
    for(const field of ['levelPassArray','armyLevelArray','buildingLevelArray','freeTimeArray']){
      if(!Array.isArray(data[field])||!data[field].length||data[field].length>1000||!data[field].every(numeric))throw new Error('存档字段无效：'+field);
    }
    if(!Array.isArray(data.itemArray)||!data.itemArray.length||data.itemArray.some(row=>!Array.isArray(row)||row.length!==2||!row.every(numeric)))throw new Error('物品数据无效');
    for(const field of ['levelGiftArray','buildingChoice','bufferArray','techLevelArray','levelBenefitArray','boxTimeArray','dailyArray','weekArray']){
      if(data[field]!==undefined&&(!Array.isArray(data[field])||data[field].length>1000||!data[field].every(numeric)))throw new Error('存档字段无效：'+field);
    }
    if(!Array.isArray(data.armyCheck)||data.armyCheck.length!==3||data.armyCheck.some(row=>!Array.isArray(row)||row.length!==3||!row.every(numeric)))throw new Error('阵容数据无效');
    if(!numeric(data.timer)||![0,1].includes(data.first))throw new Error('存档基础字段无效');
    if(data.armyLevelArray.length!==10||data.buildingLevelArray.length!==5||data.freeTimeArray.length<7||data.levelPassArray.some(v=>v>3||!Number.isInteger(v)))throw new Error('存档数据结构不兼容');
    // Reject unsafe property names recursively before the original loader sees them.
    function inspect(value){if(!value||typeof value!=='object')return;for(const k of Object.keys(value)){if(['__proto__','prototype','constructor'].includes(k))throw new Error('无效字段');inspect(value[k]);}}
    inspect(data);
    if(data.b_misc!==undefined&&(!data.b_misc||Array.isArray(data.b_misc)||typeof data.b_misc!=='object'))throw new Error('竞技场存档无效');
    const fortress=data.b_misc?.offlineFortress;
    if(fortress && (!Number.isInteger(fortress.level)||fortress.level<0||fortress.level>10||!Number.isSafeInteger(fortress.shards)||fortress.shards<0))throw new Error('要塞进度无效');
    const arena=data.b_misc?.offlineArena;
    if(arena && (!Number.isInteger(arena.rank)||arena.rank<1||arena.rank>18||!['score','wins','losses','draws','matches'].every(k=>numeric(arena[k]))))throw new Error('竞技场进度无效');
    return raw;
  }
  function exportSave(){player().saveData();return JSON.stringify({format:'star-defender-local-v1',data:{[key]:localStorage.getItem(key)}},null,2);}
  function importSave(text){
    const raw=validate(text);
    const backup=exportSave();
    localStorage.setItem('star-defender-before-import',backup);
    localStorage.setItem(key,raw);
  }
  return {validate,export:exportSave,import:importSave};
})();
