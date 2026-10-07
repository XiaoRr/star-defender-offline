// module: enemyUI
// deps: {"../data/stageData":"stageData","../gameData":"gameData","../libppgame/libcocos":"libcocos"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a38f9GMG21N7oybSgizIUNh", "enemyUI");
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
          d = e("../data/stageData"),
          h = e("../libppgame/libcocos"),
          u = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.bg = []), (t.type = 0), (t.isBoss = !1), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, );
              }),
              (t.prototype.initEnemy = function(e) {
                var t = this;
                this.type = e;
                var i = d.default.LevelEnemyType,
                  n = 0;
                if (d.default.LevelBossType.indexOf(e) >= 0)
                  ((this.isBoss = !0), (n = 4));
                else
                  for (var a = 0; a < 3; a++)
                    if (i[a].indexOf(e) >= 0) {
                      n = a + 1;
                      break;
                    }
                    ((this.node.getChildByName("itembg").getComponent(cc.Sprite).spriteFrame = this.bg[n - 1]), this.node.getChildByName("itembg").getChildByName("icon").removeAllChildren(), h.cocos.loadRes("starcraft/enemy/e" + e, cc.Prefab).then(function(i) {
                      var n = cc.instantiate(i);
                      (n.getComponent("starEnemy").initEnemy(e, 0, !0), t.node.getChildByName("itembg").getChildByName("icon").addChild(n));
                    }));
              }),
              (t.prototype.onTouchEnd = function() {
                l.default.mainInstance.openEnemyInfo(this.type, this.isBoss);
              }), o([c([cc.SpriteFrame])], t.prototype, "bg", void 0), o([s], t));
          })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
