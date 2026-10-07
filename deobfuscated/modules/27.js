// module: 27
// deps: {"./bufferish":17,"./encode":24}
module.exports = {};
const __mod = function(e, t, i) {
        i.setExtPackers = function(e) {
          (e.addExtPacker(14, Error, [h, c]), e.addExtPacker(1, EvalError, [h, c]), e.addExtPacker(2, RangeError, [h, c]), e.addExtPacker(3, ReferenceError, [h, c]), e.addExtPacker(4, SyntaxError, [h, c]), e.addExtPacker(5, TypeError, [h, c]), e.addExtPacker(6, URIError, [h, c]), e.addExtPacker(10, RegExp, [d, c]), e.addExtPacker(11, Boolean, [l, c]), e.addExtPacker(12, String, [l, c]), e.addExtPacker(13, Date, [Number, c]), e.addExtPacker(15, Number, [l, c]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, r), e.addExtPacker(18, Uint8Array, r), e.addExtPacker(19, Int16Array, r), e.addExtPacker(20, Uint16Array, r), e.addExtPacker(21, Int32Array, r), e.addExtPacker(22, Uint32Array, r), e.addExtPacker(23, Float32Array, r), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, r), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, r), e.addExtPacker(26, ArrayBuffer, r), e.addExtPacker(29, DataView, r)), a.hasBuffer && e.addExtPacker(27, o, a.from));
        };
        var n,
          a = e("./bufferish"),
          o = a.global,
          r = a.Uint8Array.from,
          s = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1,
          };

        function c(t) {
          return (n || (n = e("./encode").encode), n(t));
        }

        function l(e) {
          return e.valueOf();
        }

        function d(e) {
          (e = RegExp.prototype.toString.call(e).split("/")).shift();
          var t = [e.pop()];
          return (t.unshift(e.join("/")), t);
        }

        function h(e) {
          var t = {};
          for (var i in s) t[i] = e[i];
          return t;
        }
      };
