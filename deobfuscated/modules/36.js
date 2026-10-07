// module: 36
// deps: {"./bufferish":17,"./bufferish-proto":15,"./ext-buffer":26,"./write-token":35,"./write-uint8":37,"int64-buffer":8,"isarray":9}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("isarray"),
          a = e("int64-buffer"),
          o = a.Uint64BE,
          r = a.Int64BE,
          s = e("./bufferish"),
          c = e("./bufferish-proto"),
          l = e("./write-token"),
          d = e("./write-uint8").uint8,
          h = e("./ext-buffer").ExtBuffer,
          u = "undefined" != typeof Uint8Array,
          p = "undefined" != typeof Map,
          f = [];
        ((f[1] = 212),
          (f[2] = 213),
          (f[4] = 214),
          (f[8] = 215),
          (f[16] = 216),
          (i.getWriteType = function(e) {
            var t,
              i = l.getWriteToken(e),
              a = e && e.useraw,
              g = u && e && e.binarraybuffer,
              y = g ? s.isArrayBuffer : s.isBuffer,
              m = g ? function(e, t) {
                N(e, new Uint8Array(t));
              } : N,
              _ = p && e && e.usemap ? function(e, t) {
                if (!(t instanceof Map)) return x(e, t);
                var n = t.size;
                i[n < 16 ? 128 + n : n <= 65535 ? 222 : 223](e, n);
                var a = e.codec.encode;
                t.forEach(function(t, i) {
                  (a(e, i), a(e, t));
                });
              } : x;
            return {
              boolean: function(e, t) {
                i[t ? 195 : 194](e, t);
              },
              function: C,
              number: function(e, t) {
                var n = 0 | t;
                t === n ? i[-32 <= n && n <= 127 ? 255 & n : 0 <= n ? n <= 255 ? 204 : n <= 65535 ? 205 : 206 : -128 <= n ? 208 : -32768 <= n ? 209 : 210](e, n) : i[203](e, t);
              },
              object: a ? function(e, t) {
                if (y(t)) return k(e, t);
                w(e, t);
              } : w,
              string: ((t = a ? function(e) {
                return e < 32 ? 1 : e <= 65535 ? 3 : 5;
              } : function(e) {
                return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
              }), function(e, n) {
                var a = n.length,
                  o = 5 + 3 * a;
                e.offset = e.reserve(o);
                var r = e.buffer,
                  s = t(a),
                  l = e.offset + s;
                a = c.write.call(r, n, l);
                var d = t(a);
                if (s !== d) {
                  var h = l + d - s,
                    u = l + a;
                  c.copy.call(r, r, h, l, u);
                }
                (i[1 === d ? 160 + a : d <= 3 ? 215 + d : 219](e, a),
                  (e.offset += a));
              }),
              symbol: C,
              undefined: C,
            };

            function v(e, t) {
              i[207](e, t.toArray());
            }

            function b(e, t) {
              i[211](e, t.toArray());
            }

            function w(e, t) {
              if (null === t) return C(e, t);
              if (y(t)) return m(e, t);
              if (n(t)) return B(e, t);
              if (o.isUint64BE(t)) return v(e, t);
              if (r.isInt64BE(t)) return b(e, t);
              var i = e.codec.getExtPacker(t);
              if ((i && (t = i(t)), t instanceof h)) return A(e, t);
              _(e, t);
            }

            function C(e, t) {
              i[192](e, t);
            }

            function B(e, t) {
              var n = t.length;
              i[n < 16 ? 144 + n : n <= 65535 ? 220 : 221](e, n);
              for (var a = e.codec.encode, o = 0; o < n; o++) a(e, t[o]);
            }

            function N(e, t) {
              var n = t.length;
              (i[n < 255 ? 196 : n <= 65535 ? 197 : 198](e, n), e.send(t));
            }

            function A(e, t) {
              var n = t.buffer,
                a = n.length,
                o = f[a] || (a < 255 ? 199 : a <= 65535 ? 200 : 201);
              (i[o](e, a), d[t.type](e), e.send(n));
            }

            function x(e, t) {
              var n = Object.keys(t),
                a = n.length;
              i[a < 16 ? 128 + a : a <= 65535 ? 222 : 223](e, a);
              var o = e.codec.encode;
              n.forEach(function(i) {
                (o(e, i), o(e, t[i]));
              });
            }

            function k(e, t) {
              var n = t.length;
              (i[n < 32 ? 160 + n : n <= 65535 ? 218 : 219](e, n), e.send(t));
            }
          }));
      };
