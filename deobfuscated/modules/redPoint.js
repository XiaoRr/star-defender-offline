// module: redPoint
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d99831vXQlLtqHCW/caFQva", "redPoint");
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
              return ((t.baseScale = 1), (t.changeScale = 1), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                cc.tween(this.node).repeatForever(cc.tween().to(0.2, {
                  scale: 1.2 * this.baseScale * this.changeScale,
                }).to(0.2, {
                  scale: 1 * this.baseScale * this.changeScale,
                }), ).start();
              }),
              (t.prototype.setRedScale = function(e) {
                this.changeScale = e;
              }), o([c], t.prototype, "baseScale", void 0), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
