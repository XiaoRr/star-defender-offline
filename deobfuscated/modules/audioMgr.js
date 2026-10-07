// module: audioMgr
// deps: {"../playerData":"playerData","./libcocos":"libcocos"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b2b31uWLdJFLo9HFqjxcPyV", "audioMgr");
        var n,
          a = (this && this.__extends) || ((n = function(e, t) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
              }
              instanceof Array && function(e, t) {
                e.__proto__ = t;
              }) || function(e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            })(e, t);
          }), function(e, t) {
            function i() {
              this.constructor = e;
            }
            (n(e, t),
              (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i())));
          }),
          o = (this && this.__decorate) || function(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          },
          r = (this && this.__awaiter) || function(e, t, i, n) {
            return new(i || (i = Promise))(function(a, o) {
              function r(e) {
                try {
                  c(n.next(e));
                } catch (t) {
                  o(t);
                }
              }

              function s(e) {
                try {
                  c(n.throw(e));
                } catch (t) {
                  o(t);
                }
              }

              function c(e) {
                var t;
                e.done ? a(e.value) : ((t = e.value), t instanceof i ? t : new i(function(e) {
                  e(t);
                })).then(r, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          },
          s = (this && this.__generator) || function(e, t) {
            var i,
              n,
              a,
              o,
              r = {
                label: 0,
                sent: function() {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o);

            function s(e) {
              return function(t) {
                return c([e, t]);
              };
            }

            function c(o) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; r;) try {
                if (
                  ((i = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
                switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return (r.label++, {
                      value: o[1],
                      done: !1
                    });
                  case 5:
                    (r.label++, (n = o[1]), (o = [0]));
                    continue;
                  case 7:
                    ((o = r.ops.pop()), r.trys.pop());
                    continue;
                  default:
                    if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      r.label = o[1];
                      break;
                    }
                    if (6 === o[0] && r.label < a[1]) {
                      ((r.label = a[1]), (a = o));
                      break;
                    }
                    if (a && r.label < a[2]) {
                      ((r.label = a[2]), r.ops.push(o));
                      break;
                    }
                    (a[2] && r.ops.pop(), r.trys.pop());
                    continue;
                }
                o = t.call(e, r);
              } catch (s) {
                ((o = [6, s]), (n = 0));
              } finally {
                i = a = 0;
              }
              if (5 & o[0]) throw o[1];
              return {
                value: o[0] ? o[1] : void 0,
                done: !0
              };
            }
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var c = cc._decorator,
          l = c.ccclass,
          d = c.property,
          h = e("./libcocos"),
          u = e("../playerData"),
          p = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.clickAudio = null), t);
            }
            var i;
            return (a(t, e),
              (i = t), Object.defineProperty(t, "inst", {
                get: function() {
                  return this._inst;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.onLoad = function() {
                i._inst = this;
              }),
              (t.prototype.start = function() {
                i._sounds.click = this.clickAudio;
              }),
              (t.prototype.playAudio = function(e, t, n) {
                return (void 0 === t && (t = 1), void 0 === n && (n = !1), r(this, void 0, void 0, function() {
                  var a, o, r;
                  return s(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return u.default.sound ? (a = i._sounds[e]) ? [3, 2] : [
                          4,
                          h.cocos.loadRes("sounds/" + e, cc.AudioClip),
                        ] : [2];
                      case 1:
                        if (
                          ((a = s.sent()),
                            (i._sounds[e] = a), !u.default.sound)) return [2];
                        s.label = 2;
                      case 2:
                        if (a && a instanceof cc.AudioClip)
                          if (n) {
                            if (i._looping_audioes[e]) return [2];
                            i._looping_audioes[e] = cc.audioEngine.play(a, !0, t, );
                          } else(o = i._playing.get(e) || 0) < 5 && ((r = cc.audioEngine.play(a, !1, t)), i._playing.set(e, o + 1), cc.audioEngine.setFinishCallback(r, function() {
                            setTimeout(function() {
                              var t = i._playing.get(e) || 0;
                              i._playing.set(e, t - 1);
                            }, 100);
                          }, ));
                        return [2];
                    }
                  });
                }));
              }),
              (t.prototype.stopAudio = function(e) {
                i._looping_audioes[e] && (cc.audioEngine.stopEffect(i._looping_audioes[e]),
                  (i._looping_audioes[e] = null));
              }),
              (t.prototype.bgmOff = function() {
                i._bgm_play && ((i._bgm_play = !1), cc.audioEngine.stopMusic());
              }),
              (t.prototype.playBgm = function(e) {
                return r(this, void 0, void 0, function() {
                  var t = this;
                  return s(this, function() {
                    return [
                      2,
                      new Promise(function() {
                        return r(t, void 0, void 0, function() {
                          var t;
                          return s(this, function(n) {
                            switch (n.label) {
                              case 0:
                                return (t = i._bgms[e]) ? [3, 2] : [
                                  4,
                                  h.cocos.loadRes("sounds/" + e, cc.AudioClip, ),
                                ];
                              case 1:
                                ((t = n.sent()),
                                  (i._bgms[e] = t),
                                  (n.label = 2));
                              case 2:
                                return (i._bgm_play && i._bgm_current == e && (cc.audioEngine.playMusic(t, !0), cc.audioEngine.setMusicVolume(i._bgm_vol)),
                                  [2]);
                            }
                          });
                        });
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.bgmOn = function(e, t) {
                (void 0 === t && (t = 1), u.default.music && (e || (e = i._bgm_current),
                  (i._bgm_vol = t), i._bgm_play ? i._bgm_current != e ? ((i._bgm_current = e), this.playBgm(e)) : cc.audioEngine.setMusicVolume(i._bgm_vol) : ((i._bgm_play = !0),
                    (i._bgm_current = e), this.playBgm(e))));
              }),
              (t._sounds = {}),
              (t._bgm = null),
              (t._bgms = {}),
              (t._bgm_play = !1),
              (t._bgm_vol = 1),
              (t._bgm_current = ""),
              (t._playing = new Map()),
              (t._inst = null),
              (t._looping_audioes = {}), o([d({
                type: cc.AudioClip
              })], t.prototype, "clickAudio", void 0),
              (i = o([l], t)));
          })(cc.Component);
        ((i.default = p), cc._RF.pop());
      };
