// module: starBullet
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "070c2k0yKNOS5gbL37V1jSY", "starBullet");
        var n,
          a =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                })(e, t);
            }),
            function (e, t) {
              function i() {
                this.constructor = e;
              }
              (n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i())));
            }),
          o =
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
        var r = cc._decorator,
          s = r.ccclass,
          c = (r.property, e("./starArmy")),
          l = e("./starEnemy"),
          d = e("../gameData"),
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.way = 0),
                (t.type = 1),
                (t.attack = 0),
                (t.speed = 0),
                (t.angle = 0),
                (t.range = 0),
                (t.isSky = 0),
                (t.size = 0),
                (t.isBoom = !1),
                (t.boomScale = 2),
                (t.isStrike = !1),
                (t.attackArray = new Array()),
                (t.pvpWay = 0),
                t
              );
            }
            return (
              a(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.initBullet = function (
                e,
                t,
                i,
                n,
                a,
                o,
                r,
                s,
                d,
                h,
              ) {if(t===2&&(e===1||e===5)){const crit=window.offlineBattleRules.buildingCrit();if(crit.critical){i*=crit.multiplier;s=true;}}

                (void 0 === r && (r = 0),
                  void 0 === s && (s = !1),
                  void 0 === d && (d = 0),
                  void 0 === h && (h = 0),
                  (this.pvpWay = h),
                  (this.type = e),
                  (this.attack = i),
                  (this.angle = n),
                  (this.range = 1.5 * a),
                  (this.node.angle = this.angle),
                  (this.way = t),
                  (this.speed = 600),
                  (this.isSky = o),
                  (this.size = r),
                  (this.isStrike = s),
                  d && (this.node.getChildByName("node").scale *= 2),
                  0 == t
                    ? e == c.ArmyType.TAN_KE
                      ? ((this.isBoom = !0), (this.boomScale = 2))
                      : e == c.ArmyType.DA_HE_JIAN
                        ? ((this.isBoom = !0), (this.boomScale = 2.5))
                        : e == c.ArmyType.KE_JI_QIU &&
                          ((this.isBoom = !0), (this.boomScale = 2))
                    : 1 == t &&
                      (d
                        ? ((this.isBoom = !0), (this.boomScale = 3))
                        : e == l.EnemyType.TIAN_ZHU
                          ? ((this.isBoom = !0), (this.boomScale = 2))
                          : e == l.EnemyType.TUN_SHI_ZHE
                            ? ((this.isBoom = !0), (this.boomScale = 2))
                            : e == l.EnemyType.XIE_ZI &&
                              ((this.isBoom = !0), (this.boomScale = 2))));
              }),
              (t.prototype.update = function (e) {
                // Offline adaptation: starBullet.update

                const advance = (e) => {
                  if (
                    ((this.node.zIndex = 1e3 - this.node.y),
                    (this.node.x +=
                      this.speed *
                      Math.cos((this.angle * Math.PI) / 180) *
                      e *
                      d.default.gameSpeed),
                    (this.node.y +=
                      this.speed *
                      Math.sin((this.angle * Math.PI) / 180) *
                      e *
                      d.default.gameSpeed),
                    (this.range -= this.speed * e * d.default.gameSpeed),
                    0 == this.way || 2 == this.way)
                  )
                    if (0 == d.default.gameMode)
                      for (
                        var t = 0;
                        t < d.default.gameInstance.enemyArray.length;
                        t++
                      ) {
                        var i = d.default.gameInstance.enemyArray[t];
                        if (
                          ((this.isSky && i.getComponent("starEnemy").isSky) ||
                            (!this.isSky &&
                              !i.getComponent("starEnemy").isSky)) &&
                          Math.sqrt(
                            Math.pow(this.node.x - i.x, 2) +
                              Math.pow(this.node.y - i.y, 2),
                          ) < 30
                        ) {
                          var n = this.attack;
                          (0 == this.way &&
                            (n = this.attackChange(
                              n,
                              this.size,
                              i.getComponent("starEnemy").size,
                            )),
                            i.getComponent("starEnemy").doHurt(n),
                            d.default.gameInstance.showText(
                              "" + Math.floor(n),
                              { x: i.x, y: i.y },
                              null,
                              1,
                              this.isStrike,
                            ),
                            this.node.destroy(),
                            this.isBoom &&
                              this.checkBoom(
                                d.default.gameInstance.enemyArray,
                                i,
                                this.boomScale,
                                "starEnemy",
                              ),
                            i.getComponent("starEnemy").isFly ||
                              (this.type == c.ArmyType.BING_LEI_CHE &&
                                0 == this.way &&
                                i
                                  .getComponent("starEnemy")
                                  .addEffect("ice", 0.4)));
                          break;
                        }
                      }
                    else {
                      var a = null,
                        o = null,
                        r = 0;
                      0 == this.pvpWay
                        ? ((a = d.default.gameInstance.armyArrayOther),
                          (o = d.default.gameInstance.buildingArrayOther),
                          (r = 1))
                        : ((a = d.default.gameInstance.armyArray),
                          (o = d.default.gameInstance.buildingArray),
                          (r = 0));
                      var s = !1;
                      for (t = 0; t < a.length; t++)
                        if (
                          ((i = a[t]),
                          ((this.isSky && i.getComponent("starArmy").isSky) ||
                            (!this.isSky &&
                              !i.getComponent("starArmy").isSky)) &&
                            Math.sqrt(
                              Math.pow(this.node.x - i.x, 2) +
                                Math.pow(this.node.y - i.y, 2),
                            ) < 30)
                        ) {
                          ((n = this.attack),
                            0 == this.way &&
                              (n = this.attackChange(
                                n,
                                this.size,
                                i.getComponent("starArmy").size,
                              )),
                            i.getComponent("starArmy").doHurt(n),
                            d.default.gameInstance.showText(
                              "" + Math.floor(n),
                              { x: i.x, y: i.y },
                              null,
                              r,
                              this.isStrike,
                            ),
                            this.node.destroy(),
                            this.isBoom &&
                              this.checkBoom(a, i, this.boomScale, "starArmy"),
                            i.getComponent("starArmy").isFly ||
                              (this.type == c.ArmyType.BING_LEI_CHE &&
                                0 == this.way &&
                                i
                                  .getComponent("starArmy")
                                  .addEffect("ice", 0.4)),
                            (s = !0));
                          break;
                        }
                      if (!s)
                        for (t = 0; t < o.length; t++)
                          if (
                            ((i = o[t]),
                            !this.isSky &&
                              !i.getComponent("building").isOver &&
                              Math.sqrt(
                                Math.pow(this.node.x - i.x, 2) +
                                  Math.pow(this.node.y - i.y, 2),
                              ) < 50)
                          ) {
                            (this.attackArray.push(i),
                              i.getComponent("building").doHurt(this.attack),
                              d.default.gameInstance.showText(
                                "" + Math.floor(this.attack),
                                { x: i.x, y: i.y },
                                null,
                                r,
                                this.isStrike,
                              ),
                              this.isBoom &&
                                this.checkBoom(
                                  a,
                                  i,
                                  this.boomScale,
                                  "starArmy",
                                ),
                              this.node.destroy(),
                              (s = !0));
                            break;
                          }
                    }
                  else {
                    for (
                      s = !1, t = 0;
                      t < d.default.gameInstance.armyArray.length;
                      t++
                    )
                      if (
                        ((i = d.default.gameInstance.armyArray[t]),
                        !(this.attackArray.indexOf(i) >= 0) &&
                          ((this.isSky && i.getComponent("starArmy").isSky) ||
                            (!this.isSky &&
                              !i.getComponent("starArmy").isSky)) &&
                          Math.sqrt(
                            Math.pow(this.node.x - i.x, 2) +
                              Math.pow(this.node.y - i.y, 2),
                          ) < 30 &&
                          (this.attackArray.push(i),
                          i.getComponent("starArmy").doHurt(this.attack),
                          d.default.gameInstance.showText(
                            "" + Math.floor(this.attack),
                            { x: i.x, y: i.y },
                            null,
                            0,
                            this.isStrike,
                          ),
                          this.type != l.EnemyType.DI_CHI))
                      ) {
                        (this.isBoom &&
                          this.checkBoom(
                            d.default.gameInstance.armyArray,
                            i,
                            this.boomScale,
                            "starArmy",
                          ),
                          this.node.destroy(),
                          (s = !0));
                        break;
                      }
                    if (!s)
                      for (
                        t = 0;
                        t < d.default.gameInstance.buildingArray.length;
                        t++
                      )
                        if (
                          ((i = d.default.gameInstance.buildingArray[t]),
                          !(this.attackArray.indexOf(i) >= 0) &&
                            !this.isSky &&
                            !i.getComponent("building").isOver &&
                            Math.sqrt(
                              Math.pow(this.node.x - i.x, 2) +
                                Math.pow(this.node.y - i.y, 2),
                            ) < 50 &&
                            (this.attackArray.push(i),
                            i.getComponent("building").doHurt(this.attack),
                            d.default.gameInstance.showText(
                              "" + Math.floor(this.attack),
                              { x: i.x, y: i.y },
                              null,
                              0,
                              this.isStrike,
                            ),
                            this.type != l.EnemyType.DI_CHI))
                        ) {
                          (this.isBoom &&
                            this.checkBoom(
                              d.default.gameInstance.armyArray,
                              i,
                              this.boomScale,
                              "starArmy",
                            ),
                            this.node.destroy(),
                            (s = !0));
                          break;
                        }
                  }
                  this.range < 0 && this.node.destroy();
                };
                // Original collision tests only the endpoint. At 4x/30 FPS, a 600-speed
                // projectile jumps 80 px past a target with a 30 px collision radius.
                // Keep damage, range, target layers and explosion behavior unchanged.
                if (
                  this.way === 2 &&
                  this.type === 1 &&
                  d.default.gameMode === 0
                ) {
                  const steps = Math.max(
                    1,
                    Math.ceil((this.speed * e * d.default.gameSpeed) / 20),
                  );
                  for (
                    let step = 0;
                    step < steps && cc.isValid(this.node, true);
                    step++
                  ) {
                    advance(e / steps);
                  }
                } else {
                  advance(e);
                }
              }),
              (t.prototype.attackChange = function (e, t, i) {
                return (
                  t < i && (i - t == 1 ? (e *= 0.7) : i - t == 2 && (e *= 0.4)),
                  e
                );
              }),
              (t.prototype.checkBoom = function (e, t, i, n) {
                for (var a = 0; a < e.length; a++) {
                  var o = e[a];
                  o != t
                    ? Math.sqrt(
                        Math.pow(this.node.x - o.x, 2) +
                          Math.pow(this.node.y - o.y, 2),
                      ) <
                        40 * i &&
                      this.isSky == o.getComponent(n).isSky &&
                      (0 == this.way || 2 == this.way
                        ? this.type == c.ArmyType.KE_JI_QIU
                          ? o.getComponent(n).addEffect("break", 2)
                          : this.type == c.ArmyType.DA_HE_JIAN &&
                            o.getComponent(n).addEffect("fire", 2)
                        : this.type == l.EnemyType.XIE_ZI &&
                          o.getComponent(n).addEffect("slow", 2),
                      o.getComponent(n).doHurt(this.attack / 2),
                      0 == this.way || 2 == this.way
                        ? d.default.gameInstance.showText(
                            "" + Math.floor(this.attack / 2),
                            { x: o.x, y: o.y },
                            null,
                            1,
                          )
                        : d.default.gameInstance.showText(
                            "" + Math.floor(this.attack / 2),
                            { x: o.x, y: o.y },
                            null,
                            0,
                          ))
                    : 0 == this.way || 2 == this.way
                      ? this.type == c.ArmyType.KE_JI_QIU
                        ? o.getComponent(n).addEffect("break", 2)
                        : this.type == c.ArmyType.DA_HE_JIAN &&
                          o.getComponent(n).addEffect("fire", 2)
                      : this.type == l.EnemyType.XIE_ZI &&
                        o.getComponent(n).addEffect("slow", 2);
                }
                0 == this.way || 2 == this.way
                  ? this.type == c.ArmyType.KE_JI_QIU
                    ? (d.default.gameInstance.addEffectOnMap(
                        "lightning2",
                        1,
                        { x: this.node.x, y: this.node.y },
                        1.5,
                      ),
                      d.default.gameInstance.addEffect(
                        "lightning1",
                        1,
                        { x: this.node.x, y: this.node.y },
                        1.5,
                      ))
                    : d.default.gameInstance.addEffect("boom", i, {
                        x: this.node.x,
                        y: this.node.y,
                      })
                  : this.type == l.EnemyType.XIE_ZI
                    ? d.default.gameInstance.addEffectOnMap(
                        "fog",
                        1,
                        { x: this.node.x, y: this.node.y },
                        2,
                      )
                    : d.default.gameInstance.addEffect("boom1", i, {
                        x: this.node.x,
                        y: this.node.y,
                      });
              }),
              o([s], t)
            );
          })(cc.Component);
        ((i.default = h), cc._RF.pop());
      };
