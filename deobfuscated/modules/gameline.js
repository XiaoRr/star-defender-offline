// module: gameline
// deps: {"./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f3a9bOqdmxDV7ShGqXLCHVM", "gameline");
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
          h = e("./libwechat"),
          u = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.content = null), (t.game_list = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                return r(this, void 0, void 0, function() {
                  var e, t;
                  return s(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return [4, h.wechat.requestGameListNew(6)];
                      case 1:
                        return (
                          (e = i.sent()) && e[1] && ((this.game_list = e), this.show(this.game_list)), this.node.parent && (t = this.node.parent.getContentSize().width) && 640 != t && (this.node.scale = t / 640),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.onEnable = function() {
                ((this.node.zIndex = 1e4), this.content.setContentSize(890, this.content.getContentSize().height, ));
                for (var e = 0; e < 6; e++)
                  (this.content.children[e].stopAllActions(),
                    (this.content.children[e].x = 150 * e - 375));
                var t = function(e) {
                    var t = i.content.children[e];
                    cc.tween(t).repeatForever(cc.tween().delay(1.5).by(0.5, {
                      position: cc.v2(-150, 0)
                    }).delay(0.5).call(function() {
                      t.x <= -675 && (t.x = 225);
                    }), ).start();
                  },
                  i = this;
                for (e = 0; e < 6; e++) t(e);
              }),
              (t.prototype.show = function(e) {
                for (var t = 0; t < 6; t++) this.content.children[t] && e[t] && this.content.children[t].getComponent("gameIcon").setData(e[t]);
              }),
              (t.showLine = function() {
                var e = this;
                if ("undefined" != typeof tt) return !0;
                console.log("------------------showLine native", !!this.native_ad, this.native_ad_loaded, );
                var t = parseInt(h.wechat.getConfig("ppgame_rate"));
                isNaN(t) && (t = 0);
                var i = Math.floor(100 * Math.random()) + 1;
                return i > t && this.native_ad && this.native_ad_loaded ? (console.log("rand", i, t), this.native_ad.show().catch(function(i) {
                  (i && "the advertisement has shown" == i.errMsg) || ((e.native_ad = null), t > 0 && cc.Canvas.instance.node.emit("show-line"));
                }), !0) : 0 == t || void 0;
              }),
              (t.hideLine = function() {
                this.native_ad && this.native_ad_loaded && this.native_ad.hide();
              }),
              (t.init = function(e, t) {
                var i = this;
                if ("undefined" == typeof wx || void 0 === wx.createCustomAd) {
                  if ("undefined" != typeof wx && void 0 !== wx.createBlockAd && void 0 !== wx.getSystemInfoSync && !this.native_ad) {
                    var n = h.wechat.wxCoordProjection(t || new cc.Rect(0, 0, 0, 0), ),
                      a = wx.getSystemInfoSync().screenWidth;
                    ((this.native_ad = qq.createBlockAd({
                      adUnitId: e,
                      size: 5,
                      orientation: "landscape",
                      style: {
                        left: 16,
                        top: n.top
                      },
                    })), console.log("#################### block ad top", n.top, e, ), this.native_ad.onLoad(function() {
                      ((i.native_ad_loaded = !0), console.log("#################### block ad onLoad"));
                    }), this.native_ad.onResize(function(e) {
                      (console.log("#################### block ad onResize", e, ),
                        (i.native_ad.style.left = (a - e.width) / 2));
                    }), this.native_ad.onError(function(e) {
                      console.error("block ad error", e);
                    }));
                  }
                  return !1;
                }
                if (!this.native_ad && void 0 !== wx.getSystemInfoSync) {
                  n = h.wechat.wxCoordProjection(t || new cc.Rect(0, 0, 0, 0));
                  var o = wx.getSystemInfoSync().screenWidth;
                  ((this.native_ad = wx.createCustomAd({
                    adUnitId: e,
                    adIntervals: 30,
                    style: {
                      top: n.top,
                      left: (o - 360) / 2
                    },
                  })), console.log("--------------------native line top", n.top), this.native_ad.onLoad(function() {
                    ((i.native_ad_loaded = !0), console.log("=======================native line ad onLoad", ));
                  }));
                }
              }),
              (t.load = function() {
                return new Promise(function(e, t) {
                  cc.loader.loadRes("gameline/gameline", cc.Prefab, function(i, n) {
                    i ? t(i) : e(cc.instantiate(n));
                  }, );
                });
              }),
              (t.native_ad = null),
              (t.native_ad_loaded = !1), o([d(cc.Node)], t.prototype, "content", void 0), o([l], t));
          })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
