// module: enemy
// deps: {"../data/equipData":"equipData","../data/stoneData":"stoneData","../gameData":"gameData","../tower/tower":"tower"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5f3baNGbFJDb42w0X+IHDAN", "enemy");
        var n,
          a = (this && this.__extends) || ((n = function(e, t) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
              }
              instanceof Array && function(e, t) {
                e.__proto__ = t;
              }) || function(e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            })(e, t);
          }), function(e, t) {
            function i() {
              this.constructor = e;
            }
            (n(e, t),
              (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i())));
          }),
          o = (this && this.__decorate) || function(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = e("../gameData"),
          d = e("../tower/tower"),
          h = e("../data/stoneData"),
          u = e("../data/equipData"),
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bulletPrefab = null),
                (t.deadPrefab = null),
                (t.bloodPrefab = null),
                (t.hp = 0),
                (t.totalHp = 0),
                (t.speed = 0),
                (t.angle = 0),
                (t.range = 0),
                (t.hurt = 0),
                (t.strike = !1),
                (t.buffer = !1),
                (t.miss = !1),
                (t.type = 0),
                (t.stop = !1),
                (t.bloodNode = null),
                (t.timer = 0),
                (t.noRelive = !1),
                (t.kill = !1),
                (t.statusArray = new Array()),
                (t.attackCDTime = 2),
                (t.attackTime = 0),
                (t.isFly = !1),
                (t.attack = 0),
                (t.isBoss = !1),
                (t.bossScale = 1),
                (t.callTime = 0),
                (t.hasExp = !0),
                (t.hurtTime = 0),
                (t.hasStoped = !1),
                (t.material = null),
                (t.picArray = []),
                (t.enemyStatusArray = new Array()), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.start = function() {}),
              (t.prototype.initEnemy = function(e, t) {
                if (
                  (void 0 === t && (t = !1),
                    (this.type = e),
                    (this.speed = 0.8 * Number(i.ENEMY_CONFIG[this.type - 1][2])),
                    (this.totalHp = (Number(i.ENEMY_CONFIG[this.type - 1][3]) * Math.pow(1.05, l.default.gameInstance.subStage) * Math.pow(1.25, l.default.gameInstance.stage - 1)) / 4), 1 == l.default.gameInstance.stage && (this.totalHp *= 0.7),
                    (this.isBoss = t), this.isBoss)) {
                  this.totalHp *= 3;
                  for (var n = 0; n < l.default.gameInstance.towerChoiceArray.length; n++)
                    if (142 == l.default.gameInstance.towerChoiceArray[n][0]) {
                      var a = l.default.gameInstance.towerChoiceArray[n][1];
                      1 == a ? (this.totalHp *= 0.8) : 2 == a ? (this.totalHp *= 0.7) : 3 == a && (this.totalHp *= 0.6);
                      break;
                    }
                    ((this.speed *= 0.9),
                      (this.bloodNode = cc.instantiate(this.bloodPrefab)),
                      (this.bloodNode.scale = Number(i.ENEMY_CONFIG[this.type - 1][11]) / 6), this.bloodNode.setPosition(this.getX(), this.getTopY()),
                      (this.bloodNode.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = 1), l.default.gameInstance.gameLayer.getChildByName("effect").addChild(this.bloodNode));
                }
                ((this.range = Number(i.ENEMY_CONFIG[this.type - 1][4])),
                  (this.attack = Number(i.ENEMY_CONFIG[this.type - 1][5]) * Math.pow(1.2, l.default.gameInstance.stage)),
                  (this.attackCDTime = Number(i.ENEMY_CONFIG[this.type - 1][6], )), 1 == Number(i.ENEMY_CONFIG[this.type - 1][7]) && (this.isFly = !0),
                  (this.hp = this.totalHp),
                  (this.node.scale = Number(i.ENEMY_CONFIG[this.type - 1][10])),
                  (this.material = this.node.getChildByName("node").getComponent(cc.Sprite).getMaterial(0)), this.material.setProperty("u_rate", 1));
              }),
              (t.prototype.initTempEnemy = function(e) {
                ((this.type = e),
                  (this.node.scale = (Number(i.ENEMY_CONFIG[this.type - 1][10]) / (0.2 * (Number(i.ENEMY_CONFIG[this.type - 1][11]) - 1) + 1)) * 1.3));
              }),
              (t.prototype.checkAngle = function() {
                var e = 1;
                (l.default.gameInstance && (e = l.default.gameInstance.gameSpeed), 1 == Number(i.ENEMY_CONFIG[this.type - 1][9]) ? this.angle <= 180 ? ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[Math.floor((this.angle + 22.5) / 45)]),
                  (this.node.getChildByName("node").scaleX = 1)) : ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[Math.floor((360 - this.angle + 22.5) / 45)]),
                  (this.node.getChildByName("node").scaleX = -1)) : 2 == Number(i.ENEMY_CONFIG[this.type - 1][9]) ? this.angle <= 180 ? ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[2 * Math.floor((this.angle + 22.5) / 45) + (Math.floor((this.timer * e) / 4) % 2)]),
                  (this.node.getChildByName("node").scaleX = 1)) : ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[2 * Math.floor((360 - this.angle + 22.5) / 45) + (Math.floor((this.timer * e) / 4) % 2)]),
                  (this.node.getChildByName("node").scaleX = -1)) : 3 == Number(i.ENEMY_CONFIG[this.type - 1][9]) && (this.angle <= 180 ? ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[5 * Math.floor((this.angle + 22.5) / 45) + (Math.floor((this.timer * e) / 6) % 5)]),
                  (this.node.getChildByName("node").scaleX = 1)) : ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = this.picArray[5 * Math.floor((360 - this.angle + 22.5) / 45) + (Math.floor((this.timer * e) / 6) % 5)]),
                  (this.node.getChildByName("node").scaleX = -1))), 1 == Number(i.ENEMY_CONFIG[this.type - 1][8]) && (Math.floor((this.timer * e) / 6) % 2 == 0 ? (this.node.getChildByName("node").y += 0.3) : (this.node.getChildByName("node").y -= 0.3)));
              }),
              (t.prototype.getTheAngleWithAim = function(e, t) {
                var i = 0;
                return (t == this.node.y ? (i = e >= this.node.x ? 90 : 270) : ((i = (180 * Math.atan((e - this.node.x) / (t - this.node.y))) / Math.PI), t <= this.node.y && (i += 180)), this.changeAngleTo360(i));
              }),
              (t.prototype.changeAngleTo360 = function(e) {
                return ((e %= 360) < 0 && (e += 360), e);
              }),
              (t.prototype.doHurt = function(e, t, i, n) {
                if (
                  (void 0 === n && (n = !1),
                    [
                      [7, 17, 21, 22, 24, 26, 27, 28],
                      [3, 10, 14, 17, 22, 23, 29],
                      [4, 11, 12, 15, 18, 19, 23, 26],
                      [5, 18, 19, 20, 24, 25, 27, 28],
                      [6, 8, 9, 13, 16, 20, 25, 29],
                    ][
                      ["物理", "生化", "冷冻", "燃爆", "脉冲"].indexOf(d.default.TOWER_CONFIG[e - 1][3] + "", )
                    ].indexOf(this.type) >= 0 && (t /= 2), n && (this.strike = !0),
                    (t = this.stoneChangeHurt(e, t)),
                    (this.hp -= t),
                    (this.hurt = t),
                    (this.hurtTime = 0.16), i))
                  for (var a = 0; a < i.length; a++) this.changeStatus(i[a]);
              }),
              (t.prototype.stoneChangeHurt = function(e, t) {
                var i,
                  n = t;
                if (
                  (i = l.default.getStoneLevelWithType(10103)) && i.length > 0)
                  for (var a = 0; a < i.length; a++) {
                    var o = h.default.getStoneEffectWithType(10103, i[a]);
                    n += (t * Number(o)) / 100;
                  }
                if (
                  (i = l.default.getStoneLevelWithType(10420 + e)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10420 + e, i[a])),
                      (n += (t * Number(o)) / 100));
                var r = ["物理", "生化", "冷冻", "燃爆", "脉冲"].indexOf(d.default.TOWER_CONFIG[e - 1][3] + "", );
                if (
                  (i = l.default.getStoneLevelWithType(10107 + r)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10107 + r, i[a])),
                      (n += (t * Number(o)) / 100));
                if (l.default.gameInstance.subStage <= 5 && (i = l.default.getStoneLevelWithType(10120)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10120, i[a])),
                      (n += (t * Number(o)) / 100));
                if (this.hasBadStatus() && (i = l.default.getStoneLevelWithType(10121)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10121, i[a])),
                      (n += (t * Number(o)) / 100));
                if (this.isBoss && (i = l.default.getStoneLevelWithType(10122)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10122, i[a])),
                      (n += t * (1 + Number(o) / 100)));
                if (this.hp > 0.7 * this.totalHp) {
                  var s = l.default.getStoneLevelWithType(10113);
                  if (s && s.length > 0)
                    for (a = 0; a < s.length; a++)
                      ((o = h.default.getStoneEffectWithType(10113, s[a])),
                        (n += (t * Number(o)) / 100));
                }
                if (
                  (i = l.default.getStoneLevelWithType(10206)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10206, i[a])),
                      (n += (t * Number(o) * l.default.gameInstance.getTowerNum()) / 100));
                if (l.default.gameInstance.wallHp < 0.3 * l.default.gameInstance.wallTotalHp && (i = l.default.getStoneLevelWithType(10407)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10407, i[a])),
                      (n += (t * Number(o)) / 100));
                if (Math.sqrt(
                    (this.node.x - 0) * (this.node.x - 0) + (this.node.y - 0) * (this.node.y - 0), ) < 150 && (i = l.default.getStoneLevelWithType(10408)) && i.length > 0)
                  for (a = 0; a < i.length; a++)
                    ((o = h.default.getStoneEffectWithType(10408, i[a])),
                      (n += (t * Number(o)) / 100));
                return n;
              }),
              (t.prototype.move = function(e) {
                if (!this.stop) {
                  this.angle = this.getTheAngleWithAim(0, 0);
                  var t = -40,
                    n = 40,
                    a = 0,
                    o = 0,
                    r = 170;
                  8 == l.default.gameInstance.fieldTowerNum && ((t = 0), (n = 0), (a = 65), (o = -65), (r = 210));
                  var s = this.speed,
                    c = this.getStatus(i.STATUS_SLOW);
                  c && (s *= 1 - c[2] / 100);
                  for (var d = 0; d < l.default.gameInstance.towerChoiceArray.length; d++)
                    if (140 == l.default.gameInstance.towerChoiceArray[d][0]) {
                      var h = l.default.gameInstance.towerChoiceArray[d][1];
                      1 == h ? (s *= 0.9) : 2 == h ? (s *= 0.85) : 3 == h && (s *= 0.8);
                      break;
                    }
                    (Math.sqrt(
                      (this.node.x - t) * (this.node.x - t) + (this.node.y - a) * (this.node.y - a), ) + Math.sqrt(
                      (this.node.x - n) * (this.node.x - n) + (this.node.y - o) * (this.node.y - o), ) > r + Math.sqrt(Math.pow(
                      (this.node.getChildByName("node").width / 2) * this.node.scaleX, 2, ) + Math.pow(
                      (this.node.getChildByName("node").height / 2) * this.node.scaleY, 2, ), ) + 6 * (this.range - 1) ? ((this.node.x += Math.sin((this.angle * Math.PI) / 180) * s * e),
                      (this.node.y += Math.cos((this.angle * Math.PI) / 180) * s * e)) : ((this.attackTime += e), this.attackTime >= this.attackCDTime && (this.doAttack(), (this.attackTime = 0))), this.isFly ? (this.node.zIndex = 2e3 - this.node.y) : (this.node.zIndex = 1e3 - this.node.y), this.checkAngle());
                }
              }),
              (t.prototype.enemyOver = function() {
                var e,
                  t = 0;
                if (this.hasExp && (e = l.default.getStoneLevelWithType(10409)) && e.length > 0)
                  for (var n = 0; n < e.length; n++) {
                    var a = h.default.getStoneEffectWithType(10409, e[n]);
                    t += Number(a);
                  }
                if (this.isBoss && (e = l.default.getStoneLevelWithType(10410)) && e.length > 0)
                  for (n = 0; n < e.length; n++)
                    ((a = h.default.getStoneEffectWithType(10410, e[n])),
                      (t += (l.default.gameInstance.wallTotalHp * Number(a)) / 100));
                t > 0 && l.default.gameInstance.wallHurtArray.push([-t, this.node.x]);
                var o = cc.instantiate(this.deadPrefab);
                (o.setPosition(this.node.x, this.node.y),
                  (o.scale = Number(i.ENEMY_CONFIG[this.type - 1][11])), this.isFly ? (o.y += 25 * Number(i.ENEMY_CONFIG[this.type - 1][11])) : (o.y += 10 * Number(i.ENEMY_CONFIG[this.type - 1][11])),
                  (o.getComponent("effect").frame_time = 0.05 / l.default.gameInstance.gameSpeed), l.default.gameInstance.gameLayer.getChildByName("effect").addChild(o), this.bloodNode && (this.bloodNode.removeFromParent(), this.bloodNode.destroy()),
                  (this.node.active = !1), this.node.removeFromParent(), this.node.destroy());
              }),
              (t.prototype.update = function(e) {
                0 != this.type && (this.stop || this.timer++, null != l.default.gameInstance ? l.default.gameInstance.isPause || l.default.gameInstance.isOver || (this.hurtTime > 0 && ((this.hurtTime -= e * l.default.gameInstance.gameSpeed), this.hurtTime < 0 && (this.hurtTime = 0), this.material.setProperty("u_rate", Math.abs(this.hurtTime - 0.08) / 0.08, )), this.checkStatus(e * l.default.gameInstance.gameSpeed), this.move(e * l.default.gameInstance.gameSpeed), this.bloodNode && (this.bloodNode.setPosition(this.getX(), this.getTopY(), ),
                  (this.bloodNode.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = this.hp / this.totalHp))) : this.checkAngle());
              }),
              (t.prototype.getX = function() {
                return this.node.x;
              }),
              (t.prototype.getY = function() {
                return (this.node.y + this.node.getChildByName("clip").y * this.node.scale);
              }),
              (t.prototype.getTopY = function() {
                return (this.node.y + (this.node.getChildByName("node").y + this.node.getChildByName("node").height / 2) * this.node.scale - 10);
              }),
              (t.prototype.clearStatus = function(e) {
                for (var t = 0; t < this.enemyStatusArray.length; t++)
                  if (this.enemyStatusArray[t][0] == e) {
                    ((this.enemyStatusArray[t][4].active = !1), this.enemyStatusArray[t][4].destroy(), this.enemyStatusArray.splice(t, 1));
                    break;
                  }
              }),
              (t.prototype.doAttack = function() {
                for (var e = this.attack, t = 0; t < l.default.gameInstance.towerChoiceArray.length; t++)
                  if (141 == l.default.gameInstance.towerChoiceArray[t][0]) {
                    var i = l.default.gameInstance.towerChoiceArray[t][1];
                    1 == i ? (e *= 0.8) : 2 == i ? (e *= 0.7) : 3 == i && (e *= 0.6);
                    break;
                  }
                if (l.default.gameInstance.wallAttackTime > 0) {
                  if (
                    (l.default.gameInstance.wallAttackTime--,
                      (o = l.default.getStoneLevelWithType(10402)) && o.length > 0)) {
                    var n = 0;
                    for (t = 0; t < o.length; t++) {
                      var a = h.default.getStoneEffectWithType(10402, o[t]).split(";");
                      n += (u.default.getEquipTotalPower() * Number(a[1])) / 100;
                    }
                    ((this.hp -= n), (this.hurt += n));
                  }
                  e = 0;
                } else {
                  var o;
                  if (
                    (o = l.default.getStoneLevelWithType(10401)) && o.length > 0)
                    for (t = 0; t < o.length; t++)
                      ((a = h.default.getStoneEffectWithType(10401, o[t]).split(";")),
                        (e -= Number(a[1])));
                  e < 0 && (e = 0);
                }
                l.default.gameInstance.wallHurtArray.push([e, this.node.x]);
              }),
              (t.prototype.getStatus = function(e) {
                for (var t = 0; t < this.enemyStatusArray.length; t++)
                  if (this.enemyStatusArray[t][0] == e) return this.enemyStatusArray[t];
                return null;
              }),
              (t.prototype.hasBadStatus = function() {
                for (var e = 0; e < this.enemyStatusArray.length; e++)
                  if (this.enemyStatusArray[e][0] < 9) return !0;
                return !1;
              }),
              (t.prototype.checkStatus = function(e) {
                if (!l.default.gameInstance.isOver)
                  for (var t = 0; t < this.enemyStatusArray.length; t++)
                    ((this.enemyStatusArray[t][0] != i.STATUS_FREEZE && this.enemyStatusArray[t][0] != i.STATUS_FAINT) || (this.stop = !0),
                      (this.enemyStatusArray[t][3] += e),
                      (this.enemyStatusArray[t][0] != i.STATUS_BURN && this.enemyStatusArray[t][0] != i.STATUS_FREEZE && this.enemyStatusArray[t][0] != i.STATUS_POISON && this.enemyStatusArray[t][0] != i.STATUS_RESTORE) || (this.enemyStatusArray[t][3] >= 1 && ((this.hp -= this.enemyStatusArray[t][2]),
                        (this.hurt += this.enemyStatusArray[t][2]),
                        (this.enemyStatusArray[t][3] -= 1),
                        (this.enemyStatusArray[t][1] -= 1))), this.enemyStatusArray[t][0] != i.STATUS_SHIELD && this.enemyStatusArray[t][3] > this.enemyStatusArray[t][1] && (this.enemyStatusArray[t][4] && this.enemyStatusArray[t][4].active && ((this.enemyStatusArray[t][4].active = !1), this.enemyStatusArray[t][4].destroy()), this.enemyStatusArray[t][0] == i.STATUS_FREEZE ? ((this.stop = !1),
                        (this.node.getChildByName("node").color = cc.color(255, 255, 255, ))) : this.enemyStatusArray[t][0] == i.STATUS_POISON ? (this.node.getChildByName("node").color = cc.color(255, 255, 255)) : this.enemyStatusArray[t][0] == i.STATUS_BURN ? (this.node.getChildByName("node").color = cc.color(255, 255, 255)) : this.enemyStatusArray[t][0] == i.STATUS_FAINT && (this.stop = !1), this.enemyStatusArray.splice(t, 1), t--));
              }),
              (t.prototype.changeStatus = function(e) {
                var t = !0,
                  n = this.getStatus(i.STATUS_SHIELD);
                if (!(n || (this.noRelive && e[0] == i.STATUS_RESTORE)))
                  if (this.hasStoped && (e[0] == i.STATUS_FAINT || i.STATUS_FREEZE || i.STATUS_SLOW)) this.hasStoped = !1;
                  else {
                    switch (e[0]) {
                      case i.STATUS_BURN:
                        if (
                          [5, 18, 19, 20, 24, 25, 27, 28].indexOf(this.type) >= 0) return;
                        this.node.getChildByName("node").color = cc.color(255, 214, 0, );
                        break;
                      case i.STATUS_FREEZE:
                        if (
                          [4, 11, 15, 18, 19, 21, 23, 26, 29].indexOf(this.type, ) >= 0) return;
                        this.node.getChildByName("node").color = cc.color(60, 200, 255, );
                        break;
                      case i.STATUS_SLOW:
                        if (
                          [3, 10, 11, 13, 14, 17, 22, 23, 29].indexOf(this.type, ) >= 0) return;
                        break;
                      case i.STATUS_BREAK:
                        if ([8, 12, 14, 21, 28].indexOf(this.type) >= 0) return;
                        break;
                      case i.STATUS_BACK:
                        if ((n = this.getStatus(i.STATUS_STRONG))) return;
                        if (
                          [2, 7, 13, 15, 17, 22, 24, 26, 27].indexOf(this.type, ) >= 0) return;
                        (this.isBoss && (e[2] *= 0.5), this.node.runAction(cc.moveBy(0.1 / l.default.gameInstance.gameSpeed, -Math.sin((this.angle * Math.PI) / 180) * e[2], -Math.cos((this.angle * Math.PI) / 180) * e[2], ), ),
                          (t = !1));
                        break;
                      case i.STATUS_POISON:
                        if ([].indexOf(this.type) >= 0) return;
                        this.node.getChildByName("node").color = cc.color(214, 0, 255, );
                        break;
                      case i.STATUS_FAINT:
                        if (
                          [6, 10, 14, 16, 20, 23, 25, 29].indexOf(this.type) >= 0) return;
                        break;
                      case i.STATUS_DRAG:
                        if ((n = this.getStatus(i.STATUS_STRONG))) return;
                        ([2, 7, 12, 15, 24, 25].indexOf(this.type) >= 0 || (this.isBoss && ((e[1] /= 2), (e[2] /= 2)), this.node.runAction(cc.moveBy(0.3 / l.default.gameInstance.gameSpeed, e[1], e[2], ), )),
                          (t = !1));
                        break;
                      case i.STATUS_SHIELD:
                      case i.STATUS_RESTORE:
                      case i.STATUS_STRONG:
                    }
                    if (t) {
                      var a = this.getStatus(e[0]);
                      if (null != a)
                        if (0 == e[1] && 0 == e[2]) this.clearStatus(e[0]);
                        else {
                          if (e[0] == i.STATUS_FAINT || e[0] == i.STATUS_FREEZE) return;
                          if (e[1] > 0) {
                            this.isBoss ? (e[1] /= 6) : (e[1] /= 2);
                            var o = l.default.getStoneLevelWithType(10114);
                            if (o && o.length > 0)
                              for (var r = 0; r < o.length; r++) {
                                var s = h.default.getStoneEffectWithType(10114, o[r], );
                                e[1] = e[1] * (1 + Number(s) / 100);
                              }
                              (e[1] > a[1] && (a[1] = e[1]), e[2] > a[2] && (a[2] = e[2]),
                                (a[3] = 0));
                          }
                        }
                      else {
                        var c = cc.instantiate(l.default.gameInstance.effectArray[e[0] - 1], );
                        if (
                          (this.node.addChild(c), c.setPosition(0, 0), e[0] == i.STATUS_POISON || e[0] == i.STATUS_SHIELD || e[0] == i.STATUS_RESTORE || e[0] == i.STATUS_SLOW || e[0] == i.STATUS_STRONG || e[0] == i.STATUS_BREAK))
                          (((d = c.getComponent(cc.Animation).play()).wrapMode = cc.WrapMode.Loop),
                            (d.speed = l.default.gameInstance.gameSpeed),
                            (c.scale = 0.8 * Number(i.ENEMY_CONFIG[this.type - 1][11])));
                        else if (e[0] == i.STATUS_FAINT) {
                          var d;
                          (((d = c.getComponent(cc.Animation).play()).wrapMode = cc.WrapMode.Loop),
                            (d.speed = l.default.gameInstance.gameSpeed),
                            (c.scaleX = 0.8 * Number(i.ENEMY_CONFIG[this.type - 1][11])),
                            (c.scaleY = 0.45 * 0.8 * Number(i.ENEMY_CONFIG[this.type - 1][11])));
                        } else((c.getComponent("effect").frame_time = 0.1 / l.default.gameInstance.gameSpeed),
                          (c.scale = 0.8 * Number(i.ENEMY_CONFIG[this.type - 1][11])));
                        c.y = Number(i.ENEMY_CONFIG[this.type - 1][11]) * [8, 10, 30, 25, 0, 30, 60, 0, 28, 25, 36][e[0] - 1];
                        var u = [e[0], e[1], e[2], 0, c];
                        this.enemyStatusArray.push(u);
                      }
                    }
                  }
              }),
              (t.ENEMY_CONFIG = [
                ["步兵", "", 30, 160, 1, 10, 2, 0, 0, 3, 0.95, 1, "无特殊属性"],
                ["超级士兵", "",
                  20,
                  240,
                  1,
                  12.5,
                  2.5,
                  0,
                  0,
                  3,
                  0.95,
                  1.2, "不会被击退、牵引",
                ],
                ["生化兵", "",
                  25,
                  192,
                  1,
                  10,
                  2,
                  0,
                  0,
                  3,
                  0.95,
                  1, "降低生化武器的伤害，不会被减速",
                ],
                ["极地兵", "",
                  25,
                  192,
                  1,
                  10,
                  2,
                  0,
                  0,
                  3,
                  0.95,
                  1, "降低冷冻武器的伤害，不会被冰冻",
                ],
                ["火焰兵", "",
                  25,
                  192,
                  1,
                  10,
                  2,
                  0,
                  0,
                  3,
                  0.95,
                  1, "降低燃爆武器的伤害，不会燃烧",
                ],
                ["情报员", "",
                  40,
                  200,
                  1.5,
                  7.5,
                  1.5,
                  0,
                  1,
                  1,
                  0.95,
                  1.2, "降低脉冲武器的伤害，不会眩晕",
                ],
                ["战骑兵", "",
                  35,
                  220,
                  2,
                  12.5,
                  2.5,
                  0,
                  1,
                  1,
                  0.95,
                  1.2, "降低物理武器的伤害，不会被击退、牵引",
                ],
                ["医疗兵", "",
                  30,
                  160,
                  1.5,
                  10,
                  2,
                  0,
                  0,
                  3,
                  0.95,
                  1, "降低脉冲武器的伤害，不会被破甲，每秒回血2%",
                ],
                ["机动组", "",
                  32,
                  230,
                  1.5,
                  12.5,
                  2.5,
                  0,
                  1,
                  1,
                  0.95,
                  1.2, "降低脉冲武器的伤害，自带5次护盾",
                ],
                ["战车", "",
                  26,
                  240,
                  1,
                  15,
                  3,
                  0,
                  1,
                  1,
                  0.95,
                  1.3, "降低生化武器的伤害，不会被减速、眩晕",
                ],
                ["炮车", "",
                  33,
                  230,
                  1,
                  12.5,
                  2.5,
                  0,
                  1,
                  1,
                  0.95,
                  1.2, "降低冷冻武器的伤害，不会被减速、冰冻",
                ],
                ["运输车", "",
                  28,
                  260,
                  1.5,
                  16,
                  3,
                  0,
                  1,
                  1,
                  0.95,
                  1.8, "降低冷冻武器的伤害，不会被牵引、冰冻",
                ],
                ["吉普车", "",
                  35,
                  240,
                  1.5,
                  12.5,
                  2.5,
                  0,
                  1,
                  1,
                  0.95,
                  1.5, "降低脉冲武器的伤害，不会被减速、击退",
                ],
                ["双翼飞机", "",
                  42,
                  260,
                  1,
                  10,
                  2,
                  1,
                  1,
                  2,
                  0.95,
                  1.6, "降低生化武器的伤害，不会被减速、破甲、眩晕",
                ],
                ["福克战机", "",
                  45,
                  250,
                  1.5,
                  10,
                  2,
                  1,
                  1,
                  2,
                  0.95,
                  1.8, "降低冷冻武器的伤害，不会被牵引、击退、冰冻",
                ],
                ["飞艇", "",
                  33,
                  300,
                  1.5,
                  15,
                  3,
                  1,
                  0,
                  1,
                  0.6,
                  1.8, "降低脉冲武器的伤害，不会被眩晕，每秒回血3%",
                ],
                ["侦察机", "",
                  55,
                  190,
                  1,
                  7.5,
                  1.5,
                  1,
                  1,
                  2,
                  1,
                  1.4, "降低物理、生化武器的伤害，不会被减速、击退",
                ],
                ["双翼小将", "",
                  42,
                  260,
                  1,
                  10,
                  2,
                  1,
                  1,
                  2,
                  0.95,
                  1.6, "降低冷冻、燃爆武器的伤害，不会被冰冻、燃烧",
                ],
                ["直升机", "",
                  36,
                  300,
                  1.5,
                  12.5,
                  2.5,
                  1,
                  1,
                  2,
                  0.95,
                  1.5, "降低冷冻、燃爆武器的伤害，不会被冰冻、燃烧",
                ],
                ["双翼战将", "",
                  42,
                  260,
                  1,
                  10,
                  2,
                  1,
                  1,
                  1,
                  0.95,
                  1.6, "降低脉冲、燃爆武器的伤害，不会被眩晕、燃烧",
                ],
                ["轰炸机", "",
                  45,
                  250,
                  1.5,
                  12.5,
                  2.5,
                  1,
                  1,
                  2,
                  0.95,
                  1.8, "降低物理武器的伤害，不会被冰冻、破甲，自带6次护盾",
                ],
                ["近地战机", "",
                  45,
                  250,
                  1.5,
                  12.5,
                  2.5,
                  1,
                  1,
                  1,
                  0.95,
                  1.8, "降低生化、物理武器的伤害，不会被减速、击退",
                ],
                ["运输直升机", "",
                  34,
                  400,
                  1,
                  35,
                  3.5,
                  1,
                  1,
                  2,
                  1.2,
                  2.2, "降低生化、冷冻武器的伤害，不会被眩晕、冰冻、减速",
                ],
                ["导弹车", "",
                  28,
                  480,
                  2,
                  50,
                  5,
                  0,
                  1,
                  1,
                  1,
                  2.2, "降低燃爆、物理武器的伤害，不会被牵引、燃烧、击退",
                ],
                ["陆霸", "",
                  28,
                  480,
                  2,
                  40,
                  4,
                  0,
                  1,
                  1,
                  1,
                  2.2, "降低燃爆、脉冲武器的伤害，不会被眩晕、燃烧、牵引",
                ],
                ["幽灵飞艇", "",
                  32,
                  450,
                  2,
                  40,
                  4,
                  1,
                  0,
                  1,
                  1,
                  2.2, "降低物理、冷冻武器的伤害，不会被击退、冰冻，自带15次护盾",
                ],
                ["隐身飞艇", "",
                  32,
                  450,
                  2,
                  40,
                  4,
                  1,
                  0,
                  1,
                  1,
                  2.2, "降低燃爆、物理武器的伤害，不会被击退、燃烧，每秒回血4%",
                ],
                ["碾压者", "",
                  28,
                  480,
                  2,
                  40,
                  4,
                  0,
                  1,
                  1,
                  1,
                  2.2, "降低燃爆、物理武器的伤害，不会被破甲、燃烧，自带强化",
                ],
                ["弹药库", "",
                  32,
                  450,
                  1.5,
                  50,
                  5,
                  1,
                  1,
                  1,
                  0.6,
                  2.2, "降低生化、脉冲武器的伤害，不会被眩晕、冰冻、减速",
                ],
                ["黄金飞艇", "", 55, 60, 1, 0, 5, 1, 0, 1, 0.6, 1.6, ""],
              ]),
              (t.STATUS_BURN = 1),
              (t.STATUS_FREEZE = 2),
              (t.STATUS_SLOW = 3),
              (t.STATUS_BREAK = 4),
              (t.STATUS_BACK = 5),
              (t.STATUS_POISON = 6),
              (t.STATUS_FAINT = 7),
              (t.STATUS_DRAG = 8),
              (t.STATUS_SHIELD = 9),
              (t.STATUS_RESTORE = 10),
              (t.STATUS_STRONG = 11), o([c(cc.Prefab)], t.prototype, "bulletPrefab", void 0), o([c(cc.Prefab)], t.prototype, "deadPrefab", void 0), o([c(cc.Prefab)], t.prototype, "bloodPrefab", void 0), o([c([cc.SpriteFrame])], t.prototype, "picArray", void 0),
              (i = o([s], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
