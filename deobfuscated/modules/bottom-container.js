// module: bottom-container
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f5bd6TFJqpM/60tgncbDnd3", "bottom-container");
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
                (t.itemPrefab = null),
                (t.maxScale = 0.8),
                (t.minScale = 0.5),
                (t.horizontalSpacing = 20),
                (t.verticalSpacing = 20),
                (t.items = []), t);
            }
            return (a(t, e),
              (t.prototype.addItem = function(e) {
                (console.log("===================== bottom container add item ======================", ), this.node.addChild(e), this.items.push(e), this.arrangeItems());
              }),
              (t.prototype.removeItem = function(e) {
                (this.items.splice(this.items.indexOf(e), 1), e.removeFromParent(), this.arrangeItems());
              }),
              (t.prototype.arrangeItems = function() {
                var e = this;
                if (
                  (console.log("===================== bottom container arrange item ======================", ), 0 !== this.items.length)) {
                  var t = 0;
                  (this.items.forEach(function(i) {
                      t += i.width + e.horizontalSpacing;
                    }),
                    (t -= this.horizontalSpacing));
                  var i = 1;
                  t > this.node.width && (i = Math.max(this.minScale, Math.min(this.maxScale, this.node.width / t), ));
                  var n = -this.node.width / 2;
                  this.items.forEach(function(t) {
                    ((t.scale = i),
                      (n += (t.width * i + e.horizontalSpacing) / 2),
                      (t.position = cc.v3(n, 0)),
                      (n += (t.width * i + e.horizontalSpacing) / 2));
                  });
                }
              }), o(
                [c({
                  type: cc.Prefab,
                  tooltip: "Item预制体"
                })], t.prototype, "itemPrefab", void 0, ), o(
                [c({
                  tooltip: "最大缩放比例"
                })], t.prototype, "maxScale", void 0, ), o(
                [c({
                  tooltip: "最小缩放比例"
                })], t.prototype, "minScale", void 0, ), o(
                [c({
                  tooltip: "水平间距"
                })], t.prototype, "horizontalSpacing", void 0, ), o(
                [c({
                  tooltip: "垂直间距"
                })], t.prototype, "verticalSpacing", void 0, ), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
