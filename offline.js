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

// ===== 战略科技离线实装层（iteration 2：触发/定时类）=====
const __ARMY_SKY = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1, 9: 1, 10: 1 };
window.__armyIsSky = t => __ARMY_SKY[t] || 0;
function __techSide() {
  try {
    const gi = window.__require('gameData').default.gameInstance;
    if (!gi) return null;
    return 0 === gi.gameMode
      ? { list: gi.enemyArray || [], comp: "starEnemy" }
      : { list: gi.armyArrayOther || [], comp: "starArmy" };
  } catch (e) { return null; }
}
// 出手阶段（近战挂点）：11 燃烧 DoT、14 贯穿喷射。子弹系兵种原样返回。
window.__techShoot = function (A, dmg, targetNode, compName) {
  const T = window.offlineTech;
  if (!T || !targetNode || A.pvpWay !== 0) return dmg;
  let tc = null;
  try { tc = targetNode.getComponent(compName); } catch (e) { tc = null; }
  if (!tc) return dmg;
  if (A.type === 3 && T.level(11) > 0) {                   // 11 燃烧：每0.5秒攻击的n%，持续2秒
    for (let k = 1; k <= 4; k++) {
      A.scheduleOnce(() => {
        try {
          if (targetNode.isValid) {
            const c = targetNode.getComponent(compName);
            if (c && c.hp > 0) c.doHurt(A.attack * T.pct(11));
          }
        } catch (e) {}
      }, k * 0.5);
    }
  }
  if (A.type === 3 && T.level(14) > 0) {                   // 14 贯穿喷射：目标身后90px内 n%
    try {
      const side = __techSide();
      if (side) {
        const ang = Math.atan2(targetNode.y - A.node.y, targetNode.x - A.node.x);
        const px = targetNode.x + Math.cos(ang) * 90, py = targetNode.y + Math.sin(ang) * 90;
        for (const nd of side.list) {
          if (!nd || !nd.isValid || nd === targetNode) continue;
          const c = nd.getComponent ? nd.getComponent(side.comp) : null;
          if (!c || c.hp <= 0) continue;
          const dx = nd.x - px, dy = nd.y - py;
          if (dx * dx + dy * dy <= 90 * 90) c.doHurt(dmg * T.pct(14));
        }
      }
    } catch (e) {}
  }
  return dmg;
};
// 命中阶段追加：19 凝滞（冰雷车命中降低敌攻移速3秒）。
window.__techAfterHit = function (A, targetNode, compName) {
  const T = window.offlineTech;
  if (!T || !targetNode || A.pvpWay !== 0 || A.type !== 5 || T.level(19) < 1) return;
  try {
    const tc = targetNode.getComponent(compName);
    if (tc) { tc.__slowUntil = Date.now() + 3000; tc.__slowPct = T.pct(19); }
  } catch (e) {}
};
// 敌方受凝滞时的攻移速乘率（星军 update 的 dt 乘区）。
window.__techEnemySlow = function (u) {
  const T = window.offlineTech;
  if (!T || !u || !u.__slowUntil || Date.now() >= u.__slowUntil) return 1;
  return 1 - (u.__slowPct || 0);
};
// 出手阶段（子弹挂点旁路）：25 强化冰雷（每5次攻击在目标区域 AoE + 冻结）。
window.__techOnShoot = function (A, sx, sy, tx, ty, dmg, isSky, crit) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 5) return;
  A.__iceN = (A.__iceN || 0) + 1;
  if (T.level(25) < 1 || A.__iceN % 5 !== 0) return;
  try {
    const side = __techSide();
    if (!side) return;
    for (const nd of side.list) {
      if (!nd || !nd.isValid) continue;
      const c = nd.getComponent ? nd.getComponent(side.comp) : null;
      if (!c || c.hp <= 0) continue;
      const dx = nd.x - tx, dy = nd.y - ty;
      if (dx * dx + dy * dy <= 160 * 160) {
        c.doHurt(dmg * T.pct(25));
        c.addEffect && c.addEffect("ice", 1.2);
      }
    }
  } catch (e) {}
};
// 24 坚毅：机器人被摧毁后原地继续攻击 n 秒。
window.__techArmyKeepAlive = function (A) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 7 || T.level(24) < 1) return false;
  if (!A.__fortitude) {
    A.__fortitude = 1;
    A.__fortitudeUntil = Date.now() + T.value(24, T.level(24)) * 1000;
    return true;
  }
  return Date.now() < A.__fortitudeUntil;
};
// 17 自爆：喷火兵死亡时对周围 150px 造成攻击 n% 伤害。
window.__techArmyDeath = function (A) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 3 || T.level(17) < 1) return;
  try {
    const side = __techSide();
    if (!side) return;
    for (const nd of side.list) {
      if (!nd || !nd.isValid) continue;
      const c = nd.getComponent ? nd.getComponent(side.comp) : null;
      if (!c || c.hp <= 0) continue;
      const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
      if (dx * dx + dy * dy <= 150 * 150) c.doHurt(A.attack * T.pct(17));
    }
    window.cc &&
      cc.director.getScene() &&
      window.__require('gameData').default.gameInstance.addEffect(
        "fire", 1, { x: A.node.x, y: A.node.y });
  } catch (e) {}
};
// 7 修复强化：修复技能附加免疫伤害 n 秒。
window.__techRepairSkill = function (scene) {
  const T = window.offlineTech;
  if (!T || T.level(7) < 1 || !scene || !scene.armyArray) return;
  const ms = T.value(7, T.level(7)) * 1000, now = Date.now();
  for (const nd of scene.armyArray) {
    if (!nd || !nd.isValid) continue;
    const c = nd.getComponent ? nd.getComponent('starArmy') : null;
    if (c && c.pvpWay === 0) c.__immuneUntil = now + ms;
  }
};
// 8 核能强化：核弹的 blood 伤害之外追加 n%（与 blood 同基数）。
window.__techNuke = function (E) {
  const T = window.offlineTech;
  if (!T || !E || T.level(8) < 1 || E.hp <= 0) return;
  E.doHurt(E.totalHp / (E.isBoss ? 4 : 3) * T.pct(8));
};
// 9 维修：基地受损后每农民每秒修复 n%。
window.__techSceneTick = function (scene, dt) {
  const T = window.offlineTech;
  if (!T || T.level(9) < 1 || !scene || !scene.buildingArray || !scene.armyArray) return;
  try {
    let base = null, farmers = 0;
    for (const nd of scene.buildingArray) {
      if (!nd || !nd.isValid) continue;
      const c = nd.getComponent ? nd.getComponent('building') : null;
      if (c && c.type === 1 && !c.isOver && c.hp > 0 && c.hp < c.totalHp) base = c;
    }
    if (!base) return;
    for (const nd of scene.armyArray) {
      if (!nd || !nd.isValid) continue;
      const c = nd.getComponent ? nd.getComponent('starArmy') : null;
      if (c && c.type === 1 && c.pvpWay === 0 && c.hp > 0) farmers++;
    }
    if (farmers > 0)
      base.hp = Math.min(base.totalHp, base.hp + base.totalHp * T.pct(9) * farmers * dt);
  } catch (e) {}
};
// 41 战时修复 / 42 震荡波：炮塔（建筑 type 5）死亡与复活钩子（建筑 update 帧调用）。
window.__techBuildingFrame = function (B) {
  const T = window.offlineTech;
  if (!T || B.pvpWay !== 0 || B.type !== 5) return;
  const now = Date.now();
  if (B.isOver) {
    const lv41 = T.level(41);
    if (lv41 > 0 && B.__reviveAt && !B.__revived && now >= B.__reviveAt) {
      B.__revived = 1;
      B.isOver = 0;
      B.hp = B.totalHp / 2;
      B.status = 1;
      B.imgIndex = 0;
    }
    return;
  }
  if (B.hp <= 0) {
    if (T.level(42) > 0 && !B.__shocked) {                 // 42 震荡波：200px AoE + 击退
      B.__shocked = 1;
      try {
        const side = __techSide();
        if (side) {
          for (const nd of side.list) {
            if (!nd || !nd.isValid) continue;
            const c = nd.getComponent ? nd.getComponent(side.comp) : null;
            if (!c || c.hp <= 0) continue;
            const dx = nd.x - B.node.x, dy = nd.y - B.node.y;
            const d2 = dx * dx + dy * dy;
            if (d2 <= 200 * 200) {
              c.doHurt(B.attack * T.pct(42));
              if (c.rigidBody && d2 > 1) {
                const d = Math.sqrt(d2);
                c.rigidBody.linearVelocity = window.cc.v2((dx / d) * 180, (dy / d) * 180);
              }
            }
          }
        }
      } catch (e) {}
    }
    const lv41 = T.level(41);
    if (lv41 > 0 && !B.__reviveAt)
      B.__reviveAt = now + T.value(41, lv41) * 1000;       // n 秒后恢复 50%
  }
};

