// module: battle_enhance
// deps: {"../Script/playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bdde9clmwVJhZfwXCqQG0a6", "battle_enhance");
        var n = (this && this.__assign) || function() {
          return (n = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
        };
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.getRestoreEnhanceList = i.getEnhanceList = void 0));
        var a = e("../Script/playerData"),
          o = [
            [{
              type: "hp",
              desc: "所有小鸟生命<color=#ec89ff>+$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "生命",
            }, {
              type: "attack",
              desc: "所有小鸟伤害<color=#ec89ff>+$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "伤",
            }, {
              type: "cd",
              desc: "所有小鸟冷却<color=#ec89ff>-$v%</c>",
              values: [4, 6, 10],
              limit: 1,
              brief: "速",
            }, {
              type: "speed_debuff",
              desc: "猪猪们的移动速度<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "迟缓",
            }, {
              type: "egg",
              desc: "直接获得<color=#ec89ff>$v</c>枚鸟蛋",
              values: [25, 35, 55],
              limit: 3,
              brief: "蛋",
            }, {
              type: "round_egg",
              desc: "每波获得鸟蛋<color=#ec89ff>+$v</c>",
              values: [3, 6, 12],
              limit: 1,
              brief: "蛋",
            }, {
              type: "bird_counts_damage",
              desc: "战场上每多一只小鸟全体伤害<color=#ec89ff>+$v%</c>",
              values: [2, 3, 5],
              limit: 1,
              brief: "伤",
            }, {
              type: "boss_damage",
              desc: "对boss伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, ],
            [{
              type: "strike",
              desc: "胖红暴击率<color=#ec89ff>$v%</c>",
              values: [15, 25, 45],
              limit: 1,
              brief: "暴",
            }, {
              type: "attack",
              desc: "胖红伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "胖红生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "胖红冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_bird",
              desc: "分身鸟分身数量<color=#ec89ff>+$v</c>",
              values: [1, 2, 3],
              limit: 1,
              brief: "分身",
            }, {
              type: "attack",
              desc: "分身鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "分身鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "分身鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_egg",
              desc: "蛋黄每次产蛋数量<color=#ec89ff>+$v</c>",
              values: [1, 2, 4],
              limit: 1,
              brief: "蛋",
            }, {
              type: "cd",
              desc: "蛋黄冷却<color=#ec89ff>-$v%</c>",
              values: [10, 20, 40],
              limit: 1,
              brief: "速",
            }, {
              type: "attack",
              desc: "蛋黄生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, ],
            [{
              type: "must_strike",
              desc: "疾风攻击<color=#ec89ff>$v</c>次后下次攻击100%暴击",
              values: [8, 5, 3],
              limit: 1,
              brief: "必暴",
            }, {
              type: "attack",
              desc: "疾风伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "疾风生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "疾风冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "pierce",
              desc: "火烈鸟穿透<color=#ec89ff>+$v</c>",
              values: [0, 1, 2],
              limit: 1,
              brief: "穿透",
            }, {
              type: "attack",
              desc: "火烈鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "火烈鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "火烈鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "cd",
              desc: "盾盾鸟冷却<color=#ec89ff>-$v%</c>",
              values: [10, 20, 40],
              limit: 1,
              brief: "速",
            }, {
              type: "around_attack_buff",
              desc: "盾盾鸟相邻小鸟伤害+$v%",
              values: [5, 10, 20],
              limit: 1,
              brief: "加伤",
            }, {
              type: "hp",
              desc: "盾盾鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, ],
            [{
              type: "extra_heal",
              desc: "呆护士治疗量<color=#ec89ff>+$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "疗",
            }, {
              type: "cd",
              desc: "呆护士冷却<color=#ec89ff>-$v%</c>",
              values: [10, 20, 40],
              limit: 1,
              brief: "速",
            }, {
              type: "hp",
              desc: "呆护士生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, ],
            [{
              type: "extra_bullet",
              desc: "急冻鸟额外发射次数<color=#ec89ff>+$v</c>",
              values: [0, 1, 2],
              limit: 1,
              brief: "连发",
            }, {
              type: "attack",
              desc: "急冻鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "急冻鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "急冻鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_range",
              desc: "回旋鸟旋转范围<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "范围",
            }, {
              type: "attack",
              desc: "回旋鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "回旋鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "回旋鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_thunder",
              desc: "闪电弹射次数<color=#ec89ff>+$v</c>",
              values: [1, 2, 3],
              limit: 1,
              brief: "弹射",
            }, {
              type: "attack",
              desc: "闪电鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "闪电鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "闪电鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_knockback",
              desc: "飓风击退效果<color=#ec89ff>$v%</c>",
              values: [30, 50, 90],
              limit: 1,
              brief: "击退",
            }, {
              type: "attack",
              desc: "飓风伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "飓风生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "飓风冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_frozen",
              desc: "渣渣冰冰冻时间<color=#ec89ff>+$v</c>秒",
              values: [0, 0.5, 1],
              limit: 1,
              brief: "冰冻",
            }, {
              type: "attack",
              desc: "渣渣冰伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "渣渣冰生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "渣渣冰冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_range",
              desc: "膨胀鸟伤害范围<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "范围",
            }, {
              type: "attack",
              desc: "膨胀鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "膨胀鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "膨胀鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
            [{
              type: "extra_duration",
              desc: "爆裂鸟火焰持续时间<color=#ec89ff>+$v</c>秒",
              values: [1, 2, 4],
              limit: 1,
              brief: "火焰",
            }, {
              type: "attack",
              desc: "爆裂鸟伤害<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "伤",
            }, {
              type: "hp",
              desc: "爆裂鸟生命<color=#ec89ff>+$v%</c>",
              values: [20, 30, 50],
              limit: 1,
              brief: "生命",
            }, {
              type: "cd",
              desc: "爆裂鸟冷却<color=#ec89ff>-$v%</c>",
              values: [5, 10, 20],
              limit: 1,
              brief: "速",
            }, ],
          ];
        ((i.getEnhanceList = function() {
            for (var e = a.default.useTowerArray.filter(function(e) {
                  return e > 0;
                }),
                t = [],
                i = 0; i < o.length; i++)
              if (0 == i || e.includes(i))
                for (var r = 0, s = o[i]; r < s.length; r++) {
                  var c = s[r];
                  c.limit > 0 && t.push(n(n({}, c), {
                    birdType: i
                  }));
                }
            return t;
          }),
          (i.getRestoreEnhanceList = function(e) {
            for (var t = [], i = 0; i < e.length; i++)
              for (var a = e[i][0], r = e[i][1], s = 0; s < o[a].length; s++) {
                var c = o[a][s];
                c.type == r && t.push(n(n({}, c), {
                  birdType: a
                }));
              }
            return t;
          }), cc._RF.pop());
      };
