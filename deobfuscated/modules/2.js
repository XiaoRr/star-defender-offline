// module: 2
// deps: {"base64-js":1,"ieee754":4,"isarray":3}
module.exports = {};
const __mod = function(e, t, i) {
        (function(t) {
          "use strict";
          var n = e("base64-js"),
            a = e("ieee754"),
            o = e("isarray");

          function r() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }

          function s(e, t) {
            if (r() < t) throw new RangeError("Invalid typed array length");
            return (c.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = c.prototype) : (null === e && (e = new c(t)), (e.length = t)), e);
          }

          function c(e, t, i) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, i);
            if ("number" == typeof e) {
              if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string", );
              return u(this, e);
            }
            return l(this, e, t, i);
          }

          function l(e, t, i, n) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? g(e, t, i, n) : "string" == typeof t ? p(e, t, i) : y(e, t);
          }

          function d(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative');
          }

          function h(e, t, i, n) {
            return (d(t), t <= 0 ? s(e, t) : void 0 !== i ? "string" == typeof n ? s(e, t).fill(i, n) : s(e, t).fill(i) : s(e, t));
          }

          function u(e, t) {
            if (
              (d(t), (e = s(e, t < 0 ? 0 : 0 | m(t))), !c.TYPED_ARRAY_SUPPORT))
              for (var i = 0; i < t; ++i) e[i] = 0;
            return e;
          }

          function p(e, t, i) {
            if (
              (("string" == typeof i && "" !== i) || (i = "utf8"), !c.isEncoding(i))) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | _(t, i),
              a = (e = s(e, n)).write(t, i);
            return (a !== n && (e = e.slice(0, a)), e);
          }

          function f(e, t) {
            var i = t.length < 0 ? 0 : 0 | m(t.length);
            e = s(e, i);
            for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
            return e;
          }

          function g(e, t, i, n) {
            if ((t.byteLength, i < 0 || t.byteLength < i)) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
            return (
              (t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, i) : new Uint8Array(t, i, n)), c.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = c.prototype) : (e = f(e, t)), e);
          }

          function y(e, t) {
            if (c.isBuffer(t)) {
              var i = 0 | m(t.length);
              return 0 === (e = s(e, i)).length ? e : (t.copy(e, 0, 0, i), e);
            }
            if (t) {
              if (
                ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : f(e, t);
              if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
            }
            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.", );
          }

          function m(e) {
            if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes", );
            return 0 | e;
          }

          function _(e, t) {
            if (c.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var i = e.length;
            if (0 === i) return 0;
            for (var n = !1;;) switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return i;
              case "utf8":
              case "utf-8":
              case void 0:
                return X(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * i;
              case "hex":
                return i >>> 1;
              case "base64":
                return Z(e).length;
              default:
                if (n) return X(e).length;
                ((t = ("" + t).toLowerCase()), (n = !0));
            }
          }

          function v(e, t, i) {
            var n = !1;
            if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
            if (
              ((void 0 === i || i > this.length) && (i = this.length), i <= 0)) return "";
            if ((i >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
              case "hex":
                return E(this, t, i);
              case "utf8":
              case "utf-8":
                return P(this, t, i);
              case "ascii":
                return R(this, t, i);
              case "latin1":
              case "binary":
                return M(this, t, i);
              case "base64":
                return S(this, t, i);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return D(this, t, i);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                ((e = (e + "").toLowerCase()), (n = !0));
            }
          }

          function b(e, t, i) {
            var n = e[t];
            ((e[t] = e[i]), (e[i] = n));
          }

          function w(e, t, i, n, a) {
            if (0 === e.length) return -1;
            if (
              ("string" == typeof i ? ((n = i), (i = 0)) : i > 2147483647 ? (i = 2147483647) : i < -2147483648 && (i = -2147483648),
                (i = +i), isNaN(i) && (i = a ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length)) {
              if (a) return -1;
              i = e.length - 1;
            } else if (i < 0) {
              if (!a) return -1;
              i = 0;
            }
            if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t))) return 0 === t.length ? -1 : C(e, t, i, n, a);
            if ("number" == typeof t) return (
              (t &= 255), c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : C(e, [t], i, n, a));
            throw new TypeError("val must be string, number or Buffer");
          }

          function C(e, t, i, n, a) {
            var o,
              r = 1,
              s = e.length,
              c = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
              if (e.length < 2 || t.length < 2) return -1;
              ((r = 2), (s /= 2), (c /= 2), (i /= 2));
            }

            function l(e, t) {
              return 1 === r ? e[t] : e.readUInt16BE(t * r);
            }
            if (a) {
              var d = -1;
              for (o = i; o < s; o++)
                if (l(e, o) === l(t, -1 === d ? 0 : o - d)) {
                  if ((-1 === d && (d = o), o - d + 1 === c)) return d * r;
                } else(-1 !== d && (o -= o - d), (d = -1));
            } else
              for (i + c > s && (i = s - c), o = i; o >= 0; o--) {
                for (var h = !0, u = 0; u < c; u++)
                  if (l(e, o + u) !== l(t, u)) {
                    h = !1;
                    break;
                  }
                if (h) return o;
              }
            return -1;
          }

          function B(e, t, i, n) {
            i = Number(i) || 0;
            var a = e.length - i;
            n ? (n = Number(n)) > a && (n = a) : (n = a);
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var r = 0; r < n; ++r) {
              var s = parseInt(t.substr(2 * r, 2), 16);
              if (isNaN(s)) return r;
              e[i + r] = s;
            }
            return r;
          }

          function N(e, t, i, n) {
            return $(X(t, e.length - i), e, i, n);
          }

          function A(e, t, i, n) {
            return $(J(t), e, i, n);
          }

          function x(e, t, i, n) {
            return A(e, t, i, n);
          }

          function k(e, t, i, n) {
            return $(Z(t), e, i, n);
          }

          function T(e, t, i, n) {
            return $(Y(t, e.length - i), e, i, n);
          }

          function S(e, t, i) {
            return 0 === t && i === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, i));
          }

          function P(e, t, i) {
            i = Math.min(e.length, i);
            for (var n = [], a = t; a < i;) {
              var o,
                r,
                s,
                c,
                l = e[a],
                d = null,
                h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
              if (a + h <= i) switch (h) {
                  case 1:
                    l < 128 && (d = l);
                    break;
                  case 2:
                    128 == (192 & (o = e[a + 1])) && (c = ((31 & l) << 6) | (63 & o)) > 127 && (d = c);
                    break;
                  case 3:
                    ((o = e[a + 1]),
                      (r = e[a + 2]), 128 == (192 & o) && 128 == (192 & r) && (c = ((15 & l) << 12) | ((63 & o) << 6) | (63 & r)) > 2047 && (c < 55296 || c > 57343) && (d = c));
                    break;
                  case 4:
                    ((o = e[a + 1]),
                      (r = e[a + 2]),
                      (s = e[a + 3]), 128 == (192 & o) && 128 == (192 & r) && 128 == (192 & s) && (c = ((15 & l) << 18) | ((63 & o) << 12) | ((63 & r) << 6) | (63 & s)) > 65535 && c < 1114112 && (d = c));
                }
                (null === d ? ((d = 65533), (h = 1)) : d > 65535 && ((d -= 65536), n.push(((d >>> 10) & 1023) | 55296),
                    (d = 56320 | (1023 & d))), n.push(d),
                  (a += h));
            }
            return O(n);
          }
          ((i.Buffer = c),
            (i.SlowBuffer = function(e) {
              return (+e != e && (e = 0), c.alloc(+e));
            }),
            (i.INSPECT_MAX_BYTES = 50),
            (c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : (function() {
              try {
                var e = new Uint8Array(1);
                return (
                  (e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                      return 42;
                    },
                  }), 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength);
              } catch (t) {
                return !1;
              }
            })()),
            (i.kMaxLength = r()),
            (c.poolSize = 8192),
            (c._augment = function(e) {
              return ((e.__proto__ = c.prototype), e);
            }),
            (c.from = function(e, t, i) {
              return l(null, e, t, i);
            }), c.TYPED_ARRAY_SUPPORT && ((c.prototype.__proto__ = Uint8Array.prototype),
              (c.__proto__ = Uint8Array), "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
            (c.alloc = function(e, t, i) {
              return h(null, e, t, i);
            }),
            (c.allocUnsafe = function(e) {
              return u(null, e);
            }),
            (c.allocUnsafeSlow = function(e) {
              return u(null, e);
            }),
            (c.isBuffer = function(e) {
              return !(null == e || !e._isBuffer);
            }),
            (c.compare = function(e, t) {
              if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
              if (e === t) return 0;
              for (var i = e.length, n = t.length, a = 0, o = Math.min(i, n); a < o;
                ++a)
                if (e[a] !== t[a]) {
                  ((i = e[a]), (n = t[a]));
                  break;
                }
              return i < n ? -1 : n < i ? 1 : 0;
            }),
            (c.isEncoding = function(e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (c.concat = function(e, t) {
              if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers', );
              if (0 === e.length) return c.alloc(0);
              var i;
              if (void 0 === t)
                for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
              var n = c.allocUnsafe(t),
                a = 0;
              for (i = 0; i < e.length; ++i) {
                var r = e[i];
                if (!c.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers', );
                (r.copy(n, a), (a += r.length));
              }
              return n;
            }),
            (c.byteLength = _),
            (c.prototype._isBuffer = !0),
            (c.prototype.swap16 = function() {
              var e = this.length;
              if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits", );
              for (var t = 0; t < e; t += 2) b(this, t, t + 1);
              return this;
            }),
            (c.prototype.swap32 = function() {
              var e = this.length;
              if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits", );
              for (var t = 0; t < e; t += 4)
                (b(this, t, t + 3), b(this, t + 1, t + 2));
              return this;
            }),
            (c.prototype.swap64 = function() {
              var e = this.length;
              if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits", );
              for (var t = 0; t < e; t += 8)
                (b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4));
              return this;
            }),
            (c.prototype.toString = function() {
              var e = 0 | this.length;
              return 0 === e ? "" : 0 === arguments.length ? P(this, 0, e) : v.apply(this, arguments);
            }),
            (c.prototype.equals = function(e) {
              if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
              return this === e || 0 === c.compare(this, e);
            }),
            (c.prototype.inspect = function() {
              var e = "",
                t = i.INSPECT_MAX_BYTES;
              return (this.length > 0 && ((e = this.toString("hex", 0, t).match(/.{2}/g).join(" ")), this.length > t && (e += " ... ")), "<Buffer " + e + ">");
            }),
            (c.prototype.compare = function(e, t, i, n, a) {
              if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
              if (
                (void 0 === t && (t = 0), void 0 === i && (i = e ? e.length : 0), void 0 === n && (n = 0), void 0 === a && (a = this.length), t < 0 || i > e.length || n < 0 || a > this.length)) throw new RangeError("out of range index");
              if (n >= a && t >= i) return 0;
              if (n >= a) return -1;
              if (t >= i) return 1;
              if (this === e) return 0;
              for (var o = (a >>>= 0) - (n >>>= 0),
                  r = (i >>>= 0) - (t >>>= 0),
                  s = Math.min(o, r),
                  l = this.slice(n, a),
                  d = e.slice(t, i),
                  h = 0; h < s;
                ++h)
                if (l[h] !== d[h]) {
                  ((o = l[h]), (r = d[h]));
                  break;
                }
              return o < r ? -1 : r < o ? 1 : 0;
            }),
            (c.prototype.includes = function(e, t, i) {
              return -1 !== this.indexOf(e, t, i);
            }),
            (c.prototype.indexOf = function(e, t, i) {
              return w(this, e, t, i, !0);
            }),
            (c.prototype.lastIndexOf = function(e, t, i) {
              return w(this, e, t, i, !1);
            }),
            (c.prototype.write = function(e, t, i, n) {
              if (void 0 === t)((n = "utf8"), (i = this.length), (t = 0));
              else if (void 0 === i && "string" == typeof t)
                ((n = t), (i = this.length), (t = 0));
              else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported", );
                ((t |= 0), isFinite(i) ? ((i |= 0), void 0 === n && (n = "utf8")) : ((n = i), (i = void 0)));
              }
              var a = this.length - t;
              if (
                ((void 0 === i || i > a) && (i = a),
                  (e.length > 0 && (i < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              for (var o = !1;;) switch (n) {
                case "hex":
                  return B(this, e, t, i);
                case "utf8":
                case "utf-8":
                  return N(this, e, t, i);
                case "ascii":
                  return A(this, e, t, i);
                case "latin1":
                case "binary":
                  return x(this, e, t, i);
                case "base64":
                  return k(this, e, t, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, e, t, i);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  ((n = ("" + n).toLowerCase()), (o = !0));
              }
            }),
            (c.prototype.toJSON = function() {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            }));
          var I = 4096;

          function O(e) {
            var t = e.length;
            if (t <= I) return String.fromCharCode.apply(String, e);
            for (var i = "", n = 0; n < t;) i += String.fromCharCode.apply(String, e.slice(n, (n += I)));
            return i;
          }

          function R(e, t, i) {
            var n = "";
            i = Math.min(e.length, i);
            for (var a = t; a < i; ++a) n += String.fromCharCode(127 & e[a]);
            return n;
          }

          function M(e, t, i) {
            var n = "";
            i = Math.min(e.length, i);
            for (var a = t; a < i; ++a) n += String.fromCharCode(e[a]);
            return n;
          }

          function E(e, t, i) {
            var n,
              a = e.length;
            ((!t || t < 0) && (t = 0), (!i || i < 0 || i > a) && (i = a));
            for (var o = "", r = t; r < i; ++r) o += (n = e[r]) < 16 ? "0" + n.toString(16) : n.toString(16);
            return o;
          }

          function D(e, t, i) {
            for (var n = e.slice(t, i), a = "", o = 0; o < n.length; o += 2) a += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return a;
          }

          function L(e, t, i) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
          }

          function j(e, t, i, n, a, o) {
            if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance', );
            if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
            if (i + n > e.length) throw new RangeError("Index out of range");
          }

          function F(e, t, i, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var a = 0, o = Math.min(e.length - i, 2); a < o; ++a) e[i + a] = (t & (255 << (8 * (n ? a : 1 - a)))) >>> (8 * (n ? a : 1 - a));
          }

          function G(e, t, i, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var a = 0, o = Math.min(e.length - i, 4); a < o; ++a) e[i + a] = (t >>> (8 * (n ? a : 3 - a))) & 255;
          }

          function U(e, t, i, n) {
            if (i + n > e.length) throw new RangeError("Index out of range");
            if (i < 0) throw new RangeError("Index out of range");
          }

          function H(e, t, i, n, o) {
            return (o || U(e, 0, i, 4), a.write(e, t, i, n, 23, 4), i + 4);
          }

          function W(e, t, i, n, o) {
            return (o || U(e, 0, i, 8), a.write(e, t, i, n, 52, 8), i + 8);
          }
          ((c.prototype.slice = function(e, t) {
              var i,
                n = this.length;
              if (
                ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                  (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), c.TYPED_ARRAY_SUPPORT))
                (i = this.subarray(e, t)).__proto__ = c.prototype;
              else {
                var a = t - e;
                i = new c(a, void 0);
                for (var o = 0; o < a; ++o) i[o] = this[o + e];
              }
              return i;
            }),
            (c.prototype.readUIntLE = function(e, t, i) {
              ((e |= 0), (t |= 0), i || L(e, t, this.length));
              for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256);) n += this[e + o] * a;
              return n;
            }),
            (c.prototype.readUIntBE = function(e, t, i) {
              ((e |= 0), (t |= 0), i || L(e, t, this.length));
              for (var n = this[e + --t], a = 1; t > 0 && (a *= 256);) n += this[e + --t] * a;
              return n;
            }),
            (c.prototype.readUInt8 = function(e, t) {
              return (t || L(e, 1, this.length), this[e]);
            }),
            (c.prototype.readUInt16LE = function(e, t) {
              return (t || L(e, 2, this.length), this[e] | (this[e + 1] << 8));
            }),
            (c.prototype.readUInt16BE = function(e, t) {
              return (t || L(e, 2, this.length), (this[e] << 8) | this[e + 1]);
            }),
            (c.prototype.readUInt32LE = function(e, t) {
              return (t || L(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]);
            }),
            (c.prototype.readUInt32BE = function(e, t) {
              return (t || L(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]));
            }),
            (c.prototype.readIntLE = function(e, t, i) {
              ((e |= 0), (t |= 0), i || L(e, t, this.length));
              for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256);) n += this[e + o] * a;
              return (n >= (a *= 128) && (n -= Math.pow(2, 8 * t)), n);
            }),
            (c.prototype.readIntBE = function(e, t, i) {
              ((e |= 0), (t |= 0), i || L(e, t, this.length));
              for (var n = t, a = 1, o = this[e + --n]; n > 0 && (a *= 256);) o += this[e + --n] * a;
              return (o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o);
            }),
            (c.prototype.readInt8 = function(e, t) {
              return (t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]);
            }),
            (c.prototype.readInt16LE = function(e, t) {
              t || L(e, 2, this.length);
              var i = this[e] | (this[e + 1] << 8);
              return 32768 & i ? 4294901760 | i : i;
            }),
            (c.prototype.readInt16BE = function(e, t) {
              t || L(e, 2, this.length);
              var i = this[e + 1] | (this[e] << 8);
              return 32768 & i ? 4294901760 | i : i;
            }),
            (c.prototype.readInt32LE = function(e, t) {
              return (t || L(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24));
            }),
            (c.prototype.readInt32BE = function(e, t) {
              return (t || L(e, 4, this.length),
                (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
            }),
            (c.prototype.readFloatLE = function(e, t) {
              return (t || L(e, 4, this.length), a.read(this, e, !0, 23, 4));
            }),
            (c.prototype.readFloatBE = function(e, t) {
              return (t || L(e, 4, this.length), a.read(this, e, !1, 23, 4));
            }),
            (c.prototype.readDoubleLE = function(e, t) {
              return (t || L(e, 8, this.length), a.read(this, e, !0, 52, 8));
            }),
            (c.prototype.readDoubleBE = function(e, t) {
              return (t || L(e, 8, this.length), a.read(this, e, !1, 52, 8));
            }),
            (c.prototype.writeUIntLE = function(e, t, i, n) {
              ((e = +e),
                (t |= 0),
                (i |= 0), n || j(this, e, t, i, Math.pow(2, 8 * i) - 1, 0));
              var a = 1,
                o = 0;
              for (this[t] = 255 & e; ++o < i && (a *= 256);) this[t + o] = (e / a) & 255;
              return t + i;
            }),
            (c.prototype.writeUIntBE = function(e, t, i, n) {
              ((e = +e),
                (t |= 0),
                (i |= 0), n || j(this, e, t, i, Math.pow(2, 8 * i) - 1, 0));
              var a = i - 1,
                o = 1;
              for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) this[t + a] = (e / o) & 255;
              return t + i;
            }),
            (c.prototype.writeUInt8 = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                (this[t] = 255 & e), t + 1);
            }),
            (c.prototype.writeUInt16LE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : F(this, e, t, !0), t + 2);
            }),
            (c.prototype.writeUInt16BE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : F(this, e, t, !1), t + 2);
            }),
            (c.prototype.writeUInt32LE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e)) : G(this, e, t, !0), t + 4);
            }),
            (c.prototype.writeUInt32BE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e)) : G(this, e, t, !1), t + 4);
            }),
            (c.prototype.writeIntLE = function(e, t, i, n) {
              if (((e = +e), (t |= 0), !n)) {
                var a = Math.pow(2, 8 * i - 1);
                j(this, e, t, i, a - 1, -a);
              }
              var o = 0,
                r = 1,
                s = 0;
              for (this[t] = 255 & e; ++o < i && (r *= 256);)
                (e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                  (this[t + o] = (((e / r) >> 0) - s) & 255));
              return t + i;
            }),
            (c.prototype.writeIntBE = function(e, t, i, n) {
              if (((e = +e), (t |= 0), !n)) {
                var a = Math.pow(2, 8 * i - 1);
                j(this, e, t, i, a - 1, -a);
              }
              var o = i - 1,
                r = 1,
                s = 0;
              for (this[t + o] = 255 & e; --o >= 0 && (r *= 256);)
                (e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                  (this[t + o] = (((e / r) >> 0) - s) & 255));
              return t + i;
            }),
            (c.prototype.writeInt8 = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e), t + 1);
            }),
            (c.prototype.writeInt16LE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : F(this, e, t, !0), t + 2);
            }),
            (c.prototype.writeInt16BE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : F(this, e, t, !1), t + 2);
            }),
            (c.prototype.writeInt32LE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24)) : G(this, e, t, !0), t + 4);
            }),
            (c.prototype.writeInt32BE = function(e, t, i) {
              return (
                (e = +e),
                (t |= 0), i || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e)) : G(this, e, t, !1), t + 4);
            }),
            (c.prototype.writeFloatLE = function(e, t, i) {
              return H(this, e, t, !0, i);
            }),
            (c.prototype.writeFloatBE = function(e, t, i) {
              return H(this, e, t, !1, i);
            }),
            (c.prototype.writeDoubleLE = function(e, t, i) {
              return W(this, e, t, !0, i);
            }),
            (c.prototype.writeDoubleBE = function(e, t, i) {
              return W(this, e, t, !1, i);
            }),
            (c.prototype.copy = function(e, t, i, n) {
              if (
                (i || (i = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < i && (n = i), n === i)) return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw new RangeError("targetStart out of bounds");
              if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              (n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i));
              var a,
                o = n - i;
              if (this === e && i < t && t < n)
                for (a = o - 1; a >= 0; --a) e[a + t] = this[a + i];
              else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (a = 0; a < o; ++a) e[a + t] = this[a + i];
              else Uint8Array.prototype.set.call(e, this.subarray(i, i + o), t);
              return o;
            }),
            (c.prototype.fill = function(e, t, i, n) {
              if ("string" == typeof e) {
                if (
                  ("string" == typeof t ? ((n = t), (t = 0), (i = this.length)) : "string" == typeof i && ((n = i), (i = this.length)), 1 === e.length)) {
                  var a = e.charCodeAt(0);
                  a < 256 && (e = a);
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
              } else "number" == typeof e && (e &= 255);
              if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
              if (i <= t) return this;
              var o;
              if (
                ((t >>>= 0),
                  (i = void 0 === i ? this.length : i >>> 0), e || (e = 0), "number" == typeof e))
                for (o = t; o < i; ++o) this[o] = e;
              else {
                var r = c.isBuffer(e) ? e : X(new c(e, n).toString()),
                  s = r.length;
                for (o = 0; o < i - t; ++o) this[o + t] = r[o % s];
              }
              return this;
            }));
          var V = /[^+\/0-9A-Za-z-_]/g;

          function z(e) {
            if ((e = q(e).replace(V, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e;
          }

          function q(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          }

          function X(e, t) {
            var i;
            t = t || 1 / 0;
            for (var n = e.length, a = null, o = [], r = 0; r < n; ++r) {
              if ((i = e.charCodeAt(r)) > 55295 && i < 57344) {
                if (!a) {
                  if (i > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (r + 1 === n) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  a = i;
                  continue;
                }
                if (i < 56320) {
                  ((t -= 3) > -1 && o.push(239, 191, 189), (a = i));
                  continue;
                }
                i = 65536 + (((a - 55296) << 10) | (i - 56320));
              } else a && (t -= 3) > -1 && o.push(239, 191, 189);
              if (((a = null), i < 128)) {
                if ((t -= 1) < 0) break;
                o.push(i);
              } else if (i < 2048) {
                if ((t -= 2) < 0) break;
                o.push((i >> 6) | 192, (63 & i) | 128);
              } else if (i < 65536) {
                if ((t -= 3) < 0) break;
                o.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
              } else {
                if (!(i < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                o.push(
                  (i >> 18) | 240,
                  ((i >> 12) & 63) | 128,
                  ((i >> 6) & 63) | 128,
                  (63 & i) | 128, );
              }
            }
            return o;
          }

          function J(e) {
            for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
            return t;
          }

          function Y(e, t) {
            for (var i, n, a, o = [], r = 0; r < e.length && !((t -= 2) < 0);
              ++r)
              ((n = (i = e.charCodeAt(r)) >> 8),
                (a = i % 256), o.push(a), o.push(n));
            return o;
          }

          function Z(e) {
            return n.toByteArray(z(e));
          }

          function $(e, t, i, n) {
            for (var a = 0; a < n && !(a + i >= t.length || a >= e.length); ++a) t[a + i] = e[a];
            return a;
          }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, );
      };
