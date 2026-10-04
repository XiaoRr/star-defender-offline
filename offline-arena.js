// Local arena provider. No fetch, XHR, account credentials or player records.
// Future providers must implement match(rank), begin(player), settle(player, code).
(() => {
  const thresholds = [
    10, 20, 30, 40, 60, 80, 100, 140, 180, 220, 280, 340, 400, 460, 550, 650,
    750, 1000,
  ];
  const clone = (value) => JSON.parse(JSON.stringify(value));
  function state(player) {
    player.b_misc ||= {};
    return (player.b_misc.offlineArena ||= {
      version: 1,
      rank: 1,
      score: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      matches: 0,
    });
  }
  function restore(player) {
    const s = state(player);
    player.jx = Math.max(1, Math.min(18, Math.floor(Number(s.rank) || 1)));
    player.arenaScore = Math.max(
      0,
      Math.min(thresholds[player.jx - 1], Number(s.score) || 0),
    );
  }
  function persist(player) {
    const s = state(player);
    s.rank = player.jx;
    s.score = player.arenaScore;
  }
  function generate(rank, random = Math.random) {
    const config = window.__OFFLINE_ARENA_BOTS;
    const pool = config.ranks[String(rank)];
    if (!Number.isInteger(rank) || rank < 1 || rank > 18 || !pool?.length)
      throw new Error("Missing local robot rank: " + rank);
    const pick = (items) =>
      items[
        Math.min(
          items.length - 1,
          Math.max(0, Math.floor(random() * items.length)),
        )
      ];
    const rule = config.generator?.ranks[String(rank)];
    if (rank === 1 || !rule?.levels?.length || !rule?.traits?.length)
      return clone(pick(pool));
    // Two empirically sampled bundles; do not invent new unit IDs or mix ranks.
    // Cross-bundle independence approximates the unavailable server generator.
    const levels = pick(rule.levels),
      traits = pick(rule.traits);
    return clone({ ...levels, ...traits });
  }
  const local = {
    match(rank) {
      try {
        return Promise.resolve({ err: 0, opponent: generate(rank) });
      } catch (error) {
        return Promise.reject(error);
      }
    },
    begin(player) {
      if (player.getItemNum(9) < 1) return false;
      const s = state(player);
      player.subItem(9, 1);
      s.matches++;
      s.active = { id: s.matches, result: null, bonus: false };
      persist(player);
      player.saveDataRem();
      player.saveData();
      return true;
    },
    settle(player, code) {
      const s = state(player),
        active = s.active;
      let gain = 0,
        up = 0;
      if (!active)
        return Promise.resolve({
          err: 1,
          arenaScore: player.arenaScore,
          jx: player.jx,
          up: 0,
        });
      if ([0, 1, 4].includes(code) && active.result === null) {
        active.result = code;
        if (code === 1) {
          gain = 10;
          s.wins++;
        }
        if (code === 0) s.losses++;
        if (code === 4) {
          gain = 3;
          s.draws++;
        }
      } else if (
        !active.bonus &&
        ((code === 2 && active.result === 1) ||
          (code === 3 && active.result === 0) ||
          (code === 5 && active.result === 4))
      ) {
        active.bonus = true;
        gain = code === 2 ? 10 : code === 5 ? 3 : 0;
      }
      player.arenaScore += gain;
      while (player.jx < 18 && player.arenaScore >= thresholds[player.jx - 1]) {
        player.arenaScore -= thresholds[player.jx - 1];
        player.jx++;
        up++;
      }
      player.arenaScore = Math.min(
        player.arenaScore,
        thresholds[player.jx - 1],
      );
      persist(player);
      player.saveData();
      return Promise.resolve({
        err: 0,
        arenaScore: player.arenaScore,
        jx: player.jx,
        up,
        gain,
      });
    },
  };
  // Explicit extension point. Enabling a real provider also requires UI, protocol,
  // authentication and CSP changes; this placeholder performs no network request.
  const online = Object.freeze({
    available: false,
    match() {
      return Promise.reject(new Error("联机对战未开放"));
    },
  });
  function refreshUI(ui, player, tab) {
    const s = state(player);
    ui._leaderboard_fadein = false;
    ui.arena_list.forEach((item) => {
      item.node.active = false;
      item.node.opacity = 0;
    });
    ui.leaderboard_tab1.getChildByName("label").getComponent(cc.Label).string =
      "本地战绩";
    const onlineLabel = ui.leaderboard_tab2
      .getChildByName("label")
      .getComponent(cc.Label);
    onlineLabel.string = "联机对战（未开放）";
    onlineLabel.fontSize = 20;
    let node = ui.content_node.getChildByName("offlineStats");
    if (!node) {
      node = new cc.Node("offlineStats");
      ui.content_node.addChild(node);
      node.addComponent(cc.Label);
    }
    node.active = true;
    node.opacity = 255;
    node.setPosition(0, -135);
    const label = node.getComponent(cc.Label);
    label.fontSize = 24;
    label.lineHeight = 42;
    label.string =
      tab === "province"
        ? "联机对战（未开放）\n当前仅支持本地机器人\n敬请期待"
        : "纯机器人竞技场\n胜利 " +
          s.wins +
          "  /  失败 " +
          s.losses +
          "  /  平局 " +
          s.draws +
          "\n胜利 +10；失败不扣分\n匹配机器人，消耗 1 张竞技券";
    ui.start_node.getChildByName("btn").getComponent(cc.Button).interactable =
      tab !== "province";
    ui.content_node.y = 280;
    ui._scrollView.stopAutoScroll();
    ui.my_jx_icon.spriteFrame = ui.jx_sp_frames[player.jx - 1];
    ui.my_jx_name.string = __require("arenaUI").jx_names[player.jx - 1];
    ui.my_progress_label.string =
      player.arenaScore + "/" + thresholds[player.jx - 1];
    ui.my_progress_sprite.fillRange =
      player.arenaScore / thresholds[player.jx - 1];
  }
  window.offlineArena = {
    generate,
    provider: local,
    providers: { local, online },
    state,
    restore,
    persist,
    refreshUI,
    thresholds,
  };
})();
