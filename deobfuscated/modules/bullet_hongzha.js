// module: bullet_hongzha
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ce253YmSIxAGakJPvOiJqi1", "bullet_hongzha");
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
                  if (!this._hitMonsters.get(e.monsterId)) {
                    if (
                      (this._hitMonsters.set(e.monsterId, c.default.inst.battle_ts, ), this.hitCount++, this.damage)) {
                      var t = this.calcDamage(e),
                        i = t.damage,
                        n = t.crit;
                      (e.recieveDamage(i, n, this._bird_symbol), console.log("火烈鸟子弹命中", e.name, "造成燃烧伤害"), e.isDead || e.addDebuff("burn", 1.5, Math.floor(0.3 * i), this._bird_symbol, ));
                    }
                    s.fire("audio", "beat");
                    var a = c.default.inst.getBirdBuff(this.bulletType, "pierce", );
                    return this.hitCount > a && (this.destroyBullet(!0), !0);
                  }
                }),
                (t.prototype.start = function() {}), o([d], t));
            })(r.default));
        ((i.default = h), cc._RF.pop());
      };
