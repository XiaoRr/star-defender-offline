// module: libcocos
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        (cc._RF.push(t, "59aef+uCaFHM6d+iEpu3BOm", "libcocos"), Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.cocos = void 0),
          (i.cocos = new((function() {
            function e() {}
            return (
              (e.prototype.preloadScene = function(e, t) {
                return new Promise(function(i, n) {
                  cc.director.preloadScene(e, t, function(e, t) {
                    e ? n(e) : i(t);
                  });
                });
              }),
              (e.prototype.loadScene = function(e) {
                return new Promise(function(t, i) {
                  cc.director.loadScene(e, t) || i("Failed loading scene.");
                });
              }),
              (e.prototype.load = function(e, t) {
                return new Promise(function(i, n) {
                  cc.loader.load(e, t, function(e, t) {
                    e ? n(e) : i(t);
                  });
                });
              }),
              (e.prototype.loadRes = function(e, t, i) {
                return new Promise(function(n, a) {
                  cc.loader.loadRes(e, t, i, function(e, t) {
                    e ? a(e) : n(t);
                  });
                });
              }),
              (e.prototype.loadResArray = function(e, t, i) {
                return new Promise(function(n, a) {
                  cc.loader.loadResArray(e, t, i, function(e, t) {
                    e ? a(e) : n(t);
                  });
                });
              }),
              (e.prototype.loadResDir = function(e, t, i) {
                return new Promise(function(n, a) {
                  cc.loader.loadResDir(e, t, i, function(e, t) {
                    e ? a(e) : n(t);
                  });
                });
              }),
              (e.prototype.traverse = function(e, t) {
                for (var i = new Array(e); i.length;) {
                  var n = i.pop();
                  (t(n), i.push.apply(i, n.children));
                }
              }),
              (e.prototype.searchNodeByName = function(e, t) {
                for (var i = new Array(e); i.length;) {
                  var n = i.pop();
                  if (n.name == t) return n;
                  i.push.apply(i, n.children);
                }
              }),
              (e.prototype.searchNodeByPath = function(e, t) {
                t.replace(/\\/g, "/");
                for (var i = e,
                    n = 0,
                    a = t.split("/").filter(function(e) {
                      return e;
                    }); n < a.length; n++) {
                  var o = a[n];
                  if (!(i = i.getChildByName(o))) break;
                }
                return i;
              }),
              (e.prototype.asyncwait = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                return new Promise(function(i) {
                  return cc.Canvas.instance.scheduleOnce(function() {
                    return i(t);
                  }, e / 1e3);
                });
              }),
              (e.prototype.resizeCanvas = function(e) {
                var t = cc.view.getDesignResolutionSize(),
                  i = cc.view.getFrameSize(),
                  n = cc.Canvas.instance;
                (i.height / i.width > t.height / t.width ? ((n.fitHeight = !0), (n.fitWidth = !1)) : ((n.fitHeight = !1), (n.fitWidth = !0)), n.node.width / n.node.height < t.width / t.height ? e.setScale(n.node.width / t.width) : e.setScale(n.node.height / t.height));
              }),
              (e.prototype.getWorldPosition = function(e) {
                var t = e.getPosition();
                return (e.parent && (t = e.parent.convertToNodeSpaceAR(t)), t);
              }),
              (e.prototype.getWorldRectangle = function(e) {
                var t = e.x - e.width * e.anchorX,
                  i = e.y - e.height * e.anchorY;
                if (e.parent) {
                  var n = e.parent.convertToWorldSpaceAR(cc.v2(t, i));
                  ((t = n.x), (i = n.y));
                }
                return cc.rect(t, i, e.width, e.height);
              }), e);
          })())()), cc._RF.pop());
      };
