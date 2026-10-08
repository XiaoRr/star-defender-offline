// module: startScene
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "23d43/F9lVLGoNJ2BNYireg", "startScene");
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
          h = e("./libppgame/libwechat"),
          u = e("./gameData"),
          p = e("./playerData"),
          f = e("./libppgame/audioMgr"),
          g = e("./data/stageData"),
          y = e("./game/starEnemy"),
          m = e("./game/starArmy"),
          _ = e("@tbmp/mp-cloud-sdk"),
          v = e("./resMgr");
        function b(e, t) {
          return new Promise(function (i, n) {
            cc.director.preloadScene(e, t, function (e, t) {
              e ? n(e) : i(t);
            });
          });
        }
        cc.sys.platform == cc.sys.TAOBAO_MINIGAME &&
          (_.default.init({ env: "online" }), (u.default.HPLimit = 15));
        var w = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.bg = null),
              (t.screenW = 0),
              (t.screenH = 0),
              (t._start_load_time = 0),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.start = function () {
              return r(this, void 0, void 0, function () {
                var e,
                  t,
                  i,
                  n,
                  a,
                  o,
                  r = this;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (this._start_load_time = Date.now()),
                        h.wechat.tbReportScene("301"),
                        "undefined" != typeof tt &&
                          ((this.node
                            .getChildByName("bg")
                            .getChildByName("tips").active = !0),
                          (this.node
                            .getChildByName("bg")
                            .getChildByName("tips")
                            .getComponent(cc.Label).string =
                            "健康游戏忠告\n" +
                            this.node
                              .getChildByName("bg")
                              .getChildByName("tips")
                              .getComponent(cc.Label).string),
                          (this.node
                            .getChildByName("bg")
                            .getChildByName("tips").y -= 50)),
                        cc.sys.platform == cc.sys.TAOBAO_MINIGAME
                          ? ((this.node
                              .getChildByName("bg")
                              .getChildByName("age_limit").active = !0),
                            my.tb.enableSwipeBack({ enable: 0 }),
                            (this.node
                              .getChildByName("bg")
                              .getChildByName("tips").active = !0),
                            (this.node
                              .getChildByName("bg")
                              .getChildByName("tips2").active = !0))
                          : "undefined" != typeof jd &&
                            (this.node
                              .getChildByName("bg")
                              .getChildByName("age_limit_jd").active = !0),
                        (cc.macro.ENABLE_CULLING = !1),
                        cc.game.addPersistRootNode(
                          this.node.parent.getChildByName("audioMgr"),
                        ),
                        cc.game.addPersistRootNode(
                          this.node.parent.getChildByName("resMgr"),
                        ),
                        (this.screenW = cc.view.getVisibleSize().width),
                        (this.screenH = cc.view.getVisibleSize().height),
                        [4, p.default.loadData()]
                      );
                    case 1:
                      if ((s.sent(), "en" == u.default.Language)) return [3, 3];
                      if (
                        (cc.sys.platform === cc.sys.MOBILE_BROWSER ||
                          cc.sys.platform === cc.sys.DESKTOP_BROWSER) &&
                        (e = h.wechat.getHttpParam("level"))
                      ) {
                        for (a = 0; a < e; a++) p.default.levelPassArray[a] = 3;
                        (p.default.saveDataRem(), p.default.saveData());
                      }
                      return [4, h.wechat.ensureConfigLoaded()];
                    case 2:
                      if (
                        (s.sent(),
                        (u.default.totalLevel =
                          h.wechat.getConfig("totalLevel")),
                        (t = h.wechat.getConfig("stageConfig")) &&
                          (g.default.StageLevelsConfig = t),
                        h.wechat.getConfig("review") ==
                          u.default.reviewVersion &&
                          ((g.default.StageLevelsConfig[0].monsters = [
                            1, 1, 1,
                          ]),
                          (g.default.StageLevelsConfig[0].boss = 1),
                          (g.default.StageLevelsConfig[1].monsters = [1, 1, 1]),
                          (g.default.StageLevelsConfig[1].boss = 1),
                          (g.default.StageLevelsConfig[2].monsters = [1, 1, 1]),
                          (g.default.StageLevelsConfig[2].boss = 1),
                          (g.default.StageLevelsConfig[3].monsters = [1, 1, 1]),
                          (g.default.StageLevelsConfig[3].boss = 1)),
                        (i = h.wechat.getConfig("armyConfig")))
                      )
                        for (
                          a = 0;
                          a < i.length && a < m.ArmyConfig.length;
                          a++
                        )
                          m.ArmyConfig[a] = i[a];
                      if (((n = h.wechat.getConfig("enemyConfig")), i))
                        for (
                          a = 0;
                          a < n.length && a < y.EnemyConfig.length;
                          a++
                        )
                          y.EnemyConfig[a] = n[a];
                      s.label = 3;
                    case 3:
                      return (
                        h.wechat.initialize(
                          window.appid,
                          window["adunit-video"],
                          window["adunit-banner"],
                          window["adunit-interstitial"],
                          function (e, t, i) {
                            return {
                              title: (e =
                                e ||
                                "《星际争霸》全新手游版，人族和虫族的大战一触即发！"),
                              query: t,
                              imageUrl: (i =
                                i ||
                                "https://cdn2.p8games.com/cdn/games/share/starcraft.jpg"),
                            };
                          },
                        ),
                        (o = function (e, t) {
                          ((r.bg
                            .getChildByName("pro")
                            .getChildByName("bar").width = (500 * e) / t),
                            (r.bg
                              .getChildByName("pro")
                              .getChildByName("text")
                              .getComponent(cc.Label).string =
                              Math.floor((100 * e) / t) + "%"));
                        }),
                        this.scheduleOnce(function () {
                          (f.default.inst.bgmOn("starcraft/bgm_main"),
                            f.default.inst.playAudio("starcraft/ui_change"));
                          var e = r.bg.getChildByName(window.game_name);
                          (v.default.inst["logo_" + window.game_name] &&
                            (e
                              ? (e.getComponent(cc.Sprite).spriteFrame =
                                  v.default.inst["logo_" + window.game_name])
                              : (((e = new cc.Node(
                                  window.game_name,
                                )).addComponent(cc.Sprite).spriteFrame =
                                  v.default.inst["logo_" + window.game_name]),
                                (e.y = r.bg.getChildByName("starcraft").y),
                                (e.parent = r.bg))),
                            (e.active = !0),
                            r.nodeMoveIn(e, 420, 3));
                        }, 0.1),
                        h.wechat.tbReportScene("302"),
                        p.default.first ? [4, window.offlineBattleLoad.startup(this,progress=>b("gameScene",progress))] : [3, 5]
                      );
                    case 4:
                      return (s.sent(), [3, 7]);
                    case 5:
                      return [4, window.offlineBattleLoad.startup(this,progress=>b("mainScene",progress))];
                    case 6:
                      (s.sent(), (s.label = 7));
                    case 7:
                      return (
                        "undefined" != typeof tt &&
                          "undefined" != typeof seeg &&
                          seeg.trackLoadComplete({
                            duration:
                              (Date.now() - this._start_load_time) / 1e3,
                          }),
                        h.wechat.tbReportScene("303"),
                        (this.bg.getChildByName("pro").active = !1),
                        h.wechat.tbReportScene("304"),
                        f.default.inst.playAudio("starcraft/ui_change"),
                        cc.sys.platform == cc.sys.TAOBAO_MINIGAME &&
                        h.wechat.getConfig("review") != u.default.reviewVersion
                          ? this.startGame()
                          : ((this.bg.getChildByName("button").active = !0),
                            this.nodeMoveIn(
                              this.bg.getChildByName("button"),
                              -110,
                              1,
                            ),
                            console.log("show start button")),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.update = function () {}),
            (t.prototype.nodeMoveIn = function (e, t, i) {
              1 == i
                ? ((e.x = -this.screenW / 2 - e.width / 2),
                  e.runAction(
                    cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()),
                  ))
                : 2 == i
                  ? ((e.x = this.screenW / 2 + e.width / 2),
                    e.runAction(
                      cc.moveTo(0.4, t, e.y).easing(cc.easeBackInOut()),
                    ))
                  : 3 == i
                    ? ((e.y = this.screenH / 2 + e.height / 2),
                      e.runAction(
                        cc.moveTo(0.4, e.x, t).easing(cc.easeBackInOut()),
                      ))
                    : 4 == i &&
                      ((e.y = -this.screenH / 2 - e.height / 2),
                      e.runAction(
                        cc.moveTo(0.4, e.x, t).easing(cc.easeBackInOut()),
                      ));
            }),
            (t.prototype.startGame = function () {window.offlineBattleLoad.enter(()=>{
              if (
                (console.log("startGame"),
                f.default.inst.playAudio("starcraft/click"),
                2 == p.default.blockType)
              )
                return (
                  cc.sys.platform == cc.sys.WECHAT_GAME
                    ? wx.showToast({
                        title: "账号数据异常",
                        icon: "error",
                        duration: 2e3,
                      })
                    : console.error("账号数据异常"),
                  void (
                    cc.sys.platform == cc.sys.TAOBAO_MINIGAME &&
                    ((this.bg.getChildByName("pro").active = !0),
                    (this.bg
                      .getChildByName("pro")
                      .getChildByName("bar").active = !1),
                    (this.bg
                      .getChildByName("pro")
                      .getChildByName("text")
                      .getComponent(cc.Label).string = "账号数据异常"))
                  )
                );
              p.default.first
                ? ((u.default.nowGameLevel = 1),
                  f.default.inst.bgmOff(),
                  cc.director.loadScene("gameScene", function () {
                    h.wechat.logStart();
                  }))
                : cc.director.loadScene("mainScene");
            });}),
            (t.prototype.onLoad = function () {
              cc.sys.platform == cc.sys.TAOBAO_MINIGAME &&
                void 0 !== my.hideBackButton &&
                my.hideBackButton(function (e) {
                  console.log("result - " + JSON.stringify(e));
                });
            }),
            o([d(cc.Node)], t.prototype, "bg", void 0),
            o([l], t)
          );
        })(cc.Component);
        ((i.default = w), cc._RF.pop());
      };
