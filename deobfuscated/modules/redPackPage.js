// module: redPackPage
// deps: {"./libcocos":"libcocos","./redPack":"redPack","./redPackWithdraw":"redPackWithdraw"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "495d4/2xztDUYiJYPvqZ7g6", "redPackPage");
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
        var c = e("./libcocos"),
          l = e("./redPack"),
          d = e("./redPackWithdraw"),
          h = cc._decorator,
          u = h.ccclass,
          p = h.property,
          f = window.hongbao_jumpto || "wxbec9976952c43d8c";
        (window.appid && "wx472cbccde40ae6c4" != window.appid) || (f = "self");
        var g = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.label = null),
              (t.selected = 0),
              (t.hongbao_labels = []),
              (t.withdraw_btn = null),
              (t.hongbao_icon = null), t);
          }
          var i;
          return (a(t, e),
            (i = t), Object.defineProperty(t, "Inst", {
              get: function() {
                return this._inst;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.start = function() {
              var e = this;
              this.node.getChildByName("redpack").getChildByName("btn_withdraw").on("click", function() {
                if ((console.log("withdraw", e.selected), e.selected))
                  if (l.RedPackData.Inst.vd_count >= l.RedPackData.hongbaoReq(e.selected - 1))
                    if ("self" == f) d.default.show(e.node.parent, e.node.zIndex + 1, e.selected, );
                    else {
                      console.log("navigate to", f);
                      var t = e.selected,
                        i = e;
                      wx.navigateToMiniProgram({
                        appId: f,
                        path: "?hb=1",
                        extraData: {
                          openid: l.RedPackData.Inst.openid,
                          amount: l.RedPackData.hongbaoAmount(e.selected - 1),
                          nonce: Math.random().toString(36).slice(-8),
                        },
                        envVersion: "trial",
                        success: function() {
                          t <= 2 && ((l.RedPackData.Inst.vd_count -= l.RedPackData.hongbaoReq(t - 1)), i.set_vd_count(l.RedPackData.Inst.vd_count));
                        },
                      });
                    }
                else("undefined" != typeof wx && wx.showToast({
                  title: "你领取的红包数量还不够",
                  icon: "none",
                  duration: 2e3,
                }), console.log("vd count", l.RedPackData.Inst.vd_count));
              });
              var t = this.node.getChildByName("redpack").getChildByName("redpacks").children,
                i = t[0].children[0],
                n = this.node.getChildByName("redpack").getChildByName("req").getComponent(cc.Label),
                a = this.node.getChildByName("redpack").getChildByName("btn_withdraw").getComponent(cc.Button);
              this.withdraw_btn = a;
              var o = this.node.getChildByName("redpack").getChildByName("hongbao_labels").children;
              this.hongbao_labels = [];
              for (var c = function(r) {
                    t[r].on("click", function() {
                      e.selected != r + 1 && ((e.selected = r + 1),
                        (i.parent = t[r]), console.log("select", e.selected),
                        (n.string = l.RedPackData.Inst.vd_count + "/" + l.RedPackData.hongbaoReq(r)),
                        (n.node.color = new cc.Color().fromHEX(l.RedPackData.Inst.vd_count >= l.RedPackData.hongbaoReq(r) ? "#FFE2B1" : "#FF0000", )),
                        (a.interactable = l.RedPackData.Inst.balance >= l.RedPackData.hongbaoAmount(r)));
                    });
                    var s = o[r].getComponent(cc.Label);
                    ((s.string = l.RedPackData.hongbaoAmount(r) / 100 + "元"),
                      (h.hongbao_labels[r] = s));
                  },
                  h = this,
                  u = 0; u < 6; u++) c(u);
              if (
                (t[0].emit("click"), this.node.children[0].on("click", function() {
                    e.node.removeFromParent();
                  }),
                  (this.label.string = l.RedPackData.Inst.balance / 100 + "元"), window.hb_debug)) {
                var p = new cc.Node();
                (p.addComponent(cc.Button), p.setContentSize(100, 60),
                  (p.addComponent(cc.Label).string = "test"), this.node.addChild(p),
                  (p.x = 250),
                  (p.y = 0), p.on("click", function() {
                    return r(e, void 0, void 0, function() {
                      return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return (this.set_vd_count(++l.RedPackData.Inst.vd_count),
                              [4, l.RedPackData.Inst.addHongbao(10)]);
                          case 1:
                            return (e.sent() > 0 && ((this.label.string = l.RedPackData.Inst.balance / 100 + "元"),
                                (this.node.getChildByName("redpack").getChildByName("btn_withdraw").getComponent(cc.Button).interactable = l.RedPackData.Inst.balance >= l.RedPackData.hongbaoAmount(this.selected - 1, ))),
                              [2]);
                        }
                      });
                    });
                  }));
              }
            }), Object.defineProperty(t.prototype, "balance", {
              set: function(e) {
                (console.log("redpack page balance", e),
                  (this.label.string = e / 100 + "元"), this.hongbao_icon.refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.set_vd_count = function() {
              var e = this.node.getChildByName("redpack").getChildByName("req").getComponent(cc.Label);
              (e && ((e.string = l.RedPackData.Inst.vd_count + "/" + l.RedPackData.hongbaoReq(this.selected - 1)),
                (e.node.color = new cc.Color().fromHEX(l.RedPackData.Inst.vd_count >= l.RedPackData.hongbaoReq(this.selected - 1) ? "#FFE2B1" : "#FF0000", ))), this.withdraw_btn && (this.withdraw_btn.interactable = l.RedPackData.Inst.balance >= l.RedPackData.hongbaoReq(this.selected - 1)));
            }),
            (t.prototype.onShow = function() {
              return r(this, void 0, void 0, function() {
                return s(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, l.RedPackData.Inst.reqBalance()];
                    case 1:
                      return (e.sent(), this.set_vd_count(l.RedPackData.Inst.vd_count),
                        [2]);
                  }
                });
              });
            }),
            (t.prototype.onEnable = function() {
              ((l.RedPackData.Inst.redpack_page = this), (i._inst = this));
            }),
            (t.prototype.onDisable = function() {
              ((l.RedPackData.Inst.redpack_page = null), (i._inst = null));
            }),
            (t.show = function(e, t, n, a) {
              return (void 0 === t && (t = 0), r(this, void 0, void 0, function() {
                var o;
                return s(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        new Promise(function(e, t) {
                          c.cocos.loadRes("redpack/redpackpage", cc.Prefab).then(function(t) {
                            e(cc.instantiate(t));
                          }).catch(function(e) {
                            t(e);
                          });
                        }),
                      ];
                    case 1:
                      return (
                        ((o = r.sent()).getComponent(i).hongbao_icon = a), o.setPosition(n), e.addChild(o, t),
                        [2]);
                  }
                });
              }));
            }),
            (t._inst = null), o([p(cc.Label)], t.prototype, "label", void 0),
            (i = o([u], t)));
        })(cc.Component);
        ((i.default = g), cc._RF.pop());
      };
