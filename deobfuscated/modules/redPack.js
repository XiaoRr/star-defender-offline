// module: redPack
// deps: {"./bannerAd":"bannerAd","./libcocos":"libcocos","./libwechat":"libwechat","./redPackIcon":"redPackIcon"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "58f77Vuv8RNzY3PYa1voDex", "redPack");
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
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.RedPackData = void 0));
        var c = e("./bannerAd"),
          l = e("./libcocos"),
          d = e("./libwechat"),
          h = e("./redPackIcon"),
          u = cc._decorator,
          p = u.ccclass,
          f = (u.property, "https://xyx.p8games.com/wxgame/redpack");

        function g() {
          return Math.random().toString(36).slice(-8);
        }

        function y(e, t) {
          return e + Math.floor(Math.random() * (t - e + 1));
        }

        function m(e, t, i, n, a) {
          return (void 0 === t && (t = "get"), void 0 === i && (i = null), void 0 === n && (n = {}), void 0 === a && (a = ""), new Promise(function(o, r) {
            var s = new XMLHttpRequest();
            for (var c in (s.open(t, e, !0), (s.responseType = a), n)) s.setRequestHeader(c, n[c]);
            ((s.onload = function() {
                s.status >= 200 && s.status < 300 ? o(JSON.parse(s.response)) : r({
                  err: "XHR_RES_ERROR"
                });
              }),
              (s.onerror = function() {
                r({
                  err: "XHR_REQ_ERROR"
                });
              }), s.send(i));
          }));
        }
        var _ = [100, 500, 1e3, 2e3, 5e3, 1e4],
          v = [20, 100, 200, 400, 1e3, 2e3],
          b = cc.sys.platform === cc.sys.WECHAT_GAME,
          w = (function() {
            function e() {
              ((this.redpack_page = null),
                (this.auto_poped = !1),
                (this._openid = ""),
                (this._balance = 0),
                (this._server_diff_time = 0),
                (this._hb_time = 0),
                (this._vd_count = 0),
                (this.logined = !1),
                (this._withdraw_time = 0));
              var e = parseInt(cc.sys.localStorage.getItem("pp_planes_vd_count"), );
              isNaN(e) || (this._vd_count = e);
              var t = parseInt(cc.sys.localStorage.getItem("pp_planes_hb_time"), );
              isNaN(t) || (this._hb_time = t);
            }
            return (Object.defineProperty(e, "Inst", {
                get: function() {
                  return (this._inst || (this._inst = new e()), this._inst);
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(e.prototype, "openid", {
                get: function() {
                  return this._openid;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(e.prototype, "balance", {
                get: function() {
                  return this._balance;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(e.prototype, "vd_count", {
                get: function() {
                  return this._vd_count;
                },
                set: function(e) {
                  ((this._vd_count = e), cc.sys.localStorage.setItem("pp_planes_vd_count", this._vd_count, ));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.hongbaoReq = function(e) {
                return v[e];
              }),
              (e.hongbaoAmount = function(e) {
                return _[e];
              }), Object.defineProperty(e.prototype, "hb_time", {
                set: function(e) {
                  ((this._hb_time = e), cc.sys.localStorage.setItem("pp_planes_hb_time", this._hb_time, ));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.wxlogin = function() {
                return new Promise(function(e, t) {
                  wx.login({
                    success: function(t) {
                      e({
                        code: t.code
                      });
                    },
                    fail: function(e) {
                      t({
                        err: e
                      });
                    },
                  });
                });
              }),
              (e.prototype.time = function() {
                return (Math.floor(new Date().getTime() / 1e3) + this._server_diff_time);
              }),
              (e.prototype.login = function() {
                return r(this, void 0, void 0, function() {
                  var e, t, i, n, a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return !b || this.logined ? [2] : [4, this.wxlogin()];
                      case 1:
                        return (e = r.sent()).code ? [
                          4,
                          m(f + "/login?appid=" + d.wechat.appId + "&code=" + e.code + "&nonce=" + g(), ),
                        ] : (console.error("wxlogin fail", e), [2]);
                      case 2:
                        if (
                          ((t = r.sent()), console.log("hb login resp", t), t.errmsg || t.err)) return [2, t];
                        if (!this.logined) {
                          if ((i = d.wechat.getConfig("hongbao_req")))
                            for (a = 0; a < 6; a++)
                              ((o = parseInt(i[a])), isNaN(o) || (v[a] = o));
                          if ((n = d.wechat.getConfig("hongbao_list")))
                            for (a = 0; a < 6; a++)
                              ((o = parseInt(n[a])), isNaN(o) || (_[a] = 100 * o));
                        }
                        return (
                          (this.logined = !0),
                          (this._server_diff_time = t.time - Math.floor(new Date().getTime() / 1e3)),
                          (this._openid = t.openid),
                          (this._balance = t.balance), this.redpack_page && (this.redpack_page.balance = this._balance),
                          [2, t]);
                    }
                  });
                });
              }),
              (e.prototype.reqBalance = function() {
                return r(this, void 0, void 0, function() {
                  var e;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (console.log("reqBalance", this._openid), this._openid ? [
                          4,
                          m(f + "/balance?openid=" + this._openid + "&time=" + this.time() + "&nonce=" + g(), ),
                        ] : [2]);
                      case 1:
                        return (
                          (e = t.sent()).errmsg || e.err || ((this._balance = e.balance), this.redpack_page && (this.redpack_page.balance = this._balance)), console.log("reqBalance res", e),
                          [2, e]);
                    }
                  });
                });
              }),
              (e.prototype.randomAmount = function() {
                var e = y(1, 5),
                  t = d.wechat.getConfig("hongbao");
                if (t) {
                  var i = t.split(","),
                    n = parseInt(i[0]),
                    a = parseInt(i[1]);
                  !isNaN(n) && !isNaN(a) && n <= a && n > 0 && (e = y(n, a));
                }
                return e;
              }),
              (e.prototype.addHongbao = function(e) {
                return r(this, void 0, void 0, function() {
                  var t;
                  return s(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return this._openid ? [
                          4,
                          m(f + "/addredpack?openid=" + this._openid + "&amount=" + e + "&time=" + this.time() + "&nonce=" + g(), ),
                        ] : [2, 0];
                      case 1:
                        return (t = i.sent()).err || t.errmsg ? (console.log("fail to add hongbao", t), t.errmsg && wx.showToast({
                            title: t.errmsg,
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, 0]) : ((this._balance = t.balance), this.redpack_page && (this.redpack_page.balance = this._balance),
                          [2, e]);
                    }
                  });
                });
              }),
              (e.prototype.withdraw = function(e) {
                return r(this, void 0, void 0, function() {
                  var t, i;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return this._openid ? ((t = _[e - 1]), console.log("withdraw", e, t), t > this._balance ? (wx.showToast({
                            title: "余额不足",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !1]) : this._hb_time && this._hb_time > new Date().getTime() ? (console.log("next", this._hb_time), wx.showToast({
                            title: "每天只能提现一次，明天再提吧",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !1]) : e > 2 ? (wx.showToast({
                            title: "系统繁忙，请稍后再试",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !1]) : this._withdraw_time > new Date().getTime() - 1e4 ? (wx.showToast({
                            title: "系统繁忙，请稍后再试",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2]) : ((this._withdraw_time = new Date().getTime()),
                          [
                            4,
                            m(f + "/withdraw?appid=" + d.wechat.appId + "&openid=" + this._openid + "&amount=" + t + "&time=" + this.time() + "&nonce=" + g(), ),
                          ])) : [2, !1];
                      case 1:
                        return (i = n.sent()).err || i.errmsg ? i.errmsg ? (wx.showToast({
                            title: i.errmsg,
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !1]) : [2] : ((this._balance = i.balance),
                          (this.vd_count = this._vd_count - v[e - 1]), this.redpack_page && ((this.redpack_page.balance = this._balance), this.redpack_page.set_vd_count(this._vd_count)), wx.showToast({
                            title: "提现成功",
                            icon: "none",
                            duration: 2e3,
                          }),
                          (this.hb_time = new Date().getTime() + 1e3 * i.next),
                          [2, !0]);
                    }
                  });
                });
              }),
              (e.prototype.withdraw_other = function(e, t, i) {
                return r(this, void 0, void 0, function() {
                  var n;
                  return s(this, function(a) {
                    switch (a.label) {
                      case 0:
                        return this._openid ? this._withdraw_time > new Date().getTime() - 1e4 ? (wx.showToast({
                            title: "系统繁忙，请稍后再试",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2]) : ((this._withdraw_time = new Date().getTime()),
                          [
                            4,
                            m(f + "/withdraw?appid=" + d.wechat.appId + "&dst_openid=" + e + "&openid=" + t + "&amount=" + i + "&time=" + this.time() + "&nonce=" + g(), ),
                          ]) : [2, !1];
                      case 1:
                        return (n = a.sent()).err || n.errmsg ? n.errmsg ? (wx.showToast({
                            title: n.errmsg,
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !1]) : [2] : (wx.showToast({
                            title: "提现成功",
                            icon: "none",
                            duration: 2e3,
                          }),
                          [2, !0]);
                    }
                  });
                });
              }),
              (e._inst = null), e);
          })();
        i.RedPackData = w;
        var C = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.open_node = null),
              (t.opened_node = null),
              (t.opened_open_node = null),
              (t.opened_get_node = null),
              (t.unlock_btn_node = null),
              (t.amount_label = null),
              (t.progressBar = null),
              (t._native_ad_active = !1),
              (t._amount = 0),
              (t._video_valid = !1),
              (t._maxProgress = 100),
              (t._boxProgress = 0),
              (t._adOutValue = 0),
              (t._bannerOut = !1),
              (t.hongbao_btn = null),
              (t._close_resolve = null), t);
          }
          var i;
          return (a(t, e),
            (i = t),
            (t.prototype.init = function() {
              var e = this;
              if (!this.open_node) {
                ((this.open_node = this.node.getChildByName("open")),
                  (this.opened_node = this.node.getChildByName("opened")),
                  (this.opened_get_node = this.opened_node.getChildByName("opened").getChildByName("get")),
                  (this.opened_open_node = this.opened_node.getChildByName("opened").getChildByName("open")),
                  (this.unlock_btn_node = this.open_node.getChildByName("btn_unlock")),
                  (this.amount_label = this.opened_node.getChildByName("opened").getChildByName("amount").getComponent(cc.Label)),
                  (this.progressBar = this.open_node.getChildByName("progress").getComponent(cc.ProgressBar)));
                var t = d.wechat.wxCoordProjection(this.node.getChildByName("banner"), );
                if (
                  (c.bannerAd.setTagTop("hb", t.top), !i._native_ad && "undefined" != typeof wx && void 0 !== window["adunit-line-adbox"])) {
                  var n = wx.createCustomAd({
                    adUnitId: window["adunit-line-hb"],
                    adIntervals: 30,
                    style: {
                      top: t.top,
                      left: (d.wechat.getSystemInfo().screenWidth - 360) / 2,
                    },
                  });
                  ((i._native_ad = n), n.onLoad(function() {
                    (console.log("hb line banner loaded"), e.showNativeAd());
                  }));
                }
              }
            }),
            (t.prototype.start = function() {
              var e = this;
              (this.init(), this.unlock_btn_node.on(cc.Node.EventType.TOUCH_END, this.boxTouch, this, ));
              var t = this.opened_open_node.getChildByName("btn_open"),
                i = !0;
              (t.on("click", function() {
                i && ((i = !1), d.wechat.showRewardedVideoAd().then(function() {
                  return r(e, void 0, void 0, function() {
                    var e;
                    return s(this, function(t) {
                      switch (t.label) {
                        case 0:
                          return [4, w.Inst.addHongbao(this._amount)];
                        case 1:
                          return (
                            (e = t.sent()) > 0 ? ((this.amount_label.string = e / 100 + "元"),
                              (this.opened_open_node.active = !1),
                              (this.opened_get_node.active = !0), w.Inst.vd_count++) : (cc.Canvas.instance.node.emit("hideBanner"),
                              (this.node.active = !1), this.node.removeFromParent(), cc.Canvas.instance.node.emit("show-continue", )),
                            (i = !0),
                            [2]);
                      }
                    });
                  });
                }).catch(function(e) {
                  ((i = !0), "undefined" != typeof wx && e !== d.ERR_MSG_USER_CANCELLED && wx.showToast({
                    title: "视频加载失败，请稍后再试",
                    icon: "none",
                    duration: 2e3,
                  }));
                }));
              }), this.opened_open_node.getChildByName("btn_close").on("click", function() {
                (cc.Canvas.instance.node.emit("hideBanner"), console.log("send banner hide event"),
                  (e.node.active = !1), e.node.removeFromParent(), cc.Canvas.instance.node.emit("show-continue"));
              }));
              var n = this.opened_get_node.getChildByName("btn_get");
              (n.on("click", function() {
                if (
                  (cc.Canvas.instance.node.emit("hideBanner"), console.log("send banner hide event"), cc.Canvas.instance.node.emit("show-continue"),
                    (e.opened_node.getChildByName("adTitle").active = !1), e.hongbao_btn && e.hongbao_btn.isValid)) {
                  var t = e.hongbao_btn.convertToWorldSpaceAR(cc.v2(0, 0));
                  (console.log("pos", t, e.node.parent.convertToNodeSpaceAR(t)),
                    (e.node.getChildByName("bgNode").active = !1), cc.tween(e.node).to(0.3, {
                      scale: 0.15
                    }).call(function() {}).to(0.8, {
                      position: e.node.parent.convertToNodeSpaceAR(t),
                    }).call(function() {
                      ((e.node.active = !1), e.node.removeFromParent(), e.hongbao_btn.getComponent(h.default).refresh(), cc.tween(e.hongbao_btn).to(0.1, {
                        scale: 1.05
                      }).to(0.1, {
                        scale: 1
                      }).start());
                    }).start());
                } else((e.node.getChildByName("bgNode").active = !1),
                  (e.node.active = !1), e.node.removeFromParent());
              }), cc.tween(this.unlock_btn_node.children[0]).repeatForever(cc.tween().to(0.1, {
                scale: 1.1
              }, {
                easing: "sineOut"
              }).to(0.15, {
                scale: 1
              }, {
                easing: "sineIn"
              }), ).start(), cc.tween(n).repeatForever(cc.tween().to(0.3, {
                scale: 1.1
              }, {
                easing: "sineOut"
              }).to(0.4, {
                scale: 0.95
              }, {
                easing: "sineIn"
              }), ).start(), cc.tween(t).repeatForever(cc.tween().to(0.3, {
                scale: 1.1
              }, {
                easing: "sineOut"
              }).to(0.4, {
                scale: 0.95
              }, {
                easing: "sineIn"
              }), ).start());
            }),
            (t.prototype.onEnable = function() {
              i.isShow = !0;
            }),
            (t.prototype.onDisable = function() {
              ((i.isShow = !1), this.hideNativeAd(), this._close_resolve && this._close_resolve(),
                (this._close_resolve = null));
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
            (t.prototype.onShow = function() {
              d.wechat.hideBannerAd();
            }),
            (t.prototype.show = function() {
              return r(this, void 0, void 0, function() {
                var e,
                  t,
                  n,
                  a,
                  o,
                  r,
                  c,
                  l,
                  u = this;
                return s(this, function() {
                  if (
                    (this.init(),
                      (this._boxProgress = 35), this.setProgress(),
                      (this.hongbao_btn = h.default.inst),
                      (this.open_node.active = !0),
                      (this.opened_node.active = !1),
                      (this.node.zIndex = 10002),
                      (this.node.active = !0),
                      (e = cc.winSize.width),
                      (t = cc.winSize.height),
                      (e /= this.node.scale),
                      (t /= this.node.scale),
                      ((n = this.node.getChildByName("bgNode")).active = !0), n.setContentSize(e, t),
                      (this._bannerOut = !1),
                      (this._adOutValue = this.randomNum(
                        (2 * this._maxProgress) / 3,
                        (4 * this._maxProgress) / 5, )), i._show_counter++,
                      (this._video_valid = !1), setTimeout(function() {
                        u.preloadRewardVideoAd();
                      }, 2e3), 2 == d.wechat.getConfig("ad_box_type"))) {
                    switch (
                      ((a = d.wechat.getConfig("ad_box_button_position") || {
                          type: "bottom",
                          y: 0.1,
                        }),
                        (o = a.type || "center"),
                        (r = a.x || 0),
                        (c = a.y || 0), r > -1 && r < 1 && (r *= cc.winSize.width), c > -1 && c < 1 && (c *= cc.winSize.height), o)) {
                      case "center":
                        break;
                      case "bottom":
                        c += -cc.winSize.height / 2;
                        break;
                      case "right":
                        r += cc.winSize.width / 2;
                    }
                    (console.log("-----------------ad box button postion", a),
                      (r /= this.node.scale),
                      (c /= this.node.scale), this.unlock_btn_node.setPosition(cc.v2(r, c)));
                  } else((l = d.wechat.getConfig("button_position")) || (l = 1), 1 == l || i._show_counter % l == 1 ? (this.unlock_btn_node.y = -t / 2 + 135 / this.node.scale) : (this.unlock_btn_node.y = this.progressBar.node.y - 40 - this.unlock_btn_node.getContentSize().height / 2));
                  return (
                    (this._native_ad_active = !1), this.hideNativeAd(), d.wechat.showBannerAd("hb").catch(function() {
                      (console.log("fail to show banner of hb page"),
                        (u._native_ad_active = !0), u.showNativeAd());
                    }),
                    [
                      2,
                      new Promise(function(e) {
                        u._close_resolve = e;
                      }),
                    ]);
                });
              });
            }),
            (t.prototype.preloadRewardVideoAd = function() {
              var e = this;
              d.wechat.loadRewardedVideoAd().then(function() {
                ((e._video_valid = !0), console.log("rewardVideoAd loaded"));
              }).catch(function(t) {
                "rewarded video ad is showing" === t ? setTimeout(function() {
                  e.preloadRewardVideoAd();
                }, 1e3) : console.log("fail to load rewardVideoAd", t);
              });
            }), Object.defineProperty(t.prototype, "free_hongbao", {
              get: function() {
                var e = parseInt(cc.sys.localStorage.getItem("hongbao_free_count"), );
                return isNaN(e) ? 0 : e;
              },
              set: function(e) {
                cc.sys.localStorage.setItem("hongbao_free_count", e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.boxTouch = function() {
              return r(this, void 0, void 0, function() {
                var e,
                  t = this;
                return s(this, function(i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (this.open_node.getChildByName("boxNodeOpen").runAction(cc.sequence(cc.rotateTo(0.05, 10), cc.rotateTo(0.05, -10), cc.rotateTo(0.05, 0), ), ),
                          (this._boxProgress += 10), !(this._boxProgress >= this._adOutValue) || this._bannerOut)) return [3, 13];
                      switch (
                        ((this._boxProgress = this._maxProgress),
                          (this._bannerOut = !0), d.wechat.getConfig("ad_box_type"))) {
                        case 3:
                          return [3, 1];
                        case 2:
                          return [3, 5];
                      }
                      return [3, 10];
                    case 1:
                      return [4, d.wechat.showCustomBanner("ad_box")];
                    case 2:
                      return i.sent() ? [3, 4] : (d.wechat.hideCustomBanner(),
                        [
                          4,
                          d.wechat.showBannerAd("hb2").catch(function() {
                            return r(t, void 0, void 0, function() {
                              return s(this, function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [
                                      4,
                                      d.wechat.startRewardedVideoAd(),
                                    ];
                                  case 1:
                                    return (e.sent(), [2]);
                                }
                              });
                            });
                          }),
                        ]);
                    case 3:
                      (i.sent(), (i.label = 4));
                    case 4:
                      return [3, 12];
                    case 5:
                      return (e = !this._video_valid) ? [3, 7] : [4, d.wechat.startRewardedVideoAd()];
                    case 6:
                      ((e = !i.sent()), (i.label = 7));
                    case 7:
                      return e ? [
                        4,
                        d.wechat.showBannerAd("hb2").catch(function() {
                          return r(t, void 0, void 0, function() {
                            return s(this, function() {
                              return (d.wechat.showCustomBanner("ad_box"),
                                [2]);
                            });
                          });
                        }),
                      ] : [3, 9];
                    case 8:
                      (i.sent(), (i.label = 9));
                    case 9:
                      return [3, 12];
                    case 10:
                      return [
                        4,
                        d.wechat.showBannerAd("hb2").catch(function() {
                          return r(t, void 0, void 0, function() {
                            var e;
                            return s(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return (e = !this._video_valid) ? [3, 2] : [4, d.wechat.startRewardedVideoAd()];
                                case 1:
                                  ((e = !t.sent()), (t.label = 2));
                                case 2:
                                  return (e && d.wechat.showCustomBanner("ad_box"),
                                    [2]);
                              }
                            });
                          });
                        }),
                      ];
                    case 11:
                      return (i.sent(), [3, 12]);
                    case 12:
                      (setTimeout(function() {
                          return r(t, void 0, void 0, function() {
                            var e, t;
                            return s(this, function(i) {
                              switch (i.label) {
                                case 0:
                                  return (
                                    (this._boxProgress = this._maxProgress), this.setProgress(),
                                    (this.open_node.active = !1),
                                    (this._amount = w.Inst.randomAmount()),
                                    (e = parseInt(d.wechat.getConfig("hongbao_free"), )), console.log("free", e, this.free_hongbao), e && this.free_hongbao < e ? (this.free_hongbao++,
                                      (this.opened_node.active = !0),
                                      (this.opened_get_node.active = !1), this.opened_node.getChildByName("opened").runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1), ), ),
                                      [4, w.Inst.addHongbao(this._amount)]) : [3, 2]);
                                case 1:
                                  return (
                                    (t = i.sent()) > 0 ? ((this.amount_label.string = t / 100 + "元"),
                                      (this.opened_open_node.active = !1),
                                      (this.opened_get_node.active = !0), w.Inst.vd_count++) : (cc.Canvas.instance.node.emit("hideBanner", ),
                                      (this.node.active = !1), this.node.removeFromParent(), cc.Canvas.instance.node.emit("show-continue", )),
                                    [3, 3]);
                                case 2:
                                  ((this.opened_node.active = !0),
                                    (this.opened_get_node.active = !1),
                                    (this.opened_open_node.active = !0),
                                    (this.opened_node.getChildByName("adTitle", ).active = !0),
                                    (this.amount_label.string = "???元"), this.opened_node.getChildByName("opened").runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1), ), ),
                                    (this.opened_open_node.getChildByName("tips").getComponent(cc.Label).string = "最高可获得" + (9 * this._amount) / 100 + "元"),
                                    (i.label = 3));
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        }, 500),
                        (i.label = 13));
                    case 13:
                      return (this.setProgress(), [2]);
                  }
                });
              });
            }),
            (t.prototype.onClose = function() {
              (cc.Canvas.instance.node.emit("hideBanner"), console.log("send banner hide event"),
                (this.node.active = !1), this.node.removeFromParent(), cc.Canvas.instance.node.emit("show-continue"));
            }),
            (t.prototype.update = function() {
              this._boxProgress > 0.5 && this._boxProgress < this._maxProgress ? ((this._boxProgress -= 0.5), this.setProgress()) : this._boxProgress < this._maxProgress && ((this._boxProgress = 0), this.setProgress());
            }),
            (t.prototype.setProgress = function() {
              this.progressBar.progress = this._boxProgress / this._maxProgress;
            }),
            (t.prototype.randomNum = function(e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            (t.load = function() {
              return r(this, void 0, void 0, function() {
                return s(this, function() {
                  return [
                    2,
                    new Promise(function(e, t) {
                      l.cocos.loadRes("redpack/redpack", cc.Prefab).then(function(t) {
                        e(cc.instantiate(t));
                      }).catch(function(e) {
                        t(e);
                      });
                    }),
                  ];
                });
              });
            }),
            (t._native_ad = null),
            (t.isShow = !1),
            (t._show_counter = 0),
            (i = o([p], t)));
        })(cc.Component);
        ((i.default = C), cc._RF.pop());
      };