// ===== iteration 2 扩展：精英农民、闪避、免疫、光环、地空导弹 =====
const __techOrigInit = window.__techArmyInit;
window.__techArmyInit = function (A) {
  const T = window.offlineTech;
  if (T && A.pvpWay === 0 && A.type === 1 && A.__eliteChecked === undefined) {
    A.__eliteChecked = 1;                                  // 6 精英培育：生产时一次性判定
    if (Math.random() < T.pct(6)) A.__elite = 1;
  }
  __techOrigInit(A);
  if (T && A.__elite) {
    A.totalHp *= 2;                                        // 精英农民：血量×2
    A.attack *= 3;                                         // 攻击×3
    A.hp = A.totalHp * (A.totalHp > 0 ? A.hp / A.totalHp : 1);
    try { A.node.getChildByName("node").color = window.cc.Color.YELLOW; } catch (e) {}
  }
};
const __techOrigHurt = window.__techReduceHurt;
window.__techReduceHurt = function (A, dmg, src) {
  const T = window.offlineTech;
  if (T && A.__immuneUntil && Date.now() < A.__immuneUntil) return 0;   // 7 修复强化免疫
  if (T && src && A.pvpWay === 0) {
    if (A.type === 5 && T.level(22) > 0 && Math.random() < T.pct(22)) return 0; // 22 机动闪避
    if (A.type === 8 && T.level(34) > 0) {                                              // 34 隐身躲避
      const air = src.isSky !== undefined ? src.isSky : 0;
      if (Math.random() < (air ? T.pct2(34) : T.pct(34))) return 0;
    }
  }
  return __techOrigHurt(A, dmg, src);
};
const __techOrigTick = window.__techTick;
window.__techTick = function (A, dt) {
  __techOrigTick(A, dt);
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0) return;
  if (T.level(18) > 0) {                                   // 18 群体医疗：200px 内人型单位
    A.__auraT = (A.__auraT || 0) + dt;
    if (A.__auraT >= 0.8) {
      A.__auraT = 0;
      try {
        const gi = window.__require('gameData').default.gameInstance;
        const now = Date.now();
        for (const nd of (gi ? gi.armyArray : []) || []) {
          if (!nd || !nd.isValid || nd === A.node) continue;
          const c = nd.getComponent ? nd.getComponent('starArmy') : null;
          if (!c || c.pvpWay !== 0 || [1, 2, 3, 4].indexOf(c.type) < 0) continue;
          if (c.hp <= 0 || c.hp >= c.totalHp) continue;
          const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
          if (dx * dx + dy * dy > 200 * 200) continue;
          if (now - (c.__auraStamp || 0) < 700) continue;  // 无法叠加
          c.__auraStamp = now;
          c.hp = Math.min(c.totalHp, c.hp + c.totalHp * T.pct(18) * 0.8);
        }
      } catch (e) {}
    }
  }
  if (A.type === 7 && T.level(27) > 0) {                   // 27 地空导弹：每秒对射程内一个空中单位
    A.__mslT = (A.__mslT || 0) + dt;
    if (A.__mslT >= 1) {
      A.__mslT = 0;
      try {
        const side = __techSide();
        if (side) {
          for (const nd of side.list) {
            if (!nd || !nd.isValid) continue;
            const c = nd.getComponent ? nd.getComponent(side.comp) : null;
            if (!c || !c.isSky || c.hp <= 0) continue;
            const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
            const rr = (A.range || 0) + 40;
            if (dx * dx + dy * dy <= rr * rr) {
              c.doHurt(A.attack * T.pct(27));
              break;
            }
          }
        }
      } catch (e) {}
    }
  }
};

