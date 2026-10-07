// module: playerData
// deps: {"../battle_scripts/libppgame/utils":"utils","./data/itemData":"itemData","./gameData":"gameData","./libppgame/libwechat":"libwechat","@tbmp/mp-cloud-sdk":5,"msgpack-lite":10}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c9bf2MNbN5JfrSGFGGHhF7+", "playerData");
        var n = (this && this.__decorate) || function(e, t, i, n) {
            var a,
              o = arguments.length,
              r = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(t, i, r) : a(t, i)) || r);
            return (o > 3 && r && Object.defineProperty(t, i, r), r);
          },
          a = (this && this.__awaiter) || function(e, t, i, n) {
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
          o = (this && this.__generator) || function(e, t) {
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
        var r = cc._decorator,
          s = r.ccclass,
          c = (r.property, e("@tbmp/mp-cloud-sdk")),
          l = e("./data/itemData"),
          d = e("./gameData"),
          h = e("./libppgame/libwechat"),
          u = e("msgpack-lite"),
          p = e("../battle_scripts/libppgame/utils");

        function f(e) {
          for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              i = "",
              n = 0; n < e.length;) {
            var a = e[n++],
              o = n < e.length ? e[n++] : NaN,
              r = n < e.length ? e[n++] : NaN,
              s = a >> 2,
              c = ((3 & a) << 4) | (isNaN(o) ? 0 : o >> 4),
              l = isNaN(o) ? 64 : ((15 & o) << 2) | (isNaN(r) ? 0 : r >> 6),
              d = isNaN(r) ? 64 : 63 & r;
            i += t.charAt(s) + t.charAt(c) + t.charAt(l) + t.charAt(d);
          }
          return i;
        }
        var g = (function() {
          function e() {}
          var t;
          return (
            (t = e), Object.defineProperty(e, "level", {
              get: function() {
                for (var e = 0; e < this.levelPassArray.length; e++)
                  if (this.levelPassArray[e] < 3) return e;
                return this.levelPassArray.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.fixData = function() {
              if (
                (t.freeTimeArray.length < 8 && (t.freeTimeArray = [3, 1, 3, 3, 5, 3, 99, 3]), t.levelPassArray.length < d.default.totalLevel))
                for (var e = d.default.totalLevel - t.levelPassArray.length, i = 0; i < e; i++) t.levelPassArray.push(0);
              if (t.levelGiftArray.length < d.default.totalLevel)
                for (e = d.default.totalLevel - t.levelGiftArray.length, i = 0; i < e; i++) t.levelGiftArray.push(0);
              if (t.bufferArray.length < 72)
                for (e = 72 - t.bufferArray.length, i = 0; i < e; i++) t.bufferArray.push(0);
              if (t.levelBenefitArray.length < 30)
                for (e = 30 - t.levelBenefitArray.length, i = 0; i < e; i++) t.levelBenefitArray.push(0);
              for (i = 0; i < 6; i++) 2 == t.weekArray[i] && 0 != t.weekArray[i + 1] && (t.weekArray[i] = 3);
            }),
            (e.saveData = function() {
              // Offline adaptation: playerData.saveData
              window.offlineArena.persist(this);
              t.fixData();
              var e = t.dataToStr(),
                i = t.strEncrypt(e),
                n = p.utils.my_md5(i, t.md5_key, !1),
                a = n.substring(0, 2) + i + n.substring(n.length - 2, n.length);
              cc.sys.localStorage.setItem(t.gameName, a);
            }),
            (e.loadData = function() {
              return a(this, void 0, void 0, function() {
                var e, i, n, a, r, s;
                return o(this, function(o) {
                  switch (o.label) {
                    case 0:
                      if ((e = cc.sys.localStorage.getItem(t.gameName))) try {
                        ((i = e.substring(0, 2)),
                          (n = e.substring(e.length - 2, e.length)),
                          (a = e.substring(2, e.length - 2)),
                          (r = p.utils.my_md5(a, t.md5_key, !1)), i == r.substring(0, 2) && n == r.substring(r.length - 2, r.length) ? ((s = t.strDecrypt(a)), t.strToData(s), t.fixData()) : t.saveData());
                      } catch (c) {
                        console.log("load error", c);
                      }
                      else(console.log("本地无存档"), t.saveData());
                      return [4, this.loadUser()];
                    case 1:
                      return (o.sent(), [2]);
                  }
                });
              });
            }), Object.defineProperty(e, "openid", {
              get: function() {
                if (this._openid) return this._openid;
                if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
                  var e = h.wechat.getHttpParam("openid");
                  (e || (e = cc.sys.localStorage.getItem("ppgames-openid")) || ((e = "pp" + p.utils.uuid()), cc.sys.localStorage.setItem("ppgames-openid", e)),
                    (this._openid = e));
                }
                return this._openid;
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(e, "cid", {
              get: function() {
                return this._cid;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.dataToStr = function(e) {
              void 0 === e && (e = 0);
              var i = {
                first: t.first,
                levelPassArray: t.levelPassArray,
                levelGiftArray: t.levelGiftArray,
                armyLevelArray: t.armyLevelArray,
                buildingChoice: t.buildingChoice,
                itemArray: t.itemArray,
                buildingLevelArray: t.buildingLevelArray,
                bufferArray: t.bufferArray,
                techLevelArray: t.techLevelArray,
                techParallelDate: t.techParallelDate,
                techUpgradeArray: t.techUpgradeArray,
                techResetPoints: t.techResetPoints,
                levelBenefitArray: t.levelBenefitArray,
                freeTimeArray: t.freeTimeArray,
                boxTimeArray: t.boxTimeArray,
                armyCheck: t.armyCheck,
                timer: t.timer,
                music: t.music,
                sound: t.sound,
                vibrate: t.vibrate,
                char: t.char,
                saveBattleData: t.saveBattleData,
                dailyArray: t.dailyArray,
                weekArray: t.weekArray,
                onlineTime: t.onlineTime,
                playerName: t.playerName,
                playerIcon: t.playerIcon,
                customIcon: t.customIcon,
                b_misc: t.b_misc,
              };
              if (0 == e) return JSON.stringify(i);
              ((i.dlevel = d.default.getPassLevel()),
                (i.power = d.default.getPlayerPower()));
              var n = this.province;
              n && (i.province = n);
              var a = cc.sys.localStorage.getItem("ppgames_saved_city");
              return (a && (i.city = a), u.encode({
                data: i,
                openid: this.openid
              }));
            }),
            (e.strToData = function(e) {
              // Offline adaptation: playerData.strToData
              var i = JSON.parse(e);
              ((t.first = i.first), null != i.levelPassArray && (t.levelPassArray = i.levelPassArray), null != i.levelGiftArray && (t.levelGiftArray = i.levelGiftArray), null != i.armyLevelArray && (t.armyLevelArray = i.armyLevelArray), null != i.buildingChoice && (t.buildingChoice = i.buildingChoice), null != i.itemArray && (t.itemArray = i.itemArray), null != i.buildingLevelArray && (t.buildingLevelArray = i.buildingLevelArray), null != i.bufferArray && (t.bufferArray = i.bufferArray), null != i.techLevelArray && (t.techLevelArray = i.techLevelArray), null != i.techParallelDate && (t.techParallelDate = i.techParallelDate), null != i.techUpgradeArray && (t.techUpgradeArray = i.techUpgradeArray), null != i.techResetPoints && (t.techResetPoints = i.techResetPoints), null != i.levelBenefitArray && ("string" == typeof i.levelBenefitArray ? (i.levelBenefitArray = JSON.parse(i.levelBenefitArray)) : (t.levelBenefitArray = i.levelBenefitArray)), null != i.freeTimeArray && (t.freeTimeArray = i.freeTimeArray), null != i.boxTimeArray && (t.boxTimeArray = i.boxTimeArray), null != i.armyCheck && (t.armyCheck = i.armyCheck),
                (t.timer = i.timer), null != i.music && (t.music = i.music), null != i.sound && (t.sound = i.sound), null != i.vibrate && (t.vibrate = i.vibrate), null != i.char && (t.char = i.char), null != i.saveBattleData && (t.saveBattleData = i.saveBattleData), null != i.dailyArray && (t.dailyArray = i.dailyArray), null != i.weekArray && (t.weekArray = i.weekArray), null != i.onlineTime && (t.onlineTime = i.onlineTime), null != i.playerName && (t.playerName = i.playerName), null != i.playerIcon && (t.playerIcon = i.playerIcon), null != i.customIcon && (t.customIcon = i.customIcon), null != i.b_misc && (t.b_misc = i.b_misc));
              window.offlineArena.restore(this);
            }),
            (e.saveDataRem = function() {}),
            (e.getDataRem = function() {}),
            (e.strEncrypt0 = function(e) {
              for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) + e.charCodeAt(i - 1));
              return ((t = t.replace(/%/g, "%25")), encodeURIComponent(t));
            }),
            (e.strDecrypt0 = function(e) {
              e = decodeURIComponent(e);
              for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - t.charCodeAt(i - 1));
              return t;
            }),
            (e.strEncrypt = function(e) {
              try {
                for (var t = String.fromCharCode(e.charCodeAt(0) + e.length),
                    i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) + e.charCodeAt(i - 1), );
                return (
                  (t = t.replace(/%/g, "%25")), "ENC:" + encodeURIComponent(t));
              } catch (n) {
                return (console.error("加密失败，直接保存原始数据:", n), "RAW:" + e);
              }
            }),
            (e.strDecrypt = function(e) {
              try {
                if (e.startsWith("ENC:")) {
                  ((e = e.substring(4)), (e = decodeURIComponent(e)));
                  for (var t = String.fromCharCode(e.charCodeAt(0) - e.length),
                      i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - t.charCodeAt(i - 1), );
                  return t;
                }
                if (e.startsWith("RAW:")) return e.substring(4);
                try {
                  for (e = decodeURIComponent(e), t = String.fromCharCode(e.charCodeAt(0) - e.length), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - t.charCodeAt(i - 1), );
                  return t;
                } catch (n) {
                  return (console.error("旧数据解密失败，返回原始数据:", n), e);
                }
              } catch (n) {
                return (console.error("解密失败，返回原始数据:", n), e.startsWith("ENC:") || e.startsWith("RAW:") ? e.substring(4) : e);
              }
            }),
            (e.saveUser = function() {
              // Offline adaptation: playerData.saveUser
              this.saveData();
              return Promise.resolve();
            }), Object.defineProperty(e, "token", {
              get: function() {
                return this._token;
              },
              enumerable: !1,
              configurable: !0,
            }), Object.defineProperty(e, "blockType", {
              get: function() {
                return this._blockType;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.blockUser = function() {
              var e = this,
                t = "cid=" + this.cid,
                i = t;
              return new Promise(function(n) {
                var a = p.utils.my_md5(i + e.token, "", !1);
                (console.log("update user info sign", a), h.wechat.request("https://xyx.p8games.com/wxgame/starcraft/blockUser?" + t + "&sign=" + a, "get", null, {}, "json", ).then(function(e) {
                  (console.log("block user ok", e), n(e));
                }).catch(function(e) {
                  (console.log("block user err", e), n({
                    err: 500
                  }));
                }));
              });
            }),
            (e.checkUser = function() {
              // Offline adaptation: playerData.checkUser
              return;
            }),
            (e.onUserData = function(e, i) {
              return e ? ((this._cid = e.id),
                (this._blockType = e.blockType),
                (this._createTime = p.utils.parseDateString(e.createTime)), null != e.arenaScore && (t.arenaScore = e.arenaScore), null != e.jx && (t.jx = e.jx), e.dlevel <= d.default.getPassLevel() ? (i(), void this.checkUser()) : ((t.first = e.first), e.levelPassArray && (t.levelPassArray = JSON.parse(e.levelPassArray)), e.levelGiftArray && (t.levelGiftArray = JSON.parse(e.levelGiftArray)), e.armyLevelArray && (t.armyLevelArray = JSON.parse(e.armyLevelArray)), e.buildingChoice && (t.buildingChoice = JSON.parse(e.buildingChoice)), e.itemArray && (t.itemArray = JSON.parse(e.itemArray)), e.buildingLevelArray && (t.buildingLevelArray = JSON.parse(e.buildingLevelArray, )), e.bufferArray && (t.bufferArray = JSON.parse(e.bufferArray)), e.techLevelArray && (t.techLevelArray = JSON.parse(e.techLevelArray)), e.techUpgradeArray && (t.techUpgradeArray = JSON.parse(e.techUpgradeArray)),
                  (t.techParallelDate = e.techParallelDate),
                  (t.techResetPoints = e.techResetPoints), e.levelBenefitArray && (t.levelBenefitArray = JSON.parse(e.levelBenefitArray)), e.freeTimeArray && (t.freeTimeArray = JSON.parse(e.freeTimeArray)), e.boxTimeArray && (t.boxTimeArray = JSON.parse(e.boxTimeArray)), e.armyCheck && (t.armyCheck = JSON.parse(e.armyCheck)),
                  (t.timer = parseInt(e.timer)), null != e.music && (t.music = e.music), null != e.sound && (t.sound = e.sound), null != e.vibrate && (t.vibrate = e.vibrate), null != e.char && (t.char = e.char), e.saveBattleData && (t.saveBattleData = JSON.parse(e.saveBattleData)), e.dailyArray && (t.dailyArray = JSON.parse(e.dailyArray)), e.weekArray && (t.weekArray = JSON.parse(e.weekArray)), null != e.onlineTime && (t.onlineTime = e.onlineTime), null != e.playerName && (t.playerName = e.playerName), null != e.playerIcon && (t.playerIcon = e.playerIcon), null != e.customIcon && (t.customIcon = e.customIcon), e.b_misc && (t.b_misc = JSON.parse(e.b_misc)), this.fixData(), this.checkUser(), void i())) : (console.log("loadUser no data"), void i());
            }),
            (e.onLoadUser = function(e, t) {
              var i = new Uint8Array(e),
                n = u.decode(i);
              ((this._token = n.token),
                (this._openid = n.openid), window.no_log || h.wechat.setWxOpenId(n.openid), this.onUserData(n.data, t));
            }),
            (e.loadUser = function() {
              // Offline adaptation: playerData.loadUser
              window.offlineArena.restore(this);
              return Promise.resolve();
            }),
            (e.getItemNum = function(e) {
              if (2 == e) {
                for (var i = 0, n = 0; n < t.itemArray.length; n++)
                  (2 != t.itemArray[n][0] && 3 != t.itemArray[n][0]) || (t.itemArray[n][1] >= Number(l.default.ItemConfig[l.default.getItemIndexWithType(e)][4], ) && (t.itemArray[n][1] = Number(l.default.ItemConfig[l.default.getItemIndexWithType(e)][4], )),
                    (i += t.itemArray[n][1]));
                return i;
              }
              for (n = 0; n < t.itemArray.length; n++)
                if (t.itemArray[n][0] == e) return (t.itemArray[n][1] >= Number(l.default.ItemConfig[l.default.getItemIndexWithType(e)][4], ) && (t.itemArray[n][1] = Number(l.default.ItemConfig[l.default.getItemIndexWithType(e)][4], )), t.itemArray[n][1]);
              return 0;
            }),
            (e.setItemNum = function(e, i) {
              for (var n = 0; n < t.itemArray.length; n++)
                if (t.itemArray[n][0] == e) {
                  t.itemArray[n][1] = i;
                  break;
                }
            }),
            (e.addItem = function(e, i) {
              for (var n = 0; n < t.itemArray.length; n++)
                if (t.itemArray[n][0] == e) return void(t.itemArray[n][1] += i);
              t.itemArray.push([e, i]);
            }),
            (e.subItem = function(e, i) {
              if (2 == e) {
                for (var n = 0; n < t.itemArray.length; n++)
                  if (2 == t.itemArray[n][0]) {
                    if (t.itemArray[n][1] >= i) t.itemArray[n][1] -= i;
                    else {
                      var a = i - t.itemArray[n][1];
                      t.itemArray[n][1] = 0;
                      for (var o = 0; o < t.itemArray.length; o++)
                        if (3 == t.itemArray[o][0]) {
                          ((t.itemArray[o][1] -= a), t.itemArray[o][1] < 0 && (console.log("PlayerData subItem error"),
                            (t.itemArray[o][1] = 0)));
                          break;
                        }
                    }
                    break;
                  }
              } else
                for (n = 0; n < t.itemArray.length; n++)
                  if (t.itemArray[n][0] == e) {
                    ((t.itemArray[n][1] -= i), t.itemArray[n][1] < 0 && (console.log("PlayerData subItem error"),
                      (t.itemArray[n][1] = 0)));
                    break;
                  }
            }), Object.defineProperty(e, "province", {
              get: function() {
                return (cc.sys.localStorage.getItem("ppgames_saved_province") || "");
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.updateUserInfo = function(e) {
              var i = this,
                n = e.name,
                a = e.headIcon,
                o = e.appid,
                r = void 0 === o ? "" : o,
                s = e.openid,
                c = void 0 === s ? "" : s,
                l = (r ? "appid=" + r + "&" : "") + "cid=" + this.cid;
              if (void 0 !== a) {
                var d = parseInt(a);
                (isNaN(d) ? ((this.customIcon = ""), (this.playerIcon = a)) : (this.customIcon = a),
                  (l += "&headIcon=" + a), t.saveDataRem(), this.saveData());
              }
              var u = l;
              return (void 0 !== n && ((l += "&name=" + encodeURIComponent(n)),
                (u += "&name=" + n)), c && ((l += "&openid=" + c), (u += "&openid=" + c)), console.log("update user info", l), new Promise(function(e) {
                var a = p.utils.my_md5(u + i.token);
                h.wechat.request("https://xyx.p8games.com/wxgame/starcraft/userInfo?" + l + "&sign=" + a, "get", null, {}, "json", ).then(function(a) {
                  (console.log("update user info ok", a), 0 == a.err && void 0 !== n && ((i.playerName = n), console.log("update user info name", n), t.saveDataRem(), i.saveData()), e(a));
                }).catch(function(t) {
                  (console.log("update user info err", t), e({
                    err: 500
                  }));
                });
              }));
            }),
            (e.get_ttreward_fetched = function() {
              return 1 == this.b_misc.ttreward_fetched;
            }),
            (e.set_ttreward_fetched = function() {
              ((this.b_misc.ttreward_fetched = 1), this.saveDataRem(), this.saveData());
            }),
            (e.getMisc = function(e) {
              return this.b_misc[e];
            }),
            (e.setMisc = function(e, t) {
              ((this.b_misc[e] = t), this.saveDataRem(), this.saveData());
            }),
            (e.gameName = "ppgames_starcraft"),
            (e.md5_key = "FMtot5g6wTMrNmGf"),
            (e.dataRem = null),
            (e.first = 1),
            (e.levelPassArray = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.levelGiftArray = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.armyLevelArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            (e.armyLevelArrayOther = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            (e.buildingChoice = [1, 1, 1]),
            (e.itemArray = [
              [4, 30],
              [1, 200],
            ]),
            (e.buildingLevelArray = [0, 0, 0, 0, 0]),
            (e.buildingLevelArrayOther = [0, 0, 0, 0, 0]),
            (e.bufferArray = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.bufferArrayOther = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.techLevelArray = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.techLevelArrayOther = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.techParallelDate = ""),
            (e.techUpgradeArray = []),
            (e.techResetPoints = 0),
            (e.freeTimeArray = [3, 1, 3, 3, 5, 3, 99, 3]),
            (e.boxTimeArray = [10, 10]),
            (e.timer = 0),
            (e.music = 1),
            (e.sound = 1),
            (e.vibrate = 1),
            (e.char = 1),
            (e.armyCheck = [
              [2, 1, 1],
              [2, 1, 0],
              [2, 0, 0],
            ]),
            (e.armyCheckOther = [
              [2, 1, 1],
              [2, 1, 0],
              [2, 0, 0],
            ]),
            (e.saveBattleData = null),
            (e.dailyArray = [0, 0, 0, 0]),
            (e.weekArray = [1, 0, 0, 0, 0, 0, 0]),
            (e.onlineTime = 0),
            (e.levelBenefitArray = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e.levelBenefitArrayOther = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            (e._openid = ""),
            (e._cid = ""),
            (e._token = ""),
            (e._createTime = 0),
            (e._blockType = 0),
            (e.showLevelup = 0),
            (e.playerIcon = ""),
            (e.playerName = ""),
            (e.customIcon = ""),
            (e.arenaScore = 0),
            (e.jx = 1),
            (e.b_misc = {}),
            (t = n([s], e)));
        })();
        ((i.default = g), cc._RF.pop());
      };
