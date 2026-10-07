// module: 28
// deps: {"./bufferish":17,"./decode":21}
module.exports = {};
const __mod = function(e, t, i) {
        i.setExtUnpackers = function(e) {
          (e.addExtUnpacker(14, [s, l(Error)]), e.addExtUnpacker(1, [s, l(EvalError)]), e.addExtUnpacker(2, [s, l(RangeError)]), e.addExtUnpacker(3, [s, l(ReferenceError)]), e.addExtUnpacker(4, [s, l(SyntaxError)]), e.addExtUnpacker(5, [s, l(TypeError)]), e.addExtUnpacker(6, [s, l(URIError)]), e.addExtUnpacker(10, [s, c]), e.addExtUnpacker(11, [s, d(Boolean)]), e.addExtUnpacker(12, [s, d(String)]), e.addExtUnpacker(13, [s, d(Date)]), e.addExtUnpacker(15, [s, d(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, d(Int8Array)), e.addExtUnpacker(18, d(Uint8Array)), e.addExtUnpacker(19, [h, d(Int16Array)]), e.addExtUnpacker(20, [h, d(Uint16Array)]), e.addExtUnpacker(21, [h, d(Int32Array)]), e.addExtUnpacker(22, [h, d(Uint32Array)]), e.addExtUnpacker(23, [h, d(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [h, d(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, d(Uint8ClampedArray)), e.addExtUnpacker(26, h), e.addExtUnpacker(29, [h, d(DataView)])), a.hasBuffer && e.addExtUnpacker(27, d(o)));
        };
        var n,
          a = e("./bufferish"),
          o = a.global,
          r = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1,
          };

        function s(t) {
          return (n || (n = e("./decode").decode), n(t));
        }

        function c(e) {
          return RegExp.apply(null, e);
        }

        function l(e) {
          return function(t) {
            var i = new e();
            for (var n in r) i[n] = t[n];
            return i;
          };
        }

        function d(e) {
          return function(t) {
            return new e(t);
          };
        }

        function h(e) {
          return new Uint8Array(e).buffer;
        }
      };
