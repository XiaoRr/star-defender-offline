// module: battleAudioMgr
// deps: {"../../Script/libppgame/libcocos":"libcocos","../../Script/playerData":"playerData","./onfire":"onfire"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e4d39HvqCBCqKttw7Pt9hWi", "battleAudioMgr");
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
          h = e("./onfire"),
          u = e("../../Script/libppgame/libcocos"),
          p = e("../../Script/playerData"),
          f = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.clickAudio = null),
                (t._sounds = {}),
                (t._bgm = {}),
                (t._bgm_play = !1),
                (t._playing = new Map()),
                (t._looping_audioes = {}),
                (t._bgm_type = 0),
                (t._bgm_onfire = null),
                (t._audio_onfire = null),
                (t._audio_off_onfire = null), t);
            }
            return (a(t, e),
              (t.prototype.onEnable = function() {
                var e = this;
                ((this._bgm_onfire = h.on("bgm", function(t, i, n) {
                    if (
                      (void 0 === t && (t = !0), void 0 === i && (i = 1), void 0 === n && (n = 0), t)) {
                      if (!p.default.music) return;
                      (e._bgm_type != n && ((e._bgm_type = n),
                        (e._bgm_play = !1), cc.audioEngine.stopMusic()), e._bgm_play ? cc.audioEngine.setMusicVolume(i) : ((e._bgm_play = t), e._bgm[n] ? (cc.audioEngine.playMusic(e._bgm[n], !0), cc.audioEngine.setMusicVolume(i)) : u.cocos.loadRes("battle_sounds/bgm" + n, cc.AudioClip).then(function(t) {
                        ((e._bgm[n] = t), e._bgm_play && (cc.audioEngine.playMusic(t, !0), cc.audioEngine.setMusicVolume(i)));
                      })));
                    } else e._bgm_play && ((e._bgm_play = !1), cc.audioEngine.stopMusic());
                  })),
                  (this._audio_onfire = h.on("audio", function(t, i, n) {
                    return (void 0 === i && (i = 1), void 0 === n && (n = !1), r(e, void 0, void 0, function() {
                      var e, a, o, r;
                      return s(this, function(s) {
                        switch (s.label) {
                          case 0:
                            return p.default.sound ? (e = this._sounds[t]) ? [3, 2] : (console.log("try load audio", t, i),
                              [
                                4,
                                u.cocos.loadRes("battle_sounds/" + t, cc.AudioClip, ),
                              ]) : [2];
                          case 1:
                            if (
                              ((e = s.sent()), console.log("audio loaded", t),
                                (this._sounds[t] = e), !p.default.sound)) return [2];
                            s.label = 2;
                          case 2:
                            if (e && e instanceof cc.AudioClip)
                              if (n) {
                                if (this._looping_audioes[t]) return [2];
                                this._looping_audioes[t] = cc.audioEngine.play(e, !0, i);
                              } else(a = this._playing.get(t) || 0) < 5 && ((o = cc.audioEngine.play(e, !1, i)), this._playing.set(t, a + 1),
                                (r = this._playing), cc.audioEngine.setFinishCallback(o, function() {
                                  setTimeout(function() {
                                    var e = r.get(t) || 0;
                                    r.set(t, e - 1);
                                  }, 100);
                                }, ));
                            return [2];
                        }
                      });
                    }));
                  })),
                  (this._audio_off_onfire = h.on("audio_off", function(t) {
                    e._looping_audioes[t] && (cc.audioEngine.stopEffect(e._looping_audioes[t]),
                      (e._looping_audioes[t] = null));
                  })));
              }),
              (t.prototype.onDisable = function() {
                (h.un(this._bgm_onfire), h.un(this._audio_onfire), h.un(this._audio_off_onfire));
              }),
              (t.prototype.start = function() {
                this._sounds.click = this.clickAudio;
              }), o([d({
                type: cc.AudioClip
              })], t.prototype, "clickAudio", void 0), o([l], t));
          })(cc.Component);
        ((i.default = f), cc._RF.pop());
      };
