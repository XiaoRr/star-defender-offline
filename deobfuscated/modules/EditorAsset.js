// module: EditorAsset
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        (cc._RF.push(t, "566a9LoSX1BCK19rVg0B/oV", "EditorAsset"), Object.defineProperty(i, "__esModule", {
          value: !0
        }));
        var n = (function() {
          function e() {}
          return (
            (e.load = function() {
              return new Promise(function(e) {
                return (e(null), void cc.warn("[EditorAsset]", "该函数只在编辑器环境内有效！"));
              });
            }), e);
        })();
        ((i.default = n), cc._RF.pop());
      };
