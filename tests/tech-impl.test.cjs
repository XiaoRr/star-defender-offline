// Verifies the local tech-effect layer: formula parity with the tech panel UI
// and every hook wired into the bundle (init/attack/range/hurt/tick/second shot).
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const vm = require("node:vm");

function loadTech(playerTechLevels, gameInstance, rng) {
  const sandboxMath = Object.create(Math);
  if (rng) sandboxMath.random = () => rng();
  const sandbox = {
    Math: sandboxMath,
    window: {},
    navigator: { serviceWorker: undefined },
    document: {
      addEventListener() {},
      createElement: () => ({ style: {}, setAttribute() {}, append() {} }),
      body: { appendChild() {} },
    },
    localStorage: { getItem: () => null, setItem() {} },
    location: { reload() {} },
    confirm: () => false,
    URL: { createObjectURL: () => "", revokeObjectURL() {} },
    Blob: class {},
    setTimeout,
    clearTimeout,
    __require: (name) => ({
      playerData: { default: { techLevelArray: playerTechLevels } },
      gameData: { default: { gameInstance } },
    })[name],
  };
  sandbox.window.__require = sandbox.__require;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync("offline.js", "utf8"), sandbox, {
    filename: "offline.js",
  });
  return sandbox.window;
}

function fakeUnit(type, extra = {}) {
  return { type, pvpWay: 0, totalHp: 100, hp: 100, attack: 10, speed: 50, range: 100, cdTime: 1, ...extra };
}
function fakeTarget(props = {}) {
  const comp = { isSky: 0, size: 1, invisible: 0, ...props };
  return { x: 0, y: 0, isValid: 1, getComponent: () => comp };
}

test("tech value formula matches the original panel (value = min + step*(L-1))", () => {
  const W = loadTech(new Array(42).fill(0), null);
  const T = W.offlineTech;
  assert.equal(T.value(1, 0), 0);
  assert.equal(T.value(1, 1), 10);
  assert.equal(T.value(1, 3), 18); // [10,30]: step 4
  assert.equal(T.value(1, 5), 26); // min + step*4 = 10+4*4
  assert.equal(T.value(16, 1), 50); // decreasing range [50,20]
  assert.equal(T.value(16, 5), 26); // [50,20]: 50 + (20-50)/5*4 = 26
  assert.equal(T.value(9, 2).toFixed(2), "0.68"); // [0.6,1]: 0.6+0.08
  assert.equal(T.value(34, 5), 54); // [30,60]: 30 + 6*4
  assert.equal(T.value(999, 3), 0);
});

test("army init hooks apply farmer hp, global damage, stimpack, anti-air gun", () => {
  const lv = new Array(42).fill(0);
  lv[2] = 5; // #3 农民血量 100→ +100% (range [20,100]: L5 = 20+16*4=84? step16 → L5=84)
  lv[4] = 5; // #5 战略中心 20%
  lv[15] = 1; // #16 强化针
  lv[25] = 5; // #26 高射炮 30%
  const W = loadTech(lv, null);
  const farmer = fakeUnit(1); // type 1 = 农民
  W.__techArmyInit(farmer);
  assert.equal(Math.round(farmer.totalHp), 184); // 100 * 1.84
  assert.equal(farmer.hp, farmer.totalHp);
  const gunner = fakeUnit(2);
  W.__techArmyInit(gunner);
  assert.equal(Math.round(gunner.attack * 1000) / 1000, 23.6); // #5 18% × 强化针 2 倍
  assert.equal(gunner.cdTime, 0.5); // 攻速 +100%
  assert.equal(gunner.speed, 100); // 移速 ×2
  const tank = fakeUnit(6);
  W.__techArmyInit(tank);
  assert.equal(Math.round(tank.attack * 100) / 100, 14.87); // 1.18 × 1.26（#26 L5=26%）
  assert.equal(Math.round(tank.range * 100) / 100, 126); // 射程 +26%（L5）
  assert.equal(tank.speed, 35); // 移速 -30%
});

