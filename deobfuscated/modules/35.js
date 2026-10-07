// module: 35
// deps: {"./bufferish":17,"./write-uint8":37,"ieee754":7,"int64-buffer":8}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("ieee754"),
          a = e("int64-buffer"),
          o = a.Uint64BE,
          r = a.Int64BE,
          s = e("./write-uint8").uint8,
          c = e("./bufferish"),
          l = c.global,
          d = c.hasBuffer && "TYPED_ARRAY_SUPPORT" in l && !l.TYPED_ARRAY_SUPPORT,
          h = (c.hasBuffer && l.prototype) || {};

        function u() {
          var e = s.slice();
          return (
            (e[196] = f(196)),
            (e[197] = g(197)),
            (e[198] = y(198)),
            (e[199] = f(199)),
            (e[200] = g(200)),
            (e[201] = y(201)),
            (e[202] = m(202, 4, h.writeFloatBE || b, !0)),
            (e[203] = m(203, 8, h.writeDoubleBE || w, !0)),
            (e[204] = f(204)),
            (e[205] = g(205)),
            (e[206] = y(206)),
            (e[207] = m(207, 8, _)),
            (e[208] = f(208)),
            (e[209] = g(209)),
            (e[210] = y(210)),
            (e[211] = m(211, 8, v)),
            (e[217] = f(217)),
            (e[218] = g(218)),
            (e[219] = y(219)),
            (e[220] = g(220)),
            (e[221] = y(221)),
            (e[222] = g(222)),
            (e[223] = y(223)), e);
        }

        function p() {
          var e = s.slice();
          return (
            (e[196] = m(196, 1, l.prototype.writeUInt8)),
            (e[197] = m(197, 2, l.prototype.writeUInt16BE)),
            (e[198] = m(198, 4, l.prototype.writeUInt32BE)),
            (e[199] = m(199, 1, l.prototype.writeUInt8)),
            (e[200] = m(200, 2, l.prototype.writeUInt16BE)),
            (e[201] = m(201, 4, l.prototype.writeUInt32BE)),
            (e[202] = m(202, 4, l.prototype.writeFloatBE)),
            (e[203] = m(203, 8, l.prototype.writeDoubleBE)),
            (e[204] = m(204, 1, l.prototype.writeUInt8)),
            (e[205] = m(205, 2, l.prototype.writeUInt16BE)),
            (e[206] = m(206, 4, l.prototype.writeUInt32BE)),
            (e[207] = m(207, 8, _)),
            (e[208] = m(208, 1, l.prototype.writeInt8)),
            (e[209] = m(209, 2, l.prototype.writeInt16BE)),
            (e[210] = m(210, 4, l.prototype.writeInt32BE)),
            (e[211] = m(211, 8, v)),
            (e[217] = m(217, 1, l.prototype.writeUInt8)),
            (e[218] = m(218, 2, l.prototype.writeUInt16BE)),
            (e[219] = m(219, 4, l.prototype.writeUInt32BE)),
            (e[220] = m(220, 2, l.prototype.writeUInt16BE)),
            (e[221] = m(221, 4, l.prototype.writeUInt32BE)),
            (e[222] = m(222, 2, l.prototype.writeUInt16BE)),
            (e[223] = m(223, 4, l.prototype.writeUInt32BE)), e);
        }

        function f(e) {
          return function(t, i) {
            var n = t.reserve(2),
              a = t.buffer;
            ((a[n++] = e), (a[n] = i));
          };
        }

        function g(e) {
          return function(t, i) {
            var n = t.reserve(3),
              a = t.buffer;
            ((a[n++] = e), (a[n++] = i >>> 8), (a[n] = i));
          };
        }

        function y(e) {
          return function(t, i) {
            var n = t.reserve(5),
              a = t.buffer;
            ((a[n++] = e),
              (a[n++] = i >>> 24),
              (a[n++] = i >>> 16),
              (a[n++] = i >>> 8),
              (a[n] = i));
          };
        }

        function m(e, t, i, n) {
          return function(a, o) {
            var r = a.reserve(t + 1);
            ((a.buffer[r++] = e), i.call(a.buffer, o, r, n));
          };
        }

        function _(e, t) {
          new o(this, t, e);
        }

        function v(e, t) {
          new r(this, t, e);
        }

        function b(e, t) {
          n.write(this, e, t, !1, 23, 4);
        }

        function w(e, t) {
          n.write(this, e, t, !1, 52, 8);
        }
        i.getWriteToken = function(e) {
          return e && e.uint8array ? (((t = u())[202] = m(202, 4, b)), (t[203] = m(203, 8, w)), t) : d || (c.hasBuffer && e && e.safe) ? p() : u();
          var t;
        };
      };
