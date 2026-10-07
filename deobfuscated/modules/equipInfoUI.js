// module: equipInfoUI
// deps: {"../data/equipData":"equipData","../data/stoneData":"stoneData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f93eahNHL1Dgof51gBpMktz", "equipInfoUI");
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
          h = e("../data/equipData"),
          u = e("../data/stoneData"),
          p = e("../libppgame/audioMgr"),
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.equipBg = []),
                (t.equipIcon = []),
                (t.stoneBg = []),
                (t.stoneIcon = []),
                (t.levelUpPrefab = null),
                (t.type = 0), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.initEquipInfo = function(e) {
                ((this.type = e), this.refreshEquipInfo());
              }),
              (t.prototype.refreshEquipInfo = function() {
                var e = this.node.getChildByName("bg").getChildByName("top"),
                  t = Math.floor(l.default.equipInfoArray[this.type - 1][0] / 5, );
                (t > 5 && (t = 5),
                  (e.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.equipBg[t]),
                  (e.getChildByName("bg").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.equipIcon[this.type - 1]),
                  (e.getChildByName("attack").getChildByName("text").getComponent(cc.Label).string = "【攻击力】：" + h.default.getEquipPower(this.type)),
                  (e.getChildByName("level").getChildByName("text").getComponent(cc.Label).string = "【等级】：" + (d.default.equipArray[this.type - 1] + 1)));
                for (var i = this.node.getChildByName("bg").getChildByName("stonebg"),
                    n = 0; n < 5; n++) {
                  var a = i.getChildByName("stone" + (n + 1));
                  if (l.default.equipInfoArray[this.type - 1][1].length > n) {
                    var o = l.default.equipInfoArray[this.type - 1][1][n];
                    ((a.getComponent(cc.Sprite).spriteFrame = this.stoneBg[0]),
                      (a.getChildByName("icon").active = !0),
                      (a.getChildByName("text").active = !0),
                      (a.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.stoneIcon[6 * (o[1] - 1) + (o[2] - 1)]),
                      (a.getChildByName("text").getComponent(cc.Label).string = u.default.getStoneDesWithType(o[0], o[2]) + ""));
                  } else((a.getComponent(cc.Sprite).spriteFrame = this.stoneBg[1]),
                    (a.getChildByName("icon").active = !1),
                    (a.getChildByName("text").active = !1));
                }
                var r = h.default.getUpgradeCoin(d.default.equipArray[this.type - 1], ),
                  s = h.default.getUpgradeFlag(d.default.equipArray[this.type - 1], );
                this.node.getChildByName("bg").getChildByName("coinbg").getChildByName("text").getComponent(cc.Label).string = "" + r;
                var c;
                ((c = d.default.getItemNum(100 + this.type) >= s ? "<color=#00ff00>" + d.default.getItemNum(100 + this.type) + "</c>/" + s : "<color=#ff0000>" + d.default.getItemNum(100 + this.type) + "</c>/" + s),
                  (this.node.getChildByName("bg").getChildByName("flagbg").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.equipIcon[this.type - 1]),
                  (this.node.getChildByName("bg").getChildByName("flagbg").getChildByName("text").getComponent(cc.RichText).string = c));
              }),
              (t.prototype.close = function() {
                ((this.node.active = !1), p.default.inst.playAudio("starcraft/click"));
              }),
              (t.prototype.upgrade = function() {
                (p.default.inst.playAudio("starcraft/click"), d.default.getDataRem());
                var e = h.default.getUpgradeCoin(d.default.equipArray[this.type - 1], ),
                  t = h.default.getUpgradeFlag(d.default.equipArray[this.type - 1], );
                if (d.default.getItemNum(1) >= e && d.default.getItemNum(100 + this.type) >= t) {
                  (p.default.inst.playAudio("done"), d.default.subItem(1, e), d.default.subItem(100 + this.type, t), d.default.equipArray[this.type - 1]++, d.default.saveDataRem(), d.default.saveData(), this.refreshEquipInfo(), l.default.mainInstance.refreshAll());
                  var i = cc.instantiate(this.levelUpPrefab);
                  this.node.getChildByName("bg").getChildByName("top").getChildByName("bg").addChild(i);
                } else l.default.mainInstance.popTips("金币或装备碎片不够");
              }),
              (t.prototype.upgradeAll = function() {
                (p.default.inst.playAudio("starcraft/click"), d.default.getDataRem());
                for (var e = h.default.getUpgradeCoin(d.default.equipArray[this.type - 1], ),
                    t = h.default.getUpgradeFlag(d.default.equipArray[this.type - 1], ),
                    i = !1; d.default.getItemNum(1) >= e && d.default.getItemNum(100 + this.type) >= t;)
                  ((i = !0), d.default.subItem(1, e), d.default.subItem(100 + this.type, t), d.default.equipArray[this.type - 1]++,
                    (e = h.default.getUpgradeCoin(d.default.equipArray[this.type - 1], )),
                    (t = h.default.getUpgradeFlag(d.default.equipArray[this.type - 1], )));
                if (i) {
                  (p.default.inst.playAudio("done"), d.default.saveDataRem(), d.default.saveData(), this.refreshEquipInfo(), l.default.mainInstance.refreshAll());
                  var n = cc.instantiate(this.levelUpPrefab);
                  this.node.getChildByName("bg").getChildByName("top").getChildByName("bg").addChild(n);
                } else l.default.mainInstance.popTips("金币或装备碎片不够");
              }),
              (t.prototype.openStoneInfo = function(e, t) {
                var i = l.default.equipInfoArray[this.type - 1][1];
                if (i.length >= parseInt(t)) {
                  var n = i[parseInt(t) - 1];
                  l.default.mainInstance.openStoneInfo(n[0], n[1], n[2], n[3], 2, );
                }
              }), o([c([cc.SpriteFrame])], t.prototype, "equipBg", void 0), o([c([cc.SpriteFrame])], t.prototype, "equipIcon", void 0), o([c([cc.SpriteFrame])], t.prototype, "stoneBg", void 0), o([c([cc.SpriteFrame])], t.prototype, "stoneIcon", void 0), o([c(cc.Prefab)], t.prototype, "levelUpPrefab", void 0), o([s], t));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
