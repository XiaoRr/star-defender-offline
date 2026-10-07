// module: 11
// deps: {"buffer":2}
module.exports = {};
const __mod = function(e, t) {
        (function(e) {
          function i(e) {
            return e && e.isBuffer && e;
          }
          t.exports = i(void 0 !== e && e) || i(this.Buffer) || i("undefined" != typeof window && window.Buffer) || this.Buffer;
        }).call(this, e("buffer").Buffer);
      };
