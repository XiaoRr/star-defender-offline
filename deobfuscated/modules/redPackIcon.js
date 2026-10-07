// module: redPackIcon
// deps: {"./libcocos":"libcocos","./redPack":"redPack","./redPackPage":"redPackPage"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "654d2pCyjNE968UL/NYbJbb", "redPackIcon");
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
          d = e("./redPackPage"),
          h = cc._decorator,
          u = h.ccclass,
          p = h.property,
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.label = null), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.refresh = function() {
                var e = l.RedPackData.Inst.balance,
                  t = "";
                (e % 10 == 0 && (t = e % 100 == 0 ? ".00" : "0"),
                  (this.label.string = "" + e / 100 + t));
              }),
              (t.prototype.start = function() {
                return r(this, void 0, void 0, function() {
                  var e = this;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (cc.tween(this.node).repeatForever(cc.tween().to(0.1, {
                          angle: 12
                        }).to(0.1, {
                          angle: -12
                        }).to(0.1, {
                          angle: 12
                        }).to(0.1, {
                          angle: -12
                        }).to(0.05, {
                          angle: 0
                        }).delay(2), ).start(), l.RedPackData.Inst.logined ? [3, 2] : [4, l.RedPackData.Inst.login()]);
                      case 1:
                        (t.sent(), (t.label = 2));
                      case 2:
                        return (this.refresh(), this.node.on("click", function() {
                            d.default.show(cc.Canvas.instance.node, e.node.zIndex + 1, cc.v2(0, 0), e, );
                          }),
                          [2]);
                    }
                  });
                });
              }),
              (t.showIcon = function(e, t, n) {
                return r(this, void 0, void 0, function() {
                  var a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          c.cocos.loadRes("redpack/redpackicon", cc.Prefab),
                        ];
                      case 1:
                        return (
                          (a = r.sent()),
                          (o = cc.instantiate(a)), e.addChild(o, n), t && o.setPosition(t),
                          (i.inst = o), cc.Canvas.instance.node.emit("hongbao_icon", o),
                          [2, o]);
                    }
                  });
                });
              }),
              (t.inst = null), o([p(cc.Label)], t.prototype, "label", void 0),
              (i = o([u], t)));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
