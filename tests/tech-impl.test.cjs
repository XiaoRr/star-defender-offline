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
  return { x: 0, y: 0, getComponent: () => comp };
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

test("released bundle keeps every tech hook wired", () => {
  const bundle = fs.readFileSync("assets/main/index.balance20261009.js", "utf8");
  for (const hook of [
    "window.__techArmyInit && window.__techArmyInit(this)",
    "window.__techReduceHurt ? window.__techReduceHurt(this, e, t2) : e",
    "window.__techRange ? window.__techRange(this, i, o) : this.range",
    "window.__techAttack(this, m, i, f)",
    "window.__techSecondShot",
    "window.__techTick(this, e * g.default.gameSpeed)",
    "window.__techTowerInit && window.__techTowerInit(this)",
    "window.__techBuildingInit && window.__techBuildingInit(this)",
    "window.__techBuildingHurt",
    'doHurt(B, __src)',
    'doHurt(this.attack / 2, { ranged: !0, size: this.size })',
    'window.__techAttack(this, n, i, "starArmy")',
    'window.__techAttack(this, this.attack, i, "starArmy")',
  ]) assert.ok(bundle.includes(hook), hook);
});
