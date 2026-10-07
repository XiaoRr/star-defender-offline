// module: refresh-area
// deps: {"../Script/libppgame/libwechat":"libwechat","../Script/playerData":"playerData","./battleScene":"battleScene","./bird-grids":"bird-grids","./birds":"birds","./dragable":"dragable","./expand-block":"expand-block","./libppgame/onfire":"onfire","./libppgame/utils":"utils"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d2cd2pbQPpHw66olpJLepas", "refresh-area");
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
        var r = e("./bird-grids"),
          s = e("./birds"),
          c = e("./dragable"),
          l = e("./expand-block"),
          d = e("./libppgame/utils"),
          h = e("./battleScene"),
          u = e("./libppgame/onfire"),
          p = e("../Script/libppgame/libwechat"),
          f = e("../Script/playerData"),
          g = cc._decorator,
          y = g.ccclass,
          m = g.property,
          _ = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.birdPrefab = []),
                (t.expandPrefab = []),
                (t.container = null),
                (t.synthesisArea = null),
                (t.btn_refresh = null),
                (t.btn_video_refresh = null),
                (t.btn_fight = null),
                (t.btn_confirm_expand = null),
                (t.btn_video_expand = null),
                (t.btn_video_egg = null),
                (t.bird_y_offset = -514.5),
                (t.birdNodes = []),
                (t.currentSynthesisBird = null),
                (t._total_refreshed = 0), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                var e = this;
                ((i._inst = this),
                  (this.bird_y_offset = this.node.y + this.node.getChildByName("birds").y), this.btn_refresh.on("click", function() {
                    h.default.inst.eggCount >= 15 ? (u.fire("audio", "click"), e.refreshBirds("normal"),
                      (h.default.inst.eggCount -= 15)) : (u.fire("audio", "invalid"), console.log("eggCount not enough"));
                  }), this.btn_fight.on("click", function() {
                    (u.fire("audio", "click"), 0 != r.default.inst.getAllBirds().length ? ((e.node.active = !1), h.default.inst.startFight()) : h.default.inst.popTips("请先选择上阵的鸟"));
                  }), this.btn_confirm_expand.on("click", function() {
                    (u.fire("audio", "click"), r.default.inst.confirmExpand(), h.default.inst.leaveExpandMode());
                  }), this.btn_video_refresh.on("click", function() {
                    (u.fire("audio", "click"), p.wechat.showRewardedVideoAdNew().then(function(t) {
                      t.isEnded && e.refreshBirds("video");
                    }));
                  }), this.btn_video_egg.on("click", function() {
                    (u.fire("audio", "click"), p.wechat.showRewardedVideoAdNew().then(function(e) {
                      e.isEnded && h.default.inst.addEggReward(30);
                    }));
                  }), this.btn_video_expand.on("click", function() {
                    (u.fire("audio", "click"), p.wechat.showRewardedVideoAdNew().then(function(t) {
                      if (t.isEnded) {
                        (h.default.inst.updateViedioBlockNum(),
                          (e.btn_video_expand.active = h.default.inst.video_block_num > 0));
                        var i = cc.instantiate(e.expandPrefab[d.utils.random(0, 2)], );
                        (e.container.addChild(i), i.setPosition(0, e.bird_y_offset), e.birdNodes.push(i), e.arrangeBirds());
                      }
                    }));
                  }),
                  (this.btn_video_refresh.getComponent(cc.Button, ).enableAutoGrayEffect = !0));
              }),
              (t.prototype.initBirds = function() {
                this.refreshBirds();
              }),
              (t.prototype.clearBirds = function() {
                (this.birdNodes.forEach(function(e) {
                    e.getComponent(c.default).deployed || e.destroy();
                  }),
                  (this.birdNodes = []));
              }),
              (t.prototype.getAllBirds = function() {
                var e = [];
                return (this.birdNodes.forEach(function(t) {
                  var i = t.getComponent(s.default);
                  i && e.push(i);
                }), e);
              }),
              (t.prototype.randomRefreshBirds = function(e, t) {
                for (var i = 0, n = [], a = 0, o = 0, r = [], c = !1, l = 0; l < 3; l++) {
                  var h = Math.floor(30 * e.length),
                    u = d.utils.random(0, "auto" == t || a >= 2 ? 100 * e.length - 1 : 100 * e.length - 1 + h, );
                  if (u < 100 * e.length) {
                    var p = [e[Math.floor(u / 100)], 1];
                    (d.utils.random(1, 100) <= 20 && ((p[1] = 2), i++), n.push(p), r.push(p),
                      (o += s.getBirdConfig(p[0]).block));
                  } else {
                    var f = 0;
                    c || ((f = d.utils.random(0, 2)) > 0 && (c = !0));
                    var g = [100, f + 1];
                    (a++, n.push(g), (o += f > 0 ? 2 : 1));
                  }
                }
                return ("video" == t && 0 == i && (r[d.utils.random(0, r.length - 1)][1] = 2), {
                  total_list: n,
                  total_block: o
                });
              }),
              (t.prototype.refreshBirds = function(e) {
                (void 0 === e && (e = "auto"), this._total_refreshed++, this.clearBirds());
                var t = f.default.useTowerArray.filter(function(e) {
                  return e > 0;
                });
                1 == this._total_refreshed && (t = t.filter(function(e) {
                  return 3 != e && 6 != e && 7 != e;
                }));
                var i = !1;
                if (1 == h.default.inst.current_level && 0 == f.default.newbieGuide && this._total_refreshed <= 3) {
                  if (((i = !0), this._total_refreshed <= 2)) {
                    for (var n = 1 == this._total_refreshed ? [2, 4, 1] : [4, 3, 8],
                        a = 0; a < 3; a++) {
                      var o = cc.instantiate(this.birdPrefab[n[a] - 1]);
                      (this.container.addChild(o), o.setPosition(0, this.bird_y_offset), this.birdNodes.push(o));
                    }
                    2 == this._total_refreshed && h.default.inst.startGuide(4);
                  }
                } else {
                  for (var r = void 0;;) {
                    var c = this.randomRefreshBirds(t, e);
                    if (this._total_refreshed > 2 || c.total_block >= 5) {
                      r = c.total_list;
                      break;
                    }
                    console.log("====== 刷新失败，重新随机 =======");
                  }
                  var l = [],
                    u = [];
                  for (a = 0; a < 3; a++) {
                    var p = r[a],
                      g = void 0;
                    (100 == p[0] ? ((g = cc.instantiate(this.expandPrefab[p[1] - 1])), l.push(g)) : ((g = cc.instantiate(this.birdPrefab[p[0] - 1])), p[1] > 1 && ((g.getComponent(s.default).bird_level = p[1]), u.push(g))), this.container.addChild(g), g.setPosition(0, this.bird_y_offset), this.birdNodes.push(g));
                  }
                  if ("video" != e && this._total_refreshed > 1 && h.default.inst.current_level > 1 && (u.length || l.length))
                    if (2 == l.length) l[0].name > l[1].name ? (l[0].getChildByName("video_unlock").active = !0) : (l[1].getChildByName("video_unlock").active = !0);
                    else if (d.utils.random(1, 100) <= 70) {
                    var y = d.utils.random(1, l.length + u.length);
                    y <= l.length ? (l[0].getChildByName("video_unlock").active = !0) : (u[y - l.length - 1].getChildByName("video_unlock", ).active = !0);
                  }
                }
                (this.arrangeBirds(), h.default.inst.refreshBirdsCanLevelup(),
                  (this.btn_video_expand.active = h.default.inst.video_block_num > 0 && !i), "auto" == e ? (this.btn_video_refresh.getComponent(cc.Button, ).interactable = !0) : "video" == e && (this.btn_video_refresh.getComponent(cc.Button, ).interactable = !1));
              }),
              (t.prototype.createBirds = function(e, t) {
                void 0 === t && (t = 1);
                var i = cc.instantiate(this.birdPrefab[e - 1]),
                  n = i.getComponent(s.default);
                return (t > 1 && (n.bird_level = t), this.container.addChild(i), n);
              }), Object.defineProperty(t.prototype, "total_refreshed", {
                get: function() {
                  return this._total_refreshed;
                },
                set: function(e) {
                  this._total_refreshed = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.restoreFromSavedState = function(e) {
                this.total_refreshed = e.total_refreshed;
                var t = e.total_list;
                (this.clearBirds(), this.container.removeAllChildren());
                var i = 1 == h.default.inst.current_level && 0 == f.default.newbieGuide && this._total_refreshed <= 3;
                ((this.btn_video_expand.active = h.default.inst.video_block_num > 0 && !i),
                  (this.btn_video_refresh.getComponent(cc.Button).interactable = e.video_valid));
                for (var n = 0; n < t.length; n++) {
                  var a = t[n],
                    o = void 0;
                  (100 == a[0] ? (o = cc.instantiate(this.expandPrefab[a[1] - 1])) : ((o = cc.instantiate(this.birdPrefab[a[0] - 1])), a[1] > 1 && (o.getComponent(s.default).bird_level = a[1])), a[2] && (o.getChildByName("video_unlock").active = !0), this.container.addChild(o), o.setPosition(0, this.bird_y_offset), this.birdNodes.push(o));
                }
                this.arrangeBirds();
              }),
              (t.prototype.saveCurrentState = function() {
                var e = [];
                return (this.birdNodes.forEach(function(t) {
                  var i = [
                      0,
                      0,
                      t.getChildByName("video_unlock").active ? 1 : 0,
                    ],
                    n = t.getComponent(s.default);
                  (n ? ((i[0] = n.bird_type), (i[1] = n.bird_level)) : ((i[0] = 100), "block1" == t.name ? (i[1] = 1) : "block2" == t.name ? (i[1] = 2) : (i[1] = 3)), e.push(i));
                }), {
                  total_refreshed: this.total_refreshed,
                  total_list: e,
                  video_valid: this.btn_video_refresh.getComponent(cc.Button).interactable,
                });
              }),
              (t.prototype.refreshBirds0 = function(e) {
                (void 0 === e && (e = "auto"), this._total_refreshed++, this.clearBirds());
                var t = f.default.useTowerArray.filter(function(e) {
                  return e > 0;
                });
                1 == this._total_refreshed && (t = t.filter(function(e) {
                  return 3 != e && 6 != e && 7 != e;
                }));
                var i = 0,
                  n = [],
                  a = 0,
                  o = [],
                  r = [],
                  c = !1,
                  l = !1;
                if (1 == h.default.inst.current_level && 0 == f.default.newbieGuide && this._total_refreshed <= 3) {
                  if (((l = !0), this._total_refreshed <= 2)) {
                    for (var u = 1 == this._total_refreshed ? [2, 4, 1] : [4, 3, 8],
                        p = 0; p < 3; p++) {
                      var g = cc.instantiate(this.birdPrefab[u[p] - 1]);
                      (n.push(g), this.container.addChild(g), g.setPosition(0, this.bird_y_offset), this.birdNodes.push(g));
                    }
                    2 == this._total_refreshed && h.default.inst.startGuide(4);
                  }
                } else {
                  for (p = 0; p < 3; p++) {
                    var y = Math.floor(30 * t.length);
                    if (
                      ((g = void 0),
                        (_ = d.utils.random(0, "auto" == e || a >= 2 || 1 == this._total_refreshed ? 100 * t.length - 1 : 100 * t.length - 1 + y, )) < 100 * t.length))
                      ((g = cc.instantiate(this.birdPrefab[t[Math.floor(_ / 100)] - 1], )), d.utils.random(1, 100) <= 20 && ((g.getComponent(s.default).bird_level = 2), i++, r.push(g)), n.push(g));
                    else {
                      var m = 0;
                      (c || ((m = d.utils.random(0, 2)) > 0 && (c = !0)),
                        (g = cc.instantiate(this.expandPrefab[m])), a++, o.push(g));
                    }
                    (this.container.addChild(g), g.setPosition(0, this.bird_y_offset), this.birdNodes.push(g));
                  }
                  if (
                    ("video" == e && i < 1 && n.length > 0 && (((g = n[d.utils.random(0, n.length - 1)]).getComponent(s.default, ).bird_level = 2), r.push(g)), "video" != e && this._total_refreshed > 1 && h.default.inst.current_level > 1 && (r.length || o.length)))
                    if (2 == o.length) o[0].name > o[1].name ? (o[0].getChildByName("video_unlock").active = !0) : (o[1].getChildByName("video_unlock").active = !0);
                    else if (d.utils.random(1, 100) <= 70) {
                    var _;
                    (_ = d.utils.random(1, o.length + r.length)) <= o.length ? (o[0].getChildByName("video_unlock").active = !0) : (r[_ - o.length - 1].getChildByName("video_unlock", ).active = !0);
                  }
                }
                (this.arrangeBirds(), h.default.inst.refreshBirdsCanLevelup(),
                  (this.btn_video_expand.active = h.default.inst.video_block_num > 0 && !l), "auto" == e ? (this.btn_video_refresh.getComponent(cc.Button, ).interactable = !0) : "video" == e && (this.btn_video_refresh.getComponent(cc.Button, ).interactable = !1));
              }),
              (t.prototype.arrangeBirds = function() {
                var e = this.container.width;
                if (0 !== this.birdNodes.length) {
                  for (var t = 0, i = 0, n = this.birdNodes; i < n.length; i++) t += n[i].width;
                  for (var a = this.birdNodes.length,
                      o = a > 1 ? Math.min((e - t) / (a - 1), 50) : 0,
                      r = -e / 2 + (e - (t + o * (a - 1))) / 2,
                      s = function(e) {
                        var t = l.birdNodes[e],
                          i = t.getComponent(c.default);
                        ((i.refresh_pos = cc.v2(r + t.width / 2, l.bird_y_offset, )), cc.tween(t).to(0.15, {
                            position: cc.v3(r + t.width / 2, l.bird_y_offset),
                          }).call(function() {
                            i.updateZIndex();
                          }).start(),
                          (r += t.width + o));
                      },
                      l = this,
                      d = 0; d < a; d++) s(d);
                }
              }),
              (t.prototype.removeBird = function(e) {
                var t = this.birdNodes.indexOf(e);
                if (-1 !== t) {
                  this.birdNodes.splice(t, 1);
                  var i = e.getComponent(c.default);
                  (i && !i.deployed && e.destroy(), this.currentSynthesisBird === e && (this.currentSynthesisBird = null), this.arrangeBirds());
                }
              }),
              (t.prototype.restoreBird = function(e) {
                var t = e.getComponent(s.default);
                if (t) {
                  var i = this.getMergeBird(t);
                  if (i) return (e.destroy(), i.levelup(), void h.default.inst.refreshBirdsCanLevelup());
                }
                this.birdNodes.includes(e) || ((e.parent = this.container), t ? (t.deployed = null) : (e.getComponent(l.default).deployed = null), this.birdNodes.push(e), this.sortBirdsByPosition(), this.arrangeBirds());
              }),
              (t.prototype.getMergeBird = function(e) {
                for (var t = 0.5 * e.cellSize, i = 0; i < this.birdNodes.length; i++) {
                  var n = this.birdNodes[i].getComponent(s.default);
                  if (n && n != e && n.bird_level === e.bird_level && n.bird_type === e.bird_type && e.node.x - n.node.x < t && e.node.x - n.node.x > -t && e.node.y - n.node.y < t && e.node.y - n.node.y > -t) return n;
                }
                return null;
              }), Object.defineProperty(t.prototype, "bird_count", {
                get: function() {
                  return this.birdNodes.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.restoreBirds = function(e) {
                var t,
                  i = this,
                  n = e.filter(function(e) {
                    return !i.birdNodes.includes(e) && cc.isValid(e);
                  });
                (n.forEach(function(e) {
                    e.parent = i.container;
                    var t = e.getComponent(s.default);
                    t && (t.deployed = null);
                  }),
                  (t = this.birdNodes).push.apply(t, n), this.sortBirdsByPosition(), this.arrangeBirds());
              }),
              (t.prototype.refreshBirdsPostion = function(e) {
                var t = e.getComponent(s.default);
                if (t) {
                  var i = this.getMergeBird(t);
                  if (i) return (this.removeBird(e), i.levelup(), void h.default.inst.refreshBirdsCanLevelup());
                }
                (this.sortBirdsByPosition(), this.arrangeBirds());
              }),
              (t.prototype.sortBirdsByPosition = function() {
                this.birdNodes.sort(function(e, t) {
                  return e.x - t.x;
                });
              }),
              (t.prototype.onStartFight = function() {
                (this.clearBirds(), (this.node.active = !1));
              }),
              (t.prototype.onStopFight = function() {
                ((this.node.active = !0), this.refreshBirds());
              }),
              (t.prototype.enableBirdsDrag = function(e) {
                this.birdNodes.forEach(function(t) {
                  var i = t.getComponent(s.default);
                  i && (i.setCanDrag(e),
                    (i.spine.node.color = e ? new cc.Color(255, 255, 255) : new cc.Color(100, 100, 100)));
                });
              }),
              (t._inst = null), o([m([cc.Prefab])], t.prototype, "birdPrefab", void 0), o([m([cc.Prefab])], t.prototype, "expandPrefab", void 0), o([m(cc.Node)], t.prototype, "container", void 0), o([m(cc.Node)], t.prototype, "synthesisArea", void 0), o([m(cc.Node)], t.prototype, "btn_refresh", void 0), o([m(cc.Node)], t.prototype, "btn_video_refresh", void 0), o([m(cc.Node)], t.prototype, "btn_fight", void 0), o([m(cc.Node)], t.prototype, "btn_confirm_expand", void 0), o([m(cc.Node)], t.prototype, "btn_video_expand", void 0), o([m(cc.Node)], t.prototype, "btn_video_egg", void 0),
              (i = o([y], t)));
          })(cc.Component);
        ((i.default = _), cc._RF.pop());
      };
