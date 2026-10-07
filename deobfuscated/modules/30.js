// module: 30
// deps: {"./bufferish":17}
module.exports = {};
const __mod = function(e, t, i) {
        ((i.FlexDecoder = a), (i.FlexEncoder = o));
        var n = e("./bufferish");

        function a() {
          if (!(this instanceof a)) return new a();
        }

        function o() {
          if (!(this instanceof o)) return new o();
        }

        function r() {
          throw new Error("method not implemented: write()");
        }

        function s() {
          throw new Error("method not implemented: fetch()");
        }

        function c() {
          return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch();
        }

        function l(e) {
          (this.buffers || (this.buffers = [])).push(e);
        }

        function d() {
          return (this.buffers || (this.buffers = [])).shift();
        }

        function h(e) {
          return function(t) {
            for (var i in e) t[i] = e[i];
            return t;
          };
        }
        ((a.mixin = h({
            bufferish: n,
            write: function(e) {
              var t = this.offset ? n.prototype.slice.call(this.buffer, this.offset) : this.buffer;
              ((this.buffer = t ? (e ? this.bufferish.concat([t, e]) : t) : e),
                (this.offset = 0));
            },
            fetch: s,
            flush: function() {
              for (; this.offset < this.buffer.length;) {
                var e,
                  t = this.offset;
                try {
                  e = this.fetch();
                } catch (i) {
                  if (i && "BUFFER_SHORTAGE" != i.message) throw i;
                  this.offset = t;
                  break;
                }
                this.push(e);
              }
            },
            push: l,
            pull: d,
            read: c,
            reserve: function(e) {
              var t = this.offset,
                i = t + e;
              if (i > this.buffer.length) throw new Error("BUFFER_SHORTAGE");
              return ((this.offset = i), t);
            },
            offset: 0,
          })), a.mixin(a.prototype),
          (o.mixin = h({
            bufferish: n,
            write: r,
            fetch: function() {
              var e = this.start;
              if (e < this.offset) {
                var t = (this.start = this.offset);
                return n.prototype.slice.call(this.buffer, e, t);
              }
            },
            flush: function() {
              for (; this.start < this.offset;) {
                var e = this.fetch();
                e && this.push(e);
              }
            },
            push: l,
            pull: function() {
              var e = this.buffers || (this.buffers = []),
                t = e.length > 1 ? this.bufferish.concat(e) : e[0];
              return ((e.length = 0), t);
            },
            read: c,
            reserve: function(e) {
              var t = 0 | e;
              if (this.buffer) {
                var i = this.buffer.length,
                  n = 0 | this.offset,
                  a = n + t;
                if (a < i) return ((this.offset = a), n);
                (this.flush(),
                  (e = Math.max(e, Math.min(2 * i, this.maxBufferSize))));
              }
              return (
                (e = Math.max(e, this.minBufferSize)),
                (this.buffer = this.bufferish.alloc(e)),
                (this.start = 0),
                (this.offset = t), 0);
            },
            send: function(e) {
              var t = e.length;
              if (t > this.minBufferSize)(this.flush(), this.push(e));
              else {
                var i = this.reserve(t);
                n.prototype.copy.call(e, this.buffer, i);
              }
            },
            maxBufferSize: 65536,
            minBufferSize: 2048,
            offset: 0,
            start: 0,
          })), o.mixin(o.prototype));
      };
