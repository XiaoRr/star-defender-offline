// module: gameRecord
// deps: {"./libwechat":"libwechat"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        (cc._RF.push(t, "1d06eeOrO9NjLuFxXYX61W5", "gameRecord"), Object.defineProperty(i, "__esModule", {
            value: !0
          }),
          (i.gameRecord = void 0));
        var n = e("./libwechat");
        ((i.gameRecord = new((function() {
          function e() {
            var e = this;
            ((this._recorder = null),
              (this._recording = !1),
              (this._videoPath = null),
              (this._stop_callback = null),
              (this._record_time = 0),
              (this._recorded_secs = 0), "undefined" != typeof tt && void 0 !== tt.getGameRecorderManager && "devtools" != n.wechat.getSystemInfo().appName && ((this._recorder = tt.getGameRecorderManager()), this._recorder && (this._recorder.onStart(function() {
                ((e._recording = !0),
                  (e._record_time = new Date().getTime()));
              }), this._recorder.onStop(function(t) {
                console.log("gameRecord onStop", t.videoPath);
                var i = new Date().getTime();
                ((e._recorded_secs += (i - e._record_time) / 1e3), console.log("结束录屏", e._recorded_secs),
                  (e._recording = !1), e._recorded_secs <= 30 ? ((e._videoPath = t.videoPath), e._stop_callback && e._stop_callback(t.videoPath)) : e._recorder.clipVideo({
                    path: t.videoPath,
                    timeRange: [16, 0],
                    success: function(t) {
                      (console.log(t.videoPath),
                        (e._videoPath = t.videoPath), e._stop_callback && e._stop_callback(t.videoPath));
                    },
                    fail: function(e) {
                      console.error(e);
                    },
                  }));
              }), this._recorder.onPause(function() {
                var t = (new Date().getTime() - e._record_time) / 1e3;
                ((e._recorded_secs += t), console.log("暂停录屏+" + t + "，共" + e._recorded_secs));
              }), this._recorder.onResume(function() {
                ((e._record_time = new Date().getTime()), console.log("继续录屏"));
              }))));
          }
          return (
            (e.prototype.startRecord = function(e) {
              if (
                (void 0 === e && (e = 0), console.log("startRecord", e), this._recorder)) {
                if (this._recording) return;
                return (this.reset(), this._recorder.start({
                  duration: e || 30
                }), !0);
              }
              return !1;
            }),
            (e.prototype.recorded = function() {
              return this._recorded_secs;
            }),
            (e.prototype.stopRecordPromis = function() {
              var e = this;
              return new Promise(function(t) {
                e.stopRecord(function() {
                  t(e._videoPath);
                });
              });
            }),
            (e.prototype.stopRecord = function(e) {
              if ((console.log("startRecord", !!e), this._recorder)) {
                if (!this._recording) return void(e && e(this._videoPath));
                ((this._stop_callback = e), this._recorder.stop());
              } else e && e(this._videoPath);
            }),
            (e.prototype.pauseRecord = function() {
              this._recorder && this._recorder.pause();
            }),
            (e.prototype.resumeRecord = function() {
              this._recorder && this._recorder.resume();
            }),
            (e.prototype.recordClip = function(e) {
              var t = this;
              return new Promise(function(i) {
                t._recorder ? ((e.complete = function() {
                  i(0);
                }), t._recorder.recordClip(e)) : i(0);
              });
            }),
            (e.prototype.shareVideo = function(e, t) {
              if ("undefined" != typeof tt) {
                var n = t || [e];
                tt.shareAppMessage({
                  title: e,
                  channel: "video",
                  extra: {
                    videoTopics: n,
                    videoPath: i.gameRecord.videoPath,
                    withVideoId: !0,
                  },
                  success: function() {
                    tt.showModal({
                      title: "分享成功"
                    });
                  },
                  fail: function(e) {
                    (tt.showModal({
                      title: "分享失败"
                    }), console.log("分享失败:", JSON.stringify(e)));
                  },
                });
              }
            }),
            (e.prototype.reset = function() {
              ((this._stop_callback = null),
                (this._record_time = 0),
                (this._recorded_secs = 0),
                (this._videoPath = null),
                (this._recording = !1));
            }), Object.defineProperty(e.prototype, "videoPath", {
              get: function() {
                return this._videoPath;
              },
              enumerable: !1,
              configurable: !0,
            }), e);
        })())()), cc._RF.pop());
      };
