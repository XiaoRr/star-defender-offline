// Prepare combat assets while their archives download; never defer battle essentials into combat.
window.offlineBattleLoad = (() => {
  let ready = false, pending = null, entering = false, startupScene, startupPending;
  const retained = [];
  const corePaths = [
    "starcraft/building/b1", "starcraft/building/b2",
    "starcraft/army/a1", "starcraft/army/a2",
    "starcraft/bullet/bullet-b1", "starcraft/bullet/bullet-a2",
  ];
  const groups = ["building", "army", "bullet", "enemy", "effect", "ui", "bg"];
  let timings = {}, packFraction = 0, engineFraction = 0, coreFraction = 0;
  let packText = "正在检查本地资源包…", engineText = "正在准备战斗素材…", displayed = 0;

  function show(message, fraction = displayed) {
    if (!startupScene || !cc.isValid(startupScene.node)) return;
    displayed = Math.max(displayed, Math.min(1, fraction));
    const pro = startupScene.bg.getChildByName("pro");
    pro.active = true;
    pro.getChildByName("bar").width = 500 * displayed;
    const text = pro.getChildByName("text"), label = text.getComponent(cc.Label);
    label.string = `${Math.floor(displayed * 100)}/100 · ${message}`;
    label.fontSize = 16;
    text.width = 600;
    text.height = 70;
    label.overflow = cc.Label.Overflow.SHRINK;
  }
  function render() {
    show(packText + "\n" + engineText, 0.75 * packFraction + 0.15 * engineFraction + 0.1 * coreFraction);
  }
  function hold(asset) {
    if (asset && !retained.includes(asset)) { asset.addRef(); retained.push(asset); }
  }
  async function settle(jobs) {
    const results = await Promise.allSettled(jobs);
    const failed = results.find(result => result.status === "rejected");
    if (failed) throw failed.reason;
  }
  function prepare(preload = () => Promise.resolve()) {
    if (ready) return Promise.resolve();
    if (pending) return pending;
    pending = (async () => {
      timings = { started: performance.now() };
      const downloader = cc.assetManager.downloader;
      const originalDownload = downloader.download;
      const previousConcurrency = downloader.maxConcurrency;
      const previousPerFrame = downloader.maxRequestsPerFrame;
      packFraction = engineFraction = coreFraction = displayed = 0;
      const packs = window.offlineResourcePacks.prepare(
        message => { packText = message; render(); },
        (fraction, message) => { packFraction = fraction; packText = message; render(); },
      ).then(() => { timings.packsReady = performance.now(); });
      // Wait outside the engine downloader's concurrency slots. Unpacked files then
      // come from the service worker, never a simultaneous second network download.
      function gatedDownload(id, url, type, options, done) {
        window.offlineResourcePacks.whenAvailable(url).then(
          () => originalDownload.call(this, id, url, type,
            { ...options, maxConcurrency: 8, maxRequestsPerFrame: 16 }, done),
          error => done(error),
        );
      }
      downloader.download = gatedDownload;
      downloader.maxConcurrency = 8;
      downloader.maxRequestsPerFrame = 16;
      const fractions = Array(groups.length + 1).fill(0);
      function update(index, done, total) {
        fractions[index] = Math.max(fractions[index], done / Math.max(total, 1));
        engineFraction = fractions.reduce((sum, value) => sum + value, 0) / fractions.length;
        engineText = `战斗素材已准备 ${fractions.filter(value => value === 1).length}/${fractions.length}`;
        render();
      }
      const engine = (async () => {
        const jobs = groups.map((group, index) => window.offlineResourcePacks.whenGroupAvailable(group).then(() => new Promise((resolve, reject) => {
          // Keep all seven groups ready before play. The download gate allows
          // this work to overlap unpacking without fetching packed files twice.
          cc.resources.loadDir("starcraft/" + group, group === "bg" ? cc.SpriteFrame : cc.Prefab,
            (done, total) => update(index, done, total),
            (error, items) => {
              if (error) return reject(error);
              if (!items || !items.length) return reject(new Error("资源目录为空：" + group));
              items.forEach(hold); update(index, 1, 1); resolve();
            });
        })));
        jobs.push(Promise.resolve().then(() => preload((done, total) => update(groups.length, done, total)))
          .then(() => update(groups.length, 1, 1)));
        await settle(jobs);
        timings.dependenciesReady = performance.now();
        for (let i = 0; i < corePaths.length; i++) {
          engineText = `准备开局素材 ${i + 1}/${corePaths.length}`;
          if (!cc.resources.get(corePaths[i], cc.Prefab))
            throw new Error("必要资源未就绪：" + corePaths[i]);
          coreFraction = (i + 1) / (corePaths.length + 1); render();
        }
        if (window.offlineFortress.state().level > 0) await window.offlineFortress.frames();
        coreFraction = 1; render();
        timings.coreReady = performance.now();
      })();
      try {
        // Drain both jobs before retrying or restoring the downloader. A late
        // failure must never leave background work racing the next attempt.
        await settle([packs, engine]);
        ready = true;
        timings.ready = performance.now();
      } finally {
        if (downloader.download === gatedDownload) downloader.download = originalDownload;
        downloader.maxConcurrency = previousConcurrency;
        downloader.maxRequestsPerFrame = previousPerFrame;
      }
    })().finally(() => { pending = null; });
    return pending;
  }
  function startup(scene, preload) {
    if (startupPending) return startupPending;
    startupScene = scene;
    scene.bg.getChildByName("button").active = false;
    startupPending = new Promise(resolve => {
      const run = async () => {
        scene.bg.getChildByName("button").active = false;
        try {
          await prepare(preload);
          show("准备完成", 1);
          resolve();
        } catch (error) {
          show("加载失败，点击重试：" + error.message);
          scene.bg.getChildByName("pro").once(cc.Node.EventType.TOUCH_END, run);
        }
      };
      run();
    });
    return startupPending;
  }
  function enter(action) {
    if (entering || !ready) return;
    entering = true;
    try { action(); } finally { entering = false; }
  }
  return { startup, enter, prepare, get ready() { return ready; },
    get retainedCount() { return retained.length; }, get timings() { return { ...timings }; } };
})();
