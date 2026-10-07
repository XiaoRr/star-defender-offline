// module: battleScene
// deps: {"../Script/data/bufferData":"bufferData","../Script/data/stageData":"stageData","../Script/gameData":"gameData","../Script/libppgame/audioMgr":"audioMgr","../Script/libppgame/libcocos":"libcocos","../Script/libppgame/libwechat":"libwechat","../Script/playerData":"playerData","../Script/ui/itemUI":"itemUI","../Script/ui/towerInfoUI":"towerInfoUI","./battleResMgr":"battleResMgr","./battle_enhance":"battle_enhance","./bird-grids":"bird-grids","./birdbullet":"birdbullet","./birds":"birds","./buff_icon":"buff_icon","./componets/HollowOut":"HollowOut","./enhance_choose":"enhance_choose","./libppgame/onfire":"onfire","./libppgame/utils":"utils","./link_spine_anim":"link_spine_anim","./monster":"monster","./pig_bullet":"pig_bullet","./refresh-area":"refresh-area","./revive_page":"revive_page"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8470bzmPBxGB7ctY5kTmk0I", "battleScene");
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
          o = (this && this.__assign) || function() {
            return (o = Object.assign || function(e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
          },
          r = (this && this.__decorate) || function(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          },
          s = (this && this.__awaiter) || function(e, t, i, n) {
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
          c = (this && this.__generator) || function(e, t) {
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
          },
          l = (this && this.__spreadArrays) || function() {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
            var n = Array(e),
              a = 0;
            for (t = 0; t < i; t++)
              for (var o = arguments[t], r = 0, s = o.length; r < s; r++, a++) n[a] = o[r];
            return n;
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var d = e("./birdbullet"),
          h = e("../Script/libppgame/libwechat"),
          u = e("./monster"),
          p = e("./libppgame/onfire"),
          f = e("./battleResMgr"),
          g = e("./bird-grids"),
          y = e("./refresh-area"),
          m = e("./birds"),
          _ = e("./link_spine_anim"),
          v = e("./libppgame/utils"),
          b = e("../Script/data/stageData"),
          w = e("../Script/playerData"),
          C = (e("../Script/libppgame/libwechat"), e("../Script/libppgame/libcocos")),
          B = e("../Script/gameData"),
          N = e("../Script/ui/itemUI"),
          A = e("../Script/ui/towerInfoUI"),
          x = e("../Script/libppgame/audioMgr"),
          k = e("./componets/HollowOut"),
          T = e("../Script/data/bufferData"),
          S = e("./battle_enhance"),
          P = e("./enhance_choose"),
          I = e("./buff_icon"),
          O = e("./revive_page"),
          R = e("./pig_bullet"),
          M = ["草地", "森林", "废墟", "湖泊", "沙漠", "雪地", "桃花林"],
          E = cc._decorator,
          D = E.ccclass,
          L = E.property,
          j = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bullet_layer = null),
                (t.enemy_layer = null),
                (t.smoke_layer = null),
                (t.monsterPrefab = null),
                (t.monsterFlyPrefab = null),
                (t.monsterBossPrefab = null),
                (t.smokePrefab = null),
                (t.egg_spine = null),
                (t.egg_label = null),
                (t.egg_item_icon = null),
                (t.progress_sprite = null),
                (t.progress_label = null),
                (t.dlevel_label = null),
                (t.eggPrefab = null),
                (t.refresh_count_label = null),
                (t.tipsPrefab = null),
                (t.result_panel = null),
                (t.result_stars = []),
                (t.result_win_title = null),
                (t.result_lose_title = null),
                (t.itemPrefab = null),
                (t.healEffectPrefab = null),
                (t.tower_info_ui = null),
                (t.tower_sprite_frames = []),
                (t.boss_alert_anim = null),
                (t.pig_bullet_prefab = null),
                (t._currentWave = 0),
                (t._totalWaves = 10),
                (t._enemiesPerWave = 5),
                (t._graphics = null),
                (t._bgm_type = 0),
                (t._bgm_vol = 1),
                (t._eggCount = 20),
                (t._enemiesToSpawn = 0),
                (t._monster_count = 0),
                (t._monster_list = []),
                (t._revive_used = !1),
                (t.revive_prefab = null),
                (t._reward_items = []),
                (t.Hp = 1),
                (t.GameOver = !1),
                (t.GameStart = !1),
                (t.GamePause = !1),
                (t._fight_monter_id = 0),
                (t._expand_mode = !1),
                (t.video_block_label = null),
                (t._video_block_num = 3),
                (t._current_level = 0),
                (t._global_buff = null),
                (t._birds_buff = new Map()),
                (t._current_enhance_list = null),
                (t._level_config = null),
                (t._enhance_exp = 0),
                (t._enhance_level = 0),
                (t._enhance_counts = new Map()),
                (t._enhance_list = null),
                (t._enhance_all_counts = 0),
                (t._enhance_refresh_counts = 0),
                (t._current_choose_list = null),
                (t.enhance_choose = null),
                (t.buff_node = null),
                (t.buff_prefab = null),
                (t._battle_ts = 0),
                (t._game_speed = 1),
                (t._bird_tips_showed = new Map()),
                (t.guide_hand = null),
                (t._current_guide_step = 0),
                (t.battle_hp_label = null),
                (t.battle_hp_sprite = null),
                (t.total_hp_label = null),
                (t._savedBattleData = null),
                (t._enemy_bullet_layer = null), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "bgm_info", {
                get: function() {
                  return {
                    type: this._bgm_type,
                    vol: this._bgm_vol
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                var e = this;
                (console.log("BattleScene onLoad"),
                  (i._inst = this), this.egg_spine.setAnimation(0, "egg01", !0), p.fire("bgm"),
                  (this._bgm_type = 0),
                  (this._bgm_vol = 1), this.node.getChildByName("combine_area").getComponent(g.default).setup(this.node.getChildByName("birds"), cc.v2(3, 3), cc.v2(9, 4), ));
                var t = this.node.getChildByName("ui").getChildByName("pause"),
                  n = t.getChildByName("panel");
                (n.getChildByName("btn_exit").on("click", function() {
                  (p.fire("audio", "click"), e.showResult(!1));
                }), n.getChildByName("btn_continue").on("click", function() {
                  (p.fire("audio", "click"), (t.active = !1), e.resumeGame());
                }));
                var a = this.node.getChildByName("ui").getChildByName("top");
                a.getChildByName("btn_pause").on("click", function() {
                  (p.fire("audio", "click"), v.utils.popPanel(t, "panel"), e.pauseGame());
                });
                var o = a.getChildByName("btn_speed2"),
                  r = a.getChildByName("btn_speed1");
                (o.on("click", function() {
                  return s(e, void 0, void 0, function() {
                    var e;
                    return c(this, function(t) {
                      switch (t.label) {
                        case 0:
                          return (p.fire("audio", "click"), 2 == this._game_speed ? ((this.game_speed = 1),
                            (o.active = !1),
                            (r.active = !0), console.log("1倍速"),
                            [2]) : (this.pauseGame(),
                            [4, h.wechat.showRewardedVideoAdNew()]));
                        case 1:
                          return (
                            (e = t.sent()), this.resumeGame(), e.isEnded ? ((this.game_speed = 2), console.log("2倍速"),
                              (o.getChildByName("ad").active = !1),
                              [2]) : [2]);
                      }
                    });
                  });
                }), a.getChildByName("btn_speed1").on("click", function() {
                  (p.fire("audio", "click"),
                    (e.game_speed = 2),
                    (o.active = !0),
                    (r.active = !1), console.log("2倍速"));
                }));
                var l = this.result_panel.getChildByName("panel").getChildByName("btn_confirm");
                l.on("click", function() {
                  (p.fire("audio", "click"), p.fire("bgm", !1), cc.director.loadScene("mainScene"));
                });
                var d = this.result_panel.getChildByName("panel").getChildByName("btn_double");
                (d.on("click", function() {
                  return s(e, void 0, void 0, function() {
                    var e,
                      t,
                      n,
                      a,
                      o = this;
                    return c(this, function(r) {
                      switch (r.label) {
                        case 0:
                          return (p.fire("audio", "click"),
                            [4, h.wechat.showRewardedVideoAdNew()]);
                        case 1:
                          if (r.sent().isEnded) {
                            if (!d.active) return [2];
                            for (d.active = !1, l.x = 0, i.giveReward(this._reward_items), e = this.result_panel.getChildByName("panel").getChildByName("items").children, t = function(t) {
                                n.scheduleOnce(function() {
                                  ((e[t].getChildByName("itembg").getChildByName("num").getComponent(cc.Label).string = "" + 2 * o._reward_items[t][1]), cc.tween(e[t]).to(0.15, {
                                    scale: 1.3
                                  }).to(0.15, {
                                    scale: 1
                                  }).start());
                                }, 0.2 * t);
                              }, n = this, a = 0; a < e.length; a++) t(a);
                          }
                          return [2];
                      }
                    });
                  });
                }), cc.director.preloadScene("mainScene"));
              }),
              (t.prototype.onEnable = function() {
                i._inst = this;
              }),
              (t.prototype.onDisable = function() {
                i._inst = null;
              }),
              (t.prototype.openTowerInfo = function(e) {
                (void 0 === e && (e = null), v.utils.popPanel(this.tower_info_ui.node, "bg"), x.default.inst.playAudio("open"), this.tower_info_ui.initTowerInfo(e.bird_type, e),
                  (this.tower_info_ui.node.getChildByName("bg").getChildByName("infobg").getChildByName("box").getComponent(cc.Sprite).spriteFrame = this.tower_sprite_frames[e.bird_level - 1]));
              }),
              (t.prototype.onDestroy = function() {
                i._inst = null;
              }),
              (t.prototype.start = function() {}),
              (t.prototype.update = function(e) {
                if (this.isRunning) {
                  var t = this.node.getChildByName("combine_area").getComponent(g.default);
                  if (!t || !t.areAllBirdsDead())
                    if (
                      ((this._battle_ts += e * this._game_speed), 0 === this._enemiesToSpawn && 0 === this.enemy_layer.children.length && this._currentWave > 0)) this.onFightSuccess();
                    else if (
                    (this.updateBattleHp(), this.checkCollision(), this._graphics)) {
                    (this._graphics.clear(),
                      (this._graphics.fillColor = cc.Color.RED),
                      (this._graphics.lineWidth = 4));
                    var i = this.getGridsTopY();
                    (this._graphics.fillRect(-cc.winSize.width / 2, i, cc.winSize.width, 4, ), this._graphics.fill());
                  }
                }
              }),
              (t.prototype.addEggReward = function(e) {
                (console.log("======== add egg", e), this.playEggAnimation(e));
              }),
              (t.prototype.playEggAnimation = function(e) {
                for (var t = this,
                    i = cc.v3(0, 0),
                    n = this.egg_item_icon,
                    a = this.node.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v3(0, 0)), ),
                    o = [],
                    r = 0.05,
                    s = e,
                    c = function(e, n) {
                      var c = cc.instantiate(l.eggPrefab);
                      ((c.parent = l.node), c.setPosition(i),
                        (c.scale = 0), o.push(c));
                      var d = Math.random() * Math.PI * 2,
                        h = cc.v3(30 * Math.cos(d), 30 * Math.sin(d)),
                        u = Math.ceil(s / (n - e));
                      ((s -= u),
                        (c.zIndex = 100 - e), cc.tween(c).delay(r).to(0.2 / l.game_speed, {
                          position: i.add(h),
                          scale: 1
                        }, {
                          easing: "sineOut"
                        }, ).delay(0.1).to(0.5 / l.game_speed, {
                          position: a
                        }, {
                          easing: "sineIn"
                        }, ).call(function() {
                          (c.destroy(), (t.eggCount += u));
                        }).start(),
                        (r += 0.05 / l.game_speed));
                    },
                    l = this,
                    d = 0,
                    h = Math.min(e, 10); d < h; d++) c(d, h);
              }), Object.defineProperty(t.prototype, "eggCount", {
                get: function() {
                  return this._eggCount;
                },
                set: function(e) {
                  ((this._eggCount = e),
                    (this.egg_label.string = this._eggCount.toString()),
                    (this.refresh_count_label.node.color = this._eggCount >= 15 ? cc.Color.WHITE : cc.Color.RED),
                    (y.default.inst.btn_refresh.active = this._eggCount >= 15),
                    (y.default.inst.btn_video_egg.active = this._eggCount < 15), this.egg_label.node.stopAllActions(),
                    (this.egg_label.node.scale = 1), cc.tween(this.egg_label.node).to(0.1, {
                      scale: 1.2
                    }).to(0.1, {
                      scale: 1
                    }).start(), this.egg_item_icon.stopAllActions(),
                    (this.egg_item_icon.scale = 1), cc.tween(this.egg_item_icon).to(0.1, {
                      scale: 1.2
                    }).to(0.1, {
                      scale: 1
                    }).start());
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onFightSuccess = function() {
                if (
                  (console.log("======== on fight success", this._currentWave, this._totalWaves, ),
                    (this.GameStart = !1), cc.tween(this.node.getChildByName("combine_area")).to(0.2, {
                      position: cc.v3(0, 0)
                    }).start(), cc.tween(this.buff_node).to(0.2, {
                      position: cc.v3(this.buff_node.x, -226)
                    }).start(),
                    (this.node.getChildByName("egg").active = !1), this.bullet_layer.children.slice().forEach(function(e) {
                      var t = e.getComponent(d.default);
                      t ? (console.log("destroy bullet", t.bulletType, e.uuid), t.destroyBullet()) : (console.log("destroy bullet layer child", e), e.destroy());
                    }), p.fire("bgm", !0, 0.5, 1),
                    (this._bgm_type = 1),
                    (this._bgm_vol = 1), this.node.getChildByName("bird_baozha_layer").children.slice().forEach(function(e) {
                      e.destroy();
                    }), p.fire("audio", "win1"), this.enemy_layer.children.slice().forEach(function(e) {
                      var t = e.getComponent(u.default);
                      t ? (t.clearAll(), u.default.releaseMonster(e, t.monster_base_type)) : e.destroy();
                    }), this._enemy_bullet_layer && this._enemy_bullet_layer.removeAllChildren(), this._currentWave == this._totalWaves)) return (
                  (this.GameOver = !0), w.default.levelPassArray[this._current_level - 1] < 3 && ((w.default.levelPassArray[this._current_level - 1] = 3),
                    (w.default.showLevelup = this._current_level + 1)), void this.showResult(!0));
                (this._currentWave++,
                  (this.total_hp_label.node.parent.active = !0), this.updateTotalHp(),
                  (this.battle_hp_sprite.node.parent.active = !1), g.default.inst.onStopFight(), y.default.inst.onStopFight(), this.refreshBirdsCanLevelup(!0), this.addEggReward(10 + this.getBirdBuff(0, "round_egg")));
              }),
              (t.prototype.startNewWave = function() {
                var e = this;
                ((this._enemiesPerWave = 10 + 2 * (this._currentWave - 1)),
                  (this._enemiesToSpawn = this._enemiesPerWave));
                var t = 5 / this._enemiesToSpawn;
                ((this.progress_label.string = "第" + this._current_level + "关 " + this._currentWave + "/" + this._totalWaves + "波"), p.fire("audio", "start"));
                for (var i = [], n = t / 3, a = 0; a < this._enemiesPerWave; a++) i.push(t * a + n * Math.random());
                var o = this._level_config.monsters,
                  r = 1 == this._current_level ? b.default.SubStageFirstLevelEnemyRate[this._currentWave - 1] : b.default.SubStageEnemyRate[this._currentWave - 1],
                  s = this._level_config.fac * Math.pow(1.07, this._currentWave),
                  c = [0.7, 0.75, 0.8, 0.85, 0.9];
                (this._currentWave < c.length && (s *= c[this._currentWave - 1]), i.forEach(function(t) {
                  e.scheduleOnce(function() {
                    var t = Math.random();
                    (t < r[0] ? e.spawnEnemy(o[0], s) : t < r[0] + r[1] ? e.spawnEnemy(o[1], s) : e.spawnEnemy(o[2], s), e._enemiesToSpawn--, 0 === e._enemiesToSpawn && e._currentWave % 5 == 0 && e.spawnEnemy(e._level_config.boss, s));
                  }, t);
                }), this._currentWave % 5 == 0 ? (this._monster_count = this._enemiesPerWave + 1) : (this._monster_count = this._enemiesPerWave));
              }),
              (t.prototype.spawnEnemy = function(e, t) {
                void 0 === t && (t = 1);
                var i = u.GetMonsterInfo(e),
                  n = u.default.createMonster(i.type),
                  a = n.getContentSize().width,
                  o = (Math.random() - 0.5) * (640 - a),
                  r = n.getComponent(u.default);
                (r.setup(e, t),
                  (r.orignalPos = cc.v2(o, 531)),
                  (n.opacity = 25), cc.tween(n).to(1 / 6, {
                    opacity: 255
                  }).start(),
                  (n.zIndex = 9999 - n.y), this.enemy_layer.addChild(n), this._monster_list.push(r), e > 100 && this.showBossAlert());
              }),
              (t.prototype.showBossAlert = function() {
                var e = this;
                ((this.boss_alert_anim.node.active = !0), this.boss_alert_anim.play("Anim_Bosstips"), this.boss_alert_anim.once("finished", function() {
                  e.boss_alert_anim.node.active = !1;
                }), x.default.inst.playAudio("alert2"));
              }),
              (t.prototype.onMonsterDead = function(e, t) {
                if (
                  (this._monster_list.indexOf(e), this._monster_list.length > 0 && this._monster_list.splice(this._monster_list.indexOf(e), 1), this._global_buff.restore)) {
                  var i = g.default.inst.findBird(t);
                  i && i.heal(this._global_buff.restore);
                }
                (this.enhance_exp++, "boss" == e.monster_base_type ? h.wechat.vibrateLong() : h.wechat.vibrateShort());
              }),
              (t.prototype.onBirdDead = function(e) {
                var t = this;
                ((e.node.parent = this.node.getChildByName("birds_dead")), this.updateBattleHp(), g.default.inst.getAliveBirdCount() < 1 && !this._revive_used && this.scheduleOnce(function() {
                  return s(t, void 0, void 0, function() {
                    var e;
                    return c(this, function(t) {
                      switch (t.label) {
                        case 0:
                          return (
                            (e = cc.instantiate(this.revive_prefab)), this.node.addChild(e), this.pauseGame(),
                            [4, e.getComponent(O.default).tryRevive()]);
                        case 1:
                          return t.sent() ? (this.resumeGame(),
                            (this._revive_used = !0), this.revive(),
                            [2]) : (this.resumeGame(), [2]);
                      }
                    });
                  });
                }, 0.3));
              }),
              (t.prototype.onBirdRevive = function(e) {
                e.node.parent = this.node.getChildByName("birds");
              }),
              (t.prototype.randomMonsters = function(e, t) {
                void 0 === t && (t = []);
                var i = this._monster_list.filter(function(e) {
                  return !e.isDead && !t.includes(e);
                });
                return i.length <= e ? i : (v.utils.shuffle(i), i.slice(0, e));
              }),
              (t.prototype.getAllMonsters = function() {
                return this._monster_list.filter(function(e) {
                  return !e.isDead;
                });
              }),
              (t.prototype.fireBullet = function(e, t, n) {
                var a = this.bullet_layer,
                  o = a.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0)), );
                (t.setParent(a), t.setPosition(o));
                var r = a.convertToNodeSpaceAR(n),
                  s = Math.atan2(r.y - t.y, r.x - t.x);
                if (
                  ((t.angle = (180 * s) / Math.PI - 90), "1" == h.wechat.getHttpParam("mode")))
                  (t.setScale(1), cc.tween(t).parallel(cc.tween().to(1.5, {
                    position: cc.v3(r.x, r.y)
                  }), cc.tween().sequence(cc.tween().to(0.75, {
                    scale: 2
                  }, {
                    easing: "sineOut"
                  }), cc.tween().to(0.75, {
                    scale: 1
                  }, {
                    easing: "sineIn"
                  }), ), ).call(function() {
                    t.destroy();
                  }).start());
                else if ((t.setScale(1), 13 == e || 14 == e)) {
                  var c = t.getComponent(d.default);
                  c.canCollide = !1;
                  var l = cc.v2(r.x - t.x, r.y - t.y).mag();
                  ((c.totalTime = l / m.getBirdConfig(13).speed), c.setDestPos(r));
                } else {
                  var u = i.getRayRectIntersection(o, r, cc.v2(0, 0), cc.v2(cc.winSize.width, cc.winSize.height), );
                  t.getComponent(d.default).setDestPos(u);
                }
              }),
              (t.prototype.checkCollision = function() {
                for (var e = this.bullet_layer.children.slice(),
                    t = 0,
                    i = e.length; t < i; t++) {
                  var n = e[t].getComponent(d.default);
                  if (n && !n.destroyed && n.canCollide)
                    for (var a = this.enemy_layer.children.slice(),
                        o = n.getCircle(),
                        r = 0,
                        s = a.length; r < s; r++)
                      if (
                        (p = (h = a[r]).getComponent(u.default)) && !p.isDead) {
                        var c = h.getChildByName("box");
                        if (d.default.checkCollision(o, {
                            center: h.getPosition().add(c.getPosition()),
                            halfExtents: cc.v3(
                              (h.scale * c.getContentSize().width) / 2,
                              (h.scale * c.getContentSize().height) / 2, 0, ),
                          }) && n.onHitMonster(h.getComponent(u.default))) break;
                      }
                }
                var l = this.enemy_layer.children.slice();
                for (t = 0, i = l.length; t < i; t++) {
                  var h, p;
                  (p = (h = l[t]).getComponent(u.default)) && !p.isDead && (c = h.getChildByName("box"));
                }
              }),
              (t.prototype.selectTarget = function(e) {
                for (var t = this.enemy_layer.children,
                    i = 9999,
                    n = null,
                    a = e.getPosition(),
                    o = 0,
                    r = t.length; o < r; o++) {
                  var s = t[o],
                    c = s.getComponent(u.default);
                  if (c && !c.isDead) {
                    var l = s.getPosition().sub(a).mag();
                    l < i && l <= e.getComponent(m.default).visionRange && ((i = l), (n = c));
                  }
                }
                return n;
              }),
              (t.prototype.selectHealTarget = function() {
                var e = this.node.getChildByName("combine_area").getComponent(g.default);
                if (!e) return null;
                for (var t = 1 / 0, i = null, n = 0, a = e.getAllBirds(); n < a.length; n++) {
                  var o = a[n];
                  o && o.currentHP > 0 && o.currentHP < o.maxHP && o.currentHP < t && ((t = o.currentHP), (i = o));
                }
                return i;
              }),
              (t.prototype.showHealEffect = function(e) {
                var t = cc.instantiate(this.healEffectPrefab);
                (t.setPosition(e.node.position), this.node.getChildByName("bird_baozha_layer").addChild(t));
                var n = t.getComponent(cc.Animation);
                ((n.play().speed = i.inst.game_speed), n.on("finished", function() {
                  t.destroy();
                }));
              }),
              (t.getRayRectIntersection = function(e, t, i, n) {
                var a = t.sub(e).normalize();
                return this.getRayRectIntersection2(e, a, i, n);
              }),
              (t.getRayRectIntersection2 = function(e, t, i, n) {
                var a = 1 / 0,
                  o = cc.v2(0, 0),
                  r = i.x - n.x / 2,
                  s = i.x + n.x / 2,
                  c = i.y - n.y / 2,
                  l = i.y + n.y / 2;
                if (t.x < 0) {
                  var d = (r - e.x) / t.x;
                  (h = e.y + d * t.y) >= c && h <= l && ((a = d), (o = cc.v2(r, h)));
                }
                if (t.x > 0) {
                  var h,
                    u = (s - e.x) / t.x;
                  (h = e.y + u * t.y) >= c && h <= l && u < a && ((a = u), (o = cc.v2(s, h)));
                }
                if (t.y < 0) {
                  var p = (c - e.y) / t.y;
                  (f = e.x + p * t.x) >= r && f <= s && p < a && ((a = p), (o = cc.v2(f, c)));
                }
                if (t.y > 0) {
                  var f,
                    g = (l - e.y) / t.y;
                  (f = e.x + g * t.x) >= r && f <= s && g < a && ((a = g), (o = cc.v2(f, l)));
                }
                return o;
              }),
              (t.prototype.revive = function() {
                (console.log("======== revive"),
                  (this.GameStart = !1), p.fire("bgm", !0, 0.5, 1),
                  (this._bgm_type = 1),
                  (this._bgm_vol = 0.5), cc.tween(this.node.getChildByName("combine_area")).to(0.2, {
                    position: cc.v3(0, 0)
                  }).start(), cc.tween(this.buff_node).to(0.2, {
                    position: cc.v3(this.buff_node.x, -226)
                  }).start(),
                  (this.node.getChildByName("egg").active = !1), this.bullet_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(d.default);
                    t ? (console.log("destroy bullet", t.bulletType, e.uuid), t.destroyBullet()) : (console.log("destroy bullet layer child", e), e.destroy());
                  }), this.node.getChildByName("bird_baozha_layer").children.slice().forEach(function(e) {
                    e.destroy();
                  }), this.enemy_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(u.default);
                    t ? (t.clearAll(), u.default.releaseMonster(e, t.monster_base_type)) : e.destroy();
                  }), this._enemy_bullet_layer && this._enemy_bullet_layer.removeAllChildren(),
                  (this.total_hp_label.node.parent.active = !0), this.updateTotalHp(),
                  (this.battle_hp_sprite.node.parent.active = !1), g.default.inst.onStopFight(), y.default.inst.onStopFight(), this.refreshBirdsCanLevelup(!0), this.addEggReward(30));
              }),
              (t.prototype.recieveDamage = function(e) {
                return (void 0 === e && (e = 1), s(this, void 0, void 0, function() {
                  var t = this;
                  return c(this, function() {
                    return (
                      (this.Hp -= e), console.log("-----damage", e), this.Hp <= 0 && ((this.GameOver = !0), console.log("------game over"), p.fire("audio", "lose"), this.egg_spine.setAnimation(0, "egg02", !1), this.scheduleOnce(function() {
                        (h.wechat.vibrateLong(), t.showResult(!1));
                      }, 1.5)),
                      [2]);
                  });
                }));
              }),
              (t.prototype.showResult = function(e) {
                var t = this;
                this.clearSavedBattleData();
                var n = 0;
                if (e) n = 3;
                else {
                  switch (this._current_level) {
                    case 1:
                      this._currentWave > 3 ? (n = 2) : this._currentWave > 1 && (n = 1);
                      break;
                    case 2:
                      this._currentWave > 7 ? (n = 2) : this._currentWave > 4 && (n = 1);
                      break;
                    default:
                      this._currentWave > 10 ? (n = 2) : this._currentWave > 5 && (n = 1);
                  }
                  w.default.levelPassArray[this._current_level - 1] < n && (w.default.levelPassArray[this._current_level - 1] = n);
                }
                this._reward_items = i.generateReward(this._current_level, e, Math.max(1, this._currentWave - 1) / this._totalWaves, );
                var a = this.result_panel.getChildByName("panel").getChildByName("items");
                a.removeAllChildren();
                for (var o = 0; o < this._reward_items.length; o++) {
                  var r = this._reward_items[o];
                  if (r) {
                    var s = cc.instantiate(this.itemPrefab);
                    (s.getComponent(N.default).initItem(r[0], r[1]), a.addChild(s));
                  }
                }
                (i.giveReward(this._reward_items),
                  (this.result_lose_title.active = !e),
                  (this.result_win_title.active = e),
                  (this.result_panel.active = !0), v.utils.popPanel(this.result_panel));
                var c = function(e) {
                    ((l.result_stars[e].active = !1), n > e && l.scheduleOnce(function() {
                      ((t.result_stars[e].active = !0),
                        (t.result_stars[e].scale = 5),
                        (t.result_stars[e].opacity = 0), cc.tween(t.result_stars[e]).parallel(cc.tween().to(0.3, {
                          scale: 1
                        }), cc.tween().to(0.3, {
                          opacity: 255
                        }), ).start());
                    }, 0.4 * e + 0.3, ));
                  },
                  l = this;
                for (o = 0; o < 3; o++) c(o);
              }),
              (t.generateReward = function(e, t, i) {
                (void 0 === t && (t = !0), void 0 === i && (i = 0));
                var n = [];
                (n = t ? [
                  [1, 100 + e + 50],
                  [7, 1],
                ] : [
                  [1, Math.floor((100 + e) * i)],
                  [7, 1],
                ])[0][1] = Math.floor(1.5 * n[0][1]);
                var a = B.default.getRandomUnlockedTower(2),
                  o = 25 + e + (t ? 10 : 0);
                return (n.push([200 + a[0], Math.ceil(o / 2)]), n.push([200 + a[1], Math.floor(o / 2)]), n);
              }),
              (t.giveReward = function(e) {
                for (var t = 0; t < e.length; t++) w.default.addItem(e[t][0], e[t][1]);
                (w.default.saveDataRem(), w.default.saveData());
              }), Object.defineProperty(t.prototype, "isRunning", {
                get: function() {
                  return this.GameStart && !this.GameOver && !this.GamePause;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.getGridsTopY = function() {
                var e = this.node.getChildByName("combine_area");
                if (!e) return 0;
                var t = e.getChildByName("grids");
                if (!t) return 0;
                var i = t.convertToWorldSpaceAR(cc.v2(0, 0));
                return (this.node.convertToNodeSpaceAR(i).y + (t.getContentSize().height * t.scaleY) / 2);
              }),
              (t.prototype.showBirdBaozha = function(e, t, i, n) {
                (void 0 === i && (i = "baozha"), void 0 === n && (n = 1));
                var a = f.default.getBirdBaozha();
                ((a.node.parent = this.node.getChildByName("bird_baozha_layer")), a.node.setPosition(t), a.playEffect(e, i, n));
              }),
              (t.prototype.showMonsterEffect = function(e, t) {
                var i = f.default.getBirdBaozha();
                i.node.parent = e.node;
                var n = "boss" == e.monster_base_type ? 50 : "normal" == e.monster_base_type ? 25 : 87;
                (i.node.setPosition(cc.v2(0, n)), i.playEffect(0, t, "boss" == e.monster_base_type ? 0.8 : 0.6, ));
              }), Object.defineProperty(t.prototype, "alive_birds", {
                get: function() {
                  return g.default.inst.getAliveBirdCount();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.startFight = function() {
                (6 == this.current_guide_step && i.inst.startGuide(7), this.SaveBattleDate(),
                  (this.GameStart = !0), p.fire("bgm", !0, 1, 1),
                  (this._bgm_type = 1),
                  (this._bgm_vol = 1),
                  (this.node.getChildByName("egg").active = !0), this.refreshBirdsCanLevelup(!1), g.default.inst.onStartFight(), y.default.inst.onStartFight(), cc.tween(this.node.getChildByName("combine_area")).to(0.2, {
                    position: cc.v3(0, -300)
                  }).start(), cc.tween(this.buff_node).to(0.2, {
                    position: cc.v3(this.buff_node.x, -410)
                  }).start(), this.startNewWave(), this.updateBattleHp(),
                  (this.battle_hp_sprite.node.parent.active = !0),
                  (this.total_hp_label.node.parent.active = !1));
              }),
              (t.prototype.getMonsterUUID = function() {
                return (this._fight_monter_id++, "monster_" + this._fight_monter_id);
              }), Object.defineProperty(t.prototype, "in_expand_mode", {
                get: function() {
                  return this._expand_mode;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.enterExpandMode = function() {
                ((this._expand_mode = !0), g.default.inst.enterExpandMode(),
                  (y.default.inst.btn_confirm_expand.active = !0),
                  (y.default.inst.btn_refresh.active = !1),
                  (y.default.inst.btn_fight.active = !1),
                  (y.default.inst.btn_video_refresh.active = !1), y.default.inst.enableBirdsDrag(!1));
              }),
              (t.prototype.leaveExpandMode = function() {
                ((this._expand_mode = !1), g.default.inst.leaveExpandMode(),
                  (y.default.inst.btn_confirm_expand.active = !1),
                  (y.default.inst.btn_refresh.active = !0),
                  (y.default.inst.btn_fight.active = !0),
                  (y.default.inst.btn_video_refresh.active = !0), y.default.inst.enableBirdsDrag(!0));
              }),
              (t.prototype.refreshBirdsCanLevelup = function(e) {
                void 0 === e && (e = !0);
                var t = g.default.inst.getAllBirds(),
                  i = y.default.inst.getAllBirds(),
                  n = l(t, i).filter(function(e) {
                    return e && e.node && e.node.isValid;
                  });
                if (e) {
                  var a = {};
                  (n.forEach(function(e) {
                    if (e && !(e.currentHP <= 0)) {
                      var t = e.bird_type + "_" + e.bird_level;
                      (a[t] || (a[t] = []), a[t].push(e));
                    }
                  }), n.forEach(function(e) {
                    if (e && e.can_levelup) {
                      var t = e.bird_type + "_" + e.bird_level,
                        i = e.bird_level < 5 && a[t] && a[t].length > 1;
                      e.can_levelup.active = i;
                    }
                  }));
                } else n.forEach(function(e) {
                  e && e.can_levelup && (e.can_levelup.active = !1);
                });
              }),
              (t.prototype.showLink = function(e, t) {
                var i = f.default.getLink(),
                  n = this.node.getChildByName("link_layer");
                (n.addChild(i), i.setPosition(n.convertToNodeSpaceAR(e)));
                var a = i.getComponent(_.default);
                return (a.setLinkPos(t), a);
              }),
              (t.prototype.showFlashLink = function() {}), Object.defineProperty(t.prototype, "video_block_num", {
                get: function() {
                  return this._video_block_num;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "current_level", {
                get: function() {
                  return this._current_level;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "globalBuff", {
                get: function() {
                  return this._global_buff;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.newBirdBuffs = function() {
                return {
                  hp: 0,
                  attack: 0,
                  cd: 0
                };
              }),
              (t.prototype.addBuff = function(e, t, i, n) {
                if ((void 0 === n && (n = 1), 0 == e)) "egg" == t ? this.addEggReward(i) : (this._global_buff[t] += i);
                else {
                  var a = this._birds_buff.get(e);
                  if (
                    (a || ((a = this.newBirdBuffs()), this._birds_buff.set(e, a)), a[t] ? (a[t] += i) : (a[t] = i), "hp" == t))
                    for (var o = g.default.inst.getAllBirds(), r = 0; r < o.length; r++)
                      (("die" != o[r].status && o[r].bird_type == e) || 0 == e) && o[r].update_hp();
                }
              }),
              (t.prototype.getBirdBuff = function(e, t) {
                var i = this._global_buff[t] || 0;
                if (e) {
                  var n = this._birds_buff.get(e);
                  n && (i += n[t] || 0);
                }
                return i;
              }), Object.defineProperty(t.prototype, "enhance_exp", {
                get: function() {
                  return this._enhance_exp;
                },
                set: function(e) {
                  var t = this,
                    i = [14, 18, 22, 26, 30, 35, 40, 45, 50, 55, 60];
                  this._enhance_exp = e;
                  var n = i[this._enhance_level] || i[i.length - 1];
                  (this._enhance_exp >= n && ((this._enhance_exp -= n), this._enhance_level++,
                      (n = i[this._enhance_level] || i[i.length - 1]), this.scheduleOnce(function() {
                        (t.pauseGame(), t.randomThreeEnhances());
                      }, 0.1),
                      (this.dlevel_label.string = "" + (this._enhance_level + 1))),
                    (this.progress_sprite.fillRange = this._enhance_exp / n));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.randomEnhanceQuality = function(e, t) {
                void 0 === t && (t = !1);
                for (var i = t ? [40, 40, 20] : [80, 10, 5], n = 0, a = 0; a < 3; a++) 0 == e.values[a] ? (i[a] = 0) : (n += i[a]);
                var o = v.utils.random(1, n),
                  r = 0;
                for (a = 0; a < 3; a++) {
                  if (i[a] && o <= i[a]) return {
                    enhance: e,
                    quality: (r = a + 1),
                    value: e.values[a],
                    isRecommend: r >= 2 && (0 == e.birdType || g.default.inst.hasBird(e.birdType)),
                  };
                  o -= i[a];
                }
              }),
              (t.prototype.randomThreeEnhances = function(e) {
                void 0 === e && (e = !1);
                var t = [];
                v.utils.shuffle(this._current_enhance_list);
                var i = 0;
                e && this._enhance_refresh_counts < 3 && (i = v.utils.random(1, 3));
                for (var n = 0; n < 3; n++)
                  if (e && i == n + 1) {
                    console.log("必出紫色", n);
                    var a = this._current_enhance_list[n];
                    t.push({
                      enhance: a,
                      quality: 3,
                      value: a.values[2],
                      isRecommend: 0 == a.birdType || g.default.inst.hasBird(a.birdType),
                    });
                  } else((a = this.randomEnhanceQuality(this._current_enhance_list[n], e, )), t.push(a));
                ((this._current_choose_list = t), e && this._enhance_refresh_counts++, this.showEnahanceList(e));
              }),
              (t.prototype.showEnahanceList = function(e) {
                (void 0 === e && (e = !1),
                  (this.enhance_choose.node.active = !0), this.enhance_choose.show(this._current_choose_list, this._enhance_refresh_counts, this._enhance_all_counts, e, ));
              }),
              (t.prototype.removeEnhance = function(e) {
                for (var t = 0; t < this._current_enhance_list.length; t++)
                  if (this._current_enhance_list[t].type == e.type && this._current_enhance_list[t].birdType == e.birdType) {
                    this._current_enhance_list.splice(t, 1);
                    break;
                  }
              }),
              (t.prototype.chooseEnahance = function(e) {
                for (var t = 0; t < 3; t++)
                  if (0 == e || e == t + 1) {
                    var i = this._current_choose_list[t].enhance;
                    this._enhance_list.push(this._current_choose_list[t]);
                    var n = i.type + "-" + i.birdType,
                      a = (this._enhance_counts.get(n) || 0) + 1;
                    (this._enhance_counts.set(n, a), a >= i.limit && this.removeEnhance(i), this.addBuff(i.birdType, i.type, this._current_choose_list[t].value, ));
                  }
                  (0 == e && this._enhance_all_counts++, this.showBuffs(), this.resumeGame());
              }),
              (t.prototype.showBuffs = function() {
                for (var e = this.buff_node.children.length; e < this._enhance_list.length; e++) {
                  var t = cc.instantiate(this.buff_prefab);
                  (t.getComponent(I.default).show(this._enhance_list[e]), this.buff_node.addChild(t));
                }
              }), Object.defineProperty(t.prototype, "battle_ts", {
                get: function() {
                  return this._battle_ts;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "game_speed", {
                get: function() {
                  return this._game_speed;
                },
                set: function(e) {
                  this._game_speed = e;
                  for (var t = g.default.inst.getAllBirds(), i = 0; i < t.length; i++) t[i].updateGameSpeed();
                  (this.enemy_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(u.default);
                    t && t.updateGameSpeed();
                  }), this.bullet_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(d.default);
                    t && t.updateGameSpeed();
                  }));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onBirdDeployed = function(e) {
                this._bird_tips_showed.has(e.bird_type) || (this._bird_tips_showed.set(e.bird_type, !0), this.showBirdTips(e));
              }),
              (t.prototype.showBirdTips = function(e) {
                var t = this.node.getChildByName("bird_tips"),
                  i = t.getChildByName("label").getComponent(cc.Label),
                  n = m.getBirdConfig(e.bird_type);
                ((i.string = n.tips), t.stopAllActions(), t.setPosition(e.node.position.add(cc.v3(0, e.node.getContentSize().height / 2 + 20), ), ),
                  (t.opacity = 0),
                  (t.active = !0), cc.tween(t).to(0.15, {
                    opacity: 255
                  }).delay(1).to(0.35, {
                    opacity: 0
                  }).call(function() {
                    t.active = !1;
                  }).start());
              }),
              (t.prototype.startLevel = function(e) {
                var t = this;
                (void 0 === e && (e = 1),
                  (this._current_level = e),
                  (this.dlevel_label.string = "1"),
                  (this._level_config = b.default.getLevelConfig(this._current_level, )),
                  (this._currentWave = 1),
                  (this._video_block_num = 3),
                  (this._game_speed = 1),
                  (this._battle_ts = 0), this._bird_tips_showed.clear(),
                  (this.Hp = 1),
                  (this._totalWaves = this._level_config.wave),
                  (this.progress_label.string = "第" + this._current_level + "关 1/" + this._totalWaves + "波"),
                  (this.progress_sprite.fillRange = 0),
                  (this._enhance_exp = 0),
                  (this._enhance_level = 0), this._enhance_counts.clear(),
                  (this._enhance_list = []),
                  (this._enhance_refresh_counts = 0),
                  (this._enhance_all_counts = 0),
                  (this._revive_used = !1), this.buff_node.removeAllChildren());
                var i = Math.floor(this._current_level - 1) % M.length,
                  n = T.default.getBuffer();
                ((this._global_buff = o(o({}, n), {
                    speed_debuff: 0,
                    round_egg: 0,
                    bird_counts_damage: 0,
                    boss_damage: 0,
                  })), this._birds_buff.clear(), 0 != i && C.cocos.loadRes("battle_map/" + M[i], cc.SpriteFrame).then(function(e) {
                    t.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = e;
                  }),
                  (this.video_block_label.string = "(" + this._video_block_num + ")"), y.default.inst.initBirds(),
                  (this.total_hp_label.node.parent.active = !0), this.updateTotalHp(),
                  (this.battle_hp_sprite.node.parent.active = !1), 1 == e && 0 == w.default.newbieGuide && this.startGuide(1),
                  (this._current_enhance_list = S.getEnhanceList()), console.log("开始关卡", this._current_level, "每波强化系数", 0.07, ), this.scheduleOnce(function() {
                    t.SaveBattleDate();
                  }, 0.1));
              }),
              (t.prototype.pauseGame = function() {
                if (!this.GamePause) {
                  this.GamePause = !0;
                  for (var e = g.default.inst.getAllBirds(), t = 0; t < e.length; t++) e[t].pause();
                  (this.enemy_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(u.default);
                    t && t.pause();
                  }), this.bullet_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(d.default);
                    t && t.pause();
                  }));
                }
              }),
              (t.prototype.resumeGame = function() {
                if (this.GamePause) {
                  this.GamePause = !1;
                  for (var e = g.default.inst.getAllBirds(), t = 0; t < e.length; t++) e[t].resume();
                  (this.enemy_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(u.default);
                    t && t.resume();
                  }), this.bullet_layer.children.slice().forEach(function(e) {
                    var t = e.getComponent(d.default);
                    t && t.resume();
                  }));
                }
              }),
              (t.prototype.updateViedioBlockNum = function() {
                return (this._video_block_num--,
                  (this.video_block_label.string = "(" + this._video_block_num + ")"), this._video_block_num);
              }),
              (t.prototype.popTips = function(e) {
                var t = cc.instantiate(this.tipsPrefab);
                (this.node.addChild(t),
                  (t.y = 50),
                  (t.getChildByName("bg").getChildByName("text").getComponent(cc.Label).string = e),
                  (t.scale = 0.1), t.runAction(cc.sequence(cc.scaleTo(0.1, 1), cc.delayTime(0.4), cc.moveBy(0.8, 0, 80), cc.fadeOut(0.4), cc.callFunc(function() {
                    (t.removeFromParent(!0), t.destroy());
                  }), ), ));
              }),
              (t.prototype.hideGuideHand = function() {
                this.guide_hand.active = !1;
              }),
              (t.prototype.showGuideHand = function(e, t, i) {
                var n = this;
                (void 0 === i && (i = 1),
                  (this.guide_hand.active = !0), this.guide_hand.setPosition(e), this.guide_hand.stopAllActions(), cc.tween(this.guide_hand).repeatForever(cc.tween().call(function() {
                    n.guide_hand.setPosition(e);
                  }).delay(0.2).to(i, {
                    position: t
                  }).delay(0.5), ).start());
              }),
              (t.prototype.checkGuideStep4 = function() {
                (this.hideGuideHand(), 0 == y.default.inst.bird_count && i.inst.startGuide(5));
              }), Object.defineProperty(t.prototype, "current_guide_step", {
                get: function() {
                  return this._current_guide_step;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.showTypeWriter = function(e, t, i) {
                return s(this, void 0, void 0, function() {
                  var n, a, o;
                  return c(this, function(r) {
                    switch (r.label) {
                      case 0:
                        ((n = t.length),
                          (a = (1e3 * i) / n),
                          (o = 0),
                          (r.label = 1));
                      case 1:
                        return o < n ? ((e.string = t.substring(0, o + 1)),
                          [4, C.cocos.asyncwait(a)]) : [3, 4];
                      case 2:
                        (r.sent(), (r.label = 3));
                      case 3:
                        return (o++, [3, 1]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.startGuide = function(e) {
                var t = this;
                if (1 == e) {
                  ((this._current_guide_step = 1),
                    (this.guide_hand.parent.active = !0));
                  var i = this.guide_hand.parent.getChildByName("step1");
                  ((i.active = !0), this.showGuideHand(cc.v2(-142, -470), cc.v2(-64, 0)));
                  var n = i.getChildByName("tips").getChildByName("label").getComponent(cc.Label);
                  this.showTypeWriter(n, n.string, 0.5);
                } else if (2 == e)
                  ((this._current_guide_step = 2), this.hideGuideHand());
                else if (3 == e) {
                  this._current_guide_step = 3;
                  var a = this.guide_hand.parent.getChildByName("step3"),
                    o = y.default.inst.btn_refresh.convertToWorldSpaceAR(cc.v2(0, 0), );
                  (this.scheduleOnce(function() {
                      a.getChildByName("step3").getComponent(k.default).rectTo(0.2, a.convertToNodeSpaceAR(o), 200, 97);
                    }, 0),
                    (this.guide_hand.parent.getChildByName("step1").active = !1),
                    (a.active = !0),
                    (n = a.getChildByName("tips").getChildByName("label").getComponent(cc.Label)), this.showTypeWriter(n, n.string, 0.5));
                } else if (4 == e)
                  ((this._current_guide_step = 4),
                    (this.guide_hand.parent.getChildByName("step3").active = !1),
                    (this.guide_hand.parent.getChildByName("step4").active = !0), this.showGuideHand(cc.v2(-142, -470), this.node.convertToNodeSpaceAR(g.default.inst.getBirdWPos(4), ), ),
                    (n = this.guide_hand.parent.getChildByName("step4").getChildByName("tips").getChildByName("label").getComponent(cc.Label)), this.showTypeWriter(n, n.string, 0.5));
                else if (5 == e) {
                  ((this._current_guide_step = 5),
                    (this.guide_hand.parent.getChildByName("step4").active = !1));
                  var r = g.default.inst.getBirdWPos(3),
                    s = this.guide_hand.parent.getChildByName("step5");
                  (this.scheduleOnce(function() {
                      s.getChildByName("step5").getComponent(k.default).rectTo(0.2, s.convertToNodeSpaceAR(r), 64, 64);
                    }, 0), s.getChildByName("step5").getChildByName("block_input").on("touchstart", function() {
                      t.startGuide(6);
                    }),
                    (s.active = !0),
                    (n = s.getChildByName("tips").getChildByName("label").getComponent(cc.Label)), this.showTypeWriter(n, n.string, 0.5));
                } else if (6 == e) {
                  ((this._current_guide_step = 6),
                    (this.guide_hand.parent.getChildByName("step5").active = !1));
                  var c = this.guide_hand.parent.getChildByName("step6"),
                    l = y.default.inst.btn_fight.convertToWorldSpaceAR(cc.v2(0, 0), );
                  (this.scheduleOnce(function() {
                      c.getChildByName("step6").getComponent(k.default).rectTo(0.2, c.convertToNodeSpaceAR(l), 200, 97);
                    }, 0),
                    (c.active = !0),
                    (n = c.getChildByName("tips").getChildByName("label").getComponent(cc.Label)), this.showTypeWriter(n, n.string, 0.5));
                } else((this._current_guide_step = 0),
                  (w.default.newbieGuide = 1), w.default.saveDataRem(), w.default.saveData(),
                  (this.guide_hand.parent.active = !1));
              }),
              (t.prototype.updateBattleHp = function() {
                for (var e = g.default.inst.getAllBirds(), t = 0, i = 0, n = 0; n < e.length; n++)
                  ((i += e[n].maxHP), (t += e[n].currentHP));
                ((this.battle_hp_label.string = t + "/" + i),
                  (this.battle_hp_sprite.fillRange = t / i));
              }),
              (t.prototype.updateTotalHp = function() {
                for (var e = g.default.inst.getAllBirds(), t = 0, i = 0; i < e.length; i++) t += e[i].maxHP;
                this.total_hp_label.string = t.toString();
              }),
              (t.prototype.restoreBattleData = function(e) {
                var t = this;
                this._savedBattleData = e;
                for (var i = 0; i < this._savedBattleData.buffs.length; i++) this._birds_buff.set(this._savedBattleData.buffs[i][0], this._savedBattleData.buffs[i][1], );
                for (this._global_buff = o({}, this._savedBattleData.globalBuff), this.eggCount = this._savedBattleData.eggCount, this._enhance_list = l(this._savedBattleData.enhanceList), this._enhance_counts.clear(), i = 0; i < this._enhance_list.length; i++) this._enhance_counts.set(this._enhance_list[i][0], this._enhance_list[i][1], );
                ((this._enhance_all_counts = this._savedBattleData.enhanceAllCounts),
                  (this._enhance_refresh_counts = this._savedBattleData.enhanceRefreshCounts),
                  (this._currentWave = this._savedBattleData.currentWave),
                  (this._current_level = this._savedBattleData.currentLevel),
                  (this._enhance_level = this._savedBattleData.enhanceLevel),
                  (this.dlevel_label.string = "" + (this._enhance_level + 1)),
                  (this.enhance_exp = this._savedBattleData.enhanceExp),
                  (this._video_block_num = this._savedBattleData.video_block_num),
                  (this._revive_used = this._savedBattleData.revive_used),
                  (this._current_enhance_list = S.getRestoreEnhanceList(this._savedBattleData.currentEnhanceList, )), y.default.inst.restoreFromSavedState(this._savedBattleData.refreshAreaState, ), g.default.inst.restoreFromSavedState(this._savedBattleData.bridGridsState, ), this.refreshBirdsCanLevelup(), this.showBuffs(), cc.tween(this.buff_node).to(0.1, {
                    position: cc.v3(this.buff_node.x, -226)
                  }).start(),
                  (this._level_config = b.default.getLevelConfig(this._current_level, )),
                  (this._game_speed = 1),
                  (this._battle_ts = 0), this._bird_tips_showed.clear(),
                  (this.Hp = 1),
                  (this._totalWaves = this._level_config.wave),
                  (this.progress_label.string = "第" + this._current_level + "关 " + this._currentWave + "/" + this._totalWaves + "波"));
                var n = Math.floor(this._current_level - 1) % M.length;
                return (0 != n && C.cocos.loadRes("battle_map/" + M[n], cc.SpriteFrame).then(function(e) {
                    t.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = e;
                  }),
                  (this.video_block_label.string = "(" + this._video_block_num + ")"),
                  (this.total_hp_label.node.parent.active = !0), this.updateTotalHp(),
                  (this.battle_hp_sprite.node.parent.active = !1), console.log("继续上次战斗第" + this._current_level + ", 第" + this._currentWave + "波", ), !0);
              }),
              (t.prototype.SaveBattleDate = function() {
                for (var e = [], t = 0; t < this._current_enhance_list.length; t++) e.push([
                  this._current_enhance_list[t].birdType,
                  this._current_enhance_list[t].type,
                ]);
                var i = Array.from(this._birds_buff.entries()).map(function(e) {
                    return [e[0], e[1]];
                  }, ),
                  n = [];
                for (t = 0; t < this._enhance_list.length; t++) n.push({
                  quality: this._enhance_list[t].quality,
                  value: this._enhance_list[t].value,
                  enhance: {
                    type: this._enhance_list[t].enhance.type,
                    brief: this._enhance_list[t].enhance.brief,
                    birdType: this._enhance_list[t].enhance.birdType,
                  },
                });
                this._savedBattleData = {
                  buffs: i,
                  globalBuff: o({}, this._global_buff),
                  eggCount: this._eggCount,
                  enhanceList: n,
                  currentEnhanceList: e,
                  enhanceCounts: Array.from(this._enhance_counts.entries()).map(function(e) {
                    return [e[0], e[1]];
                  }, ),
                  enhanceAllCounts: this._enhance_all_counts,
                  enhanceRefreshCounts: this._enhance_refresh_counts,
                  currentLevel: this._current_level,
                  enhanceExp: this._enhance_exp,
                  enhanceLevel: this._enhance_level,
                  video_block_num: this._video_block_num,
                  revive_used: this._revive_used,
                  currentWave: this._currentWave,
                  refreshAreaState: y.default.inst.saveCurrentState(),
                  bridGridsState: g.default.inst.saveCurrentState(),
                };
                try {
                  ((w.default.savedBattleData = JSON.stringify(this._savedBattleData, )), w.default.saveDataRem(), w.default.saveData());
                } catch (a) {
                  console.log("保存战斗数据失败", a, this._savedBattleData);
                }
              }),
              (t.getSavedBattleData = function() {
                if (!w.default.savedBattleData) return null;
                try {
                  return JSON.parse(w.default.savedBattleData);
                } catch (e) {
                  return null;
                }
              }),
              (t.prototype.firePigBullet = function(e, t, i, n) {
                var a = cc.instantiate(this.pig_bullet_prefab),
                  o = a.getComponent(R.default);
                (a.setPosition(e),
                  (o.damage = n),
                  (o.bullet_type = i), o.setTarget(t), this._enemy_bullet_layer || (this._enemy_bullet_layer = this.node.getChildByName("enemy_bullet_layer")), this._enemy_bullet_layer.addChild(a));
              }),
              (t.prototype.clearSavedBattleData = function() {
                ((this._savedBattleData = null),
                  (w.default.savedBattleData = ""), w.default.saveDataRem(), w.default.saveData());
              }),
              (t._inst = null), r([L(cc.Node)], t.prototype, "bullet_layer", void 0), r([L(cc.Node)], t.prototype, "enemy_layer", void 0), r([L(cc.Node)], t.prototype, "smoke_layer", void 0), r([L(cc.Prefab)], t.prototype, "monsterPrefab", void 0), r([L(cc.Prefab)], t.prototype, "monsterFlyPrefab", void 0), r([L(cc.Prefab)], t.prototype, "monsterBossPrefab", void 0), r([L(cc.Prefab)], t.prototype, "smokePrefab", void 0), r([L(sp.Skeleton)], t.prototype, "egg_spine", void 0), r([L(cc.Label)], t.prototype, "egg_label", void 0), r([L(cc.Node)], t.prototype, "egg_item_icon", void 0), r([L(cc.Sprite)], t.prototype, "progress_sprite", void 0), r([L(cc.Label)], t.prototype, "progress_label", void 0), r([L(cc.Label)], t.prototype, "dlevel_label", void 0), r([L(cc.Prefab)], t.prototype, "eggPrefab", void 0), r([L(cc.Label)], t.prototype, "refresh_count_label", void 0), r([L(cc.Prefab)], t.prototype, "tipsPrefab", void 0), r([L(cc.Node)], t.prototype, "result_panel", void 0), r([L([cc.Node])], t.prototype, "result_stars", void 0), r([L(cc.Node)], t.prototype, "result_win_title", void 0), r([L(cc.Node)], t.prototype, "result_lose_title", void 0), r([L(cc.Prefab)], t.prototype, "itemPrefab", void 0), r([L(cc.Prefab)], t.prototype, "healEffectPrefab", void 0), r([L(A.default)], t.prototype, "tower_info_ui", void 0), r(
                [L([cc.SpriteFrame])], t.prototype, "tower_sprite_frames", void 0, ), r([L(cc.Animation)], t.prototype, "boss_alert_anim", void 0), r([L(cc.Prefab)], t.prototype, "pig_bullet_prefab", void 0), r([L(cc.Prefab)], t.prototype, "revive_prefab", void 0), r(
                [L({
                  type: cc.Label,
                  tooltip: "本局视频获取空格剩余次数"
                })], t.prototype, "video_block_label", void 0, ), r([L(P.default)], t.prototype, "enhance_choose", void 0), r([L(cc.Node)], t.prototype, "buff_node", void 0), r([L(cc.Prefab)], t.prototype, "buff_prefab", void 0), r([L({
                type: cc.Node
              })], t.prototype, "guide_hand", void 0), r([L(cc.Label)], t.prototype, "battle_hp_label", void 0), r([L(cc.Sprite)], t.prototype, "battle_hp_sprite", void 0), r([L(cc.Label)], t.prototype, "total_hp_label", void 0),
              (i = r([D], t)));
          })(cc.Component);
        ((i.default = j), cc._RF.pop());
      };
