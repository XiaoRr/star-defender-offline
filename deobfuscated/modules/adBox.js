// module: adBox
// deps: {"./bannerAd":"bannerAd","./libcocos":"libcocos","./libwechat":"libwechat","./libwechat_review":"libwechat_review"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c3caa6knmNBxrOk/4aNZIHU", "adBox");
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
          d = (c.property, e("./libcocos")),
          h = e("./libwechat"),
          u = e("./libwechat_review"),
          p = e("./bannerAd"),
          f = (function(e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.event_handle = null),
                (t._native_ad_active = !1),
                (t.tips_label = null),
                (t.unlock_btn_node = null),
                (t._maxProgress = 100),
                (t._boxProgress = 0),
                (t._adOutValue = 0),
                (t._bannerOut = !1),
                (t._close_resolve = null),
                (t._video_valid = !1), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onEnable = function() {
                ((this.event_handle = h.wechat.on(h.WX_EVT_GAME_SHOW, this.onShow, this, )),
                  (i.isShow = !0));
              }),
              (t.prototype.onDisable = function() {
                (h.wechat.off(h.WX_EVT_GAME_SHOW, this.event_handle, this),
                  (i.isShow = !1), this._close_resolve && this._close_resolve(),
                  (this._close_resolve = null));
              }),
              (t.prototype.onShow = function() {
                h.wechat.hideBannerAd();
              }),
              (t.checkAdBox = function(e) {
                void 0 === e && (e = 1);
                var t = h.wechat.getConfig("ad_box"),
                  i = void 0 === t ? 1 : parseInt(t);
                return 1 == e ? (this.pop_counter++, 1 == i || (i > 0 && this.pop_counter % i == 1)) : !!i;
              }),
              (t.checkStartAdBox = function() {
                return !(u.wechat_review.isReview || this.auto_poped || !h.wechat.getConfig("start_ad_box") || ((this.auto_poped = !0), 0));
              }),
              (t.prototype.start = function() {
                this.node.getChildByName("adButton").on(cc.Node.EventType.TOUCH_END, this.boxTouch, this);
                var e = this.node.getChildByName("adButton").children[0];
                ((e.scale = 0.7), cc.tween(e).repeatForever(cc.tween().to(0.1, {
                  scale: 0.77
                }, {
                  easing: "sineOut"
                }).to(0.15, {
                  scale: 0.7
                }, {
                  easing: "sineIn"
                }), ).start(), this.node.getChildByName("bgNode").on("click", this.onClose, this), this.tips_label || (this.tips_label = this.node.getChildByName("tips_label")), cc.tween(this.tips_label).repeatForever(cc.tween().to(0.5, {
                  opacity: 150
                }).to(0.5, {
                  opacity: 255
                }), ).start());
              }),
              (t.prototype.adBoxShow = function(e) {
                return (void 0 === e && (e = null), r(this, void 0, void 0, function() {
                  var e,
                    t,
                    n,
                    a,
                    o,
                    r,
                    c,
                    l,
                    d,
                    u,
                    f = this;
                  return s(this, function() {
                    if (
                      ((e = h.wechat.wxCoordProjection(this.node.getChildByName("banner"), )), p.bannerAd.setTagTop("hb", e.top), i._native_ad || "undefined" == typeof wx || void 0 === window["adunit-line-adbox"] || ((t = wx.createCustomAd({
                            adUnitId: window["adunit-line-hb"],
                            adIntervals: 30,
                            style: {
                              top: e.top,
                              left: (h.wechat.getSystemInfo().screenWidth - 360) / 2,
                            },
                          })),
                          (i._native_ad = t), t.onLoad(function() {
                            (console.log("hb line banner loaded"), f.showNativeAd());
                          })),
                        (this._video_valid = !1), setTimeout(function() {
                          f.preloadRewardVideoAd();
                        }, 2e3),
                        (this._boxProgress = 35), this.setProgress(),
                        (this.node.getChildByName("adButton").active = !0),
                        (this.node.getChildByName("boxNode").active = !0),
                        (this.node.getChildByName("boxNodeOpen").active = !1), this.tips_label || (this.tips_label = this.node.getChildByName("tips_label")),
                        (this.node.getChildByName("enterProgress").active = !0),
                        (this.tips_label.active = !1),
                        (this.node.zIndex = 10002),
                        (this.node.active = !0),
                        (n = cc.winSize.width),
                        (a = cc.winSize.height),
                        (n /= this.node.scale),
                        (a /= this.node.scale), this.node.getChildByName("bgNode").setContentSize(n, a), i._show_counter++,
                        (o = this.node.getChildByName("adButton")), 2 == h.wechat.getConfig("ad_box_type"))) {
                      switch (
                        ((r = h.wechat.getConfig("ad_box_button_position", ) || {
                            type: "bottom",
                            y: 0.1
                          }),
                          (c = r.type || "center"),
                          (l = r.x || 0),
                          (d = r.y || 0), l > -1 && l < 1 && (l *= cc.winSize.width), d > -1 && d < 1 && (d *= cc.winSize.height), c)) {
                        case "center":
                          break;
                        case "bottom":
                          d += -cc.winSize.height / 2;
                          break;
                        case "right":
                          l += cc.winSize.width / 2;
                      }
                      (console.log("-----------------ad box button postion", r, ),
                        (l /= this.node.scale),
                        (d /= this.node.scale), o.setPosition(cc.v2(l, d)));
                    } else((u = h.wechat.getConfig("button_position")) || (u = 1), 1 == u || i._show_counter % u == 1 ? (o.y = -a / 2 + 90 / this.node.scale) : (o.y = this.node.getChildByName("enterProgress").y - 100));
                    return (
                      (this._bannerOut = !1),
                      (this._adOutValue = this.randomNum(
                        (1 * this._maxProgress) / 2,
                        (3 * this._maxProgress) / 5, )),
                      (this._native_ad_active = !1), this.hideNativeAd(), h.wechat.showBannerAd("hb").catch(function() {
                        (console.log("fail to show banner of hb page"),
                          (f._native_ad_active = !0), f.showNativeAd());
                      }),
                      [
                        2,
                        new Promise(function(e) {
                          f._close_resolve = e;
                        }),
                      ]);
                  });
                }));
              }),
              (t.prototype.preloadRewardVideoAd = function() {
                var e = this;
                h.wechat.loadRewardedVideoAd().then(function() {
                  ((e._video_valid = !0), console.log("rewardVideoAd loaded"));
                }).catch(function(t) {
                  "rewarded video ad is showing" === t ? setTimeout(function() {
                    e.preloadRewardVideoAd();
                  }, 1e3) : console.log("fail to load rewardVideoAd", t);
                });
              }),
              (t.prototype.showNativeAd = function() {
                var e = this;
                console.log("hb showNativeAd", !!i._native_ad, this.node.isValid, this.node.active, this._native_ad_active, );
                var t = i._native_ad;
                t && (this.node.isValid && this.node.active && this._native_ad_active ? t.show().then(function() {
                  (e.node.isValid && e.node.active && e._native_ad_active) || t.hide();
                }) : t.isShow() && t.hide());
              }),
              (t.prototype.hideNativeAd = function() {
                ((this._native_ad_active = !1), i._native_ad && i._native_ad.isShow() && i._native_ad.hide());
              }),
              (t.prototype.onVideoShow = function() {
                ((this._boxProgress = this._maxProgress), this.setProgress(),
                  (this.node.getChildByName("adButton").active = !1),
                  (this.node.getChildByName("boxNode").active = !1),
                  (this.node.getChildByName("boxNodeOpen").active = !0), this.node.getChildByName("boxNodeOpen").runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1)), ));
              }),
              (t.prototype.boxTouch = function() {
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    i = this;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        if (
                          (this.node.getChildByName("boxNode").runAction(cc.sequence(cc.rotateTo(0.05, 10), cc.rotateTo(0.05, -10), cc.rotateTo(0.05, 0), ), ),
                            (this._boxProgress += 10), !(this._boxProgress >= this._adOutValue) || this._bannerOut)) return [3, 13];
                        switch (
                          ((this._bannerOut = !0), h.wechat.getConfig("ad_box_type"))) {
                          case 3:
                            return [3, 1];
                          case 2:
                            return [3, 5];
                        }
                        return [3, 10];
                      case 1:
                        return [4, h.wechat.showCustomBanner("ad_box")];
                      case 2:
                        return n.sent() ? [3, 4] : (h.wechat.hideCustomBanner(),
                          [
                            4,
                            h.wechat.showBannerAd("hb2").catch(function() {
                              return r(i, void 0, void 0, function() {
                                return s(this, function(e) {
                                  switch (e.label) {
                                    case 0:
                                      return [
                                        4,
                                        h.wechat.startRewardedVideoAd(),
                                      ];
                                    case 1:
                                      return (e.sent(), [2]);
                                  }
                                });
                              });
                            }),
                          ]);
                      case 3:
                        (n.sent(), (n.label = 4));
                      case 4:
                        return [3, 12];
                      case 5:
                        return (e = !this._video_valid) ? [3, 7] : [4, h.wechat.startRewardedVideoAd()];
                      case 6:
                        ((e = !n.sent()), (n.label = 7));
                      case 7:
                        return e ? [
                          4,
                          h.wechat.showBannerAd("hb2").catch(function() {
                            return r(i, void 0, void 0, function() {
                              return s(this, function() {
                                return (h.wechat.showCustomBanner("ad_box"),
                                  [2]);
                              });
                            });
                          }),
                        ] : [3, 9];
                      case 8:
                        (n.sent(), (n.label = 9));
                      case 9:
                        return [3, 12];
                      case 10:
                        return [
                          4,
                          h.wechat.showBannerAd("hb2").catch(function() {
                            return r(i, void 0, void 0, function() {
                              var e;
                              return s(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return (e = !this._video_valid) ? [3, 2] : [4, h.wechat.startRewardedVideoAd()];
                                  case 1:
                                    ((e = !t.sent()), (t.label = 2));
                                  case 2:
                                    return (e && h.wechat.showCustomBanner("ad_box"),
                                      [2]);
                                }
                              });
                            });
                          }),
                        ];
                      case 11:
                        return (n.sent(), [3, 12]);
                      case 12:
                        ((this._boxProgress = this._maxProgress), setTimeout(function() {
                            ((i._boxProgress = i._maxProgress), i.setProgress(),
                              (i.node.getChildByName("adButton").active = !1),
                              (i.node.getChildByName("boxNode").active = !1),
                              (i.node.getChildByName("boxNodeOpen").active = !0), i.node.getChildByName("boxNodeOpen").runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1), ), ));
                          }, 500),
                          (t = this), this.node.runAction(cc.sequence(cc.delayTime(2.2), cc.callFunc(function() {
                            ((t.tips_label.active = !0),
                              (t.node.getChildByName("enterProgress", ).active = !1));
                          }), ), ),
                          (n.label = 13));
                      case 13:
                        return (this.setProgress(), [2]);
                    }
                  });
                });
              }),
              (t.prototype.onClose = function() {
                this.node.getChildByName("tips_label").active && (cc.Canvas.instance.node.emit("hideBanner"), console.log("send banner hide event"),
                  (this.node.active = !1), this.node.removeFromParent(), cc.Canvas.instance.node.emit("show-continue"));
              }),
              (t.prototype.update = function() {
                this._boxProgress > 0.5 && this._boxProgress < this._maxProgress ? ((this._boxProgress -= 0.5), this.setProgress()) : this._boxProgress < this._maxProgress && ((this._boxProgress = 0), this.setProgress());
              }),
              (t.prototype.setProgress = function() {
                this.node.getChildByName("enterProgress").getComponent(cc.ProgressBar).progress = this._boxProgress / this._maxProgress;
              }),
              (t.prototype.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
              }),
              (t.load = function() {
                return new Promise(function(e, t) {
                  d.cocos.loadRes("adBox/adBox", cc.Prefab).then(function(t) {
                    e(cc.instantiate(t));
                  }).catch(function(e) {
                    t(e);
                  });
                });
              }),
              (t._native_ad = null),
              (t.isShow = !1),
              (t.pop_counter = 0),
              (t.auto_poped = !1),
              (t._show_counter = 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