// ===== 战略科技离线实装层（iteration 3：子系统类收尾）=====
const __techOrigTowerInit = window.__techTowerInit;
window.__techTowerInit = function (W) {
  __techOrigTowerInit(W);
  const T = window.offlineTech;
  if (!T) return;
  if (T.level(39) > 0) W.attack *= 1 - T.pct(39);        // 39 多重弹：攻击力-n%
  if (T.level(40) > 0) W.through += 1;                   // 40 穿甲弹：多贯穿一个目标
};
// 炮塔开火入口：39 同时发射两枚导弹（延迟 90ms 递归重发一次）。
window.__techTowerMulti = function (W, e, t) {
  const T = window.offlineTech;
  if (!T || T.level(39) < 1 || W.__multiGuard) return;
  W.__multiGuard = 1;
  W.scheduleOnce(() => {
    W.__multiGuard = 0;
    try { W.isValid && W.shootBullet(e, t); } catch (err) {}
  }, 0.09);
};
// 炮塔子弹标记（40 穿甲弹：首个目标全额，后续目标 n%）。
window.__techTowerBullet = function (W, r) {
  const T = window.offlineTech;
  if (!T || T.level(40) < 1) return;
  r.__towerPierce = 1;
};
window.__techPierceMul = function (b) {
  const T = window.offlineTech;
  if (!T || !b || !b.__towerPierce) return 1;
  const used = (b.hasHitMinionArray || []).filter(Boolean).length;
  return used > 0 ? T.pct(40) : 1;
};
// 21 双枪：机器人同时攻击目标+1（副目标补射）。
window.__techSplitShot = function (A, sx, sy, tx, ty, dmg, isSky, crit) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 7 || T.level(21) < 1 || !A.shootBullet) return;
  try {
    const side = __techSide();
    if (!side) return;
    let best = null, bestD = 1e12;
    for (const nd of side.list) {
      if (!nd || !nd.isValid) continue;
      if (Math.abs(nd.x - tx) < 10 && Math.abs(nd.y - ty) < 10) continue; // 主目标
      const c = nd.getComponent ? nd.getComponent(side.comp) : null;
      if (!c || c.hp <= 0) continue;
      const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
      if (dx * dx + dy * dy > (A.range + 30) * (A.range + 30)) continue;
      const d = dx * dx + dy * dy;
      if (d < bestD) { bestD = d; best = nd; }
    }
    if (best) {
      const c = best.getComponent(side.comp);
      A.shootBullet(sx, sy, best.x, best.y, dmg, c.isSky ? 1 : 0, crit);
    }
  } catch (err) {}
};
// 29 防护罩 / 32 辐射弹：科技球周期光环（帧钩子内调用）。
window.__techVesselTick = function (A, dt) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 9) return;
  if (T.level(29) > 0) {                                 // 每3秒随机强化周围一个友军 n% 防御，持续3秒
    A.__shieldT = (A.__shieldT || 0) + dt;
    if (A.__shieldT >= 3) {
      A.__shieldT = 0;
      try {
        const gi = window.__require('gameData').default.gameInstance;
        const pool = [];
        for (const nd of ((gi && gi.armyArray) || [])) {
          if (!nd || !nd.isValid || nd === A.node) continue;
          const c = nd.getComponent ? nd.getComponent('starArmy') : null;
          if (!c || c.pvpWay !== 0 || c.hp <= 0) continue;
          const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
          if (dx * dx + dy * dy <= 250 * 250) pool.push(c);
        }
        if (pool.length) {
          const pick = pool[Math.floor(Math.random() * pool.length)];
          pick.__shieldUntil = Date.now() + 3000;
          pick.__shieldPct = T.pct(29);
        }
      } catch (e) {}
    }
  }
  if (T.level(32) > 0) {                                 // 每5秒辐射弹：180px AoE，对小型×2
    A.__radT = (A.__radT || 0) + dt;
    if (A.__radT >= 5) {
      A.__radT = 0;
      try {
        const side = __techSide();
        if (side) {
          for (const nd of side.list) {
            if (!nd || !nd.isValid) continue;
            const c = nd.getComponent ? nd.getComponent(side.comp) : null;
            if (!c || c.hp <= 0) continue;
            const dx = nd.x - A.node.x, dy = nd.y - A.node.y;
            if (dx * dx + dy * dy <= 180 * 180)
              c.doHurt(A.attack * T.pct(32) * (c.size === 1 ? 2 : 1));
          }
        }
      } catch (e) {}
    }
  }
};
// 36 大和炮：第5次攻击发射，秒杀非boss、对boss造成 n% 最大血量伤害，每场每舰仅1次。
window.__techYamato = function (A, sx, sy, tx, ty, dmg, isSky, crit) {
  const T = window.offlineTech;
  if (!T || A.pvpWay !== 0 || A.type !== 10 || T.level(36) < 1) return;
  A.__yamatoN = (A.__yamatoN || 0) + 1;
  if (A.__yamatoN !== 5 || A.__yamatoUsed) return;
  A.__yamatoUsed = 1;
  try {
    const side = __techSide();
    if (!side) return;
    for (const nd of side.list) {
      if (!nd || !nd.isValid) continue;
      if (Math.abs(nd.x - tx) > 60 || Math.abs(nd.y - ty) > 60) continue;
      const c = nd.getComponent ? nd.getComponent(side.comp) : null;
      if (!c || c.hp <= 0) continue;
      c.doHurt(c.isBoss ? c.totalHp * T.pct(36) : 999999999);
      break;
    }
  } catch (e) {}
};

