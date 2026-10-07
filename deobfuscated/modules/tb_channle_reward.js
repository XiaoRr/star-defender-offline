// module: tb_channle_reward
// deps: {"./libppgame/libcocos":"libcocos","./libppgame/libwechat":"libwechat","./mainScene":"mainScene","./playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "457bf2qYBFLgq7Y8wWJyYyS", "tb_channle_reward");
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
          h = e("./libppgame/libcocos"),
          u = e("./libppgame/libwechat"),
          p = e("./mainScene"),
          f = e("./playerData"),
          g = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.label = null),
                (t.btn_close = null),
                (t.btn_fetch = null),
                (t.btn_close2 = null),
                (t._icon_node = null), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onLoad = function() {
                var e = this,
                  t = this.node.getChildByName("panel").getChildByName("hand");
                ((t.y = 376), cc.tween(t).repeatForever(cc.tween().by(0.5, {
                  position: cc.v2(0, -100)
                }).delay(0.3).call(function() {
                  t.y = 376;
                }), ).start(), this.btn_close.on("click", function() {
                  e.node.removeFromParent();
                }), this.btn_close2.on("click", function() {
                  e.node.removeFromParent();
                }), this.btn_fetch.on("click", function() {
                  f.default.getMisc("tbreward_fetched") ? e.node.removeFromParent() : (f.default.setMisc("tbreward_fetched", 1), e._icon_node && (e._icon_node.removeFromParent(),
                    (e._icon_node = null)), e.node.removeFromParent(), p.default.inst.openGetItem([
                    [1, 500]
                  ]));
                }));
              }),
              (t.prototype.start = function() {}),
              (t.prototype.onEnable = function() {
                u.wechat.isTaobaoRewardChannelTag() ? ((this.btn_close.active = !1), (this.btn_fetch.active = !0)) : ((this.btn_close.active = !0),
                  (this.btn_fetch.active = !1));
              }),
              (t.prototype.onDisable = function() {}),
              (t.show = function(e, t) {
                return (void 0 === t && (t = null), r(this, void 0, void 0, function() {
                  var n, a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          h.cocos.loadRes("prefabs/tb_channel_reward", cc.Prefab, ),
                        ];
                      case 1:
                        return (
                          (n = r.sent()),
                          (a = cc.instantiate(n)), e.addChild(a), t && (a.getComponent(i)._icon_node = t),
                          ((o = a.getChildByName("panel")).scale = 0.1 * 0.5925926), cc.tween(o).to(0.15, {
                            scale: 0.71111112
                          }, {
                            easing: "sineOut"
                          }, ).to(0.15, {
                            scale: 0.5925926
                          }, {
                            easing: "sineIn"
                          }, ).start(),
                          [2]);
                    }
                  });
                }));
              }), o([d(cc.Label)], t.prototype, "label", void 0), o([d(cc.Node)], t.prototype, "btn_close", void 0), o([d(cc.Node)], t.prototype, "btn_fetch", void 0), o([d(cc.Node)], t.prototype, "btn_close2", void 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = g), cc._RF.pop());
      };
