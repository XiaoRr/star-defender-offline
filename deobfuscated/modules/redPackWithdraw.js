// module: redPackWithdraw
// deps: {"./libcocos":"libcocos","./redPack":"redPack"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "547fbJ1wMlIvY9VMiRSHhiG", "redPackWithdraw");
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
        var c = e("./libcocos"),
          l = e("./redPack"),
          d = cc._decorator,
          h = d.ccclass,
          u = d.property,
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.label = null),
                (t._openid = ""),
                (t._his_openid = ""),
                (t._amount = 0),
                (t._selected = 0), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.start = function() {
                var e = this,
                  t = !0;
                (this.node.children[1].getChildByName("5button_tixian_o").on("click", function() {
                  return r(e, void 0, void 0, function() {
                    return s(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return t ? ((t = !1), this._selected > 0 ? [
                            4,
                            l.RedPackData.Inst.withdraw(this._selected, ),
                          ] : [3, 2]) : [2];
                        case 1:
                          return (e.sent() && this.node.removeFromParent(),
                            [3, 4]);
                        case 2:
                          return [
                            4,
                            l.RedPackData.Inst.withdraw_other(this._openid, this._his_openid, this._amount, ),
                          ];
                        case 3:
                          (e.sent() && this.node.removeFromParent(),
                            (e.label = 4));
                        case 4:
                          return ((t = !0), [2]);
                      }
                    });
                  });
                }), this.node.children[0].on("click", function() {
                  e.node.removeFromParent();
                }));
              }),
              (t.prototype.onEnable = function() {
                i.isShow = !0;
              }),
              (t.prototype.onDisable = function() {
                i.isShow = !1;
              }), Object.defineProperty(t.prototype, "amount", {
                set: function(e) {
                  e && ((this._amount = e),
                    (this.label.string = "￥" + this._amount / 100));
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "selected", {
                set: function(e) {
                  e && ((this._selected = e),
                    (this.label.string = "￥" + l.RedPackData.hongbaoAmount(this._selected - 1) / 100));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.show = function(e, t, n) {
                return r(this, void 0, void 0, function() {
                  var a;
                  return s(this, function(o) {
                    switch (o.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function(e, t) {
                            c.cocos.loadRes("redpack/redpackwithdraw", cc.Prefab).then(function(t) {
                              e(cc.instantiate(t));
                            }).catch(function(e) {
                              t(e);
                            });
                          }),
                        ];
                      case 1:
                        return (
                          ((a = o.sent()).getComponent(i).selected = n), a.setPosition(cc.v2(0, 0)), e.addChild(a, t),
                          [2]);
                    }
                  });
                });
              }),
              (t.show_other = function(e, t, n, a) {
                return r(this, void 0, void 0, function() {
                  var o, r;
                  return s(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function(e, t) {
                            c.cocos.loadRes("redpack/redpackwithdraw", cc.Prefab).then(function(t) {
                              e(cc.instantiate(t));
                            }).catch(function(e) {
                              t(e);
                            });
                          }),
                        ];
                      case 1:
                        return (
                          (o = s.sent()),
                          (r = o.getComponent(i)),
                          [4, l.RedPackData.Inst.login()]);
                      case 2:
                        return (s.sent(),
                          (r._openid = l.RedPackData.Inst.openid),
                          (r._his_openid = n),
                          (r._selected = 0),
                          (r.amount = a), o.setPosition(cc.v2(0, 0)), e.addChild(o, t),
                          [2]);
                    }
                  });
                });
              }),
              (t.isShow = !1), o([u(cc.Label)], t.prototype, "label", void 0),
              (i = o([h], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
