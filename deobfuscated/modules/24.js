// module: 24
// deps: {"./encode-buffer":23}
module.exports = {};
const __mod = function(e, t, i) {
        i.encode = function(e, t) {
          var i = new n(t);
          return (i.write(e), i.read());
        };
        var n = e("./encode-buffer").EncodeBuffer;
      };
