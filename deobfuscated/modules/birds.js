// module: birds
// deps: {"../Script/gameData":"gameData","../Script/libppgame/libwechat":"libwechat","./battleResMgr":"battleResMgr","./battleScene":"battleScene","./bird-grids":"bird-grids","./birdbullet":"birdbullet","./dragable":"dragable","./libppgame/onfire":"onfire","./libppgame/utils":"utils","./refresh-area":"refresh-area"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "78bf4ivLsFP1qYdknp9MPpb", "birds");
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
          },
          r = (this && this.__awaiter) || function(e, t, i, n) {
            return new(i || (i = Promise))(function(a, o) {
              function r(e) {
                try {
                  c(n.next(e));
                } catch (t) {
                  o(t);
                }
              }

              function s(e) {
                try {
                  c(n.throw(e));
                } catch (t) {
                  o(t);
                }
              }

              function c(e) {
                var t;
                e.done ? a(e.value) : ((t = e.value), t instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          },
          s = (this && this.__generator) || function(e, t) {
            var i,
              n,
              a,
              o,
              r = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o);

            function s(e) {
              return function(t) {
                return c([e, t]);
              };
            }

            function c(o) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; r;) try {
                if (
                  ((i = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
                switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return (r.label++, {
                      value: o[1],
                      done: !1
                    });
                  case 5:
                    (r.label++, (n = o[1]), (o = [0]));
                    continue;
                  case 7:
                    ((o = r.ops.pop()), r.trys.pop());
                    continue;
                  default:
                    if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      r.label = o[1];
                      break;
                    }
                    if (6 === o[0] && r.label < a[1]) {
                      ((r.label = a[1]), (a = o));
                      break;
                    }
                    if (a && r.label < a[2]) {
                      ((r.label = a[2]), r.ops.push(o));
                      break;
                    }
                    (a[2] && r.ops.pop(), r.trys.pop());
                    continue;
                }
                o = t.call(e, r);
              } catch (s) {
                ((o = [6, s]), (n = 0));
              } finally {
                i = a = 0;
              }
              if (5 & o[0]) throw o[1];
              return {
                value: o[0] ? o[1] : void 0,
                done: !0
              };
            }
          };
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.getBirdConfig = i.BirdConfigs = i.BirdLevelBuff = void 0));
        var c = e("./battleScene"),
          l = e("./birdbullet"),
          d = e("./libppgame/utils"),
          h = e("./libppgame/onfire"),
          u = e("./dragable"),
          p = e("./bird-grids"),
          f = e("./refresh-area"),
          g = e("./battleResMgr"),
          y = e("../Script/gameData"),
          m = e("../Script/libppgame/libwechat");
        i.BirdLevelBuff = 0.1;
        var _ = cc._decorator,
          v = _.ccclass,
          b = _.property;

        function w(e) {
          return i.BirdConfigs[e] || i.BirdConfigs[1];
        }
        ((i.BirdConfigs = {
            1: {
              name: "胖红",
              stars: 1,
              unlockLevel: 1,
              block: 1,
              hp: 250,
              damage: 20,
              attackType: "normal",
              cd: 1.5,
              speed: 500,
              des: "直线发射后对首个命中的目标造成伤害",
              tips: "单体伤害",
            },
            2: {
              name: "分身鸟",
              stars: 2,
              unlockLevel: 1,
              block: 3,
              hp: 700,
              damage: 18,
              attackType: "normal",
              bulletCount: 5,
              cd: 4,
              speed: 400,
              des: "分身鸟发射后化3只分身，造成散射伤害",
              tips: "散射攻击",
            },
            3: {
              name: "蛋黄",
              stars: 1,
              unlockLevel: 1,
              block: 1,
              hp: 120,
              damage: 0,
              attackType: "addEgg",
              eggCount: 2,
              cd: 10,
              des: "蛋黄会持续产出鸟蛋援助战场",
              tips: "产出资源",
            },
            4: {
              name: "疾风",
              stars: 1,
              unlockLevel: 1,
              block: 2,
              hp: 600,
              damage: 15,
              attackType: "normal",
              pierce: -1,
              cd: 2,
              speed: 600,
              speed2: 1e3,
              des: "疾风贯穿战场，对直线怪物造成伤害",
              tips: "直线攻击",
            },
            5: {
              name: "火烈鸟",
              stars: 2,
              unlockLevel: 3,
              block: 2,
              hp: 280,
              damage: 30,
              attackType: "normal",
              effect: [{
                type: "burn",
                duration: 1.5,
                factor: 0.5
              }],
              cd: 3,
              speed: 350,
              des: "火烈鸟对单一目标造成伤害并附加持续的点燃伤害",
              tips: "单体伤害，持续点燃",
            },
            6: {
              name: "盾盾鸟",
              stars: 2,
              unlockLevel: 4,
              block: 1,
              hp: 250,
              damage: 0,
              attackType: "armor",
              armor: 2,
              cd: 3,
              des: "盾盾鸟为相邻的小鸟附加可以格挡攻击的护盾",
              tips: "护盾格挡",
            },
            7: {
              name: "呆护士",
              stars: 1,
              unlockLevel: 5,
              block: 2,
              hp: 500,
              damage: 0,
              attackType: "heal",
              healAmount: 50,
              cd: 2,
              des: "呆护士会随机治疗一只受伤的小鸟",
              tips: "治疗恢复",
            },
            8: {
              name: "急冻鸟",
              stars: 2,
              unlockLevel: 1,
              block: 2,
              hp: 320,
              damage: 60,
              attackType: "normal",
              cd: 4,
              speed: 380,
              des: "急冻鸟会对目标造成伤害并附加冰冻效果",
              tips: "单体攻击，冰冻目标",
            },
            9: {
              name: "回旋鸟",
              stars: 3,
              unlockLevel: 5,
              block: 3,
              hp: 280,
              damage: 20,
              attackType: "normal",
              cd: 8,
              speed: 320,
              des: "回旋鸟会在目的地旋转一段时间，持续造成伤害",
              tips: "范围持续伤害",
            },
            10: {
              name: "闪电",
              stars: 3,
              unlockLevel: 6,
              block: 3,
              hp: 310,
              damage: 40,
              attackType: "normal",
              cd: 5,
              speed: 800,
              des: "闪电快速在怪物之间弹射造成伤害",
              tips: "多目标攻击",
            },
            11: {
              name: "飓风",
              stars: 3,
              unlockLevel: 6,
              block: 3,
              hp: 220,
              damage: 70,
              attackType: "normal",
              cd: 4.5,
              speed: 520,
              des: "飓风命中目标后会产生击退之力，对后续目标造成击退效果",
              tips: "单体伤害，直线击退",
            },
            12: {
              name: "喳喳冰",
              stars: 2,
              unlockLevel: 7,
              block: 3,
              hp: 240,
              damage: 55,
              attackType: "normal",
              cd: 3.2,
              speed: 460,
              des: "喳喳冰对目标造成伤害后分裂成3只可附加冰冻效果的小鸟",
              tips: "散射攻击，冰冻目标",
            },
            13: {
              name: "膨胀鸟",
              stars: 3,
              unlockLevel: 2,
              block: 4,
              hp: 420,
              damage: 80,
              attackType: "normal",
              cd: 6,
              speed: 300,
              des: "膨胀鸟变大后压向目标，造成范围伤害并附加晕眩效果",
              tips: "范围伤害，晕眩目标",
            },
            14: {
              name: "爆裂鸟",
              stars: 3,
              unlockLevel: 7,
              block: 4,
              hp: 550,
              damage: 100,
              attackType: "normal",
              cd: 10,
              speed: 250,
              des: "爆裂鸟在目标区域爆炸后留下火焰，造成范围和持续性伤害",
              tips: "范围伤害，持续伤害",
            },
          }),
          (i.getBirdConfig = w));
        var C = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.attack_cd = 2),
              (t.bird_type = 1),
              (t.level_label = null),
              (t.spine = null),
              (t.spine2 = null),
              (t.danggong_spine = null),
              (t.bullet_prefab = null),
              (t.mask_anim = null),
              (t.mask_spine = null),
              (t.hp_sprite = null),
              (t.visionRange = 600),
              (t.box_sps = []),
              (t.lv_box_sps = []),
              (t.lv_box_sp = null),
              (t.can_levelup = null),
              (t.egg_add_label = null),
              (t.armor_label = null),
              (t._armor = 0),
              (t._bird_level = 1),
              (t._skinName = ""),
              (t._damage = 0),
              (t._heal_amount = 0),
              (t._add_egg_count = 0),
              (t._add_armor = 0),
              (t._symbol = null),
              (t._is_ready = !1),
              (t._can_merge_list = []),
              (t._link_list = []),
              (t._drag_info = null),
              (t._overlap_cells = []),
              (t._must_strike_counter = 0),
              (t._status = ""),
              (t._attack_dt = 0),
              (t.currentHP = 100),
              (t.maxHP = 100), t);
          }
          var n;
          return (a(t, e),
            (n = t),
            (t.prototype.addArmor = function(e) {
              if (!(this._armor >= e)) {
                ((this._armor = e), this.armor_label.node.parent.active || ((this.armor_label.node.parent.active = !0),
                    (this.armor_label.node.parent.opacity = 255)),
                  (this.armor_label.string = this._armor.toString()), this.armor_label.node.parent.stopAllActions());
                var t = c.default.inst.game_speed;
                cc.tween(this.armor_label.node.parent).to(0.15 / t, {
                  scale: 1.2
                }).to(0.1 / t, {
                  scale: 1
                }).start();
              }
            }), Object.defineProperty(t.prototype, "armor", {
              get: function() {
                return this._armor;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.clearArmor = function() {
              ((this._armor = 0), (this.armor_label.node.parent.active = !1));
            }), Object.defineProperty(t.prototype, "bird_level", {
              get: function() {
                return this._bird_level;
              },
              set: function(e) {
                ((this._bird_level = e), this.level_label && ((this.level_label.string = this._bird_level.toString()),
                  (this.level_label.node.color = cc.Color.BLACK)), this.setup());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.updateSkin = function() {
              var e = this._bird_level > 5 ? 5 : this._bird_level,
                t = "bird" + this.bird_type.toString().padStart(2, "0") + e.toString().padStart(2, "0");
              (this.spine.setSkin(t), this.spine2.setSkin(t), this.mask_spine.setSkin(t),
                (this._skinName = t));
            }), Object.defineProperty(t.prototype, "skinName", {
              get: function() {
                return this._skinName;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.updateZIndex = function() {
              this.deployed ? 10 == this.bird_type ? (this.node.zIndex = 100 * (9 - this.deployed.row) + this.deployed.col) : 11 == this.bird_type ? (this.node.zIndex = 100 * (9 - this.deployed.row) + this.deployed.col + 1) : (this.node.zIndex = 100 * (10 - this.deployed.row) + this.deployed.col) : (this.node.zIndex = 1320 + this.node.x);
            }), Object.defineProperty(t.prototype, "damage", {
              get: function() {
                if (!this._damage) {
                  var e = w(this.bird_type);
                  this._damage = e.damage;
                  var t = y.default.getTowerLevel(this.bird_type);
                  (t > 1 || this.bird_level > 1) && ((this._damage *= 1 + 0.1 * (t - 1)),
                    (this._damage = Math.ceil(this._damage * Math.pow(1.6, this.bird_level - 1), )));
                }
                var i = this._damage,
                  n = c.default.inst.getBirdBuff(this.bird_type, "attack"),
                  a = c.default.inst.getBirdBuff(0, "bird_counts_damage");
                return (a && (n += a * c.default.inst.alive_birds), n && (i = Math.floor((i * (100 + n)) / 100)), console.log("bird damage", i, this.bird_type, this.bird_level, this._damage, ), i);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getBulletDamage = function() {
              var e = i.BirdConfigs[this.bird_type] || i.BirdConfigs[1];
              return Math.ceil(e.damage * (1 + 0.5 * (this.bird_level - 1)));
            }),
            (t.prototype.getHealAmount = function() {
              var e = c.default.inst.getBirdBuff(this.bird_type, "extra_heal");
              return e ? Math.ceil((this._heal_amount * (100 + e.value)) / 100) : this._heal_amount;
            }),
            (t.prototype.getEggCount = function() {
              var e = c.default.inst.getBirdBuff(this.bird_type, "extra_egg");
              return this._add_egg_count + e;
            }),
            (t.prototype.getAddArmor = function() {
              return this._add_armor;
            }), Object.defineProperty(t.prototype, "symbol", {
              get: function() {
                return this._symbol;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onLoad = function() {
              var e = this;
              ((this._symbol = Symbol()),
                (this.status = "idle"), u.default.prototype.onLoad.call(this),
                (this.hp_sprite.node.parent.active = !1),
                (this.level_label.node.color = cc.Color.BLACK), this.setup(), this.updateBoxColor(this.node.getChildByName("grids").getChildByName("sp"), ), this.initLevelupAnimation());
              var t = this.node.getChildByName("video_unlock");
              (t.on("touchstart", function() {
                return r(e, void 0, void 0, function() {
                  return s(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [4, m.wechat.showRewardedVideoAdNew()];
                      case 1:
                        return e.sent().isEnded ? ((t.active = !1), [2]) : [2];
                    }
                  });
                });
              }), cc.tween(t).repeatForever(cc.tween().to(1, {
                scale: 1.1
              }).to(1, {
                scale: 1
              }), ).start());
            }),
            (t.prototype.update_hp = function(e) {
              void 0 === e && (e = !1);
              var t = i.BirdConfigs[this.bird_type],
                n = this.maxHP - this.currentHP;
              ((this.maxHP = t.hp), this.bird_level > 1 && (this.maxHP = Math.ceil(Math.pow(1.25, this.bird_level - 1) * this.maxHP, )));
              var a = i.BirdLevelBuff,
                o = y.default.getTowerLevel(this.bird_type);
              o > 1 && (this.maxHP = Math.floor(this.maxHP * Math.pow(1 + a, o - 1)));
              var r = c.default.inst.getBirdBuff(this.bird_type, "hp");
              (r && (this.maxHP = Math.ceil((this.maxHP * (r + 100)) / 100)),
                (this.currentHP = e ? this.maxHP : this.maxHP - n),
                (this.hp_sprite.fillRange = this.currentHP / this.maxHP));
            }),
            (t.prototype.update_cd = function() {
              var e = i.BirdConfigs[this.bird_type] || i.BirdConfigs[1];
              if (
                ((this.attack_cd = e.cd), "addEgg" == e.attackType || "armor" == e.attackType)) {
                var t = y.default.getTowerLevel(this.bird_type);
                t > 1 && (this.attack_cd = Math.floor(this.attack_cd * Math.pow(1 - i.BirdLevelBuff / 2, t - 1), ));
              }
              var n = c.default.inst.getBirdBuff(this.bird_type, "cd");
              n && (this.attack_cd = (this.attack_cd * (100 - n)) / 100);
            }),
            (t.prototype.setup = function() {
              (this.egg_add_label && (this.egg_add_label.node.active = !1), this.update_hp(!0), this.update_cd());
              var e = i.BirdConfigs[this.bird_type] || i.BirdConfigs[1],
                t = y.default.getTowerLevel(this.bird_type);
              switch (e.attackType) {
                case "addEgg":
                  this._add_egg_count = e.eggCount + this.bird_level - 1;
                  break;
                case "armor":
                  this._add_armor = e.armor + this.bird_level - 1;
                  break;
                case "heal":
                  ((this._heal_amount = Math.floor(e.healAmount * Math.pow(1.6, this.bird_level - 1), )), t > 1 && (this._heal_amount = Math.floor(this._heal_amount * Math.pow(1 + i.BirdLevelBuff, t - 1), )));
              }
              if (
                (this.updateSkin(), this.updateBoxColor(this.node.getChildByName("grids").getChildByName("sp"), ), this.deployed)) {
                var n = p.default.inst.getBirdBoxSprite(this);
                n && this.updateBoxColor(n);
              }
            }),
            (t.prototype.start = function() {
              var e = this;
              (this.scheduleOnce(function() {
                e._is_ready = !0;
              }, 2 * Math.random()), u.default.prototype.start.call(this));
            }),
            (t.getDragingBird = function() {
              return this._draging_bird;
            }),
            (t.prototype.onDragStart = function(e, t) {
              var i = this;
              ((n._draging_bird = this),
                (this.node.zIndex = 9999), p.default.inst.selectBird(this),
                (this._can_merge_list = p.default.inst.getMergeableBirds(this)), this._can_merge_list.length > 0 && ((this._link_list = []), this._can_merge_list.forEach(function(e) {
                    (e.spine.setAnimation(0, "02", !0),
                      (e.spine.timeScale = 2 * c.default.inst.game_speed));
                    var t = c.default.inst.showLink(e.node.convertToWorldSpaceAR(cc.Vec3.ZERO), i.node.convertToWorldSpaceAR(cc.Vec3.ZERO), );
                    i._link_list.push(t);
                  }), this.spine.setAnimation(0, "02", !0),
                  (this.spine.timeScale = 2 * c.default.inst.game_speed)),
                (this._overlap_cells = []),
                (this._drag_info = {
                  start_ts: Date.now(),
                  start_location: t.getLocation(),
                  total_moved: 0,
                }), this.onDragMove(e, t), h.fire("audio", "click_drop_combined"));
            }),
            (t.prototype.onDragMove = function(e, t) {
              var i = this;
              p.default.inst.setCellsColor(this._overlap_cells, "normal");
              var n = p.default.inst.checkOverlap(this),
                a = n.cells;
              (n.overlappingBirds, p.default.inst.setCellsColor(a, a.length == this.shapeData.json.length ? "green" : "red", ),
                (this._overlap_cells = a), this._link_list.length > 0 && this._link_list.forEach(function(e) {
                  e.setLinkPos(i.node.convertToWorldSpaceAR(cc.Vec3.ZERO));
                }),
                (this._drag_info.total_moved += t.getDelta().normalize().mag()));
            }),
            (t.prototype.onDragEnd = function() {
              var e = this,
                t = p.default.inst.checkOverlap(this),
                i = t.cells,
                a = t.overlappingBirds;
              if (i.length == this.shapeData.json.length) {
                if (this.bird_level < 5) {
                  for (var o = null, r = 0; r < i.length; r++) {
                    if (!i[r].bird || i[r].bird == this || i[r].bird.bird_type != this.bird_type || i[r].bird.bird_level != this.bird_level) {
                      o = null;
                      break;
                    }
                    if (o) {
                      if (o != i[r].bird) {
                        o = null;
                        break;
                      }
                    } else o = i[r].bird;
                  }
                  if (o) return (o.levelup(), this._can_merge_list.length > 0 && (this._can_merge_list.forEach(function(e) {
                        ((e.spine.timeScale = c.default.inst.game_speed), e.spine.setAnimation(0, "01", !0));
                      }), this._link_list.forEach(function(e) {
                        g.default.releaseLink(e.node);
                      }),
                      (this._link_list = [])), this.deployed ? (p.default.inst.removeBirds(this), this.node.destroy()) : f.default.inst.removeBird(this.node),
                    (n._draging_bird = null), p.default.inst.setCellsColor(i, "normal"), c.default.inst.refreshBirdsCanLevelup(), 4 == c.default.inst.current_guide_step && c.default.inst.checkGuideStep4(), void c.default.inst.updateTotalHp());
                }
                var s = a.filter(function(t) {
                  return t !== e;
                }).map(function(e) {
                  return e.node;
                });
                (s.forEach(function(e) {
                  var t = e.getComponent(n);
                  p.default.inst.removeBirds(t);
                }), s.length > 0 && f.default.inst.restoreBirds(s), p.default.inst.putBirds(this), c.default.inst.onBirdDeployed(this), c.default.inst.current_guide_step && (1 == c.default.inst.current_guide_step ? c.default.inst.startGuide(2) : 2 == c.default.inst.current_guide_step ? 0 == f.default.inst.bird_count && c.default.inst.startGuide(3) : 4 == c.default.inst.current_guide_step && c.default.inst.checkGuideStep4()));
              } else this.deployed ? (p.default.inst.removeBirds(this), f.default.inst.restoreBird(this.node)) : f.default.inst.refreshBirdsPostion(this.node);
              (this._can_merge_list.length > 0 && (this._can_merge_list.forEach(function(e) {
                    (e.spine.setAnimation(0, "01", !0),
                      (e.spine.timeScale = c.default.inst.game_speed));
                  }), this.spine.setAnimation(0, "01", !0),
                  (this.spine.timeScale = c.default.inst.game_speed), this._link_list.forEach(function(e) {
                    g.default.releaseLink(e.node);
                  })),
                (n._draging_bird = null), p.default.inst.setCellsColor(i, "normal"), c.default.inst.updateTotalHp(), this._drag_info.start_ts + 500 > Date.now() && this._drag_info.total_moved < 3 ? (c.default.inst.openTowerInfo(this), console.log("this._drag_info.total_moved", this._drag_info.total_moved, )) : h.fire("audio", "click_drop_combined"));
            }),
            (t.prototype.attack = function() {
              this.status = "attack";
            }), Object.defineProperty(t.prototype, "status", {
              get: function() {
                return this._status;
              },
              set: function(e) {
                var t = this;
                if (this._status != e) switch (e) {
                  case "attack":
                    var n = i.BirdConfigs[this.bird_type];
                    switch (n.attackType) {
                      case "normal":
                        var a = c.default.inst.selectTarget(this.node);
                        if (a) {
                          var o = c.default.inst.getBirdBuff(this.bird_type, "must_strike", ),
                            r = !1;
                          if (
                            (o && (this._must_strike_counter++, this._must_strike_counter >= o && ((r = !0), (this._must_strike_counter = 0))), this.bullet_prefab)) {
                            var s = c.default.inst.getBirdBuff(this.bird_type, "extra_bullet", ),
                              u = a.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            13 != this.bird_type && 14 != this.bird_type && (u.y += a.offsetY);
                            var f = this.node.convertToWorldSpaceAR(cc.v2(0, 0), ),
                              g = u.sub(f);
                            ((this.spine.timeScale = c.default.inst.game_speed),
                              (this.spine2.timeScale = c.default.inst.game_speed),
                              (this.mask_spine.timeScale = c.default.inst.game_speed),
                              (this.spine2.node.active = !0), this.spine2.setAnimation(0, "04", !1), this.spine.setAnimation(0, "03", !0),
                              (this._status = "cd"),
                              (this.mask_anim.node.active = !0), this.mask_spine.setAnimation(0, "07", !0), this.mask_spine.setSkin(this._skinName));
                            var y = Math.floor(this.node.getContentSize().height / 64, );
                            ((this.mask_anim.play("mask0" + y).speed = (3 / this.attack_cd) * c.default.inst.game_speed), this.mask_anim.once("finished", function() {
                              t.mask_anim.node.active = !1;
                            }), this.spine2.setCompleteListener(function(e) {
                              if ("04" == e.animation.name)
                                if (
                                  ((t.spine2.node.active = !1), n.bulletCount)) {
                                  for (var i = 0; i < n.bulletCount; i++) {
                                    var a = (y = t.createBullet()).getChildByName("spine").getComponent(sp.Skeleton);
                                    (y.setPosition(t.spine.node.position),
                                      (y.parent = t.spine.node.parent));
                                    var o = y.getComponent(l.default);
                                    (r && o.setStrike(100),
                                      (a.timeScale = c.default.inst.game_speed), a.setAnimation(0, "05", !0), o.updateBulletSkin());
                                    var h = 2 == i ? u : f.add(d.rotateVector(g, 10 * (i - 2)), );
                                    (c.default.inst.fireBullet(t.bird_type, y, h, ), a.setEndListener(function() {}));
                                  }
                                  var p = c.default.inst.getBirdBuff(t.bird_type, "extra_bird", );
                                  p && t.scheduleOnce(function() {
                                    for (var e = (p - 1) / 2, i = 0; i < p; i++) {
                                      var n = t.createBullet(),
                                        a = n.getChildByName("spine").getComponent(sp.Skeleton);
                                      (n.setPosition(t.spine.node.position, ),
                                        (n.parent = t.spine.node.parent));
                                      var o = n.getComponent(l.default);
                                      (r && o.setStrike(100),
                                        (a.timeScale = c.default.inst.game_speed), a.setAnimation(0, "05", !0), o.updateBulletSkin());
                                      var s = i == e ? u : f.add(d.rotateVector(g, 10 * (i - e), ), );
                                      (c.default.inst.fireBullet(t.bird_type, n, s, ), a.setEndListener(function() {}));
                                    }
                                  }, 0.1);
                                } else if (t.bullet_prefab) {
                                var y;
                                if (
                                  ((a = (y = t.createBullet()).getChildByName("spine").getComponent(sp.Skeleton)), y.setPosition(t.spine.node.position),
                                    (y.parent = t.spine.node.parent),
                                    (o = y.getComponent(l.default)), r && o.setStrike(100),
                                    (a.timeScale = c.default.inst.game_speed), a.setAnimation(0, "05", !0), o.updateBulletSkin(), c.default.inst.fireBullet(t.bird_type, y, u, ), a.setEndListener(function() {}), s))
                                  for (i = 0; i < s; i++) t.scheduleOnce(function() {
                                    var e = t.createBullet(),
                                      i = e.getChildByName("spine").getComponent(sp.Skeleton);
                                    (e.setPosition(t.spine.node.position, ),
                                      (e.parent = t.spine.node.parent));
                                    var n = e.getComponent(l.default);
                                    (r && n.setStrike(100),
                                      (i.timeScale = c.default.inst.game_speed), i.setAnimation(0, "05", !0), n.updateBulletSkin(), c.default.inst.fireBullet(t.bird_type, e, u, ), i.setEndListener(function() {}));
                                  }, 0.05);
                              }
                            }), h.fire("audio", "fire"), this.danggong_spine && (s ? this.extraDangong(s) : ((this.danggong_spine.node.active = !0),
                              (this.danggong_spine.timeScale = c.default.inst.game_speed), this.danggong_spine.setAnimation(0, "dangong", !1, ), this.danggong_spine.setEndListener(function() {
                                t._is_ready = !0;
                              }, ))));
                          } else console.warn("No bullet prefab set for bird type", this.bird_type, );
                        } else((this._attack_dt = this.attack_cd),
                          (this._is_ready = !0),
                          (this.status = "idle"));
                        break;
                      case "addEgg":
                      case "heal":
                        var m = "heal" == n.attackType ? c.default.inst.selectHealTarget() || this : null;
                        "addEgg" == n.attackType || m ? ((this.spine.timeScale = c.default.inst.game_speed), this.spine.setAnimation(0, "05", !1), this.spine.addAnimation(0, "03", !0), "addEgg" == n.attackType && ((this.egg_add_label.string = "+" + this.getEggCount()),
                            (this.egg_add_label.node.active = !0)),
                          (this._status = "cd"), console.log("======================================", n.attackType, ), this.spine.setCompleteListener(function(e) {
                            if ("05" == e.animation.name) {
                              (t.egg_add_label && (t.egg_add_label.node.active = !1),
                                (t.mask_anim.node.active = !0),
                                (t.mask_spine.timeScale = c.default.inst.game_speed), t.mask_spine.setAnimation(0, "07", !0), t.mask_spine.setSkin(t._skinName));
                              var i = Math.floor(t.node.getContentSize().height / 64, );
                              ((t.mask_anim.play("mask0" + i).speed = (3 / t.attack_cd) * c.default.inst.game_speed), t.mask_anim.once("finished", function() {
                                  t.mask_anim.node.active = !1;
                                }),
                                (t._is_ready = !0), "addEgg" == n.attackType ? (c.default.inst.eggCount += t.getEggCount()) : m.heal(t.getHealAmount()), h.fire("audio", "addEgg" == n.attackType ? "加蛋" : "加血", ));
                            }
                          })) : ((this._attack_dt = this.attack_cd),
                          (this._is_ready = !0),
                          (this.status = "idle"));
                        break;
                      case "armor":
                        ((this.spine.timeScale = c.default.inst.game_speed), this.spine.setAnimation(0, "05", !1), this.spine.addAnimation(0, "03", !0),
                          (this._status = "cd"), h.fire("audio", "加盾"), this.spine.setCompleteListener(function(e) {
                            if ("05" == e.animation.name) {
                              ((t.mask_anim.node.active = !0),
                                (t.mask_spine.timeScale = c.default.inst.game_speed), t.mask_spine.setAnimation(0, "07", !0), t.mask_spine.setSkin(t._skinName));
                              var i = Math.floor(t.node.getContentSize().height / 64, );
                              ((t.mask_anim.play("mask0" + i).speed = (3 / t.attack_cd) * c.default.inst.game_speed), t.mask_anim.once("finished", function() {
                                  t.mask_anim.node.active = !1;
                                }),
                                (t._is_ready = !0));
                              var n = p.default.inst.getNeighborBirds(t);
                              if (n.length > 0)
                                for (var a = 0; a < n.length; a++) n[a].addArmor(t.getAddArmor());
                            }
                          }));
                        break;
                      default:
                        console.warn("Unknown attack type: " + n.attackType);
                    }
                    break;
                  case "cd":
                    ((this.spine.timeScale = c.default.inst.game_speed), this.spine.setAnimation(0, "03", !0),
                      (this._status = e));
                    break;
                  case "idle":
                    ((this._status = e), this.spine.setAnimation(0, "01", !0),
                      (this.spine.timeScale = c.default.inst.game_speed));
                    break;
                  case "die":
                    ((this._status = e),
                      (this.spine.timeScale = c.default.inst.game_speed), this.spine.setAnimation(0, "06", !1));
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.pause = function() {
              ((this.spine.paused = !0),
                (this.spine2.paused = !0), this.danggong_spine && (this.danggong_spine.paused = !0),
                (this.mask_spine.paused = !0), this.mask_anim.pause());
            }),
            (t.prototype.updateGameSpeed = function() {
              var e = c.default.inst.game_speed;
              ((this.spine.timeScale = e),
                (this.spine2.timeScale = e), this.danggong_spine && (this.danggong_spine.timeScale = e),
                (this.mask_spine.timeScale = e));
            }),
            (t.prototype.resume = function() {
              ((this.spine.paused = !1),
                (this.spine2.paused = !1), this.danggong_spine && (this.danggong_spine.paused = !1),
                (this.mask_spine.paused = !1), this.mask_anim.resume());
            }),
            (t.prototype.extraDangong = function(e) {
              return r(this, void 0, void 0, function() {
                var t,
                  i,
                  n,
                  a = this;
                return s(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ((this.danggong_spine.node.active = !0),
                        (t = function(e) {
                          return s(this, function(t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (i.danggong_spine.timeScale = c.default.inst.game_speed), i.danggong_spine.setAnimation(0, "dangong", !1, ),
                                  [
                                    4,
                                    new Promise(function(t) {
                                      a.danggong_spine.setEndListener(function() {
                                        (0 == e && (a._is_ready = !0), t());
                                      }, );
                                    }),
                                  ]);
                              case 1:
                                return (t.sent(), [2]);
                            }
                          });
                        }),
                        (i = this),
                        (n = 0),
                        (o.label = 1));
                    case 1:
                      return n < e ? [5, t(n)] : [3, 4];
                    case 2:
                      (o.sent(), (o.label = 3));
                    case 3:
                      return (n++, [3, 1]);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.update = function(e) {
              var t = this;
              if (c.default.inst.isRunning && this._is_ready)
                if (
                  ((this._attack_dt += e * c.default.inst.game_speed), this._attack_dt >= this.attack_cd))
                  ((this._attack_dt -= this.attack_cd),
                    (this._is_ready = !1), this.attack());
                else if ("idle" == this._status) {
                ((this.status = "cd"),
                  (this.mask_anim.node.active = !0),
                  (this.mask_spine.timeScale = c.default.inst.game_speed), this.mask_spine.setAnimation(0, "07", !0), this.mask_spine.setSkin(this._skinName));
                var i = Math.floor(this.node.getContentSize().height / 64);
                ((this.mask_anim.play("mask0" + i).speed = (3 / (this.attack_cd - this._attack_dt)) * c.default.inst.game_speed), this.mask_anim.once("finished", function() {
                  t.mask_anim.node.active = !1;
                }));
              }
            }),
            (t.prototype.createBullet = function() {
              var e,
                t = l.default.getBulletFromPool(this.bird_type, this.bird_level, );
              return (t ? ((e = t.getComponent(l.default)).symbol = this._symbol) : (((e = (t = cc.instantiate(this.bullet_prefab, )).getComponent(l.default)).level = this.bird_level),
                (e.symbol = this._symbol)), t);
            }),
            (t.prototype.levelup = function() {
              (this.bird_level++,
                (this._damage = 0), h.fire("audio", "upgrade"), this.playMergeEffect(this.node.getPosition()));
            }),
            (t.prototype.updateBoxColor = function(e) {
              ((e.getComponent(cc.Sprite).spriteFrame = this.box_sps[this.bird_level - 1]),
                (this.lv_box_sp.spriteFrame = this.lv_box_sps[this.bird_level - 1]));
            }),
            (t.prototype.playMergeEffect = function() {}),
            (t.prototype.enterBattle = function() {
              ((this.hp_sprite.node.parent.active = !1),
                (this.node.getChildByName("grids").active = !1),
                (this._is_ready = !0),
                (this._attack_dt = 0));
            }),
            (t.prototype.exitBattle = function() {
              ((this.node.getChildByName("grids").active = !0),
                (this.currentHP = this.maxHP), this.hp_sprite && (this.hp_sprite.node.parent.active && (this.hp_sprite.node.parent.active = !1),
                  (this.hp_sprite.fillRange = 1)), this.egg_add_label && (this.egg_add_label.node.active = !1), this.clearArmor(),
                (this.mask_anim.node.active = !1), "die" == this.status && c.default.inst.onBirdRevive(this),
                (this.status = "idle"),
                (this._is_ready = !1));
            }),
            (t.prototype.playHitEffect = function() {}),
            (t.prototype.recieveDamage = function(e, t) {
              var i = this;
              if ("die" !== this._status) {
                if (this._armor > 0) return (t && "boss" == t.monster_base_type ? (this._armor = 0) : this._armor--, 0 == this._armor ? cc.tween(this.armor_label.node.parent).parallel(cc.tween().to(0.5, {
                  scale: 1.5
                }), cc.tween().to(0.5, {
                  opacity: 0
                }), ).call(function() {
                  i.armor_label.node.parent.active = !1;
                }).start() : ((this.armor_label.string = this._armor.toString()), this.armor_label.node.parent.stopAllActions(), cc.tween(this.armor_label.node.parent).to(0.15, {
                  scale: 0.8
                }).to(0.1, {
                  scale: 1
                }).start()), {
                  hp: this.currentHP
                });
                var n = c.default.inst.globalBuff;
                return (n.reduction && (e = Math.ceil(e * (1 - n.reduction / 100))), n.defense && (e -= n.defense) < 0 && (e = 0),
                  (this.currentHP = Math.max(0, this.currentHP - e)), this.hp_sprite && (this.hp_sprite.node.parent.active || (this.hp_sprite.node.parent.active = !0),
                    (this.hp_sprite.fillRange = this.currentHP / this.maxHP)), this.playHitEffect(), this.currentHP <= 0 && ((this.status = "die"),
                    (this._is_ready = !1), this.hp_sprite && this.hp_sprite.node.parent.active && (this.hp_sprite.node.parent.active = !1), c.default.inst.onBirdDead(this)), {
                    hp: this.currentHP
                  });
              }
            }),
            (t.prototype.heal = function(e) {
              if ("die" !== this._status) return (
                (this.currentHP = Math.min(this.maxHP, this.currentHP + e)), this.hp_sprite && (this.hp_sprite.fillRange = this.currentHP / this.maxHP), this.playHealEffect(), {
                  hp: this.currentHP
                });
            }),
            (t.prototype.playHealEffect = function() {
              c.default.inst.showHealEffect(this);
            }),
            (t.prototype.initLevelupAnimation = function() {
              this.can_levelup && ((this.can_levelup.active = !1),
                (this.can_levelup.opacity = 255),
                (this.can_levelup.scale = 1), cc.tween(this.can_levelup).repeatForever(cc.tween().sequence(cc.tween().parallel(cc.tween().to(0.5, {
                  scale: 1.2
                }), cc.tween().to(0.5, {
                  opacity: 180
                }), ), cc.tween().parallel(cc.tween().to(0.5, {
                  scale: 1
                }), cc.tween().to(0.5, {
                  opacity: 255
                }), ), ), ).start());
            }),
            (t.levelColors = [
              cc.Color.WHITE,
              new cc.Color(194, 231, 137),
              new cc.Color(162, 201, 252),
              new cc.Color(220, 157, 238),
              new cc.Color(249, 188, 95),
            ]),
            (t._draging_bird = null), o([b({
              tooltip: "攻击CD"
            })], t.prototype, "attack_cd", void 0), o([b({
              tooltip: "类型"
            })], t.prototype, "bird_type", void 0), o(
              [b({
                tooltip: "等级label",
                type: cc.Label
              })], t.prototype, "level_label", void 0, ), o([b(sp.Skeleton)], t.prototype, "spine", void 0), o([b(sp.Skeleton)], t.prototype, "spine2", void 0), o([b(sp.Skeleton)], t.prototype, "danggong_spine", void 0), o([b(cc.Prefab)], t.prototype, "bullet_prefab", void 0), o([b(cc.Animation)], t.prototype, "mask_anim", void 0), o([b(sp.Skeleton)], t.prototype, "mask_spine", void 0), o([b(cc.Sprite)], t.prototype, "hp_sprite", void 0), o([b({
              tooltip: "视线范围"
            })], t.prototype, "visionRange", void 0), o([b([cc.SpriteFrame])], t.prototype, "box_sps", void 0), o([b([cc.SpriteFrame])], t.prototype, "lv_box_sps", void 0), o([b(cc.Sprite)], t.prototype, "lv_box_sp", void 0), o([b(cc.Node)], t.prototype, "can_levelup", void 0), o([b(cc.Label)], t.prototype, "egg_add_label", void 0), o([b(cc.Label)], t.prototype, "armor_label", void 0),
            (n = o([v], t)));
        })(u.default);
        ((i.default = C), cc._RF.pop());
      };
