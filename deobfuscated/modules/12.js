// module: 12
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        ((i.copy = function(e, t, i, n) {
            var a;
            (i || (i = 0), n || 0 === n || (n = this.length), t || (t = 0));
            var o = n - i;
            if (e === this && i < t && t < n)
              for (a = o - 1; a >= 0; a--) e[a + t] = this[a + i];
            else
              for (a = 0; a < o; a++) e[a + t] = this[a + i];
            return o;
          }),
          (i.toString = function(e, t, i) {
            var n = 0 | t;
            i || (i = this.length);
            for (var a = "", o = 0; n < i;)
              (o = this[n++]) < 128 ? (a += String.fromCharCode(o)) : (192 == (224 & o) ? (o = ((31 & o) << 6) | (63 & this[n++])) : 224 == (240 & o) ? (o = ((15 & o) << 12) | ((63 & this[n++]) << 6) | (63 & this[n++])) : 240 == (248 & o) && (o = ((7 & o) << 18) | ((63 & this[n++]) << 12) | ((63 & this[n++]) << 6) | (63 & this[n++])), o >= 65536 ? ((o -= 65536),
                (a += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o), ))) : (a += String.fromCharCode(o)));
            return a;
          }),
          (i.write = function(e, t) {
            for (var i = t || (t |= 0), n = e.length, a = 0, o = 0; o < n;)
              (a = e.charCodeAt(o++)) < 128 ? (this[i++] = a) : a < 2048 ? ((this[i++] = 192 | (a >>> 6)),
                (this[i++] = 128 | (63 & a))) : a < 55296 || a > 57343 ? ((this[i++] = 224 | (a >>> 12)),
                (this[i++] = 128 | ((a >>> 6) & 63)),
                (this[i++] = 128 | (63 & a))) : ((a = 65536 + (((a - 55296) << 10) | (e.charCodeAt(o++) - 56320))),
                (this[i++] = 240 | (a >>> 18)),
                (this[i++] = 128 | ((a >>> 12) & 63)),
                (this[i++] = 128 | ((a >>> 6) & 63)),
                (this[i++] = 128 | (63 & a)));
            return i - t;
          }));
      };