test("enemy-side units (pvpWay!=0) never receive player techs", () => {
  const lv = new Array(42).fill(0);
  lv[4] = 5;
  const W = loadTech(lv, null);
  const foe = fakeUnit(2, { pvpWay: 1 });
  W.__techArmyInit(foe);
  assert.equal(foe.attack, 10);
});

test("hurt reduction: command center, ranged guard, armor, stim drawback", () => {
  const lv = new Array(42).fill(0);
  lv[3] = 3; // #4 指挥中心 14%
  lv[11] = 5; // #12 远程防御 26%
  lv[22] = 3; // #23 重甲防护 18%
  const W = loadTech(lv, null);
  const shield = fakeUnit(4);
  let dmg = W.__techReduceHurt(shield, 100, { ranged: true, size: 2 });
  assert.equal(Math.round(dmg * 1000) / 1000, 100 * 0.86 * 0.74);
  dmg = W.__techReduceHurt(shield, 100, { ranged: false, size: 2 });
  assert.equal(Math.round(dmg * 1000) / 1000, 86);
  const tank = fakeUnit(6);
  dmg = W.__techReduceHurt(tank, 100, { ranged: false, size: 1 });
  assert.equal(Math.round(dmg * 1000) / 1000, 100 * 0.86 * 0.82);
  dmg = W.__techReduceHurt(fakeUnit(2), 100, null);
  assert.equal(Math.round(dmg * 1000) / 1000, 86);
});

test("attack multipliers: suppress (medium), heavy strike (large), air superiority", () => {
  const lv = new Array(42).fill(0);
  lv[19] = 5; // #20 压制 25%
  lv[29] = 1; // #30 重打击 5%
  lv[30] = 3; // #31 制空 13%
  const W = loadTech(lv, null);
  const tankDmg = W.__techAttack(fakeUnit(6), 100, fakeTarget({ size: 2 }), "starEnemy");
  assert.equal(tankDmg, 121); // [5,25] L5 = 21%
  const bcDmg = W.__techAttack(fakeUnit(10), 100, fakeTarget({ size: 3 }), "starEnemy");
  assert.equal(bcDmg, 105);
  const airDmg = W.__techAttack(fakeUnit(8), 100, fakeTarget({ isSky: 1 }), "starEnemy");
  assert.equal(Math.round(airDmg * 100) / 100, 113);
  assert.equal(W.__techAttack(fakeUnit(6), 100, fakeTarget({ size: 3 }), "starEnemy"), 100);
  assert.equal(W.__techAttack(fakeUnit(6, { pvpWay: 1 }), 100, fakeTarget({ size: 2 }), "starEnemy"), 100);
});

test("fighter effective range doubles its bonus against air targets", () => {
  const lv = new Array(42).fill(0);
  lv[27] = 3; // #28 射程 18%
  const W = loadTech(lv, null);
  const fighter = fakeUnit(8, { range: 100 });
  assert.equal(Math.round(W.__techRange(fighter, fakeTarget({ isSky: 1 }), 0)), 136);
  assert.equal(Math.round(W.__techRange(fighter, fakeTarget({ isSky: 0 }), 0)), 118);
  const mg = fakeUnit(2, { range: 170 });
  assert.equal(W.__techRange(mg, fakeTarget({ isSky: 1 }), 0), 170);
});

test("stimpack regen heals 1% per second and respects full hp", () => {
  const lv = new Array(42).fill(0);
  lv[14] = 1; // #15 自疗 5%
  const W = loadTech(lv, null);
  const shield = fakeUnit(4, { hp: 50 });
  W.__techTick(shield, 0.5);
  assert.equal(shield.hp, 50); // 未满 1 秒
  W.__techTick(shield, 0.6);
  assert.equal(Math.round(shield.hp * 100) / 100, 55); // +5%/s × maxHp
  const full = fakeUnit(4);
  W.__techTick(full, 2);
  assert.equal(full.hp, 100);
});

