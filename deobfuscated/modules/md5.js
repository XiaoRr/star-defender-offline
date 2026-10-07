// module: md5
// deps: {}
module.exports = {};
const __mod = function(e, t) {
        "use strict";
        (cc._RF.push(t, "66846POv1pC6qwsQaNdXcux", "md5"),
          (function() {
            function e(e, t) {
              var i = (65535 & e) + (65535 & t);
              return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
            }

            function i(t, i, n, a, o, r) {
              return e(
                ((s = e(e(i, t), e(a, r))) << (c = o)) | (s >>> (32 - c)), n, );
              var s, c;
            }

            function n(e, t, n, a, o, r, s) {
              return i((t & n) | (~t & a), e, t, o, r, s);
            }

            function a(e, t, n, a, o, r, s) {
              return i((t & a) | (n & ~a), e, t, o, r, s);
            }

            function o(e, t, n, a, o, r, s) {
              return i(t ^ n ^ a, e, t, o, r, s);
            }

            function r(e, t, n, a, o, r, s) {
              return i(n ^ (t | ~a), e, t, o, r, s);
            }

            function s(t, i) {
              var s, c, l, d, h;
              ((t[i >> 5] |= 128 << i % 32),
                (t[14 + (((i + 64) >>> 9) << 4)] = i));
              var u = 1732584193,
                p = -271733879,
                f = -1732584194,
                g = 271733878;
              for (s = 0; s < t.length; s += 16)
                ((c = u),
                  (l = p),
                  (d = f),
                  (h = g),
                  (u = n(u, p, f, g, t[s], 7, -680876936)),
                  (g = n(g, u, p, f, t[s + 1], 12, -389564586)),
                  (f = n(f, g, u, p, t[s + 2], 17, 606105819)),
                  (p = n(p, f, g, u, t[s + 3], 22, -1044525330)),
                  (u = n(u, p, f, g, t[s + 4], 7, -176418897)),
                  (g = n(g, u, p, f, t[s + 5], 12, 1200080426)),
                  (f = n(f, g, u, p, t[s + 6], 17, -1473231341)),
                  (p = n(p, f, g, u, t[s + 7], 22, -45705983)),
                  (u = n(u, p, f, g, t[s + 8], 7, 1770035416)),
                  (g = n(g, u, p, f, t[s + 9], 12, -1958414417)),
                  (f = n(f, g, u, p, t[s + 10], 17, -42063)),
                  (p = n(p, f, g, u, t[s + 11], 22, -1990404162)),
                  (u = n(u, p, f, g, t[s + 12], 7, 1804603682)),
                  (g = n(g, u, p, f, t[s + 13], 12, -40341101)),
                  (f = n(f, g, u, p, t[s + 14], 17, -1502002290)),
                  (u = a(u,
                    (p = n(p, f, g, u, t[s + 15], 22, 1236535329)), f, g, t[s + 1], 5, -165796510, )),
                  (g = a(g, u, p, f, t[s + 6], 9, -1069501632)),
                  (f = a(f, g, u, p, t[s + 11], 14, 643717713)),
                  (p = a(p, f, g, u, t[s], 20, -373897302)),
                  (u = a(u, p, f, g, t[s + 5], 5, -701558691)),
                  (g = a(g, u, p, f, t[s + 10], 9, 38016083)),
                  (f = a(f, g, u, p, t[s + 15], 14, -660478335)),
                  (p = a(p, f, g, u, t[s + 4], 20, -405537848)),
                  (u = a(u, p, f, g, t[s + 9], 5, 568446438)),
                  (g = a(g, u, p, f, t[s + 14], 9, -1019803690)),
                  (f = a(f, g, u, p, t[s + 3], 14, -187363961)),
                  (p = a(p, f, g, u, t[s + 8], 20, 1163531501)),
                  (u = a(u, p, f, g, t[s + 13], 5, -1444681467)),
                  (g = a(g, u, p, f, t[s + 2], 9, -51403784)),
                  (f = a(f, g, u, p, t[s + 7], 14, 1735328473)),
                  (u = o(u,
                    (p = a(p, f, g, u, t[s + 12], 20, -1926607734)), f, g, t[s + 5], 4, -378558, )),
                  (g = o(g, u, p, f, t[s + 8], 11, -2022574463)),
                  (f = o(f, g, u, p, t[s + 11], 16, 1839030562)),
                  (p = o(p, f, g, u, t[s + 14], 23, -35309556)),
                  (u = o(u, p, f, g, t[s + 1], 4, -1530992060)),
                  (g = o(g, u, p, f, t[s + 4], 11, 1272893353)),
                  (f = o(f, g, u, p, t[s + 7], 16, -155497632)),
                  (p = o(p, f, g, u, t[s + 10], 23, -1094730640)),
                  (u = o(u, p, f, g, t[s + 13], 4, 681279174)),
                  (g = o(g, u, p, f, t[s], 11, -358537222)),
                  (f = o(f, g, u, p, t[s + 3], 16, -722521979)),
                  (p = o(p, f, g, u, t[s + 6], 23, 76029189)),
                  (u = o(u, p, f, g, t[s + 9], 4, -640364487)),
                  (g = o(g, u, p, f, t[s + 12], 11, -421815835)),
                  (f = o(f, g, u, p, t[s + 15], 16, 530742520)),
                  (u = r(u,
                    (p = o(p, f, g, u, t[s + 2], 23, -995338651)), f, g, t[s], 6, -198630844, )),
                  (g = r(g, u, p, f, t[s + 7], 10, 1126891415)),
                  (f = r(f, g, u, p, t[s + 14], 15, -1416354905)),
                  (p = r(p, f, g, u, t[s + 5], 21, -57434055)),
                  (u = r(u, p, f, g, t[s + 12], 6, 1700485571)),
                  (g = r(g, u, p, f, t[s + 3], 10, -1894986606)),
                  (f = r(f, g, u, p, t[s + 10], 15, -1051523)),
                  (p = r(p, f, g, u, t[s + 1], 21, -2054922799)),
                  (u = r(u, p, f, g, t[s + 8], 6, 1873313359)),
                  (g = r(g, u, p, f, t[s + 15], 10, -30611744)),
                  (f = r(f, g, u, p, t[s + 6], 15, -1560198380)),
                  (p = r(p, f, g, u, t[s + 13], 21, 1309151649)),
                  (u = r(u, p, f, g, t[s + 4], 6, -145523070)),
                  (g = r(g, u, p, f, t[s + 11], 10, -1120210379)),
                  (f = r(f, g, u, p, t[s + 2], 15, 718787259)),
                  (p = r(p, f, g, u, t[s + 9], 21, -343485551)),
                  (u = e(u, c)),
                  (p = e(p, l)),
                  (f = e(f, d)),
                  (g = e(g, h)));
              return [u, p, f, g];
            }

            function c(e) {
              var t,
                i = "",
                n = 32 * e.length;
              for (t = 0; t < n; t += 8) i += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
              return i;
            }

            function l(e) {
              var t,
                i = [];
              for (i[(e.length >> 2) - 1] = void 0, t = 0; t < i.length; t += 1) i[t] = 0;
              var n = 8 * e.length;
              for (t = 0; t < n; t += 8) i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
              return i;
            }

            function d(e) {
              return c(s(l(e), 8 * e.length));
            }

            function h(e, t) {
              var i,
                n,
                a = l(e),
                o = [],
                r = [];
              for (o[15] = r[15] = void 0, a.length > 16 && (a = s(a, 8 * e.length)), i = 0; i < 16; i += 1)
                ((o[i] = 909522486 ^ a[i]), (r[i] = 1549556828 ^ a[i]));
              return (
                (n = s(o.concat(l(t)), 512 + 8 * t.length)), c(s(r.concat(n), 640)));
            }

            function u(e) {
              var t,
                i,
                n = "";
              for (i = 0; i < e.length; i += 1)
                ((t = e.charCodeAt(i)),
                  (n += "0123456789abcdef".charAt((t >>> 4) & 15) + "0123456789abcdef".charAt(15 & t)));
              return n;
            }

            function p(e) {
              return unescape(encodeURIComponent(e));
            }

            function f(e) {
              return d(p(e));
            }

            function g(e, t) {
              return h(p(e), p(t));
            }

            function y(e, t, i) {
              return t ? (i ? g(t, e) : u(g(t, e))) : i ? f(e) : u(f(e));
            }
            ("undefined" != typeof $global && ($global.window.md5 = y), "function" == typeof define && define.amd ? define(function() {
              return y;
            }) : "object" == typeof t && t.exports ? (t.exports = y) : ((void 0).md5 = y));
          })(), cc._RF.pop());
      };
