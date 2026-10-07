// module: onfire
// deps: {}
module.exports = {};
const __mod = function(e, t) {
        "use strict";
        var i, n;
        (cc._RF.push(t, "fc284W1SAFHeodOU7iOiy3k", "onfire"),
          (i = "undefined" != typeof window ? window : void 0),
          (n = function() {
            var e = {},
              t = 0,
              i = "string",
              n = "function",
              a = Function.call.bind(Object.hasOwnProperty),
              o = Function.call.bind(Array.prototype.slice);

            function r(o, r, s, c) {
              if (typeof o !== i || typeof r !== n) throw new Error("args: " + i + ", " + n);
              return (a(e, o) || (e[o] = {}), (e[o][++t] = [r, s, c]), [o, t]);
            }

            function s(e, t) {
              for (var i in e) a(e, i) && t(i, e[i]);
            }

            function c(t, i) {
              a(e, t) && s(e[t], function(n, a) {
                (a[0].apply(a[2], i), a[1] && delete e[t][n]);
              });
            }
            return {
              on: function(e, t, i) {
                return r(e, t, 0, i);
              },
              one: function(e, t, i) {
                return r(e, t, 1, i);
              },
              un: function(t) {
                var o,
                  r,
                  c = !1,
                  l = typeof t;
                return l === i ? !!a(e, t) && (delete e[t], !0) : "object" === l ? ((o = t[0]),
                  (r = t[1]), !(!a(e, o) || !a(e[o], r) || (delete e[o][r], 0))) : l !== n || (s(e, function(i, n) {
                  s(n, function(n, a) {
                    a[0] === t && (delete e[i][n], (c = !0));
                  });
                }), c);
              },
              fire: function(e) {
                var t = o(arguments, 1);
                setTimeout(function() {
                  c(e, t);
                });
              },
              fireSync: function(e) {
                c(e, o(arguments, 1));
              },
              clear: function() {
                e = {};
              },
            };
          }), "object" == typeof t && t.exports ? (t.exports = n()) : (i.onfire = n()), cc._RF.pop());
      };
