// module: bullet_inflate
// deps: {"./battleScene":"battleScene","./birdbullet":"birdbullet","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cef1a+RchFEF4x03uyw6bmF", "bullet_inflate");
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
                (t.prototype.onLoad = function() {
                  this.spine.setEventListener(this.onSpineEvent.bind(this));
                }),
                (t.prototype.onSpineEvent = function(e, t) {
                  switch (t.data.name) {
                    case "01":
                      c.default.inst.showBirdBaozha(this.bulletType, this.node.getPosition(), );
                      var i = c.default.inst.getAllMonsters(),
                        n = this.node.getPosition(),
                        a = 40,
                        o = c.default.inst.getBirdBuff(this.bulletType, "extra_range", );
                      o && (a *= (100 + o) / 100);
                      for (var r = 0,
                          s = i.filter(function(e) {
                            var t = 30 * e.node.scale;
                            return (e.node.getPosition().add(cc.v2(0, t)).sub(n).magSqr() <= (t + a) * (t + a));
                          }); r < s.length; r++) {
                        var l = s[r];
                        this.onHitMonster(l);
                      }
                  }
                }),
                (t.prototype.onHitMonster = function(e) {
                  if (!this._hitMonsters.get(e.monsterId)) {
                    if (
                      (this._hitMonsters.set(e.monsterId, c.default.inst.battle_ts, ), this.hitCount++, this.damage)) {
                      var t = this.calcDamage(e),
                        i = t.damage,
                        n = t.crit;
                      (e.recieveDamage(i, n, this._bird_symbol), e.isDead || e.stun(1));
                    }
                    return (s.fire("audio", "beat"), !0);
                  }
                }),
                (t.prototype.start = function() {}),
                (t.prototype.updateMove = function(e) {
                  var t = this;
                  if (!this.destroyed && this._destPos && c.default.inst.isRunning) {
                    this.node.setPosition(this.node.getPosition().add(this._velocity.mul(e * c.default.inst.game_speed)), );
                    var i = this.node.getPosition();
                    this.smoke_node.setPosition(i.add(cc.v2(0, -8)));
                    var n = 2 - Math.pow(this.existTime / (this.totalTime / 2) - 1, 2);
                    if (
                      ((this.node.scale = n), this.existTime >= this.totalTime)) {
                      c.default.inst.getBirdBuff(this.bulletType, "extra_range", );
                      ((this._destPos = null), this.spine.setAnimation(0, "09", !1),
                        (this.spine.timeScale = c.default.inst.game_speed), this.spine.setCompleteListener(function(e) {
                          "09" == e.animation.name && t.destroyBullet(!1);
                        }));
                    }
                  }
                }), o([d], t));
            })(r.default));
        ((i.default = h), cc._RF.pop());
      };
