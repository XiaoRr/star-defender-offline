// module: expand-block
// deps: {"../Script/libppgame/libwechat":"libwechat","./battleScene":"battleScene","./bird-grids":"bird-grids","./dragable":"dragable","./libppgame/onfire":"onfire","./refresh-area":"refresh-area"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0f9f9zhNsVD36UCf7R1aQ2M", "expand-block");
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
          },
          r = (this && this.__awaiter) || function(e, t, i, n) {
            return new(i || (i = Promise))(function(a, o) {
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
                e.done ? a(e.value) : ((t = e.value), t instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          },
          s = (this && this.__generator) || function(e, t) {
            var i,
              n,
              a,
              o,
              r = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o);

            function s(e) {
              return function(t) {
                return c([e, t]);
              };
            }

            function c(o) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; r;) try {
                if (
                  ((i = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
                switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return (r.label++, {
                      value: o[1],
                      done: !1
                    });
                  case 5:
                    (r.label++, (n = o[1]), (o = [0]));
                    continue;
                  case 7:
                    ((o = r.ops.pop()), r.trys.pop());
                    continue;
                  default:
                    if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
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
              return {
                value: o[0] ? o[1] : void 0,
                done: !0
              };
            }
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var c = e("./bird-grids"),
          l = e("./dragable"),
          d = e("./battleScene"),
          h = e("./refresh-area"),
          u = e("../Script/libppgame/libwechat"),
          p = e("./libppgame/onfire"),
          f = cc._decorator,
          g = f.ccclass,
          y = (f.property,
            (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (a(t, e),
                (t.prototype.onLoad = function() {
                  var e = this;
                  l.default.prototype.onLoad.call(this);
                  var t = this.node.getChildByName("video_unlock");
                  (t.on("touchstart", function() {
                    return r(e, void 0, void 0, function() {
                      return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return [4, u.wechat.showRewardedVideoAdNew()];
                          case 1:
                            return e.sent().isEnded ? ((t.active = !1), d.default.inst.enterExpandMode(),
                              [2]) : [2];
                        }
                      });
                    });
                  }), cc.tween(t).repeatForever(cc.tween().to(1, {
                    scale: 1.1
                  }).to(1, {
                    scale: 1
                  }), ).start());
                }),
                (t.prototype.start = function() {}),
                (t.prototype.onDragStart = function() {
                  (p.fire("audio", "click_drop_combined"),
                    (this.node.zIndex = 9999), d.default.inst.enterExpandMode());
                }),
                (t.prototype.onDragMove = function() {
                  var e = c.default.inst;
                  if (e) {
                    var t = e.checkExpandOverlap(this);
                    t.length === this.shapeData.json.length ? e.setDashedCellsColor(t, "green") : e.setDashedCellsColor(t, "red");
                  }
                }),
                (t.prototype.onDragEnd = function() {
                  var e = c.default.inst,
                    t = e.checkExpandOverlap(this);
                  (e.setDashedCellsColor([], "green"), t.length === this.shapeData.json.length ? (this.deployed && e.removeExpandBlock(this), e.putExpandBlock(this)) : this.deployed ? (e.removeExpandBlock(this), h.default.inst.restoreBird(this.node)) : h.default.inst.refreshBirdsPostion(this.node), p.fire("audio", "click_drop_combined"));
                }), o([g], t));
            })(l.default));
        ((i.default = y), cc._RF.pop());
      };
