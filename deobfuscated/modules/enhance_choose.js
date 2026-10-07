// module: enhance_choose
// deps: {"../Script/libppgame/libwechat":"libwechat","./battleScene":"battleScene","./libppgame/onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cfea20xaiJMGYOydcKo4vBS", "enhance_choose");
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
        var c = e("../Script/libppgame/libwechat"),
          l = e("./battleScene"),
          d = e("./libppgame/onfire"),
          h = cc._decorator,
          u = h.ccclass,
          p = h.property,
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bird_icons = []),
                (t.icons = []),
                (t.icon_labels = []),
                (t.desc_labels = []),
                (t.box_sp = []),
                (t.box_sps = []),
                (t.icon_sps = []),
                (t.icon_boss_damage = null),
                (t.icon_extra_egg = null),
                (t.btn_refresh = null),
                (t.btn_all = null), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                var e = this;
                (this.btn_all.node.on("click", function() {
                  return r(e, void 0, void 0, function() {
                    return s(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (d.fire("audio", "click"),
                            [4, c.wechat.showRewardedVideoAdNew()]);
                        case 1:
                          return (e.sent().isEnded && (l.default.inst.chooseEnahance(0),
                              (this.node.active = !1)),
                            [2]);
                      }
                    });
                  });
                }), this.btn_refresh.node.on("click", function() {
                  return r(e, void 0, void 0, function() {
                    return s(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (d.fire("audio", "click"),
                            [4, c.wechat.showRewardedVideoAdNew()]);
                        case 1:
                          return (e.sent().isEnded && l.default.inst.randomThreeEnhances(!0),
                            [2]);
                      }
                    });
                  });
                }));
                for (var t = function(t) {
                      i.box_sp[t].node.on("click", function() {
                        (d.fire("audio", "click"), l.default.inst.chooseEnahance(t + 1),
                          (e.node.active = !1));
                      });
                    },
                    i = this,
                    n = 0; n < 3; n++) t(n);
                cc.tween(this.btn_refresh.node.getChildByName("tips")).repeatForever(cc.tween().to(0.25, {
                  scale: 0.95
                }).to(0.25, {
                  scale: 0.8
                }), ).start();
              }),
              (t.prototype.start = function() {}),
              (t.prototype.show = function(e, t, i, n) {
                var a = this;
                void 0 === n && (n = !1);
                for (var o = function(t) {
                      var i = e[t],
                        n = i.enhance.desc.replace(/\$v/g, i.value.toString());
                      ((r.desc_labels[t].string = '<outline color="black" width=3>' + n + "</outline>"), i.enhance.birdType ? ((r.icons[t].node.active = !1),
                          (r.icon_labels[t].node.active = !1),
                          (r.bird_icons[t].spriteFrame = r.icon_sps[i.enhance.birdType - 1]),
                          (r.bird_icons[t].node.parent.active = !0)) : "boss_damage" == i.enhance.type || "round_egg" == i.enhance.type ? ((r.bird_icons[t].node.parent.active = !1),
                          (r.icon_labels[t].node.active = !1),
                          (r.icons[t].node.active = !0),
                          (r.icons[t].spriteFrame = "boss_damage" == i.enhance.type ? r.icon_boss_damage : r.icon_extra_egg)) : ((r.bird_icons[t].node.parent.active = !1),
                          (r.icons[t].node.active = !1),
                          (r.icon_labels[t].node.active = !0),
                          (r.icon_labels[t].string = i.enhance.brief)),
                        (r.box_sp[t].node.getChildByName("recommend").active = i.isRecommend),
                        (r.box_sp[t].spriteFrame = r.box_sps[i.quality - 1]),
                        (r.box_sp[t].node.x = 640), r.scheduleOnce(function() {
                          cc.tween(a.box_sp[t].node).to(0.3, {
                            x: 0
                          }, {
                            easing: "backOut",
                            onStart: function() {
                              a.box_sp[t].node.scale = 0.9;
                            },
                            onUpdate: function(e, t) {
                              e.scale = 0.9 + 0.1 * t;
                            },
                          }, ).start();
                        }, 0.1 * t));
                    },
                    r = this,
                    s = 0; s < 3; s++) o(s);
                if (
                  ((this.btn_all.interactable = i < 1),
                    (this.btn_refresh.interactable = t < 10),
                    (this.btn_all.node.parent.getChildByName("label").getComponent(cc.Label).string = "剩余次数" + (1 - i) + "/1"),
                    (this.btn_refresh.node.parent.getChildByName("label").getComponent(cc.Label).string = "剩余次数" + (10 - t) + "/10"),
                    (this.btn_refresh.node.getChildByName("tips").active = t < 3), n)) this.btn_all.node.parent.parent.opacity = 255;
                else {
                  this.btn_all.node.parent.parent.opacity = 255;
                  var c = this.btn_all.node.parent.parent;
                  ((c.x = 640), this.scheduleOnce(function() {
                    cc.tween(c).to(0.3, {
                      x: 0
                    }, {
                      easing: "backOut",
                      onStart: function() {
                        c.scale = 0.9;
                      },
                      onUpdate: function(e, t) {
                        e.scale = 0.9 + 0.1 * t;
                      },
                    }, ).start();
                  }, 3 * 0.1));
                }
              }), o([p([cc.Sprite])], t.prototype, "bird_icons", void 0), o([p([cc.Sprite])], t.prototype, "icons", void 0), o([p([cc.Label])], t.prototype, "icon_labels", void 0), o([p([cc.RichText])], t.prototype, "desc_labels", void 0), o([p([cc.Sprite])], t.prototype, "box_sp", void 0), o([p([cc.SpriteFrame])], t.prototype, "box_sps", void 0), o([p([cc.SpriteFrame])], t.prototype, "icon_sps", void 0), o([p(cc.SpriteFrame)], t.prototype, "icon_boss_damage", void 0), o([p(cc.SpriteFrame)], t.prototype, "icon_extra_egg", void 0), o([p(cc.Button)], t.prototype, "btn_refresh", void 0), o([p(cc.Button)], t.prototype, "btn_all", void 0), o([u], t));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
