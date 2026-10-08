window.offlineAllChoice = {
  refresh(scene) {
    const panel=scene.uiNode.getChildByName("armyChoice"), button=panel.getChildByName("allButton");
    const left=Math.max(0,3-(scene._allChoiceUsed||0));
    button.active=true;
    const ad=button.getChildByName("ad");if(ad)ad.active=false;
    const text=button.getChildByName("text");
    if(text){text.x=0;const label=text.getComponent(cc.Label);if(label)label.string="全都要"+left+"/3";}
    const component=button.getComponent(cc.Button);if(component)component.interactable=left>0;
    button.opacity=left>0?255:130;
  }
};
