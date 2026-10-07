/**
 * 星际保卫者 · 核心平衡逻辑（解混淆重命名版）
 * ------------------------------------------------------------------
 * 本文件是对混淆包 assets/main/index.8182a.js 中三个关键函数的
 * "重命名 + 注释" 可读 rendition。逻辑与原文一一对应，仅把单字母
 * 变量换成有意义的名字并补充注释，方便审阅与调参。
 *
 * 原文位置（拆分后模块）：
 *   - startNewWave          -> modules/battleScene.js
 *   - getEnemyArrayWithLevel-> modules/stageData.js
 *   - initEnemy             -> modules/starEnemy.js
 *
 * 结论速览：敌人强度 = 基础值 × fac(关) × 每波指数 × 数量层，
 * 三个乘数互相相乘（叠加），且 fac 从第 1 关起就是 ~×1.1/关 的
 * 指数曲线（21 关前后增长率相同），因此后期玩家线性成长追不上。
 */

/* ================================================================== *
 * 配置表（来自 config/game-config.json / 包内常量）
 * ================================================================== */
// stageConfig[level-1] = { wave, monsters:[3个兵种id], fac, boss }
//   fac  = 该关的"额外数值加成"系数（直接乘进敌人攻防与刷怪预算）
// enemyConfig[id-1]    = { name, hp, attack, speed, power, ... }
//   power= 兵种"分数"（小狗=1 最低 → 被刷得最多）
// SubStageEnemyRate[wave-1] = [3个兵种的配比权重]，和为~1
// SubStageEnemyPower[wave-1]= 该波的"分数预算"基准

/* ================================================================== *
 * ① battleScene.startNewWave —— 每波刷怪（PvE 关卡）
 *    原文变量: o=monsters, r=配比, s=刷怪预算, c=前5波折扣
 * ================================================================== */
function startNewWave() {
  // 每波基础数量：随波次线性 +2
  this.enemiesPerWave = 10 + 2 * (this.currentWave - 1);
  this.enemiesToSpawn = this.enemiesPerWave;

  const monsters = this.levelConfig.monsters;                 // o
  const mixRate = this.currentLevel === 1
    ? BALANCE.SubStageFirstLevelEnemyRate[this.currentWave - 1]
    : BALANCE.SubStageEnemyRate[this.currentWave - 1];        // r

  // ★ 刷怪预算 = 关卡fac × 1.07^当前波次   <-- "波次再加成"（乘在fac之上）
  let budget = this.levelConfig.fac * Math.pow(1.07, this.currentWave); // s

  // 前 5 波打折（教学缓冲）
  const earlyDiscount = [0.7, 0.75, 0.8, 0.85, 0.9];          // c
  if (this.currentWave < earlyDiscount.length)
    budget *= earlyDiscount[this.currentWave - 1];

  // 按配比随机抽兵种，把 budget 作为强度系数传给 spawnEnemy
  //（budget 会在 setup() 里乘进每个敌人的 maxHealth/attackDamage）
  scheduleSpawns(() => {
    const roll = Math.random();
    if (roll < mixRate[0]) this.spawnEnemy(monsters[0], budget);
    else if (roll < mixRate[0] + mixRate[1]) this.spawnEnemy(monsters[1], budget);
    else this.spawnEnemy(monsters[2], budget);
    // 每 5 波额外刷一只 boss
    if (--this.enemiesToSpawn === 0 && this.currentWave % 5 === 0)
      this.spawnEnemy(this.levelConfig.boss, budget);
  });
}

/* ================================================================== *
 * ② stageData.getEnemyArrayWithLevel —— 每波"数量"采购（数量层）
 *    原文变量: i=monsters, n=power[], c=加权平均power, d=数量缩放, h=结果
 * ================================================================== */
