! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(Vp) {
    "use strict";
    try {
        (function() {
            Vp = Vp && Vp.hasOwnProperty("default") ? Vp.default : Vp;
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function t(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var o, e, l = function() {
                return (l = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function d(o, a, s, u) {
                return new(s = s || Promise)(function(t, e) {
                    function n(t) {
                        try {
                            i(u.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function r(t) {
                        try {
                            i(u.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(e) {
                        e.done ? t(e.value) : new s(function(t) {
                            t(e.value)
                        }).then(n, r)
                    }
                    i((u = u.apply(o, a || [])).next())
                })
            }

            function p(n, r) {
                var i, o, a, t, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                                switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                            s.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            s.label = a[1], a = e;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(e);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                e = r.call(n, s)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }

            function a() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }

            function s() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }(e = o = o || {})[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";

            function n(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString();
                    switch (e) {
                        case o.DEBUG:
                        case o.VERBOSE:
                            console.log.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.INFO:
                            console.info.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.WARN:
                            console.warn.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.ERROR:
                            console.error.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        default:
                            throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")")
                    }
                }
            }
            var i = o.INFO,
                u = (Object.defineProperty(c.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(t) {
                        if (!(t in o)) throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(c.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), c.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.DEBUG], t))
                }, c.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.VERBOSE], t))
                }, c.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.INFO], t))
                }, c.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.WARN], t))
                }, c.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.ERROR], t))
                }, c);

            function c(t) {
                this.name = t, this._logLevel = i, this._logHandler = n
            }

            function h() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }
            var f, m = (t(y, f = Error), y);

            function y(t, e) {
                var n = f.call(this, e) || this;
                return n.code = t, n.name = "FirebaseError", Object.setPrototypeOf(n, y.prototype), Error.captureStackTrace && Error.captureStackTrace(n, g.prototype.create), n
            }
            var g = (v.prototype.create = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                for (var r = e[0] || {}, i = this.service + "/" + t, o = this.errors[t], a = o ? function(t, r) {
                        return t.replace(w, function(t, e) {
                            var n = r[e];
                            return null != n ? n.toString() : "<" + e + "?>"
                        })
                    }(o, r) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", u = new m(i, s), c = 0, h = Object.keys(r); c < h.length; c++) {
                    var l = h[c];
                    "_" !== l.slice(-1) && (l in u && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), u[l] = r[l])
                }
                return u
            }, v);

            function v(t, e, n) {
                this.service = t, this.serviceName = e, this.errors = n
            }
            var b, w = /\{\$([^}]+)}/g,
                S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                T = T || {},
                E = S;

            function I(t) {
                return "string" == typeof t
            }

            function C(t) {
                return "number" == typeof t
            }

            function D(t, e) {
                t = t.split("."), e = e || E;
                for (var n = 0; n < t.length; n++)
                    if (null == (e = e[t[n]])) return null;
                return e
            }

            function N() {}

            function A(t) {
                var e = typeof t;
                if ("object" == e) {
                    if (!t) return "null";
                    if (t instanceof Array) return "array";
                    if (t instanceof Object) return e;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                } else if ("function" == e && void 0 === t.call) return "object";
                return e
            }

            function k(t) {
                return "array" == A(t)
            }

            function R(t) {
                var e = A(t);
                return "array" == e || "object" == e && "number" == typeof t.length
            }

            function M(t) {
                var e = typeof t;
                return "object" == e && null != t || "function" == e
            }
            var O = "closure_uid_" + (1e9 * Math.random() >>> 0),
                _ = 0;

            function L(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function P(e, n, t) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(t, r), e.apply(n, t)
                    }
                }
                return function() {
                    return e.apply(n, arguments)
                }
            }

            function x(t, e, n) {
                return (x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? L : P).apply(null, arguments)
            }

            function q(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }
            var F = Date.now || function() {
                return +new Date
            };

            function V(t, o) {
                function e() {}
                e.prototype = o.prototype, t.N = o.prototype, t.prototype = new e, (t.prototype.constructor = t).yb = function(t, e, n) {
                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    return o.prototype[e].apply(t, r)
                }
            }

            function B() {
                this.j = this.j, this.i = this.i
            }
            B.prototype.j = !1, B.prototype.la = function() {
                if (!this.j && (this.j = !0, this.G(), 0)) this[O] || (this[O] = ++_)
            }, B.prototype.G = function() {
                if (this.i)
                    for (; this.i.length;) this.i.shift()()
            };
            var U = Array.prototype.indexOf ? function(t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                } : function(t, e) {
                    if (I(t)) return I(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                Q = Array.prototype.forEach ? function(t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                } : function(t, e, n) {
                    for (var r = t.length, i = I(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                };

            function K(t) {
                return Array.prototype.concat.apply([], arguments)
            }

            function j(t) {
                var e = t.length;
                if (0 < e) {
                    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                    return n
                }
                return []
            }

            function W(t) {
                return /^[\s\xa0]*$/.test(t)
            }
            var G, z = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            };

            function H(t, e) {
                return -1 != t.indexOf(e)
            }

            function Y(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }
            t: {
                var X = E.navigator;
                if (X) {
                    var J = X.userAgent;
                    if (J) {
                        G = J;
                        break t
                    }
                }
                G = ""
            }

            function Z(t, e, n) {
                for (var r in t) e.call(n, t[r], r, t)
            }

            function $(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            }
            var tt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function et(t, e) {
                for (var n, r, i = 1; i < arguments.length; i++) {
                    for (n in r = arguments[i]) t[n] = r[n];
                    for (var o = 0; o < tt.length; o++) n = tt[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
            }

            function nt(t) {
                return nt[" "](t), t
            }
            nt[" "] = N;
            var rt, it, ot = H(G, "Opera"),
                at = H(G, "Trident") || H(G, "MSIE"),
                st = H(G, "Edge"),
                ut = st || at,
                ct = H(G, "Gecko") && !(H(G.toLowerCase(), "webkit") && !H(G, "Edge")) && !(H(G, "Trident") || H(G, "MSIE")) && !H(G, "Edge"),
                ht = H(G.toLowerCase(), "webkit") && !H(G, "Edge");

            function lt() {
                var t = E.document;
                return t ? t.documentMode : void 0
            }
            t: {
                var ft = "",
                    dt = (it = G, ct ? /rv:([^\);]+)(\)|;)/.exec(it) : st ? /Edge\/([\d\.]+)/.exec(it) : at ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(it) : ht ? /WebKit\/(\S+)/.exec(it) : ot ? /(?:Version)[ \/]?(\S+)/.exec(it) : void 0);
                if (dt && (ft = dt ? dt[1] : ""), at) {
                    var pt = lt();
                    if (null != pt && pt > parseFloat(ft)) {
                        rt = String(pt);
                        break t
                    }
                }
                rt = ft
            }
            var mt, yt = {};

            function gt(s) {
                return function(t, e) {
                    var n = yt;
                    return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                }(s, function() {
                    for (var t = 0, e = z(String(rt)).split("."), n = z(String(s)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) {
                        var o = e[i] || "",
                            a = n[i] || "";
                        do {
                            if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                            t = Y(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || Y(0 == o[2].length, 0 == a[2].length) || Y(o[2], a[2]), o = o[3], a = a[3]
                        } while (0 == t)
                    }
                    return 0 <= t
                })
            }
            var vt = E.document;
            mt = vt && at ? lt() || ("CSS1Compat" == vt.compatMode ? parseInt(rt, 10) : 5) : void 0;
            var bt = !at || 9 <= Number(mt),
                wt = at && !gt("9"),
                St = function() {
                    if (!E.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                    try {
                        E.addEventListener("test", N, e), E.removeEventListener("test", N, e)
                    } catch (t) {}
                    return t
                }();

            function Tt(t, e) {
                this.type = t, this.a = this.target = e, this.Ja = !0
            }

            function Et(t, e) {
                if (Tt.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
                    var n = this.type = t.type,
                        r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                    if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                        if (ct) {
                            t: {
                                try {
                                    nt(e.nodeName);
                                    var i = !0;
                                    break t
                                } catch (t) {}
                                i = !1
                            }
                            i || (e = null)
                        }
                    } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                    this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = I(t.pointerType) ? t.pointerType : It[t.pointerType] || "", (this.c = t).defaultPrevented && this.b()
                }
            }
            Tt.prototype.b = function() {
                this.Ja = !1
            }, V(Et, Tt);
            var It = {
                2: "touch",
                3: "pen",
                4: "mouse"
            };
            Et.prototype.b = function() {
                Et.N.b.call(this);
                var t = this.c;
                if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, wt) try {
                    (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                } catch (t) {}
            };
            var Ct = "closure_listenable_" + (1e6 * Math.random() | 0),
                Dt = 0;

            function Nt(t, e, n, r, i) {
                this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.da = i, this.key = ++Dt, this.X = this.Z = !1
            }

            function At(t) {
                t.X = !0, t.listener = null, t.proxy = null, t.src = null, t.da = null
            }

            function kt(t) {
                this.src = t, this.a = {}, this.b = 0
            }

            function Rt(t, e) {
                var n = e.type;
                if (n in t.a) {
                    var r, i = t.a[n],
                        o = U(i, e);
                    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (At(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                }
            }

            function Mt(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!o.X && o.listener == e && o.capture == !!n && o.da == r) return i
                }
                return -1
            }
            kt.prototype.add = function(t, e, n, r, i) {
                var o = t.toString();
                (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                var a = Mt(t, e, r, i);
                return -1 < a ? (e = t[a], n || (e.Z = !1)) : ((e = new Nt(e, this.src, o, !!r, i)).Z = n, t.push(e)), e
            };
            var Ot = "closure_lm_" + (1e6 * Math.random() | 0),
                _t = {};

            function Lt(t, e, n, r, i) {
                if (r && r.once) return function t(e, n, r, i, o) {
                    if (k(n)) {
                        for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
                        return null
                    }
                    r = Qt(r);
                    return e && e[Ct] ? e.Ba(n, r, M(i) ? !!i.capture : !!i, o) : Pt(e, n, r, !0, i, o)
                }(t, e, n, r, i);
                if (k(e)) {
                    for (var o = 0; o < e.length; o++) Lt(t, e[o], n, r, i);
                    return null
                }
                return n = Qt(n), t && t[Ct] ? t.Aa(e, n, M(r) ? !!r.capture : !!r, i) : Pt(t, e, n, !1, r, i)
            }

            function Pt(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var a = M(i) ? !!i.capture : !!i;
                if (a && !bt) return null;
                var s = Bt(t);
                if (s || (t[Ot] = s = new kt(t)), (n = s.add(e, n, r, a, o)).proxy) return n;
                if (r = function() {
                        var e = Vt,
                            n = bt ? function(t) {
                                return e.call(n.src, n.listener, t)
                            } : function(t) {
                                if (!(t = e.call(n.src, n.listener, t))) return t
                            };
                        return n
                    }(), (n.proxy = r).src = t, r.listener = n, t.addEventListener) St || (i = a), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(qt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function xt(t) {
                if (!C(t) && t && !t.X) {
                    var e = t.src;
                    if (e && e[Ct]) Rt(e.c, t);
                    else {
                        var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(qt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Bt(e)) ? (Rt(n, t), 0 == n.b && (n.src = null, e[Ot] = null)) : At(t)
                    }
                }
            }

            function qt(t) {
                return t in _t ? _t[t] : _t[t] = "on" + t
            }

            function Ft(t, e) {
                var n = t.listener,
                    r = t.da || t.src;
                return t.Z && xt(t), n.call(r, e)
            }

            function Vt(t, e) {
                return !!t.X || (bt ? Ft(t, new Et(e, this)) : Ft(t, e = new Et(e || D("window.event"), this)))
            }

            function Bt(t) {
                return (t = t[Ot]) instanceof kt ? t : null
            }
            var Ut = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function Qt(e) {
                return "function" == A(e) ? e : (e[Ut] || (e[Ut] = function(t) {
                    return e.handleEvent(t)
                }), e[Ut])
            }

            function Kt() {
                B.call(this), this.c = new kt(this), (this.J = this).B = null
            }

            function jt(t, e, n, r) {
                if (!(e = t.c.a[String(e)])) return !0;
                e = e.concat();
                for (var i = !0, o = 0; o < e.length; ++o) {
                    var a = e[o];
                    if (a && !a.X && a.capture == n) {
                        var s = a.listener,
                            u = a.da || a.src;
                        a.Z && Rt(t.c, a), i = !1 !== s.call(u, r) && i
                    }
                }
                return i && 0 != r.Ja
            }
            V(Kt, B), Kt.prototype[Ct] = !0, (b = Kt.prototype).addEventListener = function(t, e, n, r) {
                Lt(this, t, e, n, r)
            }, b.removeEventListener = function(t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (k(n))
                        for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
                    else i = M(i) ? !!i.capture : !!i, r = Qt(r), e && e[Ct] ? (e = e.c, (n = String(n).toString()) in e.a && -1 < (r = Mt(a = e.a[n], r, i, o)) && (At(a[r]), Array.prototype.splice.call(a, r, 1), 0 == a.length && (delete e.a[n], e.b--))) : (e = e && Bt(e)) && (n = e.a[n.toString()], e = -1, n && (e = Mt(n, r, i, o)), (r = -1 < e ? n[e] : null) && xt(r))
                }(this, t, e, n, r)
            }, b.dispatchEvent = function(t) {
                var e, n = this.B;
                if (n)
                    for (e = []; n; n = n.B) e.push(n);
                n = this.J;
                var r = t.type || t;
                if (I(t)) t = new Tt(t, n);
                else if (t instanceof Tt) t.target = t.target || n;
                else {
                    var i = t;
                    et(t = new Tt(r, n), i)
                }
                if (i = !0, e)
                    for (var o = e.length - 1; 0 <= o; o--) {
                        var a = t.a = e[o];
                        i = jt(a, r, !0, t) && i
                    }
                if (i = jt(a = t.a = n, r, !0, t) && i, i = jt(a, r, !1, t) && i, e)
                    for (o = 0; o < e.length; o++) i = jt(a = t.a = e[o], r, !1, t) && i;
                return i
            }, b.G = function() {
                if (Kt.N.G.call(this), this.c) {
                    var t, e = this.c;
                    for (t in e.a) {
                        for (var n = e.a[t], r = 0; r < n.length; r++) At(n[r]);
                        delete e.a[t], e.b--
                    }
                }
                this.B = null
            }, b.Aa = function(t, e, n, r) {
                return this.c.add(String(t), e, !1, n, r)
            }, b.Ba = function(t, e, n, r) {
                return this.c.add(String(t), e, !0, n, r)
            };
            var Wt = E.JSON.stringify;

            function Gt(t, e) {
                this.c = t, this.f = e, this.b = 0, this.a = null
            }

            function zt() {
                this.b = this.a = null
            }
            Gt.prototype.get = function() {
                if (0 < this.b) {
                    this.b--;
                    var t = this.a;
                    this.a = t.next, t.next = null
                } else t = this.c();
                return t
            };
            var Ht, Yt = new Gt(function() {
                return new Xt
            }, function(t) {
                t.reset()
            });

            function Xt() {
                this.next = this.b = this.a = null
            }

            function Jt(t) {
                E.setTimeout(function() {
                    throw t
                }, 0)
            }

            function Zt(t, e) {
                Ht || function() {
                    var t = E.Promise.resolve(void 0);
                    Ht = function() {
                        t.then(ee)
                    }
                }(), $t || (Ht(), $t = !0), te.add(t, e)
            }
            zt.prototype.add = function(t, e) {
                var n = Yt.get();
                n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
            }, Xt.prototype.set = function(t, e) {
                this.a = t, this.b = e, this.next = null
            };
            var $t = !(Xt.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }),
                te = new zt;

            function ee() {
                for (var t; r = n = void 0, r = null, (n = te).a && (r = n.a, n.a = n.a.next, n.a || (n.b = null), r.next = null), t = r;) {
                    try {
                        t.a.call(t.b)
                    } catch (t) {
                        Jt(t)
                    }
                    var e = Yt;
                    e.f(t), e.b < 100 && (e.b++, t.next = e.a, e.a = t)
                }
                var n, r;
                $t = !1
            }

            function ne(t, e) {
                Kt.call(this), this.b = t || 1, this.a = e || E, this.f = x(this.gb, this), this.g = F()
            }

            function re(t) {
                t.ba = !1, t.L && (t.a.clearTimeout(t.L), t.L = null)
            }

            function ie(t, e, n) {
                if ("function" == A(t)) n && (t = x(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = x(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : E.setTimeout(t, e || 0)
            }

            function oe(t, e, n) {
                B.call(this), this.f = null != n ? x(t, n) : t, this.c = e, this.b = x(this.ab, this), this.a = []
            }

            function ae(t) {
                t.U = ie(t.b, t.c), t.f.apply(null, t.a)
            }

            function se(t) {
                B.call(this), this.b = t, this.a = {}
            }
            V(ne, Kt), (b = ne.prototype).ba = !1, b.L = null, b.gb = function() {
                if (this.ba) {
                    var t = F() - this.g;
                    0 < t && t < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - t) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.ba && (re(this), this.start()))
                }
            }, b.start = function() {
                this.ba = !0, this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = F())
            }, b.G = function() {
                ne.N.G.call(this), re(this), delete this.a
            }, V(oe, B), (b = oe.prototype).ea = !1, b.U = null, b.Ua = function(t) {
                this.a = arguments, this.U ? this.ea = !0 : ae(this)
            }, b.G = function() {
                oe.N.G.call(this), this.U && (E.clearTimeout(this.U), this.U = null, this.ea = !1, this.a = [])
            }, b.ab = function() {
                this.U = null, this.ea && (this.ea = !1, ae(this))
            }, V(se, B);
            var ue = [];

            function ce(t, e, n, r) {
                k(n) || (n && (ue[0] = n.toString()), n = ue);
                for (var i = 0; i < n.length; i++) {
                    var o = Lt(e, n[i], r || t.handleEvent, !1, t.b || t);
                    if (!o) break;
                    t.a[o.key] = o
                }
            }

            function he(t) {
                Z(t.a, function(t, e) {
                    this.a.hasOwnProperty(e) && xt(t)
                }, t), t.a = {}
            }

            function le() {}
            se.prototype.G = function() {
                se.N.G.call(this), he(this)
            }, se.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented")
            };
            var fe = new Kt;

            function de(t) {
                Tt.call(this, "serverreachability", t)
            }

            function pe(t) {
                fe.dispatchEvent(new de(fe, t))
            }

            function me(t) {
                Tt.call(this, "statevent", t)
            }

            function ye(t) {
                fe.dispatchEvent(new me(fe, t))
            }

            function ge(t) {
                Tt.call(this, "timingevent", t)
            }

            function ve(t, e) {
                if ("function" != A(t)) throw Error("Fn must not be null and must be a function");
                return E.setTimeout(function() {
                    t()
                }, e)
            }
            V(de, Tt), V(me, Tt), V(ge, Tt);
            var be = {
                    NO_ERROR: 0,
                    hb: 1,
                    ob: 2,
                    nb: 3,
                    kb: 4,
                    mb: 5,
                    pb: 6,
                    Ma: 7,
                    TIMEOUT: 8,
                    sb: 9
                },
                we = {
                    jb: "complete",
                    wb: "success",
                    Na: "error",
                    Ma: "abort",
                    ub: "ready",
                    vb: "readystatechange",
                    TIMEOUT: "timeout",
                    qb: "incrementaldata",
                    tb: "progress",
                    lb: "downloadprogress",
                    xb: "uploadprogress"
                };

            function Se() {}

            function Te(t) {
                var e;
                return (e = t.a) || (e = t.a = {}), e
            }

            function Ee() {}
            Se.prototype.a = null;
            var Ie, Ce = {
                OPEN: "a",
                ib: "b",
                Na: "c",
                rb: "d"
            };

            function De() {
                Tt.call(this, "d")
            }

            function Ne() {
                Tt.call(this, "c")
            }

            function Ae() {}

            function ke(t, e, n) {
                this.g = t, this.W = e, this.V = n || 1, this.I = new se(this), this.O = Re, t = ut ? 125 : void 0, this.P = new ne(t), this.h = null, this.b = !1, this.l = this.D = this.f = this.F = this.v = this.R = this.i = null, this.j = [], this.a = null, this.A = 0, this.c = this.w = null, this.o = -1, this.m = !1, this.J = 0, this.B = null, this.s = this.S = this.H = !1
            }
            V(De, Tt), V(Ne, Tt), V(Ae, Se), Ie = new Ae;
            var Re = 45e3,
                Me = {},
                Oe = {};

            function _e(t, e, n) {
                t.F = 1, t.f = on(Je(e)), t.l = n, t.H = !0, Pe(t, null)
            }

            function Le(t, e, n, r) {
                t.F = 1, t.f = on(Je(e)), t.l = null, t.H = n, Pe(t, r)
            }

            function Pe(t, e) {
                t.v = F(), Fe(t), t.D = Je(t.f), rn(t.D, "t", t.V), t.A = 0, t.a = t.g.$(t.g.Y() ? e : null), 0 < t.J && (t.B = new oe(x(t.Ka, t, t.a), t.J)), ce(t.I, t.a, "readystatechange", t.eb), e = t.h ? $(t.h) : {}, t.l ? (t.w || (t.w = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ca(t.D, t.w, t.l, e)) : (t.w = "GET", t.a.ca(t.D, t.w, null, e)), pe(1)
            }

            function xe(t, e, n) {
                for (var r = !0; !t.m && t.A < n.length;) {
                    var i = qe(t, n);
                    if (i == Oe) {
                        4 == e && (t.c = 4, ye(14), r = !1);
                        break
                    }
                    if (i == Me) {
                        t.c = 4, ye(15), r = !1;
                        break
                    }
                    Ke(t, i)
                }
                4 == e && 0 == n.length && (t.c = 1, ye(16), r = !1), t.b = t.b && r, r || (Qe(t), Ue(t))
            }

            function qe(t, e) {
                var n = t.A,
                    r = e.indexOf("\n", n);
                return -1 == r ? Oe : (n = Number(e.substring(n, r)), isNaN(n) ? Me : (r += 1) + n > e.length ? Oe : (e = e.substr(r, n), t.A = r + n, e))
            }

            function Fe(t) {
                t.R = F() + t.O, Ve(t, t.O)
            }

            function Ve(t, e) {
                if (null != t.i) throw Error("WatchDog timer not null");
                t.i = ve(x(t.bb, t), e)
            }

            function Be(t) {
                t.i && (E.clearTimeout(t.i), t.i = null)
            }

            function Ue(t) {
                t.g.Da() || t.m || t.g.na(t)
            }

            function Qe(t) {
                Be(t);
                var e = t.B;
                e && "function" == typeof e.la && e.la(), t.B = null, re(t.P), he(t.I), t.a && (e = t.a, t.a = null, e.abort(), e.la())
            }

            function Ke(t, e) {
                try {
                    t.g.Ga(t, e), pe(4)
                } catch (t) {}
            }

            function je(t, e) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (R(t) || I(t)) Q(t, e, void 0);
                else {
                    if (t.K && "function" == typeof t.K) var n = t.K();
                    else if (t.C && "function" == typeof t.C) n = void 0;
                    else if (R(t) || I(t)) {
                        n = [];
                        for (var r = t.length, i = 0; i < r; i++) n.push(i)
                    } else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    i = (r = function(t) {
                        if (t.C && "function" == typeof t.C) return t.C();
                        if (I(t)) return t.split("");
                        if (R(t)) {
                            for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                            return e
                        }
                        for (r in e = [], n = 0, t) e[n++] = t[r];
                        return e
                    }(t)).length;
                    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                }
            }

            function We(t, e) {
                this.b = {}, this.a = [], this.c = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else if (t)
                    if (t instanceof We)
                        for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                    else
                        for (r in t) this.set(r, t[r])
            }

            function Ge(t, e) {
                He(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && ze(t))
            }

            function ze(t) {
                if (t.c != t.a.length) {
                    for (var e = 0, n = 0; e < t.a.length;) {
                        var r = t.a[e];
                        He(t.b, r) && (t.a[n++] = r), e++
                    }
                    t.a.length = n
                }
                if (t.c != t.a.length) {
                    var i = {};
                    for (n = e = 0; e < t.a.length;) He(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                    t.a.length = n
                }
            }

            function He(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(b = ke.prototype).setTimeout = function(t) {
                this.O = t
            }, b.eb = function(t) {
                t = t.target;
                var e = this.B;
                e && 3 == Jn(t) ? e.Ua() : this.Ka(t)
            }, b.Ka = function(t) {
                try {
                    if (t == this.a) t: {
                        var e = Jn(this.a),
                            n = this.a.ya(),
                            r = this.a.T();
                        if (!(e < 3 || 3 == e && !ut && !this.a.aa())) {
                            this.m || 4 != e || 7 == n || pe(8 == n || r <= 0 ? 3 : 2), Be(this);
                            var i = this.a.T();
                            this.o = i;
                            var o = this.a.aa();
                            if (this.b = 200 == i) {
                                if (this.S && !this.s) {
                                    e: {
                                        if (this.a) {
                                            var a = Zn(this.a, "X-HTTP-Initial-Response");
                                            if (a && !W(a)) {
                                                var s = a;
                                                break e
                                            }
                                        }
                                        s = null
                                    }
                                    if (!s) {
                                        this.b = !1, this.c = 3, ye(12), Qe(this), Ue(this);
                                        break t
                                    }
                                    this.s = !0,
                                    Ke(this, s)
                                }
                                this.H ? (xe(this, e, o), ut && this.b && 3 == e && (ce(this.I, this.P, "tick", this.cb), this.P.start())) : Ke(this, o), 4 == e && Qe(this), this.b && !this.m && (4 == e ? this.g.na(this) : (this.b = !1, Fe(this)))
                            } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.c = 3, ye(12)) : (this.c = 0, ye(13)), Qe(this), Ue(this)
                        }
                    }
                } catch (t) {}
            }, b.cb = function() {
                if (this.a) {
                    var t = Jn(this.a),
                        e = this.a.aa();
                    this.A < e.length && (Be(this), xe(this, t, e), this.b && 4 != t && Fe(this))
                }
            }, b.cancel = function() {
                this.m = !0, Qe(this)
            }, b.bb = function() {
                this.i = null;
                var t = F();
                0 <= t - this.R ? (2 != this.F && (pe(3), ye(17)), Qe(this), this.c = 2, Ue(this)) : Ve(this, this.R - t)
            }, (b = We.prototype).C = function() {
                ze(this);
                for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                return t
            }, b.K = function() {
                return ze(this), this.a.concat()
            }, b.get = function(t, e) {
                return He(this.b, t) ? this.b[t] : e
            }, b.set = function(t, e) {
                He(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
            }, b.forEach = function(t, e) {
                for (var n = this.K(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            };
            var Ye = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function Xe(t, e) {
                var n;
                this.b = this.j = this.f = "", this.i = null, this.g = this.a = "", this.h = !1, t instanceof Xe ? (this.h = void 0 !== e ? e : t.h, Ze(this, t.f), this.j = t.j, $e(this, t.b), tn(this, t.i), this.a = t.a, en(this, bn(t.c)), this.g = t.g) : t && (n = String(t).match(Ye)) ? (this.h = !!e, Ze(this, n[1] || "", !0), this.j = an(n[2] || ""), $e(this, n[3] || "", !0), tn(this, n[4]), this.a = an(n[5] || "", !0), en(this, n[6] || "", !0), this.g = an(n[7] || "")) : (this.h = !!e, this.c = new pn(null, this.h))
            }

            function Je(t) {
                return new Xe(t)
            }

            function Ze(t, e, n) {
                t.f = n ? an(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
            }

            function $e(t, e, n) {
                t.b = n ? an(e, !0) : e
            }

            function tn(t, e) {
                if (e) {
                    if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                    t.i = e
                } else t.i = null
            }

            function en(t, e, n) {
                e instanceof pn ? (t.c = e, function(t, e) {
                    e && !t.f && (mn(t), t.c = null, t.a.forEach(function(t, e) {
                        var n = e.toLowerCase();
                        e != n && (yn(this, e), vn(this, n, t))
                    }, t)), t.f = e
                }(t.c, t.h)) : (n || (e = sn(e, fn)), t.c = new pn(e, t.h))
            }

            function nn(t, e, n) {
                t.c.set(e, n)
            }

            function rn(t, e, n) {
                k(n) || (n = [String(n)]), vn(t.c, e, n)
            }

            function on(t) {
                return nn(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ F()).toString(36)), t
            }

            function an(t, e) {
                return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
            }

            function sn(t, e, n) {
                return I(t) ? (t = encodeURI(t).replace(e, un), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function un(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }
            Xe.prototype.toString = function() {
                var t = [],
                    e = this.f;
                e && t.push(sn(e, cn, !0), ":");
                var n = this.b;
                return !n && "file" != e || (t.push("//"), (e = this.j) && t.push(sn(e, cn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", String(n))), (n = this.a) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(sn(n, "/" == n.charAt(0) ? ln : hn, !0))), (n = this.c.toString()) && t.push("?", n), (n = this.g) && t.push("#", sn(n, dn)), t.join("")
            }, Xe.prototype.resolve = function(t) {
                var e = Je(this),
                    n = !!t.f;
                n ? Ze(e, t.f) : n = !!t.j, n ? e.j = t.j : n = !!t.b, n ? $e(e, t.b) : n = null != t.i;
                var r = t.a;
                if (n) tn(e, t.i);
                else if (n = !!t.a) {
                    if ("/" != r.charAt(0))
                        if (this.b && !this.a) r = "/" + r;
                        else {
                            var i = e.a.lastIndexOf("/"); - 1 != i && (r = e.a.substr(0, i + 1) + r)
                        }
                    if (".." == (i = r) || "." == i) r = "";
                    else if (H(i, "./") || H(i, "/.")) {
                        r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                        for (var o = [], a = 0; a < i.length;) {
                            var s = i[a++];
                            "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0)
                        }
                        r = o.join("/")
                    } else r = i
                }
                return n ? e.a = r : n = "" !== t.c.toString(), n ? en(e, bn(t.c)) : n = !!t.g, n && (e.g = t.g), e
            };
            var cn = /[#\/\?@]/g,
                hn = /[#\?:]/g,
                ln = /[#\?]/g,
                fn = /[#\?@]/g,
                dn = /#/g;

            function pn(t, e) {
                this.b = this.a = null, this.c = t || null, this.f = !!e
            }

            function mn(n) {
                n.a || (n.a = new We, n.b = 0, n.c && function(t, e) {
                    if (t) {
                        t = t.split("&");
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].indexOf("="),
                                i = null;
                            if (0 <= r) {
                                var o = t[n].substring(0, r);
                                i = t[n].substring(r + 1)
                            } else o = t[n];
                            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                        }
                    }
                }(n.c, function(t, e) {
                    n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                }))
            }

            function yn(t, e) {
                mn(t), e = wn(t, e), He(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Ge(t.a, e))
            }

            function gn(t, e) {
                return mn(t), e = wn(t, e), He(t.a.b, e)
            }

            function vn(t, e, n) {
                yn(t, e), 0 < n.length && (t.c = null, t.a.set(wn(t, e), j(n)), t.b += n.length)
            }

            function bn(t) {
                var e = new pn;
                return e.c = t.c, t.a && (e.a = new We(t.a), e.b = t.b), e
            }

            function wn(t, e) {
                return e = String(e), t.f && (e = e.toLowerCase()), e
            }

            function Sn(t) {
                this.a = t, this.b = this.h = null, this.g = !1, this.i = null, this.c = -1, this.l = this.f = null
            }

            function Tn(t) {
                var e = t.a.F.a;
                if (null != e) ye(4), e ? (ye(10), hr(t.a, t, !1)) : (ye(11), hr(t.a, t, !0));
                else {
                    t.b = new ke(t, void 0, void 0), t.b.h = t.h, e = mr(e = t.a, e.Y() ? t.f : null, t.i), ye(4), rn(e, "TYPE", "xmlhttp");
                    var n = t.a.j,
                        r = t.a.I;
                    n && r && nn(e, n, r), Le(t.b, e, !1, t.f)
                }
            }

            function En() {
                this.a = this.b = null
            }

            function In() {
                this.a = new We
            }

            function Cn(t) {
                var e = typeof t;
                return "object" == e && t || "function" == e ? "o" + (t[O] || (t[O] = ++_)) : e.charAt(0) + t
            }

            function Dn(t, e) {
                this.b = t, this.a = e
            }

            function Nn(t) {
                this.g = t || An, t = E.PerformanceNavigationTiming ? 0 < (t = E.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(E.ka && E.ka.Ea && E.ka.Ea() && E.ka.Ea().zb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new In), this.b = null, this.c = []
            }(b = pn.prototype).add = function(t, e) {
                mn(this), this.c = null, t = wn(this, t);
                var n = this.a.get(t);
                return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
            }, b.forEach = function(n, r) {
                mn(this), this.a.forEach(function(t, e) {
                    Q(t, function(t) {
                        n.call(r, t, e, this)
                    }, this)
                }, this)
            }, b.K = function() {
                mn(this);
                for (var t = this.a.C(), e = this.a.K(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, b.C = function(t) {
                mn(this);
                var e = [];
                if (I(t)) gn(this, t) && (e = K(e, this.a.get(wn(this, t))));
                else {
                    t = this.a.C();
                    for (var n = 0; n < t.length; n++) e = K(e, t[n])
                }
                return e
            }, b.set = function(t, e) {
                return mn(this), this.c = null, gn(this, t = wn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
            }, b.get = function(t, e) {
                return t && 0 < (t = this.C(t)).length ? String(t[0]) : e
            }, b.toString = function() {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.C(r);
                    for (var o = 0; o < r.length; o++) {
                        var a = i;
                        "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a)
                    }
                }
                return this.c = t.join("&")
            }, V(function() {}, function() {}), (b = Sn.prototype).M = null, b.$ = function(t) {
                return this.a.$(t)
            }, b.abort = function() {
                this.b && (this.b.cancel(), this.b = null), this.c = -1
            }, b.Da = function() {
                return !1
            }, b.Ga = function(t, e) {
                if (this.c = t.o, 0 == this.M) {
                    if (!this.a.o && (t = t.a)) {
                        var n = Zn(t, "X-Client-Wire-Protocol");
                        this.l = n || null, this.a.j && (t = Zn(t, "X-HTTP-Session-Id")) && (this.a.I = t)
                    }
                    if (e) {
                        try {
                            var r = this.a.ja.a.parse(e)
                        } catch (t) {
                            return (e = this.a).m = this.c, void dr(e, 2)
                        }
                        this.f = r[0]
                    } else(e = this.a).m = this.c, dr(e, 2)
                } else 1 == this.M && (this.g ? ye(6) : "11111" == e ? (ye(5), this.g = !0, (!at || 10 <= Number(mt)) && (this.c = 200, this.b.cancel(), ye(11), hr(this.a, this, !0))) : (ye(7), this.g = !1))
            }, b.na = function() {
                if (this.c = this.b.o, this.b.b) 0 == this.M ? (this.M = 1, Tn(this)) : 1 == this.M && (this.g ? (ye(11), hr(this.a, this, !0)) : (ye(10), hr(this.a, this, !1)));
                else {
                    0 == this.M ? ye(8) : 1 == this.M && ye(9);
                    var t = this.a;
                    t.m = this.c, dr(t, 2)
                }
            }, b.Y = function() {
                return this.a.Y()
            }, b.ma = function() {
                return this.a.ma()
            }, In.prototype.add = function(t) {
                this.a.set(Cn(t), t)
            }, In.prototype.C = function() {
                return this.a.C()
            };
            var An = 10;

            function kn(t, e) {
                !t.a && (H(e, "spdy") || H(e, "quic") || H(e, "h2")) && (t.f = t.g, t.a = new In, t.b && (_n(t, t.b), t.b = null))
            }

            function Rn(t) {
                return !!t.b || !!t.a && t.a.a.c >= t.f
            }

            function Mn(t) {
                return t.b ? 1 : t.a ? t.a.a.c : 0
            }

            function On(t, e) {
                return t = t.b ? t.b == e : !!t.a && (e = Cn(e), He(t.a.a.b, e))
            }

            function _n(t, e) {
                t.a ? t.a.add(e) : t.b = e
            }

            function Ln(t, e) {
                var n;
                t.b && t.b == e ? t.b = null : ((n = t.a) && (n = Cn(e), n = He(t.a.a.b, n)), n && Ge(t.a.a, Cn(e)))
            }

            function Pn(t) {
                if (null != t.b) return t.c.concat(t.b.j);
                if (null == t.a || 0 == t.a.a.c) return j(t.c);
                var e = t.c;
                return Q(t.a.C(), function(t) {
                    e = e.concat(t.j)
                }), e
            }

            function xn() {}

            function qn() {
                this.a = new xn
            }

            function Fn(t, r, e) {
                var i = e || "";
                try {
                    je(t, function(t, e) {
                        var n = t;
                        M(t) && (n = Wt(t)), r.push(i + e + "=" + encodeURIComponent(n))
                    })
                } catch (t) {
                    throw r.push(i + "type=" + encodeURIComponent("_badmap")), t
                }
            }

            function Vn(t, e, n, r, i) {
                try {
                    e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                } catch (t) {}
            }
            Nn.prototype.cancel = function() {
                this.c = Pn(this), this.b ? (this.b.cancel(), this.b = null) : this.a && 0 != this.a.a.c && (Q(this.a.C(), function(t) {
                    t.cancel()
                }), function(t) {
                    t.b = {}, t.a.length = 0, t.c = 0
                }(this.a.a))
            }, xn.prototype.stringify = function(t) {
                return E.JSON.stringify(t, void 0)
            }, xn.prototype.parse = function(t) {
                return E.JSON.parse(t, void 0)
            };
            var Bn = E.JSON.parse;

            function Un(t) {
                Kt.call(this), this.headers = new We, this.H = t || null, this.b = !1, this.s = this.a = null, this.A = "", this.h = 0, this.f = "", this.g = this.w = this.l = this.v = !1, this.o = 0, this.m = null, this.I = Qn, this.D = this.F = !1
            }
            V(Un, Kt);
            var Qn = "",
                Kn = /^https?$/i,
                jn = ["POST", "PUT"];

            function Wn(t) {
                return "content-type" == t.toLowerCase()
            }

            function Gn(t, e) {
                t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, zn(t), Yn(t)
            }

            function zn(t) {
                t.v || (t.v = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
            }

            function Hn(t) {
                if (t.b && void 0 !== T && (!t.s[1] || 4 != Jn(t) || 2 != t.T()))
                    if (t.l && 4 == Jn(t)) ie(t.Fa, 0, t);
                    else if (t.dispatchEvent("readystatechange"), 4 == Jn(t)) {
                    t.b = !1;
                    try {
                        var e, n = t.T();
                        t: switch (n) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var r = !0;
                                break t;
                            default:
                                r = !1
                        }
                        if (!(e = r)) {
                            var i;
                            if (i = 0 === n) {
                                var o = String(t.A).match(Ye)[1] || null;
                                if (!o && E.self && E.self.location) {
                                    var a = E.self.location.protocol;
                                    o = a.substr(0, a.length - 1)
                                }
                                i = !Kn.test(o ? o.toLowerCase() : "")
                            }
                            e = i
                        }
                        e ? (t.dispatchEvent("complete"), t.dispatchEvent("success")) : (t.h = 6, t.f = t.za() + " [" + t.T() + "]", zn(t))
                    } finally {
                        Yn(t)
                    }
                }
            }

            function Yn(t, e) {
                if (t.a) {
                    Xn(t);
                    var n = t.a,
                        r = t.s[0] ? N : null;
                    t.a = null, t.s = null, e || t.dispatchEvent("ready");
                    try {
                        n.onreadystatechange = r
                    } catch (t) {}
                }
            }

            function Xn(t) {
                t.a && t.D && (t.a.ontimeout = null), t.m && (E.clearTimeout(t.m), t.m = null)
            }

            function Jn(t) {
                return t.a ? t.a.readyState : 0
            }

            function Zn(t, e) {
                return t.a ? t.a.getResponseHeader(e) : null
            }

            function $n(t, e, n) {
                t: {
                    for (r in n) {
                        var r = !1;
                        break t
                    }
                    r = !0
                }
                if (r) return t;
                if (n = function(t) {
                        var n = "";
                        return Z(t, function(t, e) {
                            n += e, n += ":", n += t, n += "\r\n"
                        }), n
                    }(n), I(t)) {
                    if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") {
                        if ((n = t.indexOf("#")) < 0 && (n = t.length), (r = t.indexOf("?")) < 0 || n < r) {
                            r = n;
                            var i = ""
                        } else i = t.substring(r + 1, n);
                        n = (t = [t.substr(0, r), i, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                    }
                    return t
                }
                return nn(t, e, n),
                t
            }

            function tr(t) {
                this.f = [], this.F = new En, this.ga = this.pa = this.B = this.ha = this.a = this.I = this.j = this.V = this.g = this.J = this.i = null, this.Ra = this.P = 0, this.Pa = !!D("internalChannelParams.failFast", t), this.ia = this.w = this.s = this.l = this.h = this.c = null, this.oa = !0, this.m = this.ra = this.O = -1, this.S = this.v = this.A = 0, this.Oa = D("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.Sa = D("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.Qa = D("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.qa = D("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.La = t && t.Ab || void 0, this.D = void 0, this.R = t && t.supportsCrossDomainXhr || !1, this.H = "", this.b = new Nn(t && t.concurrentRequestLimit), this.ja = new qn, this.o = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.W = t && t.fastHandshake || !1) && !this.o && (this.o = !0), t && t.forceLongPolling && (this.oa = !1), this.fa = void 0
            }

            function er(t) {
                if (nr(t), 3 == t.u) {
                    var e = t.P++,
                        n = Je(t.B);
                    nn(n, "SID", t.H), nn(n, "RID", e), nn(n, "TYPE", "terminate"), ar(t, n), (e = new ke(t, e, void 0)).F = 2, e.f = on(Je(n)), n = !1, E.navigator && E.navigator.sendBeacon && (n = E.navigator.sendBeacon(e.f.toString(), "")), !n && E.Image && ((new Image).src = e.f, n = !0), n || (e.a = e.g.$(null), e.a.ca(e.f)), e.v = F(), Fe(e)
                }
                pr(t)
            }

            function nr(t) {
                t.w && (t.w.abort(), t.w = null), t.a && (t.a.cancel(), t.a = null), t.l && (E.clearTimeout(t.l), t.l = null), lr(t), t.b.cancel(), t.h && (C(t.h) && E.clearTimeout(t.h), t.h = null)
            }

            function rr(t, e) {
                t.f.push(new Dn(t.Ra++, e)), 3 == t.u && ir(t)
            }

            function ir(t) {
                Rn(t.b) || t.h || (t.h = !0, Zt(t.Ia, t), t.A = 0)
            }

            function or(t, e) {
                var n;
                n = e ? e.W : t.P++;
                var r = Je(t.B);
                nn(r, "SID", t.H), nn(r, "RID", n), nn(r, "AID", t.O), ar(t, r), t.g && t.i && $n(r, t.g, t.i), n = new ke(t, n, t.A + 1), null === t.g && (n.h = t.i), e && (t.f = e.j.concat(t.f)), e = sr(t, n, 1e3), n.setTimeout(Math.round(.5 * t.qa) + Math.round(.5 * t.qa * Math.random())), _n(t.b, n), _e(n, r, e)
            }

            function ar(t, n) {
                t.c && je({}, function(t, e) {
                    nn(n, e, t)
                })
            }

            function sr(t, e, n) {
                n = Math.min(t.f.length, n);
                var r = t.c ? x(t.c.Ta, t.c, t) : null;
                t: for (var i = t.f, o = -1;;) {
                    var a = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, a.push("ofs=" + o)) : o = 0 : a.push("ofs=" + o);
                    for (var s = !0, u = 0; u < n; u++) {
                        var c = i[u].b,
                            h = i[u].a;
                        if ((c -= o) < 0) o = Math.max(0, i[u].b - 100), s = !1;
                        else try {
                            Fn(h, a, "req" + c + "_")
                        } catch (t) {
                            r && r(h)
                        }
                    }
                    if (s) {
                        r = a.join("&");
                        break t
                    }
                }
                return t = t.f.splice(0, n), e.j = t, r
            }

            function ur(t) {
                t.a || t.l || (t.S = 1, Zt(t.Ha, t), t.v = 0)
            }

            function cr(t) {
                return !(t.a || t.l || 3 <= t.v) && (t.S++, t.l = ve(x(t.Ha, t), fr(t, t.v)), t.v++, !0)
            }

            function hr(t, e, n) {
                var r = e.l;
                r && kn(t.b, r), t.ia = t.oa && n, t.m = e.c, t.B = mr(t, null, t.ha), ir(t)
            }

            function lr(t) {
                null != t.s && (E.clearTimeout(t.s), t.s = null)
            }

            function fr(t, e) {
                var n = t.Oa + Math.floor(Math.random() * t.Sa);
                return t.ma() || (n *= 2), n * e
            }

            function dr(t, e) {
                if (2 == e) {
                    var n = null;
                    t.c && (n = null);
                    var r = x(t.fb, t);
                    n || (n = new Xe("//www.google.com/images/cleardot.gif"), E.location && "http" == E.location.protocol || Ze(n, "https"), on(n)),
                        function(t, e) {
                            var n = new le;
                            if (E.Image) {
                                var r = new Image;
                                r.onload = q(Vn, n, r, "TestLoadImage: loaded", !0, e), r.onerror = q(Vn, n, r, "TestLoadImage: error", !1, e), r.onabort = q(Vn, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = q(Vn, n, r, "TestLoadImage: timeout", !1, e), E.setTimeout(function() {
                                    r.ontimeout && r.ontimeout()
                                }, 1e4), r.src = t
                            } else e(!1)
                        }(n.toString(), r)
                } else ye(2);
                t.u = 0, t.c && t.c.ta(e), pr(t), nr(t)
            }

            function pr(t) {
                t.u = 0, t.m = -1, t.c && (0 == Pn(t.b).length && 0 == t.f.length || (t.b.c.length = 0, j(t.f), t.f.length = 0), t.c.sa())
            }

            function mr(t, e, n) {
                var r = function(t) {
                    return t instanceof Xe ? Je(t) : new Xe(t, void 0)
                }(n);
                if ("" != r.b) e && $e(r, e + "." + r.b), tn(r, r.i);
                else {
                    var i, o = E.location;
                    i = e ? e + "." + o.hostname : o.hostname, r = function(t, e, n, r) {
                        var i = new Xe(null, void 0);
                        return t && Ze(i, t), e && $e(i, e), n && tn(i, n), r && (i.a = r), i
                    }(o.protocol, i, +o.port, n)
                }
                return t.V && Z(t.V, function(t, e) {
                    nn(r, e, t)
                }), e = t.j, n = t.I, e && n && nn(r, e, n), nn(r, "VER", t.wa), ar(t, r), r
            }

            function yr() {}

            function gr() {
                if (at && !(10 <= Number(mt))) throw Error("Environmental error: no available transport.")
            }

            function vr(t, e) {
                Kt.call(this), this.a = new tr(e), this.g = t, this.m = e && e.testUrl ? e.testUrl : function(t) {
                    for (var e = t, n = 1; n < arguments.length; n++) {
                        var r, i = arguments[n];
                        if (0 == i.lastIndexOf("/", 0)) e = i;
                        else(r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e += r ? i : "/" + i
                    }
                    return e
                }(this.g, "test"), this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                    "X-Client-Protocol": "webchannel"
                }), this.a.i = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                    "X-WebChannel-Content-Type": e.messageContentType
                }), e && e.xa && (t ? t["X-WebChannel-Client-Profile"] = e.xa : t = {
                    "X-WebChannel-Client-Profile": e.xa
                }), this.a.J = t, (t = e && e.httpHeadersOverwriteParam) && !W(t) && (this.a.g = t), this.l = e && e.supportsCrossDomainXhr || !1, this.h = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !W(e) && (this.a.j = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new Sr(this)
            }

            function br(t) {
                De.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) {
                            t = n;
                            break t
                        }
                        t = void 0
                    }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                }
                else this.data = t
            }

            function wr() {
                Ne.call(this), this.status = 1
            }

            function Sr(t) {
                this.a = t
            }(b = Un.prototype).ca = function(t, e, n, r) {
                if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.A + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.A = t, this.f = "", this.h = 0, this.v = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? Te(this.H) : Te(Ie), this.a.onreadystatechange = x(this.Fa, this);
                try {
                    this.w = !0, this.a.open(e, String(t), !0), this.w = !1
                } catch (t) {
                    return void Gn(this, t)
                }
                t = n || "";
                var i = new We(this.headers);
                r && je(r, function(t, e) {
                    i.set(e, t)
                }), r = function(t) {
                    t: {
                        for (var e = Wn, n = t.length, r = I(t) ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) {
                                e = i;
                                break t
                            }
                        e = -1
                    }
                    return e < 0 ? null : I(t) ? t.charAt(e) : t[e]
                }(i.K()), n = E.FormData && t instanceof E.FormData, 0 <= U(jn, e) && !r && !n && i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach(function(t, e) {
                    this.a.setRequestHeader(e, t)
                }, this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
                try {
                    Xn(this), 0 < this.o && ((this.D = function(t) {
                        return at && gt(9) && C(t.timeout) && void 0 !== t.ontimeout
                    }(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = x(this.Ca, this)) : this.m = ie(this.Ca, this.o, this)), this.l = !0, this.a.send(t), this.l = !1
                } catch (t) {
                    Gn(this, t)
                }
            }, b.Ca = function() {
                void 0 !== T && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8))
            }, b.abort = function(t) {
                this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Yn(this))
            }, b.G = function() {
                this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Yn(this, !0)), Un.N.G.call(this)
            }, b.Fa = function() {
                this.j || (this.w || this.l || this.g ? Hn(this) : this.$a())
            }, b.$a = function() {
                Hn(this)
            }, b.T = function() {
                try {
                    return 2 < Jn(this) ? this.a.status : -1
                } catch (t) {
                    return -1
                }
            }, b.za = function() {
                try {
                    return 2 < Jn(this) ? this.a.statusText : ""
                } catch (t) {
                    return ""
                }
            }, b.aa = function() {
                try {
                    return this.a ? this.a.responseText : ""
                } catch (t) {
                    return ""
                }
            }, b.Va = function(t) {
                if (this.a) {
                    var e = this.a.responseText;
                    return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Bn(e)
                }
            }, b.ya = function() {
                return this.h
            }, b.Ya = function() {
                return I(this.f) ? this.f : String(this.f)
            }, (b = tr.prototype).wa = 8, b.u = 1, b.Da = function() {
                return 0 == this.u
            }, b.Ia = function(t) {
                if (this.h)
                    if (this.h = null, 1 == this.u) {
                        if (!t) {
                            this.P = Math.floor(1e5 * Math.random()), t = this.P++;
                            var e, n = new ke(this, t, void 0),
                                r = this.i;
                            if (this.J && (r ? et(r = $(r), this.J) : r = this.J), null === this.g && (n.h = r), this.W) t: {
                                for (var i = e = 0; i < this.f.length; i++) {
                                    var o = this.f[i];
                                    if (void 0 === (o = "__data__" in o.a && I(o = o.a.__data__) ? o.length : void 0)) break;
                                    if (4096 < (e += o)) {
                                        e = i;
                                        break t
                                    }
                                    if (4096 === e || i === this.f.length - 1) {
                                        e = i + 1;
                                        break t
                                    }
                                }
                                e = 1e3
                            }
                            else e = 1e3;
                            e = sr(this, n, e), nn(i = Je(this.B), "RID", t), nn(i, "CVER", 22), this.o && this.j && nn(i, "X-HTTP-Session-Id", this.j), ar(this, i), this.g && r && $n(i, this.g, r), _n(this.b, n), this.W ? (nn(i, "$req", e), nn(i, "SID", "null"), n.S = !0, _e(n, i, null)) : _e(n, i, e), this.u = 2
                        }
                    } else 3 == this.u && (t ? or(this, t) : 0 == this.f.length || Rn(this.b) || or(this))
            }, b.Ha = function() {
                this.l = null, this.a = new ke(this, "rpc", this.S), null === this.g && (this.a.h = this.i), this.a.J = 0;
                var t = Je(this.pa);
                nn(t, "RID", "rpc"), nn(t, "SID", this.H), nn(t, "CI", this.ia ? "0" : "1"), nn(t, "AID", this.O), ar(this, t), nn(t, "TYPE", "xmlhttp"), this.g && this.i && $n(t, this.g, this.i), this.D && this.a.setTimeout(this.D), Le(this.a, t, !0, this.ga)
            }, b.Ga = function(t, e) {
                if (0 != this.u && (this.a == t || On(this.b, t)))
                    if (this.m = t.o, !t.s && On(this.b, t) && 3 == this.u) {
                        try {
                            var n = this.ja.a.parse(e)
                        } catch (t) {
                            n = null
                        }
                        if (k(n) && 3 == n.length) {
                            if (0 == (e = n)[0]) {
                                t: if (!this.l) {
                                    if (this.a) {
                                        if (!(this.a.v + 3e3 < t.v)) break t;
                                        lr(this), this.a.cancel(), this.a = null
                                    }
                                    cr(this), ye(18)
                                }
                            }
                            else this.ra = e[1], 0 < this.ra - this.O && e[2] < 37500 && this.ia && 0 == this.v && !this.s && (this.s = ve(x(this.Za, this), 6e3));
                            if (Mn(this.b) <= 1 && this.fa) {
                                try {
                                    this.fa()
                                } catch (t) {}
                                this.fa = void 0
                            }
                        } else dr(this, 11)
                    } else if (!t.s && this.a != t || lr(this), !W(e))
                    for (e = n = this.ja.a.parse(e), n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (this.O = r[0], r = r[1], 2 == this.u)
                            if ("c" == r[0]) {
                                this.H = r[1], this.ga = r[2];
                                var i = r[3];
                                null != i && (this.wa = i), null != (r = r[5]) && C(r) && 0 < r && (this.D = 1.5 * r), this.o && (r = t.a) && ((i = Zn(r, "X-Client-Wire-Protocol")) && kn(this.b, i), this.j && (r = Zn(r, "X-HTTP-Session-Id"))) && (this.I = r, nn(this.B, this.j, r)), this.u = 3, this.c && this.c.va(), r = t, this.pa = mr(this, this.Y() ? this.ga : null, this.ha), r.s ? (Ln(this.b, r), (i = this.D) && r.setTimeout(i), r.i && (Be(r), Fe(r)), this.a = r) : ur(this), 0 < this.f.length && ir(this)
                            } else "stop" != r[0] && "close" != r[0] || dr(this, 7);
                        else 3 == this.u && ("stop" == r[0] || "close" == r[0] ? "stop" == r[0] ? dr(this, 7) : er(this) : "noop" != r[0] && this.c && this.c.ua(r), this.v = 0)
                    }
            }, b.Za = function() {
                null != this.s && (this.s = null, this.a.cancel(), this.a = null, cr(this), ye(19))
            }, b.na = function(t) {
                var e = null;
                if (this.a == t) {
                    lr(this), this.a = null;
                    var n = 2
                } else {
                    if (!On(this.b, t)) return;
                    e = t.j, Ln(this.b, t), n = 1
                }
                if (this.m = t.o, 0 != this.u)
                    if (t.b) 1 == n ? (e = F() - t.v, fe.dispatchEvent(new ge(fe, t.l ? t.l.length : 0, e, this.A)), ir(this)) : ur(this);
                    else {
                        var r = t.c;
                        if (3 == r || 0 == r && 0 < this.m || !(1 == n && function(t, e) {
                                return !(Mn(t.b) >= t.b.f - (t.h ? 1 : 0)) && (t.h ? (t.f = e.j.concat(t.f), !0) : !(1 == t.u || 2 == t.u || t.A >= (t.Pa ? 0 : t.Qa)) && (t.h = ve(x(t.Ia, t, e), fr(t, t.A)), t.A++, !0))
                            }(this, t) || 2 == n && cr(this))) switch (e && 0 < e.length && (t = this.b, t.c = t.c.concat(e)), r) {
                            case 1:
                                dr(this, 5);
                                break;
                            case 4:
                                dr(this, 10);
                                break;
                            case 3:
                                dr(this, 6);
                                break;
                            default:
                                dr(this, 2)
                        }
                    }
            }, b.fb = function(t) {
                ye(t ? 2 : 1)
            }, b.$ = function(t) {
                if (t && !this.R) throw Error("Can't create secondary domain capable XhrIo object.");
                return (t = new Un(this.La)).F = this.R, t
            }, b.ma = function() {
                return !!this.c && !0
            }, b.Y = function() {
                return this.R
            }, (b = yr.prototype).va = function() {}, b.ua = function() {}, b.ta = function() {}, b.sa = function() {}, b.Ta = function() {}, gr.prototype.a = function(t, e) {
                return new vr(t, e)
            }, V(vr, Kt), (b = vr.prototype).addEventListener = function(t, e, n, r) {
                vr.N.addEventListener.call(this, t, e, n, r)
            }, b.removeEventListener = function(t, e, n, r) {
                vr.N.removeEventListener.call(this, t, e, n, r)
            }, b.Wa = function() {
                this.a.c = this.f, this.l && (this.a.R = !0);
                var t = this.a,
                    e = this.m,
                    n = this.g,
                    r = this.b || void 0;
                ye(0), t.ha = n, t.V = r || {}, t.o && (t.F.b = [], t.F.a = !1), t.w = new Sn(t), null === t.g && (t.w.h = t.i), n = e, t.g && t.i && (n = $n(e, t.g, t.i)), (t = t.w).i = n, e = mr(t.a, null, t.i), ye(3), null != (n = t.a.F.b) ? (t.f = n[0], t.M = 1, Tn(t)) : (rn(e, "MODE", "init"), !t.a.o && t.a.j && rn(e, "X-HTTP-Session-Id", t.a.j), t.b = new ke(t, void 0, void 0), t.b.h = t.h, Le(t.b, e, !1, null), t.M = 0)
            }, b.close = function() {
                er(this.a)
            }, b.Xa = function(t) {
                if (I(t)) {
                    var e = {};
                    e.__data__ = t, rr(this.a, e)
                } else this.h ? ((e = {}).__data__ = Wt(t), rr(this.a, e)) : rr(this.a, t)
            }, b.G = function() {
                this.a.c = null, delete this.f, er(this.a), delete this.a, vr.N.G.call(this)
            }, V(br, De), V(wr, Ne), V(Sr, yr), Sr.prototype.va = function() {
                this.a.dispatchEvent("a")
            }, Sr.prototype.ua = function(t) {
                this.a.dispatchEvent(new br(t))
            }, Sr.prototype.ta = function(t) {
                this.a.dispatchEvent(new wr(t))
            }, Sr.prototype.sa = function() {
                this.a.dispatchEvent("b")
            };
            var Tr = q(function(t, e) {
                function n() {}
                n.prototype = t.prototype;
                var r = new n;
                return t.apply(r, Array.prototype.slice.call(arguments, 1)), r
            }, gr);
            gr.prototype.createWebChannel = gr.prototype.a, vr.prototype.send = vr.prototype.Xa, vr.prototype.open = vr.prototype.Wa, vr.prototype.close = vr.prototype.close, be.NO_ERROR = 0, be.TIMEOUT = 8, be.HTTP_ERROR = 6, we.COMPLETE = "complete", (Ee.EventType = Ce).OPEN = "a", Ce.CLOSE = "b", Ce.ERROR = "c", Ce.MESSAGE = "d", Kt.prototype.listen = Kt.prototype.Aa, Un.prototype.listenOnce = Un.prototype.Ba, Un.prototype.getLastError = Un.prototype.Ya, Un.prototype.getLastErrorCode = Un.prototype.ya, Un.prototype.getStatus = Un.prototype.T, Un.prototype.getStatusText = Un.prototype.za, Un.prototype.getResponseJson = Un.prototype.Va, Un.prototype.getResponseText = Un.prototype.aa, Un.prototype.send = Un.prototype.ca;
            var Er, Ir, Cr = {
                    createWebChannelTransport: Tr,
                    ErrorCode: be,
                    EventType: we,
                    WebChannel: Ee,
                    XhrIo: Un
                },
                Dr = Cr.createWebChannelTransport,
                Nr = Cr.ErrorCode,
                Ar = Cr.EventType,
                kr = Cr.WebChannel,
                Rr = Cr.XhrIo,
                Mr = Vp.SDK_VERSION,
                Or = new u("@firebase/firestore");

            function _r() {
                return Or.logLevel === o.DEBUG ? Er.DEBUG : Or.logLevel === o.SILENT ? Er.SILENT : Er.ERROR
            }

            function Lr(t) {
                switch (t) {
                    case Er.DEBUG:
                        Or.logLevel = o.DEBUG;
                        break;
                    case Er.ERROR:
                        Or.logLevel = o.ERROR;
                        break;
                    case Er.SILENT:
                        Or.logLevel = o.SILENT;
                        break;
                    default:
                        Or.error("Firestore (" + Mr + "): Invalid value passed to `setLogLevel`")
                }
            }

            function Pr(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (Or.logLevel <= o.DEBUG) {
                    var i = n.map(qr);
                    Or.debug.apply(Or, a(["Firestore (" + Mr + ") [" + t + "]: " + e], i))
                }
            }

            function xr(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Or.logLevel <= o.ERROR) {
                    var r = e.map(qr);
                    Or.error.apply(Or, a(["Firestore (" + Mr + "): " + t], r))
                }
            }

            function qr(e) {
                if ("string" == typeof e) return e;
                var t = Br.getPlatform();
                try {
                    return t.formatJSON(e)
                } catch (t) {
                    return e
                }
            }

            function Fr(t) {
                var e = "FIRESTORE (" + Mr + ") INTERNAL ASSERTION FAILED: " + t;
                throw xr(e), new Error(e)
            }

            function Vr(t, e) {
                t || Fr(e)
            }(Ir = Er = Er || {})[Ir.DEBUG = 0] = "DEBUG", Ir[Ir.ERROR = 1] = "ERROR", Ir[Ir.SILENT = 2] = "SILENT";
            var Br = (Ur.setPlatform = function(t) {
                Ur.platform && Fr("Platform already defined"), Ur.platform = t
            }, Ur.getPlatform = function() {
                return Ur.platform || Fr("Platform not set"), Ur.platform
            }, Ur);

            function Ur() {}

            function Qr() {
                return Br.getPlatform().emptyByteString
            }
            var Kr, jr = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                Wr = (t(Gr, Kr = Error), Gr);

            function Gr(t, e) {
                var n = Kr.call(this, e) || this;
                return n.code = t, n.message = e, n.name = "FirebaseError", n.toString = function() {
                    return n.name + ": [code=" + n.code + "]: " + n.message
                }, n
            }

            function zr(t, e) {
                function n() {
                    var t = "This constructor is private.";
                    throw e && (t += " ", t += e), new Wr(jr.INVALID_ARGUMENT, t)
                }
                for (var r in n.prototype = t.prototype, t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }

            function Hr(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function Yr(t, e) {
                return void 0 !== t ? t : e
            }

            function Xr(t, e) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Number(n);
                        isNaN(r) || e(r, t[n])
                    }
            }

            function Jr(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function Zr(t) {
                for (var e in Vr(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function $r(t, e) {
                if (0 !== e.length) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + yi(e.length, "argument") + ".")
            }

            function ti(t, e, n) {
                if (e.length !== n) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires " + yi(n, "argument") + ", but was called with " + yi(e.length, "argument") + ".")
            }

            function ei(t, e, n) {
                if (e.length < n) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires at least " + yi(n, "argument") + ", but was called with " + yi(e.length, "argument") + ".")
            }

            function ni(t, e, n, r) {
                if (e.length < n || e.length > r) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + yi(e.length, "argument") + ".")
            }

            function ri(t, e, n, r) {
                ci(t, e, mi(n) + " argument", r)
            }

            function ii(t, e, n, r) {
                void 0 !== r && ri(t, e, n, r)
            }

            function oi(t, e, n, r) {
                ci(t, e, n + " option", r)
            }

            function ai(t, e, n, r) {
                void 0 !== r && oi(t, e, n, r)
            }

            function si(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    if (!(r instanceof Array)) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + li(r));
                    for (var o = 0; o < r.length; ++o)
                        if (!i(r[o])) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + li(r[o]))
                }(t, e, n, r, i)
            }

            function ui(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    for (var o = [], a = 0, s = i; a < s.length; a++) {
                        var u = s[a];
                        if (u === r) return;
                        o.push(li(u))
                    }
                    var c = li(r);
                    throw new Wr(jr.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
                }(t, 0, n, r, i)
            }

            function ci(t, e, n, r) {
                if (!("object" === e ? hi(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
                    var i = li(r);
                    throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
                }
            }

            function hi(t) {
                return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
            }

            function li(t) {
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("string" == typeof t) return 20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
                if ("number" == typeof t || "boolean" == typeof t) return "" + t;
                if ("object" != typeof t) return "function" == typeof t ? "a function" : Fr("Unknown wrong type: " + typeof t);
                if (t instanceof Array) return "an array";
                var e = function(t) {
                    if (t.constructor) {
                        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                        if (e && 1 < e.length) return e[1]
                    }
                    return null
                }(t);
                return e ? "a custom " + e + " object" : "an object"
            }

            function fi(t, e, n) {
                if (void 0 === n) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + mi(e) + " argument, but it was undefined.")
            }

            function di(n, t, r) {
                Jr(t, function(t, e) {
                    if (r.indexOf(t) < 0) throw new Wr(jr.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", "))
                })
            }

            function pi(t, e, n, r) {
                var i = li(r);
                return new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires its " + mi(n) + " argument to be a " + e + ", but it was: " + i)
            }

            function mi(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function yi(t, e) {
                return t + " " + e + (1 === t ? "" : "s")
            }
            var gi = (vi.newId = function() {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                return Vr(20 === e.length, "Invalid auto ID: " + e), e
            }, vi);

            function vi() {}

            function bi(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }

            function wi(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (!t[n].isEqual(e[n])) return !1;
                return !0
            }

            function Si(t) {
                return t + "\0"
            }

            function Ti() {
                if ("undefined" == typeof Uint8Array) throw new Wr(jr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function Ei() {
                if (!Br.getPlatform().base64Available) throw new Wr(jr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Ii = (Ci.fromBase64String = function(t) {
                ti("Blob.fromBase64String", arguments, 1), ri("Blob.fromBase64String", "string", 1, t), Ei();
                try {
                    return new Ci(Br.getPlatform().atob(t))
                } catch (t) {
                    throw new Wr(jr.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
                }
            }, Ci.fromUint8Array = function(t) {
                if (ti("Blob.fromUint8Array", arguments, 1), Ti(), !(t instanceof Uint8Array)) throw pi("Blob.fromUint8Array", "Uint8Array", 1, t);
                return new Ci(Array.prototype.map.call(t, function(t) {
                    return String.fromCharCode(t)
                }).join(""))
            }, Ci.prototype.toBase64 = function() {
                return ti("Blob.toBase64", arguments, 0), Ei(), Br.getPlatform().btoa(this._binaryString)
            }, Ci.prototype.toUint8Array = function() {
                ti("Blob.toUint8Array", arguments, 0), Ti();
                for (var t = new Uint8Array(this._binaryString.length), e = 0; e < this._binaryString.length; e++) t[e] = this._binaryString.charCodeAt(e);
                return t
            }, Ci.prototype.toString = function() {
                return "Blob(base64: " + this.toBase64() + ")"
            }, Ci.prototype.isEqual = function(t) {
                return this._binaryString === t._binaryString
            }, Ci.prototype._compareTo = function(t) {
                return bi(this._binaryString, t._binaryString)
            }, Ci);

            function Ci(t) {
                Ei(), this._binaryString = t
            }
            var Di = zr(Ii, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                Ni = function(t, e, n, r, i) {
                    this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i
                },
                Ai = "(default)",
                ki = (Object.defineProperty(Ri.prototype, "isDefaultDatabase", {
                    get: function() {
                        return this.database === Ai
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ri.prototype.isEqual = function(t) {
                    return t instanceof Ri && t.projectId === this.projectId && t.database === this.database
                }, Ri.prototype.compareTo = function(t) {
                    return bi(this.projectId, t.projectId) || bi(this.database, t.database)
                }, Ri);

            function Ri(t, e) {
                this.projectId = t, this.database = e || Ai
            }
            var Mi = (Oi.prototype.setPreviousValue = function(t) {
                return this.previousValue = Math.max(t, this.previousValue), this.previousValue
            }, Oi.prototype.next = function() {
                var t = ++this.previousValue;
                return this.writeNewSequenceNumber && this.writeNewSequenceNumber(t), t
            }, Oi.INVALID = -1, Oi);

            function Oi(t, e) {
                var n = this;
                this.previousValue = t, e && (e.sequenceNumberHandler = function(t) {
                    return n.setPreviousValue(t)
                }, this.writeNewSequenceNumber = function(t) {
                    return e.writeSequenceNumber(t)
                })
            }
            var _i = "__name__",
                Li = (Object.defineProperty(Pi.prototype, "length", {
                    get: function() {
                        return this.len
                    },
                    enumerable: !0,
                    configurable: !0
                }), Pi.prototype.isEqual = function(t) {
                    return 0 === Pi.comparator(this, t)
                }, Pi.prototype.child = function(t) {
                    var e = this.segments.slice(this.offset, this.limit());
                    return t instanceof Pi ? t.forEach(function(t) {
                        e.push(t)
                    }) : e.push(t), this.construct(e)
                }, Pi.prototype.limit = function() {
                    return this.offset + this.length
                }, Pi.prototype.popFirst = function(t) {
                    return t = void 0 === t ? 1 : t, Vr(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t)
                }, Pi.prototype.popLast = function() {
                    return Vr(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1)
                }, Pi.prototype.firstSegment = function() {
                    return Vr(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset]
                }, Pi.prototype.lastSegment = function() {
                    return this.get(this.length - 1)
                }, Pi.prototype.get = function(t) {
                    return Vr(t < this.length, "Index out of range"), this.segments[this.offset + t]
                }, Pi.prototype.isEmpty = function() {
                    return 0 === this.length
                }, Pi.prototype.isPrefixOf = function(t) {
                    if (t.length < this.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, Pi.prototype.isImmediateParentOf = function(t) {
                    if (this.length + 1 !== t.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, Pi.prototype.forEach = function(t) {
                    for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                }, Pi.prototype.toArray = function() {
                    return this.segments.slice(this.offset, this.limit())
                }, Pi.comparator = function(t, e) {
                    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                        var i = t.get(r),
                            o = e.get(r);
                        if (i < o) return -1;
                        if (o < i) return 1
                    }
                    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                }, Pi);

            function Pi(t, e, n) {
                void 0 === e ? e = 0 : e > t.length && Fr("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && Fr("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n
            }
            var xi, qi = (t(Fi, xi = Li), Fi.prototype.construct = function(t, e, n) {
                return new Fi(t, e, n)
            }, Fi.prototype.canonicalString = function() {
                return this.toArray().join("/")
            }, Fi.prototype.toString = function() {
                return this.canonicalString()
            }, Fi.fromString = function(t) {
                if (0 <= t.indexOf("//")) throw new Wr(jr.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                return new Fi(t.split("/").filter(function(t) {
                    return 0 < t.length
                }))
            }, Fi.EMPTY_PATH = new Fi([]), Fi);

            function Fi() {
                return null !== xi && xi.apply(this, arguments) || this
            }
            var Vi, Bi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                Ui = (t(Qi, Vi = Li), Qi.prototype.construct = function(t, e, n) {
                    return new Qi(t, e, n)
                }, Qi.isValidIdentifier = function(t) {
                    return Bi.test(t)
                }, Qi.prototype.canonicalString = function() {
                    return this.toArray().map(function(t) {
                        return t = t.replace("\\", "\\\\").replace("`", "\\`"), Qi.isValidIdentifier(t) || (t = "`" + t + "`"), t
                    }).join(".")
                }, Qi.prototype.toString = function() {
                    return this.canonicalString()
                }, Qi.prototype.isKeyField = function() {
                    return 1 === this.length && this.get(0) === _i
                }, Qi.keyField = function() {
                    return new Qi([_i])
                }, Qi.fromServerFormat = function(t) {
                    for (var e = [], n = "", r = 0, i = function() {
                            if (0 === n.length) throw new Wr(jr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                            e.push(n), n = ""
                        }, o = !1; r < t.length;) {
                        var a = t[r];
                        if ("\\" === a) {
                            if (r + 1 === t.length) throw new Wr(jr.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                            var s = t[r + 1];
                            if ("\\" !== s && "." !== s && "`" !== s) throw new Wr(jr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                            n += s, r += 2
                        } else "`" === a ? o = !o : "." !== a || o ? n += a : i(), r++
                    }
                    if (i(), o) throw new Wr(jr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                    return new Qi(e)
                }, Qi.EMPTY_PATH = new Qi([]), Qi);

            function Qi() {
                return null !== Vi && Vi.apply(this, arguments) || this
            }
            var Ki = (ji.prototype.hasCollectionId = function(t) {
                return 2 <= this.path.length && this.path.get(this.path.length - 2) === t
            }, ji.prototype.isEqual = function(t) {
                return null !== t && 0 === qi.comparator(this.path, t.path)
            }, ji.prototype.toString = function() {
                return this.path.toString()
            }, ji.comparator = function(t, e) {
                return qi.comparator(t.path, e.path)
            }, ji.isDocumentKey = function(t) {
                return t.length % 2 == 0
            }, ji.fromSegments = function(t) {
                return new ji(new qi(t.slice()))
            }, ji.fromPathString = function(t) {
                return new ji(qi.fromString(t))
            }, ji.EMPTY = new ji(new qi([])), ji);

            function ji(t) {
                this.path = t, Vr(ji.isDocumentKey(t), "Invalid DocumentKey with an odd number of segments: " + t.toArray().join("/"))
            }
            var Wi, Gi, zi = function() {
                var n = this;
                this.promise = new Promise(function(t, e) {
                    n.resolve = t, n.reject = e
                })
            };
            (Gi = Wi = Wi || {}).All = "all", Gi.ListenStreamIdle = "listen_stream_idle", Gi.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", Gi.WriteStreamIdle = "write_stream_idle", Gi.WriteStreamConnectionBackoff = "write_stream_connection_backoff", Gi.OnlineStateTimeout = "online_state_timeout", Gi.ClientMetadataRefresh = "client_metadata_refresh", Gi.LruGarbageCollection = "lru_garbage_collection", Gi.RetryTransaction = "retry_transaction";
            var Hi = (Yi.createAndSchedule = function(t, e, n, r, i) {
                var o = new Yi(t, e, Date.now() + n, r, i);
                return o.start(n), o
            }, Yi.prototype.start = function(t) {
                var e = this;
                this.timerHandle = setTimeout(function() {
                    return e.handleDelayElapsed()
                }, t)
            }, Yi.prototype.skipDelay = function() {
                return this.handleDelayElapsed()
            }, Yi.prototype.cancel = function(t) {
                null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Wr(jr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
            }, Yi.prototype.handleDelayElapsed = function() {
                var e = this;
                this.asyncQueue.enqueueAndForget(function() {
                    return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) {
                        return e.deferred.resolve(t)
                    })) : Promise.resolve()
                })
            }, Yi.prototype.clearTimeout = function() {
                null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
            }, Yi);

            function Yi(t, e, n, r, i) {
                this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new zi, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function(t) {})
            }
            var Xi = (Object.defineProperty(Ji.prototype, "isShuttingDown", {
                get: function() {
                    return this._isShuttingDown
                },
                enumerable: !0,
                configurable: !0
            }), Ji.prototype.enqueueAndForget = function(t) {
                this.enqueue(t)
            }, Ji.prototype.enqueueAndForgetEvenAfterShutdown = function(t) {
                this.verifyNotFailed(), this.enqueueInternal(t)
            }, Ji.prototype.enqueueEvenAfterShutdown = function(t) {
                return this.verifyNotFailed(), this.enqueueInternal(t)
            }, Ji.prototype.enqueueAndInitiateShutdown = function(e) {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.verifyNotFailed(), this._isShuttingDown ? [3, 2] : (this._isShuttingDown = !0, [4, this.enqueueEvenAfterShutdown(e)]);
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, Ji.prototype.enqueue = function(t) {
                return this.verifyNotFailed(), this._isShuttingDown ? new Promise(function(t) {}) : this.enqueueInternal(t)
            }, Ji.prototype.enqueueInternal = function(t) {
                var n = this,
                    e = this.tail.then(function() {
                        return n.operationInProgress = !0, t().catch(function(t) {
                            n.failure = t, n.operationInProgress = !1;
                            var e = t.stack || t.message || "";
                            throw xr("INTERNAL UNHANDLED ERROR: ", e), e.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() {
                                throw t
                            }, 0), t
                        }).then(function(t) {
                            return n.operationInProgress = !1, t
                        })
                    });
                return this.tail = e
            }, Ji.prototype.enqueueAfterDelay = function(t, e, n) {
                var r = this;
                this.verifyNotFailed(), Vr(0 <= e, "Attempted to schedule an operation with a negative delay of " + e), -1 < this.timerIdsToSkip.indexOf(t) && (e = 0);
                var i = Hi.createAndSchedule(this, t, e, n, function(t) {
                    return r.removeDelayedOperation(t)
                });
                return this.delayedOperations.push(i), i
            }, Ji.prototype.verifyNotFailed = function() {
                this.failure && Fr("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message))
            }, Ji.prototype.verifyOperationInProgress = function() {
                Vr(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.")
            }, Ji.prototype.drain = function() {
                return this.enqueueEvenAfterShutdown(function() {
                    return Promise.resolve()
                })
            }, Ji.prototype.containsDelayedOperation = function(t) {
                for (var e = 0, n = this.delayedOperations; e < n.length; e++)
                    if (n[e].timerId === t) return !0;
                return !1
            }, Ji.prototype.runDelayedOperationsEarly = function(r) {
                var i = this;
                return this.drain().then(function() {
                    Vr(r === Wi.All || i.containsDelayedOperation(r), "Attempted to drain to missing operation " + r), i.delayedOperations.sort(function(t, e) {
                        return t.targetTimeMs - e.targetTimeMs
                    });
                    for (var t = 0, e = i.delayedOperations; t < e.length; t++) {
                        var n = e[t];
                        if (n.skipDelay(), r !== Wi.All && n.timerId === r) break
                    }
                    return i.drain()
                })
            }, Ji.prototype.skipDelaysForTimerId = function(t) {
                this.timerIdsToSkip.push(t)
            }, Ji.prototype.removeDelayedOperation = function(t) {
                var e = this.delayedOperations.indexOf(t);
                Vr(0 <= e, "Delayed operation not found."), this.delayedOperations.splice(e, 1)
            }, Ji);

            function Ji() {
                this.tail = Promise.resolve(), this._isShuttingDown = !1, this.delayedOperations = [], this.failure = null, this.operationInProgress = !1, this.timerIdsToSkip = []
            }
            var Zi = "",
                $i = "",
                to = "",
                eo = "";

            function no(t) {
                for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = io(e)), e = ro(t.get(n), e);
                return io(e)
            }

            function ro(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                        case "\0":
                            n += Zi + to;
                            break;
                        case Zi:
                            n += Zi + eo;
                            break;
                        default:
                            n += o
                    }
                }
                return n
            }

            function io(t) {
                return t + Zi + $i
            }

            function oo(t) {
                var e = t.length;
                if (Vr(2 <= e, "Invalid path " + t), 2 === e) return Vr(t.charAt(0) === Zi && t.charAt(1) === $i, "Non-empty path " + t + " had length 2"), qi.EMPTY_PATH;
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var a = t.indexOf(Zi, o);
                    switch ((a < 0 || n < a) && Fr('Invalid encoded resource path: "' + t + '"'), t.charAt(a + 1)) {
                        case $i:
                            var s = t.substring(o, a),
                                u = void 0;
                            0 === i.length ? u = s : (u = i += s, i = ""), r.push(u);
                            break;
                        case to:
                            i += t.substring(o, a), i += "\0";
                            break;
                        case eo:
                            i += t.substring(o, a + 1);
                            break;
                        default:
                            Fr('Invalid encoded resource path: "' + t + '"')
                    }
                    o = a + 2
                }
                return new qi(r)
            }
            var ao = (so.now = function() {
                return so.fromMillis(Date.now())
            }, so.fromDate = function(t) {
                return so.fromMillis(t.getTime())
            }, so.fromMillis = function(t) {
                var e = Math.floor(t / 1e3);
                return new so(e, 1e6 * (t - 1e3 * e))
            }, so.prototype.toDate = function() {
                return new Date(this.toMillis())
            }, so.prototype.toMillis = function() {
                return 1e3 * this.seconds + this.nanoseconds / 1e6
            }, so.prototype._compareTo = function(t) {
                return this.seconds === t.seconds ? bi(this.nanoseconds, t.nanoseconds) : bi(this.seconds, t.seconds)
            }, so.prototype.isEqual = function(t) {
                return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            }, so.prototype.toString = function() {
                return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
            }, so);

            function so(t, e) {
                if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Wr(jr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (1e9 <= e) throw new Wr(jr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (t < -62135596800) throw new Wr(jr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                if (253402300800 <= t) throw new Wr(jr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
            }
            var uo = (co.fromMicroseconds = function(t) {
                var e = Math.floor(t / 1e6);
                return new co(new ao(e, t % 1e6 * 1e3))
            }, co.fromTimestamp = function(t) {
                return new co(t)
            }, co.forDeletedDoc = function() {
                return co.MIN
            }, co.prototype.compareTo = function(t) {
                return this.timestamp._compareTo(t.timestamp)
            }, co.prototype.isEqual = function(t) {
                return this.timestamp.isEqual(t.timestamp)
            }, co.prototype.toMicroseconds = function() {
                return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            }, co.prototype.toString = function() {
                return "SnapshotVersion(" + this.timestamp.toString() + ")"
            }, co.prototype.toTimestamp = function() {
                return this.timestamp
            }, co.MIN = new co(new ao(0, 0)), co);

            function co(t) {
                this.timestamp = t
            }
            var ho = (lo.prototype.insert = function(t, e) {
                return new lo(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, mo.BLACK, null, null))
            }, lo.prototype.remove = function(t) {
                return new lo(this.comparator, this.root.remove(t, this.comparator).copy(null, null, mo.BLACK, null, null))
            }, lo.prototype.get = function(t) {
                for (var e = this.root; !e.isEmpty();) {
                    var n = this.comparator(t, e.key);
                    if (0 === n) return e.value;
                    n < 0 ? e = e.left : 0 < n && (e = e.right)
                }
                return null
            }, lo.prototype.indexOf = function(t) {
                for (var e = 0, n = this.root; !n.isEmpty();) {
                    var r = this.comparator(t, n.key);
                    if (0 === r) return e + n.left.size;
                    n = r < 0 ? n.left : (e += n.left.size + 1, n.right)
                }
                return -1
            }, lo.prototype.isEmpty = function() {
                return this.root.isEmpty()
            }, Object.defineProperty(lo.prototype, "size", {
                get: function() {
                    return this.root.size
                },
                enumerable: !0,
                configurable: !0
            }), lo.prototype.minKey = function() {
                return this.root.minKey()
            }, lo.prototype.maxKey = function() {
                return this.root.maxKey()
            }, lo.prototype.inorderTraversal = function(t) {
                return this.root.inorderTraversal(t)
            }, lo.prototype.forEach = function(n) {
                this.inorderTraversal(function(t, e) {
                    return n(t, e), !1
                })
            }, lo.prototype.toString = function() {
                var n = [];
                return this.inorderTraversal(function(t, e) {
                    return n.push(t + ":" + e), !1
                }), "{" + n.join(", ") + "}"
            }, lo.prototype.reverseTraversal = function(t) {
                return this.root.reverseTraversal(t)
            }, lo.prototype.getIterator = function() {
                return new fo(this.root, null, this.comparator, !1)
            }, lo.prototype.getIteratorFrom = function(t) {
                return new fo(this.root, t, this.comparator, !1)
            }, lo.prototype.getReverseIterator = function() {
                return new fo(this.root, null, this.comparator, !0)
            }, lo.prototype.getReverseIteratorFrom = function(t) {
                return new fo(this.root, t, this.comparator, !0)
            }, lo);

            function lo(t, e) {
                this.comparator = t, this.root = e || mo.EMPTY
            }
            var fo = (po.prototype.getNext = function() {
                Vr(0 < this.nodeStack.length, "getNext() called on iterator when hasNext() is false.");
                var t = this.nodeStack.pop(),
                    e = {
                        key: t.key,
                        value: t.value
                    };
                if (this.isReverse)
                    for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                else
                    for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left;
                return e
            }, po.prototype.hasNext = function() {
                return 0 < this.nodeStack.length
            }, po.prototype.peek = function() {
                if (0 === this.nodeStack.length) return null;
                var t = this.nodeStack[this.nodeStack.length - 1];
                return {
                    key: t.key,
                    value: t.value
                }
            }, po);

            function po(t, e, n, r) {
                this.isReverse = r, this.nodeStack = [];
                for (var i = 1; !t.isEmpty();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                    else {
                        if (0 === i) {
                            this.nodeStack.push(t);
                            break
                        }
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                    }
            }
            var mo = (yo.prototype.copy = function(t, e, n, r, i) {
                return new yo(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
            }, yo.prototype.isEmpty = function() {
                return !1
            }, yo.prototype.inorderTraversal = function(t) {
                return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
            }, yo.prototype.reverseTraversal = function(t) {
                return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
            }, yo.prototype.min = function() {
                return this.left.isEmpty() ? this : this.left.min()
            }, yo.prototype.minKey = function() {
                return this.min().key
            }, yo.prototype.maxKey = function() {
                return this.right.isEmpty() ? this.key : this.right.maxKey()
            }, yo.prototype.insert = function(t, e, n) {
                var r = this,
                    i = n(t, r.key);
                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp()
            }, yo.prototype.removeMin = function() {
                if (this.left.isEmpty()) return yo.EMPTY;
                var t = this;
                return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
            }, yo.prototype.remove = function(t, e) {
                var n, r = this;
                if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                else {
                    if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === e(t, r.key)) {
                        if (r.right.isEmpty()) return yo.EMPTY;
                        n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                    }
                    r = r.copy(null, null, null, null, r.right.remove(t, e))
                }
                return r.fixUp()
            }, yo.prototype.isRed = function() {
                return this.color
            }, yo.prototype.fixUp = function() {
                var t = this;
                return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t
            }, yo.prototype.moveRedLeft = function() {
                var t = this.colorFlip();
                return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t
            }, yo.prototype.moveRedRight = function() {
                var t = this.colorFlip();
                return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t
            }, yo.prototype.rotateLeft = function() {
                var t = this.copy(null, null, yo.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, t, null)
            }, yo.prototype.rotateRight = function() {
                var t = this.copy(null, null, yo.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, t)
            }, yo.prototype.colorFlip = function() {
                var t = this.left.copy(null, null, !this.left.color, null, null),
                    e = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, t, e)
            }, yo.prototype.checkMaxDepth = function() {
                var t = this.check();
                return Math.pow(2, t) <= this.size + 1
            }, yo.prototype.check = function() {
                if (this.isRed() && this.left.isRed()) throw Fr("Red node has red child(" + this.key + "," + this.value + ")");
                if (this.right.isRed()) throw Fr("Right child of (" + this.key + "," + this.value + ") is red");
                var t = this.left.check();
                if (t !== this.right.check()) throw Fr("Black depths differ");
                return t + (this.isRed() ? 0 : 1)
            }, yo.EMPTY = null, yo.RED = !0, yo.BLACK = !1, yo);

            function yo(t, e, n, r, i) {
                this.key = t, this.value = e, this.color = null != n ? n : yo.RED, this.left = null != r ? r : yo.EMPTY, this.right = null != i ? i : yo.EMPTY, this.size = this.left.size + 1 + this.right.size
            }
            var go = (Object.defineProperty(vo.prototype, "key", {
                get: function() {
                    throw Fr("LLRBEmptyNode has no key.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(vo.prototype, "value", {
                get: function() {
                    throw Fr("LLRBEmptyNode has no value.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(vo.prototype, "color", {
                get: function() {
                    throw Fr("LLRBEmptyNode has no color.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(vo.prototype, "left", {
                get: function() {
                    throw Fr("LLRBEmptyNode has no left child.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(vo.prototype, "right", {
                get: function() {
                    throw Fr("LLRBEmptyNode has no right child.")
                },
                enumerable: !0,
                configurable: !0
            }), vo.prototype.copy = function(t, e, n, r, i) {
                return this
            }, vo.prototype.insert = function(t, e, n) {
                return new mo(t, e)
            }, vo.prototype.remove = function(t, e) {
                return this
            }, vo.prototype.isEmpty = function() {
                return !0
            }, vo.prototype.inorderTraversal = function(t) {
                return !1
            }, vo.prototype.reverseTraversal = function(t) {
                return !1
            }, vo.prototype.minKey = function() {
                return null
            }, vo.prototype.maxKey = function() {
                return null
            }, vo.prototype.isRed = function() {
                return !1
            }, vo.prototype.checkMaxDepth = function() {
                return !0
            }, vo.prototype.check = function() {
                return 0
            }, vo);

            function vo() {
                this.size = 0
            }
            mo.EMPTY = new go;
            var bo = (wo.fromMapKeys = function(t) {
                var e = new wo(t.comparator);
                return t.forEach(function(t) {
                    e = e.add(t)
                }), e
            }, wo.prototype.has = function(t) {
                return null !== this.data.get(t)
            }, wo.prototype.first = function() {
                return this.data.minKey()
            }, wo.prototype.last = function() {
                return this.data.maxKey()
            }, Object.defineProperty(wo.prototype, "size", {
                get: function() {
                    return this.data.size
                },
                enumerable: !0,
                configurable: !0
            }), wo.prototype.indexOf = function(t) {
                return this.data.indexOf(t)
            }, wo.prototype.forEach = function(n) {
                this.data.inorderTraversal(function(t, e) {
                    return n(t), !1
                })
            }, wo.prototype.forEachInRange = function(t, e) {
                for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                    var r = n.getNext();
                    if (0 <= this.comparator(r.key, t[1])) return;
                    e(r.key)
                }
            }, wo.prototype.forEachWhile = function(t, e) {
                var n;
                for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
                    if (!t(n.getNext().key)) return
            }, wo.prototype.firstAfterOrEqual = function(t) {
                var e = this.data.getIteratorFrom(t);
                return e.hasNext() ? e.getNext().key : null
            }, wo.prototype.getIterator = function() {
                return new So(this.data.getIterator())
            }, wo.prototype.getIteratorFrom = function(t) {
                return new So(this.data.getIteratorFrom(t))
            }, wo.prototype.add = function(t) {
                return this.copy(this.data.remove(t).insert(t, !0))
            }, wo.prototype.delete = function(t) {
                return this.has(t) ? this.copy(this.data.remove(t)) : this
            }, wo.prototype.isEmpty = function() {
                return this.data.isEmpty()
            }, wo.prototype.unionWith = function(t) {
                var e = this;
                return t.forEach(function(t) {
                    e = e.add(t)
                }), e
            }, wo.prototype.isEqual = function(t) {
                if (!(t instanceof wo)) return !1;
                if (this.size !== t.size) return !1;
                for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) {
                    var r = e.getNext().key,
                        i = n.getNext().key;
                    if (0 !== this.comparator(r, i)) return !1
                }
                return !0
            }, wo.prototype.toArray = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), e
            }, wo.prototype.toString = function() {
                var e = [];
                return this.forEach(function(t) {
                    return e.push(t)
                }), "SortedSet(" + e.toString() + ")"
            }, wo.prototype.copy = function(t) {
                var e = new wo(this.comparator);
                return e.data = t, e
            }, wo);

            function wo(t) {
                this.comparator = t, this.data = new ho(this.comparator)
            }
            var So = (To.prototype.getNext = function() {
                return this.iter.getNext().key
            }, To.prototype.hasNext = function() {
                return this.iter.hasNext()
            }, To);

            function To(t) {
                this.iter = t
            }
            var Eo = new ho(Ki.comparator);

            function Io() {
                return Eo
            }

            function Co() {
                return Io()
            }
            var Do = new ho(Ki.comparator);

            function No() {
                return Do
            }
            var Ao = new ho(Ki.comparator);

            function ko() {
                return Ao
            }
            var Ro = new bo(Ki.comparator);

            function Mo() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = Ro, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var Oo = new bo(bi);

            function _o() {
                return Oo
            }
            var Lo = (Po.prototype.applyToRemoteDocument = function(t, e, n) {
                e && Vr(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                var r = n.mutationResults;
                Vr(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                for (var i = 0; i < this.mutations.length; i++) {
                    var o = this.mutations[i];
                    if (o.key.isEqual(t)) {
                        var a = r[i];
                        e = o.applyToRemoteDocument(e, a)
                    }
                }
                return e
            }, Po.prototype.applyToLocalView = function(t, e) {
                e && Vr(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                for (var n = 0, r = this.baseMutations; n < r.length; n++)(s = r[n]).key.isEqual(t) && (e = s.applyToLocalView(e, e, this.localWriteTime));
                for (var i = e, o = 0, a = this.mutations; o < a.length; o++) {
                    var s;
                    (s = a[o]).key.isEqual(t) && (e = s.applyToLocalView(e, i, this.localWriteTime))
                }
                return e
            }, Po.prototype.applyToLocalDocumentSet = function(n) {
                var r = this,
                    i = n;
                return this.mutations.forEach(function(t) {
                    var e = r.applyToLocalView(t.key, n.get(t.key));
                    e && (i = i.insert(t.key, e))
                }), i
            }, Po.prototype.keys = function() {
                return this.mutations.reduce(function(t, e) {
                    return t.add(e.key)
                }, Mo())
            }, Po.prototype.isEqual = function(t) {
                return this.batchId === t.batchId && wi(this.mutations, t.mutations) && wi(this.baseMutations, t.baseMutations)
            }, Po);

            function Po(t, e, n, r) {
                this.batchId = t, this.localWriteTime = e, this.baseMutations = n, Vr(0 < (this.mutations = r).length, "Cannot create an empty mutation batch")
            }
            var xo = (qo.from = function(t, e, n, r) {
                Vr(t.mutations.length === n.length, "Mutations sent " + t.mutations.length + " must equal results received " + n.length);
                for (var i = ko(), o = t.mutations, a = 0; a < o.length; a++) i = i.insert(o[a].key, n[a].version);
                return new qo(t, e, n, r, i)
            }, qo);

            function qo(t, e, n, r, i) {
                this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = i
            }
            var Fo = (Vo.prototype.catch = function(t) {
                return this.next(void 0, t)
            }, Vo.prototype.next = function(r, i) {
                var o = this;
                return this.callbackAttached && Fr("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new Vo(function(e, n) {
                    o.nextCallback = function(t) {
                        o.wrapSuccess(r, t).next(e, n)
                    }, o.catchCallback = function(t) {
                        o.wrapFailure(i, t).next(e, n)
                    }
                })
            }, Vo.prototype.toPromise = function() {
                var n = this;
                return new Promise(function(t, e) {
                    n.next(t, e)
                })
            }, Vo.prototype.wrapUserFunction = function(t) {
                try {
                    var e = t();
                    return e instanceof Vo ? e : Vo.resolve(e)
                } catch (t) {
                    return Vo.reject(t)
                }
            }, Vo.prototype.wrapSuccess = function(t, e) {
                return t ? this.wrapUserFunction(function() {
                    return t(e)
                }) : Vo.resolve(e)
            }, Vo.prototype.wrapFailure = function(t, e) {
                return t ? this.wrapUserFunction(function() {
                    return t(e)
                }) : Vo.reject(e)
            }, Vo.resolve = function(n) {
                return new Vo(function(t, e) {
                    t(n)
                })
            }, Vo.reject = function(n) {
                return new Vo(function(t, e) {
                    e(n)
                })
            }, Vo.waitFor = function(t) {
                return new Vo(function(e, n) {
                    var r = 0,
                        i = 0,
                        o = !1;
                    t.forEach(function(t) {
                        ++r, t.next(function() {
                            ++i, o && i === r && e()
                        }, function(t) {
                            return n(t)
                        })
                    }), o = !0, i === r && e()
                })
            }, Vo.or = function(t) {
                for (var n = Vo.resolve(!1), e = function(e) {
                        n = n.next(function(t) {
                            return t ? Vo.resolve(t) : e()
                        })
                    }, r = 0, i = t; r < i.length; r++) e(i[r]);
                return n
            }, Vo.forEach = function(t, n) {
                var r = this,
                    i = [];
                return t.forEach(function(t, e) {
                    i.push(n.call(r, t, e))
                }), this.waitFor(i)
            }, Vo);

            function Vo(t) {
                var e = this;
                this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function(t) {
                    e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t)
                }, function(t) {
                    e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t)
                })
            }
            var Bo = (Uo.forUser = function(t, e, n, r) {
                return Vr("" !== t.uid, "UserID must not be an empty string."), new Uo(t.isAuthenticated() ? t.uid : "", e, n, r)
            }, Uo.prototype.checkEmpty = function(t) {
                var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                return Wo(t).iterate({
                    index: pu.userMutationsIndex,
                    range: e
                }, function(t, e, n) {
                    r = !1, n.done()
                }).next(function() {
                    return r
                })
            }, Uo.prototype.acknowledgeBatch = function(e, t, n) {
                return this.getMutationQueueMetadata(e).next(function(t) {
                    return t.lastStreamToken = jo(n), zo(e).put(t)
                })
            }, Uo.prototype.getLastStreamToken = function(t) {
                return this.getMutationQueueMetadata(t).next(function(t) {
                    return t.lastStreamToken
                })
            }, Uo.prototype.setLastStreamToken = function(e, n) {
                return this.getMutationQueueMetadata(e).next(function(t) {
                    return t.lastStreamToken = jo(n), zo(e).put(t)
                })
            }, Uo.prototype.addMutationBatch = function(c, h, l, f) {
                var d = this,
                    p = Go(c),
                    m = Wo(c);
                return m.add({}).next(function(t) {
                    Vr("number" == typeof t, "Auto-generated key is not a number");
                    for (var e = new Lo(t, h, l, f), n = d.serializer.toDbMutationBatch(d.userId, e), r = [], i = new bo(function(t, e) {
                            return bi(t.canonicalString(), e.canonicalString())
                        }), o = 0, a = f; o < a.length; o++) {
                        var s = a[o],
                            u = yu.key(d.userId, s.key.path, t);
                        i = i.add(s.key.path.popLast()), r.push(m.put(n)), r.push(p.put(u, yu.PLACEHOLDER))
                    }
                    return i.forEach(function(t) {
                        r.push(d.indexManager.addToCollectionParentIndex(c, t))
                    }), c.addOnCommittedListener(function() {
                        d.documentKeysByBatchId[t] = e.keys()
                    }), Fo.waitFor(r).next(function() {
                        return e
                    })
                })
            }, Uo.prototype.lookupMutationBatch = function(t, e) {
                var n = this;
                return Wo(t).get(e).next(function(t) {
                    return t ? (Vr(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.fromDbMutationBatch(t)) : null
                })
            }, Uo.prototype.lookupMutationKeys = function(t, n) {
                var r = this;
                return this.documentKeysByBatchId[n] ? Fo.resolve(this.documentKeysByBatchId[n]) : this.lookupMutationBatch(t, n).next(function(t) {
                    if (t) {
                        var e = t.keys();
                        return r.documentKeysByBatchId[n] = e
                    }
                    return null
                })
            }, Uo.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                var r = this,
                    i = e + 1,
                    n = IDBKeyRange.lowerBound([this.userId, i]),
                    o = null;
                return Wo(t).iterate({
                    index: pu.userMutationsIndex,
                    range: n
                }, function(t, e, n) {
                    e.userId === r.userId && (Vr(e.batchId >= i, "Should have found mutation after " + i), o = r.serializer.fromDbMutationBatch(e)), n.done()
                }).next(function() {
                    return o
                })
            }, Uo.prototype.getHighestUnacknowledgedBatchId = function(t) {
                var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                    r = -1;
                return Wo(t).iterate({
                    index: pu.userMutationsIndex,
                    range: e,
                    reverse: !0
                }, function(t, e, n) {
                    r = e.batchId, n.done()
                }).next(function() {
                    return r
                })
            }, Uo.prototype.getAllMutationBatches = function(t) {
                var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                return Wo(t).loadAll(pu.userMutationsIndex, n).next(function(t) {
                    return t.map(function(t) {
                        return e.serializer.fromDbMutationBatch(t)
                    })
                })
            }, Uo.prototype.getAllMutationBatchesAffectingDocumentKey = function(s, u) {
                var c = this,
                    t = yu.prefixForPath(this.userId, u.path),
                    e = IDBKeyRange.lowerBound(t),
                    h = [];
                return Go(s).iterate({
                    range: e
                }, function(e, t, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = oo(i);
                    if (r === c.userId && u.path.isEqual(a)) return Wo(s).get(o).next(function(t) {
                        if (!t) throw Fr("Dangling document-mutation reference found: " + e + " which points to " + o);
                        Vr(t.userId === c.userId, "Unexpected user '" + t.userId + "' for mutation batch " + o), h.push(c.serializer.fromDbMutationBatch(t))
                    });
                    n.done()
                }).next(function() {
                    return h
                })
            }, Uo.prototype.getAllMutationBatchesAffectingDocumentKeys = function(r, t) {
                var u = this,
                    c = new bo(bi),
                    i = [];
                return t.forEach(function(s) {
                    var t = yu.prefixForPath(u.userId, s.path),
                        e = IDBKeyRange.lowerBound(t),
                        n = Go(r).iterate({
                            range: e
                        }, function(t, e, n) {
                            var r = t[0],
                                i = t[1],
                                o = t[2],
                                a = oo(i);
                            r === u.userId && s.path.isEqual(a) ? c = c.add(o) : n.done()
                        });
                    i.push(n)
                }), Fo.waitFor(i).next(function() {
                    return u.lookupMutationBatches(r, c)
                })
            }, Uo.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                var s = this;
                Vr(!e.isDocumentQuery(), "Document queries shouldn't go down this path"), Vr(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var u = e.path,
                    c = u.length + 1,
                    n = yu.prefixForPath(this.userId, u),
                    r = IDBKeyRange.lowerBound(n),
                    h = new bo(bi);
                return Go(t).iterate({
                    range: r
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1],
                        o = t[2],
                        a = oo(i);
                    r === s.userId && u.isPrefixOf(a) ? a.length === c && (h = h.add(o)) : n.done()
                }).next(function() {
                    return s.lookupMutationBatches(t, h)
                })
            }, Uo.prototype.lookupMutationBatches = function(t, e) {
                var n = this,
                    r = [],
                    i = [];
                return e.forEach(function(e) {
                    i.push(Wo(t).get(e).next(function(t) {
                        if (null === t) throw Fr("Dangling document-mutation reference found, which points to " + e);
                        Vr(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.fromDbMutationBatch(t))
                    }))
                }), Fo.waitFor(i).next(function() {
                    return r
                })
            }, Uo.prototype.removeMutationBatch = function(e, n) {
                var r = this;
                return Ko(e.simpleDbTransaction, this.userId, n).next(function(t) {
                    return e.addOnCommittedListener(function() {
                        r.removeCachedMutationKeys(n.batchId)
                    }), Fo.forEach(t, function(t) {
                        return r.referenceDelegate.removeMutationReference(e, t)
                    })
                })
            }, Uo.prototype.removeCachedMutationKeys = function(t) {
                delete this.documentKeysByBatchId[t]
            }, Uo.prototype.performConsistencyCheck = function(n) {
                var o = this;
                return this.checkEmpty(n).next(function(t) {
                    if (!t) return Fo.resolve();
                    var e = IDBKeyRange.lowerBound(yu.prefixForUser(o.userId)),
                        i = [];
                    return Go(n).iterate({
                        range: e
                    }, function(t, e, n) {
                        if (t[0] === o.userId) {
                            var r = oo(t[1]);
                            i.push(r)
                        } else n.done()
                    }).next(function() {
                        Vr(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(t) {
                            return t.canonicalString()
                        }))
                    })
                })
            }, Uo.prototype.containsKey = function(t, e) {
                return Qo(t, this.userId, e)
            }, Uo.prototype.getMutationQueueMetadata = function(t) {
                var e = this;
                return zo(t).get(this.userId).next(function(t) {
                    return t || new fu(e.userId, -1, "")
                })
            }, Uo);

            function Uo(t, e, n, r) {
                this.userId = t, this.serializer = e, this.indexManager = n, this.referenceDelegate = r, this.documentKeysByBatchId = {}
            }

            function Qo(t, o, e) {
                var n = yu.prefixForPath(o, e.path),
                    a = n[1],
                    r = IDBKeyRange.lowerBound(n),
                    s = !1;
                return Go(t).iterate({
                    range: r,
                    keysOnly: !0
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1];
                    t[2];
                    r === o && i === a && (s = !0), n.done()
                }).next(function() {
                    return s
                })
            }

            function Ko(t, e, n) {
                var r = t.store(pu.store),
                    i = t.store(yu.store),
                    o = [],
                    a = IDBKeyRange.only(n.batchId),
                    s = 0,
                    u = r.iterate({
                        range: a
                    }, function(t, e, n) {
                        return s++, n.delete()
                    });
                o.push(u.next(function() {
                    Vr(1 === s, "Dangling document-mutation reference found: Missing batch " + n.batchId)
                }));
                for (var c = [], h = 0, l = n.mutations; h < l.length; h++) {
                    var f = l[h],
                        d = yu.key(e, f.key.path, n.batchId);
                    o.push(i.delete(d)), c.push(f.key)
                }
                return Fo.waitFor(o).next(function() {
                    return c
                })
            }

            function jo(t) {
                return t instanceof Uint8Array ? (Vr("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence."), t.toString()) : t
            }

            function Wo(t) {
                return cc.getStore(t, pu.store)
            }

            function Go(t) {
                return cc.getStore(t, yu.store)
            }

            function zo(t) {
                return cc.getStore(t, fu.store)
            }
            var Ho, Yo;
            (Yo = Ho = Ho || {})[Yo.QueryCache = 0] = "QueryCache", Yo[Yo.SyncEngine = 1] = "SyncEngine";
            var Xo = (Jo.prototype.next = function() {
                var t = this.nextId;
                return this.nextId += 2, t
            }, Jo.prototype.after = function(t) {
                return this.seek(t + 2), this.next()
            }, Jo.prototype.seek = function(t) {
                Vr((1 & t) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = t
            }, Jo.forQueryCache = function() {
                return new Jo(Ho.QueryCache, 2)
            }, Jo.forSyncEngine = function() {
                return new Jo(Ho.SyncEngine)
            }, Jo);

            function Jo(t, e) {
                Vr((1 & (this.generatorId = t)) === t, "Generator ID " + t + " contains more than 1 reserved bits"), this.seek(void 0 !== e ? e : this.generatorId)
            }
            var Zo = "SimpleDb",
                $o = (ta.openOrCreate = function(o, t, a) {
                    return Vr(ta.isAvailable(), "IndexedDB not supported in current environment."), Pr(Zo, "Opening database:", o), new Fo(function(n, r) {
                        var i = window.indexedDB.open(o, t);
                        i.onsuccess = function(t) {
                            var e = t.target.result;
                            n(new ta(e))
                        }, i.onblocked = function() {
                            r(new Wr(jr.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                        }, i.onerror = function(t) {
                            var e = t.target.error;
                            "VersionError" === e.name ? r(new Wr(jr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e)
                        }, i.onupgradeneeded = function(t) {
                            Pr(Zo, 'Database "' + o + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            a.createOrUpgrade(e, i.transaction, t.oldVersion, au).next(function() {
                                Pr(Zo, "Database upgrade to version " + au + " complete")
                            })
                        }
                    }).toPromise()
                }, ta.delete = function(t) {
                    return Pr(Zo, "Removing database:", t), sa(window.indexedDB.deleteDatabase(t)).toPromise()
                }, ta.isAvailable = function() {
                    if ("undefined" == typeof window || null == window.indexedDB) return !1;
                    if (void 0 === window.navigator) return "YES" === process.env.USE_MOCK_PERSISTENCE;
                    var t = h(),
                        e = ta.getIOSVersion(t),
                        n = 0 < e && e < 10,
                        r = ta.getAndroidVersion(t),
                        i = 0 < r && r < 4.5;
                    return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || i)
                }, ta.getStore = function(t, e) {
                    return t.store(e)
                }, ta.getIOSVersion = function(t) {
                    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, ta.getAndroidVersion = function(t) {
                    var e = t.match(/Android ([\d.]+)/i),
                        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, ta.prototype.setVersionChangeListener = function(e) {
                    this.db.onversionchange = function(t) {
                        return e(t)
                    }
                }, ta.prototype.runTransaction = function(r, c, h) {
                    return d(this, void 0, void 0, function() {
                        var o, a, s, e, u, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    o = r.startsWith("readonly"), a = r.endsWith("idempotent"), s = 0, e = function() {
                                        var e, n, r, i;
                                        return p(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    ++s, e = ra.open(u.db, o ? "readonly" : "readwrite", c), t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]), (n = h(e).catch(function(t) {
                                                        return e.abort(t), Fo.reject(t)
                                                    }).toPromise()).catch(function() {}), [4, e.completionPromise];
                                                case 2:
                                                    return t.sent(), [2, {
                                                        value: n
                                                    }];
                                                case 3:
                                                    return r = t.sent(), i = a && function(t) {
                                                        return "undefined" != typeof DOMException && t instanceof DOMException || "DOMException" === t.constructor.name
                                                    }(r) && s < 3, Pr("Transaction failed with error: %s. Retrying: %s.", r.message, i), i ? [3, 4] : [2, {
                                                        value: Promise.reject(r)
                                                    }];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    }, u = this, t.label = 1;
                                case 1:
                                    return [5, e()];
                                case 2:
                                    return "object" == typeof(n = t.sent()) ? [2, n.value] : [3, 1];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, ta.prototype.close = function() {
                    this.db.close()
                }, ta);

            function ta(t) {
                this.db = t, 12.2 === ta.getIOSVersion(h()) && xr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
            }
            var ea = (Object.defineProperty(na.prototype, "isDone", {
                get: function() {
                    return this.shouldStop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(na.prototype, "skipToKey", {
                get: function() {
                    return this.nextKey
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(na.prototype, "cursor", {
                set: function(t) {
                    this.dbCursor = t
                },
                enumerable: !0,
                configurable: !0
            }), na.prototype.done = function() {
                this.shouldStop = !0
            }, na.prototype.skip = function(t) {
                this.nextKey = t
            }, na.prototype.delete = function() {
                return sa(this.dbCursor.delete())
            }, na);

            function na(t) {
                this.dbCursor = t, this.shouldStop = !1, this.nextKey = null
            }
            var ra = (ia.open = function(t, e, n) {
                return new ia(t.transaction(n, e))
            }, Object.defineProperty(ia.prototype, "completionPromise", {
                get: function() {
                    return this.completionDeferred.promise
                },
                enumerable: !0,
                configurable: !0
            }), ia.prototype.abort = function(t) {
                t && this.completionDeferred.reject(t), this.aborted || (Pr(Zo, "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
            }, ia.prototype.store = function(t) {
                var e = this.transaction.objectStore(t);
                return Vr(!!e, "Object store not part of transaction: " + t), new oa(e)
            }, ia);

            function ia(t) {
                var n = this;
                this.transaction = t, this.aborted = !1, this.completionDeferred = new zi, this.transaction.oncomplete = function() {
                    n.completionDeferred.resolve()
                }, this.transaction.onabort = function() {
                    t.error ? n.completionDeferred.reject(t.error) : n.completionDeferred.resolve()
                }, this.transaction.onerror = function(t) {
                    var e = ca(t.target.error);
                    n.completionDeferred.reject(e)
                }
            }
            var oa = (aa.prototype.put = function(t, e) {
                return sa(void 0 !== e ? (Pr(Zo, "PUT", this.store.name, t, e), this.store.put(e, t)) : (Pr(Zo, "PUT", this.store.name, "<auto-key>", t), this.store.put(t)))
            }, aa.prototype.add = function(t) {
                return Pr(Zo, "ADD", this.store.name, t, t), sa(this.store.add(t))
            }, aa.prototype.get = function(e) {
                var n = this;
                return sa(this.store.get(e)).next(function(t) {
                    return void 0 === t && (t = null), Pr(Zo, "GET", n.store.name, e, t), t
                })
            }, aa.prototype.delete = function(t) {
                return Pr(Zo, "DELETE", this.store.name, t), sa(this.store.delete(t))
            }, aa.prototype.count = function() {
                return Pr(Zo, "COUNT", this.store.name), sa(this.store.count())
            }, aa.prototype.loadAll = function(t, e) {
                var n = this.cursor(this.options(t, e)),
                    r = [];
                return this.iterateCursor(n, function(t, e) {
                    r.push(e)
                }).next(function() {
                    return r
                })
            }, aa.prototype.deleteAll = function(t, e) {
                Pr(Zo, "DELETE ALL", this.store.name);
                var n = this.options(t, e);
                n.keysOnly = !1;
                var r = this.cursor(n);
                return this.iterateCursor(r, function(t, e, n) {
                    return n.delete()
                })
            }, aa.prototype.iterate = function(t, e) {
                var n;
                e ? n = t : (n = {}, e = t);
                var r = this.cursor(n);
                return this.iterateCursor(r, e)
            }, aa.prototype.iterateSerial = function(i) {
                var t = this.cursor({});
                return new Fo(function(n, r) {
                    t.onerror = function(t) {
                        var e = ca(t.target.error);
                        r(e)
                    }, t.onsuccess = function(t) {
                        var e = t.target.result;
                        e ? i(e.primaryKey, e.value).next(function(t) {
                            t ? e.continue() : n()
                        }) : n()
                    }
                })
            }, aa.prototype.iterateCursor = function(t, a) {
                var s = [];
                return new Fo(function(o, e) {
                    t.onerror = function(t) {
                        e(t.target.error)
                    }, t.onsuccess = function(t) {
                        var e = t.target.result;
                        if (e) {
                            var n = new ea(e),
                                r = a(e.primaryKey, e.value, n);
                            if (r instanceof Fo) {
                                var i = r.catch(function(t) {
                                    return n.done(), Fo.reject(t)
                                });
                                s.push(i)
                            }
                            n.isDone ? o() : null === n.skipToKey ? e.continue() : e.continue(n.skipToKey)
                        } else o()
                    }
                }).next(function() {
                    return Fo.waitFor(s)
                })
            }, aa.prototype.options = function(t, e) {
                var n = void 0;
                return void 0 !== t && ("string" == typeof t ? n = t : (Vr(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), {
                    index: n,
                    range: e
                }
            }, aa.prototype.cursor = function(t) {
                var e = "next";
                if (t.reverse && (e = "prev"), t.index) {
                    var n = this.store.index(t.index);
                    return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                }
                return this.store.openCursor(t.range, e)
            }, aa);

            function aa(t) {
                this.store = t
            }

            function sa(t) {
                return new Fo(function(n, r) {
                    t.onsuccess = function(t) {
                        var e = t.target.result;
                        n(e)
                    }, t.onerror = function(t) {
                        var e = ca(t.target.error);
                        r(e)
                    }
                })
            }
            var ua = !1;

            function ca(t) {
                var e = $o.getIOSVersion(h());
                if (12.2 <= e && e < 13) {
                    var n = "An internal error was encountered in the Indexed Database server";
                    if (0 <= t.message.indexOf(n)) {
                        var r = new Wr("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                        return ua || (ua = !0, setTimeout(function() {
                            throw r
                        }, 0)), r
                    }
                }
                return t
            }
            var ha = (la.prototype.allocateTargetId = function(e) {
                var n = this;
                return this.retrieveMetadata(e).next(function(t) {
                    return t.highestTargetId = n.targetIdGenerator.after(t.highestTargetId), n.saveMetadata(e, t).next(function() {
                        return t.highestTargetId
                    })
                })
            }, la.prototype.getLastRemoteSnapshotVersion = function(t) {
                return this.retrieveMetadata(t).next(function(t) {
                    return uo.fromTimestamp(new ao(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                })
            }, la.prototype.getHighestSequenceNumber = function(t) {
                return pa(t.simpleDbTransaction)
            }, la.prototype.setTargetsMetadata = function(e, n, r) {
                var i = this;
                return this.retrieveMetadata(e).next(function(t) {
                    return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.saveMetadata(e, t)
                })
            }, la.prototype.addQueryData = function(e, n) {
                var r = this;
                return this.saveQueryData(e, n).next(function() {
                    return r.retrieveMetadata(e).next(function(t) {
                        return t.targetCount += 1, r.updateMetadataFromQueryData(n, t), r.saveMetadata(e, t)
                    })
                })
            }, la.prototype.updateQueryData = function(t, e) {
                return this.saveQueryData(t, e)
            }, la.prototype.removeQueryData = function(e, t) {
                var n = this;
                return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() {
                    return fa(e).delete(t.targetId)
                }).next(function() {
                    return n.retrieveMetadata(e)
                }).next(function(t) {
                    return Vr(0 < t.targetCount, "Removing from an empty query cache"), t.targetCount -= 1, n.saveMetadata(e, t)
                })
            }, la.prototype.removeTargets = function(r, i, o) {
                var a = this,
                    s = 0,
                    u = [];
                return fa(r).iterate(function(t, e) {
                    var n = a.serializer.fromDbTarget(e);
                    n.sequenceNumber <= i && null === o.get(n.targetId) && (s++, u.push(a.removeQueryData(r, n)))
                }).next(function() {
                    return Fo.waitFor(u)
                }).next(function() {
                    return s
                })
            }, la.prototype.forEachTarget = function(t, r) {
                var i = this;
                return fa(t).iterate(function(t, e) {
                    var n = i.serializer.fromDbTarget(e);
                    r(n)
                })
            }, la.prototype.retrieveMetadata = function(t) {
                return da(t.simpleDbTransaction)
            }, la.prototype.saveMetadata = function(t, e) {
                return function(t) {
                    return cc.getStore(t, Au.store)
                }(t).put(Au.key, e)
            }, la.prototype.saveQueryData = function(t, e) {
                return fa(t).put(this.serializer.toDbTarget(e))
            }, la.prototype.updateMetadataFromQueryData = function(t, e) {
                var n = !1;
                return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
            }, la.prototype.getQueryCount = function(t) {
                return this.retrieveMetadata(t).next(function(t) {
                    return t.targetCount
                })
            }, la.prototype.getQueryData = function(t, i) {
                var o = this,
                    e = i.canonicalId(),
                    n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                    a = null;
                return fa(t).iterate({
                    range: n,
                    index: Iu.queryTargetsIndexName
                }, function(t, e, n) {
                    var r = o.serializer.fromDbTarget(e);
                    i.isEqual(r.query) && (a = r, n.done())
                }).next(function() {
                    return a
                })
            }, la.prototype.addMatchingKeys = function(n, t, r) {
                var i = this,
                    o = [],
                    a = ma(n);
                return t.forEach(function(t) {
                    var e = no(t.path);
                    o.push(a.put(new Du(r, e))), o.push(i.referenceDelegate.addReference(n, t))
                }), Fo.waitFor(o)
            }, la.prototype.removeMatchingKeys = function(n, t, r) {
                var i = this,
                    o = ma(n);
                return Fo.forEach(t, function(t) {
                    var e = no(t.path);
                    return Fo.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, t)])
                })
            }, la.prototype.removeMatchingKeysForTargetId = function(t, e) {
                var n = ma(t),
                    r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                return n.delete(r)
            }, la.prototype.getMatchingKeysForTargetId = function(t, e) {
                var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                    r = ma(t),
                    o = Mo();
                return r.iterate({
                    range: n,
                    keysOnly: !0
                }, function(t, e, n) {
                    var r = oo(t[1]),
                        i = new Ki(r);
                    o = o.add(i)
                }).next(function() {
                    return o
                })
            }, la.prototype.containsKey = function(t, e) {
                var n = no(e.path),
                    r = IDBKeyRange.bound([n], [Si(n)], !1, !0),
                    i = 0;
                return ma(t).iterate({
                    index: Du.documentTargetsIndex,
                    keysOnly: !0,
                    range: r
                }, function(t, e, n) {
                    var r = t[0];
                    t[1], 0 !== r && (i++, n.done())
                }).next(function() {
                    return 0 < i
                })
            }, la.prototype.getQueryDataForTarget = function(t, e) {
                var n = this;
                return fa(t).get(e).next(function(t) {
                    return t ? n.serializer.fromDbTarget(t) : null
                })
            }, la);

            function la(t, e) {
                this.referenceDelegate = t, this.serializer = e, this.targetIdGenerator = Xo.forQueryCache()
            }

            function fa(t) {
                return cc.getStore(t, Iu.store)
            }

            function da(t) {
                return $o.getStore(t, Au.store).get(Au.key).next(function(t) {
                    return Vr(null !== t, "Missing metadata row."), t
                })
            }

            function pa(t) {
                return da(t).next(function(t) {
                    return t.highestListenSequenceNumber
                })
            }

            function ma(t) {
                return cc.getStore(t, Du.store)
            }
            var ya = (ga.fromSet = function(t) {
                return new ga(t)
            }, ga.fromArray = function(t) {
                var e = new bo(Ui.comparator);
                return t.forEach(function(t) {
                    return e = e.add(t)
                }), new ga(e)
            }, ga.prototype.covers = function(e) {
                var n = !1;
                return this.fields.forEach(function(t) {
                    t.isPrefixOf(e) && (n = !0)
                }), n
            }, ga.prototype.isEqual = function(t) {
                return this.fields.isEqual(t.fields)
            }, ga);

            function ga(t) {
                this.fields = t
            }
            var va = (ba.prototype.isEqual = function(t) {
                return this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
            }, ba);

            function ba(t, e) {
                this.field = t, this.transform = e
            }
            var wa, Sa, Ta = function(t, e) {
                this.version = t, this.transformResults = e
            };
            (Sa = wa = wa || {})[Sa.Set = 0] = "Set", Sa[Sa.Patch = 1] = "Patch", Sa[Sa.Transform = 2] = "Transform", Sa[Sa.Delete = 3] = "Delete";
            var Ea = (Ia.exists = function(t) {
                return new Ia(void 0, t)
            }, Ia.updateTime = function(t) {
                return new Ia(t)
            }, Object.defineProperty(Ia.prototype, "isNone", {
                get: function() {
                    return void 0 === this.updateTime && void 0 === this.exists
                },
                enumerable: !0,
                configurable: !0
            }), Ia.prototype.isValidFor = function(t) {
                return void 0 !== this.updateTime ? t instanceof xs && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof xs : (Vr(this.isNone, "Precondition should be empty"), !0)
            }, Ia.prototype.isEqual = function(t) {
                return function(t, e) {
                    return null != t ? !(!e || !t.isEqual(e)) : t === e
                }(this.updateTime, t.updateTime) && this.exists === t.exists
            }, Ia.NONE = new Ia, Ia);

            function Ia(t, e) {
                this.updateTime = t, this.exists = e, Vr(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both')
            }
            var Ca = (Da.prototype.verifyKeyMatches = function(t) {
                null != t && Vr(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key")
            }, Da.getPostMutationVersion = function(t) {
                return t instanceof xs ? t.version : uo.MIN
            }, Da);

            function Da() {}
            var Na, Aa = (t(ka, Na = Ca), ka.prototype.applyToRemoteDocument = function(t, e) {
                this.verifyKeyMatches(t), Vr(null == e.transformResults, "Transform results received by SetMutation.");
                var n = e.version;
                return new xs(this.key, n, {
                    hasCommittedMutations: !0
                }, this.value)
            }, ka.prototype.applyToLocalView = function(t, e, n) {
                if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                var r = Ca.getPostMutationVersion(t);
                return new xs(this.key, r, {
                    hasLocalMutations: !0
                }, this.value)
            }, ka.prototype.extractBaseValue = function(t) {
                return null
            }, ka.prototype.isEqual = function(t) {
                return t instanceof ka && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.precondition.isEqual(t.precondition)
            }, ka);

            function ka(t, e, n) {
                var r = Na.call(this) || this;
                return r.key = t, r.value = e, r.precondition = n, r.type = wa.Set, r
            }
            var Ra, Ma = (t(Oa, Ra = Ca), Oa.prototype.applyToRemoteDocument = function(t, e) {
                if (this.verifyKeyMatches(t), Vr(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return new Qs(this.key, e.version);
                var n = this.patchDocument(t);
                return new xs(this.key, e.version, {
                    hasCommittedMutations: !0
                }, n)
            }, Oa.prototype.applyToLocalView = function(t, e, n) {
                if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                var r = Ca.getPostMutationVersion(t),
                    i = this.patchDocument(t);
                return new xs(this.key, r, {
                    hasLocalMutations: !0
                }, i)
            }, Oa.prototype.extractBaseValue = function(t) {
                return null
            }, Oa.prototype.isEqual = function(t) {
                return t instanceof Oa && this.key.isEqual(t.key) && this.fieldMask.isEqual(t.fieldMask) && this.precondition.isEqual(t.precondition)
            }, Oa.prototype.patchDocument = function(t) {
                var e;
                return e = t instanceof xs ? t.data() : As.EMPTY, this.patchObject(e)
            }, Oa.prototype.patchObject = function(n) {
                var r = this;
                return this.fieldMask.fields.forEach(function(t) {
                    if (!t.isEmpty()) {
                        var e = r.data.field(t);
                        n = null !== e ? n.set(t, e) : n.delete(t)
                    }
                }), n
            }, Oa);

            function Oa(t, e, n, r) {
                var i = Ra.call(this) || this;
                return i.key = t, i.data = e, i.fieldMask = n, i.precondition = r, i.type = wa.Patch, i
            }
            var _a, La = (t(Pa, _a = Ca), Pa.prototype.applyToRemoteDocument = function(t, e) {
                if (this.verifyKeyMatches(t), Vr(null != e.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(t)) return new Qs(this.key, e.version);
                var n = this.requireDocument(t),
                    r = this.serverTransformResults(t, e.transformResults),
                    i = e.version,
                    o = this.transformObject(n.data(), r);
                return new xs(this.key, i, {
                    hasCommittedMutations: !0
                }, o)
            }, Pa.prototype.applyToLocalView = function(t, e, n) {
                if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                var r = this.requireDocument(t),
                    i = this.localTransformResults(n, t, e),
                    o = this.transformObject(r.data(), i);
                return new xs(this.key, r.version, {
                    hasLocalMutations: !0
                }, o)
            }, Pa.prototype.extractBaseValue = function(t) {
                for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
                    var i = r[n],
                        o = t instanceof xs ? t.field(i.field) : void 0,
                        a = i.transform.computeBaseValue(o || null);
                    null != a && (e = null == e ? As.EMPTY.set(i.field, a) : e.set(i.field, a))
                }
                return e
            }, Pa.prototype.isEqual = function(t) {
                return t instanceof Pa && this.key.isEqual(t.key) && wi(this.fieldTransforms, t.fieldTransforms) && this.precondition.isEqual(t.precondition)
            }, Pa.prototype.requireDocument = function(t) {
                Vr(t instanceof xs, "Unknown MaybeDocument type " + t);
                var e = t;
                return Vr(e.key.isEqual(this.key), "Can only transform a document with the same key"), e
            }, Pa.prototype.serverTransformResults = function(t, e) {
                var n = [];
                Vr(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
                for (var r = 0; r < e.length; r++) {
                    var i = this.fieldTransforms[r],
                        o = i.transform,
                        a = null;
                    t instanceof xs && (a = t.field(i.field)), n.push(o.applyToRemoteDocument(a, e[r]))
                }
                return n
            }, Pa.prototype.localTransformResults = function(t, e, n) {
                for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
                    var a = o[i],
                        s = a.transform,
                        u = null;
                    e instanceof xs && (u = e.field(a.field)), null === u && n instanceof xs && (u = n.field(a.field)), r.push(s.applyToLocalView(u, t))
                }
                return r
            }, Pa.prototype.transformObject = function(t, e) {
                Vr(e.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                for (var n = 0; n < this.fieldTransforms.length; n++) {
                    var r = this.fieldTransforms[n].field;
                    t = t.set(r, e[n])
                }
                return t
            }, Pa);

            function Pa(t, e) {
                var n = _a.call(this) || this;
                return n.key = t, n.fieldTransforms = e, n.type = wa.Transform, n.precondition = Ea.exists(!0), n
            }
            var xa, qa, Fa, Va, Ba, Ua = (t(Qa, xa = Ca), Qa.prototype.applyToRemoteDocument = function(t, e) {
                return this.verifyKeyMatches(t), Vr(null == e.transformResults, "Transform results received by DeleteMutation."), new Vs(this.key, e.version, {
                    hasCommittedMutations: !0
                })
            }, Qa.prototype.applyToLocalView = function(t, e, n) {
                return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && Vr(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new Vs(this.key, uo.forDeletedDoc())) : t
            }, Qa.prototype.extractBaseValue = function(t) {
                return null
            }, Qa.prototype.isEqual = function(t) {
                return t instanceof Qa && this.key.isEqual(t.key) && this.precondition.isEqual(t.precondition)
            }, Qa);

            function Qa(t, e) {
                var n = xa.call(this) || this;
                return n.key = t, n.precondition = e, n.type = wa.Delete, n
            }(Fa = qa = qa || {})[Fa.NullValue = 0] = "NullValue", Fa[Fa.BooleanValue = 1] = "BooleanValue", Fa[Fa.NumberValue = 2] = "NumberValue", Fa[Fa.TimestampValue = 3] = "TimestampValue", Fa[Fa.StringValue = 4] = "StringValue", Fa[Fa.BlobValue = 5] = "BlobValue", Fa[Fa.RefValue = 6] = "RefValue", Fa[Fa.GeoPointValue = 7] = "GeoPointValue", Fa[Fa.ArrayValue = 8] = "ArrayValue", Fa[Fa.ObjectValue = 9] = "ObjectValue", (Ba = Va = Va || {})[Ba.Default = 0] = "Default", Ba[Ba.Estimate = 1] = "Estimate", Ba[Ba.Previous = 2] = "Previous";
            var Ka = (ja.fromSnapshotOptions = function(t, e) {
                switch (t.serverTimestamps) {
                    case "estimate":
                        return new ja(Va.Estimate, e);
                    case "previous":
                        return new ja(Va.Previous, e);
                    case "none":
                    case void 0:
                        return new ja(Va.Default, e);
                    default:
                        return Fr("fromSnapshotOptions() called with invalid options.")
                }
            }, ja);

            function ja(t, e) {
                this.serverTimestampBehavior = t, this.timestampsInSnapshots = e
            }
            var Wa = (Ga.prototype.toString = function() {
                var t = this.value();
                return null === t ? "null" : t.toString()
            }, Ga.prototype.defaultCompareTo = function(t) {
                return Vr(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), bi(this.typeOrder, t.typeOrder)
            }, Ga);

            function Ga() {}
            var za, Ha = (t(Ya, za = Wa), Ya.prototype.value = function(t) {
                return null
            }, Ya.prototype.isEqual = function(t) {
                return t instanceof Ya
            }, Ya.prototype.compareTo = function(t) {
                return t instanceof Ya ? 0 : this.defaultCompareTo(t)
            }, Ya.INSTANCE = new Ya, Ya);

            function Ya() {
                var t = za.call(this) || this;
                return t.typeOrder = qa.NullValue, t.internalValue = null, t
            }
            var Xa, Ja = (t(Za, Xa = Wa), Za.prototype.value = function(t) {
                return this.internalValue
            }, Za.prototype.isEqual = function(t) {
                return t instanceof Za && this.internalValue === t.internalValue
            }, Za.prototype.compareTo = function(t) {
                return t instanceof Za ? bi(this, t) : this.defaultCompareTo(t)
            }, Za.of = function(t) {
                return t ? Za.TRUE : Za.FALSE
            }, Za.TRUE = new Za(!0), Za.FALSE = new Za(!1), Za);

            function Za(t) {
                var e = Xa.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.BooleanValue, e
            }
            var $a, ts = (t(es, $a = Wa), es.prototype.value = function(t) {
                return this.internalValue
            }, es.prototype.compareTo = function(t) {
                return t instanceof es ? function(t, e) {
                    return t < e ? -1 : e < t ? 1 : t === e ? 0 : isNaN(t) ? isNaN(e) ? 0 : -1 : 1
                }(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
            }, es);

            function es(t) {
                var e = $a.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.NumberValue, e
            }

            function ns(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            var rs, is = (t(os, rs = ts), os.prototype.isEqual = function(t) {
                return t instanceof os && ns(this.internalValue, t.internalValue)
            }, os);

            function os() {
                return null !== rs && rs.apply(this, arguments) || this
            }
            var as, ss = (t(us, as = ts), us.prototype.isEqual = function(t) {
                return t instanceof us && ns(this.internalValue, t.internalValue)
            }, us.NAN = new us(NaN), us.POSITIVE_INFINITY = new us(1 / 0), us.NEGATIVE_INFINITY = new us(-1 / 0), us);

            function us() {
                return null !== as && as.apply(this, arguments) || this
            }
            var cs, hs = (t(ls, cs = Wa), ls.prototype.value = function(t) {
                return this.internalValue
            }, ls.prototype.isEqual = function(t) {
                return t instanceof ls && this.internalValue === t.internalValue
            }, ls.prototype.compareTo = function(t) {
                return t instanceof ls ? bi(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
            }, ls);

            function ls(t) {
                var e = cs.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.StringValue, e
            }
            var fs, ds = (t(ps, fs = Wa), ps.prototype.value = function(t) {
                return !t || t.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate()
            }, ps.prototype.isEqual = function(t) {
                return t instanceof ps && this.internalValue.isEqual(t.internalValue)
            }, ps.prototype.compareTo = function(t) {
                return t instanceof ps ? this.internalValue._compareTo(t.internalValue) : t instanceof ys ? -1 : this.defaultCompareTo(t)
            }, ps);

            function ps(t) {
                var e = fs.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.TimestampValue, e
            }
            var ms, ys = (t(gs, ms = Wa), gs.prototype.value = function(t) {
                return t && t.serverTimestampBehavior === Va.Estimate ? new ds(this.localWriteTime).value(t) : t && t.serverTimestampBehavior === Va.Previous && this.previousValue ? this.previousValue.value(t) : null
            }, gs.prototype.isEqual = function(t) {
                return t instanceof gs && this.localWriteTime.isEqual(t.localWriteTime)
            }, gs.prototype.compareTo = function(t) {
                return t instanceof gs ? this.localWriteTime._compareTo(t.localWriteTime) : t instanceof ds ? 1 : this.defaultCompareTo(t)
            }, gs.prototype.toString = function() {
                return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">"
            }, gs);

            function gs(t, e) {
                var n = ms.call(this) || this;
                return n.localWriteTime = t, n.previousValue = e, n.typeOrder = qa.TimestampValue, n
            }
            var vs, bs = (t(ws, vs = Wa), ws.prototype.value = function(t) {
                return this.internalValue
            }, ws.prototype.isEqual = function(t) {
                return t instanceof ws && this.internalValue.isEqual(t.internalValue)
            }, ws.prototype.compareTo = function(t) {
                return t instanceof ws ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
            }, ws);

            function ws(t) {
                var e = vs.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.BlobValue, e
            }
            var Ss, Ts = (t(Es, Ss = Wa), Es.prototype.value = function(t) {
                return this.key
            }, Es.prototype.isEqual = function(t) {
                return t instanceof Es && this.key.isEqual(t.key) && this.databaseId.isEqual(t.databaseId)
            }, Es.prototype.compareTo = function(t) {
                if (t instanceof Es) {
                    var e = this.databaseId.compareTo(t.databaseId);
                    return 0 !== e ? e : Ki.comparator(this.key, t.key)
                }
                return this.defaultCompareTo(t)
            }, Es);

            function Es(t, e) {
                var n = Ss.call(this) || this;
                return n.databaseId = t, n.key = e, n.typeOrder = qa.RefValue, n
            }
            var Is, Cs = (t(Ds, Is = Wa), Ds.prototype.value = function(t) {
                return this.internalValue
            }, Ds.prototype.isEqual = function(t) {
                return t instanceof Ds && this.internalValue.isEqual(t.internalValue)
            }, Ds.prototype.compareTo = function(t) {
                return t instanceof Ds ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
            }, Ds);

            function Ds(t) {
                var e = Is.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.GeoPointValue, e
            }
            var Ns, As = (t(ks, Ns = Wa), ks.prototype.value = function(n) {
                var r = {};
                return this.internalValue.inorderTraversal(function(t, e) {
                    r[t] = e.value(n)
                }), r
            }, ks.prototype.forEach = function(t) {
                this.internalValue.inorderTraversal(t)
            }, ks.prototype.isEqual = function(t) {
                if (t instanceof ks) {
                    for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                        var r = e.getNext(),
                            i = n.getNext();
                        if (r.key !== i.key || !r.value.isEqual(i.value)) return !1
                    }
                    return !e.hasNext() && !n.hasNext()
                }
                return !1
            }, ks.prototype.compareTo = function(t) {
                if (t instanceof ks) {
                    for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                        var r = e.getNext(),
                            i = n.getNext(),
                            o = bi(r.key, i.key) || r.value.compareTo(i.value);
                        if (o) return o
                    }
                    return bi(e.hasNext(), n.hasNext())
                }
                return this.defaultCompareTo(t)
            }, ks.prototype.set = function(t, e) {
                if (Vr(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), e);
                var n = this.child(t.firstSegment());
                n instanceof ks || (n = ks.EMPTY);
                var r = n.set(t.popFirst(), e);
                return this.setChild(t.firstSegment(), r)
            }, ks.prototype.delete = function(t) {
                if (Vr(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new ks(this.internalValue.remove(t.firstSegment()));
                var e = this.child(t.firstSegment());
                if (e instanceof ks) {
                    var n = e.delete(t.popFirst());
                    return new ks(this.internalValue.insert(t.firstSegment(), n))
                }
                return this
            }, ks.prototype.contains = function(t) {
                return null !== this.field(t)
            }, ks.prototype.field = function(t) {
                Vr(!t.isEmpty(), "Can't get field of empty path");
                var e = this;
                return t.forEach(function(t) {
                    e = e instanceof ks ? e.internalValue.get(t) : null
                }), e
            }, ks.prototype.fieldMask = function() {
                var i = new bo(Ui.comparator);
                return this.internalValue.forEach(function(t, e) {
                    var n = new Ui([t]);
                    if (e instanceof ks) {
                        var r = e.fieldMask().fields;
                        r.isEmpty() ? i = i.add(n) : r.forEach(function(t) {
                            i = i.add(n.child(t))
                        })
                    } else i = i.add(n)
                }), ya.fromSet(i)
            }, ks.prototype.toString = function() {
                return this.internalValue.toString()
            }, ks.prototype.child = function(t) {
                return this.internalValue.get(t) || void 0
            }, ks.prototype.setChild = function(t, e) {
                return new ks(this.internalValue.insert(t, e))
            }, ks.EMPTY = new ks(new ho(bi)), ks);

            function ks(t) {
                var e = Ns.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.ObjectValue, e
            }
            var Rs, Ms = (t(Os, Rs = Wa), Os.prototype.value = function(e) {
                return this.internalValue.map(function(t) {
                    return t.value(e)
                })
            }, Os.prototype.contains = function(t) {
                for (var e = 0, n = this.internalValue; e < n.length; e++)
                    if (n[e].isEqual(t)) return !0;
                return !1
            }, Os.prototype.forEach = function(t) {
                this.internalValue.forEach(t)
            }, Os.prototype.isEqual = function(t) {
                if (t instanceof Os) {
                    if (this.internalValue.length !== t.internalValue.length) return !1;
                    for (var e = 0; e < this.internalValue.length; e++)
                        if (!this.internalValue[e].isEqual(t.internalValue[e])) return !1;
                    return !0
                }
                return !1
            }, Os.prototype.compareTo = function(t) {
                if (t instanceof Os) {
                    for (var e = Math.min(this.internalValue.length, t.internalValue.length), n = 0; n < e; n++) {
                        var r = this.internalValue[n].compareTo(t.internalValue[n]);
                        if (r) return r
                    }
                    return bi(this.internalValue.length, t.internalValue.length)
                }
                return this.defaultCompareTo(t)
            }, Os.prototype.toString = function() {
                return "[" + this.internalValue.map(function(t) {
                    return t.toString()
                }).join(",") + "]"
            }, Os);

            function Os(t) {
                var e = Rs.call(this) || this;
                return e.internalValue = t, e.typeOrder = qa.ArrayValue, e
            }
            var _s = (Ls.compareByKey = function(t, e) {
                return Ki.comparator(t.key, e.key)
            }, Ls);

            function Ls(t, e) {
                this.key = t, this.version = e
            }
            var Ps, xs = (t(qs, Ps = _s), qs.prototype.field = function(t) {
                if (this.objectValue) return this.objectValue.field(t);
                this.fieldValueCache || (this.fieldValueCache = new Map);
                var e = t.canonicalString(),
                    n = this.fieldValueCache.get(e);
                if (void 0 === n) {
                    var r = this.getProtoField(t);
                    n = void 0 === r ? null : this.converter(r), this.fieldValueCache.set(e, n)
                }
                return n
            }, qs.prototype.data = function() {
                var n = this;
                if (!this.objectValue) {
                    var r = As.EMPTY;
                    Jr(this.proto.fields || {}, function(t, e) {
                        r = r.set(new Ui([t]), n.converter(e))
                    }), this.objectValue = r, this.fieldValueCache = void 0
                }
                return this.objectValue
            }, qs.prototype.value = function() {
                return this.data().value()
            }, qs.prototype.isEqual = function(t) {
                return t instanceof qs && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations && this.data().isEqual(t.data())
            }, qs.prototype.toString = function() {
                return "Document(" + this.key + ", " + this.version + ", " + this.data().toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
            }, Object.defineProperty(qs.prototype, "hasPendingWrites", {
                get: function() {
                    return this.hasLocalMutations || this.hasCommittedMutations
                },
                enumerable: !0,
                configurable: !0
            }), qs.prototype.getProtoField = function(t) {
                Vr(void 0 !== this.proto, "Can only call getProtoField() when proto is defined");
                for (var e = this.proto.fields ? this.proto.fields[t.firstSegment()] : void 0, n = 1; n < t.length; ++n) {
                    if (!e || !e.mapValue || !e.mapValue.fields) return;
                    e = e.mapValue.fields[t.get(n)]
                }
                return e
            }, qs.compareByField = function(t, e, n) {
                var r = e.field(t),
                    i = n.field(t);
                return null !== r && null !== i ? r.compareTo(i) : Fr("Trying to compare documents on fields that don't exist")
            }, qs);

            function qs(t, e, n, r, i, o) {
                var a = Ps.call(this, t, e) || this;
                return a.objectValue = r, a.proto = i, a.converter = o, Vr(void 0 !== a.objectValue || void 0 !== a.proto && void 0 !== a.converter, "If objectValue is not defined, proto and converter need to be set."), a.hasLocalMutations = !!n.hasLocalMutations, a.hasCommittedMutations = !!n.hasCommittedMutations, a
            }
            var Fs, Vs = (t(Bs, Fs = _s), Bs.prototype.toString = function() {
                return "NoDocument(" + this.key + ", " + this.version + ")"
            }, Object.defineProperty(Bs.prototype, "hasPendingWrites", {
                get: function() {
                    return this.hasCommittedMutations
                },
                enumerable: !0,
                configurable: !0
            }), Bs.prototype.isEqual = function(t) {
                return t instanceof Bs && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
            }, Bs);

            function Bs(t, e, n) {
                var r = Fs.call(this, t, e) || this;
                return r.hasCommittedMutations = !(!n || !n.hasCommittedMutations), r
            }
            var Us, Qs = (t(Ks, Us = _s), Ks.prototype.toString = function() {
                return "UnknownDocument(" + this.key + ", " + this.version + ")"
            }, Object.defineProperty(Ks.prototype, "hasPendingWrites", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), Ks.prototype.isEqual = function(t) {
                return t instanceof Ks && t.version.isEqual(this.version) && t.key.isEqual(this.key)
            }, Ks);

            function Ks() {
                return null !== Us && Us.apply(this, arguments) || this
            }
            var js = (Ws.prototype.get = function(t) {
                var e = this.mapKeyFn(t),
                    n = this.inner[e];
                if (void 0 !== n)
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r],
                            a = o[0],
                            s = o[1];
                        if (a.isEqual(t)) return s
                    }
            }, Ws.prototype.has = function(t) {
                return void 0 !== this.get(t)
            }, Ws.prototype.set = function(t, e) {
                var n = this.mapKeyFn(t),
                    r = this.inner[n];
                if (void 0 !== r) {
                    for (var i = 0; i < r.length; i++)
                        if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                    r.push([t, e])
                } else this.inner[n] = [
                    [t, e]
                ]
            }, Ws.prototype.delete = function(t) {
                var e = this.mapKeyFn(t),
                    n = this.inner[e];
                if (void 0 === n) return !1;
                for (var r = 0; r < n.length; r++)
                    if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                return !1
            }, Ws.prototype.forEach = function(s) {
                Jr(this.inner, function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n],
                            o = i[0],
                            a = i[1];
                        s(o, a)
                    }
                })
            }, Ws.prototype.isEmpty = function() {
                return Zr(this.inner)
            }, Ws);

            function Ws(t) {
                this.mapKeyFn = t, this.inner = {}
            }
            var Gs = (Object.defineProperty(zs.prototype, "readTime", {
                get: function() {
                    return Vr(void 0 !== this._readTime, "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."), this._readTime
                },
                set: function(t) {
                    Vr(void 0 === this._readTime || this._readTime.isEqual(t), "All changes in a RemoteDocumentChangeBuffer must have the same read time"), this._readTime = t
                },
                enumerable: !0,
                configurable: !0
            }), zs.prototype.addEntry = function(t, e) {
                this.assertNotApplied(), this.readTime = e, this.changes.set(t.key, t)
            }, zs.prototype.removeEntry = function(t, e) {
                this.assertNotApplied(), e && (this.readTime = e), this.changes.set(t, null)
            }, zs.prototype.getEntry = function(t, e) {
                this.assertNotApplied();
                var n = this.changes.get(e);
                return void 0 !== n ? Fo.resolve(n) : this.getFromCache(t, e)
            }, zs.prototype.getEntries = function(t, e) {
                return this.getAllFromCache(t, e)
            }, zs.prototype.apply = function(t) {
                return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t)
            }, zs.prototype.assertNotApplied = function() {
                Vr(!this.changesApplied, "Changes have already been applied.")
            }, zs);

            function zs() {
                this.changes = new js(function(t) {
                    return t.toString()
                }), this.changesApplied = !1
            }
            var Hs, Ys = (Xs.prototype.addEntry = function(t, e, n) {
                return $s(t).put(tu(e), n)
            }, Xs.prototype.removeEntry = function(t, e) {
                var n = $s(t),
                    r = tu(e);
                return n.delete(r)
            }, Xs.prototype.updateMetadata = function(e, n) {
                var r = this;
                return this.getMetadata(e).next(function(t) {
                    return t.byteSize += n, r.setMetadata(e, t)
                })
            }, Xs.prototype.getEntry = function(t, e) {
                var n = this;
                return $s(t).get(tu(e)).next(function(t) {
                    return n.maybeDecodeDocument(t)
                })
            }, Xs.prototype.getSizedEntry = function(t, e) {
                var n = this;
                return $s(t).get(tu(e)).next(function(t) {
                    var e = n.maybeDecodeDocument(t);
                    return e ? {
                        maybeDocument: e,
                        size: eu(t)
                    } : null
                })
            }, Xs.prototype.getEntries = function(t, e) {
                var r = this,
                    i = Co();
                return this.forEachDbEntry(t, e, function(t, e) {
                    var n = r.maybeDecodeDocument(e);
                    i = i.insert(t, n)
                }).next(function() {
                    return i
                })
            }, Xs.prototype.getSizedEntries = function(t, e) {
                var r = this,
                    i = Co(),
                    o = new ho(Ki.comparator);
                return this.forEachDbEntry(t, e, function(t, e) {
                    var n = r.maybeDecodeDocument(e);
                    o = n ? (i = i.insert(t, n), o.insert(t, eu(e))) : (i = i.insert(t, null), o.insert(t, 0))
                }).next(function() {
                    return {
                        maybeDocuments: i,
                        sizeMap: o
                    }
                })
            }, Xs.prototype.forEachDbEntry = function(t, e, i) {
                if (e.isEmpty()) return Fo.resolve();
                var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                    o = e.getIterator(),
                    a = o.getNext();
                return $s(t).iterate({
                    range: n
                }, function(t, e, n) {
                    for (var r = Ki.fromSegments(t); a && Ki.comparator(a, r) < 0;) i(a, null), a = o.getNext();
                    a && a.isEqual(r) && (i(a, e), a = o.hasNext() ? o.getNext() : null), a ? n.skip(a.path.toArray()) : n.done()
                }).next(function() {
                    for (; a;) i(a, null), a = o.hasNext() ? o.getNext() : null
                })
            }, Xs.prototype.getDocumentsMatchingQuery = function(t, i, e) {
                var o = this;
                Vr(!i.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var a = No(),
                    s = i.path.length + 1,
                    n = {};
                if (e.isEqual(uo.MIN)) {
                    var r = i.path.toArray();
                    n.range = IDBKeyRange.lowerBound(r)
                } else {
                    var u = i.path.toArray(),
                        c = this.serializer.toDbTimestampKey(e);
                    n.range = IDBKeyRange.lowerBound([u, c], !0), n.index = wu.collectionReadTimeIndex
                }
                return $s(t).iterate(n, function(t, e, n) {
                    if (t.length === s) {
                        var r = o.serializer.fromDbRemoteDocument(e);
                        i.path.isPrefixOf(r.key.path) ? r instanceof xs && i.matches(r) && (a = a.insert(r.key, r)) : n.done()
                    }
                }).next(function() {
                    return a
                })
            }, Xs.prototype.getNewDocumentChanges = function(t, e) {
                var r = this,
                    i = Io(),
                    o = this.serializer.toDbTimestampKey(e),
                    n = $s(t),
                    a = IDBKeyRange.lowerBound(o, !0);
                return n.iterate({
                    index: wu.readTimeIndex,
                    range: a
                }, function(t, e) {
                    var n = r.serializer.fromDbRemoteDocument(e);
                    i = i.insert(n.key, n), o = e.readTime
                }).next(function() {
                    return {
                        changedDocs: i,
                        readTime: r.serializer.fromDbTimestampKey(o)
                    }
                })
            }, Xs.prototype.getLastDocumentChange = function(t) {
                var r, i = this,
                    e = $s(t),
                    o = uo.MIN;
                return e.iterate({
                    index: wu.readTimeIndex,
                    reverse: !0
                }, function(t, e, n) {
                    r = i.serializer.fromDbRemoteDocument(e), e.readTime && (o = i.serializer.fromDbTimestampKey(e.readTime)), n.done()
                }).next(function() {
                    return {
                        changedDoc: r,
                        readTime: o
                    }
                })
            }, Xs.prototype.newChangeBuffer = function(t) {
                return new Xs.RemoteDocumentChangeBuffer(this, !!t && t.trackRemovals)
            }, Xs.prototype.getSize = function(t) {
                return this.getMetadata(t).next(function(t) {
                    return t.byteSize
                })
            }, Xs.prototype.getMetadata = function(t) {
                return Zs(t).get(Tu.key).next(function(t) {
                    return Vr(!!t, "Missing document cache metadata"), t
                })
            }, Xs.prototype.setMetadata = function(t, e) {
                return Zs(t).put(Tu.key, e)
            }, Xs.prototype.maybeDecodeDocument = function(t) {
                if (t) {
                    var e = this.serializer.fromDbRemoteDocument(t);
                    return e instanceof Vs && e.version.isEqual(uo.forDeletedDoc()) ? null : e
                }
                return null
            }, Xs.RemoteDocumentChangeBuffer = (t(Js, Hs = Gs), Js.prototype.applyChanges = function(a) {
                var s = this,
                    u = [],
                    c = 0,
                    h = new bo(function(t, e) {
                        return bi(t.canonicalString(), e.canonicalString())
                    });
                return this.changes.forEach(function(t, e) {
                    var n = s.documentSizes.get(t);
                    if (Vr(void 0 !== n, "Cannot modify a document that wasn't read (for " + t + ")"), e) {
                        Vr(!s.readTime.isEqual(uo.MIN), "Cannot add a document with a read time of zero");
                        var r = s.documentCache.serializer.toDbRemoteDocument(e, s.readTime);
                        h = h.add(t.path.popLast());
                        var i = eu(r);
                        c += i - n, u.push(s.documentCache.addEntry(a, t, r))
                    } else if (c -= n, s.trackRemovals) {
                        var o = s.documentCache.serializer.toDbRemoteDocument(new Vs(t, uo.forDeletedDoc()), s.readTime);
                        u.push(s.documentCache.addEntry(a, t, o))
                    } else u.push(s.documentCache.removeEntry(a, t))
                }), h.forEach(function(t) {
                    u.push(s.documentCache.indexManager.addToCollectionParentIndex(a, t))
                }), u.push(this.documentCache.updateMetadata(a, c)), Fo.waitFor(u)
            }, Js.prototype.getFromCache = function(t, e) {
                var n = this;
                return this.documentCache.getSizedEntry(t, e).next(function(t) {
                    return null === t ? (n.documentSizes.set(e, 0), null) : (n.documentSizes.set(e, t.size), t.maybeDocument)
                })
            }, Js.prototype.getAllFromCache = function(t, e) {
                var n = this;
                return this.documentCache.getSizedEntries(t, e).next(function(t) {
                    var e = t.maybeDocuments;
                    return t.sizeMap.forEach(function(t, e) {
                        n.documentSizes.set(t, e)
                    }), e
                })
            }, Js), Xs);

            function Xs(t, e) {
                this.serializer = t, this.indexManager = e
            }

            function Js(t, e) {
                var n = Hs.call(this) || this;
                return n.documentCache = t, n.trackRemovals = e, n.documentSizes = new js(function(t) {
                    return t.toString()
                }), n
            }

            function Zs(t) {
                return cc.getStore(t, Tu.store)
            }

            function $s(t) {
                return cc.getStore(t, wu.store)
            }

            function tu(t) {
                return t.path.toArray()
            }

            function eu(t) {
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw Fr("Unknown remote document type");
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            var nu = (ru.prototype.addToCollectionParentIndex = function(t, e) {
                return this.collectionParentIndex.add(e), Fo.resolve()
            }, ru.prototype.getCollectionParents = function(t, e) {
                return Fo.resolve(this.collectionParentIndex.getEntries(e))
            }, ru);

            function ru() {
                this.collectionParentIndex = new iu
            }
            var iu = (ou.prototype.add = function(t) {
                Vr(t.length % 2 == 1, "Expected a collection path.");
                var e = t.lastSegment(),
                    n = t.popLast(),
                    r = this.index[e] || new bo(qi.comparator),
                    i = !r.has(n);
                return this.index[e] = r.add(n), i
            }, ou.prototype.has = function(t) {
                var e = t.lastSegment(),
                    n = t.popLast(),
                    r = this.index[e];
                return r && r.has(n)
            }, ou.prototype.getEntries = function(t) {
                return (this.index[t] || new bo(qi.comparator)).toArray()
            }, ou);

            function ou() {
                this.index = {}
            }
            var au = 9,
                su = (uu.prototype.createOrUpgrade = function(t, e, n, r) {
                    var i = this;
                    Vr(n < r && 0 <= n && r <= au, "Unexpected schema upgrade from v" + n + " to v{toVersion}.");
                    var o = new ra(e);
                    n < 1 && 1 <= r && (function(t) {
                        t.createObjectStore(hu.store)
                    }(t), function(t) {
                        t.createObjectStore(fu.store, {
                            keyPath: fu.keyPath
                        }), t.createObjectStore(pu.store, {
                            keyPath: pu.keyPath,
                            autoIncrement: !0
                        }).createIndex(pu.userMutationsIndex, pu.userMutationsKeyPath, {
                            unique: !0
                        }), t.createObjectStore(yu.store)
                    }(t), Ou(t), function(t) {
                        t.createObjectStore(wu.store)
                    }(t));
                    var a = Fo.resolve();
                    return n < 3 && 3 <= r && (0 !== n && (function(t) {
                        t.deleteObjectStore(Du.store), t.deleteObjectStore(Iu.store), t.deleteObjectStore(Au.store)
                    }(t), Ou(t)), a = a.next(function() {
                        return function(t) {
                            var e = t.store(Au.store),
                                n = new Au(0, 0, uo.MIN.toTimestamp(), 0);
                            return e.put(Au.key, n)
                        }(o)
                    })), n < 4 && 4 <= r && (0 !== n && (a = a.next(function() {
                        return function(r, i) {
                            return i.store(pu.store).loadAll().next(function(t) {
                                r.deleteObjectStore(pu.store), r.createObjectStore(pu.store, {
                                    keyPath: pu.keyPath,
                                    autoIncrement: !0
                                }).createIndex(pu.userMutationsIndex, pu.userMutationsKeyPath, {
                                    unique: !0
                                });
                                var e = i.store(pu.store),
                                    n = t.map(function(t) {
                                        return e.put(t)
                                    });
                                return Fo.waitFor(n)
                            })
                        }(t, o)
                    })), a = a.next(function() {
                        ! function(t) {
                            t.createObjectStore(_u.store, {
                                keyPath: _u.keyPath
                            })
                        }(t)
                    })), n < 5 && 5 <= r && (a = a.next(function() {
                        return i.removeAcknowledgedMutations(o)
                    })), n < 6 && 6 <= r && (a = a.next(function() {
                        return function(t) {
                            t.createObjectStore(Tu.store)
                        }(t), i.addDocumentGlobal(o)
                    })), n < 7 && 7 <= r && (a = a.next(function() {
                        return i.ensureSequenceNumbers(o)
                    })), n < 8 && 8 <= r && (a = a.next(function() {
                        return i.createCollectionParentIndex(t, o)
                    })), n < 9 && 9 <= r && (a = a.next(function() {
                        ! function(t) {
                            t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges")
                        }(t),
                        function(t) {
                            var e = t.objectStore(wu.store);
                            e.createIndex(wu.readTimeIndex, wu.readTimeIndexPath, {
                                unique: !1
                            }), e.createIndex(wu.collectionReadTimeIndex, wu.collectionReadTimeIndexPath, {
                                unique: !1
                            })
                        }(e)
                    })), a
                }, uu.prototype.addDocumentGlobal = function(e) {
                    var n = 0;
                    return e.store(wu.store).iterate(function(t, e) {
                        n += eu(e)
                    }).next(function() {
                        var t = new Tu(n);
                        return e.store(Tu.store).put(Tu.key, t)
                    })
                }, uu.prototype.removeAcknowledgedMutations = function(r) {
                    var i = this,
                        t = r.store(fu.store),
                        e = r.store(pu.store);
                    return t.loadAll().next(function(t) {
                        return Fo.forEach(t, function(n) {
                            var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                            return e.loadAll(pu.userMutationsIndex, t).next(function(t) {
                                return Fo.forEach(t, function(t) {
                                    Vr(t.userId === n.userId, "Cannot process batch " + t.batchId + " from unexpected user");
                                    var e = i.serializer.fromDbMutationBatch(t);
                                    return Ko(r, n.userId, e).next(function() {})
                                })
                            })
                        })
                    })
                }, uu.prototype.ensureSequenceNumbers = function(t) {
                    var a = t.store(Du.store),
                        e = t.store(wu.store);
                    return pa(t).next(function(i) {
                        var o = [];
                        return e.iterate(function(t, e) {
                            var n = new qi(t),
                                r = function(t) {
                                    return [0, no(t)]
                                }(n);
                            o.push(a.get(r).next(function(t) {
                                return t ? Fo.resolve() : function(t) {
                                    return a.put(new Du(0, no(t), i))
                                }(n)
                            }))
                        }).next(function() {
                            return Fo.waitFor(o)
                        })
                    })
                }, uu.prototype.createCollectionParentIndex = function(t, e) {
                    function i(t) {
                        if (o.add(t)) {
                            var e = t.lastSegment(),
                                n = t.popLast();
                            return r.put({
                                collectionId: e,
                                parent: no(n)
                            })
                        }
                    }
                    t.createObjectStore(Ru.store, {
                        keyPath: Ru.keyPath
                    });
                    var r = e.store(Ru.store),
                        o = new iu;
                    return e.store(wu.store).iterate({
                        keysOnly: !0
                    }, function(t, e) {
                        var n = new qi(t);
                        return i(n.popLast())
                    }).next(function() {
                        return e.store(yu.store).iterate({
                            keysOnly: !0
                        }, function(t, e) {
                            t[0];
                            var n = t[1],
                                r = (t[2], oo(n));
                            return i(r.popLast())
                        })
                    })
                }, uu);

            function uu(t) {
                this.serializer = t
            }
            var cu = function(t, e) {
                    this.seconds = t, this.nanoseconds = e
                },
                hu = (lu.store = "owner", lu.key = "owner", lu);

            function lu(t, e, n) {
                this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
            }
            var fu = (du.store = "mutationQueues", du.keyPath = "userId", du);

            function du(t, e, n) {
                this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
            }
            var pu = (mu.store = "mutations", mu.keyPath = "batchId", mu.userMutationsIndex = "userMutationsIndex", mu.userMutationsKeyPath = ["userId", "batchId"], mu);

            function mu(t, e, n, r, i) {
                this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
            }
            var yu = (gu.prefixForUser = function(t) {
                return [t]
            }, gu.prefixForPath = function(t, e) {
                return [t, no(e)]
            }, gu.key = function(t, e, n) {
                return [t, no(e), n]
            }, gu.store = "documentMutations", gu.PLACEHOLDER = new gu, gu);

            function gu() {}
            var vu = function(t, e) {
                    this.path = t, this.readTime = e
                },
                bu = function(t, e) {
                    this.path = t, this.version = e
                },
                wu = (Su.store = "remoteDocuments", Su.readTimeIndex = "readTimeIndex", Su.readTimeIndexPath = "readTime", Su.collectionReadTimeIndex = "collectionReadTimeIndex", Su.collectionReadTimeIndexPath = ["parentPath", "readTime"], Su);

            function Su(t, e, n, r, i, o) {
                this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
            }
            var Tu = (Eu.store = "remoteDocumentGlobal", Eu.key = "remoteDocumentGlobalKey", Eu);

            function Eu(t) {
                this.byteSize = t
            }
            var Iu = (Cu.store = "targets", Cu.keyPath = "targetId", Cu.queryTargetsIndexName = "queryTargetsIndex", Cu.queryTargetsKeyPath = ["canonicalId", "targetId"], Cu);

            function Cu(t, e, n, r, i, o, a) {
                this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = a
            }
            var Du = (Nu.store = "targetDocuments", Nu.keyPath = ["targetId", "path"], Nu.documentTargetsIndex = "documentTargetsIndex", Nu.documentTargetsKeyPath = ["path", "targetId"], Nu);

            function Nu(t, e, n) {
                this.targetId = t, this.path = e, Vr(0 === t == (void 0 !== (this.sequenceNumber = n)), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")
            }
            var Au = (ku.key = "targetGlobalKey", ku.store = "targetGlobal", ku);

            function ku(t, e, n, r) {
                this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
            }
            var Ru = (Mu.store = "collectionParents", Mu.keyPath = ["collectionId", "parent"], Mu);

            function Mu(t, e) {
                this.collectionId = t, this.parent = e
            }

            function Ou(t) {
                t.createObjectStore(Du.store, {
                    keyPath: Du.keyPath
                }).createIndex(Du.documentTargetsIndex, Du.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Iu.store, {
                    keyPath: Iu.keyPath
                }).createIndex(Iu.queryTargetsIndexName, Iu.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Au.store)
            }
            var _u = (Lu.store = "clientMetadata", Lu.keyPath = "clientId", Lu);

            function Lu(t, e, n, r) {
                this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
            }
            var Pu, xu, qu = a(a(a([fu.store, pu.store, yu.store, wu.store, Iu.store, hu.store, Au.store, Du.store], [_u.store]), [Tu.store]), [Ru.store]),
                Fu = (Vu.prototype.addToCollectionParentIndex = function(t, e) {
                    var n = this;
                    if (Vr(e.length % 2 == 1, "Expected a collection path."), this.collectionParentsCache.has(e)) return Fo.resolve();
                    var r = e.lastSegment(),
                        i = e.popLast();
                    return t.addOnCommittedListener(function() {
                        n.collectionParentsCache.add(e)
                    }), Bu(t).put({
                        collectionId: r,
                        parent: no(i)
                    })
                }, Vu.prototype.getCollectionParents = function(t, i) {
                    var o = [],
                        e = IDBKeyRange.bound([i, ""], [Si(i), ""], !1, !0);
                    return Bu(t).loadAll(e).next(function(t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e];
                            if (r.collectionId !== i) break;
                            o.push(oo(r.parent))
                        }
                        return o
                    })
                }, Vu);

            function Vu() {
                this.collectionParentsCache = new iu
            }

            function Bu(t) {
                return cc.getStore(t, Ru.store)
            }(xu = Pu = Pu || {})[xu.Listen = 0] = "Listen", xu[xu.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", xu[xu.LimboResolution = 2] = "LimboResolution";
            var Uu = (Qu.prototype.withSequenceNumber = function(t) {
                return new Qu(this.query, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken)
            }, Qu.prototype.withResumeToken = function(t, e) {
                return new Qu(this.query, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t)
            }, Qu.prototype.withLastLimboFreeSnapshotVersion = function(t) {
                return new Qu(this.query, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken)
            }, Qu.prototype.isEqual = function(t) {
                return this.targetId === t.targetId && this.purpose === t.purpose && this.sequenceNumber === t.sequenceNumber && this.snapshotVersion.isEqual(t.snapshotVersion) && this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion) && this.resumeToken === t.resumeToken && this.query.isEqual(t.query)
            }, Qu);

            function Qu(t, e, n, r, i, o, a) {
                void 0 === i && (i = uo.MIN), void 0 === o && (o = uo.MIN), void 0 === a && (a = Qr()), this.query = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = a
            }
            var Ku = (ju.prototype.fromDbRemoteDocument = function(t) {
                if (t.document) return this.remoteSerializer.fromDocument(t.document, !!t.hasCommittedMutations);
                if (t.noDocument) {
                    var e = Ki.fromSegments(t.noDocument.path),
                        n = this.fromDbTimestamp(t.noDocument.readTime);
                    return new Vs(e, n, {
                        hasCommittedMutations: !!t.hasCommittedMutations
                    })
                }
                return t.unknownDocument ? (e = Ki.fromSegments(t.unknownDocument.path), n = this.fromDbTimestamp(t.unknownDocument.version), new Qs(e, n)) : Fr("Unexpected DbRemoteDocument")
            }, ju.prototype.toDbRemoteDocument = function(t, e) {
                var n = this.toDbTimestampKey(e),
                    r = t.key.path.popLast().toArray();
                if (t instanceof xs) {
                    var i = t.proto ? t.proto : this.remoteSerializer.toDocument(t),
                        o = t.hasCommittedMutations;
                    return new wu(null, null, i, o, n, r)
                }
                if (t instanceof Vs) {
                    var a = t.key.path.toArray(),
                        s = this.toDbTimestamp(t.version);
                    return o = t.hasCommittedMutations, new wu(null, new vu(a, s), null, o, n, r)
                }
                if (t instanceof Qs) {
                    a = t.key.path.toArray();
                    var u = this.toDbTimestamp(t.version);
                    return new wu(new bu(a, u), null, null, !0, n, r)
                }
                return Fr("Unexpected MaybeDocument")
            }, ju.prototype.toDbTimestampKey = function(t) {
                var e = t.toTimestamp();
                return [e.seconds, e.nanoseconds]
            }, ju.prototype.fromDbTimestampKey = function(t) {
                var e = new ao(t[0], t[1]);
                return uo.fromTimestamp(e)
            }, ju.prototype.toDbTimestamp = function(t) {
                var e = t.toTimestamp();
                return new cu(e.seconds, e.nanoseconds)
            }, ju.prototype.fromDbTimestamp = function(t) {
                var e = new ao(t.seconds, t.nanoseconds);
                return uo.fromTimestamp(e)
            }, ju.prototype.toDbMutationBatch = function(t, e) {
                var n = this,
                    r = e.baseMutations.map(function(t) {
                        return n.remoteSerializer.toMutation(t)
                    }),
                    i = e.mutations.map(function(t) {
                        return n.remoteSerializer.toMutation(t)
                    });
                return new pu(t, e.batchId, e.localWriteTime.toMillis(), r, i)
            }, ju.prototype.fromDbMutationBatch = function(t) {
                var e = this,
                    n = (t.baseMutations || []).map(function(t) {
                        return e.remoteSerializer.fromMutation(t)
                    }),
                    r = t.mutations.map(function(t) {
                        return e.remoteSerializer.fromMutation(t)
                    }),
                    i = ao.fromMillis(t.localWriteTimeMs);
                return new Lo(t.batchId, i, n, r)
            }, ju.prototype.toDbResourcePaths = function(t) {
                var e = [];
                return t.forEach(function(t) {
                    e.push(no(t.path))
                }), e
            }, ju.prototype.fromDbResourcePaths = function(t) {
                for (var e = Mo(), n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    e = e.add(new Ki(oo(i)))
                }
                return e
            }, ju.prototype.fromDbTarget = function(t) {
                var e, n = this.fromDbTimestamp(t.readTime),
                    r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.fromDbTimestamp(t.lastLimboFreeSnapshotVersion) : uo.MIN,
                    i = t.resumeToken;
                return e = function(t) {
                    return void 0 !== t.documents
                }(t.query) ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new Uu(e, t.targetId, Pu.Listen, t.lastListenSequenceNumber, n, r, i)
            }, ju.prototype.toDbTarget = function(t) {
                Vr(Pu.Listen === t.purpose, "Only queries with purpose " + Pu.Listen + " may be stored, got " + t.purpose);
                var e, n, r = this.toDbTimestamp(t.snapshotVersion),
                    i = this.toDbTimestamp(t.lastLimboFreeSnapshotVersion);
                return e = t.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.query) : this.remoteSerializer.toQueryTarget(t.query), n = t.resumeToken instanceof Uint8Array ? (Vr("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence ."), t.resumeToken.toString()) : t.resumeToken, new Iu(t.targetId, t.query.canonicalId(), r, n, t.sequenceNumber, i, e)
            }, ju);

            function ju(t) {
                this.remoteSerializer = t
            }

            function Wu(t, e) {
                var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    a = bi(n, i);
                return 0 === a ? bi(r, o) : a
            }
            var Gu = (zu.prototype.nextIndex = function() {
                return ++this.previousIndex
            }, zu.prototype.addElement = function(t) {
                var e = [t, this.nextIndex()];
                if (this.buffer.size < this.maxElements) this.buffer = this.buffer.add(e);
                else {
                    var n = this.buffer.last();
                    Wu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                }
            }, Object.defineProperty(zu.prototype, "maxValue", {
                get: function() {
                    return this.buffer.last()[0]
                },
                enumerable: !0,
                configurable: !0
            }), zu);

            function zu(t) {
                this.maxElements = t, this.buffer = new bo(Wu), this.previousIndex = 0
            }
            var Hu = {
                    didRun: !1,
                    sequenceNumbersCollected: 0,
                    targetsRemoved: 0,
                    documentsRemoved: 0
                },
                Yu = (Xu.withCacheSize = function(t) {
                    return new Xu(t, Xu.DEFAULT_COLLECTION_PERCENTILE, Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                }, Xu.COLLECTION_DISABLED = -1, Xu.MINIMUM_CACHE_SIZE_BYTES = 1048576, Xu.DEFAULT = new Xu(Xu.DEFAULT_CACHE_SIZE_BYTES = 41943040, Xu.DEFAULT_COLLECTION_PERCENTILE = 10, Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3), Xu.DISABLED = new Xu(Xu.COLLECTION_DISABLED, 0, 0), Xu);

            function Xu(t, e, n) {
                this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n
            }
            var Ju = (Zu.prototype.start = function() {
                Vr(null === this.gcTask, "Cannot start an already started LruScheduler"), this.garbageCollector.params.cacheSizeCollectionThreshold !== Yu.COLLECTION_DISABLED && this.scheduleGC()
            }, Zu.prototype.stop = function() {
                this.gcTask && (this.gcTask.cancel(), this.gcTask = null)
            }, Object.defineProperty(Zu.prototype, "started", {
                get: function() {
                    return null !== this.gcTask
                },
                enumerable: !0,
                configurable: !0
            }), Zu.prototype.scheduleGC = function() {
                var t = this;
                Vr(null === this.gcTask, "Cannot schedule GC while a task is pending");
                var e = this.hasRun ? 3e5 : 6e4;
                Pr("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.gcTask = this.asyncQueue.enqueueAfterDelay(Wi.LruGarbageCollection, e, function() {
                    return t.gcTask = null, t.hasRun = !0, t.localStore.collectGarbage(t.garbageCollector).then(function() {
                        return t.scheduleGC()
                    }).catch(lc)
                })
            }, Zu);

            function Zu(t, e, n) {
                this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.hasRun = !1, this.gcTask = null
            }
            var $u = (tc.prototype.calculateTargetCount = function(t, e) {
                return this.delegate.getSequenceNumberCount(t).next(function(t) {
                    return Math.floor(e / 100 * t)
                })
            }, tc.prototype.nthSequenceNumber = function(t, e) {
                var n = this;
                if (0 === e) return Fo.resolve(Mi.INVALID);
                var r = new Gu(e);
                return this.delegate.forEachTarget(t, function(t) {
                    return r.addElement(t.sequenceNumber)
                }).next(function() {
                    return n.delegate.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                        return r.addElement(t)
                    })
                }).next(function() {
                    return r.maxValue
                })
            }, tc.prototype.removeTargets = function(t, e, n) {
                return this.delegate.removeTargets(t, e, n)
            }, tc.prototype.removeOrphanedDocuments = function(t, e) {
                return this.delegate.removeOrphanedDocuments(t, e)
            }, tc.prototype.collect = function(e, n) {
                var r = this;
                return this.params.cacheSizeCollectionThreshold === Yu.COLLECTION_DISABLED ? (Pr("LruGarbageCollector", "Garbage collection skipped; disabled"), Fo.resolve(Hu)) : this.getCacheSize(e).next(function(t) {
                    return t < r.params.cacheSizeCollectionThreshold ? (Pr("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), Hu) : r.runGarbageCollection(e, n)
                })
            }, tc.prototype.getCacheSize = function(t) {
                return this.delegate.getCacheSize(t)
            }, tc.prototype.runGarbageCollection = function(e, n) {
                var r, i, o, a, s, u, c, h = this,
                    l = Date.now();
                return this.calculateTargetCount(e, this.params.percentileToCollect).next(function(t) {
                    return i = t > h.params.maximumSequenceNumbersToCollect ? (Pr("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + t), h.params.maximumSequenceNumbersToCollect) : t, a = Date.now(), h.nthSequenceNumber(e, i)
                }).next(function(t) {
                    return r = t, s = Date.now(), h.removeTargets(e, r, n)
                }).next(function(t) {
                    return o = t, u = Date.now(), h.removeOrphanedDocuments(e, r)
                }).next(function(t) {
                    return c = Date.now(), _r() <= Er.DEBUG && Pr("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (a - l) + "ms\n\tDetermined least recently used " + i + " in " + (s - a) + "ms\n\tRemoved " + o + " targets in " + (u - s) + "ms\n\tRemoved " + t + " documents in " + (c - u) + "ms\nTotal Duration: " + (c - l) + "ms"), Fo.resolve({
                        didRun: !0,
                        sequenceNumbersCollected: i,
                        targetsRemoved: o,
                        documentsRemoved: t
                    })
                })
            }, tc);

            function tc(t, e) {
                this.delegate = t, this.params = e
            }
            var ec = (nc.prototype.addOnCommittedListener = function(t) {
                this.onCommittedListeners.push(t)
            }, nc.prototype.raiseOnCommittedEvent = function() {
                this.onCommittedListeners.forEach(function(t) {
                    return t()
                })
            }, nc);

            function nc() {
                this.onCommittedListeners = []
            }
            var rc, ic = "IndexedDbPersistence",
                oc = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                ac = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
                sc = (t(uc, rc = ec), uc);

            function uc(t, e) {
                var n = rc.call(this) || this;
                return n.simpleDbTransaction = t, n.currentSequenceNumber = e, n
            }
            var cc = (hc.getStore = function(t, e) {
                if (t instanceof sc) return $o.getStore(t.simpleDbTransaction, e);
                throw Fr("IndexedDbPersistence must use instances of IndexedDbTransaction")
            }, hc.createIndexedDbPersistence = function(n) {
                return d(this, void 0, void 0, function() {
                    var e;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!hc.isAvailable()) throw new Wr(jr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                                return [4, (e = new hc(n.allowTabSynchronization, n.persistenceKey, n.clientId, n.platform, n.lruParams, n.queue, n.serializer, n.sequenceNumberSyncer)).start()];
                            case 1:
                                return t.sent(), [2, e]
                        }
                    })
                })
            }, hc.prototype.start = function() {
                var e = this;
                return Vr(!this.started, "IndexedDbPersistence double-started!"), Vr(null !== this.window, "Expected 'window' to be defined"), $o.openOrCreate(this.dbName, au, new su(this.serializer)).then(function(t) {
                    return e.simpleDb = t, e.updateClientMetadataAndTryBecomePrimary()
                }).then(function() {
                    return e.attachVisibilityHandler(), e.attachWindowUnloadHook(), e.scheduleClientMetadataAndPrimaryLeaseRefreshes(), e.simpleDb.runTransaction("readonly-idempotent", [Au.store], function(t) {
                        return pa(t)
                    })
                }).then(function(t) {
                    e.listenSequence = new Mi(t, e.sequenceNumberSyncer)
                }).then(function() {
                    e._started = !0
                }).catch(function(t) {
                    return e.simpleDb && e.simpleDb.close(), Promise.reject(t)
                })
            }, hc.prototype.setPrimaryStateListener = function(n) {
                var t = this;
                return this.primaryStateListener = function(e) {
                    return d(t, void 0, void 0, function() {
                        return p(this, function(t) {
                            return this.started ? [2, n(e)] : [2]
                        })
                    })
                }, n(this.isPrimary)
            }, hc.prototype.setDatabaseDeletedListener = function(n) {
                var t = this;
                this.simpleDb.setVersionChangeListener(function(e) {
                    return d(t, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return null !== e.newVersion ? [3, 2] : [4, n()];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                })
            }, hc.prototype.setNetworkEnabled = function(t) {
                var e = this;
                this.networkEnabled !== t && (this.networkEnabled = t, this.queue.enqueueAndForget(function() {
                    return d(e, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }))
            }, hc.prototype.updateClientMetadataAndTryBecomePrimary = function() {
                var r = this;
                return this.simpleDb.runTransaction("readwrite", qu, function(n) {
                    return dc(n).put(new _u(r.clientId, Date.now(), r.networkEnabled, r.inForeground)).next(function() {
                        if (r.isPrimary) return r.verifyPrimaryLease(n).next(function(t) {
                            t || (r.isPrimary = !1, r.queue.enqueueAndForget(function() {
                                return r.primaryStateListener(!1)
                            }))
                        })
                    }).next(function() {
                        return r.canActAsPrimary(n)
                    }).next(function(t) {
                        var e = r.isPrimary;
                        return r.isPrimary = t, e !== r.isPrimary && r.queue.enqueueAndForget(function() {
                            return r.primaryStateListener(r.isPrimary)
                        }), e && !r.isPrimary ? r.releasePrimaryLeaseIfHeld(n) : r.isPrimary ? r.acquireOrExtendPrimaryLease(n) : void 0
                    })
                })
            }, hc.prototype.verifyPrimaryLease = function(t) {
                var e = this;
                return fc(t).get(hu.key).next(function(t) {
                    return Fo.resolve(e.isLocalClient(t))
                })
            }, hc.prototype.removeClientMetadata = function(t) {
                return dc(t).delete(this.clientId)
            }, hc.prototype.maybeGarbageCollectMultiClientState = function() {
                return d(this, void 0, void 0, function() {
                    var n, r, i = this;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, 18e5) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), r = [], [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(t) {
                                    var e = hc.getStore(t, _u.store);
                                    return e.loadAll().next(function(t) {
                                        return n = i.filterActiveClients(t, 18e5), r = t.filter(function(t) {
                                            return -1 === n.indexOf(t)
                                        }), Fo.forEach(r, function(t) {
                                            return e.delete(t.clientId)
                                        })
                                    })
                                })]);
                            case 1:
                                t.sent(), r.forEach(function(t) {
                                    i.window.localStorage.removeItem(i.zombiedClientLocalStorageKey(t.clientId))
                                }), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, hc.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function() {
                var t = this;
                this.clientMetadataRefresher = this.queue.enqueueAfterDelay(Wi.ClientMetadataRefresh, 4e3, function() {
                    return t.updateClientMetadataAndTryBecomePrimary().then(function() {
                        return t.maybeGarbageCollectMultiClientState()
                    }).then(function() {
                        return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                    })
                })
            }, hc.prototype.isLocalClient = function(t) {
                return !!t && t.ownerId === this.clientId
            }, hc.prototype.canActAsPrimary = function(e) {
                var i = this;
                return fc(e).get(hu.key).next(function(t) {
                    if (null !== t && i.isWithinAge(t.leaseTimestampMs, 5e3) && !i.isClientZombied(t.ownerId)) {
                        if (i.isLocalClient(t) && i.networkEnabled) return !0;
                        if (!i.isLocalClient(t)) {
                            if (!t.allowTabSynchronization) throw new Wr(jr.FAILED_PRECONDITION, ac);
                            return !1
                        }
                    }
                    return !(!i.networkEnabled || !i.inForeground) || dc(e).loadAll().next(function(t) {
                        return void 0 === i.filterActiveClients(t, 5e3).find(function(t) {
                            if (i.clientId !== t.clientId) {
                                var e = !i.networkEnabled && t.networkEnabled,
                                    n = !i.inForeground && t.inForeground,
                                    r = i.networkEnabled === t.networkEnabled;
                                if (e || n && r) return !0
                            }
                            return !1
                        })
                    })
                }).next(function(t) {
                    return i.isPrimary !== t && Pr(ic, "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                })
            }, hc.prototype.shutdown = function() {
                return d(this, void 0, void 0, function() {
                    var e = this;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this._started = !1, this.markClientZombied(), this.clientMetadataRefresher && (this.clientMetadataRefresher.cancel(), this.clientMetadataRefresher = null), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite-idempotent", [hu.store, _u.store], function(t) {
                                    return e.releasePrimaryLeaseIfHeld(t).next(function() {
                                        return e.removeClientMetadata(t)
                                    })
                                })];
                            case 1:
                                return t.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), [2]
                        }
                    })
                })
            }, hc.prototype.filterActiveClients = function(t, e) {
                var n = this;
                return t.filter(function(t) {
                    return n.isWithinAge(t.updateTimeMs, e) && !n.isClientZombied(t.clientId)
                })
            }, hc.prototype.getActiveClients = function() {
                var e = this;
                return this.simpleDb.runTransaction("readonly-idempotent", [_u.store], function(t) {
                    return dc(t).loadAll().next(function(t) {
                        return e.filterActiveClients(t, 18e5).map(function(t) {
                            return t.clientId
                        })
                    })
                })
            }, hc.clearPersistence = function(n) {
                return d(this, void 0, void 0, function() {
                    var e;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return hc.isAvailable() ? (e = n + hc.MAIN_DATABASE, [4, $o.delete(e)]) : [2, Promise.resolve()];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, Object.defineProperty(hc.prototype, "started", {
                get: function() {
                    return this._started
                },
                enumerable: !0,
                configurable: !0
            }), hc.prototype.getMutationQueue = function(t) {
                return Vr(this.started, "Cannot initialize MutationQueue before persistence is started."), Bo.forUser(t, this.serializer, this.indexManager, this.referenceDelegate)
            }, hc.prototype.getQueryCache = function() {
                return Vr(this.started, "Cannot initialize QueryCache before persistence is started."), this.queryCache
            }, hc.prototype.getRemoteDocumentCache = function() {
                return Vr(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache
            }, hc.prototype.getIndexManager = function() {
                return Vr(this.started, "Cannot initialize IndexManager before persistence is started."), this.indexManager
            }, hc.prototype.runTransaction = function(n, t, r) {
                var i = this;
                Pr(ic, "Starting transaction:", n);
                var o, e = t.endsWith("idempotent"),
                    a = t.startsWith("readonly") ? e ? "readonly-idempotent" : "readonly" : e ? "readwrite-idempotent" : "readwrite";
                return this.simpleDb.runTransaction(a, qu, function(e) {
                    return o = new sc(e, i.listenSequence.next()), "readwrite-primary" === t || "readwrite-primary-idempotent" === t ? i.verifyPrimaryLease(e).next(function(t) {
                        if (!t) throw xr("Failed to obtain primary lease for action '" + n + "'."), i.isPrimary = !1, i.queue.enqueueAndForget(function() {
                            return i.primaryStateListener(!1)
                        }), new Wr(jr.FAILED_PRECONDITION, oc);
                        return r(o)
                    }).next(function(t) {
                        return i.acquireOrExtendPrimaryLease(e).next(function() {
                            return t
                        })
                    }) : i.verifyAllowTabSynchronization(e).next(function() {
                        return r(o)
                    })
                }).then(function(t) {
                    return o.raiseOnCommittedEvent(), t
                })
            }, hc.prototype.verifyAllowTabSynchronization = function(t) {
                var e = this;
                return fc(t).get(hu.key).next(function(t) {
                    if (null !== t && e.isWithinAge(t.leaseTimestampMs, 5e3) && !e.isClientZombied(t.ownerId) && !e.isLocalClient(t) && !t.allowTabSynchronization) throw new Wr(jr.FAILED_PRECONDITION, ac)
                })
            }, hc.prototype.acquireOrExtendPrimaryLease = function(t) {
                var e = new hu(this.clientId, this.allowTabSynchronization, Date.now());
                return fc(t).put(hu.key, e)
            }, hc.isAvailable = function() {
                return $o.isAvailable()
            }, hc.buildStoragePrefix = function(t) {
                var e = t.databaseId.projectId;
                return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/"
            }, hc.prototype.releasePrimaryLeaseIfHeld = function(t) {
                var e = this,
                    n = fc(t);
                return n.get(hu.key).next(function(t) {
                    return e.isLocalClient(t) ? (Pr(ic, "Releasing primary lease."), n.delete(hu.key)) : Fo.resolve()
                })
            }, hc.prototype.isWithinAge = function(t, e) {
                var n = Date.now();
                return !(t < n - e || n < t && (xr("Detected an update time that is in the future: " + t + " > " + n), 1))
            }, hc.prototype.attachVisibilityHandler = function() {
                var t = this;
                null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function() {
                    t.queue.enqueueAndForget(function() {
                        return t.inForeground = "visible" === t.document.visibilityState, t.updateClientMetadataAndTryBecomePrimary()
                    })
                }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState)
            }, hc.prototype.detachVisibilityHandler = function() {
                this.documentVisibilityHandler && (Vr(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null)
            }, hc.prototype.attachWindowUnloadHook = function() {
                var t = this;
                "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function() {
                    t.markClientZombied(), t.queue.enqueueAndForget(function() {
                        return t.shutdown()
                    })
                }, this.window.addEventListener("unload", this.windowUnloadHandler))
            }, hc.prototype.detachWindowUnloadHook = function() {
                this.windowUnloadHandler && (Vr("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null)
            }, hc.prototype.isClientZombied = function(t) {
                try {
                    var e = null !== this.webStorage.getItem(this.zombiedClientLocalStorageKey(t));
                    return Pr(ic, "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e
                } catch (t) {
                    return xr(ic, "Failed to get zombied client id.", t), !1
                }
            }, hc.prototype.markClientZombied = function() {
                try {
                    this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now()))
                } catch (t) {
                    xr("Failed to set zombie client id.", t)
                }
            }, hc.prototype.removeClientZombiedEntry = function() {
                try {
                    this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))
                } catch (t) {}
            }, hc.prototype.zombiedClientLocalStorageKey = function(t) {
                return "firestore_zombie_" + this.persistenceKey + "_" + t
            }, hc.MAIN_DATABASE = "main", hc);

            function hc(t, e, n, r, i, o, a, s) {
                if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.queue = o, this.sequenceNumberSyncer = s, this._started = !1, this.isPrimary = !1, this.networkEnabled = !0, this.windowUnloadHandler = null, this.inForeground = !1, this.documentVisibilityHandler = null, this.clientMetadataRefresher = null, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function(t) {
                        return Promise.resolve()
                    }, this.referenceDelegate = new pc(this, i), this.dbName = e + hc.MAIN_DATABASE, this.serializer = new Ku(a), this.document = r.document, this.queryCache = new ha(this.referenceDelegate, this.serializer), this.indexManager = new Fu, this.remoteDocumentCache = new Ys(this.serializer, this.indexManager), !r.window || !r.window.localStorage) throw new Wr(jr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                this.window = r.window, this.webStorage = this.window.localStorage
            }

            function lc(e) {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        if (! function(t) {
                                return t.code === jr.FAILED_PRECONDITION && t.message === oc
                            }(e)) throw e;
                        return Pr(ic, "Unexpectedly lost primary lease"), [2]
                    })
                })
            }

            function fc(t) {
                return t.store(hu.store)
            }

            function dc(t) {
                return t.store(_u.store)
            }
            var pc = (mc.prototype.getSequenceNumberCount = function(t) {
                var n = this.orphanedDocmentCount(t);
                return this.db.getQueryCache().getQueryCount(t).next(function(e) {
                    return n.next(function(t) {
                        return e + t
                    })
                })
            }, mc.prototype.orphanedDocmentCount = function(t) {
                var e = 0;
                return this.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                    e++
                }).next(function() {
                    return e
                })
            }, mc.prototype.forEachTarget = function(t, e) {
                return this.db.getQueryCache().forEachTarget(t, e)
            }, mc.prototype.forEachOrphanedDocumentSequenceNumber = function(t, n) {
                return this.forEachOrphanedDocument(t, function(t, e) {
                    return n(e)
                })
            }, mc.prototype.setInMemoryPins = function(t) {
                this.inMemoryPins = t
            }, mc.prototype.addReference = function(t, e) {
                return yc(t, e)
            }, mc.prototype.removeReference = function(t, e) {
                return yc(t, e)
            }, mc.prototype.removeTargets = function(t, e, n) {
                return this.db.getQueryCache().removeTargets(t, e, n)
            }, mc.prototype.removeMutationReference = function(t, e) {
                return yc(t, e)
            }, mc.prototype.isPinned = function(t, e) {
                return this.inMemoryPins.containsKey(e) ? Fo.resolve(!0) : function(e, n) {
                    var r = !1;
                    return zo(e).iterateSerial(function(t) {
                        return Qo(e, t, n).next(function(t) {
                            return t && (r = !0), Fo.resolve(!t)
                        })
                    }).next(function() {
                        return r
                    })
                }(t, e)
            }, mc.prototype.removeOrphanedDocuments = function(r, i) {
                var o = this,
                    a = this.db.getRemoteDocumentCache().newChangeBuffer(),
                    s = [],
                    u = 0;
                return this.forEachOrphanedDocument(r, function(e, t) {
                    if (t <= i) {
                        var n = o.isPinned(r, e).next(function(t) {
                            if (!t) return u++, a.getEntry(r, e).next(function() {
                                return a.removeEntry(e), ma(r).delete(function(t) {
                                    return [0, no(t.path)]
                                }(e))
                            })
                        });
                        s.push(n)
                    }
                }).next(function() {
                    return Fo.waitFor(s)
                }).next(function() {
                    return a.apply(r)
                }).next(function() {
                    return u
                })
            }, mc.prototype.removeTarget = function(t, e) {
                var n = e.withSequenceNumber(t.currentSequenceNumber);
                return this.db.getQueryCache().updateQueryData(t, n)
            }, mc.prototype.updateLimboDocument = function(t, e) {
                return yc(t, e)
            }, mc.prototype.forEachOrphanedDocument = function(t, o) {
                var a, e = ma(t),
                    s = Mi.INVALID;
                return e.iterate({
                    index: Du.documentTargetsIndex
                }, function(t, e) {
                    var n = t[0],
                        r = (t[1], e.path),
                        i = e.sequenceNumber;
                    0 === n ? (s !== Mi.INVALID && o(new Ki(oo(a)), s), s = i, a = r) : s = Mi.INVALID
                }).next(function() {
                    s !== Mi.INVALID && o(new Ki(oo(a)), s)
                })
            }, mc.prototype.getCacheSize = function(t) {
                return this.db.getRemoteDocumentCache().getSize(t)
            }, mc);

            function mc(t, e) {
                this.db = t, this.inMemoryPins = null, this.garbageCollector = new $u(this, e)
            }

            function yc(t, e) {
                return ma(t).put(function(t, e) {
                    return new Du(0, no(t.path), e)
                }(e, t.currentSequenceNumber))
            }
            var gc = (vc.prototype.getDocument = function(e, n) {
                var r = this;
                return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e, n).next(function(t) {
                    return r.getDocumentInternal(e, n, t)
                })
            }, vc.prototype.getDocumentInternal = function(t, r, i) {
                return this.remoteDocumentCache.getEntry(t, r).next(function(t) {
                    for (var e = 0, n = i; e < n.length; e++) t = n[e].applyToLocalView(r, t);
                    return t
                })
            }, vc.prototype.applyLocalMutationsToDocuments = function(t, e, i) {
                var o = Co();
                return e.forEach(function(t, e) {
                    for (var n = 0, r = i; n < r.length; n++) e = r[n].applyToLocalView(t, e);
                    o = o.insert(t, e)
                }), o
            }, vc.prototype.getDocuments = function(e, t) {
                var n = this;
                return this.remoteDocumentCache.getEntries(e, t).next(function(t) {
                    return n.getLocalViewOfDocuments(e, t)
                })
            }, vc.prototype.getLocalViewOfDocuments = function(r, i) {
                var o = this;
                return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r, i).next(function(t) {
                    var e = o.applyLocalMutationsToDocuments(r, i, t),
                        n = Io();
                    return e.forEach(function(t, e) {
                        e = e || new Vs(t, uo.forDeletedDoc()), n = n.insert(t, e)
                    }), n
                })
            }, vc.prototype.getDocumentsMatchingQuery = function(t, e, n) {
                return e.isDocumentQuery() ? this.getDocumentsMatchingDocumentQuery(t, e.path) : e.isCollectionGroupQuery() ? this.getDocumentsMatchingCollectionGroupQuery(t, e, n) : this.getDocumentsMatchingCollectionQuery(t, e, n)
            }, vc.prototype.getDocumentsMatchingDocumentQuery = function(t, e) {
                return this.getDocument(t, new Ki(e)).next(function(t) {
                    var e = No();
                    return t instanceof xs && (e = e.insert(t.key, t)), e
                })
            }, vc.prototype.getDocumentsMatchingCollectionGroupQuery = function(n, r, i) {
                var o = this;
                Vr(r.path.isEmpty(), "Currently we only support collection group queries at the root.");
                var a = r.collectionGroup,
                    s = No();
                return this.indexManager.getCollectionParents(n, a).next(function(t) {
                    return Fo.forEach(t, function(t) {
                        var e = r.asCollectionQueryAtPath(t.child(a));
                        return o.getDocumentsMatchingCollectionQuery(n, e, i).next(function(t) {
                            t.forEach(function(t, e) {
                                s = s.insert(t, e)
                            })
                        })
                    }).next(function() {
                        return s
                    })
                })
            }, vc.prototype.getDocumentsMatchingCollectionQuery = function(e, n, t) {
                var h, l, r = this;
                return this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, t).next(function(t) {
                    return h = t, r.mutationQueue.getAllMutationBatchesAffectingQuery(e, n)
                }).next(function(t) {
                    return l = t, r.addMissingBaseDocuments(e, l, h).next(function(t) {
                        h = t;
                        for (var e = 0, n = l; e < n.length; e++)
                            for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                var a = o[i],
                                    s = a.key,
                                    u = h.get(s),
                                    c = a.applyToLocalView(u, u, r.localWriteTime);
                                h = c instanceof xs ? h.insert(s, c) : h.remove(s)
                            }
                    })
                }).next(function() {
                    return h.forEach(function(t, e) {
                        n.matches(e) || (h = h.remove(t))
                    }), h
                })
            }, vc.prototype.addMissingBaseDocuments = function(t, e, n) {
                for (var r = Mo(), i = 0, o = e; i < o.length; i++)
                    for (var a = 0, s = o[i].mutations; a < s.length; a++) {
                        var u = s[a];
                        u instanceof Ma && null === n.get(u.key) && (r = r.add(u.key))
                    }
                var c = n;
                return this.remoteDocumentCache.getEntries(t, r).next(function(t) {
                    return t.forEach(function(t, e) {
                        null !== e && e instanceof xs && (c = c.insert(t, e))
                    }), c
                })
            }, vc);

            function vc(t, e, n) {
                this.remoteDocumentCache = t, this.mutationQueue = e, this.indexManager = n
            }
            var bc = (wc.prototype.isEmpty = function() {
                return this.refsByKey.isEmpty()
            }, wc.prototype.addReference = function(t, e) {
                var n = new Sc(t, e);
                this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
            }, wc.prototype.addReferences = function(t, e) {
                var n = this;
                t.forEach(function(t) {
                    return n.addReference(t, e)
                })
            }, wc.prototype.removeReference = function(t, e) {
                this.removeRef(new Sc(t, e))
            }, wc.prototype.removeReferences = function(t, e) {
                var n = this;
                t.forEach(function(t) {
                    return n.removeReference(t, e)
                })
            }, wc.prototype.removeReferencesForId = function(t) {
                var e = this,
                    n = Ki.EMPTY,
                    r = new Sc(n, t),
                    i = new Sc(n, t + 1),
                    o = [];
                return this.refsByTarget.forEachInRange([r, i], function(t) {
                    e.removeRef(t), o.push(t.key)
                }), o
            }, wc.prototype.removeAllReferences = function() {
                var e = this;
                this.refsByKey.forEach(function(t) {
                    return e.removeRef(t)
                })
            }, wc.prototype.removeRef = function(t) {
                this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t)
            }, wc.prototype.referencesForId = function(t) {
                var e = Ki.EMPTY,
                    n = new Sc(e, t),
                    r = new Sc(e, t + 1),
                    i = Mo();
                return this.refsByTarget.forEachInRange([n, r], function(t) {
                    i = i.add(t.key)
                }), i
            }, wc.prototype.containsKey = function(t) {
                var e = new Sc(t, 0),
                    n = this.refsByKey.firstAfterOrEqual(e);
                return null !== n && t.isEqual(n.key)
            }, wc);

            function wc() {
                this.refsByKey = new bo(Sc.compareByKey), this.refsByTarget = new bo(Sc.compareByTargetId)
            }
            var Sc = (Tc.compareByKey = function(t, e) {
                return Ki.comparator(t.key, e.key) || bi(t.targetOrBatchId, e.targetOrBatchId)
            }, Tc.compareByTargetId = function(t, e) {
                return bi(t.targetOrBatchId, e.targetOrBatchId) || Ki.comparator(t.key, e.key)
            }, Tc);

            function Tc(t, e) {
                this.key = t, this.targetOrBatchId = e
            }
            var Ec = "LocalStore",
                Ic = (Cc.prototype.start = function() {
                    return this.synchronizeLastDocumentChangeReadTime()
                }, Cc.prototype.handleUserChange = function(i) {
                    return d(this, void 0, void 0, function() {
                        var e, y, n, r = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.mutationQueue, y = this.localDocuments, [4, this.persistence.runTransaction("Handle user change", "readonly-idempotent", function(p) {
                                        var m;
                                        return r.mutationQueue.getAllMutationBatches(p).next(function(t) {
                                            return m = t, e = r.persistence.getMutationQueue(i), y = new gc(r.remoteDocuments, e, r.persistence.getIndexManager()), e.getAllMutationBatches(p)
                                        }).next(function(t) {
                                            for (var e = [], n = [], r = Mo(), i = 0, o = m; i < o.length; i++) {
                                                var a = o[i];
                                                e.push(a.batchId);
                                                for (var s = 0, u = a.mutations; s < u.length; s++) {
                                                    var c = u[s];
                                                    r = r.add(c.key)
                                                }
                                            }
                                            for (var h = 0, l = t; h < l.length; h++) {
                                                a = l[h], n.push(a.batchId);
                                                for (var f = 0, d = a.mutations; f < d.length; f++) c = d[f], r = r.add(c.key)
                                            }
                                            return y.getDocuments(p, r).next(function(t) {
                                                return {
                                                    affectedDocuments: t,
                                                    removedBatchIds: e,
                                                    addedBatchIds: n
                                                }
                                            })
                                        })
                                    })];
                                case 1:
                                    return n = t.sent(), this.mutationQueue = e, this.localDocuments = y, this.queryEngine.setLocalDocumentsView(this.localDocuments), [2, n]
                            }
                        })
                    })
                }, Cc.prototype.localWrite = function(s) {
                    var u, c = this,
                        h = ao.now(),
                        t = s.reduce(function(t, e) {
                            return t.add(e.key)
                        }, Mo());
                    return this.persistence.runTransaction("Locally write mutations", "readwrite-idempotent", function(a) {
                        return c.localDocuments.getDocuments(a, t).next(function(t) {
                            u = t;
                            for (var e = [], n = 0, r = s; n < r.length; n++) {
                                var i = r[n],
                                    o = i.extractBaseValue(u.get(i.key));
                                null != o && e.push(new Ma(i.key, o, o.fieldMask(), Ea.exists(!0)))
                            }
                            return c.mutationQueue.addMutationBatch(a, h, e, s)
                        })
                    }).then(function(t) {
                        var e = t.applyToLocalDocumentSet(u);
                        return {
                            batchId: t.batchId,
                            changes: e
                        }
                    })
                }, Cc.prototype.lookupMutationDocuments = function(t) {
                    var n = this;
                    return this.persistence.runTransaction("Lookup mutation documents", "readonly-idempotent", function(e) {
                        return n.mutationQueue.lookupMutationKeys(e, t).next(function(t) {
                            return t ? n.localDocuments.getDocuments(e, t) : Fo.resolve(null)
                        })
                    })
                }, Cc.prototype.acknowledgeBatch = function(r) {
                    var i = this;
                    return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary-idempotent", function(t) {
                        var e = r.batch.keys(),
                            n = i.remoteDocuments.newChangeBuffer({
                                trackRemovals: !0
                            });
                        return i.mutationQueue.acknowledgeBatch(t, r.batch, r.streamToken).next(function() {
                            return i.applyWriteToRemoteDocuments(t, r, n)
                        }).next(function() {
                            return n.apply(t)
                        }).next(function() {
                            return i.mutationQueue.performConsistencyCheck(t)
                        }).next(function() {
                            return i.localDocuments.getDocuments(t, e)
                        })
                    })
                }, Cc.prototype.rejectBatch = function(t) {
                    var r = this;
                    return this.persistence.runTransaction("Reject batch", "readwrite-primary-idempotent", function(e) {
                        var n;
                        return r.mutationQueue.lookupMutationBatch(e, t).next(function(t) {
                            return Vr(null !== t, "Attempt to reject nonexistent batch!"), n = t.keys(), r.mutationQueue.removeMutationBatch(e, t)
                        }).next(function() {
                            return r.mutationQueue.performConsistencyCheck(e)
                        }).next(function() {
                            return r.localDocuments.getDocuments(e, n)
                        })
                    })
                }, Cc.prototype.getHighestUnacknowledgedBatchId = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly-idempotent", function(t) {
                        return e.mutationQueue.getHighestUnacknowledgedBatchId(t)
                    })
                }, Cc.prototype.getLastStreamToken = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get last stream token", "readonly-idempotent", function(t) {
                        return e.mutationQueue.getLastStreamToken(t)
                    })
                }, Cc.prototype.setLastStreamToken = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Set last stream token", "readwrite-primary-idempotent", function(t) {
                        return n.mutationQueue.setLastStreamToken(t, e)
                    })
                }, Cc.prototype.getLastRemoteSnapshotVersion = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get last remote snapshot version", "readonly-idempotent", function(t) {
                        return e.queryCache.getLastRemoteSnapshotVersion(t)
                    })
                }, Cc.prototype.applyRemoteEvent = function(u) {
                    var c = this,
                        h = u.snapshotVersion,
                        l = this.queryDataByTarget;
                    return this.persistence.runTransaction("Apply remote event", "readwrite-primary-idempotent", function(o) {
                        var i = c.remoteDocuments.newChangeBuffer({
                            trackRemovals: !0
                        });
                        l = c.queryDataByTarget;
                        var a = [];
                        Xr(u.targetChanges, function(t, e) {
                            var n = l.get(t);
                            if (n) {
                                a.push(c.queryCache.removeMatchingKeys(o, e.removedDocuments, t).next(function() {
                                    return c.queryCache.addMatchingKeys(o, e.addedDocuments, t)
                                }));
                                var r = e.resumeToken;
                                if (0 < r.length) {
                                    var i = n.withResumeToken(r, h).withSequenceNumber(o.currentSequenceNumber);
                                    l = l.insert(t, i), Cc.shouldPersistQueryData(n, i, e) && a.push(c.queryCache.updateQueryData(o, i))
                                }
                            }
                        });
                        var s = Io(),
                            n = Mo();
                        if (u.documentUpdates.forEach(function(t, e) {
                                n = n.add(t)
                            }), a.push(i.getEntries(o, n).next(function(r) {
                                u.documentUpdates.forEach(function(t, e) {
                                    var n = r.get(t);
                                    e instanceof Vs && e.version.isEqual(uo.MIN) ? (i.removeEntry(t, h), s = s.insert(t, e)) : null == n || 0 < e.version.compareTo(n.version) || 0 === e.version.compareTo(n.version) && n.hasPendingWrites ? (uo.MIN.isEqual(h) && xr(Ec, "Cannot add a document when the remote version is zero"), i.addEntry(e, h), s = s.insert(t, e)) : Pr(Ec, "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), u.resolvedLimboDocuments.has(t) && a.push(c.persistence.referenceDelegate.updateLimboDocument(o, t))
                                })
                            })), !h.isEqual(uo.MIN)) {
                            var t = c.queryCache.getLastRemoteSnapshotVersion(o).next(function(t) {
                                return Vr(0 <= h.compareTo(t), "Watch stream reverted to previous snapshot?? " + h + " < " + t), c.queryCache.setTargetsMetadata(o, o.currentSequenceNumber, h)
                            });
                            a.push(t)
                        }
                        return Fo.waitFor(a).next(function() {
                            return i.apply(o)
                        }).next(function() {
                            return c.localDocuments.getLocalViewOfDocuments(o, s)
                        })
                    }).then(function(t) {
                        return c.queryDataByTarget = l, t
                    })
                }, Cc.shouldPersistQueryData = function(t, e, n) {
                    return Vr(0 < e.resumeToken.length, "Attempted to persist query data with no resume token"), 0 === t.resumeToken.length || e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || 0 < n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size
                }, Cc.prototype.notifyLocalViewChanges = function(t) {
                    for (var n = this, e = 0, r = t; e < r.length; e++) {
                        var i = r[e],
                            o = i.targetId;
                        if (this.localViewReferences.addReferences(i.addedKeys, o), this.localViewReferences.removeReferences(i.removedKeys, o), !i.fromCache) {
                            var a = this.queryDataByTarget.get(o);
                            Vr(null !== a, "Can't set limbo-free snapshot version for unknown target: " + o);
                            var s = a.snapshotVersion,
                                u = a.withLastLimboFreeSnapshotVersion(s);
                            this.queryDataByTarget = this.queryDataByTarget.insert(o, u)
                        }
                    }
                    return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite-idempotent", function(e) {
                        return Fo.forEach(t, function(t) {
                            return Fo.forEach(t.removedKeys, function(t) {
                                return n.persistence.referenceDelegate.removeReference(e, t)
                            })
                        })
                    })
                }, Cc.prototype.nextMutationBatch = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Get next mutation batch", "readonly-idempotent", function(t) {
                        return void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t, e)
                    })
                }, Cc.prototype.readDocument = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("read document", "readonly-idempotent", function(t) {
                        return n.localDocuments.getDocument(t, e)
                    })
                }, Cc.prototype.allocateQuery = function(r) {
                    var i = this;
                    return this.persistence.runTransaction("Allocate query", "readwrite-idempotent", function(e) {
                        var n;
                        return i.queryCache.getQueryData(e, r).next(function(t) {
                            return t ? (n = t, Fo.resolve(n)) : i.queryCache.allocateTargetId(e).next(function(t) {
                                return n = new Uu(r, t, Pu.Listen, e.currentSequenceNumber), i.queryCache.addQueryData(e, n).next(function() {
                                    return n
                                })
                            })
                        })
                    }).then(function(t) {
                        return Vr(null === i.queryDataByTarget.get(t.targetId), "Tried to allocate an already allocated query: " + r), i.queryDataByTarget = i.queryDataByTarget.insert(t.targetId, t), i.targetIdByQuery.set(r, t.targetId), t
                    })
                }, Cc.prototype.getQueryData = function(t, e) {
                    var n = this.targetIdByQuery.get(e);
                    return void 0 !== n ? Fo.resolve(this.queryDataByTarget.get(n)) : this.queryCache.getQueryData(t, e)
                }, Cc.prototype.releaseQuery = function(i, o) {
                    var a, s = this,
                        t = o ? "readwrite-idempotent" : "readwrite-primary-idempotent";
                    return this.persistence.runTransaction("Release query", t, function(e) {
                        var t = s.targetIdByQuery.get(i);
                        Vr(void 0 !== t, "Tried to release nonexistent query: " + i), a = t;
                        var n = s.queryDataByTarget.get(a),
                            r = s.localViewReferences.removeReferencesForId(a);
                        return o ? Fo.resolve() : Fo.forEach(r, function(t) {
                            return s.persistence.referenceDelegate.removeReference(e, t)
                        }).next(function() {
                            s.persistence.referenceDelegate.removeTarget(e, n)
                        })
                    }).then(function() {
                        s.queryDataByTarget = s.queryDataByTarget.remove(a), s.targetIdByQuery.delete(i)
                    })
                }, Cc.prototype.executeQuery = function(t, n) {
                    var r = this,
                        i = uo.MIN,
                        o = Mo();
                    return this.persistence.runTransaction("Execute query", "readonly-idempotent", function(e) {
                        return r.getQueryData(e, t).next(function(t) {
                            if (t) return i = t.lastLimboFreeSnapshotVersion, r.queryCache.getMatchingKeysForTargetId(e, t.targetId).next(function(t) {
                                o = t
                            })
                        }).next(function() {
                            return r.queryEngine.getDocumentsMatchingQuery(e, t, n ? i : uo.MIN, n ? o : Mo())
                        }).next(function(t) {
                            return {
                                documents: t,
                                remoteKeys: o
                            }
                        })
                    })
                }, Cc.prototype.remoteDocumentKeys = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Remote document keys", "readonly-idempotent", function(t) {
                        return n.queryCache.getMatchingKeysForTargetId(t, e)
                    })
                }, Cc.prototype.getActiveClients = function() {
                    return this.persistence.getActiveClients()
                }, Cc.prototype.removeCachedMutationBatchMetadata = function(t) {
                    this.mutationQueue.removeCachedMutationKeys(t)
                }, Cc.prototype.setNetworkEnabled = function(t) {
                    this.persistence.setNetworkEnabled(t)
                }, Cc.prototype.applyWriteToRemoteDocuments = function(t, i, o) {
                    var e = this,
                        a = i.batch,
                        n = a.keys(),
                        s = Fo.resolve();
                    return n.forEach(function(r) {
                        s = s.next(function() {
                            return o.getEntry(t, r)
                        }).next(function(t) {
                            var e = t,
                                n = i.docVersions.get(r);
                            Vr(null !== n, "ackVersions should contain every doc in the write."), (!e || e.version.compareTo(n) < 0) && ((e = a.applyToRemoteDocument(r, e, i)) ? o.addEntry(e, i.commitVersion) : Vr(!t, "Mutation batch " + a + " applied to document " + t + " resulted in null"))
                        })
                    }), s.next(function() {
                        return e.mutationQueue.removeMutationBatch(t, a)
                    })
                }, Cc.prototype.collectGarbage = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary-idempotent", function(t) {
                        return e.collect(t, n.queryDataByTarget)
                    })
                }, Cc.prototype.getQueryForTarget = function(e) {
                    var n = this,
                        t = this.queryDataByTarget.get(e);
                    return t ? Promise.resolve(t.query) : this.persistence.runTransaction("Get query data", "readonly-idempotent", function(t) {
                        return n.queryCache.getQueryDataForTarget(t, e).next(function(t) {
                            return t ? t.query : null
                        })
                    })
                }, Cc.prototype.getNewDocumentChanges = function() {
                    var r = this;
                    return this.persistence.runTransaction("Get new document changes", "readonly-idempotent", function(t) {
                        return r.remoteDocuments.getNewDocumentChanges(t, r.lastDocumentChangeReadTime)
                    }).then(function(t) {
                        var e = t.changedDocs,
                            n = t.readTime;
                        return r.lastDocumentChangeReadTime = n, e
                    })
                }, Cc.prototype.synchronizeLastDocumentChangeReadTime = function() {
                    return d(this, void 0, void 0, function() {
                        var e, n = this;
                        return p(this, function(t) {
                            return this.remoteDocuments instanceof Ys ? (e = this.remoteDocuments, [2, this.persistence.runTransaction("Synchronize last document change read time", "readonly-idempotent", function(t) {
                                return e.getLastDocumentChange(t)
                            }).then(function(t) {
                                var e = t.readTime;
                                n.lastDocumentChangeReadTime = e
                            })]) : [2]
                        })
                    })
                }, Cc.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, Cc);

            function Cc(t, e, n) {
                this.persistence = t, this.queryEngine = e, this.localViewReferences = new bc, this.queryDataByTarget = new ho(bi), this.targetIdByQuery = new js(function(t) {
                    return t.canonicalId()
                }), this.lastDocumentChangeReadTime = uo.MIN, Vr(t.started, "LocalStore was passed an unstarted persistence implementation"), this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences), this.mutationQueue = t.getMutationQueue(n), this.remoteDocuments = t.getRemoteDocumentCache(), this.queryCache = t.getQueryCache(), this.localDocuments = new gc(this.remoteDocuments, this.mutationQueue, this.persistence.getIndexManager()), this.queryEngine.setLocalDocumentsView(this.localDocuments)
            }
            var Dc = (Nc.prototype.checkEmpty = function(t) {
                return Fo.resolve(0 === this.mutationQueue.length)
            }, Nc.prototype.acknowledgeBatch = function(t, e, n) {
                var r = e.batchId,
                    i = this.indexOfExistingBatchId(r, "acknowledged");
                Vr(0 === i, "Can only acknowledge the first batch in the mutation queue");
                var o = this.mutationQueue[i];
                return Vr(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, Fo.resolve()
            }, Nc.prototype.getLastStreamToken = function(t) {
                return Fo.resolve(this.lastStreamToken)
            }, Nc.prototype.setLastStreamToken = function(t, e) {
                return this.lastStreamToken = e, Fo.resolve()
            }, Nc.prototype.addMutationBatch = function(t, e, n, r) {
                Vr(0 !== r.length, "Mutation batches should not be empty");
                var i = this.nextBatchId;
                this.nextBatchId++, 0 < this.mutationQueue.length && Vr(this.mutationQueue[this.mutationQueue.length - 1].batchId < i, "Mutation batchIDs must be monotonically increasing order");
                var o = new Lo(i, e, n, r);
                this.mutationQueue.push(o);
                for (var a = 0, s = r; a < s.length; a++) {
                    var u = s[a];
                    this.batchesByDocumentKey = this.batchesByDocumentKey.add(new Sc(u.key, i)), this.indexManager.addToCollectionParentIndex(t, u.key.path.popLast())
                }
                return Fo.resolve(o)
            }, Nc.prototype.lookupMutationBatch = function(t, e) {
                return Fo.resolve(this.findMutationBatch(e))
            }, Nc.prototype.lookupMutationKeys = function(t, e) {
                var n = this.findMutationBatch(e);
                return Vr(null != n, "Failed to find local mutation batch."), Fo.resolve(n.keys())
            }, Nc.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                var n = e + 1,
                    r = this.indexOfBatchId(n),
                    i = r < 0 ? 0 : r;
                return Fo.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null)
            }, Nc.prototype.getHighestUnacknowledgedBatchId = function() {
                return Fo.resolve(0 === this.mutationQueue.length ? -1 : this.nextBatchId - 1)
            }, Nc.prototype.getAllMutationBatches = function(t) {
                return Fo.resolve(this.mutationQueue.slice())
            }, Nc.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, n) {
                var r = this,
                    e = new Sc(n, 0),
                    i = new Sc(n, Number.POSITIVE_INFINITY),
                    o = [];
                return this.batchesByDocumentKey.forEachInRange([e, i], function(t) {
                    Vr(n.isEqual(t.key), "Should only iterate over a single key's batches");
                    var e = r.findMutationBatch(t.targetOrBatchId);
                    Vr(null !== e, "Batches in the index must exist in the main table"), o.push(e)
                }), Fo.resolve(o)
            }, Nc.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
                var r = this,
                    i = new bo(bi);
                return e.forEach(function(e) {
                    var t = new Sc(e, 0),
                        n = new Sc(e, Number.POSITIVE_INFINITY);
                    r.batchesByDocumentKey.forEachInRange([t, n], function(t) {
                        Vr(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), i = i.add(t.targetOrBatchId)
                    })
                }), Fo.resolve(this.findMutationBatches(i))
            }, Nc.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                Vr(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var n = e.path,
                    r = n.length + 1,
                    i = n;
                Ki.isDocumentKey(i) || (i = i.child(""));
                var o = new Sc(new Ki(i), 0),
                    a = new bo(bi);
                return this.batchesByDocumentKey.forEachWhile(function(t) {
                    var e = t.key.path;
                    return !!n.isPrefixOf(e) && (e.length === r && (a = a.add(t.targetOrBatchId)), !0)
                }, o), Fo.resolve(this.findMutationBatches(a))
            }, Nc.prototype.findMutationBatches = function(t) {
                var n = this,
                    r = [];
                return t.forEach(function(t) {
                    var e = n.findMutationBatch(t);
                    null !== e && r.push(e)
                }), r
            }, Nc.prototype.removeMutationBatch = function(n, r) {
                var i = this;
                Vr(0 === this.indexOfExistingBatchId(r.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.mutationQueue.shift();
                var o = this.batchesByDocumentKey;
                return Fo.forEach(r.mutations, function(t) {
                    var e = new Sc(t.key, r.batchId);
                    return o = o.delete(e), i.referenceDelegate.removeMutationReference(n, t.key)
                }).next(function() {
                    i.batchesByDocumentKey = o
                })
            }, Nc.prototype.removeCachedMutationKeys = function(t) {}, Nc.prototype.containsKey = function(t, e) {
                var n = new Sc(e, 0),
                    r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                return Fo.resolve(e.isEqual(r && r.key))
            }, Nc.prototype.performConsistencyCheck = function(t) {
                return 0 === this.mutationQueue.length && Vr(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), Fo.resolve()
            }, Nc.prototype.indexOfExistingBatchId = function(t, e) {
                var n = this.indexOfBatchId(t);
                return Vr(0 <= n && n < this.mutationQueue.length, "Batches must exist to be " + e), n
            }, Nc.prototype.indexOfBatchId = function(t) {
                return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId
            }, Nc.prototype.findMutationBatch = function(t) {
                var e = this.indexOfBatchId(t);
                if (e < 0 || e >= this.mutationQueue.length) return null;
                var n = this.mutationQueue[e];
                return Vr(n.batchId === t, "If found batch must match"), n
            }, Nc);

            function Nc(t, e) {
                this.indexManager = t, this.referenceDelegate = e, this.mutationQueue = [], this.nextBatchId = 1, this.lastStreamToken = Qr(), this.batchesByDocumentKey = new bo(Sc.compareByKey)
            }
            var Ac = (kc.prototype.getTargetCount = function(t) {
                return Fo.resolve(this.targetCount)
            }, kc.prototype.forEachTarget = function(t, n) {
                return this.queries.forEach(function(t, e) {
                    return n(e)
                }), Fo.resolve()
            }, kc.prototype.getLastRemoteSnapshotVersion = function(t) {
                return Fo.resolve(this.lastRemoteSnapshotVersion)
            }, kc.prototype.getHighestSequenceNumber = function(t) {
                return Fo.resolve(this.highestSequenceNumber)
            }, kc.prototype.allocateTargetId = function(t) {
                var e = this.targetIdGenerator.after(this.highestTargetId);
                return this.highestTargetId = e, Fo.resolve(e)
            }, kc.prototype.setTargetsMetadata = function(t, e, n) {
                return n && (this.lastRemoteSnapshotVersion = n), e > this.highestSequenceNumber && (this.highestSequenceNumber = e), Fo.resolve()
            }, kc.prototype.saveQueryData = function(t) {
                this.queries.set(t.query, t);
                var e = t.targetId;
                e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.highestSequenceNumber && (this.highestSequenceNumber = t.sequenceNumber)
            }, kc.prototype.addQueryData = function(t, e) {
                return Vr(!this.queries.has(e.query), "Adding a query that already exists"), this.saveQueryData(e), this.targetCount += 1, Fo.resolve()
            }, kc.prototype.updateQueryData = function(t, e) {
                return Vr(this.queries.has(e.query), "Updating a non-existent query"), this.saveQueryData(e), Fo.resolve()
            }, kc.prototype.removeQueryData = function(t, e) {
                return Vr(0 < this.targetCount, "Removing a target from an empty cache"), Vr(this.queries.has(e.query), "Removing a non-existent target from the cache"), this.queries.delete(e.query), this.references.removeReferencesForId(e.targetId), this.targetCount -= 1, Fo.resolve()
            }, kc.prototype.removeTargets = function(n, r, i) {
                var o = this,
                    a = 0,
                    s = [];
                return this.queries.forEach(function(t, e) {
                    e.sequenceNumber <= r && null === i.get(e.targetId) && (o.queries.delete(t), s.push(o.removeMatchingKeysForTargetId(n, e.targetId)), a++)
                }), Fo.waitFor(s).next(function() {
                    return a
                })
            }, kc.prototype.getQueryCount = function(t) {
                return Fo.resolve(this.targetCount)
            }, kc.prototype.getQueryData = function(t, e) {
                var n = this.queries.get(e) || null;
                return Fo.resolve(n)
            }, kc.prototype.getQueryDataForTarget = function(t, e) {
                return Fr("Not yet implemented.")
            }, kc.prototype.addMatchingKeys = function(e, t, n) {
                this.references.addReferences(t, n);
                var r = this.persistence.referenceDelegate,
                    i = [];
                return r && t.forEach(function(t) {
                    i.push(r.addReference(e, t))
                }), Fo.waitFor(i)
            }, kc.prototype.removeMatchingKeys = function(e, t, n) {
                this.references.removeReferences(t, n);
                var r = this.persistence.referenceDelegate,
                    i = [];
                return r && t.forEach(function(t) {
                    i.push(r.removeReference(e, t))
                }), Fo.waitFor(i)
            }, kc.prototype.removeMatchingKeysForTargetId = function(t, e) {
                return this.references.removeReferencesForId(e), Fo.resolve()
            }, kc.prototype.getMatchingKeysForTargetId = function(t, e) {
                var n = this.references.referencesForId(e);
                return Fo.resolve(n)
            }, kc.prototype.containsKey = function(t, e) {
                return Fo.resolve(this.references.containsKey(e))
            }, kc);

            function kc(t) {
                this.persistence = t, this.queries = new js(function(t) {
                    return t.canonicalId()
                }), this.lastRemoteSnapshotVersion = uo.MIN, this.highestTargetId = 0, this.highestSequenceNumber = 0, this.references = new bc, this.targetCount = 0, this.targetIdGenerator = Xo.forQueryCache()
            }
            var Rc, Mc = (Oc.prototype.addEntry = function(t, e, n) {
                Vr(!n.isEqual(uo.MIN), "Cannot add a document with a read time of zero");
                var r = e.key,
                    i = this.docs.get(r),
                    o = i ? i.size : 0,
                    a = this.sizer(e);
                return this.docs = this.docs.insert(r, {
                    maybeDocument: e,
                    size: a,
                    readTime: n
                }), this.size += a - o, this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
            }, Oc.prototype.removeEntry = function(t) {
                var e = this.docs.get(t);
                e && (this.docs = this.docs.remove(t), this.size -= e.size)
            }, Oc.prototype.getEntry = function(t, e) {
                var n = this.docs.get(e);
                return Fo.resolve(n ? n.maybeDocument : null)
            }, Oc.prototype.getEntries = function(t, e) {
                var n = this,
                    r = Co();
                return e.forEach(function(t) {
                    var e = n.docs.get(t);
                    r = r.insert(t, e ? e.maybeDocument : null)
                }), Fo.resolve(r)
            }, Oc.prototype.getDocumentsMatchingQuery = function(t, e, n) {
                Vr(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                for (var r = No(), i = new Ki(e.path.child("")), o = this.docs.getIteratorFrom(i); o.hasNext();) {
                    var a = o.getNext(),
                        s = a.key,
                        u = a.value,
                        c = u.maybeDocument,
                        h = u.readTime;
                    if (!e.path.isPrefixOf(s.path)) break;
                    h.compareTo(n) <= 0 || c instanceof xs && e.matches(c) && (r = r.insert(c.key, c))
                }
                return Fo.resolve(r)
            }, Oc.prototype.forEachDocumentKey = function(t, e) {
                return Fo.forEach(this.docs, function(t) {
                    return e(t)
                })
            }, Oc.prototype.getNewDocumentChanges = function(t, e) {
                throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence")
            }, Oc.prototype.newChangeBuffer = function(t) {
                return new Oc.RemoteDocumentChangeBuffer(this)
            }, Oc.prototype.getSize = function(t) {
                return Fo.resolve(this.size)
            }, Oc.RemoteDocumentChangeBuffer = (t(_c, Rc = Gs), _c.prototype.applyChanges = function(n) {
                var r = this,
                    i = [];
                return this.changes.forEach(function(t, e) {
                    e ? i.push(r.documentCache.addEntry(n, e, r.readTime)) : r.documentCache.removeEntry(t)
                }), Fo.waitFor(i)
            }, _c.prototype.getFromCache = function(t, e) {
                return this.documentCache.getEntry(t, e)
            }, _c.prototype.getAllFromCache = function(t, e) {
                return this.documentCache.getEntries(t, e)
            }, _c), Oc);

            function Oc(t, e) {
                this.indexManager = t, this.sizer = e, this.docs = new ho(Ki.comparator), this.size = 0
            }

            function _c(t) {
                var e = Rc.call(this) || this;
                return e.documentCache = t, e
            }
            var Lc = (Pc.createLruPersistence = function(t, e, n) {
                return new Pc(t, function(t) {
                    return new Uc(t, new Ku(e), n)
                })
            }, Pc.createEagerPersistence = function(t) {
                return new Pc(t, function(t) {
                    return new Vc(t)
                })
            }, Pc.prototype.shutdown = function() {
                return this._started = !1, Promise.resolve()
            }, Object.defineProperty(Pc.prototype, "started", {
                get: function() {
                    return this._started
                },
                enumerable: !0,
                configurable: !0
            }), Pc.prototype.getActiveClients = function() {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        return [2, [this.clientId]]
                    })
                })
            }, Pc.prototype.setPrimaryStateListener = function(t) {
                return t(!0)
            }, Pc.prototype.setDatabaseDeletedListener = function() {}, Pc.prototype.setNetworkEnabled = function(t) {}, Pc.prototype.getIndexManager = function() {
                return this.indexManager
            }, Pc.prototype.getMutationQueue = function(t) {
                var e = this.mutationQueues[t.toKey()];
                return e || (e = new Dc(this.indexManager, this.referenceDelegate), this.mutationQueues[t.toKey()] = e), e
            }, Pc.prototype.getQueryCache = function() {
                return this.queryCache
            }, Pc.prototype.getRemoteDocumentCache = function() {
                return this.remoteDocumentCache
            }, Pc.prototype.runTransaction = function(t, e, n) {
                var r = this;
                Pr("MemoryPersistence", "Starting transaction:", t);
                var i = new qc(this.listenSequence.next());
                return this.referenceDelegate.onTransactionStarted(), n(i).next(function(t) {
                    return r.referenceDelegate.onTransactionCommitted(i).next(function() {
                        return t
                    })
                }).toPromise().then(function(t) {
                    return i.raiseOnCommittedEvent(), t
                })
            }, Pc.prototype.mutationQueuesContainKey = function(e, n) {
                return Fo.or(function(t) {
                    var n = [];
                    return Jr(t, function(t, e) {
                        return n.push(e)
                    }), n
                }(this.mutationQueues).map(function(t) {
                    return function() {
                        return t.containsKey(e, n)
                    }
                }))
            }, Pc);

            function Pc(t, e) {
                var n = this;
                this.clientId = t, this.mutationQueues = {}, this.listenSequence = new Mi(0), this._started = !1, this._started = !0, this.referenceDelegate = e(this), this.queryCache = new Ac(this);
                this.indexManager = new nu, this.remoteDocumentCache = new Mc(this.indexManager, function(t) {
                    return n.referenceDelegate.documentSize(t)
                })
            }
            var xc, qc = (t(Fc, xc = ec), Fc);

            function Fc(t) {
                var e = xc.call(this) || this;
                return e.currentSequenceNumber = t, e
            }
            var Vc = (Object.defineProperty(Bc.prototype, "orphanedDocuments", {
                get: function() {
                    if (this._orphanedDocuments) return this._orphanedDocuments;
                    throw Fr("orphanedDocuments is only valid during a transaction.")
                },
                enumerable: !0,
                configurable: !0
            }), Bc.prototype.setInMemoryPins = function(t) {
                this.inMemoryPins = t
            }, Bc.prototype.addReference = function(t, e) {
                return this.orphanedDocuments.delete(e), Fo.resolve()
            }, Bc.prototype.removeReference = function(t, e) {
                return this.orphanedDocuments.add(e), Fo.resolve()
            }, Bc.prototype.removeMutationReference = function(t, e) {
                return this.orphanedDocuments.add(e), Fo.resolve()
            }, Bc.prototype.removeTarget = function(t, e) {
                var n = this,
                    r = this.persistence.getQueryCache();
                return r.getMatchingKeysForTargetId(t, e.targetId).next(function(t) {
                    t.forEach(function(t) {
                        return n.orphanedDocuments.add(t)
                    })
                }).next(function() {
                    return r.removeQueryData(t, e)
                })
            }, Bc.prototype.onTransactionStarted = function() {
                this._orphanedDocuments = new Set
            }, Bc.prototype.onTransactionCommitted = function(t) {
                var n = this,
                    r = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                return Fo.forEach(this.orphanedDocuments, function(e) {
                    return n.isReferenced(t, e).next(function(t) {
                        t || r.removeEntry(e)
                    })
                }).next(function() {
                    return n._orphanedDocuments = null, r.apply(t)
                })
            }, Bc.prototype.updateLimboDocument = function(t, e) {
                var n = this;
                return this.isReferenced(t, e).next(function(t) {
                    t ? n.orphanedDocuments.delete(e) : n.orphanedDocuments.add(e)
                })
            }, Bc.prototype.documentSize = function(t) {
                return 0
            }, Bc.prototype.isReferenced = function(t, e) {
                var n = this;
                return Fo.or([function() {
                    return n.persistence.getQueryCache().containsKey(t, e)
                }, function() {
                    return n.persistence.mutationQueuesContainKey(t, e)
                }, function() {
                    return Fo.resolve(n.inMemoryPins.containsKey(e))
                }])
            }, Bc);

            function Bc(t) {
                this.persistence = t, this.inMemoryPins = null, this._orphanedDocuments = null
            }
            var Uc = (Qc.prototype.onTransactionStarted = function() {}, Qc.prototype.onTransactionCommitted = function(t) {
                return Fo.resolve()
            }, Qc.prototype.forEachTarget = function(t, e) {
                return this.persistence.getQueryCache().forEachTarget(t, e)
            }, Qc.prototype.getSequenceNumberCount = function(t) {
                var n = this.orphanedDocumentCount(t);
                return this.persistence.getQueryCache().getTargetCount(t).next(function(e) {
                    return n.next(function(t) {
                        return e + t
                    })
                })
            }, Qc.prototype.orphanedDocumentCount = function(t) {
                var e = 0;
                return this.forEachOrphanedDocumentSequenceNumber(t, function(t) {
                    e++
                }).next(function() {
                    return e
                })
            }, Qc.prototype.forEachOrphanedDocumentSequenceNumber = function(n, r) {
                var i = this;
                return Fo.forEach(this.orphanedSequenceNumbers, function(t, e) {
                    return i.isPinned(n, t, e).next(function(t) {
                        return t ? Fo.resolve() : r(e)
                    })
                })
            }, Qc.prototype.setInMemoryPins = function(t) {
                this.inMemoryPins = t
            }, Qc.prototype.removeTargets = function(t, e, n) {
                return this.persistence.getQueryCache().removeTargets(t, e, n)
            }, Qc.prototype.removeOrphanedDocuments = function(t, n) {
                var r = this,
                    i = 0,
                    e = this.persistence.getRemoteDocumentCache(),
                    o = e.newChangeBuffer();
                return e.forEachDocumentKey(t, function(e) {
                    return r.isPinned(t, e, n).next(function(t) {
                        t || (i++, o.removeEntry(e))
                    })
                }).next(function() {
                    return o.apply(t)
                }).next(function() {
                    return i
                })
            }, Qc.prototype.removeMutationReference = function(t, e) {
                return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Fo.resolve()
            }, Qc.prototype.removeTarget = function(t, e) {
                var n = e.withSequenceNumber(t.currentSequenceNumber);
                return this.persistence.getQueryCache().updateQueryData(t, n)
            }, Qc.prototype.addReference = function(t, e) {
                return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Fo.resolve()
            }, Qc.prototype.removeReference = function(t, e) {
                return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Fo.resolve()
            }, Qc.prototype.updateLimboDocument = function(t, e) {
                return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Fo.resolve()
            }, Qc.prototype.documentSize = function(t) {
                var e, n = this.serializer.toDbRemoteDocument(t, t.version);
                if (n.document) e = n.document;
                else if (n.unknownDocument) e = n.unknownDocument;
                else {
                    if (!n.noDocument) throw Fr("Unknown remote document type");
                    e = n.noDocument
                }
                return JSON.stringify(e).length
            }, Qc.prototype.isPinned = function(t, e, n) {
                var r = this;
                return Fo.or([function() {
                    return r.persistence.mutationQueuesContainKey(t, e)
                }, function() {
                    return Fo.resolve(r.inMemoryPins.containsKey(e))
                }, function() {
                    return r.persistence.getQueryCache().containsKey(t, e)
                }, function() {
                    var t = r.orphanedSequenceNumbers.get(e);
                    return Fo.resolve(void 0 !== t && n < t)
                }])
            }, Qc.prototype.getCacheSize = function(t) {
                return this.persistence.getRemoteDocumentCache().getSize(t)
            }, Qc);

            function Qc(t, e, n) {
                this.persistence = t, this.serializer = e, this.inMemoryPins = null, this.orphanedSequenceNumbers = new js(function(t) {
                    return no(t.path)
                }), this.garbageCollector = new $u(this, n)
            }
            var Kc = (jc.prototype.setLocalDocumentsView = function(t) {
                this.localDocumentsView = t
            }, jc.prototype.getDocumentsMatchingQuery = function(t, e, n, r) {
                return Vr(void 0 !== this.localDocumentsView, "setLocalDocumentsView() not called"), this.localDocumentsView.getDocumentsMatchingQuery(t, e, uo.MIN)
            }, jc);

            function jc() {}
            var Wc = Number,
                Gc = Wc.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
                zc = Wc.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                Hc = Wc.isInteger || function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
                };

            function Yc(t) {
                return null == t
            }

            function Xc(t) {
                return Hc(t) && t <= zc && Gc <= t
            }
            var Jc = (Zc.prototype.reset = function() {
                this.currentBaseMs = 0
            }, Zc.prototype.resetToMax = function() {
                this.currentBaseMs = this.maxDelayMs
            }, Zc.prototype.backoffAndRun = function(t) {
                var e = this;
                this.cancel();
                var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()),
                    r = Math.max(0, Date.now() - this.lastAttemptTime),
                    i = Math.max(0, n - r);
                0 < this.currentBaseMs && Pr("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function() {
                    return e.lastAttemptTime = Date.now(), t()
                }), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs)
            }, Zc.prototype.cancel = function() {
                null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null)
            }, Zc.prototype.jitterDelayMs = function() {
                return (Math.random() - .5) * this.currentBaseMs
            }, Zc);

            function Zc(t, e, n, r, i) {
                void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.queue = t, this.timerId = e, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.currentBaseMs = 0, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset()
            }
            var $c, th, eh = "PersistentStream";
            (th = $c = $c || {})[th.Initial = 0] = "Initial", th[th.Starting = 1] = "Starting", th[th.Open = 2] = "Open", th[th.Error = 3] = "Error", th[th.Backoff = 4] = "Backoff";
            var nh = (rh.prototype.isStarted = function() {
                return this.state === $c.Starting || this.state === $c.Open || this.state === $c.Backoff
            }, rh.prototype.isOpen = function() {
                return this.state === $c.Open
            }, rh.prototype.start = function() {
                this.state !== $c.Error ? (Vr(this.state === $c.Initial, "Already started"), this.auth()) : this.performBackoff()
            }, rh.prototype.stop = function() {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.isStarted() ? [4, this.close($c.Initial)] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, rh.prototype.inhibitBackoff = function() {
                Vr(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = $c.Initial, this.backoff.reset()
            }, rh.prototype.markIdle = function() {
                var t = this;
                this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, 6e4, function() {
                    return t.handleIdleCloseTimer()
                }))
            }, rh.prototype.sendRequest = function(t) {
                this.cancelIdleCheck(), this.stream.send(t)
            }, rh.prototype.handleIdleCloseTimer = function() {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        return this.isOpen() ? [2, this.close($c.Initial)] : [2]
                    })
                })
            }, rh.prototype.cancelIdleCheck = function() {
                this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null)
            }, rh.prototype.close = function(e, n) {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return Vr(this.isStarted(), "Only started streams should be closed."), Vr(e === $c.Error || Yc(n), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, e !== $c.Error ? this.backoff.reset() : n && n.code === jr.RESOURCE_EXHAUSTED ? (xr(n.toString()), xr("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : n && n.code === jr.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.onClose(n)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, rh.prototype.tearDown = function() {}, rh.prototype.auth = function() {
                var n = this;
                Vr(this.state === $c.Initial, "Must be in initial state to auth"), this.state = $c.Starting;
                var t = this.getCloseGuardedDispatcher(this.closeCount),
                    e = this.closeCount;
                this.credentialsProvider.getToken().then(function(t) {
                    n.closeCount === e && n.startStream(t)
                }, function(e) {
                    t(function() {
                        var t = new Wr(jr.UNKNOWN, "Fetching auth token failed: " + e.message);
                        return n.handleStreamClose(t)
                    })
                })
            }, rh.prototype.startStream = function(t) {
                var e = this;
                Vr(this.state === $c.Starting, "Trying to start stream in a non-starting state");
                var n = this.getCloseGuardedDispatcher(this.closeCount);
                this.stream = this.startRpc(t), this.stream.onOpen(function() {
                    n(function() {
                        return Vr(e.state === $c.Starting, "Expected stream to be in state Starting, but was " + e.state), e.state = $c.Open, e.listener.onOpen()
                    })
                }), this.stream.onClose(function(t) {
                    n(function() {
                        return e.handleStreamClose(t)
                    })
                }), this.stream.onMessage(function(t) {
                    n(function() {
                        return e.onMessage(t)
                    })
                })
            }, rh.prototype.performBackoff = function() {
                var t = this;
                Vr(this.state === $c.Error, "Should only perform backoff when in Error state"), this.state = $c.Backoff, this.backoff.backoffAndRun(function() {
                    return d(t, void 0, void 0, function() {
                        return p(this, function(t) {
                            return Vr(this.state === $c.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = $c.Initial, this.start(), Vr(this.isStarted(), "PersistentStream should have started"), [2]
                        })
                    })
                })
            }, rh.prototype.handleStreamClose = function(t) {
                return Vr(this.isStarted(), "Can't handle server close on non-started stream"), Pr(eh, "close with error: " + t), this.stream = null, this.close($c.Error, t)
            }, rh.prototype.getCloseGuardedDispatcher = function(e) {
                var n = this;
                return function(t) {
                    n.queue.enqueueAndForget(function() {
                        return n.closeCount === e ? t() : (Pr(eh, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                    })
                }
            }, rh);

            function rh(t, e, n, r, i, o) {
                this.queue = t, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = $c.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new Jc(t, e)
            }
            var ih, oh = (t(ah, ih = nh), ah.prototype.startRpc = function(t) {
                return this.connection.openStream("Listen", t)
            }, ah.prototype.onMessage = function(t) {
                this.backoff.reset();
                var e = this.serializer.fromWatchChange(t),
                    n = this.serializer.versionFromListenResponse(t);
                return this.listener.onWatchChange(e, n)
            }, ah.prototype.watch = function(t) {
                var e = {};
                e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t);
                var n = this.serializer.toListenRequestLabels(t);
                n && (e.labels = n), this.sendRequest(e)
            }, ah.prototype.unwatch = function(t) {
                var e = {};
                e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e)
            }, ah);

            function ah(t, e, n, r, i) {
                var o = ih.call(this, t, Wi.ListenStreamConnectionBackoff, Wi.ListenStreamIdle, e, n, i) || this;
                return o.serializer = r, o
            }
            var sh, uh = (t(ch, sh = nh), Object.defineProperty(ch.prototype, "handshakeComplete", {
                get: function() {
                    return this.handshakeComplete_
                },
                enumerable: !0,
                configurable: !0
            }), ch.prototype.start = function() {
                this.handshakeComplete_ = !1, sh.prototype.start.call(this)
            }, ch.prototype.tearDown = function() {
                this.handshakeComplete_ && this.writeMutations([])
            }, ch.prototype.startRpc = function(t) {
                return this.connection.openStream("Write", t)
            }, ch.prototype.onMessage = function(t) {
                if (Vr(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.handshakeComplete_) {
                    this.backoff.reset();
                    var e = this.serializer.fromWriteResults(t.writeResults, t.commitTime),
                        n = this.serializer.fromVersion(t.commitTime);
                    return this.listener.onMutationResult(n, e)
                }
                return Vr(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_ = !0, this.listener.onHandshakeComplete()
            }, ch.prototype.writeHandshake = function() {
                Vr(this.isOpen(), "Writing handshake requires an opened stream"), Vr(!this.handshakeComplete_, "Handshake already completed");
                var t = {};
                t.database = this.serializer.encodedDatabaseId, this.sendRequest(t)
            }, ch.prototype.writeMutations = function(t) {
                var e = this;
                Vr(this.isOpen(), "Writing mutations requires an opened stream"), Vr(this.handshakeComplete_, "Handshake must be complete before writing mutations"), Vr(0 < this.lastStreamToken.length, "Trying to write mutation without a token");
                var n = {
                    streamToken: this.lastStreamToken,
                    writes: t.map(function(t) {
                        return e.serializer.toMutation(t)
                    })
                };
                this.sendRequest(n)
            }, ch);

            function ch(t, e, n, r, i) {
                var o = sh.call(this, t, Wi.WriteStreamConnectionBackoff, Wi.WriteStreamIdle, e, n, i) || this;
                return o.serializer = r, o.handshakeComplete_ = !1, o.lastStreamToken = Qr(), o
            }
            var hh = (lh.prototype.newPersistentWriteStream = function(t) {
                return new uh(this.queue, this.connection, this.credentials, this.serializer, t)
            }, lh.prototype.newPersistentWatchStream = function(t) {
                return new oh(this.queue, this.connection, this.credentials, this.serializer, t)
            }, lh.prototype.commit = function(t) {
                var e = this,
                    n = {
                        database: this.serializer.encodedDatabaseId,
                        writes: t.map(function(t) {
                            return e.serializer.toMutation(t)
                        })
                    };
                return this.invokeRPC("Commit", n).then(function(t) {
                    return e.serializer.fromWriteResults(t.writeResults, t.commitTime)
                })
            }, lh.prototype.lookup = function(e) {
                var i = this,
                    t = {
                        database: this.serializer.encodedDatabaseId,
                        documents: e.map(function(t) {
                            return i.serializer.toName(t)
                        })
                    };
                return this.invokeStreamingRPC("BatchGetDocuments", t).then(function(t) {
                    var n = Io();
                    t.forEach(function(t) {
                        var e = i.serializer.fromMaybeDocument(t);
                        n = n.insert(e.key, e)
                    });
                    var r = [];
                    return e.forEach(function(t) {
                        var e = n.get(t);
                        Vr(!!e, "Missing entity in write response for " + t), r.push(e)
                    }), r
                })
            }, lh.prototype.invokeRPC = function(e, n) {
                var r = this;
                return this.credentials.getToken().then(function(t) {
                    return r.connection.invokeRPC(e, n, t)
                }).catch(function(t) {
                    throw t.code === jr.UNAUTHENTICATED && r.credentials.invalidateToken(), t
                })
            }, lh.prototype.invokeStreamingRPC = function(e, n) {
                var r = this;
                return this.credentials.getToken().then(function(t) {
                    return r.connection.invokeStreamingRPC(e, n, t)
                }).catch(function(t) {
                    throw t.code === jr.UNAUTHENTICATED && r.credentials.invalidateToken(), t
                })
            }, lh);

            function lh(t, e, n, r) {
                this.queue = t, this.connection = e, this.credentials = n, this.serializer = r
            }
            var fh, dh, ph, mh, yh = (gh.prototype.lookup = function(r) {
                return d(this, void 0, void 0, function() {
                    var e, n = this;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.ensureCommitNotCalled(), 0 < this.mutations.length) throw new Wr(jr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                return [4, this.datastore.lookup(r)];
                            case 1:
                                return (e = t.sent()).forEach(function(t) {
                                    t instanceof Vs || t instanceof xs ? n.recordVersion(t) : Fr("Document in a transaction was a " + t.constructor.name)
                                }), [2, e]
                        }
                    })
                })
            }, gh.prototype.set = function(t, e) {
                this.write(e.toMutations(t, this.precondition(t))), this.writtenDocs.add(t)
            }, gh.prototype.update = function(t, e) {
                try {
                    this.write(e.toMutations(t, this.preconditionForUpdate(t)))
                } catch (t) {
                    this.lastWriteError = t
                }
                this.writtenDocs.add(t)
            }, gh.prototype.delete = function(t) {
                this.write([new Ua(t, this.precondition(t))]), this.writtenDocs.add(t)
            }, gh.prototype.commit = function() {
                return d(this, void 0, void 0, function() {
                    var e;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                                if (e = this.readVersions, this.mutations.forEach(function(t) {
                                        e = e.remove(t.key)
                                    }), !e.isEmpty()) throw new Wr(jr.INVALID_ARGUMENT, "Every document read in a transaction must also be written.");
                                return [4, this.datastore.commit(this.mutations)];
                            case 1:
                                return t.sent(), this.committed = !0, [2]
                        }
                    })
                })
            }, gh.prototype.recordVersion = function(t) {
                var e;
                if (t instanceof xs) e = t.version;
                else {
                    if (!(t instanceof Vs)) throw Fr("Document in a transaction was a " + t.constructor.name);
                    e = uo.forDeletedDoc()
                }
                var n = this.readVersions.get(t.key);
                if (null !== n) {
                    if (!e.isEqual(n)) throw new Wr(jr.ABORTED, "Document version changed between two reads.")
                } else this.readVersions = this.readVersions.insert(t.key, e)
            }, gh.prototype.precondition = function(t) {
                var e = this.readVersions.get(t);
                return !this.writtenDocs.has(t) && e ? Ea.updateTime(e) : Ea.NONE
            }, gh.prototype.preconditionForUpdate = function(t) {
                var e = this.readVersions.get(t);
                if (this.writtenDocs.has(t) || !e) return Ea.exists(!0);
                if (e.isEqual(uo.forDeletedDoc())) throw new Wr(jr.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                return Ea.updateTime(e)
            }, gh.prototype.write = function(t) {
                this.ensureCommitNotCalled(), this.mutations = this.mutations.concat(t)
            }, gh.prototype.ensureCommitNotCalled = function() {
                Vr(!this.committed, "A transaction object cannot be used after its update callback has been invoked.")
            }, gh);

            function gh(t) {
                this.datastore = t, this.readVersions = ko(), this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set
            }(dh = fh = fh || {})[dh.Unknown = 0] = "Unknown", dh[dh.Online = 1] = "Online", dh[dh.Offline = 2] = "Offline", (mh = ph = ph || {})[mh.RemoteStore = 0] = "RemoteStore", mh[mh.SharedClientState = 1] = "SharedClientState";
            var vh, bh, wh = (Sh.prototype.handleWatchStreamStart = function() {
                var t = this;
                0 === this.watchStreamFailures && (this.setAndBroadcast(fh.Unknown), Vr(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(Wi.OnlineStateTimeout, 1e4, function() {
                    return t.onlineStateTimer = null, Vr(t.state === fh.Unknown, "Timer should be canceled if we transitioned to a different state."), t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."), t.setAndBroadcast(fh.Offline), Promise.resolve()
                }))
            }, Sh.prototype.handleWatchStreamFailure = function(t) {
                this.state === fh.Online ? (this.setAndBroadcast(fh.Unknown), Vr(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), Vr(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, 1 <= this.watchStreamFailures && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: " + t.toString()), this.setAndBroadcast(fh.Offline)))
            }, Sh.prototype.set = function(t) {
                this.clearOnlineStateTimer(), this.watchStreamFailures = 0, t === fh.Online && (this.shouldWarnClientIsOffline = !1), this.setAndBroadcast(t)
            }, Sh.prototype.setAndBroadcast = function(t) {
                t !== this.state && (this.state = t, this.onlineStateHandler(t))
            }, Sh.prototype.logClientOfflineWarningIfNecessary = function(t) {
                var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                this.shouldWarnClientIsOffline ? (xr(e), this.shouldWarnClientIsOffline = !1) : Pr("OnlineStateTracker", e)
            }, Sh.prototype.clearOnlineStateTimer = function() {
                null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null)
            }, Sh);

            function Sh(t, e) {
                this.asyncQueue = t, this.onlineStateHandler = e, this.state = fh.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline = !0
            }

            function Th(t) {
                switch (t) {
                    case jr.OK:
                        return Fr("Treated status OK as error");
                    case jr.CANCELLED:
                    case jr.UNKNOWN:
                    case jr.DEADLINE_EXCEEDED:
                    case jr.RESOURCE_EXHAUSTED:
                    case jr.INTERNAL:
                    case jr.UNAVAILABLE:
                    case jr.UNAUTHENTICATED:
                        return !1;
                    case jr.INVALID_ARGUMENT:
                    case jr.NOT_FOUND:
                    case jr.ALREADY_EXISTS:
                    case jr.PERMISSION_DENIED:
                    case jr.FAILED_PRECONDITION:
                    case jr.ABORTED:
                    case jr.OUT_OF_RANGE:
                    case jr.UNIMPLEMENTED:
                    case jr.DATA_LOSS:
                        return !0;
                    default:
                        return Fr("Unknown status code: " + t)
                }
            }

            function Eh(t) {
                if (void 0 === t) return xr("GRPC error has no .code"), jr.UNKNOWN;
                switch (t) {
                    case vh.OK:
                        return jr.OK;
                    case vh.CANCELLED:
                        return jr.CANCELLED;
                    case vh.UNKNOWN:
                        return jr.UNKNOWN;
                    case vh.DEADLINE_EXCEEDED:
                        return jr.DEADLINE_EXCEEDED;
                    case vh.RESOURCE_EXHAUSTED:
                        return jr.RESOURCE_EXHAUSTED;
                    case vh.INTERNAL:
                        return jr.INTERNAL;
                    case vh.UNAVAILABLE:
                        return jr.UNAVAILABLE;
                    case vh.UNAUTHENTICATED:
                        return jr.UNAUTHENTICATED;
                    case vh.INVALID_ARGUMENT:
                        return jr.INVALID_ARGUMENT;
                    case vh.NOT_FOUND:
                        return jr.NOT_FOUND;
                    case vh.ALREADY_EXISTS:
                        return jr.ALREADY_EXISTS;
                    case vh.PERMISSION_DENIED:
                        return jr.PERMISSION_DENIED;
                    case vh.FAILED_PRECONDITION:
                        return jr.FAILED_PRECONDITION;
                    case vh.ABORTED:
                        return jr.ABORTED;
                    case vh.OUT_OF_RANGE:
                        return jr.OUT_OF_RANGE;
                    case vh.UNIMPLEMENTED:
                        return jr.UNIMPLEMENTED;
                    case vh.DATA_LOSS:
                        return jr.DATA_LOSS;
                    default:
                        return Fr("Unknown status code: " + t)
                }
            }(bh = vh = vh || {})[bh.OK = 0] = "OK", bh[bh.CANCELLED = 1] = "CANCELLED", bh[bh.UNKNOWN = 2] = "UNKNOWN", bh[bh.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", bh[bh.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", bh[bh.NOT_FOUND = 5] = "NOT_FOUND", bh[bh.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", bh[bh.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", bh[bh.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", bh[bh.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", bh[bh.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", bh[bh.ABORTED = 10] = "ABORTED", bh[bh.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", bh[bh.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", bh[bh.INTERNAL = 13] = "INTERNAL", bh[bh.UNAVAILABLE = 14] = "UNAVAILABLE", bh[bh.DATA_LOSS = 15] = "DATA_LOSS";
            var Ih, Ch, Dh, Nh, Ah = (kh.emptySet = function(t) {
                return new kh(t.comparator)
            }, kh.prototype.has = function(t) {
                return null != this.keyedMap.get(t)
            }, kh.prototype.get = function(t) {
                return this.keyedMap.get(t)
            }, kh.prototype.first = function() {
                return this.sortedSet.minKey()
            }, kh.prototype.last = function() {
                return this.sortedSet.maxKey()
            }, kh.prototype.isEmpty = function() {
                return this.sortedSet.isEmpty()
            }, kh.prototype.indexOf = function(t) {
                var e = this.keyedMap.get(t);
                return e ? this.sortedSet.indexOf(e) : -1
            }, Object.defineProperty(kh.prototype, "size", {
                get: function() {
                    return this.sortedSet.size
                },
                enumerable: !0,
                configurable: !0
            }), kh.prototype.forEach = function(n) {
                this.sortedSet.inorderTraversal(function(t, e) {
                    return n(t), !1
                })
            }, kh.prototype.add = function(t) {
                var e = this.delete(t.key);
                return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
            }, kh.prototype.delete = function(t) {
                var e = this.get(t);
                return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
            }, kh.prototype.isEqual = function(t) {
                if (!(t instanceof kh)) return !1;
                if (this.size !== t.size) return !1;
                for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) {
                    var r = e.getNext().key,
                        i = n.getNext().key;
                    if (!r.isEqual(i)) return !1
                }
                return !0
            }, kh.prototype.toString = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t.toString())
                }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
            }, kh.prototype.copy = function(t, e) {
                var n = new kh;
                return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n
            }, kh);

            function kh(n) {
                this.comparator = n ? function(t, e) {
                    return n(t, e) || Ki.comparator(t.key, e.key)
                } : function(t, e) {
                    return Ki.comparator(t.key, e.key)
                }, this.keyedMap = No(), this.sortedSet = new ho(this.comparator)
            }(Ch = Ih = Ih || {})[Ch.Added = 0] = "Added", Ch[Ch.Removed = 1] = "Removed", Ch[Ch.Modified = 2] = "Modified", Ch[Ch.Metadata = 3] = "Metadata", (Nh = Dh = Dh || {})[Nh.Local = 0] = "Local", Nh[Nh.Synced = 1] = "Synced";
            var Rh = (Mh.prototype.track = function(t) {
                var e = t.doc.key,
                    n = this.changeMap.get(e);
                n ? t.type !== Ih.Added && n.type === Ih.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === Ih.Metadata && n.type !== Ih.Removed ? this.changeMap = this.changeMap.insert(e, {
                    type: n.type,
                    doc: t.doc
                }) : t.type === Ih.Modified && n.type === Ih.Modified ? this.changeMap = this.changeMap.insert(e, {
                    type: Ih.Modified,
                    doc: t.doc
                }) : t.type === Ih.Modified && n.type === Ih.Added ? this.changeMap = this.changeMap.insert(e, {
                    type: Ih.Added,
                    doc: t.doc
                }) : t.type === Ih.Removed && n.type === Ih.Added ? this.changeMap = this.changeMap.remove(e) : t.type === Ih.Removed && n.type === Ih.Modified ? this.changeMap = this.changeMap.insert(e, {
                    type: Ih.Removed,
                    doc: n.doc
                }) : t.type === Ih.Added && n.type === Ih.Removed ? this.changeMap = this.changeMap.insert(e, {
                    type: Ih.Modified,
                    doc: t.doc
                }) : Fr("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(e, t)
            }, Mh.prototype.getChanges = function() {
                var n = [];
                return this.changeMap.inorderTraversal(function(t, e) {
                    n.push(e)
                }), n
            }, Mh);

            function Mh() {
                this.changeMap = new ho(Ki.comparator)
            }
            var Oh = (_h.fromInitialDocuments = function(t, e, n, r) {
                var i = [];
                return e.forEach(function(t) {
                    i.push({
                        type: Ih.Added,
                        doc: t
                    })
                }), new _h(t, e, Ah.emptySet(e), i, n, r, !0, !1)
            }, Object.defineProperty(_h.prototype, "hasPendingWrites", {
                get: function() {
                    return !this.mutatedKeys.isEmpty()
                },
                enumerable: !0,
                configurable: !0
            }), _h.prototype.isEqual = function(t) {
                if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
                var e = this.docChanges,
                    n = t.docChanges;
                if (e.length !== n.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                return !0
            }, _h);

            function _h(t, e, n, r, i, o, a, s) {
                this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = a, this.excludesMetadataChanges = s
            }
            var Lh = (Ph.createSynthesizedRemoteEventForCurrentChange = function(t, e) {
                var n, r = ((n = {})[t] = xh.createSynthesizedTargetChangeForCurrentChange(t, e), n);
                return new Ph(uo.MIN, r, _o(), Io(), Mo())
            }, Ph);

            function Ph(t, e, n, r, i) {
                this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
            }
            var xh = (qh.createSynthesizedTargetChangeForCurrentChange = function(t, e) {
                return new qh(Qr(), e, Mo(), Mo(), Mo())
            }, qh);

            function qh(t, e, n, r, i) {
                this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
            }
            var Fh, Vh, Bh = function(t, e, n, r) {
                    this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r
                },
                Uh = function(t, e) {
                    this.targetId = t, this.existenceFilter = e
                };
            (Vh = Fh = Fh || {})[Vh.NoChange = 0] = "NoChange", Vh[Vh.Added = 1] = "Added", Vh[Vh.Removed = 2] = "Removed", Vh[Vh.Current = 3] = "Current", Vh[Vh.Reset = 4] = "Reset";
            var Qh = function(t, e, n, r) {
                    void 0 === n && (n = Qr()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                },
                Kh = (Object.defineProperty(jh.prototype, "current", {
                    get: function() {
                        return this._current
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(jh.prototype, "resumeToken", {
                    get: function() {
                        return this._resumeToken
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(jh.prototype, "isPending", {
                    get: function() {
                        return 0 !== this.pendingResponses
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(jh.prototype, "hasPendingChanges", {
                    get: function() {
                        return this._hasPendingChanges
                    },
                    enumerable: !0,
                    configurable: !0
                }), jh.prototype.updateResumeToken = function(t) {
                    0 < t.length && (this._hasPendingChanges = !0, this._resumeToken = t)
                }, jh.prototype.toTargetChange = function() {
                    var n = Mo(),
                        r = Mo(),
                        i = Mo();
                    return this.documentChanges.forEach(function(t, e) {
                        switch (e) {
                            case Ih.Added:
                                n = n.add(t);
                                break;
                            case Ih.Modified:
                                r = r.add(t);
                                break;
                            case Ih.Removed:
                                i = i.add(t);
                                break;
                            default:
                                Fr("Encountered invalid change type: " + e)
                        }
                    }), new xh(this._resumeToken, this._current, n, r, i)
                }, jh.prototype.clearPendingChanges = function() {
                    this._hasPendingChanges = !1, this.documentChanges = Hh()
                }, jh.prototype.addDocumentChange = function(t, e) {
                    this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.insert(t, e)
                }, jh.prototype.removeDocumentChange = function(t) {
                    this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.remove(t)
                }, jh.prototype.recordPendingTargetRequest = function() {
                    this.pendingResponses += 1
                }, jh.prototype.recordTargetResponse = function() {
                    this.pendingResponses -= 1
                }, jh.prototype.markCurrent = function() {
                    this._hasPendingChanges = !0, this._current = !0
                }, jh);

            function jh() {
                this.pendingResponses = 0, this.documentChanges = Hh(), this._resumeToken = Qr(), this._current = !1, this._hasPendingChanges = !0
            }
            var Wh = (Gh.prototype.handleDocumentChange = function(t) {
                for (var e = 0, n = t.updatedTargetIds; e < n.length; e++) {
                    var r = n[e];
                    t.newDoc instanceof xs ? this.addDocumentToTarget(r, t.newDoc) : t.newDoc instanceof Vs && this.removeDocumentFromTarget(r, t.key, t.newDoc)
                }
                for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.removeDocumentFromTarget(r, t.key, t.newDoc)
            }, Gh.prototype.handleTargetChange = function(n) {
                var r = this;
                this.forEachTarget(n, function(t) {
                    var e = r.ensureTargetState(t);
                    switch (n.state) {
                        case Fh.NoChange:
                            r.isActiveTarget(t) && e.updateResumeToken(n.resumeToken);
                            break;
                        case Fh.Added:
                            e.recordTargetResponse(), e.isPending || e.clearPendingChanges(), e.updateResumeToken(n.resumeToken);
                            break;
                        case Fh.Removed:
                            e.recordTargetResponse(), e.isPending || r.removeTarget(t), Vr(!n.cause, "WatchChangeAggregator does not handle errored targets");
                            break;
                        case Fh.Current:
                            r.isActiveTarget(t) && (e.markCurrent(), e.updateResumeToken(n.resumeToken));
                            break;
                        case Fh.Reset:
                            r.isActiveTarget(t) && (r.resetTarget(t), e.updateResumeToken(n.resumeToken));
                            break;
                        default:
                            Fr("Unknown target watch change state: " + n.state)
                    }
                })
            }, Gh.prototype.forEachTarget = function(t, e) {
                0 < t.targetIds.length ? t.targetIds.forEach(e) : Xr(this.targetStates, e)
            }, Gh.prototype.handleExistenceFilter = function(t) {
                var e = t.targetId,
                    n = t.existenceFilter.count,
                    r = this.queryDataForActiveTarget(e);
                if (r) {
                    var i = r.query;
                    if (i.isDocumentQuery())
                        if (0 === n) {
                            var o = new Ki(i.path);
                            this.removeDocumentFromTarget(e, o, new Vs(o, uo.forDeletedDoc()))
                        } else Vr(1 === n, "Single document existence filter with count: " + n);
                    else this.getCurrentDocumentCountForTarget(e) !== n && (this.resetTarget(e), this.pendingTargetResets = this.pendingTargetResets.add(e))
                }
            }, Gh.prototype.createRemoteEvent = function(i) {
                var o = this,
                    a = {};
                Xr(this.targetStates, function(t, e) {
                    var n = o.queryDataForActiveTarget(t);
                    if (n) {
                        if (e.current && n.query.isDocumentQuery()) {
                            var r = new Ki(n.query.path);
                            null !== o.pendingDocumentUpdates.get(r) || o.targetContainsDocument(t, r) || o.removeDocumentFromTarget(t, r, new Vs(r, i))
                        }
                        e.hasPendingChanges && (a[t] = e.toTargetChange(), e.clearPendingChanges())
                    }
                });
                var r = Mo();
                this.pendingDocumentTargetMapping.forEach(function(t, e) {
                    var n = !0;
                    e.forEachWhile(function(t) {
                        var e = o.queryDataForActiveTarget(t);
                        return !e || e.purpose === Pu.LimboResolution || (n = !1)
                    }), n && (r = r.add(t))
                });
                var t = new Lh(i, a, this.pendingTargetResets, this.pendingDocumentUpdates, r);
                return this.pendingDocumentUpdates = Io(), this.pendingDocumentTargetMapping = zh(), this.pendingTargetResets = new bo(bi), t
            }, Gh.prototype.addDocumentToTarget = function(t, e) {
                if (this.isActiveTarget(t)) {
                    var n = this.targetContainsDocument(t, e.key) ? Ih.Modified : Ih.Added;
                    this.ensureTargetState(t).addDocumentChange(e.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e.key, e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e.key, this.ensureDocumentTargetMapping(e.key).add(t))
                }
            }, Gh.prototype.removeDocumentFromTarget = function(t, e, n) {
                if (this.isActiveTarget(t)) {
                    var r = this.ensureTargetState(t);
                    this.targetContainsDocument(t, e) ? r.addDocumentChange(e, Ih.Removed) : r.removeDocumentChange(e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, this.ensureDocumentTargetMapping(e).delete(t)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e, n))
                }
            }, Gh.prototype.removeTarget = function(t) {
                delete this.targetStates[t]
            }, Gh.prototype.getCurrentDocumentCountForTarget = function(t) {
                var e = this.ensureTargetState(t).toTargetChange();
                return this.metadataProvider.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size
            }, Gh.prototype.recordPendingTargetRequest = function(t) {
                this.ensureTargetState(t).recordPendingTargetRequest()
            }, Gh.prototype.ensureTargetState = function(t) {
                return this.targetStates[t] || (this.targetStates[t] = new Kh), this.targetStates[t]
            }, Gh.prototype.ensureDocumentTargetMapping = function(t) {
                var e = this.pendingDocumentTargetMapping.get(t);
                return e || (e = new bo(bi), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, e)), e
            }, Gh.prototype.isActiveTarget = function(t) {
                var e = null !== this.queryDataForActiveTarget(t);
                return e || Pr("WatchChangeAggregator", "Detected inactive target", t), e
            }, Gh.prototype.queryDataForActiveTarget = function(t) {
                var e = this.targetStates[t];
                return e && e.isPending ? null : this.metadataProvider.getQueryDataForTarget(t)
            }, Gh.prototype.resetTarget = function(e) {
                var n = this;
                Vr(!this.targetStates[e].isPending, "Should only reset active targets"), this.targetStates[e] = new Kh, this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(t) {
                    n.removeDocumentFromTarget(e, t, null)
                })
            }, Gh.prototype.targetContainsDocument = function(t, e) {
                return this.metadataProvider.getRemoteKeysForTarget(t).has(e)
            }, Gh);

            function Gh(t) {
                this.metadataProvider = t, this.targetStates = {}, this.pendingDocumentUpdates = Io(), this.pendingDocumentTargetMapping = zh(), this.pendingTargetResets = new bo(bi)
            }

            function zh() {
                return new ho(Ki.comparator)
            }

            function Hh() {
                return new ho(Ki.comparator)
            }
            var Yh = "RemoteStore",
                Xh = (Jh.prototype.start = function() {
                    return this.enableNetwork()
                }, Jh.prototype.enableNetwork = function() {
                    return d(this, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !0, this.canUseNetwork() ? (e = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                                case 1:
                                    return e.lastStreamToken = t.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(fh.Unknown), [4, this.fillWritePipeline()];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Jh.prototype.disableNetwork = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.onlineStateTracker.set(fh.Offline), [2]
                            }
                        })
                    })
                }, Jh.prototype.disableNetworkInternal = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.writeStream.stop()];
                                case 1:
                                    return t.sent(), [4, this.watchStream.stop()];
                                case 2:
                                    return t.sent(), 0 < this.writePipeline.length && (Pr(Yh, "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2]
                            }
                        })
                    })
                }, Jh.prototype.shutdown = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return Pr(Yh, "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.connectivityMonitor.shutdown(), this.onlineStateTracker.set(fh.Unknown), [2]
                            }
                        })
                    })
                }, Jh.prototype.listen = function(t) {
                    Vr(!Hr(this.listenTargets, t.targetId), "listen called with duplicate targetId!"), this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(t)
                }, Jh.prototype.unlisten = function(t) {
                    Vr(Hr(this.listenTargets, t), "unlisten called without assigned target ID!"), delete this.listenTargets[t], this.watchStream.isOpen() && this.sendUnwatchRequest(t), Zr(this.listenTargets) && (this.watchStream.isOpen() ? this.watchStream.markIdle() : this.canUseNetwork() && this.onlineStateTracker.set(fh.Unknown))
                }, Jh.prototype.getQueryDataForTarget = function(t) {
                    return this.listenTargets[t] || null
                }, Jh.prototype.getRemoteKeysForTarget = function(t) {
                    return this.syncEngine.getRemoteKeysForTarget(t)
                }, Jh.prototype.sendWatchRequest = function(t) {
                    this.watchChangeAggregator.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t)
                }, Jh.prototype.sendUnwatchRequest = function(t) {
                    this.watchChangeAggregator.recordPendingTargetRequest(t), this.watchStream.unwatch(t)
                }, Jh.prototype.startWatchStream = function() {
                    Vr(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new Wh(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart()
                }, Jh.prototype.shouldStartWatchStream = function() {
                    return this.canUseNetwork() && !this.watchStream.isStarted() && !Zr(this.listenTargets)
                }, Jh.prototype.canUseNetwork = function() {
                    return this.isPrimary && this.networkEnabled
                }, Jh.prototype.cleanUpWatchStreamState = function() {
                    this.watchChangeAggregator = null
                }, Jh.prototype.onWatchStreamOpen = function() {
                    return d(this, void 0, void 0, function() {
                        var n = this;
                        return p(this, function(t) {
                            return Xr(this.listenTargets, function(t, e) {
                                n.sendWatchRequest(e)
                            }), [2]
                        })
                    })
                }, Jh.prototype.onWatchStreamClose = function(e) {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            return void 0 === e && Vr(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(e), this.startWatchStream()) : this.onlineStateTracker.set(fh.Unknown), [2]
                        })
                    })
                }, Jh.prototype.onWatchStreamChange = function(n, r) {
                    return d(this, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.onlineStateTracker.set(fh.Online), n instanceof Qh && n.state === Fh.Removed && n.cause ? [2, this.handleTargetError(n)] : (n instanceof Bh ? this.watchChangeAggregator.handleDocumentChange(n) : n instanceof Uh ? this.watchChangeAggregator.handleExistenceFilter(n) : (Vr(n instanceof Qh, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(n)), r.isEqual(uo.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                                case 1:
                                    return e = t.sent(), 0 <= r.compareTo(e) ? [4, this.raiseWatchSnapshot(r)] : [3, 3];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Jh.prototype.raiseWatchSnapshot = function(r) {
                    var i = this;
                    Vr(!r.isEqual(uo.MIN), "Can't raise event for unknown SnapshotVersion");
                    var t = this.watchChangeAggregator.createRemoteEvent(r);
                    return Xr(t.targetChanges, function(t, e) {
                        if (0 < e.resumeToken.length) {
                            var n = i.listenTargets[t];
                            n && (i.listenTargets[t] = n.withResumeToken(e.resumeToken, r))
                        }
                    }), t.targetMismatches.forEach(function(t) {
                        var e = i.listenTargets[t];
                        if (e) {
                            i.listenTargets[t] = e.withResumeToken(Qr(), e.snapshotVersion), i.sendUnwatchRequest(t);
                            var n = new Uu(e.query, t, Pu.ExistenceFilterMismatch, e.sequenceNumber);
                            i.sendWatchRequest(n)
                        }
                    }), this.syncEngine.applyRemoteEvent(t)
                }, Jh.prototype.handleTargetError = function(t) {
                    var n = this;
                    Vr(!!t.cause, "Handling target error without a cause");
                    var r = t.cause,
                        i = Promise.resolve();
                    return t.targetIds.forEach(function(e) {
                        i = i.then(function() {
                            return d(n, void 0, void 0, function() {
                                return p(this, function(t) {
                                    return Hr(this.listenTargets, e) ? (delete this.listenTargets[e], this.watchChangeAggregator.removeTarget(e), [2, this.syncEngine.rejectListen(e, r)]) : [2]
                                })
                            })
                        })
                    }), i
                }, Jh.prototype.fillWritePipeline = function() {
                    return d(this, void 0, void 0, function() {
                        var e, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.canAddToWritePipeline() ? (e = 0 < this.writePipeline.length ? this.writePipeline[this.writePipeline.length - 1].batchId : -1, [4, this.localStore.nextMutationBatch(e)]) : [3, 4];
                                case 1:
                                    return null !== (n = t.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                                case 2:
                                    return this.addToWritePipeline(n), [4, this.fillWritePipeline()];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return this.shouldStartWriteStream() && this.startWriteStream(), [2]
                            }
                        })
                    })
                }, Jh.prototype.canAddToWritePipeline = function() {
                    return this.canUseNetwork() && this.writePipeline.length < 10
                }, Jh.prototype.outstandingWrites = function() {
                    return this.writePipeline.length
                }, Jh.prototype.addToWritePipeline = function(t) {
                    Vr(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(t), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations)
                }, Jh.prototype.shouldStartWriteStream = function() {
                    return this.canUseNetwork() && !this.writeStream.isStarted() && 0 < this.writePipeline.length
                }, Jh.prototype.startWriteStream = function() {
                    Vr(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start()
                }, Jh.prototype.onWriteStreamOpen = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            return this.writeStream.writeHandshake(), [2]
                        })
                    })
                }, Jh.prototype.onWriteHandshakeComplete = function() {
                    var r = this;
                    return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() {
                        for (var t = 0, e = r.writePipeline; t < e.length; t++) {
                            var n = e[t];
                            r.writeStream.writeMutations(n.mutations)
                        }
                    }).catch(lc)
                }, Jh.prototype.onMutationResult = function(t, e) {
                    var n = this;
                    Vr(0 < this.writePipeline.length, "Got result for empty write pipeline");
                    var r = this.writePipeline.shift(),
                        i = xo.from(r, t, e, this.writeStream.lastStreamToken);
                    return this.syncEngine.applySuccessfulWrite(i).then(function() {
                        return n.fillWritePipeline()
                    })
                }, Jh.prototype.onWriteStreamClose = function(n) {
                    return d(this, void 0, void 0, function() {
                        var e = this;
                        return p(this, function(t) {
                            return void 0 === n && Vr(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), n && 0 < this.writePipeline.length ? [2, (this.writeStream.handshakeComplete ? this.handleWriteError(n) : this.handleHandshakeError(n)).then(function() {
                                e.shouldStartWriteStream() && e.startWriteStream()
                            })] : [2]
                        })
                    })
                }, Jh.prototype.handleHandshakeError = function(e) {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            return Th(e.code) ? (Pr(Yh, "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = Qr(), [2, this.localStore.setLastStreamToken(Qr()).catch(lc)]) : [2]
                        })
                    })
                }, Jh.prototype.handleWriteError = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n = this;
                        return p(this, function(t) {
                            return function(t) {
                                return Th(t) && t !== jr.ABORTED
                            }(r.code) ? (e = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(e.batchId, r).then(function() {
                                return n.fillWritePipeline()
                            })]) : [2]
                        })
                    })
                }, Jh.prototype.createTransaction = function() {
                    return new yh(this.datastore)
                }, Jh.prototype.restartNetwork = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.onlineStateTracker.set(fh.Unknown), [4, this.enableNetwork()];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Jh.prototype.handleCredentialChange = function() {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.canUseNetwork() ? (Pr(Yh, "RemoteStore restarting streams for new credential"), [4, this.restartNetwork()]) : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, Jh.prototype.applyPrimaryState = function(e) {
                    return d(this, void 0, void 0, function() {
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                case 1:
                                    return t.sent(), [3, 4];
                                case 2:
                                    return e ? [3, 4] : [4, this.disableNetworkInternal()];
                                case 3:
                                    t.sent(), this.onlineStateTracker.set(fh.Unknown), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Jh);

            function Jh(t, e, n, r, i) {
                var o = this;
                this.localStore = t, this.datastore = e, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled = !1, this.isPrimary = !1, this.connectivityMonitor = i, this.connectivityMonitor.addCallback(function(t) {
                    n.enqueueAndForget(function() {
                        return d(o, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canUseNetwork() ? (Pr(Yh, "Restarting streams for network reachability change."), [4, this.restartNetwork()]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }), this.onlineStateTracker = new wh(n, r), this.watchStream = this.datastore.newPersistentWatchStream({
                    onOpen: this.onWatchStreamOpen.bind(this),
                    onClose: this.onWatchStreamClose.bind(this),
                    onWatchChange: this.onWatchStreamChange.bind(this)
                }), this.writeStream = this.datastore.newPersistentWriteStream({
                    onOpen: this.onWriteStreamOpen.bind(this),
                    onClose: this.onWriteStreamClose.bind(this),
                    onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                    onMutationResult: this.onMutationResult.bind(this)
                })
            }
            var Zh = (Object.defineProperty($h.prototype, "latitude", {
                get: function() {
                    return this._lat
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty($h.prototype, "longitude", {
                get: function() {
                    return this._long
                },
                enumerable: !0,
                configurable: !0
            }), $h.prototype.isEqual = function(t) {
                return this._lat === t._lat && this._long === t._long
            }, $h.prototype._compareTo = function(t) {
                return bi(this._lat, t._lat) || bi(this._long, t._long)
            }, $h);

            function $h(t, e) {
                if (ti("GeoPoint", arguments, 2), ri("GeoPoint", "number", 1, t), ri("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new Wr(jr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                if (!isFinite(e) || e < -180 || 180 < e) throw new Wr(jr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this._lat = t, this._long = e
            }
            var tl = (el.atPath = function(t) {
                return new el(t)
            }, Object.defineProperty(el.prototype, "orderBy", {
                get: function() {
                    if (null === this.memoizedOrderBy) {
                        var t = this.getInequalityFilterField(),
                            e = this.getFirstOrderByField();
                        if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [kl] : this.memoizedOrderBy = [new Nl(t), kl];
                        else {
                            Vr(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field.");
                            for (var n = !(this.memoizedOrderBy = []), r = 0, i = this.explicitOrderBy; r < i.length; r++) {
                                var o = i[r];
                                this.memoizedOrderBy.push(o), o.field.isKeyField() && (n = !0)
                            }
                            if (!n) {
                                var a = 0 < this.explicitOrderBy.length ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : El.ASCENDING;
                                this.memoizedOrderBy.push(a === El.ASCENDING ? kl : Rl)
                            }
                        }
                    }
                    return this.memoizedOrderBy
                },
                enumerable: !0,
                configurable: !0
            }), el.prototype.addFilter = function(t) {
                Vr(null == this.getInequalityFilterField() || !(t instanceof al) || !t.isInequality() || t.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), Vr(!this.isDocumentQuery(), "No filtering allowed for document query");
                var e = this.filters.concat([t]);
                return new el(this.path, this.collectionGroup, this.explicitOrderBy.slice(), e, this.limit, this.startAt, this.endAt)
            }, el.prototype.addOrderBy = function(t) {
                Vr(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
                var e = this.explicitOrderBy.concat([t]);
                return new el(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.startAt, this.endAt)
            }, el.prototype.withLimit = function(t) {
                return new el(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), t, this.startAt, this.endAt)
            }, el.prototype.withStartAt = function(t) {
                return new el(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, t, this.endAt)
            }, el.prototype.withEndAt = function(t) {
                return new el(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, t)
            }, el.prototype.asCollectionQueryAtPath = function(t) {
                return new el(t, null, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, this.endAt)
            }, el.prototype.matchesAllDocuments = function() {
                return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.explicitOrderBy.length || 1 === this.explicitOrderBy.length && this.explicitOrderBy[0].field.isKeyField())
            }, el.prototype.canonicalId = function() {
                if (null === this.memoizedCanonicalId) {
                    var t = this.path.canonicalString();
                    this.isCollectionGroupQuery() && (t += "|cg:" + this.collectionGroup), t += "|f:";
                    for (var e = 0, n = this.filters; e < n.length; e++) t += n[e].canonicalId(), t += ",";
                    t += "|ob:";
                    for (var r = 0, i = this.orderBy; r < i.length; r++) t += i[r].canonicalId(), t += ",";
                    Yc(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t
                }
                return this.memoizedCanonicalId
            }, el.prototype.toString = function() {
                var t = "Query(" + this.path.canonicalString();
                return this.isCollectionGroupQuery() && (t += " collectionGroup=" + this.collectionGroup), 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), Yc(this.limit) || (t += ", limit: " + this.limit), 0 < this.explicitOrderBy.length && (t += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), t + ")"
            }, el.prototype.isEqual = function(t) {
                if (this.limit !== t.limit) return !1;
                if (this.orderBy.length !== t.orderBy.length) return !1;
                for (var e = 0; e < this.orderBy.length; e++)
                    if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                if (this.filters.length !== t.filters.length) return !1;
                for (e = 0; e < this.filters.length; e++)
                    if (!this.filters[e].isEqual(t.filters[e])) return !1;
                return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)
            }, el.prototype.docComparator = function(t, e) {
                for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                    var o = i[r],
                        a = o.compare(t, e);
                    if (0 !== a) return a;
                    n = n || o.field.isKeyField()
                }
                return Vr(n, "orderBy used that doesn't compare on key field"), 0
            }, el.prototype.matches = function(t) {
                return this.matchesPathAndCollectionGroup(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t)
            }, el.prototype.hasLimit = function() {
                return !Yc(this.limit)
            }, el.prototype.getFirstOrderByField = function() {
                return 0 < this.explicitOrderBy.length ? this.explicitOrderBy[0].field : null
            }, el.prototype.getInequalityFilterField = function() {
                for (var t = 0, e = this.filters; t < e.length; t++) {
                    var n = e[t];
                    if (n instanceof al && n.isInequality()) return n.field
                }
                return null
            }, el.prototype.findFilterOperator = function(t) {
                for (var e = 0, n = this.filters; e < n.length; e++) {
                    var r = n[e];
                    if (r instanceof al && 0 <= t.indexOf(r.op)) return r.op
                }
                return null
            }, el.prototype.isDocumentQuery = function() {
                return Ki.isDocumentKey(this.path) && null === this.collectionGroup && 0 === this.filters.length
            }, el.prototype.isCollectionGroupQuery = function() {
                return null !== this.collectionGroup
            }, el.prototype.matchesPathAndCollectionGroup = function(t) {
                var e = t.key.path;
                return null !== this.collectionGroup ? t.key.hasCollectionId(this.collectionGroup) && this.path.isPrefixOf(e) : Ki.isDocumentKey(this.path) ? this.path.isEqual(e) : this.path.isImmediateParentOf(e)
            }, el.prototype.matchesOrderBy = function(t) {
                for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) {
                    var r = n[e];
                    if (!r.field.isKeyField() && null === t.field(r.field)) return !1
                }
                return !0
            }, el.prototype.matchesFilters = function(t) {
                for (var e = 0, n = this.filters; e < n.length; e++)
                    if (!n[e].matches(t)) return !1;
                return !0
            }, el.prototype.matchesBounds = function(t) {
                return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t) || this.endAt && this.endAt.sortsBeforeDocument(this.orderBy, t))
            }, el.prototype.assertValidBound = function(t) {
                Vr(t.position.length <= this.orderBy.length, "Bound is longer than orderBy")
            }, el);

            function el(t, e, n, r, i, o, a) {
                void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = a, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt)
            }

            function nl() {}
            var rl = (il.fromString = function(t) {
                switch (t) {
                    case "<":
                        return il.LESS_THAN;
                    case "<=":
                        return il.LESS_THAN_OR_EQUAL;
                    case "==":
                        return il.EQUAL;
                    case ">=":
                        return il.GREATER_THAN_OR_EQUAL;
                    case ">":
                        return il.GREATER_THAN;
                    case "array-contains":
                        return il.ARRAY_CONTAINS;
                    case "in":
                        return il.IN;
                    case "array-contains-any":
                        return il.ARRAY_CONTAINS_ANY;
                    default:
                        return Fr("Unknown FieldFilter operator: " + t)
                }
            }, il.prototype.toString = function() {
                return this.name
            }, il.prototype.isEqual = function(t) {
                return this.name === t.name
            }, il.LESS_THAN = new il("<"), il.LESS_THAN_OR_EQUAL = new il("<="), il.EQUAL = new il("=="), il.GREATER_THAN = new il(">"), il.GREATER_THAN_OR_EQUAL = new il(">="), il.ARRAY_CONTAINS = new il("array-contains"), il.IN = new il("in"), il.ARRAY_CONTAINS_ANY = new il("array-contains-any"), il);

            function il(t) {
                this.name = t
            }
            var ol, al = (t(sl, ol = nl), sl.create = function(t, e, n) {
                if (t.isKeyField()) return e === rl.IN ? (Vr(n instanceof Ms, "Comparing on key with IN, but filter value not an ArrayValue"), Vr(n.internalValue.every(function(t) {
                    return t instanceof Ts
                }), "Comparing on key with IN, but an array value was not a RefValue"), new fl(t, n)) : (Vr(n instanceof Ts, "Comparing on key, but filter value not a RefValue"), Vr(e !== rl.ARRAY_CONTAINS && e !== rl.ARRAY_CONTAINS_ANY, "'" + e.toString() + "' queries don't make sense on document keys."), new cl(t, e, n));
                if (n.isEqual(Ha.INSTANCE)) {
                    if (e !== rl.EQUAL) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
                    return new sl(t, e, n)
                }
                if (n.isEqual(ss.NAN)) {
                    if (e !== rl.EQUAL) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
                    return new sl(t, e, n)
                }
                return e === rl.ARRAY_CONTAINS ? new ml(t, n) : e === rl.IN ? (Vr(n instanceof Ms, "IN filter has invalid value: " + n.toString()), new vl(t, n)) : e === rl.ARRAY_CONTAINS_ANY ? (Vr(n instanceof Ms, "ARRAY_CONTAINS_ANY filter has invalid value: " + n.toString()), new Sl(t, n)) : new sl(t, e, n)
            }, sl.prototype.matches = function(t) {
                var e = t.field(this.field);
                return null !== e && this.value.typeOrder === e.typeOrder && this.matchesComparison(e.compareTo(this.value))
            }, sl.prototype.matchesComparison = function(t) {
                switch (this.op) {
                    case rl.LESS_THAN:
                        return t < 0;
                    case rl.LESS_THAN_OR_EQUAL:
                        return t <= 0;
                    case rl.EQUAL:
                        return 0 === t;
                    case rl.GREATER_THAN:
                        return 0 < t;
                    case rl.GREATER_THAN_OR_EQUAL:
                        return 0 <= t;
                    default:
                        return Fr("Unknown FieldFilter operator: " + this.op)
                }
            }, sl.prototype.isInequality = function() {
                return 0 <= [rl.LESS_THAN, rl.LESS_THAN_OR_EQUAL, rl.GREATER_THAN, rl.GREATER_THAN_OR_EQUAL].indexOf(this.op)
            }, sl.prototype.canonicalId = function() {
                return this.field.canonicalString() + this.op.toString() + this.value.toString()
            }, sl.prototype.isEqual = function(t) {
                return t instanceof sl && this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value)
            }, sl.prototype.toString = function() {
                return this.field.canonicalString() + " " + this.op + " " + this.value.value()
            }, sl);

            function sl(t, e, n) {
                var r = ol.call(this) || this;
                return r.field = t, r.op = e, r.value = n, r
            }
            var ul, cl = (t(hl, ul = al), hl.prototype.matches = function(t) {
                var e = this.value,
                    n = Ki.comparator(t.key, e.key);
                return this.matchesComparison(n)
            }, hl);

            function hl() {
                return null !== ul && ul.apply(this, arguments) || this
            }
            var ll, fl = (t(dl, ll = al), dl.prototype.matches = function(e) {
                return this.value.internalValue.some(function(t) {
                    return e.key.isEqual(t.key)
                })
            }, dl);

            function dl(t, e) {
                var n = ll.call(this, t, rl.IN, e) || this;
                return n.value = e, n
            }
            var pl, ml = (t(yl, pl = al), yl.prototype.matches = function(t) {
                var e = t.field(this.field);
                return e instanceof Ms && e.contains(this.value)
            }, yl);

            function yl(t, e) {
                return pl.call(this, t, rl.ARRAY_CONTAINS, e) || this
            }
            var gl, vl = (t(bl, gl = al), bl.prototype.matches = function(t) {
                var e = this.value,
                    n = t.field(this.field);
                return null !== n && e.contains(n)
            }, bl);

            function bl(t, e) {
                var n = gl.call(this, t, rl.IN, e) || this;
                return n.value = e, n
            }
            var wl, Sl = (t(Tl, wl = al), Tl.prototype.matches = function(t) {
                var e = this,
                    n = t.field(this.field);
                return n instanceof Ms && n.internalValue.some(function(t) {
                    return e.value.contains(t)
                })
            }, Tl);

            function Tl(t, e) {
                var n = wl.call(this, t, rl.ARRAY_CONTAINS_ANY, e) || this;
                return n.value = e, n
            }
            var El = (Il.prototype.toString = function() {
                return this.name
            }, Il.ASCENDING = new Il("asc"), Il.DESCENDING = new Il("desc"), Il);

            function Il(t) {
                this.name = t
            }
            var Cl = (Dl.prototype.canonicalId = function() {
                for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) t += n[e].toString();
                return t
            }, Dl.prototype.sortsBeforeDocument = function(t, e) {
                Vr(this.position.length <= t.length, "Bound has more components than query's orderBy");
                for (var n = 0, r = 0; r < this.position.length; r++) {
                    var i = t[r],
                        o = this.position[r];
                    if (i.field.isKeyField()) Vr(o instanceof Ts, "Bound has a non-key value where the key path is being used."), n = Ki.comparator(o.key, e.key);
                    else {
                        var a = e.field(i.field);
                        Vr(null !== a, "Field should exist since document matched the orderBy already."), n = o.compareTo(a)
                    }
                    if (i.dir === El.DESCENDING && (n *= -1), 0 !== n) break
                }
                return this.before ? n <= 0 : n < 0
            }, Dl.prototype.isEqual = function(t) {
                if (null === t) return !1;
                if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                for (var e = 0; e < this.position.length; e++) {
                    var n = this.position[e],
                        r = t.position[e];
                    if (!n.isEqual(r)) return !1
                }
                return !0
            }, Dl);

            function Dl(t, e) {
                this.position = t, this.before = e
            }
            var Nl = (Al.prototype.compare = function(t, e) {
                var n = this.isKeyOrderBy ? xs.compareByKey(t, e) : xs.compareByField(this.field, t, e);
                switch (this.dir) {
                    case El.ASCENDING:
                        return n;
                    case El.DESCENDING:
                        return -1 * n;
                    default:
                        return Fr("Unknown direction: " + this.dir)
                }
            }, Al.prototype.canonicalId = function() {
                return this.field.canonicalString() + this.dir.toString()
            }, Al.prototype.toString = function() {
                return this.field.canonicalString() + " (" + this.dir + ")"
            }, Al.prototype.isEqual = function(t) {
                return this.dir === t.dir && this.field.isEqual(t.field)
            }, Al);

            function Al(t, e) {
                this.field = t, void 0 === e && (e = El.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField()
            }
            var kl = new Nl(Ui.keyField(), El.ASCENDING),
                Rl = new Nl(Ui.keyField(), El.DESCENDING),
                Ml = (Ol.prototype.applyToLocalView = function(t, e) {
                    return new ys(e, t)
                }, Ol.prototype.applyToRemoteDocument = function(t, e) {
                    return e
                }, Ol.prototype.computeBaseValue = function(t) {
                    return null
                }, Ol.prototype.isEqual = function(t) {
                    return t instanceof Ol
                }, Ol.instance = new Ol, Ol);

            function Ol() {}
            var _l = (Ll.prototype.applyToLocalView = function(t, e) {
                return this.apply(t)
            }, Ll.prototype.applyToRemoteDocument = function(t, e) {
                return this.apply(t)
            }, Ll.prototype.apply = function(t) {
                for (var n = Vl(t), e = function(e) {
                        n.find(function(t) {
                            return t.isEqual(e)
                        }) || n.push(e)
                    }, r = 0, i = this.elements; r < i.length; r++) e(i[r]);
                return new Ms(n)
            }, Ll.prototype.computeBaseValue = function(t) {
                return null
            }, Ll.prototype.isEqual = function(t) {
                return t instanceof Ll && wi(t.elements, this.elements)
            }, Ll);

            function Ll(t) {
                this.elements = t
            }
            var Pl = (xl.prototype.applyToLocalView = function(t, e) {
                return this.apply(t)
            }, xl.prototype.applyToRemoteDocument = function(t, e) {
                return this.apply(t)
            }, xl.prototype.apply = function(t) {
                for (var n = Vl(t), e = function(e) {
                        n = n.filter(function(t) {
                            return !t.isEqual(e)
                        })
                    }, r = 0, i = this.elements; r < i.length; r++) e(i[r]);
                return new Ms(n)
            }, xl.prototype.computeBaseValue = function(t) {
                return null
            }, xl.prototype.isEqual = function(t) {
                return t instanceof xl && wi(t.elements, this.elements)
            }, xl);

            function xl(t) {
                this.elements = t
            }
            var ql = (Fl.prototype.applyToLocalView = function(t, e) {
                var n = this.computeBaseValue(t);
                if (n instanceof is && this.operand instanceof is) {
                    var r = n.internalValue + this.operand.internalValue;
                    return new is(r)
                }
                return r = n.internalValue + this.operand.internalValue, new ss(r)
            }, Fl.prototype.applyToRemoteDocument = function(t, e) {
                return Vr(null !== e, "Didn't receive transformResult for NUMERIC_ADD transform"), e
            }, Fl.prototype.computeBaseValue = function(t) {
                return t instanceof ts ? t : new is(0)
            }, Fl.prototype.isEqual = function(t) {
                return t instanceof Fl && this.operand.isEqual(t.operand)
            }, Fl);

            function Fl(t) {
                this.operand = t
            }

            function Vl(t) {
                return t instanceof Ms ? t.internalValue.slice() : []
            }
            var Bl = (Ul.prototype.isEqual = function(t) {
                return t && t.count === this.count
            }, Ul);

            function Ul(t) {
                this.count = t
            }
            var Ql, Kl, jl = ((Ql = {})[El.ASCENDING.name] = "ASCENDING", Ql[El.DESCENDING.name] = "DESCENDING", Ql),
                Wl = ((Kl = {})[rl.LESS_THAN.name] = "LESS_THAN", Kl[rl.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", Kl[rl.GREATER_THAN.name] = "GREATER_THAN", Kl[rl.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", Kl[rl.EQUAL.name] = "EQUAL", Kl[rl.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", Kl[rl.IN.name] = "IN", Kl[rl.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", Kl),
                Gl = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function zl(t, e) {
                Vr(!Yc(t), e + " is missing")
            }

            function Hl(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : Fr("can't parse " + t)
            }
            var Yl = (Xl.prototype.emptyByteString = function() {
                return this.options.useProto3Json ? "" : new Uint8Array(0)
            }, Xl.prototype.unsafeCastProtoByteString = function(t) {
                return t
            }, Xl.prototype.fromRpcStatus = function(t) {
                var e = void 0 === t.code ? jr.UNKNOWN : Eh(t.code);
                return new Wr(e, t.message || "")
            }, Xl.prototype.toInt32Value = function(t) {
                return this.options.useProto3Json || Yc(t) ? t : {
                    value: t
                }
            }, Xl.prototype.fromInt32Value = function(t) {
                var e;
                return Yc(e = "object" == typeof t ? t.value : t) ? null : e
            }, Xl.prototype.toTimestamp = function(t) {
                return this.options.useProto3Json ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
                    seconds: "" + t.seconds,
                    nanos: t.nanoseconds
                }
            }, Xl.prototype.fromTimestamp = function(t) {
                if ("string" == typeof t) return this.fromIso8601String(t);
                Vr(!!t, "Cannot deserialize null or undefined timestamp.");
                var e = Hl(t.seconds || "0"),
                    n = t.nanos || 0;
                return new ao(e, n)
            }, Xl.prototype.fromIso8601String = function(t) {
                var e = 0,
                    n = Gl.exec(t);
                if (Vr(!!n, "invalid timestamp: " + t), n[1]) {
                    var r = n[1];
                    r = (r + "000000000").substr(0, 9), e = Number(r)
                }
                var i = new Date(t),
                    o = Math.floor(i.getTime() / 1e3);
                return new ao(o, e)
            }, Xl.prototype.toBytes = function(t) {
                return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array())
            }, Xl.prototype.fromBlob = function(t) {
                return "string" == typeof t ? (Vr(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Ii.fromBase64String(t)) : (Vr(!this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Ii.fromUint8Array(t))
            }, Xl.prototype.toVersion = function(t) {
                return this.toTimestamp(t.toTimestamp())
            }, Xl.prototype.fromVersion = function(t) {
                return Vr(!!t, "Trying to deserialize version that isn't set"), uo.fromTimestamp(this.fromTimestamp(t))
            }, Xl.prototype.toResourceName = function(t, e) {
                return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()
            }, Xl.prototype.fromResourceName = function(t) {
                var e = qi.fromString(t);
                return Vr(this.isValidResourceName(e), "Tried to deserialize invalid key " + e.toString()), e
            }, Xl.prototype.toName = function(t) {
                return this.toResourceName(this.databaseId, t.path)
            }, Xl.prototype.fromName = function(t) {
                var e = this.fromResourceName(t);
                return Vr(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), Vr(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new Ki(this.extractLocalPathFromResourceName(e))
            }, Xl.prototype.toQueryPath = function(t) {
                return this.toResourceName(this.databaseId, t)
            }, Xl.prototype.fromQueryPath = function(t) {
                var e = this.fromResourceName(t);
                return 4 === e.length ? qi.EMPTY_PATH : this.extractLocalPathFromResourceName(e)
            }, Object.defineProperty(Xl.prototype, "encodedDatabaseId", {
                get: function() {
                    return new qi(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString()
                },
                enumerable: !0,
                configurable: !0
            }), Xl.prototype.fullyQualifiedPrefixPath = function(t) {
                return new qi(["projects", t.projectId, "databases", t.database])
            }, Xl.prototype.extractLocalPathFromResourceName = function(t) {
                return Vr(4 < t.length && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.popFirst(5)
            }, Xl.prototype.isValidResourceName = function(t) {
                return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
            }, Xl.prototype.toValue = function(t) {
                if (t instanceof Ha) return {
                    nullValue: "NULL_VALUE"
                };
                if (t instanceof Ja) return {
                    booleanValue: t.value()
                };
                if (t instanceof is) return {
                    integerValue: "" + t.value()
                };
                if (t instanceof ss) {
                    var e = t.value();
                    if (this.options.useProto3Json) {
                        if (isNaN(e)) return {
                            doubleValue: "NaN"
                        };
                        if (e === 1 / 0) return {
                            doubleValue: "Infinity"
                        };
                        if (e === -1 / 0) return {
                            doubleValue: "-Infinity"
                        }
                    }
                    return {
                        doubleValue: t.value()
                    }
                }
                return t instanceof hs ? {
                    stringValue: t.value()
                } : t instanceof As ? {
                    mapValue: this.toMapValue(t)
                } : t instanceof Ms ? {
                    arrayValue: this.toArrayValue(t)
                } : t instanceof ds ? {
                    timestampValue: this.toTimestamp(t.internalValue)
                } : t instanceof Cs ? {
                    geoPointValue: {
                        latitude: t.value().latitude,
                        longitude: t.value().longitude
                    }
                } : t instanceof bs ? {
                    bytesValue: this.toBytes(t.value())
                } : t instanceof Ts ? {
                    referenceValue: this.toResourceName(t.databaseId, t.key.path)
                } : Fr("Unknown FieldValue " + JSON.stringify(t))
            }, Xl.prototype.fromValue = function(t) {
                var e = this;
                if ("nullValue" in t) return Ha.INSTANCE;
                if ("booleanValue" in t) return Ja.of(t.booleanValue);
                if ("integerValue" in t) return new is(Hl(t.integerValue));
                if ("doubleValue" in t) {
                    if (this.options.useProto3Json) {
                        if ("NaN" === t.doubleValue) return ss.NAN;
                        if ("Infinity" === t.doubleValue) return ss.POSITIVE_INFINITY;
                        if ("-Infinity" === t.doubleValue) return ss.NEGATIVE_INFINITY
                    }
                    return new ss(t.doubleValue)
                }
                if ("stringValue" in t) return new hs(t.stringValue);
                if ("mapValue" in t) return this.fromFields(t.mapValue.fields || {});
                if ("arrayValue" in t) {
                    zl(t.arrayValue, "arrayValue");
                    var n = t.arrayValue.values || [];
                    return new Ms(n.map(function(t) {
                        return e.fromValue(t)
                    }))
                }
                if ("timestampValue" in t) return zl(t.timestampValue, "timestampValue"), new ds(this.fromTimestamp(t.timestampValue));
                if ("geoPointValue" in t) {
                    zl(t.geoPointValue, "geoPointValue");
                    var r = t.geoPointValue.latitude || 0,
                        i = t.geoPointValue.longitude || 0;
                    return new Cs(new Zh(r, i))
                }
                if ("bytesValue" in t) {
                    zl(t.bytesValue, "bytesValue");
                    var o = this.fromBlob(t.bytesValue);
                    return new bs(o)
                }
                if ("referenceValue" in t) {
                    zl(t.referenceValue, "referenceValue");
                    var a = this.fromResourceName(t.referenceValue),
                        s = new ki(a.get(1), a.get(3)),
                        u = new Ki(this.extractLocalPathFromResourceName(a));
                    return new Ts(s, u)
                }
                return Fr("Unknown Value proto " + JSON.stringify(t))
            }, Xl.prototype.toMutationDocument = function(t, e) {
                return {
                    name: this.toName(t),
                    fields: this.toFields(e)
                }
            }, Xl.prototype.toDocument = function(t) {
                return Vr(!t.hasLocalMutations, "Can't serialize documents with mutations."), {
                    name: this.toName(t.key),
                    fields: this.toFields(t.data()),
                    updateTime: this.toTimestamp(t.version.toTimestamp())
                }
            }, Xl.prototype.fromDocument = function(t, e) {
                var n = this,
                    r = this.fromName(t.name),
                    i = this.fromVersion(t.updateTime);
                return new xs(r, i, {
                    hasCommittedMutations: !!e
                }, void 0, t, function(t) {
                    return n.fromValue(t)
                })
            }, Xl.prototype.toFields = function(t) {
                var n = this,
                    r = {};
                return t.forEach(function(t, e) {
                    r[t] = n.toValue(e)
                }), r
            }, Xl.prototype.fromFields = function(t) {
                var n = this,
                    e = t,
                    r = As.EMPTY;
                return Jr(e, function(t, e) {
                    r = r.set(new Ui([t]), n.fromValue(e))
                }), r
            }, Xl.prototype.toMapValue = function(t) {
                return {
                    fields: this.toFields(t)
                }
            }, Xl.prototype.toArrayValue = function(t) {
                var e = this,
                    n = [];
                return t.forEach(function(t) {
                    n.push(e.toValue(t))
                }), {
                    values: n
                }
            }, Xl.prototype.fromFound = function(t) {
                var e = this;
                Vr(!!t.found, "Tried to deserialize a found document from a missing document."), zl(t.found.name, "doc.found.name"), zl(t.found.updateTime, "doc.found.updateTime");
                var n = this.fromName(t.found.name),
                    r = this.fromVersion(t.found.updateTime);
                return new xs(n, r, {}, void 0, t.found, function(t) {
                    return e.fromValue(t)
                })
            }, Xl.prototype.fromMissing = function(t) {
                Vr(!!t.missing, "Tried to deserialize a missing document from a found document."), Vr(!!t.readTime, "Tried to deserialize a missing document without a read time.");
                var e = this.fromName(t.missing),
                    n = this.fromVersion(t.readTime);
                return new Vs(e, n)
            }, Xl.prototype.fromMaybeDocument = function(t) {
                return "found" in t ? this.fromFound(t) : "missing" in t ? this.fromMissing(t) : Fr("invalid batch get response: " + JSON.stringify(t))
            }, Xl.prototype.toWatchTargetChangeState = function(t) {
                switch (t) {
                    case Fh.Added:
                        return "ADD";
                    case Fh.Current:
                        return "CURRENT";
                    case Fh.NoChange:
                        return "NO_CHANGE";
                    case Fh.Removed:
                        return "REMOVE";
                    case Fh.Reset:
                        return "RESET";
                    default:
                        return Fr("Unknown WatchTargetChangeState: " + t)
                }
            }, Xl.prototype.toTestWatchChange = function(t) {
                if (t instanceof Uh) return {
                    filter: {
                        count: t.existenceFilter.count,
                        targetId: t.targetId
                    }
                };
                if (t instanceof Bh) {
                    if (t.newDoc instanceof xs) {
                        var e = t.newDoc;
                        return {
                            documentChange: {
                                document: {
                                    name: this.toName(e.key),
                                    fields: this.toFields(e.data()),
                                    updateTime: this.toVersion(e.version)
                                },
                                targetIds: t.updatedTargetIds,
                                removedTargetIds: t.removedTargetIds
                            }
                        }
                    }
                    if (t.newDoc instanceof Vs) return e = t.newDoc, {
                        documentDelete: {
                            document: this.toName(e.key),
                            readTime: this.toVersion(e.version),
                            removedTargetIds: t.removedTargetIds
                        }
                    };
                    if (null === t.newDoc) return {
                        documentRemove: {
                            document: this.toName(t.key),
                            removedTargetIds: t.removedTargetIds
                        }
                    }
                }
                if (t instanceof Qh) {
                    var n = void 0;
                    return t.cause && (n = {
                        code: function(t) {
                            if (void 0 === t) return vh.OK;
                            switch (t) {
                                case jr.OK:
                                    return vh.OK;
                                case jr.CANCELLED:
                                    return vh.CANCELLED;
                                case jr.UNKNOWN:
                                    return vh.UNKNOWN;
                                case jr.DEADLINE_EXCEEDED:
                                    return vh.DEADLINE_EXCEEDED;
                                case jr.RESOURCE_EXHAUSTED:
                                    return vh.RESOURCE_EXHAUSTED;
                                case jr.INTERNAL:
                                    return vh.INTERNAL;
                                case jr.UNAVAILABLE:
                                    return vh.UNAVAILABLE;
                                case jr.UNAUTHENTICATED:
                                    return vh.UNAUTHENTICATED;
                                case jr.INVALID_ARGUMENT:
                                    return vh.INVALID_ARGUMENT;
                                case jr.NOT_FOUND:
                                    return vh.NOT_FOUND;
                                case jr.ALREADY_EXISTS:
                                    return vh.ALREADY_EXISTS;
                                case jr.PERMISSION_DENIED:
                                    return vh.PERMISSION_DENIED;
                                case jr.FAILED_PRECONDITION:
                                    return vh.FAILED_PRECONDITION;
                                case jr.ABORTED:
                                    return vh.ABORTED;
                                case jr.OUT_OF_RANGE:
                                    return vh.OUT_OF_RANGE;
                                case jr.UNIMPLEMENTED:
                                    return vh.UNIMPLEMENTED;
                                case jr.DATA_LOSS:
                                    return vh.DATA_LOSS;
                                default:
                                    return Fr("Unknown status code: " + t)
                            }
                        }(t.cause.code),
                        message: t.cause.message
                    }), {
                        targetChange: {
                            targetChangeType: this.toWatchTargetChangeState(t.state),
                            targetIds: t.targetIds,
                            resumeToken: this.unsafeCastProtoByteString(t.resumeToken),
                            cause: n
                        }
                    }
                }
                return Fr("Unrecognized watch change: " + JSON.stringify(t))
            }, Xl.prototype.fromWatchChange = function(t) {
                var e, n = this;
                if ("targetChange" in t) {
                    zl(t.targetChange, "targetChange");
                    var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                        i = t.targetChange.targetIds || [],
                        o = t.targetChange.resumeToken || this.emptyByteString(),
                        a = t.targetChange.cause,
                        s = a && this.fromRpcStatus(a);
                    e = new Qh(r, i, o, s || null)
                } else if ("documentChange" in t) {
                    zl(t.documentChange, "documentChange"), zl(t.documentChange.document, "documentChange.name"), zl(t.documentChange.document.name, "documentChange.document.name"), zl(t.documentChange.document.updateTime, "documentChange.document.updateTime");
                    var u = t.documentChange,
                        c = this.fromName(u.document.name),
                        h = this.fromVersion(u.document.updateTime),
                        l = new xs(c, h, {}, void 0, u.document, function(t) {
                            return n.fromValue(t)
                        }),
                        f = u.targetIds || [],
                        d = u.removedTargetIds || [];
                    e = new Bh(f, d, l.key, l)
                } else if ("documentDelete" in t) {
                    zl(t.documentDelete, "documentDelete"), zl(t.documentDelete.document, "documentDelete.document");
                    var p = t.documentDelete;
                    c = this.fromName(p.document), h = p.readTime ? this.fromVersion(p.readTime) : uo.forDeletedDoc(), l = new Vs(c, h), d = p.removedTargetIds || [], e = new Bh([], d, l.key, l)
                } else if ("documentRemove" in t) {
                    zl(t.documentRemove, "documentRemove"), zl(t.documentRemove.document, "documentRemove");
                    var m = t.documentRemove;
                    c = this.fromName(m.document), d = m.removedTargetIds || [], e = new Bh([], d, c, null)
                } else {
                    if (!("filter" in t)) return Fr("Unknown change type " + JSON.stringify(t));
                    zl(t.filter, "filter"), zl(t.filter.targetId, "filter.targetId");
                    var y = t.filter,
                        g = y.count || 0,
                        v = new Bl(g),
                        b = y.targetId;
                    e = new Uh(b, v)
                }
                return e
            }, Xl.prototype.fromWatchTargetChangeState = function(t) {
                return "NO_CHANGE" === t ? Fh.NoChange : "ADD" === t ? Fh.Added : "REMOVE" === t ? Fh.Removed : "CURRENT" === t ? Fh.Current : "RESET" === t ? Fh.Reset : Fr("Got unexpected TargetChange.state: " + t)
            }, Xl.prototype.versionFromListenResponse = function(t) {
                if (!("targetChange" in t)) return uo.MIN;
                var e = t.targetChange;
                return e.targetIds && e.targetIds.length ? uo.MIN : e.readTime ? this.fromVersion(e.readTime) : uo.MIN
            }, Xl.prototype.toMutation = function(t) {
                var e, n = this;
                if (t instanceof Aa) e = {
                    update: this.toMutationDocument(t.key, t.value)
                };
                else if (t instanceof Ua) e = {
                    delete: this.toName(t.key)
                };
                else if (t instanceof Ma) e = {
                    update: this.toMutationDocument(t.key, t.data),
                    updateMask: this.toDocumentMask(t.fieldMask)
                };
                else {
                    if (!(t instanceof La)) return Fr("Unknown mutation type " + t.type);
                    e = {
                        transform: {
                            document: this.toName(t.key),
                            fieldTransforms: t.fieldTransforms.map(function(t) {
                                return n.toFieldTransform(t)
                            })
                        }
                    }
                }
                return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e
            }, Xl.prototype.fromMutation = function(t) {
                var e = this,
                    n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : Ea.NONE;
                if (t.update) {
                    zl(t.update.name, "name");
                    var r = this.fromName(t.update.name),
                        i = this.fromFields(t.update.fields || {});
                    if (t.updateMask) {
                        var o = this.fromDocumentMask(t.updateMask);
                        return new Ma(r, i, o, n)
                    }
                    return new Aa(r, i, n)
                }
                if (t.delete) return r = this.fromName(t.delete), new Ua(r, n);
                if (t.transform) {
                    r = this.fromName(t.transform.document);
                    var a = t.transform.fieldTransforms.map(function(t) {
                        return e.fromFieldTransform(t)
                    });
                    return Vr(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new La(r, a)
                }
                return Fr("unknown mutation proto: " + JSON.stringify(t))
            }, Xl.prototype.toPrecondition = function(t) {
                return Vr(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
                    updateTime: this.toVersion(t.updateTime)
                } : void 0 !== t.exists ? {
                    exists: t.exists
                } : Fr("Unknown precondition")
            }, Xl.prototype.fromPrecondition = function(t) {
                return void 0 !== t.updateTime ? Ea.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Ea.exists(t.exists) : Ea.NONE
            }, Xl.prototype.fromWriteResult = function(t, e) {
                var n = this,
                    r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
                r.isEqual(uo.MIN) && (r = this.fromVersion(e));
                var i = null;
                return t.transformResults && 0 < t.transformResults.length && (i = t.transformResults.map(function(t) {
                    return n.fromValue(t)
                })), new Ta(r, i)
            }, Xl.prototype.fromWriteResults = function(t, e) {
                var n = this;
                return t && 0 < t.length ? (Vr(void 0 !== e, "Received a write result without a commit time"), t.map(function(t) {
                    return n.fromWriteResult(t, e)
                })) : []
            }, Xl.prototype.toFieldTransform = function(t) {
                var e = this,
                    n = t.transform;
                if (n instanceof Ml) return {
                    fieldPath: t.field.canonicalString(),
                    setToServerValue: "REQUEST_TIME"
                };
                if (n instanceof _l) return {
                    fieldPath: t.field.canonicalString(),
                    appendMissingElements: {
                        values: n.elements.map(function(t) {
                            return e.toValue(t)
                        })
                    }
                };
                if (n instanceof Pl) return {
                    fieldPath: t.field.canonicalString(),
                    removeAllFromArray: {
                        values: n.elements.map(function(t) {
                            return e.toValue(t)
                        })
                    }
                };
                if (n instanceof ql) return {
                    fieldPath: t.field.canonicalString(),
                    increment: this.toValue(n.operand)
                };
                throw Fr("Unknown transform: " + t.transform)
            }, Xl.prototype.fromFieldTransform = function(t) {
                var e = this,
                    n = null;
                if ("setToServerValue" in t) Vr("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), n = Ml.instance;
                else if ("appendMissingElements" in t) {
                    var r = t.appendMissingElements.values || [];
                    n = new _l(r.map(function(t) {
                        return e.fromValue(t)
                    }))
                } else if ("removeAllFromArray" in t) r = t.removeAllFromArray.values || [], n = new Pl(r.map(function(t) {
                    return e.fromValue(t)
                }));
                else if ("increment" in t) {
                    var i = this.fromValue(t.increment);
                    Vr(i instanceof ts, "NUMERIC_ADD transform requires a NumberValue"), n = new ql(i)
                } else Fr("Unknown transform proto: " + JSON.stringify(t));
                var o = Ui.fromServerFormat(t.fieldPath);
                return new va(o, n)
            }, Xl.prototype.toDocumentsTarget = function(t) {
                return {
                    documents: [this.toQueryPath(t.path)]
                }
            }, Xl.prototype.fromDocumentsTarget = function(t) {
                var e = t.documents.length;
                Vr(1 === e, "DocumentsTarget contained other than 1 document: " + e);
                var n = t.documents[0];
                return tl.atPath(this.fromQueryPath(n))
            }, Xl.prototype.toQueryTarget = function(t) {
                var e = {
                        structuredQuery: {}
                    },
                    n = t.path;
                null !== t.collectionGroup ? (Vr(n.length % 2 == 0, "Collection Group queries should be within a document path or root."), e.parent = this.toQueryPath(n), e.structuredQuery.from = [{
                    collectionId: t.collectionGroup,
                    allDescendants: !0
                }]) : (Vr(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{
                    collectionId: n.lastSegment()
                }]);
                var r = this.toFilter(t.filters);
                r && (e.structuredQuery.where = r);
                var i = this.toOrder(t.orderBy);
                i && (e.structuredQuery.orderBy = i);
                var o = this.toInt32Value(t.limit);
                return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e
            }, Xl.prototype.fromQueryTarget = function(t) {
                var e = this.fromQueryPath(t.parent),
                    n = t.structuredQuery,
                    r = n.from ? n.from.length : 0,
                    i = null;
                if (0 < r) {
                    Vr(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                    var o = n.from[0];
                    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                }
                var a = [];
                n.where && (a = this.fromFilter(n.where));
                var s = [];
                n.orderBy && (s = this.fromOrder(n.orderBy));
                var u = null;
                n.limit && (u = this.fromInt32Value(n.limit));
                var c = null;
                n.startAt && (c = this.fromCursor(n.startAt));
                var h = null;
                return n.endAt && (h = this.fromCursor(n.endAt)), new tl(e, i, s, a, u, c, h)
            }, Xl.prototype.toListenRequestLabels = function(t) {
                var e = this.toLabel(t.purpose);
                return null == e ? null : {
                    "goog-listen-tags": e
                }
            }, Xl.prototype.toLabel = function(t) {
                switch (t) {
                    case Pu.Listen:
                        return null;
                    case Pu.ExistenceFilterMismatch:
                        return "existence-filter-mismatch";
                    case Pu.LimboResolution:
                        return "limbo-document";
                    default:
                        return Fr("Unrecognized query purpose: " + t)
                }
            }, Xl.prototype.toTarget = function(t) {
                var e, n = t.query;
                return (e = n.isDocumentQuery() ? {
                    documents: this.toDocumentsTarget(n)
                } : {
                    query: this.toQueryTarget(n)
                }).targetId = t.targetId, 0 < t.resumeToken.length && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e
            }, Xl.prototype.toFilter = function(t) {
                var e = this;
                if (0 !== t.length) {
                    var n = t.map(function(t) {
                        return t instanceof al ? e.toUnaryOrFieldFilter(t) : Fr("Unrecognized filter: " + JSON.stringify(t))
                    });
                    return 1 === n.length ? n[0] : {
                        compositeFilter: {
                            op: "AND",
                            filters: n
                        }
                    }
                }
            }, Xl.prototype.fromFilter = function(t) {
                var e = this;
                return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromFieldFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) {
                    return e.fromFilter(t)
                }).reduce(function(t, e) {
                    return t.concat(e)
                }) : Fr("Unknown filter: " + JSON.stringify(t)) : []
            }, Xl.prototype.toOrder = function(t) {
                var e = this;
                if (0 !== t.length) return t.map(function(t) {
                    return e.toPropertyOrder(t)
                })
            }, Xl.prototype.fromOrder = function(t) {
                var e = this;
                return t.map(function(t) {
                    return e.fromPropertyOrder(t)
                })
            }, Xl.prototype.toCursor = function(t) {
                var e = this;
                return {
                    before: t.before,
                    values: t.position.map(function(t) {
                        return e.toValue(t)
                    })
                }
            }, Xl.prototype.fromCursor = function(t) {
                var e = this,
                    n = !!t.before,
                    r = t.values.map(function(t) {
                        return e.fromValue(t)
                    });
                return new Cl(r, n)
            }, Xl.prototype.toDirection = function(t) {
                return jl[t.name]
            }, Xl.prototype.fromDirection = function(t) {
                switch (t) {
                    case "ASCENDING":
                        return El.ASCENDING;
                    case "DESCENDING":
                        return El.DESCENDING;
                    default:
                        return
                }
            }, Xl.prototype.toOperatorName = function(t) {
                return Wl[t.name]
            }, Xl.prototype.fromOperatorName = function(t) {
                switch (t) {
                    case "EQUAL":
                        return rl.EQUAL;
                    case "GREATER_THAN":
                        return rl.GREATER_THAN;
                    case "GREATER_THAN_OR_EQUAL":
                        return rl.GREATER_THAN_OR_EQUAL;
                    case "LESS_THAN":
                        return rl.LESS_THAN;
                    case "LESS_THAN_OR_EQUAL":
                        return rl.LESS_THAN_OR_EQUAL;
                    case "ARRAY_CONTAINS":
                        return rl.ARRAY_CONTAINS;
                    case "IN":
                        return rl.IN;
                    case "ARRAY_CONTAINS_ANY":
                        return rl.ARRAY_CONTAINS_ANY;
                    case "OPERATOR_UNSPECIFIED":
                        return Fr("Unspecified operator");
                    default:
                        return Fr("Unknown operator")
                }
            }, Xl.prototype.toFieldPathReference = function(t) {
                return {
                    fieldPath: t.canonicalString()
                }
            }, Xl.prototype.fromFieldPathReference = function(t) {
                return Ui.fromServerFormat(t.fieldPath)
            }, Xl.prototype.toPropertyOrder = function(t) {
                return {
                    field: this.toFieldPathReference(t.field),
                    direction: this.toDirection(t.dir)
                }
            }, Xl.prototype.fromPropertyOrder = function(t) {
                return new Nl(this.fromFieldPathReference(t.field), this.fromDirection(t.direction))
            }, Xl.prototype.fromFieldFilter = function(t) {
                return al.create(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value))
            }, Xl.prototype.toUnaryOrFieldFilter = function(t) {
                if (t.op === rl.EQUAL) {
                    if (t.value.isEqual(ss.NAN)) return {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NAN"
                        }
                    };
                    if (t.value.isEqual(Ha.INSTANCE)) return {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NULL"
                        }
                    }
                }
                return {
                    fieldFilter: {
                        field: this.toFieldPathReference(t.field),
                        op: this.toOperatorName(t.op),
                        value: this.toValue(t.value)
                    }
                }
            }, Xl.prototype.fromUnaryFilter = function(t) {
                switch (t.unaryFilter.op) {
                    case "IS_NAN":
                        var e = this.fromFieldPathReference(t.unaryFilter.field);
                        return al.create(e, rl.EQUAL, ss.NAN);
                    case "IS_NULL":
                        var n = this.fromFieldPathReference(t.unaryFilter.field);
                        return al.create(n, rl.EQUAL, Ha.INSTANCE);
                    case "OPERATOR_UNSPECIFIED":
                        return Fr("Unspecified filter");
                    default:
                        return Fr("Unknown filter")
                }
            }, Xl.prototype.toDocumentMask = function(t) {
                var e = [];
                return t.fields.forEach(function(t) {
                    return e.push(t.canonicalString())
                }), {
                    fieldPaths: e
                }
            }, Xl.prototype.fromDocumentMask = function(t) {
                var e = (t.fieldPaths || []).map(function(t) {
                    return Ui.fromServerFormat(t)
                });
                return ya.fromArray(e)
            }, Xl);

            function Xl(t, e) {
                this.databaseId = t, this.options = e
            }
            var Jl = function() {
                    this.viewSnap = null, this.targetId = 0, this.listeners = []
                },
                Zl = ($l.prototype.listen = function(t) {
                    var e = t.query,
                        n = !1,
                        r = this.queries.get(e);
                    return r || (n = !0, r = new Jl, this.queries.set(e, r)), r.listeners.push(t), Vr(!t.applyOnlineStateChange(this.onlineState), "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."), !r.viewSnap || t.onViewSnapshot(r.viewSnap) && this.raiseSnapshotsInSyncEvent(), n ? this.syncEngine.listen(e).then(function(t) {
                        return r.targetId = t
                    }) : Promise.resolve(r.targetId)
                }, $l.prototype.unlisten = function(o) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return p(this, function(t) {
                            return e = o.query, n = !1, (r = this.queries.get(e)) && 0 <= (i = r.listeners.indexOf(o)) && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(e), [2, this.syncEngine.unlisten(e)]) : [2]
                        })
                    })
                }, $l.prototype.onWatchChange = function(t) {
                    for (var e = !1, n = 0, r = t; n < r.length; n++) {
                        var i = r[n],
                            o = i.query,
                            a = this.queries.get(o);
                        if (a) {
                            for (var s = 0, u = a.listeners; s < u.length; s++) u[s].onViewSnapshot(i) && (e = !0);
                            a.viewSnap = i
                        }
                    }
                    e && this.raiseSnapshotsInSyncEvent()
                }, $l.prototype.onWatchError = function(t, e) {
                    var n = this.queries.get(t);
                    if (n)
                        for (var r = 0, i = n.listeners; r < i.length; r++) i[r].onError(e);
                    this.queries.delete(t)
                }, $l.prototype.onOnlineStateChange = function(i) {
                    this.onlineState = i;
                    var o = !1;
                    this.queries.forEach(function(t, e) {
                        for (var n = 0, r = e.listeners; n < r.length; n++) r[n].applyOnlineStateChange(i) && (o = !0)
                    }), o && this.raiseSnapshotsInSyncEvent()
                }, $l.prototype.addSnapshotsInSyncListener = function(t) {
                    this.snapshotsInSyncListeners.add(t), t.next()
                }, $l.prototype.removeSnapshotsInSyncListener = function(t) {
                    this.snapshotsInSyncListeners.delete(t)
                }, $l.prototype.raiseSnapshotsInSyncEvent = function() {
                    this.snapshotsInSyncListeners.forEach(function(t) {
                        t.next()
                    })
                }, $l);

            function $l(t) {
                this.syncEngine = t, this.queries = new js(function(t) {
                    return t.canonicalId()
                }), this.onlineState = fh.Unknown, this.snapshotsInSyncListeners = new Set, this.syncEngine.subscribe(this)
            }
            var tf = (ef.prototype.onViewSnapshot = function(t) {
                if (Vr(0 < t.docChanges.length || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) {
                    for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                        var i = r[n];
                        i.type !== Ih.Metadata && e.push(i)
                    }
                    t = new Oh(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0)
                }
                var o = !1;
                return this.raisedInitialEvent ? this.shouldRaiseEvent(t) && (this.queryObserver.next(t), o = !0) : this.shouldRaiseInitialEvent(t, this.onlineState) && (this.raiseInitialEvent(t), o = !0), this.snap = t, o
            }, ef.prototype.onError = function(t) {
                this.queryObserver.error(t)
            }, ef.prototype.applyOnlineStateChange = function(t) {
                this.onlineState = t;
                var e = !1;
                return this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && (this.raiseInitialEvent(this.snap), e = !0), e
            }, ef.prototype.shouldRaiseInitialEvent = function(t, e) {
                if (Vr(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0;
                var n = e !== fh.Offline;
                return this.options.waitForSyncWhenOnline && n ? (Vr(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === fh.Offline
            }, ef.prototype.shouldRaiseEvent = function(t) {
                if (0 < t.docChanges.length) return !0;
                var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites;
                return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges
            }, ef.prototype.raiseInitialEvent = function(t) {
                Vr(!this.raisedInitialEvent, "Trying to raise initial events for second time"), t = Oh.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.raisedInitialEvent = !0, this.queryObserver.next(t)
            }, ef);

            function ef(t, e, n) {
                this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.snap = null, this.onlineState = fh.Unknown, this.options = n || {}
            }
            var nf = (rf.fromSnapshot = function(t, e) {
                for (var n = Mo(), r = Mo(), i = 0, o = e.docChanges; i < o.length; i++) {
                    var a = o[i];
                    switch (a.type) {
                        case Ih.Added:
                            n = n.add(a.doc.key);
                            break;
                        case Ih.Removed:
                            r = r.add(a.doc.key)
                    }
                }
                return new rf(t, e.fromCache, n, r)
            }, rf);

            function rf(t, e, n, r) {
                this.targetId = t, this.fromCache = e, this.addedKeys = n, this.removedKeys = r
            }
            var of = function(t) {
                this.key = t
            }, af = function(t) {
                this.key = t
            }, sf = (Object.defineProperty(uf.prototype, "syncedDocuments", {
                get: function() {
                    return this._syncedDocuments
                },
                enumerable: !0,
                configurable: !0
            }), uf.prototype.computeDocChanges = function(t, e) {
                var s = this,
                    u = e ? e.changeSet : new Rh,
                    c = e ? e.documentSet : this.documentSet,
                    h = e ? e.mutatedKeys : this.mutatedKeys,
                    l = c,
                    f = !1,
                    d = this.query.hasLimit() && c.size === this.query.limit ? c.last() : null;
                if (t.inorderTraversal(function(t, e) {
                        var n = c.get(t),
                            r = e instanceof xs ? e : null;
                        r && (Vr(t.isEqual(r.key), "Mismatching keys found in document changes: " + t + " != " + r.key), r = s.query.matches(r) ? r : null);
                        var i = !!n && s.mutatedKeys.has(n.key),
                            o = !!r && (r.hasLocalMutations || s.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                            a = !1;
                        n && r ? n.data().isEqual(r.data()) ? i !== o && (u.track({
                            type: Ih.Metadata,
                            doc: r
                        }), a = !0) : s.shouldWaitForSyncedDocument(n, r) || (u.track({
                            type: Ih.Modified,
                            doc: r
                        }), a = !0, d && 0 < s.query.docComparator(r, d) && (f = !0)) : !n && r ? (u.track({
                            type: Ih.Added,
                            doc: r
                        }), a = !0) : n && !r && (u.track({
                            type: Ih.Removed,
                            doc: n
                        }), a = !0, d && (f = !0)), a && (h = r ? (l = l.add(r), o ? h.add(t) : h.delete(t)) : (l = l.delete(t), h.delete(t)))
                    }), this.query.hasLimit())
                    for (; l.size > this.query.limit;) {
                        var n = l.last();
                        l = l.delete(n.key), h = h.delete(n.key), u.track({
                            type: Ih.Removed,
                            doc: n
                        })
                    }
                return Vr(!f || !e, "View was refilled using docs that themselves needed refilling."), {
                    documentSet: l,
                    changeSet: u,
                    needsRefill: f,
                    mutatedKeys: h
                }
            }, uf.prototype.shouldWaitForSyncedDocument = function(t, e) {
                return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
            }, uf.prototype.applyChanges = function(t, e, n) {
                var r = this;
                Vr(!t.needsRefill, "Cannot apply changes that need a refill");
                var i = this.documentSet;
                this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys;
                var o = t.changeSet.getChanges();
                o.sort(function(t, e) {
                    return function(t, e) {
                        function n(t) {
                            switch (t) {
                                case Ih.Added:
                                    return 1;
                                case Ih.Modified:
                                case Ih.Metadata:
                                    return 2;
                                case Ih.Removed:
                                    return 0;
                                default:
                                    return Fr("Unknown ChangeType: " + t)
                            }
                        }
                        return n(t) - n(e)
                    }(t.type, e.type) || r.query.docComparator(t.doc, e.doc)
                }), this.applyTargetChange(n);
                var a = e ? this.updateLimboDocuments() : [],
                    s = 0 === this.limboDocuments.size && this.current ? Dh.Synced : Dh.Local,
                    u = s !== this.syncState;
                return this.syncState = s, 0 !== o.length || u ? {
                    snapshot: new Oh(this.query, t.documentSet, i, o, t.mutatedKeys, s === Dh.Local, u, !1),
                    limboChanges: a
                } : {
                    limboChanges: a
                }
            }, uf.prototype.applyOnlineStateChange = function(t) {
                return this.current && t === fh.Offline ? (this.current = !1, this.applyChanges({
                    documentSet: this.documentSet,
                    changeSet: new Rh,
                    mutatedKeys: this.mutatedKeys,
                    needsRefill: !1
                }, !1)) : {
                    limboChanges: []
                }
            }, uf.prototype.shouldBeInLimbo = function(t) {
                return !this._syncedDocuments.has(t) && !!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations
            }, uf.prototype.applyTargetChange = function(t) {
                var e = this;
                t && (t.addedDocuments.forEach(function(t) {
                    return e._syncedDocuments = e._syncedDocuments.add(t)
                }), t.modifiedDocuments.forEach(function(t) {
                    return Vr(e._syncedDocuments.has(t), "Modified document " + t + " not found in view.")
                }), t.removedDocuments.forEach(function(t) {
                    return e._syncedDocuments = e._syncedDocuments.delete(t)
                }), this.current = t.current)
            }, uf.prototype.updateLimboDocuments = function() {
                var e = this;
                if (!this.current) return [];
                var n = this.limboDocuments;
                this.limboDocuments = Mo(), this.documentSet.forEach(function(t) {
                    e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key))
                });
                var r = [];
                return n.forEach(function(t) {
                    e.limboDocuments.has(t) || r.push(new af(t))
                }), this.limboDocuments.forEach(function(t) {
                    n.has(t) || r.push(new of (t))
                }), r
            }, uf.prototype.synchronizeWithPersistedState = function(t) {
                this._syncedDocuments = t.remoteKeys, this.limboDocuments = Mo();
                var e = this.computeDocChanges(t.documents);
                return this.applyChanges(e, !0)
            }, uf.prototype.computeInitialSnapshot = function() {
                return Oh.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === Dh.Local)
            }, uf);

            function uf(t, e) {
                this.query = t, this._syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = Mo(), this.mutatedKeys = Mo(), this.documentSet = new Ah(t.docComparator.bind(t))
            }
            var cf = (hf.prototype.run = function() {
                this.runWithBackOff()
            }, hf.prototype.runWithBackOff = function() {
                var t = this;
                this.backoff.backoffAndRun(function() {
                    return d(t, void 0, void 0, function() {
                        var e, n, r = this;
                        return p(this, function(t) {
                            return e = this.remoteStore.createTransaction(), (n = this.tryRunUpdateFunction(e)) && n.then(function(t) {
                                r.asyncQueue.enqueueAndForget(function() {
                                    return e.commit().then(function() {
                                        r.deferred.resolve(t)
                                    }).catch(function(t) {
                                        r.handleTransactionError(t)
                                    })
                                })
                            }).catch(function(t) {
                                r.handleTransactionError(t)
                            }), [2]
                        })
                    })
                })
            }, hf.prototype.tryRunUpdateFunction = function(t) {
                try {
                    var e = this.updateFunction(t);
                    return !Yc(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null)
                } catch (t) {
                    return this.deferred.reject(t), null
                }
            }, hf.prototype.handleTransactionError = function(t) {
                var e = this;
                0 < this.retries && this.isRetryableTransactionError(t) ? (this.retries -= 1, this.asyncQueue.enqueueAndForget(function() {
                    return e.runWithBackOff(), Promise.resolve()
                })) : this.deferred.reject(t)
            }, hf.prototype.isRetryableTransactionError = function(t) {
                if ("FirebaseError" !== t.name) return !1;
                var e = t.code;
                return "aborted" === e || "failed-precondition" === e || !Th(e)
            }, hf);

            function hf(t, e, n, r) {
                this.asyncQueue = t, this.remoteStore = e, this.updateFunction = n, this.deferred = r, this.retries = 5, this.backoff = new Jc(this.asyncQueue, Wi.RetryTransaction)
            }
            var lf = "SyncEngine",
                ff = function(t, e, n) {
                    this.query = t, this.targetId = e, this.view = n
                },
                df = function(t) {
                    this.key = t, this.receivedDocument = !1
                },
                pf = (Object.defineProperty(mf.prototype, "isPrimaryClient", {
                    get: function() {
                        return !0 === this.isPrimary
                    },
                    enumerable: !0,
                    configurable: !0
                }), mf.prototype.subscribe = function(t) {
                    Vr(null !== t, "SyncEngine listener cannot be null"), Vr(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = t
                }, mf.prototype.listen = function(a) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(a)) ? (e = r.targetId, this.sharedClientState.addLocalQueryTarget(e), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                                case 1:
                                    return [4, this.localStore.allocateQuery(a)];
                                case 2:
                                    return i = t.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), e = i.targetId, [4, this.initializeViewAndComputeSnapshot(i, "current" === o)];
                                case 3:
                                    n = t.sent(), this.isPrimary && this.remoteStore.listen(i), t.label = 4;
                                case 4:
                                    return this.syncEngineListener.onWatchChange([n]), [2, e]
                            }
                        })
                    })
                }, mf.prototype.initializeViewAndComputeSnapshot = function(u, c) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = u.query, [4, this.localStore.executeQuery(e, !0)];
                                case 1:
                                    return n = t.sent(), r = new sf(e, n.remoteKeys), i = r.computeDocChanges(n.documents), o = xh.createSynthesizedTargetChangeForCurrentChange(u.targetId, c && this.onlineState !== fh.Offline), Vr(0 === (a = r.applyChanges(i, !0 === this.isPrimary, o)).limboChanges.length, "View returned limbo docs before target ack from the server."), Vr(!!a.snapshot, "applyChanges for new view should always return a snapshot"), s = new ff(e, u.targetId, r), this.queryViewsByQuery.set(e, s), this.queryViewsByTarget[u.targetId] = s, [2, a.snapshot]
                            }
                        })
                    })
                }, mf.prototype.synchronizeViewAndComputeSnapshot = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.localStore.executeQuery(r.query, !0)];
                                case 1:
                                    return e = t.sent(), n = r.view.synchronizeWithPersistedState(e), this.isPrimary && this.updateTrackedLimbos(r.targetId, n.limboChanges), [2, n]
                            }
                        })
                    })
                }, mf.prototype.unlisten = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("unlisten()"), Vr(!!(e = this.queryViewsByQuery.get(r)), "Trying to unlisten on query not found:" + r), this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(e.targetId), this.sharedClientState.isActiveQueryTarget(e.targetId) ? [3, 2] : [4, this.localStore.releaseQuery(r, !1).then(function() {
                                        n.sharedClientState.clearQueryState(e.targetId), n.remoteStore.unlisten(e.targetId), n.removeAndCleanupQuery(e)
                                    }).catch(lc)]) : [3, 3];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [3, 5];
                                case 3:
                                    return this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(r, !0)];
                                case 4:
                                    t.sent(), t.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.write = function(n, r) {
                    return d(this, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("write()"), [4, this.localStore.localWrite(n)];
                                case 1:
                                    return e = t.sent(), this.sharedClientState.addPendingMutation(e.batchId), this.addMutationCallback(e.batchId, r), [4, this.emitNewSnapsAndNotifyLocalStore(e.changes)];
                                case 2:
                                    return t.sent(), [4, this.remoteStore.fillWritePipeline()];
                                case 3:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, mf.prototype.runTransaction = function(t, e, n) {
                    new cf(t, this.remoteStore, e, n).run()
                }, mf.prototype.applyRemoteEvent = function(n) {
                    return d(this, void 0, void 0, function() {
                        var e, r = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("applyRemoteEvent()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.applyRemoteEvent(n)];
                                case 2:
                                    return e = t.sent(), Jr(n.targetChanges, function(t, e) {
                                        var n = r.limboResolutionsByTarget[Number(t)];
                                        n && (Vr(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), 0 < e.addedDocuments.size ? n.receivedDocument = !0 : 0 < e.modifiedDocuments.size ? Vr(n.receivedDocument, "Received change for limbo target document without add.") : 0 < e.removedDocuments.size && (Vr(n.receivedDocument, "Received remove for limbo target document without add."), n.receivedDocument = !1))
                                    }), [4, this.emitNewSnapsAndNotifyLocalStore(e, n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, lc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.applyOnlineStateChange = function(r, t) {
                    if (this.isPrimary && t === ph.RemoteStore || !this.isPrimary && t === ph.SharedClientState) {
                        this.assertSubscribed("applyOnlineStateChange()");
                        var i = [];
                        this.queryViewsByQuery.forEach(function(t, e) {
                            var n = e.view.applyOnlineStateChange(r);
                            Vr(0 === n.limboChanges.length, "OnlineState should not affect limbo documents."), n.snapshot && i.push(n.snapshot)
                        }), this.syncEngineListener.onOnlineStateChange(r), this.syncEngineListener.onWatchChange(i), this.onlineState = r, this.isPrimary && this.sharedClientState.setOnlineState(r)
                    }
                }, mf.prototype.rejectListen = function(u, c) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(u, "rejected", c), e = this.limboResolutionsByTarget[u], (n = e && e.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(n), delete this.limboResolutionsByTarget[u], r = (r = new ho(Ki.comparator)).insert(n, new Vs(n, uo.forDeletedDoc())), i = Mo().add(n), o = new Lh(uo.MIN, {}, new bo(bi), r, i), [2, this.applyRemoteEvent(o)]) : [3, 1];
                                case 1:
                                    return Vr(!!(a = this.queryViewsByTarget[u]), "Unknown targetId: " + u), [4, this.localStore.releaseQuery(a.query, !1).then(function() {
                                        return s.removeAndCleanupQuery(a)
                                    }).catch(lc)];
                                case 2:
                                    t.sent(), this.syncEngineListener.onWatchError(a.query, c), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.applyBatchState = function(n, r, i) {
                    return d(this, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(n)];
                                case 1:
                                    return null === (e = t.sent()) ? (Pr(lf, "Cannot apply mutation batch with id: " + n), [2]) : "pending" !== r ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    "acknowledged" === r || "rejected" === r ? (this.processUserCallback(n, i || null), this.localStore.removeCachedMutationBatchMetadata(n)) : Fr("Unknown batchState: " + r), t.label = 4;
                                case 4:
                                    return [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                                case 5:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, mf.prototype.applySuccessfulWrite = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("applySuccessfulWrite()"), e = r.batch.batchId, this.processUserCallback(e, null), this.triggerPendingWritesCallbacks(e), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.acknowledgeBatch(r)];
                                case 2:
                                    return n = t.sent(), this.sharedClientState.updateMutationState(e, "acknowledged"), [4, this.emitNewSnapsAndNotifyLocalStore(n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, lc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.rejectFailedWrite = function(n, r) {
                    return d(this, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(n, r), this.triggerPendingWritesCallbacks(n), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.rejectBatch(n)];
                                case 2:
                                    return e = t.sent(), this.sharedClientState.updateMutationState(n, "rejected", r), [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, lc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.registerPendingWritesCallback = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.remoteStore.canUseNetwork() || Pr(lf, "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), [4, this.localStore.getHighestUnacknowledgedBatchId()];
                                case 1:
                                    return -1 === (e = t.sent()) ? r.resolve() : ((n = this.pendingWritesCallbacks.get(e) || []).push(r), this.pendingWritesCallbacks.set(e, n)), [2]
                            }
                        })
                    })
                }, mf.prototype.triggerPendingWritesCallbacks = function(t) {
                    (this.pendingWritesCallbacks.get(t) || []).forEach(function(t) {
                        t.resolve()
                    }), this.pendingWritesCallbacks.delete(t)
                }, mf.prototype.rejectOutstandingPendingWritesCallbacks = function(e) {
                    this.pendingWritesCallbacks.forEach(function(t) {
                        t.forEach(function(t) {
                            t.reject(new Wr(jr.CANCELLED, e))
                        })
                    }), this.pendingWritesCallbacks.clear()
                }, mf.prototype.addMutationCallback = function(t, e) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    n = (n = n || new ho(bi)).insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                }, mf.prototype.processUserCallback = function(t, e) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    if (n) {
                        var r = n.get(t);
                        r && (Vr(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }
                }, mf.prototype.removeAndCleanupQuery = function(t) {
                    var e = this;
                    if (this.sharedClientState.removeLocalQueryTarget(t.targetId), this.queryViewsByQuery.delete(t.query), delete this.queryViewsByTarget[t.targetId], this.isPrimary) {
                        var n = this.limboDocumentRefs.referencesForId(t.targetId);
                        this.limboDocumentRefs.removeReferencesForId(t.targetId), n.forEach(function(t) {
                            e.limboDocumentRefs.containsKey(t) || e.removeLimboTarget(t)
                        })
                    }
                }, mf.prototype.removeLimboTarget = function(t) {
                    var e = this.limboTargetsByKey.get(t);
                    null !== e && (this.remoteStore.unlisten(e), this.limboTargetsByKey = this.limboTargetsByKey.remove(t), delete this.limboResolutionsByTarget[e])
                }, mf.prototype.updateTrackedLimbos = function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        i instanceof of ? (this.limboDocumentRefs.addReference(i.key, t), this.trackLimboChange(i)) : i instanceof af ? (Pr(lf, "Document no longer in limbo: " + i.key), this.limboDocumentRefs.removeReference(i.key, t), this.limboDocumentRefs.containsKey(i.key) || this.removeLimboTarget(i.key)) : Fr("Unknown limbo change: " + JSON.stringify(i))
                    }
                }, mf.prototype.trackLimboChange = function(t) {
                    var e = t.key;
                    if (!this.limboTargetsByKey.get(e)) {
                        Pr(lf, "New document in limbo: " + e);
                        var n = this.limboTargetIdGenerator.next(),
                            r = tl.atPath(e.path);
                        this.limboResolutionsByTarget[n] = new df(e), this.remoteStore.listen(new Uu(r, n, Pu.LimboResolution, Mi.INVALID)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n)
                    }
                }, mf.prototype.currentLimboDocs = function() {
                    return this.limboTargetsByKey
                }, mf.prototype.emitNewSnapsAndNotifyLocalStore = function(r, u) {
                    return d(this, void 0, void 0, function() {
                        var o, a, e, s = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return o = [], a = [], e = [], this.queryViewsByQuery.forEach(function(t, i) {
                                        e.push(Promise.resolve().then(function() {
                                            var n = i.view.computeDocChanges(r);
                                            return n.needsRefill ? s.localStore.executeQuery(i.query, !1).then(function(t) {
                                                var e = t.documents;
                                                return i.view.computeDocChanges(e, n)
                                            }) : n
                                        }).then(function(t) {
                                            var e = u && u.targetChanges[i.targetId],
                                                n = i.view.applyChanges(t, !0 === s.isPrimary, e);
                                            if (s.updateTrackedLimbos(i.targetId, n.limboChanges), n.snapshot) {
                                                s.isPrimary && s.sharedClientState.updateQueryState(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot);
                                                var r = nf.fromSnapshot(i.targetId, n.snapshot);
                                                a.push(r)
                                            }
                                        }))
                                    }), [4, Promise.all(e)];
                                case 1:
                                    return t.sent(), this.syncEngineListener.onWatchChange(o), [4, this.localStore.notifyLocalViewChanges(a)];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, mf.prototype.assertSubscribed = function(t) {
                    Vr(null !== this.syncEngineListener, "Trying to call " + t + " before calling subscribe().")
                }, mf.prototype.handleCredentialChange = function(r) {
                    return d(this, void 0, void 0, function() {
                        var e, n;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = !this.currentUser.isEqual(r), this.currentUser = r, e ? (this.rejectOutstandingPendingWritesCallbacks("'waitForPendingWrites' promise is rejected due to a user change."), [4, this.localStore.handleUserChange(r)]) : [3, 3];
                                case 1:
                                    return n = t.sent(), this.sharedClientState.handleUserChange(r, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [4, this.remoteStore.handleCredentialChange()];
                                case 4:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, mf.prototype.applyPrimaryState = function(c) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return !0 !== c || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.remoteStore.applyPrimaryState(!0)]);
                                case 1:
                                    return t.sent(), e = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];
                                case 2:
                                    for (n = t.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.remoteStore.listen(o);
                                    return [3, 7];
                                case 3:
                                    return !1 !== c || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, a = [], s = Promise.resolve(), Xr(this.queryViewsByTarget, function(t, e) {
                                        u.sharedClientState.isLocalQueryTarget(t) ? a.push(t) : s = s.then(function() {
                                            return u.unlisten(e.query)
                                        }), u.remoteStore.unlisten(e.targetId)
                                    }), [4, s]);
                                case 4:
                                    return t.sent(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(a)];
                                case 5:
                                    return t.sent(), this.resetLimboDocuments(), [4, this.remoteStore.applyPrimaryState(!1)];
                                case 6:
                                    t.sent(), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.resetLimboDocuments = function() {
                    var e = this;
                    Xr(this.limboResolutionsByTarget, function(t) {
                        e.remoteStore.unlisten(t)
                    }), this.limboDocumentRefs.removeAllReferences(), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new ho(Ki.comparator)
                }, mf.prototype.synchronizeQueryViewsAndRaiseSnapshots = function(h) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u, c;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    e = [], n = [], r = 0, i = h, t.label = 1;
                                case 1:
                                    return r < i.length ? (o = i[r], a = void 0, (s = this.queryViewsByTarget[o]) ? [4, this.localStore.releaseQuery(s.query, !0)] : [3, 5]) : [3, 11];
                                case 2:
                                    return t.sent(), [4, this.localStore.allocateQuery(s.query)];
                                case 3:
                                    return a = t.sent(), [4, this.synchronizeViewAndComputeSnapshot(s)];
                                case 4:
                                    return (u = t.sent()).snapshot && n.push(u.snapshot), [3, 9];
                                case 5:
                                    return Vr(!0 === this.isPrimary, "A secondary tab should never have an active query without an active view."), [4, this.localStore.getQueryForTarget(o)];
                                case 6:
                                    return Vr(!!(c = t.sent()), "Query data for target " + o + " not found"), [4, this.localStore.allocateQuery(c)];
                                case 7:
                                    return a = t.sent(), [4, this.initializeViewAndComputeSnapshot(a, !1)];
                                case 8:
                                    t.sent(), t.label = 9;
                                case 9:
                                    e.push(a), t.label = 10;
                                case 10:
                                    return r++, [3, 1];
                                case 11:
                                    return this.syncEngineListener.onWatchChange(n), [2, e]
                            }
                        })
                    })
                }, mf.prototype.getActiveClients = function() {
                    return this.localStore.getActiveClients()
                }, mf.prototype.applyTargetState = function(i, o, a) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (this.isPrimary) return Pr(lf, "Ignoring unexpected query state notification."), [2];
                                    if (!this.queryViewsByTarget[i]) return [3, 7];
                                    switch (o) {
                                        case "current":
                                        case "not-current":
                                            return [3, 1];
                                        case "rejected":
                                            return [3, 4]
                                    }
                                    return [3, 6];
                                case 1:
                                    return [4, this.localStore.getNewDocumentChanges()];
                                case 2:
                                    return e = t.sent(), n = Lh.createSynthesizedRemoteEventForCurrentChange(i, "current" === o), [4, this.emitNewSnapsAndNotifyLocalStore(e, n)];
                                case 3:
                                    return t.sent(), [3, 7];
                                case 4:
                                    return r = this.queryViewsByTarget[i], this.removeAndCleanupQuery(r), [4, this.localStore.releaseQuery(r.query, !0)];
                                case 5:
                                    return t.sent(), this.syncEngineListener.onWatchError(r.query, a), [3, 7];
                                case 6:
                                    Fr("Unexpected target state: " + o), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.applyActiveTargetsChange = function(l, f) {
                    return d(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u, c, h = this;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.isPrimary) return [2];
                                    e = 0, n = l, t.label = 1;
                                case 1:
                                    return e < n.length ? (c = n[e], Vr(!this.queryViewsByTarget[c], "Trying to add an already active target"), [4, this.localStore.getQueryForTarget(c)]) : [3, 6];
                                case 2:
                                    return Vr(!!(r = t.sent()), "Query data for active target " + c + " not found"), [4, this.localStore.allocateQuery(r)];
                                case 3:
                                    return i = t.sent(), [4, this.initializeViewAndComputeSnapshot(i, !1)];
                                case 4:
                                    t.sent(), this.remoteStore.listen(i), t.label = 5;
                                case 5:
                                    return e++, [3, 1];
                                case 6:
                                    o = function(e) {
                                        var n;
                                        return p(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return (n = a.queryViewsByTarget[e]) ? [4, a.localStore.releaseQuery(n.query, !1).then(function() {
                                                        h.remoteStore.unlisten(e), h.removeAndCleanupQuery(n)
                                                    }).catch(lc)] : [3, 2];
                                                case 1:
                                                    t.sent(), t.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        })
                                    }, a = this, s = 0, u = f, t.label = 7;
                                case 7:
                                    return s < u.length ? (c = u[s], [5, o(c)]) : [3, 10];
                                case 8:
                                    t.sent(), t.label = 9;
                                case 9:
                                    return s++, [3, 7];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, mf.prototype.enableNetwork = function() {
                    return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork()
                }, mf.prototype.disableNetwork = function() {
                    return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork()
                }, mf.prototype.getRemoteKeysForTarget = function(t) {
                    var e = this.limboResolutionsByTarget[t];
                    return e && e.receivedDocument ? Mo().add(e.key) : this.queryViewsByTarget[t] ? this.queryViewsByTarget[t].view.syncedDocuments : Mo()
                }, mf);

            function mf(t, e, n, r) {
                this.localStore = t, this.remoteStore = e, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new js(function(t) {
                    return t.canonicalId()
                }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new ho(Ki.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new bc, this.mutationUserCallbacks = {}, this.pendingWritesCallbacks = new Map, this.limboTargetIdGenerator = Xo.forSyncEngine(), this.isPrimary = void 0, this.onlineState = fh.Unknown
            }
            var yf = (gf.prototype.isAuthenticated = function() {
                return null != this.uid
            }, gf.prototype.toKey = function() {
                return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
            }, gf.prototype.isEqual = function(t) {
                return t.uid === this.uid
            }, gf.UNAUTHENTICATED = new gf(null), gf.GOOGLE_CREDENTIALS = new gf("google-credentials-uid"), gf.FIRST_PARTY = new gf("first-party-uid"), gf);

            function gf(t) {
                this.uid = t
            }
            var vf = "SharedClientState",
                bf = "firestore_clients",
                wf = "firestore_mutations",
                Sf = "firestore_targets",
                Tf = (Ef.fromWebStorageEntry = function(t, e, n) {
                    var r = JSON.parse(n),
                        i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                        o = void 0;
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new Wr(r.error.code, r.error.message)), i ? new Ef(t, e, r.state, o) : (xr(vf, "Failed to parse mutation state for ID '" + e + "': " + n), null)
                }, Ef.prototype.toWebStorageJSON = function() {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(t)
                }, Ef);

            function Ef(t, e, n, r) {
                this.user = t, this.batchId = e, this.state = n, Vr(void 0 !== (this.error = r) == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'")
            }
            var If = (Cf.fromWebStorageEntry = function(t, e) {
                var n = JSON.parse(e),
                    r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                    i = void 0;
                return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new Wr(n.error.code, n.error.message)), r ? new Cf(t, n.state, i) : (xr(vf, "Failed to parse target state for ID '" + t + "': " + e), null)
            }, Cf.prototype.toWebStorageJSON = function() {
                var t = {
                    state: this.state,
                    updateTimeMs: Date.now()
                };
                return this.error && (t.error = {
                    code: this.error.code,
                    message: this.error.message
                }), JSON.stringify(t)
            }, Cf);

            function Cf(t, e, n) {
                this.targetId = t, this.state = e, Vr(void 0 !== (this.error = n) == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'")
            }
            var Df = (Nf.fromWebStorageEntry = function(t, e) {
                for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = _o(), o = 0; r && o < n.activeTargetIds.length; ++o) r = Xc(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]);
                return r ? new Nf(t, i) : (xr(vf, "Failed to parse client data for instance '" + t + "': " + e), null)
            }, Nf);

            function Nf(t, e) {
                this.clientId = t, this.activeTargetIds = e
            }
            var Af = (kf.fromWebStorageEntry = function(t) {
                var e = JSON.parse(t);
                return "object" == typeof e && e.onlineState in fh && "string" == typeof e.clientId ? new kf(e.clientId, fh[e.onlineState]) : (xr(vf, "Failed to parse online state: " + t), null)
            }, kf);

            function kf(t, e) {
                this.clientId = t, this.onlineState = e
            }
            var Rf = (Mf.prototype.addQueryTarget = function(t) {
                Vr(!this.activeTargetIds.has(t), "Target with ID '" + t + "' already active."), this.activeTargetIds = this.activeTargetIds.add(t)
            }, Mf.prototype.removeQueryTarget = function(t) {
                this.activeTargetIds = this.activeTargetIds.delete(t)
            }, Mf.prototype.toWebStorageJSON = function() {
                var t = {
                    activeTargetIds: this.activeTargetIds.toArray(),
                    updateTimeMs: Date.now()
                };
                return JSON.stringify(t)
            }, Mf);

            function Mf() {
                this.activeTargetIds = _o()
            }
            var Of = (_f.isAvailable = function(t) {
                return !(!t.window || null == t.window.localStorage)
            }, _f.prototype.start = function() {
                return d(this, void 0, void 0, function() {
                    var e, n, r, i, o, a, s, u, c, h, l, f = this;
                    return p(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return Vr(!this.started, "WebStorageSharedClientState already started"), Vr(null !== this.syncEngine, "syncEngine property must be set before calling start()"), Vr(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                            case 1:
                                for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.localClientId && (o = this.getItem(this.toWebStorageClientStateKey(i))) && (a = Df.fromWebStorageEntry(i, o)) && (this.activeClients[a.clientId] = a);
                                for (this.persistClientState(), (s = this.storage.getItem(this.onlineStateKey)) && (u = this.fromWebStorageOnlineState(s)) && this.handleOnlineStateEvent(u), c = 0, h = this.earlyEvents; c < h.length; c++) l = h[c], this.handleWebStorageEvent(l);
                                return this.earlyEvents = [], this.platform.window.addEventListener("unload", function() {
                                    return f.shutdown()
                                }), this.started = !0, [2]
                        }
                    })
                })
            }, _f.prototype.writeSequenceNumber = function(t) {
                this.setItem(this.sequenceNumberKey, JSON.stringify(t))
            }, _f.prototype.getAllActiveQueryTargets = function() {
                var n = _o();
                return Jr(this.activeClients, function(t, e) {
                    n = n.unionWith(e.activeTargetIds)
                }), n
            }, _f.prototype.isActiveQueryTarget = function(t) {
                for (var e in this.activeClients)
                    if (this.activeClients.hasOwnProperty(e) && this.activeClients[e].activeTargetIds.has(t)) return !0;
                return !1
            }, _f.prototype.addPendingMutation = function(t) {
                this.persistMutationState(t, "pending")
            }, _f.prototype.updateMutationState = function(t, e, n) {
                this.persistMutationState(t, e, n), this.removeMutationState(t)
            }, _f.prototype.addLocalQueryTarget = function(t) {
                var e = "not-current";
                if (this.isActiveQueryTarget(t)) {
                    var n = this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t));
                    if (n) {
                        var r = If.fromWebStorageEntry(t, n);
                        r && (e = r.state)
                    }
                }
                return this.localClientState.addQueryTarget(t), this.persistClientState(), e
            }, _f.prototype.removeLocalQueryTarget = function(t) {
                this.localClientState.removeQueryTarget(t), this.persistClientState()
            }, _f.prototype.isLocalQueryTarget = function(t) {
                return this.localClientState.activeTargetIds.has(t)
            }, _f.prototype.clearQueryState = function(t) {
                this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))
            }, _f.prototype.updateQueryState = function(t, e, n) {
                this.persistQueryTargetState(t, e, n)
            }, _f.prototype.handleUserChange = function(t, e, n) {
                var r = this;
                e.forEach(function(t) {
                    r.removeMutationState(t)
                }), this.currentUser = t, n.forEach(function(t) {
                    r.addPendingMutation(t)
                })
            }, _f.prototype.setOnlineState = function(t) {
                this.persistOnlineState(t)
            }, _f.prototype.shutdown = function() {
                this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started = !1)
            }, _f.prototype.getItem = function(t) {
                var e = this.storage.getItem(t);
                return Pr(vf, "READ", t, e), e
            }, _f.prototype.setItem = function(t, e) {
                Pr(vf, "SET", t, e), this.storage.setItem(t, e)
            }, _f.prototype.removeItem = function(t) {
                Pr(vf, "REMOVE", t), this.storage.removeItem(t)
            }, _f.prototype.handleWebStorageEvent = function(s) {
                var t = this;
                if (s.storageArea === this.storage) {
                    if (Pr(vf, "EVENT", s.key, s.newValue), s.key === this.localClientStorageKey) return void xr("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                    this.queue.enqueueAndForget(function() {
                        return d(t, void 0, void 0, function() {
                            var e, n, r, i, o, a;
                            return p(this, function(t) {
                                if (!this.started) return this.earlyEvents.push(s), [2];
                                if (null === s.key) return [2];
                                if (this.clientStateKeyRe.test(s.key)) {
                                    if (null == s.newValue) return n = this.fromWebStorageClientStateKey(s.key), [2, this.handleClientStateEvent(n, null)];
                                    if (e = this.fromWebStorageClientState(s.key, s.newValue)) return [2, this.handleClientStateEvent(e.clientId, e)]
                                } else if (this.mutationBatchKeyRe.test(s.key)) {
                                    if (null !== s.newValue && (r = this.fromWebStorageMutationMetadata(s.key, s.newValue))) return [2, this.handleMutationBatchEvent(r)]
                                } else if (this.queryTargetKeyRe.test(s.key)) {
                                    if (null !== s.newValue && (i = this.fromWebStorageQueryTargetMetadata(s.key, s.newValue))) return [2, this.handleQueryTargetEvent(i)]
                                } else if (s.key === this.onlineStateKey) {
                                    if (null !== s.newValue && (o = this.fromWebStorageOnlineState(s.newValue))) return [2, this.handleOnlineStateEvent(o)]
                                } else s.key === this.sequenceNumberKey && (Vr(!!this.sequenceNumberHandler, "Missing sequenceNumberHandler"), (a = function(t) {
                                    var e = Mi.INVALID;
                                    if (null != t) try {
                                        var n = JSON.parse(t);
                                        Vr("number" == typeof n, "Found non-numeric sequence number"), e = n
                                    } catch (t) {
                                        xr(vf, "Failed to read sequence number from WebStorage", t)
                                    }
                                    return e
                                }(s.newValue)) !== Mi.INVALID && this.sequenceNumberHandler(a));
                                return [2]
                            })
                        })
                    })
                }
            }, Object.defineProperty(_f.prototype, "localClientState", {
                get: function() {
                    return this.activeClients[this.localClientId]
                },
                enumerable: !0,
                configurable: !0
            }), _f.prototype.persistClientState = function() {
                this.setItem(this.localClientStorageKey, this.localClientState.toWebStorageJSON())
            }, _f.prototype.persistMutationState = function(t, e, n) {
                var r = new Tf(this.currentUser, t, e, n),
                    i = this.toWebStorageMutationBatchKey(t);
                this.setItem(i, r.toWebStorageJSON())
            }, _f.prototype.removeMutationState = function(t) {
                var e = this.toWebStorageMutationBatchKey(t);
                this.removeItem(e)
            }, _f.prototype.persistOnlineState = function(t) {
                var e = {
                    clientId: this.localClientId,
                    onlineState: fh[t]
                };
                this.storage.setItem(this.onlineStateKey, JSON.stringify(e))
            }, _f.prototype.persistQueryTargetState = function(t, e, n) {
                var r = this.toWebStorageQueryTargetMetadataKey(t),
                    i = new If(t, e, n);
                this.setItem(r, i.toWebStorageJSON())
            }, _f.prototype.toWebStorageClientStateKey = function(t) {
                return Vr(-1 === t.indexOf("_"), "Client key cannot contain '_', but was '" + t + "'"), bf + "_" + this.persistenceKey + "_" + t
            }, _f.prototype.toWebStorageQueryTargetMetadataKey = function(t) {
                return Sf + "_" + this.persistenceKey + "_" + t
            }, _f.prototype.toWebStorageMutationBatchKey = function(t) {
                var e = wf + "_" + this.persistenceKey + "_" + t;
                return this.currentUser.isAuthenticated() && (e += "_" + this.currentUser.uid), e
            }, _f.prototype.fromWebStorageClientStateKey = function(t) {
                var e = this.clientStateKeyRe.exec(t);
                return e ? e[1] : null
            }, _f.prototype.fromWebStorageClientState = function(t, e) {
                var n = this.fromWebStorageClientStateKey(t);
                return Vr(null !== n, "Cannot parse client state key '" + t + "'"), Df.fromWebStorageEntry(n, e)
            }, _f.prototype.fromWebStorageMutationMetadata = function(t, e) {
                var n = this.mutationBatchKeyRe.exec(t);
                Vr(null !== n, "Cannot parse mutation batch key '" + t + "'");
                var r = Number(n[1]),
                    i = void 0 !== n[2] ? n[2] : null;
                return Tf.fromWebStorageEntry(new yf(i), r, e)
            }, _f.prototype.fromWebStorageQueryTargetMetadata = function(t, e) {
                var n = this.queryTargetKeyRe.exec(t);
                Vr(null !== n, "Cannot parse query target key '" + t + "'");
                var r = Number(n[1]);
                return If.fromWebStorageEntry(r, e)
            }, _f.prototype.fromWebStorageOnlineState = function(t) {
                return Af.fromWebStorageEntry(t)
            }, _f.prototype.handleMutationBatchEvent = function(e) {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        return e.user.uid !== this.currentUser.uid ? (Pr(vf, "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.syncEngine.applyBatchState(e.batchId, e.state, e.error)]
                    })
                })
            }, _f.prototype.handleQueryTargetEvent = function(t) {
                return this.syncEngine.applyTargetState(t.targetId, t.state, t.error)
            }, _f.prototype.handleClientStateEvent = function(t, e) {
                var n = this,
                    r = this.getAllActiveQueryTargets();
                e ? this.activeClients[t] = e : delete this.activeClients[t];
                var i = this.getAllActiveQueryTargets(),
                    o = [],
                    a = [];
                return i.forEach(function(e) {
                    return d(n, void 0, void 0, function() {
                        return p(this, function(t) {
                            return r.has(e) || o.push(e), [2]
                        })
                    })
                }), r.forEach(function(e) {
                    return d(n, void 0, void 0, function() {
                        return p(this, function(t) {
                            return i.has(e) || a.push(e), [2]
                        })
                    })
                }), this.syncEngine.applyActiveTargetsChange(o, a)
            }, _f.prototype.handleOnlineStateEvent = function(t) {
                this.activeClients[t.clientId] && this.onlineStateHandler(t.onlineState)
            }, _f);

            function _f(t, e, n, r, i) {
                if (this.queue = t, this.platform = e, this.persistenceKey = n, this.localClientId = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.activeClients = {}, this.storageListener = this.handleWebStorageEvent.bind(this), this.started = !1, this.earlyEvents = [], !_f.isAvailable(this.platform)) throw new Wr(jr.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.platform.window.localStorage, this.currentUser = i, this.localClientStorageKey = this.toWebStorageClientStateKey(this.localClientId), this.sequenceNumberKey = "firestore_sequence_number_" + n, this.activeClients[this.localClientId] = new Rf, this.clientStateKeyRe = new RegExp("^" + bf + "_" + o + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + wf + "_" + o + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + Sf + "_" + o + "_(\\d+)$"), this.onlineStateKey = "firestore_online_state_" + n, this.platform.window.addEventListener("storage", this.storageListener)
            }
            var Lf = (Pf.prototype.addPendingMutation = function(t) {}, Pf.prototype.updateMutationState = function(t, e, n) {}, Pf.prototype.addLocalQueryTarget = function(t) {
                return this.localState.addQueryTarget(t), this.queryState[t] || "not-current"
            }, Pf.prototype.updateQueryState = function(t, e, n) {
                this.queryState[t] = e
            }, Pf.prototype.removeLocalQueryTarget = function(t) {
                this.localState.removeQueryTarget(t)
            }, Pf.prototype.isLocalQueryTarget = function(t) {
                return this.localState.activeTargetIds.has(t)
            }, Pf.prototype.clearQueryState = function(t) {
                delete this.queryState[t]
            }, Pf.prototype.getAllActiveQueryTargets = function() {
                return this.localState.activeTargetIds
            }, Pf.prototype.isActiveQueryTarget = function(t) {
                return this.localState.activeTargetIds.has(t)
            }, Pf.prototype.start = function() {
                return this.localState = new Rf, Promise.resolve()
            }, Pf.prototype.handleUserChange = function(t, e, n) {}, Pf.prototype.setOnlineState = function(t) {}, Pf.prototype.shutdown = function() {}, Pf.prototype.writeSequenceNumber = function(t) {}, Pf);

            function Pf() {
                this.localState = new Rf, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null
            }
            var xf = "FirestoreClient",
                qf = (Ff.prototype.lruParams = function() {
                    return Yu.withCacheSize(this.cacheSizeBytes)
                }, Ff);

            function Ff(t, e) {
                this.cacheSizeBytes = t, this.synchronizeTabs = e
            }
            var Vf = function() {},
                Bf = (Uf.prototype.start = function(t) {
                    var n = this;
                    this.verifyNotTerminated();
                    var r = new zi,
                        i = new zi,
                        o = !1;
                    return this.credentials.setChangeListener(function(e) {
                        o ? n.asyncQueue.enqueueAndForget(function() {
                            return n.handleCredentialChange(e)
                        }) : (o = !0, n.initializePersistence(t, i, e).then(function(t) {
                            return n.initializeRest(e, t)
                        }).then(r.resolve, r.reject))
                    }), this.asyncQueue.enqueueAndForget(function() {
                        return r.promise
                    }), i.promise
                }, Uf.prototype.enableNetwork = function() {
                    var t = this;
                    return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() {
                        return t.syncEngine.enableNetwork()
                    })
                }, Uf.prototype.initializePersistence = function(t, e, n) {
                    var r = this;
                    return t instanceof qf ? this.startIndexedDbPersistence(n, t).then(function(t) {
                        return e.resolve(), t
                    }).catch(function(t) {
                        if (e.reject(t), !r.canFallback(t)) throw t;
                        return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), r.startMemoryPersistence()
                    }) : (e.resolve(), this.startMemoryPersistence())
                }, Uf.prototype.canFallback = function(t) {
                    return t instanceof Wr ? t.code === jr.FAILED_PRECONDITION || t.code === jr.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
                }, Uf.prototype.verifyNotTerminated = function() {
                    if (this.asyncQueue.isShuttingDown) throw new Wr(jr.FAILED_PRECONDITION, "The client has already been terminated.")
                }, Uf.prototype.startIndexedDbPersistence = function(r, i) {
                    var t = this,
                        o = cc.buildStoragePrefix(this.databaseInfo),
                        a = new Yl(this.databaseInfo.databaseId, {
                            useProto3Json: !0
                        });
                    return Promise.resolve().then(function() {
                        return d(t, void 0, void 0, function() {
                            var e, n;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (i.synchronizeTabs && !Of.isAvailable(this.platform)) throw new Wr(jr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                                        return e = i.lruParams(), this.sharedClientState = i.synchronizeTabs ? new Of(this.asyncQueue, this.platform, o, this.clientId, r) : new Lf, [4, cc.createIndexedDbPersistence({
                                            allowTabSynchronization: i.synchronizeTabs,
                                            persistenceKey: o,
                                            clientId: this.clientId,
                                            platform: this.platform,
                                            queue: this.asyncQueue,
                                            serializer: a,
                                            lruParams: e,
                                            sequenceNumberSyncer: this.sharedClientState
                                        })];
                                    case 1:
                                        return n = t.sent(), [2, (this.persistence = n).referenceDelegate.garbageCollector]
                                }
                            })
                        })
                    })
                }, Uf.prototype.startMemoryPersistence = function() {
                    return this.persistence = Lc.createEagerPersistence(this.clientId), this.sharedClientState = new Lf, Promise.resolve(null)
                }, Uf.prototype.initializeRest = function(c, h) {
                    var t = this;
                    return Pr(xf, "Initializing. user=", c.uid), this.platform.loadConnection(this.databaseInfo).then(function(u) {
                        return d(t, void 0, void 0, function() {
                            var e, n, r, i, o, a, s = this;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = new Kc, this.localStore = new Ic(this.persistence, e, c), [4, this.localStore.start()];
                                    case 1:
                                        return t.sent(), h && (this.lruScheduler = new Ju(h, this.asyncQueue, this.localStore)), n = this.platform.newConnectivityMonitor(), r = this.platform.newSerializer(this.databaseInfo.databaseId), i = new hh(this.asyncQueue, u, this.credentials, r), o = function(t) {
                                            return s.syncEngine.applyOnlineStateChange(t, ph.RemoteStore)
                                        }, a = function(t) {
                                            return s.syncEngine.applyOnlineStateChange(t, ph.SharedClientState)
                                        }, this.remoteStore = new Xh(this.localStore, i, this.asyncQueue, o, n), this.syncEngine = new pf(this.localStore, this.remoteStore, this.sharedClientState, c), this.sharedClientState.onlineStateHandler = a, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new Zl(this.syncEngine), [4, this.sharedClientState.start()];
                                    case 2:
                                        return t.sent(), [4, this.remoteStore.start()];
                                    case 3:
                                        return t.sent(), [4, this.persistence.setPrimaryStateListener(function(e) {
                                            return d(s, void 0, void 0, function() {
                                                return p(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.syncEngine.applyPrimaryState(e)];
                                                        case 1:
                                                            return t.sent(), this.lruScheduler && (e && !this.lruScheduler.started ? this.lruScheduler.start() : e || this.lruScheduler.stop()), [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 4:
                                        return t.sent(), [4, this.persistence.setDatabaseDeletedListener(function() {
                                            return d(s, void 0, void 0, function() {
                                                return p(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.terminate()];
                                                        case 1:
                                                            return t.sent(), [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 5:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })
                }, Uf.prototype.handleCredentialChange = function(t) {
                    return this.asyncQueue.verifyOperationInProgress(), Pr(xf, "Credential Changed. Current user: " + t.uid), this.syncEngine.handleCredentialChange(t)
                }, Uf.prototype.disableNetwork = function() {
                    var t = this;
                    return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() {
                        return t.syncEngine.disableNetwork()
                    })
                }, Uf.prototype.terminate = function() {
                    var t = this;
                    return this.asyncQueue.enqueueAndInitiateShutdown(function() {
                        return d(t, void 0, void 0, function() {
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.lruScheduler && this.lruScheduler.stop(), [4, this.remoteStore.shutdown()];
                                    case 1:
                                        return t.sent(), [4, this.sharedClientState.shutdown()];
                                    case 2:
                                        return t.sent(), [4, this.persistence.shutdown()];
                                    case 3:
                                        return t.sent(), this.credentials.removeChangeListener(), [2]
                                }
                            })
                        })
                    })
                }, Uf.prototype.waitForPendingWrites = function() {
                    var t = this;
                    this.verifyNotTerminated();
                    var e = new zi;
                    return this.asyncQueue.enqueueAndForget(function() {
                        return t.syncEngine.registerPendingWritesCallback(e)
                    }), e.promise
                }, Uf.prototype.listen = function(t, e, n) {
                    var r = this;
                    this.verifyNotTerminated();
                    var i = new tf(t, e, n);
                    return this.asyncQueue.enqueueAndForget(function() {
                        return r.eventMgr.listen(i)
                    }), i
                }, Uf.prototype.unlisten = function(t) {
                    var e = this;
                    this.clientTerminated || this.asyncQueue.enqueueAndForget(function() {
                        return e.eventMgr.unlisten(t)
                    })
                }, Uf.prototype.getDocumentFromLocalCache = function(t) {
                    var e = this;
                    return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() {
                        return e.localStore.readDocument(t)
                    }).then(function(t) {
                        if (t instanceof xs) return t;
                        if (t instanceof Vs) return null;
                        throw new Wr(jr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")
                    })
                }, Uf.prototype.getDocumentsFromLocalCache = function(i) {
                    var t = this;
                    return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() {
                        return d(t, void 0, void 0, function() {
                            var e, n, r;
                            return p(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.localStore.executeQuery(i, !0)];
                                    case 1:
                                        return e = t.sent(), n = new sf(i, e.remoteKeys), r = n.computeDocChanges(e.documents), [2, n.applyChanges(r, !1).snapshot]
                                }
                            })
                        })
                    })
                }, Uf.prototype.write = function(t) {
                    var e = this;
                    this.verifyNotTerminated();
                    var n = new zi;
                    return this.asyncQueue.enqueueAndForget(function() {
                        return e.syncEngine.write(t, n)
                    }), n.promise
                }, Uf.prototype.databaseId = function() {
                    return this.databaseInfo.databaseId
                }, Uf.prototype.addSnapshotsInSyncListener = function(t) {
                    var e = this;
                    this.verifyNotTerminated(), this.asyncQueue.enqueueAndForget(function() {
                        return e.eventMgr.addSnapshotsInSyncListener(t), Promise.resolve()
                    })
                }, Uf.prototype.removeSnapshotsInSyncListener = function(t) {
                    this.clientTerminated || this.eventMgr.removeSnapshotsInSyncListener(t)
                }, Object.defineProperty(Uf.prototype, "clientTerminated", {
                    get: function() {
                        return this.asyncQueue.isShuttingDown
                    },
                    enumerable: !0,
                    configurable: !0
                }), Uf.prototype.transaction = function(t) {
                    var e = this;
                    this.verifyNotTerminated();
                    var n = new zi;
                    return this.asyncQueue.enqueueAndForget(function() {
                        return e.syncEngine.runTransaction(e.asyncQueue, t, n), Promise.resolve()
                    }), n.promise
                }, Uf);

            function Uf(t, e, n, r) {
                this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r, this.clientId = gi.newId()
            }
            var Qf = (Kf.prototype.next = function(t) {
                this.scheduleEvent(this.observer.next, t)
            }, Kf.prototype.error = function(t) {
                this.scheduleEvent(this.observer.error, t)
            }, Kf.prototype.mute = function() {
                this.muted = !0
            }, Kf.prototype.scheduleEvent = function(t, e) {
                var n = this;
                this.muted || setTimeout(function() {
                    n.muted || t(e)
                }, 0)
            }, Kf);

            function Kf(t) {
                this.observer = t, this.muted = !1
            }
            var jf = (Wf.documentId = function() {
                return Wf._DOCUMENT_ID
            }, Wf.prototype.isEqual = function(t) {
                if (!(t instanceof Wf)) throw pi("isEqual", "FieldPath", 1, t);
                return this._internalPath.isEqual(t._internalPath)
            }, Wf._DOCUMENT_ID = new Wf(Ui.keyField().canonicalString()), Wf);

            function Wf() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ! function(t, e, n, r) {
                    if (!(e instanceof Array) || e.length < r) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + yi(r, "element") + ".")
                }("FieldPath", t, "fieldNames", 1);
                for (var n = 0; n < t.length; ++n)
                    if (ri("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new Wr(jr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this._internalPath = new Ui(t)
            }
            var Gf = new RegExp("[~\\*/\\[\\]]");
            var zf = function(t, e) {
                    this.user = e, this.type = "OAuth", this.authHeaders = {
                        Authorization: "Bearer " + t
                    }
                },
                Hf = (Yf.prototype.getToken = function() {
                    return Promise.resolve(null)
                }, Yf.prototype.invalidateToken = function() {}, Yf.prototype.setChangeListener = function(t) {
                    Vr(!this.changeListener, "Can only call setChangeListener() once."), (this.changeListener = t)(yf.UNAUTHENTICATED)
                }, Yf.prototype.removeChangeListener = function() {
                    Vr(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null
                }, Yf);

            function Yf() {
                this.changeListener = null
            }
            var Xf = (Jf.prototype.getToken = function() {
                var e = this;
                Vr(null != this.tokenListener, "getToken cannot be called after listener removed.");
                var n = this.tokenCounter,
                    t = this.forceRefresh;
                return this.forceRefresh = !1, this.app.INTERNAL.getToken(t).then(function(t) {
                    if (e.tokenCounter !== n) throw new Wr(jr.ABORTED, "getToken aborted due to token change.");
                    return t ? (Vr("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new zf(t.accessToken, e.currentUser)) : null
                })
            }, Jf.prototype.invalidateToken = function() {
                this.forceRefresh = !0
            }, Jf.prototype.setChangeListener = function(t) {
                Vr(!this.changeListener, "Can only call setChangeListener() once."), (this.changeListener = t)(this.currentUser)
            }, Jf.prototype.removeChangeListener = function() {
                Vr(null != this.tokenListener, "removeChangeListener() called twice"), Vr(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null
            }, Jf.prototype.getUser = function() {
                var t = this.app.INTERNAL.getUid();
                return Vr(null === t || "string" == typeof t, "Received invalid UID: " + t), new yf(t)
            }, Jf);

            function Jf(t) {
                var e = this;
                this.app = t, this.tokenListener = null, this.currentUser = yf.UNAUTHENTICATED, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh = !1, this.tokenListener = function() {
                    e.tokenCounter++, e.currentUser = e.getUser(), e.changeListener && e.changeListener(e.currentUser)
                }, this.currentUser = this.getUser(), this.tokenCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
            }
            var Zf = (Object.defineProperty($f.prototype, "authHeaders", {
                get: function() {
                    var t = {
                            "X-Goog-AuthUser": this.sessionIndex
                        },
                        e = this.gapi.auth.getAuthHeaderValueForFirstParty([]);
                    return e && (t.Authorization = e), t
                },
                enumerable: !0,
                configurable: !0
            }), $f);

            function $f(t, e) {
                this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = yf.FIRST_PARTY
            }
            var td = (ed.prototype.getToken = function() {
                return Promise.resolve(new Zf(this.gapi, this.sessionIndex))
            }, ed.prototype.setChangeListener = function(t) {
                t(yf.FIRST_PARTY)
            }, ed.prototype.removeChangeListener = function() {}, ed.prototype.invalidateToken = function() {}, ed);

            function ed(t, e) {
                this.gapi = t, this.sessionIndex = e
            }

            function nd(t) {
                return function(t, e) {
                    if ("object" != typeof t || null === t) return !1;
                    for (var n = t, r = 0, i = e; r < i.length; r++) {
                        var o = i[r];
                        if (o in n && "function" == typeof n[o]) return !0
                    }
                    return !1
                }(t, ["next", "error", "complete"])
            }
            var rd = (id.delete = function() {
                return $r("FieldValue.delete", arguments), ad.instance
            }, id.serverTimestamp = function() {
                return $r("FieldValue.serverTimestamp", arguments), cd.instance
            }, id.arrayUnion = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return ei("FieldValue.arrayUnion", arguments, 1), new fd(t)
            }, id.arrayRemove = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return ei("FieldValue.arrayRemove", arguments, 1), new md(t)
            }, id.increment = function(t) {
                return ri("FieldValue.increment", "number", 1, t), ti("FieldValue.increment", arguments, 1), new vd(t)
            }, id.prototype.isEqual = function(t) {
                return this === t
            }, id);

            function id(t) {
                this._methodName = t
            }
            var od, ad = (t(sd, od = rd), sd.instance = new sd, sd);

            function sd() {
                return od.call(this, "FieldValue.delete") || this
            }
            var ud, cd = (t(hd, ud = rd), hd.instance = new hd, hd);

            function hd() {
                return ud.call(this, "FieldValue.serverTimestamp") || this
            }
            var ld, fd = (t(dd, ld = rd), dd);

            function dd(t) {
                var e = ld.call(this, "FieldValue.arrayUnion") || this;
                return e._elements = t, e
            }
            var pd, md = (t(yd, pd = rd), yd);

            function yd(t) {
                var e = pd.call(this, "FieldValue.arrayRemove") || this;
                return e._elements = t, e
            }
            var gd, vd = (t(bd, gd = rd), bd);

            function bd(t) {
                var e = gd.call(this, "FieldValue.increment") || this;
                return e._operand = t, e
            }
            var wd = zr(rd, "Use FieldValue.<field>() instead."),
                Sd = /^__.*__$/,
                Td = (Ed.prototype.toMutations = function(t, e) {
                    var n = [];
                    return null !== this.fieldMask ? n.push(new Ma(t, this.data, this.fieldMask, e)) : n.push(new Aa(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new La(t, this.fieldTransforms)), n
                }, Ed);

            function Ed(t, e, n) {
                this.data = t, this.fieldMask = e, this.fieldTransforms = n
            }
            var Id, Cd, Dd = (Nd.prototype.toMutations = function(t, e) {
                var n = [new Ma(t, this.data, this.fieldMask, e)];
                return 0 < this.fieldTransforms.length && n.push(new La(t, this.fieldTransforms)), n
            }, Nd);

            function Nd(t, e, n) {
                this.data = t, this.fieldMask = e, this.fieldTransforms = n
            }

            function Ad(t) {
                switch (t) {
                    case Id.Set:
                    case Id.MergeSet:
                    case Id.Update:
                        return !0;
                    case Id.Argument:
                        return !1;
                    default:
                        throw Fr("Unexpected case for UserDataSource: " + t)
                }
            }(Cd = Id = Id || {})[Cd.Set = 0] = "Set", Cd[Cd.Update = 1] = "Update", Cd[Cd.MergeSet = 2] = "MergeSet", Cd[Cd.Argument = 3] = "Argument";
            var kd = (Rd.prototype.childContextForField = function(t) {
                var e = null == this.path ? null : this.path.child(t),
                    n = new Rd(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                return n.validatePathSegment(t), n
            }, Rd.prototype.childContextForFieldPath = function(t) {
                var e = null == this.path ? null : this.path.child(t),
                    n = new Rd(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                return n.validatePath(), n
            }, Rd.prototype.childContextForArray = function(t) {
                return new Rd(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask)
            }, Rd.prototype.createError = function(t) {
                var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path.toString() + ")";
                return new Wr(jr.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e)
            }, Rd.prototype.contains = function(e) {
                return void 0 !== this.fieldMask.find(function(t) {
                    return e.isPrefixOf(t)
                }) || void 0 !== this.fieldTransforms.find(function(t) {
                    return e.isPrefixOf(t.field)
                })
            }, Rd.prototype.validatePath = function() {
                if (null !== this.path)
                    for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t))
            }, Rd.prototype.validatePathSegment = function(t) {
                if (Ad(this.dataSource) && Sd.test(t)) throw this.createError("Document fields cannot begin and end with __")
            }, Rd);

            function Rd(t, e, n, r, i, o) {
                this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || []
            }
            var Md = function(t, e) {
                    this.databaseId = t, this.key = e
                },
                Od = (_d.prototype.parseSetData = function(t, e) {
                    var n = new kd(Id.Set, t, Ui.EMPTY_PATH);
                    Pd("Data must be an object, but it was:", n, e);
                    var r = this.parseData(e, n);
                    return new Td(r, null, n.fieldTransforms)
                }, _d.prototype.parseMergeData = function(t, e, n) {
                    var r = new kd(Id.MergeSet, t, Ui.EMPTY_PATH);
                    Pd("Data must be an object, but it was:", r, e);
                    var i, o, a = this.parseData(e, r);
                    if (n) {
                        for (var s = new bo(Ui.comparator), u = 0, c = n; u < c.length; u++) {
                            var h = c[u],
                                l = void 0;
                            if (h instanceof jf) l = h._internalPath;
                            else {
                                if ("string" != typeof h) throw Fr("Expected stringOrFieldPath to be a string or a FieldPath");
                                l = qd(t, h)
                            }
                            if (!r.contains(l)) throw new Wr(jr.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                            s = s.add(l)
                        }
                        i = ya.fromSet(s), o = r.fieldTransforms.filter(function(t) {
                            return i.covers(t.field)
                        })
                    } else i = ya.fromArray(r.fieldMask), o = r.fieldTransforms;
                    return new Td(a, i, o)
                }, _d.prototype.parseUpdateData = function(o, t) {
                    var a = this,
                        s = new kd(Id.Update, o, Ui.EMPTY_PATH);
                    Pd("Data must be an object, but it was:", s, t);
                    var u = new bo(Ui.comparator),
                        c = As.EMPTY;
                    Jr(t, function(t, e) {
                        var n = qd(o, t),
                            r = s.childContextForFieldPath(n);
                        if ((e = a.runPreConverter(e, r)) instanceof ad) u = u.add(n);
                        else {
                            var i = a.parseData(e, r);
                            null != i && (u = u.add(n), c = c.set(n, i))
                        }
                    });
                    var e = ya.fromSet(u);
                    return new Dd(c, e, s.fieldTransforms)
                }, _d.prototype.parseUpdateVarargs = function(t, e, n, r) {
                    var i = new kd(Id.Update, t, Ui.EMPTY_PATH),
                        o = [xd(t, e)],
                        a = [n];
                    if (r.length % 2 != 0) throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                    for (var s = 0; s < r.length; s += 2) o.push(xd(t, r[s])), a.push(r[s + 1]);
                    var u = new bo(Ui.comparator),
                        c = As.EMPTY;
                    for (s = 0; s < o.length; ++s) {
                        var h = o[s],
                            l = i.childContextForFieldPath(h),
                            f = this.runPreConverter(a[s], l);
                        if (f instanceof ad) u = u.add(h);
                        else {
                            var d = this.parseData(f, l);
                            null != d && (u = u.add(h), c = c.set(h, d))
                        }
                    }
                    var p = ya.fromSet(u);
                    return new Dd(c, p, i.fieldTransforms)
                }, _d.prototype.parseQueryValue = function(t, e) {
                    var n = new kd(Id.Argument, t, Ui.EMPTY_PATH),
                        r = this.parseData(e, n);
                    return Vr(null != r, "Parsed data should not be null."), Vr(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r
                }, _d.prototype.runPreConverter = function(t, e) {
                    try {
                        return this.preConverter(t)
                    } catch (t) {
                        var n = Fd(t);
                        throw e.createError(n)
                    }
                }, _d.prototype.parseData = function(t, e) {
                    if (Ld(t = this.runPreConverter(t, e))) return Pd("Unsupported field value:", e, t), this.parseObject(t, e);
                    if (t instanceof rd) return this.parseSentinelFieldValue(t, e), null;
                    if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
                        if (e.arrayElement) throw e.createError("Nested arrays are not supported");
                        return this.parseArray(t, e)
                    }
                    return this.parseScalarValue(t, e)
                }, _d.prototype.parseObject = function(t, r) {
                    var i = this,
                        o = new ho(bi);
                    return Zr(t) ? r.path && 0 < r.path.length && r.fieldMask.push(r.path) : Jr(t, function(t, e) {
                        var n = i.parseData(e, r.childContextForField(t));
                        null != n && (o = o.insert(t, n))
                    }), new As(o)
                }, _d.prototype.parseArray = function(t, e) {
                    for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                        var a = o[i],
                            s = this.parseData(a, e.childContextForArray(r));
                        null == s && (s = Ha.INSTANCE), n.push(s), r++
                    }
                    return new Ms(n)
                }, _d.prototype.parseSentinelFieldValue = function(t, e) {
                    if (!Ad(e.dataSource)) throw e.createError(t._methodName + "() can only be used with update() and set()");
                    if (null === e.path) throw e.createError(t._methodName + "() is not currently supported inside arrays");
                    if (t instanceof ad) {
                        if (e.dataSource !== Id.MergeSet) throw e.dataSource === Id.Update ? (Vr(0 < e.path.length, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                        e.fieldMask.push(e.path)
                    } else if (t instanceof cd) e.fieldTransforms.push(new va(e.path, Ml.instance));
                    else if (t instanceof fd) {
                        var n = this.parseArrayTransformElements(t._methodName, t._elements),
                            r = new _l(n);
                        e.fieldTransforms.push(new va(e.path, r))
                    } else if (t instanceof md) {
                        n = this.parseArrayTransformElements(t._methodName, t._elements);
                        var i = new Pl(n);
                        e.fieldTransforms.push(new va(e.path, i))
                    } else if (t instanceof vd) {
                        var o = this.parseQueryValue("FieldValue.increment", t._operand),
                            a = new ql(o);
                        e.fieldTransforms.push(new va(e.path, a))
                    } else Fr("Unknown FieldValue type: " + t)
                }, _d.prototype.parseScalarValue = function(t, e) {
                    if (null === t) return Ha.INSTANCE;
                    if ("number" == typeof t) return Xc(t) ? new is(t) : new ss(t);
                    if ("boolean" == typeof t) return Ja.of(t);
                    if ("string" == typeof t) return new hs(t);
                    if (t instanceof Date) return new ds(ao.fromDate(t));
                    if (t instanceof ao) return new ds(new ao(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)));
                    if (t instanceof Zh) return new Cs(t);
                    if (t instanceof Ii) return new bs(t);
                    if (t instanceof Md) return new Ts(t.databaseId, t.key);
                    throw e.createError("Unsupported field value: " + li(t))
                }, _d.prototype.parseArrayTransformElements = function(r, t) {
                    var i = this;
                    return t.map(function(t, e) {
                        var n = new kd(Id.Argument, r, Ui.EMPTY_PATH);
                        return i.parseData(t, n.childContextForArray(e))
                    })
                }, _d);

            function _d(t) {
                this.preConverter = t
            }

            function Ld(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ao || t instanceof Zh || t instanceof Ii || t instanceof Md || t instanceof rd)
            }

            function Pd(t, e, n) {
                if (!Ld(n) || !hi(n)) {
                    var r = li(n);
                    throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r)
                }
            }

            function xd(t, e) {
                if (e instanceof jf) return e._internalPath;
                if ("string" == typeof e) return qd(t, e);
                throw new Wr(jr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }

            function qd(e, t) {
                try {
                    return function(e) {
                        if (0 <= e.search(Gf)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
                        try {
                            return new(jf.bind.apply(jf, a([void 0], e.split("."))))
                        } catch (t) {
                            throw new Wr(jr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                        }
                    }(t)._internalPath
                } catch (t) {
                    var n = Fd(t);
                    throw new Wr(jr.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. " + n)
                }
            }

            function Fd(t) {
                return t instanceof Error ? t.message : t.toString()
            }
            var Vd = Yu.COLLECTION_DISABLED,
                Bd = (Ud.prototype.isEqual = function(t) {
                    return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling
                }, Ud);

            function Ud(t) {
                if (void 0 === t.host) {
                    if (void 0 !== t.ssl) throw new Wr(jr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0
                } else oi("settings", "non-empty string", "host", t.host), this.host = t.host, ai("settings", "boolean", "ssl", t.ssl), this.ssl = Yr(t.ssl, !0);
                if (di("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling"]), ai("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, ai("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? xr("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && xr("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = Yr(t.timestampsInSnapshots, !0), ai("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Yu.DEFAULT_CACHE_SIZE_BYTES;
                else {
                    if (t.cacheSizeBytes !== Vd && t.cacheSizeBytes < Yu.MINIMUM_CACHE_SIZE_BYTES) throw new Wr(jr.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Yu.MINIMUM_CACHE_SIZE_BYTES);
                    this.cacheSizeBytes = t.cacheSizeBytes
                }
                ai("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling
            }
            var Qd = (Kd.prototype.settings = function(t) {
                if (ti("Firestore.settings", arguments, 1), ri("Firestore.settings", "object", 1, t), Hr(t, "persistence")) throw new Wr(jr.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                var e = new Bd(t);
                if (this._firestoreClient && !this._settings.isEqual(e)) throw new Wr(jr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                void 0 !== (this._settings = e).credentials && (this._credentials = function(t) {
                    if (!t) return new Hf;
                    switch (t.type) {
                        case "gapi":
                            var e = t.client;
                            return Vr(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), new td(e, t.sessionIndex || "0");
                        case "provider":
                            return t.client;
                        default:
                            throw new Wr(jr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                    }
                }(e.credentials))
            }, Kd.prototype.enableNetwork = function() {
                return this.ensureClientConfigured(), this._firestoreClient.enableNetwork()
            }, Kd.prototype.disableNetwork = function() {
                return this.ensureClientConfigured(), this._firestoreClient.disableNetwork()
            }, Kd.prototype.enablePersistence = function(t) {
                if (this._firestoreClient) throw new Wr(jr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                var e = !1;
                return t && (void 0 !== t.experimentalTabSynchronization && xr("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."), e = Yr(void 0 !== t.synchronizeTabs ? t.synchronizeTabs : t.experimentalTabSynchronization, !1)), this.configureClient(new qf(this._settings.cacheSizeBytes, e))
            }, Kd.prototype.clearPersistence = function() {
                var t = this,
                    n = cc.buildStoragePrefix(this.makeDatabaseInfo()),
                    r = new zi;
                return this._queue.enqueueAndForgetEvenAfterShutdown(function() {
                    return d(t, void 0, void 0, function() {
                        var e;
                        return p(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (t.trys.push([0, 2, , 3]), void 0 !== this._firestoreClient && !this._firestoreClient.clientTerminated) throw new Wr(jr.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                                    return [4, cc.clearPersistence(n)];
                                case 1:
                                    return t.sent(), r.resolve(), [3, 3];
                                case 2:
                                    return e = t.sent(), r.reject(e), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }), r.promise
            }, Kd.prototype.terminate = function() {
                return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete()
            }, Object.defineProperty(Kd.prototype, "_isTerminated", {
                get: function() {
                    return this.ensureClientConfigured(), this._firestoreClient.clientTerminated
                },
                enumerable: !0,
                configurable: !0
            }), Kd.prototype.waitForPendingWrites = function() {
                return this.ensureClientConfigured(), this._firestoreClient.waitForPendingWrites()
            }, Kd.prototype.onSnapshotsInSync = function(t) {
                if (this.ensureClientConfigured(), nd(t)) return this.onSnapshotsInSyncInternal(t);
                ri("Firestore.onSnapshotsInSync", "function", 1, t);
                var e = {
                    next: t
                };
                return this.onSnapshotsInSyncInternal(e)
            }, Kd.prototype.onSnapshotsInSyncInternal = function(t) {
                var e = this,
                    n = new Qf({
                        next: function() {
                            t.next && t.next()
                        },
                        error: function(t) {
                            throw Fr("Uncaught Error in onSnapshotsInSync")
                        }
                    });
                return this._firestoreClient.addSnapshotsInSyncListener(n),
                    function() {
                        n.mute(), e._firestoreClient.removeSnapshotsInSyncListener(n)
                    }
            }, Kd.prototype.ensureClientConfigured = function() {
                return this._firestoreClient || this.configureClient(new Vf), this._firestoreClient
            }, Kd.prototype.makeDatabaseInfo = function() {
                return new Ni(this._databaseId, this._persistenceKey, this._settings.host, this._settings.ssl, this._settings.forceLongPolling)
            }, Kd.prototype.configureClient = function(t) {
                Vr(!!this._settings.host, "FirestoreSettings.host is not set"), Vr(!this._firestoreClient, "configureClient() called multiple times");
                var e = this.makeDatabaseInfo();
                return this._firestoreClient = new Bf(Br.getPlatform(), e, this._credentials, this._queue), this._firestoreClient.start(t)
            }, Kd.prototype.createDataConverter = function(r) {
                return new Od(function(t) {
                    if (t instanceof Hd) {
                        var e = r,
                            n = t.firestore._databaseId;
                        if (!n.isEqual(e)) throw new Wr(jr.INVALID_ARGUMENT, "Document reference is for database " + n.projectId + "/" + n.database + " but should be for database " + e.projectId + "/" + e.database);
                        return new Md(r, t._key)
                    }
                    return t
                })
            }, Kd.databaseIdFromApp = function(t) {
                var e = t.options;
                if (!Hr(e, "projectId")) throw new Wr(jr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                var n = e.projectId;
                if (!n || "string" != typeof n) throw new Wr(jr.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                return new ki(n)
            }, Object.defineProperty(Kd.prototype, "app", {
                get: function() {
                    if (!this._firebaseApp) throw new Wr(jr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                    return this._firebaseApp
                },
                enumerable: !0,
                configurable: !0
            }), Kd.prototype.collection = function(t) {
                return ti("Firestore.collection", arguments, 1), ri("Firestore.collection", "non-empty string", 1, t), this.ensureClientConfigured(), new up(qi.fromString(t), this)
            }, Kd.prototype.doc = function(t) {
                return ti("Firestore.doc", arguments, 1), ri("Firestore.doc", "non-empty string", 1, t), this.ensureClientConfigured(), Hd.forPath(qi.fromString(t), this)
            }, Kd.prototype.collectionGroup = function(t) {
                if (ti("Firestore.collectionGroup", arguments, 1), ri("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")) throw new Wr(jr.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
                return this.ensureClientConfigured(), new rp(new tl(qi.EMPTY_PATH, t), this)
            }, Kd.prototype.runTransaction = function(e) {
                var n = this;
                return ti("Firestore.runTransaction", arguments, 1), ri("Firestore.runTransaction", "function", 1, e), this.ensureClientConfigured().transaction(function(t) {
                    return e(new jd(n, t))
                })
            }, Kd.prototype.batch = function() {
                return this.ensureClientConfigured(), new Gd(this)
            }, Object.defineProperty(Kd, "logLevel", {
                get: function() {
                    switch (_r()) {
                        case Er.DEBUG:
                            return "debug";
                        case Er.ERROR:
                            return "error";
                        case Er.SILENT:
                            return "silent";
                        default:
                            return Fr("Unknown log level: " + _r())
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Kd.setLogLevel = function(t) {
                switch (ti("Firestore.setLogLevel", arguments, 1), ri("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                    case "debug":
                        Lr(Er.DEBUG);
                        break;
                    case "error":
                        Lr(Er.ERROR);
                        break;
                    case "silent":
                        Lr(Er.SILENT);
                        break;
                    default:
                        throw new Wr(jr.INVALID_ARGUMENT, "Invalid log level: " + t)
                }
            }, Kd.prototype._areTimestampsInSnapshotsEnabled = function() {
                return this._settings.timestampsInSnapshots
            }, Kd);

            function Kd(t) {
                var e = this;
                if (this._firebaseApp = null, this._queue = new Xi, this.INTERNAL = {
                        delete: function() {
                            return d(e, void 0, void 0, function() {
                                return p(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.ensureClientConfigured(), [4, this._firestoreClient.terminate()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }
                    }, "object" == typeof t.options) {
                    var n = t;
                    this._firebaseApp = n, this._databaseId = Kd.databaseIdFromApp(n), this._persistenceKey = n.name, this._credentials = new Xf(n)
                } else {
                    var r = t;
                    if (!r.projectId) throw new Wr(jr.INVALID_ARGUMENT, "Must provide projectId");
                    this._databaseId = new ki(r.projectId, r.database), this._persistenceKey = "[DEFAULT]", this._credentials = new Hf
                }
                this._settings = new Bd({}), this._dataConverter = this.createDataConverter(this._databaseId)
            }
            var jd = (Wd.prototype.get = function(t) {
                var n = this;
                ti("Transaction.get", arguments, 1);
                var r = dp("Transaction.get", t, this._firestore);
                return this._transaction.lookup([r._key]).then(function(t) {
                    if (!t || 1 !== t.length) return Fr("Mismatch in docs returned from document lookup.");
                    var e = t[0];
                    if (e instanceof Vs) return new Zd(n._firestore, r._key, null, !1, !1);
                    if (e instanceof xs) return new Zd(n._firestore, r._key, e, !1, !1);
                    throw Fr("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name)
                })
            }, Wd.prototype.set = function(t, e, n) {
                ni("Transaction.set", arguments, 2, 3);
                var r = dp("Transaction.set", t, this._firestore),
                    i = (n = hp("Transaction.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("Transaction.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("Transaction.set", e);
                return this._transaction.set(r._key, i), this
            }, Wd.prototype.update = function(t, e, n) {
                for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                return i = "string" == typeof e || e instanceof jf ? (ei("Transaction.update", arguments, 3), r = dp("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", e, n, o)) : (ti("Transaction.update", arguments, 2), r = dp("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("Transaction.update", e)), this._transaction.update(r._key, i), this
            }, Wd.prototype.delete = function(t) {
                ti("Transaction.delete", arguments, 1);
                var e = dp("Transaction.delete", t, this._firestore);
                return this._transaction.delete(e._key), this
            }, Wd);

            function Wd(t, e) {
                this._firestore = t, this._transaction = e
            }
            var Gd = (zd.prototype.set = function(t, e, n) {
                ni("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                var r = dp("WriteBatch.set", t, this._firestore),
                    i = (n = hp("WriteBatch.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("WriteBatch.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("WriteBatch.set", e);
                return this._mutations = this._mutations.concat(i.toMutations(r._key, Ea.NONE)), this
            }, zd.prototype.update = function(t, e, n) {
                for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                return this.verifyNotCommitted(), i = "string" == typeof e || e instanceof jf ? (ei("WriteBatch.update", arguments, 3), r = dp("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, o)) : (ti("WriteBatch.update", arguments, 2), r = dp("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("WriteBatch.update", e)), this._mutations = this._mutations.concat(i.toMutations(r._key, Ea.exists(!0))), this
            }, zd.prototype.delete = function(t) {
                ti("WriteBatch.delete", arguments, 1), this.verifyNotCommitted();
                var e = dp("WriteBatch.delete", t, this._firestore);
                return this._mutations = this._mutations.concat(new Ua(e._key, Ea.NONE)), this
            }, zd.prototype.commit = function() {
                return d(this, void 0, void 0, function() {
                    return p(this, function(t) {
                        return this.verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2]
                    })
                })
            }, zd.prototype.verifyNotCommitted = function() {
                if (this._committed) throw new Wr(jr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
            }, zd);

            function zd(t) {
                this._firestore = t, this._mutations = [], this._committed = !1
            }
            var Hd = (Yd.forPath = function(t, e) {
                if (t.length % 2 != 0) throw new Wr(jr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length);
                return new Yd(new Ki(t), e)
            }, Object.defineProperty(Yd.prototype, "id", {
                get: function() {
                    return this._key.path.lastSegment()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Yd.prototype, "parent", {
                get: function() {
                    return new up(this._key.path.popLast(), this.firestore)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Yd.prototype, "path", {
                get: function() {
                    return this._key.path.canonicalString()
                },
                enumerable: !0,
                configurable: !0
            }), Yd.prototype.collection = function(t) {
                if (ti("DocumentReference.collection", arguments, 1), ri("DocumentReference.collection", "non-empty string", 1, t), !t) throw new Wr(jr.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                var e = qi.fromString(t);
                return new up(this._key.path.child(e), this.firestore)
            }, Yd.prototype.isEqual = function(t) {
                if (!(t instanceof Yd)) throw pi("isEqual", "DocumentReference", 1, t);
                return this.firestore === t.firestore && this._key.isEqual(t._key)
            }, Yd.prototype.set = function(t, e) {
                ni("DocumentReference.set", arguments, 1, 2);
                var n = (e = hp("DocumentReference.set", e)).merge || e.mergeFields ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", t, e.mergeFields) : this.firestore._dataConverter.parseSetData("DocumentReference.set", t);
                return this._firestoreClient.write(n.toMutations(this._key, Ea.NONE))
            }, Yd.prototype.update = function(t, e) {
                for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                return n = "string" == typeof t || t instanceof jf ? (ei("DocumentReference.update", arguments, 2), this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, r)) : (ti("DocumentReference.update", arguments, 1), this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._firestoreClient.write(n.toMutations(this._key, Ea.exists(!0)))
            }, Yd.prototype.delete = function() {
                return ti("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new Ua(this._key, Ea.NONE)])
            }, Yd.prototype.onSnapshot = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ni("DocumentReference.onSnapshot", arguments, 1, 4);
                var n, r = {
                        includeMetadataChanges: !1
                    },
                    i = 0;
                "object" != typeof t[i] || nd(t[i]) || (di("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), ai("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                var o = {
                    includeMetadataChanges: r.includeMetadataChanges
                };
                return n = nd(t[i]) ? t[i] : (ri("DocumentReference.onSnapshot", "function", i, t[i]), ii("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), ii("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), {
                    next: t[i],
                    error: t[i + 1],
                    complete: t[i + 2]
                }), this.onSnapshotInternal(o, n)
            }, Yd.prototype.onSnapshotInternal = function(t, n) {
                var r = this,
                    e = function(t) {
                        console.error("Uncaught Error in onSnapshot:", t)
                    };
                n.error && (e = n.error.bind(n));
                var i = new Qf({
                        next: function(t) {
                            if (n.next) {
                                Vr(t.docs.size <= 1, "Too many documents returned on a document query");
                                var e = t.docs.get(r._key);
                                n.next(new Zd(r.firestore, r._key, e, t.fromCache, t.hasPendingWrites))
                            }
                        },
                        error: e
                    }),
                    o = this._firestoreClient.listen(tl.atPath(this._key.path), i, t);
                return function() {
                    i.mute(), r._firestoreClient.unlisten(o)
                }
            }, Yd.prototype.get = function(n) {
                var r = this;
                return ni("DocumentReference.get", arguments, 0, 1), fp("DocumentReference.get", n), new Promise(function(e, t) {
                    n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentFromLocalCache(r._key).then(function(t) {
                        e(new Zd(r.firestore, r._key, t, !0, t instanceof xs && t.hasLocalMutations))
                    }, t) : r.getViaSnapshotListener(e, t, n)
                })
            }, Yd.prototype.getViaSnapshotListener = function(e, n, r) {
                var i = this.onSnapshotInternal({
                    includeMetadataChanges: !0,
                    waitForSyncWhenOnline: !0
                }, {
                    next: function(t) {
                        i(), !t.exists && t.metadata.fromCache ? n(new Wr(jr.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new Wr(jr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t)
                    },
                    error: n
                })
            }, Yd);

            function Yd(t, e) {
                this._key = t, this.firestore = e, this._firestoreClient = this.firestore.ensureClientConfigured()
            }
            var Xd = (Jd.prototype.isEqual = function(t) {
                return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
            }, Jd);

            function Jd(t, e) {
                this.hasPendingWrites = t, this.fromCache = e
            }
            var Zd = ($d.prototype.data = function(t) {
                return ni("DocumentSnapshot.data", arguments, 0, 1), t = lp("DocumentSnapshot.data", t), this._document ? this.convertObject(this._document.data(), Ka.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled())) : void 0
            }, $d.prototype.get = function(t, e) {
                if (ni("DocumentSnapshot.get", arguments, 1, 2), e = lp("DocumentSnapshot.get", e), this._document) {
                    var n = this._document.data().field(xd("DocumentSnapshot.get", t));
                    if (null !== n) return this.convertValue(n, Ka.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled()))
                }
            }, Object.defineProperty($d.prototype, "id", {
                get: function() {
                    return this._key.path.lastSegment()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty($d.prototype, "ref", {
                get: function() {
                    return new Hd(this._key, this._firestore)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty($d.prototype, "exists", {
                get: function() {
                    return null !== this._document
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty($d.prototype, "metadata", {
                get: function() {
                    return new Xd(this._hasPendingWrites, this._fromCache)
                },
                enumerable: !0,
                configurable: !0
            }), $d.prototype.isEqual = function(t) {
                if (!(t instanceof $d)) throw pi("isEqual", "DocumentSnapshot", 1, t);
                return this._firestore === t._firestore && this._fromCache === t._fromCache && this._key.isEqual(t._key) && (null === this._document ? null === t._document : this._document.isEqual(t._document))
            }, $d.prototype.convertObject = function(t, n) {
                var r = this,
                    i = {};
                return t.forEach(function(t, e) {
                    i[t] = r.convertValue(e, n)
                }), i
            }, $d.prototype.convertValue = function(t, e) {
                if (t instanceof As) return this.convertObject(t, e);
                if (t instanceof Ms) return this.convertArray(t, e);
                if (t instanceof Ts) {
                    var n = t.value(e),
                        r = this._firestore.ensureClientConfigured().databaseId();
                    return t.databaseId.isEqual(r) || xr("Document " + this._key.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new Hd(n, this._firestore)
                }
                return t.value(e)
            }, $d.prototype.convertArray = function(t, e) {
                var n = this;
                return t.internalValue.map(function(t) {
                    return n.convertValue(t, e)
                })
            }, $d);

            function $d(t, e, n, r, i) {
                this._firestore = t, this._key = e, this._document = n, this._fromCache = r, this._hasPendingWrites = i
            }
            var tp, ep = (t(np, tp = Zd), np.prototype.data = function(t) {
                var e = tp.prototype.data.call(this, t);
                return Vr("object" == typeof e, "Document in a QueryDocumentSnapshot should exist"), e
            }, np);

            function np() {
                return null !== tp && tp.apply(this, arguments) || this
            }
            var rp = (ip.prototype.where = function(t, e, n) {
                ti("Query.where", arguments, 3), fi("Query.where", 3, n), "in" !== e && "array-contains-any" !== e && function(t, e, n, r) {
                    if (!e.some(function(t) {
                            return t === r
                        })) throw new Wr(jr.INVALID_ARGUMENT, "Invalid value " + li(r) + " provided to function " + t + "() for its " + mi(n) + " argument. Acceptable values: " + e.join(", "))
                }("Query.where", ["<", "<=", "==", ">=", ">", "array-contains"], 2, e);
                var r, i = xd("Query.where", t),
                    o = rl.fromString(e);
                if (i.isKeyField()) {
                    if (o === rl.ARRAY_CONTAINS || o === rl.ARRAY_CONTAINS_ANY) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o.toString() + "' queries on FieldPath.documentId().");
                    if (o === rl.IN) {
                        this.validateDisjunctiveFilterElements(n, o);
                        for (var a = [], s = 0, u = n; s < u.length; s++) {
                            var c = u[s];
                            a.push(this.parseDocumentIdValue(c))
                        }
                        r = new Ms(a)
                    } else r = this.parseDocumentIdValue(n)
                } else o !== rl.IN && o !== rl.ARRAY_CONTAINS_ANY || this.validateDisjunctiveFilterElements(n, o), r = this.firestore._dataConverter.parseQueryValue("Query.where", n);
                var h = al.create(i, o, r);
                return this.validateNewFilter(h), new ip(this._query.addFilter(h), this.firestore)
            }, ip.prototype.orderBy = function(t, e) {
                var n;
                if (ni("Query.orderBy", arguments, 1, 2), ii("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = El.ASCENDING;
                else {
                    if ("desc" !== e) throw new Wr(jr.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                    n = El.DESCENDING
                }
                if (null !== this._query.startAt) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                if (null !== this._query.endAt) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                var r = xd("Query.orderBy", t),
                    i = new Nl(r, n);
                return this.validateNewOrderBy(i), new ip(this._query.addOrderBy(i), this.firestore)
            }, ip.prototype.limit = function(t) {
                if (ti("Query.limit", arguments, 1), ri("Query.limit", "number", 1, t), t <= 0) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. Query limit (" + t + ") is invalid. Limit must be positive.");
                return new ip(this._query.withLimit(t), this.firestore)
            }, ip.prototype.startAt = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ei("Query.startAt", arguments, 1);
                var r = this.boundFromDocOrFields("Query.startAt", t, e, !0);
                return new ip(this._query.withStartAt(r), this.firestore)
            }, ip.prototype.startAfter = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ei("Query.startAfter", arguments, 1);
                var r = this.boundFromDocOrFields("Query.startAfter", t, e, !1);
                return new ip(this._query.withStartAt(r), this.firestore)
            }, ip.prototype.endBefore = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ei("Query.endBefore", arguments, 1);
                var r = this.boundFromDocOrFields("Query.endBefore", t, e, !0);
                return new ip(this._query.withEndAt(r), this.firestore)
            }, ip.prototype.endAt = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ei("Query.endAt", arguments, 1);
                var r = this.boundFromDocOrFields("Query.endAt", t, e, !1);
                return new ip(this._query.withEndAt(r), this.firestore)
            }, ip.prototype.isEqual = function(t) {
                if (!(t instanceof ip)) throw pi("isEqual", "Query", 1, t);
                return this.firestore === t.firestore && this._query.isEqual(t._query)
            }, ip.prototype.boundFromDocOrFields = function(t, e, n, r) {
                if (fi(t, 1, e), e instanceof Zd) {
                    if (0 < n.length) throw new Wr(jr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                    var i = e;
                    if (!i.exists) throw new Wr(jr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                    return this.boundFromDocument(t, i._document, r)
                }
                var o = [e].concat(n);
                return this.boundFromFields(t, o, r)
            }, ip.prototype.boundFromDocument = function(t, e, n) {
                for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) {
                    var a = o[i];
                    if (a.field.isKeyField()) r.push(new Ts(this.firestore._databaseId, e.key));
                    else {
                        var s = e.field(a.field);
                        if (s instanceof ys) throw new Wr(jr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                        if (null === s) {
                            var u = a.field.canonicalString();
                            throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                        }
                        r.push(s)
                    }
                }
                return new Cl(r, n)
            }, ip.prototype.boundFromFields = function(t, e, n) {
                var r = this._query.explicitOrderBy;
                if (e.length > r.length) throw new Wr(jr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                for (var i = [], o = 0; o < e.length; o++) {
                    var a = e[o];
                    if (r[o].field.isKeyField()) {
                        if ("string" != typeof a) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof a);
                        if (!this._query.isCollectionGroupQuery() && -1 !== a.indexOf("/")) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + a + "' contains a slash.");
                        var s = this._query.path.child(qi.fromString(a));
                        if (!Ki.isDocumentKey(s)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + s + "' is not because it contains an odd number of segments.");
                        var u = new Ki(s);
                        i.push(new Ts(this.firestore._databaseId, u))
                    } else {
                        var c = this.firestore._dataConverter.parseQueryValue(t, a);
                        i.push(c)
                    }
                }
                return new Cl(i, n)
            }, ip.prototype.onSnapshot = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ni("Query.onSnapshot", arguments, 1, 4);
                var n, r = {},
                    i = 0;
                return "object" != typeof t[i] || nd(t[i]) || (di("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), ai("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = nd(t[i]) ? t[i] : (ri("Query.onSnapshot", "function", i, t[i]), ii("Query.onSnapshot", "function", i + 1, t[i + 1]), ii("Query.onSnapshot", "function", i + 2, t[i + 2]), {
                    next: t[i],
                    error: t[i + 1],
                    complete: t[i + 2]
                }), this.onSnapshotInternal(r, n)
            }, ip.prototype.onSnapshotInternal = function(t, e) {
                var n = this,
                    r = function(t) {
                        console.error("Uncaught Error in onSnapshot:", t)
                    };
                e.error && (r = e.error.bind(e));
                var i = new Qf({
                        next: function(t) {
                            e.next && e.next(new op(n.firestore, n._query, t))
                        },
                        error: r
                    }),
                    o = this.firestore.ensureClientConfigured(),
                    a = o.listen(this._query, i, t);
                return function() {
                    i.mute(), o.unlisten(a)
                }
            }, ip.prototype.get = function(n) {
                var r = this;
                return ni("Query.get", arguments, 0, 1), fp("Query.get", n), new Promise(function(e, t) {
                    n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentsFromLocalCache(r._query).then(function(t) {
                        e(new op(r.firestore, r._query, t))
                    }, t) : r.getViaSnapshotListener(e, t, n)
                })
            }, ip.prototype.getViaSnapshotListener = function(e, n, r) {
                var i = this.onSnapshotInternal({
                    includeMetadataChanges: !0,
                    waitForSyncWhenOnline: !0
                }, {
                    next: function(t) {
                        i(), t.metadata.fromCache && r && "server" === r.source ? n(new Wr(jr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t)
                    },
                    error: n
                })
            }, ip.prototype.parseDocumentIdValue = function(t) {
                if ("string" == typeof t) {
                    if ("" === t) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                    if (!this._query.isCollectionGroupQuery() && -1 !== t.indexOf("/")) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
                    var e = this._query.path.child(qi.fromString(t));
                    if (!Ki.isDocumentKey(e)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
                    return new Ts(this.firestore._databaseId, new Ki(e))
                }
                if (t instanceof Hd) {
                    var n = t;
                    return new Ts(this.firestore._databaseId, n._key)
                }
                throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + li(t) + ".")
            }, ip.prototype.validateDisjunctiveFilterElements = function(t, e) {
                if (!Array.isArray(t) || 0 === t.length) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                if (10 < t.length) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
                if (0 <= t.indexOf(null)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
                if (0 < t.filter(function(t) {
                        return Number.isNaN(t)
                    }).length) throw new Wr(jr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.")
            }, ip.prototype.validateNewFilter = function(t) {
                if (t instanceof al) {
                    var e = [rl.ARRAY_CONTAINS, rl.ARRAY_CONTAINS_ANY],
                        n = [rl.IN, rl.ARRAY_CONTAINS_ANY],
                        r = 0 <= e.indexOf(t.op),
                        i = 0 <= n.indexOf(t.op);
                    if (t.isInequality()) {
                        var o = this._query.getInequalityFilterField();
                        if (null !== o && !o.isEqual(t.field)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                        var a = this._query.getFirstOrderByField();
                        null !== a && this.validateOrderByAndInequalityMatch(t.field, a)
                    } else if (i || r) {
                        var s = null;
                        if (i && (s = this._query.findFilterOperator(n)), null === s && r && (s = this._query.findFilterOperator(e)), null != s) throw s === t.op ? new Wr(jr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new Wr(jr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + s.toString() + "' filters.")
                    }
                }
            }, ip.prototype.validateNewOrderBy = function(t) {
                if (null === this._query.getFirstOrderByField()) {
                    var e = this._query.getInequalityFilterField();
                    null !== e && this.validateOrderByAndInequalityMatch(e, t.field)
                }
            }, ip.prototype.validateOrderByAndInequalityMatch = function(t, e) {
                if (!e.isEqual(t)) throw new Wr(jr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.")
            }, ip);

            function ip(t, e) {
                this._query = t, this.firestore = e
            }
            var op = (Object.defineProperty(ap.prototype, "docs", {
                get: function() {
                    var e = [];
                    return this.forEach(function(t) {
                        return e.push(t)
                    }), e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ap.prototype, "empty", {
                get: function() {
                    return this._snapshot.docs.isEmpty()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ap.prototype, "size", {
                get: function() {
                    return this._snapshot.docs.size
                },
                enumerable: !0,
                configurable: !0
            }), ap.prototype.forEach = function(e, n) {
                var r = this;
                ni("QuerySnapshot.forEach", arguments, 1, 2), ri("QuerySnapshot.forEach", "function", 1, e), this._snapshot.docs.forEach(function(t) {
                    e.call(n, r.convertToDocumentImpl(t))
                })
            }, Object.defineProperty(ap.prototype, "query", {
                get: function() {
                    return new rp(this._originalQuery, this._firestore)
                },
                enumerable: !0,
                configurable: !0
            }), ap.prototype.docChanges = function(t) {
                t && (di("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), ai("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                var e = !(!t || !t.includeMetadataChanges);
                if (e && this._snapshot.excludesMetadataChanges) throw new Wr(jr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(i, e, o) {
                    if (o.oldDocs.isEmpty()) {
                        var n, r = 0;
                        return o.docChanges.map(function(t) {
                            var e = new ep(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key));
                            return Vr(t.type === Ih.Added, "Invalid event type for first snapshot"), Vr(!n || o.query.docComparator(n, t.doc) < 0, "Got added events in wrong order"), n = t.doc, {
                                type: "added",
                                doc: e,
                                oldIndex: -1,
                                newIndex: r++
                            }
                        })
                    }
                    var a = o.oldDocs;
                    return o.docChanges.filter(function(t) {
                        return e || t.type !== Ih.Metadata
                    }).map(function(t) {
                        var e = new ep(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key)),
                            n = -1,
                            r = -1;
                        return t.type !== Ih.Added && (Vr(0 <= (n = a.indexOf(t.doc.key)), "Index for document not found"), a = a.delete(t.doc.key)), t.type !== Ih.Removed && (r = (a = a.add(t.doc)).indexOf(t.doc.key)), {
                            type: function(t) {
                                switch (t) {
                                    case Ih.Added:
                                        return "added";
                                    case Ih.Modified:
                                    case Ih.Metadata:
                                        return "modified";
                                    case Ih.Removed:
                                        return "removed";
                                    default:
                                        return Fr("Unknown change type: " + t)
                                }
                            }(t.type),
                            doc: e,
                            oldIndex: n,
                            newIndex: r
                        }
                    })
                }(this._firestore, e, this._snapshot), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges
            }, ap.prototype.isEqual = function(t) {
                if (!(t instanceof ap)) throw pi("isEqual", "QuerySnapshot", 1, t);
                return this._firestore === t._firestore && this._originalQuery.isEqual(t._originalQuery) && this._snapshot.isEqual(t._snapshot)
            }, ap.prototype.convertToDocumentImpl = function(t) {
                return new ep(this._firestore, t.key, t, this.metadata.fromCache, this._snapshot.mutatedKeys.has(t.key))
            }, ap);

            function ap(t, e, n) {
                this._firestore = t, this._originalQuery = e, this._snapshot = n, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new Xd(n.hasPendingWrites, n.fromCache)
            }
            a(["length", "forEach", "map"], "undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function(t) {
                try {
                    Object.defineProperty(op.prototype.docChanges, t, {
                        get: function() {
                            return function() {
                                throw new Wr(jr.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')
                            }()
                        }
                    })
                } catch (t) {}
            });
            var sp, up = (t(cp, sp = rp), Object.defineProperty(cp.prototype, "id", {
                get: function() {
                    return this._query.path.lastSegment()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(cp.prototype, "parent", {
                get: function() {
                    var t = this._query.path.popLast();
                    return t.isEmpty() ? null : new Hd(new Ki(t), this.firestore)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(cp.prototype, "path", {
                get: function() {
                    return this._query.path.canonicalString()
                },
                enumerable: !0,
                configurable: !0
            }), cp.prototype.doc = function(t) {
                if (ni("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = gi.newId()), ri("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new Wr(jr.INVALID_ARGUMENT, "Document path must be a non-empty string");
                var e = qi.fromString(t);
                return Hd.forPath(this._query.path.child(e), this.firestore)
            }, cp.prototype.add = function(t) {
                ti("CollectionReference.add", arguments, 1), ri("CollectionReference.add", "object", 1, t);
                var e = this.doc();
                return e.set(t).then(function() {
                    return e
                })
            }, cp);

            function cp(t, e) {
                var n = sp.call(this, tl.atPath(t), e) || this;
                if (t.length % 2 != 1) throw new Wr(jr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.canonicalString() + " has " + t.length);
                return n
            }

            function hp(t, e) {
                if (void 0 === e) return {
                    merge: !1
                };
                if (di(t, e, ["merge", "mergeFields"]), ai(t, "boolean", "merge", e.merge), si(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t) {
                        return "string" == typeof t || t instanceof jf
                    }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new Wr(jr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                return e
            }

            function lp(t, e) {
                return void 0 === e ? {} : (di(t, e, ["serverTimestamps"]), ui(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
            }

            function fp(t, e) {
                ii(t, "object", 1, e), e && (di(t, e, ["source"]), ui(t, 0, "source", e.source, ["default", "server", "cache"]))
            }

            function dp(t, e, n) {
                if (e instanceof Hd) {
                    if (e.firestore !== n) throw new Wr(jr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return e
                }
                throw pi(t, "DocumentReference", 1, e)
            }
            var pp = zr(Qd, "Use firebase.firestore() instead."),
                mp = zr(jd, "Use firebase.firestore().runTransaction() instead."),
                yp = zr(Gd, "Use firebase.firestore().batch() instead."),
                gp = zr(Hd, "Use firebase.firestore().doc() instead."),
                vp = zr(Zd),
                bp = zr(ep),
                wp = zr(rp),
                Sp = zr(op),
                Tp = zr(up, "Use firebase.firestore().collection() instead."),
                Ep = {
                    Firestore: pp,
                    GeoPoint: Zh,
                    Timestamp: ao,
                    Blob: Di,
                    Transaction: mp,
                    WriteBatch: yp,
                    DocumentReference: gp,
                    DocumentSnapshot: vp,
                    Query: wp,
                    QueryDocumentSnapshot: bp,
                    QuerySnapshot: Sp,
                    CollectionReference: Tp,
                    FieldPath: jf,
                    FieldValue: wd,
                    setLogLevel: Qd.setLogLevel,
                    CACHE_SIZE_UNLIMITED: Vd
                };

            function Ip(t) {
                t.INTERNAL.registerService("firestore", function(t) {
                    return new Qd(t)
                }, function(t) {
                    Vr(t && "object" == typeof t, "shallowCopy() expects object parameter.");
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(Ep))
            }
            var Cp = (Dp.prototype.addCallback = function(t) {}, Dp.prototype.shutdown = function() {}, Dp);

            function Dp() {}
            var Np = "ConnectivityMonitor",
                Ap = (kp.prototype.addCallback = function(t) {
                    this.callbacks.push(t)
                }, kp.prototype.shutdown = function() {
                    window.removeEventListener("online", this.networkAvailableListener), window.removeEventListener("offline", this.networkUnavailableListener)
                }, kp.prototype.configureNetworkMonitoring = function() {
                    window.addEventListener("online", this.networkAvailableListener), window.addEventListener("offline", this.networkUnavailableListener)
                }, kp.prototype.onNetworkAvailable = function() {
                    Pr(Np, "Network connectivity changed: AVAILABLE");
                    for (var t = 0, e = this.callbacks; t < e.length; t++)(0, e[t])(0)
                }, kp.prototype.onNetworkUnavailable = function() {
                    Pr(Np, "Network connectivity changed: UNAVAILABLE");
                    for (var t = 0, e = this.callbacks; t < e.length; t++)(0, e[t])(1)
                }, kp.isAvailable = function() {
                    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                }, kp);

            function kp() {
                var t = this;
                this.networkAvailableListener = function() {
                    return t.onNetworkAvailable()
                }, this.networkUnavailableListener = function() {
                    return t.onNetworkUnavailable()
                }, this.callbacks = [], this.configureNetworkMonitoring()
            }
            var Rp = (Mp.prototype.onOpen = function(t) {
                Vr(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t
            }, Mp.prototype.onClose = function(t) {
                Vr(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t
            }, Mp.prototype.onMessage = function(t) {
                Vr(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t
            }, Mp.prototype.close = function() {
                this.closeFn()
            }, Mp.prototype.send = function(t) {
                this.sendFn(t)
            }, Mp.prototype.callOnOpen = function() {
                Vr(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen()
            }, Mp.prototype.callOnClose = function(t) {
                Vr(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t)
            }, Mp.prototype.callOnMessage = function(t) {
                Vr(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t)
            }, Mp);

            function Mp(t) {
                this.sendFn = t.sendFn, this.closeFn = t.closeFn
            }
            var Op = "Connection",
                _p = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit"
                },
                Lp = "gl-js/ fire/" + Mr,
                Pp = (xp.prototype.modifyHeadersForRequest = function(t, e) {
                    if (e)
                        for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                    t["X-Goog-Api-Client"] = Lp
                }, xp.prototype.invokeRPC = function(s, r, u) {
                    var c = this,
                        h = this.makeUrl(s);
                    return new Promise(function(i, o) {
                        var a = new Rr;
                        a.listenOnce(Ar.COMPLETE, function() {
                            try {
                                switch (a.getLastErrorCode()) {
                                    case Nr.NO_ERROR:
                                        var t = a.getResponseJson();
                                        Pr(Op, "XHR received:", JSON.stringify(t)), i(t);
                                        break;
                                    case Nr.TIMEOUT:
                                        Pr(Op, 'RPC "' + s + '" timed out'), o(new Wr(jr.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case Nr.HTTP_ERROR:
                                        var e = a.getStatus();
                                        if (Pr(Op, 'RPC "' + s + '" failed with status:', e, "response text:", a.getResponseText()), 0 < e) {
                                            var n = a.getResponseJson().error;
                                            if (n && n.status && n.message) {
                                                var r = function(t) {
                                                    var e = t.toLowerCase().replace("_", "-");
                                                    return 0 <= Object.values(jr).indexOf(e) ? e : jr.UNKNOWN
                                                }(n.status);
                                                o(new Wr(r, n.message))
                                            } else o(new Wr(jr.UNKNOWN, "Server responded with status " + a.getStatus()))
                                        } else Pr(Op, 'RPC "' + s + '" failed'), o(new Wr(jr.UNAVAILABLE, "Connection failed."));
                                        break;
                                    default:
                                        Fr('RPC "' + s + '" failed with unanticipated webchannel error ' + a.getLastErrorCode() + ": " + a.getLastError() + ", giving up.")
                                }
                            } finally {
                                Pr(Op, 'RPC "' + s + '" completed.')
                            }
                        });
                        var t = l({}, r);
                        delete t.database;
                        var e = JSON.stringify(t);
                        Pr(Op, "XHR sending: ", h + " " + e);
                        var n = {
                            "Content-Type": "text/plain"
                        };
                        c.modifyHeadersForRequest(n, u), a.send(h, "POST", e, n, 15)
                    })
                }, xp.prototype.invokeStreamingRPC = function(t, e, n) {
                    return this.invokeRPC(t, e, n)
                }, xp.prototype.openStream = function(t, e) {
                    var n = [this.baseUrl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                        r = Dr(),
                        i = {
                            backgroundChannelTest: !0,
                            httpSessionIdParam: "gsessionid",
                            initMessageHeaders: {},
                            messageUrlParams: {
                                database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                            },
                            sendRawJson: !0,
                            supportsCrossDomainXhr: !0,
                            internalChannelParams: {
                                forwardChannelRequestTimeoutMs: 6e5
                            },
                            forceLongPolling: this.forceLongPolling
                        };
                    this.modifyHeadersForRequest(i.initMessageHeaders, e), "object" == typeof navigator && "ReactNative" === navigator.product || (i.httpHeadersOverwriteParam = "$httpHeaders");
                    var o = n.join("");

                    function a(t, e) {
                        s.listen(t, function(t) {
                            try {
                                e(t)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                        })
                    }
                    Pr(Op, "Creating WebChannel: " + o + " " + i);
                    var s = r.createWebChannel(o, i),
                        u = !1,
                        c = !1,
                        h = new Rp({
                            sendFn: function(t) {
                                c ? Pr(Op, "Not sending because WebChannel is closed:", t) : (u || (Pr(Op, "Opening WebChannel transport."), s.open(), u = !0), Pr(Op, "WebChannel sending:", t), s.send(t))
                            },
                            closeFn: function() {
                                return s.close()
                            }
                        });
                    return a(kr.EventType.OPEN, function() {
                        c || Pr(Op, "WebChannel transport opened.")
                    }), a(kr.EventType.CLOSE, function() {
                        c || (c = !0, Pr(Op, "WebChannel transport closed"), h.callOnClose())
                    }), a(kr.EventType.ERROR, function(t) {
                        c || (c = !0, Pr(Op, "WebChannel transport errored:", t), h.callOnClose(new Wr(jr.UNAVAILABLE, "The operation could not be completed")))
                    }), a(kr.EventType.MESSAGE, function(t) {
                        if (!c) {
                            var e = t.data[0];
                            Vr(!!e, "Got a webchannel message without data.");
                            var n = e,
                                r = n.error || n[0] && n[0].error;
                            if (r) {
                                Pr(Op, "WebChannel received error:", r);
                                var i = r.status,
                                    o = function(t) {
                                        var e = vh[t];
                                        if (void 0 !== e) return Eh(e)
                                    }(i),
                                    a = r.message;
                                void 0 === o && (o = jr.INTERNAL, a = "Unknown error status: " + i + " with message " + r.message), c = !0, h.callOnClose(new Wr(o, a)), s.close()
                            } else Pr(Op, "WebChannel received:", e), h.callOnMessage(e)
                        }
                    }), setTimeout(function() {
                        h.callOnOpen()
                    }, 0), h
                }, xp.prototype.makeUrl = function(t) {
                    var e = _p[t];
                    Vr(void 0 !== e, "Unknown REST mapping for: " + t);
                    var n = [this.baseUrl, "/", "v1"];
                    return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(e), n.join("")
                }, xp);

            function xp(t) {
                this.databaseId = t.databaseId;
                var e = t.ssl ? "https" : "http";
                this.baseUrl = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling
            }
            var qp = (Object.defineProperty(Fp.prototype, "document", {
                get: function() {
                    return "undefined" != typeof document ? document : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Fp.prototype, "window", {
                get: function() {
                    return "undefined" != typeof window ? window : null
                },
                enumerable: !0,
                configurable: !0
            }), Fp.prototype.loadConnection = function(t) {
                return Promise.resolve(new Pp(t))
            }, Fp.prototype.newConnectivityMonitor = function() {
                return Ap.isAvailable() ? new Ap : new Cp
            }, Fp.prototype.newSerializer = function(t) {
                return new Yl(t, {
                    useProto3Json: !0
                })
            }, Fp.prototype.formatJSON = function(t) {
                return JSON.stringify(t)
            }, Fp.prototype.atob = function(t) {
                return atob(t)
            }, Fp.prototype.btoa = function(t) {
                return btoa(t)
            }, Fp);

            function Fp() {
                this.emptyByteString = "", this.base64Available = "undefined" != typeof atob
            }
            Br.setPlatform(new qp), Ip(Vp)
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-firestore.js.map