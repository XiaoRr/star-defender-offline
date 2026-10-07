// module: damage_toast_mgr
// deps: {"./battleScene":"battleScene"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bb687ZBGsZIEZEJgkK9XxNN", "damage_toast_mgr");
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
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var r = e("./battleScene"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.prefab = null), (t._crit = !1), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                i._inst = this;
              }),
              (t.prototype.start = function() {}),
              (t.prototype.new_toast_node = function(e, t, i) {
                var n = cc.instantiate(this.prefab);
                return (
                  (n.x = e.x),
                  (n.y = e.y),
                  (n.getComponent(cc.Label).string = "" + t),
                  (this._crit = i),
                  (n.color = i ? cc.Color.RED : cc.Color.WHITE), n);
              }),
              (t.prototype.damageToast = function(e, t, i) {
                var n = this;
                void 0 === i && (i = !1);
                var a = this.node.convertToNodeSpaceAR(e),
                  o = this.new_toast_node(a, t, i);
                (o.stopAllActions(), (o.opacity = 255), (o.active = !0));
                var s,
                  c,
                  l = 360 * Math.random();
                i ? ((s = 51 * Math.cos((l * Math.PI) / 180)),
                  (c = 51 * Math.sin((l * Math.PI) / 180))) : ((s = 68 * Math.cos((l * Math.PI) / 180)),
                  (c = 68 * Math.sin((l * Math.PI) / 180)));
                var d = (i ? 0.3 : 0.2) / r.default.inst.game_speed;
                ((o.scale = 0.1), cc.tween(o).to(d, {
                  scale: this._crit ? 1.3 : 1,
                  x: o.x + s,
                  y: o.y + c
                }, {
                  easing: "linear"
                }, ).delay(d).to(d, {
                  opacity: 0
                }, {
                  easing: "linear"
                }).call(function() {
                  n.releaseToast(o);
                }).start(), this.node.addChild(o));
              }),
              (t.prototype.releaseToast = function(e) {
                e.destroy();
              }),
              (t._inst = null), o([l(cc.Prefab)], t.prototype, "prefab", void 0),
              (i = o([c], t)));
          })(cc.Component);
        ((i.default = d), cc._RF.pop());
      };
