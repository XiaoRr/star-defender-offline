// module: libwechat
// deps: {"../../battle_scripts/battleScene":"battleScene","../../battle_scripts/libppgame/onfire":"onfire","../playerData":"playerData","./audioMgr":"audioMgr","./bannerAd":"bannerAd","./libwechat_review":"libwechat_review","@tbmp/mp-cloud-sdk":5}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "50d444k5z9HLrHeoZq35TBP", "libwechat");
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
          o = (this && this.__awaiter) || function(e, t, i, n) {
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
          r = (this && this.__generator) || function(e, t) {
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
        (Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.wechat = i.isSetParam = i.GAME_PLATFORM = i.ERR_MSG_USER_CANCELLED = i.ERR_MSG_UNSUPPORTED_FUNCTION = i.ERR_MSG_INVALID_ADVERTISEMENT_ID = i.WX_EVT_GAME_CLUB = i.WX_EVT_GAME_HIDE = i.WX_EVT_GAME_SHOW = i.WX_EVT_USER_INFO = i.WX_EVT_ERROR_EVT = void 0),
          (i.WX_EVT_ERROR_EVT = "wx-on-error-evt"),
          (i.WX_EVT_USER_INFO = "wx-on-user-info"),
          (i.WX_EVT_GAME_SHOW = "wx-on-game-show"),
          (i.WX_EVT_GAME_HIDE = "wx-on-game-hide"),
          (i.WX_EVT_GAME_CLUB = "wx-on-game-club"),
          (i.ERR_MSG_INVALID_ADVERTISEMENT_ID = "invalid advertisement id"),
          (i.ERR_MSG_UNSUPPORTED_FUNCTION = "unsupported function"),
          (i.ERR_MSG_USER_CANCELLED = "user cancelled"),
          (i.GAME_PLATFORM = "undefined" != typeof FBInstant ? "facebook" : "undefined" != typeof wx ? "wechat" : ((cc.sys.platform !== cc.sys.MOBILE_BROWSER && cc.sys.platform !== cc.sys.DESKTOP_BROWSER) || (window.Request = (function() {
            var e = location.search,
              t = new Object();
            if (-1 != e.indexOf("?"))
              for (var i = e.substr(1).split("&"), n = 0; n < i.length; n++) t[i[n].split("=")[0]] = unescape(i[n].split("=")[1]);
            return t;
          })()), "html")),
          (i.isSetParam = function(e) {
            return (!(
              (cc.sys.platform !== cc.sys.MOBILE_BROWSER && cc.sys.platform !== cc.sys.DESKTOP_BROWSER) || !window.Request) && parseInt(window.Request["" + e]));
          }));
        var s = !1;

        function c(e, t, i, n, a) {
          return (void 0 === t && (t = "get"), void 0 === i && (i = null), void 0 === n && (n = {}), void 0 === a && (a = ""), new Promise(function(o, r) {
            var c = new XMLHttpRequest();
            for (var l in ((c.timeout = 3e3), c.open(t, e, !0),
                (c.responseType = a), n)) c.setRequestHeader(l, n[l]);
            ((c.onload = function() {
                c.status >= 200 && c.status < 300 ? (s && console.log("###### response:", e, c), cc.sys.platform == cc.sys.TAOBAO_MINIGAME && "string" == typeof c.response ? o(JSON.parse(c.response)) : o(c.response)) : (s && console.log("###### response err:", e, c.status), r("XHR_RES_ERROR"));
              }),
              (c.onerror = function() {
                r("XHR_REQ_ERROR");
              }),
              (c.ontimeout = function() {
                (console.log("请求超时"), r("XHR_REQ_TIMEOUT"));
              }), s && console.log("###### request:", e, t, i), c.send(i));
          }));
        }
        var l = e("@tbmp/mp-cloud-sdk"),
          d = e("../playerData"),
          h = e("./audioMgr"),
          u = e("./bannerAd"),
          p = e("./libwechat_review"),
          f = e("../../battle_scripts/libppgame/onfire"),
          g = e("../../battle_scripts/battleScene");
        ((i.wechat = new((function(e) {
            function t() {
              var t = e.call(this) || this;
              ((t.request = c),
                (t._game_config = {}),
                (t._config_loaded = !1),
                (t._req_config_promis = null),
                (t.game_id = window.game_id || 177),
                (t._get_config_nonce = ""),
                (t._onshow_op = null),
                (t._jd_task = {}),
                (t._seeg_get_login_data_pr = null),
                (t._seeg_get_login_data_res = null),
                (t._httpParams = null),
                (t.app_version = window.version || "1.0.0"),
                (t._game_times = 0),
                (t._batch_banner_ids = null),
                (t.rewardedVideoAd_ks = null),
                (t._showing_video = !1),
                (t._video_ad = null),
                (t._taobao_video_loaded = !1),
                (t._taobao_ad_resolver = null),
                (t._taobao_ad_rejecter = null),
                (t._sysinfo = null),
                (t._custom_banner = {}),
                (t._loadingNative = null),
                (t._rightup_native = null),
                (t._hide__rightup_native = !1),
                (t._close_rightup_native = !1),
                (t._close_callback = null),
                (t._sharingParameters = null),
                (t._wxOpenId = null),
                (t._is_new = !1),
                (t.boardString = ""),
                (t._channelTag = ""),
                (t._jd_rewarded_video_pr = null),
                (t._jd_rewarded_video = null),
                (t._jd_rewarded_video_showed = !1),
                (t._jd_rewarded_video_pr_ts = 0),
                (t._jd_first_load = !0),
                (t._jd_uid = 0));
              // Use the complete observed server snapshot, loaded locally before engine scripts.
              if (!window.__OFFLINE_GAME_CONFIG) throw new Error("Missing local game configuration");
              t._game_config = JSON.parse(JSON.stringify(window.__OFFLINE_GAME_CONFIG), );
              t._config_loaded = true;
              t._httpParams = {};
              t._req_config_promis = Promise.resolve(true);
              cc.vv = {};
              return t;
              var n,
                a,
                s,
                l,
                d,
                h = t.game_id,
                f = cc.sys.localStorage.getItem("ppgames_saved_province"),
                g = cc.sys.localStorage.getItem("ppgames_saved_city");
              t._get_config_nonce = ((a = (n = new Date()).getMonth() + 1),
                (s = n.getDate()),
                (l = n.getHours()), "" + ((d = n.getMinutes()) > 10 ? d : "0" + d) + (l > 10 ? l : "0" + l) + (s > 10 ? s : "0" + s) + (a > 10 ? a : "0" + a) + Math.floor(1e4 * Math.random() + 0));
              var y = "https://xyx.p8games.com/wxgame/api/getNewConfig?game=" + h + "&channelid=" + p.wechat_review.real_channel + "&sceneid=" + p.wechat_review.real_scene + "&nonce=" + t._get_config_nonce;
              return (f && (y += "&province=" + f + "&city=" + g), console.log("server_url=" + y),
                (cc.vv = {}), "undefined" != typeof wx && void 0 !== wx.onShow ? (console.log("======================= wx onShow =======================", ), wx.onShow(function(e) {
                    if (
                      ((t._onshow_op = e), cc.sys.platform == cc.sys.TAOBAO_MINIGAME)) {
                      var n = my.tb.getInteractiveSDK();
                      ((t._channelTag = n.getChannelTag()), console.log("onShow, op:", e, ", channelTag", t._channelTag, ));
                    }
                    if (
                      ((cc.vv.scene = e.scene), t.is_jd_platform && (console.log("============== jd platform op.query:", e.query, ), e.query && e.query.assignmentParams))) {
                      var a = JSON.parse(decodeURIComponent(e.query.assignmentParams), );
                      ((t._jd_task.assignmentToken = a.assignmentToken),
                        (t._jd_task.encryptAssignmentId = a.encryptAssignmentId),
                        (t._jd_task.assignmentActionType = a.assignmentActionType));
                    }
                    (t.emit(i.WX_EVT_GAME_SHOW, e), t.showInterstitialAd(), console.log("onShow, op:", e));
                  }), wx.onHide(function() {
                    return t.emit(i.WX_EVT_GAME_HIDE);
                  }),
                  (t._req_config_promis = new Promise(function(e) {
                    return o(t, void 0, void 0, function() {
                      var t,
                        i,
                        n,
                        a = this;
                      return r(this, function(o) {
                        switch (o.label) {
                          case 0:
                            ((t = function(t) {
                                var i;
                                return r(this, function(n) {
                                  switch (n.label) {
                                    case 0:
                                      return [
                                        4,
                                        new Promise(function(i) {
                                          wx.request({
                                            url: y,
                                            success: function(t) {
                                              if (
                                                (console.log("------------got config", t, ),
                                                  (a._config_loaded = !0), t.data)) {
                                                ((a._game_config = t.data.config), t.data.config.review && (p.wechat_review.remote_review = !0));
                                                var n = a._game_config.banner_refresh;
                                                ("number" == typeof n && (u.bannerAd.refresh_time = n), !f && t.data.city_data && (cc.sys.localStorage.setItem("ppgames_saved_province", t.data.city_data[0], ), cc.sys.localStorage.setItem("ppgames_saved_city", t.data.city_data[1], )), e(!0));
                                              } else i(null);
                                            },
                                            fail: function(n) {
                                              (console.log("------------fail to got config", n, y, ),
                                                (p.wechat_review.remote_review = !0),
                                                (a._config_loaded = !0), 2 != t ? i(null) : e(!0));
                                            },
                                          });
                                        }),
                                      ];
                                    case 1:
                                      return (i = n.sent()) ? (e(i.succ), [2, {
                                        value: void 0
                                      }]) : [
                                        4,
                                        new Promise(function(e) {
                                          return setTimeout(e, 2e3);
                                        }),
                                      ];
                                    case 2:
                                      return (n.sent(), [2]);
                                  }
                                });
                              }),
                              (i = 0),
                              (o.label = 1));
                          case 1:
                            return i < 3 ? [5, t(i)] : [3, 4];
                          case 2:
                            if ("object" == typeof(n = o.sent())) return [2, n.value];
                            o.label = 3;
                          case 3:
                            return (i++, [3, 1]);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }))) : (t._req_config_promis = new Promise(function(e) {
                  return o(t, void 0, void 0, function() {
                    var t,
                      i,
                      n,
                      a = this;
                    return r(this, function(o) {
                      switch (o.label) {
                        case 0:
                          ((t = function(t) {
                              var i;
                              return r(this, function(n) {
                                switch (n.label) {
                                  case 0:
                                    return [
                                      4,
                                      new Promise(function(i) {
                                        c(y, "get", null, {}, "json").then(function(t) {
                                          var n = {
                                            data: t
                                          };
                                          (console.log("------------got config", n, ),
                                            (a._config_loaded = !0), n.data ? ("string" == typeof n.data && (n.data = JSON.parse(n.data, )),
                                              (a._game_config = n.data.config), n.data.config.review && (p.wechat_review.remote_review = !0), n.data.city_data && (cc.sys.localStorage.setItem("ppgames_saved_province", n.data.city_data[0], ), cc.sys.localStorage.setItem("ppgames_saved_city", n.data.city_data[1], )), e(!0)) : i(null));
                                        }).catch(function(n) {
                                          (console.log("------------fail to got config", n, y, ),
                                            (p.wechat_review.remote_review = !0),
                                            (a._config_loaded = !0), 2 != t ? i(null) : e(!0));
                                        });
                                      }),
                                    ];
                                  case 1:
                                    return (i = n.sent()) ? (e(i.succ), [2, {
                                      value: void 0
                                    }]) : [
                                      4,
                                      new Promise(function(e) {
                                        return setTimeout(e, 2e3);
                                      }),
                                    ];
                                  case 2:
                                    return (n.sent(), [2]);
                                }
                              });
                            }),
                            (i = 0),
                            (o.label = 1));
                        case 1:
                          return i < 3 ? [5, t(i)] : [3, 4];
                        case 2:
                          if ("object" == typeof(n = o.sent())) return [2, n.value];
                          o.label = 3;
                        case 3:
                          return (i++, [3, 1]);
                        case 4:
                          return [2];
                      }
                    });
                  });
                })),
                (cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER) && (t._httpParams = (function() {
                  var e = location.search,
                    t = new Object();
                  if (-1 != e.indexOf("?"))
                    for (var i = e.substr(1).split("&"), n = 0; n < i.length; n++) t[i[n].split("=")[0]] = unescape(i[n].split("=")[1]);
                  return t;
                })()), t);
            }
            return (a(t, e), Object.defineProperty(t.prototype, "wxCode", {
                get: function() {
                  return this._wxCode;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "wxUserInfo", {
                get: function() {
                  return this._wxUserInfo;
                },
                enumerable: !1,
                configurable: !0,
              }), Object.defineProperty(t.prototype, "appId", {
                get: function() {
                  return this._appId;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.seegGetLoginData = function() {
                return o(this, void 0, void 0, function() {
                  return r(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this._seeg_get_login_data_res ? [2, this._seeg_get_login_data_res] : [4, this._seeg_get_login_data_pr()];
                      case 1:
                        return (e.sent(), [2, this._seeg_get_login_data_res]);
                    }
                  });
                });
              }), Object.defineProperty(t.prototype, "jd_task", {
                get: function() {
                  return this._jd_task;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.getHttpParam = function(e) {
                if (this._httpParams) return this._httpParams[e];
              }), Object.defineProperty(t.prototype, "onshow_op", {
                get: function() {
                  return this._onshow_op;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.ensureConfigLoaded = function() {
                return o(this, void 0, void 0, function() {
                  return r(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this._config_loaded ? [2, Promise.resolve(!0)] : [4, this._req_config_promis];
                      case 1:
                        return (e.sent(), [2]);
                    }
                  });
                });
              }),
              (t.prototype.getConfig = function(e) {
                return this._game_config ? !(
                  ("no_single" != e && "no_line" != e) || (this.game_started && "undefined" == typeof tt)) || this._game_config[e] : void 0;
              }),
              (t.prototype.getVersion = function() {
                return this.app_version + "." + this._get_config_nonce;
              }),
              (t.prototype.showVersion = function(e) {
                var t = new cc.Node(),
                  i = t.addComponent(cc.Label);
                return (
                  (i.string = "v" + this.getVersion()),
                  (i.fontSize = 20), t.setAnchorPoint(0, 1), t.setPosition(cc.v2(-cc.winSize.width / 2 + 10, cc.winSize.height / 2 - 10), ), e.addChild(t), t);
              }),
              (t.prototype.requestGameList = function(e) {
                return (void 0 === e && (e = 9), o(this, void 0, Promise, function() {
                  return r(this, function() {
                    return [
                      2,
                      c("https://xyx.p8games.com/wxgame/gameList?appid=" + this._appId + "&count=" + e + "&name=1", "get", null, {}, "json", ),
                    ];
                  });
                }));
              }),
              (t.prototype.requestGameListNew = function(e) {
                return (void 0 === e && (e = 9), o(this, void 0, Promise, function() {
                  return r(this, function() {
                    return [
                      2,
                      c("https://xyx.p8games.com/wxgame/gameList?appid=" + this._appId + "&count=" + e + "&name=1&noblack=1", "get", null, {}, "json", ),
                    ];
                  });
                }));
              }),
              (t.prototype.logNewUser = function() {
                "undefined" != typeof wx && this._wxOpenId && (cc.sys.localStorage.getItem("pp-" + this._wxOpenId) || ((this._is_new = !0), this.logEvent("new"), cc.sys.localStorage.setItem("pp-" + this._wxOpenId, "1")));
              }),
              (t.prototype.logStart = function() {
                this.logEvent("start", this._is_new ? 1 : 0);
              }),
              (t.prototype.logLevel = function(e) {
                this.logEvent("level", e);
              }),
              (t.prototype.logEvent = function(e, t) {
                if (
                  (void 0 === t && (t = 0), this._wxOpenId && "undefined" != typeof wx && !window.no_log_event)) {
                  var i = "https://xyx.p8games.com/log/" + window.game_name,
                    n = {
                      event: e,
                      openid: this._wxOpenId,
                      param: t
                    };
                  (p.wechat_review.channel && (n.channel = p.wechat_review.channel), wx.request({
                    url: i,
                    data: n,
                    success: function(e) {
                      console.log("--------onLogEvent succ", e);
                    },
                    fail: function(e) {
                      console.log("--------onLogEvent fail", e);
                    },
                  }));
                }
              }), Object.defineProperty(t.prototype, "wxOpenId", {
                get: function() {
                  return this._wxOpenId;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.initializeOpenId = function(e) {
                var t = this;
                return new Promise(function(i, n) {
                  wx.login({
                    success: function(a) {
                      wx.request({
                        url: "https://xyx.p8games.com/code2session",
                        data: {
                          appid: e,
                          code: a.code
                        },
                        success: function(e) {
                          ((t._wxOpenId = e.data.openid), cc.Canvas.instance.node.emit("openid", e.data.openid), console.log("--------------------got openid", e.data.openid, ), t.logNewUser(), i(t._wxOpenId));
                        },
                        fail: function(e) {
                          n(e);
                        },
                      });
                    },
                    fail: function(e) {
                      n(e);
                    },
                  });
                });
              }),
              (t.prototype.resetWxCode = function() {
                this._wxCode = new Promise(function(e, t) {
                  wx.login({
                    success: function(t) {
                      e(t.code);
                    },
                    fail: function(e) {
                      t(e);
                    },
                  });
                });
              }), Object.defineProperty(t.prototype, "game_started", {
                get: function() {
                  return this._game_times > 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.addGameTimes = function() {
                return ++this._game_times;
              }),
              (t.prototype.onNewGame = function(e) {
                if (
                  (void 0 === e && (e = null), this._game_times++, p.wechat_review.isReview)) e && e(!1);
                else {
                  if (
                    (console.log("onNewGame", this._game_times, this.getConfig("gamestart_video"), this.getConfig("levelstart_video"), ),
                      (1 == this._game_times && this.getConfig("gamestart_video")) || (this._game_times > 1 && this.getConfig("levelstart_video")))) return (cc.audioEngine.pauseMusic(), void this.showRewardedVideoAd().then(function() {
                    (cc.audioEngine.resumeMusic(), e && e(!0));
                  }).catch(function() {
                    (cc.audioEngine.resumeMusic(), e && e(!1));
                  }));
                  e && e(!1);
                }
              }),
              (t.prototype.onGameResult = function() {
                return o(this, void 0, void 0, function() {
                  var e = this;
                  return r(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return p.wechat_review.isReview || !this.getConfig("result_video") ? [2] : [
                          4,
                          this.showRewardedVideoAd().catch(function() {
                            e.showInterstitialAd();
                          }),
                        ];
                      case 1:
                        return (t.sent(), [2]);
                    }
                  });
                });
              }),
              (t.prototype.resetWxUserInfo = function() {}),
              (t.prototype.wxCoordProjection = function(e) {
                var t,
                  i = cc.Canvas.instance,
                  n = cc.view.getDesignResolutionSize(),
                  a = cc.view.getFrameSize();
                if (e instanceof cc.Node) {
                  if (((t = e.getBoundingBox()), e.parent)) {
                    var o = e.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y));
                    ((t.x = o.x), (t.y = o.y));
                  }
                  for (var r = e.parent; r;)
                    ((t.width *= r.scaleX),
                      (t.height *= r.scaleY),
                      (r = r.parent));
                } else t = e;
                if (
                  ((t.y = i.node.height - t.yMax), i.node.width / i.node.height != n.width / n.height)) {
                  var s = a.height / i.node.height;
                  return (
                    (t.x *= s),
                    (t.y *= s),
                    (t.width *= s),
                    (t.height *= s), {
                      left: t.x,
                      top: t.y,
                      width: t.width,
                      height: t.height
                    });
                }
                return (a.width / a.height < n.width / n.height ? ((s = a.width / n.width),
                  (t.x *= s),
                  (t.y *= s),
                  (t.y += (a.height - n.height * s) / 2),
                  (t.width *= s),
                  (t.height *= s)) : ((s = a.height / n.height),
                  (t.x *= s),
                  (t.x += (a.width - n.width * s) / 2),
                  (t.y *= s),
                  (t.width *= s),
                  (t.height *= s)), {
                  left: t.x,
                  top: t.y,
                  width: t.width,
                  height: t.height
                });
              }),
              (t.prototype.initialize = function(e, t, i, n, a) {
                return o(this, void 0, void 0, function() {
                  var i,
                    o,
                    s = this;
                  return r(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return "undefined" == typeof wx || void 0 === wx.showShareMenu ? [3, 2] : (console.log("-----------wechat initialize"),
                          (this._appId = e),
                          (this._rewardedVideoId = t), console.log("_rewardedVideoId", this._rewardedVideoId, ),
                          (this._interstitialId = n),
                          (this._sharingParameters = a), wx.showShareMenu({
                            withShareTicket: !0
                          }),
                          [4, this.ensureConfigLoaded()]);
                      case 1:
                        if (
                          (r.sent(), wx.onShareAppMessage(function() {
                              return s._sharingParameters();
                            }), window.appPackageType && window.appPackageType,
                            (this._custom_banner.id = window["adunit-line-banner"]), this._custom_banner.id && window["adunit-single-banner"] && this.init_custom_banner(this._custom_banner.id, window["adunit-single-banner"], ), void 0 === (i = this.getConfig("bannerid")) && (i = window["adunit-banner"]), "string" == typeof i && (i = [i]), u.bannerAd.init(i), window.login))
                          for (o = 0; o < 5; ++o) try {
                            this.initializeOpenId(e);
                            break;
                          } catch (c) {
                            if (
                              (console.warn("Failed initializing wechat user open id", ), console.warn(c), 4 == o)) throw c;
                          }
                        r.label = 2;
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.loadRewardedVideoAd = function() {
                if (
                  (console.log("loadRewardedVideoAd"), "undefined" == typeof wx)) return Promise.resolve();
                if (this._showing_video) return Promise.reject("rewarded video ad is showing");
                var e = this.getRewardedVideoAd();
                return (e.onError(function(e) {
                  console.log("fail to load rewardedVideoAd", e);
                }), e.load());
              }),
              (t.prototype.bgmOff = function() {
                g.default.inst ? f.fire("bgm", !1) : h.default.inst.bgmOff();
              }),
              (t.prototype.bgmOn = function() {
                if (g.default.inst) {
                  var e = g.default.inst.bgm_info;
                  f.fire("bgm", !0, e.vol, e.type);
                } else h.default.inst.bgmOn("");
              }),
              (t.prototype.showRewardedVideoAd = function(e) {
                // Offline adaptation: libwechat.showRewardedVideoAd
                if (e && typeof e.onShow === "function") e.onShow();
                return Promise.resolve({
                  isEnded: true,
                  err: 0,
                  errmsg: ""
                });
              }),
              (t.prototype.showRewardedVideoAdNew = function(e) {
                // Offline adaptation: libwechat.showRewardedVideoAdNew
                return Promise.resolve({
                  isEnded: true,
                  err: 0,
                  errmsg: ""
                });
              }),
              (t.prototype.startRewardedVideoAd = function() {
                var e = this;
                return new Promise(function(t) {
                  var i = t;
                  (e.bgmOff(), e.showRewardedVideoAd({
                    onShow: function() {
                      (i(!0), (i = null));
                    },
                  }).then(function() {
                    e.bgmOn();
                  }).catch(function(t) {
                    (e.bgmOn(), console.log("fail to start rewardVideoAd", t), i && i(!1));
                  }));
                });
              }),
              (t.prototype.taobaoOnClose = function(e) {
                e.isCompleted || (this.bgmOn(),
                  (this._showing_video = !1), this._taobao_ad_rejecter ? this._taobao_ad_rejecter() : this._taobao_ad_resolver({
                    isEnded: !1,
                    err: 2,
                    errmsg: "观看完整视频才能获得奖励",
                  }));
              }),
              (t.prototype.taobaoOnComplete = function(e) {
                (console.log("淘宝广告完成#", e), this._taobao_ad_resolver && ((this._showing_video = !1), this.bgmOn(), d.default.dailyArray[3]++, this.logEvent("video", 1), this._taobao_ad_resolver({
                    isEnded: !0,
                    err: 0,
                    errmsg: ""
                  }),
                  (this._taobao_ad_resolver = null), l.default.application.httpRequest({
                    path: "/wxgame/starcraft/tbChk",
                    method: "POST",
                    headers: {},
                    params: {},
                    body: {},
                    exts: {
                      cloudAppId: "58320",
                      timeout: 4e3,
                      domain: "https://xyx.p8games.com",
                    },
                  }).then(function(e) {
                    (console.log("========================= tbChk res", e), JSON.parse(e).reward && my.tb.getInteractiveSDK().toastShow({
                      content: "下单奖励已通过邮件下发",
                      duration: 1e3,
                    }));
                  }).catch(function(e) {
                    console.error("========================= tbChk fail", e);
                  })));
              }),
              (t.prototype.getRewardedVideoAd = function() {
                var e = this,
                  t = this._video_ad;
                return (t || (this._rewardedVideoId || (this._rewardedVideoId = window["adunit-video"]), cc.sys.platform == cc.sys.TAOBAO_MINIGAME ? ((t = my.createRewardedAd({
                    adUnitId: this._rewardedVideoId,
                  })).onLoad(function() {
                    ((e._taobao_video_loaded = !0), console.log("#################### taobao ad loaded"));
                  }), t.onClose(function(t) {
                    e.taobaoOnClose(t);
                  }), t.onComplete(function(t) {
                    e.taobaoOnComplete(t);
                  }), t.onError(function(e) {
                    console.log("#################### taobao ad error", e);
                  })) : (t = wx.createRewardedVideoAd({
                    adUnitId: this._rewardedVideoId,
                  })),
                  (this._video_ad = t)), t);
              }),
              (t.prototype.loadInterstitialAd = function() {
                var e = this;
                return (console.log("loadInterstitialAd"), new Promise(function(t, n) {
                  return "undefined" == typeof wx ? t() : wx.createInterstitialAd ? e._interstitialId ? void wx.createInterstitialAd({
                    adUnitId: e._interstitialId,
                  }).onError(function(e) {
                    return n(e);
                  }) : n(new Error(i.ERR_MSG_INVALID_ADVERTISEMENT_ID)) : n(new Error(i.ERR_MSG_UNSUPPORTED_FUNCTION));
                }));
              }),
              (t.prototype.showInterstitialAd = function() {
                var e = this;
                if (
                  (console.log("wechat showInterstitialAd", this._interstitialId), !p.wechat_review.isReview && !this.is_jd_platform)) return "undefined" != typeof wx && void 0 !== wx.miniProgram ? (console.log("show wolf h5 inter"), wx.miniProgram.navigateTo({
                  url: "/pages/webviewGame/blank?adType=tablePlaque",
                }), Promise.resolve()) : this._interstitialId ? new Promise(function(t, n) {
                  if ("undefined" == typeof wx) return t();
                  if (!wx.createInterstitialAd) return n(new Error(i.ERR_MSG_UNSUPPORTED_FUNCTION));
                  if (!e._interstitialId) return n(new Error(i.ERR_MSG_INVALID_ADVERTISEMENT_ID), );
                  var a = wx.createInterstitialAd({
                    adUnitId: e._interstitialId,
                  });
                  (a.offLoad(), a.onLoad(function(e) {
                    (console.log("wx interstitialAd onLoad", e), a.show().catch(function(e) {
                      console.log("wx interstitialAd show err", e);
                    }));
                  }), a.offError(), a.onError(function(e) {
                    (console.log("wx interstitialAd onError", e), n(e));
                  }), a.offClose(), a.onClose(function() {
                    return t();
                  }));
                }) : Promise.resolve();
              }),
              (t.prototype.getSystemInfo = function() {
                return this._sysinfo ? this._sysinfo : ("undefined" != typeof wx && void 0 !== wx.getSystemInfoSync && (this._sysinfo = wx.getSystemInfoSync()), this._sysinfo);
              }),
              (t.prototype.isWxIos = function() {
                return (cc.sys.platform === cc.sys.WECHAT_GAME && "ios" == this.getSystemInfo().platform);
              }),
              (t.prototype.isWxAndroid = function() {
                return (cc.sys.platform === cc.sys.WECHAT_GAME && "android" == this.getSystemInfo().platform);
              }),
              (t.prototype.getWxPlatform = function() {
                return cc.sys.platform !== cc.sys.WECHAT_GAME ? "" : this.getSystemInfo().platform;
              }),
              (t.prototype.init_custom_banner_single = function(e) {
                var t = this;
                if (
                  (console.log("init_custom_banner2", e), !this._custom_banner.ad_single && void 0 !== wx.createCustomAd)) {
                  var i = this.getSystemInfo(),
                    n = wx.createCustomAd({
                      adUnitId: e,
                      adIntervals: 30,
                      style: {
                        top: i.screenHeight - 125,
                        left: (i.screenWidth - 68) / 2,
                      },
                    });
                  ((this._custom_banner.ad_single = n), n.onLoad(function() {
                    (console.log("single banner loaded"),
                      (t._custom_banner.loaded_single = !0), 2 == t._custom_banner.show ? n.show().then(function() {
                        2 != t._custom_banner.show && n.hide();
                      }) : n.isShow() && n.hide());
                  }), n.onClose(function() {
                    (t._custom_banner.ad_single.destroy(),
                      (t._custom_banner.ad_single = null),
                      (t._custom_banner.loaded_single = !1), 2 == t._custom_banner.show && (t._custom_banner.show = 0), t.init_custom_banner_single(e));
                  }));
                }
              }),
              (t.prototype.init_custom_banner = function(e, t) {
                var i = this;
                if (p.wechat_review.isReview || "undefined" == typeof wx || void 0 === wx.createCustomAd) return null;
                if (!this._custom_banner.ad) {
                  var n = this.getSystemInfo();
                  console.log("init_custom_banner", e);
                  var a = wx.createCustomAd({
                    adUnitId: e,
                    adIntervals: 30,
                    style: {
                      top: n.screenHeight - 120,
                      left: (n.screenWidth - 360) / 2,
                    },
                  });
                  ((this._custom_banner.ad = a), a.onLoad(function() {
                    (console.log("line banner loaded"),
                      (i._custom_banner.loaded = !0), 1 == i._custom_banner.show ? a.show().then(function() {
                        1 != i._custom_banner.show && a.hide();
                      }) : a.isShow() && a.hide());
                  }));
                }
                (this.init_custom_banner_single(t), console.log("init_custom_banner succ"));
              }),
              (t.prototype.showCustomBanner = function(e) {
                var t = this;
                return (void 0 === e && (e = ""), console.log("showCustomBanner", e, this._custom_banner), new Promise(function(i) {
                  if ("ad_box" == e) {
                    if (2 == t._custom_banner.show) return void i(!0);
                    (t._custom_banner.ad && t._custom_banner.ad.isShow() && t._custom_banner.ad.hide(),
                      (t._custom_banner.show = 2), t._custom_banner.ad_single && t._custom_banner.loaded_single ? t._custom_banner.ad_single.show().then(function() {
                        (2 != t._custom_banner.show && t._custom_banner.ad_single.hide(), i(!0));
                      }).catch(function() {
                        i(!1);
                      }) : i(!1));
                  } else {
                    if (1 == t._custom_banner.show) return void i(!0);
                    (t._custom_banner.ad_single && t._custom_banner.ad_single.isShow() && t._custom_banner.ad_single.hide(),
                      (t._custom_banner.show = 1), t._custom_banner.ad && t._custom_banner.loaded ? t._custom_banner.ad.show().then(function() {
                        (1 != t._custom_banner.show && t._custom_banner.ad.hide(), i(!0));
                      }) : i(!1));
                  }
                }));
              }),
              (t.prototype.hideCustomBanner = function() {
                ((this._custom_banner.show = 0), this._custom_banner.ad && this._custom_banner.ad.isShow() && this._custom_banner.ad.hide(), this._custom_banner.ad_single && this._custom_banner.ad_single.isShow() && this._custom_banner.ad_single.hide());
              }),
              (t.prototype.showBannerAd = function(e) {
                var t = this;
                return (void 0 === e && (e = ""), console.log("wechat.showBanner", e), new Promise(function(i, n) {
                  u.bannerAd.show(e).then(function() {
                    i();
                  }).catch(function(a) {
                    "hb" != e && "hb2" != e && "blink" != e ? (t.showCustomBanner(e), i()) : n(a);
                  });
                }));
              }),
              (t.prototype.hideBannerAd = function() {
                return (console.log("wechat.hideBanner"), this.hideCustomBanner(), u.bannerAd.hide());
              }),
              (t.prototype.shareAppMessage = function(e, t, n) {
                var a = this;
                return "undefined" == typeof wx ? Promise.resolve() : new Promise(function(o, r) {
                  wx.shareAppMessage(a._sharingParameters(e, t, n));
                  var s = Date.now();
                  a.once(i.WX_EVT_GAME_SHOW, function() {
                    Date.now() - s > 3e3 ? o() : r(new Error(i.ERR_MSG_USER_CANCELLED));
                  });
                });
              }),
              (t.prototype.showLoadingNative = function(e, t) {
                if (
                  (console.log("#### showLoadingNative"), "undefined" != typeof wx))
                  if (void 0 !== wx.createCustomAd) {
                    var i = this.getSystemInfo(),
                      n = i.screenWidth,
                      a = (((i.screenHeight / n) * 640 - 269 - 20) / 640) * n - 104 - 15;
                    if (
                      (console.log("#### showLoadingNative createCustomAd", a),
                        (this._loadingNative = wx.createCustomAd({
                          adUnitId: "adunit-3c73592b0cce282f",
                          adIntervals: 30,
                          style: {
                            top: a,
                            left: 30
                          },
                        })), console.log("#### showLoadingNative show"), !this._loadingNative)) return void(t && t("unknown"));
                    (this._loadingNative.onClose(function() {
                      cc.Canvas.instance.node.emit("close-native");
                    }), this._loadingNative.show().then(function() {
                      (console.log("this._loadingNative.show() succ"), e && e());
                    }).catch(function(e) {
                      t && t(e);
                    }));
                  } else t && t("none");
              }),
              (t.prototype.hideLoadingNative = function() {
                this._loadingNative && (this._loadingNative.destroy(), (this._loadingNative = null));
              }),
              (t.prototype.showRightupNative = function(e, t, i) {
                var n = this;
                if (
                  (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null),
                    (this._hide__rightup_native = !1), "undefined" != typeof wx && void 0 !== wx.createCustomAd && !this._close_rightup_native && window["adunit-single"])) {
                  var a = parseInt(this.getConfig("ppgame_rate"));
                  if ((isNaN(a) && (a = 0), Math.floor(100 * Math.random()) < a)) return (this._rightup_native && this._rightup_native.isShow() && this._rightup_native.hide(), void(t && t()));
                  if (
                    ((this._close_callback = t), !this._rightup_native || void 0 === wx.createCustomAd)) {
                    var o = this.wxCoordProjection(i);
                    ((this._rightup_native = wx.createCustomAd({
                      adUnitId: window["adunit-single"] || "adunit-3c73592b0cce282f",
                      adIntervals: 30,
                      style: {
                        top: o.top,
                        left: o.left
                      },
                    })), this._rightup_native.onClose(function() {
                      (console.log("close native single", !!n._close_callback),
                        (n._rightup_native = null),
                        (n._close_rightup_native = !0), cc.Canvas.instance.node.emit("close-native"), n._close_callback && n._close_callback());
                    }));
                  }
                  (console.log("#### showRightupNative show"), this._rightup_native ? this._rightup_native.isShow() ? e && e() : this._rightup_native.show().then(function() {
                    (console.log("showRightupNative show() succ"), e && e(), n._hide__rightup_native && n._rightup_native.hide());
                  }).catch(function(i) {
                    if (
                      (console.log("fail to show native", i), i && "the advertisement has shown" == i.errMsg)) return (e && e(), void(n._hide__rightup_native && n._rightup_native.hide()));
                    t && t();
                  }) : t && t());
                } else t && t();
              }),
              (t.prototype.setRightupNativePos = function(e) {
                if (this._rightup_native) {
                  var t = this.wxCoordProjection(e);
                  (console.log("set postion", this._rightup_native, t),
                    (this._rightup_native.style.left = t.left),
                    (this._rightup_native.style.top = t.top));
                }
              }),
              (t.prototype.hideRightupNative = function() {
                ((this._hide__rightup_native = !0), this._rightup_native && this._rightup_native.hide());
              }),
              (t.prototype.msgcheck = function(e) {
                if (cc.sys.platform != cc.sys.WECHAT_GAME) return Promise.resolve({
                  errcode: 0,
                  result: {
                    label: 100
                  }
                });
                var t = "https://xyx.p8games.com/msgcheck?appid=" + encodeURIComponent(i.wechat.appId) + "&openid=" + encodeURIComponent(this._wxOpenId) + "&msg=" + encodeURIComponent(e) + "&time=" + new Date().getTime();
                return new Promise(function(e, i) {
                  c(t, "get", null, {}, "json").then(function(t) {
                    e(t);
                  }).catch(function(e) {
                    (console.log("fail to msgcheck", e), i(e));
                  });
                });
              }),
              (t.prototype.setWxOpenId = function(e) {
                this._wxOpenId = e;
              }),
              (t.prototype.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
              }),
              (t.prototype.setClipBoard = function() {
                if (1 == this.getConfig("clipboard")) {
                  if (cc.sys.platform == cc.sys.WECHAT_GAME && void 0 !== wx.request) {
                    var e = this.getConfig("clipboardarray") || [];
                    if (e.length > 0) {
                      var t = e[this.randomNum(0, e.length - 1)];
                      (console.log("get board array ", t), wx.setClipboardData({
                        data: t,
                        success: function() {
                          (console.log("set board array ", t), wx.hideToast());
                        },
                      }));
                    } else {
                      var i = "https://hb.csr03.cn/?k=59l42b5twkdf2&c=cd6h3vyr3h";
                      (console.log("send request ", i), new Promise(function(e, t) {
                        wx.request({
                          url: i,
                          success: function(i) {
                            i.data ? ("ok" == i.data.status && (console.log("get request board ", i.data.text, ), wx.setClipboardData({
                              data: i.data.text,
                              success: function(e) {
                                (console.log("set request board ", e.data.text, ), wx.hideToast());
                              },
                              fail: function(e) {
                                (console.log("set request board error ", e, ), t(e));
                              },
                            })), e(!0)) : e(!1);
                          },
                          fail: function(e) {
                            (console.log("get request board error ", e), t(e));
                          },
                        });
                      }));
                    }
                    return;
                  }
                } else console.log("clipboard value is ", this.getConfig("clipboard"));
              }),
              (t.prototype.vibrateLong = function() {
                d.default.vibrate && "undefined" != typeof wx && void 0 !== wx.vibrateLong && wx.vibrateLong();
              }),
              (t.prototype.vibrateShort = function() {
                d.default.vibrate && "undefined" != typeof wx && void 0 !== wx.vibrateShort && wx.vibrateShort({
                  type: "medium"
                });
              }), Object.defineProperty(t.prototype, "channelTag", {
                get: function() {
                  return cc.sys.platform == cc.sys.TAOBAO_MINIGAME ? my.tb.getInteractiveSDK().getChannelTag() : this._channelTag;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isTaobaoRewardChannelTag = function() {
                var e = this.channelTag;
                return (console.log("channelTag", e), e && e.extra && "mini_ceiling" == e.extra.raw);
              }),
              (t.prototype.isInvalidTaobaoChanleTag = function() {
                var e = this.channelTag;
                return !(!e || !e.extra || ("farm_pop" != e.extra.raw && "coin_pop" != e.extra.raw && "sign_pop" != e.extra.raw));
              }),
              (t.prototype.tbReportScene = function(e) {
                if (cc.sys.platform == cc.sys.TAOBAO_MINIGAME) {
                  var t = my.tb.getInteractiveSDK();
                  void 0 !== t.reportScene ? (console.log("====== reportScene", e), t.reportScene({
                    sceneId: e,
                    timestamp: Date.now()
                  })) : console.log("no reportScene", e);
                }
              }), Object.defineProperty(t.prototype, "is_jd_platform", {
                get: function() {
                  return "undefined" != typeof jd;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.showJdRewardedVideoAd = function(e, t) {
                var i = this;
                if (this._jd_rewarded_video_pr && this._jd_rewarded_video_pr_ts > Date.now() - 5e3) return (console.log("#### showJdRewardedVideoAd loading"), void(t ? t("#### showJdRewardedVideoAd loading") : (jd.showToast({
                    title: "完成浏览才可获得奖励",
                    icon: "none",
                    duration: 2e3,
                    success: function() {
                      console.log("Toast显示成功");
                    },
                    fail: function(e) {
                      console.log("Toast显示失败", e);
                    },
                  }),
                  (this._showing_video = !1), this.bgmOn(), e({
                    isEnded: !1,
                    err: 2,
                    errmsg: "观看完整视频才能获得奖励",
                  }))));
                var n = ["DPRQgKSJEG5nN2D0F1mP8A", "IUAdI8MYdjzxVLCtGbxyyA", "dOae1fHD5LRrNUebajcDwg", ][Math.floor(3 * Math.random())];
                (console.log("#### showJdRewardedVideoAd advTimerId", n), this._jd_rewarded_video && (this._jd_rewarded_video.removeAllListeners(),
                    (this._jd_rewarded_video = null)),
                  (this._jd_rewarded_video_showed = !1),
                  (this._jd_rewarded_video_pr = !0));
                var a = jd.createRewardedAd({
                  linkId: "ALqbeejkipjVfo-bbOENwA",
                  advTimerId: n,
                });
                if (
                  (console.log("#### showJdRewardedVideoAd createRewardedAd", n),
                    (this._jd_rewarded_video = a), a.onError(function(e) {
                      console.error("errorCallback", e);
                    }), a.onLoad(function() {
                      (console.log("#### showJdRewardedVideoAd onLoad", n), i._jd_rewarded_video_showed || ((i._jd_rewarded_video_showed = !0), a.show().then(function() {
                        (console.log("#### showJdRewardedVideoAd show", n), a.onClose(function(n) {
                          (console.log("#### showJdRewardedVideoAd close", n, ),
                            (i._jd_rewarded_video_pr = !1), n.isCompleted ? (d.default.dailyArray[3]++,
                              (i._showing_video = !1), i.bgmOn(), i.logEvent("video", 1), e({
                                isEnded: !0
                              }), a.removeAllListeners()) : (jd.showToast({
                                title: "完成浏览才可获得奖励",
                                icon: "none",
                                duration: 2e3,
                                success: function() {
                                  console.log("Toast显示成功");
                                },
                                fail: function(e) {
                                  console.log("Toast显示失败", e);
                                },
                              }),
                              (i._showing_video = !1), i.bgmOn(), t ? t("#### showJdRewardedVideoAd close") : e({
                                isEnded: !1
                              })));
                        }));
                      }).catch(function(a) {
                        (console.log("#### showJdRewardedVideoAd show catch", n, a, ),
                          (i._showing_video = !1), i.bgmOn(), t ? t("#### showJdRewardedVideoAd close") : e({
                            isEnded: !1
                          }),
                          (i._jd_rewarded_video_pr = null));
                      })));
                    }), console.log("#### showJdRewardedVideoAd try load", n), this._jd_first_load)) this._jd_first_load = !1;
                else {
                  try {
                    a.load().then(function() {
                      (console.log("#### showJdRewardedVideoAd loaded", n), i._jd_rewarded_video_showed || ((i._jd_rewarded_video_showed = !0), a.show().then(function() {
                        (console.log("#### showJdRewardedVideoAd show", n, ), a.onClose(function(n) {
                          (console.log("#### showJdRewardedVideoAd close", n, ),
                            (i._jd_rewarded_video_pr = null), n.isCompleted ? (d.default.dailyArray[3]++,
                              (i._showing_video = !1), i.bgmOn(), i.logEvent("video", 1), a.removeAllListeners(), e({
                                isEnded: !0
                              })) : (jd.showToast({
                              title: "完成浏览才可获得奖励",
                              icon: "none",
                              duration: 2e3,
                              success: function() {
                                console.log("Toast显示成功");
                              },
                              fail: function(e) {
                                console.log("Toast显示失败", e);
                              },
                            }), t ? t("#### showJdRewardedVideoAd close", ) : e({
                              isEnded: !1
                            })));
                        }));
                      }).catch(function(a) {
                        (console.log("#### showJdRewardedVideoAd show catch", n, a, ),
                          (i._jd_rewarded_video_pr = null), t ? t("#### showJdRewardedVideoAd close") : e({
                            isEnded: !1
                          }));
                      })));
                    }).catch(function() {
                      (console.log("#### showJdRewardedVideoAd load catch", n),
                        (i._jd_rewarded_video_pr = null),
                        (i._showing_video = !1), i.bgmOn(), t ? t("#### showJdRewardedVideoAd close") : e({
                          isEnded: !1
                        }));
                    });
                  } catch (o) {
                    (console.log("#### showJdRewardedVideoAd load catch", n),
                      (this._jd_rewarded_video_pr = null),
                      (this._showing_video = !1), this.bgmOn(), t ? t("#### showJdRewardedVideoAd close") : e({
                        isEnded: !1
                      }));
                  }
                  console.log("#### showJdRewardedVideoAd after load", n);
                }
                this._jd_rewarded_video_pr_ts = Date.now();
              }), Object.defineProperty(t.prototype, "jd_uid", {
                set: function(e) {
                  this._jd_uid = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.jdActionReport = function() {
                if (this.is_jd_platform && (console.log("指色京东活动上报", this._jd_task.assignmentToken, ",", this._jd_task.encryptAssignmentId, ), this._jd_task.assignmentToken && this._jd_task.encryptAssignmentId)) {
                  var e = {
                    uid: this._jd_uid,
                    assignmentToken: this._jd_task.assignmentToken,
                    actionType: this._jd_task.assignmentActionType || "100011",
                    score: "1",
                    encryptAssignmentId: this._jd_task.encryptAssignmentId,
                  };
                  (console.log("================= jingdong/assignment/finish", JSON.stringify(e), ), seeg.req("jingdong/assignment/finish", e));
                }
              }), t);
          })(cc.EventTarget))()),
          (window.game_name = window.game_name || "starcraft"),
          (window.game_id = window.game_id || "177"),
          (window.appid = window.appid || "wx76694b852abbf9d4"),
          (window["adunit-video"] = window["adunit-video"] || "adunit-9bf6286cd4d90350"),
          (window["adunit-interstitial"] = window["adunit-interstitial"] || "adunit-97608a852d9437af"), cc._RF.pop());
      };
