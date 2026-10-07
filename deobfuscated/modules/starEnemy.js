// module: starEnemy
// deps: {"../data/bufferData":"bufferData","../data/stageData":"stageData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9a8ccz0qOtLcaVKMQRIVBgG", "starEnemy");
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
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.EnemyConfig_en = i.EnemyConfig = i.EnemyType = void 0));
        var r,
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = e("../libppgame/libcocos"),
          h = e("../libppgame/audioMgr"),
          u = e("../data/stageData"),
          p = e("../gameData"),
          f = e("../data/bufferData"),
          g = e("../playerData");
        ((function(e) {
            ((e[(e.XIAO_GOU = 1)] = "XIAO_GOU"),
              (e[(e.CHI_SHE = 2)] = "CHI_SHE"),
              (e[(e.DA_NIU = 3)] = "DA_NIU"),
              (e[(e.DI_CHI = 4)] = "DI_CHI"),
              (e[(e.FEI_LONG = 5)] = "FEI_LONG"),
              (e[(e.TIAN_ZHU = 6)] = "TIAN_ZHU"),
              (e[(e.TUN_SHI_ZHE = 7)] = "TUN_SHI_ZHE"),
              (e[(e.SHA_CHONG = 8)] = "SHA_CHONG"),
              (e[(e.XIE_ZI = 9)] = "XIE_ZI"),
              (e[(e.NV_HUANG = 10)] = "NV_HUANG"));
          })((r = i.EnemyType || (i.EnemyType = {}))),
          (i.EnemyConfig = [{
            comment: [2, 3],
            name: "小狗",
            hp: 60,
            attack: 16,
            speed: 80,
            range: 60,
            cdTime: 0.6,
            isSky: 0,
            isBullet: !1,
            size: 1,
            text: "小型地面单位，依靠数量取胜",
            attackRate: [1, 0],
            bossRate: 4,
            power: 1,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [3, 4],
            name: "赤蛇",
            hp: 120,
            attack: 18,
            speed: 60,
            range: 160,
            cdTime: 0.8,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "中型地面单位，拥有较高的对空能力",
            attackRate: [1, 1],
            bossRate: 3,
            power: 3,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [6, 5],
            name: "猛犸",
            hp: 320,
            attack: 65,
            speed: 70,
            range: 85,
            cdTime: 2,
            isSky: 0,
            isBullet: !1,
            size: 3,
            text: "大型地面单位，皮糙肉厚，血量极高",
            attackRate: [1, 0],
            bossRate: 2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [4, 6],
            name: "地刺",
            hp: 150,
            attack: 20,
            speed: 65,
            range: 150,
            cdTime: 1.6,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "中型地面单位，对地面单位造成穿透伤害",
            attackRate: [1, 0],
            bossRate: 2.5,
            power: 5,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [9, 7],
            name: "飞龙",
            hp: 120,
            attack: 30,
            speed: 75,
            range: 180,
            cdTime: 1,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "中型空中单位，可对地面和空中单位造成伤害",
            attackRate: [1, 1],
            bossRate: 2.5,
            power: 7,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [8, 10],
            name: "守护者",
            hp: 160,
            attack: 45,
            speed: 58,
            range: 280,
            cdTime: 1.2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "大型空中单位，对地面单位造成恐怖的伤害",
            attackRate: [1, 0],
            bossRate: 2.2,
            power: 9,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [2, 9],
            name: "吞噬者",
            hp: 150,
            attack: 50,
            speed: 58,
            range: 220,
            cdTime: 1.2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "大型空中单位，对空中单位造成麻痹伤害",
            attackRate: [0.7, 1],
            bossRate: 2.2,
            power: 7,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [5, 6],
            name: "沙虫",
            hp: 280,
            attack: 35,
            speed: 62,
            range: 90,
            cdTime: 1,
            isSky: 0,
            isBullet: !1,
            size: 3,
            text: "大型地面单位，行动较慢但是血量和攻击都高",
            attackRate: [1, 1],
            bossRate: 2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [10, 6],
            name: "蝎子",
            hp: 120,
            attack: 25,
            speed: 56,
            range: 180,
            cdTime: 1.4,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "中型地面单位，可对地面单位造成范围攻击",
            attackRate: [1, 0],
            bossRate: 2.4,
            power: 6,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [7, 8],
            name: "女皇",
            hp: 150,
            attack: 80,
            speed: 68,
            range: 150,
            cdTime: 2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "大型空中单位，可对中小型单位造成致命伤害",
            attackRate: [1, 1],
            bossRate: 2.2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, ]),
          (i.EnemyConfig_en = [{
            comment: [2, 3],
            name: "Zergling",
            hp: 60,
            attack: 16,
            speed: 80,
            range: 60,
            cdTime: 0.6,
            isSky: 0,
            isBullet: !1,
            size: 1,
            text: "Small ground units, relying on numbers to win",
            attackRate: [1, 0],
            bossRate: 4,
            power: 1,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [3, 4],
            name: "Hydralisk",
            hp: 120,
            attack: 18,
            speed: 60,
            range: 160,
            cdTime: 0.8,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "Medium ground unit with strong anti-air capabilities",
            attackRate: [1, 1],
            bossRate: 3,
            power: 3,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [6, 5],
            name: "Ultralisk",
            hp: 320,
            attack: 65,
            speed: 70,
            range: 85,
            cdTime: 2,
            isSky: 0,
            isBullet: !1,
            size: 3,
            text: "Large ground unit, thick-skinned and tough, with extremely high health points",
            attackRate: [1, 0],
            bossRate: 2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [4, 6],
            name: "Lurker",
            hp: 150,
            attack: 20,
            speed: 65,
            range: 150,
            cdTime: 1.6,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "Medium ground unit that deals piercing damage to ground units",
            attackRate: [1, 0],
            bossRate: 2.5,
            power: 5,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [9, 7],
            name: "Mutalisk",
            hp: 120,
            attack: 30,
            speed: 75,
            range: 180,
            cdTime: 1,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "Medium aerial unit capable of dealing damage to both ground and air units",
            attackRate: [1, 1],
            bossRate: 2.5,
            power: 7,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [8, 10],
            name: "Grardian",
            hp: 160,
            attack: 45,
            speed: 58,
            range: 280,
            cdTime: 1.2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "Large aerial units that deal terrifying damage to ground units",
            attackRate: [1, 0],
            bossRate: 2.2,
            power: 9,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [2, 9],
            name: "Devonrer",
            hp: 150,
            attack: 50,
            speed: 58,
            range: 220,
            cdTime: 1.2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "Large aerial unit that deals paralyzing damage to aerial units",
            attackRate: [0.7, 1],
            bossRate: 2.2,
            power: 7,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [5, 6],
            name: "Sandworm",
            hp: 280,
            attack: 35,
            speed: 62,
            range: 90,
            cdTime: 1,
            isSky: 0,
            isBullet: !1,
            size: 3,
            text: "Large ground unit, slow-moving but with high health and attack",
            attackRate: [1, 1],
            bossRate: 2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [10, 6],
            name: "Defiler",
            hp: 120,
            attack: 25,
            speed: 56,
            range: 180,
            cdTime: 1.4,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "Medium ground unit capable of dealing area damage to ground units",
            attackRate: [1, 0],
            bossRate: 2.4,
            power: 6,
            bossText: "死亡后可分解成多条小狗",
          }, {
            comment: [7, 8],
            name: "Queen",
            hp: 150,
            attack: 80,
            speed: 68,
            range: 150,
            cdTime: 2,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "Large aerial unit capable of dealing fatal damage to small and medium-sized units",
            attackRate: [1, 1],
            bossRate: 2.2,
            power: 8,
            bossText: "死亡后可分解成多条小狗",
          }, ]));
        var y = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.rigidBody = null),
              (t.standImgArray = []),
              (t.moveImgArray = []),
              (t.attackImgArray = []),
              (t.isSky = 0),
              (t.isBullet = !1),
              (t.isBoss = 0),
              (t.type = 1),
              (t.hp = 0),
              (t.totalHp = 0),
              (t.attack = 0),
              (t.speed = 0),
              (t.range = 0),
              (t.cdTime = 0),
              (t.cdNow = 0),
              (t.size = 0),
              (t.attackRate = null),
              (t.status = 0),
              (t.imgIndex = 0),
              (t.dtTime = 0),
              (t.material = null),
              (t.effectName = ""),
              (t.effectTime = 0),
              (t.isTemp = !1),
              (t.aimNum = 1),
              (t.hurtTime = 0), t);
          }
          return (a(t, e),
            (t.prototype.start = function() {}),
            (t.prototype.addEffect = function(e, t, n) {
              if ((void 0 === n && (n = !1), this.effectTime <= 0 || n)) {
                if (
                  ((this.effectName = e),
                    (this.effectTime = t), this.isBoss && (this.effectTime /= 3), "ice" == this.effectName)) this.rigidBody.linearVelocity = cc.v2(0, 0);
                else if ("blood" == this.effectName) {
                  var a = 0;
                  (this.isBoss ? ((a = this.totalHp / 4), this.doHurt(a)) : ((a = this.totalHp / 3), this.doHurt(a)), a > 0 && p.default.gameInstance.showText(Math.floor(a) + "", {
                    x: this.node.x,
                    y: this.node.y
                  }, null, 1, ));
                }
                p.default.gameInstance.addEffectOnNode(e, 3 / i.EnemyConfig[this.type - 1].bossRate, {
                  x: 0,
                  y: 0
                }, this.effectTime, this.node, );
              }
            }),
            (t.prototype.initEnemy = function(e, t, n) {
              (void 0 === t && (t = 0), void 0 === n && (n = !1),
                (this.isTemp = n));
              var a = i.EnemyConfig[e - 1];
              if (
                ((this.isSky = a.isSky),
                  (this.isBullet = a.isBullet),
                  (this.size = a.size),
                  (this.attackRate = a.attackRate),
                  (this.isBoss = t), this.isBoss > 0 && (this.node.getChildByName("node").color = cc.color(255, 155, 0, )), n)) return (
                (this.status = 1),
                (this.node.scale *= a.bossRate / 2), void(this.isBoss > 0 && (this.node.scale *= 1.3)));
              this.type = e;
              var o = u.default.StageLevelsConfig[p.default.nowGameLevel - 1].fac,
                r = p.default.gameInstance.subLevel;
              ((this.totalHp = a.hp * Math.pow(1.06, r - 1) * o * 0.8),
                (this.attack = a.attack * Math.pow(1.03, r - 1) * o * 0.5),
                (this.speed = 0.7 * a.speed),
                (this.range = a.range),
                (this.cdTime = a.cdTime), t && (1 == t ? ((this.totalHp *= 3), (this.attack *= 2.5)) : ((this.totalHp *= 5), (this.attack *= 3.5)),
                  (this.speed *= 0.9),
                  (this.node.scale *= a.bossRate),
                  (this.aimNum = 3),
                  (this.range *= 1.2)),
                (this.hp = this.totalHp));
              var s = f.default.getBuffer();
              ((this.attack /= 1 + s.reduction / 100),
                (this.attack -= s.defense), this.attack < 1 && (this.attack = 1),
                (this.material = this.node.getChildByName("node").getComponent(cc.Sprite).getMaterial(0)), this.material.setProperty("u_rate", 1));
            }),
            (t.prototype.update = function(e) {
              if (this.isTemp) {
                if (p.default.inBattle) return (console.log("enemy destroy"), void this.node.destroy());
                if (
                  ((this.node.getChildByName("hp").active = !1),
                    (this.dtTime += e), this.dtTime > 0.1)) {
                  this.dtTime -= 0.1;
                  var t = null;
                  (0 == this.status ? (t = this.standImgArray) : 1 == this.status ? (t = this.moveImgArray) : 2 == this.status && (t = this.attackImgArray), null != t && t.length > 0 && (this.imgIndex >= t.length && ((this.imgIndex = 0), 2 == this.status && (this.status = 1)),
                    (this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = t[this.imgIndex]), this.imgIndex++));
                }
              } else if (
                (this.hurtTime > 0 && ((this.hurtTime -= e * p.default.gameSpeed), this.hurtTime < 0 && (this.hurtTime = 0), this.material.setProperty("u_rate", 0.05 + (Math.abs(this.hurtTime - 0.08) / 0.08) * 0.95, )), !p.default.gameInstance.isPause && p.default.gameInstance.isBattle)) {
                if (this.hp < this.totalHp || this.isBoss) {
                  if (
                    (this.node.scaleX * this.node.getChildByName("hp").scaleX < 0 && (this.node.getChildByName("hp").scaleX = -this.node.getChildByName("hp").scaleX),
                      (this.node.getChildByName("hp").active = !0),
                      (this.node.getChildByName("hp").getComponent(cc.ProgressBar).progress = this.hp / this.totalHp), this.hp <= 0)) {
                    (g.default.dailyArray[1]++, this.type == r.XIAO_GOU ? h.default.inst.playAudio("starcraft/dead_enemy_small") : this.type == r.CHI_SHE ? h.default.inst.playAudio("starcraft/dead_enemy_middle", ) : this.type == r.DA_NIU ? h.default.inst.playAudio("starcraft/dead_enemy_big", ) : this.type == r.DI_CHI ? h.default.inst.playAudio("starcraft/dead_enemy_middle", ) : this.type == r.FEI_LONG ? h.default.inst.playAudio("starcraft/dead_enemy_fly", ) : this.type == r.TIAN_ZHU ? h.default.inst.playAudio("starcraft/dead_enemy_big", ) : this.type == r.TUN_SHI_ZHE ? h.default.inst.playAudio("starcraft/dead_enemy_big", ) : this.type == r.SHA_CHONG ? h.default.inst.playAudio("starcraft/dead_enemy_big", ) : this.type == r.XIE_ZI ? h.default.inst.playAudio("starcraft/dead_enemy_middle", ) : this.type == r.NV_HUANG && h.default.inst.playAudio("starcraft/dead_enemy_big", ), this.isBoss ? (p.default.gameInstance.addEffect("dead1", 2, {
                        x: this.node.x,
                        y: this.node.y,
                      }), p.default.gameInstance.addEffectOnMap("dead2", 2, {
                        x: this.node.x,
                        y: this.node.y,
                      })) : (p.default.gameInstance.addEffect("dead1", 2 / i.EnemyConfig[this.type - 1].bossRate, {
                        x: this.node.x,
                        y: this.node.y
                      }, ), p.default.gameInstance.addEffectOnMap("dead2", 2 / i.EnemyConfig[this.type - 1].bossRate, {
                        x: this.node.x,
                        y: this.node.y
                      }, )),
                      (p.default.gameInstance.exp += p.default.gameInstance.getExp));
                    var n = p.default.gameInstance.enemyArray.indexOf(this.node, );
                    (n >= 0 && p.default.gameInstance.enemyArray.splice(n, 1), this.node.destroy(), 0 == p.default.gameInstance.enemyArray.length && p.default.gameInstance.isBattle && (p.default.gameInstance.subLevel == u.default.StageLevelsConfig[p.default.nowGameLevel - 1].wave - 1 ? p.default.gameInstance.gameWin() : p.default.gameInstance.overSubLevel()));
                  }
                } else this.node.getChildByName("hp").active = !1;
                (this.isSky ? (this.node.zIndex = 3e3 - this.node.y) : (this.node.zIndex = 1e3 - this.node.y),
                  (this.effectTime > 0 && ((this.effectTime -= e * p.default.gameSpeed), "ice" == this.effectName)) || (this.cdNow > 0 && (this.cdNow -= e * p.default.gameSpeed), this.checkMove(e * p.default.gameSpeed),
                    (this.dtTime += e * p.default.gameSpeed), this.dtTime > 0.06 && ((this.dtTime -= 0.06),
                      (t = null), 0 == this.status ? (t = this.standImgArray) : 1 == this.status ? (t = this.moveImgArray) : 2 == this.status && (t = this.attackImgArray), null != t && t.length > 0 && (this.imgIndex >= t.length && ((this.imgIndex = 0), 2 == this.status && (this.type == r.DI_CHI ? (this.status = 0) : (this.status = 1))),
                        (this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = t[this.imgIndex]), this.imgIndex++))));
              }
            }),
            (t.prototype.checkMove = function() {
              var e = this;
              this.effectTime > 0 && this.effectName;
              for (var t = 1e5, i = 1e5, n = null, a = 1e4, o = !1, r = 0, s = 0; s < p.default.gameInstance.armyArray.length; s++)
                if (
                  ((l = p.default.gameInstance.armyArray[s]).getComponent("starArmy", ).isSky && this.attackRate[1] > 0) || (!l.getComponent("starArmy").isSky && this.attackRate[0] > 0)) {
                  var c = Math.sqrt(Math.pow(this.node.x - t, 2) + Math.pow(this.node.y - i, 2), );
                  (d = Math.sqrt(Math.pow(this.node.x - l.x, 2) + Math.pow(this.node.y - l.y, 2), )) < c && ((t = l.x), (i = l.y), (n = l), (a = d), (o = !0), (r = 1));
                }
              for (s = 0; s < p.default.gameInstance.buildingArray.length; s++) {
                var l, d;
                if (!(l = p.default.gameInstance.buildingArray[s]).getComponent("building", ).isOver && this.attackRate[0] > 0)
                  ((c = Math.sqrt(Math.pow(this.node.x - t, 2) + Math.pow(this.node.y - i, 2), )),
                    (d = Math.sqrt(Math.pow(this.node.x - l.x, 2) + Math.pow(this.node.y - l.y, 2), )) < c && ((t = l.x),
                      (i = l.y),
                      (n = l),
                      (a = d),
                      (o = !0),
                      (r = 2)));
              }
              if (o)
                if (a > 400) {
                  var h = (f = -90),
                    u = (0.2 * Math.random() + 0.9) * this.speed * p.default.gameSpeed;
                  ((this.rigidBody.linearVelocity = cc.v2(u * Math.cos((h * Math.PI) / 180), u * Math.sin((h * Math.PI) / 180), )), 1 != this.status && ((this.imgIndex = 0), (this.status = 1)));
                } else {
                  var f;
                  if (
                    ((f = this.getTheAngle(this.node.x, this.node.y, t, i)) >= 0 && f < 80 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : f > 280 && f < 360 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : f > 100 && f <= 180 && 1 == this.node.scaleX ? (this.node.scaleX = -1) : f > 180 && f < 260 && 1 == this.node.scaleX && (this.node.scaleX = -1),
                      (1 == r && a <= this.range) || (2 == r && a <= this.range + n.getComponent("building").radio / 3))) {
                    if (this.cdNow <= 0) {
                      if (((this.cdNow += this.cdTime), this.isBullet))
                        if (1 == r) {
                          var g = n.getComponent("starArmy").isSky,
                            y = this.attack * this.attackRate[g],
                            m = this.node.x,
                            _ = this.node.y;
                          this.scheduleOnce(function() {
                            e.shootBullet(m, _, t, i, y, g);
                          }, 0.25 / p.default.gameSpeed);
                        } else {
                          var v = this.attack * this.attackRate[0],
                            b = this.node.x,
                            w = this.node.y;
                          this.scheduleOnce(function() {
                            e.shootBullet(b, w, t, i, v, 0);
                          }, 0.25 / p.default.gameSpeed);
                        }
                      else if (1 == r) {
                        var C = n.getComponent("starArmy").isSky,
                          B = this.attack * this.attackRate[C],
                          N = this.isBoss;
                        this.scheduleOnce(function() {
                          n && n.isValid && (n.getComponent("starArmy").doHurt(B), p.default.gameInstance.showText("" + Math.floor(B), {
                            x: n.x,
                            y: n.y
                          }, null, 0, ), N && e.checkBoom(p.default.gameInstance.armyArray, n, 3, "starArmy", ));
                        }, 0.25 / p.default.gameSpeed);
                      } else {
                        var A = this.attack * this.attackRate[0];
                        this.scheduleOnce(function() {
                          n && n.isValid && (n.getComponent("building").doHurt(A), p.default.gameInstance.showText("" + Math.floor(A), {
                            x: n.x,
                            y: n.y
                          }, null, 0, ));
                        }, 0.25 / p.default.gameSpeed);
                      }
                      ((this.imgIndex = 0), (this.status = 2));
                    }
                    this.rigidBody.linearVelocity = cc.v2(0, 0);
                  } else((h = f),
                    (u = (0.2 * Math.random() + 0.9) * this.speed * p.default.gameSpeed),
                    (this.rigidBody.linearVelocity = cc.v2(u * Math.cos((h * Math.PI) / 180), u * Math.sin((h * Math.PI) / 180), )), 1 != this.status && ((this.imgIndex = 0), (this.status = 1)));
                }
              else((this.rigidBody.linearVelocity = cc.v2(0, 0)), 0 != this.status && ((this.imgIndex = 0), (this.status = 0)));
            }),
            (t.prototype.doHurt = function(e) {
              (this.effectTime > 0 && "break" == this.effectName && (e *= 1.5),
                (this.hp -= e),
                (this.hurtTime = 0.16));
            }),
            (t.prototype.shootBullet = function(e, t, i, n, a, o) {
              var r = this;
              d.cocos.loadRes("starcraft/bullet/bullet-e" + this.type, cc.Prefab).then(function(s) {
                var c = cc.instantiate(s);
                if (r.node && r.node.isValid) {
                  ((e += r.node.getChildByName("shoot").x * r.node.scaleX),
                    (t += r.node.getChildByName("shoot").y));
                  var l = r.getTheAngle(e, t, i, n),
                    d = Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - n, 2));
                  ((c.x = e),
                    (c.y = t), c.getComponent("starBullet").initBullet(r.type, 1, a, l, d, o, r.size, !1, r.isBoss, ), p.default.gameInstance.bgNode.getChildByName("effect").addChild(c));
                }
              });
            }),
            (t.prototype.getTheAngle = function(e, t, i, n) {
              var a = (180 * Math.atan((n - t) / (i - e))) / Math.PI;
              return (
                (n - t > 0 && i - e > 0) || (n - t > 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e > 0 && (a = 360 + a)), a);
            }),
            (t.prototype.checkBoom = function(e, t, i, n) {
              for (var a = 0; a < e.length; a++) {
                var o = e[a];
                o != t && Math.sqrt(Math.pow(this.node.x - o.x, 2) + Math.pow(this.node.y - o.y, 2), ) < 40 * i && this.isSky == o.getComponent(n).isSky && (o.getComponent(n).doHurt(this.attack / 2), p.default.gameInstance.showText("" + Math.floor(this.attack / 2), {
                  x: o.x,
                  y: o.y
                }, null, 0, ));
              }
              p.default.gameInstance.addEffect("boom1", i, {
                x: this.node.x,
                y: this.node.y,
              });
            }), o([l(cc.RigidBody)], t.prototype, "rigidBody", void 0), o([l([cc.SpriteFrame])], t.prototype, "standImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "moveImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "attackImgArray", void 0), o([c], t));
        })(cc.Component);
        ((i.default = y), cc._RF.pop());
      };
