// module: pig_bullet
// deps: {"./battleScene":"battleScene","./birds":"birds"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7e889wYirFJRqtYDFuGCv9P", "pig_bullet");
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
          s = e("./birds"),
          c = cc._decorator,
          l = c.ccclass,
          d = (c.property,
            (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.damage = 0),
                  (t.bullet_type = 0),
                  (t.bullet_speed = 400),
                  (t.velocity = cc.v2(0, 0)),
                  (t.target = null),
                  (t._target_pos = cc.v2(0, 0)), t);
              }
              return (a(t, e),
                (t.prototype.start = function() {}),
                (t.prototype.setTarget = function(e) {
                  ((this.target = e), (this._target_pos = e.getPosition()));
                  var t = Math.atan2(this._target_pos.y - this.node.y, this._target_pos.x - this.node.x, );
                  ((this.node.angle = (180 * t) / Math.PI - 90),
                    (this.velocity = cc.v2(Math.cos(t), Math.sin(t)).mul(this.bullet_speed)));
                }),
                (t.prototype.update = function(e) {
                  if (r.default.inst.isRunning) {
                    if (
                      ((this.node.x = this.node.x + this.velocity.x * e),
                        (this.node.y = this.node.y + this.velocity.y * e), this.node.getPosition().sub(this._target_pos).mag() < 10)) {
                      if (this.target.isValid) {
                        var t = this.target.getComponent(s.default);
                        t && t.recieveDamage(this.damage, null);
                      }
                      return (
                        (this.velocity = cc.v2(0, 0)), void cc.tween(this.node).to(0.15, {
                          opacity: 0
                        }, {
                          easing: "sineOut"
                        }).removeSelf().start());
                    }
                    (this.node.y < -cc.winSize.height / 2 || this.node.y > cc.winSize.height / 2 || this.node.x < -cc.winSize.width / 2 || this.node.x > cc.winSize.width / 2) && this.node.destroy();
                  }
                }), o([l], t));
            })(cc.Component));
        ((i.default = d), cc._RF.pop());
      };
