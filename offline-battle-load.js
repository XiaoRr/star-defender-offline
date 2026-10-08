// Complete combat prefab dependencies before leaving the title screen.
window.offlineBattleLoad = (() => {
  let ready = false,
    pending = null,
    entering = false;
  const retained = [];
  let startupScene,
    phaseProgress = 0,
    startupPending;
  function show(message, fraction = phaseProgress) {
    if (!startupScene || !cc.isValid(startupScene.node)) return;
    phaseProgress = Math.max(phaseProgress, Math.min(1, fraction));
    const pro = startupScene.bg.getChildByName("pro");
    pro.active = true;
    pro.getChildByName("bar").width = 500 * phaseProgress;
    const label = pro.getChildByName("text").getComponent(cc.Label);
    label.string = `${Math.floor(phaseProgress * 100)}/100 · ${message}`;
    label.fontSize = 18;
    label.node.width = 600;
    label.overflow = cc.Label.Overflow.SHRINK;
  }
  function hold(asset) {
    if (asset && !retained.includes(asset)) {
      asset.addRef();
      retained.push(asset);
    }
  }
  function load(path, type, number, total) {
    return new Promise((resolve, reject) => {
      cc.resources.loadDir(
        path,
        type,
        (done, count) =>
          show(
            `准备素材 ${number}/${total} · ${done}/${count}`,
            0.85 + 0.14 * ((number - 1 + done / Math.max(1, count)) / total),
          ),
        (error, assets) => {
          if (error) return reject(error);
          if (!assets || !assets.length)
            return reject(new Error("资源目录为空：" + path));
          assets.forEach(hold);
          resolve();
        },
      );
    });
  }
  function prepare() {
    if (ready) return Promise.resolve();
    if (pending) return pending;
    pending = (async () => {
      show("正在准备基地、农民、机枪兵和战斗素材…");
      await window.offlineResourcePacks.prepare(show, (fraction, message) =>
        show(message, 0.7 * fraction),
      );
      const downloader = cc.assetManager.downloader;
      const previousConcurrency = downloader.maxConcurrency,
        previousPerFrame = downloader.maxRequestsPerFrame;
      // The archive is fully cached now; Android's network throttle need not serialize local reads.
      downloader.maxConcurrency = 16;
      downloader.maxRequestsPerFrame = 64;
      try {
        const groups = ["building", "army", "bullet", "enemy", "effect", "ui"];
        for (let i = 0; i < groups.length; i++)
          await load("starcraft/" + groups[i], cc.Prefab, i + 1, 7);
        await load("starcraft/bg", cc.SpriteFrame, 7, 7);
        for (const path of [
          "starcraft/building/b1",
          "starcraft/building/b2",
          "starcraft/army/a1",
          "starcraft/army/a2",
          "starcraft/bullet/bullet-b1",
          "starcraft/bullet/bullet-a2",
        ]) {
          if (!cc.resources.get(path, cc.Prefab))
            throw new Error("必要资源未就绪：" + path);
        }
        if (window.offlineFortress.state().level > 0)
          await window.offlineFortress.frames();
        ready = true;
      } finally {
        downloader.maxConcurrency = previousConcurrency;
        downloader.maxRequestsPerFrame = previousPerFrame;
      }
    })().finally(() => {
      pending = null;
    });
    return pending;
  }
  function startup(scene, preload) {
    if (startupPending) return startupPending;
    startupScene = scene;
    scene.bg.getChildByName("button").active = false;
    startupPending = new Promise((resolve) => {
      const run = async () => {
        const button = scene.bg.getChildByName("button");
        button.active = false;
        try {
          await window.offlineResourcePacks.prepare(show, (fraction, message) =>
            show(message, 0.7 * fraction),
          );
          await preload((done, total) =>
            show(
              `场景 ${done}/${total}`,
              0.7 + (0.15 * done) / Math.max(1, total),
            ),
          );
          await prepare();
          show("准备完成", 1);
          resolve();
        } catch (error) {
          show("加载失败，点击重试：" + error.message);
          const pro = scene.bg.getChildByName("pro");
          pro.once(cc.Node.EventType.TOUCH_END, run);
          // Use the same native progress area as the retry target.
        }
      };
      run();
    });
    return startupPending;
  }
  function enter(action) {
    if (entering) return;
    if (!ready) return;
    entering = true;
    action();
    entering = false;
  }
  return {
    startup,
    enter,
    prepare,
    get ready() {
      return ready;
    },
    get retainedCount() {
      return retained.length;
    },
  };
})();
