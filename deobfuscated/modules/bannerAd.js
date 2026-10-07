// module: bannerAd
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7b0e2InzY5JFr83ur/iaTcv", "bannerAd");
        var n = (this && this.__awaiter) || function(e, t, i, n) {
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
          a = (this && this.__generator) || function(e, t) {
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
          (i.bannerAd = void 0),
          (i.bannerAd = new((function() {
            function e() {
              var e = this;
              ((this._refresh_time = 1),
                (this.sysinfo = null),
                (this.top_of_tag = {}),
                (this._inited = !1),
                (this._active = !1),
                (this.current_ad = null),
                (this.next_ad_index = 0),
                (this._style = {
                  blink: 0
                }),
                (this._blinking = 0),
                (this._tag = ""),
                (this.banner_list = []), "undefined" != typeof wx && void 0 !== wx.getSystemInfoSync && ((this.sysinfo = wx.getSystemInfoSync()), setInterval(function() {
                  e.update(0.1);
                }, 100)));
            }
            return (Object.defineProperty(e.prototype, "refresh_time", {
                get: function() {
                  return this._refresh_time;
                },
                set: function(e) {
                  this._refresh_time = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.init = function(e) {
                return n(this, void 0, void 0, function() {
                  var t,
                    i,
                    n,
                    o,
                    r,
                    s,
                    c = this;
                  return a(this, function(l) {
                    switch (l.label) {
                      case 0:
                        if ((console.log("bannerAd init", e), void 0 === e)) return [2];
                        if (("string" == typeof e && (e = [e]), !e.length)) return [2];
                        if (this._inited) return [2];
                        if (((this._inited = !0), "undefined" == typeof wx)) return [2];
                        ((t = this.sysinfo),
                          (i = 0.234375 * t.screenWidth),
                          (n = (i / 9) * 16), "undefined" != typeof tt ? (n = (300 * i) / 104) : "undefined" != typeof qq && ((n = 0.92 * t.screenWidth), (i = (n / 16) * 9)),
                          (o = function(o) {
                            var s;
                            return a(this, function(a) {
                              switch (a.label) {
                                case 0:
                                  return "string" != typeof e[o] ? [3, 2] : ((s = wx.createBannerAd({
                                      adUnitId: e[o],
                                      adIntervals: 30,
                                      style: {
                                        height: i,
                                        width: n,
                                        left: (t.screenWidth - n) / 2,
                                        top: t.screenHeight - i,
                                      },
                                    })), console.log("createBannerAd", e[o]), r.banner_list.push({
                                      index: o,
                                      ad: s,
                                      size: {
                                        width: s.style.realWidth,
                                        height: s.style.realHeight,
                                        valid: !1,
                                      },
                                    }),
                                    (s.my_index = o), s.onLoad(function() {
                                      (console.log("banner " + o + " loaded", s.my_index, ),
                                        (c.banner_list[o].valid = !0));
                                    }), s.onError(function(e) {
                                      (console.log("banner " + o + " error:", e, ),
                                        (c.banner_list[o].valid = !1));
                                    }), s.onResize(function(e) {
                                      e && (s.style.realWidth != e.width && (s.style.realWidth = e.width), s.style.realHeight != e.height && (s.style.realHeight = e.height), c.onResize(s, e));
                                    }),
                                    [
                                      4,
                                      new Promise(function(e) {
                                        setTimeout(function() {
                                          e();
                                        }, 5e3);
                                      }),
                                    ]);
                                case 1:
                                  (a.sent(), (a.label = 2));
                                case 2:
                                  return [2];
                              }
                            });
                          }),
                          (r = this),
                          (s = 0),
                          (l.label = 1));
                      case 1:
                        return s < e.length ? [5, o(s)] : [3, 4];
                      case 2:
                        (l.sent(), (l.label = 3));
                      case 3:
                        return (s++, [3, 1]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }), Object.defineProperty(e.prototype, "active", {
                get: function() {
                  return this._active;
                },
                set: function(e) {
                  this._active != e && (this._active = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.onResize = function(e, t) {
                var i = this.getAds(e);
                i && (i.size = t);
                var n = this.sysinfo,
                  a = t.width;
                (t.height,
                  (e.style.left = (n.windowWidth - a) / 2), i && this.setTop(i));
              }),
              (e.prototype.getAds = function(e) {
                for (var t = 0; t < this.banner_list.length; t++)
                  if (e == this.banner_list[t].ad) return this.banner_list[t];
                return null;
              }),
              (e.prototype.totalValid = function() {
                for (var e = 0, t = 0, i = this.banner_list.length; t < i; t++) this.banner_list[t].valid && e++;
                return e;
              }),
              (e.prototype.getNextAds = function() {
                var e = this.banner_list[this.next_ad_index];
                if (e && e.valid) return e;
                if (
                  (this.next_ad_index++, this.next_ad_index >= this.banner_list.length)) {
                  if (this.totalValid() < 1) return null;
                  this.next_ad_index = 0;
                }
                return this.getNextAds();
              }),
              (e.prototype.setTop = function(e) {
                var t = this.sysinfo,
                  i = e.ad,
                  n = this.top_of_tag[this._tag];
                i.style.top = "number" == typeof n ? n : t.windowHeight - e.size.height;
              }),
              (e.prototype.setTagTop = function(e, t) {
                this.top_of_tag[e] = t;
              }),
              (e.prototype.show = function(e) {
                var t = this;
                return (
                  (this._style = {
                    blink: "blink" == e ? 1 : 0
                  }),
                  (this._blinking = 0),
                  (this._tag = e), this.banner_list.length ? this.active ? (this.current_ad && this.current_ad.is_showed && this.setTop(this.current_ad), Promise.resolve()) : new Promise(function(e, i) {
                    var n = t.getNextAds();
                    if (n) {
                      t.active = !0;
                      var a = n.ad;
                      ((t.current_ad = n), a.show().then(function() {
                        (t.setTop(n),
                          (n.is_showed = !0),
                          (n.show_dt = 0), console.log("banner showed", n.index), t.active ? cc.Canvas.instance.node.emit("on-banner-show", ) : (a.hide(),
                            (n.is_showed = !1), console.log("hide"), n.hide_resolve && (n.hide_resolve(),
                              (n.hide_resolve = null)), cc.Canvas.instance.node.emit("on-banner-hide", )), e());
                      }).catch(function(a) {
                        (console.log("fail to show banner", a),
                          (n.valid = !1), t.active ? i(a) : e());
                      }));
                    } else i("no banner ad");
                  }) : Promise.reject("no banner ad"));
              }),
              (e.prototype.hide = function() {
                var e = this;
                return (console.log("bannerAd.hide", this.active, !!this.current_ad, !!this.current_ad && this.current_ad.is_showed, ), this.active ? ((this.active = !1), this.current_ad ? this.current_ad.is_showed ? (this.current_ad.ad.hide(),
                  (this.current_ad.is_showed = !1), this._refresh_time || this.next_ad_index++, cc.Canvas.instance.node.emit("on-banner-hide"), Promise.resolve()) : new Promise(function(t) {
                  e.current_ad.hide_resolve = t;
                }) : Promise.resolve()) : Promise.resolve());
              }),
              (e.prototype.showAds = function(e) {
                var t = this,
                  i = e.ad;
                i && i.show().then(function() {
                  (t.setTop(e),
                    (e.is_showed = !0), t.active || (i.hide(),
                      (e.is_showed = !1), console.log("hide"), e.hide_resolve && (e.hide_resolve(), (e.hide_resolve = null))),
                    (e.show_dt = 0), console.log("banner showed", e.index));
                }).catch(function(t) {
                  (console.log("fail to show banner", t), (e.valid = !1));
                });
              }),
              (e.prototype.update = function(e) {
                if (this.active && this.current_ad && this.refresh_time && !(this.banner_list.length < 1)) {
                  if (this._blinking) {
                    if (((this._blinking -= e), this._blinking > 0)) return;
                    return (
                      (this._blinking = 0), void this.showAds(this.current_ad));
                  }
                  var t = this.current_ad;
                  if (t.is_showed && ((t.show_dt += e), t.show_dt >= this.refresh_time)) {
                    (t && (t.ad.hide(), (t.is_showed = !1)), this.next_ad_index++);
                    var i = this.getNextAds();
                    ((this.current_ad = i), this._style.blink ? (this._blinking = this._style.blink) : this.showAds(i));
                  }
                }
              }),
              (e.prototype.remove_ad = function(e) {
                for (var t = 0; t < this.banner_list.length; t++)
                  if (this.banner_list[t].ad == e) return void this.banner_list.splice(t, 1);
              }), e);
          })())()), cc._RF.pop());
      };
