window.offlineSweep = (() => {
  let toast, timer;
  function show(rewards) {
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sweep-reward';
      toast.setAttribute('role', 'status');
      toast.style.cssText = 'position:fixed;top:22%;left:50%;transform:translateX(-50%);max-width:80vw;padding:12px 20px;border-radius:10px;background:rgba(8,18,32,.9);color:white;text-align:center;font:16px sans-serif;z-index:10000;pointer-events:none;white-space:pre-line';
      document.body.appendChild(toast);
    }
    const items = __require('itemData').default;
    toast.textContent = '扫荡完成\n' + rewards.map(([id, count]) => `${items.getItemNameWithType(id)} ×${count}`).join('  ');
    toast.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(() => { toast.style.display = 'none'; }, 1600);
  }
  function run(scene) {
    const player = __require('playerData').default;
    const stages = __require('stageData').default;
    const data = __require('gameData').default;
    __require('audioMgr').default.inst.playAudio('starcraft/click');
    player.getDataRem();
    const level = stages.GetStar3Level();
    if (level < 1) { scene.popTips('三星通关后可扫荡'); return false; }
    if (player.getItemNum(4) < 6) { scene.popTips('所需能量不够了'); return false; }
    const slot = player.freeTimeArray[5] > 0 ? 5 : player.freeTimeArray[6] > 0 ? 6 : -1;
    if (slot < 0) { scene.popTips('扫荡次数已用完，整点刷新'); return false; }
    const rewards = stages.GetLevelReward(level, 0, false).filter(([id]) => id <= 10000).map(([id, count]) => [
      id === 5 ? data.getArmyTypeFlag() + 200 : id === 6 ? data.getBuildingTypeFlag() + 100 : id, count
    ]);
    // Commit every click synchronously; replacing the notification cannot cancel rewards.
    player.freeTimeArray[slot]--;
    player.subItem(4, 6);
    player.dailyArray[0]++;
    for (const [id, count] of rewards) player.addItem(id, count);
    player.saveDataRem();
    player.saveData();
    scene.refreshAll();
    show(rewards);
    return true;
  }
  return { run };
})();
