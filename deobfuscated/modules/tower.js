// module: tower
module.exports = {};
const __mod = function (e, t, i) {
        "use strict";
        cc._RF.push(t, "258ecYDO2NPio43wmKgYPJs", "tower");
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
            },
          r =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = Promise))(function (a, o) {
                function r(e) {
                  try {
                    c(n.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function s(e) {
                  try {
                    c(n.throw(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? a(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var i,
                n,
                a,
                o,
                r = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(e) {
                return function (t) {
                  return c([e, t]);
                };
              }
              function c(o) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; r; )
                  try {
                    if (
                      ((i = 1),
                      n &&
                        (a =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((a = n.return) && a.call(n), 0)
                              : n.next) &&
                        !(a = a.call(n, o[1])).done)
                    )
                      return a;
                    switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return (r.label++, { value: o[1], done: !1 });
                      case 5:
                        (r.label++, (n = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = r.ops.pop()), r.trys.pop());
                        continue;
                      default:
                        if (
                          !(a = (a = r.trys).length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          r = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          r.label = o[1];
                          break;
                        }
                        if (6 === o[0] && r.label < a[1]) {
                          ((r.label = a[1]), (a = o));
                          break;
                        }
                        if (a && r.label < a[2]) {
                          ((r.label = a[2]), r.ops.push(o));
                          break;
                        }
                        (a[2] && r.ops.pop(), r.trys.pop());
                        continue;
                    }
                    o = t.call(e, r);
                  } catch (s) {
                    ((o = [6, s]), (n = 0));
                  } finally {
                    i = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = e("../gameData"),
          u = e("../playerData"),
          p = e("../choice"),
          f = e("../enemy/enemy"),
          g = e("../data/equipData"),
          y = e("../libppgame/audioMgr"),
          m = e("../data/stoneData"),
          _ = e("../libppgame/libwechat"),
          v = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bulletPrefab = null),
                (t.type = 0),
                (t.level = 0),
                (t.angle = 0),
                (t.moveAngle = 0),
                (t.moveTime = 0),
                (t.timer = 0),
                (t.shootX = 0),
                (t.shootY = 0),
                (t.attackCDTime = 0),
                (t.attackTime = 0),
                (t.shootCDTime = 1),
                (t.shootTime = 0),
                (t.range = 0),
                (t.size = 1),
                (t.attack = 30),
                (t.startPos = null),
                (t.onTheField = !1),
                (t.through = 0),
                (t.effect = 0),
                (t.spec = 0),
                (t.isTemp = !1),
                (t.isVideo = !1),
                (t.picArray = []),
                (t.bottomArray = []),
                (t._play_effect_ts = 0),
                t
              );
            }
            var i;
            return (
              a(t, e),
              (i = t),
              (t.prototype.start = function () {
                (this.node.on(
                  cc.Node.EventType.TOUCH_START,
                  this.onTouchStart,
                  this,
                ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.onTouchMove,
                    this,
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onTouchEnd,
                    this,
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.onTouchCancel,
                    this,
                  ));
              }),
              (t.prototype.initTower = function (e) {
                ((this.type = e),
                  (this.attackCDTime = Number(
                    i.TOWER_CONFIG[this.type - 1][6],
                  )),
                  (this.shootCDTime =
                    Number(i.TOWER_CONFIG[this.type - 1][8]) / 2),
                  (this.range = Number(i.TOWER_CONFIG[this.type - 1][5])),
                  (this.attack = Number(i.TOWER_CONFIG[this.type - 1][4])),
                  (this.attack =
                    (this.attack +
                      (this.attack * g.default.getEquipTotalPower()) / 100) *
                    (1 + 0.08 * u.default.towerLevelArray[e - 1])),
                  (this.through = Number(i.TOWER_CONFIG[this.type - 1][7])));
                var t = h.default.getStoneLevelWithType(10115);
                if (t && t.length > 0)
                  for (var n = 0; n < t.length; n++) {
                    var a = m.default.getStoneEffectWithType(10115, t[n]);
                    this.shootCDTime *= 1 - Number(a) / 100;
                  }
                ((this.node.getChildByName("video").active = this.isVideo),
                  (this.node.getChildByName("range").active = !1));
              }),
              (t.prototype.setToField = function () {
                ((this.shootX = this.node.x + this.node.parent.x),
                  (this.shootY = this.node.y + this.node.parent.y));
              }),
              (t.prototype.setAngle = function (e) {
                ((this.angle = this.changeAngleTo360(e)),
                  7 == this.type ||
                    10 == this.type ||
                    11 == this.type ||
                    4 == this.type ||
                    (this.angle <= 180
                      ? ((this.node
                          .getChildByName("node")
                          .getComponent(cc.Sprite).spriteFrame =
                          this.picArray[
                            19 * (this.level - 1) +
                              Math.floor((this.angle + 5) / 10)
                          ]),
                        (this.node.getChildByName("node").scaleX = 1))
                      : ((this.node
                          .getChildByName("node")
                          .getComponent(cc.Sprite).spriteFrame =
                          this.picArray[
                            19 * (this.level - 1) +
                              Math.floor((360 - this.angle + 5) / 10)
                          ]),
                        (this.node.getChildByName("node").scaleX = -1))));
              }),
              (t.prototype.setAim = function (e, t) {
                var i = this.getTheAngleWithAim(e, t);
                this.setAimAngle(i);
              }),
              (t.prototype.setAimAngle = function (e) {
                if (!this.isAngleSmall(e, this.angle)) {
                  var t = Math.abs(e - this.angle);
                  if (t <= 180)
                    ((this.moveTime = t / 500),
                      (this.moveAngle = (e - this.angle) / this.moveTime));
                  else {
                    this.moveTime = (360 - t) / 500;
                    var i = Math.min(e, this.angle),
                      n = Math.max(e, this.angle);
                    e > this.angle
                      ? (this.moveAngle = -(i + 360 - n) / this.moveTime)
                      : (this.moveAngle = (i + 360 - n) / this.moveTime);
                  }
                }
              }),
              (t.prototype.isAngleSmall = function (e, t) {
                for (var i = 0; i < 360; i += 10)
                  if (e >= i && e < i + 10 && t >= i && t < i + 10) return !0;
                return !1;
              }),
              (t.prototype.shootBullet = function (e, t) {
                var i,
                  n =
                    (((i = {})[1] = "gun1"),
                    (i[2] = "gun1-2"),
                    (i[3] = "gun3"),
                    (i[4] = "gun3-1"),
                    (i[5] = "4-2"),
                    (i[6] = "gun2"),
                    (i[7] = "gun3-2"),
                    (i[8] = "gun3"),
                    (i[9] = "gun3-1"),
                    (i[10] = "gun2-2"),
                    (i[11] = "gun4-2"),
                    (i[12] = "gun4-1"),
                    (i[13] = "gun4"),
                    i);
                if (1 == this.type) {
                  var a = Date.now();
                  this._play_effect_ts > a - 420 ||
                    (y.default.inst.playAudio("" + n[this.type], 0.5),
                    (this._play_effect_ts = a));
                } else y.default.inst.playAudio("" + (n[this.type] || "gun2"));
                var o = cc.instantiate(this.bulletPrefab);
                o.setPosition(this.shootX, this.shootY);
                var r = o.getComponent("bullet"),
                  s = this.attack * Math.pow(1.5, this.level - 1);
                ((s = this.getTheValueByAttr("attack", s)),
                  (r.attack = s),
                  (r.through = this.through),
                  (r.attackCDTime = this.attackCDTime));
                var c = new Array();
                if (1 == this.type) {
                  var l = this.getTheValueByAttr("strike", 0.1);
                  r.strikeRate = l;
                  var d = this.getTheValueByAttr("strikeattack", 1.5);
                  ((r.strikeHurtRate = d),
                    c.push([f.default.STATUS_BREAK, 2, 50]));
                } else if (2 == this.type) {
                  var u = this.getTheValueByAttr("size", this.size);
                  ((r.size = u),
                    (p = this.getTheValueByAttr("effect", 0)) > 0 &&
                      c.push([f.default.STATUS_BACK, 0, 5 * p]));
                } else if (3 == this.type) {
                  var p = this.getTheValueByAttr("effect", 2);
                  (c.push([f.default.STATUS_SLOW, p, 50]),
                    (l = this.getTheValueByAttr("strike", 0.1)),
                    (r.strikeRate = l));
                } else if (4 == this.type) {
                  ((u = this.getTheValueByAttr("size", this.size)),
                    (r.size = u));
                  var g = this.getTheValueByAttr("spec", 2);
                  ((r.spec = g), c.push([f.default.STATUS_SLOW, 2, 50]));
                } else if (5 == this.type)
                  ((p = this.getTheValueByAttr("effect", 0)) &&
                    c.push([f.default.STATUS_FREEZE, p, 0]),
                    (g = this.getTheValueByAttr("spec", 0)),
                    (r.spec = g));
                else if (6 == this.type)
                  ((p = this.getTheValueByAttr("effect", 2)),
                    c.push([f.default.STATUS_FREEZE, p, 0]),
                    (g = this.getTheValueByAttr("spec", 0)),
                    (r.through = g));
                else if (7 == this.type) {
                  var m = this.getTheValueByAttr("time", this.attackCDTime);
                  ((r.attackCDTime = m),
                    (u = this.getTheValueByAttr("size", this.size)),
                    (r.size = u),
                    (p = this.getTheValueByAttr("effect", 1)),
                    c.push([f.default.STATUS_DRAG, 0, p]));
                } else
                  8 == this.type
                    ? ((u = this.getTheValueByAttr("size", this.size)),
                      (r.size = u),
                      (p = this.getTheValueByAttr("effect", 0)) &&
                        c.push([f.default.STATUS_BURN, p, (s * p) / 2]))
                    : 9 == this.type
                      ? ((m = this.getTheValueByAttr(
                          "time",
                          this.attackCDTime,
                        )),
                        (r.attackCDTime = m),
                        (p = this.getTheValueByAttr("effect", 2)),
                        c.push([f.default.STATUS_BURN, p, (s * p) / 2]))
                      : 10 == this.type
                        ? ((g = this.getTheValueByAttr("spec", 1)),
                          (r.spec = g),
                          (m = this.getTheValueByAttr(
                            "time",
                            this.attackCDTime,
                          )),
                          (r.attackCDTime = m))
                        : 11 == this.type
                          ? ((p = this.getTheValueByAttr("effect", 2)),
                            c.push([f.default.STATUS_FAINT, p, 0]),
                            (u = this.getTheValueByAttr("size", this.size)),
                            (r.size = u))
                          : 12 == this.type
                            ? ((g = this.getTheValueByAttr("spec", 1)),
                              (r.spec = g),
                              (p = this.getTheValueByAttr("effect", 1)),
                              c.push([f.default.STATUS_BACK, 0, 10 * p]),
                              (u = this.getTheValueByAttr("size", this.size)),
                              (r.size = u))
                            : 13 == this.type &&
                              ((g = this.getTheValueByAttr("spec", 1)),
                              (r.spec = g),
                              (u = this.getTheValueByAttr("size", this.size)),
                              (r.size = u),
                              c.push([f.default.STATUS_BREAK, 2, 50]));
                (r.initBullet(this.type),
                  r.setAim(e, t),
                  (r.effectArray = c),
                  h.default.gameInstance.gameLayer
                    .getChildByName("effect")
                    .addChild(o));
              }),
              (t.prototype.getTheAngleWithAim = function (e, t) {
                var i = 0;
                return (
                  t == this.shootY
                    ? (i = e >= this.shootX ? 90 : 270)
                    : ((i =
                        (180 *
                          Math.atan((e - this.shootX) / (t - this.shootY))) /
                        Math.PI),
                      t <= this.node.y && (i += 180)),
                  this.changeAngleTo360(i)
                );
              }),
              (t.prototype.changeAngleTo360 = function (e) {
                return ((e %= 360) < 0 && (e += 360), e);
              }),
              (t.prototype.update = function (e) {
                var t = this;
                if (0 != this.type) {
                  (this.timer++, this.checkPic());
                  var i = 1;
                  if (
                    (h.default.gameInstance &&
                      (i = h.default.gameInstance.gameSpeed),
                    this.moveTime > 0 &&
                      ((this.angle += this.moveAngle * e * i),
                      (this.moveTime -= e * i)),
                    this.setAngle(this.angle),
                    null != h.default.gameInstance &&
                      !h.default.gameInstance.isPause &&
                      !h.default.gameInstance.isOver &&
                      !this.isTemp)
                  ) {
                    this.shootTime +=
                      e *
                      Math.pow(1.2, this.level - 1) *
                      h.default.gameInstance.gameSpeed;
                    var n = this.findAim();
                    if (null != n) {
                      var a = n.x,
                        o = n.y + n.getChildByName("clip").y * n.scale,
                        r = this.shootCDTime;
                      r = this.getTheValueByAttr("cdtime", r);
                      var s = this.getTheValueByAttr("time", this.attackCDTime);
                      if (
                        (this.shootTime >= s && this.setAim(a, o),
                        this.shootTime >= r + s)
                      ) {
                        if (
                          ((this.shootTime = 0),
                          13 == this.type || 10 == this.type)
                        ) {
                          var c = this.getTheValueByAttr("spec", 0);
                          if (c > 0)
                            for (var l = 0; l < c; l++)
                              this.scheduleOnce(
                                function () {
                                  t.shootBullet(a, o);
                                },
                                (0.2 * (l + 1)) /
                                  h.default.gameInstance.gameSpeed,
                              );
                        }
                        this.shootBullet(a, o);
                      }
                    }
                    !h.default.inBattle &&
                      this.onTheField &&
                      this.timer % 60 == 0 &&
                      this.setAimAngle(360 * Math.random());
                  }
                }
              }),
              (t.prototype.findAim = function () {
                var e = this.range;
                h.default.gameInstance.isTowerFull || (e *= 0.8);
                for (
                  var t = 100 * (e = this.getTheValueByAttr("range", e)),
                    i = null,
                    n = 0;
                  n < h.default.gameInstance.enemyArray.length;
                  n++
                ) {
                  var a = h.default.gameInstance.enemyArray[n];
                  if (a && a.isValid) {
                    var o = a.x,
                      r = a.y + a.getChildByName("clip").y * a.scale - 10;
                    if (
                      o > -h.default.screenW / 2 - 20 &&
                      o < h.default.screenW / 2 + 20
                    ) {
                      var s = Math.sqrt(
                        (o - this.shootX) * (o - this.shootX) +
                          (r - this.shootY) * (r - this.shootY),
                      );
                      s < t && ((t = s), (i = a));
                    }
                  }
                }
                return i;
              }),
              (t.prototype.checkPic = function () {
                var e = 1;
                h.default.gameInstance &&
                  (e = h.default.gameInstance.gameSpeed);
                var t = [
                  cc.color(170, 170, 170),
                  cc.color(39, 236, 72),
                  cc.color(225, 60, 255),
                ];
                ((this.node.getChildByName("level").color = t[this.level - 1]),
                  (this.node
                    .getChildByName("level")
                    .getChildByName("num")
                    .getComponent(cc.Label).string = this.level + ""),
                  7 == this.type
                    ? 1 == this.level
                      ? (this.node
                          .getChildByName("node")
                          .getComponent(cc.Sprite).spriteFrame =
                          this.picArray[Math.floor((this.timer * e) / 4) % 36])
                      : 2 == this.level
                        ? (this.node
                            .getChildByName("node")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.picArray[
                              36 + (Math.floor((this.timer * e) / 4) % 34)
                            ])
                        : 3 == this.level &&
                          (this.node
                            .getChildByName("node")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.picArray[
                              70 + (Math.floor((this.timer * e) / 4) % 24)
                            ])
                    : 10 == this.type || 11 == this.type
                      ? 1 == this.level
                        ? (this.node
                            .getChildByName("node")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.picArray[
                              Math.floor((this.timer * e) / 10) % 9
                            ])
                        : 2 == this.level
                          ? (this.node
                              .getChildByName("node")
                              .getComponent(cc.Sprite).spriteFrame =
                              this.picArray[
                                9 + (Math.floor((this.timer * e) / 10) % 9)
                              ])
                          : 3 == this.level &&
                            (this.node
                              .getChildByName("node")
                              .getComponent(cc.Sprite).spriteFrame =
                              this.picArray[
                                18 + (Math.floor((this.timer * e) / 10) % 9)
                              ])
                      : 9 == this.type
                        ? this.node.getChildByName("bottom") &&
                          (this.node
                            .getChildByName("bottom")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.bottomArray[
                              Math.floor((this.timer * e) / 10) % 5
                            ])
                        : 4 == this.type &&
                          (this.node.getChildByName("bottom") &&
                            (this.node
                              .getChildByName("bottom")
                              .getComponent(cc.Sprite).spriteFrame =
                              this.bottomArray[this.level - 1]),
                          1 == this.level
                            ? (this.node.getChildByName("node").scale = 1.5)
                            : 2 == this.level
                              ? (this.node.getChildByName("node").scale = 1.65)
                              : 3 == this.level &&
                                (this.node.getChildByName("node").scale = 1.8),
                          (this.node
                            .getChildByName("node")
                            .getComponent(cc.Sprite).spriteFrame =
                            this.picArray[
                              Math.floor((this.timer * e) / 4) % 9
                            ])));
              }),
              (t.prototype.getTheValueByAttr = function (e, t) {
                for (
                  var i = 0;
                  i < h.default.gameInstance.towerChoiceArray.length;
                  i++
                ) {
                  var n = h.default.gameInstance.towerChoiceArray[i][0],
                    a = h.default.gameInstance.towerChoiceArray[i][1];
                  (this.type - 1 != Math.floor(n / 10) &&
                    13 != Math.floor(n / 10)) ||
                    (t = this.getBufferValue(e, t, n, a));
                }
                if(e==="strike")t+=window.offlineBattleRules.globalArmyBuffer("strike");if(e==="strikeattack")t+=window.offlineBattleRules.globalArmyBuffer("strikehurt");return t;
              }),
              (t.prototype.getBufferValue = function (e, t, i, n) {
                var a =
                    p.default.CHOICE_CONFIG[Math.floor(i / 10)][
                      (i % 10) * 4 + 2
                    ],
                  o = Number(
                    p.default.CHOICE_CONFIG[Math.floor(i / 10)][
                      (i % 10) * 4 + 3
                    ][n - 1],
                  );
                if (e == a)
                  switch (e) {
                    case "attack":
                    case "range":
                    case "size":
                    case "time":
                      t += (t * o) / 100;
                      break;
                    case "cdtime":
                      t -= (t * o) / 100;
                      break;
                    case "effect":
                    case "spec":
                      t += o;
                      break;
                    case "strike":
                    case "strikeattack":
                      t += o / 100;
                  }
                return t;
              }),
              (t.prototype.onTouchStart = function (e) {
                return r(this, void 0, void 0, function () {
                  var t, i;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return !this.isTemp && h.default.inBattle
                          ? ((this.node.getChildByName("range").active = !0),
                            (t = this.range),
                            h.default.gameInstance.isTowerFull || (t *= 0.8),
                            (t = this.getTheValueByAttr("range", t)),
                            (i = 100 * (t *= 1.1)),
                            (this.node.getChildByName("range").width = 4 * i),
                            (this.node.getChildByName("range").height = 4 * i),
                            [2])
                          : this.isTemp || h.default.inBattle
                            ? [2]
                            : ((this.node.getChildByName("range").active = !1),
                              this.isVideo
                                ? [4, _.wechat.showRewardedVideoAdNew()]
                                : [3, 2]);
                      case 1:
                        return n.sent().isEnded
                          ? ((this.isVideo = !1),
                            (this.node.getChildByName("video").active = !1),
                            [2])
                          : (this.onTouchEnd(), [2]);
                      case 2:
                        return (
                          (this.startPos = e.getLocation()),
                          h.default.gameInstance.upTheTower(
                            this.node,
                            this.startPos,
                          ),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onTouchMove = function (e) {
                if (
                  !this.isTemp &&
                  !h.default.inBattle &&
                  !this.isVideo &&
                  null != this.startPos
                ) {
                  var t = e.getLocation(),
                    i = cc.v2(t.x - this.startPos.x, t.y - this.startPos.y);
                  ((this.node.x = this.node.position.x + i.x),
                    (this.node.y = this.node.position.y + i.y),
                    (this.startPos = t),
                    h.default.gameInstance.moveTheTower(this.node));
                }
              }),
              (t.prototype.onTouchEnd = function () {
                this.isTemp || h.default.inBattle
                  ? (this.node.getChildByName("range").active = !1)
                  : this.isVideo ||
                    ((this.node.getChildByName("range").active = !1),
                    h.default.gameInstance.downTheTower(this.node));
              }),
              (t.prototype.onTouchCancel = function () {
                this.onTouchEnd();
              }),
              (t.TOWER_CONFIG = [
                [
                  "重机枪",
                  1,
                  "机枪连射，不断发射子弹，命中后造成伤害，并破甲2秒",
                  "物理",
                  2,
                  4,
                  0,
                  1,
                  0.5,
                ],
                [
                  "激光炮",
                  2,
                  "发射激光，持续对直线范围内目标造成伤害",
                  "物理",
                  5,
                  3,
                  1,
                  0,
                  3.5,
                ],
                [
                  "镭射炮",
                  1,
                  "向目标发出镭射光波，造成伤害并将目标减速2秒",
                  "生化",
                  3,
                  3,
                  0,
                  99,
                  1,
                ],
                [
                  "毒气炮",
                  8,
                  "制造一个剧毒空间，对进入的目标持续造成伤害，并将2个目标减速2秒",
                  "生化",
                  3,
                  3.5,
                  2,
                  0,
                  4,
                ],
                [
                  "聚能炮",
                  9,
                  "发射超聚合能量弹，对范围内的目标造成伤害",
                  "冷冻",
                  20,
                  3,
                  0,
                  99,
                  3,
                ],
                [
                  "冰冻炮",
                  1,
                  "发射冰冻弹，对目标造成伤害并将目标冰冻1秒",
                  "冷冻",
                  16,
                  3.5,
                  0,
                  1,
                  2.5,
                ],
                [
                  "风暴枪",
                  6,
                  "释放可移动的电子风暴，持续对范围内的单位造成伤害和牵引效果",
                  "脉冲",
                  5,
                  3,
                  6,
                  0,
                  8,
                ],
                [
                  "榴弹炮",
                  1,
                  "发射榴弹，爆炸后对目标造成范围伤害",
                  "燃爆",
                  8,
                  3.5,
                  0,
                  1,
                  3,
                ],
                [
                  "火焰炮",
                  7,
                  "喷射出火焰，对近距离目标造成伤害并附带点燃效果",
                  "燃爆",
                  4,
                  2.5,
                  3,
                  0,
                  4,
                ],
                [
                  "无人机",
                  4,
                  "释放无人机，持续对飞行路劲上的单位造成伤害",
                  "物理",
                  6,
                  3,
                  6,
                  0,
                  1,
                ],
                [
                  "威压炮",
                  5,
                  "从天上降下高压能量场，对目标区域造成打击，附带晕眩2秒",
                  "脉冲",
                  10,
                  3.5,
                  0.6,
                  0,
                  6,
                ],
                [
                  "量子炮",
                  3,
                  "向前方发射压缩能量球，对路劲上的单位造成伤害，并附带击退效果",
                  "脉冲",
                  10,
                  2.5,
                  0,
                  99,
                  5,
                ],
                [
                  "穿甲炮",
                  10,
                  "发射跟踪导弹，可穿透多个目标造成伤害，并破甲2秒",
                  "物理",
                  22,
                  4,
                  0,
                  4,
                  3.5,
                ],
              ]),
              o([d(cc.Prefab)], t.prototype, "bulletPrefab", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "picArray", void 0),
              o([d([cc.SpriteFrame])], t.prototype, "bottomArray", void 0),
              (i = o([l], t))
            );
          })(cc.Component);
        ((i.default = v), cc._RF.pop());
      };
