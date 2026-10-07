// module: 32
// deps: {"./bufferish":17,"./bufferish-proto":15,"ieee754":7,"int64-buffer":8}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("ieee754"),
          a = e("int64-buffer"),
          o = a.Uint64BE,
          r = a.Int64BE;
        ((i.getReadFormat = function(e) {
            var t = s.hasArrayBuffer && e && e.binarraybuffer,
              i = e && e.int64;
            return {
              map: l && e && e.usemap ? u : h,
              array: p,
              str: f,
              bin: t ? y : g,
              ext: m,
              uint8: _,
              uint16: b,
              uint32: C,
              uint64: N(8, i ? k : A),
              int8: v,
              int16: w,
              int32: B,
              int64: N(8, i ? T : x),
              float32: N(4, S),
              float64: N(8, P),
            };
          }),
          (i.readUint8 = _));
        var s = e("./bufferish"),
          c = e("./bufferish-proto"),
          l = "undefined" != typeof Map,
          d = !0;

        function h(e, t) {
          var i,
            n = {},
            a = new Array(t),
            o = new Array(t),
            r = e.codec.decode;
          for (i = 0; i < t; i++)((a[i] = r(e)), (o[i] = r(e)));
          for (i = 0; i < t; i++) n[a[i]] = o[i];
          return n;
        }

        function u(e, t) {
          var i,
            n = new Map(),
            a = new Array(t),
            o = new Array(t),
            r = e.codec.decode;
          for (i = 0; i < t; i++)((a[i] = r(e)), (o[i] = r(e)));
          for (i = 0; i < t; i++) n.set(a[i], o[i]);
          return n;
        }

        function p(e, t) {
          for (var i = new Array(t), n = e.codec.decode, a = 0; a < t; a++) i[a] = n(e);
          return i;
        }

        function f(e, t) {
          var i = e.reserve(t),
            n = i + t;
          return c.toString.call(e.buffer, "utf-8", i, n);
        }

        function g(e, t) {
          var i = e.reserve(t),
            n = i + t,
            a = c.slice.call(e.buffer, i, n);
          return s.from(a);
        }

        function y(e, t) {
          var i = e.reserve(t),
            n = i + t,
            a = c.slice.call(e.buffer, i, n);
          return s.Uint8Array.from(a).buffer;
        }

        function m(e, t) {
          var i = e.reserve(t + 1),
            n = e.buffer[i++],
            a = i + t,
            o = e.codec.getExtUnpacker(n);
          if (!o) throw new Error("Invalid ext type: " + (n ? "0x" + n.toString(16) : n), );
          return o(c.slice.call(e.buffer, i, a));
        }

        function _(e) {
          var t = e.reserve(1);
          return e.buffer[t];
        }

        function v(e) {
          var t = e.reserve(1),
            i = e.buffer[t];
          return 128 & i ? i - 256 : i;
        }

        function b(e) {
          var t = e.reserve(2),
            i = e.buffer;
          return (i[t++] << 8) | i[t];
        }

        function w(e) {
          var t = e.reserve(2),
            i = e.buffer,
            n = (i[t++] << 8) | i[t];
          return 32768 & n ? n - 65536 : n;
        }

        function C(e) {
          var t = e.reserve(4),
            i = e.buffer;
          return 16777216 * i[t++] + (i[t++] << 16) + (i[t++] << 8) + i[t];
        }

        function B(e) {
          var t = e.reserve(4),
            i = e.buffer;
          return (i[t++] << 24) | (i[t++] << 16) | (i[t++] << 8) | i[t];
        }

        function N(e, t) {
          return function(i) {
            var n = i.reserve(e);
            return t.call(i.buffer, n, d);
          };
        }

        function A(e) {
          return new o(this, e).toNumber();
        }

        function x(e) {
          return new r(this, e).toNumber();
        }

        function k(e) {
          return new o(this, e);
        }

        function T(e) {
          return new r(this, e);
        }

        function S(e) {
          return n.read(this, e, !1, 23, 4);
        }

        function P(e) {
          return n.read(this, e, !1, 52, 8);
        }
      };