// ===== iteration 3 扩展：双枪减攻、EMP、防护罩减伤、科技球帧钩子接线 =====
const __techOrigInit3 = window.__techArmyInit;
window.__techArmyInit = function (A) {
  __techOrigInit3(A);
  const T = window.offlineTech;
  if (T && A.pvpWay === 0 && A.type === 7 && T.level(21) > 0)
    A.attack *= 1 - T.pct(21);                             // 21 双枪：攻击力-n%
};
const __techOrigAttack3 = window.__techAttack;
window.__techAttack = function (A, dmg, targetNode, compName) {
  dmg = __techOrigAttack3(A, dmg, targetNode, compName);
  const T = window.offlineTech;
  if (!T || !targetNode || A.pvpWay !== 0 || A.type !== 9) return dmg;
  try {
    const tc = targetNode.getComponent(compName);
    if (tc && tc.isBoss) {                                 // 35 EMP冲击：优先boss（伤害侧），削弱防御
      if (tc.__empUntil && Date.now() < tc.__empUntil) dmg *= 1 + T.pct(35);
      tc.__empUntil = Date.now() + 4000;
      tc.__empPct = T.pct(35);
    }
  } catch (e) {}
  return dmg;
};
const __techOrigHurt3 = window.__techReduceHurt;
window.__techReduceHurt = function (A, dmg, src) {
  const T = window.offlineTech;
  if (T && A.__shieldUntil && Date.now() < A.__shieldUntil)   // 29 防护罩
    dmg *= 1 - (A.__shieldPct || 0);
  return __techOrigHurt3(A, dmg, src);
};
const __techOrigTick3 = window.__techTick;
window.__techTick = function (A, dt) {
  __techOrigTick3(A, dt);
  window.__techVesselTick && window.__techVesselTick(A, dt);
};
