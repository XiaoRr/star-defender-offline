// module: gamewall
// deps: {"./libcocos":"libcocos","./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "879fbrCbc5DF7m7RIFyS86a", "gamewall");
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
        var c = e("./libwechat"),
          l = e("./libcocos"),
          d = cc._decorator,
          h = d.ccclass,
          u = (d.property, 0),
          p = 30,
          f = (function(e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._show_type = "normal"),
                (t._onClose = null),
                (t._show_resolve = null),
                (t._pop_navigate = null),
                (t._hide_dt = 0), console.log("constructor(gameWall)"), !i._req_game_list_line && u > 0 && (i._req_game_list_line = c.wechat.requestGameList(u)), i.game_list || (i._req_game_list = c.wechat.requestGameListNew(p)), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onDisable = function() {
                ((i.isShow = !1), this._show_resolve && (this._show_resolve(), (this._show_resolve = null)));
              }),
              (t.prototype.onEnable = function() {
                ((i.isShow = !0), c.wechat.hideBannerAd(), c.wechat.showBannerAd("blink"));
              }),
              (t.prototype.onLoad = function() {
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    n,
                    a,
                    o,
                    r,
                    d,
                    h,
                    p,
                    f,
                    g,
                    y,
                    m,
                    _,
                    v = this;
                  return s(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return (
                          (e = this.node.getChildByName("wall")),
                          (t = this.node.getChildByName("button")) && (t.on("click", function() {
                            v.onBtnClose();
                          }), cc.tween(t).repeatForever(cc.tween().to(0.3, {
                            scale: 1.1
                          }, {
                            easing: "sineOut"
                          }, ).to(0.4, {
                            scale: 1
                          }, {
                            easing: "sineIn"
                          }).call(function() {}), ).start()), 0 == u && ((n = this.node.getChildByName("block")),
                            (a = e.getChildByName("scrollView")),
                            ((o = new cc.Node()).addComponent(cc.Sprite, ).spriteFrame = n.getComponent(cc.Sprite, ).spriteFrame),
                            (a.children[0].zIndex = 2), a.addChild(o, 1), o.setContentSize(625, 925),
                            (o.color = n.color),
                            (n.getComponent(cc.Sprite).spriteFrame = null)), !i.game_list_line && u > 0 ? ((r = i), [4, i._req_game_list_line]) : [3, 2]);
                      case 1:
                        ((r.game_list_line = s.sent()), (s.label = 2));
                      case 2:
                        return i.game_list ? [3, 4] : ((d = i), [4, i._req_game_list]);
                      case 3:
                        ((d.game_list = s.sent()), (s.label = 4));
                      case 4:
                        if (e) {
                          if (i.game_list_line)
                            for (h = e.getChildByName("scrollViewLine"),
                              (p = h.getChildByName("view").getChildByName("content")).width = 140 * i.game_list_line.length - 20 + 4, f = function(e) {
                                cc.loader.loadRes("gamewall/gameicon1", function(t, n) {
                                  if (null == t && n) {
                                    var a = cc.instantiate(n);
                                    if (a) {
                                      (p.addChild(a),
                                        (a.y = 0),
                                        (a.x = 62 + 140 * e), l.cocos.load(i.game_list_line[e].icon, {
                                          type: "png",
                                        }).then(function(e) {
                                          a.isValid && e && (a.getChildByName("icon").getComponent(cc.Sprite, ).spriteFrame = new cc.SpriteFrame(e));
                                        }));
                                      var o = i.game_list_line[e].appid,
                                        r = i.game_list_line[e].path || "",
                                        s = i.game_list_line[e].name || "";
                                      (a.addComponent(cc.Button), a.on("click", function() {
                                        cc.sys.platform === cc.sys.WECHAT_GAME ? wx.navigateToMiniProgram({
                                          appId: o,
                                          path: r,
                                          envVersion: "release",
                                          success: function() {
                                            wx.request({
                                              url: "https://xyx.p8games.com/wxgame/navigate/log",
                                              data: {
                                                ad: 2,
                                                game: c.wechat.game_id,
                                                appid: o,
                                                name: s,
                                              },
                                            });
                                          },
                                        }) : console.log("navigate to appid", o, );
                                      }));
                                    }
                                  } else cc.warn(t + " name load error!!!");
                                }, );
                              }, _ = 0; _ < i.game_list_line.length; _++) f(_);
                          else((e.getChildByName("scrollViewLine").active = !1),
                            (e.getChildByName("title1").active = !1),
                            (e.getChildByName("title2").active = !1),
                            (e.getChildByName("scrollView").getComponent(cc.Widget).enabled = !1),
                            (e.getChildByName("scrollView").y = 0),
                            (e.getChildByName("scrollView").scale = 0.8));
                          for (g = e.getChildByName("scrollView"), y = g.getChildByName("view").getChildByName("content"), i.game_list.length % 3 == 0 ? (y.height = 250 * Math.floor(i.game_list.length / 3) - 20 + 200) : (y.height = 250 * (Math.floor(i.game_list.length / 3) + 1) - 20 + 200), m = function(e) {
                              cc.loader.loadRes("gamewall/gameicon2", function(t, n) {
                                if (null == t && n) {
                                  var a = cc.instantiate(n);
                                  if (a) {
                                    (y.addChild(a),
                                      (a.x = (e % 3) * 200 - 200),
                                      (a.y = -250 * Math.floor(e / 3) - 115));
                                    var o = Math.floor(100 * Math.random());
                                    (o < 15 ? (a.getChildByName("bg").getChildByName("red1").active = !0) : o < 30 && (a.getChildByName("bg").getChildByName("red2").active = !0), l.cocos.load(i.game_list[e].icon, {
                                        type: "png",
                                      }).then(function(e) {
                                        a.isValid && e && (a.getChildByName("bg").getChildByName("icon").getComponent(cc.Sprite, ).spriteFrame = new cc.SpriteFrame(e));
                                      }),
                                      (a.getChildByName("bg").getChildByName("name").getComponent(cc.Label).string = i.game_list[e].name));
                                    var r = i.game_list[e].appid,
                                      s = i.game_list[e].path || "",
                                      d = i.game_list[e].name || "";
                                    (a.addComponent(cc.Button), a.on("click", function() {
                                      cc.sys.platform === cc.sys.WECHAT_GAME ? wx.navigateToMiniProgram({
                                        appId: r,
                                        path: s,
                                        envVersion: "release",
                                        success: function() {
                                          wx.request({
                                            url: "https://xyx.p8games.com/wxgame/navigate/log",
                                            data: {
                                              ad: 2,
                                              game: c.wechat.game_id,
                                              appid: r,
                                              name: d,
                                            },
                                          });
                                        },
                                      }) : console.log("navigate to appid", r, );
                                    }));
                                  }
                                } else cc.warn(t + " name load error!!!");
                              }, );
                            }, _ = 0; _ < i.game_list.length; _++) m(_);
                        }
                        return [2];
                    }
                  });
                });
              }),
              (t.init = function(e) {
                return r(this, void 0, void 0, function() {
                  return s(this, function() {
                    return "undefined" != typeof tt ? [2] : "" != this._init_state ? [2] : e && 2 == e.length ? ((this._init_state = "initing"),
                      (this.native_grid_adIds = e), this.createNative(),
                      (this._init_state = "inited"),
                      [2]) : (console.error("广告id数组错误。['id1', 'id2']"),
                      [2]);
                  });
                });
              }),
              (t.load = function() {
                return new Promise(function(e, t) {
                  cc.loader.loadRes("gamewall/gamewall", cc.Prefab, function(i, n) {
                    i ? t(i) : e(cc.instantiate(n));
                  }, );
                });
              }),
              (t.createNative = function() {
                if (!i.native_grid_ad && "undefined" != typeof wx && void 0 !== wx.getSystemInfoSync)
                  if ("undefined" == typeof qq) {
                    var e = wx.getSystemInfoSync(),
                      t = e.screenWidth,
                      n = e.screenHeight;
                    i.small_native = n / t < 1.875;
                    var a = wx.getSystemInfoSync(),
                      o = (a.screenHeight - (1422 * a.screenWidth) / 1080) / 2;
                    ((i.native_grid_ad = wx.createCustomAd({
                      adUnitId: i.small_native ? this.native_grid_adIds[0] : this.native_grid_adIds[1],
                      adIntervals: 30,
                      style: {
                        top: o,
                        left: 0
                      },
                    })), i.native_grid_ad.onLoad(function() {
                      console.log("---------------native ad onload");
                    }), i.native_grid_ad.onError(function(e) {
                      console.log("---------------native ad onError", e);
                    }));
                  } else i.native_grid_ad = qq.createAppBox({
                    adUnitId: window["adunit-box"],
                  });
              }),
              (t.showMoreGames = function() {
                (this.createNative(), i.native_grid_ad.load().then(function() {
                  i.native_grid_ad.show();
                }));
              }),
              (t.prototype.showNative = function() {
                var e = this;
                if (
                  (this.node.getChildByName("button"), window.debug_ppgamewall || "undefined" == typeof wx || void 0 === wx.createCustomAd)) return "undefined" != typeof qq ? (console.log("---------------try to show native"),
                  (this.node.getChildByName("wall").active = !1),
                  (this.node.getChildByName("button").active = !1), void i.native_grid_ad.load().then(function() {
                    i.native_grid_ad.show().then(function() {
                      (console.log("---------------succ to show native", ), i.native_grid_ad.offClose(), i.native_grid_ad.onClose(function() {
                        if (e.node.active) {
                          var t = e.node.getChildByName("wall");
                          cc.tween(t).by(0.2, {
                            position: cc.v3(-320, 0)
                          }).call(function() {
                            ((e.node.active = !1), cc.Canvas.instance.node.emit("hide-wall", null, ));
                          }).start();
                        }
                      }));
                    }).catch(function(t) {
                      (console.log("---------------fail to show grid native", t, ),
                        (e.node.active = !1), cc.Canvas.instance.node.emit("hide-wall", e._show_type, ));
                    });
                  }).catch(function(t) {
                    (console.log("---------------fail to load native", t),
                      (e.node.active = !1), cc.Canvas.instance.node.emit("hide-wall", e._show_type, ));
                  })) : void this.show_wall();
                this.node.getChildByName("button").active = !0;
                var t = parseInt(c.wechat.getConfig("ppgame_rate"));
                if (Math.floor(100 * Math.random()) < t) this.show_wall();
                else if ((i.createNative(), i.native_grid_ad)) {
                  if (
                    (console.log("---------------try to show native"),
                      (this.node.getChildByName("wall").active = !1), i.native_grid_ad.isShow())) return;
                  i.native_grid_ad.show().then(function() {
                    (console.log("---------------succ to show native"), i.native_grid_ad.offHide(), i.native_grid_ad.onHide(function() {
                      if (e.node.active) {
                        var t = e.node.getChildByName("wall");
                        cc.tween(t).by(0.2, {
                          position: cc.v3(-320, 0, 0)
                        }).call(function() {
                          ((e.node.active = !1), cc.Canvas.instance.node.emit("hide-wall", null, ), e._onClose && (e._onClose(), (e._onClose = null)));
                        }).start();
                      }
                    }));
                  }).catch(function(t) {
                    (console.log("---------------fail to show grid native", t, ), t && "the advertisement has shown" != t.errMsg && e.show_wall());
                  });
                } else this.show_wall();
              }),
              (t.prototype.hideNative = function() {
                i.native_grid_ad && i.native_grid_ad.hide();
              }),
              (t.prototype.show = function(e, t) {
                return (void 0 === e && (e = "normal"), void 0 === t && (t = null), r(this, void 0, void 0, function() {
                  var i = this;
                  return s(this, function() {
                    return (
                      (this._show_type = e),
                      (this.node.active = !0),
                      (this.node.zIndex = 10002), 640 != cc.winSize.width && (this.node.scale = cc.winSize.width / 640),
                      (this.node.getChildByName("button").y = (-cc.winSize.height / 2 + 100) / this.node.scale),
                      [
                        2,
                        new Promise(function(e) {
                          ((i._onClose = t),
                            (i._show_resolve = e), i.showNative());
                        }),
                      ]);
                  });
                }));
              }),
              (t.prototype.show_wall = function() {
                return r(this, void 0, void 0, function() {
                  var e;
                  return s(this, function() {
                    return (
                      ((e = this.node.getChildByName("wall")).active = !0), cc.tween(e).to(0.2, {
                        position: cc.v3(0, 0, 0)
                      }).start(),
                      (e.getChildByName("scrollViewLine").getChildByName("view").getChildByName("content").x = -260),
                      (i.gameListLineChange = -1.5),
                      (e.getChildByName("scrollView").getChildByName("view").getChildByName("content").y = 400),
                      (i.gameListChange = 1.5),
                      (this.node.getChildByName("button").y = (-cc.winSize.height / 2 + 100) / this.node.scale),
                      [2]);
                  });
                });
              }),
              (t.prototype.onBtnClose = function() {
                var e = this;
                if ("undefined" != typeof qq) return (
                  (this.node.active = !1), void(this._show_resolve && (this._show_resolve(), (this._show_resolve = null))));
                var t = this.node.getChildByName("wall");
                (cc.tween(t).by(0.2, {
                  position: cc.v3(-320, 0, 0)
                }).call(function() {
                  ((e.node.active = !1), cc.Canvas.instance.node.emit("hide-wall", e._show_type), e._onClose && (e._onClose(), (e._onClose = null)));
                }).start(), this.hideNative());
              }),
              (t.prototype.start = function() {}),
              (t.prototype.update = function(e) {
                if (this.node && this.node.active) {
                  ((this._hide_dt += e), this._hide_dt > 1 && (c.wechat.hideCustomBanner(), (this._hide_dt = 0)));
                  var t = this.node.getChildByName("wall");
                  if (t) {
                    if (u > 0) {
                      var n = t.getChildByName("scrollViewLine").getChildByName("view").getChildByName("content");
                      ((n.x += i.gameListLineChange), n.x < 260 - n.width && i.gameListLineChange < 0 && (i.gameListLineChange = -i.gameListLineChange), n.x > -260 && i.gameListLineChange > 0 && (i.gameListLineChange = -i.gameListLineChange));
                    }
                    var a = t.getChildByName("scrollView").getChildByName("view").getChildByName("content");
                    ((a.y += i.gameListChange), a.y < 400 && i.gameListChange < 0 && (i.gameListChange = -i.gameListChange), a.y > a.height - 400 && i.gameListChange > 0 && (i.gameListChange = -i.gameListChange));
                  }
                }
              }),
              (t.game_list_line = null),
              (t.game_list = null),
              (t.gameListLineChange = 0),
              (t.gameListChange = 0),
              (t._req_game_list_line = null),
              (t._req_game_list = null),
              (t.isShow = !1),
              (t._init_state = ""),
              (t.native_grid_adIds = null),
              (t.native_grid_ad = null),
              (t.small_native = !0),
              (i = o([h], t)));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
