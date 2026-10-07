// module: mail
// deps: {"../../battle_scripts/libppgame/utils":"utils","../libppgame/WXClubButton":"WXClubButton","../libppgame/audioMgr":"audioMgr","../libppgame/libwechat":"libwechat","../mainScene":"mainScene","../playerData":"playerData","../ui/itemUI":"itemUI","./virtual_view":"virtual_view"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "faf8eJg4oJHJ7ATSHqTSz/V", "mail");
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
        var c = e("../libppgame/audioMgr"),
          l = e("../mainScene"),
          d = e("../playerData"),
          h = e("../ui/itemUI"),
          u = e("./virtual_view"),
          p = e("../../battle_scripts/libppgame/utils"),
          f = e("../libppgame/libwechat"),
          g = e("../libppgame/WXClubButton"),
          y = cc._decorator,
          m = y.ccclass,
          _ = y.property,
          v = new Map();
        (v.set("早餐", "新的一天要元气满满哦！"), v.set("午餐", "午后继续能量满满！"), v.set("晚餐", "轻松享受，夜晚安宁！"), v.set("夜宵", "温暖小食，甜蜜入梦。"), v.set("每日能量发放", "每日12:00自动发放的15点能量已送达，请查收！"));
        var b = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.close_btn = null),
              (t.mail_content = null),
              (t.mail_list = null),
              (t.mail_content_title = null),
              (t.mail_content_content = null),
              (t.myvirtualview = null),
              (t.detail_close_btn = null),
              (t.btn_fetch_all = null),
              (t.mail_invalid = null),
              (t._current_mid = 0),
              (t._current_mail_item = null), t);
          }
          var i;
          return (a(t, e),
            (i = t),
            (t.prototype.onLoad = function() {
              var e = this;
              (i._inst || (i._inst = this), this.close_btn.on("click", function() {
                (c.default.inst.playAudio("starcraft/click"),
                  (e.node.active = !1), l.default.inst.pageLayer.getChildByName("page3").getChildByName("icon4").getComponent(g.default).onShow());
              }), this.mail_content.getChildByName("attach").getChildByName("btn_fetch").on("click", function() {
                return r(e, void 0, void 0, function() {
                  var e = this;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (c.default.inst.playAudio("starcraft/click"),
                          [
                            4,
                            i.fetchMail(this._current_mid).then(function(t) {
                              if (0 == t.err) {
                                ((e.mail_content.getChildByName("attach").getChildByName("fetched").active = !0),
                                  (e.mail_content.getChildByName("attach").getChildByName("btn_fetch").active = !1));
                                var i = t.items && t.items.length ? t.items : [];
                                (t.stones && t.stones.length && (i = i.concat(t.stones)), l.default.inst.openGetItem(i), l.default.inst.refreshAll());
                              } else if (2 == t.err) {
                                var n = e.mail_content.getChildByName("attach");
                                ((n.getChildByName("fetched").active = !1),
                                  (n.getChildByName("btn_fetch").active = !0),
                                  (e.mail_invalid.active = !0));
                              }
                            }),
                          ]);
                      case 1:
                        return (t.sent(), [2]);
                    }
                  });
                });
              }), this.mail_content.getChildByName("attach").getChildByName("btn_fetch_vd").on("click", function() {
                return r(e, void 0, void 0, function() {
                  var e = this;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (c.default.inst.playAudio("starcraft/click"),
                          [4, f.wechat.showRewardedVideoAdNew()]);
                      case 1:
                        return t.sent().isEnded ? [
                          4,
                          i.fetchMail(this._current_mid, !0).then(function(t) {
                            if (0 == t.err) {
                              ((e.mail_content.getChildByName("attach").getChildByName("fetched").active = !0),
                                (e.mail_content.getChildByName("attach").getChildByName("btn_fetch", ).active = !1),
                                (e.mail_content.getChildByName("attach").getChildByName("btn_fetch_vd", ).active = !1),
                                (e.mail_invalid.active = !1));
                              var i = t.items && t.items.length ? t.items : [];
                              (t.stones && t.stones.length && (i = i.concat(t.stones)), l.default.inst.openGetItem(i), l.default.inst.refreshAll());
                            }
                          }),
                        ] : (f.wechat.is_jd_platform || l.default.inst.popTips("观看视频广告失败"),
                          [2]);
                      case 2:
                        return (t.sent(), [2]);
                    }
                  });
                });
              }), this.detail_close_btn.on("click", function() {
                e.closeDetail();
              }), this.node.getChildByName("back").on("click", function() {
                (c.default.inst.playAudio("starcraft/click"),
                  (e.node.active = !1));
              }), this.mail_content.getChildByName("back").on("click", function() {
                e.closeDetail();
              }), this.btn_fetch_all.on("click", function() {
                return r(e, void 0, void 0, function() {
                  var e,
                    t,
                    n = this;
                  return s(this, function(a) {
                    switch (a.label) {
                      case 0:
                        for (c.default.inst.playAudio("starcraft/click"), e = !1, t = 0; t < i._mail_list.length; t++)
                          if (1 == i._mail_list[t].attached) {
                            e = !0;
                            break;
                          }
                        return e ? [
                          4,
                          i.fetchMail(0).then(function(e) {
                            if (0 == e.err) {
                              var t = e.items && e.items.length ? e.items : [];
                              (e.stones && e.stones.length && (t = t.concat(e.stones)), t.length && (l.default.inst.openGetItem(t), l.default.inst.refreshAll(), n.showMailList()));
                            }
                          }),
                        ] : [2];
                      case 1:
                        return (a.sent(), [2]);
                    }
                  });
                });
              }));
            }),
            (t.prototype.closeDetail = function() {
              (c.default.inst.playAudio("starcraft/click"),
                (this.mail_content.active = !1),
                (this.mail_list.active = !0), this._current_mail_item && this._current_mail_item.show(i.getMail(this._current_mid)),
                (this._current_mail_item = null),
                (this._current_mid = 0));
            }), Object.defineProperty(t, "inst", {
              get: function() {
                return i._inst;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onDestroy = function() {
              i._inst == this && (i._inst = null);
            }),
            (t.prototype.onEnable = function() {
              var e = this;
              i.queryMail().then(function() {
                e.showMailList();
              });
            }),
            (t.prototype.showMailList = function() {
              ((this.mail_content.active = !1),
                (this.mail_list.active = !0), this.myvirtualview.show(i._resorted_mail_list));
            }),
            (t.prototype.showMail = function(e, t) {
              ((this.mail_content.active = !0), (this.mail_list.active = !1));
              var n = i.getMail(e);
              (n ? ((this.mail_content_title.string = "【" + n.detail[0] + "】"), !n.detail[1] && v.get(n.detail[0]) ? (this.mail_content_content.string = v.get(n.detail[0])) : (this.mail_content_content.string = n.detail[1])) : ((this.mail_content_title.string = ""),
                  (this.mail_content_content.string = "")),
                (this._current_mid = e),
                (this._current_mail_item = t));
              var a = this.mail_content.getChildByName("attach");
              if (0 == n.attached)
                ((a.active = !1), (this.mail_invalid.active = !1));
              else {
                ((a.active = !0),
                  (a.getChildByName("fetched").active = 2 == n.attached),
                  (a.getChildByName("btn_fetch").active = 1 == n.attached), 1 == n.attached && n.time < new Date().getTime() / 1e3 - 86400 ? ((this.mail_invalid.active = !0),
                    (a.getChildByName("btn_fetch").active = !1),
                    (a.getChildByName("btn_fetch_vd").active = !0)) : ((this.mail_invalid.active = !1),
                    (a.getChildByName("btn_fetch_vd").active = !1)));
                for (var o = a.getChildByName("items"), r = 0; r < 4; r++) {
                  var s = o.getChildByName("item" + (r + 1)),
                    c = n.detail[2][r];
                  c ? ((s.active = !0), s.getComponent(h.default).initItem(c[0], c[1])) : (s.active = !1);
                }
              }
            }),
            (t.prototype.start = function() {}),
            (t.getMaxId = function() {
              return this._mail_list && this._mail_list.length ? this._mail_list[0].id : 0;
            }),
            (t.getMail = function(e) {
              for (var t = 0; t < this._mail_list.length; t++)
                if (this._mail_list[t].id == e) return this._mail_list[t];
              return null;
            }),
            (t.clearCache = function() {
              ((this._mail_list = []), (this._resorted_mail_list = []));
            }),
            (t.queryMail = function() {
              var e = this,
                t = this.getMaxId(),
                i = {
                  act: "query",
                  cid: d.default.cid,
                  time: new Date().getTime(),
                };
              t > 0 && (i.from_id = t);
              var n = this.api_url + "?" + p.generateSignedParams(i, d.default.token);
              return new Promise(function(t, i) {
                f.wechat.request(n, "get", null, {}, "json").then(function(i) {
                  if (0 == i.err && i.list.length) {
                    for (var n = 0; n < i.list.length; n++) i.list[n].detail = JSON.parse(i.list[n].detail);
                    e._mail_list = i.list.concat(e._mail_list);
                    var a = [],
                      o = [];
                    for (n = 0; n < e._mail_list.length; n++) {
                      var r = e._mail_list[n];
                      1 == r.attached ? a.push(r) : o.push(r);
                    }
                    e._resorted_mail_list = a.concat(o);
                  } else if (2 == i.err) return void console.error("queryFetchMail fail, disconnect", );
                  t(i.err);
                }).catch(function(e) {
                  i(e);
                });
              });
            }),
            (t.resortMailList = function() {
              for (var e = [], t = [], i = 0; i < this._mail_list.length; i++) {
                var n = this._mail_list[i];
                1 == n.attached ? e.push(n) : t.push(n);
              }
              this._resorted_mail_list = e.concat(t);
            }),
            (t.fetchMail = function(e, t) {
              var i = this;
              void 0 === t && (t = !1);
              var n = {
                act: "fetch",
                cid: d.default.cid,
                time: new Date().getTime(),
              };
              (e > 0 && (n.mid = e), t && (n.vd = 1));
              var a = this.api_url + "?" + p.generateSignedParams(n, d.default.token);
              return new Promise(function(e) {
                f.wechat.request(a, "get", null, {}, "json").then(function(t) {
                  if (t && t.mids) {
                    for (var n = !1, a = "", o = 0; o < t.mids.length; o++) {
                      var r = i.getMail(t.mids[o]);
                      r && ((r.attached = 2), (n = !0), a || (a = r.title));
                    }
                    n && i.resortMailList();
                  }
                  (i.refreshCanFetch(), e({
                    err: t.err,
                    items: t.items,
                    stones: t.stones
                  }));
                });
              });
            }),
            (t.refreshCanFetch = function() {
              for (var e = 0, t = 0; t < this._mail_list.length; t++) 1 == this._mail_list[t].attached && e++;
              ((this.canfetch = e), l.default.inst.setMailRedpoint(e));
            }),
            (t.readMail = function(e) {
              var t = this,
                i = {
                  act: "read",
                  cid: d.default.cid,
                  time: new Date().getTime(),
                };
              e > 0 && (i.mid = e);
              var n = this.api_url + "?" + p.generateSignedParams(i, d.default.token);
              return new Promise(function(i) {
                f.wechat.request(n, "get", null, {}, "json").then(function(n) {
                  var a = t.getMail(e);
                  (a && (a.readed = 1), i(n.err));
                }).catch(function(e) {
                  console.log("read mail fail", e);
                });
              });
            }), Object.defineProperty(t, "canfetch", {
              set: function(e) {
                this._canfetch = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.canFetchMail = function() {
              // Offline adaptation: mail.canFetchMail
              return Promise.resolve(0);
            }),
            (t._inst = null),
            (t._mail_list = []),
            (t._resorted_mail_list = []),
            (t.api_url = "https://xyx.p8games.com/wxgame/starcraft/mail"),
            (t._canfetch = 0), o([_(cc.Node)], t.prototype, "close_btn", void 0), o([_(cc.Node)], t.prototype, "mail_content", void 0), o([_(cc.Node)], t.prototype, "mail_list", void 0), o([_(cc.Label)], t.prototype, "mail_content_title", void 0), o([_(cc.RichText)], t.prototype, "mail_content_content", void 0), o([_(u.default)], t.prototype, "myvirtualview", void 0), o([_(cc.Node)], t.prototype, "detail_close_btn", void 0), o([_(cc.Node)], t.prototype, "btn_fetch_all", void 0), o([_(cc.Node)], t.prototype, "mail_invalid", void 0),
            (i = o([m], t)));
        })(cc.Component);
        ((i.default = b), cc._RF.pop());
      };
