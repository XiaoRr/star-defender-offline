// module: mergeStoneUI
// deps: {"../data/stoneData":"stoneData","../gameData":"gameData","../libppgame/audioMgr":"audioMgr","../playerData":"playerData"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3b470Q6SpBPU6ARdSWpVZsh", "mergeStoneUI");
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
          h = e("../libppgame/audioMgr"),
          u = e("../data/stoneData"),
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.stoneUIPrefab = null),
                (t.stoneArray = null),
                (t.resultStoneArray = null), t);
            }
            return (a(t, e),
              (t.prototype.start = function() {}),
              (t.prototype.initMergeStone = function() {
                ((this.stoneArray = l.default.getCanMergeStone()),
                  (this.resultStoneArray = new Array()), this.refreshMergeStone());
              }),
              (t.prototype.refreshMergeStone = function() {
                var e = this.node.getChildByName("bg").getChildByName("useStone").getChildByName("scrollView").getChildByName("view").getChildByName("content");
                e.removeAllChildren();
                for (var t = 0; t < this.stoneArray.length; t++) {
                  var i = this.stoneArray[t];
                  ((a = cc.instantiate(this.stoneUIPrefab)).getComponent("stoneUI").initStone(i[0], i[1], i[2], i[3]),
                    (a.scale = 0.8), e.addChild(a));
                }
                e.height = 90 * Math.floor((this.stoneArray.length + 4) / 5);
                var n = this.node.getChildByName("bg").getChildByName("resultStone").getChildByName("scrollView").getChildByName("view").getChildByName("content");
                for (n.removeAllChildren(), t = 0; t < this.resultStoneArray.length; t++) {
                  var a;
                  ((i = this.resultStoneArray[t]),
                    (a = cc.instantiate(this.stoneUIPrefab)).getComponent("stoneUI").initStone(i[0], i[1], i[2], i[3]),
                    (a.scale = 0.8), n.addChild(a));
                }
                ((n.height = 90 * Math.floor((this.resultStoneArray.length + 4) / 5)), this.resultStoneArray.length > 0 ? ((this.node.getChildByName("bg").getChildByName("button1").active = !1),
                  (this.node.getChildByName("bg").getChildByName("button2").active = !0)) : ((this.node.getChildByName("bg").getChildByName("button1").active = !0),
                  (this.node.getChildByName("bg").getChildByName("button2").active = !1)));
              }),
              (t.prototype.doMerge = function() {
                (h.default.inst.playAudio("click"), h.default.inst.playAudio("stone"));
                for (var e = [0, 0, 0, 0, 0], t = new Array(), i = 0; i < this.stoneArray.length; i++)
                  (t.push(this.stoneArray[i][4]), e[this.stoneArray[i][2] - 1]++);
                for (d.default.getDataRem(), l.default.subStone(t), this.stoneArray = new Array(), i = 4; i >= 0; i--)
                  for (var n = 0; n < Math.floor(e[i] / 5); n++) {
                    var a = u.default.newRandomStoneWithLevel(i + 2);
                    (l.default.addStoneWithArray(a), this.resultStoneArray.push(a));
                  }
                  (d.default.saveDataRem(), d.default.saveData(), this.refreshMergeStone(), l.default.mainInstance.refreshAll());
              }),
              (t.prototype.closeMerge = function() {
                (h.default.inst.playAudio("close"), (this.node.active = !1));
              }), o([c(cc.Prefab)], t.prototype, "stoneUIPrefab", void 0), o([s], t));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
