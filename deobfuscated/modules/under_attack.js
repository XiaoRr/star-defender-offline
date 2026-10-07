// module: under_attack
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1c56bAqxoZDV7L+F/VRuZoE", "under_attack");
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
          c = (r.property,
            (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return ((t._times = 0), t);
              }
              return (a(t, e),
                (t.prototype.start = function() {
                  this.node.setContentSize(cc.winSize);
                }),
                (t.prototype.do_alert = function() {
                  var e = this;
                  this._times > 0 ? (this._times--, cc.tween(this.node).to(0.4, {
                    opacity: 0
                  }).to(0.4, {
                    opacity: 255
                  }).delay(0.1).call(function() {
                    e.do_alert();
                  }).start()) : (this.node.active = !1);
                }),
                (t.prototype.clickFlash = function(e) {
                  (void 0 === e && (e = 2), 0 == this._times ? ((this.node.active = !0),
                    (this._times = e), this.do_alert()) : (this._times = e));
                }), o([s], t));
            })(cc.Component));
        ((i.default = c), cc._RF.pop());
      };
