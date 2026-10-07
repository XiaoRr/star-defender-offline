// module: utils
// deps: {"../../Script/libppgame/md5":"md5"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        (cc._RF.push(t, "7d243SkrRhMe5nc6g5v26vu", "utils"), Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.generateSignedParams = i.rotateVector = i.utils = void 0));
        var n = e("../../Script/libppgame/md5"),
          a = new Map(),
          o = ["", "k", "m", "b", "t", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", ],
          r = "0123456789abcdef".split("");

        function s(e) {
          void 0 === e && (e = 32);
          for (var t = [], i = 0; i < e; i++) t[i] = r[Math.floor(16 * Math.random())];
          return t.join("");
        }

        function c(e) {
          function t(e, t) {
            return (e << t) | (e >>> (32 - t));
          }

          function i(e, t) {
            var i = 2147483648 & e,
              n = 2147483648 & t,
              a = 1073741824 & e,
              o = 1073741824 & t,
              r = (1073741823 & e) + (1073741823 & t);
            return a & o ? 2147483648 ^ r ^ i ^ n : a | o ? 1073741824 & r ? 3221225472 ^ r ^ i ^ n : 1073741824 ^ r ^ i ^ n : r ^ i ^ n;
          }

          function n(e, t, i) {
            return (e & t) | (~e & i);
          }

          function a(e, t, i) {
            return (e & i) | (t & ~i);
          }

          function o(e, t, i) {
            return e ^ t ^ i;
          }

          function r(e, t, i) {
            return t ^ (e | ~i);
          }

          function s(e, a, o, r, s, c, l) {
            return ((e = i(e, i(i(n(a, o, r), s), l))), i(t(e, c), a));
          }

          function c(e, n, o, r, s, c, l) {
            return ((e = i(e, i(i(a(n, o, r), s), l))), i(t(e, c), n));
          }

          function l(e, n, a, r, s, c, l) {
            return ((e = i(e, i(i(o(n, a, r), s), l))), i(t(e, c), n));
          }

          function d(e, n, a, o, s, c, l) {
            return ((e = i(e, i(i(r(n, a, o), s), l))), i(t(e, c), n));
          }

          function h(e) {
            var t,
              i = "",
              n = "";
            for (t = 0; t <= 3; t++) i += (n = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(n.length - 2, 2, );
            return i;
          }
          for (var u = (function(e) {
                for (var t,
                    i = e.length,
                    n = i + 8,
                    a = 16 * ((n - (n % 64)) / 64 + 1),
                    o = Array(a - 1),
                    r = 0,
                    s = 0; s < i;)
                  ((r = (s % 4) * 8),
                    (o[(t = (s - (s % 4)) / 4)] = o[t] | (e.charCodeAt(s) << r)), s++);
                return (
                  (r = (s % 4) * 8),
                  (o[(t = (s - (s % 4)) / 4)] = o[t] | (128 << r)),
                  (o[a - 2] = i << 3),
                  (o[a - 1] = i >>> 29), o);
              })(e),
              p = 1732584193,
              f = 4023233417,
              g = 2562383102,
              y = 271733878,
              m = 0; m < u.length; m += 16) {
            var _ = p,
              v = f,
              b = g,
              w = y;
            ((p = s(p, f, g, y, u[m + 0], 7, 3614090360)),
              (y = s(y, p, f, g, u[m + 1], 12, 3905402710)),
              (g = s(g, y, p, f, u[m + 2], 17, 606105819)),
              (f = s(f, g, y, p, u[m + 3], 22, 3250441966)),
              (p = s(p, f, g, y, u[m + 4], 7, 4118548399)),
              (y = s(y, p, f, g, u[m + 5], 12, 1200080426)),
              (g = s(g, y, p, f, u[m + 6], 17, 2821735955)),
              (f = s(f, g, y, p, u[m + 7], 22, 4249261313)),
              (p = s(p, f, g, y, u[m + 8], 7, 1770035416)),
              (y = s(y, p, f, g, u[m + 9], 12, 2336552879)),
              (g = s(g, y, p, f, u[m + 10], 17, 4294925233)),
              (f = s(f, g, y, p, u[m + 11], 22, 2304563134)),
              (p = s(p, f, g, y, u[m + 12], 7, 1804603682)),
              (y = s(y, p, f, g, u[m + 13], 12, 4254626195)),
              (g = s(g, y, p, f, u[m + 14], 17, 2792965006)),
              (p = c(p,
                (f = s(f, g, y, p, u[m + 15], 22, 1236535329)), g, y, u[m + 1], 5, 4129170786, )),
              (y = c(y, p, f, g, u[m + 6], 9, 3225465664)),
              (g = c(g, y, p, f, u[m + 11], 14, 643717713)),
              (f = c(f, g, y, p, u[m + 0], 20, 3921069994)),
              (p = c(p, f, g, y, u[m + 5], 5, 3593408605)),
              (y = c(y, p, f, g, u[m + 10], 9, 38016083)),
              (g = c(g, y, p, f, u[m + 15], 14, 3634488961)),
              (f = c(f, g, y, p, u[m + 4], 20, 3889429448)),
              (p = c(p, f, g, y, u[m + 9], 5, 568446438)),
              (y = c(y, p, f, g, u[m + 14], 9, 3275163606)),
              (g = c(g, y, p, f, u[m + 3], 14, 4107603335)),
              (f = c(f, g, y, p, u[m + 8], 20, 1163531501)),
              (p = c(p, f, g, y, u[m + 13], 5, 2850285829)),
              (y = c(y, p, f, g, u[m + 2], 9, 4243563512)),
              (g = c(g, y, p, f, u[m + 7], 14, 1735328473)),
              (p = l(p,
                (f = c(f, g, y, p, u[m + 12], 20, 2368359562)), g, y, u[m + 5], 4, 4294588738, )),
              (y = l(y, p, f, g, u[m + 8], 11, 2272392833)),
              (g = l(g, y, p, f, u[m + 11], 16, 1839030562)),
              (f = l(f, g, y, p, u[m + 14], 23, 4259657740)),
              (p = l(p, f, g, y, u[m + 1], 4, 2763975236)),
              (y = l(y, p, f, g, u[m + 4], 11, 1272893353)),
              (g = l(g, y, p, f, u[m + 7], 16, 4139469664)),
              (f = l(f, g, y, p, u[m + 10], 23, 3200236656)),
              (p = l(p, f, g, y, u[m + 13], 4, 681279174)),
              (y = l(y, p, f, g, u[m + 0], 11, 3936430074)),
              (g = l(g, y, p, f, u[m + 3], 16, 3572445317)),
              (f = l(f, g, y, p, u[m + 6], 23, 76029189)),
              (p = l(p, f, g, y, u[m + 9], 4, 3654602809)),
              (y = l(y, p, f, g, u[m + 12], 11, 3873151461)),
              (g = l(g, y, p, f, u[m + 15], 16, 530742520)),
              (p = d(p,
                (f = l(f, g, y, p, u[m + 2], 23, 3299628645)), g, y, u[m + 0], 6, 4096336452, )),
              (y = d(y, p, f, g, u[m + 7], 10, 1126891415)),
              (g = d(g, y, p, f, u[m + 14], 15, 2878612391)),
              (f = d(f, g, y, p, u[m + 5], 21, 4237533241)),
              (p = d(p, f, g, y, u[m + 12], 6, 1700485571)),
              (y = d(y, p, f, g, u[m + 3], 10, 2399980690)),
              (g = d(g, y, p, f, u[m + 10], 15, 4293915773)),
              (f = d(f, g, y, p, u[m + 1], 21, 2240044497)),
              (p = d(p, f, g, y, u[m + 8], 6, 1873313359)),
              (y = d(y, p, f, g, u[m + 15], 10, 4264355552)),
              (g = d(g, y, p, f, u[m + 6], 15, 2734768916)),
              (f = d(f, g, y, p, u[m + 13], 21, 1309151649)),
              (p = d(p, f, g, y, u[m + 4], 6, 4149444226)),
              (y = d(y, p, f, g, u[m + 11], 10, 3174756917)),
              (g = d(g, y, p, f, u[m + 2], 15, 718787259)),
              (f = d(f, g, y, p, u[m + 9], 21, 3951481745)),
              (p = i(p, _)),
              (f = i(f, v)),
              (g = i(g, b)),
              (y = i(y, w)));
          }
          return h(p) + h(f) + h(g) + h(y);
        }

        function l(e, t, i) {
          return (void 0 === t && (t = ""), void 0 === i && (i = !1), "function" == typeof n ? n(e, t, i) : n && "function" == typeof n.md5 ? n.md5(e, t, i) : window.md5 ? window.md5(e, t, i) : c(e + t));
        }
        ((i.utils = {
            my_md5: l,
            random: function(e, t) {
              return e + Math.floor(Math.random() * (t - e + 1));
            },
            shuffle: function(e, t) {
              void 0 === t && (t = void 0);
              var i = -1,
                n = e.length,
                a = n - 1;
              for (t = void 0 === t ? n : t; ++i < t;) {
                var o = i + Math.floor(Math.random() * (a - i + 1)),
                  r = e[o];
                ((e[o] = e[i]), (e[i] = r));
              }
              return ((e.length = t), e);
            },
            remove: function(e, t, i) {
              void 0 === i && (i = 1);
              var n = t + i - 1,
                a = e.slice((n || t) + 1 || this.length);
              return ((e.length = t < 0 ? e.length + t : t), e.push.apply(e, a));
            },
            replace_string: function(e, t) {
              return e.replace(/\[([a-zA-Z0-9]+)\]/g, function(e) {
                for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                var a = i[0];
                if (a) {
                  var o = t[a];
                  if (o) return o;
                }
                return e;
              });
            },
            random_n: function(e, t) {
              a.clear();
              for (var i = [], n = e, o = 0; o < t; o++) {
                var r = 1 + Math.floor(Math.random() * n),
                  s = a.get(r);
                if ((s ? i.push(s) : i.push(r), r != n)) {
                  var c = a.get(n);
                  c ? a.set(r, c) : a.set(r, n);
                }
                n -= 1;
              }
              return i;
            },
            random_weights_n: function(e, t) {
              for (var i, n, a = [], o = e.length, r = 0, s = [], c = 0; c < o; c++)
                ((r += e[c]), s.push([c + 1, e[c]]));
              for (c = 0; c < t; c++) {
                n = 1 + Math.floor(Math.random() * r);
                for (var l = 0; l < o; l++) {
                  if (n <= (i = s[l])[1]) {
                    (a.push(i[0]), l < o - 1 && (s[l] = s[o - 1]),
                      (r -= i[1]),
                      (o -= 1));
                    break;
                  }
                  n -= i[1];
                }
              }
              return a;
            },
            fix_number: function(e) {
              if (e === 1 / 0) return "Infinity";
              for (var t, i = 0; e >= 1e3;)((e /= 1e3), i++);
              if (i > o.length - 1) {
                var n = i - o.length + 1,
                  a = Math.floor(n / 26),
                  r = n - 26 * a;
                if (a >= 25 && r > 0) return "infinity";
                t = String.fromCharCode(98 + a) + String.fromCharCode(97 + r);
              } else t = o[i];
              return e < 10 ? "" + Math.floor(100 * e) / 100 + t : e < 100 ? "" + Math.floor(10 * e) / 10 + t : "" + Math.floor(e) + t;
            },
            delay: function(e) {
              var t = new Date().getTime();
              return new Promise(function(i) {
                setTimeout(function() {
                  i(new Date().getTime() - t);
                }, e);
              });
            },
            uuid: function(e) {
              if ((void 0 === e && (e = 32), e >= 20)) {
                var t = new Date(),
                  i = t.getFullYear(),
                  n = t.getMonth() + 1,
                  a = t.getDate(),
                  o = t.getHours(),
                  r = t.getMinutes(),
                  c = t.getSeconds();
                return (i + (n >= 10 ? "" + n : "0" + n) + (a >= 10 ? "" + a : "0" + a) + (o >= 10 ? "" + o : "0" + o) + (r >= 10 ? "" + r : "0" + r) + (c >= 10 ? "" + c : "0" + c) + "_" + s(17));
              }
              Math.random().toString(36).slice(-e);
            },
            getHHMMSS: function(e, t) {
              (void 0 === e && (e = null), void 0 === t && (t = !1));
              var i = (e = e || new Date()).getHours(),
                n = e.getMinutes(),
                a = e.getSeconds();
              return (
                (i >= 10 ? "" + i : "0" + i) + ":" + (n >= 10 ? "" + n : "0" + n) + ":" + (a >= 10 ? "" + a : "0" + a) + (t ? " " + e.getMilliseconds() : ""));
            },
            popPanel: function(e, t) {
              (void 0 === t && (t = "panel"), (e.active = !0));
              var i = e.getChildByName(t);
              ((i.scale = 0), cc.tween(i).to(0.15, {
                scale: 1.2
              }, {
                easing: "sineOut"
              }).to(0.15, {
                scale: 1
              }, {
                easing: "sineIn"
              }).start());
            },
            parseDateString: function(e) {
              var t = e.split(/[- :]/);
              return new Date(parseInt(t[0]), parseInt(t[1]) - 1, parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5]), ).getTime();
            },
            getCurrentDate: function() {
              var e = new Date();
              return (e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0"));
            },
          }),
          (i.rotateVector = function(e, t) {
            var i = (-t * Math.PI) / 180,
              n = Math.cos(i),
              a = Math.sin(i);
            return cc.v2(e.x * n - e.y * a, e.x * a + e.y * n);
          }),
          (i.generateSignedParams = function(e, t) {
            for (var i = {}, n = 0, a = Object.entries(e); n < a.length; n++) {
              var o = a[n],
                r = o[0],
                s = o[1];
              null != s && (i[r] = s);
            }
            var c = Object.keys(i).sort().map(function(e) {
              return (encodeURIComponent(e) + "=" + encodeURIComponent(i[e].toString()));
            }).join("&");
            return c + "&sign=" + l(c + t, "", !1);
          }), cc._RF.pop());
      };
