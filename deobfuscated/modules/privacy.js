// module: privacy
// deps: {"./libcocos":"libcocos","./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1f388LsfbNFkp1mKGX8Vkon", "privacy");
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
        var r = e("./libcocos"),
          s = e("./libwechat"),
          c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.privacy_content = null),
                (t.title_label = null),
                (t.privacy_node = null),
                (t.protocol_node = null),
                (t._confirm_resolve = null), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.start = function() {
                var e = this;
                (this.node.getChildByName("PrivacyView").getChildByName("btn_yes").on("click", function() {
                  (cc.sys.localStorage.setItem("pp-privacy", 1), e.node.removeFromParent(), e._confirm_resolve && e._confirm_resolve(1));
                }), this.node.getChildByName("PrivacyView").getChildByName("btn_not").on("click", function() {
                  qq.showModal({
                    title: "是否不同意？",
                    content: "不同意则无法继续游戏，直接退出，您要这么做吗？",
                    success: function(e) {
                      e.confirm ? qq.exitMiniProgram() : e.cancel;
                    },
                  });
                }), this.node.getChildByName("PrivacyView").getChildByName("btn_detail").on("click", function() {
                  ((e.privacy_content.active = !0),
                    (e.protocol_node.active = !0),
                    (e.privacy_node.active = !1),
                    (e.title_label.string = "用户协议"));
                }), this.node.getChildByName("PrivacyView").getChildByName("btn_detail2").on("click", function() {
                  ((e.privacy_content.active = !0),
                    (e.protocol_node.active = !1),
                    (e.privacy_node.active = !0),
                    (e.title_label.string = "隐私政策"));
                }), this.privacy_content.getChildByName("btn_close").on("click", function() {
                  ((e.privacy_content.active = !1), e.node.getChildByName("PrivacyView").active || e.node.removeFromParent());
                }));
              }),
              (t.show = function(e) {
                return (console.log("show privacy", cc.sys.localStorage.getItem("pp-privacy"), ), "undefined" == typeof qq || cc.sys.localStorage.getItem("pp-privacy") ? Promise.resolve(null) : new Promise(function(t) {
                  r.cocos.loadRes("privacy/privacy", cc.Prefab).then(function(i) {
                    var n = cc.instantiate(i);
                    (e.addChild(n), t(n));
                  });
                }));
              }),
              (t.confirm = function(e) {
                return (console.log("show privacy", cc.sys.localStorage.getItem("pp-privacy"), ), "undefined" == typeof qq || cc.sys.localStorage.getItem("pp-privacy") ? Promise.resolve(1) : new Promise(function(t) {
                  r.cocos.loadRes("privacy/privacy", cc.Prefab).then(function(n) {
                    var a = cc.instantiate(n);
                    (e.addChild(a),
                      (a.getComponent(i)._confirm_resolve = t));
                  });
                }));
              }),
              (t.showPrivacy = function(e) {
                return (console.log("show privacy"), s.wechat.hideBannerAd(), new Promise(function(t) {
                  r.cocos.loadRes("privacy/privacy", cc.Prefab).then(function(n) {
                    var a = cc.instantiate(n);
                    ((a.getChildByName("PrivacyView").active = !1),
                      (a.getChildByName("web").active = !0));
                    var o = a.getComponent(i);
                    ((o.protocol_node.active = !1),
                      (o.privacy_node.active = !0),
                      (o.title_label.string = "隐私政策"), e.addChild(a), t(a));
                  });
                }));
              }),
              (t.showProtocol = function(e) {
                return (s.wechat.hideBannerAd(), new Promise(function(t) {
                  r.cocos.loadRes("privacy/privacy", cc.Prefab).then(function(n) {
                    var a = cc.instantiate(n);
                    ((a.getChildByName("PrivacyView").active = !1),
                      (a.getChildByName("web").active = !0));
                    var o = a.getComponent(i);
                    ((o.protocol_node.active = !0),
                      (o.privacy_node.active = !1),
                      (o.title_label.string = "用户协议"), e.addChild(a), t(a));
                  });
                }));
              }), o([d(cc.Node)], t.prototype, "privacy_content", void 0), o([d(cc.Label)], t.prototype, "title_label", void 0), o([d(cc.Node)], t.prototype, "privacy_node", void 0), o([d(cc.Node)], t.prototype, "protocol_node", void 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = h), cc._RF.pop());
      };
