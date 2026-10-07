// module: 33
// deps: {"./read-format":32}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./read-format");

        function a(e) {
          var t,
            i = new Array(256);
          for (t = 0; t <= 127; t++) i[t] = r(t);
          for (t = 128; t <= 143; t++) i[t] = c(t - 128, e.map);
          for (t = 144; t <= 159; t++) i[t] = c(t - 144, e.array);
          for (t = 160; t <= 191; t++) i[t] = c(t - 160, e.str);
          for (i[192] = r(null), i[193] = null, i[194] = r(!1), i[195] = r(!0), i[196] = s(e.uint8, e.bin), i[197] = s(e.uint16, e.bin), i[198] = s(e.uint32, e.bin), i[199] = s(e.uint8, e.ext), i[200] = s(e.uint16, e.ext), i[201] = s(e.uint32, e.ext), i[202] = e.float32, i[203] = e.float64, i[204] = e.uint8, i[205] = e.uint16, i[206] = e.uint32, i[207] = e.uint64, i[208] = e.int8, i[209] = e.int16, i[210] = e.int32, i[211] = e.int64, i[212] = c(1, e.ext), i[213] = c(2, e.ext), i[214] = c(4, e.ext), i[215] = c(8, e.ext), i[216] = c(16, e.ext), i[217] = s(e.uint8, e.str), i[218] = s(e.uint16, e.str), i[219] = s(e.uint32, e.str), i[220] = s(e.uint16, e.array), i[221] = s(e.uint32, e.array), i[222] = s(e.uint16, e.map), i[223] = s(e.uint32, e.map), t = 224; t <= 255; t++) i[t] = r(t - 256);
          return i;
        }

        function o(e) {
          var t,
            i = a(e).slice();
          for (i[217] = i[196], i[218] = i[197], i[219] = i[198], t = 160; t <= 191; t++) i[t] = c(t - 160, e.bin);
          return i;
        }

        function r(e) {
          return function() {
            return e;
          };
        }

        function s(e, t) {
          return function(i) {
            var n = e(i);
            return t(i, n);
          };
        }

        function c(e, t) {
          return function(i) {
            return t(i, e);
          };
        }
        i.getReadToken = function(e) {
          var t = n.getReadFormat(e);
          return e && e.useraw ? o(t) : a(t);
        };
      };
