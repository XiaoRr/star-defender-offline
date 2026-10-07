// module: bullet_ice
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c1cceacVORBuYDRc9MTJIfc", "bullet_ice");
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
                  if (this.existTime < 0.1) return !1;
                  if (!this._hitMonsters.get(e.monsterId)) {
                    if (
                      (this._hitMonsters.set(e.monsterId, c.default.inst.battle_ts, ), this.hitCount++, this.damage)) {
                      var t = this.calcDamage(e),
                        i = t.damage,
                        n = t.crit;
                      (e.recieveDamage(i, n, this._bird_symbol), e.isDead || e.frozen(1 + c.default.inst.getBirdBuff(this.bulletType, "extra_frozen", ), ));
                    }
                    if ((s.fire("audio", "beat"), 1 == this.hitCount)) {
                      ((this.damage = Math.floor(0.7 * this.damage)),
                        (this.node.scale = 0.7));
                      var a = r.default.getBulletFromPool(this.bulletType, this.level, ),
                        o = r.default.getBulletFromPool(this.bulletType, this.level, );
                      (a ? (a.scale = 0.7) : ((a = cc.instantiate(this.node)).stopAllActions(), this.unscheduleAllCallbacks()), o ? (o.scale = 0.7) : ((o = cc.instantiate(this.node)).stopAllActions(), this.unscheduleAllCallbacks()));
                      var l = this.node.getPosition(),
                        d = a.getComponent(r.default),
                        h = o.getComponent(r.default),
                        u = this._velocity.rotate(-Math.PI / 6),
                        p = this._velocity.rotate(Math.PI / 6),
                        f = l.add(u.normalize().mul(20)),
                        g = l.add(p.normalize().mul(20)),
                        y = l.add(this._velocity.normalize().mul(20));
                      (a.setPosition(f), o.setPosition(g), this.node.setPosition(y),
                        (d.symbol = this._bird_symbol),
                        (h.symbol = this._bird_symbol),
                        (d.damage = this.damage),
                        (h.damage = this.damage),
                        (d.hitCount = this.hitCount),
                        (h.hitCount = this.hitCount),
                        (d.destroyed = !1),
                        (h.destroyed = !1), d.setHitMonsters(this._hitMonsters), h.setHitMonsters(this._hitMonsters), d.setDestPos(c.default.getRayRectIntersection2(f, u, cc.v2(0, 0), cc.v2(cc.winSize.width, cc.winSize.height), ), ), h.setDestPos(c.default.getRayRectIntersection2(g, p, cc.v2(0, 0), cc.v2(cc.winSize.width, cc.winSize.height), ), ), c.default.inst.bullet_layer.addChild(a), c.default.inst.bullet_layer.addChild(o));
                    } else this.destroyBullet(!0);
                    return !0;
                  }
                }), o([d], t));
            })(r.default));
        ((i.default = h), cc._RF.pop());
      };
