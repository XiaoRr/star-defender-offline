/* Native battle building sale. Loaded before the Cocos bundle; dependencies are lazy. */
window.offlineBuildingSale = (() => {
  const REFUND = 100;
  const game = () => __require("gameData").default;
  const choiceConfigs = () => __require("buildingChoice").BuildingChoiceArray;
  const soldTypes = choice => choice.soldBuildingTypes || (choice.soldBuildingTypes = []);

  function canSell(scene, building) {
    return !!(scene && scene.isBattle && building && !building._sold &&
      cc.isValid(building.node) && building.node.active && !building.isOver &&
      building.hp > 0 && building.pvpWay === 0 && !building._fortress &&
      building.type >= 2 && building.type <= 5 &&
      scene.buildingArray.includes(building.node));
  }

  function sell(scene, building) {
    if (!canSell(scene, building)) return false;
    // Mark first: repeated clicks and already queued resource callbacks cannot produce/refund twice.
    building._sold = true;
    building.isOver = true;
    building.productArray.length = 0;
    building.unscheduleAllCallbacks();
    building.enabled = false;
    building.node.active = false;
    building.node.stopAllActions();
    scene.buildingArray.splice(scene.buildingArray.indexOf(building.node), 1);
    const choice = scene.buildingChoice;
    const constructionId = building.type - 1;
    const purchaseIndex = choice.choiceArray.indexOf(constructionId);
    if (purchaseIndex >= 0) choice.choiceArray.splice(purchaseIndex, 1);
    if (!soldTypes(choice).includes(building.type)) soldTypes(choice).push(building.type);
    scene.money += REFUND;
    // PvP caches its offer until purchase; selling changes eligibility and must invalidate it.
    scene.hasBuildingChoice = false;
    const offerPanel = scene.uiNode && scene.uiNode.getChildByName("buildingChoice");
    if (offerPanel) offerPanel.active = false;
    building.node.removeFromParent(true);
    building.node.destroy();
    return true;
  }

  function getChoiceGroups(choice, configs = choiceConfigs(), data = game()) {
    const primary = [], fallback = [24, 25, 26];
    const history = choice.choiceArray;
    const sold = soldTypes(choice);
    let constructionCount = 0;
    for (const config of configs) {
      const {id, condition, buildingType} = config;
      if (id >= 24) continue;
      let limit = config.limit;
      const giftType = id >= 6 && id <= 8 ? 3 : id >= 15 && id <= 17 ? 4 :
        id >= 9 && id <= 11 ? 5 : id >= 18 && id <= 20 ? 6 :
        id >= 12 && id <= 14 ? 7 : id >= 21 && id <= 23 ? 8 : 0;
      if (giftType) limit += data.getLevelGiftValueWithType(giftType, choice.pvpWay);
      if (data.gameMode === 0 && config.level > data.nowLevel) continue;
      const prerequisite = condition > 5 ? configs[condition - 1].condition : condition;
      if (data.gameMode === 1 && (choice.overBuildingArray.includes(condition) ||
        (condition > 5 && choice.overBuildingArray.includes(prerequisite)))) continue;
      // A sold prerequisite building still unlocks the next construction tier.
      const unlocked = condition === 0 || history.includes(condition) ||
        (id < 5 && sold.includes(condition + 1));
      if (!unlocked || history.filter(purchase => purchase === id).length >= limit) continue;
      // Retain upgrades in history, but do not offer upgrades for an absent sold building.
      if (id >= 5 && sold.includes(buildingType) && !history.includes(buildingType - 1)) continue;
      if (id < 5 && sold.includes(buildingType)) {
        fallback.push(id);
      } else {
        if (id < 5 && constructionCount++ >= 2) continue;
        primary.push(id);
      }
    }
    return {primary, fallback};
  }

  function getChoice(choice) {
    const {primary, fallback} = getChoiceGroups(choice);
    const result = [];
    const draw = pool => pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    if (primary.length <= 3) result.push(...primary);
    else while (result.length < 3) result.push(draw(primary));
    while (result.length < 3 && fallback.length) result.push(draw(fallback));
    return result;
  }

  function prepareBuilding(scene, building) {
    const choice = scene.buildingChoice;
    const continuing = game().gameMode === 0 && __require("gameScene").default.isContinue;
    if (soldTypes(choice).includes(building.type) && !continuing) {
      // Restore only this new building; replaying doChoice would upgrade other buildings twice.
      const quantity = {6:2, 7:2, 8:2, 9:2, 10:1, 11:2, 12:2, 13:2, 14:1};
      for (const id of choice.choiceArray) {
        const config = choiceConfigs()[id - 1];
        if (!config || config.buildingType !== building.type) continue;
        if (quantity[id]) building.addBuildingArmyNum(config.armyType, quantity[id]);
        if (id >= 15 && id <= 23 && game().gameMode === 1)
          building.changeBuildingArmyCDTime(config.armyType, 0.7);
      }
      building.totalHp *= choice.hpBuffer;
      building.hp = building.totalHp;
      building.attack *= choice.attackBuffer;
      if (game().gameMode === 0) building.resetCD();
    }
    attachBattleInput(scene);
  }

  function attachBattleInput(scene) {
    if (scene._saleTapAttached) return;
    scene._saleTapAttached = true;
    // The existing full-screen Canvas consumes world touches. Pick buildings from
    // the Canvas event using the visible sprite bounds, rather than adding a UI hitbox.
    scene.node.on(cc.Node.EventType.TOUCH_END, event => {
      if (scene.isPause || !scene.isBattle || scene._buildingSaleModal) return;
      for (let target = event.target; target && target !== scene.node; target = target.parent) {
        if (target === scene.uiNode || target.name === "help" || target.name === "loading") return;
      }
      const point = event.getLocation();
      const start = event.getStartLocation();
      if (Math.hypot(point.x - start.x, point.y - start.y) > 12) return;
      const candidates = scene.buildingArray.slice().sort((left, right) => right.zIndex - left.zIndex);
      for (const node of candidates) {
        const candidate = node.getComponent("building");
        const sprite = node.getChildByName("node") || node;
        if (canSell(scene, candidate) && sprite.getBoundingBoxToWorld().contains(point)) {
          event.stopPropagation();
          open(scene, candidate);
          return;
        }
      }
    }, scene, true);
  }

  const color = hex => cc.Color.fromHEX(new cc.Color(), hex);
  function panel(parent, name, x, y, width, height, fill, stroke) {
    const node = new cc.Node(name);
    parent.addChild(node);
    node.setPosition(x, y);
    node.setContentSize(width, height);
    const pen = node.addComponent(cc.Graphics);
    pen.fillColor = color(fill);
    pen.strokeColor = color(stroke);
    pen.lineWidth = 3;
    const w = width / 2, h = height / 2, cut = 14;
    pen.moveTo(-w + cut, -h); pen.lineTo(w - cut, -h);
    pen.lineTo(w, -h + cut); pen.lineTo(w, h - cut);
    pen.lineTo(w - cut, h); pen.lineTo(-w + cut, h);
    pen.lineTo(-w, h - cut); pen.lineTo(-w, -h + cut);
    pen.close(); pen.fill(); pen.stroke();
    return node;
  }
  function label(parent, name, text, x, y, size, tint = "#dcebf5", width = 440) {
    const node = new cc.Node(name);
    parent.addChild(node); node.setPosition(x, y);
    node.color = color(tint);
    const textLabel = node.addComponent(cc.Label);
    textLabel.string = text; textLabel.fontSize = size; textLabel.lineHeight = size + 8;
    textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
    textLabel.overflow = cc.Label.Overflow.SHRINK;
    node.setContentSize(width, size * 1.6);
    return node;
  }
  function button(parent, name, text, x, action, tint) {
    const node = panel(parent, name, x, -194, 208, 66, "#193445", tint);
    label(node, "text", text, 0, 0, 26, tint, 184);
    const control = node.addComponent(cc.Button);
    control.transition = cc.Button.Transition.SCALE; control.zoomScale = 0.96;
    node.on("click", action);
  }
  function open(scene, building) {
    if (scene.isPause || scene._buildingSaleModal || !canSell(scene, building)) return;
    const modal = new cc.Node("buildingSaleModal");
    scene.uiNode.addChild(modal); modal.zIndex = 10000;
    scene._buildingSaleModal = modal;
    const size = cc.view.getVisibleSize();
    modal.setContentSize(size.width, size.height);
    modal.addComponent(cc.BlockInputEvents);
    const shade = modal.addComponent(cc.Graphics);
    shade.fillColor = new cc.Color(0, 5, 12, 210);
    shade.rect(-size.width / 2, -size.height / 2, size.width, size.height); shade.fill();
    const card = panel(modal, "saleCard", 0, 0, 520, 524, "#101f31", "#6790ac");
    card.scale = Math.min(1, (size.width - 36) / 520, (size.height - 36) / 524);
    panel(card, "header", 0, 204, 484, 66, "#233b51", "#466984");
    label(card, "title", "出售建筑", 0, 204, 32, "#f7d276");
    label(card, "name", __require("building").BuildingConfig[building.type - 1].name, 0, 141, 28);
    const icon = new cc.Node("buildingIcon"); card.addChild(icon); icon.setPosition(0, 67);
    const sprite = icon.addComponent(cc.Sprite);
    sprite.spriteFrame = scene.buildingImgArray[building.type - 1] || building.standImgArray[0];
    sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM; icon.setContentSize(96, 96);
    panel(card, "refund", 0, -17, 432, 60, "#0c293a", "#38a7bc");
    label(card, "refundText", "+100 晶矿", 0, -17, 32, "#40e5f0");
    label(card, "stopProduction", "出售后立即停止生产", 0, -76, 23, "#f7d276");
    label(card, "upgradeNotice", "不退升级费用 · 已有部队与升级保留", 0, -115, 20, "#aabccd");
    let closed = false;
    const close = () => {
      if (closed) return; closed = true;
      modal.active = false; modal.destroy(); scene._buildingSaleModal = null;
      if (scene.isBattle) scene.isPause = false;
    };
    button(card, "cancelSale", "取消", -116, close, "#aabccd");
    button(card, "confirmSale", "确认出售", 116, () => {
      if (closed) return;
      sell(scene, building); close();
    }, "#f7d276");
    scene.isPause = true; scene.setPause();
  }
  return {REFUND, canSell, sell, getChoiceGroups, getChoice, prepareBuilding, open};
})();
