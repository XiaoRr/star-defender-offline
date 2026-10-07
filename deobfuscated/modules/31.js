// module: 31
// deps: {"./codec-base":18,"./ext-buffer":26,"./ext-unpacker":28,"./read-format":32,"./read-token":33}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./ext-buffer").ExtBuffer,
          a = e("./ext-unpacker"),
          o = e("./read-format").readUint8,
          r = e("./read-token"),
          s = e("./codec-base");

        function c(e) {
          var t = r.getReadToken(e);
          return function(e) {
            var i = o(e),
              n = t[i];
            if (!n) throw new Error("Invalid type: " + (i ? "0x" + i.toString(16) : i), );
            return n(e);
          };
        }

        function l() {
          var e = this.options;
          return (
            (this.decode = c(e)), e && e.preset && a.setExtUnpackers(this), this);
        }
        (s.install({
            addExtUnpacker: function(e, t) {
              (this.extUnpackers || (this.extUnpackers = []))[e] = s.filter(t);
            },
            getExtUnpacker: function(e) {
              return (
                (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
                  return new n(t, e);
                });
            },
            init: l,
          }),
          (i.preset = l.call(s.preset)));
      };
