// module: equipData
// deps: {"../gameData":"gameData","../playerData":"playerData","./stoneData":"stoneData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1cb0fc2nPtMWIN5LnGzmyOt", "equipData");
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
          o = e("./stoneData"),
          r = e("../playerData"),
          s = cc._decorator,
          c = s.ccclass,
          l = (s.property,
            (function() {
              function e() {}
              var t;
              return (
                (t = e),
                (e.getUpgradeCoin = function(e) {
                  for (var t = 100, i = 2, n = 2, a = 0, o = 0; o < e; o++)
                    ((t += i), (i += n), ++a >= 5 && (n++, (a = 0), i++));
                  return t;
                }),
                (e.getUpgradeFlag = function(e) {
                  return e + 1;
                }),
                (e.getEquipTotalPower = function() {
                  for (var e = 0, i = 0; i < 6; i++) e += t.getEquipPower(i + 1);
                  var n = e,
                    r = a.default.getStoneLevelWithType(10101);
                  if (r && r.length > 0)
                    for (i = 0; i < r.length; i++) {
                      var s = (o.default.getStoneEffectWithType(10101, r[i]) + "").split(";");
                      ((e = n * (1 + Number(s[0]) / 100)), (e += Number(s[1])));
                    }
                  return Math.floor(e);
                }),
                (e.getEquipPowerByLevel = function(e) {
                  return e <= 10 ? 1 * e : e <= 20 ? 10 + 2 * (e - 10) : e <= 30 ? 30 + 3 * (e - 20) : e <= 40 ? 60 + 4 * (e - 30) : e <= 50 ? 100 + 5 * (e - 40) : e <= 60 ? 150 + 6 * (e - 50) : e <= 70 ? 210 + 7 * (e - 60) : e <= 80 ? 280 + 8 * (e - 70) : e <= 90 ? 360 + 9 * (e - 80) : 450 + 10 * (e - 90);
                }),
                (e.getEquipPower = function(e) {
                  var t = r.default.equipArray[e - 1];
                  return this.getEquipPowerByLevel(t);
                }),
                (e.EquipConfig = ["1号", "2号", "3号", "4号", "5号", "6号"]),
                (t = n([c], e)));
            })());
        ((i.default = l), cc._RF.pop());
      };
