// module: buildingChoice
// deps: {"../gameData":"gameData","../gameScene":"gameScene","../libppgame/audioMgr":"audioMgr","./building":"building","./starArmy":"starArmy"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d94d0+Ar/VEEYM7Mqj/ohuZ", "buildingChoice");
        var n = (this && this.__decorate) || function(e, t, i, n) {
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
          (i.BuildingChoiceArray_en = i.BuildingChoiceArray = void 0));
        var a = cc._decorator,
          o = a.ccclass,
          r = (a.property, e("../gameScene")),
          s = e("./building"),
          c = e("./starArmy"),
          l = e("../libppgame/audioMgr"),
          d = e("../gameData");
        ((i.BuildingChoiceArray = [{
            id: 1,
            title: "建造兵营",
            text: "兵营可以生产步兵",
            condition: 0,
            limit: 1,
            buildingType: s.BuildingType.BING_YING,
            armyType: 0,
            level: 0,
          }, {
            id: 2,
            title: "建造重工",
            text: "重工可以生产地面机械部队",
            condition: 1,
            limit: 1,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 0,
            level: 1,
          }, {
            id: 3,
            title: "建造飞机场",
            text: "飞机场可以生产空中部队",
            condition: 2,
            limit: 1,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 0,
            level: 3,
          }, {
            id: 4,
            title: "建造防护塔",
            text: "防护塔可以抵御敌人",
            condition: 0,
            limit: 2,
            buildingType: s.BuildingType.PAO_TA,
            armyType: 0,
            level: 0,
          }, {
            id: 5,
            title: "生产农民",
            text: "农民数量上限+1",
            condition: 0,
            limit: 2,
            buildingType: s.BuildingType.JI_DI,
            armyType: 1,
            level: 0,
          }, {
            id: 6,
            title: "生产机枪兵",
            text: "机枪兵数量上限+2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 2,
            level: 0,
          }, {
            id: 7,
            title: "生产喷火兵",
            text: "喷火兵数量上限+2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 3,
            level: 0,
          }, {
            id: 8,
            title: "生产护盾兵",
            text: "护盾兵数量上限+2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 4,
            level: 2,
          }, {
            id: 9,
            title: "生产冰雷车",
            text: "冰雷车数量上限+2",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 5,
            level: 1,
          }, {
            id: 10,
            title: "生产坦克",
            text: "坦克数量上限+1",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 6,
            level: 2,
          }, {
            id: 11,
            title: "生产机器人",
            text: "机器人数量上限+2",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 7,
            level: 4,
          }, {
            id: 12,
            title: "生产战斗机",
            text: "战斗机数量上限+2",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 8,
            level: 3,
          }, {
            id: 13,
            title: "生产科技球",
            text: "科技球数量上限+2",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 9,
            level: 5,
          }, {
            id: 14,
            title: "生产大和舰",
            text: "大和舰数量上限+1",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 10,
            level: 6,
          }, {
            id: 15,
            title: "加速机枪兵",
            text: "机枪兵生产速度+50%",
            condition: 6,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 2,
            level: 0,
          }, {
            id: 16,
            title: "加速喷火兵",
            text: "喷火兵生产速度+50%",
            condition: 7,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 3,
            level: 0,
          }, {
            id: 17,
            title: "加速护盾兵",
            text: "护盾兵生产速度+50%",
            condition: 8,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 4,
            level: 0,
          }, {
            id: 18,
            title: "加速冰雷车",
            text: "冰雷车生产速度+50%",
            condition: 9,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 5,
            level: 0,
          }, {
            id: 19,
            title: "加速坦克",
            text: "坦克生产速度+50%",
            condition: 10,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 6,
            level: 0,
          }, {
            id: 20,
            title: "加速机器人",
            text: "机器人生产速度+50%",
            condition: 11,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 7,
            level: 0,
          }, {
            id: 21,
            title: "加速战斗机",
            text: "战斗机生产速度+50%",
            condition: 12,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 8,
            level: 0,
          }, {
            id: 22,
            title: "加速科技球",
            text: "科技球生产速度+50%",
            condition: 13,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 9,
            level: 0,
          }, {
            id: 23,
            title: "加速大和舰",
            text: "大和舰生产速度+50%",
            condition: 14,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 10,
            level: 0,
          }, {
            id: 24,
            title: "强化血量",
            text: "所有建筑的血量+15%",
            condition: -1,
            limit: 999,
            buildingType: 6,
            armyType: 0,
            level: 0,
          }, {
            id: 25,
            title: "强化攻击",
            text: "所有建筑的攻击力+30%",
            condition: -1,
            limit: 999,
            buildingType: 7,
            armyType: 0,
            level: 0,
          }, {
            id: 26,
            title: "强化产能",
            text: "所有建筑的生产速度+10%",
            condition: -1,
            limit: 999,
            buildingType: 8,
            armyType: 0,
            level: 0,
          }, ]),
          (i.BuildingChoiceArray_en = [{
            id: 1,
            title: "Construct Barracks",
            text: "Barracks can product infantry",
            condition: 0,
            limit: 1,
            buildingType: s.BuildingType.BING_YING,
            armyType: 0,
            level: 0,
          }, {
            id: 2,
            title: "Construct Factory",
            text: "Factory can product Mechanical troops",
            condition: 1,
            limit: 1,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 0,
            level: 1,
          }, {
            id: 3,
            title: "Construct Starport",
            text: "Starport can product Air Force",
            condition: 2,
            limit: 1,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 0,
            level: 3,
          }, {
            id: 4,
            title: "Construct Turret",
            text: "Turret can launch missiles",
            condition: 0,
            limit: 2,
            buildingType: s.BuildingType.PAO_TA,
            armyType: 0,
            level: 0,
          }, {
            id: 5,
            title: "Product SCV",
            text: "SCV quantity limit +1",
            condition: 0,
            limit: 2,
            buildingType: s.BuildingType.JI_DI,
            armyType: 1,
            level: 0,
          }, {
            id: 6,
            title: "Product Marine",
            text: "Marine quantity limit +2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 2,
            level: 0,
          }, {
            id: 7,
            title: "Product Firebat",
            text: "Firebat quantity limit +2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 3,
            level: 0,
          }, {
            id: 8,
            title: "Product Medic",
            text: "Medic quantity limit +2",
            condition: 1,
            limit: 3,
            buildingType: s.BuildingType.BING_YING,
            armyType: 4,
            level: 2,
          }, {
            id: 9,
            title: "Product Vulture",
            text: "Vulture quantity limit +2",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 5,
            level: 1,
          }, {
            id: 10,
            title: "Product Tank",
            text: "Tank quantity limit +1",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 6,
            level: 2,
          }, {
            id: 11,
            title: "Product Goliath",
            text: "Goliath quantity limit +2",
            condition: 2,
            limit: 3,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 7,
            level: 4,
          }, {
            id: 12,
            title: "Product Wraith",
            text: "Wraith quantity limit +2",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 8,
            level: 3,
          }, {
            id: 13,
            title: "Product Vessel",
            text: "Vessel quantity limit +2",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 9,
            level: 5,
          }, {
            id: 14,
            title: "Product Battlecruiser",
            text: "Battlecruiser quantity limit +1",
            condition: 3,
            limit: 3,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 10,
            level: 6,
          }, {
            id: 15,
            title: "Speed up Marine",
            text: "Marine product speed +50%",
            condition: 6,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 2,
            level: 0,
          }, {
            id: 16,
            title: "Speed up Firebat",
            text: "Firebat product speed +50%",
            condition: 7,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 3,
            level: 0,
          }, {
            id: 17,
            title: "Speed up Medic",
            text: "Medic product speed +50%",
            condition: 8,
            limit: 2,
            buildingType: s.BuildingType.BING_YING,
            armyType: 4,
            level: 0,
          }, {
            id: 18,
            title: "Speed up Vulture",
            text: "Vulture product speed +50%",
            condition: 9,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 5,
            level: 0,
          }, {
            id: 19,
            title: "Speed up Tank",
            text: "Tank product speed +50%",
            condition: 10,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 6,
            level: 0,
          }, {
            id: 20,
            title: "Speed up Goliath",
            text: "Goliath product speed +50%",
            condition: 11,
            limit: 2,
            buildingType: s.BuildingType.ZHONG_GONG,
            armyType: 7,
            level: 0,
          }, {
            id: 21,
            title: "Speed up Wraith",
            text: "Wraith product speed +50%",
            condition: 12,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 8,
            level: 0,
          }, {
            id: 22,
            title: "Speed up Vessel",
            text: "Vessel product speed +50%",
            condition: 13,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 9,
            level: 0,
          }, {
            id: 23,
            title: "Speed up Battlecruiser",
            text: "Battlecruiser product speed +50%",
            condition: 14,
            limit: 2,
            buildingType: s.BuildingType.JI_CHANG,
            armyType: 10,
            level: 0,
          }, {
            id: 24,
            title: "Strengthen Hp",
            text: "All building Hp +15%",
            condition: -1,
            limit: 999,
            buildingType: 6,
            armyType: 0,
            level: 0,
          }, {
            id: 25,
            title: "Strengthen attack",
            text: "All building attack +30%",
            condition: -1,
            limit: 999,
            buildingType: 7,
            armyType: 0,
            level: 0,
          }, {
            id: 26,
            title: "Strengthen product",
            text: "All building product speed +10%",
            condition: -1,
            limit: 999,
            buildingType: 8,
            armyType: 0,
            level: 0,
          }, ]));
        var h = (function() {
          function e() {
            ((this.choiceArray = new Array()),
              (this.overBuildingArray = new Array()),
              (this.hpBuffer = 1),
              (this.attackBuffer = 1),
              (this.cdTimeBuffer = 1),
              (this.pvpWay = 0),
              (this.cdTimeArray = new Array()));
          }
          return (
            (e.prototype.getChoice = function() {
              for (var e = 0, t = new Array(), n = 0; n < i.BuildingChoiceArray.length; n++) {
                var a = i.BuildingChoiceArray[n].condition,
                  o = i.BuildingChoiceArray[n].id,
                  r = i.BuildingChoiceArray[n].limit;
                if (
                  (6 == o || 7 == o || 8 == o ? (r += d.default.getLevelGiftValueWithType(3, this.pvpWay)) : 15 == o || 16 == o || 17 == o ? (r += d.default.getLevelGiftValueWithType(4, this.pvpWay, )) : 9 == o || 10 == o || 11 == o ? (r += d.default.getLevelGiftValueWithType(5, this.pvpWay, )) : 18 == o || 19 == o || 20 == o ? (r += d.default.getLevelGiftValueWithType(6, this.pvpWay, )) : 12 == o || 13 == o || 14 == o ? (r += d.default.getLevelGiftValueWithType(7, this.pvpWay, )) : (21 != o && 22 != o && 23 != o) || (r += d.default.getLevelGiftValueWithType(8, this.pvpWay, )), !(
                    (i.BuildingChoiceArray[n].level > d.default.nowLevel && 0 == d.default.gameMode) || (1 == d.default.gameMode && (this.overBuildingArray.indexOf(a) >= 0 || (a > 5 && this.overBuildingArray.indexOf(i.BuildingChoiceArray[a - 1].condition, ) >= 0)))) && (0 == a || this.choiceArray.indexOf(a) >= 0))) {
                  for (var s = 0, c = 0; c < this.choiceArray.length; c++) this.choiceArray[c] == o && s++;
                  if (s < r) {
                    if (o < 5) {
                      if (e > 1) continue;
                      e++;
                    }
                    t.push(o);
                  }
                }
              }
              if (t.length > 3) {
                var l = new Array();
                for (n = 0; n < 3; n++) {
                  var h = Math.floor(Math.random() * t.length);
                  (l.push(t[h]), t.splice(h, 1));
                }
                return l;
              }
              if (3 == t.length) return t;
              var u = [24, 25, 26],
                p = 3 - t.length;
              for (n = 0; n < p; n++)
                ((h = Math.floor(Math.random() * u.length)), t.push(u[h]), u.splice(h, 1));
              return t;
            }),
            (e.prototype.doChoice = function(e, t) {
              switch (
                (void 0 === t && (t = !0), r.default.isContinue || l.default.inst.playAudio("starcraft/upgrade_building"), t && this.choiceArray.push(e), e)) {
                case 1:
                  0 == this.pvpWay ? d.default.gameInstance.productBuilding(s.BuildingType.BING_YING, 1, ) : d.default.gameInstance.productBuildingOther(s.BuildingType.BING_YING, 1, );
                  break;
                case 2:
                  0 == this.pvpWay ? d.default.gameInstance.productBuilding(s.BuildingType.ZHONG_GONG, 1, ) : d.default.gameInstance.productBuildingOther(s.BuildingType.ZHONG_GONG, 1, );
                  break;
                case 3:
                  0 == this.pvpWay ? d.default.gameInstance.productBuilding(s.BuildingType.JI_CHANG, 1, ) : d.default.gameInstance.productBuildingOther(s.BuildingType.JI_CHANG, 1, );
                  break;
                case 4:
                  0 == this.pvpWay ? d.default.gameInstance.productBuilding(s.BuildingType.PAO_TA, 1, ) : d.default.gameInstance.productBuildingOther(s.BuildingType.PAO_TA, 1, );
                  break;
                case 5:
                  this.addBuildingArmyNum(s.BuildingType.JI_DI, c.ArmyType.NONG_MING, 1, );
                  break;
                case 6:
                  this.addBuildingArmyNum(s.BuildingType.BING_YING, c.ArmyType.JI_QIANG_BING, 2, );
                  break;
                case 7:
                  this.addBuildingArmyNum(s.BuildingType.BING_YING, c.ArmyType.PENG_HUO_BING, 2, );
                  break;
                case 8:
                  this.addBuildingArmyNum(s.BuildingType.BING_YING, c.ArmyType.HU_DUN_BING, 2, );
                  break;
                case 9:
                  this.addBuildingArmyNum(s.BuildingType.ZHONG_GONG, c.ArmyType.BING_LEI_CHE, 2, );
                  break;
                case 10:
                  this.addBuildingArmyNum(s.BuildingType.ZHONG_GONG, c.ArmyType.TAN_KE, 1, );
                  break;
                case 11:
                  this.addBuildingArmyNum(s.BuildingType.ZHONG_GONG, c.ArmyType.JI_QI_REN, 2, );
                  break;
                case 12:
                  this.addBuildingArmyNum(s.BuildingType.JI_CHANG, c.ArmyType.ZHAN_JI, 2, );
                  break;
                case 13:
                  this.addBuildingArmyNum(s.BuildingType.JI_CHANG, c.ArmyType.KE_JI_QIU, 2, );
                  break;
                case 14:
                  this.addBuildingArmyNum(s.BuildingType.JI_CHANG, c.ArmyType.DA_HE_JIAN, 1, );
                  break;
                case 15:
                  (this.changeBuildingArmyCDTime(s.BuildingType.BING_YING, c.ArmyType.JI_QIANG_BING, 0.7, ), this.cdTimeArray.push(1));
                  break;
                case 16:
                  (this.changeBuildingArmyCDTime(s.BuildingType.BING_YING, c.ArmyType.PENG_HUO_BING, 0.7, ), this.cdTimeArray.push(2));
                  break;
                case 17:
                  (this.changeBuildingArmyCDTime(s.BuildingType.BING_YING, c.ArmyType.HU_DUN_BING, 0.7, ), this.cdTimeArray.push(3));
                  break;
                case 18:
                  (this.changeBuildingArmyCDTime(s.BuildingType.ZHONG_GONG, c.ArmyType.BING_LEI_CHE, 0.7, ), this.cdTimeArray.push(4));
                  break;
                case 19:
                  (this.changeBuildingArmyCDTime(s.BuildingType.ZHONG_GONG, c.ArmyType.TAN_KE, 0.7, ), this.cdTimeArray.push(5));
                  break;
                case 20:
                  (this.changeBuildingArmyCDTime(s.BuildingType.ZHONG_GONG, c.ArmyType.JI_QI_REN, 0.7, ), this.cdTimeArray.push(6));
                  break;
                case 21:
                  (this.changeBuildingArmyCDTime(s.BuildingType.JI_CHANG, c.ArmyType.ZHAN_JI, 0.7, ), this.cdTimeArray.push(7));
                  break;
                case 22:
                  (this.changeBuildingArmyCDTime(s.BuildingType.JI_CHANG, c.ArmyType.KE_JI_QIU, 0.7, ), this.cdTimeArray.push(8));
                  break;
                case 23:
                  (this.changeBuildingArmyCDTime(s.BuildingType.JI_CHANG, c.ArmyType.DA_HE_JIAN, 0.7, ), this.cdTimeArray.push(9));
                  break;
                case 24:
                  this.hpBuffer += 0.15;
                  break;
                case 25:
                  this.attackBuffer += 0.3;
                  break;
                case 26:
                  this.cdTimeBuffer *= 0.9;
              }
            }),
            (e.prototype.addBuildingArmyNum = function(e, t, i) {
              if (0 == this.pvpWay)
                for (var n = 0; n < d.default.gameInstance.buildingArray.length; n++)
                  (a = d.default.gameInstance.buildingArray[n]).getComponent("building", ).type == e && a.getComponent("building").addBuildingArmyNum(t, i);
              else
                for (n = 0; n < d.default.gameInstance.buildingArrayOther.length; n++) {
                  var a;
                  (a = d.default.gameInstance.buildingArrayOther[n]).getComponent("building", ).type == e && a.getComponent("building").addBuildingArmyNum(t, i);
                }
            }),
            (e.prototype.changeBuildingArmyCDTime = function(e, t, i) {
              if (1 == d.default.gameMode)
                if (0 == this.pvpWay)
                  for (var n = 0; n < d.default.gameInstance.buildingArray.length; n++)
                    (a = d.default.gameInstance.buildingArray[n]).getComponent("building", ).type == e && a.getComponent("building").changeBuildingArmyCDTime(t, i);
                else
                  for (n = 0; n < d.default.gameInstance.buildingArrayOther.length; n++) {
                    var a;
                    (a = d.default.gameInstance.buildingArrayOther[n]).getComponent("building").type == e && a.getComponent("building").changeBuildingArmyCDTime(t, i);
                  }
            }), n([o], e));
        })();
        ((i.default = h), cc._RF.pop());
      };
