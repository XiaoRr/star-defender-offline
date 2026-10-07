// module: 25
// deps: {"./encode-buffer":23,"event-lite":6}
module.exports = {};
const __mod = function(e, t, i) {
        i.Encoder = o;
        var n = e("event-lite"),
          a = e("./encode-buffer").EncodeBuffer;

        function o(e) {
          if (!(this instanceof o)) return new o(e);
          a.call(this, e);
        }
        ((o.prototype = new a()), n.mixin(o.prototype),
          (o.prototype.encode = function(e) {
            (this.write(e), this.emit("data", this.read()));
          }),
          (o.prototype.end = function(e) {
            (arguments.length && this.encode(e), this.flush(), this.emit("end"));
          }));
      };
