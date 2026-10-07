// module: 6
// deps: {}
module.exports = {};
const __mod = function(e, t) {
        (function(e) {
          void 0 !== t && (t.exports = e);
          var i = "listeners",
            n = {
              on: function(e, t) {
                return (r(this, e).push(t), this);
              },
              once: function(e, t) {
                var i = this;
                return ((n.originalListener = t), r(i, e).push(n), i);

                function n() {
                  (o.call(i, e, n), t.apply(this, arguments));
                }
              },
              off: o,
              emit: function(e, t) {
                var i = this,
                  n = r(i, e, !0);
                if (!n) return !1;
                var a = arguments.length;
                if (1 === a) n.forEach(function(e) {
                  e.call(i);
                });
                else if (2 === a) n.forEach(function(e) {
                  e.call(i, t);
                });
                else {
                  var o = Array.prototype.slice.call(arguments, 1);
                  n.forEach(function(e) {
                    e.apply(i, o);
                  });
                }
                return !!n.length;
              },
            };

          function a(e) {
            for (var t in n) e[t] = n[t];
            return e;
          }

          function o(e, t) {
            var n;
            if (arguments.length) {
              if (t) {
                if ((n = r(this, e, !0))) {
                  if (!(n = n.filter(function(e) {
                      return e !== t && e.originalListener !== t;
                    })).length) return o.call(this, e);
                  this[i][e] = n;
                }
              } else if ((n = this[i]) && (delete n[e], !Object.keys(n).length)) return o.call(this);
            } else delete this[i];
            return this;
          }

          function r(e, t, n) {
            if (!n || e[i]) {
              var a = e[i] || (e[i] = {});
              return a[t] || (a[t] = []);
            }
          }
          (a(e.prototype), (e.mixin = a));
        })(function e() {
          if (!(this instanceof e)) return new e();
        });
      };
