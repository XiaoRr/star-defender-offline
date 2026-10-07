// module: buff_icon
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e4734P9GzRElJlc7oHk9YBG", "buff_icon");
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
          l = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.label = null),
                (t.bird_icons = []),
                (t.icon = null),
                (t.icon_label = null),
                (t.sprite = null),
                (t.box_sps = []),
                (t.icon_boss_damage = null),
                (t.icon_extra_egg = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.show = function(e) {
                var t = e.enhance.birdType;
                ((this.sprite.spriteFrame = this.box_sps[e.quality - 1]), t ? ((this.icon.spriteFrame = this.bird_icons[t - 1]),
                  (this.icon_label.node.active = !1),
                  (this.label.string = e.enhance.brief + "↑"),
                  (this.icon.node.scale = 0.35)) : "boss_damage" == e.enhance.type ? ((this.icon.spriteFrame = this.icon_boss_damage),
                  (this.icon.node.scale = 0.35),
                  (this.icon_label.node.active = !1),
                  (this.label.string = e.enhance.brief + "↑")) : "extra_egg" == e.enhance.type ? ((this.icon.spriteFrame = this.icon_extra_egg),
                  (this.icon.node.scale = 1),
                  (this.icon_label.node.active = !1),
                  (this.label.string = e.enhance.brief + "+")) : ((this.icon.spriteFrame = null),
                  (this.icon_label.node.active = !0),
                  (this.icon_label.string = e.enhance.brief),
                  (this.label.string = "↑")));
              }), o([c(cc.Label)], t.prototype, "label", void 0), o([c([cc.SpriteFrame])], t.prototype, "bird_icons", void 0), o([c(cc.Sprite)], t.prototype, "icon", void 0), o([c(cc.Label)], t.prototype, "icon_label", void 0), o([c(cc.Sprite)], t.prototype, "sprite", void 0), o([c([cc.SpriteFrame])], t.prototype, "box_sps", void 0), o([c(cc.SpriteFrame)], t.prototype, "icon_boss_damage", void 0), o([c(cc.SpriteFrame)], t.prototype, "icon_extra_egg", void 0), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
