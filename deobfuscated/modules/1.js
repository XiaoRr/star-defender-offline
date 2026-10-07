// module: 1
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        ((i.byteLength = function(e) {
            var t = l(e),
              i = t[0],
              n = t[1];
            return (3 * (i + n)) / 4 - n;
          }),
          (i.toByteArray = function(e) {
            var t,
              i,
              n = l(e),
              r = n[0],
              s = n[1],
              c = new o(d(0, r, s)),
              h = 0,
              u = s > 0 ? r - 4 : r;
            for (i = 0; i < u; i += 4)
              ((t = (a[e.charCodeAt(i)] << 18) | (a[e.charCodeAt(i + 1)] << 12) | (a[e.charCodeAt(i + 2)] << 6) | a[e.charCodeAt(i + 3)]),
                (c[h++] = (t >> 16) & 255),
                (c[h++] = (t >> 8) & 255),
                (c[h++] = 255 & t));
            return (2 === s && ((t = (a[e.charCodeAt(i)] << 2) | (a[e.charCodeAt(i + 1)] >> 4)),
              (c[h++] = 255 & t)), 1 === s && ((t = (a[e.charCodeAt(i)] << 10) | (a[e.charCodeAt(i + 1)] << 4) | (a[e.charCodeAt(i + 2)] >> 2)),
              (c[h++] = (t >> 8) & 255),
              (c[h++] = 255 & t)), c);
          }),
          (i.fromByteArray = function(e) {
            for (var t, i = e.length, a = i % 3, o = [], r = 0, s = i - a; r < s; r += 16383) o.push(h(e, r, r + 16383 > s ? s : r + 16383));
            return (1 === a ? ((t = e[i - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "==")) : 2 === a && ((t = (e[i - 2] << 8) + e[i - 1]), o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "=", )), o.join(""));
          }));
        for (var n = [],
            a = [],
            o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0,
            c = r.length; s < c;
          ++s)
          ((n[s] = r[s]), (a[r.charCodeAt(s)] = s));

        function l(e) {
          var t = e.length;
          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var i = e.indexOf("=");
          return (-1 === i && (i = t), [i, i === t ? 0 : 4 - (i % 4)]);
        }

        function d(e, t, i) {
          return (3 * (t + i)) / 4 - i;
        }

        function h(e, t, i) {
          for (var a, o, r = [], s = t; s < i; s += 3)
            ((a = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])), r.push(n[((o = a) >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o], ));
          return r.join("");
        }
        ((a["-".charCodeAt(0)] = 62), (a["_".charCodeAt(0)] = 63));
      };
