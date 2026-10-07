// module: bird-grids
// deps: {"./birds":"birds","./dragable":"dragable","./grid-cell":"grid-cell","./refresh-area":"refresh-area"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9341aVPFl9J5p+OQmnKFn8O", "bird-grids");
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
        var r = e("./birds"),
          s = e("./dragable"),
          c = e("./grid-cell"),
          l = e("./refresh-area"),
          d = cc._decorator,
          h = d.ccclass,
          u = d.property,
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.gridPrefab = null),
                (t.gridWidth = 64),
                (t.gridHeight = 64),
                (t.spacing = 4),
                (t.birdsContainer = null),
                (t.minRow = 0),
                (t.maxRow = 3),
                (t.minCol = 0),
                (t.maxCol = 8),
                (t.gridMap = new Map()),
                (t.birdsMap = new Map()),
                (t.blocksMap = new Map()),
                (t.birds = []),
                (t.dashedGrids = new Map()), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                i._inst = this;
              }),
              (t.prototype.setup = function(e, t, i) {
                (console.log("===========setup grid"),
                  (this.birdsContainer = e),
                  (this.minCol = 0),
                  (this.maxCol = i.x - 1),
                  (this.minRow = 0),
                  (this.maxRow = i.y - 1));
                for (var n = (i.x - t.x) / 2; n < (i.x + t.x) / 2; n++)
                  for (var a = Math.floor((i.y - t.y) / 2); a < Math.floor((i.y + t.y) / 2); a++) {
                    var o = n + "," + a;
                    this.gridMap.set(o, {});
                  }
                this.initGrid();
              }),
              (t.prototype.initGrid = function() {
                for (var e = new Map(), t = this.minRow; t <= this.maxRow; t++)
                  for (var i = this.minCol; i <= this.maxCol; i++) {
                    var n = i + "," + t,
                      a = this.gridMap.get(n);
                    if (a)
                      if (a.grid) e.set(n, a);
                      else {
                        var o = cc.instantiate(this.gridPrefab);
                        (o.setPosition(this.getGridPosition(i, t)), this.node.addChild(o),
                          (o.zIndex = 100 * t + i), e.set(n, {
                            grid: o.getComponent(c.default)
                          }));
                      }
                  }
                this.gridMap = e;
              }),
              (t.prototype.getGridPosition = function(e, t) {
                var i = Math.floor((this.minCol + this.maxCol) / 2),
                  n = t - Math.floor((this.minRow + this.maxRow) / 2),
                  a = (e - i) * (this.gridWidth + this.spacing),
                  o = n * (this.gridHeight + this.spacing);
                return cc.v2(a, o);
              }),
              (t.prototype.confirmExpand = function() {
                var e = this;
                (this.blocksMap.forEach(function(t, i) {
                  (t.forEach(function(t) {
                    var i = t.row,
                      n = t.col + "," + i;
                    (e.gridMap.set(n, {}), e.dashedGrids.get(n).grid.destroy(), e.dashedGrids.delete(n));
                  }), i.node.destroy());
                }), this.blocksMap.clear(), this.initGrid());
              }),
              (t.prototype.getGridSize = function() {
                return {
                  rows: this.maxRow - this.minRow + 1,
                  columns: this.maxCol - this.minCol + 1,
                };
              }),
              (t.prototype.copyBirdSpriteToGrid = function(e, t, i) {
                var n = e.node.getChildByName("grids").getChildByName("sp");
                if (!n) return null;
                var a = cc.instantiate(n);
                return (
                  (a.active = !0), this.node.addChild(a), a.setPosition(this.getGridPosition(t, i)),
                  (a.zIndex = 0), a);
              }),
              (t.prototype.putBirds = function(e) {
                for (var t = e.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    i = this.node.convertToNodeSpaceAR(t),
                    n = (this.minCol + this.maxCol) / 2,
                    a = (this.minRow + this.maxRow) / 2,
                    o = Math.round(i.y / (this.gridHeight + this.spacing) + a + e.gridOffset.y - 0.5, ),
                    r = Math.round(i.x / (this.gridWidth + this.spacing) + n + e.gridOffset.x, ),
                    s = e.shapeData.json.map(function(e) {
                      var t = e[0],
                        i = e[1];
                      return {
                        row: o + i,
                        col: r + t
                      };
                    }),
                    c = 0,
                    d = s; c < d.length; c++) {
                  var h = (w = d[c]).col + "," + w.row;
                  if (!(C = this.gridMap.get(h)) || (C.bird && C.bird != e)) return (console.warn("Bird cannot be placed at " + h + " because it is either out of bounds or already occupied.", ), void(e.deployed ? cc.tween(e.node).to(0.15, {
                    position: cc.v3(e.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.getGridPosition(e.deployed.col, e.deployed.row, ), ), ), ),
                  }).call(function() {
                    e.updateZIndex();
                  }).start() : cc.tween(e.node).to(0.15, {
                    position: cc.v3(e.refresh_pos)
                  }).call(function() {
                    e.updateZIndex();
                  }).start()));
                }
                var u = null;
                if (this.birdsMap.has(e)) {
                  for (var p = this.birdsMap.get(e),
                      f = e.shapeData.json.map(function(e) {
                        var t = e[0],
                          i = e[1];
                        return {
                          row: p.row + i,
                          col: p.col + t
                        };
                      }),
                      g = 0,
                      y = f; g < y.length; g++)
                    ((h = (w = y[g]).col + "," + w.row),
                      (C = this.gridMap.get(h)) && C.bird === e && (C.bird = null));
                  (u = p.spNode) && ((u.active = !0), u.setPosition(this.getGridPosition(r, o)));
                } else(u = this.copyBirdSpriteToGrid(e, r, o)).active = !0;
                var m = e.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.getGridPosition(r - e.gridOffset.x, o - e.gridOffset.y, ), ), );
                (e.node.stopAllActions(), e.node.setPosition(m), u.setPosition(this.node.convertToNodeSpaceAR(e.node.convertToWorldSpaceAR(cc.v2(0, 0)), ), ));
                var _ = e.node.getChildByName("grids").getChildByName("sp");
                _ && (_.active = !1);
                for (var v = 0, b = s; v < b.length; v++) {
                  var w, C;
                  ((h = (w = b[v]).col + "," + w.row),
                    (C = this.gridMap.get(h)) && ((C.bird = e), C.grid && C.grid.node && (C.grid.node.active = !1)));
                }
                this.birdsMap.set(e, {
                  col: r,
                  row: o,
                  spNode: u
                });
                var B = !e.deployed;
                ((e.deployed = {
                  col: r - e.gridOffset.x,
                  row: o - e.gridOffset.y,
                }), B && l.default.inst.removeBird(e.node), e.updateZIndex());
              }),
              (t.prototype.putExpandBlock = function(e) {
                for (var t = e.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    i = this.node.convertToNodeSpaceAR(t),
                    n = (this.minCol + this.maxCol) / 2,
                    a = (this.minRow + this.maxRow) / 2,
                    o = Math.round(i.y / (this.gridHeight + this.spacing) + a + e.gridOffset.y - 0.5, ),
                    r = Math.round(i.x / (this.gridWidth + this.spacing) + n + e.gridOffset.x, ),
                    s = e.shapeData.json.map(function(e) {
                      var t = e[0],
                        i = e[1];
                      return {
                        row: o + i,
                        col: r + t
                      };
                    }),
                    c = 0,
                    d = s; c < d.length; c++) {
                  var h = d[c],
                    u = h.col + "," + h.row;
                  this.dashedGrids.get(u).put = e;
                }
                var p = e.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.getGridPosition(r - e.gridOffset.x, o - e.gridOffset.y, ), ), );
                (e.node.stopAllActions(), e.node.setPosition(p), this.blocksMap.set(e, s));
                var f = !e.deployed;
                ((e.deployed = {
                  col: r - e.gridOffset.x,
                  row: o - e.gridOffset.y,
                }), f && l.default.inst.removeBird(e.node), e.updateZIndex());
              }),
              (t.prototype.removeExpandBlock = function(e) {
                var t = this.blocksMap.get(e);
                if (t) {
                  for (var i = 0, n = t; i < n.length; i++) {
                    var a = n[i],
                      o = a.col + "," + a.row;
                    this.dashedGrids.get(o).put = null;
                  }
                  this.blocksMap.delete(e);
                }
              }),
              (t.prototype.checkOverlap = function(e) {
                for (var t = [],
                    i = new Set(),
                    n = e.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    a = this.node.convertToNodeSpaceAR(n),
                    o = (this.minCol + this.maxCol) / 2,
                    r = (this.minRow + this.maxRow) / 2,
                    s = Math.round(a.y / (this.gridHeight + this.spacing) + r + e.gridOffset.y - 0.5, ),
                    c = Math.round(a.x / (this.gridWidth + this.spacing) + o + e.gridOffset.x, ),
                    l = 0,
                    d = e.shapeData.json; l < d.length; l++) {
                  var h = d[l],
                    u = c + h[0],
                    p = s + h[1],
                    f = u + "," + p,
                    g = this.gridMap.get(f);
                  if (g) {
                    t.push({
                      col: u,
                      row: p,
                      bird: g.bird
                    });
                    var y = this.gridMap.get(f);
                    y && y.bird && y.bird !== e && i.add(y.bird);
                  }
                }
                return {
                  cells: t,
                  overlappingBirds: Array.from(i)
                };
              }),
              (t.prototype.setCellsColor = function(e, t) {
                var i = this;
                e.forEach(function(e) {
                  var n = e.col + "," + e.row,
                    a = i.gridMap.get(n);
                  a && a.grid ? (a.grid.setType(t), "normal" != t ? a.bird && (a.grid.node.active = !0) : a.bird && a.bird != r.default.getDragingBird() && (a.grid.node.active = !1)) : console.warn("Grid cell at " + n + " does not exist in the grid map.", );
                });
              }),
              (t.prototype.removeBirds = function(e) {
                if (e.deployed) {
                  if (this.birdsMap.has(e)) {
                    var t = this.birdsMap.get(e),
                      i = e.shapeData.json.map(function(e) {
                        var i = e[0],
                          n = e[1];
                        return {
                          row: t.row + n,
                          col: t.col + i
                        };
                      });
                    t.spNode && t.spNode.isValid && t.spNode.destroy();
                    for (var n = 0, a = i; n < a.length; n++) {
                      var o = a[n],
                        r = o.col + "," + o.row,
                        s = this.gridMap.get(r);
                      s && s.bird === e && ((s.bird = null), s.grid && s.grid.node && (s.grid.node.active = !0));
                    }
                    this.birdsMap.delete(e);
                  }
                  var c = e.node.getChildByName("grids").getChildByName("sp");
                  (c && (c.active = !0), (e.deployed = null));
                }
              }),
              (t.prototype.checkExpandOverlap = function(e) {
                for (var t = [],
                    i = e.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    n = this.node.convertToNodeSpaceAR(i),
                    a = (this.minCol + this.maxCol) / 2,
                    o = (this.minRow + this.maxRow) / 2,
                    r = Math.round(n.y / (this.gridHeight + this.spacing) + o + e.gridOffset.y - 0.5, ),
                    s = Math.round(n.x / (this.gridWidth + this.spacing) + a + e.gridOffset.x, ),
                    c = 0,
                    l = e.shapeData.json; c < l.length; c++) {
                  var d = l[c],
                    h = s + d[0],
                    u = r + d[1],
                    p = h + "," + u,
                    f = this.dashedGrids.get(p);
                  !f || (f.put && f.put != e) || t.push({
                    col: h,
                    row: u
                  });
                }
                return t;
              }),
              (t.prototype.getAllBirds = function() {
                var e = this;
                return (
                  (this.birds = []), this.birdsMap.forEach(function(t, i) {
                    e.birds.push(i);
                  }), this.birds);
              }),
              (t.prototype.getDeployCount = function() {
                var e = 0;
                return (this.birdsMap.forEach(function() {
                  e++;
                }), e);
              }),
              (t.prototype.getAliveBirdCount = function() {
                for (var e = 0, t = 0, i = Array.from(this.birdsMap.keys()); t < i.length; t++) "die" != i[t].status && e++;
                return e;
              }),
              (t.prototype.getBirdWPos = function(e) {
                for (var t = 0, i = Array.from(this.birdsMap.keys()); t < i.length; t++) {
                  var n = i[t];
                  if (n.bird_type === e) return n.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                }
                return null;
              }),
              (t.prototype.hasBird = function(e) {
                for (var t = 0, i = Array.from(this.birdsMap.keys()); t < i.length; t++)
                  if (i[t].bird_type === e) return !0;
                return !1;
              }),
              (t.prototype.findBird = function(e) {
                for (var t = 0, i = Array.from(this.birdsMap.keys()); t < i.length; t++) {
                  var n = i[t];
                  if (n.symbol === e) return n;
                }
                return null;
              }),
              (t.prototype.getNeighborBirds = function(e) {
                var t = new Set();
                if (!this.birdsMap.has(e)) return Array.from(t);
                for (var i = this.birdsMap.get(e),
                    n = i.col,
                    a = i.row,
                    o = 0,
                    r = [
                      [0, -1],
                      [-1, 0],
                      [1, 0],
                      [0, 1],
                    ]; o < r.length; o++) {
                  var s = r[o],
                    c = n + s[0] + "," + (a + s[1]),
                    l = this.gridMap.get(c);
                  l && l.bird && l.bird !== e && "die" !== l.bird.status && t.add(l.bird);
                }
                return Array.from(t);
              }),
              (t.prototype.onStartFight = function() {
                var e = this;
                ((this.birds = []), this.birdsMap.forEach(function(t, i) {
                  (e.birds.push(i), cc.tween(i.node).by(0.2, {
                    position: cc.v3(0, -300)
                  }).call(function() {
                    i.enterBattle();
                  }).start());
                }), this.gridMap.forEach(function(e) {
                  !e.bird && e.grid && (e.grid.node.active = !1);
                }), this.enableDrag(!1));
              }),
              (t.prototype.onStopFight = function() {
                (this.birdsMap.forEach(function(e, t) {
                  (t.exitBattle(), cc.tween(t.node).by(0.2, {
                    position: cc.v3(0, 300)
                  }).start());
                }), this.gridMap.forEach(function(e) {
                  e.grid && !e.bird && (e.grid.node.active = !0);
                }), this.enableDrag(!0));
              }),
              (t.prototype.enableDrag = function(e) {
                this.birdsMap.forEach(function(t, i) {
                  var n = i.getComponent(s.default);
                  n && n.setCanDrag(e);
                });
              }),
              (t.prototype.enterExpandMode = function() {
                for (var e = this.minRow; e <= this.maxRow; e++)
                  for (var t = this.minCol; t <= this.maxCol; t++) {
                    var i = t + "," + e;
                    if (!this.gridMap.has(i)) {
                      var n = this.dashedGrids.get(i);
                      n ? ((n.grid.active = !0), n.grid.getComponent(c.default).setType("dashed")) : this.createDashedGrid(t, e);
                    }
                  }
                  (this.birdsMap.forEach(function(e, t) {
                    t.spine.node.color = new cc.Color(100, 100, 100, 255);
                  }), this.enableDrag(!1));
              }),
              (t.prototype.leaveExpandMode = function() {
                (this.dashedGrids.forEach(function(e) {
                  e.grid && e.grid.isValid && (e.grid.active = !1);
                }), this.birdsMap.forEach(function(e, t) {
                  t.spine.node.color = new cc.Color(255, 255, 255, 255);
                }), this.enableDrag(!0));
              }),
              (t.prototype.createDashedGrid = function(e, t) {
                var i = cc.instantiate(this.gridPrefab);
                (i.setPosition(this.getGridPosition(e, t)), i.getComponent(c.default).setType("dashed"), this.node.addChild(i),
                  (i.zIndex = 100 * t + e), this.dashedGrids.set(e + "," + t, {
                    grid: i
                  }));
              }),
              (t.prototype.setDashedCellsColor = function(e, t) {
                var i = this;
                (this.dashedGrids.forEach(function(e) {
                  e.grid && e.grid.getComponent(c.default).setType("dashed");
                }), e.forEach(function(e) {
                  var n = e.col + "," + e.row,
                    a = i.dashedGrids.get(n);
                  if (a && a.grid) switch (t) {
                    case "green":
                      a.grid.getComponent(c.default).setType("dashed_green");
                      break;
                    case "red":
                      a.grid.getComponent(c.default).setType("dashed_red");
                  }
                }));
              }),
              (t.prototype.clearDashedGrids = function() {
                var e = performance.now(),
                  t = 0;
                (this.dashedGrids.forEach(function(e) {
                  e.grid && (e.grid.destroy(), t++);
                }), console.log("清理虚线格子：" + t + "个 耗时：" + (performance.now() - e) + "ms", ), this.dashedGrids.clear());
              }),
              (t.prototype.selectTarget = function(e) {
                var t = null,
                  i = 1 / 0;
                return (this.birdsMap.forEach(function(n, a) {
                  if (a && "die" !== a.status) {
                    var o = a.node.getChildByName("box").convertToWorldSpaceAR(cc.v2(0, 0)),
                      r = e.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                      s = o.sub(r).mag();
                    s < i && ((i = s), (t = a));
                  }
                }), t);
              }),
              (t.prototype.areAllBirdsDead = function() {
                return (!this.birds || 0 === this.birds.length || this.birds.every(function(e) {
                  return (e && e.getComponent(r.default) && "die" === e.getComponent(r.default).status);
                }));
              }),
              (t.prototype.selectBird = function(e) {
                var t = this;
                if (this.birdsMap.has(e)) {
                  var i = this.birdsMap.get(e);
                  i.spNode && (i.spNode.active = !1);
                  var n = e.node.getChildByName("grids").getChildByName("sp");
                  (n && (n.active = !0), e.shapeData.json.map(function(e) {
                    var t = e[0],
                      n = e[1];
                    return {
                      row: i.row + n,
                      col: i.col + t
                    };
                  }).forEach(function(e) {
                    var i = e.col + "," + e.row,
                      n = t.gridMap.get(i);
                    n && n.grid && n.grid.node && (n.grid.node.active = !0);
                  }));
                }
              }),
              (t.prototype.deselectBird = function(e) {
                var t = this;
                if (this.birdsMap.has(e)) {
                  var i = this.birdsMap.get(e);
                  i.spNode && (i.spNode.active = !0);
                  var n = e.node.getChildByName("grids").getChildByName("sp");
                  (n && (n.active = !1), e.shapeData.json.map(function(e) {
                    var t = e[0],
                      n = e[1];
                    return {
                      row: i.row + n,
                      col: i.col + t
                    };
                  }).forEach(function(e) {
                    var i = e.col + "," + e.row,
                      n = t.gridMap.get(i);
                    n && n.grid && n.grid.node && (n.grid.node.active = !1);
                  }));
                }
              }),
              (t.prototype.getBirdBoxSprite = function(e) {
                var t = this.birdsMap.get(e);
                return t && t.spNode ? t.spNode : null;
              }),
              (t.prototype.getMergeableBirds = function(e) {
                var t = [];
                return e.bird_level >= 5 ? t : (this.birdsContainer.children.forEach(function(i) {
                  var n = i.getComponent(r.default);
                  n && n !== e && n.bird_type === e.bird_type && n.bird_level === e.bird_level && t.push(n);
                }), t);
              }),
              (t.prototype.saveCurrentState = function() {
                return {
                  gridList: Array.from(this.gridMap.entries()).map(function(e) {
                    return e[0];
                  }, ),
                  birdsMap: Array.from(this.birdsMap.entries()).map(function(e) {
                    var t = e[0],
                      i = e[1];
                    return {
                      birdType: t.bird_type,
                      birdLevel: t.bird_level,
                      col: i.col,
                      row: i.row,
                    };
                  }, ),
                  minRow: this.minRow,
                  maxRow: this.maxRow,
                  minCol: this.minCol,
                  maxCol: this.maxCol,
                };
              }),
              (t.prototype.restoreFromSavedState = function(e) {
                var t = this;
                try {
                  (this.gridMap.clear(), this.birdsMap.clear(), this.node.removeAllChildren(),
                    (this.minRow = e.minRow),
                    (this.maxRow = e.maxRow),
                    (this.minCol = e.minCol),
                    (this.maxCol = e.maxCol));
                  for (var i = 0; i < e.gridList.length; i++) this.gridMap.set(e.gridList[i], {});
                  return (this.initGrid(), e.birdsMap.forEach(function(e) {
                    var i = l.default.inst.createBirds(e.birdType, e.birdLevel, );
                    i && t.putBirdsAt(i, e.col, e.row);
                  }), !0);
                } catch (n) {
                  return (console.error("Failed to restore state:", n), !1);
                }
              }),
              (t.prototype.putBirdsAt = function(e, t, i) {
                var n = e.shapeData.json.map(function(e) {
                    var n = e[0],
                      a = e[1];
                    return {
                      row: i + a,
                      col: t + n
                    };
                  }),
                  a = this.copyBirdSpriteToGrid(e, t, i);
                a.active = !0;
                var o = e.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.getGridPosition(t - e.gridOffset.x, i - e.gridOffset.y, ), ), );
                (e.node.stopAllActions(), e.node.setPosition(o), a.setPosition(this.node.convertToNodeSpaceAR(e.node.convertToWorldSpaceAR(cc.v2(0, 0)), ), ));
                var r = e.node.getChildByName("grids").getChildByName("sp");
                r && (r.active = !1);
                for (var s = 0, c = n; s < c.length; s++) {
                  var l = c[s],
                    d = l.col + "," + l.row,
                    h = this.gridMap.get(d);
                  h && ((h.bird = e), h.grid && h.grid.node && (h.grid.node.active = !1));
                }
                (this.birdsMap.set(e, {
                    col: t,
                    row: i,
                    spNode: a
                  }),
                  (e.deployed = {
                    col: t - e.gridOffset.x,
                    row: i - e.gridOffset.y,
                  }), e.updateZIndex());
              }),
              (t._inst = null), o([u(cc.Prefab)], t.prototype, "gridPrefab", void 0), o([u], t.prototype, "gridWidth", void 0), o([u], t.prototype, "gridHeight", void 0), o([u], t.prototype, "spacing", void 0),
              (i = o([h], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
