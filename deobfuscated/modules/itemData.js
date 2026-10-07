// module: itemData
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "15243aBzvdCI6UaVLTw7JVV", "itemData");
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
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var a = cc._decorator,
          o = a.ccclass,
          r = (a.property,
            (function() {
              function e() {}
              var t;
              return (
                (t = e),
                (e.getItemLevelColor = function() {}),
                (e.getItemIndexWithType = function(e) {
                  for (var i = 0; i < t.ItemConfig.length; i++)
                    if (t.ItemConfig[i][0] == e) return i;
                  return 0;
                }),
                (e.getItemNameWithType = function(e) {
                  for (var i = 0; i < t.ItemConfig.length; i++)
                    if (t.ItemConfig[i][0] == e) return t.ItemConfig[i][1];
                  return "";
                }),
                (e.getItemLimitWithType = function(e) {
                  for (var i = 0; i < t.ItemConfig.length; i++)
                    if (t.ItemConfig[i][0] == e) return t.ItemConfig[i][4];
                  return "";
                }),
                (e.getItemNameWithIndex = function(e) {
                  return t.ItemConfig[e][1];
                }),
                (e.getItemDesWithType = function(e) {
                  for (var i = 0; i < t.ItemConfig.length; i++)
                    if (t.ItemConfig[i][0] == e) return t.ItemConfig[i][2];
                  return "";
                }),
                (e.getItemDesWithIndex = function(e) {
                  return t.ItemConfig[e][2];
                }),
                (e.ItemConfig = [
                  [1, "水晶", "游戏中的常用资源", 1, 99999],
                  [2, "天然气", "游戏中重要的资源", 3, 99999],
                  [3, "天然气", "游戏中重要的资源", 3, 99999],
                  [4, "能量", "挑战关卡需要能量，每10分钟恢复1点", 1, 9999],
                  [
                    5, "随机兵种碎片", "获得后会转变为某个兵种的碎片，可以用于升级对应的兵种",
                    2,
                    9999,
                  ],
                  [
                    6, "随机建筑图纸", "获得后会转变为某个建筑的图纸，可以用于升级对应的建筑",
                    3,
                    9999,
                  ],
                  [7, "科技魔方", "用于解锁和升级普通科技", 2, 999],
                  [101, "基地图纸", "用于升级基地，强化基地的属性", 3, 999],
                  [102, "兵营图纸", "用于升级兵营，强化兵营的属性", 3, 999],
                  [103, "重工图纸", "用于升级重工，强化重工的属性", 3, 999],
                  [104, "机场图纸", "用于升级机场，强化机场的属性", 3, 999],
                  [105, "炮塔图纸", "用于升级炮塔，强化炮塔的属性", 3, 999],
                  [
                    201, "农民碎片", "可以用于升级农民的碎片，提高农民的属性",
                    2,
                    9999,
                  ],
                  [
                    202, "机枪兵碎片", "可以用于升级机枪兵的碎片，提高机枪兵的属性",
                    2,
                    9999,
                  ],
                  [
                    203, "喷火兵碎片", "可以用于升级喷火兵的碎片，提高喷火兵的属性",
                    2,
                    9999,
                  ],
                  [
                    204, "护盾兵碎片", "可以用于升级护盾兵的碎片，提高护盾兵的属性",
                    2,
                    9999,
                  ],
                  [
                    205, "冰雷车碎片", "可以用于升级冰雷车的碎片，提高冰雷车的属性",
                    2,
                    9999,
                  ],
                  [
                    206, "坦克碎片", "可以用于升级坦克的碎片，提高坦克的属性",
                    2,
                    9999,
                  ],
                  [
                    207, "机器人碎片", "可以用于升级机器人的碎片，提高机器人的属性",
                    2,
                    9999,
                  ],
                  [
                    208, "战斗机碎片", "可以用于升级战斗机的碎片，提高战斗机的属性",
                    2,
                    9999,
                  ],
                  [
                    209, "科技球碎片", "可以用于升级科技球的碎片，提高科技球的属性",
                    2,
                    9999,
                  ],
                  [
                    210, "大和舰碎片", "可以用于升级大和舰的碎片，提高大和舰的属性",
                    2,
                    9999,
                  ],
                  [8, "科技星核", "用于解锁和升级战略科技", 3, 999],
                  [
                    9, "竞技券", "参与竞技场的凭证，每次匹配会消耗一张，每日0点恢复满",
                    2,
                    20,
                  ],
                ]),
                (t = n([o], e)));
            })());
        ((i.default = r), cc._RF.pop());
      };
