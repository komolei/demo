/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */

/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */

(function (e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})(typeof window != "undefined" ? window : this, function (e, t) {
    function v(e, t) {
        t = t || r;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function S(e) {
        var t = !!e && "length" in e && e.length,
            n = g.type(e);
        return n === "function" || g.isWindow(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function O(e, t, n) {
        return g.isFunction(t) ? g.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? g.grep(e, function (e) {
            return e === t !== n
        }) : typeof t != "string" ? g.grep(e, function (e) {
            return a.call(t, e) > -1 !== n
        }) : A.test(t) ? g.filter(t, e, n) : (t = g.filter(t, e), g.grep(e, function (e) {
            return a.call(t, e) > -1 !== n && e.nodeType === 1
        }))
    }

    function B(e, t) {
        while ((e = e[t]) && e.nodeType !== 1);
        return e
    }

    function F(e) {
        var t = {};
        return g.each(e.match(j) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function I(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function R(e, t, n, r) {
        var i;
        try {
            e && g.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && g.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [e].slice(r))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }

    function W() {
        r.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), g.ready()
    }

    function $() {
        this.expando = g.expando + $.uid++
    }

    function Y(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e
    }

    function Z(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(G, "-$&").toLowerCase(), n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = Y(n)
                } catch (i) {}
                K.set(e, t, n)
            } else n = undefined
        }
        return n
    }

    function st(e, t, n, r) {
        var i, s = 1,
            o = 20,
            u = r ? function () {
                return r.cur()
            } : function () {
                return g.css(e, t, "")
            },
            a = u(),
            f = n && n[3] || (g.cssNumber[t] ? "" : "px"),
            l = (g.cssNumber[t] || f !== "px" && +a) && tt.exec(g.css(e, t));
        if (l && l[3] !== f) {
            f = f || l[3], n = n || [], l = +a || 1;
            do s = s || ".5", l /= s, g.style(e, t, l + f); while (s !== (s = u() / a) && s !== 1 && --o)
        }
        return n && (l = +l || +a || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = f, r.start = l, r.end = i)), i
    }

    function ut(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ot[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = g.css(t, "display"), t.parentNode.removeChild(t), i === "none" && (i = "block"), ot[r] = i, i)
    }

    function at(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            r = e[s];
            if (!r.style) continue;
            n = r.style.display, t ? (n === "none" && (i[s] = J.get(r, "display") || null, i[s] || (r.style.display = "")), r.style.display === "" && rt(r) && (i[s] = ut(r))) : n !== "none" && (i[s] = "none", J.set(r, "display", n))
        }
        for (s = 0; s < o; s++) i[s] != null && (e[s].style.display = i[s]);
        return e
    }

    function pt(e, t) {
        var n;
        return typeof e.getElementsByTagName != "undefined" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != "undefined" ? n = e.querySelectorAll(t || "*") : n = [], t === undefined || t && k(e, t) ? g.merge([e], n) : n
    }

    function dt(e, t) {
        var n = 0,
            r = e.length;
        for (; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }

    function mt(e, t, n, r, i) {
        var s, o, u, a, f, l, c = t.createDocumentFragment(),
            h = [],
            p = 0,
            d = e.length;
        for (; p < d; p++) {
            s = e[p];
            if (s || s === 0)
                if (g.type(s) === "object") g.merge(h, s.nodeType ? [s] : s);
                else if (!vt.test(s)) h.push(t.createTextNode(s));
            else {
                o = o || c.appendChild(t.createElement("div")), u = (lt.exec(s) || ["", ""])[1].toLowerCase(), a = ht[u] || ht._default, o.innerHTML = a[1] + g.htmlPrefilter(s) + a[2], l = a[0];
                while (l--) o = o.lastChild;
                g.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
            }
        }
        c.textContent = "", p = 0;
        while (s = h[p++]) {
            if (r && g.inArray(s, r) > -1) {
                i && i.push(s);
                continue
            }
            f = g.contains(s.ownerDocument, s), o = pt(c.appendChild(s), "script"), f && dt(o);
            if (n) {
                l = 0;
                while (s = o[l++]) ct.test(s.type || "") && n.push(s)
            }
        }
        return c
    }

    function Et() {
        return !0
    }

    function St() {
        return !1
    }

    function xt() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function Tt(e, t, n, r, i, s) {
        var o, u;
        if (typeof t == "object") {
            typeof n != "string" && (r = r || n, n = undefined);
            for (u in t) Tt(e, u, n, r, t[u], s);
            return e
        }
        r == null && i == null ? (i = n, r = n = undefined) : i == null && (typeof n == "string" ? (i = r, r = undefined) : (i = r, r = n, n = undefined));
        if (i === !1) i = St;
        else if (!i) return e;
        return s === 1 && (o = i, i = function (e) {
            return g().off(e), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = g.guid++)), e.each(function () {
            g.event.add(this, t, i, r, n)
        })
    }

    function Ot(e, t) {
        return k(e, "table") && k(t.nodeType !== 11 ? t : t.firstChild, "tr") ? g(">tbody", e)[0] || e : e
    }

    function Mt(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
    }

    function _t(e) {
        var t = Lt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Dt(e, t) {
        var n, r, i, s, o, u, a, f;
        if (t.nodeType !== 1) return;
        if (J.hasData(e)) {
            s = J.access(e), o = J.set(t, s), f = s.events;
            if (f) {
                delete o.handle, o.events = {};
                for (i in f)
                    for (n = 0, r = f[i].length; n < r; n++) g.event.add(t, i, f[i][n])
            }
        }
        K.hasData(e) && (u = K.access(e), a = g.extend({}, u), K.set(t, a))
    }

    function Pt(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && ft.test(e.type)) t.checked = e.checked;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function Ht(e, t, n, r) {
        t = o.apply([], t);
        var i, s, u, a, f, l, c = 0,
            h = e.length,
            p = h - 1,
            m = t[0],
            y = g.isFunction(m);
        if (y || h > 1 && typeof m == "string" && !d.checkClone && kt.test(m)) return e.each(function (i) {
            var s = e.eq(i);
            y && (t[0] = m.call(this, i, s.html())), Ht(s, t, n, r)
        });
        if (h) {
            i = mt(t, e[0].ownerDocument, !1, e, r), s = i.firstChild, i.childNodes.length === 1 && (i = s);
            if (s || r) {
                u = g.map(pt(i, "script"), Mt), a = u.length;
                for (; c < h; c++) f = i, c !== p && (f = g.clone(f, !0, !0), a && g.merge(u, pt(f, "script"))), n.call(e[c], f, c);
                if (a) {
                    l = u[u.length - 1].ownerDocument, g.map(u, _t);
                    for (c = 0; c < a; c++) f = u[c], ct.test(f.type || "") && !J.access(f, "globalEval") && g.contains(l, f) && (f.src ? g._evalUrl && g._evalUrl(f.src) : v(f.textContent.replace(At, ""), l))
                }
            }
        }
        return e
    }

    function Bt(e, t, n) {
        var r, i = t ? g.filter(t, e) : e,
            s = 0;
        for (;
            (r = i[s]) != null; s++) !n && r.nodeType === 1 && g.cleanData(pt(r)), r.parentNode && (n && g.contains(r.ownerDocument, r) && dt(pt(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function qt(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || It(e), n && (o = n.getPropertyValue(t) || n[t], o === "" && !g.contains(e.ownerDocument, e) && (o = g.style(e, t)), !d.pixelMarginRight() && Ft.test(o) && jt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o !== undefined ? o + "" : o
    }

    function Rt(e, t) {
        return {
            get: function () {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function Jt(e) {
        if (e in $t) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Vt.length;
        while (n--) {
            e = Vt[n] + t;
            if (e in $t) return e
        }
    }

    function Kt(e) {
        var t = g.cssProps[e];
        return t || (t = g.cssProps[e] = Jt(e) || e), t
    }

    function Qt(e, t, n) {
        var r = tt.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Gt(e, t, n, r, i) {
        var s, o = 0;
        n === (r ? "border" : "content") ? s = 4 : s = t === "width" ? 1 : 0;
        for (; s < 4; s += 2) n === "margin" && (o += g.css(e, n + nt[s], !0, i)), r ? (n === "content" && (o -= g.css(e, "padding" + nt[s], !0, i)), n !== "margin" && (o -= g.css(e, "border" + nt[s] + "Width", !0, i))) : (o += g.css(e, "padding" + nt[s], !0, i), n !== "padding" && (o += g.css(e, "border" + nt[s] + "Width", !0, i)));
        return o
    }

    function Yt(e, t, n) {
        var r, i = It(e),
            s = qt(e, t, i),
            o = g.css(e, "boxSizing", !1, i) === "border-box";
        return Ft.test(s) ? s : (r = o && (d.boxSizingReliable() || s === e.style[t]), s === "auto" && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), s = parseFloat(s) || 0, s + Gt(e, t, n || (o ? "border" : "content"), r, i) + "px")
    }

    function Zt(e, t, n, r, i) {
        return new Zt.prototype.init(e, t, n, r, i)
    }

    function sn() {
        tn && (r.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(sn) : e.setTimeout(sn, g.fx.interval), g.fx.tick())
    }

    function on() {
        return e.setTimeout(function () {
            en = undefined
        }), en = g.now()
    }

    function un(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t) n = nt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function an(e, t, n) {
        var r, i = (cn.tweeners[t] || []).concat(cn.tweeners["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function fn(e, t, n) {
        var r, i, s, o, u, a, f, l, c = "width" in t || "height" in t,
            h = this,
            p = {},
            d = e.style,
            v = e.nodeType && rt(e),
            m = J.get(e, "fxshow");
        n.queue || (o = g._queueHooks(e, "fx"), o.unqueued == null && (o.unqueued = 0, u = o.empty.fire, o.empty.fire = function () {
            o.unqueued || u()
        }), o.unqueued++, h.always(function () {
            h.always(function () {
                o.unqueued--, g.queue(e, "fx").length || o.empty.fire()
            })
        }));
        for (r in t) {
            i = t[r];
            if (nn.test(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (v ? "hide" : "show")) {
                    if (i !== "show" || !m || m[r] === undefined) continue;
                    v = !0
                }
                p[r] = m && m[r] || g.style(e, r)
            }
        }
        a = !g.isEmptyObject(t);
        if (!a && g.isEmptyObject(p)) return;
        c && e.nodeType === 1 && (n.overflow = [d.overflow, d.overflowX, d.overflowY], f = m && m.display, f == null && (f = J.get(e, "display")), l = g.css(e, "display"), l === "none" && (f ? l = f : (at([e], !0), f = e.style.display || f, l = g.css(e, "display"), at([e]))), (l === "inline" || l === "inline-block" && f != null) && g.css(e, "float") === "none" && (a || (h.done(function () {
            d.display = f
        }), f == null && (l = d.display, f = l === "none" ? "" : l)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        })), a = !1;
        for (r in p) a || (m ? "hidden" in m && (v = m.hidden) : m = J.access(e, "fxshow", {
            display: f
        }), s && (m.hidden = !v), v && at([e], !0), h.done(function () {
            v || at([e]), J.remove(e, "fxshow");
            for (r in p) g.style(e, r, p[r])
        })), a = an(v ? m[r] : 0, r, h), r in m || (m[r] = a.start, v && (a.end = a.start, a.start = 0))
    }

    function ln(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = g.camelCase(n), i = t[r], s = e[n], Array.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = g.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function cn(e, t, n) {
        var r, i, s = 0,
            o = cn.prefilters.length,
            u = g.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = en || on(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (a || u.notifyWith(e, [f, 1, 0]), u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: g.extend({}, t),
                opts: g.extend(!0, {
                    specialEasing: {},
                    easing: g.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: en || on(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = g.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? (u.notifyWith(e, [f, 1, 0]), u.resolveWith(e, [f, t])) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        ln(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = cn.prefilters[s].call(f, e, l, f.opts);
            if (r) return g.isFunction(r.stop) && (g._queueHooks(f.elem, f.opts.queue).stop = g.proxy(r.stop, r)), r
        }
        return g.map(l, an, f), g.isFunction(f.opts.start) && f.opts.start.call(e, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), g.fx.timer(g.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f
    }

    function mn(e) {
        var t = e.match(j) || [];
        return t.join(" ")
    }

    function gn(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kn(e, t, n, r) {
        var i;
        if (Array.isArray(t)) g.each(t, function (t, i) {
            n || xn.test(e) ? r(e, i) : kn(e + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, n, r)
        });
        else if (!n && g.type(t) === "object")
            for (i in t) kn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function In(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(j) || [];
            if (g.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, g.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = g.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && g.extend(!0, e, r), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while (a[0] === "*") a.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    a.unshift(i);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        if (s) return s !== a[0] && a.unshift(s), n[s]
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e.throws) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        s = n.slice,
        o = n.concat,
        u = n.push,
        a = n.indexOf,
        f = {},
        l = f.toString,
        c = f.hasOwnProperty,
        h = c.toString,
        p = h.call(Object),
        d = {},
        m = "3.2.1",
        g = function (e, t) {
            return new g.fn.init(e, t)
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        w = /-([a-z])/g,
        E = function (e, t) {
            return t.toUpperCase()
        };
    g.fn = g.prototype = {
        jquery: m,
        constructor: g,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return e == null ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = g.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return g.each(this, e)
        },
        map: function (e) {
            return this.pushStack(g.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: n.sort,
        splice: n.splice
    }, g.extend = g.fn.extend = function () {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !g.isFunction(o) && (o = {}), u === a && (o = this, u--);
        for (; u < a; u++)
            if ((e = arguments[u]) != null)
                for (t in e) {
                    n = o[t], r = e[t];
                    if (o === r) continue;
                    f && r && (g.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, s = n && Array.isArray(n) ? n : []) : s = n && g.isPlainObject(n) ? n : {}, o[t] = g.extend(f, s, r)) : r !== undefined && (o[t] = r)
                }
        return o
    }, g.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return g.type(e) === "function"
        },
        isWindow: function (e) {
            return e != null && e === e.window
        },
        isNumeric: function (e) {
            var t = g.type(e);
            return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !e || l.call(e) !== "[object Object]" ? !1 : (t = i(e), t ? (n = c.call(t, "constructor") && t.constructor, typeof n == "function" && h.call(n) === p) : !0)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? f[l.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            v(e)
        },
        camelCase: function (e) {
            return e.replace(b, "ms-").replace(w, E)
        },
        each: function (e, t) {
            var n, r = 0;
            if (S(e)) {
                n = e.length;
                for (; r < n; r++)
                    if (t.call(e[r], r, e[r]) === !1) break
            } else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function (e) {
            return e == null ? "" : (e + "").replace(y, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (S(Object(e)) ? g.merge(n, typeof e == "string" ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return t == null ? -1 : a.call(t, e, n)
        },
        merge: function (e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            for (; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length,
                u = !n;
            for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i, s = 0,
                u = [];
            if (S(e)) {
                r = e.length;
                for (; s < r; s++) i = t(e[s], s, n), i != null && u.push(i)
            } else
                for (s in e) i = t(e[s], s, n), i != null && u.push(i);
            return o.apply([], u)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return typeof t == "string" && (n = e[t], t = e, e = n), g.isFunction(e) ? (r = s.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }, i.guid = e.guid = e.guid || g.guid++, i) : undefined
        },
        now: Date.now,
        support: d
    }), typeof Symbol == "function" && (g.fn[Symbol.iterator] = n[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function (e) {
        function ot(e, t, r, i) {
            var s, u, f, l, c, d, g, y = t && t.ownerDocument,
                S = t ? t.nodeType : 9;
            r = r || [];
            if (typeof e != "string" || !e || S !== 1 && S !== 9 && S !== 11) return r;
            if (!i) {
                (t ? t.ownerDocument || t : E) !== p && h(t), t = t || p;
                if (v) {
                    if (S !== 11 && (c = G.exec(e)))
                        if (s = c[1]) {
                            if (S === 9) {
                                if (!(f = t.getElementById(s))) return r;
                                if (f.id === s) return r.push(f), r
                            } else if (y && (f = y.getElementById(s)) && b(t, f) && f.id === s) return r.push(f), r
                        } else {
                            if (c[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                            if ((s = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(s)), r
                        }
                    if (n.qsa && !C[e + " "] && (!m || !m.test(e))) {
                        if (S !== 1) y = t, g = e;
                        else if (t.nodeName.toLowerCase() !== "object") {
                            (l = t.getAttribute("id")) ? l = l.replace(tt, nt): t.setAttribute("id", l = w), d = o(e), u = d.length;
                            while (u--) d[u] = "#" + l + " " + yt(d[u]);
                            g = d.join(","), y = Y.test(e) && mt(t.parentNode) || t
                        }
                        if (g) try {
                            return _.apply(r, y.querySelectorAll(g)), r
                        } catch (x) {} finally {
                            l === w && t.removeAttribute("id")
                        }
                    }
                }
            }
            return a(e.replace(R, "$1"), t, r, i)
        }

        function ut() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function at(e) {
            return e[w] = !0, e
        }

        function ft(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                if ("form" in t) {
                    if (t.parentNode && t.disabled === !1) return "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && it(t) === e;
                    return t.disabled === e
                }
                return "label" in t ? t.disabled === e : !1
            }
        }

        function vt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function mt(e) {
            return e && typeof e.getElementsByTagName != "undefined" && e
        }

        function gt() {}

        function yt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function bt(e, t, n) {
            var r = t.dir,
                i = t.next,
                s = i || r,
                o = n && s === "parentNode",
                u = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (t.nodeType === 1 || o) return e(t, n, i);
                return !1
            } : function (t, n, a) {
                var f, l, c, h = [S, u];
                if (a) {
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (e(t, n, a)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o) {
                            c = t[w] || (t[w] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {});
                            if (i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((f = l[s]) && f[0] === S && f[1] === u) return h[2] = f[2];
                                l[s] = h;
                                if (h[2] = e(t, n, a)) return !0
                            }
                        } return !1
            }
        }

        function wt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Et(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function St(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function xt(e, t, n, r, i, s) {
            return r && !r[w] && (r = xt(r)), i && !i[w] && (i = xt(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || Et(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? St(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = St(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = St(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function Tt(e) {
            var t, n, i, s = e.length,
                o = r.relative[e[0].type],
                u = o || r.relative[" "],
                a = o ? 1 : 0,
                l = bt(function (e) {
                    return e === t
                }, u, !0),
                c = bt(function (e) {
                    return P(t, e) > -1
                }, u, !0),
                h = [function (e, n, r) {
                    var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                    return t = null, i
                }];
            for (; a < s; a++)
                if (n = r.relative[e[a].type]) h = [bt(wt(h), n)];
                else {
                    n = r.filter[e[a].type].apply(null, e[a].matches);
                    if (n[w]) {
                        i = ++a;
                        for (; i < s; i++)
                            if (r.relative[e[i].type]) break;
                        return xt(a > 1 && wt(h), a > 1 && yt(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), n, a < i && Tt(e.slice(a, i)), i < s && Tt(e = e.slice(i)), i < s && yt(e))
                    }
                    h.push(n)
                }
            return wt(h)
        }

        function Nt(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function (s, o, u, a, l) {
                    var c, d, m, g = 0,
                        y = "0",
                        b = s && [],
                        w = [],
                        E = f,
                        x = s || i && r.find.TAG("*", l),
                        T = S += E == null ? 1 : Math.random() || .1,
                        N = x.length;
                    l && (f = o === p || o || l);
                    for (; y !== N && (c = x[y]) != null; y++) {
                        if (i && c) {
                            d = 0, !o && c.ownerDocument !== p && (h(c), u = !v);
                            while (m = e[d++])
                                if (m(c, o || p, u)) {
                                    a.push(c);
                                    break
                                }
                            l && (S = T)
                        }
                        n && ((c = !m && c) && g--, s && b.push(c))
                    }
                    g += y;
                    if (n && y !== g) {
                        d = 0;
                        while (m = t[d++]) m(b, w, o, u);
                        if (s) {
                            if (g > 0)
                                while (y--) !b[y] && !w[y] && (w[y] = O.call(a));
                            w = St(w)
                        }
                        _.apply(a, w), l && !s && w.length > 0 && g + t.length > 1 && ot.uniqueSort(a)
                    }
                    return l && (S = T, f = E), b
                };
            return n ? at(s) : s
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = function (e, t) {
                return e === t && (c = !0), 0
            },
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = function (e, t) {
                var n = 0,
                    r = e.length;
                for (; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F = "\\[" + B + "*(" + j + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + B + "*\\]",
            I = ":(" + j + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|" + ".*" + ")\\)|)",
            q = new RegExp(B + "+", "g"),
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(I),
            V = new RegExp("^" + j + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            et = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (e, t) {
                return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            rt = function () {
                h()
            },
            it = bt(function (e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            _.apply(A = D.call(E.childNodes), E.childNodes), A[E.childNodes.length].nodeType
        } catch (st) {
            _ = {
                apply: A.length ? function (e, t) {
                    M.apply(e, D.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = ot.support = {}, s = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, h = ot.setDocument = function (e) {
            var t, i, o = e ? e.ownerDocument || e : E;
            if (o === p || o.nodeType !== 9 || !o.documentElement) return p;
            p = o, d = p.documentElement, v = !s(p), E !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ft(function (e) {
                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ft(function (e) {
                return d.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, et);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if (typeof t.getElementById != "undefined" && v) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, et);
                return function (e) {
                    var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if (typeof t.getElementById != "undefined" && v) {
                    var n, r, i, s = t.getElementById(e);
                    if (s) {
                        n = s.getAttributeNode("id");
                        if (n && n.value === e) return [s];
                        i = t.getElementsByName(e), r = 0;
                        while (s = i[r++]) {
                            n = s.getAttributeNode("id");
                            if (n && n.value === e) return [s]
                        }
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e);
                if (n.qsa) return t.querySelectorAll(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName != "undefined" && v) return t.getElementsByClassName(e)
            }, g = [], m = [];
            if (n.qsa = Q.test(p.querySelectorAll)) ft(function (e) {
                d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }), ft(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length !== 2 && m.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, e.querySelectorAll(":disabled").length !== 2 && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            });
            return (n.matchesSelector = Q.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", I)
            }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Q.test(d.compareDocumentPosition), b = t || Q.test(d.contains) ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, k = t ? function (e, t) {
                if (e === t) return c = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && b(E, e) ? -1 : t === p || t.ownerDocument === E && b(E, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : r & 4 ? -1 : 1)
            } : function (e, t) {
                if (e === t) return c = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    o = [e],
                    u = [t];
                if (!i || !s) return e === p ? -1 : t === p ? 1 : i ? -1 : s ? 1 : l ? P(l, e) - P(l, t) : 0;
                if (i === s) return ct(e, t);
                n = e;
                while (n = n.parentNode) o.unshift(n);
                n = t;
                while (n = n.parentNode) u.unshift(n);
                while (o[r] === u[r]) r++;
                return r ? ct(o[r], u[r]) : o[r] === E ? -1 : u[r] === E ? 1 : 0
            }, p
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== p && h(e), t = t.replace(W, "='$1']");
            if (n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch (i) {}
            return ot(t, p, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && h(e), b(e, t)
        }, ot.attr = function (e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
            return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, ot.escape = function (e) {
            return (e + "").replace(tt, nt)
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                s = 0;
            c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
            if (c) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return l = null, e
        }, i = ot.getText = function (e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (!s)
                while (t = e[r++]) n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (s === 3 || s === 4) return e.nodeValue;
            return n
        }, r = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, et), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, et), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, et).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && T(e, function (e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u,
                            b = !1;
                        if (m) {
                            if (s) {
                                while (v) {
                                    h = t;
                                    while (h = h[v])
                                        if (u ? h.nodeName.toLowerCase() === g : h.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                h = m, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p && f[2], h = p && m.childNodes[p];
                                while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
                                    if (h.nodeType === 1 && ++b && h === t) {
                                        l[e] = [S, p, b];
                                        break
                                    }
                            } else {
                                y && (h = t, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p);
                                if (b === !1)
                                    while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
                                        if ((u ? h.nodeName.toLowerCase() === g : h.nodeType === 1) && ++b) {
                                            y && (c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), l[e] = [S, b]);
                                            if (h === t) break
                                        }
                            }
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(R, "$1"));
                    return r[w] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                    }
                }),
                has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function (e) {
                    return e = e.replace(Z, et),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: at(function (e) {
                    return V.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(Z, et).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === d
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: dt(!1),
                disabled: dt(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return K.test(e.nodeName)
                },
                input: function (e) {
                    return J.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: vt(function () {
                    return [0]
                }),
                last: vt(function (e, t) {
                    return [t - 1]
                }),
                eq: vt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: vt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: vt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: vt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: vt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ht(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pt(t);
        return gt.prototype = r.filters = r.pseudos, r.setFilters = new gt, o = ot.tokenize = function (e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                if (!n || (i = U.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
                n = !1;
                if (i = z.exec(u)) n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length);
                for (o in r.filter)(i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }, u = ot.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = o(e)), n = t.length;
                while (n--) s = Tt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = C(e, Nt(i, r)), s.selector = e
            }
            return s
        }, a = ot.select = function (e, t, n, i) {
            var s, a, f, l, c, h = typeof e == "function" && e,
                p = !i && o(e = h.selector || e);
            n = n || [];
            if (p.length === 1) {
                a = p[0] = p[0].slice(0);
                if (a.length > 2 && (f = a[0]).type === "ID" && t.nodeType === 9 && v && r.relative[a[1].type]) {
                    t = (r.find.ID(f.matches[0].replace(Z, et), t) || [])[0];
                    if (!t) return n;
                    h && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                s = $.needsContext.test(e) ? 0 : a.length;
                while (s--) {
                    f = a[s];
                    if (r.relative[l = f.type]) break;
                    if (c = r.find[l])
                        if (i = c(f.matches[0].replace(Z, et), Y.test(a[0].type) && mt(t.parentNode) || t)) {
                            a.splice(s, 1), e = i.length && yt(a);
                            if (!e) return _.apply(n, i), n;
                            break
                        }
                }
            }
            return (h || u(e, p))(i, t, !v, n, !t || Y.test(e) && mt(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(p.createElement("fieldset")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(H, function (e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ot
    }(e);
    g.find = x, g.expr = x.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = x.uniqueSort, g.text = x.getText, g.isXMLDoc = x.isXML, g.contains = x.contains, g.escapeSelector = x.escape;
    var T = function (e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9)
                if (e.nodeType === 1) {
                    if (i && g(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        N = function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        },
        C = g.expr.match.needsContext,
        L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        A = /^.[^:#\[\.,]*$/;
    g.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? g.find.matchesSelector(r, e) ? [r] : [] : g.find.matches(e, g.grep(t, function (e) {
            return e.nodeType === 1
        }))
    }, g.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if (typeof e != "string") return this.pushStack(g(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (g.contains(i[t], this)) return !0
            }));
            n = this.pushStack([]);
            for (t = 0; t < r; t++) g.find(e, i[t], n);
            return r > 1 ? g.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function (e) {
            return !!O(this, typeof e == "string" && C.test(e) ? g(e) : e || [], !1).length
        }
    });
    var M, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        D = g.fn.init = function (e, t, n) {
            var i, s;
            if (!e) return this;
            n = n || M;
            if (typeof e == "string") {
                e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? i = [null, e, null] : i = _.exec(e);
                if (i && (i[1] || !t)) {
                    if (i[1]) {
                        t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0));
                        if (L.test(i[1]) && g.isPlainObject(t))
                            for (i in t) g.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return s = r.getElementById(i[2]), s && (this[0] = s, this.length = 1), this
                }
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : g.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(g) : g.makeArray(e, this)
        };
    D.prototype = g.fn, M = g(r);
    var P = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    g.fn.extend({
        has: function (e) {
            var t = g(e, this),
                n = t.length;
            return this.filter(function () {
                var e = 0;
                for (; e < n; e++)
                    if (g.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = typeof e != "string" && g(e);
            if (!C.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && g.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(s.length > 1 ? g.uniqueSort(s) : s)
        },
        index: function (e) {
            return e ? typeof e == "string" ? a.call(g(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), g.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return T(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function (e) {
            return B(e, "nextSibling")
        },
        prev: function (e) {
            return B(e, "previousSibling")
        },
        nextAll: function (e) {
            return T(e, "nextSibling")
        },
        prevAll: function (e) {
            return T(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function (e) {
            return N((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return N(e.firstChild)
        },
        contents: function (e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), g.merge([], e.childNodes))
        }
    }, function (e, t) {
        g.fn[e] = function (n, r) {
            var i = g.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = g.filter(r, i)), this.length > 1 && (H[e] || g.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;
    g.Callbacks = function (e) {
        e = typeof e == "string" ? F(e) : g.extend({}, e);
        var t, n, r, i, s = [],
            o = [],
            u = -1,
            a = function () {
                i = i || e.once, r = t = !0;
                for (; o.length; u = -1) {
                    n = o.shift();
                    while (++u < s.length) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (n ? s = [] : s = "")
            },
            f = {
                add: function () {
                    return s && (n && !t && (u = s.length - 1, o.push(n)), function r(t) {
                        g.each(t, function (t, n) {
                            g.isFunction(n) ? (!e.unique || !f.has(n)) && s.push(n) : n && n.length && g.type(n) !== "string" && r(n)
                        })
                    }(arguments), n && !t && a()), this
                },
                remove: function () {
                    return g.each(arguments, function (e, t) {
                        var n;
                        while ((n = g.inArray(t, s, n)) > -1) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (e) {
                    return e ? g.inArray(e, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return i = o = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return i = o = [], !n && !t && (s = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || a()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return f
    }, g.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2],
                    ["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return g.Deferred(function (t) {
                            g.each(n, function (n, r) {
                                var i = g.isFunction(e[r[4]]) && e[r[4]];
                                s[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var u = this,
                                    a = arguments,
                                    f = function () {
                                        var e, f;
                                        if (t < s) return;
                                        e = r.apply(u, a);
                                        if (e === n.promise()) throw new TypeError("Thenable self-resolution");
                                        f = e && (typeof e == "object" || typeof e == "function") && e.then, g.isFunction(f) ? i ? f.call(e, o(s, n, I, i), o(s, n, q, i)) : (s++, f.call(e, o(s, n, I, i), o(s, n, q, i), o(s, n, I, n.notifyWith))) : (r !== I && (u = undefined, a = [e]), (i || n.resolveWith)(u, a))
                                    },
                                    l = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            g.Deferred.exceptionHook && g.Deferred.exceptionHook(e, l.stackTrace), t + 1 >= s && (r !== q && (u = undefined, a = [e]), n.rejectWith(u, a))
                                        }
                                    };
                                t ? l() : (g.Deferred.getStackHook && (l.stackTrace = g.Deferred.getStackHook()), e.setTimeout(l))
                            }
                        }
                        var s = 0;
                        return g.Deferred(function (e) {
                            n[0][3].add(o(0, e, g.isFunction(i) ? i : I, e.notifyWith)), n[1][3].add(o(0, e, g.isFunction(t) ? t : I)), n[2][3].add(o(0, e, g.isFunction(r) ? r : q))
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? g.extend(e, i) : i
                    }
                },
                s = {};
            return g.each(n, function (e, t) {
                var o = t[2],
                    u = t[5];
                i[t[1]] = o.add, u && o.add(function () {
                    r = u
                }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? undefined : this, arguments), this
                }, s[t[0] + "With"] = o.fireWith
            }), i.promise(s), t && t.call(s, s), s
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = s.call(arguments),
                o = g.Deferred(),
                u = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1) {
                R(e, o.done(u(n)).resolve, o.reject, !t);
                if (o.state() === "pending" || g.isFunction(i[n] && i[n].then)) return o.then()
            }
            while (n--) R(i[n], u(n), o.reject);
            return o.promise()
        }
    });
    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    g.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && U.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, g.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var z = g.Deferred();
    g.fn.ready = function (e) {
        return z.then(e).catch(function (e) {
            g.readyException(e)
        }), this
    }, g.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            if (e === !0 ? --g.readyWait : g.isReady) return;
            g.isReady = !0;
            if (e !== !0 && --g.readyWait > 0) return;
            z.resolveWith(r, [g])
        }
    }), g.ready.then = z.then, r.readyState === "complete" || r.readyState !== "loading" && !r.documentElement.doScroll ? e.setTimeout(g.ready) : (r.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var X = function (e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = n == null;
            if (g.type(n) === "object") {
                i = !0;
                for (u in n) X(e, t, u, n[u], !0, s, o)
            } else if (r !== undefined) {
                i = !0, g.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function (e, t, n) {
                    return f.call(g(e), n)
                }));
                if (t)
                    for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
            }
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        V = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };
    $.uid = 1, $.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if (typeof t == "string") i[g.camelCase(t)] = n;
            else
                for (r in t) i[g.camelCase(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][g.camelCase(t)]
        },
        access: function (e, t, n) {
            return t === undefined || t && typeof t == "string" && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (r === undefined) return;
            if (t !== undefined) {
                Array.isArray(t) ? t = t.map(g.camelCase) : (t = g.camelCase(t), t = t in r ? [t] : t.match(j) || []), n = t.length;
                while (n--) delete r[t[n]]
            }
            if (t === undefined || g.isEmptyObject(r)) e.nodeType ? e[this.expando] = undefined : delete e[this.expando]
        },
        hasData: function (e) {
            var t = e[this.expando];
            return t !== undefined && !g.isEmptyObject(t)
        }
    };
    var J = new $,
        K = new $,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;
    g.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), g.fn.extend({
        data: function (e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = K.get(s);
                    if (s.nodeType === 1 && !J.get(s, "hasDataAttrs")) {
                        n = o.length;
                        while (n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = g.camelCase(r.slice(5)), Z(s, r, i[r])));
                        J.set(s, "hasDataAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function () {
                K.set(this, e)
            }) : X(this, function (t) {
                var n;
                if (s && t === undefined) {
                    n = K.get(s, e);
                    if (n !== undefined) return n;
                    n = Z(s, e);
                    if (n !== undefined) return n;
                    return
                }
                this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), g.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, g.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = g.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = g._queueHooks(e, t),
                o = function () {
                    g.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: g.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), g.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = g.queue(this, e, t);
                g._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && g.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                g.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = g.Deferred(),
                s = this,
                o = this.length,
                u = function () {
                    --r || i.resolveWith(s, [s])
                };
            typeof e != "string" && (t = e, e = undefined), e = e || "fx";
            while (o--) n = J.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        tt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        rt = function (e, t) {
            return e = t || e, e.style.display === "none" || e.style.display === "" && g.contains(e.ownerDocument, e) && g.css(e, "display") === "none"
        },
        it = function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        },
        ot = {};
    g.fn.extend({
        show: function () {
            return at(this, !0)
        },
        hide: function () {
            return at(this)
        },
        toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                rt(this) ? g(this).show() : g(this).hide()
            })
        }
    });
    var ft = /^(?:checkbox|radio)$/i,
        lt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ct = /^$|\/(?:java|ecma)script/i,
        ht = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
    var vt = /<|&#?\w+;/;
    (function () {
        var e = r.createDocumentFragment(),
            t = e.appendChild(r.createElement("div")),
            n = r.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    })();
    var gt = r.documentElement,
        yt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;
    g.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = J.get(e);
            if (!m) return;
            n.handler && (s = n, n = s.handler, i = s.selector), i && g.find.matchesSelector(gt, i), n.guid || (n.guid = g.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
                return typeof g != "undefined" && g.event.triggered !== t.type ? g.event.dispatch.apply(e, arguments) : undefined
            }), t = (t || "").match(j) || [""], f = t.length;
            while (f--) {
                u = wt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) continue;
                c = g.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = g.event.special[p] || {}, l = g.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && g.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), g.event.global[p] = !0
            }
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = J.hasData(e) && J.get(e);
            if (!m || !(a = m.events)) return;
            t = (t || "").match(j) || [""], f = t.length;
            while (f--) {
                u = wt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in a) g.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = g.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                while (s--) l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && g.removeEvent(e, p, m.handle), delete a[p])
            }
            g.isEmptyObject(a) && J.remove(e, "handle events")
        },
        dispatch: function (e) {
            var t = g.event.fix(e),
                n, r, i, s, o, u, a = new Array(arguments.length),
                f = (J.get(this, "events") || {})[t.type] || [],
                l = g.event.special[t.type] || {};
            a[0] = t;
            for (n = 1; n < arguments.length; n++) a[n] = arguments[n];
            t.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, t) === !1) return;
            u = g.event.handlers.call(this, t, f), n = 0;
            while ((s = u[n++]) && !t.isPropagationStopped()) {
                t.currentTarget = s.elem, r = 0;
                while ((o = s.handlers[r++]) && !t.isImmediatePropagationStopped())
                    if (!t.rnamespace || t.rnamespace.test(o.namespace)) t.handleObj = o, t.data = o.data, i = ((g.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), i !== undefined && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, t), t.result
        },
        handlers: function (e, t) {
            var n, r, i, s, o, u = [],
                a = t.delegateCount,
                f = e.target;
            if (a && f.nodeType && !(e.type === "click" && e.button >= 1))
                for (; f !== this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (e.type !== "click" || f.disabled !== !0)) {
                        s = [], o = {};
                        for (n = 0; n < a; n++) r = t[n], i = r.selector + " ", o[i] === undefined && (o[i] = r.needsContext ? g(i, this).index(f) > -1 : g.find(i, this, null, [f]).length), o[i] && s.push(r);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return f = this, a < t.length && u.push({
                elem: f,
                handlers: t.slice(a)
            }), u
        },
        addProp: function (e, t) {
            Object.defineProperty(g.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[g.expando] ? e : new g.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== xt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === xt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (this.type === "checkbox" && this.click && k(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, g.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, g.Event = function (e, t) {
        if (!(this instanceof g.Event)) return new g.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? Et : St, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), this[g.expando] = !0
    }, g.Event.prototype = {
        constructor: g.Event,
        isDefaultPrevented: St,
        isPropagationStopped: St,
        isImmediatePropagationStopped: St,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Et, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Et, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Et, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, g.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return e.which == null && yt.test(e.type) ? e.charCode != null ? e.charCode : e.keyCode : !e.which && t !== undefined && bt.test(e.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : e.which
        }
    }, g.event.addProp), g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        g.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !g.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), g.fn.extend({
        on: function (e, t, n, r) {
            return Tt(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Tt(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, g(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if (typeof e == "object") {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function") n = t, t = undefined;
            return n === !1 && (n = St), this.each(function () {
                g.event.remove(this, e, n, t)
            })
        }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ct = /<script|<style|<link/i,
        kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^true\/(.*)/,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    g.extend({
        htmlPrefilter: function (e) {
            return e.replace(Nt, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, s, o, u = e.cloneNode(!0),
                a = g.contains(e.ownerDocument, e);
            if (!d.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !g.isXMLDoc(e)) {
                o = pt(u), s = pt(e);
                for (r = 0, i = s.length; r < i; r++) Pt(s[r], o[r])
            }
            if (t)
                if (n) {
                    s = s || pt(e), o = o || pt(u);
                    for (r = 0, i = s.length; r < i; r++) Dt(s[r], o[r])
                } else Dt(e, u);
            return o = pt(u, "script"), o.length > 0 && dt(o, !a && pt(e, "script")), u
        },
        cleanData: function (e) {
            var t, n, r, i = g.event.special,
                s = 0;
            for (;
                (n = e[s]) !== undefined; s++)
                if (V(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? g.event.remove(n, r) : g.removeEvent(n, r, t.handle);
                        n[J.expando] = undefined
                    }
                    n[K.expando] && (n[K.expando] = undefined)
                }
        }
    }), g.fn.extend({
        detach: function (e) {
            return Bt(this, e, !0)
        },
        remove: function (e) {
            return Bt(this, e)
        },
        text: function (e) {
            return X(this, function (e) {
                return e === undefined ? g.text(this) : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = e
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Ht(this, arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Ot(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return Ht(this, arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Ot(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Ht(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Ht(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) e.nodeType === 1 && (g.cleanData(pt(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return g.clone(this, e, t)
            })
        },
        html: function (e) {
            return X(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof e == "string" && !Ct.test(e) && !ht[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = g.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (g.cleanData(pt(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ht(this, arguments, function (t) {
                var n = this.parentNode;
                g.inArray(this, e) < 0 && (g.cleanData(pt(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        g.fn[e] = function (e) {
            var n, r = [],
                i = g(e),
                s = i.length - 1,
                o = 0;
            for (; o <= s; o++) n = o === s ? this : this.clone(!0), g(i[o])[t](n), u.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var jt = /^margin/,
        Ft = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
        It = function (t) {
            var n = t.ownerDocument.defaultView;
            if (!n || !n.opener) n = e;
            return n.getComputedStyle(t)
        };
    (function () {
        function t() {
            if (!a) return;
            a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", gt.appendChild(u);
            var t = e.getComputedStyle(a);
            n = t.top !== "1%", o = t.marginLeft === "2px", i = t.width === "4px", a.style.marginRight = "50%", s = t.marginRight === "4px", gt.removeChild(u), a = null
        }
        var n, i, s, o, u = r.createElement("div"),
            a = r.createElement("div");
        if (!a.style) return;
        a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = a.style.backgroundClip === "content-box", u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.appendChild(a), g.extend(d, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), i
            },
            pixelMarginRight: function () {
                return t(), s
            },
            reliableMarginLeft: function () {
                return t(), o
            }
        })
    })();
    var Ut = /^(none|table(?!-c[ea]).+)/,
        zt = /^--/,
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Vt = ["Webkit", "Moz", "ms"],
        $t = r.createElement("div").style;
    g.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = qt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var i, s, o, u = g.camelCase(t),
                a = zt.test(t),
                f = e.style;
            a || (t = Kt(u)), o = g.cssHooks[t] || g.cssHooks[u];
            if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : f[t];
            s = typeof n, s === "string" && (i = tt.exec(n)) && i[1] && (n = st(e, t, i), s = "number");
            if (n == null || n !== n) return;
            s === "number" && (n += i && i[3] || (g.cssNumber[u] ? "" : "px")), !d.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (f[t] = "inherit");
            if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) a ? f.setProperty(t, n) : f[t] = n
        },
        css: function (e, t, n, r) {
            var i, s, o, u = g.camelCase(t),
                a = zt.test(t);
            return a || (t = Kt(u)), o = g.cssHooks[t] || g.cssHooks[u], o && "get" in o && (i = o.get(e, !0, n)), i === undefined && (i = qt(e, t, r)), i === "normal" && t in Xt && (i = Xt[t]), n === "" || n ? (s = parseFloat(i), n === !0 || isFinite(s) ? s || 0 : i) : i
        }
    }), g.each(["height", "width"], function (e, t) {
        g.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return Ut.test(g.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? it(e, Wt, function () {
                    return Yt(e, t, r)
                }) : Yt(e, t, r)
            },
            set: function (e, n, r) {
                var i, s = r && It(e),
                    o = r && Gt(e, t, r, g.css(e, "boxSizing", !1, s) === "border-box", s);
                return o && (i = tt.exec(n)) && (i[3] || "px") !== "px" && (e.style[t] = n, n = g.css(e, t)), Qt(e, n, o)
            }
        }
    }), g.cssHooks.marginLeft = Rt(d.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(qt(e, "marginLeft")) || e.getBoundingClientRect().left - it(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        g.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + nt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, jt.test(e) || (g.cssHooks[e + t].set = Qt)
    }), g.fn.extend({
        css: function (e, t) {
            return X(this, function (e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (Array.isArray(t)) {
                    r = It(e), i = t.length;
                    for (; o < i; o++) s[t[o]] = g.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? g.style(e, t, n) : g.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), g.Tween = Zt, Zt.prototype = {
        constructor: Zt,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (g.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Zt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Zt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this
        }
    }, Zt.prototype.init.prototype = Zt.prototype, Zt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function (e) {
                g.fx.step[e.prop] ? g.fx.step[e.prop](e) : e.elem.nodeType !== 1 || e.elem.style[g.cssProps[e.prop]] == null && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Zt.propHooks.scrollTop = Zt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, g.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, g.fx = Zt.prototype.init, g.fx.step = {};
    var en, tn, nn = /^(?:toggle|show|hide)$/,
        rn = /queueHooks$/;
    g.Animation = g.extend(cn, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return st(n.elem, e, tt.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(j);
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], cn.tweeners[n] = cn.tweeners[n] || [], cn.tweeners[n].unshift(t)
            },
            prefilters: [fn],
            prefilter: function (e, t) {
                t ? cn.prefilters.unshift(e) : cn.prefilters.push(e)
            }
        }), g.speed = function (e, t, n) {
            var r = e && typeof e == "object" ? g.extend({}, e) : {
                complete: n || !n && t || g.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !g.isFunction(t) && t
            };
            g.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in g.fx.speeds ? r.duration = g.fx.speeds[r.duration] : r.duration = g.fx.speeds._default);
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function () {
                g.isFunction(r.old) && r.old.call(this), r.queue && g.dequeue(this, r.queue)
            }, r
        }, g.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(rt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = g.isEmptyObject(e),
                    s = g.speed(t, n, r),
                    o = function () {
                        var t = cn(this, g.extend({}, e), s);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = e != null && e + "queueHooks",
                        s = g.timers,
                        o = J.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && g.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = g.timers,
                        o = r ? r.length : 0;
                    n.finish = !0, g.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                    for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), g.each(["toggle", "show", "hide"], function (e, t) {
            var n = g.fn[t];
            g.fn[t] = function (e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
            }
        }), g.each({
            slideDown: un("show"),
            slideUp: un("hide"),
            slideToggle: un("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            g.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), g.timers = [], g.fx.tick = function () {
            var e, t = 0,
                n = g.timers;
            en = g.now();
            for (; t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
            n.length || g.fx.stop(), en = undefined
        }, g.fx.timer = function (e) {
            g.timers.push(e), g.fx.start()
        }, g.fx.interval = 13, g.fx.start = function () {
            if (tn) return;
            tn = !0, sn()
        }, g.fx.stop = function () {
            tn = null
        }, g.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, g.fn.delay = function (t, n) {
            return t = g.fx ? g.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select"),
                n = t.appendChild(r.createElement("option"));
            e.type = "checkbox", d.checkOn = e.value !== "", d.optSelected = n.selected, e = r.createElement("input"), e.value = "t", e.type = "radio", d.radioValue = e.value === "t"
        }();
    var hn, pn = g.expr.attrHandle;
    g.fn.extend({
        attr: function (e, t) {
            return X(this, g.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                g.removeAttr(this, e)
            })
        }
    }), g.extend({
        attr: function (e, t, n) {
            var r, i, s = e.nodeType;
            if (s === 3 || s === 8 || s === 2) return;
            if (typeof e.getAttribute == "undefined") return g.prop(e, t, n);
            if (s !== 1 || !g.isXMLDoc(e)) i = g.attrHooks[t.toLowerCase()] || (g.expr.match.bool.test(t) ? hn : undefined);
            if (n !== undefined) {
                if (n === null) {
                    g.removeAttr(e, t);
                    return
                }
                return i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n)
            }
            return i && "get" in i && (r = i.get(e, t)) !== null ? r : (r = g.find.attr(e, t), r == null ? undefined : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!d.radioValue && t === "radio" && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(j);
            if (i && e.nodeType === 1)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), hn = {
        set: function (e, t, n) {
            return t === !1 ? g.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, g.each(g.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = pn[t] || g.find.attr;
        pn[t] = function (e, t, r) {
            var i, s, o = t.toLowerCase();
            return r || (s = pn[o], pn[o] = i, i = n(e, t, r) != null ? o : null, pn[o] = s), i
        }
    });
    var dn = /^(?:input|select|textarea|button)$/i,
        vn = /^(?:a|area)$/i;
    g.fn.extend({
        prop: function (e, t) {
            return X(this, g.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[g.propFix[e] || e]
            })
        }
    }), g.extend({
        prop: function (e, t, n) {
            var r, i, s = e.nodeType;
            if (s === 3 || s === 8 || s === 2) return;
            if (s !== 1 || !g.isXMLDoc(e)) t = g.propFix[t] || t, i = g.propHooks[t];
            return n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = g.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dn.test(e.nodeName) || vn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), d.optSelected || (g.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        g.propFix[this.toLowerCase()] = this
    }), g.fn.extend({
        addClass: function (e) {
            var t, n, r, i, s, o, u, a = 0;
            if (g.isFunction(e)) return this.each(function (t) {
                g(this).addClass(e.call(this, t, gn(this)))
            });
            if (typeof e == "string" && e) {
                t = e.match(j) || [];
                while (n = this[a++]) {
                    i = gn(n), r = n.nodeType === 1 && " " + mn(i) + " ";
                    if (r) {
                        o = 0;
                        while (s = t[o++]) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                        u = mn(r), i !== u && n.setAttribute("class", u)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o, u, a = 0;
            if (g.isFunction(e)) return this.each(function (t) {
                g(this).removeClass(e.call(this, t, gn(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (typeof e == "string" && e) {
                t = e.match(j) || [];
                while (n = this[a++]) {
                    i = gn(n), r = n.nodeType === 1 && " " + mn(i) + " ";
                    if (r) {
                        o = 0;
                        while (s = t[o++])
                            while (r.indexOf(" " + s + " ") > -1) r = r.replace(" " + s + " ", " ");
                        u = mn(r), i !== u && n.setAttribute("class", u)
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function (n) {
                g(this).toggleClass(e.call(this, n, gn(this), t), t)
            }) : this.each(function () {
                var t, r, i, s;
                if (n === "string") {
                    r = 0, i = g(this), s = e.match(j) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (e === undefined || n === "boolean") t = gn(this), t && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : J.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (n.nodeType === 1 && (" " + mn(gn(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var yn = /\r/g;
    g.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i) return t = g.valHooks[i.type] || g.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(yn, "") : n == null ? "" : n);
                return
            }
            return r = g.isFunction(e), this.each(function (n) {
                var i;
                if (this.nodeType !== 1) return;
                r ? i = e.call(this, n, g(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : Array.isArray(i) && (i = g.map(i, function (e) {
                    return e == null ? "" : e + ""
                })), t = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
            })
        }
    }), g.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = g.find.attr(e, "value");
                    return t != null ? t : mn(g.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        s = e.selectedIndex,
                        o = e.type === "select-one",
                        u = o ? null : [],
                        a = o ? s + 1 : i.length;
                    s < 0 ? r = a : r = o ? s : 0;
                    for (; r < a; r++) {
                        n = i[r];
                        if ((n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            t = g(n).val();
                            if (o) return t;
                            u.push(t)
                        }
                    }
                    return u
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        s = g.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = g.inArray(g.valHooks.option.get(r), s) > -1) n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = g.inArray(g(e).val(), t) > -1
            }
        }, d.checkOn || (g.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var bn = /^(?:focusinfocus|focusoutblur)$/;
    g.extend(g.event, {
        trigger: function (t, n, i, s) {
            var o, u, a, f, l, h, p, d = [i || r],
                v = c.call(t, "type") ? t.type : t,
                m = c.call(t, "namespace") ? t.namespace.split(".") : [];
            u = a = i = i || r;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (bn.test(v + g.event.triggered)) return;
            v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), l = v.indexOf(":") < 0 && "on" + v, t = t[g.expando] ? t : new g.Event(v, typeof t == "object" && t), t.isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = n == null ? [t] : g.makeArray(n, [t]), p = g.event.special[v] || {};
            if (!s && p.trigger && p.trigger.apply(i, n) === !1) return;
            if (!s && !p.noBubble && !g.isWindow(i)) {
                f = p.delegateType || v, bn.test(f + v) || (u = u.parentNode);
                for (; u; u = u.parentNode) d.push(u), a = u;
                a === (i.ownerDocument || r) && d.push(a.defaultView || a.parentWindow || e)
            }
            o = 0;
            while ((u = d[o++]) && !t.isPropagationStopped()) t.type = o > 1 ? f : p.bindType || v, h = (J.get(u, "events") || {})[t.type] && J.get(u, "handle"), h && h.apply(u, n), h = l && u[l], h && h.apply && V(u) && (t.result = h.apply(u, n), t.result === !1 && t.preventDefault());
            return t.type = v, !s && !t.isDefaultPrevented() && (!p._default || p._default.apply(d.pop(), n) === !1) && V(i) && l && g.isFunction(i[v]) && !g.isWindow(i) && (a = i[l], a && (i[l] = null), g.event.triggered = v, i[v](), g.event.triggered = undefined, a && (i[l] = a)), t.result
        },
        simulate: function (e, t, n) {
            var r = g.extend(new g.Event, n, {
                type: e,
                isSimulated: !0
            });
            g.event.trigger(r, null, t)
        }
    }), g.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                g.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return g.event.trigger(e, t, n, !0)
        }
    }), g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        g.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), g.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), d.focusin = "onfocusin" in e, d.focusin || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            g.event.simulate(t, e.target, g.event.fix(e))
        };
        g.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var wn = e.location,
        En = g.now(),
        Sn = /\?/;
    g.parseXML = function (t) {
        var n;
        if (!t || typeof t != "string") return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = undefined
        }
        return (!n || n.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + t), n
    };
    var xn = /\[\]$/,
        Tn = /\r?\n/g,
        Nn = /^(?:submit|button|image|reset|file)$/i,
        Cn = /^(?:input|select|textarea|keygen)/i;
    g.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = g.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !g.isPlainObject(e)) g.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) kn(n, e[n], t, i);
        return r.join("&")
    }, g.fn.extend({
        serialize: function () {
            return g.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = g.prop(this, "elements");
                return e ? g.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !g(this).is(":disabled") && Cn.test(this.nodeName) && !Nn.test(e) && (this.checked || !ft.test(e))
            }).map(function (e, t) {
                var n = g(this).val();
                return n == null ? null : Array.isArray(n) ? g.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Tn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tn, "\r\n")
                }
            }).get()
        }
    });
    var Ln = /%20/g,
        An = /#.*$/,
        On = /([?&])_=[^&]*/,
        Mn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        _n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Dn = /^(?:GET|HEAD)$/,
        Pn = /^\/\//,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*"),
        Fn = r.createElement("a");
    Fn.href = wn.href, g.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wn.href,
            type: "GET",
            isLocal: _n.test(wn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": g.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Rn(Rn(e, g.ajaxSettings), t) : Rn(g.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function (t, n) {
            function C(t, n, r, u) {
                var f, h, p, E, S, x = n;
                if (l) return;
                l = !0, a && e.clearTimeout(a), i = undefined, o = u || "", T.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || t === 304, r && (E = Un(d, T, r)), E = zn(d, E, T, f);
                if (f) d.ifModified && (S = T.getResponseHeader("Last-Modified"), S && (g.lastModified[s] = S), S = T.getResponseHeader("etag"), S && (g.etag[s] = S)), t === 204 || d.type === "HEAD" ? x = "nocontent" : t === 304 ? x = "notmodified" : (x = E.state, h = E.data, p = E.error, f = !p);
                else {
                    p = x;
                    if (t || !x) x = "error", t < 0 && (t = 0)
                }
                T.status = t, T.statusText = (n || x) + "", f ? y.resolveWith(v, [h, x, T]) : y.rejectWith(v, [T, x, p]), T.statusCode(w), w = undefined, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, d, f ? h : p]), b.fireWith(v, [T, x]), c && (m.trigger("ajaxComplete", [T, d]), --g.active || g.event.trigger("ajaxStop"))
            }
            typeof t == "object" && (n = t, t = undefined), n = n || {};
            var i, s, o, u, a, f, l, c, h, p, d = g.ajaxSetup({}, n),
                v = d.context || d,
                m = d.context && (v.nodeType || v.jquery) ? g(v) : g.event,
                y = g.Deferred(),
                b = g.Callbacks("once memory"),
                w = d.statusCode || {},
                E = {},
                S = {},
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (l) {
                            if (!u) {
                                u = {};
                                while (t = Mn.exec(o)) u[t[1].toLowerCase()] = t[2]
                            }
                            t = u[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return l ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        return l == null && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, E[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return l == null && (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (l) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return i && i.abort(t), C(0, t), this
                    }
                };
            y.promise(T), d.url = ((t || d.url || wn.href) + "").replace(Pn, wn.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(j) || [""];
            if (d.crossDomain == null) {
                f = r.createElement("a");
                try {
                    f.href = d.url, f.href = f.href, d.crossDomain = Fn.protocol + "//" + Fn.host != f.protocol + "//" + f.host
                } catch (N) {
                    d.crossDomain = !0
                }
            }
            d.data && d.processData && typeof d.data != "string" && (d.data = g.param(d.data, d.traditional)), qn(Hn, d, n, T);
            if (l) return T;
            c = g.event && d.global, c && g.active++ === 0 && g.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Dn.test(d.type), s = d.url.replace(An, ""), d.hasContent ? d.data && d.processData && (d.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (d.data = d.data.replace(Ln, "+")) : (p = d.url.slice(s.length), d.data && (s += (Sn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (s = s.replace(On, "$1"), p = (Sn.test(s) ? "&" : "?") + "_=" + En++ + p), d.url = s + p), d.ifModified && (g.lastModified[s] && T.setRequestHeader("If-Modified-Since", g.lastModified[s]), g.etag[s] && T.setRequestHeader("If-None-Match", g.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + jn + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers) T.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (d.beforeSend.call(v, T, d) === !1 || l)) return T.abort();
            x = "abort", b.add(d.complete), T.done(d.success), T.fail(d.error), i = qn(Bn, d, n, T);
            if (!i) C(-1, "No Transport");
            else {
                T.readyState = 1, c && m.trigger("ajaxSend", [T, d]);
                if (l) return T;
                d.async && d.timeout > 0 && (a = e.setTimeout(function () {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    l = !1, i.send(E, C)
                } catch (N) {
                    if (l) throw N;
                    C(-1, N)
                }
            }
            return T
        },
        getJSON: function (e, t, n) {
            return g.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return g.get(e, undefined, t, "script")
        }
    }), g.each(["get", "post"], function (e, t) {
        g[t] = function (e, n, r, i) {
            return g.isFunction(n) && (i = i || r, r = n, n = undefined), g.ajax(g.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, g.isPlainObject(e) && e))
        }
    }), g._evalUrl = function (e) {
        return g.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, g.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g.isFunction(e) && (e = e.call(this[0])), t = g(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g.isFunction(e) ? this.each(function (t) {
                g(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = g(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g.isFunction(e);
            return this.each(function (n) {
                g(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                g(this).replaceWith(this.childNodes)
            }), this
        }
    }), g.expr.pseudos.hidden = function (e) {
        return !g.expr.pseudos.visible(e)
    }, g.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, g.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Wn = {
            0: 200,
            1223: 204
        },
        Xn = g.ajaxSettings.xhr();
    d.cors = !!Xn && "withCredentials" in Xn, d.ajax = Xn = !!Xn, g.ajaxTransport(function (t) {
        var n, r;
        if (d.cors || Xn && !t.crossDomain) return {
            send: function (i, s) {
                var o, u = t.xhr();
                u.open(t.type, t.url, t.async, t.username, t.password);
                if (t.xhrFields)
                    for (o in t.xhrFields) u[o] = t.xhrFields[o];
                t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType), !t.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) u.setRequestHeader(o, i[o]);
                n = function (e) {
                    return function () {
                        n && (n = r = u.onload = u.onerror = u.onabort = u.onreadystatechange = null, e === "abort" ? u.abort() : e === "error" ? typeof u.status != "number" ? s(0, "error") : s(u.status, u.statusText) : s(Wn[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                            binary: u.response
                        } : {
                            text: u.responseText
                        }, u.getAllResponseHeaders()))
                    }
                }, u.onload = n(), r = u.onerror = n("error"), u.onabort !== undefined ? u.onabort = r : u.onreadystatechange = function () {
                    u.readyState === 4 && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    u.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (n) throw a
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), g.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return g.globalEval(e), e
            }
        }
    }), g.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), g.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, s) {
                    t = g("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && s(e.type === "error" ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Vn = [],
        $n = /(=)\?(?=&|$)|\?\?/;
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vn.pop() || g.expando + "_" + En++;
            return this[e] = !0, e
        }
    }), g.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && ($n.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && $n.test(t.data) && "data");
        if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = g.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace($n, "$1" + i) : t.jsonp !== !1 && (t.url += (Sn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || g.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function () {
            o = arguments
        }, r.always(function () {
            s === undefined ? g(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, Vn.push(i)), o && g.isFunction(s) && s(o[0]), o = s = undefined
        }), "script"
    }), d.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
    }(), g.parseHTML = function (e, t, n) {
        if (typeof e != "string") return [];
        typeof t == "boolean" && (n = t, t = !1);
        var i, s, o;
        return t || (d.createHTMLDocument ? (t = r.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = r.location.href, t.head.appendChild(i)) : t = r), s = L.exec(e), o = !n && [], s ? [t.createElement(s[1])] : (s = mt([e], t, o), o && o.length && g(o).remove(), g.merge([], s.childNodes))
    }, g.fn.load = function (e, t, n) {
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u > -1 && (r = mn(e.slice(u)), e = e.slice(0, u)), g.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"), o.length > 0 && g.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, o.html(r ? g("<div>").append(g.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            o.each(function () {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        g.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), g.expr.pseudos.animated = function (e) {
        return g.grep(g.timers, function (t) {
            return e === t.elem
        }).length
    }, g.offset = {
        setOffset: function (e, t, n) {
            var r, i, s, o, u, a, f, l = g.css(e, "position"),
                c = g(e),
                h = {};
            l === "static" && (e.style.position = "relative"), u = c.offset(), s = g.css(e, "top"), a = g.css(e, "left"), f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), g.isFunction(t) && (t = t.call(e, n, g.extend({}, u))), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, g.fn.extend({
        offset: function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t) {
                g.offset.setOffset(this, e, t)
            });
            var t, n, r, i, s = this[0];
            if (!s) return;
            return s.getClientRects().length ? (r = s.getBoundingClientRect(), t = s.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (!this[0]) return;
            var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
            return g.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k(e[0], "html") || (r = e.offset()), r = {
                top: r.top + g.css(e[0], "borderTopWidth", !0),
                left: r.left + g.css(e[0], "borderLeftWidth", !0)
            }), {
                top: t.top - r.top - g.css(n, "marginTop", !0),
                left: t.left - r.left - g.css(n, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && g.css(e, "position") === "static") e = e.offsetParent;
                return e || gt
            })
        }
    }), g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        g.fn[e] = function (r) {
            return X(this, function (e, r, i) {
                var s;
                g.isWindow(e) ? s = e : e.nodeType === 9 && (s = e.defaultView);
                if (i === undefined) return s ? s[t] : e[r];
                s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), g.each(["top", "left"], function (e, t) {
        g.cssHooks[t] = Rt(d.pixelPosition, function (e, n) {
            if (n) return n = qt(e, t), Ft.test(n) ? g(e).position()[t] + "px" : n
        })
    }), g.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        g.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            g.fn[r] = function (i, s) {
                var o = arguments.length && (n || typeof i != "boolean"),
                    u = n || (i === !0 || s === !0 ? "margin" : "border");
                return X(this, function (t, n, i) {
                    var s;
                    return g.isWindow(t) ? r.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e] : t.nodeType === 9 ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : i === undefined ? g.css(t, n, u) : g.style(t, n, i, u)
                }, t, o ? i : undefined, o)
            }
        })
    }), g.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), g.holdReady = function (e) {
        e ? g.readyWait++ : g.ready(!0)
    }, g.isArray = Array.isArray, g.parseJSON = JSON.parse, g.nodeName = k, typeof define == "function" && define.amd && define("jquery", [], function () {
        return g
    });
    var Jn = e.jQuery,
        Kn = e.$;
    return g.noConflict = function (t) {
        return e.$ === g && (e.$ = Kn), t && e.jQuery === g && (e.jQuery = Jn), g
    }, t || (e.jQuery = e.$ = g), g
}), define("app/GoTop", function () {}), define("app/Carousel", [], function () {
    return _Carousel = function () {
        var e = function (e) {
            this.carousel = e, this.init(), this.bind()
        };
        return e.prototype.init = function () {
            var e = this.btnnext = this.carousel.find(".btn-next"),
                t = this.btnpre = this.carousel.find(".btn-pre"),
                n = this.ctimgli = this.carousel.find(".ct-img li"),
                r = this.ctimg = this.carousel.find(".ct-img"),
                i = this.index = 0,
                s = this.bullet = this.carousel.find(".bullet"),
                o = this.len = this.carousel.find(".ct-img li").width(),
                u = this.isLockUp = !1;
            r.append(n.first().clone()), r.prepend(n.last().clone()), r.css("left", -o), r.width(r.children().length * o)
        }, e.prototype.bind = function () {
            function t() {
                this.bullet.children().removeClass("active").eq(this.index).addClass("active")
            }
            var e = this;
            this.btnnext.click(function () {
                event.preventDefault();
                if (e.isLockUp) return;
                e.isLockUp = !0, e.ctimg.animate({
                    left: "-=" + e.len
                }, function () {
                    e.index++, e.index == e.ctimgli.length && (e.index = 0, e.ctimg.css("left", -e.len + "px")), t.call(e), e.isLockUp = !1
                })
            }), this.btnpre.click(function () {
                if (e.isLockUp) return;
                event.preventDefault(), e.ctimg.animate({
                    left: "+=" + e.len
                }, function () {
                    e.index--, e.index < 0 && (e.ctimg.css("left", -(e.ctimgli.length * e.ctimgli.width())), e.index = e.ctimgli.length - 1), e.isLockUp = !1, t.bind(e)()
                })
            })
        }, {
            init: function (t) {
                t.each(function (t, n) {
                    new e($(this))
                })
            }
        }
    }(), _Carousel
}), define("app/lazyLoad", [], function () {
    return _Exposure = function () {
        function e(e, t) {
            this.$target = e, this.callback = t, this.bind(), this.check()
        }
        return e.prototype.bind = function () {
            var e = this;
            $(window).on("scroll", function () {
                e.check()
            })
        }, e.prototype.check = function () {
            var e = this;
            e.IsShow(this.$target) && e.callback(this.$target)
        }, e.prototype.IsShow = function () {
            var e = $(window).height(),
                t = $(window).scrollTop(),
                n = this.$target.outerHeight(),
                r = this.$target.offset().top;
            return r < t + e && t < r + n ? !0 : !1
        }, {
            init: function (t, n) {
                t.each(function (t, r) {
                    new e($(r), n)
                })
            },
            komo: function () {
                console.log($(".ct img"))
            }
        }
    }(), _Exposure
}), require.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        lib: "../lib",
        jquery: "../lib/jquery-3.2.1"
    }
}), requirejs(["jquery", "app/GoTop", "app/Carousel", "app/lazyLoad"], function () {
    new _Carousel.init($(".carousel")), _Exposure.init($(".container img"), function (e) {
        var t = $(e).attr("data-src");
        $(e).attr("src", t)
    })
}), define("../app", function () {});