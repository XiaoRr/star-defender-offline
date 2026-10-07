// module: bullet_wind
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./birds":"birds","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5f3d0B9UUNKOJIpWI/i96io", "bullet_wind");
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
        var r = e("./birdbullet"),
          s = e("./libppgame/onfire"),
          c = e("./birds"),
          l = e("./battleScene"),
          d = cc._decorator,
          h = d.ccclass,
          u = (d.property,
            (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (a(t, e),
                (t.prototype.start = function() {}),
                (t.prototype.onHitMonster = function(e) {
                  if (!this._hitMonsters.get(e.monsterId)) {
                    if (
                      (this._hitMonsters.set(e.monsterId, l.default.inst.battle_ts, ), this.hitCount++, this.damage)) {
                      var t = this.calcDamage(e),
                        i = t.damage,
                        n = t.crit;
                      e.recieveDamage(i, n, this._bird_symbol);
                    }
                    if ((s.fire("audio", "beat"), 1 == this.hitCount)) {
                      var a = c.getBirdConfig(this.bulletType).speed2;
                      (this._velocity.mulSelf(a / this.speed),
                        (this.speed = a));
                    }
                    return !1;
                  }
                }), o([h], t));
            })(r.default));
        ((i.default = u), cc._RF.pop());
      };
