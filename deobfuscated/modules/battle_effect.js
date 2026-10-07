// module: battle_effect
// deps: {"./battleScene":"battleScene"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "836ecbHHI9B2IjH4M576zor", "battle_effect");
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
        var r = e("./battleScene"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.sps = []),
                (t.sps_1 = []),
                (t.sp = null),
                (t.loop = !1),
                (t.frames_every_sec = 10),
                (t.auto_play = !0),
                (t.auto_hide = !1),
                (t.playing = !1),
                (t.frame_index = 0),
                (t.frame_time = 1 / t.frames_every_sec),
                (t.hp = 1),
                (t.dt = t.frame_time),
                (t.started = !1),
                (t.need_to_play = !1),
                (t.callback = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                if (
                  ((this.started = !0), this.auto_play || this.need_to_play)) {
                  if (this.sps.length < 1 || !this.sp) return void(this.need_to_play = !1);
                  (this.play(this.need_to_play ? this.callback : null),
                    (this.need_to_play = !1));
                }
              }),
              (t.prototype.playSps1 = function() {
                ((this.sps = this.sps_1),
                  (this.loop = !1),
                  (this.frame_index = 0));
              }),
              (t.prototype.play = function(e) {
                (void 0 === e && (e = null),
                  (this.callback = e),
                  (this.playing && this.loop) || ((this.playing = !0),
                    (this.frame_index = 0),
                    (this.frame_time = 1 / this.frames_every_sec),
                    (this.dt = 0),
                    (this.sp.spriteFrame = this.sps[0]),
                    (this.callback = e)));
              }),
              (t.prototype.randomStart = function() {
                ((this.frame_index = Math.floor(Math.random() * this.sps.length, )),
                  (this.sp.spriteFrame = this.sps[this.frame_index]),
                  (this.dt = Math.random() * this.frame_time));
              }),
              (t.prototype.turn = function(e) {
                this.playing = !!e;
              }),
              (t.prototype.update = function(e) {
                if (r.default.inst.isRunning && this.playing && ((this.dt += e * r.default.inst.game_speed), this.dt >= this.frame_time)) {
                  if (this.frame_index >= this.sps.length)
                    if (this.loop) this.frame_index = 0;
                    else if (
                    ((this.frame_index = this.sps.length - 1), this.auto_hide)) return (
                    (this.playing = !1),
                    (this.node.active = !1), void this.node.destroy());
                  ((this.dt -= this.frame_time),
                    (this.sp.spriteFrame = this.sps[this.frame_index++]));
                }
              }), o([l([cc.SpriteFrame])], t.prototype, "sps", void 0), o([l([cc.SpriteFrame])], t.prototype, "sps_1", void 0), o([l(cc.Sprite)], t.prototype, "sp", void 0), o([l], t.prototype, "loop", void 0), o([l], t.prototype, "frames_every_sec", void 0), o([l], t.prototype, "auto_play", void 0), o([l], t.prototype, "auto_hide", void 0), o([c], t));
          })(cc.Component);
        ((i.default = d), cc._RF.pop());
      };
