// module: stageData
// deps: {"../game/starEnemy":"starEnemy","../gameData":"gameData","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e5aa0n3Y9FNXbqtOq51CkCf", "stageData");
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
          r = e("../game/starEnemy"),
          s = cc._decorator,
          c = s.ccclass,
          l = (s.property,
            (function() {
              function e() {}
              var t;
              return (
                (t = e),
                (e.getLevelConfig = function(e) {
                  return this.StageLevelsConfig[
                    (e - 1) % this.StageLevelsConfig.length];
                }),
                (e.getEnemyArrayWithLevel = function(e) {
                  for (var i = t.StageLevelsConfig[e - 1].monsters,
                      n = new Array(),
                      o = 0; o < i.length; o++) n.push(r.EnemyConfig[i[o] - 1].power);
                  var s = new Array();
                  for (o = 0; o < t.StageLevelsConfig[e - 1].wave; o++) {
                    for (var c = 0, l = 0; l < 3; l++) c += n[l] * t.SubStageEnemyRate[o][l];
                    var d;
                    d = a.default.nowGameLevel < 15 ? (t.SubStageEnemyPower[o] / c) * Math.pow(1.05, a.default.nowGameLevel) : a.default.nowGameLevel < 30 ? (t.SubStageEnemyPower[o] / c) * Math.pow(1.05, 15) * Math.pow(1.03, a.default.nowGameLevel - 15) : a.default.nowGameLevel < 50 ? (t.SubStageEnemyPower[o] / c) * Math.pow(1.05, 15) * Math.pow(1.03, 15) * Math.pow(1.01, a.default.nowGameLevel - 30) : (t.SubStageEnemyPower[o] / c) * Math.pow(1.05, 15) * Math.pow(1.03, 15) * Math.pow(1.01, 20);
                    var h = new Array();
                    for (l = 0; l < 3; l++) {
                      var u = d * t.SubStageEnemyRate[o][l];
                      0 != u && ((u = u > 0 && u < 1 ? 1 : Math.floor(u)), h.push({
                        type: i[l],
                        num: u
                      }));
                    }
                    (1 == e || 2 == e ? 4 == o && h.push({
                      type: t.StageLevelsConfig[e - 1].boss,
                      num: 1,
                      boss: !0,
                    }) : 3 == e || 4 == e ? 3 == o ? h.push({
                      type: i[2],
                      num: 1,
                      boss: !0
                    }) : 7 == o && h.push({
                      type: t.StageLevelsConfig[e - 1].boss,
                      num: 1,
                      boss: !0,
                    }) : 4 == o ? h.push({
                      type: i[2],
                      num: 1,
                      boss: !0
                    }) : 9 == o && h.push({
                      type: t.StageLevelsConfig[e - 1].boss,
                      num: 1,
                      boss: !0,
                    }), s.push(h));
                  }
                  return s;
                }),
                (e.GetLevelReward = function(e, t, i, n, a, o) {
                  (void 0 === n && (n = !1), void 0 === a && (a = !1), void 0 === o && (o = !0));
                  var r = new Array(),
                    s = 25 + e - 1;
                  if (
                    (s > 80 && (s = 80), o || (s = Math.floor(s / 2)),
                      (s += t), i))
                    if (n)(s = t) > 0 ? r.push([5, s]) : r.push([5, 1]);
                    else {
                      var c = Math.floor(s / 2);
                      (r.push([5, c]), r.push([5, s - c]));
                    }
                  else(n && (s = t), r.push([5, s]));
                  return (
                    (s = Math.floor(s / 10)) <= 0 && (s = 1), i ? n || n || r.push([6, s]) : n || r.push([6, s]),
                    (s = 100 + 5 * Math.floor(e / 5)), o || (s = Math.floor(s / 2)), i ? n ? (s = 10 * (t + 1)) : (s += 10 * t) : n ? (s = 10 * (t + 1)) : (s += 50), r.push([1, s]), r.push([7, 1]), r);
                }),
                (e.GetStar3Level = function() {
                  for (var e = 0; e < o.default.levelPassArray.length; e++)
                    if (3 == o.default.levelPassArray[o.default.levelPassArray.length - 1 - e]) return o.default.levelPassArray.length - e;
                  return 0;
                }),
                (e.GetNowLevel = function() {
                  for (var e = a.default.totalLevel, t = 0; t < o.default.levelPassArray.length; t++)
                    if (o.default.levelPassArray[t] < 1) {
                      e = t;
                      break;
                    }
                  return e + 1;
                }),
                (e.GetBoxStatus = function(e, t) {
                  return Math.floor(o.default.levelGiftArray[e - 1] / Math.pow(10, t - 1), ) % 10 != 0 ? 2 : o.default.levelPassArray[e - 1] >= t ? 1 : 0;
                }),
                (e.GetBossType = function(e) {
                  return this.StageLevelsConfig[
                    (e - 1) % this.StageLevelsConfig.length].boss;
                }),
                (e.GetEnemyType = function(e, t) {
                  var i = this.StageLevelsConfig[
                    (e - 1) % this.StageLevelsConfig.length];
                  return i.monsters[t % i.monsters.length];
                }),
                (e.SubStageEnemyPower = [
                  5, 14, 24, 35, 47, 60, 74, 89, 105, 120,
                ]),
                (e.StageLevelsConfig = [{
                  wave: 5,
                  monsters: [1, 1, 2],
                  boss: 2,
                  fac: 1
                }, {
                  wave: 5,
                  monsters: [1, 2, 3],
                  boss: 3,
                  fac: 1.3
                }, {
                  wave: 8,
                  monsters: [1, 2, 4],
                  boss: 4,
                  fac: 1.6
                }, {
                  wave: 8,
                  monsters: [1, 4, 3],
                  boss: 3,
                  fac: 2
                }, {
                  wave: 10,
                  monsters: [1, 2, 5],
                  boss: 5,
                  fac: 2.2
                }, {
                  wave: 10,
                  monsters: [2, 4, 3],
                  boss: 3,
                  fac: 2.8
                }, {
                  wave: 10,
                  monsters: [2, 5, 3],
                  boss: 5,
                  fac: 3.2
                }, {
                  wave: 10,
                  monsters: [2, 5, 6],
                  boss: 6,
                  fac: 3.8
                }, {
                  wave: 10,
                  monsters: [2, 5, 7],
                  boss: 5,
                  fac: 4.5
                }, {
                  wave: 10,
                  monsters: [2, 4, 7],
                  boss: 4,
                  fac: 5.4
                }, {
                  wave: 10,
                  monsters: [4, 3, 8],
                  boss: 8,
                  fac: 6.4
                }, {
                  wave: 10,
                  monsters: [4, 5, 6],
                  boss: 6,
                  fac: 7.6
                }, {
                  wave: 10,
                  monsters: [4, 2, 7],
                  boss: 6,
                  fac: 9
                }, {
                  wave: 10,
                  monsters: [4, 9, 3],
                  boss: 9,
                  fac: 10.6
                }, {
                  wave: 10,
                  monsters: [4, 5, 10],
                  boss: 10,
                  fac: 12.6
                }, {
                  wave: 10,
                  monsters: [5, 2, 3],
                  boss: 3,
                  fac: 14.8
                }, {
                  wave: 10,
                  monsters: [5, 1, 8],
                  boss: 8,
                  fac: 17.2
                }, {
                  wave: 10,
                  monsters: [5, 6, 8],
                  boss: 8,
                  fac: 20.4
                }, {
                  wave: 10,
                  monsters: [5, 4, 10],
                  boss: 10,
                  fac: 24
                }, {
                  wave: 10,
                  monsters: [5, 9, 7],
                  boss: 9,
                  fac: 28
                }, {
                  wave: 10,
                  monsters: [1, 2, 3],
                  boss: 3,
                  fac: 32.6
                }, {
                  wave: 10,
                  monsters: [1, 5, 6],
                  boss: 6,
                  fac: 38.2
                }, {
                  wave: 10,
                  monsters: [1, 2, 4],
                  boss: 4,
                  fac: 44.5
                }, {
                  wave: 10,
                  monsters: [1, 4, 3],
                  boss: 3,
                  fac: 52
                }, {
                  wave: 10,
                  monsters: [1, 2, 5],
                  boss: 5,
                  fac: 60.5
                }, {
                  wave: 10,
                  monsters: [2, 4, 10],
                  boss: 10,
                  fac: 70.5
                }, {
                  wave: 10,
                  monsters: [2, 5, 3],
                  boss: 5,
                  fac: 82.5
                }, {
                  wave: 10,
                  monsters: [2, 5, 6],
                  boss: 6,
                  fac: 98.5
                }, {
                  wave: 10,
                  monsters: [2, 5, 7],
                  boss: 5,
                  fac: 116
                }, {
                  wave: 10,
                  monsters: [2, 4, 7],
                  boss: 4,
                  fac: 136
                }, {
                  wave: 10,
                  monsters: [4, 3, 8],
                  boss: 8,
                  fac: 154
                }, {
                  wave: 10,
                  monsters: [4, 5, 6],
                  boss: 6,
                  fac: 180
                }, {
                  wave: 10,
                  monsters: [4, 2, 7],
                  boss: 6,
                  fac: 210
                }, {
                  wave: 10,
                  monsters: [4, 9, 3],
                  boss: 9,
                  fac: 248
                }, {
                  wave: 10,
                  monsters: [4, 5, 10],
                  boss: 10,
                  fac: 290
                }, {
                  wave: 10,
                  monsters: [5, 2, 3],
                  boss: 3,
                  fac: 340
                }, {
                  wave: 10,
                  monsters: [5, 1, 8],
                  boss: 8,
                  fac: 400
                }, {
                  wave: 10,
                  monsters: [5, 6, 8],
                  boss: 8,
                  fac: 460
                }, {
                  wave: 10,
                  monsters: [5, 4, 10],
                  boss: 10,
                  fac: 530
                }, {
                  wave: 10,
                  monsters: [5, 9, 7],
                  boss: 9,
                  fac: 610
                }, ]),
                (e.SubStageFirstLevelEnemyRate = [
                  [1, 0, 0],
                  [0.9, 0, 0.1],
                  [0.8, 0, 0.2],
                  [0.75, 0, 0.25],
                  [0.7, 0, 0.3],
                ]),
                (e.SubStageEnemyRate = [
                  [1, 0, 0],
                  [0.9, 0.1, 0],
                  [0.85, 0.1, 0.05],
                  [0.8, 0.12, 0.08],
                  [0.75, 0.15, 0.1],
                  [0.7, 0.18, 0.12],
                  [0.65, 0.2, 0.15],
                  [0.6, 0.23, 0.17],
                  [0.55, 0.27, 0.18],
                  [0.5, 0.3, 0.2],
                ]),
                (e.LevelGift1 = [
                  [5, 30],
                  [6, 3],
                  [1, 250],
                ]),
                (e.LevelGift2 = [
                  [5, 30],
                  [5, 30],
                  [6, 3],
                  [1, 320],
                ]),
                (e.LevelGift3 = [
                  [5, 30],
                  [5, 30],
                  [6, 3],
                  [1, 400],
                  [2, 90],
                ]),
                (e.LevelEnemyType = [
                  [1, 2, 3, 4, 5, 8],
                  [6, 7, 9, 10, 11, 12, 13, 16],
                  [14, 15, 17, 18, 19, 20, 21, 22],
                ]),
                (e.LevelBossType = [28, 27, 23, 25, 24, 26, 29]),
                (e.nowGameLevel = 0),
                (t = n([c], e)));
            })());
        ((i.default = l), cc._RF.pop());
      };
