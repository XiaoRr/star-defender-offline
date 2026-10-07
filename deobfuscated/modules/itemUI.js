// module: itemUI
// deps: {"../data/itemData":"itemData","../gameData":"gameData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "413a91+vyxAG6WRl3htyksk", "itemUI");
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
          d = e("../data/itemData"),
          h = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bg = []),
                (t.itemIcon = []),
                (t.type = 0),
                (t.num = 0), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, );
              }),
              (t.prototype.initItem = function(e, t) {
                (void 0 === t && (t = 0),
                  (this.type = parseInt(e)),
                  (this.num = t));
                var i = d.default.getItemIndexWithType(e);
                ((this.node.getChildByName("itembg").getComponent(cc.Sprite).spriteFrame = this.bg[Number(d.default.ItemConfig[i][3]) - 1]),
                  (this.node.getChildByName("itembg").getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.itemIcon[i]),
                  (this.node.getChildByName("itembg").getChildByName("type1").active = !1),
                  (this.node.getChildByName("itembg").getChildByName("type2").active = !1), this.type > 200 ? (this.node.getChildByName("itembg").getChildByName("type2").active = !0) : this.type > 100 && (this.node.getChildByName("itembg").getChildByName("type1").active = !0), 0 == t ? (this.node.getChildByName("itembg").getChildByName("num").active = !1) : ((this.node.getChildByName("itembg").getChildByName("num").active = !0),
                    (this.node.getChildByName("itembg").getChildByName("num").getComponent(cc.Label).string = t + "")));
              }),
              (t.prototype.doubleNum = function() {
                ((this.num *= 2), 0 == this.num ? (this.node.getChildByName("itembg").getChildByName("num").active = !1) : ((this.node.getChildByName("itembg").getChildByName("num").active = !0),
                  (this.node.getChildByName("itembg").getChildByName("num").getComponent(cc.Label).string = this.num + "")));
              }),
              (t.prototype.onTouchEnd = function() {
                l.default.mainInstance && l.default.mainInstance.openItemInfo(this.type);
              }), o([c([cc.SpriteFrame])], t.prototype, "bg", void 0), o([c([cc.SpriteFrame])], t.prototype, "itemIcon", void 0), o([s], t));
          })(cc.Component);
        ((i.default = h), cc._RF.pop());
      };
