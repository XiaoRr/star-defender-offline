window.offlineBattleRules = {
  globalArmyBuffer(kind) {
    try {
      const scene=__require('gameData').default.gameInstance, choices=scene&&scene.armyChoice;
      return choices&&typeof choices.getArmyBuffer==='function' ? Number(choices.getArmyBuffer(0,kind))||0 : 0;
    } catch (_) { return 0; }
  },
  buildingCrit() {
    const rate=this.globalArmyBuffer('strike');
    const multiplier=2+this.globalArmyBuffer('strikehurt');
    const critical=Math.random()<rate;
    return {critical,multiplier};
  },
  normalizeChoiceText(scene) {
    const panel=scene.uiNode.getChildByName('armyChoice');
    for(const name of ['choice1','choice2','choice3']){
      const label=panel?.getChildByName(name)?.getChildByName('text')?.getComponent(cc.Label);
      if(label)label.string=label.string.replace(/全体兵种/g,'全体');
    }
  },
  clamp(value) { return Math.max(0,Math.min(3,Math.floor(Number(value)||0))); },
  day() { const d=new Date(); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); },
  claimed(player) {
    const day=this.day(), key="star-defender-ad-daily-claim";
    const saved=localStorage.getItem(key);
    if(player.b_misc && player.b_misc.offlineAdDailyClaim===day){
      if(saved!==day)localStorage.setItem(key,day);
      return true;
    }
    return saved===day;
  },
  rarityMix(choices) {
    return choices.map((choice,index)=>[choice[0],choice[1],[2,1,0][index]]);
  },
  syncDaily(player,data) { player.dailyArray[3]=this.claimed(player)?0:data.dailyNeed[3]; },
  claimDaily(player,data) {
    if(this.claimed(player))return false;
    localStorage.setItem("star-defender-ad-daily-claim",this.day());
    player.b_misc=player.b_misc||{};
    player.b_misc.offlineAdDailyClaim=this.day();
    this.syncDaily(player,data);player.saveData();return true;
  },
  dailyUI(scene,player) {
    if(!this.claimed(player))return;
    const row=scene.uiLayer.getChildByName("popUI").getChildByName("daily").getChildByName("bg").getChildByName("banner4");
    row.getChildByName("button1").active=false;row.getChildByName("button2").active=false;
    const progress=row.getChildByName("probg");
    progress.getChildByName("text").getComponent(cc.Label).string="已领取";
    progress.getChildByName("pro1").active=false;
    progress.getChildByName("pro2").active=true;progress.getChildByName("pro2").width=180;
  },
  refresh(scene) {
    const left=3-this.clamp(scene._refreshUsed);
    for(const kind of ["army","building"]){
      const panel=scene.uiNode.getChildByName(kind+"Choice");if(!panel)continue;
      const button=panel.getChildByName("refreshButton");if(!button)continue;
      const ad=button.getChildByName("ad");if(ad)ad.active=false;
      const text=button.getChildByName("text");if(text){text.x=0;text.getComponent(cc.Label).string="刷新"+left+"/3";}
      const component=button.getComponent(cc.Button);if(component)component.interactable=left>0;
      button.opacity=left>0?255:130;
    }
  },
  reroll(scene,kind,pvp) {
    const panel=scene.uiNode.getChildByName(kind+"Choice");
    if(!panel || !panel.activeInHierarchy || !panel.getChildByName("refreshButton").activeInHierarchy || scene._refreshBusy || this.clamp(scene._refreshUsed)>=3)return;
    scene._refreshBusy=true;
    try {
      scene._refreshUsed=this.clamp(scene._refreshUsed)+1;
      if(kind==="army")scene.refreshArmyChoice(true);
      else {if(pvp)scene.hasBuildingChoice=false;scene.refreshBuildingChoice();}
      this.refresh(scene);
      if(!pvp)scene.saveBattle();
    } finally {scene._refreshBusy=false;}
  }
};
