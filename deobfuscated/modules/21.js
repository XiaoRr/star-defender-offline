// module: 21
// deps: {"./decode-buffer":20}
module.exports = {};
const __mod = function(e, t, i) {
        i.decode = function(e, t) {
          var i = new n(t);
          return (i.write(e), i.read());
        };
        var n = e("./decode-buffer").DecodeBuffer;
      };
