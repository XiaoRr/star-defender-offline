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
// Generic auto-hiding toast. Toggles style.display because the global
// `div { display: block }` rule defeats the [hidden] attribute.
window.offlineToast = function (text, ms = 2200) {
  let toast = document.getElementById('offline-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'offline-toast';
    toast.style.cssText = 'position:fixed;top:26%;left:50%;transform:translateX(-50%);max-width:80vw;padding:12px 20px;border-radius:10px;background:rgba(8,18,32,.9);color:white;text-align:center;font:16px/1.5 sans-serif;z-index:10000;pointer-events:none;white-space:pre-line;display:none';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.style.display = 'block';
  clearTimeout(window.offlineToastTimer);
  window.offlineToastTimer = setTimeout(() => { toast.style.display = 'none'; }, ms);
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
  const redeemBar = document.createElement('div');
  redeemBar.id = 'offline-redeem-tools';
  redeemBar.className = 'offline-redeem-tools';
  const redeemLabel = document.createElement('span');
  redeemLabel.textContent = '兑换码';
  const redeemInput = document.createElement('input');
  redeemInput.type = 'text';
  redeemInput.placeholder = '输入兑换码';
  redeemInput.autocomplete = 'off';
  redeemInput.spellcheck = false;
  const redeemButton = document.createElement('button');
  redeemButton.textContent = '兑换';
  redeemButton.onclick = () => {
    try {
      if (!window.__require || !window.cc?.find('Canvas/bg/button')?.activeInHierarchy) {
        throw new Error('请等待游戏加载完成');
      }
      const result = window.offlineRedeem.claim(__require('playerData').default, redeemInput.value);
      offlineNotice(result.message);
      if (result.ok) redeemInput.value = '';
    } catch (error) {
      offlineNotice(`兑换失败：${error.message}`);
    }
  };
  redeemInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') redeemButton.click();
  });
  redeemBar.append(redeemLabel, redeemInput, redeemButton);
  document.body.appendChild(redeemBar);
  // Only show save tools on the title screen; never cover combat controls.
  bar.style.display = 'none';
  redeemBar.style.display = 'none';
  const install = setInterval(() => {
    if (!window.cc || !cc.director) return;
    clearInterval(install);
    const update = () => {
      const visible = cc.director.getScene()?.name === 'startScene';
      bar.style.display = visible ? 'flex' : 'none';
      redeemBar.style.display = visible ? 'flex' : 'none';
    };
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

// ===== 战略科技离线实装层（iteration 1：数值乘区类）=====
// 公式与原版科技面板一致：value(L) = min + (max-min)/5 * (L-1)，L>=1；等级 0 无效果。
window.offlineTech = (() => {
  const RANGES = {1:[10,30],2:[10,30],3:[20,100],4:[10,20],5:[10,20],6:[10,20],7:[2,4],8:[10,50],9:[0.6,1],10:[10,30],11:[10,50],12:[10,30],13:[10,50],14:[60,100],15:[5,9],16:[50,20],17:[100,200],18:[2,4],19:[10,50],20:[5,25],21:[60,30],22:[10,30],23:[10,30],24:[2,4],25:[60,100],26:[10,30],27:[40,80],28:[10,30],29:[10,30],30:[5,25],31:[5,25],32:[60,100],33:[10,20],34:[30,60],35:[10,20],36:[200,500],37:[10,30],38:[10,30],39:[50,30],40:[60,100],41:[8,4],42:[100,200]};
  const RANGES2 = {34:[15,35]};
  function player() { try { return window.__require('playerData').default; } catch (e) { return null; } }
  function level(id) { const a = player()?.techLevelArray; return a ? a[id - 1] || 0 : 0; }
  function value(id, lv) {
    const r = RANGES[id];
    if (!r || !(lv >= 1)) return 0;
    return r[0] + ((r[1] - r[0]) / 5) * (Math.min(lv, 5) - 1);
  }
  function value2(id, lv) {
    const r = RANGES2[id];
    if (!r || !(lv >= 1)) return 0;
    return r[0] + ((r[1] - r[0]) / 5) * (Math.min(lv, 5) - 1);
  }
  const pct = id => value(id, level(id)) / 100;
  const pct2 = id => value2(id, level(id)) / 100;
  return { RANGES, RANGES2, level, value, value2, pct, pct2 };
})();

// —— 以下钩子由主包战斗代码在关键计算点调用；unit 为组件实例（含 type/pvpWay/属性）——
// 兵种/建筑属性初始化与刷新后追加科技乘区。
window.__techArmyInit = function (A) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0) return;
  const type = A.type;
  const ratio = A.totalHp > 0 ? A.hp / A.totalHp : 1;
  if (type === 1) A.totalHp *= 1 + T.pct(3);              // 3 强化农民：血量+n%
  A.attack *= 1 + T.pct(5);                               // 5 战略中心：全场伤害+n%
  if (type === 2 && T.level(16) > 0) {                    // 16 强化针：攻击/攻速/移速+100%
    A.attack *= 2;
    A.cdTime /= 2;
    A.speed *= 2;
  }
  if (type === 6 && T.level(26) > 0) {                    // 26 高射炮：伤害/射程+n%，移速-30%
    A.attack *= 1 + T.pct(26);
    A.range *= 1 + T.pct(26);
    A.speed *= 0.7;
  }
  if (type === 8) A.range *= 1 + T.pct(28);               // 28 射程：战机射程+n%（对空翻倍在索敌距离）
  A.hp = A.totalHp * ratio;
};
window.__techTowerInit = function (W) {
  const T = window.offlineTech;
  if (!T) return;
  W.range *= 1 + T.pct(37);                               // 37 炮塔射程+n%
  const s = 1 + T.pct(38);                                // 38 炮塔射速+n%
  if (s > 1) { W.attackCDTime /= s; W.shootCDTime /= s; }
};
window.__techBuildingInit = function (B) {
  const T = window.offlineTech;
  if (!T || B.pvpWay !== 0) return;
  if (B.type === 1) B.attack *= 1 + T.pct(2);             // 2 强化攻击：基地攻击+n%
};
// 有效射程（战机对空翻倍）；targetNode 未选中时按对地计算。
window.__techRange = function (A, targetNode, kind) {
  const T = window.offlineTech;
  let range = A.range;
  if (T && A.pvpWay === 0 && A.type === 8 && targetNode) {
    let sky = 0;
    try {
      if (kind === 1) sky = targetNode.getComponent("starArmy").isSky;
      else if (kind === 0) sky = targetNode.getComponent("starEnemy").isSky;
    } catch (e) { sky = 0; }
    range *= 1 + T.pct(28) * (sky ? 2 : 1);
  }
  return range;
};
// 出手伤害乘区（近战在 checkMove、子弹在命中点调用）。
window.__techAttack = function (A, dmg, targetNode, compName) {
  const T = window.offlineTech;
  if (!T || !targetNode) return dmg;
  const way = A.pvpWay !== undefined ? A.pvpWay : A.way;
  if (way !== 0) return dmg;
  const type = A.type;
  let tc = null;
  try { tc = targetNode.getComponent(compName); } catch (e) { tc = null; }
  if (tc) {
    if (type === 6 && tc.size === 2) dmg *= 1 + T.pct(20);   // 20 压制：坦克对中型+n%
    if (type === 10 && tc.size === 3) dmg *= 1 + T.pct(30);  // 30 重打击：大和舰对大型+n%
    if (type === 8 && tc.isSky) dmg *= 1 + T.pct(31);        // 31 制空：战机对空+n%
    if (type === 2 && tc.invisible) dmg *= 1 + T.pct(10);    // 10 精准：对隐身（当前离线无敌方隐身单位，挂起待用）
    if (type === 2) {                                        // 13 合纵：300px 内每台机枪兵 +25% 档位，5 台吃满
      try {
        const gi = window.__require('gameData').default.gameInstance;
        if (gi && gi.armyArray) {
          let count = 0;
          for (let k = 0; k < gi.armyArray.length; k++) {
            const nd = gi.armyArray[k];
            if (!nd || !nd.isValid) continue;
            const c = nd.getComponent ? nd.getComponent('starArmy') : null;
            if (c && c.type === 2 && c.pvpWay === 0) {
              const dx = nd.x - targetNode.x, dy = nd.y - targetNode.y;
              if (dx * dx + dy * dy <= 300 * 300) count++;
            }
          }
          if (count > 1) dmg *= 1 + (T.pct(13) * Math.min(count - 1, 4)) / 4;
        }
      } catch (e) {}
    }
  }
  return dmg;
};
// 受伤乘区（starArmy.doHurt 内部调用；src 可选 {ranged,size}）。
window.__techReduceHurt = function (A, dmg, src) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0) return dmg;
  dmg *= 1 - T.pct(4);                                    // 4 指挥中心：全场受伤-n%
  if (A.type === 4) {
    if (src && src.ranged) dmg *= 1 - T.pct(12);          // 12 远程防御：护盾兵受远程-n%
    if (T.level(16) > 0) dmg *= 1 + T.pct(16);            // 16 强化针：受伤+n%（50%→20% 随等级降低）
  }
  if (A.type === 6 && src && src.size === 1) dmg *= 1 - T.pct(23); // 23 重甲防护：坦克受小型-n%
  return dmg;
};
window.__techBuildingHurt = function (B, dmg) {
  const T = window.offlineTech;
  if (!T || B.pvpWay !== 0) return dmg;
  if (B.type === 1) dmg *= (1 - T.pct(1)) * (1 - T.pct(4)); // 1 强化防御 × 4 指挥中心：基地受伤降低
  return dmg;
};
// 每帧钩子：护盾兵自疗（每秒回复最大血量 n%）。
window.__techTick = function (A, dt) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 4) return;
  if (T.level(15) < 1 || A.hp <= 0 || A.hp >= A.totalHp) return;
  A.__regenT = (A.__regenT || 0) + dt;
  if (A.__regenT >= 1) {
    A.__regenT -= 1;
    A.hp = Math.min(A.totalHp, A.hp + A.totalHp * T.pct(15));
  }
};
// 大和舰连射：出手后 n% 概率补一发 50% 伤害的子弹。
window.__techSecondShot = function (A, sx, sy, tx, ty, dmg, isSky, crit) {
  const T = window.offlineTech;
  if (!T || !A.shootBullet || A.pvpWay !== 0 || A.type !== 10) return;
  if (Math.random() < T.pct(33)) A.shootBullet(sx, sy, tx, ty, dmg * 0.5, isSky, crit);
};
