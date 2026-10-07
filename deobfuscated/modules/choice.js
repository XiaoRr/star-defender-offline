// module: choice
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b1d769TQZJJjrQZcX0g0c4+", "choice");
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
              return (
                (e.CHOICE_CONFIG = [
                  ["[重机枪]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[重机枪]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[重机枪]暴击率<color=#aa0000>+X%</c>", "暴", "strike",
                    [5, 15, 25], "[重机枪]暴击伤害<color=#aa0000>+X%</c>", "暴", "strikeattack",
                    [20, 50, 80],
                  ],
                  ["[激光炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[激光炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[激光炮]激光宽度<color=#aa0000>+X%</c>", "宽", "size",
                    [20, 40, 60], "[激光炮]击退目标<color=#aa0000>X格</c>", "退", "effect",
                    [1, 2, 3],
                  ],
                  ["[镭射炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[镭射炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[镭射炮]减速时长<color=#aa0000>+X秒</c>", "减", "effect",
                    [1, 2, 3], "[镭射炮]暴击率<color=#aa0000>+X%</c>", "暴", "strike",
                    [5, 15, 25],
                  ],
                  ["[毒气炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[毒气炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[毒气炮]攻击范围<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50], "[毒气炮]最高减速数量<color=#aa0000>+X</c>", "减", "spec",
                    [1, 3, 5],
                  ],
                  ["[聚能炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[聚能炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[聚能炮]冰冻目标<color=#aa0000>X秒</c>", "冰", "effect",
                    [1, 2, 3], "[聚能炮]炮弹落地后反弹<color=#aa0000>X下</c>", "弹", "spec",
                    [0, 1, 2],
                  ],
                  ["[冰冻炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[冰冻炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[冰冻炮]冰冻时长<color=#aa0000>+X秒</c>", "冰", "effect",
                    [1, 2, 3], "[冰冻炮]子弹穿透<color=#aa0000>+X</c>", "穿", "spec",
                    [0, 1, 2],
                  ],
                  ["[风暴枪]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[风暴枪]持续时间<color=#aa0000>+X秒</c>", "时", "time",
                    [2, 4, 6], "[风暴枪]攻击范围<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50], "[风暴枪]牵引力<color=#aa0000>+X格</c>", "牵", "effect",
                    [1, 2, 3],
                  ],
                  ["[榴弹炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[榴弹炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[榴弹炮]爆炸范围<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50], "[榴弹炮]附带燃烧<color=#aa0000>X秒</c>", "燃", "effect",
                    [1, 2, 3],
                  ],
                  ["[火焰炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[火焰炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[火焰炮]持续时间<color=#aa0000>+X秒</c>", "时", "time",
                    [1, 2, 3], "[火焰炮]燃烧时长<color=#aa0000>+X秒</c>", "燃", "effect",
                    [1, 2, 3],
                  ],
                  ["[无人机]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[无人机]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[无人机]小飞机数量<color=#aa0000>+X</c>", "数", "spec",
                    [0, 1, 2], "[无人机]持续时间<color=#aa0000>+X%</c>", "时", "time",
                    [2, 4, 6],
                  ],
                  ["[威压炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[威压炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[威压炮]眩晕时长<color=#aa0000>+X秒</c>", "晕", "effect",
                    [1, 2, 3], "[威压炮]攻击范围<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50],
                  ],
                  ["[量子炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[量子炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[量子炮]击退效果<color=#aa0000>+X格</c>", "退", "effect",
                    [1, 2, 3], "[量子炮]能量球大小<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50],
                  ],
                  ["[穿甲炮]攻击力<color=#aa0000>+X%</c>", "攻", "attack",
                    [30, 50, 70], "[穿甲炮]攻击速度<color=#aa0000>+X%</c>", "速", "cdtime",
                    [20, 30, 40], "[穿甲炮]导弹数量<color=#aa0000>+X</c>", "数", "spec",
                    [0, 1, 2], "[穿甲炮]导弹大小<color=#aa0000>+X%</c>", "围", "size",
                    [20, 35, 50],
                  ],
                  ["[全体]炮塔攻击<color=#aa0000>+X%</c>", "攻", "attack",
                    [10, 15, 20], "[全体]炮塔射程<color=#aa0000>+X%</c>", "程", "range",
                    [10, 15, 20], "[全体]炮塔攻速<color=#aa0000>+X%</c>", "速", "cdtime",
                    [10, 15, 20],
                  ],
                  ["[敌人]移动速度<color=#aa0000>-X%</c>", "速", "",
                    [10, 15, 20], "[敌人]攻击力<color=#aa0000>-X%</c>", "攻", "",
                    [10, 15, 20], "[敌人]Boss血量<color=#aa0000>-X%</c>", "血", "",
                    [10, 15, 20],
                  ],
                  ["[基地]血量恢复<color=#aa0000>X%</c>", "", "",
                    [20, 30, 40], "[基地]血量上限<color=#aa0000>+X%</c>", "", "",
                    [10, 15, 20], "[基地]获得<color=#aa0000>X个</c>炮塔", "", "",
                    [0, 1, 2],
                  ],
                ]), n([o], e));
            })());
        ((i.default = r), cc._RF.pop());
      };
