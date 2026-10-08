// module: gameScene
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "gameScene");
        var n,
          a =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                })(e, t);
            }),
            function (e, t) {
              function i() {
                this.constructor = e;
              }
              (n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i())));
            }),
          o =
            (this && this.__decorate) ||
            function (e, t, i, n) {
              var a,
                o = arguments.length,
                r =
                  o < 3
                    ? t
                    : null === n
                      ? (n = Object.getOwnPropertyDescriptor(t, i))
                      : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(e, t, i, n);
              else
                for (var s = e.length - 1; s >= 0; s--)
                  (a = e[s]) &&
                    (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
              return (o > 3 && r && Object.defineProperty(t, i, r), r);
            },
          r =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = Promise))(function (a, o) {
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
                  e.done
                    ? a(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var i,
                n,
                a,
                o,
                r = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(e) {
                return function (t) {
                  return c([e, t]);
                };
              }
              function c(o) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; r; )
                  try {
                    if (
                      ((i = 1),
                      n &&
                        (a =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((a = n.return) && a.call(n), 0)
                              : n.next) &&
                        !(a = a.call(n, o[1])).done)
                    )
                      return a;
                    switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return (r.label++, { value: o[1], done: !1 });
                      case 5:
                        (r.label++, (n = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = r.ops.pop()), r.trys.pop());
                        continue;
                      default:
                        if (
                          !(a = (a = r.trys).length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          r = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
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
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = e("./libppgame/libcocos"),
          u = e("./game/building"),
          p = e("./game/starEnemy"),
          f = e("./game/starArmy"),
          g = e("./game/buildingChoice"),
          y = e("./game/armyChoice"),
          m = e("./libppgame/audioMgr"),
          _ = e("./data/stageData"),
          v = e("./gameData"),
          b = e("./playerData"),
          w = e("./libppgame/libwechat"),
          C = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bufferPrefab = null),
                (t.tipsPrefab = null),
                (t.itemUIPrefab = null),
                (t.bgNode = null),
                (t.uiNode = null),
                (t.touchNode = null),
                (t.buildingImgArray = []),
                (t.armyImgArray = []),
                (t.choiceImgArray = []),
                (t.buildingArray = new Array()),
                (t.armyArray = new Array()),
                (t.enemyArray = new Array()),
                (t.pressX = 0),
                (t.pressY = 0),
                (t.originX = 0),
                (t.originY = 0),
                (t.money = 150),
                (t.isBattle = !1),
                (t.isPause = !1),
                (t.subLevel = 0),
                (t.buildingChoice = null),
                (t.armyChoice = null),
                (t.exp = 0),
                (t.expLevel = 0),
                (t.expNeed = [
                  6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66,
                  70, 74, 78,
                ]),
                (t.expSubLevel = [
                  4, 10, 16, 22, 28, 34, 40, 46, 52, 58, 64, 70,
                ]),
                (t.getExp = 0),
                (t.nowEnemyConfig = null),
                (t.buildingPosArray = [
                  { x: 0, y: -515 },
                  { x: -175, y: -385 },
                  { x: 175, y: -390 },
                  { x: -2, y: -300 },
                  { x: 130, y: -180 },
                  { x: -130, y: -180 },
                ]),
                (t.moneyIndex = 1),
                (t.screenW = 0),
                (t.screenH = 0),
                (t.firstStep = 0),
                (t.adBuildingChoice = !0),
                (t.hasRelive = !1),
                (t.hasAllChoice = !0),
                (t.nowArmyChoiceArray = null),
                (t.unlockMoney = !1),
                (t.unlockSpeed = !1),
                (t.freeBuildingRefresh = !0),
                (t.freeArmyRefresh = !0),
                (t.firstSkill1 = !0),
                (t.skill1Time = 30),
                (t.firstSkill2 = !0),
                (t.skill2Time = 30),
                (t.nuClearing = !1),
                t
              );
            }
            var i;
            return (
              a(t, e),
              (i = t),
              Object.defineProperty(t, "inst", {
                get: function () {
                  return this._instance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.saveBattle = function () {
                ((b.default.saveBattleData = {
                  level: v.default.nowGameLevel, refreshUsed:this._refreshUsed||0, allChoiceUsed:this._allChoiceUsed||0,
                  subLevel: this.subLevel,
                  exp: this.exp,
                  expLevel: this.expLevel,
                  money: this.money,
                  buildingChoice: this.buildingChoice.choiceArray.slice(),
                  soldBuildingTypes: (this.buildingChoice.soldBuildingTypes || []).slice(),
                  armyChoice: this.armyChoice.choiceArray,
                }),
                  b.default.saveData());
              }),
              (t.prototype.clearBattle = function () {
                ((b.default.saveBattleData = null), b.default.saveData());
              }),
              (t.prototype.start = function () {this._refreshUsed=i.isContinue&&b.default.saveBattleData?window.offlineBattleRules.clamp(b.default.saveBattleData.refreshUsed):0;
this._allChoiceUsed=i.isContinue&&b.default.saveBattleData?window.offlineBattleRules.clamp(b.default.saveBattleData.allChoiceUsed):0;
                // Offline adaptation: gameScene.start

                var e = this;
                if (cc.sys.platform == cc.sys.TAOBAO_MINIGAME) {
                  if ((o = my.getSystemInfoSync())) {
                    var t = o.statusBarHeight,
                      n = o.titleBarHeight,
                      a = o.windowHeight;
                    t &&
                      n &&
                      a &&
                      (this.uiNode.getChildByName("pausebutton").y =
                        cc.winSize.height / 2 -
                        50 -
                        (t + n) * (cc.winSize.height / a));
                  }
                  ((this.uiNode.getChildByName("money").y -= 21),
                    (this.uiNode
                      .getChildByName("level")
                      .getChildByName("text").y -= 21),
                    (this.uiNode
                      .getChildByName("speedbutton")
                      .getChildByName("ad").active = !1));
                } else if (w.wechat.is_jd_platform) {
                  var o;
                  if (
                    ((this.uiNode.getChildByName("money").y -= 21),
                    (this.uiNode
                      .getChildByName("level")
                      .getChildByName("text").y -= 21),
                    (o = jd.getSystemInfoSync()) && o.safeArea)
                  ) {
                    var r = o.safeArea.top;
                    ((a = o.windowHeight),
                      r &&
                        a &&
                        o.statusBarHeight &&
                        (this.uiNode.getChildByName("pausebutton").y =
                          cc.winSize.height / 2 -
                          60 -
                          (r + o.statusBarHeight) * (cc.winSize.height / a)));
                  }
                }
                if (
                  (console.log(
                    "gameScene start GameData.nowGameLevel=" +
                      v.default.nowGameLevel,
                  ),
                  (v.default.gameMode = 0),
                  (v.default.gameSpeed = 2, this.uiNode.getChildByName("speedbutton").getChildByName("text").getComponent(cc.Label).string = "x2"),
                  i.isContinue ||
                    1 != v.default.nowGameLevel ||
                    0 != b.default.levelPassArray[0] ||
                    (this.firstStep = 1),
                  (v.default.inBattle = !0),
                  (v.default.gameInstance = this),
                  (i._instance = this),
                  w.wechat.getConfig("review") == v.default.reviewVersion &&
                    (this.node
                      .getChildByName("help")
                      .getChildByName("bg")
                      .getComponent(cc.Sprite).enabled = !1),
                  (this.money += v.default.getLevelGiftValueWithType(9)),
                  m.default.inst.bgmOn("starcraft/bgm_battle"),
                  (this.buildingChoice = new g.default()),
                  (this.armyChoice = new y.default()),
                  this.productBuilding(u.BuildingType.JI_DI, 1),
                  i.isContinue)
                ) {
                  ((v.default.nowGameLevel = b.default.saveBattleData.level),
                    (this.subLevel = b.default.saveBattleData.subLevel),
                    (this.exp = b.default.saveBattleData.exp),
                    (this.expLevel = b.default.saveBattleData.expLevel),
                    (this.money = b.default.saveBattleData.money),
                    (this.buildingChoice.choiceArray =
                      b.default.saveBattleData.buildingChoice),
                    (this.buildingChoice.soldBuildingTypes = (b.default.saveBattleData.soldBuildingTypes || []).slice()),
                    (this.armyChoice.choiceArray =
                      b.default.saveBattleData.armyChoice));
                  for (
                    var s = 0;
                    s < this.buildingChoice.choiceArray.length;
                    s++
                  )
                    this.buildingChoice.choiceArray[s] < 5 &&
                      this.buildingChoice.doChoice(
                        this.buildingChoice.choiceArray[s],
                        !1,
                      );
                  ((this.firstSkill1 = !1),
                    (this.firstSkill2 = !1),
                    (this.freeArmyRefresh = !1),
                    (this.freeBuildingRefresh = !1));
                }
                var c = _.default.getEnemyArrayWithLevel(
                  v.default.nowGameLevel,
                );
                ((this.screenW = cc.view.getVisibleSize().width),
                  (this.screenH = cc.view.getVisibleSize().height));
                var l = this;
                (cc.loader.loadRes(
                  "starcraft/bg/bg_" + (((v.default.nowGameLevel - 1) % 7) + 1),
                  cc.SpriteFrame,
                  function (e) {
                    e
                      ? cc.error(e.message || e)
                      : (l.bgNode
                          .getChildByName("map")
                          .getComponent(cc.Sprite).spriteFrame =
                          cc.loader.getRes(
                            "starcraft/bg/bg_" +
                              (((v.default.nowGameLevel - 1) % 7) + 1),
                            cc.SpriteFrame,
                          ));
                  },
                ),
                  (this.uiNode.getChildByName("commentbutton").active =
                    v.default.nowGameLevel > 1),
                  (this.nowEnemyConfig = c),
                  this.scheduleOnce(function () {
                    m.default.inst.playAudio("starcraft/base");
                  }, 0.3),
                  this.scheduleOnce(function () {
                    if (i.isContinue) {
                      e.adBuildingChoice = !1;
                      for (
                        var t = 0;
                        t < e.buildingChoice.choiceArray.length;
                        t++
                      )
                        e.buildingChoice.choiceArray[t] >= 5 &&
                          e.buildingChoice.doChoice(
                            e.buildingChoice.choiceArray[t],
                            !1,
                          );
                      for (t = 0; t < e.armyChoice.choiceArray.length; t++)
                        e.changeBuffer(e.armyChoice.choiceArray[t][0] + 1);
                      i.isContinue = !1;
                      var n = e.uiNode.getChildByName("buildingChoice");
                      ((n.active = !0), (n.getChildByName("bg").active = !1));
                      var a = n.getChildByName("nextButton");
                      for (
                        a.active = !0,
                          e.nodeMoveIn(a, -175, 1),
                          e.money >= 100
                            ? ((a.getComponent(cc.Button).interactable = !0),
                              (a.getChildByName("icon").active = !0),
                              (a.getChildByName("ad").active = !1),
                              (a.getChildByName("text").color = cc.color(
                                39,
                                234,
                                246,
                              )))
                            : ((a.getChildByName("icon").active = !1),
                              (a.getChildByName("ad").active = !1),
                              false
                                ? ((a.getComponent(cc.Button).interactable =
                                    !0),
                                  (a.getChildByName("ad").color = cc.color(
                                    39,
                                    234,
                                    246,
                                  )),
                                  (a.getChildByName("text").color = cc.color(
                                    39,
                                    234,
                                    246,
                                  )))
                                : ((a.getComponent(cc.Button).interactable =
                                    !1),
                                  (a.getChildByName("ad").color = cc.color(
                                    70,
                                    79,
                                    79,
                                  )),
                                  (a.getChildByName("text").color = cc.color(
                                    70,
                                    79,
                                    79,
                                  )))),
                          n.getChildByName("startButton").active = !0,
                          e.nodeMoveIn(n.getChildByName("startButton"), 173, 2),
                          n.getChildByName("refreshButton").active = !1,
                          t = 0;
                        t < 3;
                        t++
                      )
                        n.getChildByName("choice" + (t + 1)).active = !1;
                      ((b.default.saveBattleData = null), b.default.saveData());
                    } else
                      (m.default.inst.playAudio("starcraft/ui_change"),
                        (e.uiNode.getChildByName("buildingChoice").active = !0),
                        e.nodeMoveIn(
                          e.uiNode.getChildByName("buildingChoice"),
                          0,
                          1,
                        ),
                        e.refreshBuildingChoice());
                    1 == e.firstStep &&
                      e.scheduleOnce(function () {
                        e.openHelp(
                          { x: 80, y: -245 },
                          { x: 200, y: 15 },
                          "先增加农民数量，可以采集更多水晶矿",
                        );
                      }, 0.8);
                  }, 1.6),
                  this.uiNode
                    .getChildByName("skill1button")
                    .getChildByName("pro3")
                    .runAction(
                      cc.repeatForever(
                        cc.sequence(cc.scaleTo(0.3, 0.9), cc.scaleTo(0.3, 1)),
                      ),
                    ),
                  this.uiNode
                    .getChildByName("skill2button")
                    .getChildByName("pro3")
                    .runAction(
                      cc.repeatForever(
                        cc.sequence(cc.scaleTo(0.3, 0.9), cc.scaleTo(0.3, 1)),
                      ),
                    ),
                  (cc.director.getPhysicsManager().enabled = !0),
                  (this.uiNode
                    .getChildByName("level")
                    .getChildByName("text")
                    .getComponent(cc.Label).string =
                    "波次：" +
                    (this.subLevel + 1) +
                    "/" +
                    _.default.StageLevelsConfig[v.default.nowGameLevel - 1]
                      .wave),
                  (this.uiNode
                    .getChildByName("level")
                    .getChildByName("text1")
                    .getComponent(cc.Label).string =
                    "第" + v.default.nowGameLevel + "关"));
              }),
              (t.prototype.clickRefreshArmyChoice = function () {
                // Offline adaptation: gameScene.clickRefreshArmyChoice

                window.offlineBattleRules.reroll(this, "army", false);
                return Promise.resolve();
              }),
              (t.prototype.openRelive = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  this.windowPop(this.uiNode.getChildByName("relive")));
              }),
              (t.prototype.cancelRelive = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  (this.uiNode.getChildByName("relive").active = !1),
                  (this.hasRelive = !0),
                  this.gameOver());
              }),
              (t.prototype.doRelive = function () {
                return r(this, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          [4, w.wechat.showRewardedVideoAdNew()]
                        );
                      case 1:
                        if (!t.sent().isEnded)
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        for (
                          this.uiNode.getChildByName("relive").active = !1,
                            this.hasRelive = !0,
                            this.isBattle = !0,
                            this.isPause = !1,
                            e = 0;
                          e < this.buildingArray.length;
                          e++
                        )
                          this.buildingArray[e]
                            .getComponent("building")
                            .restore();
                        for (e = 0; e < this.enemyArray.length; e++)
                          this.enemyArray[e]
                            .getComponent("starEnemy")
                            .addEffect("ice", 5, !0);
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.openComment = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  (this.isPause = !0),
                  this.setPause(),
                  (this.uiNode
                    .getChildByName("commentbutton")
                    .getChildByName("red").active = !1));
                var e = this.uiNode.getChildByName("comment");
                this.windowPop(e);
                for (
                  var t =
                      _.default.StageLevelsConfig[v.default.nowGameLevel - 1]
                        .monsters,
                    i = e.getChildByName("bg").getChildByName("enemy"),
                    n = function (e) {
                      var n = t[e],
                        a = i.getChildByName("e" + (e + 1));
                      (cc.loader.loadRes(
                        "starcraft/ui/enemy/e" + n,
                        cc.SpriteFrame,
                        function (e) {
                          e
                            ? cc.error(e.message || e)
                            : (a.getComponent(cc.Sprite).spriteFrame =
                                cc.loader.getRes(
                                  "starcraft/ui/enemy/e" + n,
                                  cc.SpriteFrame,
                                ));
                        },
                      ),
                        "en" == v.default.Language
                          ? ((a
                              .getChildByName("name")
                              .getComponent(cc.Label).string =
                              p.EnemyConfig_en[n - 1].name),
                            (a
                              .getChildByName("text")
                              .getComponent(cc.Label).string =
                              p.EnemyConfig_en[n - 1].text))
                          : ((a
                              .getChildByName("name")
                              .getComponent(cc.Label).string =
                              p.EnemyConfig[n - 1].name),
                            (a
                              .getChildByName("text")
                              .getComponent(cc.Label).string =
                              p.EnemyConfig[n - 1].text)),
                        (a.getChildByName("new").active = !1),
                        2 == v.default.nowGameLevel ||
                        3 == v.default.nowGameLevel ||
                        5 == v.default.nowGameLevel ||
                        8 == v.default.nowGameLevel ||
                        9 == v.default.nowGameLevel ||
                        11 == v.default.nowGameLevel ||
                        15 == v.default.nowGameLevel
                          ? 2 == e && (a.getChildByName("new").active = !0)
                          : 14 == v.default.nowGameLevel &&
                            1 == e &&
                            (a.getChildByName("new").active = !0));
                    },
                    a = 0;
                  a < t.length;
                  a++
                )
                  n(a);
              }),
              (t.prototype.closeComment = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  (this.uiNode.getChildByName("comment").active = !1),
                  (this.isPause = !1));
              }),
              (t.prototype.doAllChoice = function () {
                // Offline adaptation: gameScene.doAllChoice

                const panel = this.uiNode.getChildByName("armyChoice");
                if (
                  !panel.active ||
                  this._allChoiceBusy ||
                  (this._allChoiceUsed || 0) >= 3
                )
                  return Promise.resolve();
                if (!this.nowArmyChoiceArray || !this.nowArmyChoiceArray.length)
                  return Promise.resolve();
                this._allChoiceBusy = true;
                try {
                  this._allChoiceUsed = (this._allChoiceUsed || 0) + 1;
                  m.default.inst.playAudio("starcraft/click");
                  for (const choice of this.nowArmyChoiceArray)
                    this.armyChoice.doChoice(choice);
                  panel.active = false;
                  this.isPause = false;
                  window.offlineAllChoice.refresh(this);
                  this.saveBattle();
                } finally {
                  this._allChoiceBusy = false;
                }
                return Promise.resolve();
              }),
              (t.prototype.refreshArmyChoice = function (e) {
                var t = this;
                (void 0 === e && (e = !1),
                  m.default.inst.playAudio("starcraft/click"));
                var i = this.uiNode.getChildByName("armyChoice"),
                  n = this.armyChoice.getChoice(e);
                if (
                  (this.freeArmyRefresh
                    ? ((i
                        .getChildByName("refreshButton")
                        .getChildByName("ad").active = !1),
                      (i
                        .getChildByName("refreshButton")
                        .getChildByName("text").x = 0))
                    : ((i
                        .getChildByName("refreshButton")
                        .getChildByName("ad").active = !0),
                      (i
                        .getChildByName("refreshButton")
                        .getChildByName("text").x = 25)),
                  (this.nowArmyChoiceArray = n),
                  0 == n.length)
                )
                  return ((i.active = !1), void (this.isPause = !1));
                for (var a = 0; a < 3; a++)
                  i.getChildByName("choice" + (a + 1)).active = !1;
                true ? ((i.getChildByName("refreshButton").x = -135),
                    (i.getChildByName("allButton").active = !0),
                    (i.getChildByName("allButton").x = 135))
                  : ((i.getChildByName("refreshButton").x = 0),
                    (i.getChildByName("allButton").active = !1));
                var o = [
                    cc.color(22, 232, 219),
                    cc.color(226, 74, 235),
                    cc.color(242, 186, 27),
                  ],
                  r = function (e) {
                    var a = n[e][0],
                      r = n[e][1],
                      c = n[e][2],
                      l = i.getChildByName("choice" + (e + 1));
                    ((l.active = !0),
                      (l.getComponent(cc.Sprite).spriteFrame =
                        s.choiceImgArray[c]),
                      (l
                        .getChildByName("icon")
                        .getComponent(cc.Sprite).spriteFrame =
                        s.armyImgArray[a]));
                    var d = y.ArmyChoiceArray[a][r];
                    ("en" == v.default.Language &&
                      (d = y.ArmyChoiceArray_en[a][r]),
                      (l.getChildByName("title").getComponent(cc.Label).string =
                        d.title),
                      (l.getChildByName("title").color = o[c]));
                    var h = d.value[c];
                    ((l.getChildByName("text").getComponent(cc.Label).string =
                      d.text.replace("X", Math.floor(100 * h) + "%")),
                      l.off("touchend"),
                      l.on("touchend", function () {
                        ((i.active = !1),
                          t.armyChoice.doChoice(n[e]),
                          (t.isPause = !1),
                          m.default.inst.playAudio("starcraft/click"));
                      }));
                  },
                  s = this;
                for (a = 0; a < n.length; a++) r(a);

window.offlineAllChoice.refresh(this);window.offlineBattleRules.refresh(this);window.offlineBattleRules.normalizeChoiceText(this);}),
              (t.prototype.clickRefreshBuildingChoice = function () {
                // Offline adaptation: gameScene.clickRefreshBuildingChoice

                window.offlineBattleRules.reroll(this, "building", false);
                return Promise.resolve();
              }),
              (t.prototype.refreshBuildingChoice = function () {
                // Offline adaptation: gameScene.refreshBuildingChoice

                var e = this;
                m.default.inst.playAudio("starcraft/click");
                var t = this.uiNode.getChildByName("buildingChoice");
                ((t.getChildByName("bg").active = !0),
                  (t.getChildByName("nextButton").active = !1),
                  (t.getChildByName("startButton").active = !1),
                  (t.getChildByName("refreshButton").active = !0),
                  this.freeBuildingRefresh
                    ? ((t
                        .getChildByName("refreshButton")
                        .getChildByName("ad").active = !1),
                      (t
                        .getChildByName("refreshButton")
                        .getChildByName("text").x = 0))
                    : ((t
                        .getChildByName("refreshButton")
                        .getChildByName("ad").active = !1),
                      (t
                        .getChildByName("refreshButton")
                        .getChildByName("text").x = 25)));
                for (var i = this.buildingChoice.getChoice(), n = 0; n < 3; n++)
                  t.getChildByName("choice" + (n + 1)).active = !1;
                var a = function (n) {
                    var a = i[n],
                      r = g.BuildingChoiceArray[a - 1].title,
                      s = g.BuildingChoiceArray[a - 1].text;
                    "en" == v.default.Language &&
                      ((r = g.BuildingChoiceArray_en[a - 1].title),
                      (s = g.BuildingChoiceArray_en[a - 1].text));
                    var c = t.getChildByName("choice" + (n + 1)),
                      l = g.BuildingChoiceArray[a - 1].buildingType,
                      d = g.BuildingChoiceArray[a - 1].armyType;
                    if (
                      ((c.getChildByName("tip1").active = !1),
                      (c.getChildByName("tip2").active = !1),
                      a >= 1 && a <= 4)
                    )
                      o.buildingChoice.choiceArray.indexOf(a) < 0 &&
                        (c.getChildByName("tip1").active = !0);
                    else if (
                      a >= 6 &&
                      a <= 14 &&
                      o.buildingChoice.choiceArray.indexOf(a) < 0
                    ) {
                      var h = a - 6;
                      b.default.armyCheck[Math.floor(h / 3)][h % 3] < 2 &&
                        (c.getChildByName("tip2").active = !0);
                    }
                    ((c.active = !0),
                      (c.opacity = 0),
                      c.runAction(cc.fadeIn(0.2)),
                      (c.getChildByName("title").getComponent(cc.Label).string =
                        r),
                      (c.getChildByName("text").getComponent(cc.Label).string =
                        s),
                      (c
                        .getChildByName("icon")
                        .getComponent(cc.Sprite).spriteFrame =
                        o.buildingImgArray[l - 1]),
                      0 == d
                        ? (c
                            .getChildByName("icon")
                            .getChildByName("bg").active = !1)
                        : ((c
                            .getChildByName("icon")
                            .getChildByName("bg").active = !0),
                          (c
                            .getChildByName("icon")
                            .getChildByName("bg")
                            .getChildByName("icon1")
                            .getComponent(cc.Sprite).spriteFrame =
                            o.armyImgArray[d - 1])),
                      c.off("touchend"),
                      c.on("touchend", function () {
                        t.getChildByName("bg").active = !1;
                        var i = t.getChildByName("nextButton");
                        ((i.active = !0),
                          e.nodeMoveIn(i, -175, 1),
                          e.money >= 100
                            ? ((i.getComponent(cc.Button).interactable = !0),
                              (i.getChildByName("icon").active = !0),
                              (i.getChildByName("ad").active = !1),
                              (i.getChildByName("text").color = cc.color(
                                39,
                                234,
                                246,
                              )))
                            : ((i.getChildByName("icon").active = !1),
                              (i.getChildByName("ad").active = !1),
                              false
                                ? ((i.getComponent(cc.Button).interactable =
                                    !0),
                                  (i.getChildByName("ad").color = cc.color(
                                    39,
                                    234,
                                    246,
                                  )),
                                  (i.getChildByName("text").color = cc.color(
                                    39,
                                    234,
                                    246,
                                  )))
                                : ((i.getComponent(cc.Button).interactable =
                                    !1),
                                  (i.getChildByName("ad").color = cc.color(
                                    70,
                                    79,
                                    79,
                                  )),
                                  (i.getChildByName("text").color = cc.color(
                                    70,
                                    79,
                                    79,
                                  )))),
                          (t.getChildByName("startButton").active = !0),
                          e.nodeMoveIn(t.getChildByName("startButton"), 173, 2),
                          (t.getChildByName("refreshButton").active = !1));
                        for (var n = 0; n < 3; n++)
                          t.getChildByName("choice" + (n + 1)).active = !1;
                        (e.buildingChoice.doChoice(a),
                          m.default.inst.playAudio("starcraft/click"),
                          1 == e.firstStep
                            ? ((e.firstStep = 2),
                              e.closeHelp(),
                              e.scheduleOnce(function () {
                                e.openHelp(
                                  { x: -80, y: -270 },
                                  { x: -95, y: -55 },
                                  "花费100水晶可以继续建造",
                                );
                              }, 0.8))
                            : 3 == e.firstStep &&
                              ((e.firstStep = 4),
                              e.closeHelp(),
                              (b.default.first = 0),
                              b.default.saveData(),
                              e.scheduleOnce(function () {
                                e.openHelp(
                                  { x: 80, y: -270 },
                                  { x: 170, y: -55 },
                                  "建造完毕，开始抵御第1波攻击",
                                );
                              }, 0.8)));
                      }));
                  },
                  o = this;
                for (n = 0; n < i.length; n++) a(n);

window.offlineBattleRules.refresh(this);}),
              (t.prototype.nextBuildingChoice = function () {
                // Offline adaptation: gameScene.nextBuildingChoice

                return r(this, void 0, void 0, function () {
                  var e = this;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          this.money >= 100
                            ? (m.default.inst.playAudio("starcraft/ui_change"),
                              (this.money -= 100),
                              this.nodeMoveIn(
                                this.uiNode.getChildByName("buildingChoice"),
                                0,
                                1,
                              ),
                              this.refreshBuildingChoice(),
                              2 == this.firstStep &&
                                ((this.firstStep = 3),
                                this.closeHelp(),
                                this.scheduleOnce(function () {
                                  e.openHelp(
                                    { x: -80, y: -245 },
                                    { x: -145, y: 15 },
                                    "现在建造兵营，兵营中会生产机枪兵",
                                  );
                                }, 0.8)),
                              [3, 4])
                            : [3, 1]
                        );
                      case 1:
                      case 3:
                        (m.default.inst.playAudio("starcraft/nomoney"),
                          this.popTips("水晶不够，无法继续建造"),
                          (t.label = 4));
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.unlockHighMoney = function () {
                return r(this, void 0, void 0, function () {
                  var e, t, i, n;
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return this.unlockMoney
                          ? [2]
                          : (m.default.inst.playAudio("starcraft/click"),
                            this.isBattle
                              ? (this.popTips("战斗中无法解锁双倍矿石"), [2])
                              : ((e = this.isPause),
                                this.isPause ||
                                  ((this.isPause = !0), this.setPause()),
                                [4, w.wechat.showRewardedVideoAdNew()]));
                      case 1:
                        if (((t = a.sent()), (this.isPause = e), !t.isEnded))
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        for (i = 0; i < this.armyArray.length; i++)
                          if (
                            ((n = this.armyArray[i]).getComponent(
                              "starArmy",
                            ).type = f.ArmyType.NONG_MING)
                          ) {
                            n.getComponent("starArmy").moneyIndex = 5;
                            break;
                          }
                        return (
                          (this.unlockMoney = !0),
                          (this.bgNode
                            .getChildByName("obj")
                            .getChildByName("money5")
                            .getChildByName("ad").active = !1),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.startSubLevel = function () {
                var e = this;
                (4 == this.firstStep && this.closeHelp(),
                  14 == v.default.nowGameLevel && 1 == this.subLevel
                    ? (this.uiNode
                        .getChildByName("commentbutton")
                        .getChildByName("red").active = !0)
                    : (3 != v.default.nowGameLevel &&
                        5 != v.default.nowGameLevel &&
                        8 != v.default.nowGameLevel &&
                        9 != v.default.nowGameLevel &&
                        11 != v.default.nowGameLevel &&
                        2 != v.default.nowGameLevel &&
                        15 != v.default.nowGameLevel) ||
                      2 != this.subLevel ||
                      (this.uiNode
                        .getChildByName("commentbutton")
                        .getChildByName("red").active = !0),
                  (this.adBuildingChoice = !0),
                  m.default.inst.playAudio("starcraft/click"),
                  this.saveBattle(),
                  (this.uiNode.getChildByName("buildingChoice").active = !1),
                  (this.isBattle = !0),
                  this.unlockMoney
                    ? (this.moneyIndex = 5)
                    : (this.moneyIndex = Math.floor(4 * Math.random()) + 1));
                for (var t = 0; t < this.buildingArray.length; t++)
                  this.buildingArray[t].getComponent("building").restore();
                this.checkBuilding();
                var i = 0,
                  n = this.nowEnemyConfig[this.subLevel],
                  a = 0,
                  o = function (t) {
                    n[t].type > 0
                      ? ((i += n[t].num),
                        r.scheduleOnce(function () {
                          for (var i = 0; i < n[t].num; i++) {
                            var a = 580 * Math.random() - 290,
                              o = 460 * Math.random() + 750;
                            n[t].boss
                              ? ((a = 280 * Math.random() - 140),
                                e.subLevel < 6
                                  ? e.addEnemy(
                                      n[t].type,
                                      e.subLevel,
                                      { x: a, y: o },
                                      1,
                                    )
                                  : e.addEnemy(
                                      n[t].type,
                                      e.subLevel,
                                      { x: a, y: o },
                                      2,
                                    ),
                                m.default.inst.playAudio("starcraft/warning"),
                                (e.node.getChildByName("boss").active = !0),
                                e.node
                                  .getChildByName("boss")
                                  .getComponent(cc.Animation)
                                  .play(),
                                e.scheduleOnce(function () {
                                  e.node.getChildByName("boss").active = !1;
                                }, 1.2))
                              : e.addEnemy(n[t].type, e.subLevel, {
                                  x: a,
                                  y: o,
                                });
                          }
                        }, a))
                      : (a += n[t].num);
                  },
                  r = this;
                for (t = 0; t < n.length; t++) o(t);
                this.getExp = this.expSubLevel[this.subLevel] / i;
              }),
              (t.prototype.overSubLevel = function () {
                var e = this;
                (this.subLevel++,
                  this.exp >= this.expNeed[this.expLevel] &&
                    (this.exp = this.expNeed[this.expLevel] - 0.1),
                  (this.isBattle = !1),
                  this.setPause(),
                  this.nodePop(this.uiNode.getChildByName("winNode")),
                  this.scheduleOnce(function () {
                    ((e.uiNode.getChildByName("winNode").active = !1),
                      (e.uiNode
                        .getChildByName("level")
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        "波次：" +
                        (e.subLevel + 1) +
                        "/" +
                        _.default.StageLevelsConfig[v.default.nowGameLevel - 1]
                          .wave));
                    for (var t = 0; t < e.buildingArray.length; t++)
                      e.buildingArray[t].getComponent("building").restore();
                    for (
                      e.uiNode.getChildByName("buildingChoice").active = !0,
                        m.default.inst.playAudio("starcraft/ui_change"),
                        e.nodeMoveIn(
                          e.uiNode.getChildByName("buildingChoice"),
                          0,
                          1,
                        ),
                        e.refreshBuildingChoice(),
                        t = 0;
                      t < e.enemyArray.length;
                      t++
                    )
                      e.enemyArray[t].destroy();
                    for (
                      e.enemyArray = new Array(), t = 0;
                      t < e.armyArray.length;
                      t++
                    )
                      e.armyArray[t].destroy();
                    e.armyArray = new Array();
                  }, 1),
                  w.wechat.tbReportScene("401"),
                  w.wechat.is_jd_platform && w.wechat.jdActionReport());
              }),
              (t.prototype.addEffectOnNode = function (e, t, i, n, a) {
                var o = this;
                (void 0 === n && (n = 0),
                  h.cocos
                    .loadRes("starcraft/effect/" + e, cc.Prefab)
                    .then(function (e) {
                      var r = cc.instantiate(e);
                      ((r.scale = t),
                        (r.x = i.x),
                        (r.y = i.y),
                        a && a.isValid && a.addChild(r),
                        n > 0 &&
                          o.scheduleOnce(function () {
                            r && r.isValid && r.destroy();
                          }, n));
                    }));
              }),
              (t.prototype.addEffect = function (e, t, i, n) {
                var a = this;
                (void 0 === n && (n = 0),
                  h.cocos
                    .loadRes("starcraft/effect/" + e, cc.Prefab)
                    .then(function (e) {
                      var o = cc.instantiate(e);
                      ((o.scale = t),
                        (o.x = i.x),
                        (o.y = i.y),
                        a.bgNode.getChildByName("effect").addChild(o),
                        n > 0 &&
                          a.scheduleOnce(function () {
                            o && o.isValid && o.destroy();
                          }, n));
                    }));
              }),
              (t.prototype.addEffectOnMap = function (e, t, i, n) {
                var a = this;
                (void 0 === n && (n = 0),
                  h.cocos
                    .loadRes("starcraft/effect/" + e, cc.Prefab)
                    .then(function (e) {
                      var o = cc.instantiate(e);
                      ((o.scale = t),
                        (o.x = i.x),
                        (o.y = i.y),
                        a.bgNode.getChildByName("map").addChild(o),
                        n > 0 &&
                          a.scheduleOnce(function () {
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
              (t.prototype.addEnemy = function (e, t, i, n) {
                var a = this;
                (void 0 === n && (n = 0),
                  h.cocos
                    .loadRes("starcraft/enemy/e" + e, cc.Prefab)
                    .then(function (t) {
                      var o = cc.instantiate(t);
                      (o.getComponent("starEnemy").initEnemy(e, n),
                        (o.x = i.x),
                        (o.y = i.y),
                        a.bgNode.getChildByName("obj").addChild(o),
                        a.enemyArray.push(o));
                    }));
              }),
              (t.prototype.showMoney = function (e, t, i) {
                var n = this;
                (void 0 === i && (i = null),
                  h.cocos
                    .loadRes("starcraft/ui/money", cc.Prefab)
                    .then(function (a) {
                      var o = cc.instantiate(a);
                      ((o.getChildByName("text").getComponent(cc.Label).string =
                        e),
                        i ? i.addChild(o) : n.bgNode.addChild(o),
                        (o.x = t.x),
                        (o.y = t.y + 50),
                        (o.scale = 0.1),
                        o.runAction(
                          cc.sequence(
                            cc.scaleTo(0.1, 1),
                            cc.spawn(cc.moveBy(0.5, 0, 40), cc.fadeOut(0.5)),
                            cc.callFunc(function () {
                              o.destroy();
                            }),
                          ),
                        ));
                    }));
              }),
              (t.prototype.showText = function (e, t, i, n, a) {
                var o = this;
                (void 0 === i && (i = null),
                  void 0 === n && (n = 0),
                  void 0 === a && (a = !1),
                  b.default.char &&
                    h.cocos
                      .loadRes("starcraft/ui/num", cc.Prefab)
                      .then(function (r) {
                        var s = cc.instantiate(r);
                        ((s
                          .getChildByName("text")
                          .getComponent(cc.Label).string = e),
                          i ? i.addChild(s) : o.bgNode.addChild(s),
                          (s.x = t.x),
                          (s.y = t.y + 20),
                          (s.getChildByName("text").color =
                            10 == n
                              ? cc.color(17, 244, 30)
                              : 0 == n
                                ? cc.color(17, 162, 237)
                                : cc.color(235, 55, 51)));
                        var c = 360 * Math.random(),
                          l = 30 * Math.cos((c * Math.PI) / 180),
                          d = 30 * Math.sin((c * Math.PI) / 180),
                          h = 0.18 / v.default.gameSpeed,
                          u = 1;
                        (a
                          ? ((l = 40 * Math.cos((c * Math.PI) / 180)),
                            (l = 40 * Math.cos((c * Math.PI) / 180)),
                            (h = 0.25),
                            (u = 1.5),
                            (s.getChildByName("icon").active = !0),
                            (s.getChildByName("icon").color =
                              0 == n
                                ? cc.color(17, 162, 237)
                                : cc.color(235, 55, 51)))
                          : (s.getChildByName("icon").active = !1),
                          (s.scale = 0.1),
                          s.runAction(
                            cc.sequence(
                              cc.spawn(cc.scaleTo(h, u), cc.moveBy(h, l, d)),
                              cc.delayTime(h),
                              cc.fadeOut(0.5 * h),
                              cc.callFunc(function () {
                                s.destroy();
                              }),
                            ),
                          ));
                      }));
              }),
              (t.prototype.showMessage = function (e, t, i) {
                var n = this;
                (void 0 === i && (i = null),
                  h.cocos
                    .loadRes("starcraft/ui/message", cc.Prefab)
                    .then(function (a) {
                      var o = cc.instantiate(a);
                      ((o.getChildByName("text").getComponent(cc.Label).string =
                        e),
                        i ? i.addChild(o) : n.node.addChild(o),
                        (o.x = t.x),
                        (o.y = t.y + 40),
                        o.runAction(
                          cc.sequence(
                            cc.scaleTo(0.1, 1.5),
                            cc.moveBy(0.8, 0, 40),
                            cc.fadeOut(0.3),
                            cc.callFunc(function () {
                              o.destroy();
                            }),
                          ),
                        ));
                    }));
              }),
              (t.prototype.getArmyNumWithType = function (e) {
                for (var t = 0, i = 0; i < this.armyArray.length; i++)
                  this.armyArray[i].getComponent("starArmy").type == e && t++;
                return t;
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
              (t.prototype.update = function (e) {
                ((b.default.onlineTime += e),
                  (this.uiNode
                    .getChildByName("money")
                    .getChildByName("bg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string = this.money + ""));
                var t = this.exp / this.expNeed[this.expLevel];
                ((this.uiNode
                  .getChildByName("exp")
                  .getComponent(cc.ProgressBar).progress = t),
                  (t = Math.floor(100 * t)),
                  (this.uiNode
                    .getChildByName("exp")
                    .getChildByName("text")
                    .getComponent(cc.Label).string = t + "%"));
                var i = this.uiNode.getChildByName("skill1button");
                if (b.default.levelBenefitArray[1] > 0)
                  if (((i.active = !0), this.skill1Time > 0)) {
                    i.getChildByName("ad").active = !1;
                    var n = Math.floor(this.skill1Time);
                    ((i.getChildByName("text").active = !0),
                      (i.getChildByName("text").getComponent(cc.Label).string =
                        "00:" + (n >= 10 ? n : "0" + n)),
                      (i.getChildByName("pro1").active = !0),
                      (i
                        .getChildByName("pro1")
                        .getComponent(cc.Sprite).fillRange =
                        (60 - this.skill1Time) / 60),
                      (i.getChildByName("pro2").active = !1),
                      (i.getChildByName("pro3").active = !1));
                  } else
                    ((i.getChildByName("text").active = !1),
                      (i.getChildByName("ad").active = !this.firstSkill1),
                      (i.getChildByName("pro1").active = !1),
                      (i.getChildByName("pro2").active = !0),
                      (i.getChildByName("pro3").active = !0));
                else i.active = !1;
                var a = this.uiNode.getChildByName("skill2button");
                (b.default.levelBenefitArray[3] > 0
                  ? ((a.active = !0),
                    this.skill2Time > 0
                      ? ((a.getChildByName("ad").active = !1),
                        (n = Math.floor(this.skill2Time)),
                        (a.getChildByName("text").active = !0),
                        (a
                          .getChildByName("text")
                          .getComponent(cc.Label).string =
                          "00:" + (n >= 10 ? n : "0" + n)),
                        (a.getChildByName("pro1").active = !0),
                        (a
                          .getChildByName("pro1")
                          .getComponent(cc.Sprite).fillRange =
                          (60 - this.skill2Time) / 60),
                        (a.getChildByName("pro2").active = !1),
                        (a.getChildByName("pro3").active = !1))
                      : ((a.getChildByName("text").active = !1),
                        (a.getChildByName("ad").active = !this.firstSkill2),
                        (a.getChildByName("pro1").active = !1),
                        (a.getChildByName("pro2").active = !0),
                        (a.getChildByName("pro3").active = !0)))
                  : (a.active = !1),
                  !this.isPause &&
                    this.isBattle &&
                    (this.skill1Time > 0 &&
                      ((this.skill1Time -= e * v.default.gameSpeed),
                      this.skill1Time < 0 && (this.skill1Time = 0)),
                    this.skill2Time > 0 &&
                      ((this.skill2Time -= e * v.default.gameSpeed),
                      this.skill2Time < 0 && (this.skill2Time = 0)),
                    this.nuClearing ||
                      (this.exp >= this.expNeed[this.expLevel] &&
                        ((this.exp -= this.expNeed[this.expLevel]),
                        this.expLevel++,
                        (this.isPause = !0),
                        this.setPause(),
                        (this.uiNode.getChildByName("armyChoice").active = !0),
                        m.default.inst.playAudio("starcraft/ui_change"),
                        this.nodeMoveIn(
                          this.uiNode.getChildByName("armyChoice"),
                          0,
                          1,
                        ),
                        this.refreshArmyChoice()))));
              }),
              (t.prototype.changeBuffer = function (e) {
                var t = this.uiNode.getChildByName("buffer"),
                  i = t.getChildByName("b" + e);
                if (i) {
                  var n = i.getChildByName("icon").getChildByName("num"),
                    a = parseInt(n.getComponent(cc.Label).string) + 1;
                  n.getComponent(cc.Label).string = a + "";
                } else {
                  var o = cc.instantiate(this.bufferPrefab);
                  ((o
                    .getChildByName("icon")
                    .getChildByName("mask")
                    .getChildByName("army")
                    .getComponent(cc.Sprite).spriteFrame =
                    this.armyImgArray[e - 1]),
                    t.addChild(o, 1, "b" + e));
                }
              }),
              (t.prototype.nodeMoveIn = function (e, t, i) {
                1 == i
                  ? ((e.x = -this.screenW / 2 - e.width / 2),
                    e.runAction(
                      cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()),
                    ))
                  : ((e.x = this.screenW / 2 + e.width / 2),
                    e.runAction(
                      cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()),
                    ));
              }),
              (t.prototype.nodeMoveOut = function (e, t) {
                1 == t
                  ? e.runAction(
                      cc
                        .moveTo(0.4, -this.screenW / 2 - e.width / 2, e.y)
                        .easing(cc.easeBackInOut()),
                    )
                  : e.runAction(
                      cc
                        .moveTo(0.4, this.screenW / 2 + e.width / 2, e.y)
                        .easing(cc.easeBackInOut()),
                    );
              }),
              (t.prototype.changeSpeed = function () {
                // Offline adaptation: gameScene.changeSpeed

                return r(this, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          this.isBattle
                            ? 1 != v.default.gameSpeed
                              ? [3, 3]
                              : this.unlockSpeed
                                ? [3, 2]
                                : cc.sys.platform != cc.sys.TAOBAO_MINIGAME
                                  ? [3, 2]
                                  : (this.isPause ||
                                      ((this.isPause = !0), this.setPause()),
                                    [4, w.wechat.showRewardedVideoAdNew()])
                            : [2]
                        );
                      case 1:
                        if (
                          ((e = t.sent()),
                          this.isPause && (this.isPause = !1),
                          !e.isEnded)
                        )
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        t.label = 2;
                      case 2:
                        return (
                          (v.default.gameSpeed = 2),
                          this.unlockSpeed ||
                            (this.uiNode
                              .getChildByName("speedbutton")
                              .getChildByName("ad").active = !0),
                          [3, 7]
                        );
                      case 3:
                        return 2 != v.default.gameSpeed
                          ? [3, 6]
                          : this.unlockSpeed
                            ? [3, 5]
                            : (this.isPause ||
                                ((this.isPause = !0), this.setPause()),
                              [4, w.wechat.showRewardedVideoAdNew()]);
                      case 4:
                        if (
                          ((e = t.sent()),
                          this.isPause && (this.isPause = !1),
                          !e.isEnded)
                        )
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        ((this.unlockSpeed = !0),
                          (this.uiNode
                            .getChildByName("speedbutton")
                            .getChildByName("ad").active = !1),
                          (t.label = 5));
                      case 5:
                        return ((v.default.gameSpeed = 3), [3, 7]);
                      case 6:
                        ((v.default.gameSpeed =
                          v.default.gameSpeed === 3 ? 4 : 1),
                          (t.label = 7));
                      case 7:
                        return (
                          (this.uiNode
                            .getChildByName("speedbutton")
                            .getChildByName("text")
                            .getComponent(cc.Label).string =
                            "x" + v.default.gameSpeed),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.goPause = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  m.default.inst.playAudio("starcraft/ui_change"),
                  this.isBattle &&
                    (this.isPause ||
                      ((this.isPause = !this.isPause),
                      this.isPause
                        ? (this.setPause(),
                          (this.uiNode.getChildByName("pause").active = !0),
                          this.nodeMoveIn(
                            this.uiNode.getChildByName("pause"),
                            0,
                            1,
                          ))
                        : (this.uiNode.getChildByName("pause").active = !1))));
              }),
              (t.prototype.noPause = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  (this.isPause = !1),
                  (this.uiNode.getChildByName("pause").active = !1));
              }),
              (t.prototype.setPause = function () {
                for (var e = 0; e < this.armyArray.length; e++)
                  this.armyArray[e].getComponent(
                    "starArmy",
                  ).rigidBody.linearVelocity = cc.v2(0, 0);
                for (e = 0; e < this.enemyArray.length; e++)
                  this.enemyArray[e].getComponent(
                    "starEnemy",
                  ).rigidBody.linearVelocity = cc.v2(0, 0);
              }),
              (t.prototype.gameOver = function (e) {
                var t = this;
                if (
                  (void 0 === e && (e = !1),
                  (this.isBattle = !1),
                  (this.isPause = !0),
                  this.setPause(),
                  this.hasRelive)
                ) {
                  (this.clearBattle(),
                    m.default.inst.bgmOff(),
                    this.nodePop(this.uiNode.getChildByName("loseNode")));
                  var i = this.uiNode.getChildByName("over");
                  (this.scheduleOnce(function () {
                    ((t.uiNode.getChildByName("loseNode").active = !1),
                      m.default.inst.playAudio("starcraft/lose"),
                      m.default.inst.playAudio("starcraft/ui_change"),
                      (t.uiNode.getChildByName("over").active = !0),
                      t.nodeMoveIn(i.getChildByName("bg"), 0, 1),
                      t.nodeMoveIn(i.getChildByName("doublebutton"), -175, 1),
                      t.nodeMoveIn(i.getChildByName("okbutton"), 173, 2));
                  }, 1.5),
                    console.log(
                      "gameOver GameData.nowGameLevel=" +
                        v.default.nowGameLevel +
                        " this.subLevel=" +
                        this.subLevel,
                    ));
                  var n = _.default.GetLevelReward(
                    v.default.nowGameLevel,
                    this.subLevel,
                    !0,
                    !1,
                    !1,
                    !1,
                  );
                  i.getChildByName("bg")
                    .getChildByName("items")
                    .removeAllChildren();
                  for (var a = 0; a < n.length; a++) {
                    var o = n[a];
                    if (o[0] > 1e4);
                    else {
                      5 == o[0]
                        ? (o[0] = v.default.getArmyTypeFlag() + 200)
                        : 6 == o[0] &&
                          (o[0] = v.default.getBuildingTypeFlag() + 100);
                      var r = cc.instantiate(this.itemUIPrefab);
                      (r.getComponent("itemUI").initItem(o[0], o[1]),
                        (r.scale = 0.9),
                        i
                          .getChildByName("bg")
                          .getChildByName("items")
                          .addChild(r),
                        b.default.addItem(o[0], o[1]));
                    }
                  }
                  (this.subLevel > 6
                    ? b.default.levelPassArray[v.default.nowGameLevel - 1] <
                        2 &&
                      (b.default.levelPassArray[v.default.nowGameLevel - 1] = 2)
                    : this.subLevel > 3 &&
                      b.default.levelPassArray[v.default.nowGameLevel - 1] <
                        1 &&
                      (b.default.levelPassArray[v.default.nowGameLevel - 1] =
                        1),
                    b.default.saveData(),
                    b.default.saveUser());
                } else this.openRelive();
              }),
              (t.prototype.addMoney = function () {}),
              (t.prototype.nodePop = function (e) {
                ((e.active = !0),
                  (e.scale = 0),
                  e.runAction(cc.scaleTo(0.5, 1).easing(cc.easeBackInOut())));
              }),
              (t.prototype.gameWin = function () {
                var e = this;
                (w.wechat.tbReportScene("401"),
                  w.wechat.is_jd_platform && w.wechat.jdActionReport(),
                  (this.isBattle = !1),
                  (this.isPause = !0),
                  this.setPause(),
                  this.clearBattle(),
                  this.nodePop(this.uiNode.getChildByName("winNode")));
                var t = this.uiNode.getChildByName("win");
                (m.default.inst.bgmOff(),
                  this.scheduleOnce(function () {
                    ((e.uiNode.getChildByName("winNode").active = !1),
                      m.default.inst.playAudio("starcraft/win"),
                      m.default.inst.playAudio("starcraft/ui_change"),
                      (t.active = !0),
                      e.nodeMoveIn(t.getChildByName("bg"), 0, 1),
                      e.nodeMoveIn(t.getChildByName("doublebutton"), -175, 1),
                      e.nodeMoveIn(t.getChildByName("okbutton"), 173, 2));
                  }, 1.5),
                  console.log(
                    "gameOver GameData.nowGameLevel=" +
                      v.default.nowGameLevel +
                      " this.subLevel=" +
                      this.subLevel,
                  ));
                var i = _.default.GetLevelReward(
                  v.default.nowGameLevel,
                  this.subLevel,
                  !0,
                  !1,
                  !1,
                  !0,
                );
                t.getChildByName("bg")
                  .getChildByName("items")
                  .removeAllChildren();
                for (var n = 0; n < i.length; n++) {
                  var a = i[n];
                  if (a[0] > 1e4);
                  else {
                    5 == a[0]
                      ? (a[0] = v.default.getArmyTypeFlag() + 200)
                      : 6 == a[0] &&
                        (a[0] = v.default.getBuildingTypeFlag() + 100);
                    var o = cc.instantiate(this.itemUIPrefab);
                    (o.getComponent("itemUI").initItem(a[0], a[1]),
                      (o.scale = 0.9),
                      t
                        .getChildByName("bg")
                        .getChildByName("items")
                        .addChild(o),
                      b.default.addItem(a[0], a[1]));
                  }
                }
                (b.default.levelPassArray[v.default.nowGameLevel - 1] < 3 &&
                  ((b.default.levelPassArray[v.default.nowGameLevel - 1] = 3),
                  (b.default.showLevelup = v.default.nowGameLevel)),
                  b.default.saveData(),
                  b.default.saveUser(),
                  w.wechat.logLevel(v.default.nowGameLevel));
              }),
              (t.prototype.doubleReward = function () {
                return r(this, void 0, void 0, function () {
                  var e, t, i, n, a;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          (e = this),
                          [4, w.wechat.showRewardedVideoAdNew()]
                        );
                      case 1:
                        if (!o.sent().isEnded)
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        for (
                          t = null,
                            t = e.uiNode.getChildByName("win").active
                              ? e.uiNode.getChildByName("win")
                              : e.uiNode.getChildByName("over"),
                            i = t.getChildByName("bg").getChildByName("items"),
                            n = 0;
                          n < i.childrenCount;
                          n++
                        )
                          ((a = i.children[n].getComponent("itemUI")),
                            b.default.addItem(a.type, a.num),
                            a.doubleNum(),
                            i.children[n].runAction(
                              cc.sequence(
                                cc.scaleTo(0.2, 1),
                                cc.scaleTo(0.2, 0.9),
                              ),
                            ));
                        return (
                          m.default.inst.playAudio("starcraft/ui_change"),
                          e.nodeMoveOut(t.getChildByName("doublebutton"), 1),
                          b.default.saveData(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.popTips = function (e) {
                var t = cc.instantiate(this.tipsPrefab);
                (this.node.addChild(t),
                  (t.y = 50),
                  (t
                    .getChildByName("bg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string = e),
                  (t.scale = 0.1),
                  t.runAction(
                    cc.sequence(
                      cc.scaleTo(0.1, 1),
                      cc.delayTime(0.4),
                      cc.moveBy(0.8, 0, 80),
                      cc.fadeOut(0.4),
                      cc.callFunc(function () {
                        (t.removeFromParent(!0), t.destroy());
                      }),
                    ),
                  ));
              }),
              (t.prototype.pauseExit = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  (this.uiNode.getChildByName("pause").active = !1),
                  (this.hasRelive = !0),
                  this.gameOver(!0));
              }),
              (t.prototype.exitGame = function () {
                (m.default.inst.playAudio("starcraft/click"),
                  w.wechat.showInterstitialAd(),
                  this.clearBattle(),
                  this.showLoading(),
                  cc.director.loadScene("mainScene"));
              }),
              (t.prototype.checkBuilding = function () {
                for (var e = 0; e < this.buildingArray.length; e++)
                  this.buildingArray[e]
                    .getComponent("building")
                    .checkProductArmy();
              }),
              (t.prototype.showLoading = function () {
                this.node.getChildByName("loading").active = !0;
              }),
              (t.prototype.openHelp = function (e, t, i, n) {
                (void 0 === n && (n = { w: 140, h: 180 }),
                  m.default.inst.playAudio("starcraft/click"));
                var a = this.node.getChildByName("help");
                ((a.active = !0),
                  (a
                    .getChildByName("bg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string = i),
                  (a.getChildByName("bg").x = e.x),
                  (a.getChildByName("bg").y = e.y),
                  (a.getChildByName("hand").x = t.x),
                  (a.getChildByName("hand").y = t.y),
                  a.getChildByName("hand").stopAllActions(),
                  a
                    .getChildByName("hand")
                    .runAction(
                      cc.repeatForever(
                        cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)),
                      ),
                    ),
                  (a.getChildByName("block1").x = t.x - n.w / 2),
                  (a.getChildByName("block1").y = t.y),
                  (a.getChildByName("block2").x = t.x + n.w / 2),
                  (a.getChildByName("block2").y = t.y),
                  (a.getChildByName("block3").x = t.x),
                  (a.getChildByName("block3").y = t.y + n.h / 2),
                  (a.getChildByName("block4").x = t.x),
                  (a.getChildByName("block4").y = t.y - n.h / 2));
              }),
              (t.prototype.skill1Button = function () {
                return r(this, void 0, void 0, function () {
                  var e, t, i;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          this.isPause || !this.isBattle
                            ? (this.popTips("需要在战斗中使用技能"), [2])
                            : this.skill1Time <= 0
                              ? this.firstSkill1
                                ? [3, 2]
                                : ((this.isPause = !0),
                                  this.setPause(),
                                  [4, w.wechat.showRewardedVideoAdNew()])
                              : [3, 3]
                        );
                      case 1:
                        if (((e = n.sent()), (this.isPause = !1), !e.isEnded))
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        n.label = 2;
                      case 2:
                        for (
                          m.default.inst.playAudio("starcraft/addlife"),
                            this.firstSkill1 = !1,
                            this.skill1Time = 60,
                            t = 0;
                          t < this.armyArray.length;
                          t++
                        )
                          this.armyArray[t]
                            .getComponent("starArmy")
                            .addEffect("relive", 3, !0);
                        for (t = 0; t < this.buildingArray.length; t++)
                          (i = this.buildingArray[t].getComponent("building"))
                            .isOver
                            ? ((i.hp = i.totalHp),
                              (i.status = 1),
                              (i.imgIndex = 0),
                              (i.isOver = !1))
                            : (i.hp = i.totalHp);
                        return [3, 4];
                      case 3:
                        return (
                          this.popTips("该技能需要在倒计时结束后使用"),
                          [2]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.skill2Button = function () {
                return r(this, void 0, void 0, function () {
                  var e,
                    t = this;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          m.default.inst.playAudio("starcraft/click"),
                          this.isPause || !this.isBattle
                            ? (this.popTips("需要在战斗中使用技能"), [2])
                            : this.skill2Time <= 0
                              ? this.firstSkill2
                                ? [3, 2]
                                : ((this.isPause = !0),
                                  this.setPause(),
                                  [4, w.wechat.showRewardedVideoAdNew()])
                              : [3, 3]
                        );
                      case 1:
                        if (((e = i.sent()), (this.isPause = !1), !e.isEnded))
                          return (
                            w.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        i.label = 2;
                      case 2:
                        return (
                          m.default.inst.playAudio("starcraft/nuclear"),
                          (this.firstSkill2 = !1),
                          (this.skill2Time = 60),
                          (this.nuClearing = !0),
                          this.addEffect("nuclear1", 1, { x: 0, y: 100 }, 2),
                          this.scheduleOnce(function () {
                            t.addEffect("nuclear2", 1, { x: 0, y: 100 }, 3);
                          }, 2.2),
                          this.scheduleOnce(function () {
                            t.nuClearing = !1;
                            for (var e = 0; e < t.enemyArray.length; e++)
                              t.enemyArray[e]
                                .getComponent("starEnemy")
                                .addEffect("blood", 3, !0);
                          }, 3.2),
                          [3, 4]
                        );
                      case 3:
                        return (
                          this.popTips("该技能需要在倒计时结束后使用"),
                          [2]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.windowPop = function (e) {
                ((e.active = !0),
                  (e.scale = 0),
                  e.runAction(cc.scaleTo(0.2, 1).easing(cc.easeBackInOut())));
              }),
              (t.prototype.closeHelp = function () {
                this.node.getChildByName("help").active = !1;
              }),
              (t.isContinue = !1),
              (t._instance = null),
              o([d(cc.Prefab)], t.prototype, "bufferPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "tipsPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "itemUIPrefab", void 0),
              o([d(cc.Node)], t.prototype, "bgNode", void 0),
              o([d(cc.Node)], t.prototype, "uiNode", void 0),
              o([d(cc.Node)], t.prototype, "touchNode", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "buildingImgArray", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "armyImgArray", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "choiceImgArray", void 0),
              (i = o([l], t))
            );
          })(cc.Component);
        ((i.default = C), cc._RF.pop());
      };
