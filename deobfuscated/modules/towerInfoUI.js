// module: towerInfoUI
// deps: {"../game/starArmy":"starArmy","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "63e8cdEvglOmYbS2Drbnjk5", "towerInfoUI");
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
          h = e("../libppgame/libcocos"),
          u = e("../libppgame/audioMgr"),
          p = e("../game/starArmy"),
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.levelUpPrefab = null), (t.type = 0), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.initTowerInfo = function(e) {
                ((this.type = e), this.refreshTowerInfo());
              }),
              (t.prototype.refreshTowerInfo = function() {
                var e = this,
                  t = [1, 2, 2, 2, 1.5, 1.2, 1.4, 1.4, 1.2, 1.1],
                  i = this.node.getChildByName("bg"),
                  n = i.getChildByName("top");
                (n.getChildByName("army").removeAllChildren(), h.cocos.loadRes("starcraft/army/a" + this.type, cc.Prefab).then(function(i) {
                  var a = cc.instantiate(i);
                  (a.getComponent("starArmy").initArmy(e.type, !0), e.type >= 8 && (a.y = 30),
                    (n.getChildByName("army").scale = t[e.type - 1]), n.getChildByName("army").addChild(a));
                }));
                var a = d.default.armyLevelArray[this.type - 1],
                  o = p.ArmyConfig[this.type - 1];
                ("en" == l.default.Language && (o = p.ArmyConfig_en[this.type - 1]),
                  (n.getChildByName("name").getChildByName("text").getComponent(cc.Label).string = o.name),
                  (n.getChildByName("name").getChildByName("level").getComponent(cc.Label).string = "Lv " + (a + 1)),
                  (n.getChildByName("des").getChildByName("text").getComponent(cc.Label).string = o.text));
                var r = l.default.getArmyUpgradeCoin(a);
                i.getChildByName("text").getComponent(cc.Label).string = "" + r;
                var s = l.default.getArmyUpgradeFlag(a),
                  c = i.getChildByName("pro"),
                  u = d.default.getItemNum(200 + this.type);
                ((c.getChildByName("text").getComponent(cc.Label).string = u + "/" + s), u >= s ? ((c.getChildByName("bar2").active = !0),
                  (c.getChildByName("bar1").active = !1),
                  (c.getChildByName("bar2").width = 200)) : ((c.getChildByName("bar2").active = !1),
                  (c.getChildByName("bar1").active = !0),
                  (c.getChildByName("bar1").width = (200 * u) / s)));
                var f = i.getChildByName("infobg").getChildByName("attr1");
                ((f.getComponent(cc.Label).string = "【血量】" + Math.floor(o.hp * Math.pow(1.08, a))),
                  (f.getChildByName("text").getComponent(cc.Label).string = "" + Math.floor(o.hp * Math.pow(1.08, a + 1))));
                var g = i.getChildByName("infobg").getChildByName("attr2");
                ((g.getComponent(cc.Label).string = "【伤害】" + Math.floor(o.attack * Math.pow(1.08, a))),
                  (g.getChildByName("text").getComponent(cc.Label).string = "" + Math.floor(o.attack * Math.pow(1.08, a + 1))));
                var y = i.getChildByName("infobg").getChildByName("attr3");
                ((y.getComponent(cc.Label).string = "【移动】" + Math.floor(o.speed * Math.pow(1.02, a))),
                  (y.getChildByName("text").getComponent(cc.Label).string = "" + Math.floor(o.speed * Math.pow(1.02, a + 1))));
                var m = i.getChildByName("infobg").getChildByName("attr4");
                ((m.getComponent(cc.Label).string = "【间隔】" + (o.cdTime / Math.pow(1.05, a)).toFixed(1)),
                  (m.getChildByName("text").getComponent(cc.Label).string = "" + (o.cdTime / Math.pow(1.05, a + 1)).toFixed(1)),
                  (i.getChildByName("tips1").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[o.size - 1]),
                  (i.getChildByName("tips2").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[o.isSky ? 4 : 3]),
                  (i.getChildByName("tips3").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[o.isBullet ? 6 : 5]), 0 == o.attackRate[1] ? (i.getChildByName("tips4").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[7]) : 0 == o.attackRate[0] ? (i.getChildByName("tips4").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[8]) : (i.getChildByName("tips4").getComponent(cc.Sprite).spriteFrame = l.default.mainInstance.enemyTips[9]));
              }),
              (t.prototype.upgradeTower = function() {
                var e = this;
                u.default.inst.playAudio("starcraft/click");
                var t = d.default.armyLevelArray[this.type - 1];
                d.default.getItemNum(200 + this.type) >= l.default.getArmyUpgradeFlag(t) && d.default.getItemNum(1) >= l.default.getArmyUpgradeCoin(t) ? (u.default.inst.playAudio("upgrade"), d.default.subItem(200 + this.type, l.default.getArmyUpgradeFlag(t), ), d.default.subItem(1, l.default.getArmyUpgradeCoin(t)), d.default.armyLevelArray[this.type - 1]++, d.default.saveData(), h.cocos.loadRes("starcraft/effect/upgrade", cc.Prefab).then(function(t) {
                  var i = cc.instantiate(t);
                  ((i.zIndex = 1e4), e.node.getChildByName("bg").getChildByName("top").getChildByName("army").addChild(i));
                }), this.refreshTowerInfo(), l.default.mainInstance.refreshAll()) : l.default.mainInstance.popTips("升级所需的水晶和碎片不足");
              }),
              (t.canUpgradeTower = function(e) {
                if ((void 0 === e && (e = 0), e > 0)) {
                  var t = d.default.armyLevelArray[e - 1];
                  return (d.default.getItemNum(200 + e) >= l.default.getArmyUpgradeFlag(t) && d.default.getItemNum(1) >= l.default.getArmyUpgradeCoin(t));
                }
                for (var i = 0, n = d.default.armyLevelArray.length; i < n; i++)
                  if (
                    ((t = d.default.armyLevelArray[i]), d.default.getItemNum(200 + i + 1) >= l.default.getArmyUpgradeFlag(t) && d.default.getItemNum(1) >= l.default.getArmyUpgradeCoin(t))) return !0;
                return !1;
              }),
              (t.prototype.closeTowerInfo = function() {
                ((this.node.active = !1), u.default.inst.playAudio("starcraft/click"));
              }), o([c(cc.Prefab)], t.prototype, "levelUpPrefab", void 0), o([s], t));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
