// module: 14
// deps: {"./bufferish":17}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./bufferish"),
          a = n.global;

        function o(e) {
          return new a(e);
        }
        (((i = t.exports = n.hasBuffer ? o(0) : []).alloc = (n.hasBuffer && a.alloc) || o),
          (i.concat = n.concat),
          (i.from = function(e) {
            if (!n.isBuffer(e) && n.isView(e)) e = n.Uint8Array.from(e);
            else if (n.isArrayBuffer(e)) e = new Uint8Array(e);
            else {
              if ("string" == typeof e) return n.from.call(i, e);
              if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            }
            return a.from && 1 !== a.from.length ? a.from(e) : new a(e);
          }));
      };
