// module: 22
// deps: {"./decode-buffer":20,"event-lite":6}
module.exports = {};
const __mod = function(e, t, i) {
        i.Decoder = o;
        var n = e("event-lite"),
          a = e("./decode-buffer").DecodeBuffer;

        function o(e) {
          if (!(this instanceof o)) return new o(e);
          a.call(this, e);
        }
        ((o.prototype = new a()), n.mixin(o.prototype),
          (o.prototype.decode = function(e) {
            (arguments.length && this.write(e), this.flush());
          }),
          (o.prototype.push = function(e) {
            this.emit("data", e);
          }),
          (o.prototype.end = function(e) {
            (this.decode(e), this.emit("end"));
          }));
      };
