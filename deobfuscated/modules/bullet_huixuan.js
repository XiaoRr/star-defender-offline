// module: bullet_huixuan
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f28acU7W5xGjp7sCGIo2Chq", "bullet_huixuan");
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
          c = e("./battleScene"),
          l = cc._decorator,
          d = l.ccclass,
          h = (l.property,
            (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (a(t, e),
                (t.prototype.onHitMonster = function(e) {
                  var t = this._hitMonsters.get(e.monsterId),
                    i = c.default.inst.battle_ts;
                  if (!(t && i - t < 0.3)) {
                    if (
                      (this._hitMonsters.set(e.monsterId, i), this.hitCount++, this.damage)) {
                      var n = this.calcDamage(e),
                        a = n.damage,
                        o = n.crit;
                      e.recieveDamage(a, o, this._bird_symbol);
                    }
                    if ((s.fire("audio", "beat"), 1 == this.hitCount)) {
                      ((this.totalTime = this.existTime + 3),
                        (this._velocity = cc.v2(0, 0)));
                      var r = c.default.inst.getBirdBuff(this.bulletType, "extra_range", );
                      r && (this._more_range = (100 + r) / 100);
                    }
                    return !1;
                  }
                }),
                (t.prototype.start = function() {}),
                (t.prototype.updateMove = function(t) {
                  (e.prototype.updateMove.call(this, t), this.hitCount > 0 && this.existTime >= this.totalTime && this.destroyBullet());
                }), o([d], t));
            })(r.default));
        ((i.default = h), cc._RF.pop());
      };
