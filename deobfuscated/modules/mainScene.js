// module: mainScene
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "cb5cbJrlatFxo2MqIYIfsrr", "mainScene");
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
          u = e("./gameData"),
          p = e("./playerData"),
          f = e("./data/itemData"),
          g = e("./data/stageData"),
          y = e("./libppgame/audioMgr"),
          m = e("./libppgame/libwechat"),
          _ = e("./resMgr"),
          v = e("./ui/bufferNodeUI"),
          b = e("./data/bufferData"),
          w = e("../battle_scripts/libppgame/utils"),
          C = e("./game/building"),
          B = e("./game/starEnemy"),
          N = e("./gameScene"),
          A = e("./ui/arenaUI"),
          x = e("./pop/mail"),
          k = e("./libppgame/WXClubButton"),
          T = e("./libppgame/wxUserinfo"),
          S = e("./pop/tt_reward_icon"),
          P = e("./tb_channle_reward"),
          I = e("./pop/jd_desktop_page"),
          O = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.pageLayer = null),
                (t.uiLayer = null),
                (t.tipsPrefab = null),
                (t.levelGiftItemPrefab = null),
                (t.itemUIPrefab = null),
                (t.levelPageUIPrefab = null),
                (t.stagePrefab = null),
                (t.bufferUIPrefab = null),
                (t.itemBg = []),
                (t.itemBanner = []),
                (t.enemyTips = []),
                (t.levelUpPrefab = null),
                (t.screenW = 0),
                (t.screenH = 0),
                (t._new_tech_node = null),
                (t.enemyArray = new Array()),
                (t.nowBufferIndex = -1),
                (t.nowBufferScroll = null),
                (t._arena_page = null),
                (t._continue_resolve = null),
                (t.buyThingsType = 0),
                (t._mail_page = null),
                t
              );
            }
            var i;
            return (
              a(t, e),
              (i = t),
              (t.prototype.onLoad = function () {
                var e = this;
                (console.log("mainScene onLoad"),
                  (u.default.originPlayerPower = 0),
                  y.default.inst.bgmOn("starcraft/bgm_main"),
                  (cc.director.getPhysicsManager().enabled = !1),
                  (this.screenW = cc.view.getVisibleSize().width),
                  (this.screenH = cc.view.getVisibleSize().height),
                  this.nodeMoveIn(this.uiLayer.getChildByName("topUI"), 616, 3),
                  this.nodeMoveIn(
                    this.uiLayer.getChildByName("bottomUI"),
                    -618,
                    4,
                  ));
                var t = this.pageLayer
                  .getChildByName("page1")
                  .getChildByName("scrollView")
                  .getChildByName("view")
                  .getChildByName("content");
                (this.addRedPoint(
                  t.getChildByName("banner1").getChildByName("button1"),
                  cc.v2(28, 20),
                ),
                  this.addRedPoint(
                    t.getChildByName("banner2").getChildByName("button1"),
                    cc.v2(28, 20),
                  ),
                  this.addRedPoint(
                    t.getChildByName("banner3").getChildByName("button"),
                    cc.v2(48, 20),
                  ),
                  this.addRedPoint(
                    t.getChildByName("banner4").getChildByName("button"),
                    cc.v2(48, 20),
                  ),
                  this.addRedPoint(
                    t.getChildByName("banner5").getChildByName("button"),
                    cc.v2(48, 20),
                  ),
                  x.default.canFetchMail().then(function (t) {
                    e.setMailRedpoint(t);
                  }));
                for (
                  var i = this.uiLayer
                      .getChildByName("bottomUI")
                      .getChildByName("bg")
                      .getChildByName("toggleContainer"),
                    n = 1;
                  n <= 5;
                  n++
                ) {
                  var a = i.getChildByName("toggle" + n),
                    o = this.addRedPoint(a, cc.v2(24, 30));
                  ((a.getChildByName("Background").zIndex = 1),
                    (o.zIndex = 2),
                    (a.getChildByName("checkmark").zIndex = 3));
                }
                (this.addPage2RedPoints(),
                  this.addPage3RedPoints(),
                  this.addPage4RedPoints(),
                  (i
                    .getChildByName("toggle5")
                    .getComponent(T.default).interactable =
                    u.default.getPassLevel() >= 6),
                  (this.pageLayer
                    .getChildByName("page3")
                    .getChildByName("icon_mail").active = !0));
                var c = this.pageLayer
                    .getChildByName("page3")
                    .getChildByName("icon_tb"),
                  l = [
                    "icon1",
                    "icon2",
                    "icon3",
                    "icon4",
                    "icon_mail",
                    "icon5",
                  ];
                if (cc.sys.platform == cc.sys.TAOBAO_MINIGAME)
                  ((this.pageLayer
                    .getChildByName("page3")
                    .getChildByName("icon4").active = !1),
                    ((o = c.getChildByName("red")).active =
                      !p.default.getMisc("tbreward_fetched") &&
                      m.wechat.isTaobaoRewardChannelTag()),
                    m.wechat.isInvalidTaobaoChanleTag() ||
                    p.default.getMisc("tbreward_fetched")
                      ? (l = ["icon1", "icon2", "icon3", "icon_mail", "icon5"])
                      : ((l = [
                          "icon1",
                          "icon2",
                          "icon3",
                          "icon_tb",
                          "icon_mail",
                          "icon5",
                        ]),
                        (c.active = !0),
                        this.pageLayer
                          .getChildByName("page3")
                          .getChildByName("icon_tb")
                          .on("click", function () {
                            P.default.show(
                              e.uiLayer.getChildByName("popUI"),
                              c,
                            );
                          })));
                else if (m.wechat.is_jd_platform) {
                  var d = this.pageLayer
                    .getChildByName("page3")
                    .getChildByName("icon_jd_desktop");
                  ((l = [
                    "icon1",
                    "icon2",
                    "icon3",
                    "icon_jd_desktop",
                    "icon_mail",
                    "icon5",
                  ]),
                    (d.active = !0),
                    d.on("click", function () {
                      I.default.show(e.uiLayer.getChildByName("popUI"));
                    }),
                    this.scheduleOnce(function () {
                      e.checkJdAdddesktop();
                    }, 0.2));
                }
                var f = this.pageLayer
                    .getChildByName("page3")
                    .getChildByName(l[0]).x,
                  g = this.pageLayer
                    .getChildByName("page3")
                    .getChildByName(l[l.length - 1]).x;
                for (n = 1; n < l.length - 1; n++)
                  this.pageLayer
                    .getChildByName("page3")
                    .getChildByName(l[n]).x =
                    f + ((g - f) * n) / (l.length - 1);
                (this.pageLayer.getChildByName("page6") &&
                  (this.pageLayer.getChildByName("page6").active = !1),
                  (this.pageLayer.getChildByName("page3").active = !0),
                  this.uiLayer
                    .getChildByName("topUI")
                    .getChildByName("btn_setting")
                    .on("click", function () {
                      (y.default.inst.playAudio("starcraft/click"),
                        e.showSettings());
                    }));
                var _ = this.node.getChildByName("settings");
                (_.getChildByName("panel")
                  .getChildByName("btn_confirm")
                  .on("click", function () {
                    (y.default.inst.playAudio("starcraft/click"),
                      (_.active = !1));
                  }),
                  _.getChildByName("block").on("click", function () {
                    (y.default.inst.playAudio("starcraft/click"),
                      (_.active = !1));
                  }));
                var v = ["music", "sound", "vibrate", "char"],
                  b = _.getChildByName("panel"),
                  w = function (e) {
                    var t = b.getChildByName(v[e]),
                      i = t.getChildByName("open"),
                      n = t.getChildByName("close");
                    (i.on("click", function () {
                      ((i.active = !1),
                        (n.active = !0),
                        (p.default[v[e]] = 0),
                        p.default.saveDataRem(),
                        p.default.saveData(),
                        "music" == v[e] && y.default.inst.bgmOff(),
                        y.default.inst.playAudio("starcraft/click"));
                    }),
                      n.on("click", function () {
                        ((i.active = !0),
                          (n.active = !1),
                          (p.default[v[e]] = 1),
                          p.default.saveDataRem(),
                          p.default.saveData(),
                          "music" == v[e] &&
                            y.default.inst.bgmOn("starcraft/bgm_main"),
                          y.default.inst.playAudio("starcraft/click"));
                      }));
                  };
                for (n = 0; n < v.length; n++) w(n);
                var C = this.pageLayer.getChildByName("page2"),
                  B = C.getChildByName("tabs").getChildByName("tab1"),
                  N = C.getChildByName("tabs").getChildByName("tab2");
                if (
                  (B.on("click", function () {
                    (y.default.inst.playAudio("starcraft/click"),
                      B.getChildByName("sp0").active &&
                        ((B.getChildByName("sp0").active = !1),
                        (B.getChildByName("sp1").active = !0),
                        (N.getChildByName("sp0").active = !0),
                        (N.getChildByName("sp1").active = !1),
                        (N.getChildByName("label").color = new cc.Color(
                          97,
                          199,
                          216,
                        )),
                        (B.getChildByName("label").color = new cc.Color(
                          255,
                          241,
                          108,
                        )),
                        e._new_tech_node && (e._new_tech_node.active = !1),
                        e.refreshPage2()));
                  }),
                  N.on("click", function () {
                    return r(e, void 0, void 0, function () {
                      var e, t;
                      return s(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return (
                              y.default.inst.playAudio("starcraft/click"),
                              false
                                ? [3, 4]
                                : N.getChildByName("sp0").active
                                  ? ((N.getChildByName("sp0").active = !1),
                                    (N.getChildByName("sp1").active = !0),
                                    (B.getChildByName("sp0").active = !0),
                                    (B.getChildByName("sp1").active = !1),
                                    (B.getChildByName("label").color =
                                      new cc.Color(97, 199, 216)),
                                    (N.getChildByName("label").color =
                                      new cc.Color(255, 241, 108)),
                                    ((e =
                                      this.pageLayer.getChildByName(
                                        "page2",
                                      )).getChildByName("scrollView").active =
                                      !1),
                                    this._new_tech_node
                                      ? [3, 2]
                                      : (this.showLoading(),
                                        [
                                          4,
                                          h.cocos.loadRes(
                                            "pop/tech_new",
                                            cc.Prefab,
                                          ),
                                        ]))
                                  : [3, 3]
                            );
                          case 1:
                            return (
                              (t = i.sent()),
                              (this._new_tech_node = cc.instantiate(t)),
                              (this._new_tech_node.parent = e),
                              (this._new_tech_node.zIndex = -1),
                              this.hideLoading(),
                              [3, 3]
                            );
                          case 2:
                            ((this._new_tech_node.active = !0), (i.label = 3));
                          case 3:
                            return [2];
                          case 4:
                            return (this.popTips("暂未开启"), [2]);
                        }
                      });
                    });
                  }),
                  "undefined" != typeof tt)
                ) {
                  var A = this.pageLayer
                    .getChildByName("page3")
                    .getChildByName("icon4");
                  ((A.active = !1),
                    S.default.checkShow(A.parent, A.getPosition()));
                }
                this.scheduleOnce(function () {
                  if (cc.sys.platform == cc.sys.TAOBAO_MINIGAME) {
                    var t = new Date(),
                      i =
                        "" +
                        t.getFullYear() +
                        String(t.getMonth() + 1).padStart(2, "0") +
                        String(t.getDate()).padStart(2, "0");
                    p.default.getMisc("tb_channel_pop") != i
                      ? (p.default.setMisc("tb_channel_pop", i),
                        P.default.show(e.uiLayer.getChildByName("popUI"), c))
                      : !p.default.getMisc("tbreward_fetched") &&
                        m.wechat.isTaobaoRewardChannelTag() &&
                        P.default.show(e.uiLayer.getChildByName("popUI"), c);
                  }
                }, 0.2);
              }),
              Object.defineProperty(t, "inst", {
                get: function () {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onEnable = function () {
                var e = this;
                ((i._inst = this),
                  this.node.on(m.WX_EVT_GAME_SHOW, function () {
                    if (
                      !p.default.getMisc("tbreward_fetched") &&
                      m.wechat.isTaobaoRewardChannelTag()
                    ) {
                      var t = e.uiLayer.getChildByName("popUI");
                      t.getChildByName("tb_channel_reward")
                        ? ((t.getChildByName("tb_channel_reward").active = !1),
                          (t.getChildByName("tb_channel_reward").active = !0))
                        : P.default.show(
                            e.uiLayer.getChildByName("popUI"),
                            e.pageLayer
                              .getChildByName("page3")
                              .getChildByName("icon_tb"),
                          );
                    }
                  }));
              }),
              (t.prototype.onDisable = function () {
                ((i._inst = null), this.node.off(m.WX_EVT_GAME_SHOW));
              }),
              (t.prototype.start = function () {
                // Offline adaptation: mainScene.start

                this.scheduleOnce(() => window.offlineFortress.attach(this), 0);
                const levelViewport = this.pageLayer
                  .getChildByName("page3")
                  .getChildByName("pageView");
                const levelMask =
                  levelViewport.getComponent(cc.Mask) ||
                  levelViewport.addComponent(cc.Mask);
                levelMask.type = cc.Mask.Type.RECT;
                levelMask.inverted = false;
                levelMask.enabled = true;

                (console.log("mainScene start"),
                  (this.screenW = cc.view.getVisibleSize().width),
                  (this.screenH = cc.view.getVisibleSize().height),
                  (u.default.inBattle = !1),
                  (u.default.mainInstance = this),
                  (u.default.nowLevel = u.default.getPassLevel()));
                var e = this.pageLayer
                  .getChildByName("page3")
                  .getChildByName("pageView");
                (e
                  .getChildByName("view")
                  .getChildByName("content")
                  .removeAllChildren(),
                  e.getComponent(cc.PageView).removeAllPages());
                for (
                  var t = 0;
                  t < u.default.nowLevel + 3 && t < u.default.totalLevel;
                  t++
                ) {
                  var i = cc.instantiate(this.levelPageUIPrefab);
                  (i.getComponent("levelPageUI").initLevelPage(t + 1),
                    e.getComponent(cc.PageView).addPage(i),
                    this.addRedPoint(i, cc.v2(245, 240)));
                }
                (this.refreshAll(!0),
                  null != p.default.saveBattleData && this.openContinue());
              }),
              (t.prototype.checkPowerChange = function () {
                var e = this;
                if (0 == u.default.originPlayerPower)
                  ((u.default.originPlayerPower = u.default.getPlayerPower()),
                    (this.uiLayer
                      .getChildByName("topUI")
                      .getChildByName("power")
                      .getChildByName("num")
                      .getComponent(cc.Label).string =
                      u.default.originPlayerPower + ""));
                else {
                  var t = u.default.getPlayerPower(),
                    i = this.uiLayer
                      .getChildByName("popUI")
                      .getChildByName("powerChange"),
                    n = t - u.default.originPlayerPower;
                  if (n > 0) {
                    (this.windowPop(i),
                      (i.getChildByName("bg").getChildByName("num1").scale =
                        0.9),
                      (i
                        .getChildByName("bg")
                        .getChildByName("num1")
                        .getComponent(cc.Label).string =
                        u.default.originPlayerPower + ""),
                      (i
                        .getChildByName("bg")
                        .getChildByName("num2")
                        .getComponent(cc.Label).string = "+" + n),
                      (i.getChildByName("bg").getChildByName("num2").color =
                        cc.color(241, 240, 3)),
                      (i.getChildByName("bg").getChildByName("num2").active =
                        !0),
                      (i.getChildByName("bg").getChildByName("up").active = !0),
                      (i.getChildByName("bg").getChildByName("down").active =
                        !1));
                    for (
                      var a = function (e) {
                          o.scheduleOnce(
                            function () {
                              ((i
                                .getChildByName("bg")
                                .getChildByName("num1").scale = 1),
                                (i
                                  .getChildByName("bg")
                                  .getChildByName("num1")
                                  .getComponent(cc.Label).string =
                                  Math.floor(
                                    u.default.originPlayerPower + (n * e) / 10,
                                  ) + ""));
                            },
                            0.2 + 0.05 * e,
                          );
                        },
                        o = this,
                        r = 0;
                      r < 10;
                      r++
                    )
                      a(r);
                    (this.scheduleOnce(function () {
                      ((i.getChildByName("bg").getChildByName("num2").active =
                        !1),
                        (i.getChildByName("bg").getChildByName("up").active =
                          !1),
                        (u.default.originPlayerPower = t),
                        (i.getChildByName("bg").getChildByName("num1").scale =
                          1),
                        (i
                          .getChildByName("bg")
                          .getChildByName("num1")
                          .getComponent(cc.Label).string =
                          u.default.originPlayerPower + ""));
                    }, 0.9),
                      this.scheduleOnce(function () {
                        ((i.active = !1),
                          (e.uiLayer
                            .getChildByName("topUI")
                            .getChildByName("power")
                            .getChildByName("num")
                            .getComponent(cc.Label).string =
                            u.default.originPlayerPower + ""));
                      }, 1.5));
                  } else if (n < 0) {
                    (this.windowPop(i),
                      (i.getChildByName("bg").getChildByName("num1").scale =
                        0.9),
                      (i
                        .getChildByName("bg")
                        .getChildByName("num1")
                        .getComponent(cc.Label).string =
                        u.default.originPlayerPower + ""),
                      (i
                        .getChildByName("bg")
                        .getChildByName("num2")
                        .getComponent(cc.Label).string = n + ""),
                      (i.getChildByName("bg").getChildByName("num2").color =
                        cc.color(56, 241, 68)),
                      (i.getChildByName("bg").getChildByName("num2").active =
                        !0),
                      (i.getChildByName("bg").getChildByName("up").active = !1),
                      (i.getChildByName("bg").getChildByName("down").active =
                        !0));
                    var s = function (e) {
                        c.scheduleOnce(
                          function () {
                            ((i
                              .getChildByName("bg")
                              .getChildByName("num1").scale = 1),
                              (i
                                .getChildByName("bg")
                                .getChildByName("num1")
                                .getComponent(cc.Label).string =
                                Math.floor(
                                  u.default.originPlayerPower + (n * e) / 10,
                                ) + ""));
                          },
                          0.2 + 0.05 * e,
                        );
                      },
                      c = this;
                    for (r = 0; r < 10; r++) s(r);
                    (this.scheduleOnce(function () {
                      ((i.getChildByName("bg").getChildByName("num2").active =
                        !1),
                        (i.getChildByName("bg").getChildByName("down").active =
                          !1),
                        (u.default.originPlayerPower = t),
                        (i.getChildByName("bg").getChildByName("num1").scale =
                          1),
                        (i
                          .getChildByName("bg")
                          .getChildByName("num1")
                          .getComponent(cc.Label).string =
                          u.default.originPlayerPower + ""));
                    }, 0.7),
                      this.scheduleOnce(function () {
                        ((i.active = !1),
                          (e.uiLayer
                            .getChildByName("topUI")
                            .getChildByName("power")
                            .getChildByName("num")
                            .getComponent(cc.Label).string =
                            u.default.originPlayerPower + ""));
                      }, 1.5));
                  }
                }
              }),
              (t.prototype.refreshAll = function (e) {
                (void 0 === e && (e = !1),
                  this.checkLevelUp(),
                  this.checkPowerChange(),
                  this.refreshTop(),
                  this.pageLayer.getChildByName("page1").active
                    ? this.refreshPage1(e)
                    : this.pageLayer.getChildByName("page2").active
                      ? this.refreshPage2(e)
                      : this.pageLayer.getChildByName("page3").active
                        ? this.refreshPage3(e)
                        : this.pageLayer.getChildByName("page4").active
                          ? this.refreshPage4(e)
                          : this.pageLayer.getChildByName("page5").active &&
                            this.refreshPage5(e));
                for (
                  var t = this.uiLayer
                      .getChildByName("bottomUI")
                      .getChildByName("bg")
                      .getChildByName("toggleContainer"),
                    i = 1;
                  i <= 5;
                  i++
                ) {
                  var n = t.getChildByName("toggle" + i),
                    a = i;
                  ((2 != a && 4 != a) || (a = 6 - a),
                    this.pageLayer.getChildByName("page" + a).active
                      ? (n.getChildByName("redpoint").active = !1)
                      : (n.getChildByName("redpoint").active =
                          this.isPageRedPoint(i)));
                }
              }),
              (t.prototype.refreshTop = function () {
                var e = this.uiLayer.getChildByName("topUI");
                ((e
                  .getChildByName("infobg")
                  .getChildByName("headbg")
                  .getChildByName("text")
                  .getComponent(cc.Label).string = "Lv" + p.default.level),
                  (e
                    .getChildByName("coinbg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string =
                    p.default.getItemNum(1) + ""),
                  (e
                    .getChildByName("diamondbg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string =
                    p.default.getItemNum(2) + ""));
              }),
              (t.prototype.refreshPage1 = function (e) {
                // Offline adaptation: mainScene.refreshPage1

                const labels = this.pageLayer
                  .getChildByName("page1")
                  .getComponentsInChildren(cc.Label);
                for (const label of labels) {
                  let node = label.node;
                  while (node && node.name !== "banner5") node = node.parent;
                  if (node)
                    label.string = label.string.replace(/10(?![0-9])/g, "50");
                }

                void 0 === e && (e = !1);
                var t = this.pageLayer.getChildByName("page1"),
                  i = t
                    .getChildByName("scrollView")
                    .getChildByName("view")
                    .getChildByName("content");
                ((i
                  .getChildByName("banner1")
                  .getChildByName("button1")
                  .getChildByName("num")
                  .getComponent(cc.Label).string =
                  "(" + p.default.freeTimeArray[0] + "/3)"),
                  (i
                    .getChildByName("banner1")
                    .getChildByName("button1")
                    .getChildByName("redpoint").active =
                    p.default.freeTimeArray[0] > 0),
                  (i
                    .getChildByName("banner2")
                    .getChildByName("button1")
                    .getChildByName("num")
                    .getComponent(cc.Label).string =
                    "(" + p.default.freeTimeArray[1] + "/1)"),
                  (i
                    .getChildByName("banner2")
                    .getChildByName("button1")
                    .getChildByName("redpoint").active =
                    p.default.freeTimeArray[1] > 0),
                  (i
                    .getChildByName("banner3")
                    .getChildByName("button")
                    .getChildByName("num")
                    .getComponent(cc.Label).string =
                    "(" + p.default.freeTimeArray[2] + "/3)"),
                  (i
                    .getChildByName("banner3")
                    .getChildByName("button")
                    .getChildByName("redpoint").active =
                    p.default.freeTimeArray[2] > 0),
                  (i
                    .getChildByName("banner4")
                    .getChildByName("button")
                    .getChildByName("num")
                    .getComponent(cc.Label).string =
                    "(" + p.default.freeTimeArray[3] + "/3)"),
                  (i
                    .getChildByName("banner4")
                    .getChildByName("button")
                    .getChildByName("redpoint").active =
                    p.default.freeTimeArray[3] > 0),
                  (i
                    .getChildByName("banner5")
                    .getChildByName("button")
                    .getChildByName("num")
                    .getComponent(cc.Label).string =
                    "(" + p.default.freeTimeArray[4] + "/5)"),
                  (i
                    .getChildByName("banner5")
                    .getChildByName("button")
                    .getChildByName("redpoint").active =
                    p.default.freeTimeArray[4] > 0),
                  e &&
                    (y.default.inst.playAudio("starcraft/ui_change"),
                    this.nodeMoveIn(t.getChildByName("scrollView"), 0, 1)));
              }),
              (t.prototype.isPageRedPoint = function (e) {
                switch (e) {
                  case 1:
                    if (u.default.nowLevel < 3) return !1;
                    for (var t = 0; t < 5; t++)
                      if (p.default.freeTimeArray[t] > 0) return !0;
                    return !1;
                  case 2:
                    if (u.default.nowLevel < 1) return !1;
                    for (t = 1; t <= 5; t++)
                      if (this.canBuildingUpgrade(t)) return !0;
                    for (t = 1; t <= 10; t++)
                      if (this.canArmyUpgrade(t)) return !0;
                    return !1;
                  case 3:
                    return u.default.hasLevelReward();
                  case 4:
                    return (
                      !(u.default.nowLevel < 2) && v.default.canUpgradeBuffer()
                    );
                  case 5:
                    return !(u.default.nowLevel < 6) && A.default.redpoint;
                }
                return !1;
              }),
              (t.prototype.refreshPage2 = function (e) {
                void 0 === e && (e = !1);
                var t = this.pageLayer.getChildByName("page2");
                ((t
                  .getChildByName("itembg")
                  .getChildByName("text")
                  .getComponent(cc.Label).string =
                  p.default.getItemNum(7) + ""),
                  (t
                    .getChildByName("itembg2")
                    .getChildByName("richtext")
                    .getComponent(cc.RichText).string =
                    p.default.getItemNum(8) +
                    (0 == p.default.techResetPoints
                      ? ""
                      : "<color=#F7F31C>(" +
                        p.default.techResetPoints +
                        ")</c>")));
                var i = t.getChildByName("scrollView");
                !e && this._new_tech_node && this._new_tech_node.active
                  ? (i.active = !1)
                  : (i.active = !0);
                for (
                  var n = i
                      .getChildByName("view")
                      .getChildByName("content")
                      .getChildByName("line1"),
                    a = i
                      .getChildByName("view")
                      .getChildByName("content")
                      .getChildByName("line2"),
                    o = 0,
                    r = 0,
                    s = 0;
                  s < 72;
                  s++
                ) {
                  var c = null;
                  (null ==
                    (c =
                      s % 4 < 3
                        ? n.getChildByName("node" + (s + 1))
                        : a.getChildByName("node" + (s + 1))) &&
                    (((c = cc.instantiate(this.bufferUIPrefab)).scale = 0.9),
                    this.addRedPoint(c, cc.v2(50, 35)),
                    s % 4 < 3
                      ? ((c.y =
                          450 * Math.floor(s / 4) + (s % 4) * 150 - 3600 - 300),
                        n.addChild(c, 100, "node" + (s + 1)))
                      : ((c.y = 450 * Math.floor(s / 4) - 3600),
                        a.addChild(c, 100, "node" + (s + 1)))),
                    c.getComponent("bufferNodeUI").initBufferUI(s),
                    v.default.canUpgradeBuffer(s)
                      ? (c.getChildByName("redpoint").active = !0)
                      : (c.getChildByName("redpoint").active = !1),
                    s % 4 < 3
                      ? 2 == p.default.bufferArray[s] && (o = s + 1)
                      : 2 == p.default.bufferArray[s] && (r = s + 4));
                }
                for (
                  n.getChildByName("pro").height =
                    450 * Math.floor(o / 4) + 150 * ((o % 4) + 1),
                    a.getChildByName("pro").height =
                      450 * Math.floor(r / 4 + 1),
                    s = 0;
                  s < 18;
                  s++
                )
                  n
                    .getChildByName("row" + (s + 1))
                    .getChildByName("pro").active = Math.floor((o + 1) / 4) > s;
                if (null != this.nowBufferScroll)
                  (i
                    .getComponent(cc.ScrollView)
                    .scrollToOffset(this.nowBufferScroll, 0),
                    (this.nowBufferScroll = null));
                else {
                  var l =
                    7780 - (450 * Math.floor(o / 4) + 150 * ((o % 4) + 1));
                  i.getComponent(cc.ScrollView).scrollToOffset(cc.v2(0, l), 0);
                }
                e &&
                  (y.default.inst.playAudio("starcraft/ui_change"),
                  this.nodeMoveIn(t.getChildByName("scrollView"), 0, 1),
                  this.nodeMoveIn(t.getChildByName("tabs"), 0, 1));
              }),
              (t.prototype.addPage4RedPoints = function () {
                for (
                  var e = this.pageLayer
                      .getChildByName("page4")
                      .getChildByName("scrollView")
                      .getChildByName("view")
                      .getChildByName("content"),
                    t = 1;
                  t <= 5;
                  t++
                ) {
                  var i = e
                    .getChildByName("window" + t)
                    .getChildByName("banner");
                  if (
                    (this.addRedPoint(
                      i.getChildByName("button"),
                      cc.v2(65, 21),
                    ),
                    t >= 2 && t <= 4)
                  )
                    for (var n = 1; n <= 3; n++) {
                      var a = e
                        .getChildByName("window" + t)
                        .getChildByName("a" + n);
                      this.addRedPoint(
                        a.getChildByName("itembg"),
                        cc.v2(66, 105),
                      );
                    }
                }
              }),
              (t.prototype.addPage2RedPoints = function () {
                this.pageLayer.getChildByName("page2");
              }),
              (t.prototype.equipUprade = function () {
                return !1;
              }),
              (t.prototype.canBuildingUpgrade = function (e) {
                return (
                  u.default.getBuildingUpgradeFlag(
                    p.default.buildingLevelArray[e - 1],
                  ) <= p.default.getItemNum(100 + e)
                );
              }),
              (t.prototype.canArmyUpgrade = function (e) {
                return (
                  u.default.getArmyUpgradeFlag(
                    p.default.armyLevelArray[e - 1],
                  ) <= p.default.getItemNum(200 + e) &&
                  u.default.getArmyUpgradeCoin(
                    p.default.armyLevelArray[e - 1],
                  ) <= p.default.getItemNum(1)
                );
              }),
              (t.prototype.equipAllUpgrade = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  p.default.getDataRem());
                for (var e = new Array(), t = !0; t; ) {
                  t = !1;
                  for (var i = 0; i < 6; i++)
                    this.equipUprade(i + 1) && ((t = !0), e.push(i));
                }
                if (e.length > 0) {
                  (y.default.inst.playAudio("done"),
                    p.default.saveDataRem(),
                    p.default.saveData(),
                    this.refreshAll());
                  var n = this.pageLayer
                    .getChildByName("page2")
                    .getChildByName("equip");
                  for (i = 0; i < 6; i++) {
                    var a = n.getChildByName("box" + (i + 1));
                    if (e.indexOf(i) >= 0) {
                      var o = cc.instantiate(this.levelUpPrefab);
                      a.addChild(o);
                    }
                  }
                } else this.popTips("暂时没有装置可升级");
              }),
              (t.prototype.getRedPage = function () {
                for (var e = 0; e < u.default.nowLevel; e++)
                  if (
                    1 == g.default.GetBoxStatus(e + 1, 1) ||
                    1 == g.default.GetBoxStatus(e + 1, 2) ||
                    1 == g.default.GetBoxStatus(e + 1, 3)
                  )
                    return e;
                return -1;
              }),
              (t.prototype.refreshPage3 = function (e) {
                // Offline adaptation: mainScene.refreshPage3

                void 0 === e && (e = !1);
                var t = this.pageLayer.getChildByName("page3");
                ((t.getChildByName("icon1").getChildByName("redpoint").active =
                  u.default.hasDaily()),
                  (t.getChildByName("icon2").getChildByName("redpoint").active =
                    u.default.hasWeek()),
                  (t.getChildByName("icon3").getChildByName("redpoint").active =
                    u.default.hasGift()),
                  (t.getChildByName("icon4").getChildByName("redpoint").active =
                    !1),
                  (t.getChildByName("icon5").getChildByName("redpoint").active =
                    u.default.hasLevelGift()));
                var i = this.getRedPage();
                i < 0 && (i = u.default.nowLevel);
                var n = t.getChildByName("pageView");
                n.getComponent(cc.PageView).scrollToPage(i, 0.5);
                var a = n.getComponent(cc.PageView).getPages()[i];
                (a.getComponent("levelPageUI").showLevelPage(),
                  (a.getChildByName("redpoint").active = !1),
                  (u.default.nowGameLevel = i + 1),
                  u.default.nowGameLevel > i + 1
                    ? ((t
                        .getChildByName("button2")
                        .getComponent(cc.Button).interactable = !1),
                      (t
                        .getChildByName("button2")
                        .getChildByName("text").color = cc.color(
                        100,
                        100,
                        100,
                      )))
                    : ((t
                        .getChildByName("button2")
                        .getComponent(cc.Button).interactable = !0),
                      (t
                        .getChildByName("button2")
                        .getChildByName("text").color = cc.color(
                        237,
                        233,
                        17,
                      ))),
                  i - 1 >= 0 &&
                    i - 1 < n.getComponent(cc.PageView).getPages().length &&
                    (a = n
                      .getComponent(cc.PageView)
                      .getPages()
                      [i - 1].getComponent("levelPageUI")
                      .hideLevelPage()),
                  i + 1 >= 0 &&
                    i + 1 < n.getComponent(cc.PageView).getPages().length &&
                    (a = n
                      .getComponent(cc.PageView)
                      .getPages()
                      [i + 1].getComponent("levelPageUI")
                      .hideLevelPage()),
                  (t
                    .getChildByName("energybg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string =
                    p.default.getItemNum(4) + "/" + u.default.HPLimit),
                  (t.getChildByName("button1").active =
                    u.default.getPassLevel() >= 1));
                var o = g.default.GetStar3Level();
                (o > 0
                  ? ((t
                      .getChildByName("button1")
                      .getChildByName("tips")
                      .getChildByName("text")
                      .getComponent(cc.Label).string = "第" + o + "关"),
                    p.default.freeTimeArray[5] > 0
                      ? ((t
                          .getChildByName("button1")
                          .getChildByName("ad").active = !1),
                        (t
                          .getChildByName("button1")
                          .getComponent(cc.Button).interactable = !0))
                      : p.default.freeTimeArray[6] > 0
                        ? ((t
                            .getChildByName("button1")
                            .getChildByName("ad").active = !1),
                          (t
                            .getChildByName("button1")
                            .getComponent(cc.Button).interactable = !0))
                        : ((t
                            .getChildByName("button1")
                            .getChildByName("ad").active = !1),
                          (t
                            .getChildByName("button1")
                            .getComponent(cc.Button).interactable = !1),
                          (t
                            .getChildByName("button1")
                            .getChildByName("tips")
                            .getChildByName("text")
                            .getComponent(cc.Label).string = "整点刷新")))
                  : ((t
                      .getChildByName("button1")
                      .getComponent(cc.Button).interactable = !1),
                    (t.getChildByName("button1").getChildByName("ad").active =
                      !1),
                    (t
                      .getChildByName("button1")
                      .getChildByName("tips")
                      .getChildByName("text")
                      .getComponent(cc.Label).string = "最高通关")),
                  e &&
                    (y.default.inst.playAudio("starcraft/ui_change"),
                    this.nodeMoveIn(t.getChildByName("button1"), -175, 1),
                    this.nodeMoveIn(t.getChildByName("button2"), 173, 2)));
              }),
              (t.prototype.addPage3RedPoints = function () {
                for (
                  var e = this.pageLayer.getChildByName("page3"), t = 0;
                  t < 5;
                  t++
                ) {
                  var i = e.getChildByName("icon" + (t + 1));
                  this.addRedPoint(i, cc.v2(33, 33));
                }
                this.addRedPoint(e.getChildByName("icon_mail"), cc.v2(33, 33));
              }),
              (t.prototype.setMailRedpoint = function (e) {
                this.pageLayer
                  .getChildByName("page3")
                  .getChildByName("icon_mail")
                  .getChildByName("redpoint").active = e > 0;
              }),
              (t.prototype.refreshEnergyTime = function () {
                if (this.pageLayer.getChildByName("page3").active) {
                  var e = Math.floor(u.default.energyTimer / 1e3);
                  (e > 600 && (e = 0),
                    p.default.getItemNum(4) >= u.default.HPLimit && (e = 0),
                    e > 0 && (e = 600 - e));
                  var t = Math.floor(e / 60),
                    i = e % 60,
                    n = "";
                  ((n += t >= 10 ? t : "0" + t),
                    (n += ":"),
                    (n += i >= 10 ? i : "0" + i),
                    (this.pageLayer
                      .getChildByName("page3")
                      .getChildByName("energybg")
                      .getChildByName("time")
                      .getComponent(cc.Label).string = n),
                    (this.pageLayer
                      .getChildByName("page3")
                      .getChildByName("icon3")
                      .getChildByName("text")
                      .getComponent(cc.Label).string =
                      u.default.getGiftTime()));
                }
              }),
              (t.prototype.refreshPage4 = function (e) {
                // Offline adaptation: mainScene.refreshPage4

                void 0 === e && (e = !1);
                for (
                  var t = this.pageLayer.getChildByName("page4"),
                    i = t
                      .getChildByName("scrollView")
                      .getChildByName("view")
                      .getChildByName("content"),
                    n = 0;
                  n < 5;
                  n++
                ) {
                  var a = i
                      .getChildByName("window" + (n + 1))
                      .getChildByName("banner"),
                    o = p.default.buildingLevelArray[n],
                    r = C.BuildingConfig[n];
                  ((a
                    .getChildByName("button")
                    .getChildByName("redpoint").active =
                    this.canBuildingUpgrade(n + 1)),
                    (a.getChildByName("level").getComponent(cc.Label).string =
                      "Lv " + (o + 1)),
                    (a
                      .getChildByName("info1")
                      .getChildByName("num1")
                      .getComponent(cc.Label).string =
                      "" + Math.floor(r.hp * Math.pow(1.15, o))),
                    (a
                      .getChildByName("info1")
                      .getChildByName("num2")
                      .getComponent(cc.Label).string =
                      "" + Math.floor(r.hp * Math.pow(1.15, o + 1))),
                    0 == n || 4 == n
                      ? ((a
                          .getChildByName("info2")
                          .getChildByName("num1")
                          .getComponent(cc.Label).string =
                          "" + Math.floor(r.attack * Math.pow(1.15, o))),
                        (a
                          .getChildByName("info2")
                          .getChildByName("num2")
                          .getComponent(cc.Label).string =
                          "" + Math.floor(r.attack * Math.pow(1.15, o + 1))))
                      : ((a
                          .getChildByName("info2")
                          .getChildByName("num1")
                          .getComponent(cc.Label).string =
                          "+" + Math.floor(100 * Math.pow(1.1, o) - 100) + "%"),
                        (a
                          .getChildByName("info2")
                          .getChildByName("num2")
                          .getComponent(cc.Label).string =
                          "+" +
                          Math.floor(100 * Math.pow(1.1, o + 1) - 100) +
                          "%")));
                  var s = u.default.getBuildingUpgradeFlag(o),
                    c = p.default.getItemNum(100 + (n + 1)),
                    l = a.getChildByName("probg");
                  if (
                    ((l.getChildByName("text").getComponent(cc.Label).string =
                      c + "/" + s),
                    c >= s
                      ? ((l.getChildByName("pro2").active = !0),
                        (l.getChildByName("pro1").active = !1),
                        (l.getChildByName("pro2").width = 100))
                      : ((l.getChildByName("pro2").active = !1),
                        (l.getChildByName("pro1").active = !0),
                        (l.getChildByName("pro1").width = (100 * c) / s)),
                    1 == n || 2 == n || 3 == n)
                  )
                    for (var d = 0; d < 3; d++) {
                      var h = 3 * n + d - 1,
                        f = i
                          .getChildByName("window" + (n + 1))
                          .getChildByName("a" + (d + 1))
                          .getChildByName("itembg"),
                        g = p.default.armyLevelArray[h - 1];
                      f
                        .getChildByName("banner")
                        .getChildByName("level")
                        .getComponent(cc.Label).string = "" + (g + 1);
                      var m = u.default.getArmyUpgradeFlag(g),
                        _ = p.default.getItemNum(200 + h),
                        v = f.getChildByName("probg");
                      (0 == p.default.armyCheck[n - 1][d]
                        ? ((f.getChildByName("ad").active = !0),
                          (f
                            .getChildByName("toggle")
                            .getComponent(cc.Toggle).isChecked = !1))
                        : ((f.getChildByName("ad").active = !1),
                          2 == p.default.armyCheck[n - 1][d]
                            ? (f
                                .getChildByName("toggle")
                                .getComponent(cc.Toggle).isChecked = !0)
                            : (f
                                .getChildByName("toggle")
                                .getComponent(cc.Toggle).isChecked = !1)),
                        (v
                          .getChildByName("text")
                          .getComponent(cc.Label).string = _ + "/" + m),
                        _ >= m
                          ? ((v.getChildByName("pro2").active = !0),
                            (v.getChildByName("pro1").active = !1),
                            (v.getChildByName("pro2").width = 140))
                          : ((v.getChildByName("pro2").active = !1),
                            (v.getChildByName("pro1").active = !0),
                            (v.getChildByName("pro1").width = (140 * _) / m)),
                        0 == u.default.isArmyUnlocked(h)
                          ? ((i
                              .getChildByName("window" + (n + 1))
                              .getChildByName("a" + (d + 1))
                              .getChildByName("lock").active = !1),
                            (i
                              .getChildByName("window" + (n + 1))
                              .getChildByName("a" + (d + 1))
                              .getChildByName("text").active = !1),
                            (f.getChildByName("redpoint").active =
                              this.canArmyUpgrade(h)))
                          : ((i
                              .getChildByName("window" + (n + 1))
                              .getChildByName("a" + (d + 1))
                              .getChildByName("lock").active = !0),
                            (i
                              .getChildByName("window" + (n + 1))
                              .getChildByName("a" + (d + 1))
                              .getChildByName("text").active = !0),
                            (i
                              .getChildByName("window" + (n + 1))
                              .getChildByName("a" + (d + 1))
                              .getChildByName("text")
                              .getComponent(cc.Label).string =
                              "第" +
                              u.default.isArmyUnlocked(h) +
                              "关后解锁")));
                    }
                }
                e &&
                  (y.default.inst.playAudio("starcraft/ui_change"),
                  this.nodeMoveIn(t.getChildByName("scrollView"), 0, 1));

                window.offlineFortress.refreshEntry(this);
              }),
              (t.prototype.upgradeBuilding = function (e, t) {
                y.default.inst.playAudio("starcraft/click");
                var i = parseInt(t),
                  n = p.default.buildingLevelArray[i - 1],
                  a = u.default.getBuildingUpgradeFlag(n);
                if (p.default.getItemNum(100 + i) >= a) {
                  (p.default.buildingLevelArray[i - 1]++,
                    p.default.subItem(100 + i, a),
                    p.default.saveData(),
                    y.default.inst.playAudio("upgrade"));
                  var o = this.pageLayer
                    .getChildByName("page4")
                    .getChildByName("scrollView")
                    .getChildByName("view")
                    .getChildByName("content")
                    .getChildByName("window" + i);
                  (h.cocos
                    .loadRes("starcraft/effect/upgrade", cc.Prefab)
                    .then(function (e) {
                      var t = cc.instantiate(e);
                      o.getChildByName("banner")
                        .getChildByName("icon")
                        .addChild(t);
                    }),
                    this.refreshAll());
                } else this.popTips("建筑图纸数量不够，无法升级");
              }),
              (t.prototype.openArmyInfo = function (e, t) {
                var i = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("armyInfo");
                i.active ||
                  (this.windowPop(i),
                  y.default.inst.playAudio("starcraft/click"),
                  i.getComponent("towerInfoUI").initTowerInfo(parseInt(t)));
              }),
              (t.prototype.refreshPage5 = function (e) {
                (void 0 === e && (e = !1),
                  e && y.default.inst.playAudio("starcraft/ui_change"));
              }),
              (t.prototype.claimFreeResource = function (type) {
                const player = p.default;
                const slot = type === 1 ? 2 : type === 2 ? 3 : type === 4 ? 4 : -1;
                player.getDataRem();
                if (slot < 0 || player.freeTimeArray[slot] <= 0) {
                  this.popTips("今日次数已用完");
                  return false;
                }
                const amount = type === 1 ? 500 : 50;
                // No asynchronous ad boundary or reward panel: quota and inventory
                // change in the same click, including clicks from both entry points.
                player.freeTimeArray[slot]--;
                player.addItem(type, amount);
                player.saveDataRem();
                player.saveData();
                this.refreshPage1();
                window.offlineToast && window.offlineToast(
                  "获得 " + (type === 1 ? "晶体矿" : type === 2 ? "瓦斯" : "能量") +
                  " ×" + amount + "，今日剩余 " + player.freeTimeArray[slot] + "/" + (type === 4 ? 5 : 3)
                );
                return true;
              }),
              (t.prototype.page1Button = function (e, t) {
                if (["3-1", "3-2", "3-3"].includes(t)) {
                  y.default.inst.playAudio("starcraft/click");
                  this.claimFreeResource({"3-1": 1, "3-2": 2, "3-3": 4}[t]);
                  return Promise.resolve();
                }

                // Offline adaptation: mainScene.page1Button

                return r(this, void 0, void 0, function () {
                  var e, i, n, a, o, r, c, l, d, h;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          (e = [
                            [
                              [0, 0],
                              [2, 50],
                              [2, 500],
                            ],
                            [
                              [0, 1],
                              [2, 200],
                              [2, 2e3],
                            ],
                            [
                              [0, 2],
                              [0, 3],
                              [0, 4],
                              [2, 100],
                              [2, 60],
                              [2, 100],
                              [2, 20],
                              [2, 200],
                            ],
                          ]),
                          (i = [
                            [
                              [-1, 1],
                              [-1, 1],
                              [-1, 10],
                            ],
                            [
                              [-2, 1],
                              [-2, 1],
                              [-2, 10],
                            ],
                            [
                              [1, 500],
                              [2, 50],
                              [4, 50],
                              [1, 1200],
                              [4, 20],
                              [5, 10],
                              [7, 1],
                            ],
                          ]),
                          (n = parseInt(t.split("-")[0])),
                          (a = parseInt(t.split("-")[1])),
                          (o = e[n - 1][a - 1][0]),
                          (r = e[n - 1][a - 1][1]),
                          (c = i[n - 1][a - 1][0]),
                          (l = i[n - 1][a - 1][1]),
                          p.default.getDataRem(),
                          y.default.inst.playAudio("starcraft/click"),
                          0 != o
                            ? [3, 4]
                            : p.default.freeTimeArray[r] > 0
                              ? [4, m.wechat.showRewardedVideoAdNew()]
                              : [3, 2]
                        );
                      case 1:
                        return s.sent().isEnded
                          ? (p.default.freeTimeArray[r]--, [3, 3])
                          : (m.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]);
                      case 2:
                        return (this.popTips("今日视频次数已用完"), [2]);
                      case 3:
                        return [3, 5];
                      case 4:
                        if (!(p.default.getItemNum(o) >= r))
                          return (this.popTips("天然气数量不够"), [2]);
                        (p.default.subItem(o, r), (s.label = 5));
                      case 5:
                        if (((d = new Array()), -1 == c))
                          Math.random() < 0.6
                            ? d.push([5, 30])
                            : d.push([6, 3]);
                        else if (-2 == c)
                          for (h = 0; h < 5; h++)
                            Math.random() < 0.6
                              ? d.push([5, 30])
                              : d.push([6, 3]);
                        else d.push([c, l]);
                        return (
                          (this._fortressLoot =
                            c < 0 ? window.offlineFortress.roll(c === -2 ? 5 : 1) : 0),
                          p.default.saveDataRem(),
                          p.default.saveData(),
                          -1 == c
                            ? this.openGetItem(d, 1)
                            : -2 == c
                              ? this.openGetItem(d, 2)
                              : this.openGetItem(d),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.doubleGetItem = function () {
  const rewardPanel = this.uiLayer.getChildByName("popUI").getChildByName("getItem");
  const doubleButton = rewardPanel.getChildByName("button2");
  if (this._rewardDoubleBusy || !rewardPanel.activeInHierarchy || !doubleButton.activeInHierarchy) return Promise.resolve();
  this._rewardDoubleBusy = true;
  const run = () => {
                return r(this, void 0, void 0, function () {
                  var e, t, i, n;
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          y.default.inst.playAudio("starcraft/click"),
                          [4, m.wechat.showRewardedVideoAdNew()]
                        );
                      case 1:
                        if (!a.sent().isEnded)
                          return (
                            m.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        for (
                          e = this.uiLayer
                            .getChildByName("popUI")
                            .getChildByName("getItem"),
                            t = e.getChildByName("items"),
                            i = 0;
                          i < t.childrenCount;
                          i++
                        )
                          ((n = t.children[i].getComponent("itemUI")),
                            p.default.addItem(n.type, n.num),
                            n.doubleNum());
                        return (
                          (e.getChildByName("button2").active = !1),
                          (e.getChildByName("button1").x = 0),
                          p.default.saveData(),
                          this.refreshAll(),
                          [2]
                        );
                    }
                  });
                });
               };
  return Promise.resolve().then(run).finally(() => { this._rewardDoubleBusy = false; });
}),
              (t.prototype.openGetItem = function (e, t, i) {
                // Offline adaptation: mainScene.openGetItem
                window.offlineFortress.showLoot(this, this._fortressLoot || 0);
                this._fortressLoot = 0;
                var n = this;
                (void 0 === t && (t = 0),
                  void 0 === i && (i = !1),
                  y.default.inst.playAudio("openbox"));
                var a = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("getItem");
                if (!a.active) {
                  (this.windowPop(a),
                    a.getChildByName("items").removeAllChildren(!0),
                    (a.getChildByName("items").width = 115 * e.length - 13),
                    a.getChildByName("items").width > 562 &&
                      (a.getChildByName("items").width = 562),
                    1 == t
                      ? ((a.getChildByName("button1").active = !1),
                        (a.getChildByName("button2").active = !1),
                        (a.getChildByName("box1").active = !0),
                        (a.getChildByName("box2").active = !1),
                        this.scheduleOnce(function () {
                          ((a.getChildByName("button1").active = !0),
                            (a.getChildByName("button1").x = 0));
                        }, 0.1))
                      : 2 == t
                        ? ((a.getChildByName("button1").active = !1),
                          (a.getChildByName("button2").active = !1),
                          (a.getChildByName("box1").active = !1),
                          (a.getChildByName("box2").active = !0),
                          this.scheduleOnce(function () {
                            ((a.getChildByName("button1").active = !0),
                              (a.getChildByName("button1").x = 0));
                          }, 0.5))
                        : ((a.getChildByName("button1").active = !1),
                          (a.getChildByName("button2").active = !1),
                          (a.getChildByName("box1").active = !1),
                          (a.getChildByName("box2").active = !1),
                          this.scheduleOnce(function () {
                            i
                              ? ((a.getChildByName("button1").active = !0),
                                (a.getChildByName("button1").x = 100),
                                (a.getChildByName("button2").active = !0),
                                (a.getChildByName("button2").x = -100))
                              : ((a.getChildByName("button1").active = !0),
                                (a.getChildByName("button1").x = 0),
                                (a.getChildByName("button2").active = !1));
                          }, 0.1 * e.length)),
                    p.default.getDataRem());
                  for (
                    var o = function (t) {
                        var i = e[t];
                        i[0] > 1e4 ||
                          r.scheduleOnce(
                            function () {
                              5 == i[0]
                                ? (i[0] = u.default.getArmyTypeFlag() + 200)
                                : 6 == i[0] &&
                                  (i[0] =
                                    u.default.getBuildingTypeFlag() + 100);
                              var e = cc.instantiate(n.itemUIPrefab);
                              (e.getComponent("itemUI").initItem(i[0], i[1]),
                                n.windowPop(e, 0.2, 0.9),
                                a.getChildByName("items").addChild(e),
                                p.default.addItem(i[0], i[1]));
                            },
                            0.1 + 0.1 * t,
                          );
                      },
                      r = this,
                      s = 0;
                    s < e.length;
                    s++
                  )
                    o(s);
                  this.scheduleOnce(
                    function () {
                      (p.default.saveDataRem(),
                        p.default.saveData(),
                        n.refreshAll());
                    },
                    0.3 + 0.1 * e.length,
                  );
                }
              }),
              (t.prototype.closeGetItem = function () {
                ((this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("getItem").active = !1),
                  y.default.inst.playAudio("starcraft/click"));
              }),
              (t.prototype.openItemInfoUI = function (e, t) {
                this.openItemInfo(parseInt(t));
              }),
              (t.prototype.openItemInfo = function (e) {
                (console.log("openItemInfo", e),
                  y.default.inst.playAudio("starcraft/click"));
                var t = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("itemInfo");
                if (!t.active) {
                  (this.windowPop(t),
                    t
                      .getChildByName("bg")
                      .getChildByName("icon")
                      .removeAllChildren());
                  var i = cc.instantiate(this.itemUIPrefab);
                  (i.getComponent("itemUI").initItem(e),
                    t.getChildByName("bg").getChildByName("icon").addChild(i),
                    (t
                      .getChildByName("bg")
                      .getChildByName("name")
                      .getComponent(cc.Label).string =
                      f.default.getItemNameWithType(e) + ""),
                    (t
                      .getChildByName("bg")
                      .getChildByName("num")
                      .getComponent(cc.Label).string =
                      "拥有数量：" + p.default.getItemNum(e)),
                    (t
                      .getChildByName("bg")
                      .getChildByName("des")
                      .getComponent(cc.Label).string =
                      f.default.getItemDesWithType(e) + ""),
                    (t
                      .getChildByName("bg")
                      .getChildByName("limit")
                      .getComponent(cc.Label).string =
                      "上限：" + f.default.getItemLimitWithType(e)));
                }
              }),
              (t.prototype.closeItemInfo = function () {
                ((this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("itemInfo").active = !1),
                  y.default.inst.playAudio("starcraft/click"));
              }),
              (t.prototype.openEnemyInfo = function (e, t) {
                void 0 === t && (t = !1);
                var i = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("enemyInfo");
                if (!i.active) {
                  (y.default.inst.playAudio("starcraft/click"),
                    this.windowPop(i),
                    i
                      .getChildByName("bg")
                      .getChildByName("icon")
                      .removeAllChildren());
                  var n = B.EnemyConfig[e - 1];
                  (h.cocos
                    .loadRes("starcraft/enemy/e" + e, cc.Prefab)
                    .then(function (n) {
                      var a = cc.instantiate(n);
                      (t
                        ? a.getComponent("starEnemy").initEnemy(e, 1, !0)
                        : a.getComponent("starEnemy").initEnemy(e, 0, !0),
                        a.getComponent("starEnemy").isSky && (a.y = 30),
                        i
                          .getChildByName("bg")
                          .getChildByName("icon")
                          .addChild(a));
                    }),
                    (i.getChildByName("bg").getChildByName("boss").active =
                      !!t),
                    (i
                      .getChildByName("bg")
                      .getChildByName("name")
                      .getComponent(cc.Label).string = n.name),
                    (i
                      .getChildByName("bg")
                      .getChildByName("des")
                      .getComponent(cc.Label).string = n.text),
                    (i
                      .getChildByName("bg")
                      .getChildByName("tips1")
                      .getComponent(cc.Sprite).spriteFrame =
                      this.enemyTips[n.size - 1]),
                    (i
                      .getChildByName("bg")
                      .getChildByName("tips2")
                      .getComponent(cc.Sprite).spriteFrame =
                      this.enemyTips[n.isSky ? 4 : 3]),
                    (i
                      .getChildByName("bg")
                      .getChildByName("tips3")
                      .getComponent(cc.Sprite).spriteFrame =
                      this.enemyTips[n.isBullet ? 6 : 5]),
                    0 == n.attackRate[1]
                      ? (i
                          .getChildByName("bg")
                          .getChildByName("tips4")
                          .getComponent(cc.Sprite).spriteFrame =
                          this.enemyTips[7])
                      : 0 == n.attackRate[0]
                        ? (i
                            .getChildByName("bg")
                            .getChildByName("tips4")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.enemyTips[8])
                        : (i
                            .getChildByName("bg")
                            .getChildByName("tips4")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.enemyTips[9]));
                }
              }),
              (t.prototype.closeEnemyInfo = function () {
                ((this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("enemyInfo").active = !1),
                  y.default.inst.playAudio("starcraft/click"));
              }),
              (t.prototype.changePageIndex = function (e) {
                for (
                  var t = this.uiLayer
                      .getChildByName("bottomUI")
                      .getChildByName("bg")
                      .getChildByName("toggleContainer"),
                    i = 0;
                  i < 5;
                  i++
                )
                  ((t
                    .getChildByName("toggle" + (i + 1))
                    .getChildByName("Background").active = !0),
                    (t
                      .getChildByName("toggle" + (i + 1))
                      .getChildByName("checkmark").active = !1));
                var n = t.getChildByName("toggle" + e);
                (this.changePage(n.getComponent(cc.Toggle)),
                  (n.getComponent(cc.Toggle).isChecked = !0));
              }),
              (t.prototype.changePage = function (e) {
                y.default.inst.playAudio("starcraft/click");
                for (
                  var t = this.uiLayer
                      .getChildByName("bottomUI")
                      .getChildByName("bg")
                      .getChildByName("toggleContainer"),
                    i = 0,
                    n = 0;
                  n < 5;
                  n++
                )
                  ((t
                    .getChildByName("toggle" + (n + 1))
                    .getChildByName("Background").active = !0),
                    (t
                      .getChildByName("toggle" + (n + 1))
                      .getChildByName("checkmark").active = !1));
                for (n = 0; n < 5; n++)
                  if (
                    t
                      .getChildByName("toggle" + (n + 1))
                      .getComponent(cc.Toggle) == e
                  ) {
                    i = n + 1;
                    break;
                  }
                ((t
                  .getChildByName("toggle" + i)
                  .getChildByName("Background").active = !1),
                  (t
                    .getChildByName("toggle" + i)
                    .getChildByName("checkmark").active = !0),
                  1 == i && u.default.nowLevel < 3
                    ? this.popTips("需要通过第3关解锁")
                    : 2 == i && u.default.nowLevel < 1
                      ? this.popTips("需要通过第1关解锁")
                      : 4 == i && u.default.nowLevel < 2
                        ? this.popTips("需要通过第2关解锁")
                        : 5 == i && u.default.nowLevel < 6
                          ? this.popTips("需要通过第6关解锁")
                          : (2 == i ? (i = 4) : 4 == i && (i = 2),
                            this.pageLayer.getChildByName("page" + i).active ||
                              (this.showPage(i), this.refreshAll(!0))));
              }),
              (t.prototype.openEquipInfo = function (e, t) {
                y.default.inst.playAudio("starcraft/click");
                var i = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("equipInfo");
                i.active ||
                  (this.windowPop(i),
                  i.getComponent("equipInfoUI").initEquipInfo(parseInt(t)));
              }),
              (t.prototype.openBufferInfo = function (e) {
                (y.default.inst.playAudio("starcraft/click"),
                  (this.nowBufferIndex = e),
                  (this.nowBufferScroll = this.pageLayer
                    .getChildByName("page2")
                    .getChildByName("scrollView")
                    .getComponent(cc.ScrollView)
                    .getScrollOffset()));
                var t = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("bufferInfo");
                (this.windowPop(t),
                  t
                    .getChildByName("bg")
                    .getChildByName("bufferNodeUI")
                    .getComponent("bufferNodeUI")
                    .initBufferUI(e));
                var i = Number(b.default.BufferConfig[this.nowBufferIndex][4]);
                ((t
                  .getChildByName("bg")
                  .getChildByName("coinbg")
                  .getChildByName("text")
                  .getComponent(cc.Label).string = 100 * i + ""),
                  (t
                    .getChildByName("bg")
                    .getChildByName("itembg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string = i + ""));
              }),
              (t.prototype.closeBufferInfo = function () {
                ((this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("bufferInfo").active = !1),
                  y.default.inst.playAudio("starcraft/click"),
                  (this.nowBufferScroll = null));
              }),
              (t.prototype.upgradeBuffer = function () {
                var e = this;
                if (
                  (y.default.inst.playAudio("starcraft/click"),
                  2 != p.default.bufferArray[this.nowBufferIndex])
                ) {
                  var t = this.uiLayer
                      .getChildByName("popUI")
                      .getChildByName("bufferInfo"),
                    i = Number(b.default.BufferConfig[this.nowBufferIndex][4]);
                  (p.default.getDataRem(),
                    p.default.getItemNum(1) >= 100 * i &&
                    p.default.getItemNum(7) >= i
                      ? (y.default.inst.playAudio("upgrade"),
                        p.default.subItem(1, 100 * i),
                        p.default.subItem(7, i),
                        (p.default.bufferArray[this.nowBufferIndex] = 2),
                        p.default.saveDataRem(),
                        p.default.saveData(),
                        h.cocos
                          .loadRes("starcraft/effect/upgrade", cc.Prefab)
                          .then(function (e) {
                            var i = cc.instantiate(e);
                            t.getChildByName("bg")
                              .getChildByName("bufferNodeUI")
                              .getChildByName("icon")
                              .addChild(i);
                          }),
                        this.scheduleOnce(function () {
                          (e.refreshAll(), (t.active = !1));
                        }, 1))
                      : this.popTips("所需的水晶和魔方不够"));
                }
              }),
              (t.prototype.showPage = function (e) {
                return r(this, void 0, void 0, function () {
                  var t,
                    i,
                    n,
                    a,
                    o = this;
                  return s(this, function () {
                    for (t = 0; t < 5; t++)
                      this.pageLayer.getChildByName("page" + (t + 1)).active =
                        !1;
                    return (
                      (this.pageLayer.getChildByName("page" + e).active = !0),
                      5 == e
                        ? this._arena_page ||
                          (this.pageLayer
                            .getChildByName("page" + e)
                            .removeAllChildren(),
                          this.showLoading(),
                          h.cocos
                            .loadRes("arena/arena_page", cc.Prefab)
                            .then(function (t) {
                              var i = cc.instantiate(t);
                              (o.pageLayer
                                .getChildByName("page" + e)
                                .addChild(i),
                                (o._arena_page = i.getComponent(A.default)),
                                (o._arena_page.matching_node.parent =
                                  o.uiLayer),
                                (o._arena_page.junxian_tips.parent = o.uiLayer),
                                o.hideLoading());
                            }))
                        : 3 == e
                          ? x.default.canFetchMail().then(function (e) {
                              o.setMailRedpoint(e);
                            })
                          : 2 == e &&
                            this._new_tech_node &&
                            ((i = this.pageLayer.getChildByName("page" + e)),
                            (n = i
                              .getChildByName("tabs")
                              .getChildByName("tab1")),
                            (a = i
                              .getChildByName("tabs")
                              .getChildByName("tab2")),
                            (n.getChildByName("sp0").active = !1),
                            (n.getChildByName("sp1").active = !0),
                            (a.getChildByName("sp0").active = !0),
                            (a.getChildByName("sp1").active = !1),
                            (a.getChildByName("label").color = new cc.Color(
                              97,
                              199,
                              216,
                            )),
                            (n.getChildByName("label").color = new cc.Color(
                              255,
                              241,
                              108,
                            )),
                            this._new_tech_node &&
                              (this._new_tech_node.active = !1)),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.pageViewClick = function (e) {
                y.default.inst.playAudio("starcraft/click");
                var t = e.node,
                  i = t.getComponent(cc.PageView).getCurrentPageIndex();
                ((u.default.nowGameLevel = i + 1),
                  u.default.nowGameLevel > u.default.nowLevel + 1
                    ? ((this.pageLayer
                        .getChildByName("page3")
                        .getChildByName("button2")
                        .getComponent(cc.Button).interactable = !1),
                      (this.pageLayer
                        .getChildByName("page3")
                        .getChildByName("button2")
                        .getChildByName("text").color = cc.color(
                        100,
                        100,
                        100,
                      )))
                    : ((this.pageLayer
                        .getChildByName("page3")
                        .getChildByName("button2")
                        .getComponent(cc.Button).interactable = !0),
                      (this.pageLayer
                        .getChildByName("page3")
                        .getChildByName("button2")
                        .getChildByName("text").color = cc.color(
                        237,
                        233,
                        17,
                      ))));
                var n = t.getComponent(cc.PageView).getPages()[i];
                (n.getComponent("levelPageUI").showLevelPage(),
                  i - 1 >= 0 &&
                    i - 1 < t.getComponent(cc.PageView).getPages().length &&
                    (n = t
                      .getComponent(cc.PageView)
                      .getPages()
                      [i - 1].getComponent("levelPageUI")
                      .hideLevelPage()),
                  i + 1 >= 0 &&
                    i + 1 < t.getComponent(cc.PageView).getPages().length &&
                    (n = t
                      .getComponent(cc.PageView)
                      .getPages()
                      [i + 1].getComponent("levelPageUI")
                      .hideLevelPage()));
              }),
              (t.prototype.windowPop = function (e, t, i) {
                (void 0 === t && (t = 0.2),
                  void 0 === i && (i = 1),
                  (e.active = !0),
                  (e.scale = 0),
                  e.runAction(cc.scaleTo(t, i).easing(cc.easeBackInOut())));
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
              (t.prototype.showContinueLastBattle = function () {
                var e = this;
                return new Promise(function (t) {
                  ((e._continue_resolve = t),
                    w.utils.popPanel(e.node.getChildByName("continue")));
                });
              }),
              (t.prototype.startGame = function () {
                return r(this, void 0, void 0, function () {
                  return s(this, function () {
                    return (
                      y.default.inst.playAudio("starcraft/click"),
                      p.default.getDataRem(),
                      p.default.getItemNum(4) >= 6
                        ? (this.showLoading(),
                          p.default.subItem(4, 6),
                          p.default.dailyArray[0]++,
                          p.default.saveDataRem(),
                          p.default.saveData(),
                          (u.default.mainInstance = null),
                          y.default.inst.bgmOff(),
                          cc.director.loadScene("gameScene", function () {
                            N.default.isContinue = !1;
                          }))
                        : (this.openBuyThings(4),
                          this.popTips("所需能量不够了")),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.autoGame = function () {
return Promise.resolve(window.offlineSweep.run(this));
}),
              (t.prototype.checkLevelUp = function () {
                if (p.default.showLevelup) {
                  y.default.inst.playAudio("starcraft/click");
                  var e = p.default.showLevelup;
                  p.default.showLevelup = 0;
                  var t = this.uiLayer
                      .getChildByName("popUI")
                      .getChildByName("levelUp"),
                    i = t
                      .getChildByName("bg")
                      .getChildByName("new")
                      .getChildByName("" + e);
                  if (i) {
                    for (var n = 0; n < i.parent.children.length; n++)
                      i.parent.children[n].active = !1;
                    return (
                      (i.active = !0),
                      (t.active = !0),
                      this.windowPop(t),
                      (t
                        .getChildByName("bg")
                        .getChildByName("lv1")
                        .getChildByName("text")
                        .getComponent(cc.Label).string = e + ""),
                      void (t
                        .getChildByName("bg")
                        .getChildByName("lv2")
                        .getChildByName("text")
                        .getComponent(cc.Label).string = e + 1 + "")
                    );
                  }
                }
              }),
              (t.prototype.closeLevelUp = function () {
                ((this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("levelUp").active = !1),
                  y.default.inst.playAudio("starcraft/click"));
              }),
              (t.prototype.update = function (e) {
                ((p.default.onlineTime += e),
                  u.default.checkDayTime(new Date().getTime()));
              }),
              (t.prototype.showLoading = function () {
                this.node.getChildByName("loading").active = !0;
              }),
              (t.prototype.hideLoading = function () {
                this.node.getChildByName("loading").active = !1;
              }),
              (t.prototype.addThings = function (e, t) {
                m.wechat.getHttpParam("debug")
                  ? (p.default.getDataRem(),
                    11 == t && p.default.addItem(11, 20),
                    1 == t && p.default.addItem(1, 1e3),
                    2 == t && p.default.addItem(2, 100),
                    4 == t && p.default.addItem(4, 20),
                    7 == t && p.default.addItem(7, 5),
                    p.default.saveDataRem(),
                    p.default.saveData(),
                    this.refreshAll())
                  : 1 == t || 2 == t || 4 == t
                    ? this.openBuyThings(t)
                    : this.changePageIndex(1);
              }),
              (t.prototype.openBuyThings = function (e) {
                // Offline adaptation: mainScene.openBuyThings

                if (e === 4) {
                  const node = this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("buyThings")
                    .getChildByName("item4");
                  for (const label of node.getComponentsInChildren(cc.Label)) {
                    label.string = label.string.replace(/10/g, "50");
                  }
                }

                ((this.buyThingsType = e),
                  y.default.inst.playAudio("starcraft/click"));
                var t = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("buyThings");
                ((t.getChildByName("item1").active = !1),
                  (t.getChildByName("item2").active = !1),
                  (t.getChildByName("item4").active = !1),
                  (t.getChildByName("item" + this.buyThingsType).active = !0),
                  1 == this.buyThingsType
                    ? (t.getChildByName("text1").getComponent(cc.Label).string =
                        "今日剩余次数 (" + p.default.freeTimeArray[2] + "/3)")
                    : 2 == this.buyThingsType
                      ? (t
                          .getChildByName("text1")
                          .getComponent(cc.Label).string =
                          "今日剩余次数 (" + p.default.freeTimeArray[3] + "/3)")
                      : 4 == this.buyThingsType &&
                        (t
                          .getChildByName("text1")
                          .getComponent(cc.Label).string =
                          "今日剩余次数 (" +
                          p.default.freeTimeArray[4] +
                          "/5)"),
                  this.windowPop(t));
              }),
              (t.prototype.doBuyThings = function () {
                const type = this.buyThingsType;
                y.default.inst.playAudio("starcraft/click");
                if (this.claimFreeResource(type)) {
                  const slot = type === 1 ? 2 : type === 2 ? 3 : 4;
                  const pop = this.uiLayer.getChildByName("popUI").getChildByName("buyThings");
                  pop.active = true;
                  pop.getChildByName("text1").getComponent(cc.Label).string =
                    "今日剩余次数 (" + p.default.freeTimeArray[slot] + "/" + (type === 4 ? 5 : 3) + ")";
                }
                return Promise.resolve();
              }),
                (t.prototype.closeBuyThing = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  (this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("buyThings").active = !1));
              }),
              (t.prototype.addRedPoint = function (e, t) {
                var i = cc.instantiate(_.default.inst.red_point_prefab);
                return (e.addChild(i), i.setPosition(t), (i.active = !1), i);
              }),
              (t.prototype.showSettings = function () {
                for (
                  var e = this.node.getChildByName("settings"),
                    t = e.getChildByName("panel"),
                    i = ["sound", "music", "vibrate", "char"],
                    n = 0;
                  n < i.length;
                  n++
                ) {
                  var a = t.getChildByName(i[n]);
                  ((a.children[1].active = 1 == p.default[i[n]]),
                    (a.children[2].active = !a.children[1].active));
                }
                w.utils.popPanel(e);
              }),
              (t.prototype.nodeMoveIn = function (e, t, i) {
                (e.stopAllActions(),
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
                          )));
              }),
              (t.prototype.checkArmy = function (e, t) {
                y.default.inst.playAudio("starcraft/click");
                var i = this.pageLayer
                    .getChildByName("page4")
                    .getChildByName("scrollView")
                    .getChildByName("view")
                    .getChildByName("content"),
                  n = parseInt(t) - 1;
                if (0 != p.default.armyCheck[Math.floor(n / 3)][n % 3]) {
                  for (
                    var a = i.getChildByName(
                        "window" + (Math.floor(n / 3) + 2),
                      ),
                      o = 0;
                    o < 3;
                    o++
                  )
                    ((a
                      .getChildByName("a" + (o + 1))
                      .getChildByName("itembg")
                      .getChildByName("toggle")
                      .getComponent(cc.Toggle).isChecked = !1),
                      2 == p.default.armyCheck[Math.floor(n / 3)][o] &&
                        (p.default.armyCheck[Math.floor(n / 3)][o] = 1));
                  ((a
                    .getChildByName("a" + ((n % 3) + 1))
                    .getChildByName("itembg")
                    .getChildByName("toggle")
                    .getComponent(cc.Toggle).isChecked = !0),
                    (p.default.armyCheck[Math.floor(n / 3)][n % 3] = 2));
                }
              }),
              (t.prototype.checkArmyVideo = function (e, t) {
                return r(this, void 0, void 0, function () {
                  var e;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          y.default.inst.playAudio("starcraft/click"),
                          [4, m.wechat.showRewardedVideoAdNew()]
                        );
                      case 1:
                        return i.sent().isEnded
                          ? ((e = parseInt(t) - 1),
                            0 ==
                              p.default.armyCheck[Math.floor(e / 3)][e % 3] &&
                              (p.default.armyCheck[Math.floor(e / 3)][e % 3] =
                                1),
                            p.default.saveData(),
                            this.refreshPage4(),
                            [2])
                          : (m.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]);
                    }
                  });
                });
              }),
              (t.prototype.openContinue = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  this.windowPop(
                    this.uiLayer
                      .getChildByName("popUI")
                      .getChildByName("continueBattle"),
                  ));
              }),
              (t.prototype.doContinue = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  this.showLoading(),
                  (u.default.mainInstance = null),
                  y.default.inst.bgmOff(),
                  cc.director.loadScene("gameScene", function () {
                    N.default.isContinue = !0;
                  }));
              }),
              (t.prototype.cancelContinue = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  (p.default.saveBattleData = null),
                  p.default.saveData(),
                  (this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("continueBattle").active = !1));
              }),
              (t.prototype.openDaily = function () {
                y.default.inst.playAudio("starcraft/click");
                var e = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("daily");
                (this.windowPop(e), this.refreshDaily());
              }),
              (t.prototype.refreshDaily = function () {
window.offlineDaily.sync(p.default,u.default);

                for (
                  var e = this.uiLayer
                      .getChildByName("popUI")
                      .getChildByName("daily"),
                    t = 0;
                  t < 4;
                  t++
                ) {
                  var i = e
                    .getChildByName("bg")
                    .getChildByName("banner" + (t + 1));
                  i
                    .getChildByName("probg")
                    .getChildByName("text")
                    .getComponent(cc.Label).string =
                    p.default.dailyArray[t] + "/" + u.default.dailyNeed[t];
                  var n = p.default.dailyArray[t] / u.default.dailyNeed[t];
                  (n > 1 && (n = 1),
                    p.default.dailyArray[t] >= u.default.dailyNeed[t]
                      ? ((i
                          .getChildByName("probg")
                          .getChildByName("pro1").active = !1),
                        (i
                          .getChildByName("probg")
                          .getChildByName("pro2").active = !0),
                        (i
                          .getChildByName("probg")
                          .getChildByName("pro2").width = 180 * n),
                        (i.getChildByName("button1").active = !1),
                        (i.getChildByName("button2").active = !0))
                      : ((i
                          .getChildByName("probg")
                          .getChildByName("pro1").active = !0),
                        (i
                          .getChildByName("probg")
                          .getChildByName("pro2").active = !1),
                        (i
                          .getChildByName("probg")
                          .getChildByName("pro1").width = 180 * n),
                        (i.getChildByName("button1").active = !0),
                        (i.getChildByName("button2").active = !1)));
                }

window.offlineDaily.refreshUI(this,p.default);
}),
              (t.prototype.closeDaily = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  (this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("daily").active = !1));
              }),
              (t.prototype.goDaily = function (e, t) {
                return r(this, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          y.default.inst.playAudio("starcraft/click"),
                          parseInt(t),
                          [3, 2]
                        );
                      case 1:
                        return e.sent().isEnded
                          ? (m.wechat.getHttpParam("debug") &&
                              p.default.dailyArray[3]++,
                            p.default.saveData(),
                            this.refreshDaily(),
                            [3, 3])
                          : (m.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]);
                      case 2:
                        ((this.uiLayer
                          .getChildByName("popUI")
                          .getChildByName("daily").active = !1),
                          (e.label = 3));
                      case 3:
                        return (this.refreshAll(), [2]);
                    }
                  });
                });
              }),
              (t.prototype.finishDaily = function (e, t) {
  if (parseInt(t) === 4) {
    if (this.uiLayer.getChildByName("popUI").getChildByName("getItem").active) return;
    if (!window.offlineDaily.claim(p.default, u.default)) { this.refreshDaily(); return; }
    y.default.inst.playAudio("starcraft/click");
    this.openGetItem([[2,30]], 0, true);
    this.refreshDaily();
    return;
  }

                y.default.inst.playAudio("starcraft/click");
                var i = parseInt(t);
                (p.default.dailyArray[i - 1] >= u.default.dailyNeed[i - 1]
                  ? ((p.default.dailyArray[i - 1] -=
                      u.default.dailyNeed[i - 1]),
                    p.default.saveData(),
                    this.openGetItem(
                      [[[1, 250]], [[5, 30]], [[6, 3]], [[2, 30]]][i - 1],
                      0,
                      !0,
                    ))
                  : this.popTips("每日任务要求未达到"),
                  this.refreshDaily());
              }),
              (t.prototype.openWeek = function () {
                y.default.inst.playAudio("starcraft/click");
                var e = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("week");
                this.windowPop(e);
                for (var t = 0; t < 7; t++) {
                  var i = e
                    .getChildByName("bg")
                    .getChildByName("banner" + (t + 1));
                  ((i.getChildByName("get").active = !1),
                    (i.getChildByName("black").active = !1),
                    t < 6 && (i.getChildByName("icon").y = -8),
                    3 == p.default.weekArray[t]
                      ? (i.getChildByName("black").active = !0)
                      : 2 == p.default.weekArray[t] ||
                          cc.sys.platform == cc.sys.TAOBAO_MINIGAME
                        ? ((i.getChildByName("get").active = !0),
                          (i
                            .getChildByName("get")
                            .getChildByName("button").active = !1),
                          (i
                            .getChildByName("get")
                            .getChildByName("button1").active = !0),
                          t < 6 && (i.getChildByName("icon").y = 13))
                        : 1 == p.default.weekArray[t] &&
                          ((i.getChildByName("get").active = !0),
                          (i
                            .getChildByName("get")
                            .getChildByName("button").active = !0),
                          (i
                            .getChildByName("get")
                            .getChildByName("button1").active = !1),
                          t < 6 && (i.getChildByName("icon").y = 13)));
                }
              }),
              (t.prototype.closeWeek = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  (this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("week").active = !1));
              }),
              (t.prototype.doWeek = function (e, t) {
                return r(this, void 0, void 0, function () {
                  var e, i, n;
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          y.default.inst.playAudio("starcraft/click"),
                          (e = [
                            [[1, 500]],
                            [[2, 150]],
                            [[5, 100]],
                            [[6, 10]],
                            [[4, 30]],
                            [[7, 4]],
                            [
                              [2, 100],
                              [5, 60],
                              [6, 6],
                            ],
                          ]),
                          (i = parseInt(t)),
                          1 != p.default.weekArray[i - 1] ||
                          cc.sys.platform == cc.sys.TAOBAO_MINIGAME
                            ? [3, 1]
                            : ((p.default.weekArray[i - 1] = 2),
                              p.default.saveData(),
                              ((n = this.uiLayer
                                .getChildByName("popUI")
                                .getChildByName("week"))
                                .getChildByName("bg")
                                .getChildByName("banner" + i)
                                .getChildByName("get")
                                .getChildByName("button").active = !1),
                              (n
                                .getChildByName("bg")
                                .getChildByName("banner" + i)
                                .getChildByName("get")
                                .getChildByName("button1").active = !0),
                              this.openGetItem(e[i - 1]),
                              [3, 3])
                        );
                      case 1:
                        return 2 == p.default.weekArray[i - 1] ||
                          (1 == p.default.weekArray[i - 1] &&
                            cc.sys.platform == cc.sys.TAOBAO_MINIGAME)
                          ? [4, m.wechat.showRewardedVideoAdNew()]
                          : [3, 3];
                      case 2:
                        if (!a.sent().isEnded)
                          return (
                            m.wechat.is_jd_platform ||
                              this.popTips("观看视频广告失败"),
                            [2]
                          );
                        ((p.default.weekArray[i - 1] = 3),
                          p.default.saveData(),
                          ((n = this.uiLayer
                            .getChildByName("popUI")
                            .getChildByName("week"))
                            .getChildByName("bg")
                            .getChildByName("banner" + i)
                            .getChildByName("get").active = !1),
                          (n
                            .getChildByName("bg")
                            .getChildByName("banner" + i)
                            .getChildByName("black").active = !0),
                          this.openGetItem(e[i - 1]),
                          (a.label = 3));
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.openGift = function () {
                y.default.inst.playAudio("starcraft/click");
                var e = [[[1, 200]], [[2, 20]], [[5, 20]], [[6, 2]], [[7, 1]]];
                u.default.useGiftTime()
                  ? this.openGetItem(
                      e[Math.floor(Math.random() * e.length)],
                      0,
                      !0,
                    )
                  : this.popTips("在线宝箱还不能领取");
              }),
              (t.prototype.openMail = function () {
                // Offline adaptation: mainScene.openMail
                this.popTips("离线版不提供云端邮件");
                return Promise.resolve();
              }),
              (t.prototype.openLevelGift = function () {
                y.default.inst.playAudio("starcraft/click");
                var e = this.uiLayer
                  .getChildByName("popUI")
                  .getChildByName("levelGift");
                this.windowPop(e);
                var t = e
                  .getChildByName("bg")
                  .getChildByName("scrollView")
                  .getChildByName("view")
                  .getChildByName("content");
                if (0 == t.childrenCount)
                  for (var i = 0; i < p.default.levelBenefitArray.length; i++) {
                    var n = cc.instantiate(this.levelGiftItemPrefab);
                    (n.getComponent("levelGiftItemUI").initLevelGiftItem(i),
                      t.addChild(n));
                  }
              }),
              (t.prototype.closeLevelGift = function () {
                (y.default.inst.playAudio("starcraft/click"),
                  (this.uiLayer
                    .getChildByName("popUI")
                    .getChildByName("levelGift").active = !1));
              }),
              (t.prototype.goPvp = function () {}),
              (t.prototype.checkJdAdddesktop = function () {
                var e = this;
                "undefined" == typeof jd ||
                  void 0 === jd.addToDesktop ||
                  (cc.vv && "a7bd" == cc.vv.scene) ||
                  I.default.isTodayRewarded() ||
                  (i.jd_desk_pop_time &&
                    !(i.jd_desk_pop_time < Date.now() - 3e5)) ||
                  (void 0 !== jd.queryShortcut
                    ? jd.queryShortcut({
                        success: function (t) {
                          (console.log("queryShortcut success", t),
                            t.result ||
                              ((i.jd_desk_pop_time = Date.now()),
                              I.default.show(e.node)));
                        },
                        fail: function (e) {
                          console.log("queryShortcut fail", e);
                        },
                        complete: function (e) {
                          console.log("queryShortcut complete", e);
                        },
                      })
                    : ((i.jd_desk_pop_time = Date.now()),
                      I.default.show(this.node)));
              }),
              (t._inst = null),
              (t.jd_desk_pop_time = 0),
              o([d(cc.Node)], t.prototype, "pageLayer", void 0),
              o([d(cc.Node)], t.prototype, "uiLayer", void 0),
              o([d(cc.Prefab)], t.prototype, "tipsPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "levelGiftItemPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "itemUIPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "levelPageUIPrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "stagePrefab", void 0),
              o([d(cc.Prefab)], t.prototype, "bufferUIPrefab", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "itemBg", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "itemBanner", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "enemyTips", void 0),
              o([d(cc.Prefab)], t.prototype, "levelUpPrefab", void 0),
              (i = o([l], t))
            );
          })(cc.Component);
        ((i.default = O), cc._RF.pop());
      };
