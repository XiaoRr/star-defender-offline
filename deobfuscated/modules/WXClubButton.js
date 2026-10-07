// module: WXClubButton
// deps: {"./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c50861lUKhFc60haJs9vwTA", "WXClubButton");
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
        var r = e("./libwechat"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t._wxWidget = null), (t.sprite = null), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                if (
                  (console.log("wx clue button on load"), cc.sys.platform == cc.sys.WECHAT_GAME)) {
                  if ("undefined" != typeof tt || !0 === cc.is_qq) return void(this.node.active = !1);
                  if (r.wechat.is_jd_platform) return void(this.node.active = !1);
                  var e = this.node.getContentSize(),
                    t = cc.director.getScene().getChildByName("Canvas"),
                    i = cc.view.getFrameSize(),
                    n = this.node.parent.convertToWorldSpaceAR(cc.v2(this.node.x + (0.5 - this.node.anchorX) * this.node.width, this.node.y + (0.5 - this.node.anchorY) * this.node.height, ), ),
                    a = (n.x / t.width) * i.width,
                    o = ((t.height - n.y) / t.height) * i.height,
                    s = (e.width / t.width) * i.width,
                    c = (e.height / t.height) * i.height,
                    l = a - s / 2,
                    d = o - c / 2,
                    h = this.sprite || this.node.getComponent(cc.Sprite),
                    u = h && h.spriteFrame && h.spriteFrame._texture ? h.spriteFrame._texture.nativeUrl : null;
                  (u ? console.log("texture", u) : (u = ""),
                    (this._wxWidget = wx.createGameClubButton({
                      image: u,
                      style: {
                        left: l,
                        top: d,
                        width: s,
                        height: c
                      },
                      hasRedDot: !0,
                    })), this._wxWidget.onTap(function() {
                      console.log("wxq on tap");
                    }.bind(this), ));
                }
                (cc.sys.platform == cc.sys.OPPO_GAME && (this.node.active = !1), console.log("wx clue button on load #########"));
              }),
              (t.prototype.onEnable = function() {
                this.onShow();
              }),
              (t.prototype.onShow = function() {
                this._wxWidget && this._wxWidget.show();
              }),
              (t.prototype.onDisable = function() {
                this.onHide();
              }), Object.defineProperty(t.prototype, "isShow", {
                get: function() {
                  return this._wxWidget && this._wxWidget.isShow;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onHide = function() {
                this._wxWidget && this._wxWidget.hide();
              }),
              (t.prototype.onDestroy = function() {
                this._wxWidget && this._wxWidget.destroy();
              }), o([l(cc.Sprite)], t.prototype, "sprite", void 0), o([c], t));
          })(cc.Component);
        ((i.default = d), cc._RF.pop());
      };
