// Store the claim before opening the reward UI, which grants items asynchronously.
window.offlineDaily = {
  day() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  },
  claimed(player) {
    const day = this.day();
    const key = "star-defender-ad-daily-claim";
    if (player.b_misc?.offlineAdDailyClaim === day) {
      localStorage.setItem(key, day);
      return true;
    }
    return localStorage.getItem(key) === day;
  },
  sync(player, data) {
    player.dailyArray[3] = this.claimed(player) ? 0 : data.dailyNeed[3];
  },
  claim(player, data) {
    if (this.claimed(player)) return false;
    localStorage.setItem("star-defender-ad-daily-claim", this.day());
    player.b_misc ||= {};
    player.b_misc.offlineAdDailyClaim = this.day();
    this.sync(player, data);
    player.saveData();
    return true;
  },
  refreshUI(scene, player) {
    if (!this.claimed(player)) return;
    const row = scene.uiLayer.getChildByName("popUI").getChildByName("daily")
      .getChildByName("bg").getChildByName("banner4");
    row.getChildByName("button1").active = false;
    row.getChildByName("button2").active = false;
    const progress = row.getChildByName("probg");
    progress.getChildByName("text").getComponent(cc.Label).string = "已领取";
    progress.getChildByName("pro1").active = false;
    progress.getChildByName("pro2").active = true;
    progress.getChildByName("pro2").width = 180;
  }
};
