// module: monster
// deps: {"../Script/libppgame/libcocos":"libcocos","../Script/libppgame/libwechat":"libwechat","./battleScene":"battleScene","./bird-grids":"bird-grids","./birds":"birds","./damage_toast_mgr":"damage_toast_mgr","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "74903Af9j1Jyb8p7DqCmlz0", "monster");
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
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.GetMonsterInfo = void 0));
        var r = e("./battleScene"),
          s = e("./damage_toast_mgr"),
          c = (e("../Script/libppgame/libwechat"), e("./birds")),
          l = e("./bird-grids"),
          d = e("./libppgame/onfire"),
          h = e("../Script/libppgame/libcocos"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          g = {
            1: {
              name: "绿皮猪",
              maxHealth: 100,
              attackDamage: 20,
              cd: 2,
              speed: 25,
              prefab: "monster1",
              skin: "pig1",
              type: "normal",
              des: "普通的绿色小猪，战斗力一般",
            },
            2: {
              name: "路障猪",
              maxHealth: 120,
              attackDamage: 25,
              cd: 2.2,
              speed: 30,
              prefab: "monster1",
              skin: "pig2",
              type: "normal",
              des: "头顶锥桶的普通小猪，战斗力略微提升",
            },
            3: {
              name: "眼镜猪",
              maxHealth: 80,
              attackDamage: 12,
              cd: 3,
              speed: 42,
              melee: 150,
              prefab: "monster1",
              skin: "pig3",
              type: "normal",
              des: "眼镜猪的移动速度较快，擅长远程攻击",
            },
            4: {
              name: "铁盔猪",
              maxHealth: 150,
              attackDamage: 30,
              cd: 2.5,
              speed: 32,
              prefab: "monster1",
              skin: "pig4",
              type: "normal",
              des: "铁盔猪拥有较强的攻击力和防御力",
            },
            5: {
              name: "挡板猪",
              maxHealth: 130,
              attackDamage: 30,
              cd: 2.8,
              speed: 35,
              prefab: "monster1",
              skin: "pig5",
              type: "normal",
              des: "档板猪很胆小，但拆家能力却很强",
            },
            6: {
              name: "气球猪",
              maxHealth: 120,
              attackDamage: 15,
              cd: 3.5,
              speed: 40,
              melee: 150,
              prefab: "monster_fly",
              skin: "flypig1",
              type: "fly",
              des: "气球猪用气球来增加机动性，远程攻击",
            },
            7: {
              name: "直升猪",
              maxHealth: 130,
              attackDamage: 30,
              cd: 2.5,
              speed: 52,
              prefab: "monster_fly",
              skin: "flypig2",
              type: "fly",
              des: "装了螺旋桨的绿皮猪，攻击力高",
            },
            8: {
              name: "风筝猪",
              maxHealth: 140,
              attackDamage: 25,
              cd: 2.2,
              speed: 64,
              prefab: "monster_fly",
              skin: "flypig3",
              type: "fly",
              des: "风筝猪学会了利用风势，速度快，攻击高",
            },
            9: {
              name: "蝙蝠猪",
              maxHealth: 50,
              attackDamage: 10,
              cd: 1.5,
              speed: 100,
              prefab: "monster_fly",
              skin: "flypig4",
              type: "fly",
              des: "移植了蝙蝠翅膀的绿皮猪，速度非常快",
            },
            101: {
              name: "猪国王",
              maxHealth: 1e3,
              attackDamage: 60,
              cd: 4,
              speed: 24,
              boss: !0,
              prefab: "monster_boss",
              skin: "pigking01",
              type: "boss",
              des: "绿皮猪的首领，是个暴君，攻击可以破盾",
            },
            102: {
              name: "金链猪",
              maxHealth: 1e3,
              attackDamage: 60,
              cd: 4,
              speed: 24,
              boss: !0,
              prefab: "monster_boss",
              skin: "pigking02",
              type: "boss",
              des: "绿皮猪里的土豪猪，喜欢黄金饰品，攻击可以破盾",
            },
            103: {
              name: "独眼猪",
              maxHealth: 1e3,
              attackDamage: 60,
              cd: 4,
              speed: 24,
              boss: !0,
              prefab: "monster_boss",
              skin: "pigking03",
              type: "boss",
              des: "喜欢冒险的独眼猪，据说曾经做过海盗，攻击可以破盾",
            },
            104: {
              name: "恶魔猪",
              maxHealth: 1e3,
              attackDamage: 60,
              cd: 4,
              speed: 24,
              boss: !0,
              prefab: "monster_boss",
              skin: "pigking04",
              type: "boss",
              des: "伪装成恶魔的巨型绿皮猪，头顶的角是塑料的，攻击可以破盾",
            },
          };

        function y(e) {
          return g[e];
        }
        i.GetMonsterInfo = y;
        var m = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.spine = null),
              (t.maxHealth = 30),
              (t.attackDamage = 10),
              (t.monsterType = 0),
              (t.visionRange = 400),
              (t.monster_base_type = "normal"),
              (t.hp_sprite = null),
              (t._moveSpeed = 100),
              (t.attck_cd = 2),
              (t.currentHealth = 0),
              (t._isDead = !1),
              (t.monsterId = ""),
              (t.no_move_dt = 0),
              (t.frozen_dt = 0),
              (t.stun_dt = 0),
              (t.debuffs = []),
              (t._orignalX = 0),
              (t._setup_type = 0),
              (t._setup_buff = 1),
              (t._my_config = null),
              (t._graphics = null),
              (t._loaded = !1),
              (t.offsetY = 0),
              (t._attacking = !1),
              (t.currentTarget = null), t);
          }
          var i;
          return (a(t, e),
            (i = t), Object.defineProperty(t.prototype, "moveSpeed", {
              get: function() {
                var e = r.default.inst.getBirdBuff(0, "speed_debuff");
                return e ? (this._moveSpeed * (100 - e)) / 100 : this._moveSpeed;
              },
              set: function(e) {
                this._moveSpeed = e;
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "isDead", {
              get: function() {
                return this._isDead;
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "orignalPos", {
              set: function(e) {
                ((this._orignalX = e.x), (this.node.y = e.y), this.setPosX());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setPosX = function() {
              ((this.node.scale = 0.9 * (0.54 + ((0.97 - 0.54) * (531 - this.node.y)) / 733)),
                (this.node.x = this._orignalX * this.node.scale));
            }),
            (t.prototype.setup = function(e, t) {
              if (
                (void 0 === e && (e = 0), void 0 === t && (t = 1), !this._loaded)) return ((this._setup_type = e), void(this._setup_buff = t));
              if ((this.clearAll(), (this._isDead = !1), 0 === e))
                if ("normal" == this.monster_base_type) e = (i = 100 * Math.random()) < 30 ? 1 : i < 50 ? 2 : i < 70 ? 3 : i < 90 ? 4 : 5;
                else if ("fly" == this.monster_base_type) e = (i = 100 * Math.random()) < 25 ? 6 : i < 50 ? 7 : i < 75 ? 8 : 9;
              else {
                var i;
                e = (i = 100 * Math.random()) < 25 ? 101 : i < 50 ? 102 : i < 75 ? 103 : 104;
              }
              ((this._attacking = !1),
                (this.currentTarget = null),
                (this.monsterType = e));
              var n = g[e];
              ((this._my_config = n),
                (this.maxHealth = Math.ceil(n.maxHealth * t)),
                (this.currentHealth = this.maxHealth),
                (this.attackDamage = Math.ceil(n.attackDamage * t)),
                (this.moveSpeed = 1.3 * n.speed),
                (this.attck_cd = n.cd),
                (this.monster_base_type = n.type));
              var a = n.skin;
              (this.spine.setSkin(a), "fly" == this.monster_base_type && 9 == this.monsterType ? this.playAnimation("walk2", !0) : this.playAnimation("walk", !0), this.hp_sprite && ((this.hp_sprite.fillRange = 1),
                (this.hp_sprite.node.parent.active = !1)));
            }),
            (t.prototype.updateGameSpeed = function() {
              this.spine.timeScale = r.default.inst.game_speed;
            }),
            (t.prototype.onLoad = function() {
              ((this._loaded = !0), this._setup_type && (this.setup(this._setup_type, this._setup_buff),
                  (this._setup_type = 0),
                  (this._setup_buff = 1)),
                (this.offsetY = this.node.getChildByName("box").y));
            }),
            (t.prototype.start = function() {}),
            (t.prototype.updateDebuff = function(e) {
              if (
                (this.no_move_dt > 0 && ((this.no_move_dt -= e), this.no_move_dt <= 0 && (this.no_move_dt = 0)), this.frozen_dt > 0 && ((this.frozen_dt -= e), this.frozen_dt <= 0 && ((this.frozen_dt = 0),
                  (this.spine.paused = !1), this.removeEffect("frozen"))), this.stun_dt > 0 && ((this.stun_dt -= e), this.stun_dt <= 0 && ((this.stun_dt = 0), this.removeEffect("stun"))), 0 !== this.debuffs.length))
                for (var t = this.debuffs.length - 1; t >= 0; t--) {
                  var i = this.debuffs[t];
                  switch (((i.update_dt += e), i.type)) {
                    case "burn":
                      i.update_dt >= 0.3 && (this.recieveDamage(i.value, !1, i.from),
                        (i.update_dt -= 0.3));
                  }
                  if (((i.duration -= e), i.duration <= 0)) switch ((this.debuffs.splice(t, 1), i.type)) {
                    case "burn":
                      this.removeEffect("burn");
                  }
                }
            }),
            (t.prototype.frozen = function(e) {
              this.frozen_dt > e || (0 == this.frozen_dt && ((this.spine.paused = !0), this.showEffect("frozen", cc.v2(0, 30), this.monsterType > 100 ? 2 : 1, )),
                (this.frozen_dt = e));
            }),
            (t.prototype.stun = function(e) {
              this.stun_dt > e || (0 == this.stun_dt && this.showEffect("stun", cc.v2(0, this.node.getChildByName("pig").getContentSize().height / 2, ), this.monsterType > 100 ? 2 : 1, ),
                (this.stun_dt = e));
            }),
            (t.prototype.addDebuff = function(e, t, i, n) {
              for (var a = 0, o = this.debuffs; a < o.length; a++) {
                var r = o[a];
                if (r.type === e) {
                  if (r.duration > t) return;
                  return ((r.duration = t), void(r.value = i));
                }
              }
              switch (
                (this.debuffs.push({
                  type: e,
                  duration: t,
                  value: i,
                  update_dt: 0,
                  from: n,
                }), e)) {
                case "burn":
                  this.showEffect(e, cc.v2(0, 25), this.monsterType > 100 ? 2 : 1, );
              }
            }),
            (t.prototype.showEffect = function(e, t, i) {
              var n = this;
              (void 0 === i && (i = 1), this.node.getChildByName(e) || h.cocos.loadRes("prefabs/status/" + e, cc.Prefab).then(function(e) {
                var a = cc.instantiate(e);
                (n.node.addChild(a), a.setPosition(t), (a.scale = i));
              }));
            }),
            (t.prototype.removeEffect = function(e) {
              var t = this.node.getChildByName(e);
              t && t.destroy();
            }),
            (t.prototype.removeAllDebuffs = function() {
              for (var e = 0, t = this.debuffs; e < t.length; e++) switch (t[e].type) {
                case "burn":
                  this.removeEffect("burn");
              }
              this.debuffs = [];
            }),
            (t.prototype.update = function(e) {
              if (r.default.inst && r.default.inst.isRunning && !this._isDead && (this.updateDebuff(e * r.default.inst.game_speed), !this._isDead && !this._attacking && 0 == this.no_move_dt && 0 == this.frozen_dt && 0 == this.stun_dt)) {
                if (!this.currentTarget || !this.currentTarget.isValid || "die" === this.currentTarget.getComponent(c.default).status) {
                  var t = l.default.inst.selectTarget(this);
                  if (t) {
                    var i = t.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).sub(i).mag() <= this.visionRange ? (this.currentTarget = t.node) : (this.currentTarget = null);
                  }
                }
                if (
                  (this.currentTarget ? this.moveToTarget(e) : this.defaultMovement(e), this.drawCollisionArea(), this.node.y < -cc.winSize.height / 2)) return void this.node.destroy();
                this.node.zIndex = 9999 - this.node.y;
              }
            }),
            (t.prototype.playAnimation = function(e, t) {
              (void 0 === t && (t = !0), this.spine && ((this.spine.timeScale = r.default.inst ? r.default.inst.game_speed : 1),
                (this.spine.paused = !1), this.spine.setAnimation(0, e, t)));
            }),
            (t.prototype.recieveDamage = function(e, t, i) {
              var n = this;
              if ((void 0 === t && (t = !1), !this._isDead)) {
                var a = this.currentHealth / this.maxHealth;
                if (
                  ((this.currentHealth -= e), this.hp_sprite && (this.hp_sprite.node.parent.active || (this.hp_sprite.node.parent.active = !0),
                    (this.hp_sprite.fillRange = this.currentHealth / this.maxHealth)), 5 == this.monsterType)) {
                  var o = this.currentHealth / this.maxHealth;
                  a > 0.7 && (o <= 0.35 ? this.spine.setSkin("pig1") : o <= 0.7 && this.spine.setSkin("pig5.5"));
                }
                this.currentHealth <= 0 && this.die(i);
                var c = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                (s.default.inst.damageToast(c.add(cc.v2(0, this.node.getContentSize().height / 4)), e, t, ),
                  (this.spine.node.color = cc.Color.RED), this.scheduleOnce(function() {
                    n.spine.node.color = cc.Color.WHITE;
                  }, 0.1 / r.default.inst.game_speed));
              }
            }),
            (t.prototype.pause = function() {
              this.spine.paused = !0;
            }),
            (t.prototype.resume = function() {
              0 == this.frozen_dt && (this.spine.paused = !1);
            }),
            (t.prototype.die = function(e) {
              var t = this;
              ((this._isDead = !0),
                (this.spine.paused = !1), this.playAnimation("dead", !1), this.clearAll(), d.fire("audio", "die"), this.scheduleOnce(function() {
                  ((t._attacking = !1),
                    (t.currentTarget = null), i.releaseMonster(t.node, t.monster_base_type));
                }, 1), this.drawCollisionArea(), r.default.inst.onMonsterDead(this, e));
            }),
            (t.prototype.clearAll = function() {
              ((this.no_move_dt = 0), this.frozen_dt > 0 && ((this.spine.paused = !1), (this.frozen_dt = 0)), this.removeEffect("frozen"), this.stun_dt > 0 && (this.stun_dt = 0), this.removeEffect("stun"), this.spine.setCompleteListener(null), this.removeAllDebuffs(), this.unscheduleAllCallbacks(), this.hp_sprite && (this.hp_sprite.node.parent.active = !1));
              var e = this.node.getChildByName("bird_baozha");
              e && e.removeFromParent();
            }),
            (t.prototype.attack = function() {
              var e = this;
              if (!this._isDead) {
                ((this._attacking = !0), this.playAnimation("atk", !1));
                var t = r.default.inst.battle_ts;
                this.spine.setCompleteListener(function(i) {
                  if ("atk" == i.animation.name && r.default.inst.isRunning) {
                    var n = r.default.inst.battle_ts;
                    if (((t = n), e.currentTarget && e.currentTarget.isValid))
                      if (e._my_config.melee)
                        (r.default.inst.firePigBullet(e.node.getPosition(), e.currentTarget, e.monsterType, e.attackDamage, ), e.playAnimation("walk", !0), e.currentTarget.isValid && "die" != e.currentTarget.getComponent(c.default).status ? e.scheduleOnce(function() {
                          e.attack(e.currentTarget);
                        }, Math.max(e.attck_cd - r.default.inst.battle_ts - t, 0.1, ), ) : ((e.currentTarget = null), (e._attacking = !1)));
                      else {
                        var a = e.currentTarget.getComponent(c.default).recieveDamage(e.attackDamage, e);
                        !a || a.hp <= 0 ? ((e.currentTarget = null),
                          (e._attacking = !1), e.playAnimation("walk", !0)) : (e.playAnimation("walk", !0), e.scheduleOnce(function() {
                          e.attack(e.currentTarget);
                        }, Math.max(e.attck_cd - r.default.inst.battle_ts - t, 0.1, ), ));
                      }
                    else((e.currentTarget = null),
                      (e._attacking = !1), e.playAnimation("walk", !0));
                  }
                });
              }
            }),
            (t.prototype.drawCollisionArea = function() {
              if (this._graphics && (this._graphics.clear(), !this._isDead)) {
                ((this._graphics.strokeColor = cc.Color.GREEN),
                  (this._graphics.lineWidth = 4));
                var e = this.getDrawRect();
                (this._graphics.rect(e.x, e.y, e.width, e.height), this._graphics.stroke(),
                  (this._graphics.strokeColor = cc.Color.RED),
                  (this._graphics.lineWidth = 2), this._graphics.circle(0, 0, this.visionRange), this._graphics.stroke());
              }
            }),
            (t.prototype.getDrawRect = function() {
              var e = this.node.getChildByName("box"),
                t = e.getPosition(),
                i = e.getContentSize();
              return new cc.Rect(t.x - i.width / 2, t.y - i.height / 2, i.width, i.height, );
            }),
            (t.releaseMonster = function(e, t) {
              switch ((void 0 === t && (t = "normal"), t)) {
                case "normal":
                  this.monster_pool.put(e);
                  break;
                case "fly":
                  this.monster_pool_fly.put(e);
                  break;
                case "boss":
                  this.monster_pool_boss.put(e);
              }
            }),
            (t.createMonster = function(e) {
              void 0 === e && (e = "normal");
              var t = null,
                n = null;
              switch (e) {
                case "normal":
                  t = this.monster_pool.get();
                  break;
                case "fly":
                  t = this.monster_pool_fly.get();
                  break;
                case "boss":
                  t = this.monster_pool_boss.get();
              }
              if (t)(n = t.getComponent(i)).clearAll();
              else {
                switch (e) {
                  case "normal":
                    t = cc.instantiate(r.default.inst.monsterPrefab);
                    break;
                  case "fly":
                    t = cc.instantiate(r.default.inst.monsterFlyPrefab);
                    break;
                  case "boss":
                    t = cc.instantiate(r.default.inst.monsterBossPrefab);
                }
                n = t.getComponent(i);
              }
              return ((n.monsterId = r.default.inst.getMonsterUUID()), t);
            }),
            (t.prototype.moveToTarget = function(e) {
              var t = this.currentTarget.getChildByName("box").convertToWorldSpaceAR(cc.v3(0, 0, 0)).sub(this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0))).normalize(),
                i = 2 == r.default.inst.game_speed ? 1.8 * this.moveSpeed * e : this.moveSpeed * e;
              ((this.node.y += t.y * i),
                (this._orignalX = this._orignalX + t.x * i), this.setPosX(), this.checkCollisionWithBird(this.currentTarget) && this.attack(this.currentTarget));
            }),
            (t.prototype.defaultMovement = function(e) {
              ((this.node.y -= this.moveSpeed * e * (2 == r.default.inst.game_speed ? 1.8 : 1)), 0 == r.default.inst.alive_birds && (this.node.y -= 3 * this.moveSpeed * e * r.default.inst.game_speed), this.setPosX(), this.node.y <= -530 && r.default.inst.recieveDamage(1));
            }),
            (t.prototype.checkCollisionWithBird = function(e) {
              var t = this.node.getChildByName("box"),
                i = e.getChildByName("box");
              if (!t || !i) return !1;
              var n = this.getDrawRect(),
                a = y(this.monsterType);
              a.melee && ((n.width += 2 * a.melee),
                (n.height += 2 * a.melee),
                (n.x -= a.melee),
                (n.y -= a.melee));
              var o = i.convertToWorldSpaceAR(cc.v2(0, 0)),
                r = this.node.convertToNodeSpaceAR(o),
                s = i.getContentSize(),
                c = new cc.Rect(r.x - s.width / 2, r.y - s.height / 2, s.width, s.height, );
              return n.intersects(c);
            }),
            (t.monster_pool = new cc.NodePool()),
            (t.monster_pool_fly = new cc.NodePool()),
            (t.monster_pool_boss = new cc.NodePool()), o([f(sp.Skeleton)], t.prototype, "spine", void 0), o([f({
              type: cc.Integer
            })], t.prototype, "maxHealth", void 0), o([f], t.prototype, "attackDamage", void 0), o([f], t.prototype, "monsterType", void 0), o([f], t.prototype, "visionRange", void 0), o([f], t.prototype, "monster_base_type", void 0), o([f(cc.Sprite)], t.prototype, "hp_sprite", void 0),
            (i = o([p], t)));
        })(cc.Component);
        ((i.default = m), cc._RF.pop());
      };
