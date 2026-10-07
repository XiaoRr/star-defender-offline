// module: battleResMgr
// deps: {"./bird_baozha":"bird_baozha"}
module.exports = {};
const __mod = function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9693aHtsMNMLIimKO2rSpPN", "battleResMgr");
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
          };
        Object.defineProperty(i, "__esModule", {
          value: !0
        });
        var r = e("./bird_baozha"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bird_baozhan_prefab = null),
                (t.link_prefab = null),
                (t.flash_link_prefab = null), t);
            }
            var i;
            return (a(t, e),
              (i = t),
              (t.prototype.onLoad = function() {
                i._instance = this;
              }),
              (t.inst = function() {
                return i._instance;
              }),
              (t.prototype.start = function() {}),
              (t.getBirdBaozha = function() {
                var e = this._bird_baozha_pool.get();
                return (e || (e = cc.instantiate(this._instance.bird_baozhan_prefab)), e.getComponent(r.default));
              }),
              (t.releaseBirdBaozha = function(e) {
                this._bird_baozha_pool.put(e);
              }),
              (t.getLink = function() {
                var e = this._link_pool.get();
                return (e || (e = cc.instantiate(this._instance.link_prefab)), e);
              }),
              (t.releaseLink = function(e) {
                this._link_pool.put(e);
              }),
              (t._instance = null),
              (t._bird_baozha_pool = new cc.NodePool()),
              (t._link_pool = new cc.NodePool()), o([l(cc.Prefab)], t.prototype, "bird_baozhan_prefab", void 0), o([l(cc.Prefab)], t.prototype, "link_prefab", void 0), o([l(cc.Prefab)], t.prototype, "flash_link_prefab", void 0),
              (i = o([c], t)));
          })(cc.Component);
        ((i.default = d), cc._RF.pop());
      };
