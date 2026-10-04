/* Planetary fortress: permanent local progression and native Cocos UI.
 * No network, no new unit type, no in-battle choice. */
window.offlineFortress = (() => {
  const MAX_LEVEL = 10,
    UNLOCK_COST = 20,
    CHANCE = 0.2,
    SHARDS_PER_HIT = 2;
  let framesPromise;
  const player = () => __require("playerData").default;
  const game = () => __require("gameData").default;
  function state(p = player()) {
    p.b_misc ||= {};
    return (p.b_misc.offlineFortress ||= { level: 0, shards: 0 });
  }
  function cost(level = state().level) {
    return level === 0
      ? UNLOCK_COST
      : level >= MAX_LEVEL
        ? 0
        : 10 + 5 * (level - 1);
  }
  function upgrade() {
    const p = player(),
      s = state(p),
      price = cost(s.level);
    if (!price || s.shards < price) return false;
    s.shards -= price;
    s.level++;
    p.saveData();
    return true;
  }
  function roll(count, random = Math.random) {
    if (!Number.isInteger(count) || count < 1 || count > 10)
      throw new Error("Invalid fortress draw count");
    let reward = 0;
    for (let i = 0; i < count; i++)
      if (random() < CHANCE) reward += SHARDS_PER_HIT;
    state().shards += reward;
    player().saveData();
    return reward;
  }
  function stats(level = state().level, mode = game().gameMode) {
    const b = __require("building").BuildingConfig[0],
      tank = __require("starArmy").ArmyConfig[5];
    const factor = Math.pow(mode === 1 ? 1.04 : 1.08, Math.max(0, level - 1));
    return {
      hp:
        b.hp *
        1.6 *
        Math.pow(mode === 1 ? 1.075 : 1.15, player().buildingLevelArray[0]) *
        2 *
        factor,
      attack: 2 * tank.attack * factor,
      range: b.range,
      cdTime: b.cdTime,
    };
  }
  function frames() {
    if (!framesPromise)
      framesPromise = Promise.all(
        ["idle", "fire"].map(
          (name) =>
            new Promise((resolve, reject) => {
              cc.assetManager.loadRemote(
                "fortress/" + name + ".png",
                { ext: ".png" },
                (err, texture) => {
                  if (err) {
                    reject(err);
                    return;
                  }
                  resolve({
                    battle: new cc.SpriteFrame(texture),
                    icon: new cc.SpriteFrame(
                      texture,
                      cc.rect(20, 55, 310, 310),
                    ),
                  });
                },
              );
            }),
        ),
      ).catch((err) => {
        framesPromise = null;
        throw err;
      });
    return framesPromise;
  }
  function apply(b) {
    if (b.type !== 1 || b.pvpWay !== 0 || state().level === 0) return false;
    b._fortress = true;
    const value = stats(),
      choice = game().gameInstance?.buildingChoice;
    b.totalHp = value.hp * (choice?.hpBuffer || 1);
    b.hp = b.totalHp;
    b.attack = value.attack * (choice?.attackBuffer || 1);
    b.range = value.range;
    b.cdTime = value.cdTime;
    if (!b._fortressArtRequested) {
      b._fortressArtRequested = true;
      frames()
        .then((images) => {
          if (!cc.isValid(b.node)) return;
          for (const key of [
            "standImgArray",
            "workImgArray",
            "createImgArray",
            "brokenImgArray",
          ]) {
            b[key] = Array(Math.max(1, b[key].length)).fill(images[0].battle);
          }
          b.attackImgArray = [
            images[1].battle,
            images[1].battle,
            images[0].battle,
          ];
          b.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame =
            images[0].battle;
          b._fortressArtReady = true;
        })
        .catch(() => {
          b._fortressArtRequested = false;
        });
    }
    return true;
  }
  // Graphics and labels are Cocos nodes: scale/clipping follow the game's canvas.
  const C = {
    bg: "#0c182c",
    panel: "#152b45",
    cyan: "#55e8f2",
    muted: "#a8bdcf",
    gold: "#ffe773",
    white: "#f2f9ff",
  };
  function box(
    parent,
    name,
    x,
    y,
    width,
    height,
    fill = C.panel,
    stroke = C.cyan,
  ) {
    const node = new cc.Node(name);
    parent.addChild(node);
    node.setPosition(x, y);
    node.setContentSize(width, height);
    const g = node.addComponent(cc.Graphics);
    g.fillColor = cc.Color.fromHEX(new cc.Color(), fill);
    g.strokeColor = cc.Color.fromHEX(new cc.Color(), stroke);
    g.lineWidth = 2;
    const w = width / 2,
      h = height / 2,
      k = 12;
    g.moveTo(-w + k, -h);
    g.lineTo(w - k, -h);
    g.lineTo(w, -h + k);
    g.lineTo(w, h - k);
    g.lineTo(w - k, h);
    g.lineTo(-w + k, h);
    g.lineTo(-w, h - k);
    g.lineTo(-w, -h + k);
    g.close();
    g.fill();
    g.stroke();
    return node;
  }
  function label(
    parent,
    name,
    text,
    x,
    y,
    size = 24,
    width = 500,
    color = C.white,
  ) {
    const node = new cc.Node(name);
    parent.addChild(node);
    node.setPosition(x, y);
    node.setContentSize(width, size * 1.5);
    node.color = cc.Color.fromHEX(new cc.Color(), color);
    const l = node.addComponent(cc.Label);
    l.string = text;
    l.fontSize = size;
    l.lineHeight = size + 8;
    l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    l.verticalAlign = cc.Label.VerticalAlign.CENTER;
    l.overflow = cc.Label.Overflow.SHRINK;
    node.setContentSize(width, size * 1.5);
    return l;
  }
  function button(parent, name, text, x, y, width, action) {
    const n = box(parent, name, x, y, width, 56, "#19384c", C.gold);
    label(n, "text", text, 0, 0, 23, width - 18, C.gold);
    const b = n.addComponent(cc.Button);
    b.transition = cc.Button.Transition.SCALE;
    b.zoomScale = 0.96;
    n.on("click", () => {
      __require("audioMgr").default.inst.playAudio("starcraft/click");
      action();
    });
    return n;
  }
  function icon(parent, x, y, size) {
    const n = new cc.Node("fortressImage");
    parent.addChild(n);
    n.setPosition(x, y);
    n.setContentSize(size, size);
    const sp = n.addComponent(cc.Sprite);
    sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    frames()
      .then((f) => {
        if (cc.isValid(n)) sp.spriteFrame = f[0].icon;
      })
      .catch(() => {});
    return n;
  }
  function attach(scene) {
    if (!cc.isValid(scene.node)) return;
    const page4 = scene.pageLayer.getChildByName("page4");
    const content = page4
      .getChildByName("scrollView")
      .getChildByName("view")
      .getChildByName("content");
    if (!content.getChildByName("fortressEntry")) {
      const row = box(content, "fortressEntry", 0, -290, 590, 96);
      row.setSiblingIndex(1);
      icon(row, -238, 0, 92);
      label(row, "name", "行星要塞", -55, 22, 26, 240, C.cyan);
      label(row, "progress", "", -55, -17, 20, 270, C.muted);
      button(row, "open", "解锁 / 强化", 186, 0, 174, () => open(scene));
      for (const n of content.children)
        if (/^window[2-5]$/.test(n.name)) n.y -= 112;
      content.height += 112;
    }
    refreshEntry(scene);
    // Shop notice beside the existing chest area, not an HTML overlay.
    const shop = scene.pageLayer
      .getChildByName("page1")
      .getChildByName("scrollView")
      .getChildByName("view")
      .getChildByName("content");
    if (!shop.getChildByName("fortressOdds")) {
      for (const n of shop.children) n.y -= 76;
      shop.height += 76;
      button(
        shop,
        "fortressOdds",
        "要塞碎片 · 每抽20%额外获得2片",
        0,
        -36,
        548,
        () => open(scene),
      );
    }
    frames().catch(() => scene.popTips("要塞图片加载失败，请刷新重试"));
  }
  function refreshEntry(scene) {
    const content = scene.pageLayer
      .getChildByName("page4")
      .getChildByName("scrollView")
      .getChildByName("view")
      .getChildByName("content");
    const row = content.getChildByName("fortressEntry");
    if (!row) return;
    const s = state();
    row.getChildByName("progress").getComponent(cc.Label).string =
      (s.level ? "Lv." + s.level + " · " : "未解锁 · ") +
      "碎片 " +
      s.shards +
      (cost() ? " / " + cost() : "");
    row
      .getChildByName("open")
      .getChildByName("text")
      .getComponent(cc.Label).string =
      s.level >= MAX_LEVEL ? "查看要塞" : s.level ? "强化要塞" : "解锁要塞";
  }
  function open(scene) {
    const old = scene.uiLayer.getChildByName("fortressModal");
    if (old) {
      old.destroy();
    }
    const overlay = new cc.Node("fortressModal");
    scene.uiLayer.addChild(overlay);
    overlay.zIndex = 999;
    const canvas = cc.find("Canvas"),
      w = Math.max(640, canvas.width),
      h = Math.max(1500, canvas.height);
    overlay.setContentSize(w, h);
    overlay.addComponent(cc.BlockInputEvents);
    const shade = overlay.addComponent(cc.Graphics);
    shade.fillColor = new cc.Color(0, 0, 0, 210);
    shade.rect(-w / 2, -h / 2, w, h);
    shade.fill();
    const panel = box(overlay, "panel", 0, 0, 584, 920, C.bg);
    label(panel, "title", "行星要塞", 0, 399, 38, 420, C.cyan);
    label(
      panel,
      "subtitle",
      "永久拥有 · 自动出战 · 保留农民生产",
      0,
      350,
      21,
      540,
      C.muted,
    );
    icon(panel, 0, 191, 240);
    const s = state(),
      level = s.level || 1,
      now = stats(level, 0),
      next = stats(Math.min(level + 1, MAX_LEVEL), 0);
    label(
      panel,
      "level",
      s.level
        ? "FORTRESS   /   Lv." +
            s.level +
            "  →  " +
            (s.level < MAX_LEVEL ? "Lv." + (s.level + 1) : "MAX")
        : "FORTRESS   /   待解锁",
      0,
      58,
      25,
      520,
      C.gold,
    );
    const detail = s.level && s.level < MAX_LEVEL;
    const rows = [
      ["生命", Math.floor(now.hp), Math.floor(next.hp)],
      ["伤害", Math.floor(now.attack), Math.floor(next.attack)],
    ];
    rows.forEach((r, i) => {
      box(panel, "stat" + i, 0, -6 - i * 58, 514, 48, "#142c43", "#35526b");
      label(panel, "statName" + i, r[0], -195, -6 - i * 58, 23, 100, C.muted);
      label(
        panel,
        "statValue" + i,
        String(r[1]) + (detail ? "  →  " + r[2] : ""),
        73,
        -6 - i * 58,
        25,
        320,
        C.white,
      );
    });
    label(
      panel,
      "combat",
      "对空 / 对地   ·   坦克范围伤害   ·   射程 " + now.range,
      0,
      -126,
      21,
      530,
      C.cyan,
    );
    label(
      panel,
      "curve",
      "伤害等于同级双坦克 · 关卡每级成长8%",
      0,
      -166,
      20,
      530,
      C.muted,
    );
    label(
      panel,
      "arena",
      "竞技场不攻击 · 保留生命强化与农民生产",
      0,
      -202,
      19,
      530,
      C.muted,
    );
    label(
      panel,
      "shards",
      "要塞碎片  " + s.shards + (cost() ? " / " + cost() : "  · 已满级"),
      0,
      -255,
      27,
      520,
      C.gold,
    );
    label(
      panel,
      "source",
      "抽奖每抽独立20%额外获得2片 · 十连判定10次",
      0,
      -297,
      19,
      540,
      C.muted,
    );
    const text =
      s.level >= MAX_LEVEL
        ? "已达最高等级"
        : (s.level ? "强化" : "永久解锁") + " · " + cost() + "碎片";
    const action = button(panel, "upgrade", text, 0, -355, 350, () => {
      if (upgrade()) {
        refreshEntry(scene);
        open(scene);
        scene.popTips(
          state().level === 1 ? "行星要塞已永久解锁" : "要塞强化成功",
        );
      } else
        scene.popTips(
          state().level >= MAX_LEVEL
            ? "要塞已满级"
            : "要塞碎片不足，可通过抽奖获取",
        );
    });
    action.getComponent(cc.Button).interactable = s.level < MAX_LEVEL;
    button(panel, "close", "返回", 0, -422, 150, () => overlay.destroy());
  }
  function showLoot(scene, count) {
    const popup = scene.uiLayer
      .getChildByName("popUI")
      .getChildByName("getItem");
    let text = popup.getChildByName("fortressLoot")?.getComponent(cc.Label);
    if (!text) text = label(popup, "fortressLoot", "", 0, -5, 20, 540, C.gold);
    text.string = count > 0 ? "额外获得：要塞碎片 ×" + count : "";
    refreshEntry(scene);
  }
  return {
    state,
    cost,
    upgrade,
    roll,
    stats,
    frames,
    apply,
    attach,
    refreshEntry,
    open,
    showLoot,
    MAX_LEVEL,
  };
})();
