// module: global
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        (cc._RF.push(t, "90124p+Xc5EWK8vRw5NAz2M", "global"), Object.defineProperty(i, "__esModule", {
          value: !0
        }));
        var n = cc._decorator,
          a = (n.ccclass, n.property, {});
        ((cc.sys.platform !== cc.sys.MOBILE_BROWSER && cc.sys.platform !== cc.sys.DESKTOP_BROWSER) || (a.Request = (function() {
            var e = location.search,
              t = new Object();
            if (-1 != e.indexOf("?"))
              for (var i = e.substr(1).split("&"), n = 0; n < i.length; n++) t[i[n].split("=")[0]] = unescape(i[n].split("=")[1]);
            return t;
          })()),
          (i.default = a), cc._RF.pop());
      };
