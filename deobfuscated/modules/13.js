// module: 13
// deps: {"./bufferish":17}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./bufferish");

        function a(e) {
          return new Array(e);
        }
        (((i = t.exports = a(0)).alloc = a),
          (i.concat = n.concat),
          (i.from = function(e) {
            if (!n.isBuffer(e) && n.isView(e)) e = n.Uint8Array.from(e);
            else if (n.isArrayBuffer(e)) e = new Uint8Array(e);
            else {
              if ("string" == typeof e) return n.from.call(i, e);
              if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            }
            return Array.prototype.slice.call(e);
          }));
      };
