// module: spine_control
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6f8efGc3EdORaU4j4T9ka6h", "spine_control");
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
          c = (r.property,
            (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.sp = null),
                  (t.sp_skeleton_data = null),
                  (t.sp_state = null),
                  (t.sp_state_data = null), t);
              }
              return (a(t, e),
                (t.prototype.onLoad = function() {
                  ((this.sp = this.getComponent(sp.Skeleton)),
                    (this.sp_skeleton_data = this.sp.skeletonData.getRuntimeData()),
                    (this.sp_state = this.sp.getState()),
                    (this.sp_state_data = this.sp_state.data));
                  for (var e = function(e) {
                        var i = t.node.children[e];
                        if (i.name.startsWith("control_")) {
                          var n = i.name.split("_")[1],
                            a = t.sp.findBone(n);
                          (i.setPosition(a.x, a.y), i.on("position-changed", function() {
                            var e = i.getPosition();
                            (null != a.parent && a.parent.worldToLocal(new sp.spine.Vector2(e.x, e.y), ),
                              (a.x = e.x),
                              (a.y = e.y));
                          }));
                        }
                      },
                      t = this,
                      i = 0,
                      n = this.node.children.length; i < n; i++) e(i);
                }),
                (t.prototype.start = function() {}), o([s], t));
            })(cc.Component));
        ((i.default = c), cc._RF.pop());
      };
