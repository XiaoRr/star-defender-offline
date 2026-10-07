// module: Flash
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dce509rYeJC0IcpuMndj56O", "Flash");
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
                (t.duration = 0.5),
                (t._median = 0),
                (t._time = 0),
                (t._material = null), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                ((this._median = this.duration / 2), this.node.getComponent(cc.Sprite) ? (this._material = this.node.getComponent(cc.Sprite).getMaterial(0)) : (this._material = this.node.getComponent(sp.Skeleton).getMaterial(0)), this._material.setProperty("u_rate", 1));
              }),
              (t.prototype.update = function(e) {
                if (this._time > 0) {
                  ((this._time -= e),
                    (this._time = this._time < 0 ? 0 : this._time));
                  var t = (2 * Math.abs(this._time - this._median)) / this.duration;
                  this._material.setProperty("u_rate", t);
                }
              }),
              (t.prototype.clickFlash = function() {
                this._time = this.duration;
              }), o([c()], t.prototype, "duration", void 0), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
