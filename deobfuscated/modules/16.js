// module: 16
// deps: {"./bufferish":17}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./bufferish");

        function a(e) {
          return new Uint8Array(e);
        }
        (((i = t.exports = n.hasArrayBuffer ? a(0) : []).alloc = a),
          (i.concat = n.concat),
          (i.from = function(e) {
            if (n.isView(e)) {
              var t = e.byteOffset,
                a = e.byteLength;
              (e = e.buffer).byteLength !== a && (e.slice ? (e = e.slice(t, t + a)) : (e = new Uint8Array(e)).byteLength !== a && (e = Array.prototype.slice.call(e, t, t + a)));
            } else {
              if ("string" == typeof e) return n.from.call(i, e);
              if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            }
            return new Uint8Array(e);
          }));
      };
