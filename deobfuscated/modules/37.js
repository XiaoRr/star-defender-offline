// module: 37
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        for (var n = (i.uint8 = new Array(256)), a = 0; a <= 255; a++) n[a] = o(a);

        function o(e) {
          return function(t) {
            var i = t.reserve(1);
            t.buffer[i] = e;
          };
        }
      };
