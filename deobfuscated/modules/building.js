// module: building
// deps: {"../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../libppgame/libwechat":"libwechat","../playerData":"playerData","./starArmy":"starArmy"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9067bCY0s1G9oN+RBJwTSm8", "building");
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
          (i.BuildingConfig = i.BuildingType = void 0));
        var r,
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = e("../libppgame/libcocos"),
          h = e("./starArmy"),
          u = e("../libppgame/audioMgr"),
          p = e("../playerData"),
          f = e("../libppgame/libwechat"),
          g = e("../gameData");
        ((function(e) {
            ((e[(e.JI_DI = 1)] = "JI_DI"),
              (e[(e.BING_YING = 2)] = "BING_YING"),
              (e[(e.ZHONG_GONG = 3)] = "ZHONG_GONG"),
              (e[(e.JI_CHANG = 4)] = "JI_CHANG"),
              (e[(e.PAO_TA = 5)] = "PAO_TA"));
          })((r = i.BuildingType || (i.BuildingType = {}))),
          (i.BuildingConfig = [{
            name: "基地",
            hp: 700,
            attack: 20,
            range: 350,
            cdTime: 1,
            product: [{
              type: h.ArmyType.NONG_MING,
              level: 1,
              limit: 0,
              cdTime: 2.2,
              cdNow: 0,
            }, ],
          }, {
            name: "兵营",
            hp: 500,
            attack: 0,
            range: 0,
            cdTime: 0,
            product: [{
              type: h.ArmyType.JI_QIANG_BING,
              level: 1,
              limit: 0,
              cdTime: 3.5,
              cdNow: 0,
            }, {
              type: h.ArmyType.PENG_HUO_BING,
              level: 1,
              limit: 0,
              cdTime: 5,
              cdNow: 0,
            }, {
              type: h.ArmyType.HU_DUN_BING,
              level: 1,
              limit: 0,
              cdTime: 4,
              cdNow: 0,
            }, ],
          }, {
            name: "重工",
            hp: 500,
            attack: 0,
            range: 0,
            cdTime: 0,
            product: [{
              type: h.ArmyType.BING_LEI_CHE,
              level: 1,
              limit: 0,
              cdTime: 6,
              cdNow: 0,
            }, {
              type: h.ArmyType.TAN_KE,
              level: 1,
              limit: 0,
              cdTime: 10,
              cdNow: 0,
            }, {
              type: h.ArmyType.JI_QI_REN,
              level: 1,
              limit: 0,
              cdTime: 8,
              cdNow: 0,
            }, ],
          }, {
            name: "机场",
            hp: 500,
            attack: 0,
            range: 0,
            cdTime: 0,
            product: [{
              type: h.ArmyType.ZHAN_JI,
              level: 1,
              limit: 0,
              cdTime: 8,
              cdNow: 0,
            }, {
              type: h.ArmyType.KE_JI_QIU,
              level: 1,
              limit: 0,
              cdTime: 10,
              cdNow: 0,
            }, {
              type: h.ArmyType.DA_HE_JIAN,
              level: 1,
              limit: 0,
              cdTime: 15,
              cdNow: 0,
            }, ],
          }, {
            name: "炮塔",
            hp: 400,
            attack: 20,
            range: 280,
            cdTime: 0.5,
            product: [],
          }, ]));
        var y = (function(e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.rigidBody = null),
              (t.standImgArray = []),
              (t.createImgArray = []),
              (t.brokenImgArray = []),
              (t.workImgArray = []),
              (t.attackImgArray = []),
              (t.type = 1),
              (t.hp = 0),
              (t.totalHp = 0),
              (t.level = 1),
              (t.attack = 0),
              (t.range = 0),
              (t.cdTime = 0),
              (t.cdNow = 0),
              (t.radio = 60),
              (t.productArray = new Array()),
              (t.status = 0),
              (t.imgIndex = 0),
              (t.dtTime = 0),
              (t.material = null),
              (t.pvpWay = 0),
              (t.isOver = !1),
              (t.hurtTime = 0), "en" == g.default.Language && ((i.BuildingConfig[0].name = "Command Center"),
                (i.BuildingConfig[1].name = "Barracks"),
                (i.BuildingConfig[2].name = "Factory"),
                (i.BuildingConfig[3].name = "Starport"),
                (i.BuildingConfig[4].name = "Missile Turret")), t);
          }
          return (a(t, e),
            (t.prototype.start = function() {}),
            (t.prototype.initBuilding = function(e, t) {
              // Offline adaptation: building.initBuilding
              (void 0 === t && (t = 0), (this.pvpWay = t), (this.type = e));
              var n;
              n = 0 == this.pvpWay ? p.default.buildingLevelArray[this.type - 1] : p.default.buildingLevelArrayOther[this.type - 1];
              var a = Math.pow(1.1, n),
                o = Math.pow(1.15, n);
              (1 == g.default.gameMode && ((a = Math.pow(1.02, n)), (o = Math.pow(1.075, n))),
                (this.totalHp = i.BuildingConfig[this.type - 1].hp * o * 1.6),
                (this.attack = i.BuildingConfig[this.type - 1].attack * o),
                (this.range = i.BuildingConfig[this.type - 1].range),
                (this.cdTime = i.BuildingConfig[this.type - 1].cdTime));
              for (var s = 0; s < i.BuildingConfig[this.type - 1].product.length; s++) {
                var c = i.BuildingConfig[this.type - 1].product[s],
                  l = {
                    type: c.type,
                    level: c.level,
                    limit: c.limit,
                    cdTime: c.cdTime / a,
                    cdNow: c.cdNow,
                  };
                this.productArray.push(l);
              }
              this.hp = this.totalHp;
              var d;
              ((d = 0 == this.pvpWay ? p.default.armyCheck : p.default.armyCheckOther), e == r.JI_DI ? this.addBuildingArmyNum(h.ArmyType.NONG_MING, 2) : e == r.BING_YING ? 2 == d[0][0] ? this.addBuildingArmyNum(h.ArmyType.JI_QIANG_BING, 2) : 2 == d[0][1] ? this.addBuildingArmyNum(h.ArmyType.PENG_HUO_BING, 2) : 2 == d[0][2] && this.addBuildingArmyNum(h.ArmyType.HU_DUN_BING, 2) : e == r.ZHONG_GONG ? 2 == d[1][0] ? this.addBuildingArmyNum(h.ArmyType.BING_LEI_CHE, 2) : 2 == d[1][1] ? this.addBuildingArmyNum(h.ArmyType.TAN_KE, 1) : 2 == d[1][2] && this.addBuildingArmyNum(h.ArmyType.JI_QI_REN, 2) : e == r.JI_CHANG ? 2 == d[2][0] ? this.addBuildingArmyNum(h.ArmyType.ZHAN_JI, 2) : 2 == d[2][1] ? this.addBuildingArmyNum(h.ArmyType.KE_JI_QIU, 2) : 2 == d[2][2] && this.addBuildingArmyNum(h.ArmyType.DA_HE_JIAN, 1) : r.PAO_TA,
                (this.material = this.node.getChildByName("node").getComponent(cc.Sprite).getMaterial(0)), this.material.setProperty("u_rate", 1),
                (this.status = 1),
                (this.imgIndex = 0));
              window.offlineFortress.apply(this);
            }),
            (t.prototype.restore = function() {
              if (this._sold) return;
              // Offline adaptation: building.restore
              ((this.totalHp = i.BuildingConfig[this.type - 1].hp * g.default.gameInstance.buildingChoice.hpBuffer),
                (this.attack = i.BuildingConfig[this.type - 1].attack * g.default.gameInstance.buildingChoice.attackBuffer),
                (this.cdTime = i.BuildingConfig[this.type - 1].cdTime),
                (this.node.active = !0),
                (this.hp = this.totalHp), this.isOver && ((this.status = 1), (this.imgIndex = 0), (this.isOver = !1)), this.resetCD());
              window.offlineFortress.apply(this);
            }),
            (t.prototype.resetCD = function() {
              for (var e = 0; e < this.productArray.length; e++) {
                ((this.productArray[e].cdNow = 0),
                  (this.productArray[e].cdTime = i.BuildingConfig[this.type - 1].product[e].cdTime * g.default.gameInstance.buildingChoice.cdTimeBuffer));
                for (var t = 0; t < g.default.gameInstance.buildingChoice.cdTimeArray.length; t++) 3 * (this.type - 2) + e + 1 == g.default.gameInstance.buildingChoice.cdTimeArray[t] && (this.productArray[e].cdTime *= 0.7);
              }
            }),
            (t.prototype.productArmy = function(armyType, armyLevel, count) {
                if (this._sold || this.isOver) return;
                const gameData = __require("gameData").default;
                const scene = gameData.gameInstance;
                for (let index = 0; index < count; index++) {
                  let angle = 110 * Math.random() + 130;
                  if (Math.random() < 0.5) angle = 180 - angle;
                  if (armyType === 1) angle = -140 * Math.random() - 20;
                  if (this.pvpWay === 1) angle = -angle;
                  const position = {
                    x: this.node.x + Math.cos(angle * Math.PI / 180) * this.radio,
                    y: this.node.y + Math.sin(angle * Math.PI / 180) * this.radio
                  };
                  if (this.pvpWay === 1) scene.addArmyOther(armyType, armyLevel, position);
                  else {
                    scene.addArmy(armyType, armyLevel, position, this);
                    if (gameData.gameMode === 0) __require("playerData").default.dailyArray[2]++;
                  }
                  scene.addEffect("born", 1, position);
                }
              }),
            (t.prototype.checkProductArmy = function(deltaTime) {
                if (this._sold || this.isOver) return;
                const elapsed = deltaTime || 0.1;
                const gameData = __require("gameData").default;
                const scene = gameData.gameInstance;
                let producing = false;
                for (const product of this.productArray) {
                  const currentCount = gameData.gameMode === 1
                    ? scene.getArmyNumWithType(product.type, this.pvpWay)
                    : scene.getArmyNumWithType(product.type);
                  if (currentCount >= product.limit) continue;
                  producing = true;
                  if (product.cdNow < product.cdTime) product.cdNow += elapsed;
                  else {
                    product.cdNow -= product.cdTime;
                    this.productArmy(product.type, product.level, 1);
                  }
                }
                if (!this._fortress || this.status !== 4) this.status = producing ? 3 : 0;
              }),
            (t.prototype.addBuildingArmyNum = function(e, t) {
              for (var i = 0; i < this.productArray.length; i++)
                if (this.productArray[i].type == e) {
                  this.productArray[i].limit += t;
                  break;
                }
            }),
            (t.prototype.changeBuildingArmyCDTime = function(e, t) {
              for (var i = 0; i < this.productArray.length; i++)
                if (this.productArray[i].type == e) {
                  this.productArray[i].cdTime *= t;
                  break;
                }
            }),
            (t.prototype.update = function(e) {
              if (this._sold) return;
              // Offline adaptation: building.update
              if (
                (this.hurtTime > 0 && ((this.hurtTime -= e * g.default.gameSpeed), this.hurtTime < 0 && (this.hurtTime = 0), this.material.setProperty("u_rate", 0.05 + (Math.abs(this.hurtTime - 0.08) / 0.08) * 0.95, )), this.hp == this.totalHp ? (this.node.getChildByName("hp").active = !1) : ((this.node.getChildByName("hp").active = !0),
                  (this.node.getChildByName("hp").getComponent(cc.ProgressBar).progress = this.hp / this.totalHp)), 1 == this.status || 2 == this.status)) this.node.getChildByName("info") && (this.node.getChildByName("info").active = !1);
              else if (
                (this.node.getChildByName("info") && (this.node.getChildByName("info").active = !0), this.productArray.length > 0))
                for (var t = 0; t < this.productArray.length; t++) {
                  var i = this.node.getChildByName("info").getChildByName("info" + (t + 1));
                  if (this.productArray[t].limit > 0)
                    if (((i.active = !0), g.default.gameInstance.isBattle)) {
                      var n = g.default.gameInstance.getArmyNumWithType(this.productArray[t].type, );
                      (1 == g.default.gameMode && (n = g.default.gameInstance.getArmyNumWithType(this.productArray[t].type, this.pvpWay, )),
                        (i.getChildByName("icon").getChildByName("num").getComponent(cc.Label).string = n + "/" + this.productArray[t].limit), n < this.productArray[t].limit ? ((i.getChildByName("progress").getChildByName("bar").active = !0),
                          (i.getChildByName("progress").getChildByName("bar").getComponent(cc.Sprite).fillRange = this.productArray[t].cdNow / this.productArray[t].cdTime)) : (i.getChildByName("progress").getChildByName("bar").active = !1));
                    } else((i.getChildByName("progress").getChildByName("bar").active = !1),
                      (i.getChildByName("icon").getChildByName("num").getComponent(cc.Label).string = "0/" + this.productArray[t].limit));
                  else i.active = !1;
                }
              if (
                (this.isOver ? (this.node.zIndex = -this.node.y) : (this.node.zIndex = 1e3 - this.node.y),
                  (this.dtTime += e * g.default.gameSpeed), this.dtTime > 0.1)) {
                this.dtTime -= 0.1;
                var a = null;
                if (
                  (0 == this.status ? (a = this.standImgArray) : 1 == this.status ? (a = this.createImgArray) : 2 == this.status ? (a = this.brokenImgArray) : 3 == this.status ? (a = this.workImgArray) : 4 == this.status && (a = this.attackImgArray), null != a && a.length > 0)) {
                  var o = !0;
                  (this.imgIndex >= a.length && (1 == this.status ? ((this.status = 0), (this.imgIndex = 0), (o = !1)) : 4 == this.status ? ((this.status = 0), (this.imgIndex = 0), (o = !1)) : 2 == this.status ? ((this.imgIndex = a.length - 1), (o = !1)) : (this.imgIndex = 0)), o && ((this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = a[this.imgIndex]), this.imgIndex++));
                }
              }!g.default.gameInstance.isPause && g.default.gameInstance.isBattle && (this.hp <= 0 && !this.isOver && ((this.isOver = !0), 1 == g.default.gameMode && (0 == this.pvpWay ? g.default.gameInstance.buildingChoice.overBuildingArray.push(this.type - 1, ) : g.default.gameInstance.buildingChoiceOther.overBuildingArray.push(this.type - 1, )),
                (this.status = 2),
                (this.imgIndex = 0), f.wechat.vibrateLong(), u.default.inst.playAudio("starcraft/dead_building"), this.type == r.JI_DI && (0 == g.default.gameMode ? g.default.gameInstance.gameOver() : 0 == this.pvpWay ? g.default.gameInstance.gameOver() : g.default.gameInstance.gameWin())), this.isOver || (this.type != r.PAO_TA && this.checkProductArmy(e * g.default.gameSpeed), this.range > 0 && (this.cdNow > 0 ? (this.cdNow -= e * g.default.gameSpeed) : this.checkAttack())));
              if (this._fortress && this._fortressArtReady) this.node.getChildByName("node").color = this.isOver ? new cc.Color(100, 110, 120) : cc.Color.WHITE;
            }),
            (t.prototype.checkAttack = function() {
              if (this._sold) return;
              // Offline adaptation: building.checkAttack
              var e = this.range,
                t = null;
              if (0 == g.default.gameMode) {
                for (var i = 0; i < g.default.gameInstance.enemyArray.length; i++)
                  (a = Math.sqrt(Math.pow(g.default.gameInstance.enemyArray[i].x - this.node.x, 2, ) + Math.pow(g.default.gameInstance.enemyArray[i].y - this.node.y, 2, ), )) < e && ((t = g.default.gameInstance.enemyArray[i]), (e = a));
                null != t && (0 == this.pvpWay && u.default.inst.playAudio("starcraft/attack_building"),
                  (this.type == r.PAO_TA || this._fortress) && ((this.status = 4), (this.imgIndex = 0)),
                  (this.cdNow += this.cdTime), this.shootBullet(this.node.x + this.node.getChildByName("shoot").x, this.node.y + this.node.getChildByName("shoot").y, t.x, t.y, this.attack, t.getComponent("starEnemy").isSky, ));
              } else {
                if (this.type == r.JI_DI) return;
                var n;
                for (n = 0 == this.pvpWay ? g.default.gameInstance.armyArrayOther : g.default.gameInstance.armyArray, i = 0; i < n.length; i++) {
                  var a;
                  (a = Math.sqrt(Math.pow(n[i].x - this.node.x, 2) + Math.pow(n[i].y - this.node.y, 2), )) < e && ((t = n[i]), (e = a));
                }
                null != t && (0 == this.pvpWay && u.default.inst.playAudio("starcraft/attack_building"),
                  (this.type == r.PAO_TA || this._fortress) && ((this.status = 4), (this.imgIndex = 0)),
                  (this.cdNow += this.cdTime), this.shootBullet(this.node.x + this.node.getChildByName("shoot").x, this.node.y + this.node.getChildByName("shoot").y, t.x, t.y, this.attack, t.getComponent("starArmy").isSky, ));
              }
            }),
            (t.prototype.doHurt = function(e) {
              ((this.hp -= e), (this.hurtTime = 0.16));
            }),
            (t.prototype.shootBullet = function(e, t, i, n, a, o) {
              // Offline adaptation: building.shootBullet
              var s = this;
              d.cocos.loadRes(this._fortress ? "starcraft/bullet/bullet-a6" : "starcraft/bullet/bullet-b" + this.type, cc.Prefab, ).then(function(c) {
                if (s._sold || !cc.isValid(s.node)) return;
                var l = cc.instantiate(c),
                  d = s.getTheAngle(e, t, i, n);
                s.type == r.PAO_TA && (d >= 0 && d < 70 && -1 == s.node.scaleX ? (s.node.scaleX = 1) : d > 290 && d < 360 && -1 == s.node.scaleX ? (s.node.scaleX = 1) : d > 110 && d <= 180 && 1 == s.node.scaleX ? (s.node.scaleX = -1) : d > 180 && d < 250 && 1 == s.node.scaleX && (s.node.scaleX = -1));
                var h = Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - n, 2));
                ((l.x = e),
                  (l.y = t), l.getComponent("starBullet").initBullet(s.type, 2, a, d, h, o, 0, !1, 0, s.pvpWay), s._fortress && ((l.getComponent("starBullet").isBoom = true),
                    (l.getComponent("starBullet").boomScale = 2)), g.default.gameInstance.bgNode.getChildByName("effect").addChild(l));
              });
            }),
            (t.prototype.getTheAngle = function(e, t, i, n) {
              var a = (180 * Math.atan((n - t) / (i - e))) / Math.PI;
              return (
                (n - t > 0 && i - e > 0) || (n - t > 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e > 0 && (a = 360 + a)), a);
            }), o([l(cc.RigidBody)], t.prototype, "rigidBody", void 0), o([l([cc.SpriteFrame])], t.prototype, "standImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "createImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "brokenImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "workImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "attackImgArray", void 0), o([c], t));
        })(cc.Component);
        ((i.default = y), cc._RF.pop());
      };
