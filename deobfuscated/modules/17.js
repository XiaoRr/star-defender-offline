// module: 17
// deps: {"./buffer-global":11,"./bufferish-array":13,"./bufferish-buffer":14,"./bufferish-proto":15,"./bufferish-uint8array":16,"isarray":9}
module.exports = {};
const __mod = function(e, t, i) {
        var n = (i.global = e("./buffer-global")),
          a = (i.hasBuffer = n && !!n.isBuffer),
          o = (i.hasArrayBuffer = "undefined" != typeof ArrayBuffer),
          r = (i.isArray = e("isarray"));
        i.isArrayBuffer = o ? function(e) {
          return e instanceof ArrayBuffer || f(e);
        } : m;
        var s = (i.isBuffer = a ? n.isBuffer : m),
          c = (i.isView = o ? ArrayBuffer.isView || _("ArrayBuffer", "buffer") : m);
        ((i.alloc = p),
          (i.concat = function(e, t) {
            t || ((t = 0), Array.prototype.forEach.call(e, function(e) {
              t += e.length;
            }));
            var n = (this !== i && this) || e[0],
              a = p.call(n, t),
              o = 0;
            return (Array.prototype.forEach.call(e, function(e) {
              o += u.copy.call(e, a, o);
            }), a);
          }),
          (i.from = function(e) {
            return "string" == typeof e ? g.call(this, e) : y(this).from(e);
          }));
        var l = (i.Array = e("./bufferish-array")),
          d = (i.Buffer = e("./bufferish-buffer")),
          h = (i.Uint8Array = e("./bufferish-uint8array")),
          u = (i.prototype = e("./bufferish-proto"));

        function p(e) {
          return y(this).alloc(e);
        }
        var f = _("ArrayBuffer");

        function g(e) {
          var t = 3 * e.length,
            i = p.call(this, t),
            n = u.write.call(i, e);
          return (t !== n && (i = u.slice.call(i, 0, n)), i);
        }

        function y(e) {
          return s(e) ? d : c(e) ? h : r(e) ? l : a ? d : o ? h : l;
        }

        function m() {
          return !1;
        }

        function _(e, t) {
          return (
            (e = "[object " + e + "]"),
            function(i) {
              return null != i && {}.toString.call(t ? i[t] : i) === e;
            });
        }
      };
