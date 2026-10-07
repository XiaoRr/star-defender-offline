// module: birdbullet
// deps: {"../Script/gameData":"gameData","../Script/libppgame/libwechat":"libwechat","./battleScene":"battleScene","./birds":"birds","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "afb4az48AxFeaV3j7+wmuKO", "birdbullet");
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
          s = (e("../Script/libppgame/libwechat"), e("./birds")),
          c = e("./libppgame/onfire"),
          l = e("../Script/gameData"),
          d = cc._decorator,
          h = d.ccclass,
          u = d.property,
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bulletType = 1),
                (t.damage = 20),
                (t.speed = 200),
                (t.pierce = 0),
                (t.spine = null),
                (t.hitCount = 0),
                (t._level = 0),
                (t._bird_symbol = null),
                (t._buff = null),
                (t._strike = 0),
                (t._strikeHurt = 200),
                (t._more_range = 0),
                (t.existTime = 0),
                (t.destroyed = !1),
                (t.canCollide = !0),
                (t._graphics = null),
                (t._destPos = null),
                (t._velocity = cc.v2(0, 0)),
                (t.totalTime = 0),
                (t._hitMonsters = new Map()),
                (t.smoke_node = null), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t.prototype, "level", {
                get: function() {
                  return this._level;
                },
                set: function(e) {
                  if (this._level !== e) {
                    this._level = e;
                    var t = s.getBirdConfig(this.bulletType);
                    this.damage = t.damage;
                    var i = l.default.getTowerLevel(this.bulletType);
                    ((i > 1 || this._level > 1) && ((this.damage = this.damage * (1 + 0.1 * (i - 1))),
                        (this.damage = Math.ceil(this.damage * Math.pow(1.6, this._level - 1), ))),
                      (this.speed = t.speed), "number" == typeof t.pierce ? (this.pierce = t.pierce) : (this.pierce = 0),
                      (this._strike = 0),
                      (this._strikeHurt = 200), this.updateBulletSkin());
                  }
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "symbol", {
                get: function() {
                  return this._bird_symbol;
                },
                set: function(e) {
                  this._bird_symbol = e;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "strike", {
                get: function() {
                  return (this._strike + r.default.inst.getBirdBuff(this.bulletType, "strike"));
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "strikeHurt", {
                get: function() {
                  return (this._strikeHurt + r.default.inst.getBirdBuff(this.bulletType, "strikehurt"));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.calcDamage = function(e) {
                var t = !1,
                  i = this.damage,
                  n = r.default.inst.getBirdBuff(this.bulletType, "attack");
                "boss" == e.monster_base_type && (n += r.default.inst.getBirdBuff(this.bulletType, "boss_damage", ));
                var a = r.default.inst.getBirdBuff(0, "bird_counts_damage");
                (a && (n += a * r.default.inst.alive_birds), n && (i = Math.floor((i * (100 + n)) / 100)));
                var o = this.strike;
                return (o > 0 && 100 * Math.random() < o && ((i = Math.floor((i * this.strikeHurt) / 100)), (t = !0)), {
                  damage: i,
                  crit: t
                });
              }),
              (t.prototype.setStrike = function(e, t) {
                (void 0 === t && (t = 200),
                  (this._strike = e),
                  (this._strikeHurt = t));
              }),
              (t.prototype.onLoad = function() {}),
              (t.prototype.start = function() {}),
              (t.prototype.updateBulletSkin = function() {
                if (this.spine) {
                  this.updateGameSpeed();
                  var e = "bird" + this.bulletType.toString().padStart(2, "0") + this._level.toString().padStart(2, "0");
                  this.spine.setSkin(e);
                }
              }),
              (t.prototype.updateGameSpeed = function() {
                this.spine && (this.spine.timeScale = r.default.inst.game_speed);
              }),
              (t.prototype.setDestPos = function(e) {
                this._destPos = e;
                var t = this.node.getPosition();
                this._velocity = this._destPos.sub(t).normalize().mul(this.speed);
                var i = cc.instantiate(r.default.inst.smokePrefab);
                ((this.smoke_node = i),
                  (i.parent = r.default.inst.smoke_layer), i.setPosition(t.add(cc.v2(0, -8))),
                  (i.angle = this.node.angle),
                  (i.scale = this.node.scale));
              }), Object.defineProperty(t.prototype, "velocity", {
                set: function(e) {
                  this._velocity = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.updateMove = function(e) {
                if (!this.destroyed && this._destPos && r.default.inst.isRunning) {
                  this.node.setPosition(this.node.getPosition().add(this._velocity.mul(e * r.default.inst.game_speed)), );
                  var t = this.node.getPosition();
                  (this.smoke_node.setPosition(t.add(cc.v2(0, -8))),
                    (t.x < -cc.winSize.width / 2 || t.x > cc.winSize.width / 2 || t.y < -cc.winSize.height / 2 || t.y > cc.winSize.height / 2) && this.destroyBullet());
                }
              }),
              (t.prototype.update = function(e) {
                if (this._graphics) {
                  var t = this.getCircle();
                  (this._graphics.clear(),
                    (this._graphics.strokeColor = cc.Color.RED),
                    (this._graphics.lineWidth = 4), this._graphics.circle(0, 0, t.radius), this._graphics.stroke());
                }
                (r.default.inst.isRunning && (this.existTime += e * r.default.inst.game_speed), this.updateMove(e));
              }),
              (t.prototype.getCircle = function() {
                var e = this.node,
                  t = e.getContentSize(),
                  i = Math.max(t.width * e.scaleX, t.height * e.scaleY) / 2;
                return (this._more_range && (i *= this._more_range), {
                  center: cc.v3(e.x, e.y, 0),
                  radius: i
                });
              }),
              (t.prototype.setHitMonsters = function(e) {
                var t = this;
                (this._hitMonsters.clear(), e.forEach(function(e, i) {
                  t._hitMonsters.set(i, e);
                }));
              }),
              (t.prototype.onHitMonster = function(e) {
                if (
                  (this._hitMonsters.set(e.monsterId, r.default.inst.battle_ts), this.hitCount++, this.damage)) {
                  var t = this.calcDamage(e),
                    i = t.damage,
                    n = t.crit;
                  e.recieveDamage(i, n, this._bird_symbol);
                }
                return (c.fire("audio", "beat"), this.destroyBullet(!0), !0);
              }),
              (t.prototype.pause = function() {
                this.spine && (this.spine.paused = !0);
              }),
              (t.prototype.resume = function() {
                this.spine && (this.spine.paused = !1);
              }),
              (t.checkCollision = function(e, t) {
                if (!t || !e) return !1;
                var i = t.center.x - t.halfExtents.x,
                  n = t.center.x + t.halfExtents.x,
                  a = t.center.y - t.halfExtents.y,
                  o = t.center.y + t.halfExtents.y,
                  r = cc.misc.clampf(e.center.x, i, n),
                  s = cc.misc.clampf(e.center.y, a, o),
                  c = e.center.x - r,
                  l = e.center.y - s;
                return c * c + l * l <= e.radius * e.radius;
              }),
              (t.prototype.destroyBullet = function(e) {
                (void 0 === e && (e = !1), this.destroyed || (this.smoke_node && (this.smoke_node.stopAllActions(), cc.tween(this.smoke_node).to(0.2, {
                      opacity: 0
                    }).removeSelf().start(),
                    (this.smoke_node = null)),
                  (this.hitCount = 0), this._hitMonsters.clear(),
                  (this.destroyed = !0),
                  (this._destPos = null),
                  (this._velocity = cc.v2(0, 0)),
                  (this._level = 0),
                  (this._more_range = 0), e && 10 != this.bulletType && r.default.inst.showBirdBaozha(this.bulletType, this.node.getPosition(), ), i.releaseBullet(this.bulletType, this.node)));
              }),
              (t.releaseBullet = function(e, t) {
                var i = this.bullet_pools.get(e);
                (i || ((i = new cc.NodePool()), this.bullet_pools.set(e, i)), i.put(t));
              }),
              (t.getBulletFromPool = function(e, t) {
                void 0 === t && (t = 1);
                var n = this.bullet_pools.get(e);
                if (
                  (n || ((n = new cc.NodePool()), this.bullet_pools.set(e, n)), n.size() > 0)) {
                  var a = n.get(),
                    o = a.getComponent(i);
                  return (a.stopAllActions(), o.unscheduleAllCallbacks(),
                    (o.destroyed = !1),
                    (o._destPos = null),
                    (o._velocity = cc.v2(0, 0)),
                    (o._level = 0),
                    (o.smoke_node = null),
                    (o.level = t),
                    (o.existTime = 0),
                    (a.scale = 1), a);
                }
                return null;
              }),
              (t.bullet_pools = new Map()), o(
                [u({
                  tooltip: "子弹类型"
                })], t.prototype, "bulletType", void 0, ), o([u({
                type: cc.Integer
              })], t.prototype, "damage", void 0), o([u], t.prototype, "speed", void 0), o([u], t.prototype, "pierce", void 0), o([u(sp.Skeleton)], t.prototype, "spine", void 0),
              (i = o([h], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
