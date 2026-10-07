// module: HollowOut
// deps: {"../misc/EditorAsset":"EditorAsset"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "867522ou/tCg6oZUYJ2fIHN", "HollowOut");
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
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.HollowOutShape = void 0), e("../misc/EditorAsset"));
        var c,
          l = cc._decorator,
          d = l.ccclass,
          h = l.property,
          u = l.requireComponent,
          p = l.executeInEditMode,
          f = l.disallowMultiple,
          g = l.executionOrder;
        (function(e) {
          ((e[(e.Rect = 1)] = "Rect"), (e[(e.Circle = 2)] = "Circle"));
        })((c = i.HollowOutShape || (i.HollowOutShape = {})));
        var y = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._effect = null),
              (t._shape = c.Rect),
              (t._center = cc.v2()),
              (t._width = 300),
              (t._height = 300),
              (t._round = 1),
              (t._radius = 200),
              (t._feather = 0.5),
              (t.sprite = null),
              (t.material = null),
              (t.tweenRes = null), t);
          }
          return (a(t, e), Object.defineProperty(t.prototype, "effect", {
              get: function() {
                return this._effect;
              },
              set: function(e) {
                ((this._effect = e), this.init());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "shape", {
              get: function() {
                return this._shape;
              },
              set: function(e) {
                ((this._shape = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "center", {
              get: function() {
                return this._center;
              },
              set: function(e) {
                ((this._center = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "width", {
              get: function() {
                return this._width;
              },
              set: function(e) {
                ((this._width = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "height", {
              get: function() {
                return this._height;
              },
              set: function(e) {
                ((this._height = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "round", {
              get: function() {
                return this._round;
              },
              set: function(e) {
                ((this._round = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "radius", {
              get: function() {
                return this._radius;
              },
              set: function(e) {
                ((this._radius = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(t.prototype, "feather", {
              get: function() {
                return this._feather;
              },
              set: function(e) {
                ((this._feather = e), this.updateProperties());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onLoad = function() {
              this.init();
            }),
            (t.prototype.resetInEditor = function() {
              this.init();
            }),
            (t.prototype.init = function() {
              return r(this, void 0, void 0, function() {
                var e;
                return s(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [3, 2];
                    case 1:
                      (t.sent(), (t.label = 2));
                    case 2:
                      return this._effect ? ((e = this.sprite = this.node.getComponent(cc.Sprite)).spriteFrame && (e.spriteFrame.getTexture().packable = !1),
                        (this.material = cc.Material.create(this._effect)), e.setMaterial(0, this.material), this.updateProperties(),
                        [2]) : [2];
                  }
                });
              });
            }),
            (t.prototype.updateProperties = function() {
              switch (this._shape) {
                case c.Rect:
                  this.rect(this._center, this._width, this._height, this._round, this._feather, );
                  break;
                case c.Circle:
                  this.circle(this._center, this._radius, this._feather);
              }
            }),
            (t.prototype.rect = function(e, t, i, n, a) {
              if (
                ((this._shape = c.Rect), null != e && (this._center = e), null != t && (this._width = t), null != i && (this._height = i), null != n)) {
                this._round = n >= 0 ? n : 0;
                var o = Math.min(this._width / 2, this._height / 2);
                this._round = this._round <= o ? this._round : o;
              }
              null != a && ((this._feather = a >= 0 ? a : 0),
                (this._feather = this._feather <= this._round ? this._feather : this._round));
              var r = this.material;
              (r.setProperty("size", this.getNodeSize()), r.setProperty("center", this.getCenter(this._center)), r.setProperty("width", this.getWidth(this._width)), r.setProperty("height", this.getHeight(this._height)), r.setProperty("round", this.getRound(this._round)), r.setProperty("feather", this.getFeather(this._feather)));
            }),
            (t.prototype.circle = function(e, t, i) {
              ((this._shape = c.Circle), null != e && (this._center = e), null != t && (this._radius = t), null != i && (this._feather = i >= 0 ? i : 0));
              var n = this.material;
              (n.setProperty("size", this.getNodeSize()), n.setProperty("center", this.getCenter(this._center)), n.setProperty("width", this.getWidth(2 * this._radius)), n.setProperty("height", this.getHeight(2 * this._radius)), n.setProperty("round", this.getRound(this._radius)), n.setProperty("feather", this.getFeather(this._feather)));
            }),
            (t.prototype.rectTo = function(e, t, i, n, a, o) {
              var r = this;
              return (void 0 === a && (a = 0), void 0 === o && (o = 0), new Promise(function(s) {
                ((r._shape = c.Rect), cc.Tween.stopAllByTarget(r), r.unscheduleAllCallbacks(), r.tweenRes && r.tweenRes(),
                  (r.tweenRes = s),
                  (a = Math.min(a, i / 2, n / 2)),
                  (o = Math.min(o, a)), cc.tween(r).to(e, {
                    center: t,
                    width: i,
                    height: n,
                    round: a,
                    feather: o,
                  }).call(function() {
                    r.scheduleOnce(function() {
                      r.tweenRes && (r.tweenRes(), (r.tweenRes = null));
                    });
                  }).start());
              }));
            }),
            (t.prototype.circleTo = function(e, t, i, n) {
              var a = this;
              return (void 0 === n && (n = 0), new Promise(function(o) {
                ((a._shape = c.Circle), cc.Tween.stopAllByTarget(a), a.unscheduleAllCallbacks(), a.tweenRes && a.tweenRes(),
                  (a.tweenRes = o), cc.tween(a).to(e, {
                    center: t,
                    radius: i,
                    feather: n
                  }).call(function() {
                    a.scheduleOnce(function() {
                      a.tweenRes && (a.tweenRes(), (a.tweenRes = null));
                    });
                  }).start());
              }));
            }),
            (t.prototype.reset = function() {
              this.rect(cc.v2(), 0, 0, 0, 0);
            }),
            (t.prototype.setNodeSize = function() {
              var e = this.node,
                t = e.width,
                i = e.height;
              ((this._radius = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2), this.rect(e.getPosition(), t, i, 0, 0));
            }),
            (t.prototype.getCenter = function(e) {
              var t = this.node,
                i = t.width,
                n = t.height,
                a = (e.x + i / 2) / i,
                o = (-e.y + n / 2) / n;
              return cc.v2(a, o);
            }),
            (t.prototype.getNodeSize = function() {
              return cc.v2(this.node.width, this.node.height);
            }),
            (t.prototype.getWidth = function(e) {
              return e / this.node.width;
            }),
            (t.prototype.getHeight = function(e) {
              return e / this.node.width;
            }),
            (t.prototype.getRound = function(e) {
              return e / this.node.width;
            }),
            (t.prototype.getFeather = function(e) {
              return e / this.node.width;
            }), o([h], t.prototype, "_effect", void 0), o(
              [h({
                type: cc.EffectAsset,
                tooltip: !1,
                readonly: !0
              })], t.prototype, "effect", null, ), o([h], t.prototype, "_shape", void 0), o(
              [h({
                type: cc.Enum(c),
                tooltip: !1
              })], t.prototype, "shape", null, ), o([h], t.prototype, "_center", void 0), o([h({
              tooltip: !1
            })], t.prototype, "center", null), o([h], t.prototype, "_width", void 0), o(
              [
                h({
                  tooltip: !1,
                  visible: function() {
                    return this._shape === c.Rect;
                  },
                }),
              ], t.prototype, "width", null, ), o([h], t.prototype, "_height", void 0), o(
              [
                h({
                  tooltip: !1,
                  visible: function() {
                    return this._shape === c.Rect;
                  },
                }),
              ], t.prototype, "height", null, ), o([h], t.prototype, "_round", void 0), o(
              [
                h({
                  tooltip: !1,
                  visible: function() {
                    return this._shape === c.Rect;
                  },
                }),
              ], t.prototype, "round", null, ), o([h], t.prototype, "_radius", void 0), o(
              [
                h({
                  tooltip: !1,
                  visible: function() {
                    return this._shape === c.Circle;
                  },
                }),
              ], t.prototype, "radius", null, ), o([h], t.prototype, "_feather", void 0), o(
              [
                h({
                  tooltip: !1,
                  visible: function() {
                    return this._shape === c.Circle || this.round > 0;
                  },
                }),
              ], t.prototype, "feather", null, ), o([d, u(cc.Sprite), p, f, g(-10)], t));
        })(cc.Component);
        ((i.default = y), cc._RF.pop());
      };
