// module: jd_desktop_page
// deps: {"../libppgame/libcocos":"libcocos","../mainScene":"mainScene","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1163cCUAIFPwqdrQHzLhYUj", "jd_desktop_page");
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
        var c = e("../libppgame/libcocos"),
          l = e("../mainScene"),
          d = e("../playerData"),
          h = cc._decorator,
          u = h.ccclass,
          p = h.property;

        function f() {
          var e = new Date();
          return ("" + e.getFullYear() + String(e.getMonth() + 1).padStart(2, "0") + String(e.getDate()).padStart(2, "0"));
        }
        var g = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.panel_sp = null),
              (t.panel_sfs = []),
              (t.fetched_node = null),
              (t.btn_fetch_node = null),
              (t.btn_add_node = null),
              (t.count_label = null), t);
          }
          var i;
          return (a(t, e),
            (i = t),
            (t.prototype.start = function() {}),
            (t.prototype.onEnable = function() {
              var e = this;
              return (d.default.getMisc("jd_desk_rewarded") ? ((this.count_label.string = "250"),
                (this.panel_sp.spriteFrame = this.panel_sfs[1])) : ((this.count_label.string = "500"),
                (this.panel_sp.spriteFrame = this.panel_sfs[0])), cc.vv && "a7bd" == cc.vv.scene ? ((this.btn_add_node.active = !1), void(i.isTodayRewarded() ? ((this.btn_fetch_node.active = !1),
                (this.fetched_node.active = !0)) : ((this.btn_fetch_node.active = !0),
                (this.fetched_node.active = !1)))) : i.isTodayRewarded() ? ((this.btn_add_node.active = !1),
                (this.btn_fetch_node.active = !1), void(this.fetched_node.active = !0)) : void(void 0 !== jd.queryShortcut && i.queryShortcut().then(function(t) {
                t ? ((e.btn_add_node.active = !1),
                  (e.btn_fetch_node.active = !0)) : (e.unscheduleAllCallbacks(), e.scheduleOnce(function() {
                  jd.addToDesktop({
                    success: function(t) {
                      (console.log("addToDesktop success", t), d.default.getMisc("jd_desk_rewarded") || ((e.btn_add_node.active = !1),
                        (e.btn_fetch_node.active = !0)));
                    },
                    fail: function(e) {
                      console.log("addToDesktop fail", e);
                    },
                    complete: function(e) {
                      console.log("addToDesktop complete", e);
                    },
                  });
                }, 3));
              })));
            }),
            (t.show = function(e) {
              return r(this, void 0, void 0, function() {
                var t, i, n;
                return s(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return [
                        4,
                        c.cocos.loadRes("prefabs/jd_desktop", cc.Prefab),
                      ];
                    case 1:
                      return (
                        (t = a.sent()),
                        (i = cc.instantiate(t)), e.addChild(i),
                        ((n = i.getChildByName("panel")).scale = 0.1), cc.tween(n).to(0.15, {
                          scale: 1.2
                        }, {
                          easing: "sineOut"
                        }).to(0.15, {
                          scale: 1
                        }, {
                          easing: "sineIn"
                        }).start(),
                        [2]);
                  }
                });
              });
            }),
            (t.prototype.onBtnClose = function() {
              this.node.removeFromParent();
            }),
            (t.prototype.onBtnAddDesktop = function() {
              var e = this;
              jd.addToDesktop({
                success: function(t) {
                  (console.log("addToDesktop success", t),
                    (e.btn_add_node.active = !1),
                    (e.btn_fetch_node.active = !0));
                },
                fail: function(e) {
                  console.log("addToDesktop fail", e);
                },
                complete: function(e) {
                  console.log("addToDesktop complete", e);
                },
              });
            }),
            (t.prototype.onBtnFetch = function() {
              (d.default.setMisc("jd_desk_rewarded_date", f()), this.node.removeFromParent(), d.default.getMisc("jd_desk_rewarded") ? l.default.inst.openGetItem([
                [1, 250]
              ]) : l.default.inst.openGetItem([
                [1, 500]
              ]));
            }),
            (t.isTodayRewarded = function() {
              return d.default.getMisc("jd_desk_rewarded_date") == f();
            }),
            (t.queryShortcut = function() {
              return r(this, void 0, void 0, function() {
                return s(this, function() {
                  return void 0 !== jd.queryShortcut ? [
                    2,
                    new Promise(function(e) {
                      jd.queryShortcut({
                        success: function(t) {
                          (console.log("queryShortcut success", t), e(t.result));
                        },
                        fail: function(t) {
                          (console.log("queryShortcut fail", t), e(!1));
                        },
                        complete: function(e) {
                          console.log("queryShortcut complete", e);
                        },
                      });
                    }),
                  ] : [2, Promise.resolve(!1)];
                });
              });
            }), o([p(cc.Sprite)], t.prototype, "panel_sp", void 0), o([p([cc.SpriteFrame])], t.prototype, "panel_sfs", void 0), o([p(cc.Node)], t.prototype, "fetched_node", void 0), o([p(cc.Node)], t.prototype, "btn_fetch_node", void 0), o([p(cc.Node)], t.prototype, "btn_add_node", void 0), o([p(cc.Label)], t.prototype, "count_label", void 0),
            (i = o([u], t)));
        })(cc.Component);
        ((i.default = g), cc._RF.pop());
      };
