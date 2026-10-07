// module: pvpScene
// deps: {"./game/building":"building","./game/buildingChoice":"buildingChoice","./gameData":"gameData","./libppgame/audioMgr":"audioMgr","./libppgame/libcocos":"libcocos","./libppgame/libwechat":"libwechat","./mainScene":"mainScene","./playerData":"playerData","./pop/jx_levelup":"jx_levelup","./resMgr":"resMgr","./ui/arenaItemUI":"arenaItemUI","./ui/arenaUI":"arenaUI"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9fcca6B7etOV5/NAJqtgwS7", "pvpScene");
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
          },
          r = (this && this.__awaiter) || function(e, t, i, n) {
            return new(i || (i = Promise))(function(a, o) {
              function r(e) {
                try {
                  c(n.next(e));
                } catch (t) {
                  o(t);
                }
              }

              function s(e) {
                try {
                  c(n.throw(e));
                } catch (t) {
                  o(t);
                }
              }

              function c(e) {
                var t;
                e.done ? a(e.value) : ((t = e.value), t instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          },
          s = (this && this.__generator) || function(e, t) {
            var i,
              n,
              a,
              o,
              r = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o);

            function s(e) {
              return function(t) {
                return c([e, t]);
              };
            }

            function c(o) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; r;) try {
                if (
                  ((i = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
                switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return (r.label++, {
                      value: o[1],
                      done: !1
                    });
                  case 5:
                    (r.label++, (n = o[1]), (o = [0]));
                    continue;
                  case 7:
                    ((o = r.ops.pop()), r.trys.pop());
                    continue;
                  default:
                    if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      r.label = o[1];
                      break;
                    }
                    if (6 === o[0] && r.label < a[1]) {
                      ((r.label = a[1]), (a = o));
                      break;
                    }
                    if (a && r.label < a[2]) {
                      ((r.label = a[2]), r.ops.push(o));
                      break;
                    }
                    (a[2] && r.ops.pop(), r.trys.pop());
                    continue;
                }
                o = t.call(e, r);
              } catch (s) {
                ((o = [6, s]), (n = 0));
              } finally {
                i = a = 0;
              }
              if (5 & o[0]) throw o[1];
              return {
                value: o[0] ? o[1] : void 0,
                done: !0
              };
            }
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = e("./libppgame/libcocos"),
          u = e("./game/building"),
          p = e("./game/buildingChoice"),
          f = e("./libppgame/audioMgr"),
          g = e("./gameData"),
          y = e("./playerData"),
          m = e("./libppgame/libwechat"),
          _ = e("./resMgr"),
          v = e("./ui/arenaUI"),
          b = e("./mainScene"),
          w = e("./pop/jx_levelup"),
          C = e("./ui/arenaItemUI"),
          B = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.tipsPrefab = null),
                (t.itemUIPrefab = null),
                (t.bgNode = null),
                (t.uiNode = null),
                (t.touchNode = null),
                (t.buildingImgArray = []),
                (t.armyImgArray = []),
                (t.choiceImgArray = []),
                (t.other_name_label = null),
                (t.other_headicon = null),
                (t.buildingArray = new Array()),
                (t.buildingArrayOther = new Array()),
                (t.armyArray = new Array()),
                (t.armyArrayOther = new Array()),
                (t.pressX = 0),
                (t.pressY = 0),
                (t.originX = 0),
                (t.originY = 0),
                (t.money = 90),
                (t.moneyOther = 90),
                (t.isBattle = !1),
                (t.isPause = !1),
                (t.buildingChoice = null),
                (t.buildingChoiceOther = null),
                (t.buildingPosArray = [{
                  x: 0,
                  y: -515
                }, {
                  x: -175,
                  y: -405
                }, {
                  x: 175,
                  y: -410
                }, {
                  x: -2,
                  y: -340
                }, {
                  x: 130,
                  y: -240
                }, {
                  x: -130,
                  y: -240
                }, ]),
                (t.buildingPosArray1 = [{
                  x: 0,
                  y: 397
                }, {
                  x: 175,
                  y: 292
                }, {
                  x: -175,
                  y: 287
                }, {
                  x: -2,
                  y: 222
                }, {
                  x: -130,
                  y: 122
                }, {
                  x: 130,
                  y: 122
                }, ]),
                (t.moneyIndex = 1),
                (t.moneyIndexOther = 1),
                (t.screenW = 0),
                (t.screenH = 0),
                (t.pvpTime = 0),
                (t.otherUpgradeTime = 2),
                (t.hasBuildingChoice = !1),
                (t.freeBuildingRefresh = !0),
                (t.planArray = [
                  [1, 5, 5, 4, 2],
                  [5, 1, 5, 2],
                  [5, 5, 1, 4, 2],
                  [5, 5, 1, 2],
                  [1, 2, 5, 5],
                  [1, 5, 2, 5],
                ]),
                (t.planType = 0),
                (t.planStep = 0),
                (t.hasNuclear = !1),
                (t.skill1OtherCount = 0),
                (t.skill2OtherCount = 0),
                (t.unlockSpeed = !1),
                (t._game_result = ""),
                (t.firstSkill1 = !1),
                (t.skill1Time = 30),
                (t.firstSkill2 = !1),
                (t.skill2Time = 30),
                (t.skill1TimeOther = 30),
                (t.nuClearing = !1),
                (t.skill2TimeOther = 30), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._instance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.showOtherHeadicon = function() {
                var e = this,
                  t = i.otherPlayerIcon || "2",
                  n = C.game_headicons[t];
                n ? h.cocos.loadRes(n, cc.SpriteFrame).then(function(t) {
                  t ? (e.other_headicon.spriteFrame = t) : console.log("can not load spriteFrame", n);
                }).catch(function(e) {
                  console.log("fail to load res", n, e);
                }) : h.cocos.load({
                  url: "" + t,
                  type: "png"
                }).then(function(i) {
                  i ? (e.other_headicon.spriteFrame = new cc.SpriteFrame(i, )) : console.log("can not load pic", t);
                }).catch(function(e) {
                  console.log("fail to load url", t, e);
                });
              }),
              (t.prototype.start = function() {
                var e = this;
                ((g.default.gameMode = 1),
                  (g.default.gameSpeed = 1),
                  (this.planType = Math.floor(Math.random() * this.planArray.length, )),
                  (g.default.inBattle = !0),
                  (g.default.gameInstance = this),
                  (this.money += g.default.getLevelGiftValueWithType(9, 0)),
                  (this.moneyOther += g.default.getLevelGiftValueWithType(9, 1, )), f.default.inst.bgmOn("starcraft/bgm_battle"),
                  (this.screenW = cc.view.getVisibleSize().width),
                  (this.screenH = cc.view.getVisibleSize().height));
                var t = this,
                  n = Math.floor(7 * Math.random()) + 1;
                (cc.loader.loadRes("starcraft/bg/bg_" + n, cc.SpriteFrame, function(e) {
                    e ? cc.error(e.message || e) : (t.bgNode.getChildByName("map").getComponent(cc.Sprite).spriteFrame = cc.loader.getRes("starcraft/bg/bg_" + n, cc.SpriteFrame, ));
                  }, ),
                  (this.other_name_label.string = i.otherPlayerName), this.showOtherHeadicon(),
                  (i._instance = this),
                  (this.buildingChoice = new p.default()),
                  (this.buildingChoice.pvpWay = 0),
                  (this.buildingChoiceOther = new p.default()),
                  (this.buildingChoiceOther.pvpWay = 1), this.productBuilding(u.BuildingType.JI_DI, 1), this.productBuildingOther(u.BuildingType.JI_DI, 1), this.scheduleOnce(function() {
                    f.default.inst.playAudio("starcraft/base");
                  }, 0.3), this.scheduleOnce(function() {
                    e.isBattle = !0;
                  }, 1.6), this.uiNode.getChildByName("skill1button").getChildByName("pro3").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 0.9), cc.scaleTo(0.3, 1)), ), ), this.uiNode.getChildByName("skill2button").getChildByName("pro3").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 0.9), cc.scaleTo(0.3, 1)), ), ),
                  (cc.director.getPhysicsManager().enabled = !0), this.addRedPoint(this.uiNode.getChildByName("productButton"), cc.v2(90, 30), ), this.uiNode.getChildByName("productButton").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 1.1), cc.scaleTo(0.3, 1)), ), ));
              }),
              (t.prototype.goBuildingChoice = function() {
                (f.default.inst.playAudio("starcraft/click"), this.money >= 100 ? (f.default.inst.playAudio("starcraft/ui_change"),
                  (this.uiNode.getChildByName("buildingChoice").active = !0), this.nodeMoveIn(this.uiNode.getChildByName("buildingChoice"), 0, 1, ), this.refreshBuildingChoice()) : (f.default.inst.playAudio("starcraft/nomoney"), this.popTips("水晶不够，无法继续建造")));
              }),
              (t.prototype.clickRefreshBuildingChoice = function() {
                return r(this, void 0, void 0, function() {
                  var e, t;
                  return s(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (e = this.uiNode.getChildByName("buildingChoice")), this.freeBuildingRefresh ? [3, 2] : ((this.isPause = !0), this.setPause(),
                            [4, m.wechat.showRewardedVideoAdNew()]));
                      case 1:
                        return (
                          (t = i.sent()),
                          (this.isPause = !1), t.isEnded ? ((this.hasBuildingChoice = !1), this.refreshBuildingChoice(),
                            [3, 3]) : (m.wechat.is_jd_platform || this.popTips("观看视频广告失败"),
                            [2]));
                      case 2:
                        ((this.freeBuildingRefresh = !1),
                          (e.getChildByName("refreshButton").getChildByName("ad").active = !0),
                          (e.getChildByName("refreshButton").getChildByName("text").x = 25),
                          (this.hasBuildingChoice = !1), this.refreshBuildingChoice(),
                          (i.label = 3));
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.refreshBuildingChoice = function() {
                var e = this;
                if (!this.hasBuildingChoice) {
                  ((this.hasBuildingChoice = !0), f.default.inst.playAudio("starcraft/click"));
                  var t = this.uiNode.getChildByName("buildingChoice");
                  ((t.getChildByName("bg").active = !0),
                    (t.getChildByName("refreshButton").active = !0));
                  for (var i = this.buildingChoice.getChoice(), n = 0; n < 3; n++) t.getChildByName("choice" + (n + 1)).active = !1;
                  var a = function(n) {
                      var a = i[n],
                        r = p.BuildingChoiceArray[a - 1].title,
                        s = p.BuildingChoiceArray[a - 1].text;
                      "en" == g.default.Language && ((r = p.BuildingChoiceArray_en[a - 1].title),
                        (s = p.BuildingChoiceArray_en[a - 1].text));
                      var c = t.getChildByName("choice" + (n + 1)),
                        l = p.BuildingChoiceArray[a - 1].buildingType,
                        d = p.BuildingChoiceArray[a - 1].armyType;
                      if (
                        ((c.getChildByName("tip1").active = !1),
                          (c.getChildByName("tip2").active = !1), a >= 1 && a <= 4)) o.buildingChoice.choiceArray.indexOf(a) < 0 && (c.getChildByName("tip1").active = !0);
                      else if (a >= 6 && a <= 14 && o.buildingChoice.choiceArray.indexOf(a) < 0) {
                        var h = a - 6;
                        y.default.armyCheck[Math.floor(h / 3)][h % 3] < 2 && (c.getChildByName("tip2").active = !0);
                      }
                      ((c.active = !0),
                        (c.opacity = 0), c.runAction(cc.fadeIn(0.2)),
                        (c.getChildByName("title").getComponent(cc.Label).string = r),
                        (c.getChildByName("text").getComponent(cc.Label).string = s),
                        (c.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = o.buildingImgArray[l - 1]), 0 == d ? (c.getChildByName("icon").getChildByName("bg").active = !1) : ((c.getChildByName("icon").getChildByName("bg").active = !0),
                          (c.getChildByName("icon").getChildByName("bg").getChildByName("icon1").getComponent(cc.Sprite).spriteFrame = o.armyImgArray[d - 1])), c.off("touchend"), c.on("touchend", function() {
                          ((e.money -= 100),
                            (e.hasBuildingChoice = !1), e.buildingChoice.doChoice(a), f.default.inst.playAudio("starcraft/click"),
                            (e.uiNode.getChildByName("buildingChoice").active = !1), e.money >= 100 && e.goBuildingChoice());
                        }));
                    },
                    o = this;
                  for (n = 0; n < i.length; n++) a(n);
                }
              }),
              (t.prototype.closeBuildingChoice = function() {
                (f.default.inst.playAudio("starcraft/click"), f.default.inst.playAudio("starcraft/ui_change"), this.nodeMoveOut(this.uiNode.getChildByName("buildingChoice"), 1, ));
              }),
              (t.prototype.addEffectOnNode = function(e, t, i, n, a) {
                var o = this;
                (void 0 === n && (n = 0), h.cocos.loadRes("starcraft/effect/" + e, cc.Prefab).then(function(e) {
                  var r = cc.instantiate(e);
                  ((r.scale = t),
                    (r.x = i.x),
                    (r.y = i.y), a && a.isValid && a.addChild(r), n > 0 && o.scheduleOnce(function() {
                      r && r.isValid && r.destroy();
                    }, n));
                }));
              }),
              (t.prototype.addEffect = function(e, t, i, n) {
                var a = this;
                (void 0 === n && (n = 0), h.cocos.loadRes("starcraft/effect/" + e, cc.Prefab).then(function(e) {
                  var o = cc.instantiate(e);
                  ((o.scale = t),
                    (o.x = i.x),
                    (o.y = i.y), a.bgNode.getChildByName("effect").addChild(o), n > 0 && a.scheduleOnce(function() {
                      o && o.isValid && o.destroy();
                    }, n));
                }));
              }),
              (t.prototype.addEffectOnMap = function(e, t, i, n) {
                var a = this;
                (void 0 === n && (n = 0), h.cocos.loadRes("starcraft/effect/" + e, cc.Prefab).then(function(e) {
                  var o = cc.instantiate(e);
                  ((o.scale = t),
                    (o.x = i.x),
                    (o.y = i.y), a.bgNode.getChildByName("map").addChild(o), n > 0 && a.scheduleOnce(function() {
                      o && o.isValid && o.destroy();
                    }, n));
                }));
              }),
              (t.prototype.addArmy = function(armyType, armyLevel, position, producer) {
                const scene = this;
                return __require("libcocos").cocos.loadRes("starcraft/army/a" + armyType, cc.Prefab).then(function(prefab) {
                  // A prefab request may finish after the producing building was sold.
                  if (!cc.isValid(scene.node) || (producer && (producer._sold || !cc.isValid(producer.node)))) return;
                  const node = cc.instantiate(prefab);
                  node.getComponent("starArmy").initArmy(armyType);
                  node.setPosition(position.x, position.y);
                  scene.bgNode.getChildByName("obj").addChild(node);
                  scene.armyArray.push(node);
                  return node;
                });
              }),
              (t.prototype.addArmyOther = function(e, t, i) {
                var n = this;
                h.cocos.loadRes("starcraft/army/a" + e + "-1", cc.Prefab).then(function(t) {
                  var a = cc.instantiate(t);
                  (a.getComponent("starArmy").initArmy(e, !1, 1),
                    (a.x = i.x),
                    (a.y = i.y), n.bgNode.getChildByName("obj").addChild(a), n.armyArrayOther.push(a));
                });
              }),
              (t.prototype.showMoney = function(e, t, i) {
                var n = this;
                (void 0 === i && (i = null), h.cocos.loadRes("starcraft/ui/money", cc.Prefab).then(function(a) {
                  var o = cc.instantiate(a);
                  ((o.getChildByName("text").getComponent(cc.Label).string = e), i ? i.addChild(o) : n.bgNode.addChild(o),
                    (o.x = t.x),
                    (o.y = t.y + 50),
                    (o.scale = 0.1), o.runAction(cc.sequence(cc.scaleTo(0.1, 1), cc.spawn(cc.moveBy(0.5, 0, 40), cc.fadeOut(0.5)), cc.callFunc(function() {
                      o.destroy();
                    }), ), ));
                }));
              }),
              (t.prototype.showText = function(e, t, i, n, a) {
                var o = this;
                (void 0 === i && (i = null), void 0 === n && (n = 0), void 0 === a && (a = !1), y.default.char && h.cocos.loadRes("starcraft/ui/num", cc.Prefab).then(function(r) {
                  var s = cc.instantiate(r);
                  ((s.getChildByName("text").getComponent(cc.Label).string = e), i ? i.addChild(s) : o.bgNode.addChild(s),
                    (s.x = t.x),
                    (s.y = t.y + 20),
                    (s.getChildByName("text").color = 10 == n ? cc.color(17, 244, 30) : 0 == n ? cc.color(17, 162, 237) : cc.color(235, 55, 51)));
                  var c = 360 * Math.random(),
                    l = 30 * Math.cos((c * Math.PI) / 180),
                    d = 30 * Math.sin((c * Math.PI) / 180),
                    h = 0.18 / g.default.gameSpeed,
                    u = 1;
                  (a ? ((l = 40 * Math.cos((c * Math.PI) / 180)),
                      (l = 40 * Math.cos((c * Math.PI) / 180)),
                      (h = 0.25),
                      (u = 1.5),
                      (s.getChildByName("icon").active = !0),
                      (s.getChildByName("icon").color = 0 == n ? cc.color(17, 162, 237) : cc.color(235, 55, 51))) : (s.getChildByName("icon").active = !1),
                    (s.scale = 0.1), s.runAction(cc.sequence(cc.spawn(cc.scaleTo(h, u), cc.moveBy(h, l, d)), cc.delayTime(h), cc.fadeOut(0.5 * h), cc.callFunc(function() {
                      s.destroy();
                    }), ), ));
                }));
              }),
              (t.prototype.showMessage = function(e, t, i) {
                var n = this;
                (void 0 === i && (i = null), h.cocos.loadRes("starcraft/ui/message", cc.Prefab).then(function(a) {
                  var o = cc.instantiate(a);
                  ((o.getChildByName("text").getComponent(cc.Label).string = e), i ? i.addChild(o) : n.node.addChild(o),
                    (o.x = t.x),
                    (o.y = t.y + 40), o.runAction(cc.sequence(cc.scaleTo(0.1, 1.5), cc.moveBy(0.8, 0, 40), cc.fadeOut(0.3), cc.callFunc(function() {
                      o.destroy();
                    }), ), ));
                }));
              }),
              (t.prototype.getArmyNumWithType = function(e, t) {
                void 0 === t && (t = 0);
                var i = 0;
                if (0 == t)
                  for (var n = 0; n < this.armyArray.length; n++) this.armyArray[n].getComponent("starArmy").type == e && i++;
                else
                  for (n = 0; n < this.armyArrayOther.length; n++) this.armyArrayOther[n].getComponent("starArmy").type == e && i++;
                return i;
              }),
              (t.prototype.productBuilding = function(buildingType) {
                const scene = this;
                const resources = __require("libcocos").cocos;
                return resources.loadRes("starcraft/building/b" + buildingType, cc.Prefab).then(function(prefab) {
                  if (!cc.isValid(scene.node)) return;
                  const node = cc.instantiate(prefab);
                  const building = node.getComponent("building");
                  building.initBuilding(buildingType);
                  let position = scene.buildingPosArray[buildingType - 1];
                  if (buildingType === 5) {
                    // Pick the vacant turret slot, including when the first turret was sold.
                    const slots = [scene.buildingPosArray[4], scene.buildingPosArray[5]];
                    position = slots.find(slot => !scene.buildingArray.some(existing =>
                      existing.getComponent("building").type === 5 &&
                      Math.abs(existing.x - slot.x) < 1 && Math.abs(existing.y - slot.y) < 1)) || slots[0];
                  }
                  node.setPosition(position.x, position.y);
                  scene.bgNode.getChildByName("obj").addChild(node);
                  scene.buildingArray.push(node);
                  window.offlineBuildingSale.prepareBuilding(scene, building);
                  return node;
                });
              }),
              (t.prototype.productBuildingOther = function(e) {
                var t = this;
                h.cocos.loadRes("starcraft/building/b" + e + "-1", cc.Prefab).then(function(i) {
                  var n = cc.instantiate(i);
                  if (
                    (n.getComponent("building").initBuilding(e, 1), e == u.BuildingType.PAO_TA)) {
                    for (var a = !1, o = 0; o < t.buildingArrayOther.length; o++)
                      if (t.buildingArrayOther[o].getComponent("building").type == u.BuildingType.PAO_TA) {
                        a = !0;
                        break;
                      }
                    a ? ((n.x = t.buildingPosArray1[e].x),
                      (n.y = t.buildingPosArray1[e].y)) : ((n.x = t.buildingPosArray1[e - 1].x),
                      (n.y = t.buildingPosArray1[e - 1].y));
                  } else((n.x = t.buildingPosArray1[e - 1].x),
                    (n.y = t.buildingPosArray1[e - 1].y));
                  (t.bgNode.getChildByName("obj").addChild(n), t.buildingArrayOther.push(n));
                });
              }),
              (t.prototype.otherAI = function() {
                if (this.moneyOther >= 100 && this.otherUpgradeTime > 2) {
                  ((this.otherUpgradeTime = 0), (this.moneyOther -= 100));
                  var e = 0;
                  if (this.planStep < this.planArray[this.planType].length)
                    ((e = this.planArray[this.planType][this.planStep]), this.planStep++);
                  else {
                    for (var t = this.buildingChoiceOther.getChoice(),
                        i = [0, 0, 0],
                        n = 0,
                        a = 0; a < 3; a++)
                      (t[a] < 5 ? (i[a] = 50) : t[a] < 24 ? (i[a] = 10) : t[a] < 24 && (i[a] = 1),
                        (n += i[a]));
                    var o = Math.random() * n;
                    e = o < i[0] ? t[0] : o < i[0] + i[1] ? t[1] : t[2];
                  }
                  this.buildingChoiceOther.doChoice(e);
                }
                if (this.pvpTime > 2) {
                  if (this.skill1TimeOther <= 0 && y.default.levelBenefitArrayOther[1] > 0 && this.skill1OtherCount < 5) {
                    var r = !1;
                    for (a = 0; a < this.buildingArrayOther.length; a++)
                      (s = this.buildingArrayOther[a].getComponent("building")).isOver && (r = !0);
                    if (this.hasNuclear) {
                      for (a = 0; a < this.buildingArrayOther.length; a++) {
                        var s;
                        if (
                          (s = this.buildingArrayOther[a].getComponent("building")).type == u.BuildingType.JI_DI && s.hp < s.totalHp / 2) {
                          this.skill1Other();
                          break;
                        }
                      }
                      this.hasNuclear = !1;
                    } else Math.random() < 0.2 && r ? (this.skill1Other(), this.skill1OtherCount++) : (this.skill1TimeOther = 10);
                  }
                  if (this.skill2TimeOther <= 0 && y.default.levelBenefitArrayOther[3] > 0 && this.skill2OtherCount < 3) {
                    var c = this.getScore(0),
                      l = c / (c + this.getScore(1));
                    (Math.random() < 0.2 && l > 0.68) || (Math.random() < 0.05 && l > 0.58) ? (this.skill2Other(), this.skill2OtherCount++) : (this.skill2TimeOther = 10);
                  }
                }
              }),
              (t.prototype.update = function(e) {
                if (
                  ((y.default.onlineTime += e), this.isBattle && !this.isPause)) {
                  if (this.pvpTime >= 900) return void this.gameDraw();
                  (this.pvpTime < 840 && this.pvpTime + e * g.default.gameSpeed >= 840 && (this.popTips("竞技倒计时1分钟"), f.default.inst.playAudio("starcraft/ui_change")), this.pvpTime < 890 && this.pvpTime + e * g.default.gameSpeed >= 890 && (this.popTips("竞技倒计时10秒钟"), f.default.inst.playAudio("starcraft/ui_change")),
                    (this.pvpTime += e * g.default.gameSpeed),
                    (this.otherUpgradeTime += e * g.default.gameSpeed));
                }
                this.isBattle && !this.isPause && this.otherAI();
                var t = this.getScore(0),
                  i = t / (t + this.getScore(1));
                ((this.uiNode.getChildByName("pro1").width = 246 * i),
                  (this.uiNode.getChildByName("pro2").width = 246 - this.uiNode.getChildByName("pro1").width),
                  (this.uiNode.getChildByName("proText1").getComponent(cc.Label).string = (100 * i).toFixed(0) + "%"),
                  (this.uiNode.getChildByName("proText2").getComponent(cc.Label).string = (100 * (1 - i)).toFixed(0) + "%"),
                  (this.uiNode.getChildByName("money").getChildByName("bg").getChildByName("text").getComponent(cc.Label).string = this.money + ""),
                  (this.uiNode.getChildByName("money").getChildByName("text1").getComponent(cc.Label).string = this.moneyOther + ""));
                var n = Math.floor(this.pvpTime / 60),
                  a = Math.floor(this.pvpTime % 60);
                this.uiNode.getChildByName("time").getComponent(cc.Label).string = (n >= 10 ? n : "0" + n) + ":" + (a >= 10 ? a : "0" + a);
                var o = this.uiNode.getChildByName("skill1button");
                if (y.default.levelBenefitArray[1] > 0)
                  if (((o.active = !0), this.skill1Time > 0)) {
                    o.getChildByName("ad").active = !1;
                    var r = Math.floor(this.skill1Time);
                    ((o.getChildByName("text").active = !0),
                      (o.getChildByName("text").getComponent(cc.Label).string = "00:" + (r >= 10 ? r : "0" + r)),
                      (o.getChildByName("pro1").active = !0),
                      (o.getChildByName("pro1").getComponent(cc.Sprite).fillRange = (60 - this.skill1Time) / 60),
                      (o.getChildByName("pro2").active = !1),
                      (o.getChildByName("pro3").active = !1));
                  } else((o.getChildByName("text").active = !1),
                    (o.getChildByName("ad").active = !this.firstSkill1),
                    (o.getChildByName("pro1").active = !1),
                    (o.getChildByName("pro2").active = !0),
                    (o.getChildByName("pro3").active = !0));
                else o.active = !1;
                var s = this.uiNode.getChildByName("skill2button");
                if (y.default.levelBenefitArray[3] > 0)
                  if (((s.active = !0), this.skill2Time > 0)) {
                    s.getChildByName("ad").active = !1;
                    var c = Math.floor(this.skill2Time);
                    ((s.getChildByName("text").active = !0),
                      (s.getChildByName("text").getComponent(cc.Label).string = "00:" + (c >= 10 ? c : "0" + c)),
                      (s.getChildByName("pro1").active = !0),
                      (s.getChildByName("pro1").getComponent(cc.Sprite).fillRange = (60 - this.skill2Time) / 60),
                      (s.getChildByName("pro2").active = !1),
                      (s.getChildByName("pro3").active = !1));
                  } else((s.getChildByName("text").active = !1),
                    (s.getChildByName("ad").active = !this.firstSkill2),
                    (s.getChildByName("pro1").active = !1),
                    (s.getChildByName("pro2").active = !0),
                    (s.getChildByName("pro3").active = !0));
                else s.active = !1;
                if (this.isBattle && !this.isPause) {
                  (this.skill1Time > 0 && ((this.skill1Time -= e * g.default.gameSpeed), this.skill1Time < 0 && (this.skill1Time = 0)), this.skill2Time > 0 && ((this.skill2Time -= e * g.default.gameSpeed), this.skill2Time < 0 && (this.skill2Time = 0)), this.skill1TimeOther > 0 && ((this.skill1TimeOther -= e * g.default.gameSpeed), this.skill1TimeOther < 0 && (this.skill1TimeOther = 0)), this.skill2TimeOther > 0 && ((this.skill2TimeOther -= e * g.default.gameSpeed), this.skill2TimeOther < 0 && (this.skill2TimeOther = 0)));
                  var l = this.uiNode.getChildByName("productButton");
                  this.money >= 100 || this.hasBuildingChoice ? l.active || ((l.getChildByName("redpoint").active = !0),
                    (l.active = !0), f.default.inst.playAudio("starcraft/click"), f.default.inst.playAudio("starcraft/ui_change"), this.nodeMoveIn(l, -325, 1)) : (l.active = !1);
                }
              }),
              (t.prototype.changeBuffer = function(e) {
                var t = this,
                  i = this.uiNode.getChildByName("buffer"),
                  n = i.getChildByName("b" + e);
                if (n) {
                  var a = n.getChildByName("icon").getChildByName("num"),
                    o = parseInt(a.getComponent(cc.Label).string) + 1;
                  a.getComponent(cc.Label).string = o + "";
                } else h.cocos.loadRes("starcraft/ui/buffer", cc.Prefab).then(function(n) {
                  var a = cc.instantiate(n);
                  ((a.getChildByName("icon").getChildByName("mask").getChildByName("army").getComponent(cc.Sprite).spriteFrame = t.armyImgArray[e - 1]), i.addChild(a, 1, "b" + e));
                });
              }),
              (t.prototype.nodeMoveIn = function(e, t, i) {
                1 == i ? ((e.x = -this.screenW / 2 - e.width / 2), e.runAction(cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()), )) : ((e.x = this.screenW / 2 + e.width / 2), e.runAction(cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()), ));
              }),
              (t.prototype.nodeMoveOut = function(e, t) {
                1 == t ? e.runAction(cc.moveTo(0.4, -this.screenW / 2 - e.width / 2, e.y).easing(cc.easeBackInOut()), ) : e.runAction(cc.moveTo(0.4, this.screenW / 2 + e.width / 2, e.y).easing(cc.easeBackInOut()), );
              }),
              (t.prototype.changeSpeed = function() {
                // Offline adaptation: pvpScene.changeSpeed
                return r(this, void 0, void 0, function() {
                  var e;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (f.default.inst.playAudio("starcraft/click"), this.isBattle ? 1 != g.default.gameSpeed ? [3, 1] : ((g.default.gameSpeed = 2), this.unlockSpeed || (this.uiNode.getChildByName("speedbutton").getChildByName("ad").active = !0),
                          [3, 5]) : [2]);
                      case 1:
                        return 2 != g.default.gameSpeed ? [3, 4] : this.unlockSpeed ? [3, 3] : (this.isPause || ((this.isPause = !0), this.setPause()),
                          [4, m.wechat.showRewardedVideoAdNew()]);
                      case 2:
                        if (
                          ((e = t.sent()), this.isPause && (this.isPause = !1), !e.isEnded)) return (m.wechat.is_jd_platform || this.popTips("观看视频广告失败"),
                          [2]);
                        ((this.unlockSpeed = !0),
                          (this.uiNode.getChildByName("speedbutton").getChildByName("ad").active = !1),
                          (t.label = 3));
                      case 3:
                        return ((g.default.gameSpeed = 3), [3, 5]);
                      case 4:
                        ((g.default.gameSpeed = g.default.gameSpeed === 3 ? 4 : 1),
                          (t.label = 5));
                      case 5:
                        return (
                          (this.uiNode.getChildByName("speedbutton").getChildByName("text").getComponent(cc.Label).string = "x" + g.default.gameSpeed),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.goPause = function() {
                (f.default.inst.playAudio("starcraft/click"), f.default.inst.playAudio("starcraft/ui_change"), this.isBattle && (this.isPause || ((this.isPause = !this.isPause), this.isPause ? (this.setPause(),
                  (this.uiNode.getChildByName("pause").active = !0), this.nodeMoveIn(this.uiNode.getChildByName("pause"), 0, 1, )) : (this.uiNode.getChildByName("pause").active = !1))));
              }),
              (t.prototype.noPause = function() {
                (f.default.inst.playAudio("starcraft/click"),
                  (this.isPause = !1),
                  (this.uiNode.getChildByName("pause").active = !1));
              }),
              (t.prototype.setPause = function() {
                for (var e = 0; e < this.armyArray.length; e++) this.armyArray[e].getComponent("starArmy", ).rigidBody.linearVelocity = cc.v2(0, 0);
                for (e = 0; e < this.armyArrayOther.length; e++) this.armyArrayOther[e].getComponent("starArmy", ).rigidBody.linearVelocity = cc.v2(0, 0);
              }),
              (t.prototype.gameOver = function() {
                // Offline adaptation: pvpScene.gameOver
                if (this._offlineResultStarted) return Promise.resolve();
                this._offlineResultStarted = true;
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    i = this;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.uiNode.getChildByName("productButton").active = !1),
                          (this.uiNode.getChildByName("buildingChoice").active = !1),
                          (this.isBattle = !1),
                          (this.isPause = !0), this.setPause(),
                          (this._game_result = "lose"), f.default.inst.bgmOff(),
                          (e = 0),
                          [4, v.default.arenaResult(0)]);
                      case 1:
                        return (n.sent(), this.nodePop(this.uiNode.getChildByName("loseNode")),
                          ((t = this.uiNode.getChildByName("over")).getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label, ).string = "+" + e), this.updateJungongProgress(t.getChildByName("bg").getChildByName("pbox"), ), this.updateJunxianIcon(t.getChildByName("bg").getChildByName("jx"), y.default.jx, ), this.scheduleOnce(function() {
                            ((i.uiNode.getChildByName("loseNode").active = !1), f.default.inst.playAudio("starcraft/lose"), f.default.inst.playAudio("starcraft/ui_change"),
                              (i.uiNode.getChildByName("over").active = !0), i.nodeMoveIn(t.getChildByName("bg"), 0, 1), i.nodeMoveIn(t.getChildByName("doublebutton"), -175, 1, ), i.nodeMoveIn(t.getChildByName("okbutton"), 173, 2, ));
                          }, 1.5),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.addMoney = function() {}),
              (t.prototype.nodePop = function(e) {
                ((e.active = !0),
                  (e.scale = 0), e.runAction(cc.scaleTo(0.5, 1).easing(cc.easeBackInOut())));
              }),
              (t.prototype.gameDraw = function() {
                // Offline adaptation: pvpScene.gameDraw
                if (this._offlineResultStarted) return Promise.resolve();
                this._offlineResultStarted = true;
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    i = this;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.uiNode.getChildByName("productButton").active = !1),
                          (this.uiNode.getChildByName("buildingChoice").active = !1),
                          (this.isBattle = !1),
                          (this.isPause = !0), this.setPause(),
                          (this._game_result = "draw"), this.nodePop(this.uiNode.getChildByName("drawNode")),
                          (e = this.uiNode.getChildByName("draw")), f.default.inst.bgmOff(),
                          [4, v.default.arenaResult(4)]);
                      case 1:
                        return (
                          (t = n.sent()),
                          (e.getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label, ).string = "+3"), this.updateJungongProgress(e.getChildByName("bg").getChildByName("pbox"), ), this.updateJunxianIcon(e.getChildByName("bg").getChildByName("jx"), y.default.jx, ), this.scheduleOnce(function() {
                            return r(i, void 0, void 0, function() {
                              var i, n;
                              return s(this, function(a) {
                                switch (a.label) {
                                  case 0:
                                    return (
                                      (this.uiNode.getChildByName("drawNode", ).active = !1), f.default.inst.playAudio("starcraft/win"), f.default.inst.playAudio("starcraft/ui_change", ),
                                      (e.active = !0), t && t.up ? [
                                        4,
                                        h.cocos.loadRes("pop/jx_levelup", cc.Prefab, ),
                                      ] : [3, 2]);
                                  case 1:
                                    ((i = a.sent()),
                                      (n = cc.instantiate(i)), this.node.getChildByName("ui").addChild(n), n.getComponent(w.default).show(t.jx, t.up), y.default.addItem(8, t.up), y.default.saveDataRem(), y.default.saveData(), y.default.saveUser(),
                                      (a.label = 2));
                                  case 2:
                                    return (this.nodeMoveIn(e.getChildByName("bg"), 0, 1, ), this.nodeMoveIn(e.getChildByName("doublebutton"), -175, 1, ), this.nodeMoveIn(e.getChildByName("okbutton"), 173, 2, ),
                                      [2]);
                                }
                              });
                            });
                          }, 1.5),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.gameWin = function() {
                // Offline adaptation: pvpScene.gameWin
                if (this._offlineResultStarted) return Promise.resolve();
                this._offlineResultStarted = true;
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    i = this;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.uiNode.getChildByName("productButton").active = !1),
                          (this.uiNode.getChildByName("buildingChoice").active = !1),
                          (this.isBattle = !1),
                          (this.isPause = !0), this.setPause(),
                          (this._game_result = "win"), this.nodePop(this.uiNode.getChildByName("winNode")),
                          (e = this.uiNode.getChildByName("win")), f.default.inst.bgmOff(),
                          [4, v.default.arenaResult(1)]);
                      case 1:
                        return (
                          (t = n.sent()),
                          (e.getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label, ).string = "+10"), this.updateJungongProgress(e.getChildByName("bg").getChildByName("pbox"), ), this.updateJunxianIcon(e.getChildByName("bg").getChildByName("jx"), y.default.jx, ), this.scheduleOnce(function() {
                            return r(i, void 0, void 0, function() {
                              var i, n;
                              return s(this, function(a) {
                                switch (a.label) {
                                  case 0:
                                    return (
                                      (this.uiNode.getChildByName("winNode", ).active = !1), f.default.inst.playAudio("starcraft/win"), f.default.inst.playAudio("starcraft/ui_change", ),
                                      (e.active = !0), t && t.up ? [
                                        4,
                                        h.cocos.loadRes("pop/jx_levelup", cc.Prefab, ),
                                      ] : [3, 2]);
                                  case 1:
                                    ((i = a.sent()),
                                      (n = cc.instantiate(i)), this.node.getChildByName("ui").addChild(n), n.getComponent(w.default).show(t.jx, t.up), y.default.addItem(8, t.up), y.default.saveDataRem(), y.default.saveData(), y.default.saveUser(),
                                      (a.label = 2));
                                  case 2:
                                    return (this.nodeMoveIn(e.getChildByName("bg"), 0, 1, ), this.nodeMoveIn(e.getChildByName("doublebutton"), -175, 1, ), this.nodeMoveIn(e.getChildByName("okbutton"), 173, 2, ),
                                      [2]);
                                }
                              });
                            });
                          }, 1.5),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.updateJunxianIcon = function(e, t) {
                h.cocos.loadRes("arena/atlas/icon" + t, cc.SpriteFrame).then(function(t) {
                  e.isValid && (e.getComponent(cc.Sprite).spriteFrame = t);
                });
              }),
              (t.prototype.updateJungongProgress = function(e) {
                ((e.getChildByName("label").getComponent(cc.Label).string = y.default.arenaScore.toString() + "/" + v.junxian_exp[y.default.jx - 1]),
                  (e.getChildByName("progress").getComponent(cc.Sprite).fillRange = y.default.arenaScore / v.junxian_exp[y.default.jx - 1]));
              }),
              (t.prototype.doubleReward = function() {
                // Offline adaptation: pvpScene.doubleReward
                if (this._offlineBonusClaimed) return Promise.resolve();
                this._offlineBonusClaimed = true;
                return r(this, void 0, void 0, function() {
                  var e, t, i, n, a, o, r, c;
                  return s(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return (f.default.inst.playAudio("starcraft/click"),
                          (e = this),
                          [4, m.wechat.showRewardedVideoAdNew()]);
                      case 1:
                        return s.sent().isEnded ? ((t = null), e.uiNode.getChildByName("win").active || e.uiNode.getChildByName("draw").active ? [
                          4,
                          v.default.arenaResult("win" == this._game_result ? 2 : 5, ),
                        ] : [3, 7]) : (m.wechat.is_jd_platform || this.popTips("观看视频广告失败"),
                          [2]);
                      case 2:
                        return (
                          (i = s.sent()),
                          ((t = "win" == this._game_result ? e.uiNode.getChildByName("win") : e.uiNode.getChildByName("draw")).getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label, ).string = "win" == this._game_result ? "+20" : "+6"), this.updateJunxianIcon(t.getChildByName("bg").getChildByName("jx"), y.default.jx, ), i && i.up ? (n = this.node.getChildByName("ui").getChildByName("jx_levelup")) ? [3, 4] : [
                            4,
                            h.cocos.loadRes("pop/jx_levelup", cc.Prefab),
                          ] : [3, 6]);
                      case 3:
                        return (
                          (a = s.sent()),
                          (n = cc.instantiate(a)), this.node.getChildByName("ui").addChild(n),
                          [3, 5]);
                      case 4:
                        ((n.active = !0), (s.label = 5));
                      case 5:
                        (n.getComponent(w.default).show(i.jx, i.up), y.default.addItem(8, i.up), y.default.saveDataRem(), y.default.saveData(), y.default.saveUser(),
                          (s.label = 6));
                      case 6:
                        return [3, 9];
                      case 7:
                        return [4, v.default.arenaResult(3)];
                      case 8:
                        (s.sent(),
                          (t = e.uiNode.getChildByName("over")),
                          (o = parseInt(t.getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label).string, )),
                          (t.getChildByName("bg").getChildByName("items").children[0].children[0].getComponent(cc.Label, ).string = "+0"),
                          (s.label = 9));
                      case 9:
                        for (this.updateJungongProgress(t.getChildByName("bg").getChildByName("pbox"), ), r = t.getChildByName("bg").getChildByName("items"), c = 0; c < r.childrenCount; c++) r.children[c].runAction(cc.sequence(cc.scaleTo(0.2, 1), cc.scaleTo(0.2, 0.9), ), );
                        return (f.default.inst.playAudio("starcraft/ui_change"), e.nodeMoveOut(t.getChildByName("doublebutton"), 1), y.default.saveDataRem(), y.default.saveData(), y.default.saveUser(),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.popTips = function(e) {
                var t = cc.instantiate(this.tipsPrefab);
                (this.node.addChild(t),
                  (t.y = 50),
                  (t.getChildByName("bg").getChildByName("text").getComponent(cc.Label).string = e),
                  (t.scale = 0.1), t.runAction(cc.sequence(cc.scaleTo(0.1, 1), cc.delayTime(0.4), cc.moveBy(0.8, 0, 80), cc.fadeOut(0.4), cc.callFunc(function() {
                    (t.removeFromParent(!0), t.destroy());
                  }), ), ));
              }),
              (t.prototype.exitGame = function() {
                if (
                  (f.default.inst.playAudio("starcraft/click"), !this._game_result)) return (
                  (this.uiNode.getChildByName("pause").active = !1),
                  (this.uiNode.getChildByName("pausebutton").active = !1), void this.gameOver());
                (m.wechat.showInterstitialAd(), this.showLoading(), cc.director.loadScene("mainScene", function() {
                  b.default.inst.scheduleOnce(function() {
                    b.default.inst.changePageIndex(5);
                  }, 0);
                }));
              }),
              (t.prototype.checkBuilding = function() {
                for (var e = 0; e < this.buildingArray.length; e++) this.buildingArray[e].getComponent("building").checkProductArmy();
              }),
              (t.prototype.showLoading = function() {
                this.node.getChildByName("loading").active = !0;
              }),
              (t.prototype.skill1Button = function() {
                return r(this, void 0, void 0, function() {
                  var e, t, i, n;
                  return s(this, function(a) {
                    switch (a.label) {
                      case 0:
                        return (f.default.inst.playAudio("starcraft/click"), this.isPause || !this.isBattle ? (this.popTips("需要在战斗中使用技能"), [2]) : this.skill1Time <= 0 ? this.firstSkill1 ? [3, 2] : ((this.isPause = !0), this.setPause(),
                          [4, m.wechat.showRewardedVideoAdNew()]) : [3, 3]);
                      case 1:
                        if (((e = a.sent()), (this.isPause = !1), !e.isEnded)) return (m.wechat.is_jd_platform || this.popTips("观看视频广告失败"),
                          [2]);
                        a.label = 2;
                      case 2:
                        for (f.default.inst.playAudio("starcraft/addlife"), this.firstSkill1 = !1, this.skill1Time = 60, t = 0; t < this.armyArray.length; t++) this.armyArray[t].getComponent("starArmy").addEffect("relive", 3, !0);
                        for (t = 0; t < this.buildingArray.length; t++)
                          (i = this.buildingArray[t].getComponent("building")).isOver ? ((i.hp = i.totalHp),
                            (i.status = 1),
                            (i.imgIndex = 0),
                            (i.isOver = !1),
                            (n = this.buildingChoice.overBuildingArray.indexOf(i.type - 1, )) >= 0 && this.buildingChoice.overBuildingArray.splice(n, 1, )) : (i.hp = i.totalHp);
                        return [3, 4];
                      case 3:
                        return (this.popTips("该技能需要在倒计时结束后使用"),
                          [2]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.skill1Other = function() {
                (f.default.inst.playAudio("starcraft/addlife"),
                  (this.skill1TimeOther = 60));
                for (var e = 0; e < this.armyArrayOther.length; e++) this.armyArrayOther[e].getComponent("starArmy").addEffect("relive", 3, !0);
                for (e = 0; e < this.buildingArrayOther.length; e++) {
                  var t = this.buildingArrayOther[e].getComponent("building");
                  if (t.isOver) {
                    ((t.hp = t.totalHp),
                      (t.status = 1),
                      (t.imgIndex = 0),
                      (t.isOver = !1));
                    var i = this.buildingChoiceOther.overBuildingArray.indexOf(t.type - 1, );
                    i >= 0 && this.buildingChoiceOther.overBuildingArray.splice(i, 1);
                  } else t.hp = t.totalHp;
                }
              }),
              (t.prototype.skill2Button = function() {
                return r(this, void 0, void 0, function() {
                  var e,
                    t = this;
                  return s(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return (f.default.inst.playAudio("starcraft/click"), this.isPause || !this.isBattle ? (this.popTips("需要在战斗中使用技能"), [2]) : this.skill2Time <= 0 ? this.firstSkill2 ? [3, 2] : ((this.isPause = !0), this.setPause(),
                          [4, m.wechat.showRewardedVideoAdNew()]) : [3, 3]);
                      case 1:
                        if (((e = i.sent()), (this.isPause = !1), !e.isEnded)) return (m.wechat.is_jd_platform || this.popTips("观看视频广告失败"),
                          [2]);
                        i.label = 2;
                      case 2:
                        return (f.default.inst.playAudio("starcraft/nuclear"),
                          (this.firstSkill2 = !1),
                          (this.skill2Time = 60),
                          (this.nuClearing = !0), this.addEffect("nuclear1", 1, {
                            x: 0,
                            y: 250
                          }, 2), this.scheduleOnce(function() {
                            t.addEffect("nuclear2", 1, {
                              x: 0,
                              y: 250
                            }, 3);
                          }, 2.2), this.scheduleOnce(function() {
                            ((t.hasNuclear = !0),
                              (t.skill1TimeOther = 5 + 10 * Math.random()),
                              (t.nuClearing = !1));
                            for (var e = 0; e < t.armyArrayOther.length; e++) t.armyArrayOther[e].getComponent("starArmy").addEffect("blood", 3, !0);
                            for (e = 0; e < t.buildingArrayOther.length; e++) {
                              var i = t.buildingArrayOther[e].getComponent("building", );
                              i.isOver || (i.doHurt(i.totalHp / 3), t.showText(Math.floor(i.totalHp / 3) + "", {
                                x: i.x,
                                y: i.y
                              }, null, i.pvpWay, ));
                            }
                          }, 3.2),
                          [3, 4]);
                      case 3:
                        return (this.popTips("该技能需要在倒计时结束后使用"),
                          [2]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.skill2Other = function() {
                var e = this;
                (f.default.inst.playAudio("starcraft/nuclear"),
                  (this.skill2TimeOther = 60),
                  (this.nuClearing = !0), this.addEffect("nuclear1", 1, {
                    x: 0,
                    y: -250
                  }, 2), this.scheduleOnce(function() {
                    e.addEffect("nuclear2", 1, {
                      x: 0,
                      y: -250
                    }, 3);
                  }, 2.2), this.scheduleOnce(function() {
                    e.nuClearing = !1;
                    for (var t = 0; t < e.armyArray.length; t++) e.armyArray[t].getComponent("starArmy").addEffect("blood", 3, !0);
                    for (t = 0; t < e.buildingArray.length; t++) {
                      var i = e.buildingArray[t].getComponent("building");
                      i.isOver || (i.doHurt(i.totalHp / 3), e.showText(Math.floor(i.totalHp / 3) + "", {
                        x: i.x,
                        y: i.y
                      }, null, i.pvpWay, ));
                    }
                  }, 3.2));
              }),
              (t.prototype.windowPop = function(e) {
                ((e.active = !0),
                  (e.scale = 0), e.runAction(cc.scaleTo(0.2, 1).easing(cc.easeBackInOut())));
              }),
              (t.prototype.addRedPoint = function(e, t) {
                var i = cc.instantiate(_.default.inst.red_point_prefab);
                return (e.addChild(i), i.setPosition(t), (i.active = !1), i);
              }),
              (t.prototype.getScore = function(e) {
                var t = 0,
                  i = [10, 8, 8, 8, 5],
                  n = [1, 3, 4, 5, 5, 10, 6, 5, 6, 12];
                if (0 == e) {
                  for (var a = 0; a < this.buildingArray.length; a++)
                    if (
                      (o = this.buildingArray[a].getComponent("building")).isOver) {
                      if (o.type == u.BuildingType.JI_DI) return 0;
                    } else t += i[o.type - 1];
                  for (a = 0; a < this.armyArray.length; a++) t += n[this.armyArray[a].getComponent("starArmy").type - 1];
                } else {
                  for (a = 0; a < this.buildingArrayOther.length; a++) {
                    var o;
                    if (
                      (o = this.buildingArrayOther[a].getComponent("building")).isOver) {
                      if (o.type == u.BuildingType.JI_DI) return 0;
                    } else t += i[o.type - 1];
                  }
                  for (a = 0; a < this.armyArrayOther.length; a++) t += n[this.armyArrayOther[a].getComponent("starArmy").type - 1];
                }
                return t;
              }),
              (t.otherPlayerName = ""),
              (t.otherPlayerIcon = ""),
              (t._instance = null), o([d(cc.Prefab)], t.prototype, "tipsPrefab", void 0), o([d(cc.Prefab)], t.prototype, "itemUIPrefab", void 0), o([d(cc.Node)], t.prototype, "bgNode", void 0), o([d(cc.Node)], t.prototype, "uiNode", void 0), o([d(cc.Node)], t.prototype, "touchNode", void 0), o([d([cc.SpriteFrame])], t.prototype, "buildingImgArray", void 0), o([d([cc.SpriteFrame])], t.prototype, "armyImgArray", void 0), o([d([cc.SpriteFrame])], t.prototype, "choiceImgArray", void 0), o([d(cc.Label)], t.prototype, "other_name_label", void 0), o([d(cc.Sprite)], t.prototype, "other_headicon", void 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = B), cc._RF.pop());
      };
