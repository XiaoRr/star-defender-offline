// module: bufferData
// deps: {"../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a0c40CNsblLb68KQWgQNg58", "bufferData");
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
        var a = e("../playerData"),
          o = cc._decorator,
          r = o.ccclass,
          s = (o.property,
            (function() {
              function e() {}
              var t;
              return (
                (t = e),
                (e.getTypeWithNum = function(e) {
                  for (var i = 0; i < t.BufferConfig.length; i++)
                    if (t.BufferConfig[i][0] == e) return t.BufferConfig[i][1];
                  return 0;
                }),
                (e.getDesWithNum = function(e) {
                  for (var i = 0; i < t.BufferConfig.length; i++)
                    if (t.BufferConfig[i][0] == e) return t.BufferConfig[i][2];
                  return null;
                }),
                (e.getValueWithNum = function(e) {
                  for (var i = 0; i < t.BufferConfig.length; i++)
                    if (t.BufferConfig[i][0] == e) return t.BufferConfig[i][3];
                  return 0;
                }),
                (e.getTypeWithIndex = function(e) {
                  return t.BufferConfig[e][1];
                }),
                (e.getDesWithIndex = function(e) {
                  return t.BufferConfig[e][2];
                }),
                (e.getValueWithIndex = function(e) {
                  return t.BufferConfig[e][3];
                }),
                (e.getBuffer = function(e) {
                  void 0 === e && (e = 0);
                  var i,
                    n = {
                      attack: 0,
                      hp: 0,
                      defense: 0,
                      strike: 0,
                      cd: 0,
                      reduction: 0,
                      restore: 0,
                      strikehurt: 0,
                    };
                  i = 0 == e ? a.default.bufferArray : a.default.bufferArrayOther;
                  for (var o = 0; o < i.length; o++)
                    if (2 == i[o]) switch (t.BufferConfig[o][1]) {
                      case 1:
                        n.attack += Number(t.BufferConfig[o][3]);
                        break;
                      case 2:
                        n.hp += Number(t.BufferConfig[o][3]);
                        break;
                      case 3:
                        n.defense += Number(t.BufferConfig[o][3]);
                        break;
                      case 4:
                        n.cd += Number(t.BufferConfig[o][3]);
                        break;
                      case 5:
                        n.reduction += Number(t.BufferConfig[o][3]);
                        break;
                      case 6:
                        n.restore += Number(t.BufferConfig[o][3]);
                        break;
                      case 7:
                        n.strike += Number(t.BufferConfig[o][3]);
                        break;
                      case 8:
                        n.strikehurt += Number(t.BufferConfig[o][3]);
                    }
                  return n;
                }),
                (e.BufferConfig = [
                  [1, 1, "伤害+5%", 5, 2],
                  [2, 2, "生命+5%", 5, 2],
                  [3, 3, "防御+5", 5, 2],
                  [4, 7, "暴击率+6%", 6, 4],
                  [11, 4, "CD时间-5%", 5, 4],
                  [12, 5, "伤害减免-5%", 5, 4],
                  [13, 6, "采矿量+1", 1, 4],
                  [14, 8, "暴击伤害+20%", 20, 8],
                  [21, 1, "伤害+6%", 6, 6],
                  [22, 2, "生命+6%", 6, 6],
                  [23, 3, "防御+6", 6, 6],
                  [24, 7, "暴击率+8%", 8, 12],
                  [31, 4, "CD时间-6%", 6, 9],
                  [32, 5, "伤害减免-6%", 6, 9],
                  [33, 6, "采矿量+1", 1, 9],
                  [34, 8, "暴击伤害+23%", 23, 18],
                  [41, 1, "伤害+7%", 7, 12],
                  [42, 2, "生命+7%", 7, 12],
                  [43, 3, "防御+7", 7, 12],
                  [44, 7, "暴击率+9%", 9, 24],
                  [51, 4, "CD时间-7%", 7, 15],
                  [52, 5, "伤害减免-7%", 7, 15],
                  [53, 6, "采矿量+2", 2, 15],
                  [54, 8, "暴击伤害+26%", 26, 30],
                  [61, 1, "伤害+8%", 8, 19],
                  [62, 2, "生命+8%", 8, 19],
                  [63, 3, "防御+8", 8, 19],
                  [64, 7, "暴击率+10%", 10, 38],
                  [71, 4, "CD时间-8%", 8, 24],
                  [72, 5, "伤害减免-8%", 8, 24],
                  [73, 6, "采矿量+2", 2, 24],
                  [74, 8, "暴击伤害+30%", 30, 48],
                  [81, 1, "伤害+9%", 9, 30],
                  [82, 2, "生命+9%", 9, 30],
                  [83, 3, "防御+9", 9, 30],
                  [84, 7, "暴击率+12%", 12, 60],
                  [91, 4, "CD时间-9%", 9, 37],
                  [92, 5, "伤害减免-9%", 9, 37],
                  [93, 6, "采矿量+2", 2, 37],
                  [94, 8, "暴击伤害+35%", 35, 74],
                  [101, 1, "伤害+10%", 10, 50],
                  [102, 2, "生命+10%", 10, 50],
                  [103, 3, "防御+10", 10, 50],
                  [104, 7, "暴击率+12%", 12, 90],
                  [111, 4, "CD时间-10%", 10, 60],
                  [112, 5, "伤害减免-10%", 10, 60],
                  [113, 6, "采矿量+2", 2, 60],
                  [114, 8, "暴击伤害+35%", 35, 100],
                  [121, 1, "伤害+10%", 10, 75],
                  [122, 2, "生命+10%", 10, 75],
                  [123, 3, "防御+10", 10, 75],
                  [124, 7, "暴击率+12%", 12, 130],
                  [131, 4, "CD时间-10%", 10, 100],
                  [132, 5, "伤害减免-10%", 10, 100],
                  [133, 6, "采矿量+2", 2, 100],
                  [134, 8, "暴击伤害+35%", 35, 180],
                  [141, 1, "伤害+10%", 10, 140],
                  [142, 2, "生命+10%", 10, 140],
                  [143, 3, "防御+10", 10, 140],
                  [144, 7, "暴击率+12%", 12, 250],
                  [151, 4, "CD时间-10%", 10, 200],
                  [152, 5, "伤害减免-10%", 10, 200],
                  [153, 6, "采矿量+2", 2, 200],
                  [154, 8, "暴击伤害+35%", 35, 350],
                  [161, 1, "伤害+10%", 10, 300],
                  [162, 2, "生命+10%", 10, 300],
                  [163, 3, "防御+10", 10, 300],
                  [164, 7, "暴击率+12%", 12, 500],
                  [171, 4, "CD时间-10%", 10, 450],
                  [172, 5, "伤害减免-10%", 10, 450],
                  [173, 6, "采矿量+2", 2, 450],
                  [174, 8, "暴击伤害+35%", 35, 750],
                ]),
                (t = n([r], e)));
            })());
        ((i.default = s), cc._RF.pop());
      };
