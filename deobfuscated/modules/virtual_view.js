// module: virtual_view
// deps: {"./virtual_view_item":"virtual_view_item"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "11f78WL3e1NZKFSfMXbj7uh", "virtual_view");
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
          },
          r = (this && this.__awaiter) || function(e, t, i, n) {
            return new(i || (i = Promise))(function(a, o) {
              function r(e) {
                try {
                  c(n.next(e));
                } catch (t) {
                  o(t);
                }
              }

              function s(e) {
                try {
                  c(n.throw(e));
                } catch (t) {
                  o(t);
                }
              }

              function c(e) {
                var t;
                e.done ? a(e.value) : ((t = e.value), t instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          },
          s = (this && this.__generator) || function(e, t) {
            var i,
              n,
              a,
              o,
              r = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o);

            function s(e) {
              return function(t) {
                return c([e, t]);
              };
            }

            function c(o) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; r;) try {
                if (
                  ((i = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
                switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return (r.label++, {
                      value: o[1],
                      done: !1
                    });
                  case 5:
                    (r.label++, (n = o[1]), (o = [0]));
                    continue;
                  case 7:
                    ((o = r.ops.pop()), r.trys.pop());
                    continue;
                  default:
                    if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      r.label = o[1];
                      break;
                    }
                    if (6 === o[0] && r.label < a[1]) {
                      ((r.label = a[1]), (a = o));
                      break;
                    }
                    if (a && r.label < a[2]) {
                      ((r.label = a[2]), r.ops.push(o));
                      break;
                    }
                    (a[2] && r.ops.pop(), r.trys.pop());
                    continue;
                }
                o = t.call(e, r);
              } catch (s) {
                ((o = [6, s]), (n = 0));
              } finally {
                i = a = 0;
              }
              if (5 & o[0]) throw o[1];
              return {
                value: o[0] ? o[1] : void 0,
                done: !0
              };
            }
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var c = e("./virtual_view_item"),
          l = cc._decorator,
          d = l.ccclass,
          h = l.property,
          u = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.itemSize = null),
                (t.rowItem = 1),
                (t.spacing_y = 0),
                (t.spacing_x = 0),
                (t.layout_top = 0),
                (t.layout_bottom = 0),
                (t.item_prefab = null),
                (t.content = null),
                (t.minimum_content_height = 0),
                (t.dirty = !1),
                (t.real_list = []),
                (t.virtual_list = []),
                (t.min_y = 0),
                (t.max_y = 0),
                (t.content_width = 0),
                (t.maxItem = 0),
                (t._selected_index = 0),
                (t.idle_real_items = []),
                (t._callback = null), t);
            }
            return (a(t, e),
              (t.prototype.onLoad = function() {
                var e = this;
                this.content.parent.parent.on("size-changed", function() {
                  if (e.max_y) {
                    var t = e.content.parent.parent.getContentSize().height;
                    ((e.content_width = e.content.parent.parent.getContentSize().width),
                      (e.max_y = t / 2 + e.spacing_y + e.itemSize.height),
                      (e.min_y = -e.max_y),
                      (e.maxItem = (Math.floor(
                        (t - e.layout_top - e.layout_bottom + e.spacing_y) / (e.itemSize.height + e.spacing_y), ) + 2) * e.rowItem),
                      (e.dirty = !0));
                  }
                });
              }),
              (t.prototype.start = function() {
                var e = this;
                (this.content.on("size-changed", function() {
                  e.dirty = !0;
                }), this.content.on("position-changed", function() {
                  e.dirty = !0;
                }));
              }),
              (t.prototype.addItem = function(e) {
                return r(this, void 0, void 0, function() {
                  var t, i, n, a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (this.max_y || ((t = this.content.parent.parent.getContentSize().height),
                            (this.content_width = this.content.parent.parent.getContentSize().width),
                            (this.max_y = t / 2),
                            (this.min_y = -this.max_y),
                            (this.maxItem = (Math.floor(
                              (t - this.layout_top - this.layout_bottom + this.spacing_y) / (this.itemSize.height + this.spacing_y), ) + 2) * this.rowItem)),
                          (i = this.virtual_list.length),
                          (n = {
                            index: i,
                            data: e,
                            pos: this.getItemPos(i),
                            real_index: -1,
                          }), this.virtual_list.push(n), this.isInView(n) ? ((a = this.newRealItem()).node.setPosition(n.pos),
                            (n.real_index = a.index),
                            (a.comp.vIndex = n.index),
                            [
                              4,
                              a.comp.show(n.data, this._selected_index == n.index, ),
                            ]) : [3, 2]);
                      case 1:
                        (r.sent(), (r.label = 2));
                      case 2:
                        return (
                          (o = (this.itemSize.height + this.spacing_y) * Math.ceil(this.virtual_list.length / this.rowItem, ) + this.layout_top + this.layout_bottom - this.spacing_y), this.content.setContentSize(this.content_width, Math.max(o, this.minimum_content_height), ),
                          [2]);
                    }
                  });
                });
              }),
              (t.prototype.show = function(e, t, i) {
                return (void 0 === t && (t = -1), void 0 === i && (i = !0), r(this, void 0, void 0, function() {
                  var n, a, o, r, c;
                  return s(this, function(s) {
                    switch (s.label) {
                      case 0:
                        for (a = 0, o = this.virtual_list.length; a < o; a++) - 1 != (n = this.virtual_list[a].real_index) && this.releaseRealItem(this.real_list[n]);
                        ((this.virtual_list = []),
                          (a = 0),
                          (o = e.length),
                          (s.label = 1));
                      case 1:
                        return a < o ? [4, this.addItem(e[a])] : [3, 4];
                      case 2:
                        (s.sent(), (s.label = 3));
                      case 3:
                        return (a++, [3, 1]);
                      case 4:
                        return (this._selected_index >= this.rowItem ? ((r = this.content.parent.parent.getComponent(cc.ScrollView, )),
                            (c = Math.ceil(
                              (this._selected_index + 1) / this.rowItem, )), r.scrollToOffset(cc.v2(0,
                              (this.spacing_y + this.itemSize.height) * (c - 1), ), 0.15, )) : i && this.content.parent.parent.getComponent(cc.ScrollView).scrollToTop(), t >= 0 ? this.selectItem(t) : this.selectItem(-1),
                          [2, this.virtual_list]);
                    }
                  });
                }));
              }),
              (t.prototype.getScrollOffset = function() {
                return this.content.parent.parent.getComponent(cc.ScrollView).getScrollOffset();
              }),
              (t.prototype.scrollToOffset = function(e, t) {
                (void 0 === t && (t = 0), this.content.parent.parent.getComponent(cc.ScrollView).scrollToOffset(e, t));
              }),
              (t.prototype.scrollToIndex = function(e, t) {
                void 0 === t && (t = 0);
                var i = this.getItemPos(e);
                ((i.y = -i.y),
                  (i.y -= this.itemSize.height / 2), this.scrollToOffset(i, t));
              }),
              (t.prototype.selectItem = function(e) {
                var t,
                  i = this.virtual_list[this._selected_index];
                (i && (t = this.real_list[i.real_index]) && (t.comp.selected = !1),
                  (this._selected_index = e),
                  (i = this.virtual_list[this._selected_index]) && (t = this.real_list[i.real_index]) && (t.comp.selected = !0));
              }),
              (t.prototype.getItem = function(e) {
                var t = this.virtual_list[e];
                return t && this.real_list[t.real_index] ? this.real_list[t.real_index].comp : null;
              }),
              (t.prototype.getSelectedItemData = function() {
                return this.virtual_list[this._selected_index] ? this.virtual_list[this._selected_index].data : null;
              }),
              (t.prototype.getItemPos = function(e) {
                var t = this.rowItem,
                  i = Math.floor(e / t) + 1,
                  n = ((e % t) - (t - 1) / 2) * (this.spacing_x + this.itemSize.width);
                return cc.v2(n, -this.layout_top + (1 - i) * (this.itemSize.height + this.spacing_y) - this.itemSize.height / 2, );
              }),
              (t.prototype.refreshSelected = function() {
                var e = this.virtual_list[this._selected_index];
                if (e) {
                  var t = this.real_list[e.real_index];
                  t && t.comp.show(e.data, !0);
                }
              }),
              (t.prototype.isInView = function(e) {
                var t = e.pos.y + this.content.y,
                  i = t + this.itemSize.height / 2,
                  n = t - this.itemSize.height / 2;
                return i >= this.min_y && n <= this.max_y;
              }),
              (t.prototype.newRealItem = function() {
                var e = this;
                if (this.idle_real_items.length > 0) {
                  var t = this.idle_real_items.pop();
                  return ((t.node.active = !0), t);
                }
                var i = cc.instantiate(this.item_prefab),
                  n = i.getComponent(c.default),
                  a = this.real_list.length;
                ((i.getChildByName("btn") || i).on("click", function() {
                  e._callback && e._callback(n);
                }), this.content.addChild(i));
                var o = {
                  index: a,
                  node: i,
                  comp: n
                };
                return (this.real_list.push(o), o);
              }),
              (t.prototype.releaseRealItem = function(e) {
                ((e.node.active = !1), this.idle_real_items.push(e));
              }),
              (t.prototype.clickCallback = function(e) {
                this._callback = e;
              }),
              (t.prototype.refreshView = function() {
                return r(this, void 0, void 0, function() {
                  var e, t, i, n, a, o;
                  return s(this, function(r) {
                    switch (r.label) {
                      case 0:
                        for (this.dirty = !1, e = [], i = 0, n = this.virtual_list.length; i < n; i++)
                          ((t = this.virtual_list[i].real_index), this.isInView(this.virtual_list[i]) ? -1 == t && e.push(i) : -1 != t && (this.releaseRealItem(this.real_list[t]),
                            (this.virtual_list[i].real_index = -1)));
                        ((i = 0), (n = e.length), (r.label = 1));
                      case 1:
                        return i < n ? ((a = this.newRealItem()),
                          ((o = this.virtual_list[e[i]]).real_index = a.index), a.node.setPosition(o.pos),
                          (a.comp.vIndex = o.index),
                          [
                            4,
                            a.comp.show(o.data, this._selected_index == o.index, ),
                          ]) : [3, 4];
                      case 2:
                        (r.sent(), (r.label = 3));
                      case 3:
                        return (i++, [3, 1]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.UpdateView = function() {
                return r(this, void 0, void 0, function() {
                  var e, t, i;
                  return s(this, function(n) {
                    switch (n.label) {
                      case 0:
                        ((e = 0),
                          (t = this.virtual_list.length),
                          (n.label = 1));
                      case 1:
                        return e < t ? -1 == (i = this.virtual_list[e]).real_index ? [3, 3] : [
                          4,
                          this.real_list[i.real_index].comp.show(i.data, this._selected_index == i.index, ),
                        ] : [3, 4];
                      case 2:
                        (n.sent(), (n.label = 3));
                      case 3:
                        return (e++, [3, 1]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.update = function() {
                this.dirty && this.refreshView();
              }), o([h(cc.Size)], t.prototype, "itemSize", void 0), o([h], t.prototype, "rowItem", void 0), o([h], t.prototype, "spacing_y", void 0), o([h], t.prototype, "spacing_x", void 0), o([h], t.prototype, "layout_top", void 0), o([h], t.prototype, "layout_bottom", void 0), o([h(cc.Prefab)], t.prototype, "item_prefab", void 0), o([h(cc.Node)], t.prototype, "content", void 0), o([h(cc.Integer)], t.prototype, "minimum_content_height", void 0), o([d], t));
          })(cc.Component);
        ((i.default = u), cc._RF.pop());
      };
