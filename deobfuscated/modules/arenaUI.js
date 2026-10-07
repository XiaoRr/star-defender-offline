// module: arenaUI
// deps: {"../../battle_scripts/libppgame/onfire":"onfire","../../battle_scripts/libppgame/utils":"utils","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../libppgame/libwechat":"libwechat","../mainScene":"mainScene","../playerData":"playerData","../pvpScene":"pvpScene","./arenaItemUI":"arenaItemUI"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8f7cdEjJyRERKzvlaxl3GSr", "arenaUI");
        var n,
          a,
          o = (this && this.__extends) || ((n = function(e, t) {
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
          };
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.getLength = i.jx_names = i.junxian_exp = void 0));
        var l = e("../../battle_scripts/libppgame/utils"),
          d = e("../gameData"),
          h = e("../libppgame/audioMgr"),
          u = e("../libppgame/libcocos"),
          p = e("../libppgame/libwechat"),
          f = e("../mainScene"),
          g = e("../playerData"),
          y = e("./arenaItemUI"),
          m = e("../../battle_scripts/libppgame/onfire"),
          _ = e("../pvpScene"),
          v = cc._decorator,
          b = v.ccclass,
          w = v.property,
          C = (((a = {})["河北"] = !0),
            (a["山西"] = !0),
            (a["辽宁"] = !0),
            (a["吉林"] = !0),
            (a["黑龙江"] = !0),
            (a["江苏"] = !0),
            (a["浙江"] = !0),
            (a["安徽"] = !0),
            (a["福建"] = !0),
            (a["江西"] = !0),
            (a["山东"] = !0),
            (a["河南"] = !0),
            (a["湖北"] = !0),
            (a["湖南"] = !0),
            (a["广东"] = !0),
            (a["海南"] = !0),
            (a["四川"] = !0),
            (a["贵州"] = !0),
            (a["云南"] = !0),
            (a["陕西"] = !0),
            (a["甘肃"] = !0),
            (a["青海"] = !0),
            (a["台湾"] = !0),
            (a["内蒙古自治区"] = "内蒙古"),
            (a["内蒙古"] = !0),
            (a["广西壮族自治区"] = "广西"),
            (a["广西"] = !0),
            (a["西藏自治区"] = "西藏"),
            (a["西藏"] = !0),
            (a["宁夏回族自治区"] = "宁夏"),
            (a["宁夏"] = !0),
            (a["新疆维吾尔自治区"] = "新疆"),
            (a["新疆"] = !0),
            (a["北京"] = !0),
            (a["天津"] = !0),
            (a["上海"] = !0),
            (a["重庆"] = !0),
            (a["香港特别行政区"] = "香港"),
            (a["香港"] = !0),
            (a["澳门特别行政区"] = "澳门"),
            (a["澳门"] = !0), a);

        function B(e) {
          for (var t = 0, i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i);
            t += (n >= 19968 && n <= 40869) || n > 65535 ? 2 : 1;
          }
          return t;
        }
        ((i.junxian_exp = [
            10, 20, 30, 40, 60, 80, 100, 140, 180, 220, 280, 340, 400, 460, 550,
            650, 750, 1e3,
          ]),
          (i.jx_names = ["列兵", "下等兵", "中等兵", "上等兵", "下士", "中士", "上士", "少尉", "中尉", "上尉", "少校", "中校", "上校", "大校", "少将", "中将", "上将", "元帅", ]),
          (i.getLength = B));
        var N = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.my_name = null),
              (t.my_headicon = null),
              (t.my_name2 = null),
              (t.my_headicon2 = null),
              (t.my_headicon_change = null),
              (t.my_name_editbox = null),
              (t.my_power_label = null),
              (t.my_progress_label = null),
              (t.my_progress_sprite = null),
              (t.my_jx_icon = null),
              (t.my_jx_name = null),
              (t.start_node = null),
              (t.cancel_node = null),
              (t.leaderboard_tab1 = null),
              (t.leaderboard_tab2 = null),
              (t.jx_sp_frames = []),
              (t.default_headicon = null),
              (t.arenaItem_prefab = null),
              (t.content_node = null),
              (t.junxian_tips = null),
              (t.add_ticket = null),
              (t.add_ticket_times_label = null),
              (t._on_userInfo = null),
              (t.arena_list = []),
              (t._scrollView = null),
              (t._current_tab = "all"),
              (t.matching_node = null),
              (t.other_node = null),
              (t.vs_node = null),
              (t.matching_matching_node = null),
              (t.other_name = null),
              (t.other_headicon = null),
              (t.other_power_label = null),
              (t.change_name_node = null),
              (t.change_icon_node = null),
              (t._current_start_req = null),
              (t._leaderboard_all = {}),
              (t._leaderboard_my_province = {}),
              (t._leaderboard_fadein_dt = 0),
              (t._leaderboard_fadein = !1),
              (t._leaderboard_fadein_index = 0),
              (t._leaderboard_type = ""),
              (t._change_icon_selected = -1), t);
          }
          var n;
          return (o(t, e),
            (n = t), Object.defineProperty(t, "instance", {
              get: function() {
                return (null == this._instance && (this._instance = new n()), this._instance);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onEnable = function() {
              var e = this;
              ((n._instance = this), this.scheduleOnce(function() {
                e.refreshLeaderboard(e._current_tab);
              }, 0), this.content_node.children.forEach(function(e) {
                e.opacity = 0;
              }), f.default.inst.nodeMoveIn(this.node.getChildByName("btns"), -525, 4, ));
              var t = g.default.province,
                i = C[t];
              ((this.leaderboard_tab2.getChildByName("label").getComponent(cc.Label).string = i ? "string" == typeof i ? i : t : "其他"), this._scrollView.node.on("scrolling", function() {
                  e.onScrolling();
                }), this.junxian_tips.getChildByName("dark").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.junxian_tips.active = !1));
                }), this.junxian_tips.getChildByName("btn_close").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.junxian_tips.active = !1));
                }), this.my_jx_icon.node.parent.getChildByName("jx_btn").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.junxian_tips.active = !0));
                }),
                (this.start_node.getChildByName("btn").getChildByName("redpoint").active = n.redpoint),
                (this._on_userInfo = m.on("userInfo", function() {
                  ((e.my_name.string = g.default.playerName || "星际玩家"),
                    (e.my_name2.string = e.my_name.string), e.setHeadIcon(!y.game_headicons[g.default.customIcon] && g.default.playerIcon ? g.default.playerIcon : g.default.customIcon, ));
                })),
                (this.start_node.getChildByName("itemBg").getChildByName("label_count").getComponent(cc.Label).string = g.default.getItemNum(9).toString() + "/5"));
            }),
            (t.prototype.onDisable = function() {
              ((n._instance = null), this._scrollView.node.off("scrolling"), m.un(this._on_userInfo));
            }),
            (t.prototype.onLoad = function() {
              var e = this;
              console.log("=========== arena ui load ===========");
              for (var t = 0; t < 30; t++) {
                var a = this.content_node.children[t];
                a ? (this.arena_list[t] = a.getComponent(y.default)) : ((a = cc.instantiate(this.arenaItem_prefab)), this.content_node.addChild(a),
                  (this.arena_list[t] = a.getComponent(y.default)),
                  (this.arena_list[t].rank_label.string = (t + 1).toString()),
                  (a.y = -60.5 - 130 * t));
              }
              (p.wechat.is_jd_platform && ((this.my_name_editbox.enabled = !1), console.log("### 京东平台不支持编辑昵称")), this.content_node.setContentSize(602, 3907), this.leaderboard_tab1.on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"), e.setTab("all"), e.refreshLeaderboard("all"));
                }), this.leaderboard_tab2.on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"), e.setTab("province"), e.refreshLeaderboard("province"));
                }), this.add_ticket.getChildByName("panel").getChildByName("btn_cancel").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.add_ticket.active = !1));
                }), this.add_ticket.getChildByName("panel").getChildByName("btn_fetch").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"), g.default.freeTimeArray[7] <= 0 ? f.default.inst.popTips("今日次数已用完") : p.wechat.showRewardedVideoAdNew().then(function(t) {
                    t.isEnded && ((e.add_ticket.active = !1), g.default.freeTimeArray[7]--, g.default.addItem(9, 5), g.default.saveDataRem(), g.default.saveData(),
                      (e.start_node.getChildByName("itemBg").getChildByName("label_count").getComponent(cc.Label).string = g.default.getItemNum(9).toString() + "/5"), f.default.inst.refreshAll());
                  }));
                }), this.start_node.getChildByName("itemBg").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"), f.default.inst.openItemInfo(9));
                }), this.start_node.getChildByName("itemBg").getChildByName("btn_add").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.add_ticket_times_label.string = "今日剩余次数 (" + g.default.freeTimeArray[7] + "/3)"), l.utils.popPanel(e.add_ticket));
                }),
                (this._scrollView = this.content_node.parent.parent.getComponent(cc.ScrollView)), this.start_node.getChildByName("btn").on("click", this.onBtnStartMatch, this), this.cancel_node.getChildByName("btn").on("click", this.onBtnCancelMatch, this), this.my_headicon.node.parent.parent.getChildByName("btn_change").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"), e.refreshChangeIcon(),
                    (e.my_headicon_change.spriteFrame = e.my_headicon.spriteFrame), l.utils.popPanel(e.change_icon_node));
                }));
              var o = this.change_icon_node.getChildByName("panel").getChildByName("scrollview").children[0].children[0].children,
                r = function(t) {
                  o[t].on("click", function() {
                    (h.default.inst.playAudio("starcraft/click"),
                      (e._change_icon_selected = t), e.refreshChangeIcon());
                  });
                };
              for (t = 0; t < 11; t++) r(t);
              (this.change_icon_node.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.change_icon_node.active = !1));
                }), this.change_icon_node.getChildByName("panel").getChildByName("btn_confirm").on("click", function() {
                  return s(e, void 0, void 0, function() {
                    var e;
                    return c(this, function() {
                      return (h.default.inst.playAudio("starcraft/click"), -1 == this._change_icon_selected ? (f.default.inst.popTips("请选择要使用的头像"),
                        [2]) : (e = Date.now()) - n._change_icon_time < 3e3 ? (f.default.inst.popTips("更改过于频繁，请稍后重试", ),
                        [2]) : ((n._change_icon_time = e), 0 == this._change_icon_selected ? (g.default.customIcon = "") : (g.default.customIcon = "" + this._change_icon_selected),
                        (this.my_headicon.spriteFrame = this.change_icon_node.getChildByName("panel").getChildByName("scrollview").children[0].children[0].children[this._change_icon_selected].getChildByName("box").children[0].children[0].getComponent(cc.Sprite, ).spriteFrame),
                        (this.my_headicon2.spriteFrame = this.my_headicon.spriteFrame),
                        (this.my_headicon_change.spriteFrame = this.my_headicon.spriteFrame), this.refreshChangeIcon(), g.default.saveDataRem(), g.default.saveData(), g.default.saveUser(),
                        [2]));
                    });
                  });
                }), this.my_name.node.getChildByName("btn_edit").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.my_name_editbox.string = g.default.playerName),
                    (e.change_name_node.getChildByName("panel").getChildByName("btn_confirm").active = !g.default.b_misc.changename),
                    (e.change_name_node.getChildByName("panel").getChildByName("btn_confirm_vd").active = !!g.default.b_misc.changename), l.utils.popPanel(e.change_name_node));
                }), this.change_name_node.getChildByName("panel").getChildByName("btn_close").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.change_name_node.active = !1));
                }), this.change_name_node.getChildByName("panel").getChildByName("btn_confirm").on("click", function() {
                  return s(e, void 0, void 0, function() {
                    return c(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (h.default.inst.playAudio("starcraft/click"), this.my_name_editbox.string == g.default.playerName ? ((this.change_name_node.active = !1), [2]) : B(this.my_name_editbox.string) > 12 ? (f.default.inst.popTips("名字宽度不能超过6个汉字", ),
                            [2]) : [
                            4,
                            n.changeName(this.my_name_editbox.string),
                          ]);
                        case 1:
                          return (0 == e.sent().err ? ((g.default.b_misc.changename = 1), g.default.saveDataRem(), g.default.saveData(), this.onChangeNameSuccess()) : f.default.inst.popTips("名字不合法"),
                            [2]);
                      }
                    });
                  });
                }), this.change_name_node.getChildByName("panel").getChildByName("btn_confirm_vd").on("click", function() {
                  return s(e, void 0, void 0, function() {
                    return c(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (h.default.inst.playAudio("starcraft/click"), this.my_name_editbox.string == g.default.playerName ? ((this.change_name_node.active = !1), [2]) : B(this.my_name_editbox.string) > 12 ? (f.default.inst.popTips("名字宽度不能超过6个汉字", ),
                            [2]) : [4, p.wechat.showRewardedVideoAdNew()]);
                        case 1:
                          return e.sent().isEnded ? [4, n.changeName(this.my_name_editbox.string)] : (f.default.inst.popTips("undefined" == typeof jd ? "观看完整视频后才能修改名字" : "完成浏览才能获得奖励", ),
                            [2]);
                        case 2:
                          return (0 == e.sent().err ? this.onChangeNameSuccess() : f.default.inst.popTips("名字不合法"),
                            [2]);
                      }
                    });
                  });
                }), this.change_name_node.getChildByName("panel").getChildByName("btn_random").on("click", function() {
                  (h.default.inst.playAudio("starcraft/click"),
                    (e.my_name_editbox.string = d.default.randomName()));
                }), console.log("head icon", g.default.customIcon, g.default.playerIcon, ), this.setHeadIcon(!y.game_headicons[g.default.customIcon] && g.default.playerIcon ? g.default.playerIcon : g.default.customIcon, ),
                (this.my_name.string = g.default.playerName || "星际玩家"),
                (this.my_name2.string = this.my_name.string),
                (this.my_jx_icon.spriteFrame = this.jx_sp_frames[g.default.jx - 1]),
                (this.my_jx_name.string = i.jx_names[g.default.jx - 1]),
                (this.my_progress_label.string = g.default.arenaScore.toString() + "/" + i.junxian_exp[g.default.jx - 1]),
                (this.my_progress_sprite.fillRange = g.default.arenaScore / i.junxian_exp[g.default.jx - 1]));
            }),
            (t.prototype.onBtnStartMatch = function() {
              // Offline adaptation: arenaUI.onBtnStartMatch
              if (this._current_tab === "province") {
                f.default.inst.popTips("联机对战未开放");
                return Promise.resolve(null);
              }
              if (this._current_start_req && !this._current_start_req.cancel) return Promise.resolve(null);
              var e = this;
              if ((g.default.checkUser(), g.default.blockType)) return (f.default.inst.popTips("账号数据异常"), f.default.inst.showLoading(), void cc.director.loadScene("startScene"));
              if (
                (h.default.inst.playAudio("starcraft/click"), g.default.getItemNum(9) < 1)) return (f.default.inst.popTips("竞技券数量不足"), void l.utils.popPanel(this.add_ticket));
              var t = {
                act: "start",
                id: g.default.cid,
                jx: g.default.jx,
                jg: g.default.arenaScore,
                power: d.default.getPlayerPower(),
              };
              this.start_node.parent.active = !1;
              var i = {};
              return (
                (this._current_start_req = i),
                (this.my_power_label.string = "" + d.default.getPlayerPower()),
                (this.matching_matching_node.opacity = 255),
                (this.vs_node.scale = 0),
                (this.other_node.x = 417),
                (this.matching_node.active = !0), new Promise(function(n) {
                  e.scheduleOnce(function() {
                    i.cancel ? n(null) : window.offlineArena.provider.match(g.default.jx).then(function(t) {
                      return s(e, void 0, void 0, function() {
                        var e,
                          a,
                          o,
                          r,
                          s,
                          u,
                          p,
                          y,
                          m,
                          v,
                          b = this;
                        return c(this, function(c) {
                          switch (c.label) {
                            case 0:
                              if (i.cancel) return (n(null), [2]);
                              if (t.err) return (
                                (this.start_node.parent.active = !0),
                                (this.matching_node.active = !1), console.error("请求失败"), n(null),
                                [2]);
                              if (
                                ((r = t.opponent.armyCheck), "number" == typeof t.opponent.buffer)) {
                                for (e = t.opponent.armyLevelArray, a = t.opponent.buildingLevelArray, o = Array(40).fill(0), s = Array(30).fill(0), v = 0; v < t.opponent.buffer; v++) o[v] = 2;
                                for (v = 0; v < t.opponent.levelBenefit; v++) s[v] = 1;
                                (console.log("机器人"),
                                  (p = ""),
                                  (y = "" + l.utils.random(1, 10)),
                                  (u = "AI机器人" + l.utils.random(1e3, 9999)), d.default.setOtherData(e, a, o, r, s),
                                  (m = d.default.getOtherPlayerPower()));
                              } else((e = t.opponent.armyLevelArray),
                                (a = t.opponent.buildingLevelArray),
                                (o = t.opponent.bufferArray),
                                (s = t.opponent.levelBenefitArray), console.log("玩家"),
                                (p = t.opponent.playerIcon),
                                (u = t.opponent.playerName),
                                (y = t.opponent.customIcon),
                                (m = t.opponent.power), u || (u = "星际玩家" + l.utils.random(1e3, 9999)),
                                (r = r ? JSON.parse(r) : [
                                  [2, 1, 1],
                                  [2, 1, 0],
                                  [2, 0, 0],
                                ]),
                                (e = "string" == typeof e && e ? JSON.parse(e) : Array(10).fill(0)),
                                (a = "string" == typeof a && a ? JSON.parse(a) : Array(5).fill(0)),
                                (o = "string" == typeof o && o ? JSON.parse(o) : Array(40).fill(0)),
                                (s = "string" == typeof s && s ? JSON.parse(s) : Array(30).fill(0)), d.default.setOtherData(e, a, o, r, s), m || (m = d.default.getOtherPlayerPower()));
                              return (
                                (this.other_name.string = u),
                                (this.other_power_label.string = "" + m), this.setHeadIcon(
                                  (y && g.default.customIcon[y]) || !p ? y : p, !1, ),
                                (_.default.otherPlayerIcon = (y && g.default.customIcon[y]) || !p ? y : p),
                                (_.default.otherPlayerName = u), console.log("setOtherData", e, a, o, r, s, ), h.default.inst.playAudio("starcraft/ui_change", ),
                                (this.cancel_node.active = !1),
                                (this.matching_matching_node.opacity = 0),
                                [
                                  4,
                                  new Promise(function(e) {
                                    cc.tween(b.vs_node).to(0.25, {
                                      scale: 1
                                    }, {
                                      easing: "sineOut"
                                    }, ).call(function() {
                                      e();
                                    }).start();
                                  }),
                                ]);
                            case 1:
                              return (c.sent(),
                                [
                                  4,
                                  new Promise(function(e) {
                                    cc.tween(b.other_node).to(0.25, {
                                      x: 17
                                    }, {
                                      easing: "elasticInOut"
                                    }, ).delay(3.5).call(function() {
                                      e();
                                    }).start();
                                  }),
                                ]);
                            case 2:
                              if (i.cancel || g.default.getItemNum(9) < 1) {
                                n(null);
                                return [2];
                              }
                              return (c.sent(), i.cancel ? false : window.offlineArena.provider.begin(g.default, ), g.default.saveDataRem(), g.default.saveData(), f.default.inst.showLoading(),
                                (d.default.mainInstance = null), h.default.inst.bgmOff(), cc.director.loadScene("pvpScene"), n(t),
                                [2]);
                          }
                        });
                      });
                    }).catch(function(t) {
                      (console.log("arena start err", t, i.cancel), i.cancel ? n(null) : ((e.start_node.parent.active = !0),
                        (e.matching_node.active = !1), n(null)));
                    });
                  }, 1.5);
                }));
            }),
            (t.prototype.onBtnCancelMatch = function() {
              (h.default.inst.playAudio("starcraft/click"), this._current_start_req && ((this._current_start_req.cancel = !0),
                  (this._current_start_req = null)),
                (this.start_node.parent.active = !0),
                (this.matching_node.active = !1));
            }),
            (t.prototype.onScrolling = function() {
              // Offline adaptation: arenaUI.onScrolling
              return;
            }),
            (t.prototype.setHeadIcon = function(e, t) {
              // Offline adaptation: arenaUI.setHeadIcon
              if (!y.game_headicons[e]) e = "2";
              var i = this;
              void 0 === t && (t = !0);
              var n = e || "2";
              "-1" == n && (n = "2");
              var a = y.game_headicons[n];
              a ? u.cocos.loadRes(a, cc.SpriteFrame).then(function(e) {
                e ? t ? ((i.my_headicon.spriteFrame = e),
                  (i.my_headicon2.spriteFrame = e)) : (i.other_headicon.spriteFrame = e) : console.log("can not load spriteFrame", a);
              }).catch(function(e) {
                console.log("fail to load res", a, e);
              }) : u.cocos.load({
                url: "" + n,
                type: "png"
              }).then(function(e) {
                e ? t ? ((i.my_headicon.spriteFrame = new cc.SpriteFrame(e, )),
                  (i.my_headicon2.spriteFrame = new cc.SpriteFrame(e, ))) : (i.other_headicon.spriteFrame = new cc.SpriteFrame(e, )) : console.log("can not load pic", n);
              }).catch(function(e) {
                console.log("fail to load url", n, e);
              });
            }),
            (t.prototype.onDestroy = function() {}),
            (t.prototype.start = function() {}),
            (t.prototype.getLeaderboard = function(e) {
              // Offline adaptation: arenaUI.getLeaderboard
              return Promise.resolve({
                err: 0,
                data: {
                  list: []
                }
              });
            }),
            (t.prototype.refreshLeaderboard = function(e) {
              // Offline adaptation: arenaUI.refreshLeaderboard
              window.offlineArena.refreshUI(this, g.default, e);
            }),
            (t.prototype.setTab = function(e) {
              ((this._current_tab = e),
                (this.leaderboard_tab1.getChildByName("sp0").active = "province" == e),
                (this.leaderboard_tab1.getChildByName("sp1").active = "all" == e),
                (this.leaderboard_tab2.getChildByName("sp1").active = "province" == e),
                (this.leaderboard_tab2.getChildByName("sp0").active = "all" == e),
                (this.leaderboard_tab1.getChildByName("label").color = "province" == e ? new cc.Color(97, 199, 216) : new cc.Color(255, 241, 108)),
                (this.leaderboard_tab2.getChildByName("label").color = "province" == e ? new cc.Color(255, 241, 108) : new cc.Color(97, 199, 216)));
            }),
            (t.prototype.showLeaderboard = function(e) {
              var t = "all" == e ? this._leaderboard_all.data.list : this._leaderboard_my_province.data.list;
              this._leaderboard_type = e;
              for (var i = 0; i < this.arena_list.length; i++) {
                var n = this.arena_list[i];
                ((n.node.opacity = 0), t[i] && (n.setData({
                    id: t[i][0],
                    jx: t[i][1],
                    power: t[i][2] > 100 ? t[i][2] : 100,
                    name: t[i][3],
                    headicon: t[i][4],
                  }),
                  (n.node.getChildByName("bg_self").active = g.default.cid == t[i][0]),
                  (n.node.getChildByName("bg").active = !n.node.getChildByName("bg_self").active)));
              }
              ((this.content_node.y = 280), this.content_node.parent.parent.getComponent(cc.ScrollView).stopAutoScroll(), this.onScrolling(),
                (this._leaderboard_fadein = !0),
                (this._leaderboard_fadein_dt = 0),
                (this._leaderboard_fadein_index = 0));
            }), Object.defineProperty(t, "arena_result", {
              get: function() {
                return this._arena_result;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.arenaResult = function(e) {
              // Offline adaptation: arenaUI.arenaResult
              this._arena_result = e;
              return window.offlineArena.provider.settle(g.default, e);
            }),
            (t.prototype.update = function(e) {
              if (this._leaderboard_fadein) {
                this._leaderboard_fadein_dt += e;
                var t = "all" == this._leaderboard_type ? this._leaderboard_all.data.list : this._leaderboard_my_province.data.list;
                ((this.arena_list[this._leaderboard_fadein_index].node.opacity = Math.min(255, (255 * this._leaderboard_fadein_dt) / 0.3)), this._leaderboard_fadein_dt >= 0.3 && ((this._leaderboard_fadein_dt -= 0.3), this._leaderboard_fadein_index++,
                  (this._leaderboard_fadein_index >= this.arena_list.length || !t[this._leaderboard_fadein_index]) && (this._leaderboard_fadein = !1)));
              }
            }),
            (t.prototype.onChangeNameSuccess = function() {
              (console.log("onChangeNameSuccess", this.my_name_editbox.string),
                (g.default.playerName = this.my_name_editbox.string), g.default.saveDataRem(), g.default.saveData(),
                (this.my_name.string = g.default.playerName),
                (this.my_name2.string = this.my_name.string),
                (this.change_name_node.active = !1));
            }),
            (t.prototype.setChangeIconItem = function(e, t) {
              ("string" == typeof t.icon && u.cocos.load({
                  url: "" + t.icon,
                  type: "png"
                }).then(function(t) {
                  t && (e.getChildByName("box").children[0].children[0].getComponent(cc.Sprite, ).spriteFrame = new cc.SpriteFrame(t));
                }).catch(function(e) {
                  console.log("fail to load url", t.icon, e);
                }),
                (e.getChildByName("selected").active = t.selected),
                (e.getChildByName("inuse").active = t.inuse));
            }),
            (t.prototype.refreshChangeIcon = function() {
              // Offline adaptation: arenaUI.refreshChangeIcon
              var e = this.change_icon_node.getChildByName("panel").getChildByName("scrollview").getChildByName("view").getChildByName("content");
              false ? ((e.children[0].active = !0), this.setChangeIconItem(e.children[0], {
                icon: false,
                selected: 0 == this._change_icon_selected,
                inuse: "" == g.default.customIcon,
              })) : (e.children[0].active = !1);
              for (var t = 0; t < 10; t++) this.setChangeIconItem(e.children[t + 1], {
                selected: this._change_icon_selected == t + 1,
                inuse: g.default.customIcon == "" + (t + 1),
              });
            }), Object.defineProperty(t, "redpoint", {
              get: function() {
                return g.default.getItemNum(9) >= 5;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.changeName = function(e) {
              // Offline adaptation: arenaUI.changeName
              return Promise.resolve({
                err: 0
              });
            }),
            (t._instance = null),
            (t._arena_result = 0),
            (t._change_icon_time = 0), r([w(cc.Label)], t.prototype, "my_name", void 0), r([w(cc.Sprite)], t.prototype, "my_headicon", void 0), r([w(cc.Label)], t.prototype, "my_name2", void 0), r([w(cc.Sprite)], t.prototype, "my_headicon2", void 0), r([w(cc.Sprite)], t.prototype, "my_headicon_change", void 0), r([w(cc.EditBox)], t.prototype, "my_name_editbox", void 0), r([w(cc.Label)], t.prototype, "my_power_label", void 0), r([w(cc.Label)], t.prototype, "my_progress_label", void 0), r([w(cc.Sprite)], t.prototype, "my_progress_sprite", void 0), r([w(cc.Sprite)], t.prototype, "my_jx_icon", void 0), r([w(cc.Label)], t.prototype, "my_jx_name", void 0), r([w(cc.Node)], t.prototype, "start_node", void 0), r([w(cc.Node)], t.prototype, "cancel_node", void 0), r([w(cc.Node)], t.prototype, "leaderboard_tab1", void 0), r([w(cc.Node)], t.prototype, "leaderboard_tab2", void 0), r([w([cc.SpriteFrame])], t.prototype, "jx_sp_frames", void 0), r([w(cc.SpriteFrame)], t.prototype, "default_headicon", void 0), r([w(cc.Prefab)], t.prototype, "arenaItem_prefab", void 0), r([w(cc.Node)], t.prototype, "content_node", void 0), r([w(cc.Node)], t.prototype, "junxian_tips", void 0), r([w(cc.Node)], t.prototype, "add_ticket", void 0), r([w(cc.Label)], t.prototype, "add_ticket_times_label", void 0), r([w(cc.Node)], t.prototype, "matching_node", void 0), r([w(cc.Node)], t.prototype, "other_node", void 0), r([w(cc.Node)], t.prototype, "vs_node", void 0), r([w(cc.Node)], t.prototype, "matching_matching_node", void 0), r([w(cc.Label)], t.prototype, "other_name", void 0), r([w(cc.Sprite)], t.prototype, "other_headicon", void 0), r([w(cc.Label)], t.prototype, "other_power_label", void 0), r([w(cc.Node)], t.prototype, "change_name_node", void 0), r([w(cc.Node)], t.prototype, "change_icon_node", void 0),
            (n = r([b], t)));
        })(cc.Component);
        ((i.default = N), cc._RF.pop());
      };
