// module: 20
// deps: {"./flex-buffer":30,"./read-core":31}
module.exports = {};
const __mod = function(e, t, i) {
        i.DecodeBuffer = a;
        var n = e("./read-core").preset;

        function a(e) {
          if (!(this instanceof a)) return new a(e);
          if (e && ((this.options = e), e.codec)) {
            var t = (this.codec = e.codec);
            t.bufferish && (this.bufferish = t.bufferish);
          }
        }
        (e("./flex-buffer").FlexDecoder.mixin(a.prototype),
          (a.prototype.codec = n),
          (a.prototype.fetch = function() {
            return this.codec.decode(this);
          }));
      };
