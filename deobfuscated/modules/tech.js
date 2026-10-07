// module: tech
// deps: {"../../battle_scripts/libppgame/utils":"utils","../data/techData":"techData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libwechat":"libwechat","../mainScene":"mainScene","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "02852gWW/pJqqiI6/Lhlyyt", "tech");
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
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var c = e("../../battle_scripts/libppgame/utils"),
          l = e("../data/techData"),
          d = e("../gameData"),
          h = e("../libppgame/audioMgr"),
          u = e("../libppgame/libwechat"),
          p = e("../mainScene"),
          f = e("../playerData"),
          g = cc._decorator,
          y = g.ccclass,
          m = g.property,
          _ = [-94, 46, 186],
          v = [-55, 145],
          b = [30, 60, 90],
          w = ["基地", "兵营", "重工", "机场", "炮塔"],
          C = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.detail_node = null),
                (t.detail_icon_box = null),
                (t.detail_icon = null),
                (t.detail_name_label = null),
                (t.detail_desc_label = null),
                (t.detail_level_label = null),
                (t.detail_item_count_label = null),
                (t.detail_button_text_node = null),
                (t.btn_reset_node = null),
                (t.tabs = []),
                (t.tab_disable_sp = null),
                (t.tab_enable_sp = null),
                (t.icon_disable_sp = null),
                (t.icon_enable_sp = null),
                (t.tech_icon_sps = []),
                (t.tech_disable_icon_sps = []),
                (t.upgrading_label = null),
                (t.upgrade_time_label = null),
                (t.sub_upgrade_time_label = null),
                (t.parallel_node = null),
                (t.btn_parallel_node = null),
                (t.reset_panel = null),
                (t.btn_real_reset_node = null),
                (t.reset_ret_count_label = null),
                (t.upgrade_count_label = null),
                (t.btn_upgrade_add_node = null),
                (t._current_tab = 0),
                (t._techTabs = []),
                (t._techItems = []),
                (t.row2_unlocked = null),
                (t.row2_locked_label = null),
                (t.row3_unlocked = null),
                (t.row3_locked_label = null),
                (t.btn_quick_node = null),
                (t._now_level = 0),
                (t._current_tech_id = 0),
                (t._tech_upgrade_dt = 0), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onLoad = function() {
                var e = this;
                this._now_level = d.default.getPassLevel();
                for (var t = function(t) {
                      (n.tabs[t].on("click", function() {
                        t != e._current_tab && (h.default.inst.playAudio("starcraft/click"),
                          (e._techTabs[e._current_tab].box_sprite.spriteFrame = e.tab_disable_sp),
                          (e._techTabs[t].box_sprite.spriteFrame = e.tab_enable_sp),
                          (e._current_tab = t), e.showTab(t));
                      }), n._techTabs.push({
                        node: n.tabs[t],
                        level_label: n.tabs[t].getChildByName("lv").getComponent(cc.Label),
                        box_sprite: n.tabs[t].getChildByName("box").getComponent(cc.Sprite),
                        timer_node: n.tabs[t].getChildByName("timer"),
                      }));
                    },
                    n = this,
                    a = 0; a < this.tabs.length; a++) t(a);
                var o = this.node.getChildByName("rows");
                for (a = 0; a < 3; a++)
                  for (var g = o.children[a], y = 0; y < 3; y++) {
                    var m = g.children[y + 1];
                    this._techItems.push({
                      node: m,
                      name_label: m.getChildByName("name").getComponent(cc.Label),
                      level_label: m.getChildByName("lv").getComponent(cc.Label),
                      box_sprite: m.getChildByName("box").getComponent(cc.Sprite),
                      icon_sprite: m.getChildByName("icon").getComponent(cc.Sprite),
                      timer_node: m.getChildByName("timer"),
                      timer_progress: m.getChildByName("timer").getChildByName("progress").getComponent(cc.Sprite),
                      id: 3 * a + y + 1,
                    });
                  }
                var _ = function(t) {
                    (v._techItems[t].node.on("click", function() {
                      (h.default.inst.playAudio("starcraft/click"), console.log("tech click", e._techItems[t].id), e.showDetail(e._techItems[t].id));
                    }), v.showTechItem(t, t + 1));
                  },
                  v = this;
                for (a = 0; a < 9; a++) _(a);
                (this.detail_node.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.detail_node.active = !1));
                  }), this.detail_node.getChildByName("panel").getChildByName("btn_upgrade").on("click", function() {
                    if (
                      (h.default.inst.playAudio("starcraft/click"), i.getTechLevel(e._current_tech_id) >= 5)) p.default.inst.popTips("科技已满级");
                    else {
                      var t = l.default[e._current_tech_id - 1],
                        n = 0 == t.unlock_level ? 1 : 10 == t.unlock_level ? 2 : 3;
                      if (f.default.getItemNum(8) < n) p.default.inst.popTips("道具不足");
                      else if (f.default.techResetPoints >= n)
                        (f.default.subItem(8, n), f.default.techLevelArray[e._current_tech_id - 1]++,
                          (f.default.techResetPoints -= n), f.default.saveDataRem(), f.default.saveData(),
                          (e._techTabs[e._current_tab].level_label.string = "lv " + i.getTechTotalLevel(e._current_tab)), e.refreshTechItemCount(), e.showDetail(e._current_tech_id, !0), e.showTab(e._current_tab));
                      else {
                        if (f.default.techUpgradeArray.length >= 2) return void p.default.inst.popTips("升级位已达上限", );
                        if (i.getTechUpgrading(e._current_tech_id)) return;
                        if (f.default.techUpgradeArray.length > 0 && c.utils.getCurrentDate() != f.default.techParallelDate) return void c.utils.popPanel(e.parallel_node);
                        var a = b[0 == t.unlock_level ? 0 : 10 == t.unlock_level ? 1 : 2];
                        (f.default.techResetPoints > 0 && ((a *= (n - f.default.techResetPoints) / 3),
                            (f.default.techResetPoints = 0)), f.default.subItem(8, n), f.default.techUpgradeArray.push([
                            e._current_tech_id,
                            Date.now() + 6e4 * a,
                          ]), f.default.saveDataRem(), f.default.saveData(),
                          (e.detail_node.getChildByName("panel").getChildByName("btn_upgrade").active = !1),
                          (e.upgrade_time_label.node.parent.active = !1),
                          (e.detail_item_count_label.node.parent.active = !1),
                          (e.btn_quick_node.active = !0),
                          (e.upgrading_label.string = "升级中...\n" + i.upgradeTimeFormat(Date.now() + 6e4 * a)),
                          (e.upgrading_label.node.active = !0), e.refreshTechItemCount(), e.refreshTechState(e._current_tech_id));
                      }
                    }
                  }), this.btn_reset_node.on("click", function() {
                    return r(e, void 0, void 0, function() {
                      var e, t;
                      return s(this, function() {
                        for (h.default.inst.playAudio("starcraft/click"), e = 0; e < f.default.techUpgradeArray.length; e++)
                          if (
                            ((t = l.default[f.default.techUpgradeArray[e][0] - 1]), this._current_tab == w.indexOf(t.category))) return (p.default.inst.popTips("科技正在研究，无法重置"),
                            [2]);
                        return (
                          (this.reset_ret_count_label.string = "" + i.getTechPoints(this._current_tab)), c.utils.popPanel(this.reset_panel),
                          [2]);
                      });
                    });
                  }), this.btn_real_reset_node.on("click", function() {
                    return r(e, void 0, void 0, function() {
                      return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return (h.default.inst.playAudio("starcraft/click"),
                              [4, u.wechat.showRewardedVideoAdNew()]);
                          case 1:
                            return (e.sent().isEnded && (this.resetTech(this._current_tab),
                                (this.reset_panel.active = !1),
                                (this._techTabs[this._current_tab].level_label.string = "lv " + i.getTechTotalLevel(this._current_tab)), this.refreshTechItemCount(), this.showTab(this._current_tab)),
                              [2]);
                        }
                      });
                    });
                  }), this.reset_panel.getChildByName("dark").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.reset_panel.active = !1));
                  }), this.reset_panel.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.reset_panel.active = !1));
                  }), this.btn_parallel_node.on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.parallel_node.active = !1),
                      (f.default.techParallelDate = c.utils.getCurrentDate()),
                      (e.btn_upgrade_add_node.parent.getChildByName("add", ).active = !1), f.default.saveDataRem(), f.default.saveData());
                  }), this.parallel_node.getChildByName("dark").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.parallel_node.active = !1));
                  }), this.parallel_node.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.parallel_node.active = !1));
                  }), this.detail_node.getChildByName("dark").setContentSize(cc.winSize),
                  (this.detail_node.parent = p.default.inst.uiLayer),
                  (this.parallel_node.parent = p.default.inst.uiLayer),
                  (this.reset_panel.parent = p.default.inst.uiLayer), this.detail_node.getChildByName("dark").on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e.detail_node.active = !1));
                  }), this.btn_quick_node.on("click", function() {
                    return r(e, void 0, void 0, function() {
                      var e, t;
                      return s(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return (h.default.inst.playAudio("starcraft/click"),
                              [4, u.wechat.showRewardedVideoAdNew()]);
                          case 1:
                            if (i.sent().isEnded) {
                              for (e = 0; e < f.default.techUpgradeArray.length; e++) this._current_tech_id == f.default.techUpgradeArray[e][0] && ((f.default.techUpgradeArray[e][2] = 1),
                                (t = Date.now()), f.default.techUpgradeArray[e][1] > t && (f.default.techUpgradeArray[e][1] = (f.default.techUpgradeArray[e][1] + t) / 2), f.default.saveDataRem(), f.default.saveData());
                              (p.default.inst.popTips("加速成功，时间减半"),
                                (this.btn_quick_node.active = !1),
                                (this._tech_upgrade_dt = 1));
                            }
                            return [2];
                        }
                      });
                    });
                  }), this.btn_upgrade_add_node.on("click", function() {
                    e.btn_upgrade_add_node.parent.getChildByName("add").active && (h.default.inst.playAudio("starcraft/click"), c.utils.popPanel(e.parallel_node));
                  }));
              }),
              (t.prototype.isTechEnabled = function(e) {
                var t = l.default[e - 1];
                if (t.unlock_level > this._now_level) return !1;
                if (t.prerequisite_tech) {
                  var n = parseInt(t.prerequisite_tech);
                  if (i.getTechLevel(n) < 1) return !1;
                }
                return !0;
              }),
              (t.prototype.setLine = function(e) {
                var t = 0,
                  n = 0,
                  a = 0;
                switch (e) {
                  case 0:
                    ((t = i.getTechLevel(4) > 0 ? 2 : 1),
                      (n = i.getTechLevel(5) > 0 ? 2 : 1));
                    break;
                  case 1:
                    a = i.getTechLevel(15) > 0 ? 2 : 1;
                }
                ((this.node.getChildByName("line1").active = 1 == t),
                  (this.node.getChildByName("line2").active = 1 == n),
                  (this.node.getChildByName("line3").active = 1 == a),
                  (this.node.getChildByName("line1-2").active = 2 == t),
                  (this.node.getChildByName("line2-2").active = 2 == n),
                  (this.node.getChildByName("line3-2").active = 2 == a));
              }),
              (t.prototype.showDetail = function(e, t) {
                (void 0 === t && (t = !1), t || c.utils.popPanel(this.detail_node));
                var n = l.default[e - 1],
                  a = this.isTechEnabled(e);
                ((this.detail_icon_box.spriteFrame = a ? this.icon_enable_sp : this.tech_disable_icon_sps[e - 1]),
                  (this.detail_icon.spriteFrame = a ? this.tech_icon_sps[e - 1] : this.icon_disable_sp),
                  (this.detail_name_label.string = n.name));
                var o = i.getTechLevel(e);
                this.detail_level_label.string = o + "/5";
                var r = Math.max(1, o),
                  s = n.value_range[0] + ((n.value_range[1] - n.value_range[0]) / 5) * (r - 1),
                  d = n.description.replace("$n", s.toString());
                if (n.value_range2) {
                  var h = n.value_range2[0] + ((n.value_range2[1] - n.value_range2[0]) / 5) * (r - 1);
                  d = d.replace("$m", h.toString());
                }
                this.detail_desc_label.string = d;
                var u = 0 == n.unlock_level ? 1 : 10 == n.unlock_level ? 2 : 3;
                ((this.detail_item_count_label.string = "" + u),
                  (this.detail_item_count_label.node.color = f.default.getItemNum(8) >= u ? cc.Color.WHITE : cc.Color.RED));
                var p = a && o < 5;
                ((this.detail_button_text_node.color = p ? new cc.Color(247, 243, 28) : new cc.Color(221, 221, 221)),
                  (this.detail_button_text_node.getComponent(cc.Label).string = o < 5 ? "升级" : "满级"),
                  (this.detail_button_text_node.parent.getComponent(cc.Button, ).interactable = p),
                  (this._current_tech_id = e));
                var g = i.getTechUpgrading(e);
                g ? ((this.detail_node.getChildByName("panel").getChildByName("btn_upgrade").active = !1),
                  (this.upgrade_time_label.node.parent.active = !1),
                  (this.detail_item_count_label.node.parent.active = !1),
                  (this.upgrading_label.string = "升级中...\n" + i.upgradeTimeFormat(g[1])),
                  (this.upgrading_label.node.active = !0),
                  (this.btn_quick_node.active = !g[2])) : ((this.btn_quick_node.active = !1),
                  (this.detail_node.getChildByName("panel").getChildByName("btn_upgrade").active = !0),
                  (this.upgrade_time_label.node.parent.active = !0),
                  (this.detail_item_count_label.node.parent.active = !0),
                  (this.upgrading_label.node.active = !1), o < 5 ? this.showUpgradeInfo() : (this.upgrade_time_label.node.parent.active = !1));
              }),
              (t.upgradeTimeFormat = function(e) {
                var t = Math.ceil((e - Date.now()) / 1e3),
                  i = Math.floor(t / 60),
                  n = t - 60 * i;
                return (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n);
              }),
              (t.prototype.onEnable = function() {
                (this.checkTechUpgrade(),
                  (this.btn_upgrade_add_node.parent.getChildByName("add", ).active = f.default.techParallelDate != c.utils.getCurrentDate()));
                var e = f.default.techParallelDate == c.utils.getCurrentDate() ? 2 : 1,
                  t = Math.max(e - f.default.techUpgradeArray.length, 0);
                this.upgrade_count_label.string = t + "/" + e;
                for (var n = 0; n < this._techTabs.length; n++)
                  ((this._techTabs[n].level_label.string = "lv " + i.getTechTotalLevel(n)),
                    (this._techTabs[n].box_sprite.spriteFrame = 0 == n ? this.tab_enable_sp : this.tab_disable_sp),
                    (this._techTabs[n].timer_node.active = this.isTabUpgrading(n)));
                ((this._current_tab = 0), this.showTab(0));
              }),
              (t.prototype.isTabUpgrading = function(e) {
                for (var t = 0; t < f.default.techUpgradeArray.length; t++) {
                  var i = l.default[f.default.techUpgradeArray[t][0] - 1];
                  if (e == w.indexOf(i.category)) return !0;
                }
                return !1;
              }),
              (t.prototype.showTechItem = function(e, t) {
                var n = l.default[t - 1];
                this._techItems[e].name_label.string = n.name;
                var a = this.isTechEnabled(t);
                ((this._techItems[e].box_sprite.spriteFrame = a ? this.icon_enable_sp : this.icon_disable_sp),
                  (this._techItems[e].level_label.string = i.getTechLevel(t) + "/5"),
                  (this._techItems[e].icon_sprite.spriteFrame = a ? this.tech_icon_sps[t - 1] : this.tech_disable_icon_sps[t - 1]),
                  (this._techItems[e].id = t));
                var o = i.getTechUpgrading(t);
                if (o) {
                  this._techItems[e].timer_node.active = !0;
                  var r = b[0 == n.unlock_level ? 0 : 10 == n.unlock_level ? 1 : 2];
                  this._techItems[e].timer_progress.fillRange = 1 - (o[1] - Date.now()) / (6e4 * r);
                } else this._techItems[e].timer_node.active = !1;
              }),
              (t.prototype.start = function() {}),
              (t.prototype.showTab = function(e) {
                if (
                  ((this.row2_locked_label.active = this._now_level < 10),
                    (this.row3_locked_label.active = this._now_level < 15),
                    (this.row2_unlocked.active = this._now_level >= 10),
                    (this.row3_unlocked.active = this._now_level >= 15), 4 == e))
                  for (var t = 9 * e + 1, i = 0; i < 9; i++) i % 3 == 2 ? (this._techItems[i].node.active = !1) : ((this._techItems[i].node.active = !0),
                    (this._techItems[i].node.x = v[i % 3]), this.showTechItem(i, t++));
                else
                  for (i = 0; i < 9; i++)
                    ((this._techItems[i].node.active = !0),
                      (this._techItems[i].node.x = _[i % 3]), this.showTechItem(i, i + 1 + 9 * e));
                this.setLine(e);
              }),
              (t.getTechLevel = function(e) {
                return f.default.techLevelArray[e - 1];
              }),
              (t.getTechTotalLevel = function(e) {
                var t = 0;
                if (4 == e)
                  for (var i = 9 * e + 1, n = 0; n < 9; n++) n % 3 == 2 || (t += this.getTechLevel(i++));
                else
                  for (n = 0; n < 9; n++) t += this.getTechLevel(n + 1 + 9 * e);
                return t;
              }),
              (t.getTechPoints = function(e) {
                var t = 0;
                if (4 == e)
                  for (var i = 9 * e + 1, n = 0; n < 9; n++) n % 3 == 2 || ((a = this.getTechLevel(i++)) > 0 && (t += a * (0 == (r = l.default[i - 2]).unlock_level ? 1 : 10 == r.unlock_level ? 2 : 3)));
                else
                  for (n = 0; n < 9; n++) {
                    var a;
                    (a = this.getTechLevel(n + 1 + 9 * e)) > 0 && (t += a * (0 == (r = l.default[n + 9 * e]).unlock_level ? 1 : 10 == r.unlock_level ? 2 : 3));
                  }
                for (n = f.default.techUpgradeArray.length - 1; n >= 0; n--) {
                  var o = f.default.techUpgradeArray[n][0],
                    r = l.default[o - 1];
                  w.indexOf(r.category) == e && (t += 0 == r.unlock_level ? 1 : 10 == r.unlock_level ? 2 : 3);
                }
                return t;
              }),
              (t.prototype.resetTech = function(e) {
                var t = 0;
                if (4 == e)
                  for (var n = 9 * e + 1, a = 0; a < 9; a++) a % 3 == 2 || ((o = i.getTechLevel(n++)) > 0 && ((t += o * (0 == (c = l.default[n - 2]).unlock_level ? 1 : 10 == c.unlock_level ? 2 : 3)),
                    (f.default.techLevelArray[n - 2] = 0)));
                else
                  for (a = 0; a < 9; a++) {
                    var o;
                    (o = i.getTechLevel(a + 1 + 9 * e)) > 0 && ((t += o * (0 == (c = l.default[a + 9 * e]).unlock_level ? 1 : 10 == c.unlock_level ? 2 : 3)),
                      (f.default.techLevelArray[a + 9 * e] = 0));
                  }
                var r = 0;
                for (a = f.default.techUpgradeArray.length - 1; a >= 0; a--) {
                  var s = f.default.techUpgradeArray[a][0],
                    c = l.default[s - 1];
                  w.indexOf(c.category) == e && ((t += 0 == c.unlock_level ? 1 : 10 == c.unlock_level ? 2 : 3),
                    (r += 0 == c.unlock_level ? 1 : 10 == c.unlock_level ? 2 : 3), f.default.techUpgradeArray.splice(a, 1), this.refreshTechState(s));
                }
                (t > 0 && (f.default.addItem(8, t),
                  (f.default.techResetPoints += t - r)), f.default.saveDataRem(), f.default.saveData());
              }),
              (t.getTechUpgrading = function(e) {
                for (var t = 0; t < f.default.techUpgradeArray.length; t++)
                  if (f.default.techUpgradeArray[t][0] == e) return f.default.techUpgradeArray[t];
                return null;
              }),
              (t.prototype.checkTechUpgrade = function() {
                if (f.default.techUpgradeArray.length > 0) {
                  for (var e = Date.now(),
                      t = !1,
                      i = f.default.techUpgradeArray.length - 1; i >= 0; i--) {
                    var n = f.default.techUpgradeArray[i][0];
                    (e >= f.default.techUpgradeArray[i][1] && (f.default.techLevelArray[f.default.techUpgradeArray[i][0] - 1]++, f.default.techUpgradeArray.splice(i, 1),
                      (t = !0)), this.refreshTechState(n));
                  }
                  t && (f.default.saveDataRem(), f.default.saveData());
                }
              }),
              (t.prototype.update = function(e) {
                if (
                  ((this._tech_upgrade_dt += e), this._tech_upgrade_dt >= 1)) {
                  this.checkTechUpgrade();
                  var t = f.default.techParallelDate == c.utils.getCurrentDate(),
                    n = t ? 2 : 1,
                    a = Math.max(n - f.default.techUpgradeArray.length, 0);
                  if (
                    ((this.upgrade_count_label.string = a + "/" + n),
                      (this.btn_upgrade_add_node.parent.getChildByName("add", ).active = !t), this.detail_node.active && this.upgrading_label.node.active)) {
                    var o = i.getTechUpgrading(this._current_tech_id);
                    o ? (this.upgrading_label.string = "升级中...\n" + i.upgradeTimeFormat(o[1])) : this.showDetail(this._current_tech_id, !0);
                  }
                }
              }),
              (t.prototype.refreshTechState = function(e) {
                var t = l.default[e - 1],
                  n = w.indexOf(t.category);
                if (
                  ((this._techTabs[n].level_label.string = "lv " + i.getTechTotalLevel(n)),
                    (this._techTabs[n].timer_node.active = this.isTabUpgrading(n)), this._current_tab == n))
                  for (var a = 0; a < this._techItems.length; a++)
                    if (this._techItems[a].id == e) return void this.showTechItem(a, e);
              }),
              (t.prototype.refreshTechItemCount = function() {
                p.default.inst.pageLayer.getChildByName("page2").getChildByName("itembg2").getChildByName("richtext").getComponent(cc.RichText).string = f.default.getItemNum(8) + (0 == f.default.techResetPoints ? "" : "<color=#F7F31C>(" + f.default.techResetPoints + ")</c>");
              }),
              (t.prototype.showUpgradeInfo = function() {
                var e = l.default[this._current_tech_id - 1],
                  t = b[15 == e.unlock_level ? 2 : 10 == e.unlock_level ? 1 : 0],
                  n = 15 == e.unlock_level ? 3 : 10 == e.unlock_level ? 2 : 1;
                if (f.default.techResetPoints >= n)
                  ((this.upgrade_time_label.string = "升级时长: 00:00"),
                    (this.sub_upgrade_time_label.node.active = !1));
                else if (f.default.techResetPoints > 0) {
                  var a = (t * f.default.techResetPoints) / n;
                  ((this.upgrade_time_label.string = "升级时长: " + i.upgradeTimeFormat(Date.now() + 6e4 * (t - a))),
                    (this.sub_upgrade_time_label.string = "(-" + i.upgradeTimeFormat(Date.now() + 6e4 * a) + ")"),
                    (this.sub_upgrade_time_label.node.active = !0));
                } else((this.upgrade_time_label.string = "升级时长: " + i.upgradeTimeFormat(Date.now() + 6e4 * t)),
                  (this.sub_upgrade_time_label.node.active = !1));
              }), o([m(cc.Node)], t.prototype, "detail_node", void 0), o([m(cc.Sprite)], t.prototype, "detail_icon_box", void 0), o([m(cc.Sprite)], t.prototype, "detail_icon", void 0), o([m(cc.Label)], t.prototype, "detail_name_label", void 0), o([m(cc.Label)], t.prototype, "detail_desc_label", void 0), o([m(cc.Label)], t.prototype, "detail_level_label", void 0), o([m(cc.Label)], t.prototype, "detail_item_count_label", void 0), o([m(cc.Node)], t.prototype, "detail_button_text_node", void 0), o([m(cc.Node)], t.prototype, "btn_reset_node", void 0), o([m([cc.Node])], t.prototype, "tabs", void 0), o([m(cc.SpriteFrame)], t.prototype, "tab_disable_sp", void 0), o([m(cc.SpriteFrame)], t.prototype, "tab_enable_sp", void 0), o([m(cc.SpriteFrame)], t.prototype, "icon_disable_sp", void 0), o([m(cc.SpriteFrame)], t.prototype, "icon_enable_sp", void 0), o([m([cc.SpriteFrame])], t.prototype, "tech_icon_sps", void 0), o(
                [m([cc.SpriteFrame])], t.prototype, "tech_disable_icon_sps", void 0, ), o([m(cc.Label)], t.prototype, "upgrading_label", void 0), o([m(cc.Label)], t.prototype, "upgrade_time_label", void 0), o([m(cc.Label)], t.prototype, "sub_upgrade_time_label", void 0), o([m(cc.Node)], t.prototype, "parallel_node", void 0), o([m(cc.Node)], t.prototype, "btn_parallel_node", void 0), o([m(cc.Node)], t.prototype, "reset_panel", void 0), o([m(cc.Node)], t.prototype, "btn_real_reset_node", void 0), o([m(cc.Label)], t.prototype, "reset_ret_count_label", void 0), o([m(cc.Label)], t.prototype, "upgrade_count_label", void 0), o([m(cc.Node)], t.prototype, "btn_upgrade_add_node", void 0), o([m(cc.Node)], t.prototype, "row2_unlocked", void 0), o([m(cc.Node)], t.prototype, "row2_locked_label", void 0), o([m(cc.Node)], t.prototype, "row3_unlocked", void 0), o([m(cc.Node)], t.prototype, "row3_locked_label", void 0), o([m(cc.Node)], t.prototype, "btn_quick_node", void 0),
              (i = o([y], t)));
          })(cc.Component);
        ((i.default = C), cc._RF.pop());
      };
