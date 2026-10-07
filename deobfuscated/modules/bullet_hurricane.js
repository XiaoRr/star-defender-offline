// module: bullet_hurricane
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f2dacRReqZLo5RsHlCx5KBh", "bullet_hurricane");
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
                (t.prototype.start = function() {}),
                (t.prototype.onHitMonster = function(e) {
                  if (!this._hitMonsters.get(e.monsterId)) {
                    (this._hitMonsters.set(e.monsterId, c.default.inst.battle_ts, ), this.hitCount++);
                    var t = c.default.inst.getBirdBuff(this.bulletType, "extra_knockback", ),
                      i = t ? Math.ceil((20 * (100 + t)) / 100) : 20;
                    if (1 == this.hitCount) {
                      var n = this.calcDamage(e),
                        a = n.damage,
                        o = n.crit;
                      e.recieveDamage(a, o, this._bird_symbol);
                      var r = this._velocity.normalize().mul(i);
                      e.node.setPosition(e.node.getPosition().add(r));
                    } else((r = this._velocity.normalize().mul(i)), e.node.setPosition(e.node.getPosition().add(r)));
                    return (s.fire("audio", "beat"), !1);
                  }
                }), o([d], t));
            })(r.default));
        ((i.default = h), cc._RF.pop());
      };
