// module: dragable
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3f791Kpe65NjrRwaG2PgLrP", "dragable");
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
                (t.boundary = new cc.Rect()),
                (t.dragStart = []),
                (t.drag = []),
                (t.dragEnd = []),
                (t.currentContainer = null),
                (t.targetContainer = null),
                (t.shapeData = null),
                (t.gridOffset = cc.v2(0, 0)),
                (t.cellSize = 66),
                (t.deployed = null),
                (t.refresh_pos = null),
                (t.isDragging = !1),
                (t.lastPos = cc.v2(0, 0)),
                (t.boundaryRect = new cc.Rect()),
                (t.gridePos = cc.v2(0, 0)),
                (t._start_pos = null),
                (t._start_zIndex = 0),
                (t._can_drag = !0), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                ((this.boundaryRect = new cc.Rect(this.boundary.x, this.boundary.y, this.boundary.width, this.boundary.height, )), this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, ), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, ), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, ), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, ));
              }),
              (t.prototype.updateZIndex = function() {
                this.deployed ? (this.node.zIndex = 100 * (10 - this.deployed.row) + this.deployed.col) : (this.node.zIndex = 1320 + this.node.x);
              }),
              (t.prototype.start = function() {}),
              (t.prototype.setCanDrag = function(e) {
                this._can_drag = e;
              }),
              (t.prototype.getCanDrag = function() {
                return this._can_drag;
              }),
              (t.prototype.onTouchStart = function(e) {
                this._can_drag && ((this.isDragging = !0),
                  (this.lastPos = e.getLocation()),
                  (this._start_pos = this.node.getPosition()),
                  (this._start_zIndex = this.node.zIndex),
                  (this.node.zIndex = 9999), cc.Component.EventHandler.emitEvents(this.dragStart, this.node, e, ), e.stopPropagation());
              }),
              (t.prototype.onTouchMove = function(e) {
                if (this.isDragging) {
                  var t = e.getLocation(),
                    i = t.sub(this.lastPos),
                    n = this.node.position.add(cc.v3(i.x, i.y));
                  if (
                    (this.boundaryRect.width > 0 && this.boundaryRect.height > 0 && ((n.x = cc.misc.clampf(n.x, this.boundaryRect.x, this.boundaryRect.x + this.boundaryRect.width, )),
                        (n.y = cc.misc.clampf(n.y, this.boundaryRect.y, this.boundaryRect.y + this.boundaryRect.height, ))), this.node.setPosition(n),
                      (this.lastPos = t), this.targetContainer && this.shapeData)) {
                    var a = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO).add(cc.v3(this.gridOffset.x * this.cellSize, this.gridOffset.y * this.cellSize, ), ),
                      o = this.targetContainer.checkFit(a, this.shapeData.json);
                    this.targetContainer.highlightCells(a, this.shapeData.json, o, );
                  }
                  (cc.Component.EventHandler.emitEvents(this.drag, this.node, e, ), e.stopPropagation());
                }
              }),
              (t.prototype.onTouchEnd = function(e) {
                if (this._can_drag) {
                  if (
                    ((this.isDragging = !1), this.targetContainer && this.shapeData)) {
                    this.targetContainer.resetHighlight();
                    var t = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO).add(cc.v3(this.gridOffset.x * this.cellSize, this.gridOffset.y * this.cellSize, ), );
                    this.targetContainer.checkFit(t, this.shapeData.json) ? (this.snapToGrid(t), this.currentContainer && this.currentContainer.removeItemBuyGridPos(this.gridePos, this.shapeData.json, ),
                      (this.gridePos = this.targetContainer.addItem(t, this.shapeData.json, )),
                      (this.currentContainer = this.targetContainer),
                      (this.node.zIndex = 1e3 * this.gridePos.y + this.gridePos.x)) : (console.log("checkFit false"),
                      (this.node.zIndex = this._start_zIndex), cc.tween(this.node).to(0.2, {
                        position: this._start_pos
                      }, {
                        easing: "sineOut"
                      }, ).start());
                  }
                  (cc.Component.EventHandler.emitEvents(this.dragEnd, this.node, e, ), e.stopPropagation());
                }
              }),
              (t.prototype.setContainer = function(e) {
                this.currentContainer = e;
              }),
              (t.prototype.checkCollision = function() {
                if (!this.targetContainer || !this.shapeData) return !1;
                var e = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO).add(cc.v3(this.gridOffset.x * this.cellSize, this.gridOffset.y * this.cellSize, ), );
                return this.targetContainer.checkFit(e, this.shapeData.json);
              }),
              (t.prototype.snapToGrid = function(e) {
                if ((void 0 === e && (e = null), this.targetContainer)) {
                  var t = e || this.node.convertToWorldSpaceAR(cc.Vec3.ZERO).add(cc.v3(this.gridOffset.x * this.cellSize, this.gridOffset.y * this.cellSize, ), ),
                    i = this.targetContainer.worldToGrid(t),
                    n = cc.v3(
                      (i.x - this.targetContainer.columns / 2 + 0.5 - this.gridOffset.x) * this.targetContainer.cellSize,
                      (i.y - this.targetContainer.rows / 2 + 0.5 - this.gridOffset.y) * this.targetContainer.cellSize, 0, ),
                    a = this.targetContainer.node.convertToWorldSpaceAR(n);
                  (console.log("snapToGrid", i.x, i.y, n.x, n.y, i.x - this.targetContainer.columns / 2 + 0.5 - this.gridOffset.x, i.y - this.targetContainer.rows / 2 - this.gridOffset.y, ), cc.tween(this.node).to(0.1, {
                    position: this.node.parent.convertToNodeSpaceAR(a),
                  }).start());
                }
              }), o(
                [c({
                  tooltip: "拖动边界限制"
                })], t.prototype, "boundary", void 0, ), o(
                [
                  c({
                    type: cc.Component.EventHandler,
                    tooltip: "拖动开始事件",
                  }),
                ], t.prototype, "dragStart", void 0, ), o(
                [c({
                  type: cc.Component.EventHandler,
                  tooltip: "拖动中事件"
                })], t.prototype, "drag", void 0, ), o(
                [
                  c({
                    type: cc.Component.EventHandler,
                    tooltip: "拖动结束事件",
                  }),
                ], t.prototype, "dragEnd", void 0, ), o(
                [c({
                  type: cc.Component,
                  tooltip: "当前所属容器"
                })], t.prototype, "currentContainer", void 0, ), o(
                [c({
                  type: cc.Component,
                  tooltip: "目标放置容器"
                })], t.prototype, "targetContainer", void 0, ), o(
                [c({
                  type: cc.JsonAsset,
                  tooltip: "形状定义数据"
                })], t.prototype, "shapeData", void 0, ), o([c({
                visible: !0
              })], t.prototype, "gridOffset", void 0), o(
                [c({
                  tooltip: "网格单元格大小"
                })], t.prototype, "cellSize", void 0, ), o([s], t));
          })(cc.Component);
        ((i.default = l), cc._RF.pop());
      };
