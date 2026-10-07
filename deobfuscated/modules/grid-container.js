// module: grid-container
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a6d25c/oFxFYJ8CtuOVMkwM", "grid-container");
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
                (t.cellSize = 64),
                (t.columns = 8),
                (t.rows = 8),
                (t.cellPrefab = null),
                (t.gridMatrix = []), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                (this.initGrid(), this.createGridVisual());
              }),
              (t.prototype.initGrid = function() {
                this.gridMatrix = new Array(this.rows);
                for (var e = 0; e < this.rows; e++) this.gridMatrix[e] = new Array(this.columns).fill(!1);
              }),
              (t.prototype.createGridVisual = function() {
                if (this.cellPrefab) {
                  this.node.removeAllChildren();
                  for (var e = 0; e < this.rows; e++)
                    for (var t = 0; t < this.columns; t++) {
                      var i = cc.instantiate(this.cellPrefab);
                      (i.setAnchorPoint(cc.v2(0.5, 0.5)),
                        (i.parent = this.node), i.setPosition(
                          (t - this.columns / 2 + 0.5) * this.cellSize,
                          (e - this.rows / 2 + 0.5) * this.cellSize, ));
                    }
                }
              }),
              (t.prototype.checkFit = function(e, t) {
                var i = this.worldToGrid(e);
                console.log("checkFit", e, [i.x, i.y]);
                for (var n = 0, a = t; n < a.length; n++) {
                  var o = a[n],
                    r = i.x + o[0],
                    s = i.y + o[1];
                  if (r < 0 || r >= this.columns || s < 0 || s >= this.rows || this.gridMatrix[s][r]) return !1;
                }
                return !0;
              }),
              (t.prototype.addItem = function(e, t) {
                var i = this.worldToGrid(e);
                console.log("addItem", e, i);
                for (var n = 0, a = t; n < a.length; n++) {
                  var o = a[n],
                    r = i.x + o[0],
                    s = i.y + o[1];
                  this.gridMatrix[s][r] = !0;
                }
                return i;
              }),
              (t.prototype.removeItem = function(e, t) {
                var i = this.worldToGrid(e);
                console.log("removeItem", e, i);
                for (var n = 0, a = t; n < a.length; n++) {
                  var o = a[n],
                    r = i.x + o[0],
                    s = i.y + o[1];
                  this.gridMatrix[s][r] = !1;
                }
              }),
              (t.prototype.removeItemBuyGridPos = function(e, t) {
                console.log("removeItemByGridPos", e);
                for (var i = 0, n = t; i < n.length; i++) {
                  var a = n[i],
                    o = e.x + a[0],
                    r = e.y + a[1];
                  this.gridMatrix[r][o] = !1;
                }
              }),
              (t.prototype.worldToGrid = function(e) {
                var t = this.node.convertToNodeSpaceAR(e);
                return (console.log("worldToGrid", t.x / this.cellSize + this.columns / 2 - 0.5, t.y / this.cellSize + this.rows / 2 - 0.5, ), cc.v2(Math.round(t.x / this.cellSize + this.columns / 2 - 0.5), Math.round(t.y / this.cellSize + this.rows / 2 - 0.5), ));
              }),
              (t.prototype.highlightCells = function(e, t, i) {
                var n = this.worldToGrid(e);
                this.resetHighlight();
                for (var a = 0, o = t; a < o.length; a++) {
                  var r = o[a],
                    s = n.x + r[0],
                    c = n.y + r[1],
                    l = this.getCellNode(s, c);
                  if (l) {
                    var d = l.getChildByName("Sprite").getComponent(cc.Sprite);
                    d && (d.node.color = i ? cc.Color.GREEN : cc.Color.RED);
                  }
                }
              }),
              (t.prototype.resetHighlight = function() {
                this.node.children.forEach(function(e) {
                  var t = e.getChildByName("Sprite").getComponent(cc.Sprite);
                  t && (t.node.color = cc.Color.WHITE);
                });
              }),
              (t.prototype.getCellNode = function(e, t) {
                return e < 0 || e >= this.columns || t < 0 || t >= this.rows ? null : this.node.children[t * this.columns + e];
              }), o(
                [c({
                  tooltip: "网格单元格大小"
                })], t.prototype, "cellSize", void 0, ), o([c({
                tooltip: "网格列数"
              })], t.prototype, "columns", void 0), o([c({
                tooltip: "网格行数"
              })], t.prototype, "rows", void 0), o(
                [c({
                  type: cc.Prefab,
                  tooltip: "网格单元格预制体"
                })], t.prototype, "cellPrefab", void 0, ), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