function getEnemyArrayWithLevel(level) {
  const cfg = STAGE[level - 1];
  const powers = cfg.monsters.map(id => ENEMY[id - 1].power); // n

  const waves = [];
  for (let w = 0; w < cfg.wave; w++) {
    // 该波加权平均 power
    let avgPower = 0;                                          // c
    for (let l = 0; l < 3; l++) avgPower += powers[l] * BALANCE.SubStageEnemyRate[w][l];

    // ★ 数量缩放 = (波分数预算/平均power) × 关卡成长
    //   关卡成长分段：<15用1.05^L；15-29再×1.03；30-49再×1.01；≥50封顶
    let growth;                                                // d
    const L = GAME.nowGameLevel;
    if (L < 15)       growth = (BALANCE.SubStageEnemyPower[w] / avgPower) * Math.pow(1.05, L);
    else if (L < 30)  growth = (BALANCE.SubStageEnemyPower[w] / avgPower) * Math.pow(1.05, 15) * Math.pow(1.03, L - 15);
    else if (L < 50)  growth = (BALANCE.SubStageEnemyPower[w] / avgPower) * Math.pow(1.05, 15) * Math.pow(1.03, 15) * Math.pow(1.01, L - 30);
    else              growth = (BALANCE.SubStageEnemyPower[w] / avgPower) * Math.pow(1.05, 15) * Math.pow(1.03, 15) * Math.pow(1.01, 20);

    // 每兵种数量 = floor(数量缩放 × 配比)；power 越低 → 同预算下数量越多
    const list = [];                                           // h
    for (let l = 0; l < 3; l++) {
      let num = growth * BALANCE.SubStageEnemyRate[w][l];
      if (num !== 0) {
        num = (num > 0 && num < 1) ? 1 : Math.floor(num);
        list.push({ type: cfg.monsters[l], num });
      }
    }
    // 关底 boss 插入规则（略，见原文）
    waves.push(list);
  }
  return waves;
}

/* ================================================================== *
 * ③ starEnemy.initEnemy —— 单个敌人属性（PvE 属性层）
 *    原文变量: a=基础配置, o=fac, r=波次(subLevel), s=玩家减伤buffer
 * ================================================================== */
function initEnemy(typeId, bossTier, isTemp) {
  const base = ENEMY[typeId - 1];                              // a
  if (isTemp) { /* 临时单位只缩放体型，直接 return */ }

  const fac = STAGE[GAME.nowGameLevel - 1].fac;                // o 每关加成
  const wave = GAME.gameInstance.subLevel;                     // r 当前波次(1基)

  // ★ 单体属性 = 基础 × 每波指数 × 关卡fac × 常数
  this.totalHp = base.hp     * Math.pow(1.06, wave - 1) * fac * 0.8;
  this.attack  = base.attack * Math.pow(1.03, wave - 1) * fac * 0.5;
  this.speed   = 0.7 * base.speed;

  // boss 强化
  if (bossTier) {
    if (bossTier === 1) { this.totalHp *= 3; this.attack *= 2.5; }
    else                { this.totalHp *= 5; this.attack *= 3.5; }
    this.speed *= 0.9; this.range *= 1.2;
  }
  this.hp = this.totalHp;

  // 玩家侧减伤（buffer）对攻击做除法/减法 —— 玩家唯一的对冲手段
  const buf = PLAYER.getBuffer();                              // s
  this.attack /= 1 + buf.reduction / 100;
  this.attack -= buf.defense;
  if (this.attack < 1) this.attack = 1;
}

/* ================================================================== *
 * 叠加关系总结（回答"是否波次再加成、互相叠加"）
 * ================================================================== *
 * 敌人单体强度  = base × fac(关)            [①③]  每关加成
 *               × 1.06^波 / 1.03^波        [③]   每波指数(属性层)
 * 刷怪强度系数  = fac × 1.07^波            [①]   每波指数(预算层,再乘fac)
 * 敌人数量      = (波预算/平均power) × 1.05^关... [②]  数量层
 *
 *  => fac 在 ①③ 中各乘一次，且各自再叠一个每波指数；数量层又叠 1.05^关。
 *  => 全部相乘，无上限（fac 到 100 关=9480），玩家仅靠 buffer 除法对冲，
 *     成长线性，故 21 关后（fac 绝对值越过玩家成长线）数值远远不够。
 */
