// module: jx_levelup
// deps: {"../libppgame/libcocos":"libcocos","../ui/arenaUI":"arenaUI"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f68fcwlRp1G+LiWz1043Fuh", "jx_levelup");
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
        var r = e("../libppgame/libcocos"),
          s = e("../ui/arenaUI"),
          c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.count_label = null),
                (t.jx_sprite = null),
                (t.jx_name_label = null), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                var e = this;
                this.node.getChildByName("back").on("click", function() {
                  e.node.active = !1;
                });
              }),
              (t.prototype.start = function() {}),
              (t.prototype.show = function(e, t) {
                var i = this;
                ((this.jx_name_label.string = s.jx_names[e - 1]),
                  (this.count_label.string = t.toString()), r.cocos.loadRes("arena/atlas/icon" + e, cc.SpriteFrame).then(function(e) {
                    i.jx_sprite.node.isValid && (i.jx_sprite.spriteFrame = e);
                  }));
              }), o([d(cc.Label)], t.prototype, "count_label", void 0), o([d(cc.Sprite)], t.prototype, "jx_sprite", void 0), o([d(cc.Label)], t.prototype, "jx_name_label", void 0), o([l], t));
          })(cc.Component);
        ((i.default = h), cc._RF.pop());
      };
