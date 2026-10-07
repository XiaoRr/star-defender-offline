// module: stoneData
// deps: {"../gameData":"gameData","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5af7eS7KTJEebONLfDQsHRZ", "stoneData");
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
        var a = e("../gameData"),
          o = e("../playerData"),
          r = cc._decorator,
          s = r.ccclass,
          c = (r.property,
            (function() {
              function e() {}
              var t;
              return (
                (t = e),
                (e.newRandomStone = function(e) {
                  void 0 === e && (e = 1);
                  var i;
                  return (
                    (i = 100 * Math.random() * e < 5 ? 2 : 1), t.newRandomStoneWithLevel(i));
                }),
                (e.newRandomStoneInBox = function(e) {
                  var i,
                    n = 100 * Math.random();
                  return (
                    (i = 1 == e ? n < 4 ? 3 : n < 20 ? 2 : 1 : n < 4 ? 4 : n < 20 ? 3 : 2), t.newRandomStoneWithLevel(i));
                }),
                (e.newRandomStoneWithLevel = function(e) {
                  var i = a.default.getEquipTypeStone(),
                    n = t.getAllStoneDesWithPosAndLevel(i, e);
                  return [n[Math.floor(Math.random() * n.length)][0], i, e, 0];
                }),
                (e.getAllStoneDesWithPosAndLevel = function(e, i, n) {
                  void 0 === n && (n = 0);
                  for (var a = new Array(), r = 0; r < t.StoneConfig.length; r++) t.StoneConfig[r][0] != n && (("0" != t.StoneConfig[r][2] && -1 == (t.StoneConfig[r][2] + "").split(",").indexOf(e + "")) || (i >= t.StoneConfig[r][4] && o.default.level >= t.StoneConfig[r][5] && a.push([
                    t.StoneConfig[r][0],
                    t.getStoneDesWithType(t.StoneConfig[r][0], i),
                  ])));
                  return a;
                }),
                (e.getStoneDesWithTypeAndLevels = function(e, i) {
                  for (var n = 0; n < t.StoneConfig.length; n++)
                    if (t.StoneConfig[n][0] == e) {
                      for (var a = [0, 0], o = 0; o < i.length; o++) {
                        var r = (t.StoneConfig[n][3] + "").split(",")[i[o] - 1].split(";");
                        ((a[0] += Number(r[0])), r.length > 1 && (a[1] += Number(r[1])));
                      }
                      var s = (t.StoneConfig[n][1] + "").replace("X1", a[0] + "", );
                      return (0 != a[1] && (s = s.replace("X2", a[1] + "")), s);
                    }
                  return null;
                }),
                (e.getStoneDesWithType = function(e, i) {
                  void 0 === i && (i = 0);
                  for (var n = 0; n < t.StoneConfig.length; n++)
                    if (t.StoneConfig[n][0] == e) {
                      if (0 == i) return t.StoneConfig[n][1];
                      var a = (t.StoneConfig[n][3] + "").split(",")[i - 1].split(";"),
                        o = (t.StoneConfig[n][1] + "").replace("X1", a[0]);
                      return (a.length > 1 && (o = o.replace("X2", a[1])), o);
                    }
                  return null;
                }),
                (e.getStoneEffectWithType = function(e, i) {
                  void 0 === i && (i = 0);
                  for (var n = 0; n < t.StoneConfig.length; n++)
                    if (t.StoneConfig[n][0] == e) return 0 == i ? t.StoneConfig[n][3] : (t.StoneConfig[n][3] + "").split(",")[i - 1];
                  return null;
                }),
                (e.StoneConfig = [
                  [
                    10101, "攻击力+X1%，并且+X2", "0", "0.5;10,1;20,1.5;30,2;40,2.5;50,3;60,4;75,5;90",
                    1,
                    1,
                  ],
                  [10102, "暴击率+X1%", "0", "1,2,3,4,5,6,7.5,9", 1, 1],
                  [10103, "炮塔伤害+X1%", "0", "3,6,9,12,15,18,22,27", 1, 1],
                  [
                    10107, "物理炮塔伤害+X1%", "0", "4,8,12,16,20,24,30,36",
                    1,
                    1,
                  ],
                  [
                    10108, "生化炮塔伤害+X1%", "0", "4,8,12,16,20,24,30,36",
                    1,
                    1,
                  ],
                  [
                    10109, "冷冻炮塔伤害+X1%", "0", "4,8,12,16,20,24,30,36",
                    1,
                    1,
                  ],
                  [
                    10110, "燃爆炮塔伤害+X1%", "0", "4,8,12,16,20,24,30,36",
                    1,
                    1,
                  ],
                  [
                    10111, "脉冲炮塔伤害+X1%", "0", "4,8,12,16,20,24,30,36",
                    1,
                    1,
                  ],
                  [
                    10113, "对血量高于70%的敌人造成伤害+X1%", "0", "15,20,25,30,35,40,48,56",
                    1,
                    1,
                  ],
                  [
                    10114, "赋予敌人的负面状态持续时间+X1%", "0", "5,10,15,20,25,30,38,46",
                    1,
                    1,
                  ],
                  [
                    10115, "技能冷却时间减少X1%", "1,2,3", "1,2,3,4,5,6,7.5,9",
                    1,
                    1,
                  ],
                  [
                    10116, "暴击伤害+X1%", "5,6", "15,30,45,60,75,90,110,135",
                    1,
                    1,
                  ],
                  [
                    10120, "前5波，造成伤害+X1%", "1,2,3", "30,45,60,75,90,105,125,150",
                    1,
                    1,
                  ],
                  [
                    10121, "对有负面状态的敌人造成伤害+X1% ", "4,5,6", "16,24,32,40,48,56,68,80",
                    1,
                    1,
                  ],
                  [
                    10122, "对Boss的伤害+X1%", "4,5,6", "0,20,30,40,50,60,75,90",
                    2,
                    1,
                  ],
                  [10123, "子弹的穿透+X1", "5,6", "0,0,0,0,1,2,3,4", 5, 1],
                  [
                    10124, "炮塔伤害随机在-20%~+X1%间浮动", "4", "0,30,40,50,60,70,85,100",
                    2,
                    1,
                  ],
                  [
                    10125, "子弹的飞行速度+X1%", "3", "8,16,24,32,40,48,60,72",
                    1,
                    1,
                  ],
                  [
                    10202, "暴击时追加目标当前生命值X1%的伤害（不超过攻击力的5倍）", "4,5,6", "0,0,0,0,4,6,9,12",
                    5,
                    1,
                  ],
                  [
                    10203, "造成伤害时追加当前生命值X1%的伤害（不超过攻击力的2倍）", "1", "0,0,0,0,0,2,4,7",
                    6,
                    1,
                  ],
                  [
                    10206, "每多一个炮塔，造成的伤害+X1%", "2", "0,0,0,0,5,8,11,14",
                    5,
                    1,
                  ],
                  [
                    10208, "对满血的敌人造成的伤害必定暴击", "4", "0,0,0,0,0,0,1,1",
                    7,
                    1,
                  ],
                  [
                    10401, "阵地基础血量+X1%，受到的伤害降低X2点", "0", "2;2,4;4,6;6,8;8,10;10,12;12,15;15,18;18",
                    1,
                    1,
                  ],
                  [
                    10402, "阵地受到的前X1次伤害无效，并对敌人造成X2%的反伤", "0", "0;0,3;10,4;20,5;30,6;40,7;50,8;70,9;90",
                    2,
                    1,
                  ],
                  [
                    10407, "阵地血量不足30%时伤害+X1%", "4,5,6", "20,30,40,50,60,70,85,100",
                    1,
                    1,
                  ],
                  [
                    10408, "对距离阵地150距离内的敌人造成伤害+X1%", "3,5,6", "10,15,20,25,30,35,43,51",
                    1,
                    1,
                  ],
                  [
                    10409, "每杀死1只敌人，为阵地恢复X1点生命值", "1,2", "1,2,3,5,7,10,13,16",
                    1,
                    1,
                  ],
                  [
                    10410, "击杀Boss后，立即回复阵地X1%的生命值", "3,4", "1,3,6,9,12,16,20,24",
                    1,
                    1,
                  ],
                  [
                    10411, "每完成一个波次，为阵地恢复X1%的生命值", "5,6", "1,2,3,4,6,8,10,12",
                    1,
                    1,
                  ],
                  [
                    10421, "重机枪伤害+X1%", "1,2", "8,16,24,32,40,48,60,72",
                    1,
                    1,
                  ],
                  [
                    10422, "激光炮伤害+X1%", "1,2", "8,16,24,32,40,48,60,72",
                    1,
                    2,
                  ],
                  [
                    10423, "镭射炮伤害+X1%", "1,2", "8,16,24,32,40,48,60,72",
                    1,
                    1,
                  ],
                  [
                    10424, "毒气炮伤害+X1%", "3,4", "8,16,24,32,40,48,60,72",
                    1,
                    8,
                  ],
                  [
                    10425, "聚能炮伤害+X1%", "3,4", "8,16,24,32,40,48,60,72",
                    1,
                    9,
                  ],
                  [
                    10426, "冰冻炮伤害+X1%", "3,4", "8,16,24,32,40,48,60,72",
                    1,
                    1,
                  ],
                  [
                    10427, "闪电风暴伤害+X1%", "5,6", "8,16,24,32,40,48,60,72",
                    1,
                    6,
                  ],
                  [
                    10428, "榴弹炮伤害+X1%", "5,6", "8,16,24,32,40,48,60,72",
                    1,
                    1,
                  ],
                  [
                    10429, "火焰喷射炮伤害+X1%", "5,6", "8,16,24,32,40,48,60,72",
                    1,
                    7,
                  ],
                  [
                    10430, "制导无人机伤害+X1%", "1,3", "8,16,24,32,40,48,60,72",
                    1,
                    4,
                  ],
                  [
                    10431, "超能威压炮伤害+X1%", "1,3", "8,16,24,32,40,48,60,72",
                    1,
                    5,
                  ],
                  [
                    10432, "压缩量子炮伤害+X1%", "1,3", "8,16,24,32,40,48,60,72",
                    1,
                    3,
                  ],
                  [
                    10433, "穿甲导弹炮伤害+X1%", "2,4", "8,16,24,32,40,48,60,72",
                    1,
                    10,
                  ],
                ]),
                (t = n([s], e)));
            })());
        ((i.default = c), cc._RF.pop());
      };
