// module: 23
// deps: {"./flex-buffer":30,"./write-core":34}
module.exports = {};
const __mod = function(e, t, i) {
        i.EncodeBuffer = a;
        var n = e("./write-core").preset;

        function a(e) {
          if (!(this instanceof a)) return new a(e);
          if (e && ((this.options = e), e.codec)) {
            var t = (this.codec = e.codec);
            t.bufferish && (this.bufferish = t.bufferish);
          }
        }
        (e("./flex-buffer").FlexEncoder.mixin(a.prototype),
          (a.prototype.codec = n),
          (a.prototype.write = function(e) {
            this.codec.encode(this, e);
          }));
      };
