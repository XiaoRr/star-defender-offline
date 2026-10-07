// module: stoneUI
// deps: {"../gameData":"gameData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ddc11SGX0FPe4/VRt6ucd+8", "stoneUI");
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
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bg = []),
                (t.stoneIcon = []),
                (t.type = 0),
                (t.pos = 0),
                (t.level = 0),
                (t.value = 0),
                (t.status = 0), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, );
              }),
              (t.prototype.initStone = function(e, t, i, n) {
                (void 0 === n && (n = 0),
                  (this.type = e),
                  (this.pos = t),
                  (this.level = i),
                  (this.value = n),
                  (this.node.getChildByName("itembg").getComponent(cc.Sprite).spriteFrame = this.bg[i - 1]),
                  (this.node.getChildByName("itembg").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.stoneIcon[6 * (t - 1) + (i - 1)]),
                  (this.node.getChildByName("itembg").getChildByName("red").active = !1),
                  (this.node.getChildByName("choice").active = !1));
              }),
              (t.prototype.setIsChoose = function(e) {
                this.node.getChildByName("choice").active = !!e;
              }),
              (t.prototype.setIsRed = function(e) {
                this.node.getChildByName("itembg").getChildByName("red").active = !!e;
              }),
              (t.prototype.setIsLock = function(e) {
                this.node.getChildByName("itembg").getChildByName("lock").active = !!e;
              }),
              (t.prototype.onTouchEnd = function() {
                l.default.mainInstance && l.default.mainInstance.openStoneInfo(this.type, this.pos, this.level, this.value, this.status, );
              }), o([c([cc.SpriteFrame])], t.prototype, "bg", void 0), o([c([cc.SpriteFrame])], t.prototype, "stoneIcon", void 0), o([s], t));
          })(cc.Component);
        ((i.default = d), cc._RF.pop());
      };
