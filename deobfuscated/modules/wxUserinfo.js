// module: wxUserinfo
// deps: {"../../battle_scripts/libppgame/onfire":"onfire","../../battle_scripts/libppgame/utils":"utils","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ffbf1wPqO1OAYuuG17s7vol", "wxUserinfo");
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
        var r = e("../../battle_scripts/libppgame/utils"),
          s = e("../playerData"),
          c = e("../../battle_scripts/libppgame/onfire"),
          l = cc._decorator,
          d = l.ccclass,
          h = l.property,
          u = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.sprite = null),
                (t._btnWX = null),
                (t._interactable = !0), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t.prototype, "interactable", {
                get: function() {
                  return this._interactable;
                },
                set: function(e) {
                  ((this._interactable = e), this._btnWX && (e ? this._btnWX.show() : this._btnWX.hide()));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                var e = this;
                (console.log("------------wxuserinfo onLoad"), i.getUserInfo().then(function(t) {
                  if (t) {
                    var i = e.node.getComponent(cc.Button);
                    i && (i.interactable = !0);
                    var n = e.node.getComponent(cc.Toggle);
                    (n && (n.interactable = !0), console.log("----------getUserInfo() resolve", t));
                  } else e.createUserInfoBtn();
                }).catch(function(e) {
                  console.error("getUserInfo fail", e);
                }));
              }),
              (t.prototype.onHideWxBtn = function() {
                this._btnWX && this._btnWX.hide();
              }),
              (t.prototype.onShowWxBtn = function() {
                this._btnWX && this._btnWX.show();
              }),
              (t.prototype.createUserInfoBtn = function() {
                var e = cc.sys.localStorage.getItem("pp-starcraft-userinfo-req", ),
                  t = parseInt(e) || 0;
                (console.log("req times", t, e), t > 1 || (cc.sys.localStorage.setItem("pp-starcraft-userinfo-req", "" + (t + 1), ), this._btnWX || "undefined" == typeof wx || void 0 === wx.createUserInfoButton || this._createUserInfoBtn(), this._btnWX && (this._interactable ? this._btnWX.show() : this._btnWX.hide())));
              }),
              (t.prototype.relocate = function() {
                if ((console.log("relocate", this._btnWX), this._btnWX)) {
                  var e = this.node.getContentSize(),
                    t = cc.director.getScene().getChildByName("Canvas"),
                    i = cc.view.getFrameSize(),
                    n = this.node.parent.convertToWorldSpaceAR(cc.v2(this.node.x, this.node.y), ),
                    a = (n.x / t.width) * i.width,
                    o = (1 - n.y / t.height) * i.height,
                    r = (e.width / t.width) * i.width,
                    s = (e.height / t.height) * i.height,
                    c = a - r / 2,
                    l = o - s / 2;
                  ((this._btnWX.style.width = r),
                    (this._btnWX.style.height = s),
                    (this._btnWX.style.left = c),
                    (this._btnWX.style.top = l));
                }
              }),
              (t.prototype._createUserInfoBtn = function() {
                var e = this,
                  t = this.sprite || this.node.getComponent(cc.Sprite),
                  i = this.node.getContentSize(),
                  n = t && t.spriteFrame ? t.spriteFrame._textureFilename : null;
                n ? (window.wxDownloader && window.wxDownloader.REMOTE_SERVER_ROOT && (n = window.wxDownloader.REMOTE_SERVER_ROOT + "/" + n), cc.loader.md5Pipe && (n = cc.loader.md5Pipe.transformURL(n)), console.log("sprite", t)) : (n = "");
                var a = cc.director.getScene().getChildByName("Canvas"),
                  o = cc.view.getFrameSize(),
                  r = this.node.parent.convertToWorldSpaceAR(cc.v2(this.node.x, this.node.y), );
                (console.log("canvas", a), console.log("frameSize", o), console.log("position", r));
                var s = (r.x / a.width) * o.width,
                  l = (1 - r.y / a.height) * o.height,
                  d = (i.width / a.width) * o.width,
                  h = (i.height / a.height) * o.height,
                  u = {
                    left: s - d / 2,
                    top: l - h / 2,
                    width: d,
                    height: h
                  };
                ((this._btnWX = wx.createUserInfoButton({
                  type: "image",
                  image: n,
                  style: u,
                  withCredentials: !1,
                })), this._btnWX.onTap(function(t) {
                  (console.log("btnWX onTap", t), t.userInfo ? (e.onUserInfo(t.userInfo), c.fire("userInfo", t.userInfo)) : console.log("btnWX fail"), e.node.emit("click", t));
                  var i = e.node.getComponent(cc.Button);
                  i && i.clickEvents && i.clickEvents[0] && i.clickEvents[0].emit(["click"]);
                }));
              }),
              (t.prototype.start = function() {}),
              (t.prototype.onUserInfo = function(e) {
                (console.log("onUserInfo", this.node.name), this._btnWX && (this._btnWX.destroy(),
                    (this._btnWX = null), console.log("####### postion", this.node.getPosition())),
                  (i.userInfo = e));
              }),
              (t.prototype.onDestroy = function() {
                this._btnWX && (this._btnWX.destroy(), (this._btnWX = null));
              }),
              (t.getUserInfo = function() {
                var e = this;
                return this._userInfo ? Promise.resolve(this._userInfo) : (this._getUserInfo_pr || (this._getUserInfo_pr = new Promise(function(t) {
                  if ("undefined" == typeof wx || void 0 === wx.getUserInfo) return (
                    (e.userInfo = {
                      nickName: s.default.playerName || "星际玩家" + r.utils.random(1e3, 9999),
                      avatarUrl: s.default.playerIcon || "",
                      default: !0,
                    }), t(e._userInfo));
                  wx.getSetting({
                    success: function(i) {
                      (console.log("getSettin respone:", i), i.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(i) {
                          (console.log("wx.getUserInfo", i.userInfo, ),
                            (e.userInfo = i.userInfo), t(i.userInfo));
                        },
                      }) : t(null));
                    },
                  });
                })), this._getUserInfo_pr);
              }), Object.defineProperty(t, "userInfo", {
                get: function() {
                  return this._userInfo;
                },
                set: function(e) {
                  ((this._userInfo = e), console.log("-------------set userInfo", e),
                    (s.default.playerName && !/^\u661f\u9645\u73a9\u5bb6\d{4}$/.test(s.default.playerName, )) || (s.default.playerName = this._userInfo.nickName),
                    (s.default.playerIcon = this._userInfo.avatarUrl));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t._userInfo = null),
              (t._getUserInfo_pr = null), o([h(cc.Sprite)], t.prototype, "sprite", void 0),
              (i = o([d], t)));
          })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
