// module: 34
// deps: {"./codec-base":18,"./ext-buffer":26,"./ext-packer":27,"./write-type":36}
module.exports = {};
const __mod = function(e, t, i) {
        var n = e("./ext-buffer").ExtBuffer,
          a = e("./ext-packer"),
          o = e("./write-type"),
          r = e("./codec-base");

        function s(e) {
          var t = o.getWriteType(e);
          return function(e, i) {
            var n = t[typeof i];
            if (!n) throw new Error('Unsupported type "' + typeof i + '": ' + i);
            n(e, i);
          };
        }

        function c() {
          var e = this.options;
          return (
            (this.encode = s(e)), e && e.preset && a.setExtPackers(this), this);
        }
        (r.install({
            addExtPacker: function(e, t, i) {
              i = r.filter(i);
              var a = t.name;

              function o(t) {
                return (i && (t = i(t)), new n(t, e));
              }
              a && "Object" !== a ? ((this.extPackers || (this.extPackers = {}))[a] = o) : (this.extEncoderList || (this.extEncoderList = [])).unshift([
                t,
                o,
              ]);
            },
            getExtPacker: function(e) {
              var t = this.extPackers || (this.extPackers = {}),
                i = e.constructor,
                n = i && i.name && t[i.name];
              if (n) return n;
              for (var a = this.extEncoderList || (this.extEncoderList = []),
                  o = a.length,
                  r = 0; r < o; r++) {
                var s = a[r];
                if (i === s[0]) return s[1];
              }
            },
            init: c,
          }),
          (i.preset = c.call(r.preset)));
      };