test("battlecruiser second shot fires with half damage on proc", () => {
  const lv = new Array(42).fill(0);
  lv[32] = 5; // #33 连射 18%
  const W = loadTech(lv, null, () => rng);
  const shots = [];
  const bc = fakeUnit(10, { shootBullet: (...a) => shots.push(a) });
  let rng = 0.01; // 必中
  W.__techSecondShot(bc, 1, 2, 3, 4, 100, 0, false);
  rng = 0.99; // 必不中
  W.__techSecondShot(bc, 1, 2, 3, 4, 100, 0, false);
  assert.equal(shots.length, 1);
  assert.equal(shots[0][4], 50); // 半伤
  assert.deepEqual(shots[0].slice(0, 4), [1, 2, 3, 4]);
});

test("building hooks: base attack up, base damage taken down", () => {
  const lv = new Array(42).fill(0);
  lv[1] = 1; // #2 基地攻击 10%
  lv[0] = 3; // #1 基地减伤 18%
  const W = loadTech(lv, null);
  const base = { type: 1, pvpWay: 0, attack: 100 };
  W.__techBuildingInit(base);
  assert.equal(Math.round(base.attack * 1000) / 1000, 110);
  let dmg = W.__techBuildingHurt({ type: 1, pvpWay: 0 }, 100);
  assert.equal(Math.round(dmg * 1000) / 1000, 82); // 1-0.18；#4 未升级无加成
  assert.equal(W.__techBuildingHurt({ type: 2, pvpWay: 0 }, 100), 100);
});

test("turret hooks extend range and attack speed", () => {
  const lv = new Array(42).fill(0);
  lv[36] = 5; // #37 射程 26%
  lv[37] = 3; // #38 射速 18%
  const W = loadTech(lv, null);
  const tower = { range: 100, attackCDTime: 2, shootCDTime: 1 };
  W.__techTowerInit(tower);
  assert.equal(Math.round(tower.range * 100) / 100, 126);
  assert.equal(Math.round(tower.attackCDTime * 1000) / 1000, Math.round((2 / 1.18) * 1000) / 1000);
});


test("iteration 2: burn DoT schedules 4 half-second ticks of attack*n%", () => {
  const lv = new Array(42).fill(0);
  lv[10] = 1; // #11 燃烧 10%
  const W = loadTech(lv, null);
  const scheduled = [];
  const ft = fakeUnit(3, { attack: 40, scheduleOnce: (fn, t) => scheduled.push([fn, t]) });
  const hits = [];
  const target = fakeTarget();
  target.getComponent = () => ({ hp: 100, doHurt: d => hits.push(d) });
  W.__techShoot(ft, 50, target, "starEnemy");
  assert.equal(scheduled.length, 4);
  assert.deepEqual(scheduled.map(s => s[1]), [0.5, 1, 1.5, 2]);
  scheduled.forEach(s => s[0]());
  assert.deepEqual(hits, [4, 4, 4, 4]); // attack × 10%
});

test("iteration 2: flame pierce hits units behind the target", () => {
  const lv = new Array(42).fill(0);
  lv[13] = 1; // #14 贯穿 60%
  const rear = { x: 200, y: 0, isValid: 1, getComponent: () => ({ hp: 10, doHurt: d => rear.hit = d }) };
  const gi = { gameMode: 0, enemyArray: [
    { x: 100, y: 0, isValid: 1, getComponent: () => null }, // 目标自身跳过
    rear,
  ] };
  const W = loadTech(lv, { gameMode: 0, enemyArray: gi.enemyArray });
  const ft = fakeUnit(3, { node: { x: 0, y: 0 } });
  const target = fakeTarget();
  target.x = 100; target.y = 0;
  W.__techShoot(ft, 100, target, "starEnemy");
  assert.equal(rear.hit, 60); // 100 × 60%
});

