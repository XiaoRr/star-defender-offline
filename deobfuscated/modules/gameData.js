// module: gameData
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "fa45b1/7PhMJo4+Q7ZJ0iTZ", "gameData");
        var n =
          (this && this.__decorate) ||
          function (e, t, i, n) {
            var a,
              o = arguments.length,
              r =
                o < 3
                  ? t
                  : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, i))
                    : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) &&
                  (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          o = a.ccclass,
          r = (a.property, e("./playerData")),
          s = e("./data/stageData"),
          c = [
            "星际",
            "深空",
            "量子",
            "虚空",
            "脉冲",
            "赛博",
            "曲速",
            "相位",
            "星云",
            "暗影",
            "光年",
            "熵增",
            "超光",
            "跃迁",
            "全息",
            "纳米",
            "仿生",
            "轨道",
            "星环",
            "星尘",
            "太阳",
            "月球",
            "火星",
            "金星",
            "木星",
            "土星",
            "天王",
            "海王",
            "冥王",
            "深渊",
            "苍穹",
            "极光",
            "晨曦",
            "暮光",
            "零素",
            "零界",
            "幻影",
            "钢铁",
            "钛钢",
            "水晶",
            "时空",
            "维度",
            "裂隙",
            "奇点",
            "黑洞",
            "白洞",
            "虫洞",
            "星门",
            "方舟",
            "灯塔",
            "信标",
            "矩阵",
            "网络",
            "协议",
            "代码",
            "数据",
            "终端",
            "核心",
            "节点",
            "模块",
            "蜂群",
            "铁驭",
            "重工",
            "联合",
            "联邦",
            "帝国",
            "和平",
            "自由",
            "秩序",
            "混沌",
            "真理",
            "荣耀",
            "命运",
            "永恒",
            "无限",
            "终极",
            "末日",
            "天启",
            "裁决",
            "审判",
            "先驱",
            "探索",
            "开拓",
            "守护",
            "仲裁",
            "沉默",
            "虚空",
            "流浪",
            "归乡",
            "远航",
            "银河",
            "湮灭",
            "静滞",
            "潮汐",
            "回响",
            "遗落",
            "最终",
            "初始",
            "创世",
            "铸星",
          ],
          l = [
            "守望者",
            "守护者",
            "先驱者",
            "探索者",
            "开拓者",
            "执法者",
            "执政官",
            "执行官",
            "仲裁官",
            "观察者",
            "聆听者",
            "低语者",
            "毁灭者",
            "吞噬者",
            "编织者",
            "工程师",
            "科学家",
            "研究员",
            "技术官",
            "通讯官",
            "医疗官",
            "战术官",
            "导航员",
            "飞行员",
            "驾驶员",
            "机械师",
            "分析师",
            "程序员",
            "骇客",
            "特工",
            "间谍",
            "刺客",
            "佣兵",
            "战士",
            "卫士",
            "哨兵",
            "游侠",
            "先锋",
            "勇士",
            "斗士",
            "剑士",
            "骑士",
            "卫士",
            "信徒",
            "使徒",
            "门徒",
            "先知",
            "预言家",
            "灵能者",
            "心灵师",
            "法师",
            "术士",
            "巫师",
            "召唤师",
            "炼金师",
            "医生",
            "医师",
            "幸存者",
            "流浪者",
            "旅行者",
            "朝圣者",
            "商人",
            "浪客",
            "血裔",
            "契约者",
            "解放者",
            "指挥官",
            "舰长",
            "船长",
            "队长",
            "团长",
            "议员",
            "领袖",
            "首领",
            "君主",
            "皇帝",
            "女王",
            "公主",
            "亲王",
            "公爵",
            "伯爵",
            "骑士",
            "学徒",
            "新兵",
            "代表",
            "使者",
            "顾问",
            "专家",
            "大师",
            "宗师",
            "传奇",
            "英雄",
            "英灵",
            "化身",
          ],
          d = (function () {
            function e() {
              this.energyTimer = 0;
            }
            var t;
            return (
              (t = e),
              (e.showHurtNum = function (e, t) {
                (void 0 === t && (t = !1), isNaN(e) && (e = 0));
                var i = Math.abs(e),
                  n = "";
                return (
                  (n =
                    i >= 1e8
                      ? Math.floor(i / 1e6) + "m"
                      : i >= 1e5
                        ? Math.floor(i / 1e3) + "k"
                        : Math.floor(i) + ""),
                  t && (e < 0 ? (n = "+" + n) : e > 0 && (n = "-" + n)),
                  n
                );
              }),
              (e.getArmyUpgradeCoin = function (e) {
                return e < 5 ? 300 * (e + 1) : 1500 + 400 * (e + 1 - 5);
              }),
              (e.getArmyUpgradeFlag = function (e) {
                return e < 5 ? 50 * (e + 1) : 250 + 70 * (e + 1 - 5);
              }),
              (e.getArmyTypeFlag = function () {
                var e = [0, 0, 0, 2, 1, 2, 4, 3, 5, 6],
                  i = t.nowLevel;
                0 == i && (i = 1);
                for (var n = new Array(), a = 1; a < 10; a++)
                  i >= e[a] && n.push(a + 1);
                return n[Math.floor(Math.random() * n.length)];
              }),
              (e.isArmyUnlocked = function (e) {
                var i = [0, 0, 0, 2, 1, 2, 4, 3, 5, 6],
                  n = t.nowLevel;
                return (0 == n && (n = 1), n >= i[e - 1] ? 0 : i[e - 1]);
              }),
              (e.getBuildingUpgradeFlag = function (e) {
                return e < 5 ? 5 * (e + 1) : 25 + 7 * (e + 1 - 5);
              }),
              (e.getBuildingTypeFlag = function () {
                var e = [0, 0, 1, 3, 0],
                  i = t.nowLevel;
                0 == i && (i = 1);
                for (var n = new Array(), a = 0; a < 5; a++)
                  i >= e[a] && n.push(a + 1);
                return n[Math.floor(Math.random() * n.length)];
              }),
              (e.getPassLevel = function () {
                for (var e = 0; e < r.default.levelPassArray.length; e++)
                  if (r.default.levelPassArray[e] < 3) return e;
                return r.default.levelPassArray.length;
              }),
              (e.getWeekNumber = function (e) {
                var t = new Date(e),
                  i = new Date(t.getFullYear(), 0, 1),
                  n =
                    1 === i.getDay()
                      ? i
                      : new Date(i.getTime() + 864e5 * (7 - i.getDay()));
                return 1 + Math.floor((t.getTime() - n.getTime()) / 6048e5);
              }),
              (e.checkDayTime = function (e) {
                var i = !1,
                  n = r.default.timer,
                  a = t.mainInstance;
                if (
                  (r.default.getDataRem(), r.default.getItemNum(4) >= t.HPLimit)
                )
                  ((t.energyTimer = 0), a && a.refreshEnergyTime());
                else {
                  if (t.energyTimer >= 6e5) {
                    var o = Math.floor(t.energyTimer / 6e5);
                    ((t.energyTimer = t.energyTimer % 6e5),
                      r.default.addItem(4, o),
                      r.default.getItemNum(4) >= t.HPLimit &&
                        (r.default.setItemNum(4, t.HPLimit),
                        (t.energyTimer = 0)),
                      a && a.refreshAll(),
                      (i = !0));
                  } else a && a.refreshEnergyTime();
                  t.energyTimer += e - n;
                }
                r.default.timer = e;
                var s = new Date(e),
                  c = new Date(n),
                  l =
                    1e4 * s.getFullYear() +
                    100 * (s.getMonth() + 1) +
                    s.getDate(),
                  d =
                    1e4 * c.getFullYear() +
                    100 * (c.getMonth() + 1) +
                    c.getDate(),
                  h = 100 * l + s.getHours(),
                  u = 100 * d + c.getHours();
                if (
                  (t.getWeekNumber(e) != t.getWeekNumber(n) && (i = !0), l > d)
                ) {
                  ((i = !0),
                    (r.default.freeTimeArray = [3, 1, 3, 3, 5, 3, 99, 3]),
                    (r.default.dailyArray = [0, 0, 0, 0]));
                  for (var p = 6; p >= 0; p--)
                    if (
                      2 == r.default.weekArray[p] ||
                      3 == r.default.weekArray[p]
                    ) {
                      6 == p
                        ? (r.default.weekArray = [1, 0, 0, 0, 0, 0, 0])
                        : ((r.default.weekArray[p] = 3),
                          (r.default.weekArray[p + 1] = 1));
                      break;
                    }
                  r.default.onlineTime = 0;
                  var f = r.default.getItemNum(9);
                  f < 5 && (r.default.addItem(9, 5 - f), a && a.refreshAll());
                } else h > u && ((i = !0), (r.default.freeTimeArray[6] = 99));
                i && (r.default.saveDataRem(), r.default.saveData());
              }),
              (e.hasLevelReward = function () {
                for (var e = 0; e < t.nowLevel; e++)
                  for (var i = 0; i < 3; i++)
                    if (1 == s.default.GetBoxStatus(e + 1, i + 1)) return !0;
                return !1;
              }),
              (e.hasDaily = function () {
  window.offlineDaily.sync(r.default,t);
  if (!window.offlineDaily.claimed(r.default)) return true;
  for (let index=0; index<3; index++) if(r.default.dailyArray[index]>=t.dailyNeed[index]) return true;
  return false;
}),
              (e.hasWeek = function () {
                for (var e = 0; e < 7; e++)
                  if (
                    1 == r.default.weekArray[e] ||
                    2 == r.default.weekArray[e]
                  )
                    return !0;
                return !1;
              }),
              (e.hasGift = function () {
                var e = Math.floor(r.default.onlineTime / 1e5);
                return r.default.onlineTime % 1e5 >= t.giftTime[e];
              }),
              (e.getGiftTime = function () {
                var e = Math.floor(r.default.onlineTime / 1e5),
                  i = r.default.onlineTime % 1e5;
                if (i >= t.giftTime[e]) return "可领取";
                var n = t.giftTime[e] - i,
                  a = Math.floor(n / 60),
                  o = Math.floor(n % 60);
                return (a >= 10 ? a : "0" + a) + ":" + (o >= 10 ? o : "0" + o);
              }),
              (e.useGiftTime = function () {
                null == r.default.onlineTime && (r.default.onlineTime = 0);
                var e = Math.floor(r.default.onlineTime / 1e5);
                return (
                  r.default.onlineTime % 1e5 >= t.giftTime[e] &&
                  ((r.default.onlineTime = 1e5 * (e + 1)), !0)
                );
              }),
              (e.hasLevelGift = function () {
                for (var e = 0; e < r.default.levelBenefitArray.length; e++) {
                  var i = t.levelGiftInfoArray[e].level;
                  if (t.nowLevel >= i && 0 == r.default.levelBenefitArray[e])
                    return !0;
                }
                return !1;
              }),
              (e.getLevelGiftValueWithType = function (e, i) {
                void 0 === i && (i = 0);
                var n,
                  a = 0;
                n =
                  0 == i
                    ? r.default.levelBenefitArray
                    : r.default.levelBenefitArrayOther;
                for (var o = 0; o < n.length; o++)
                  e == t.levelGiftInfoArray[o].icon &&
                    1 == n[o] &&
                    (0 == e ? (a += 2) : 9 == e ? (a += 50) : a++);
                return a;
              }),
              (e.getPlayerPower = function () {
                for (
                  var e = 100, t = 0;
                  t < r.default.armyLevelArray.length;
                  t++
                )
                  e += 20 * r.default.armyLevelArray[t];
                for (t = 0; t < r.default.buildingLevelArray.length; t++)
                  e += 50 * r.default.buildingLevelArray[t];
                for (t = 0; t < r.default.bufferArray.length; t++)
                  2 == r.default.bufferArray[t] && (e += 25);
                for (t = 0; t < r.default.levelBenefitArray.length; t++)
                  1 == r.default.levelBenefitArray[t] && (e += 75);
                return e;
              }),
              (e.getOtherPlayerPower = function () {
                for (
                  var e = 100, t = 0;
                  t < r.default.armyLevelArrayOther.length;
                  t++
                )
                  e += 20 * r.default.armyLevelArrayOther[t];
                for (t = 0; t < r.default.buildingLevelArrayOther.length; t++)
                  e += 50 * r.default.buildingLevelArrayOther[t];
                for (t = 0; t < r.default.bufferArrayOther.length; t++)
                  2 == r.default.bufferArrayOther[t] && (e += 25);
                for (t = 0; t < r.default.levelBenefitArrayOther.length; t++)
                  1 == r.default.levelBenefitArrayOther[t] && (e += 75);
                return e;
              }),
              (e.setOtherData = function (e, t, i, n, a) {
                ((r.default.armyLevelArrayOther = e),
                  (r.default.buildingLevelArrayOther = t),
                  (r.default.bufferArrayOther = i),
                  (r.default.armyCheckOther = n),
                  (r.default.levelBenefitArrayOther = a));
              }),
              (e.randomName = function () {
                return (
                  c[Math.floor(Math.random() * c.length)] +
                  l[Math.floor(Math.random() * l.length)]
                );
              }),
              (e.Language = "cn"),
              (e.gameInstance = null),
              (e.mainInstance = null),
              (e.screenW = 0),
              (e.screenH = 0),
              (e.inBattle = !1),
              (e.energyTimer = 0),
              (e.totalLevel = 99),
              (e.nowLevel = 0),
              (e.nowGameLevel = 0),
              (e.HPLimit = 144),
              (e.gameMode = 0),
              (e.gameSpeed = 1),
              (e.reviewVersion = window.reviewVersion || 1.3),
              (e.dailyNeed = [5, 800, 800, 3]),
              (e.giftTime = [
                300, 600, 1800, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600,
                3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600,
                3600,
              ]),
              (e.levelGiftInfoArray = [
                { icon: 0, des: "农民采矿量+2", level: 4 },
                { icon: 1, des: "解锁修复\n（战斗技能）", level: 6 },
                { icon: 9, des: "初始水晶矿+50", level: 8 },
                { icon: 2, des: "解锁核弹\n（战斗技能）", level: 10 },
                { icon: 3, des: "兵营生产上限卡+1", level: 12 },
                { icon: 4, des: "兵营生产速度卡+1", level: 14 },
                { icon: 0, des: "农民采矿量+2", level: 16 },
                { icon: 9, des: "初始水晶矿+50", level: 18 },
                { icon: 5, des: "重工生产上限卡+1", level: 20 },
                { icon: 6, des: "重工生产速度卡+1", level: 22 },
                { icon: 0, des: "农民采矿量+2", level: 24 },
                { icon: 9, des: "初始水晶矿+50", level: 26 },
                { icon: 7, des: "机场生产上限卡+1", level: 28 },
                { icon: 8, des: "机场生产速度卡+1", level: 30 },
                { icon: 0, des: "农民采矿量+2", level: 32 },
                { icon: 9, des: "初始水晶矿+50", level: 34 },
                { icon: 3, des: "兵营生产上限卡+1", level: 36 },
                { icon: 4, des: "兵营生产速度卡+1", level: 38 },
                { icon: 0, des: "农民采矿量+2", level: 40 },
                { icon: 9, des: "初始水晶矿+50", level: 42 },
                { icon: 5, des: "重工生产上限卡+1", level: 44 },
                { icon: 6, des: "重工生产速度卡+1", level: 46 },
                { icon: 0, des: "农民采矿量+2", level: 48 },
                { icon: 9, des: "初始水晶矿+50", level: 50 },
                { icon: 7, des: "机场生产上限卡+1", level: 52 },
                { icon: 8, des: "机场生产速度卡+1", level: 54 },
                { icon: 0, des: "农民采矿量+2", level: 56 },
                { icon: 9, des: "初始水晶矿+50", level: 58 },
                { icon: 3, des: "兵营生产上限卡+1", level: 60 },
                { icon: 4, des: "兵营生产速度卡+1", level: 62 },
              ]),
              (e.originPlayerPower = 0),
              (t = n([o], e))
            );
          })();
        ((i.default = d), cc._RF.pop());
      };
