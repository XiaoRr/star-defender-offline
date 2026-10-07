// module: tt_reward
// deps: {"../libppgame/libcocos":"libcocos","../libppgame/libwechat":"libwechat","../mainScene":"mainScene","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f55e50d/KxAla5IP7iq/7BH", "tt_reward");
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
          l = e("../libppgame/libwechat"),
          d = e("../mainScene"),
          h = e("../playerData"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          g = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.label = null),
                (t.light_node = null),
                (t.game_label = null),
                (t.game_pic_sp = null),
                (t.game_pic_xjtfz = null),
                (t._coin_count = 1e3),
                (t._icon_node = null), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onLoad = function() {
                var e = this;
                ("xjtfz" == window.game_name && ((this.game_pic_sp.spriteFrame = this.game_pic_xjtfz),
                    (this.game_label.string = "【星际塔防战】")), this.node.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                    e.node.removeFromParent();
                  }), this.node.getChildByName("panel").getChildByName("btn_go").on("click", function() {
                    (e.node.removeFromParent(), tt.navigateToScene({
                      scene: "sidebar",
                      fail: console.log,
                      success: console.log,
                    }));
                  }), this.node.getChildByName("panel").getChildByName("btn_fetch").on("click", function() {
                    (e._icon_node.removeFromParent(),
                      (e._icon_node = null), e.node.removeFromParent(), d.default.inst.openGetItem([
                        [2, 50],
                        [1, 500],
                      ]), h.default.set_ttreward_fetched(), d.default.inst.refreshTop());
                  }),
                  (this._coin_count = 500), this.label && (this.label.string = "x" + this._coin_count),
                  (this.node.getComponent(cc.Widget).enabled = !1), this.node.setContentSize(cc.winSize), this.node.setPosition(cc.v2(0, 0)), this.node.getChildByName("dark").setContentSize(cc.winSize));
              }),
              (t.prototype.onEnable = function() {
                var e = l.wechat.onshow_op;
                e && "021036" == e.scene && "homepage" == e.launch_from && "sidebar_card" == e.location ? ((this.node.getChildByName("panel").getChildByName("btn_fetch").active = !0),
                  (this.node.getChildByName("panel").getChildByName("btn_go").active = !1)) : ((this.node.getChildByName("panel").getChildByName("btn_fetch").active = !1),
                  (this.node.getChildByName("panel").getChildByName("btn_go").active = !0));
              }),
              (t.prototype.start = function() {}),
              (t.prototype.update = function(e) {
                this.light_node && (this.light_node.angle += 5 * e);
              }),
              (t.show = function(e, t) {
                return r(this, void 0, void 0, function() {
                  var n, a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          c.cocos.loadRes("prefabs/tt/tt_reward", cc.Prefab),
                        ];
                      case 1:
                        return (
                          (n = r.sent()),
                          (a = cc.instantiate(n)), e.addChild(a),
                          ((o = a.getChildByName("panel")).scale = 0.1),
                          (a.getComponent(i)._icon_node = t), cc.tween(o).to(0.15, {
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
              }), o([f(cc.Label)], t.prototype, "label", void 0), o([f(cc.Node)], t.prototype, "light_node", void 0), o([f(cc.Label)], t.prototype, "game_label", void 0), o([f(cc.Sprite)], t.prototype, "game_pic_sp", void 0), o([f(cc.SpriteFrame)], t.prototype, "game_pic_xjtfz", void 0),
              (i = o([p], t)));
          })(cc.Component);
        ((i.default = g), cc._RF.pop());
      };
