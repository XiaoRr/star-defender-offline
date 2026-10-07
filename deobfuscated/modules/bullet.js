// module: bullet
// deps: {"../data/stoneData":"stoneData","../enemy/enemy":"enemy","../gameData":"gameData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "81e34mNLVVNSrhuYwT9AEJX", "bullet");
        var n,
          a = (this && this.__extends) || ((n = function(e, t) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
              }
              instanceof Array && function(e, t) {
                e.__proto__ = t;
              }) || function(e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            })(e, t);
          }), function(e, t) {
            function i() {
              this.constructor = e;
            }
            (n(e, t),
              (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i())));
          }),
          o = (this && this.__decorate) || function(e, t, i, n) {
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
        var r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = e("../gameData"),
          d = e("../enemy/enemy"),
          h = e("../data/stoneData"),
          u = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.type = 0),
                (t.attackType = 0),
                (t.attack = 0),
                (t.through = 1),
                (t.range = 1),
                (t.attackTime = 0),
                (t.attackCDTime = 0),
                (t.speed = 500),
                (t.angle = 0),
                (t.isFly = !1),
                (t.timer = 0),
                (t.strikeRate = 0.1),
                (t.strikeHurtRate = 1.5),
                (t.effectArray = null),
                (t.size = 1),
                (t.spec = 0),
                (t.hurtCD = 0.3),
                (t.bulletScale = 1),
                (t.startX = 0),
                (t.startY = 0),
                (t.hasHitMinionArray = new Array()),
                (t.picArray = []),
                (t.boomPrefab = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.initBullet = function(e) {
                ((this.type = e),
                  (this.attackType = 1),
                  (this.node.scale = 1),
                  (this.bulletScale = 1));
                var t = !1;
                if (
                  (1 == e ? ((this.node.scaleY = 5),
                    (this.node.scaleX = 1.5),
                    (this.bulletScale = 2),
                    (this.speed = 1e3),
                    (t = !0)) : 2 == e ? ((this.speed = 0),
                    (t = !0),
                    (this.node.scale = 1 * this.size),
                    (this.bulletScale = 1 * this.size)) : 3 == e ? (t = !0) : 4 == e ? ((this.speed = 0),
                    (this.attackType = 3),
                    (t = !0),
                    (this.node.scale = 0.6 * this.size),
                    (this.bulletScale = 0.6 * this.size)) : 5 == e ? ((t = !0),
                    (this.node.scale = 0.7),
                    (this.bulletScale = 0.7)) : 6 == e ? ((this.node.scale = 0.6),
                    (this.bulletScale = 0.6)) : 7 == e ? ((this.node.scale = 0.3 * this.size),
                    (this.bulletScale = 0.3 * this.size),
                    (this.speed = 50),
                    (this.attackType = 3)) : 8 == e ? ((this.node.scale = 0.7),
                    (this.bulletScale = 0.7)) : 9 == e ? ((this.speed = 0), (t = !0)) : 10 == e ? ((this.speed = 0),
                    (t = !0),
                    (this.node.scale = 0.6),
                    (this.bulletScale = 0.6)) : 11 == e ? ((this.speed = 0),
                    (t = !0),
                    (this.node.scale = 1 * this.size),
                    (this.bulletScale = 1 * this.size)) : 12 == this.type ? ((this.speed = 100),
                    (this.node.getComponent("effect", ).frame_time = 0.1 / l.default.gameInstance.gameSpeed),
                    (this.node.scale = 0.35),
                    (this.bulletScale = 0.35)) : 13 == this.type && ((this.node.scale = 0.7 * this.size),
                    (this.bulletScale = 0.7 * this.size)), t)) {
                  var i = this.node.getComponent(cc.Animation).play();
                  (11 == e || (i.wrapMode = cc.WrapMode.Loop),
                    (i.speed = l.default.gameInstance.gameSpeed));
                }
                this.node.opacity = 0;
                var n = l.default.getStoneLevelWithType(10125);
                if (n && n.length > 0)
                  for (var a = 0; a < n.length; a++) {
                    var o = h.default.getStoneEffectWithType(10125, n[a]);
                    this.speed *= 1 + Number(o) / 100;
                  }
                if (
                  (n = l.default.getStoneLevelWithType(10123)) && n.length > 0)
                  for (a = 0; a < n.length; a++)
                    ((o = h.default.getStoneEffectWithType(10123, n[a])),
                      (this.through += Number(o)));
                var r = 20;
                if (
                  (n = l.default.getStoneLevelWithType(10124)) && n.length > 0)
                  for (a = 0; a < n.length; a++)
                    ((o = h.default.getStoneEffectWithType(10124, n[a])),
                      (r = Number(o)));
                this.attack *= 1 + Math.random() * (0.2 + r / 100) - 0.2;
              }),
              (t.prototype.setAim = function(e, t) {
                if (
                  ((this.startX = this.node.x),
                    (this.node.y += 20),
                    (this.startY = this.node.y), 4 == this.type || 11 == this.type || 10 == this.type ? ((this.node.x = e), (this.node.y = t)) : (7 == this.type && ((this.startX = 0),
                        (this.startY = 0),
                        (this.node.x = e),
                        (this.node.y = t)),
                      (this.angle = this.getTheAngle(this.startX, this.startY, e, t, )), this.checkAngle()), 5 == this.type)) {
                  var i = Math.sqrt(
                    (this.node.x - e) * (this.node.x - e) + (this.node.y - t) * (this.node.y - t), );
                  this.speed = i / 2;
                }
                10 == this.type && ((i = Math.sqrt(
                    (this.startX - e) * (this.startX - e) + (this.startY - t) * (this.startY - t), )),
                  (this.speed = i),
                  (this.angle = this.getTheAngle(this.startX, this.startY, e, t, )));
              }),
              (t.prototype.checkAngle = function() {
                7 != this.type && 11 != this.type && (1 == this.type ? (this.node.angle = -this.angle - 90) : (this.node.angle = -this.angle));
              }),
              (t.prototype.changeAngleTo360 = function(e) {
                return ((e %= 360) < 0 && (e += 360), e);
              }),
              (t.prototype.move = function(e) {
                (10 == this.type ? ((this.angle += 100 * e),
                  (this.node.x = this.startX + this.speed * Math.sin((this.angle * Math.PI) / 180)),
                  (this.node.y = this.startY + this.speed * Math.cos((this.angle * Math.PI) / 180))) : ((this.node.x += Math.sin((this.angle * Math.PI) / 180) * this.speed * e),
                  (this.node.y += Math.cos((this.angle * Math.PI) / 180) * this.speed * e),
                  (this.node.x < -350 || this.node.x > 350 || this.node.y > 768 || this.node.y < -768) && this.bulletOver()), this.attackCDTime > 0 && ((this.attackTime += e), this.attackTime >= this.attackCDTime && this.bulletOver()), this.checkHit());
              }),
              (t.prototype.checkHit = function() {
                var e = this,
                  t = l.default.gameInstance.enemyArray;
                if (t)
                  for (var i = function(i) {
                        if (n.hasHitMinionArray.indexOf(t[i]) >= 0) return "continue";
                        if (n.checkNodeHit(n.node.getChildByName("clip"), t[i].getChildByName("clip"), )) {
                          for (var a = n.attack, o = new Array(), r = 0; r < n.effectArray.length; r++) o.push([
                            n.effectArray[r][0],
                            n.effectArray[r][1],
                            n.effectArray[r][2],
                          ]);
                          var s = !1,
                            c = n.strikeRate,
                            d = l.default.getStoneLevelWithType(10102);
                          if (d && d.length > 0)
                            for (var u = 0; u < d.length; u++) {
                              var p = h.default.getStoneEffectWithType(10102, d[u], );
                              c += Number(p) / 100;
                            }
                          if (
                            (t[i].hp == t[i].totalHp && (d = l.default.getStoneLevelWithType(10208)) && d.length > 0 && (c = 1), Math.random() < c)) {
                            var f = n.strikeHurtRate;
                            s = !0;
                            var g = l.default.getStoneLevelWithType(10116);
                            if (g && g.length > 0)
                              for (var y = 0; y < g.length; y++)
                                ((p = h.default.getStoneEffectWithType(10116, g[y], )),
                                  (f += Number(p) / 100));
                            if (
                              ((a *= f),
                                (g = l.default.getStoneLevelWithType(10202)) && g.length > 0))
                              for (var m = 0; m < g.length; m++)
                                ((p = h.default.getStoneEffectWithType(10202, g[m], )),
                                  (t[m].hp * Number(p)) / 100 > 3 * a ? (a += 3 * a) : (a += (t[m].hp * Number(p)) / 100));
                          }
                          if (
                            (d = l.default.getStoneLevelWithType(10203)) && d.length > 0)
                            for (var _ = 0; _ < d.length; _++)
                              ((p = h.default.getStoneEffectWithType(10203, d[_], )),
                                (t[_].hp * Number(p)) / 100 > 2 * a ? (a += 2 * a) : (a += (t[_].hp * Number(p)) / 100));
                          if (4 == n.type) n.spec > 0 ? n.spec-- : (o = new Array());
                          else if (7 == n.type) {
                            var v = o[0][2],
                              b = n.node.x - t[i].x,
                              w = n.node.y - t[i].y;
                            (Math.abs(b) > 15 * v && (b = b > 0 ? 15 * v : 15 * -v), Math.abs(w) > 15 * v && (w = w > 0 ? 15 * v : 15 * -v),
                              (o[0][1] = b),
                              (o[0][2] = w));
                          }
                          (t[i].getComponent("starEnemy").doHurt(n.type, a, o, s), n.hasHitMinionArray.push(t[i]));
                          var C = t[i];
                          if (
                            (n.scheduleOnce(function() {
                              var t = e.hasHitMinionArray.indexOf(C);
                              t >= 0 && (e.hasHitMinionArray[t] = null);
                            }, n.hurtCD), 0 == n.attackCDTime)) return (n.through--, n.through <= 0 && n.bulletOver(), "break");
                        }
                      },
                      n = this,
                      a = 0; a < t.length && "break" !== i(a); a++);
              }),
              (t.prototype.checkNodeHit = function(e, t) {
                var i = e.parent.x + e.x,
                  n = t.parent.x + t.x,
                  a = e.parent.y + e.y,
                  o = t.parent.y + t.y,
                  r = (e.width / 2) * e.parent.scaleX,
                  s = (e.height / 2) * e.parent.scaleY,
                  c = t.width / 2,
                  l = t.height / 2;
                if ((e.parent.angle, t.parent.angle, 2 == this.type)) {
                  var d = Math.sqrt((i - n) * (i - n) + (a - o) * (a - o)),
                    h = 5 + c,
                    u = (180 * Math.atan(h / d)) / Math.PI,
                    p = this.getTheAngle(i, a, n, o);
                  if (d < 300 && (Math.abs(p - this.angle) < Math.abs(u) || Math.abs(p - this.angle - 360) < Math.abs(u) || Math.abs(p - this.angle + 360) < Math.abs(u))) return !0;
                } else if (9 == this.type) {
                  if (
                    ((d = Math.sqrt((i - n) * (i - n) + (a - o) * (a - o))),
                      (h = 30 + c),
                      (u = (180 * Math.atan(h / d)) / Math.PI) < 15 && (u = 15),
                      (p = this.getTheAngle(i, a, n, o)), d < 250 && (Math.abs(p - this.angle) < Math.abs(u) || Math.abs(p - this.angle - 360) < Math.abs(u) || Math.abs(p - this.angle + 360) < Math.abs(u)))) return !0;
                } else if (Math.abs(i - n) < r + c / 2 && Math.abs(a - o) < s + l) return !0;
                return !1;
              }),
              (t.prototype.update = function(e) {
                if (0 != this.type && null != l.default.gameInstance) {
                  if (
                    ((this.timer += e * l.default.gameInstance.gameSpeed), 4 == this.type)) this.node.opacity = 120;
                  else if (7 == this.type) this.node.opacity = 180;
                  else if (
                    (this.timer > 0.02 && (this.node.opacity = 255), this.type, 5 == this.type)) {
                    var t;
                    if (
                      ((t = 0.25 * (3 - Math.pow(this.timer / 0.95 - 1, 2))),
                        (this.node.scale = this.bulletScale * t), this.timer >= 1.9)) {
                      if (!(this.spec > 0)) return void this.bulletOver();
                      (this.spec--,
                        (this.speed = 0), this.createBoom(),
                        (this.timer = 0.5));
                    }
                  }
                  this.move(e * l.default.gameInstance.gameSpeed);
                }
              }),
              (t.prototype.createBoom = function() {
                var e = cc.instantiate(this.boomPrefab);
                (e.setPosition(this.node.x, this.node.y),
                  (e.scale = 1.5 * this.size),
                  (e.getComponent("effect").frame_time = 0.02 / l.default.gameInstance.gameSpeed), l.default.gameInstance.gameLayer.getChildByName("effect").addChild(e));
                for (var t = 0; t < l.default.gameInstance.enemyArray.length; t++) {
                  var i = l.default.gameInstance.enemyArray[t];
                  if (Math.sqrt(
                      (this.node.x - i.x) * (this.node.x - i.x) + (this.node.y - i.y) * (this.node.y - i.y), ) < 60 * this.size) {
                    var n = this.attack,
                      a = new Array();
                    (this.spec > 0 && a.push([d.default.STATUS_BURN, this.spec, n / 3]), i.getComponent("starEnemy").doHurt(this.type, n / 3, a));
                  }
                }
              }),
              (t.prototype.bulletOver = function() {
                ((this.node.active = !1), this.node.removeFromParent(), this.node.destroy(),
                  (8 != this.type && 5 != this.type) || this.createBoom());
              }),
              (t.prototype.getTheAngle = function(e, t, i, n) {
                var a = 0;
                return (n == t ? (a = i >= e ? 90 : 270) : ((a = (180 * Math.atan((i - e) / (n - t))) / Math.PI), n <= t && (a += 180)), this.changeAngleTo360(a));
              }), o([c([cc.SpriteFrame])], t.prototype, "picArray", void 0), o([c(cc.Prefab)], t.prototype, "boomPrefab", void 0), o([s], t));
          })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
