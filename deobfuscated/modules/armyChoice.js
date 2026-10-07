// module: armyChoice
// deps: {"../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "87bf5ydI2lI56UukL+9zyya", "armyChoice");
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
          (i.ArmyChoiceArray_en = i.ArmyChoiceArray = void 0));
        var a = cc._decorator,
          o = a.ccclass,
          r = (a.property, e("../libppgame/audioMgr")),
          s = e("../playerData"),
          c = e("../gameData");
        ((i.ArmyChoiceArray = [
            [{
              id: 1,
              title: "农民强化",
              text: "农民的采矿量+X",
              effect: "attack",
              value: [0.3, 0.5, 0.7],
            }, {
              id: 2,
              title: "农民强化",
              text: "农民的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "农民强化",
              text: "农民的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, ],
            [{
              id: 1,
              title: "机枪兵强化",
              text: "机枪兵攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "机枪兵强化",
              text: "机枪兵的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "机枪兵强化",
              text: "机枪兵的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "机枪兵强化",
              text: "机枪兵的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "机枪兵强化",
              text: "机枪兵的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "机枪兵强化",
              text: "机枪兵的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "喷火兵强化",
              text: "喷火兵攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "喷火兵强化",
              text: "喷火兵的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "喷火兵强化",
              text: "喷火兵的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "喷火兵强化",
              text: "喷火兵的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "喷火兵强化",
              text: "喷火兵的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "喷火兵强化",
              text: "喷火兵的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "护盾兵强化",
              text: "护盾兵攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "护盾兵强化",
              text: "护盾兵的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "护盾兵强化",
              text: "护盾兵的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "护盾兵强化",
              text: "护盾兵的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "护盾兵强化",
              text: "护盾兵的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "护盾兵强化",
              text: "护盾兵的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "冰雷车强化",
              text: "冰雷车攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "冰雷车强化",
              text: "冰雷车的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "冰雷车强化",
              text: "冰雷车的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "冰雷车强化",
              text: "冰雷车的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "冰雷车强化",
              text: "冰雷车的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "冰雷车强化",
              text: "冰雷车的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "坦克强化",
              text: "坦克攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "坦克强化",
              text: "坦克的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "坦克强化",
              text: "坦克的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "坦克强化",
              text: "坦克的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "坦克强化",
              text: "坦克的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "坦克强化",
              text: "坦克的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "机器人强化",
              text: "机器人攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "机器人强化",
              text: "机器人的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "机器人强化",
              text: "机器人的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "机器人强化",
              text: "机器人的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "机器人强化",
              text: "机器人的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "机器人强化",
              text: "机器人的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "战斗机强化",
              text: "战斗机攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "战斗机强化",
              text: "战斗机的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "战斗机强化",
              text: "战斗机的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "战斗机强化",
              text: "战斗机的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "战斗机强化",
              text: "战斗机的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "战斗机强化",
              text: "战斗机的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "科技球强化",
              text: "科技球攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "科技球强化",
              text: "科技球的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "科技球强化",
              text: "科技球的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "科技球强化",
              text: "科技球的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "科技球强化",
              text: "科技球的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "科技球强化",
              text: "科技球的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "大和舰强化",
              text: "大和舰攻击力+X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "大和舰强化",
              text: "大和舰的移动速度+X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "大和舰强化",
              text: "大和舰的血量+X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "大和舰强化",
              text: "大和舰的攻击速度+X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "大和舰强化",
              text: "大和舰的暴击率+X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "大和舰强化",
              text: "大和舰的暴击伤害+X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "全体兵种强化",
              text: "全体兵种攻击力+X",
              effect: "attack",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 2,
              title: "全体兵种强化",
              text: "全体兵种移动速度+X",
              effect: "speed",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 3,
              title: "全体兵种强化",
              text: "全体兵种血量+X",
              effect: "hp",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 4,
              title: "全体兵种强化",
              text: "全体兵种攻击速度+X",
              effect: "cdTime",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 5,
              title: "全体兵种强化",
              text: "全体兵种暴击率+X",
              effect: "strike",
              value: [0.07, 0.1, 0.15],
            }, {
              id: 6,
              title: "全体兵种强化",
              text: "全体兵种暴击伤害+X",
              effect: "strikehurt",
              value: [0.3, 0.6, 1],
            }, ],
          ]),
          (i.ArmyChoiceArray_en = [
            [{
              id: 1,
              title: "Strengthen SCV",
              text: "Mining output +X",
              effect: "attack",
              value: [0.3, 0.5, 0.7],
            }, {
              id: 2,
              title: "Strengthen SCV",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen SCV",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, ],
            [{
              id: 1,
              title: "Strengthen Marine",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Marine",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Marine",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Marine",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Marine",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Marine",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Firebat",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Firebat",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Firebat",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Firebat",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Firebat",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Firebat",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Medic",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Medic",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Medic",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Medic",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Medic",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Medic",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Vulture",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Vulture",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Vulture",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Vulture",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Vulture",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Vulture",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Tank",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Tank",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Tank",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Tank",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Tank",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Tank",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Goliath",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Goliath",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Goliath",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Goliath",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Goliath",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Goliath",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Wraith",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Wraith",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Wraith",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Wraith",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Wraith",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Wraith",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Vessel",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Vessel",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Vessel",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Vessel",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Vessel",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Vessel",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "Strengthen Battlecruiser",
              text: "Attack +X",
              effect: "attack",
              value: [0.5, 0.7, 1],
            }, {
              id: 2,
              title: "Strengthen Battlecruiser",
              text: "Move speed +X",
              effect: "speed",
              value: [0.5, 0.7, 1],
            }, {
              id: 3,
              title: "Strengthen Battlecruiser",
              text: "Hp +X",
              effect: "hp",
              value: [0.5, 0.7, 1],
            }, {
              id: 4,
              title: "Strengthen Battlecruiser",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.5, 0.7, 1],
            }, {
              id: 5,
              title: "Strengthen Battlecruiser",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.2, 0.3, 0.5],
            }, {
              id: 6,
              title: "Strengthen Battlecruiser",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [1, 2, 3.5],
            }, ],
            [{
              id: 1,
              title: "All strengthen",
              text: "Attack +X",
              effect: "attack",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 2,
              title: "All strengthen",
              text: "Move speed +X",
              effect: "speed",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 3,
              title: "All strengthen",
              text: "Hp +X",
              effect: "hp",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 4,
              title: "All strengthen",
              text: "Attack speed +X",
              effect: "cdTime",
              value: [0.1, 0.2, 0.3],
            }, {
              id: 5,
              title: "All strengthen",
              text: "Critical hit rate +X",
              effect: "strike",
              value: [0.07, 0.1, 0.15],
            }, {
              id: 6,
              title: "All strengthen",
              text: "Critical damage +X",
              effect: "strikehurt",
              value: [0.3, 0.6, 1],
            }, ],
          ]));
        var l = (function() {
          function e() {
            this.choiceArray = new Array();
          }
          return (
            (e.prototype.getChoice = function(e) {
              void 0 === e && (e = !1);
              var t = c.default.gameInstance.buildingChoice.choiceArray,
                n = new Array();
              (n.push(0), t.indexOf(1) >= 0 && (2 == s.default.armyCheck[0][0] ? n.push(1) : 2 == s.default.armyCheck[0][1] ? n.push(2) : 2 == s.default.armyCheck[0][2] && n.push(3)), t.indexOf(2) >= 0 && (2 == s.default.armyCheck[1][0] ? n.push(4) : 2 == s.default.armyCheck[1][1] ? n.push(5) : 2 == s.default.armyCheck[1][2] && n.push(6)), t.indexOf(3) >= 0 && (2 == s.default.armyCheck[2][0] ? n.push(7) : 2 == s.default.armyCheck[2][1] ? n.push(8) : 2 == s.default.armyCheck[2][2] && n.push(9)), t.indexOf(6) >= 0 && n.indexOf(1) < 0 && n.push(1), t.indexOf(7) >= 0 && n.indexOf(2) < 0 && n.push(2), t.indexOf(8) >= 0 && n.indexOf(3) < 0 && n.push(3), t.indexOf(9) >= 0 && n.indexOf(4) < 0 && n.push(4), t.indexOf(10) >= 0 && n.indexOf(5) < 0 && n.push(5), t.indexOf(11) >= 0 && n.indexOf(6) < 0 && n.push(6), t.indexOf(12) >= 0 && n.indexOf(7) < 0 && n.push(7), t.indexOf(13) >= 0 && n.indexOf(8) < 0 && n.push(8), t.indexOf(14) >= 0 && n.indexOf(9) < 0 && n.push(9));
              for (var a = new Array(), o = 0; o < n.length; o++)
                for (var r = n[o], l = 0; l < i.ArmyChoiceArray[r].length; l++) {
                  for (var d = !1, h = 0; h < this.choiceArray.length; h++)
                    if (this.choiceArray[h][0] == r && this.choiceArray[h][1] == l) {
                      d = !0;
                      break;
                    }
                  if (!d) {
                    var u = Math.random();
                    e && (u = 0.5 * u - 0.1);
                    var p = 0;
                    (u < 0.1 ? (p = 2) : u < 0.4 && (p = 1), a.push([r, l, p]));
                  }
                }
              if (a.length > 3) {
                var f = new Array();
                for (o = 0; o < 3; o++)
                  ((u = Math.floor(Math.random() * a.length)), f.push(a[u]), a.splice(u, 1));
                return f;
              }
              if (a.length < 3)
                for (o = 0; o < 6; o++) {
                  for (d = !0, u = Math.floor(6 * Math.random()), l = 0; l < this.choiceArray.length; l++)
                    if (10 == this.choiceArray[l][0] && this.choiceArray[l][1] == ((o + u) % 6) + 1) {
                      d = !1;
                      break;
                    }
                  if (d && a.length < 3) {
                    var g = Math.random();
                    (e && (g = 0.5 * g - 0.1),
                      (p = 0), g < 0.1 ? (p = 2) : g < 0.4 && (p = 1), a.push([10, (o + u) % 6, p]));
                  }
                }
              return a;
            }),
            (e.prototype.doChoice = function(e) {
              (r.default.inst.playAudio("starcraft/upgrade_army"), this.choiceArray.push(e));
              var t = e[0] + 1;
              c.default.gameInstance.changeBuffer(t);
              for (var i = 0; i < c.default.gameInstance.armyArray.length; i++) c.default.gameInstance.armyArray[i].getComponent("starArmy").type == t && c.default.gameInstance.armyArray[i].getComponent("starArmy").refreshArmy();
            }),
            (e.prototype.getArmyBuffer = function(e, t) {
              var n = 0,
                a = e - 1,
                o = 0;
              "attack" == t ? (o = 0) : "speed" == t ? (o = 1) : "hp" == t ? (o = 2) : "cdTime" == t ? (o = 3) : "strike" == t ? (o = 4) : "strikehurt" == t && (o = 5);
              for (var r = 0; r < this.choiceArray.length; r++)
                (this.choiceArray[r][0] != a && 10 != this.choiceArray[r][0]) || this.choiceArray[r][1] != o || (n += i.ArmyChoiceArray[this.choiceArray[r][0]][o].value[this.choiceArray[r][2]]);
              return n;
            }), n([o], e));
        })();
        ((i.default = l), cc._RF.pop());
      };
