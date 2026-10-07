// module: levelPageUI
// deps: {"../data/stageData":"stageData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4106daPDXNGcos3YnL7Yjdw", "levelPageUI");
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
        var r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = e("../gameData"),
          d = e("../playerData"),
          h = e("../data/stageData"),
          u = e("../libppgame/audioMgr"),
          p = e("../libppgame/libcocos"),
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.bg = []), (t.level = 0), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                for (var e = this,
                    t = this.node.getChildByName("enemy"),
                    i = function(i) {
                      t.getChildByName("node" + (i + 1)).on("click", function() {
                        var t = h.default.GetEnemyType(e.level, i);
                        l.default.mainInstance.openEnemyInfo(t, !1);
                      }, );
                    },
                    n = 0; n < 3; n++) i(n);
              }),
              (t.prototype.initLevelPage = function(e) {
                ((this.level = e),
                  (this.node.getChildByName("title").getComponent(cc.Label).string = e + ""), this.refreshLevelPage());
              }),
              (t.prototype.refreshLevelPage = function() {
                for (var e = d.default.levelPassArray[this.level - 1],
                    t = (d.default.levelPassArray[this.level - 1], 0); t < 3; t++) {
                  for (var i = this.node.getChildByName("gift").getChildByName("box" + (t + 1)),
                      n = 0; n < t + 1; n++) {
                    var a = i.getChildByName("star" + (n + 1));
                    e >= n + 1 ? ((a.getChildByName("on").active = !0),
                      (a.getChildByName("off").active = !1)) : ((a.getChildByName("on").active = !1),
                      (a.getChildByName("off").active = !0));
                  }
                  var o = h.default.GetBoxStatus(this.level, t + 1);
                  (i.getChildByName("open").stopAllActions(), 1 == o ? ((i.getChildByName("canopen").active = !0),
                    (i.getChildByName("open").active = !1),
                    (i.getChildByName("get").active = !1),
                    (i.getChildByName("close").active = !1), i.getChildByName("canopen").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.15), cc.scaleTo(0.2, 1), ), ), )) : 2 == o ? ((i.getChildByName("open").active = !0),
                    (i.getChildByName("get").active = !0),
                    (i.getChildByName("close").active = !1),
                    (i.getChildByName("canopen").active = !1)) : ((i.getChildByName("open").active = !1),
                    (i.getChildByName("get").active = !1),
                    (i.getChildByName("canopen").active = !1),
                    (i.getChildByName("close").active = !0)));
                }
              }),
              (t.prototype.showLevelPage = function() {
                this.node.runAction(cc.scaleTo(0.1, 1).easing(cc.easeBackInOut()), );
                for (var e = function(e) {
                      var i = t.node.getChildByName("enemy").getChildByName("node" + (e + 1));
                      i.removeAllChildren();
                      var n = i.children[0];
                      if (n) n.active = !0;
                      else {
                        var a = h.default.GetEnemyType(t.level, e);
                        p.cocos.loadRes("starcraft/enemy/e" + a, cc.Prefab).then(function(e) {
                          var t = cc.instantiate(e);
                          (t.getComponent("starEnemy").initEnemy(a, !1, !0), t.getComponent("starEnemy").isSky && (t.y = 30), i.addChild(t));
                        });
                      }
                    },
                    t = this,
                    i = 0; i < 3; i++) e(i);
                this.node.getChildByName("redpoint").active = !1;
              }),
              (t.prototype.hideLevelPage = function() {
                this.node.scale = 0.9;
                for (var e = 0; e < 3; e++) {
                  var t = this.node.getChildByName("enemy").getChildByName("node" + (e + 1)).getChildByName("enemy");
                  t && (t.active = !1);
                }
                1 == h.default.GetBoxStatus(this.level, 1) || 1 == h.default.GetBoxStatus(this.level, 2) || 1 == h.default.GetBoxStatus(this.level, 3) ? (this.node.getChildByName("redpoint").active = !0) : (this.node.getChildByName("redpoint").active = !1);
              }),
              (t.prototype.showBoss = function() {
                l.default.mainInstance.openEnemyInfo(h.default.GetBossType(this.level), !0, );
              }),
              (t.prototype.openBox = function(e, t) {
                var i = l.default.mainInstance,
                  n = parseInt(t),
                  a = h.default.GetBoxStatus(this.level, n);
                if (1 == a) {
                  u.default.inst.playAudio("openbox");
                  var o = 0.7 + (0.3 * this.level) / l.default.totalLevel;
                  o > 1 && (o = 1);
                  var r = null;
                  1 == n ? (r = h.default.LevelGift1.slice()) : 2 == n ? (r = h.default.LevelGift2.slice()) : 3 == n && (r = h.default.LevelGift3.slice());
                  for (var s = 0; s < r.length; s++) r[s][1] = Math.floor(r[s][1] * o);
                  (d.default.getDataRem(),
                    (d.default.levelGiftArray[this.level - 1] += Math.pow(10, n - 1, )), d.default.saveDataRem(), d.default.saveData(), i.openGetItem(r), this.refreshLevelPage());
                  var c = !1;
                  for (s = 0; s < 3; s++) 1 == h.default.GetBoxStatus(this.level, s + 1) && (c = !0);
                  i.refreshAll(!c);
                } else 2 == a || (u.default.inst.playAudio("starcraft/click"), i.popTips("未达到领取条件"));
              }), o([c([cc.SpriteFrame])], t.prototype, "bg", void 0), o([s], t));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
