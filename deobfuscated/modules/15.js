// module: 15
// deps: {"./buffer-lite":12,"./bufferish":17}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./buffer-lite");
        ((i.copy = c),
          (i.slice = l),
          (i.toString = function(e, t, i) {
            return (!r && a.isBuffer(this) ? this.toString : n.toString).apply(this, arguments, );
          }),
          (i.write = function() {
            return (this.write || n.write).apply(this, arguments);
          }));
        var a = e("./bufferish"),
          o = a.global,
          r = a.hasBuffer && "TYPED_ARRAY_SUPPORT" in o,
          s = r && !o.TYPED_ARRAY_SUPPORT;

        function c(e, t, i, o) {
          var r = a.isBuffer(this),
            c = a.isBuffer(e);
          if (r && c) return this.copy(e, t, i, o);
          if (s || r || c || !a.isView(this) || !a.isView(e)) return n.copy.call(this, e, t, i, o);
          var d = i || null != o ? l.call(this, i, o) : this;
          return (e.set(d, t), d.length);
        }

        function l(e, t) {
          var i = this.slice || (!s && this.subarray);
          if (i) return i.call(this, e, t);
          var n = a.alloc.call(this, t - e);
          return (c.call(this, n, 0, e, t), n);
        }
      };