test("iteration 2: ice-truck hit slows enemies for 3s (凝滞)", () => {
  const lv = new Array(42).fill(0);
  lv[18] = 3; // #19 凝滞 26%
  const W = loadTech(lv, null);
  const enemyComp = {};
  const target = fakeTarget();
  target.getComponent = () => enemyComp;
  W.__techAfterHit(fakeUnit(5), target, "starEnemy");
  assert.ok(enemyComp.__slowUntil > Date.now());
  assert.equal(Math.round(W.__techEnemySlow(enemyComp) * 100) / 100, 0.74);
  enemyComp.__slowUntil = Date.now() - 1;
  assert.equal(W.__techEnemySlow(enemyComp), 1);
});

test("iteration 2: ice mine truck fires AoE+freeze every 5th shot", () => {
  const lv = new Array(42).fill(0);
  lv[24] = 1; // #25 强化冰雷 60%
  const fx = [];
  const foe = { x: 5, y: 5, isValid: 1, hp: 100,
    getComponent: () => ({ hp: 100, doHurt: d => foe.took = (foe.took || 0) + d, addEffect: (n, t) => fx.push(n) }) };
  const W = loadTech(lv, { gameMode: 0, enemyArray: [foe] });
  const truck = fakeUnit(5);
  const dmg = 200;
  for (let k = 1; k <= 4; k++) W.__techOnShoot(truck, 0, 0, 5, 5, dmg, 0, 0);
  assert.equal(foe.took || 0, 0); // 前4次不触发
  W.__techOnShoot(truck, 0, 0, 5, 5, dmg, 0, 0);
  assert.equal(Math.round(foe.took), 120); // 200 × 60%
  assert.deepEqual(fx, ["ice"]);
});

test("iteration 2: robot fortitude keeps alive for n seconds then yields", () => {
  const lv = new Array(42).fill(0);
  lv[23] = 5; // #24 坚毅 10秒
  const W = loadTech(lv, null);
  const bot = fakeUnit(7);
  assert.equal(W.__techArmyKeepAlive(bot), true);
  assert.equal(W.__techArmyKeepAlive(bot), true);
  bot.__fortitudeUntil = Date.now() - 1;
  assert.equal(W.__techArmyKeepAlive(bot), false);
  const rifle = fakeUnit(2);
  assert.equal(W.__techArmyKeepAlive(rifle), false);
});

test("iteration 2: flamethrower death explodes for attack*n% around it", () => {
  const lv = new Array(42).fill(0);
  lv[16] = 3; // #17 自爆 140%
  const foe = { x: 10, y: 0, isValid: 1, hp: 100,
    getComponent: () => ({ hp: 90, doHurt: d => foe.took = d }) };
  const W = loadTech(lv, { gameMode: 0, enemyArray: [foe] });
  const ft = fakeUnit(3, { attack: 50, node: { x: 0, y: 0 } });
  W.__techArmyDeath(ft);
  assert.equal(foe.took, 70);
});

test("iteration 2: repair skill grants timed immunity", () => {
  const lv = new Array(42).fill(0);
  lv[6] = 5; // #7 修复强化 4秒（[2,4] L5=3.6）
  const W = loadTech(lv, null);
  const army = { armyArray: [{ isValid: 1, getComponent: () => soldier }] };
  const soldier = { pvpWay: 0 };
  W.__techRepairSkill(army);
  assert.ok(soldier.__immuneUntil > Date.now());
  assert.equal(W.__techReduceHurt(fakeUnit(2), 100, { ranged: true }), 100); // 无免疫不受影响
  soldier.__type = 4;
  const shield = fakeUnit(4);
  shield.__immuneUntil = Date.now() + 1000;
  assert.equal(W.__techReduceHurt(shield, 100, { ranged: true }), 0);
});

test("iteration 2: nuke tech adds value*n% on top of the blood strike", () => {
  const lv = new Array(42).fill(0);
  lv[7] = 5; // #8 核能强化 42%（[10,50] step8, L5=42）
  const W = loadTech(lv, null);
  const enemy = { totalHp: 300, hp: 300, isBoss: 0, doHurt: d => enemy.took = d };
  W.__techNuke(enemy);
  assert.equal(Math.round(enemy.took * 10) / 10, 42); // 100 × 42%
});

