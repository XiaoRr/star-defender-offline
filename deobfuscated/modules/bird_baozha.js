// module: bird_baozha
// deps: {"./battleResMgr":"battleResMgr","./battleScene":"battleScene"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f42a4M01CZMfo9hSzBmWTKT", "bird_baozha");
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
        var r = e("./battleResMgr"),
          s = e("./battleScene"),
          c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.atlas = null),
                (t.sprite = null),
                (t._bird_type = 0),
                (t._anim_name = ""),
                (t._sps = null),
                (t._sprite_index = 0),
                (t._sprite_play_dt = 0), t);
            }
            return (a(t, e),
              (t.prototype.playEffect = function(e, t, i) {
                if (
                  (void 0 === t && (t = "baozha"), void 0 === i && (i = 1),
                    (this._sprite_index = 0),
                    (this._sprite_play_dt = 0),
                    (this.node.scale = i), this._bird_type != e || this._anim_name != t)) {
                  ((this._bird_type = e),
                    (this._anim_name = t),
                    (this._sps = new Array()));
                  var n = 5 == this._bird_type ? 10 : 10 == this._bird_type ? 9 : 8;
                  if ("baozha" == t)
                    for (var a = 0; a < n; a++) this._sps.push(this.atlas.getSpriteFrame(t + (this._bird_type < 10 ? "0" + this._bird_type : "" + this._bird_type) + "_0" + a, ), );
                  else
                    for (a = 0; a < n; a++) this._sps.push(this.atlas.getSpriteFrame(t + "_0" + a));
                }
                this.sprite.spriteFrame = this._sps[this._sprite_index];
              }),
              (t.prototype.start = function() {}),
              (t.prototype.update = function(e) {
                if (s.default.inst.isRunning && this._sprite_index >= 0 && ((this._sprite_play_dt += e * s.default.inst.game_speed), this._sprite_play_dt >= 0.1)) {
                  if (
                    (this._sprite_index++,
                      (this.sprite.spriteFrame = this._sps[this._sprite_index]), !this.sprite.spriteFrame)) return (
                    (this._sprite_index = -1), void r.default.releaseBirdBaozha(this.node));
                  this._sprite_play_dt -= 0.1;
                }
              }), o([d(cc.SpriteAtlas)], t.prototype, "atlas", void 0), o([d(cc.Sprite)], t.prototype, "sprite", void 0), o([l], t));
          })(cc.Component);
        ((i.default = h), cc._RF.pop());
      };
