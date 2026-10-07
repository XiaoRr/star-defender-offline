// module: 18
// deps: {"./bufferish":17,"isarray":9}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("isarray");
        ((i.createCodec = c),
          (i.install = function(e) {
            for (var t in e) o.prototype[t] = r(o.prototype[t], e[t]);
          }),
          (i.filter = function(e) {
            return n(e) ? s(e) : e;
          }));
        var a = e("./bufferish");

        function o(e) {
          if (!(this instanceof o)) return new o(e);
          ((this.options = e), this.init());
        }

        function r(e, t) {
          return e && t ? function() {
            return (e.apply(this, arguments), t.apply(this, arguments));
          } : e || t;
        }

        function s(e) {
          return (
            (e = e.slice()),
            function(i) {
              return e.reduce(t, i);
            });

          function t(e, t) {
            return t(e);
          }
        }

        function c(e) {
          return new o(e);
        }
        ((o.prototype.init = function() {
            var e = this.options;
            return (e && e.uint8array && (this.bufferish = a.Uint8Array), this);
          }),
          (i.preset = c({
            preset: !0
          })));
      };