test("iteration 2: farmers repair the damaged base each frame", () => {
  const lv = new Array(42).fill(0);
  lv[8] = 5; // #9 维修 1%/s/农民
  const base = { type: 1, isOver: 0, hp: 50, totalHp: 1000 };
  const farmer = { type: 1, pvpWay: 0, hp: 10 };
  const scene = {
    buildingArray: [{ isValid: 1, getComponent: () => base }],
    armyArray: [{ isValid: 1, getComponent: () => farmer }],
  };
  const W = loadTech(lv, null);
  W.__techSceneTick(scene, 0.5);
  assert.equal(Math.round(base.hp * 100) / 100, 54.6); // 1000 × 0.92% × 1农民 × 0.5s（L5=0.92）
});

test("iteration 2: turret revives once at half hp and shockwaves on death", () => {
  const lv = new Array(42).fill(0);
  lv[40] = 1; // #41 战时修复 8秒
  lv[41] = 1; // #42 震荡波 100%（[100,200] L1=100）
  const foe = { x: 30, y: 0, isValid: 1, hp: 100,
    getComponent: () => ({ hp: 90, doHurt: d => foe.took = d, rigidBody: { linearVelocity: null } }) };
  const W = loadTech(lv, { gameMode: 0, enemyArray: [foe] });
  window_cc_v2 = null;
  const turret = { type: 5, pvpWay: 0, isOver: 0, hp: -1, totalHp: 1000, attack: 100, node: { x: 0, y: 0 } };
  W.__techBuildingFrame(turret); // 死亡帧：标记复活时间 + 震荡波
  assert.equal(foe.took, 100); // attack × 100%
  assert.ok(turret.__reviveAt > Date.now());
  turret.isOver = 1;
  W.__techBuildingFrame(turret); // 未到期
  assert.equal(turret.isOver, 1);
  turret.__reviveAt = Date.now() - 1;
  W.__techBuildingFrame(turret); // 到期复活
  assert.equal(turret.isOver, 0);
  assert.equal(turret.hp, 500);
  W.__techBuildingFrame(turret);
  turret.hp = -1;
  turret.isOver = 1;
  turret.__reviveAt = 0;
  W.__techBuildingFrame(turret); // 二次死亡不再复活（__revived 已置位，且不再刷新复活时间）
  assert.equal(turret.__revived, 1);
  assert.ok(!turret.__reviveAt);
});

test("iteration 2: elite farmer rolls once and doubles hp / triples attack", () => {
  const lv = new Array(42).fill(0);
  lv[5] = 5; // #6 精英培育 16%
  const W = loadTech(lv, null, () => 0.01); // 必出精英
  const farmer = fakeUnit(1);
  W.__techArmyInit(farmer);
  assert.equal(farmer.__elite, 1);
  assert.equal(farmer.totalHp, 200);
  assert.equal(farmer.attack, 30);
  const W2 = loadTech(lv, null, () => 0.99); // 必不出
  const plain = fakeUnit(1);
  W2.__techArmyInit(plain);
  assert.ok(!plain.__elite);
  assert.equal(plain.totalHp, 100);
});

test("iteration 2: shield aura heals nearby bio units without stacking", () => {
  const lv = new Array(42).fill(0);
  lv[17] = 5; // #18 群体医疗 3.6%
  const ally = { type: 2, pvpWay: 0, hp: 50, totalHp: 100 };
  const gi = { gameMode: 0, armyArray: [{ x: 10, y: 0, isValid: 1, getComponent: () => ally }] };
  const W = loadTech(lv, gi);
  const shield = fakeUnit(4, { node: { x: 0, y: 0 } });
  W.__techTick(shield, 0.9);
  assert.equal(Math.round(ally.hp * 100) / 100, 52.88); // +100 × 3.6% × 0.8
  const before = ally.hp;
  W.__techTick(shield, 0.1); // 光环计时未到 0.8s，不再治疗
  assert.equal(ally.hp, before);
});

