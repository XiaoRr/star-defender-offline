// module: bufferNodeUI
// deps: {"../data/bufferData":"bufferData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f9ce988qIlPRb2UjPQ5Y+HK", "bufferNodeUI");
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
          d = e("../playerData"),
          h = e("../data/bufferData"),
          u = e("../libppgame/audioMgr"),
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.lockPic = []),
                (t.unlockPic = []),
                (t.activePic = []),
                (t.type = 0),
                (t.status = 0),
                (t.index = 0), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, );
              }),
              (t.getBufferStatus = function(e) {
                return 2 == d.default.bufferArray[e] ? 2 : 0 == e ? 1 : e % 4 == 0 ? 2 == d.default.bufferArray[e - 2] ? 1 : 0 : e % 4 == 1 || e % 4 == 2 ? 2 == d.default.bufferArray[e - 1] ? 1 : 0 : 3 == e ? 2 == d.default.bufferArray[e - 1] ? 1 : 0 : 2 == d.default.bufferArray[e - 1] && 2 == d.default.bufferArray[e - 4] ? 1 : 0;
              }),
              (t.prototype.initBufferUI = function(e) {
                ((this.index = e),
                  (this.type = Number(h.default.getTypeWithIndex(e))),
                  (this.status = i.getBufferStatus(e)));
                var t;
                ((t = 0 == this.status ? this.lockPic[this.type - 1] : 1 == this.status ? this.unlockPic[this.type - 1] : this.activePic[this.type - 1]),
                  (this.node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t),
                  (this.node.getChildByName("text").getComponent(cc.Label).string = h.default.getDesWithIndex(e) + ""));
              }),
              (t.prototype.onTouchEnd = function() {
                l.default.mainInstance && (1 == this.status ? l.default.mainInstance.openBufferInfo(this.index) : 0 == this.status ? (u.default.inst.playAudio("starcraft/click"), l.default.mainInstance.popTips("该位置还未解锁")) : (u.default.inst.playAudio("starcraft/click"), l.default.mainInstance.popTips("该位置已激活")));
              }),
              (t.canUpgradeBuffer = function(e) {
                if ((void 0 === e && (e = -1), -1 != e)) {
                  if (1 == i.getBufferStatus(e)) {
                    var t = Number(h.default.BufferConfig[e][4]);
                    return (d.default.getItemNum(1) >= 100 * t && d.default.getItemNum(7) >= t);
                  }
                  return !1;
                }
                for (var n = 0; n < 72; n++)
                  if (1 == i.getBufferStatus(n) && ((t = Number(h.default.BufferConfig[n][4])), d.default.getItemNum(1) >= 100 * t && d.default.getItemNum(7) >= t)) return !0;
                return !1;
              }), o([c([cc.SpriteFrame])], t.prototype, "lockPic", void 0), o([c([cc.SpriteFrame])], t.prototype, "unlockPic", void 0), o([c([cc.SpriteFrame])], t.prototype, "activePic", void 0),
              (i = o([s], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
