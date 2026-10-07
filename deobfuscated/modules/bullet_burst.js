// module: bullet_burst
// deps: {"../Script/libppgame/libcocos":"libcocos","./battleScene":"battleScene","./birdbullet":"birdbullet","./bullet_burn":"bullet_burn","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "64817DFVqJONoasm5TsY88p", "bullet_burst");
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
          l = e("../Script/libppgame/libcocos"),
          d = e("./bullet_burn"),
          h = cc._decorator,
          u = h.ccclass,
          p = (h.property,
            (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (a(t, e),
                (t.prototype.onLoad = function() {
                  this.spine.setEventListener(this.onSpineEvent.bind(this));
                }),
                (t.prototype.onSpineEvent = function(e, t) {
                  var i = this;
                  switch (t.data.name) {
                    case "01":
                      c.default.inst.showBirdBaozha(this.bulletType, this.node.getPosition().add(cc.v2(0, 50)), );
                      for (var n = c.default.inst.getAllMonsters(),
                          a = this.node.getPosition(),
                          o = 0,
                          r = 0,
                          s = n.filter(function(e) {
                            var t = 30 * e.node.scale;
                            return (e.node.getPosition().add(cc.v2(0, t)).sub(a).magSqr() <= (t + 65) * (t + 65));
                          }); r < s.length; r++) {
                        var h = s[r],
                          u = this.calcDamage(h),
                          p = u.damage,
                          f = u.crit;
                        (h.recieveDamage(p, f, this._bird_symbol), p > o && (o = p));
                      }
                      var g = Math.floor(0.1 * o),
                        y = this.node.parent;
                      l.cocos.loadRes("prefabs/bullets/bullet14_burn", cc.Prefab).then(function(e) {
                        if (i.node.isValid) {
                          var t = cc.instantiate(e);
                          (t.setParent(y), t.setPosition(a.add(cc.v2(0, 50))));
                          var n = t.getComponent(d.default);
                          ((n.damage = g),
                            (n.totalTime = 3 + c.default.inst.getBirdBuff(i.bulletType, "extra_duration", )),
                            (n.symbol = i._bird_symbol));
                        }
                      });
                  }
                }),
                (t.prototype.start = function() {}),
                (t.prototype.onHitMonster = function(e) {
                  var t = this;
                  return (!(this.existTime < 0.1) && (this._hitMonsters.get(e.monsterId) ? void 0 : (0 == this.hitCount && (this.hitCount++, this._hitMonsters.set(e.monsterId, c.default.inst.battle_ts, ), this.hitCount++,
                    (this._velocity = cc.v2(0, 0)), s.fire("audio", "beat"), this.spine.setAnimation(0, "09", !1),
                    (this.spine.timeScale = c.default.inst.game_speed), this.spine.setCompleteListener(function(e) {
                      "09" == e.animation.name && t.destroyBullet(!1);
                    })), !0)));
                }),
                (t.prototype.updateMove = function(e) {
                  var t = this;
                  if (!this.destroyed && this._destPos && c.default.inst.isRunning) {
                    this.node.setPosition(this.node.getPosition().add(this._velocity.mul(e * c.default.inst.game_speed)), );
                    var i = this.node.getPosition();
                    this.smoke_node.setPosition(i.add(cc.v2(0, -8)));
                    var n = 2 - Math.pow(this.existTime / (this.totalTime / 2) - 1, 2);
                    ((this.node.scale = n), this.existTime >= this.totalTime && ((this._destPos = null), this.spine.setAnimation(0, "09", !1),
                      (this.spine.timeScale = c.default.inst.game_speed), this.spine.setCompleteListener(function(e) {
                        "09" == e.animation.name && t.destroyBullet(!1);
                      })));
                  }
                }), o([u], t));
            })(r.default));
        ((i.default = p), cc._RF.pop());
      };
