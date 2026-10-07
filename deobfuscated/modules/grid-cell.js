// module: grid-cell
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7e5f7viTGZJz7rbgU1HNrRk", "grid-cell");
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
        var r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.sp = null),
                (t.normal_sf = null),
                (t.dashed_sf = null),
                (t.dashed_green_sf = null),
                (t.dashed_red_sf = null),
                (t.red_sf = null),
                (t.green_sf = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.setType = function(e) {
                this.sp.spriteFrame = this[e + "_sf"];
              }), o([c(cc.Sprite)], t.prototype, "sp", void 0), o([c(cc.SpriteFrame)], t.prototype, "normal_sf", void 0), o([c(cc.SpriteFrame)], t.prototype, "dashed_sf", void 0), o([c(cc.SpriteFrame)], t.prototype, "dashed_green_sf", void 0), o([c(cc.SpriteFrame)], t.prototype, "dashed_red_sf", void 0), o([c(cc.SpriteFrame)], t.prototype, "red_sf", void 0), o([c(cc.SpriteFrame)], t.prototype, "green_sf", void 0), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
