// module: libwechat_review
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "80825pTk3JN/4KXrWaFKiF1", "libwechat_review");
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
          });

        function o(e) {
          return (1011 == e || 1047 == e || 1017 == e || 1007 == e || 1008 == e || 1030 == e);
        }
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.wechat_review = void 0));
        var r = "ppgames-scene";

        function s() {
          var e = cc.sys.localStorage.getItem(r);
          return (console.log("localStorage scene:" + e), e && parseInt(e) ? parseInt(e) : 0);
        }
        ((i.wechat_review = new((function(e) {
          function t() {
            var t,
              i = e.call(this) || this;
            if (
              ((i._channel = null),
                (i._scene = 0),
                (i._is_review = !1),
                (i._remote_review = !1),
                (i.real_scene = ""),
                (i.real_channel = ""), cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME)) {
              var n = wx.getLaunchOptionsSync();
              if (
                (n && (console.log("got launchOption", n), n.query && n.query.channel ? ((i._channel = n.query.channel),
                    (i.real_channel = n.query.channel)) : n.referrerInfo && n.referrerInfo.appId && (i._channel = n.referrerInfo.appId),
                  (i.real_scene = n.scene), o(n.scene) ? ((i._scene = n.scene),
                    (t = n.scene), cc.sys.localStorage.setItem(r, t), console.log("localStorage save scene:" + i._scene),
                    (i._is_review = !0)) : ((i._scene = s()), (i._is_review = o(i._scene)))), i._channel))
                (cc.sys.localStorage.setItem("ppgames-channel", i._channel), console.log("localStorage save channel:" + i._channel));
              else {
                var a = cc.sys.localStorage.getItem("ppgames-channel");
                (console.log("localStorage channel:" + i._channel), a && (i._channel = a));
              }
              console.log("is review", i.isReview);
            }
            return i;
          }
          return (a(t, e), Object.defineProperty(t.prototype, "channel", {
            get: function() {
              return this._channel;
            },
            enumerable: !1,
            configurable: !0,
          }), Object.defineProperty(t.prototype, "scene", {
            get: function() {
              return this._scene;
            },
            enumerable: !1,
            configurable: !0,
          }), Object.defineProperty(t.prototype, "remote_review", {
            set: function(e) {
              this._remote_review = e;
            },
            enumerable: !1,
            configurable: !0,
          }), Object.defineProperty(t.prototype, "isReview", {
            get: function() {
              return (!!this._remote_review || (!this._channel && this._is_review));
            },
            enumerable: !1,
            configurable: !0,
          }), t);
        })(cc.EventTarget))()), cc._RF.pop());
      };