test("iteration 2: robot missile hits one air unit in range per second", () => {
  const lv = new Array(42).fill(0);
  lv[26] = 1; // #27 地空导弹 40%
  const air = { isSky: 1, hp: 100, doHurt: d => air.took = d };
  const ground = { isSky: 0, hp: 100, doHurt: () => { throw new Error("不应打地面"); } };
  const gi = { gameMode: 0, enemyArray: [
    { x: 50, y: 0, isValid: 1, getComponent: () => ground },
    { x: 60, y: 0, isValid: 1, getComponent: () => air },
  ] };
  const W = loadTech(lv, gi);
  const bot = fakeUnit(7, { attack: 30, range: 170, node: { x: 0, y: 0 } });
  W.__techTick(bot, 1.0);
  assert.equal(air.took, 12); // 30 × 40%
});

test("iteration 2: fighter dodge works vs ground and air with separate values", () => {
  const lv = new Array(42).fill(0);
  lv[33] = 5; // #34 隐身 对地54%
  const W = loadTech(lv, null, () => 0.3);
  const fighter = fakeUnit(8);
  assert.equal(W.__techReduceHurt(fighter, 100, { isSky: 0 }), 0); // 0.3 < 0.54
  const W2 = loadTech(lv, null, () => 0.4); // 对空 m=27%（[15,35] L5=27）
  assert.equal(W2.__techReduceHurt(fakeUnit(8), 100, { isSky: 1 }), 100); // 0.4 > 0.27
  const W3 = loadTech(lv, null, () => 0.2);
  assert.equal(W3.__techReduceHurt(fakeUnit(8), 100, { isSky: 1 }), 0);
});

test("iteration 2: ice-truck dodge avoids damage on proc (机动)", () => {
  const lv = new Array(42).fill(0);
  lv[21] = 1; // #22 机动 10%
  const W = loadTech(lv, null, () => 0.05);
  assert.equal(W.__techReduceHurt(fakeUnit(5), 100, { ranged: true }), 0);
  const W2 = loadTech(lv, null, () => 0.5);
  assert.equal(Math.round(W2.__techReduceHurt(fakeUnit(5), 100, { ranged: true }) * 100) / 100, 100); // 未触发，无其他科技
});

test("released bundle keeps every tech hook wired", () => {
  const bundle = fs.readFileSync("assets/main/index.balance20261009.js", "utf8");
  for (const hook of [
    "window.__techArmyInit && window.__techArmyInit(this)",
    "window.__techReduceHurt ? window.__techReduceHurt(this, e, t2) : e",
    "window.__techRange ? window.__techRange(this, i, o) : this.range",
    "window.__techSecondShot",
    "window.__techTick(this, e * g.default.gameSpeed)",
    "window.__techTowerInit && window.__techTowerInit(this)",
    "window.__techBuildingInit && window.__techBuildingInit(this)",
    "window.__techBuildingHurt",
    'doHurt(B, __src)',
    'doHurt(this.attack / 2, { ranged: !0, size: this.size, isSky: this.isSky ? 1 : 0 })',
    'window.__techAttack(this, n, i, "starArmy")',
    'window.__techAttack(this, this.attack, i, "starArmy")',
    'window.__techShoot &&',
    'window.__techOnShoot &&',
    'window.__techEnemySlow ? window.__techEnemySlow(this) : 1',
    'window.__techArmyKeepAlive &&',
    'window.__techArmyDeath && window.__techArmyDeath(this)',
    'window.__techRepairSkill &&',
    'window.__techNuke &&',
    'window.__techSceneTick &&',
    'window.__techBuildingFrame &&',
    'window.__techAfterHit',
    'isSky: window.__armyIsSky ? window.__armyIsSky(this.type) : 0',
  ]) assert.ok(bundle.includes(hook), hook);
});
