// module: mail_item
// deps: {"../libppgame/audioMgr":"audioMgr","./mail":"mail","./virtual_view_item":"virtual_view_item"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2f72egfjQ5HeqZzumD7QRxD", "mail_item");
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
        var r = e("../libppgame/audioMgr"),
          s = e("./mail"),
          c = e("./virtual_view_item"),
          l = cc._decorator,
          d = l.ccclass,
          h = l.property;

        function u(e) {
          var t = (new Date().getTime() / 1e3 - e) / 3600;
          if (t >= 24) {
            var i = Math.floor(t / 24);
            return i >= 7 ? "1周前" : i + "天前";
          }
          return t >= 1 ? Math.floor(t) + "小时前" : Math.ceil(60 * t) + "分钟前";
        }
        var p = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.title_label = null),
              (t.time_label = null),
              (t.icon_sprite = null),
              (t.box_sprite = null),
              (t.sps = []),
              (t.flag_sps = []),
              (t.flag_sprite = null),
              (t._mid = 0),
              (t._readed = !1), t);
          }
          return (a(t, e),
            (t.prototype.onLoad = function() {
              var e = this;
              this.node.on("click", function() {
                (r.default.inst.playAudio("starcraft/click"), s.default.inst.showMail(e._mid, e), 0 == e.data.attached && 0 == e.data.readed && (s.default.readMail(e._mid),
                  (e.data.readed = 1),
                  (e.readed = !0)));
              });
            }),
            (t.prototype.start = function() {}),
            (t.prototype.show = function(e) {
              ((this.title_label.string = e.detail[0]),
                (this.readed = 2 == e.attached || 1 == e.readed),
                (this.time_label.string = "" + u(e.time)),
                (this._mid = e.id),
                (this.data = e), 2 == e.attached ? (this.flag_sprite.spriteFrame = this.flag_sps[0]) : 1 == e.attached && e.time < new Date().getTime() / 1e3 - 86400 ? (this.flag_sprite.spriteFrame = this.flag_sps[1]) : (this.flag_sprite.spriteFrame = null));
            }), Object.defineProperty(t.prototype, "readed", {
              get: function() {
                return this._readed;
              },
              set: function(e) {
                ((this._readed = e),
                  (this.icon_sprite.spriteFrame = this.sps[e ? 1 : 0]),
                  (this.box_sprite.spriteFrame = this.sps[e ? 3 : 2]));
              },
              enumerable: !1,
              configurable: !0,
            }), o([h(cc.Label)], t.prototype, "title_label", void 0), o([h(cc.Label)], t.prototype, "time_label", void 0), o([h(cc.Sprite)], t.prototype, "icon_sprite", void 0), o([h(cc.Sprite)], t.prototype, "box_sprite", void 0), o([h([cc.SpriteFrame])], t.prototype, "sps", void 0), o([h([cc.SpriteFrame])], t.prototype, "flag_sps", void 0), o([h(cc.Sprite)], t.prototype, "flag_sprite", void 0), o([d], t));
        })(c.default);
        ((i.default = p), cc._RF.pop());
      };
