// module: 4
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        ((i.read = function(e, t, i, n, a) {
            var o,
              r,
              s = 8 * a - n - 1,
              c = (1 << s) - 1,
              l = c >> 1,
              d = -7,
              h = i ? a - 1 : 0,
              u = i ? -1 : 1,
              p = e[t + h];
            for (h += u, o = p & ((1 << -d) - 1), p >>= -d, d += s; d > 0; o = 256 * o + e[t + h], h += u, d -= 8);
            for (r = o & ((1 << -d) - 1), o >>= -d, d += n; d > 0; r = 256 * r + e[t + h], h += u, d -= 8);
            if (0 === o) o = 1 - l;
            else {
              if (o === c) return r ? NaN : (1 / 0) * (p ? -1 : 1);
              ((r += Math.pow(2, n)), (o -= l));
            }
            return (p ? -1 : 1) * r * Math.pow(2, o - n);
          }),
          (i.write = function(e, t, i, n, a, o) {
            var r,
              s,
              c,
              l = 8 * o - a - 1,
              d = (1 << l) - 1,
              h = d >> 1,
              u = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = n ? 0 : o - 1,
              f = n ? 1 : -1,
              g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? ((s = isNaN(t) ? 1 : 0), (r = d)) : ((r = Math.floor(Math.log(t) / Math.LN2)), t * (c = Math.pow(2, -r)) < 1 && (r--, (c *= 2)),
                (t += r + h >= 1 ? u / c : u * Math.pow(2, 1 - h)) * c >= 2 && (r++, (c /= 2)), r + h >= d ? ((s = 0), (r = d)) : r + h >= 1 ? ((s = (t * c - 1) * Math.pow(2, a)), (r += h)) : ((s = t * Math.pow(2, h - 1) * Math.pow(2, a)),
                  (r = 0))); a >= 8; e[i + p] = 255 & s, p += f, s /= 256, a -= 8);
            for (r = (r << a) | s, l += a; l > 0; e[i + p] = 255 & r, p += f, r /= 256, l -= 8);
            e[i + p - f] |= 128 * g;
          }));
      };
