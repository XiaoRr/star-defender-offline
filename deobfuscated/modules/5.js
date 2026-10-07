// module: 5
// deps: {}
module.exports = {};
const __mod = function(e, t, i) {
        !(function(e, n) {
          "object" == typeof i && void 0 !== t ? n(i) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e.cloud = {}));
        })(this, function(e) {
          "use strict";
          var t = function(e, i) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
              }
              instanceof Array ? function(e, t) {
                e.__proto__ = t;
              } : function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              }))(e, i);
          };

          function i(e, i) {
            function n() {
              this.constructor = e;
            }
            (t(e, i),
              (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n())));
          }
          var n = function() {
            return (n = Object.assign || function(e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
          };

          function a(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; 0 <= s; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : 3 < o ? a(t, i, r) : a(t, i)) || r);
            3 < o && r && Object.defineProperty(t, i, r);
          }

          function o(e, t, i, n) {
            return new(i = i || Promise)(function(a, o) {
              function r(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  o(e);
                }
              }

              function s(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }

              function c(e) {
                var t;
                e.done ? a(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          }

          function r(e, t) {
            var i,
              n,
              a,
              o = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              },
              r = {
                next: s(0),
                throw: s(1),
                return: s(2)
              };
            return ("function" == typeof Symbol && (r[Symbol.iterator] = function() {
              return this;
            }), r);

            function s(r) {
              return function(s) {
                var c = [r, s];
                if (i) throw new TypeError("Generator is already executing.");
                for (; o;) try {
                  if (
                    ((i = 1), n && (a = 2 & c[0] ? n.return : c[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, c[1])).done)) return a;
                  switch (((n = 0), (c = a ? [2 & c[0], a.value] : c)[0])) {
                    case 0:
                    case 1:
                      a = c;
                      break;
                    case 4:
                      return (o.label++, {
                        value: c[1],
                        done: !1
                      });
                    case 5:
                      (o.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = o.ops.pop()), o.trys.pop());
                      continue;
                    default:
                      if (!(a = 0 < (a = o.trys).length && a[a.length - 1]) && (6 === c[0] || 2 === c[0])) {
                        o = 0;
                        continue;
                      }
                      if (3 === c[0] && (!a || (c[1] > a[0] && c[1] < a[3]))) o.label = c[1];
                      else if (6 === c[0] && o.label < a[1])
                        ((o.label = a[1]), (a = c));
                      else {
                        if (!(a && o.label < a[2])) {
                          (a[2] && o.ops.pop(), o.trys.pop());
                          continue;
                        }
                        ((o.label = a[2]), o.ops.push(c));
                      }
                  }
                  c = t.call(e, o);
                } catch (s) {
                  ((c = [6, s]), (n = 0));
                } finally {
                  i = a = 0;
                }
                if (5 & c[0]) throw c[1];
                return {
                  value: c[0] ? c[1] : void 0,
                  done: !0
                };
              };
            }
          }

          function s() {
            return function(e, t, i) {
              var n = i.value;
              i.value = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i,
                  a,
                  o = void 0 === (a = (c = e[0] || {}).success) ? null : a,
                  r = void 0 === (a = c.fail) ? null : a,
                  s = void 0 === (a = c.complete) ? null : a,
                  c = !s && !r && !o;
                try {
                  i = n.apply(this, e);
                } catch (e) {
                  return c ? Promise.reject(e) : (r && r(e), void(s && s(e)));
                }
                if (((i = i.then ? i : Promise.resolve(i)), c)) return i;
                i.then(function(e) {
                  try {
                    (o && o(e), s && s(e));
                  } catch (e) {
                    throw e;
                  }
                }).catch(function(e) {
                  (r && r(e), s && s(e));
                });
              };
            };
          }

          function c(e, t, i) {
            return (
              (t = (t = Array.isArray(t) ? t : t.split(".")).reduce(function(e, t, ) {
                return e ? e[t] : null;
              }, e)), i ? t || i : t);
          }

          function l(e, t) {
            return (e((t = {
              exports: {}
            }), t.exports), t.exports);
          }
          var d,
            h,
            u = l(function(e) {
              e.exports = e = (function(e) {
                var t = Object.create || function(e) {
                  return (
                    (i.prototype = e),
                    (e = new i()),
                    (i.prototype = null), e);
                };

                function i() {}
                var n = {},
                  a = (n.lib = {}),
                  o = (a.Base = {
                    extend: function(e) {
                      var i = t(this);
                      return (e && i.mixIn(e),
                        (i.hasOwnProperty("init") && this.init !== i.init) || (i.init = function() {
                          i.$super.init.apply(this, arguments);
                        }),
                        ((i.init.prototype = i).$super = this), i);
                    },
                    create: function() {
                      var e = this.extend();
                      return (e.init.apply(e, arguments), e);
                    },
                    init: function() {},
                    mixIn: function(e) {
                      for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                      e.hasOwnProperty("toString") && (this.toString = e.toString);
                    },
                    clone: function() {
                      return this.init.prototype.extend(this);
                    },
                  }),
                  r = (a.WordArray = o.extend({
                    init: function(e, t) {
                      ((e = this.words = e || []),
                        (this.sigBytes = null != t ? t : 4 * e.length));
                    },
                    toString: function(e) {
                      return (e || c).stringify(this);
                    },
                    concat: function(e) {
                      var t = this.words,
                        i = e.words,
                        n = this.sigBytes,
                        a = e.sigBytes;
                      if ((this.clamp(), n % 4))
                        for (var o = 0; o < a; o++) {
                          var r = (i[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                          t[(n + o) >>> 2] |= r << (24 - ((n + o) % 4) * 8);
                        }
                      else
                        for (o = 0; o < a; o += 4) t[(n + o) >>> 2] = i[o >>> 2];
                      return ((this.sigBytes += a), this);
                    },
                    clamp: function() {
                      var t = this.words,
                        i = this.sigBytes;
                      ((t[i >>> 2] &= 4294967295 << (32 - (i % 4) * 8)),
                        (t.length = e.ceil(i / 4)));
                    },
                    clone: function() {
                      var e = o.clone.call(this);
                      return ((e.words = this.words.slice(0)), e);
                    },
                    random: function(t) {
                      for (var i = [], n = 0; n < t; n += 4) {
                        var a = (function(t) {
                            var i = 987654321,
                              n = 4294967295;
                            return function() {
                              return (
                                (((((i = (36969 * (65535 & i) + (i >> 16)) & n) << 16) + (t = (18e3 * (65535 & t) + (t >> 16)) & n)) & n) / 4294967296 + 0.5) * (0.5 < e.random() ? 1 : -1));
                            };
                          })(4294967296 * (o || e.random())),
                          o = 987654071 * a();
                        i.push((4294967296 * a()) | 0);
                      }
                      return new r.init(i, t);
                    },
                  })),
                  s = (n.enc = {}),
                  c = (s.Hex = {
                    stringify: function(e) {
                      for (var t = e.words, i = e.sigBytes, n = [], a = 0; a < i; a++) {
                        var o = (t[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
                        (n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16)));
                      }
                      return n.join("");
                    },
                    parse: function(e) {
                      for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << (24 - (n % 8) * 4);
                      return new r.init(i, t / 2);
                    },
                  }),
                  l = (s.Latin1 = {
                    stringify: function(e) {
                      for (var t = e.words, i = e.sigBytes, n = [], a = 0; a < i; a++) {
                        var o = (t[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
                        n.push(String.fromCharCode(o));
                      }
                      return n.join("");
                    },
                    parse: function(e) {
                      for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << (24 - (n % 4) * 8);
                      return new r.init(i, t);
                    },
                  }),
                  d = (s.Utf8 = {
                    stringify: function(e) {
                      try {
                        return decodeURIComponent(escape(l.stringify(e)));
                      } catch (e) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function(e) {
                      return l.parse(unescape(encodeURIComponent(e)));
                    },
                  }),
                  h = (a.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                      ((this._data = new r.init()), (this._nDataBytes = 0));
                    },
                    _append: function(e) {
                      ("string" == typeof e && (e = d.parse(e)), this._data.concat(e),
                        (this._nDataBytes += e.sigBytes));
                    },
                    _process: function(t) {
                      var i = this._data,
                        n = i.words,
                        a = i.sigBytes,
                        o = this.blockSize,
                        s = a / (4 * o),
                        c = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o;
                      if (((t = e.min(4 * c, a)), c)) {
                        for (var l = 0; l < c; l += o) this._doProcessBlock(n, l);
                        var d = n.splice(0, c);
                        i.sigBytes -= t;
                      }
                      return new r.init(d, t);
                    },
                    clone: function() {
                      var e = o.clone.call(this);
                      return ((e._data = this._data.clone()), e);
                    },
                    _minBufferSize: 0,
                  })),
                  u = ((a.Hasher = h.extend({
                      cfg: o.extend(),
                      init: function(e) {
                        ((this.cfg = this.cfg.extend(e)), this.reset());
                      },
                      reset: function() {
                        (h.reset.call(this), this._doReset());
                      },
                      update: function(e) {
                        return (this._append(e), this._process(), this);
                      },
                      finalize: function(e) {
                        return (e && this._append(e), this._doFinalize());
                      },
                      blockSize: 16,
                      _createHelper: function(e) {
                        return function(t, i) {
                          return new e.init(i).finalize(t);
                        };
                      },
                      _createHmacHelper: function(e) {
                        return function(t, i) {
                          return new u.HMAC.init(e, i).finalize(t);
                        };
                      },
                    })),
                    (n.algo = {}));
                return n;
              })(Math);
            }),
            p = (l(function(e) {
              e.exports = (function(e) {
                var t = Math,
                  i = e,
                  n = i.lib,
                  a = n.WordArray,
                  o = n.Hasher,
                  r = i.algo,
                  s = [],
                  c = [];

                function l(e) {
                  for (var i = t.sqrt(e), n = 2; n <= i; n++)
                    if (!(e % n)) return !1;
                  return !0;
                }

                function d(e) {
                  return (4294967296 * (e - (0 | e))) | 0;
                }
                for (var h = 2, u = 0; u < 64;)
                  (l(h) && (u < 8 && (s[u] = d(t.pow(h, 0.5))),
                    (c[u] = d(t.pow(h, 1 / 3))), u++), h++);
                var p = [],
                  f = (r.SHA256 = o.extend({
                    _doReset: function() {
                      this._hash = new a.init(s.slice(0));
                    },
                    _doProcessBlock: function(e, t) {
                      for (var i = this._hash.words,
                          n = i[0],
                          a = i[1],
                          o = i[2],
                          r = i[3],
                          s = i[4],
                          l = i[5],
                          d = i[6],
                          h = i[7],
                          u = 0; u < 64; u++) {
                        if (u < 16) p[u] = 0 | e[t + u];
                        else {
                          var f = p[u - 15],
                            g = ((f << 25) | (f >>> 7)) ^ ((f << 14) | (f >>> 18)) ^ (f >>> 3),
                            y = p[u - 2],
                            m = ((y << 15) | (y >>> 17)) ^ ((y << 13) | (y >>> 19)) ^ (y >>> 10);
                          p[u] = g + p[u - 7] + m + p[u - 16];
                        }
                        var _ = (n & a) ^ (n & o) ^ (a & o),
                          v = ((n << 30) | (n >>> 2)) ^ ((n << 19) | (n >>> 13)) ^ ((n << 10) | (n >>> 22)),
                          b = h + (((s << 26) | (s >>> 6)) ^ ((s << 21) | (s >>> 11)) ^ ((s << 7) | (s >>> 25))) + ((s & l) ^ (~s & d)) + c[u] + p[u];
                        ((h = d),
                          (d = l),
                          (l = s),
                          (s = (r + b) | 0),
                          (r = o),
                          (o = a),
                          (a = n),
                          (n = (b + (v + _)) | 0));
                      }
                      ((i[0] = (i[0] + n) | 0),
                        (i[1] = (i[1] + a) | 0),
                        (i[2] = (i[2] + o) | 0),
                        (i[3] = (i[3] + r) | 0),
                        (i[4] = (i[4] + s) | 0),
                        (i[5] = (i[5] + l) | 0),
                        (i[6] = (i[6] + d) | 0),
                        (i[7] = (i[7] + h) | 0));
                    },
                    _doFinalize: function() {
                      var e = this._data,
                        i = e.words,
                        n = 8 * this._nDataBytes,
                        a = 8 * e.sigBytes;
                      return (
                        (i[a >>> 5] |= 128 << (24 - (a % 32))),
                        (i[14 + (((a + 64) >>> 9) << 4)] = t.floor(n / 4294967296, )),
                        (i[15 + (((a + 64) >>> 9) << 4)] = n),
                        (e.sigBytes = 4 * i.length), this._process(), this._hash);
                    },
                    clone: function() {
                      var e = o.clone.call(this);
                      return ((e._hash = this._hash.clone()), e);
                    },
                  }));
                return (
                  (i.SHA256 = o._createHelper(f)),
                  (i.HmacSHA256 = o._createHmacHelper(f)), e.SHA256);
              })(u);
            }), l(function(e) {
              var t, i;
              e.exports = ((t = (e = u).lib.Base),
                (i = e.enc.Utf8), void(e.algo.HMAC = t.extend({
                  init: function(e, t) {
                    ((e = this._hasher = new e.init()), "string" == typeof t && (t = i.parse(t)));
                    for (var n = e.blockSize,
                        a = 4 * n,
                        o = ((t = t.sigBytes > a ? e.finalize(t) : t).clamp(),
                          (e = this._oKey = t.clone()),
                          (t = this._iKey = t.clone()), e.words),
                        r = t.words,
                        s = 0; s < n; s++)
                      ((o[s] ^= 1549556828), (r[s] ^= 909522486));
                    ((e.sigBytes = t.sigBytes = a), this.reset());
                  },
                  reset: function() {
                    var e = this._hasher;
                    (e.reset(), e.update(this._iKey));
                  },
                  update: function(e) {
                    return (this._hasher.update(e), this);
                  },
                  finalize: function(e) {
                    var t = this._hasher;
                    return (
                      (e = t.finalize(e)), t.reset(), t.finalize(this._oKey.clone().concat(e)));
                  },
                })));
            }), l(function(e) {
              e.exports = u.HmacSHA256;
            })),
            f = l(function(e) {
              function t(e, t, n) {
                for (var a, o, r = [], s = 0, c = 0; c < t; c++) c % 4 && ((a = n[e.charCodeAt(c - 1)] << ((c % 4) * 2)),
                  (o = n[e.charCodeAt(c)] >>> (6 - (c % 4) * 2)),
                  (r[s >>> 2] |= (a | o) << (24 - (s % 4) * 8)), s++);
                return i.create(r, s);
              }
              var i;
              e.exports = ((i = (e = u).lib.WordArray),
                (e.enc.Base64 = {
                  stringify: function(e) {
                    for (var t = e.words,
                        i = e.sigBytes,
                        n = this._map,
                        a = (e.clamp(), []),
                        o = 0; o < i; o += 3)
                      for (var r = (((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) | (((t[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) & 255) << 8) | ((t[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
                          s = 0; s < 4 && o + 0.75 * s < i; s++) a.push(n.charAt((r >>> (6 * (3 - s))) & 63));
                    var c = n.charAt(64);
                    if (c)
                      for (; a.length % 4;) a.push(c);
                    return a.join("");
                  },
                  parse: function(e) {
                    var i = e.length,
                      n = this._map;
                    if (!(a = this._reverseMap))
                      for (var a = (this._reverseMap = []), o = 0; o < n.length; o++) a[n.charCodeAt(o)] = o;
                    var r = n.charAt(64);
                    return (r && -1 !== (r = e.indexOf(r)) && (i = r), t(e, i, a));
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                }), e.enc.Base64);
            }),
            g = l(function(e) {
              e.exports = (function(e) {
                for (var t = Math,
                    i = e,
                    n = i.lib,
                    a = n.WordArray,
                    o = n.Hasher,
                    r = i.algo,
                    s = [],
                    c = 0; c < 64; c++) s[c] = (4294967296 * t.abs(t.sin(c + 1))) | 0;
                var l = (r.MD5 = o.extend({
                  _doReset: function() {
                    this._hash = new a.init([
                      1732584193, 4023233417, 2562383102, 271733878,
                    ]);
                  },
                  _doProcessBlock: function(e, t) {
                    for (var i = 0; i < 16; i++) {
                      var n = t + i,
                        a = e[n];
                      e[n] = (16711935 & ((a << 8) | (a >>> 24))) | (4278255360 & ((a << 24) | (a >>> 8)));
                    }
                    var o = this._hash.words,
                      r = e[t + 0],
                      c = e[t + 1],
                      l = e[t + 2],
                      f = e[t + 3],
                      g = e[t + 4],
                      y = e[t + 5],
                      m = e[t + 6],
                      _ = e[t + 7],
                      v = e[t + 8],
                      b = e[t + 9],
                      w = e[t + 10],
                      C = e[t + 11],
                      B = e[t + 12],
                      N = e[t + 13],
                      A = e[t + 14],
                      x = e[t + 15],
                      k = o[0],
                      T = o[1],
                      S = o[2],
                      P = o[3];
                    ((k = d(k, T, S, P, r, 7, s[0])),
                      (P = d(P, k, T, S, c, 12, s[1])),
                      (S = d(S, P, k, T, l, 17, s[2])),
                      (T = d(T, S, P, k, f, 22, s[3])),
                      (k = d(k, T, S, P, g, 7, s[4])),
                      (P = d(P, k, T, S, y, 12, s[5])),
                      (S = d(S, P, k, T, m, 17, s[6])),
                      (T = d(T, S, P, k, _, 22, s[7])),
                      (k = d(k, T, S, P, v, 7, s[8])),
                      (P = d(P, k, T, S, b, 12, s[9])),
                      (S = d(S, P, k, T, w, 17, s[10])),
                      (T = d(T, S, P, k, C, 22, s[11])),
                      (k = d(k, T, S, P, B, 7, s[12])),
                      (P = d(P, k, T, S, N, 12, s[13])),
                      (S = d(S, P, k, T, A, 17, s[14])),
                      (k = h(k,
                        (T = d(T, S, P, k, x, 22, s[15])), S, P, c, 5, s[16], )),
                      (P = h(P, k, T, S, m, 9, s[17])),
                      (S = h(S, P, k, T, C, 14, s[18])),
                      (T = h(T, S, P, k, r, 20, s[19])),
                      (k = h(k, T, S, P, y, 5, s[20])),
                      (P = h(P, k, T, S, w, 9, s[21])),
                      (S = h(S, P, k, T, x, 14, s[22])),
                      (T = h(T, S, P, k, g, 20, s[23])),
                      (k = h(k, T, S, P, b, 5, s[24])),
                      (P = h(P, k, T, S, A, 9, s[25])),
                      (S = h(S, P, k, T, f, 14, s[26])),
                      (T = h(T, S, P, k, v, 20, s[27])),
                      (k = h(k, T, S, P, N, 5, s[28])),
                      (P = h(P, k, T, S, l, 9, s[29])),
                      (S = h(S, P, k, T, _, 14, s[30])),
                      (k = u(k,
                        (T = h(T, S, P, k, B, 20, s[31])), S, P, y, 4, s[32], )),
                      (P = u(P, k, T, S, v, 11, s[33])),
                      (S = u(S, P, k, T, C, 16, s[34])),
                      (T = u(T, S, P, k, A, 23, s[35])),
                      (k = u(k, T, S, P, c, 4, s[36])),
                      (P = u(P, k, T, S, g, 11, s[37])),
                      (S = u(S, P, k, T, _, 16, s[38])),
                      (T = u(T, S, P, k, w, 23, s[39])),
                      (k = u(k, T, S, P, N, 4, s[40])),
                      (P = u(P, k, T, S, r, 11, s[41])),
                      (S = u(S, P, k, T, f, 16, s[42])),
                      (T = u(T, S, P, k, m, 23, s[43])),
                      (k = u(k, T, S, P, b, 4, s[44])),
                      (P = u(P, k, T, S, B, 11, s[45])),
                      (S = u(S, P, k, T, x, 16, s[46])),
                      (k = p(k,
                        (T = u(T, S, P, k, l, 23, s[47])), S, P, r, 6, s[48], )),
                      (P = p(P, k, T, S, _, 10, s[49])),
                      (S = p(S, P, k, T, A, 15, s[50])),
                      (T = p(T, S, P, k, y, 21, s[51])),
                      (k = p(k, T, S, P, B, 6, s[52])),
                      (P = p(P, k, T, S, f, 10, s[53])),
                      (S = p(S, P, k, T, w, 15, s[54])),
                      (T = p(T, S, P, k, c, 21, s[55])),
                      (k = p(k, T, S, P, v, 6, s[56])),
                      (P = p(P, k, T, S, x, 10, s[57])),
                      (S = p(S, P, k, T, m, 15, s[58])),
                      (T = p(T, S, P, k, N, 21, s[59])),
                      (k = p(k, T, S, P, g, 6, s[60])),
                      (P = p(P, k, T, S, C, 10, s[61])),
                      (S = p(S, P, k, T, l, 15, s[62])),
                      (T = p(T, S, P, k, b, 21, s[63])),
                      (o[0] = (o[0] + k) | 0),
                      (o[1] = (o[1] + T) | 0),
                      (o[2] = (o[2] + S) | 0),
                      (o[3] = (o[3] + P) | 0));
                  },
                  _doFinalize: function() {
                    var e = this._data,
                      i = e.words,
                      n = 8 * this._nDataBytes,
                      a = 8 * e.sigBytes;
                    i[a >>> 5] |= 128 << (24 - (a % 32));
                    var o = t.floor(n / 4294967296),
                      r = n;
                    ((i[15 + (((a + 64) >>> 9) << 4)] = (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)))),
                      (i[14 + (((a + 64) >>> 9) << 4)] = (16711935 & ((r << 8) | (r >>> 24))) | (4278255360 & ((r << 24) | (r >>> 8)))),
                      (e.sigBytes = 4 * (i.length + 1)), this._process());
                    for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
                      var d = c[l];
                      c[l] = (16711935 & ((d << 8) | (d >>> 24))) | (4278255360 & ((d << 24) | (d >>> 8)));
                    }
                    return s;
                  },
                  clone: function() {
                    var e = o.clone.call(this);
                    return ((e._hash = this._hash.clone()), e);
                  },
                }));

                function d(e, t, i, n, a, o, r) {
                  var s = e + ((t & i) | (~t & n)) + a + r;
                  return ((s << o) | (s >>> (32 - o))) + t;
                }

                function h(e, t, i, n, a, o, r) {
                  var s = e + ((t & n) | (i & ~n)) + a + r;
                  return ((s << o) | (s >>> (32 - o))) + t;
                }

                function u(e, t, i, n, a, o, r) {
                  var s = e + (t ^ i ^ n) + a + r;
                  return ((s << o) | (s >>> (32 - o))) + t;
                }

                function p(e, t, i, n, a, o, r) {
                  var s = e + (i ^ (t | ~n)) + a + r;
                  return ((s << o) | (s >>> (32 - o))) + t;
                }
                return (
                  (i.MD5 = o._createHelper(l)),
                  (i.HmacMD5 = o._createHmacHelper(l)), e.MD5);
              })(u);
            }),
            y = (((ae = d = d || {})[(ae.MTOP = 1)] = "MTOP"),
              (ae[(ae.MY = 2)] = "MY"),
              (ae[(ae.GATEWAY = 3)] = "GATEWAY"), i(m, (h = Error)), m);

          function m() {
            return (null !== h && h.apply(this, arguments)) || this;
          }
          ((v.prototype.init = function(e, t) {
              return o(this, void 0, void 0, function() {
                return r(this, function() {
                  return (
                    (this.options = n({}, e)),
                    (this.proxy = t),
                    (this.tasks = []),
                    (this.inited = !0),
                    [2]);
                });
              });
            }),
            (v.getRequestType = function(e) {
              return 0 === e.indexOf("mtop.") ? d.MTOP : 0 === e.indexOf("my.") ? d.MY : d.GATEWAY;
            }),
            (v.prototype.verifyResponse = function(e, t, i) {
              return o(this, void 0, void 0, function() {
                return r(this, function(n) {
                  switch (n.label) {
                    case 0:
                      if (
                        (c(i, "mc-code") || c(e, "errCode") || c(e, "error_response.code"), t.__is_retry_task__)) return (this.tryThrowError(e, i), [2, e]);
                      n.label = 1;
                    case 1:
                      return (n.trys.push([1, 3, , 4]), this.tryThrowError(e, i),
                        [2, e]);
                    case 2:
                      return [2, n.sent()];
                    case 3:
                      throw n.sent();
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (v.prototype.tryThrowError = function(e, t) {
              var i = c(t, "mc-msg") || c(e, "errMsg") || c(e, "error_response.msg");
              if (
                (t = c(t, "mc-code") || c(e, "errCode") || c(e, "error_response.code")) && "200" != t) throw (((e = new y(t + ":::" + i)).code = t), (e.msg = i), e);
            }),
            (v.prototype.sendGatewayRequest = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = this.createGatewayRequest(e)),
                        [4, this.proxy.apply(n({}, e), d.GATEWAY)]);
                    case 1:
                      return (
                        (t = i.sent()),
                        [
                          4,
                          this.verifyResponse(c(t, "data"), e, c(t, "headers")),
                        ]);
                    case 2:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (v.prototype.exec = function(e, t) {
              return o(this, void 0, void 0, function() {
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      if (((t = t || v.getRequestType(e.url)), this.inited)) return (
                        (e.data = e.data || {}), t !== d.GATEWAY ? [3, 2] : [4, this.sendGatewayRequest(e)]);
                      throw new Error("请先调用cloud.init()");
                    case 1:
                      return [2, i.sent()];
                    case 2:
                      return [4, this.proxy.apply(e, t)];
                    case 3:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (v.prototype.getHttpRequestSign = function(e, t, i, n, a) {
              if (this.options.signSecret) return (
                (a = a), delete n["mc-sign"],
                (t = t + "\n" + f.stringify(g(a)) + "\napplication/json\n" + Object.keys(n).filter(function(e) {
                  return /^mc-/.test(e);
                }).sort().map(function(e) {
                  return e.toLowerCase() + ":" + n[e];
                }).join("\n") + "\n" + e + (i ? "?" + i : "")), f.stringify(p(t, this.options.signSecret)));
            }),
            (v.prototype.createGatewayRequest = function(e) {
              var t = (l = this.options).sessionKey,
                i = l.appKey,
                a = l.requestId,
                o = l.miniappId,
                r = l.openId,
                s = l.unionId,
                c = l.cloudId,
                l = l.sdkVersion;
              return (
                (e.method = "POST"),
                (t = n(n({}, e.headers), {
                  "Content-Type": "application/json",
                  "mc-timestamp": "" + Date.now(),
                  "mc-session": t,
                })), r && (t["mc-open-id"] = r), c && (t["mc-cloud-id"] = c), s && (t["mc-union-id"] = s), i && (t["mc-appKey"] = i), o && (t["mc-miniapp-id"] = o), a && (t["mc-request-id"] = a), l && (t["mc-sdk-version"] = l), e.env && (t["mc-env"] = e.env), t["mc-session"] || delete t["mc-session"],
                (e.rawData = e.rawData || e.data), "object" == typeof e.data && (e.data = JSON.stringify(e.data)),
                (r = this.getHttpRequestSign(e.url, e.method, "", t, e.data)), n(n({}, e), {
                  url: "" + e.url,
                  headers: n(n({}, t), {
                    sign: r,
                    "eagleeye-traceid": a
                  }),
                }));
            }));
          var _ = v;

          function v() {
            this.inited = !1;
          }

          function b(e, t) {
            ((this.request = t), (this.options = e));
          }
          (new _(), i(B, (w = b)),
            (B.prototype.invoke = function(e, t, i, n) {
              return (void 0 === i && (i = "main"), o(this, void 0, void 0, function() {
                return r(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return [
                        4,
                        this.fcRequest({
                          fcName: e,
                          handler: i,
                          data: t,
                          options: Object.assign(n || {}, this.options),
                        }),
                      ];
                    case 1:
                      return [2, a.sent()];
                  }
                });
              }));
            }),
            (B.prototype.fcRequest = function(e) {
              return o(this, void 0, void 0, function() {
                return r(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.request.exec({
                          env: this.options.env || "online",
                          url: "fc",
                          data: e,
                        }, d.GATEWAY, ),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }), a([s()], B.prototype, "invoke", null));
          var w,
            C = B;

          function B() {
            return (null !== w && w.apply(this, arguments)) || this;
          }
          var N,
            A = "1.5.9",
            x = "mtop.taobao.miniapp.cloud.store.file.list",
            k = "other",
            T = (i(S, (N = b)),
              (S.prototype.parseUploadResult = function(e, t, i) {
                return this.parsePostUploadResult(e, t, i);
              }),
              (S.prototype.parsePostUploadResult = function(e, t, i) {
                var n;
                if (t.data)
                  if (i) try {
                    var a = (s = JSON.parse(t.data)).fileId,
                      o = s.url,
                      r = s.message;
                  } catch (e) {
                    console.log(e);
                  }
                else try {
                  var s = JSON.parse(t.data);
                  switch (e) {
                    case "image":
                    case "font":
                      ((a = s.jsonData.fileId),
                        (o = s.jsonData.url),
                        (r = s.errorMessage));
                      break;
                    case "video":
                      ((a = s.fileId),
                        (n = s.videoId),
                        (o = s.url),
                        (r = s.message));
                      break;
                    case "audio":
                      ((a = s.fileId),
                        (n = s.videoId),
                        (o = s.url),
                        (r = s.message));
                  }
                } catch (e) {}
                return {
                  imageUrl: o,
                  specialId: a,
                  message: r,
                  videoId: n
                };
              }),
              (S.prototype.uploadFile = function(e) {
                return o(this, void 0, void 0, function() {
                  var t, i, n, a, o, s, l, d, h, u, p, f, g;
                  return r(this, function(r) {
                    switch (r.label) {
                      case 0:
                        ((t = e.filePath),
                          (i = void 0 === (i = e.fileType) ? k : i),
                          (n = void 0 === (n = e.fileName) ? "miniappfile" : n),
                          (a = void 0 !== (a = e.seller) && a),
                          (o = e.dirId),
                          (r.label = 1));
                      case 1:
                        return (r.trys.push([1, 3, , 4]),
                          (l = a ? "mtop.taobao.miniapp.cloud.store.config.v2.seller.get" : "mtop.taobao.miniapp.cloud.store.config.get"),
                          [
                            4,
                            this.storageRequest(l, {
                              newContainer: !0,
                              cloudPath: n,
                              fileType: i,
                              sellerSpace: a,
                              dirId: o,
                            }),
                          ]);
                      case 2:
                        return ((s = r.sent()), [3, 4]);
                      case 3:
                        throw (
                          (l = r.sent()), new Error("获取配置错误" + (l.message || l.toString()), ));
                      case 4:
                        return (
                          (d = c(s, ["data", "model", i], {})),
                          (u = void 0 === (u = d.url) ? "" : u),
                          (h = void 0 === (h = d.formData) ? null : h),
                          (d = d.headers),
                          ((u = {
                            url: u,
                            fileType: i,
                            header: void 0 === d ? null : d,
                            formData: h,
                            filePath: t,
                            fileName: "file",
                          }).formData = u.formData || {}), u.header && u.header.Authorization && (u.formData.Authorization = u.header.Authorization), n && (u.formData.localFileName = Date.now() + "-" + ((y = n) ? 0 <= (m = y.lastIndexOf("/")) ? y.substr(m + 1) : y : "file")), u.header ? "image" !== i && ((u.header.origin = u.header.origin || "https://miniapp-cloud.taobao.com"),
                            (u.header.referer = u.header.referer || "https://miniapp-cloud.taobao.com")) : delete u.header,
                          [4, this.storageRequest("my.uploadFile", u)]);
                      case 5:
                        if (
                          ((d = r.sent()), console.log(d),
                            (h = this.parseUploadResult(i, d, a)),
                            (u = h.imageUrl),
                            (f = h.specialId),
                            (p = h.message),
                            (g = h.videoId),
                            (f = {
                              fileType: i,
                              specialId: f || c(s, ["data", "model", i, "formData", "key"], ""),
                              videoId: g,
                              url: u,
                              cloudPath: n,
                              sellerSpace: a,
                            }).specialId)) return [
                          4,
                          this.storageRequest(a ? "mtop.taobao.miniapp.cloud.store.file.v2.seller.save" : "mtop.taobao.miniapp.cloud.store.file.save", f, ),
                        ];
                        throw new Error(p || "上传文件失败");
                      case 6:
                        if (c((g = r.sent()), "data.model.fileId")) return [2, c(g, "data.model")];
                        throw new Error(c(g, ["result", "msgInfo"], "上传文件失败"), );
                    }
                    var y, m;
                  });
                });
              }),
              (S.prototype.deleteFile = function(e) {
                return o(this, void 0, void 0, function() {
                  var t, i, n;
                  return r(this, function(a) {
                    switch (a.label) {
                      case 0:
                        if (
                          ((i = e.fileId),
                            (n = void 0 === (n = e.fileType) ? k : n),
                            (t = void 0 !== (t = e.seller) && t),
                            (i = Array.isArray(i) ? i : [i]), t)) throw new Error("商家空间资源不允许使用接口删除");
                        return (
                          (i = JSON.stringify(i)),
                          [
                            4,
                            this.storageRequest(t ? "mtop.taobao.miniapp.cloud.store.file.v2.seller.delete" : "mtop.taobao.miniapp.cloud.store.file.delete", {
                              fileType: n,
                              fileIds: i,
                              sellerSpace: t
                            }, ),
                          ]);
                      case 1:
                        if (c((n = a.sent()), ["data", "model"])) return [2, !0];
                        throw new Error(c(n, ["data", "msgInfo"]));
                    }
                  });
                });
              }),
              (S.prototype.getTempFileURL = function(e) {
                return o(this, void 0, void 0, function() {
                  var t, i;
                  return r(this, function(n) {
                    switch (n.label) {
                      case 0:
                        if (
                          ((t = e.fileId),
                            (i = void 0 !== (i = e.seller) && i), t)) return (
                          (t = Array.isArray(t) ? t : [t]),
                          (t = JSON.stringify(t)),
                          [
                            4,
                            this.storageRequest(i ? "mtop.taobao.miniapp.cloud.store.file.v2.seller.list" : x, {
                              fileIds: t,
                              sellerSpace: i
                            }, ),
                          ]);
                        throw new Error("缺少fileId,请检查参数");
                      case 1:
                        if (((t = n.sent()), (i = c(t, ["data", "model"])))) return [2, i];
                        throw new Error(c(t, ["data", "msgInfo"]));
                    }
                  });
                });
              }),
              (S.prototype.downloadByFileId = function(e) {
                return o(this, void 0, void 0, function() {
                  var t, i, n, a, o, s;
                  return r(this, function(r) {
                    switch (r.label) {
                      case 0:
                        if (((i = e.fileId), (t = e.cache), i)) return (
                          (i = Array.isArray(i) ? i : [i]),
                          [
                            4,
                            this.storageRequest(x, {
                              fileIds: JSON.stringify(i),
                            }),
                          ]);
                        throw new Error("缺少fileId,请检查参数");
                      case 1:
                        ((i = r.sent()),
                          (n = c(i, ["data", "model"]) || []),
                          (a = []),
                          (o = 0),
                          (r.label = 2));
                      case 2:
                        return o < n.length ? ((s = (n[o] || {}).url),
                          [4, this._downloadByUrl(s, t)]) : [3, 5];
                      case 3:
                        ((s = r.sent()) && a.push(s), (r.label = 4));
                      case 4:
                        return (o++, [3, 2]);
                      case 5:
                        return [2, a];
                    }
                  });
                });
              }),
              (S.prototype.storageRequest = function(e, t, i) {
                return o(this, void 0, void 0, function() {
                  var n;
                  return r(this, function(a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (n = "test" === this.options.env ? "test" : "online"),
                          ((t = t || {}).env = n),
                          (t.sdkVersion = A),
                          [4, this.request.exec({
                            url: e,
                            data: t
                          }, i)]);
                      case 1:
                        return [2, a.sent()];
                    }
                  });
                });
              }),
              (S.prototype._downloadByUrl = function(e, t) {
                return o(this, void 0, void 0, function() {
                  var i, n;
                  return r(this, function(a) {
                    switch (a.label) {
                      case 0:
                        return e ? t ? [
                          4,
                          this.request.proxy.apply({
                            url: "my.getStorage",
                            data: {
                              key: e
                            },
                          }),
                        ] : [3, 2] : [2, null];
                      case 1:
                        if ((i = a.sent().data)) return [2, i];
                        a.label = 2;
                      case 2:
                        return [
                          4,
                          this.request.exec({
                            url: "my.downloadFile",
                            data: {
                              url: e
                            },
                          }),
                        ];
                      case 3:
                        return (
                          (n = a.sent().apFilePath), t ? [
                            4,
                            this.request.exec({
                              url: "my.setStorage",
                              data: {
                                key: e,
                                data: n
                              },
                            }),
                          ] : [3, 5]);
                      case 4:
                        (a.sent(), (a.label = 5));
                      case 5:
                        return [2, n];
                    }
                  });
                });
              }), a([s()], S.prototype, "uploadFile", null), a([s()], S.prototype, "deleteFile", null), a([s()], S.prototype, "getTempFileURL", null), a([s()], S.prototype, "downloadByFileId", null), S);

          function S() {
            return (null !== N && N.apply(this, arguments)) || this;
          }
          (Object.defineProperty(I.prototype, "name", {
              get: function() {
                return this._coll;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (I.prototype.aggregate = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (Array.isArray(e) || (e = [e]),
                        (t = {
                          aggregate_pipelines: e,
                          collection_name: this._coll,
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.aggregate", t, ),
                        ]);
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (I.prototype.count = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = {
                          filter: e,
                          collection_name: this._coll
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.count", t, ),
                        ]);
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (I.prototype.deleteMany = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = {
                          filter: e,
                          collection_name: this._coll
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.remove", t, ),
                        ]);
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (I.prototype.find = function(e, t) {
              return (void 0 === t && (t = {}), o(this, void 0, void 0, function() {
                var i;
                return r(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (i = {
                          displayed_fields: t.projection,
                          order_by: t.sort,
                          skip: t.skip,
                          limit: t.limit,
                          filter: e,
                          collection_name: this._coll,
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.get", i, ),
                        ]);
                    case 1:
                      return [2, n.sent()];
                  }
                });
              }));
            }),
            (I.prototype.replaceOne = function(e, t) {
              return o(this, void 0, void 0, function() {
                var i;
                return r(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (i = {
                          filter: e,
                          new_record: t,
                          collection_name: this._coll,
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.replace", i, ),
                        ]);
                    case 1:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (I.prototype.insertOne = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = {
                          record: e,
                          collection_name: this._coll
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.add", t, ),
                        ]);
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (I.prototype.insertMany = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      if (
                        ((t = {
                          records: e,
                          collection_name: this._coll
                        }), Array.isArray(e))) return [
                        4,
                        this._db.dbRequest("miniapp.cloud.db.collection.addMany", t, ),
                      ];
                      throw new Error("带插入的数据只能为数组");
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (I.prototype.updateMany = function(e, t, i) {
              return o(this, void 0, void 0, function() {
                var n;
                return r(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = {
                          filter: e,
                          action: t,
                          arrayFilters: i,
                          collection_name: this._coll,
                        }),
                        [
                          4,
                          this._db.dbRequest("miniapp.cloud.db.collection.update", n, ),
                        ]);
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }), a([s()], I.prototype, "aggregate", null), a([s()], I.prototype, "count", null), a([s()], I.prototype, "deleteMany", null), a([s()], I.prototype, "find", null), a([s()], I.prototype, "replaceOne", null), a([s()], I.prototype, "insertOne", null), a([s()], I.prototype, "insertMany", null), a([s()], I.prototype, "updateMany", null));
          var P = I;

          function I(e, t) {
            ((this._db = e), (this._coll = t));
          }
          (i(M, (O = b)),
            (M.prototype.collection = function(e) {
              if (e) return new P(this, e);
              throw new Error("集合名称不能为空");
            }),
            (M.prototype.createCollection = function(e) {
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = {
                          collection_name: e
                        }),
                        [
                          4,
                          this.dbRequest("miniapp.cloud.db.collection.create", t, ),
                        ]);
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (M.prototype.dbRequest = function(e, t) {
              return o(this, void 0, void 0, function() {
                var i;
                return r(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return ("test" !== (i = this.options.env) && (i = "online"),
                        (t = n(n({}, t), {
                          env: i
                        })), this.options.localDebug ? [
                          4,
                          this.request.exec({
                            env: i,
                            debugAction: "MONGO_INVOKE",
                            url: "db/" + e,
                            data: t,
                          }, d.GATEWAY, ),
                        ] : [3, 2]);
                    case 1:
                      return [2, a.sent()];
                    case 2:
                      return [
                        4,
                        this.request.exec({
                          env: i,
                          url: "db/" + e,
                          data: t
                        }, d.GATEWAY, ),
                      ];
                    case 3:
                      return [2, a.sent()];
                  }
                });
              });
            }), a([s()], M.prototype, "createCollection", null));
          var O,
            R = M;

          function M() {
            return (null !== O && O.apply(this, arguments)) || this;
          }
          (i(L, (E = b)),
            (L.prototype.invoke = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, a, o, s, l;
                return r(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = e.data),
                        (s = e.headers),
                        (i = e.authScope),
                        (a = e.api),
                        (t = t || {}), Object.keys(t).forEach(function(e) {
                          t[e] = "string" == typeof t[e] ? t[e] : JSON.stringify(t[e]);
                        }),
                        (a = {
                          apiName: a,
                          httpHeaders: s,
                          data: t
                        }),
                        [4, this.topRequest(a)]);
                    case 1:
                      if (!c((o = r.sent()), "error_response")) return [2, o];
                      if (
                        ((s = c(o, "error_response.code")),
                          (l = my && my.canIUse("qn.cleanToken")) && !i && (i = "*"),
                          (26 != s && 27 != s && 53 != s) || !i)) return [3, 9];
                      r.label = 2;
                    case 2:
                      return (r.trys.push([2, 8, , 9]), l ? (console.log("call my.qn.cleanToken"),
                        [4, my.qn.cleanToken()]) : [3, 4]);
                    case 3:
                      (r.sent(), (r.label = 4));
                    case 4:
                      return [
                        4,
                        ((d = my.authorize),
                          (h = {
                            scopes: i
                          }), d ? ((h = h || {}), new Promise(function(e, t) {
                            d.call(my, n(n({}, h), {
                              success: e,
                              fail: t
                            }));
                          })) : Promise.reject("未实现my.api")),
                      ];
                    case 5:
                      return [4, r.sent()];
                    case 6:
                      return (r.sent(), [4, this.topRequest(a)]);
                    case 7:
                      return c((o = r.sent()), "error_response") ? [3, 9] : [2, o];
                    case 8:
                      return (r.sent(), [3, 9]);
                    case 9:
                      throw new Error("" + JSON.stringify(c(o, "error_response")), );
                  }
                  var d, h;
                });
              });
            }),
            (L.prototype.topRequest = function(e) {
              return o(this, void 0, void 0, function() {
                return r(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.request.exec({
                          env: this.options.env || "online",
                          url: "top",
                          data: e,
                        }, d.GATEWAY, ),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }), a([s()], L.prototype, "invoke", null));
          var E,
            D = L;

          function L() {
            return (null !== E && E.apply(this, arguments)) || this;
          }
          (i(G, (j = b)),
            (G.prototype.invoke = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n, a;
                return r(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = e.data),
                        (i = e.headers),
                        (n = e.api),
                        (a = e.targetAppKey),
                        [
                          4,
                          this.qimenRequest({
                            apiName: n,
                            httpHeaders: i,
                            targetAppKey: a,
                            data: t,
                          }),
                        ]);
                    case 1:
                      return [2, o.sent()];
                  }
                });
              });
            }),
            (G.prototype.qimenRequest = function(e) {
              return o(this, void 0, void 0, function() {
                return r(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.request.exec({
                          env: this.options.env || "online",
                          url: "qimen",
                          data: e,
                        }, d.GATEWAY, ),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }), a([s()], G.prototype, "invoke", null));
          var j,
            F = G;

          function G() {
            return (null !== j && j.apply(this, arguments)) || this;
          }
          (i(V, (U = b)),
            (V.prototype.httpRequest = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n, a, o, s;
                return r(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = e.body),
                        (i = e.params),
                        (n = e.headers),
                        (a = e.path),
                        (o = e.method),
                        (s = e.exts),
                        [
                          4,
                          this.innerRequest({
                            path: a,
                            headers: n,
                            body: t,
                            queryString: i,
                            method: o,
                            options: Object.assign(s || {}, this.options),
                          }),
                        ]);
                    case 1:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (V.prototype.innerRequest = function(e) {
              return o(this, void 0, void 0, function() {
                return r(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.request.exec({
                          env: this.options.env || "online",
                          url: "cloudHttp",
                          data: e,
                        }, d.GATEWAY, ),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }), a([s()], V.prototype, "httpRequest", null));
          var U,
            H,
            W = V;

          function V() {
            return (null !== U && U.apply(this, arguments)) || this;
          }

          function z() {
            for (var e = 0; e < arguments.length; e++);
          }

          function q(e, t) {
            var i,
              n = void 0 === (i = e.complete) ? z : i,
              a = void 0 === (i = e.success) ? z : i,
              o = void 0 === (i = e.fail) ? z : i;
            return function(e, i) {
              (e ? (t(e), o(e)) : a(i), n());
            };
          }
          (((ae = H = H || {}).GetStorageInfo = "mtop.taobao.miniapp.game.store.user.storageinfo.get"),
            (ae.GetFileId = "mtop.taobao.miniapp.game.store.user.fileid.get"),
            (ae.AddFileId = "mtop.taobao.miniapp.game.store.user.fileid.add"),
            (ae.DeleteFileId = "mtop.taobao.miniapp.game.store.user.fileid.delete"));
          var X = "https://usr/__tmp_cloud_storage__.json";

          function J(e, t, i) {
            var n = i.value;
            return (
              (i.value = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return o(this, void 0, void 0, function() {
                  return r(this, function(t) {
                    switch (t.label) {
                      case 0:
                        if (void 0 === this.fs) throw new Error("Property fs is undefined in class " + this.constructor.name, );
                        return [4, n.apply(this, e)];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }), i);
          }
          (i($, (Y = b)),
            ($.prototype.log = function() {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              console.log.apply(console,
                (function() {
                  for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                  var n = Array(e),
                    a = 0;
                  for (t = 0; t < i; t++)
                    for (var o = arguments[t], r = 0, s = o.length; r < s; r++, a++) n[a] = o[r];
                  return n;
                })(["[cloud-sdk::UserCloudStorage]"], e), );
            }),
            ($.prototype.__request = function(e, t, i) {
              return o(this, void 0, void 0, function() {
                var n;
                return r(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = "test" === this.options.env ? "test" : "online"),
                        ((t = t || {}).env = n),
                        (t.sdkVersion = A),
                        (t.definePath = this.definePath),
                        [4, this.request.exec({
                          url: e,
                          data: t
                        }, i)]);
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            ($.prototype.KVDataList2Object = function(e) {
              var t = {};
              return (e.forEach(function(e) {
                var i = e.value;
                ((e = e.key), (t[e] = i));
              }), t);
            }),
            ($.prototype.string2KVDataList = function(e) {
              if (!e) return [];
              var t,
                i = JSON.parse(e),
                n = [];
              for (t in i) n.push({
                key: t,
                value: i[t]
              });
              return n;
            }),
            ($.prototype.__getKVDataListFromCloud = function() {
              return o(this, void 0, void 0, function() {
                var e, t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.getFileId()];
                    case 1:
                      if (!(e = i.sent())) return [2, []];
                      i.label = 2;
                    case 2:
                      return (i.trys.push([2, 4, , 5]),
                        [4, this.file.downloadByFileId({
                          fileId: e
                        })]);
                    case 3:
                      if (
                        ((t = i.sent()[0]), this.log("downloadByFileId", t), !t)) return [2, []];
                      if (
                        (t = this.fs.readFileSync({
                          filePath: t,
                          encoding: "utf8",
                        })).error) throw new Error(JSON.stringify(t));
                      return [2, this.string2KVDataList(t.data)];
                    case 4:
                      throw i.sent();
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            ($.prototype.__setKVDataObject2Cloud = function(e) {
              return o(this, void 0, void 0, function() {
                var t,
                  i,
                  n,
                  a,
                  s,
                  c,
                  l,
                  d = this;
                return r(this, function(h) {
                  switch (h.label) {
                    case 0:
                      if (
                        (t = this.fs.writeFileSync({
                          filePath: X,
                          data: JSON.stringify(e),
                        })).error) throw new Error(t);
                      return [4, this.__request(H.GetStorageInfo)];
                    case 1:
                      ((t = h.sent()), this.log(H.GetStorageInfo, t.data),
                        (n = t.data.model),
                        (i = void 0 === (i = n.oldFileIds) ? [] : i),
                        (n = n.storagePath),
                        (h.label = 2));
                    case 2:
                      return (h.trys.push([2, 5, , 6]),
                        [
                          4,
                          this.file.uploadFile({
                            filePath: X,
                            fileType: "other",
                            fileName: n + "__tmp_cloud_storage__.txt",
                          }),
                        ]);
                    case 3:
                      return (
                        (s = h.sent()),
                        (a = s.fileId),
                        (c = s.fileName),
                        (s = s.url), this.log("fileId, fileName, url", a, c, s),
                        [4, this.__request(H.AddFileId, {
                          fileId: a
                        })]);
                    case 4:
                      if (
                        ((c = h.sent()), this.log(H.AddFileId, c.data), !0 !== c.data.model)) throw new Error("[" + H.AddFileId + "] save fileId fail!", );
                      return [3, 6];
                    case 5:
                      throw h.sent();
                    case 6:
                      return (
                        (l = []), i.forEach(function(e) {
                          l.push(o(d, void 0, void 0, function() {
                            return r(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return [
                                    4,
                                    this.file.deleteFile({
                                      fileId: e
                                    }),
                                  ];
                                case 1:
                                  return [2, t.sent() ? e : ""];
                              }
                            });
                          }), );
                        }), Promise.all(l).then(function(e) {
                          return o(d, void 0, void 0, function() {
                            return r(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return (this.log("delete fileId", e),
                                    [
                                      4,
                                      this.__request(H.DeleteFileId, {
                                        fileIdList: JSON.stringify(e.filter(function(e) {
                                          return !!e;
                                        }), ),
                                      }),
                                    ]);
                                case 1:
                                  return (t.sent(), [2]);
                              }
                            });
                          });
                        }).catch(function(e) {
                          return d.log("delete fileId error", e);
                        }),
                        [2]);
                  }
                });
              });
            }),
            ($.prototype.getFileId = function() {
              var e;
              return o(this, void 0, void 0, function() {
                var t;
                return r(this, function(i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.__request(H.GetFileId)];
                    case 1:
                      return (
                        (t = i.sent()), this.log(H.GetFileId, t.data),
                        [2, null != (e = t.data.model) ? e : null]);
                  }
                });
              });
            }),
            ($.prototype.getUserCloudStorage = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n, a;
                return r(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ((t = e.keyList), (i = q(e, this.log)), (o.label = 1));
                    case 1:
                      return (o.trys.push([1, 3, , 4]),
                        [4, this.__getKVDataListFromCloud()]);
                    case 2:
                      return ((n = o.sent()), [3, 4]);
                    case 3:
                      return ((a = o.sent()), i(a.toString()), [2]);
                    case 4:
                      return (
                        (n = n.filter(function(e) {
                          return ((e = e.key), t.includes(e));
                        })), i(null, {
                          KVDataList: n
                        }),
                        [2]);
                  }
                });
              });
            }),
            ($.prototype.getUserCloudStorageKeys = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n;
                return r(this, function(a) {
                  switch (a.label) {
                    case 0:
                      ((t = q(e, this.log)), (a.label = 1));
                    case 1:
                      return (a.trys.push([1, 3, , 4]),
                        [4, this.__getKVDataListFromCloud()]);
                    case 2:
                      return ((i = a.sent()), [3, 4]);
                    case 3:
                      return ((n = a.sent()), t(n.toString()), [2]);
                    case 4:
                      return (t(null, {
                          keys: i.map(function(e) {
                            return e.key;
                          }),
                        }),
                        [2]);
                  }
                });
              });
            }),
            ($.prototype.setUserCloudStorage = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n, a;
                return r(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ((t = q(e, this.log)),
                        (i = e.KVDataList),
                        (i = this.KVDataList2Object(i)), this.log("KVDataList:", i),
                        (o.label = 1));
                    case 1:
                      return (o.trys.push([1, 4, , 5]),
                        (n = this.KVDataList2Object),
                        [4, this.__getKVDataListFromCloud()]);
                    case 2:
                      return (
                        (a = n.apply(this, [o.sent()])),
                        [
                          4,
                          this.__setKVDataObject2Cloud(Object.assign({}, a, i)),
                        ]);
                    case 3:
                      return (o.sent(), [3, 5]);
                    case 4:
                      return ((a = o.sent()), t(a.toString()), [2]);
                    case 5:
                      return (t(null), [2]);
                  }
                });
              });
            }),
            ($.prototype.removeUserCloudStorage = function(e) {
              return o(this, void 0, void 0, function() {
                var t, i, n, a;
                return r(this, function(o) {
                  switch (o.label) {
                    case 0:
                      ((t = q(e, this.log)), (i = e.keyList), (o.label = 1));
                    case 1:
                      return (o.trys.push([1, 4, , 5]),
                        [4, this.__getKVDataListFromCloud()]);
                    case 2:
                      return (
                        (a = o.sent()),
                        (n = this.KVDataList2Object(a)), i.map(function(e) {
                          return delete n[e];
                        }),
                        [4, this.__setKVDataObject2Cloud(n)]);
                    case 3:
                      return (o.sent(), [3, 5]);
                    case 4:
                      return ((a = o.sent()), t(a), [3, 5]);
                    case 5:
                      return (t(null), [2]);
                  }
                });
              });
            }), a([J], $.prototype, "__getKVDataListFromCloud", null), a([J], $.prototype, "__setKVDataObject2Cloud", null));
          var Y,
            Z = $;

          function $(e, t, i) {
            return (
              ((e = Y.call(this, e, t) || this).file = i),
              (e.definePath = "default"),
              (e.fs = my && my.getFileSystemManager && my.getFileSystemManager()), e);
          }
          (i(ee, (K = Error)),
            (ee.prototype.toString = function() {
              return (this.code || "") + " " + (this.message || "");
            }));
          var K,
            Q = ee;

          function ee() {
            return (null !== K && K.apply(this, arguments)) || this;
          }
          (i(ne,
              (te = function(e) {
                ((this.options = e || {}),
                  (this.options.dataProxyGatewayUrl = this.options.dataProxyGatewayUrl || this.options.gatewayUrl));
              }), ),
            (ne.getMtopErrorMsg = function(e) {
              var t = new Q();
              if (!e) return (
                (t.code = "500"),
                (t.message = "客户端网络错误,请稍后重试"), t);
              var i,
                n,
                a = e.ret && e.ret[0] && e.ret[0].split("::");
              if (
                ((e.data = e.data || c(e, ["err", "data"])), e.data && e.data.errCode && ((i = e.data.errCode),
                  (n = e.data.errMessage || e.data.errMsg)), e.data && e.data.errorCode && (i = e.data.errorCode), e.data && e.data.errorMessage && (n = e.data.errorMessage), e.data && e.data.errorPage)) try {
                if (my && my.tb && my.tb.showErrorView) return (my.tb.showErrorView({
                  reason: e.data.errorPage.reason,
                  message: e.data.errorPage.message,
                  action: e.data.errorPage.action,
                  icon: e.data.errorPage.icon,
                }), t);
                delete e.data.errorPage;
              } catch (e) {}
              return (e.data && e.data.success) || (a && "SUCCESS" === a[0] && !i) ? void 0 : ((i = i || (a && "FAIL_SYS_SESSION_EXPIRED" === a[0] ? "904" : "500")),
                (n = n || (a && a[1]) || "客户端网络错误,请稍后重试"),
                (t.code = i),
                (t.message = n), t);
            }),
            (ne.GATEWAY_APIS = {
              "db/miniapp.cloud.db.collection.create": "mtop.taobao.dataproxy.collection.create",
              "db/miniapp.cloud.db.index.create": "mtop.taobao.dataproxy.index.create",
              "db/miniapp.cloud.db.collection.aggregate": "mtop.taobao.dataproxy.record.aggregate",
              "db/miniapp.cloud.db.collection.count": "mtop.taobao.dataproxy.record.count",
              "db/miniapp.cloud.db.collection.remove": "mtop.taobao.dataproxy.record.delete",
              "db/miniapp.cloud.db.collection.get": "mtop.taobao.dataproxy.record.select",
              "db/miniapp.cloud.db.collection.replace": "mtop.taobao.dataproxy.record.replace",
              "db/miniapp.cloud.db.collection.add": "mtop.taobao.dataproxy.record.insert",
              "db/miniapp.cloud.db.collection.addMany": "mtop.taobao.dataproxy.record.batch.insert",
              "db/miniapp.cloud.db.collection.update": "mtop.taobao.dataproxy.record.update",
              fc: "mtop.miniapp.cloud.invoke.fc",
              top: "mtop.miniapp.cloud.invoke.top",
              qimen: "mtop.miniapp.cloud.invoke.qimen.cloud",
              cloudHttp: "mtop.miniapp.cloud.application.request",
            }));
          var te,
            ie = ne;

          function ne() {
            var e = (null !== te && te.apply(this, arguments)) || this;
            return (
              (e.sendMtop = function(t, i, a) {
                return o(e, void 0, void 0, function() {
                  return r(this, function() {
                    return [
                      2,
                      new Promise(function(e, o) {
                        var r;
                        1024e3 <= i.length ? (((r = new Q()).code = "500"),
                          (r.message = "本次请求内容过长，请控制在1M以内"), o(r)) : (console.log("sendMtop ", i), my.sendMtop(n(n({
                          api: t,
                          v: "1.0",
                          data: i,
                          method: "POST",
                          needLogin: !0,
                          sessionOption: "AutoLoginAndManualLogin",
                        }, a, ), {
                          success: function(t) {
                            var i = ne.getMtopErrorMsg(t);
                            i ? o(i) : e(t);
                          },
                          fail: function(e) {
                            (console.log("sendMtop error", e), o(ne.getMtopErrorMsg(e)));
                          },
                        }, ), ));
                      }),
                    ];
                  });
                });
              }),
              (e.invokeMyApi = function(t, i) {
                return o(e, void 0, void 0, function() {
                  return r(this, function() {
                    return [
                      2,
                      new Promise(function(e, a) {
                        return (
                          (t = t.replace(/^my\./, "")), my[t](n(n({}, i), {
                            success: e,
                            fail: a
                          })));
                      }),
                    ];
                  });
                });
              }),
              (e.apply = function(t, i) {
                return o(e, void 0, void 0, function() {
                  var e, a, o, s, l;
                  return r(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = t.url),
                          (a = t.data),
                          (o = t.headers),
                          (s = t.mtopOptions), i !== d.MTOP ? [3, 2] : [4, this.sendMtop(e, a, s)]);
                      case 1:
                        return [2, r.sent()];
                      case 2:
                        if (i !== d.GATEWAY) return [3, 7];
                        r.label = 3;
                      case 3:
                        return (r.trys.push([3, 5, , 6]), t.rawData && Object.keys(t.rawData).forEach(function(e) {
                            "object" == typeof t.rawData[e] && (t.rawData[e] = JSON.stringify(t.rawData[e]));
                          }),
                          [
                            4,
                            this.sendMtop(ne.GATEWAY_APIS[e], n(n({}, t.rawData), {
                              sdkVersion: A,
                              protocols: JSON.stringify(o),
                            }), s, ),
                          ]);
                      case 4:
                        return (l = ((l = r.sent()) && l.data) || {}).errCode ? [
                          2, {
                            headers: {
                              "mc-code": l.errCode,
                              "mc-msg": l.errMessage,
                            },
                            data: {},
                          },
                        ] : [
                          2, {
                            headers: {
                              "mc-code": 200,
                              "mc-msg": "请求成功",
                            },
                            data: c(l, ["data"]) || {},
                          },
                        ];
                      case 5:
                        return (l = r.sent()) && l.code ? [
                          2, {
                            headers: {
                              "mc-code": l.code,
                              "mc-msg": l.message,
                            },
                          },
                        ] : [
                          2, {
                            headers: {
                              "mc-code": 500,
                              "mc-msg": l.message || l,
                            },
                          },
                        ];
                      case 6:
                        return [3, 9];
                      case 7:
                        return [4, this.invokeMyApi(e, a)];
                      case 8:
                        return [2, r.sent()];
                      case 9:
                        return [2];
                    }
                  });
                });
              }), e);
          }
          oe.prototype.init = function(e, t) {
            return o(this, void 0, void 0, function() {
              var i, a;
              return r(this, function(o) {
                switch (o.label) {
                  case 0:
                    (o.trys.push([0, 2, , 3]),
                      (r = e.env),
                      (a = "string" == typeof(r = r || "online") ? {
                        database: r,
                        file: r,
                        function: r,
                        message: r
                      } : ((r.database = r.database || "online"),
                        (r.file = r.file || "online"),
                        (r.function = r.function || "online"),
                        (r.message = r.message || "online"), r)),
                      (i = new _()),
                      (this.db = new R({
                        env: a.database
                      }, i)),
                      (this.function = new C(n(n({}, e), {
                        env: a.function
                      }), i, )),
                      (this.file = new T({
                        env: a.file
                      }, i)));
                    try {
                      this.userCloudStore = new Z({
                        env: a.file
                      }, i, this.file, );
                    } catch (o) {
                      console.error("初始化 UserCloudStorage 失败, 跳过 UserCloudStorage 初始化 ", o, );
                    }
                    return (
                      (this.qimenApi = new F({
                        env: a.database
                      }, i)),
                      (this.topApi = new D({
                        env: a.database
                      }, i)),
                      (this.application = new W(n(n({}, e), {
                        env: a.database
                      }), i, )),
                      [
                        4,
                        i.init(n({}, e), t || new ie({
                          gatewayUrl: e.__gatewayUrl
                        }), ),
                      ]);
                  case 1:
                    return (o.sent(), [2, !0]);
                  case 2:
                    return (
                      (a = o.sent()), console.error("SDK初始化失败 ", a),
                      [3, 3]);
                  case 3:
                    return [2, !1];
                }
                var r;
              });
            });
          };
          var ae = oe;

          function oe() {}
          var re = new ae();
          ((e.Cloud = ae),
            (e.default = re), Object.defineProperty(e, "__esModule", {
              value: !0
            }));
        });
      };
