// module: arenaItemUI
// deps: {"../libppgame/libcocos":"libcocos","./arenaUI":"arenaUI"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8a97d6e90VOjbL6f8vOQ5/m", "arenaItemUI");
        var n,
          a,
          o = (this && this.__extends) || ((n = function(e, t) {
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
          r = (this && this.__decorate) || function(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          };
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.game_headicons = void 0));
        var s = e("../libppgame/libcocos"),
          c = e("./arenaUI"),
          l = cc._decorator,
          d = l.ccclass,
          h = l.property;
        i.game_headicons = (((a = {})[1] = "starcraft/ui/army/a1"),
          (a[2] = "starcraft/ui/army/a2"),
          (a[3] = "starcraft/ui/army/a3"),
          (a[4] = "starcraft/ui/army/a4"),
          (a[5] = "starcraft/ui/army/a5"),
          (a[6] = "starcraft/ui/army/a6"),
          (a[7] = "starcraft/ui/army/a7"),
          (a[8] = "starcraft/ui/army/a8"),
          (a[9] = "starcraft/ui/army/a9"),
          (a[10] = "starcraft/ui/army/a10"),
          (a[11] = "starcraft/ui/army/a11"),
          (a[12] = "starcraft/ui/army/a12"),
          (a[13] = "starcraft/ui/army/a13"),
          (a[14] = "starcraft/ui/army/a14"),
          (a[15] = "starcraft/ui/army/a15"),
          (a[16] = "starcraft/ui/army/a16"),
          (a[17] = "starcraft/ui/army/a17"),
          (a[18] = "starcraft/ui/army/a18"),
          (a[19] = "starcraft/ui/army/a19"), a);
        var u = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.name_label = null),
              (t.jg_label = null),
              (t.rank_label = null),
              (t.headicon = null),
              (t.jx_icon = null), t);
          }
          return (o(t, e),
            (t.prototype.start = function() {}),
            (t.prototype.setData = function(e) {
              var t = this;
              ((this.name_label.string = e.name || "星际玩家"),
                (this.jg_label.string = e.power),
                (this.jx_icon.spriteFrame = c.default.instance.jx_sp_frames[e.jx - 1]));
              var n = e.headicon || "2";
              "-1" == n && (n = "2");
              var a = i.game_headicons[n];
              a ? s.cocos.loadRes(a, cc.SpriteFrame).then(function(e) {
                e ? (t.headicon.spriteFrame = e) : console.log("can not load spriteFrame", a);
              }).catch(function(e) {
                console.log("fail to load res", a, e);
              }) : s.cocos.load({
                url: "" + n,
                type: "png"
              }).then(function(e) {
                e ? (t.headicon.spriteFrame = new cc.SpriteFrame(e)) : console.log("can not load pic", n);
              }).catch(function(e) {
                console.log("fail to load url", n, e);
              });
            }), r([h(cc.Label)], t.prototype, "name_label", void 0), r([h(cc.Label)], t.prototype, "jg_label", void 0), r([h(cc.Label)], t.prototype, "rank_label", void 0), r([h(cc.Sprite)], t.prototype, "headicon", void 0), r([h(cc.Sprite)], t.prototype, "jx_icon", void 0), r([d], t));
        })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
