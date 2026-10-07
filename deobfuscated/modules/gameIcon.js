// module: gameIcon
// deps: {"./libcocos":"libcocos","./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2ad31lcUwtAvoZav3zkEJKH", "gameIcon");
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
        var c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = e("./libcocos"),
          u = e("./libwechat"),
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.sp = null),
                (t.icon_type = ""),
                (t._refresh_time = 0),
                (t._single_list = null),
                (t._single_index = 0),
                (t._redirectId = 0),
                (t._appid = ""),
                (t._gameName = ""),
                (t._icon = ""),
                (t._path = ""), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t.prototype, "redirectId", {
                get: function() {
                  return this._redirectId;
                },
                set: function(e) {
                  this._redirectId != e && (this._redirectId = e);
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "appid", {
                get: function() {
                  return this._appid;
                },
                set: function(e) {
                  this._appid != e && (this._appid = e);
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "gameName", {
                get: function() {
                  return this._gameName;
                },
                set: function(e) {
                  this._gameName != e && (this._gameName = e);
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "icon", {
                get: function() {
                  return this._icon;
                },
                set: function(e) {
                  var t = this;
                  cc.sys.isNative || (this._icon != e && ((this._icon = e), this._icon ? cc.loader.load({
                    url: this._icon
                  }, function(e, i) {
                    i && t.sp && t.sp.node && t.sp.node.isValid && (t.sp.spriteFrame = new cc.SpriteFrame(i));
                  }) : (this.sp.spriteFrame = null)));
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "path", {
                get: function() {
                  return this._path;
                },
                set: function(e) {
                  this._path != e && (this._path = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.setData = function(e) {
                ((this.appid = e.appid),
                  (this.gameName = e.name),
                  (this.icon = e.icon),
                  (this.path = e.path),
                  (this.redirectId = e.redirectId));
              }),
              (t.prototype.getData = function() {
                return {
                  appid: this.appid,
                  gameName: this.gameName,
                  icon: this.icon,
                  path: this.path,
                  redirectId: this.redirectId,
                };
              }),
              (t.prototype.start = function() {
                var e = this;
                if (!cc.sys.isNative) {
                  var t = this.node.getComponent(cc.Button);
                  (t || (t = this.node.addComponent(cc.Button)), this.node.on("click", this.onClick, this), "single" === this.icon_type ? (this.refreshIcon(), cc.tween(this.node).repeatForever(cc.tween().to(0.1, {
                    angle: 12
                  }).to(0.1, {
                    angle: -12
                  }).to(0.1, {
                    angle: 12
                  }).to(0.1, {
                    angle: -12
                  }).to(0.05, {
                    angle: 0
                  }).delay(2.5).call(function() {
                    e.refreshIcon();
                  }), ).start()) : "banner" === this.icon_type && this.refreshIcon());
                }
              }),
              (t.prototype.onClick = function() {
                var e = this;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                  var t = this._appid,
                    i = this._path;
                  wx.navigateToMiniProgram({
                    appId: t,
                    path: i,
                    envVersion: "release",
                    success: function() {
                      wx.request({
                        url: "https://xyx.p8games.com/wxgame/navigate/log",
                        data: {
                          ad: 1,
                          game: u.wechat.game_id,
                          appid: t,
                          name: e._gameName,
                        },
                      });
                    },
                  });
                }
                ("single" !== this.icon_type && "banner" !== this.icon_type) || this.refreshIcon();
              }),
              (t.prototype.refreshIcon = function() {
                return r(this, void 0, void 0, function() {
                  var e;
                  return s(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return cc.sys.isNative ? [2] : ((this._refresh_time = new Date().getTime()), "single" !== this.icon_type ? [3, 3] : this._single_list ? [3, 2] : [4, u.wechat.requestGameListNew(9)]);
                      case 1:
                        ((e = t.sent())[0] && e.length > 0 && (this._single_list = e),
                          (t.label = 2));
                      case 2:
                        return (this._single_list || (this._single_list = [""]), this.setData(this._single_list[this._single_index]), this._single_index++, this._single_index >= this._single_list.length && (this._single_index = 0),
                          [3, 5]);
                      case 3:
                        return "banner" !== this.icon_type ? [3, 5] : [4, u.wechat.requestGameListNew(1)];
                      case 4:
                        ((e = t.sent()).data && e.data.length > 0 && this.setData(e.data[0]),
                          (t.label = 5));
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.update = function() {
                if ("single" === this.icon_type);
                else if ("banner" === this.icon_type) {
                  var e = new Date().getTime();
                  this._refresh_time < e - 6e4 && this.refreshIcon();
                }
              }),
              (t.showIcon = function(e) {
                var t = this;
                u.wechat.showRightupNative(function() {
                  return r(t, void 0, void 0, function() {
                    return s(this, function() {
                      return [2];
                    });
                  });
                }, function() {
                  return r(t, void 0, void 0, function() {
                    var t, n;
                    return s(this, function(a) {
                      switch (a.label) {
                        case 0:
                          return this.game_icon_prefab ? [3, 2] : ((t = this),
                            [
                              4,
                              h.cocos.loadRes("gamewall/gameicon1", cc.Prefab, ),
                            ]);
                        case 1:
                          ((t.game_icon_prefab = a.sent()), (a.label = 2));
                        case 2:
                          return (
                            (n = cc.instantiate(this.game_icon_prefab)), e.addChild(n),
                            (n.children[0].active = !1),
                            (n.addComponent(i).icon_type = "single"),
                            (this.game_icon_node = n),
                            [2]);
                      }
                    });
                  });
                }, e, );
              }),
              (t.hideIcon = function() {
                (u.wechat.hideRightupNative(), this.game_icon_node && this.game_icon_node.isValid && (this.game_icon_node.removeFromParent(),
                  (this.game_icon_node = null)));
              }),
              (t.game_icon_prefab = null),
              (t.game_icon_node = null), o([d(cc.Sprite)], t.prototype, "sp", void 0), o([d], t.prototype, "icon_type", void 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
