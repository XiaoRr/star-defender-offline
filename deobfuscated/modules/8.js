// module: 8
// deps: {"buffer":2}
module.exports = {};
const __mod = function(e, t, i) {
        (function(e) {
          !(function(t) {
            var i,
              n = "undefined",
              a = n !== typeof e && e,
              o = n !== typeof Uint8Array && Uint8Array,
              r = n !== typeof ArrayBuffer && ArrayBuffer,
              s = [0, 0, 0, 0, 0, 0, 0, 0],
              c = Array.isArray || function(e) {
                return (!!e && "[object Array]" == Object.prototype.toString.call(e));
              },
              l = 4294967296,
              d = 16777216;

            function h(e, c, h) {
              var C = c ? 0 : 4,
                B = c ? 4 : 0,
                N = c ? 0 : 3,
                A = c ? 1 : 2,
                x = c ? 2 : 1,
                k = c ? 3 : 0,
                T = c ? _ : b,
                S = c ? v : w,
                P = R.prototype,
                I = "is" + e,
                O = "_" + I;
              return (
                (P.buffer = void 0),
                (P.offset = 0),
                (P[O] = !0),
                (P.toNumber = D),
                (P.toString = function(e) {
                  var t = this.buffer,
                    i = this.offset,
                    n = j(t, i + C),
                    a = j(t, i + B),
                    o = "",
                    r = !h && 2147483648 & n;
                  for (r && ((n = ~n), (a = l - a)), e = e || 10;;) {
                    var s = (n % e) * l + a;
                    if (
                      ((n = Math.floor(n / e)),
                        (a = Math.floor(s / e)),
                        (o = (s % e).toString(e) + o), !n && !a)) break;
                  }
                  return (r && (o = "-" + o), o);
                }),
                (P.toJSON = D),
                (P.toArray = u), a && (P.toBuffer = p), o && (P.toArrayBuffer = f),
                (R[I] = function(e) {
                  return !(!e || !e[O]);
                }),
                (t[e] = R), R);

              function R(e, t, i, n) {
                return this instanceof R ? M(this, e, t, i, n) : new R(e, t, i, n);
              }

              function M(e, t, a, c, l) {
                (o && r && (t instanceof r && (t = new o(t)), c instanceof r && (c = new o(c))), t || a || c || i ? (g(t, a) || ((l = a), (c = t), (a = 0), (t = new(i || Array)(8))),
                  (e.buffer = t),
                  (e.offset = a |= 0), n !== typeof c && ("string" == typeof c ? E(t, a, c, l || 10) : g(c, l) ? y(t, a, c, l) : "number" == typeof l ? (L(t, a + C, c), L(t, a + B, l)) : c > 0 ? T(t, a, c) : c < 0 ? S(t, a, c) : y(t, a, s, 0))) : (e.buffer = m(s, 0)));
              }

              function E(e, t, i, n) {
                var a = 0,
                  o = i.length,
                  r = 0,
                  s = 0;
                "-" === i[0] && a++;
                for (var c = a; a < o;) {
                  var d = parseInt(i[a++], n);
                  if (!(d >= 0)) break;
                  ((s = s * n + d), (r = r * n + Math.floor(s / l)), (s %= l));
                }
                (c && ((r = ~r), s ? (s = l - s) : r++), L(e, t + C, r), L(e, t + B, s));
              }

              function D() {
                var e = this.buffer,
                  t = this.offset,
                  i = j(e, t + C),
                  n = j(e, t + B);
                return (h || (i |= 0), i ? i * l + n : n);
              }

              function L(e, t, i) {
                ((e[t + k] = 255 & i),
                  (i >>= 8),
                  (e[t + x] = 255 & i),
                  (i >>= 8),
                  (e[t + A] = 255 & i),
                  (i >>= 8),
                  (e[t + N] = 255 & i));
              }

              function j(e, t) {
                return (e[t + N] * d + (e[t + A] << 16) + (e[t + x] << 8) + e[t + k]);
              }
            }

            function u(e) {
              var t = this.buffer,
                n = this.offset;
              return (
                (i = null), !1 !== e && 0 === n && 8 === t.length && c(t) ? t : m(t, n));
            }

            function p(t) {
              var n = this.buffer,
                o = this.offset;
              if (
                ((i = a), !1 !== t && 0 === o && 8 === n.length && e.isBuffer(n))) return n;
              var r = new a(8);
              return (y(r, 0, n, o), r);
            }

            function f(e) {
              var t = this.buffer,
                n = this.offset,
                a = t.buffer;
              if (
                ((i = o), !1 !== e && 0 === n && a instanceof r && 8 === a.byteLength)) return a;
              var s = new o(8);
              return (y(s, 0, t, n), s.buffer);
            }

            function g(e, t) {
              var i = e && e.length;
              return ((t |= 0), i && t + 8 <= i && "string" != typeof e[t]);
            }

            function y(e, t, i, n) {
              ((t |= 0), (n |= 0));
              for (var a = 0; a < 8; a++) e[t++] = 255 & i[n++];
            }

            function m(e, t) {
              return Array.prototype.slice.call(e, t, t + 8);
            }

            function _(e, t, i) {
              for (var n = t + 8; n > t;)((e[--n] = 255 & i), (i /= 256));
            }

            function v(e, t, i) {
              var n = t + 8;
              for (i++; n > t;)((e[--n] = (255 & -i) ^ 255), (i /= 256));
            }

            function b(e, t, i) {
              for (var n = t + 8; t < n;)((e[t++] = 255 & i), (i /= 256));
            }

            function w(e, t, i) {
              var n = t + 8;
              for (i++; t < n;)((e[t++] = (255 & -i) ^ 255), (i /= 256));
            }
            (h("Uint64BE", !0, !0), h("Int64BE", !0, !1), h("Uint64LE", !1, !0), h("Int64LE", !1, !1));
          })("object" == typeof i && "string" != typeof i.nodeName ? i : this || {}, );
        }).call(this, e("buffer").Buffer);
      };
