// module: starArmy
// deps: {"../data/bufferData":"bufferData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../libppgame/libcocos":"libcocos","../libppgame/libwechat":"libwechat","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9084cyy3hBCfqUzcVSPXPqO", "starArmy");
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
          (i.ArmyConfig_en = i.ArmyConfig = i.ArmyType = void 0));
        var r,
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = e("../libppgame/libcocos"),
          h = e("../libppgame/audioMgr"),
          u = e("../playerData"),
          p = e("../data/bufferData"),
          f = e("../libppgame/libwechat"),
          g = e("../gameData");
        ((function(e) {
            ((e[(e.NONG_MING = 1)] = "NONG_MING"),
              (e[(e.JI_QIANG_BING = 2)] = "JI_QIANG_BING"),
              (e[(e.PENG_HUO_BING = 3)] = "PENG_HUO_BING"),
              (e[(e.HU_DUN_BING = 4)] = "HU_DUN_BING"),
              (e[(e.BING_LEI_CHE = 5)] = "BING_LEI_CHE"),
              (e[(e.TAN_KE = 6)] = "TAN_KE"),
              (e[(e.JI_QI_REN = 7)] = "JI_QI_REN"),
              (e[(e.ZHAN_JI = 8)] = "ZHAN_JI"),
              (e[(e.KE_JI_QIU = 9)] = "KE_JI_QIU"),
              (e[(e.DA_HE_JIAN = 10)] = "DA_HE_JIAN"));
          })((r = i.ArmyType || (i.ArmyType = {}))),
          (i.ArmyConfig = [{
            name: "农民",
            hp: 50,
            attack: 10,
            speed: 60,
            range: 25,
            cdTime: 5,
            isSky: 0,
            isBullet: !1,
            size: 1,
            text: "小型地面单位，用来采集水晶矿",
            attackRate: [0, 0],
          }, {
            name: "机枪兵",
            hp: 60,
            attack: 4,
            speed: 35,
            range: 170,
            cdTime: 0.4,
            isSky: 0,
            isBullet: !0,
            size: 1,
            text: "小型地面单位，使用机枪，攻击频率高",
            attackRate: [1, 0.7],
          }, {
            name: "喷火兵",
            hp: 130,
            attack: 12,
            speed: 50,
            range: 90,
            cdTime: 0.6,
            isSky: 0,
            isBullet: !1,
            size: 2,
            text: "中型地面单位，使用喷火枪，近战攻击",
            attackRate: [1, 0],
          }, {
            name: "护盾兵",
            hp: 180,
            attack: 9,
            speed: 55,
            range: 60,
            cdTime: 0.5,
            isSky: 0,
            isBullet: !1,
            size: 2,
            text: "中型地面单位，带有护盾，防御力高",
            attackRate: [1, 0.8],
          }, {
            name: "冰雷车",
            hp: 120,
            attack: 10,
            speed: 60,
            range: 180,
            cdTime: 1,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "中型地面单位，发射冰弹，能冰冻对方",
            attackRate: [1, 0],
          }, {
            name: "坦克",
            hp: 150,
            attack: 50,
            speed: 30,
            range: 350,
            cdTime: 4,
            isSky: 0,
            isBullet: !0,
            size: 3,
            text: "大型地面单位，具有超远射程，造成范围攻击",
            attackRate: [1, 0],
          }, {
            name: "机器人",
            hp: 130,
            attack: 20,
            speed: 45,
            range: 220,
            cdTime: 0.8,
            isSky: 0,
            isBullet: !0,
            size: 3,
            text: "大型地面单位，对空伤害高，血量较高",
            attackRate: [1, 1],
          }, {
            name: "战机",
            hp: 120,
            attack: 32,
            speed: 55,
            range: 180,
            cdTime: 2,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "中型空中单位，飞行速度快，对地威力减半",
            attackRate: [0.5, 1],
          }, {
            name: "科技球",
            hp: 150,
            attack: 36,
            speed: 40,
            range: 240,
            cdTime: 1.6,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "中型空中单位，只对空中单位造成伤害",
            attackRate: [0.5, 1],
          }, {
            name: "大和舰",
            hp: 300,
            attack: 40,
            speed: 26,
            range: 280,
            cdTime: 3,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "大型空中单位，发射大和炮，造成范围攻击",
            attackRate: [1, 1],
          }, ]),
          (i.ArmyConfig_en = [{
            name: "SCV",
            hp: 50,
            attack: 10,
            speed: 60,
            range: 25,
            cdTime: 5,
            isSky: 0,
            isBullet: !1,
            size: 1,
            text: "Small ground unit used for collecting crystal minerals",
            attackRate: [0, 0],
          }, {
            name: "Marine",
            hp: 60,
            attack: 4,
            speed: 35,
            range: 170,
            cdTime: 0.4,
            isSky: 0,
            isBullet: !0,
            size: 1,
            text: "Small ground unit, uses machine gun, high attack rate",
            attackRate: [1, 0.7],
          }, {
            name: "Firebat",
            hp: 130,
            attack: 12,
            speed: 50,
            range: 90,
            cdTime: 0.6,
            isSky: 0,
            isBullet: !1,
            size: 2,
            text: "Medium ground unit, uses a flamethrower, melee attack",
            attackRate: [1, 0],
          }, {
            name: "Medic",
            hp: 180,
            attack: 9,
            speed: 55,
            range: 60,
            cdTime: 0.5,
            isSky: 0,
            isBullet: !1,
            size: 2,
            text: "Medium ground unit with shield and high defense",
            attackRate: [1, 0.8],
          }, {
            name: "Vulture",
            hp: 120,
            attack: 10,
            speed: 60,
            range: 180,
            cdTime: 1,
            isSky: 0,
            isBullet: !0,
            size: 2,
            text: "Medium ground unit that fires freezing projectiles to immobilize enemies",
            attackRate: [1, 0],
          }, {
            name: "Tank",
            hp: 150,
            attack: 50,
            speed: 30,
            range: 350,
            cdTime: 4,
            isSky: 0,
            isBullet: !0,
            size: 3,
            text: "Large ground unit with ultra-long range, capable of area-of-effect attacks",
            attackRate: [1, 0],
          }, {
            name: "Goliath",
            hp: 130,
            attack: 20,
            speed: 45,
            range: 220,
            cdTime: 0.8,
            isSky: 0,
            isBullet: !0,
            size: 3,
            text: "Large ground unit, high anti-air damage, relatively high health",
            attackRate: [1, 1],
          }, {
            name: "Wraith",
            hp: 120,
            attack: 32,
            speed: 55,
            range: 180,
            cdTime: 2,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "Medium-sized aerial unit with fast flight speed and halved ground attack power",
            attackRate: [0.5, 1],
          }, {
            name: "Vessel",
            hp: 150,
            attack: 36,
            speed: 40,
            range: 240,
            cdTime: 1.6,
            isSky: 1,
            isBullet: !0,
            size: 2,
            text: "Medium-sized air unit, only deals damage to air units",
            attackRate: [0.5, 1],
          }, {
            name: "Battlecruiser",
            hp: 300,
            attack: 40,
            speed: 26,
            range: 280,
            cdTime: 3,
            isSky: 1,
            isBullet: !0,
            size: 3,
            text: "Large aerial unit, fires Yamato Cannon, deals area damage",
            attackRate: [1, 1],
          }, ]));
        var y = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.rigidBody = null),
              (t.standImgArray = []),
              (t.moveImgArray = []),
              (t.farmerMoveImgArray = []),
              (t.attackImgArray = []),
              (t.specImgArray = []),
              (t.isSky = 0),
              (t.isBullet = !1),
              (t.type = 1),
              (t.hp = 0),
              (t.totalHp = 0),
              (t.attack = 0),
              (t.speed = 0),
              (t.range = 0),
              (t.cdTime = 0),
              (t.cdNow = 0),
              (t.size = 0),
              (t.attackRate = null),
              (t.moneyIndex = 0),
              (t.status = 0),
              (t.strike = 0.1),
              (t.strikeHurt = 2),
              (t.imgIndex = 0),
              (t.dtTime = 0),
              (t.material = null),
              (t.effectName = ""),
              (t.effectTime = 0),
              (t.isTemp = !1),
              (t.pvpWay = 0),
              (t.hurtTime = 0),
              (t.farmerDone = !1), t);
          }
          return (a(t, e),
            (t.prototype.addEffect = function(e, t, i) {
              if ((void 0 === i && (i = !1), this.effectTime <= 0 || i)) {
                if (
                  ((this.effectName = e),
                    (this.effectTime = t), "ice" == this.effectName)) this.rigidBody.linearVelocity = cc.v2(0, 0);
                else if ("relive" == this.effectName) {
                  var n = this.totalHp - this.hp;
                  (n > 0 && g.default.gameInstance.showText(Math.floor(n) + "", {
                      x: this.node.x,
                      y: this.node.y
                    }, null, 10, ),
                    (this.hp = this.totalHp));
                } else if ("blood" == this.effectName) {
                  var a;
                  ((a = this.totalHp / 3), this.doHurt(a), a > 0 && g.default.gameInstance.showText(Math.floor(a) + "", {
                    x: this.node.x,
                    y: this.node.y
                  }, null, this.pvpWay, ));
                }
                g.default.gameInstance.addEffectOnNode(e, 0.9 * [1, 0.9, 1.1, 1.1, 1.5, 2, 1.4, 1.3, 1.6, 2.2][
                  this.type - 1
                ], {
                  x: 0,
                  y: 0
                }, t, this.node, );
              }
            }),
            (t.prototype.start = function() {}),
            (t.prototype.initArmy = function(e, t, n) {
              if (
                (void 0 === t && (t = !1), void 0 === n && (n = 0),
                  (this.pvpWay = n),
                  (this.isTemp = t),
                  (this.type = e), !this.isTemp)) {
                var a = i.ArmyConfig[e - 1];
                ("en" == g.default.Language && (a = i.ArmyConfig_en[e - 1]),
                  (this.totalHp = a.hp), 0 == g.default.gameMode && (this.totalHp *= 1.6),
                  (this.attack = a.attack),
                  (this.speed = 0.7 * a.speed),
                  (this.range = a.range),
                  (this.cdTime = a.cdTime),
                  (this.strike = 0.1),
                  (this.strikeHurt = 2));
                var o;
                if (
                  ((o = 0 == this.pvpWay ? u.default.armyLevelArray[this.type - 1] : u.default.armyLevelArrayOther[this.type - 1]), 0 == g.default.gameMode)) {
                  var s = g.default.gameInstance.armyChoice,
                    c = p.default.getBuffer();
                  ((this.totalHp = this.totalHp * (1 + s.getArmyBuffer(this.type, "hp")) * Math.pow(1.08, o) * (1 + c.hp / 100)), this.type != r.NONG_MING ? (this.attack = this.attack * (1 + s.getArmyBuffer(this.type, "attack")) * Math.pow(1.08, o) * (1 + c.attack / 100)) : (this.attack = Math.floor(
                      (this.attack + c.restore) * (1 + s.getArmyBuffer(this.type, "attack")), )),
                    (this.speed = this.speed * (1 + s.getArmyBuffer(this.type, "speed")) * Math.pow(1.02, o)),
                    (this.cdTime = this.cdTime / (1 + s.getArmyBuffer(this.type, "cdTime")) / Math.pow(1.05, o) / (1 + c.cd / 100)),
                    (this.strike = this.strike + s.getArmyBuffer(this.type, "strike") + c.strike / 100),
                    (this.strikeHurt = this.strikeHurt + s.getArmyBuffer(this.type, "strikehurt") + (c.strikehurt / 100) * 2));
                } else(0 == this.pvpWay ? ((c = p.default.getBuffer()),
                  (this.totalHp = Math.pow(this.totalHp, Math.pow(1.04, o)) * (1 + c.hp / 200)), this.type != r.NONG_MING ? (this.attack = this.attack * Math.pow(1.04, o) * (1 + c.attack / 200)) : (this.attack = this.attack + c.restore),
                  (this.speed = this.speed * Math.pow(1.01, o)),
                  (this.cdTime = this.cdTime / Math.pow(1.025, o) / (1 + c.cd / 200)),
                  (this.strike = this.strike + c.strike / 200),
                  (this.strikeHurt = this.strikeHurt + (c.strikehurt / 200) * 2)) : ((c = p.default.getBuffer(1)),
                  (this.totalHp = Math.pow(this.totalHp, Math.pow(1.04, o)) * (1 + c.hp / 200)), this.type != r.NONG_MING ? (this.attack = this.attack * Math.pow(1.04, o) * (1 + c.attack / 200)) : (this.attack = this.attack + c.restore),
                  (this.speed = this.speed * Math.pow(1.01, o)),
                  (this.cdTime = this.cdTime / Math.pow(1.025, o) / (1 + c.cd / 200)),
                  (this.strike = this.strike + c.strike / 200),
                  (this.strikeHurt = this.strikeHurt + (c.strikehurt / 200) * 2)), this.type != r.NONG_MING && (this.attack *= 0.6 + 0.2 * Math.floor(g.default.gameInstance.pvpTime / 30)));
                ((this.cdNow = this.cdTime),
                  (this.hp = this.totalHp),
                  (this.isSky = a.isSky),
                  (this.isBullet = a.isBullet),
                  (this.size = a.size),
                  (this.attackRate = a.attackRate), this.type == r.NONG_MING ? (1 == this.pvpWay ? ((this.moneyIndex = g.default.gameInstance.moneyIndexOther), g.default.gameInstance.moneyIndexOther++, g.default.gameInstance.moneyIndexOther > 4 && (g.default.gameInstance.moneyIndexOther = 1)) : ((this.moneyIndex = g.default.gameInstance.moneyIndex), g.default.gameInstance.moneyIndex++, 0 == g.default.gameMode && g.default.gameInstance.unlockMoney ? g.default.gameInstance.moneyIndex > 5 && (g.default.gameInstance.moneyIndex = 1) : g.default.gameInstance.moneyIndex > 4 && (g.default.gameInstance.moneyIndex = 1)), h.default.inst.playAudio("starcraft/product_farmer")) : this.type == r.JI_QIANG_BING || this.type == r.PENG_HUO_BING || this.type == r.HU_DUN_BING ? h.default.inst.playAudio("starcraft/product_small") : this.type == r.BING_LEI_CHE || this.type == r.TAN_KE || this.type == r.JI_QI_REN ? h.default.inst.playAudio("starcraft/product_car") : (this.type != r.ZHAN_JI && this.type != r.KE_JI_QIU && this.type != r.DA_HE_JIAN) || h.default.inst.playAudio("starcraft/product_plane"),
                  (this.material = this.node.getChildByName("node").getComponent(cc.Sprite).getMaterial(0)), this.material.setProperty("u_rate", 1));
              }
            }),
            (t.prototype.setArmyValue = function() {}),
            (t.prototype.refreshArmy = function() {
              var e = u.default.armyLevelArray[this.type - 1],
                t = p.default.getBuffer(),
                n = g.default.gameInstance.armyChoice,
                a = i.ArmyConfig[this.type - 1];
              ("en" == g.default.Language && (a = i.ArmyConfig_en[this.type - 1]), this.totalHp == this.hp ? ((this.totalHp = a.hp * (1 + n.getArmyBuffer(this.type, "hp")) * Math.pow(1.08, e) * (1 + t.hp / 100)),
                  (this.hp = this.totalHp)) : (this.totalHp = a.hp * (1 + n.getArmyBuffer(this.type, "hp")) * Math.pow(1.08, e) * (1 + t.hp / 100)), this.type != r.NONG_MING ? (this.attack = a.attack * (1 + n.getArmyBuffer(this.type, "attack")) * Math.pow(1.08, e) * (1 + t.attack / 100)) : (this.attack = Math.floor(
                  (a.attack + t.restore) * (1 + n.getArmyBuffer(this.type, "attack")), )),
                (this.speed = 0.7 * a.speed * (1 + n.getArmyBuffer(this.type, "speed")) * Math.pow(1.02, e)),
                (this.cdTime = a.cdTime / (1 + n.getArmyBuffer(this.type, "cdTime")) / Math.pow(1.05, e) / (1 + t.cd / 100)),
                (this.strike = 0.1 + n.getArmyBuffer(this.type, "strike") + t.strike / 100),
                (this.strikeHurt = 2 + n.getArmyBuffer(this.type, "strikehurt") + (t.strikehurt / 100) * 2));
            }),
            (t.prototype.update = function(e) {
              if (this.isTemp)
                ((this.node.getChildByName("hp").active = !1),
                  (this.dtTime += e), this.dtTime > 0.1 && ((this.dtTime -= 0.1), null != (t = this.specImgArray) && t.length > 0 && (this.imgIndex >= t.length && (this.imgIndex = 0),
                    (this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = t[this.imgIndex]), this.imgIndex++)));
              else if (
                (this.hurtTime > 0 && ((this.hurtTime -= e * g.default.gameSpeed), this.hurtTime < 0 && (this.hurtTime = 0), this.material.setProperty("u_rate", 0.05 + (Math.abs(this.hurtTime - 0.08) / 0.08) * 0.95, )), !g.default.gameInstance.isPause && g.default.gameInstance.isBattle && (this.isSky ? (this.node.zIndex = 3e3 - this.node.y) : (this.node.zIndex = 1e3 - this.node.y), !(this.effectTime > 0 && ((this.effectTime -= e * g.default.gameSpeed), "ice" == this.effectName))))) {
                if (
                  (this.type != r.NONG_MING && this.cdNow > 0 && (this.cdNow -= e * g.default.gameSpeed), this.type != r.NONG_MING ? this.checkMove(e * g.default.gameSpeed) : this.farmerMove(e * g.default.gameSpeed),
                    (this.dtTime += e * g.default.gameSpeed), this.dtTime > 0.1)) {
                  this.dtTime -= 0.1;
                  var t = null;
                  (0 == this.status ? (t = this.standImgArray) : 1 == this.status ? (t = this.moveImgArray) : 2 == this.status ? (t = this.attackImgArray) : 3 == this.status && (t = this.farmerMoveImgArray), null != t && t.length > 0 && (this.imgIndex >= t.length && ((this.imgIndex = 0), 2 == this.status && (this.status = 0)),
                    (this.node.getChildByName("node").getComponent(cc.Sprite).spriteFrame = t[this.imgIndex]), this.imgIndex++));
                }
                if (this.hp == this.totalHp) this.node.getChildByName("hp").active = !1;
                else if (
                  (this.node.scaleX * this.node.getChildByName("hp").scaleX < 0 && (this.node.getChildByName("hp").scaleX = -this.node.getChildByName("hp").scaleX),
                    (this.node.getChildByName("hp").active = !0),
                    (this.node.getChildByName("hp").getComponent(cc.ProgressBar).progress = this.hp / this.totalHp), this.hp <= 0)) {
                  var i;
                  (f.wechat.vibrateShort(), this.type == r.NONG_MING ? h.default.inst.playAudio("starcraft/dead_farmer") : this.type == r.JI_QIANG_BING ? h.default.inst.playAudio("starcraft/dead_minion") : this.type == r.PENG_HUO_BING ? h.default.inst.playAudio("starcraft/dead_minion") : this.type == r.HU_DUN_BING ? h.default.inst.playAudio("starcraft/dead_minion") : this.type == r.BING_LEI_CHE ? h.default.inst.playAudio("starcraft/dead_car") : this.type == r.TAN_KE ? h.default.inst.playAudio("starcraft/dead_car") : this.type == r.JI_QI_REN ? h.default.inst.playAudio("starcraft/dead_car", ) : this.type == r.ZHAN_JI ? h.default.inst.playAudio("starcraft/dead_plane", ) : this.type == r.KE_JI_QIU ? h.default.inst.playAudio("starcraft/dead_plane", ) : this.type == r.DA_HE_JIAN && h.default.inst.playAudio("starcraft/dead_plane", ), g.default.gameInstance.addEffect("dead", 1, {
                    x: this.node.x,
                    y: this.node.y,
                  }), 1 == this.pvpWay ? (i = g.default.gameInstance.armyArrayOther.indexOf(this.node, )) >= 0 && g.default.gameInstance.armyArrayOther.splice(i, 1) : (i = g.default.gameInstance.armyArray.indexOf(this.node, )) >= 0 && g.default.gameInstance.armyArray.splice(i, 1), this.node.destroy());
                }
              }
            }),
            (t.prototype.farmerMove = function(e) {
              if (
                (this.effectTime > 0 && "slow" == this.effectName && (e *= 0.6), this.farmerDone)) {
                var t = g.default.gameInstance.bgNode.getChildByName("obj").getChildByName("b1");
                1 == this.pvpWay && (t = g.default.gameInstance.bgNode.getChildByName("obj").getChildByName("b1-1"));
                var i = t.x,
                  n = t.y,
                  a = Math.sqrt(Math.pow(this.node.x - i, 2) + Math.pow(this.node.y - n, 2), );
                if (
                  ((c = this.getTheAngle(this.node.x, this.node.y, i, n)) >= 0 && c < 70 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : c > 290 && c < 360 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : c > 110 && c <= 180 && 1 == this.node.scaleX ? (this.node.scaleX = -1) : c > 180 && c < 250 && 1 == this.node.scaleX && (this.node.scaleX = -1), a <= this.range + t.getComponent("building").radio)) {
                  this.farmerDone = !1;
                  var o = this.attack - 2;
                  ((o += g.default.getLevelGiftValueWithType(0, this.pvpWay)), 5 == this.moneyIndex && (o *= 2), 0 == this.pvpWay ? (g.default.gameInstance.money += o) : (g.default.gameInstance.moneyOther += o), g.default.gameInstance.showMoney(o + "", {
                      x: this.node.x,
                      y: this.node.y,
                    }),
                    (this.rigidBody.linearVelocity = cc.v2(0, 0)),
                    (this.status = 0));
                } else {
                  var r = c,
                    s = this.speed * g.default.gameSpeed;
                  ((this.status = 3),
                    (this.rigidBody.linearVelocity = cc.v2(s * Math.cos((r * Math.PI) / 180), s * Math.sin((r * Math.PI) / 180), )));
                }
              } else {
                var c;
                ((t = g.default.gameInstance.bgNode.getChildByName("obj").getChildByName("money" + this.moneyIndex)), 1 == this.pvpWay && (t = g.default.gameInstance.bgNode.getChildByName("obj").getChildByName("money" + this.moneyIndex + "-1")),
                  (i = t.x),
                  (n = t.y),
                  (a = Math.sqrt(Math.pow(this.node.x - i, 2) + Math.pow(this.node.y - n, 2), )),
                  (c = this.getTheAngle(this.node.x, this.node.y, i, n)) >= 0 && c < 80 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : c > 280 && c < 360 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : c > 100 && c <= 180 && 1 == this.node.scaleX ? (this.node.scaleX = -1) : c > 180 && c < 260 && 1 == this.node.scaleX && (this.node.scaleX = -1), a <= this.range ? (this.cdNow <= 0 ? (h.default.inst.playAudio("starcraft/attack_farmer"),
                      (this.cdNow += this.cdTime),
                      (this.farmerDone = !0)) : (this.cdNow -= e),
                    (this.status = 2),
                    (this.rigidBody.linearVelocity = cc.v2(0, 0))) : ((r = c),
                    (s = this.speed * g.default.gameSpeed),
                    (this.status = 1),
                    (this.rigidBody.linearVelocity = cc.v2(s * Math.cos((r * Math.PI) / 180), s * Math.sin((r * Math.PI) / 180), ))));
              }
            }),
            (t.prototype.checkMove = function() {
              this.effectTime > 0 && this.effectName;
              var e = 1e5,
                t = 1e5,
                i = null,
                n = 1e4,
                a = !1,
                o = 0;
              if (0 == g.default.gameMode) {
                for (var s = 0; s < g.default.gameInstance.enemyArray.length; s++)
                  if (
                    ((u = g.default.gameInstance.enemyArray[s]).getComponent("starEnemy", ).isSky && this.attackRate[1] > 0) || (!u.getComponent("starEnemy").isSky && this.attackRate[0] > 0)) {
                    var c = Math.sqrt(Math.pow(this.node.x - e, 2) + Math.pow(this.node.y - t, 2), );
                    (p = Math.sqrt(Math.pow(this.node.x - u.x, 2) + Math.pow(this.node.y - u.y, 2), )) < c && ((e = u.x), (t = u.y), (i = u), (n = p), (a = !0));
                  }
              } else {
                var l = null,
                  d = null;
                for (0 == this.pvpWay ? ((l = g.default.gameInstance.armyArrayOther),
                    (d = g.default.gameInstance.buildingArrayOther)) : ((l = g.default.gameInstance.armyArray),
                    (d = g.default.gameInstance.buildingArray)), s = 0; s < l.length; s++)
                  (((u = l[s]).getComponent("starArmy").isSky && this.attackRate[1] > 0) || (!u.getComponent("starArmy").isSky && this.attackRate[0] > 0)) && ((c = Math.sqrt(Math.pow(this.node.x - e, 2) + Math.pow(this.node.y - t, 2), )),
                    (p = Math.sqrt(Math.pow(this.node.x - u.x, 2) + Math.pow(this.node.y - u.y, 2), )) < c && ((e = u.x),
                      (t = u.y),
                      (i = u),
                      (n = p),
                      (a = !0),
                      (o = 1)));
                for (s = 0; s < d.length; s++) {
                  var u, p;
                  if (!(u = d[s]).getComponent("building").isOver && this.attackRate[0] > 0)
                    ((c = Math.sqrt(Math.pow(this.node.x - e, 2) + Math.pow(this.node.y - t, 2), )),
                      (p = Math.sqrt(Math.pow(this.node.x - u.x, 2) + Math.pow(this.node.y - u.y, 2), )) < c && ((e = u.x),
                        (t = u.y),
                        (i = u),
                        (n = p),
                        (a = !0),
                        (o = 2)));
                }
              }
              if ((n > 600 && 0 == g.default.gameMode && (a = !1), a))
                if (
                  ((w = this.getTheAngle(this.node.x, this.node.y, e, t)) >= 0 && w < 80 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : w > 280 && w < 360 && -1 == this.node.scaleX ? (this.node.scaleX = 1) : w > 100 && w <= 180 && 1 == this.node.scaleX ? (this.node.scaleX = -1) : w > 180 && w < 260 && 1 == this.node.scaleX && (this.node.scaleX = -1),
                    (n <= this.range && 2 != o) || (n <= this.range + 20 && 2 == o))) {
                  if (this.cdNow <= 0) {
                    var f = null,
                      y = 0;
                    0 == g.default.gameMode ? ((f = "starEnemy"),
                      (y = i.getComponent("starEnemy").isSky)) : 1 == o ? ((f = "starArmy"),
                      (y = i.getComponent("starArmy").isSky)) : ((f = "building"), (y = 0));
                    var m = this.attack * this.attackRate[y],
                      _ = !1;
                    (Math.random() < this.strike && ((_ = !0), (m *= this.strikeHurt)),
                      (this.cdNow += this.cdTime), this.isBullet ? this.shootBullet(this.node.x, this.node.y, e, t, m, y, _, ) : (2 == o || ((m = this.attackChange(m, this.size, i.getComponent(f).size, )), i.getComponent(f).isFly || (this.type == r.PENG_HUO_BING && i.getComponent(f).addEffect("fire", 1.5))), i.getComponent(f).doHurt(m), g.default.gameInstance.showText("" + Math.floor(m), {
                        x: i.x,
                        y: i.y
                      }, null, 1 - this.pvpWay, _, )),
                      (this.imgIndex = 0),
                      (this.status = 2), 0 == this.pvpWay && (this.type == r.JI_QIANG_BING ? h.default.inst.playAudio("starcraft/attack_minion") : this.type == r.PENG_HUO_BING ? h.default.inst.playAudio("starcraft/attack_plane") : this.type == r.HU_DUN_BING ? h.default.inst.playAudio("starcraft/attack_farmer", ) : this.type == r.BING_LEI_CHE ? h.default.inst.playAudio("starcraft/attack_car", ) : this.type == r.TAN_KE ? h.default.inst.playAudio("starcraft/attack_tank", ) : this.type == r.JI_QI_REN ? h.default.inst.playAudio("starcraft/attack_minion", ) : this.type == r.ZHAN_JI ? h.default.inst.playAudio("starcraft/attack_plane", ) : this.type == r.KE_JI_QIU ? h.default.inst.playAudio("starcraft/attack_car", ) : this.type == r.DA_HE_JIAN && h.default.inst.playAudio("starcraft/attack_big", )));
                  }
                  this.rigidBody.linearVelocity = cc.v2(0, 0);
                } else {
                  var v = w,
                    b = (0.2 * Math.random() + 0.9) * this.speed * g.default.gameSpeed;
                  ((this.rigidBody.linearVelocity = cc.v2(b * Math.cos((v * Math.PI) / 180), b * Math.sin((v * Math.PI) / 180), )), 1 != this.status && ((this.imgIndex = 0), (this.status = 1)));
                }
              else if (n < 800) {
                var w = 90;
                (1 == this.pvpWay && (w = -90),
                  (v = w),
                  (b = (0.2 * Math.random() + 0.9) * this.speed * g.default.gameSpeed),
                  (this.rigidBody.linearVelocity = cc.v2(b * Math.cos((v * Math.PI) / 180), b * Math.sin((v * Math.PI) / 180), )), 1 != this.status && ((this.imgIndex = 0), (this.status = 1)));
              } else((this.rigidBody.linearVelocity = cc.v2(0, 0)), 0 != this.status && ((this.imgIndex = 0), (this.status = 0)));
            }),
            (t.prototype.doHurt = function(e) {
              (this.effectTime > 0 && "break" == this.effectName && (e *= 1.5),
                (this.hp -= e),
                (this.hurtTime = 0.16));
            }),
            (t.prototype.attackChange = function(e, t, i) {
              return (t < i && (i - t == 1 ? (e *= 0.7) : i - t == 2 && (e *= 0.4)), e);
            }),
            (t.prototype.shootBullet = function(e, t, i, n, a, o, r) {
              var s = this;
              d.cocos.loadRes("starcraft/bullet/bullet-a" + this.type, cc.Prefab).then(function(c) {
                var l = cc.instantiate(c);
                if (s.node && s.node.isValid) {
                  ((e += s.node.getChildByName("shoot").x * s.node.scaleX),
                    (t += s.node.getChildByName("shoot").y));
                  var d = s.getTheAngle(e, t, i, n),
                    h = Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - n, 2));
                  ((l.x = e),
                    (l.y = t), l.getComponent("starBullet").initBullet(s.type, 0, a, d, h, o, s.size, r, 0, s.pvpWay, ), g.default.gameInstance.bgNode.getChildByName("effect").addChild(l));
                }
              });
            }),
            (t.prototype.getTheAngle = function(e, t, i, n) {
              var a = (180 * Math.atan((n - t) / (i - e))) / Math.PI;
              return (
                (n - t > 0 && i - e > 0) || (n - t > 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e < 0 ? (a = 180 + a) : n - t < 0 && i - e > 0 && (a = 360 + a)), a);
            }), o([l(cc.RigidBody)], t.prototype, "rigidBody", void 0), o([l([cc.SpriteFrame])], t.prototype, "standImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "moveImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "farmerMoveImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "attackImgArray", void 0), o([l([cc.SpriteFrame])], t.prototype, "specImgArray", void 0), o([c], t));
        })(cc.Component);
        ((i.default = y), cc._RF.pop());
      };
