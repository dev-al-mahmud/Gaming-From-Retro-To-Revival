import {
    c as commonjsGlobal,
    g as getDefaultExportFromCjs,
    u as useFetch,
    a as createElementBlock,
    F as Fragment,
    r as renderList,
    b as createBaseVNode,
    w as withModifiers,
    o as openBlock,
    t as toDisplayString,
    d as createTextVNode,
    e as withDirectives,
    v as vModelText,
    f as unref,
    _ as _export_sfc,
    n as normalizeClass,
    h as createBlock,
    i as createCommentVNode,
    j as vModelCheckbox,
    k as createVNode,
    l as resolveComponent,
    m as ref,
    p as withCtx,
    M as Modal,
    q as onMounted,
    s as init,
    x as getCookie,
    y as watch,
    z as computed,
    A as vModelSelect,
    B as vModelRadio,
    C as clamp,
    D as truncate,
    E as normalizeStyle,
    G as Alert,
    H as lodashExports,
    I as setCookie,
    J as resolveDynamicComponent,
    K as vShow,
    L as withKeys,
    T as TransitionGroup,
    N as createApp,
    O as _sfc_main$w,
    P as _sfc_main$x,
    Q as Error$1,
    R as FormAlert,
    S as FormSelect,
    U as GameList,
    V as _sfc_main$y,
    W as Search,
    X as GroupedSubList,
    Y as _sfc_main$z,
    Z as ToggleDarkMode,
    $ as ApiRequest,
    a0 as Ce
} from "./shared.3fb97551.js";
var htmx_min = {
    exports: {}
};
(function(module) {
    (function(es, ze) {
        module.exports ? module.exports = ze() : es.htmx = es.htmx || ze()
    })(typeof self < "u" ? self : commonjsGlobal, function() {
        return function() {
            var Q = {
                    onLoad: F,
                    process: zt,
                    on: de,
                    off: ge,
                    trigger: ce,
                    ajax: Nr,
                    find: C,
                    findAll: f,
                    closest: v,
                    values: function(es, ze) {
                        var ts = dr(es, ze || "post");
                        return ts.values
                    },
                    remove: _,
                    addClass: z,
                    removeClass: n,
                    toggleClass: $,
                    takeClass: W,
                    defineExtension: Ur,
                    removeExtension: Br,
                    logAll: V,
                    logNone: j,
                    logger: null,
                    config: {
                        historyEnabled: !0,
                        historyCacheSize: 10,
                        refreshOnHistoryMiss: !1,
                        defaultSwapStyle: "innerHTML",
                        defaultSwapDelay: 0,
                        defaultSettleDelay: 20,
                        includeIndicatorStyles: !0,
                        indicatorClass: "htmx-indicator",
                        requestClass: "htmx-request",
                        addedClass: "htmx-added",
                        settlingClass: "htmx-settling",
                        swappingClass: "htmx-swapping",
                        allowEval: !0,
                        allowScriptTags: !0,
                        inlineScriptNonce: "",
                        attributesToSettle: ["class", "style", "width", "height"],
                        withCredentials: !1,
                        timeout: 0,
                        wsReconnectDelay: "full-jitter",
                        wsBinaryType: "blob",
                        disableSelector: "[hx-disable], [data-hx-disable]",
                        useTemplateFragments: !1,
                        scrollBehavior: "smooth",
                        defaultFocusScroll: !1,
                        getCacheBusterParam: !1,
                        globalViewTransitions: !1,
                        methodsThatUseUrlParams: ["get"],
                        selfRequestsOnly: !1,
                        ignoreTitle: !1,
                        scrollIntoViewOnBoost: !0,
                        triggerSpecsCache: null
                    },
                    parseInterval: d,
                    _: t,
                    createEventSource: function(es) {
                        return new EventSource(es, {
                            withCredentials: !0
                        })
                    },
                    createWebSocket: function(es) {
                        var ze = new WebSocket(es, []);
                        return ze.binaryType = Q.config.wsBinaryType, ze
                    },
                    version: "1.9.10"
                },
                r = {
                    addTriggerHandler: Lt,
                    bodyContains: se,
                    canAccessLocalStorage: U,
                    findThisElement: xe,
                    filterValues: yr,
                    hasAttribute: o,
                    getAttributeValue: te,
                    getClosestAttributeValue: ne,
                    getClosestMatch: c,
                    getExpressionVars: Hr,
                    getHeaders: xr,
                    getInputValues: dr,
                    getInternalData: ae,
                    getSwapSpecification: wr,
                    getTriggerSpecs: it,
                    getTarget: ye,
                    makeFragment: l,
                    mergeObjects: le,
                    makeSettleInfo: T,
                    oobSwap: Ee,
                    querySelectorExt: ue,
                    selectAndSwap: je,
                    settleImmediately: nr,
                    shouldCancel: ut,
                    triggerEvent: ce,
                    triggerErrorEvent: fe,
                    withExtensions: R
                },
                w = ["get", "post", "put", "delete", "patch"],
                i = w.map(function(es) {
                    return "[hx-" + es + "], [data-hx-" + es + "]"
                }).join(", "),
                S = e("head"),
                q = e("title"),
                H = e("svg", !0);

            function e(es, ze = !1) {
                return new RegExp(`<${es}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${es}>`, ze ? "gim" : "im")
            }

            function d(es) {
                if (es == null) return;
                let ze = NaN;
                return es.slice(-2) == "ms" ? ze = parseFloat(es.slice(0, -2)) : es.slice(-1) == "s" ? ze = parseFloat(es.slice(0, -1)) * 1e3 : es.slice(-1) == "m" ? ze = parseFloat(es.slice(0, -1)) * 1e3 * 60 : ze = parseFloat(es), isNaN(ze) ? void 0 : ze
            }

            function ee(es, ze) {
                return es.getAttribute && es.getAttribute(ze)
            }

            function o(es, ze) {
                return es.hasAttribute && (es.hasAttribute(ze) || es.hasAttribute("data-" + ze))
            }

            function te(es, ze) {
                return ee(es, ze) || ee(es, "data-" + ze)
            }

            function u(es) {
                return es.parentElement
            }

            function re() {
                return document
            }

            function c(es, ze) {
                for (; es && !ze(es);) es = u(es);
                return es || null
            }

            function L(es, ze, ts) {
                var os = te(ze, ts),
                    ss = te(ze, "hx-disinherit");
                return es !== ze && ss && (ss === "*" || ss.split(" ").indexOf(ts) >= 0) ? "unset" : os
            }

            function ne(es, ze) {
                var ts = null;
                if (c(es, function(os) {
                        return ts = L(es, os, ze)
                    }), ts !== "unset") return ts
            }

            function h(es, ze) {
                var ts = es.matches || es.matchesSelector || es.msMatchesSelector || es.mozMatchesSelector || es.webkitMatchesSelector || es.oMatchesSelector;
                return ts && ts.call(es, ze)
            }

            function A(es) {
                var ze = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ts = ze.exec(es);
                return ts ? ts[1].toLowerCase() : ""
            }

            function a(es, ze) {
                for (var ts = new DOMParser, os = ts.parseFromString(es, "text/html"), ss = os.body; ze > 0;) ze--, ss = ss.firstChild;
                return ss == null && (ss = re().createDocumentFragment()), ss
            }

            function N(es) {
                return /<body/.test(es)
            }

            function l(es) {
                var ze = !N(es),
                    ts = A(es),
                    os = es;
                if (ts === "head" && (os = os.replace(S, "")), Q.config.useTemplateFragments && ze) {
                    var ss = a("<body><template>" + os + "</template></body>", 0);
                    return ss.querySelector("template").content
                }
                switch (ts) {
                    case "thead":
                    case "tbody":
                    case "tfoot":
                    case "colgroup":
                    case "caption":
                        return a("<table>" + os + "</table>", 1);
                    case "col":
                        return a("<table><colgroup>" + os + "</colgroup></table>", 2);
                    case "tr":
                        return a("<table><tbody>" + os + "</tbody></table>", 2);
                    case "td":
                    case "th":
                        return a("<table><tbody><tr>" + os + "</tr></tbody></table>", 3);
                    case "script":
                    case "style":
                        return a("<div>" + os + "</div>", 1);
                    default:
                        return a(os, 0)
                }
            }

            function ie(es) {
                es && es()
            }

            function I(es, ze) {
                return Object.prototype.toString.call(es) === "[object " + ze + "]"
            }

            function k(es) {
                return I(es, "Function")
            }

            function P(es) {
                return I(es, "Object")
            }

            function ae(es) {
                var ze = "htmx-internal-data",
                    ts = es[ze];
                return ts || (ts = es[ze] = {}), ts
            }

            function M(es) {
                var ze = [];
                if (es)
                    for (var ts = 0; ts < es.length; ts++) ze.push(es[ts]);
                return ze
            }

            function oe(es, ze) {
                if (es)
                    for (var ts = 0; ts < es.length; ts++) ze(es[ts])
            }

            function X(es) {
                var ze = es.getBoundingClientRect(),
                    ts = ze.top,
                    os = ze.bottom;
                return ts < window.innerHeight && os >= 0
            }

            function se(es) {
                return es.getRootNode && es.getRootNode() instanceof window.ShadowRoot ? re().body.contains(es.getRootNode().host) : re().body.contains(es)
            }

            function D(es) {
                return es.trim().split(/\s+/)
            }

            function le(es, ze) {
                for (var ts in ze) ze.hasOwnProperty(ts) && (es[ts] = ze[ts]);
                return es
            }

            function E(es) {
                try {
                    return JSON.parse(es)
                } catch (ze) {
                    return b(ze), null
                }
            }

            function U() {
                var es = "htmx:localStorageTest";
                try {
                    return localStorage.setItem(es, es), localStorage.removeItem(es), !0
                } catch {
                    return !1
                }
            }

            function B(es) {
                try {
                    var ze = new URL(es);
                    return ze && (es = ze.pathname + ze.search), /^\/$/.test(es) || (es = es.replace(/\/+$/, "")), es
                } catch {
                    return es
                }
            }

            function t(e) {
                return Tr(re().body, function() {
                    return eval(e)
                })
            }

            function F(es) {
                var ze = Q.on("htmx:load", function(ts) {
                    es(ts.detail.elt)
                });
                return ze
            }

            function V() {
                Q.logger = function(es, ze, ts) {
                    console && console.log(ze, es, ts)
                }
            }

            function j() {
                Q.logger = null
            }

            function C(es, ze) {
                return ze ? es.querySelector(ze) : C(re(), es)
            }

            function f(es, ze) {
                return ze ? es.querySelectorAll(ze) : f(re(), es)
            }

            function _(es, ze) {
                es = g(es), ze ? setTimeout(function() {
                    _(es), es = null
                }, ze) : es.parentElement.removeChild(es)
            }

            function z(es, ze, ts) {
                es = g(es), ts ? setTimeout(function() {
                    z(es, ze), es = null
                }, ts) : es.classList && es.classList.add(ze)
            }

            function n(es, ze, ts) {
                es = g(es), ts ? setTimeout(function() {
                    n(es, ze), es = null
                }, ts) : es.classList && (es.classList.remove(ze), es.classList.length === 0 && es.removeAttribute("class"))
            }

            function $(es, ze) {
                es = g(es), es.classList.toggle(ze)
            }

            function W(es, ze) {
                es = g(es), oe(es.parentElement.children, function(ts) {
                    n(ts, ze)
                }), z(es, ze)
            }

            function v(es, ze) {
                if (es = g(es), es.closest) return es.closest(ze);
                do
                    if (es == null || h(es, ze)) return es; while (es = es && u(es));
                return null
            }

            function s(es, ze) {
                return es.substring(0, ze.length) === ze
            }

            function G(es, ze) {
                return es.substring(es.length - ze.length) === ze
            }

            function J(es) {
                var ze = es.trim();
                return s(ze, "<") && G(ze, "/>") ? ze.substring(1, ze.length - 2) : ze
            }

            function Z(es, ze) {
                return ze.indexOf("closest ") === 0 ? [v(es, J(ze.substr(8)))] : ze.indexOf("find ") === 0 ? [C(es, J(ze.substr(5)))] : ze === "next" ? [es.nextElementSibling] : ze.indexOf("next ") === 0 ? [K(es, J(ze.substr(5)))] : ze === "previous" ? [es.previousElementSibling] : ze.indexOf("previous ") === 0 ? [Y(es, J(ze.substr(9)))] : ze === "document" ? [document] : ze === "window" ? [window] : ze === "body" ? [document.body] : re().querySelectorAll(J(ze))
            }
            var K = function(es, ze) {
                    for (var ts = re().querySelectorAll(ze), os = 0; os < ts.length; os++) {
                        var ss = ts[os];
                        if (ss.compareDocumentPosition(es) === Node.DOCUMENT_POSITION_PRECEDING) return ss
                    }
                },
                Y = function(es, ze) {
                    for (var ts = re().querySelectorAll(ze), os = ts.length - 1; os >= 0; os--) {
                        var ss = ts[os];
                        if (ss.compareDocumentPosition(es) === Node.DOCUMENT_POSITION_FOLLOWING) return ss
                    }
                };

            function ue(es, ze) {
                return ze ? Z(es, ze)[0] : Z(re().body, es)[0]
            }

            function g(es) {
                return I(es, "String") ? C(es) : es
            }

            function ve(es, ze, ts) {
                return k(ze) ? {
                    target: re().body,
                    event: es,
                    listener: ze
                } : {
                    target: g(es),
                    event: ze,
                    listener: ts
                }
            }

            function de(es, ze, ts) {
                jr(function() {
                    var ss = ve(es, ze, ts);
                    ss.target.addEventListener(ss.event, ss.listener)
                });
                var os = k(ze);
                return os ? ze : ts
            }

            function ge(es, ze, ts) {
                return jr(function() {
                    var os = ve(es, ze, ts);
                    os.target.removeEventListener(os.event, os.listener)
                }), k(ze) ? ze : ts
            }
            var me = re().createElement("output");

            function pe(es, ze) {
                var ts = ne(es, ze);
                if (ts) {
                    if (ts === "this") return [xe(es, ze)];
                    var os = Z(es, ts);
                    return os.length === 0 ? (b('The selector "' + ts + '" on ' + ze + " returned no matches!"), [me]) : os
                }
            }

            function xe(es, ze) {
                return c(es, function(ts) {
                    return te(ts, ze) != null
                })
            }

            function ye(es) {
                var ze = ne(es, "hx-target");
                if (ze) return ze === "this" ? xe(es, "hx-target") : ue(es, ze);
                var ts = ae(es);
                return ts.boosted ? re().body : es
            }

            function be(es) {
                for (var ze = Q.config.attributesToSettle, ts = 0; ts < ze.length; ts++)
                    if (es === ze[ts]) return !0;
                return !1
            }

            function we(es, ze) {
                oe(es.attributes, function(ts) {
                    !ze.hasAttribute(ts.name) && be(ts.name) && es.removeAttribute(ts.name)
                }), oe(ze.attributes, function(ts) {
                    be(ts.name) && es.setAttribute(ts.name, ts.value)
                })
            }

            function Se(es, ze) {
                for (var ts = Fr(ze), os = 0; os < ts.length; os++) {
                    var ss = ts[os];
                    try {
                        if (ss.isInlineSwap(es)) return !0
                    } catch (rs) {
                        b(rs)
                    }
                }
                return es === "outerHTML"
            }

            function Ee(es, ze, ts) {
                var os = "#" + ee(ze, "id"),
                    ss = "outerHTML";
                es === "true" || (es.indexOf(":") > 0 ? (ss = es.substr(0, es.indexOf(":")), os = es.substr(es.indexOf(":") + 1, es.length)) : ss = es);
                var rs = re().querySelectorAll(os);
                return rs ? (oe(rs, function(is) {
                    var ns, as = ze.cloneNode(!0);
                    ns = re().createDocumentFragment(), ns.appendChild(as), Se(ss, is) || (ns = as);
                    var cs = {
                        shouldSwap: !0,
                        target: is,
                        fragment: ns
                    };
                    ce(is, "htmx:oobBeforeSwap", cs) && (is = cs.target, cs.shouldSwap && Fe(ss, is, is, ns, ts), oe(ts.elts, function(fs) {
                        ce(fs, "htmx:oobAfterSwap", cs)
                    }))
                }), ze.parentNode.removeChild(ze)) : (ze.parentNode.removeChild(ze), fe(re().body, "htmx:oobErrorNoTarget", {
                    content: ze
                })), es
            }

            function Ce(es, ze, ts) {
                var os = ne(es, "hx-select-oob");
                if (os)
                    for (var ss = os.split(","), rs = 0; rs < ss.length; rs++) {
                        var is = ss[rs].split(":", 2),
                            ns = is[0].trim();
                        ns.indexOf("#") === 0 && (ns = ns.substring(1));
                        var as = is[1] || "true",
                            cs = ze.querySelector("#" + ns);
                        cs && Ee(as, cs, ts)
                    }
                oe(f(ze, "[hx-swap-oob], [data-hx-swap-oob]"), function(fs) {
                    var vs = te(fs, "hx-swap-oob");
                    vs != null && Ee(vs, fs, ts)
                })
            }

            function Re(es) {
                oe(f(es, "[hx-preserve], [data-hx-preserve]"), function(ze) {
                    var ts = te(ze, "id"),
                        os = re().getElementById(ts);
                    os != null && ze.parentNode.replaceChild(os, ze)
                })
            }

            function Te(es, ze, ts) {
                oe(ze.querySelectorAll("[id]"), function(os) {
                    var ss = ee(os, "id");
                    if (ss && ss.length > 0) {
                        var rs = ss.replace("'", "\\'"),
                            is = os.tagName.replace(":", "\\:"),
                            ns = es.querySelector(is + "[id='" + rs + "']");
                        if (ns && ns !== es) {
                            var as = os.cloneNode();
                            we(os, ns), ts.tasks.push(function() {
                                we(os, as)
                            })
                        }
                    }
                })
            }

            function Oe(es) {
                return function() {
                    n(es, Q.config.addedClass), zt(es), Nt(es), qe(es), ce(es, "htmx:load")
                }
            }

            function qe(es) {
                var ze = "[autofocus]",
                    ts = h(es, ze) ? es : es.querySelector(ze);
                ts != null && ts.focus()
            }

            function m(es, ze, ts, os) {
                for (Te(es, ts, os); ts.childNodes.length > 0;) {
                    var ss = ts.firstChild;
                    z(ss, Q.config.addedClass), es.insertBefore(ss, ze), ss.nodeType !== Node.TEXT_NODE && ss.nodeType !== Node.COMMENT_NODE && os.tasks.push(Oe(ss))
                }
            }

            function He(es, ze) {
                for (var ts = 0; ts < es.length;) ze = (ze << 5) - ze + es.charCodeAt(ts++) | 0;
                return ze
            }

            function Le(es) {
                var ze = 0;
                if (es.attributes)
                    for (var ts = 0; ts < es.attributes.length; ts++) {
                        var os = es.attributes[ts];
                        os.value && (ze = He(os.name, ze), ze = He(os.value, ze))
                    }
                return ze
            }

            function Ae(es) {
                var ze = ae(es);
                if (ze.onHandlers) {
                    for (var ts = 0; ts < ze.onHandlers.length; ts++) {
                        const os = ze.onHandlers[ts];
                        es.removeEventListener(os.event, os.listener)
                    }
                    delete ze.onHandlers
                }
            }

            function Ne(es) {
                var ze = ae(es);
                ze.timeout && clearTimeout(ze.timeout), ze.webSocket && ze.webSocket.close(), ze.sseEventSource && ze.sseEventSource.close(), ze.listenerInfos && oe(ze.listenerInfos, function(ts) {
                    ts.on && ts.on.removeEventListener(ts.trigger, ts.listener)
                }), Ae(es), oe(Object.keys(ze), function(ts) {
                    delete ze[ts]
                })
            }

            function p(es) {
                ce(es, "htmx:beforeCleanupElement"), Ne(es), es.children && oe(es.children, function(ze) {
                    p(ze)
                })
            }

            function Ie(es, ze, ts) {
                if (es.tagName === "BODY") return Ue(es, ze, ts);
                var os, ss = es.previousSibling;
                for (m(u(es), es, ze, ts), ss == null ? os = u(es).firstChild : os = ss.nextSibling, ts.elts = ts.elts.filter(function(rs) {
                        return rs != es
                    }); os && os !== es;) os.nodeType === Node.ELEMENT_NODE && ts.elts.push(os), os = os.nextElementSibling;
                p(es), u(es).removeChild(es)
            }

            function ke(es, ze, ts) {
                return m(es, es.firstChild, ze, ts)
            }

            function Pe(es, ze, ts) {
                return m(u(es), es, ze, ts)
            }

            function Me(es, ze, ts) {
                return m(es, null, ze, ts)
            }

            function Xe(es, ze, ts) {
                return m(u(es), es.nextSibling, ze, ts)
            }

            function De(es, ze, ts) {
                return p(es), u(es).removeChild(es)
            }

            function Ue(es, ze, ts) {
                var os = es.firstChild;
                if (m(es, os, ze, ts), os) {
                    for (; os.nextSibling;) p(os.nextSibling), es.removeChild(os.nextSibling);
                    p(os), es.removeChild(os)
                }
            }

            function Be(es, ze, ts) {
                var os = ts || ne(es, "hx-select");
                if (os) {
                    var ss = re().createDocumentFragment();
                    oe(ze.querySelectorAll(os), function(rs) {
                        ss.appendChild(rs)
                    }), ze = ss
                }
                return ze
            }

            function Fe(es, ze, ts, os, ss) {
                switch (es) {
                    case "none":
                        return;
                    case "outerHTML":
                        Ie(ts, os, ss);
                        return;
                    case "afterbegin":
                        ke(ts, os, ss);
                        return;
                    case "beforebegin":
                        Pe(ts, os, ss);
                        return;
                    case "beforeend":
                        Me(ts, os, ss);
                        return;
                    case "afterend":
                        Xe(ts, os, ss);
                        return;
                    case "delete":
                        De(ts);
                        return;
                    default:
                        for (var rs = Fr(ze), is = 0; is < rs.length; is++) {
                            var ns = rs[is];
                            try {
                                var as = ns.handleSwap(es, ts, os, ss);
                                if (as) {
                                    if (typeof as.length < "u")
                                        for (var cs = 0; cs < as.length; cs++) {
                                            var fs = as[cs];
                                            fs.nodeType !== Node.TEXT_NODE && fs.nodeType !== Node.COMMENT_NODE && ss.tasks.push(Oe(fs))
                                        }
                                    return
                                }
                            } catch (vs) {
                                b(vs)
                            }
                        }
                        es === "innerHTML" ? Ue(ts, os, ss) : Fe(Q.config.defaultSwapStyle, ze, ts, os, ss)
                }
            }

            function Ve(es) {
                if (es.indexOf("<title") > -1) {
                    var ze = es.replace(H, ""),
                        ts = ze.match(q);
                    if (ts) return ts[2]
                }
            }

            function je(es, ze, ts, os, ss, rs) {
                ss.title = Ve(os);
                var is = l(os);
                if (is) return Ce(ts, is, ss), is = Be(ts, is, rs), Re(is), Fe(es, ts, ze, is, ss)
            }

            function _e(es, ze, ts) {
                var os = es.getResponseHeader(ze);
                if (os.indexOf("{") === 0) {
                    var ss = E(os);
                    for (var rs in ss)
                        if (ss.hasOwnProperty(rs)) {
                            var is = ss[rs];
                            P(is) || (is = {
                                value: is
                            }), ce(ts, rs, is)
                        }
                } else
                    for (var ns = os.split(","), as = 0; as < ns.length; as++) ce(ts, ns[as].trim(), [])
            }
            var x = /[\s,]/,
                $e = /[_$a-zA-Z]/,
                We = /[_$a-zA-Z0-9]/,
                Ge = ['"', "'", "/"],
                Je = /[^\s]/,
                Ze = /[{(]/,
                Ke = /[})]/;

            function Ye(es) {
                for (var ze = [], ts = 0; ts < es.length;) {
                    if ($e.exec(es.charAt(ts))) {
                        for (var os = ts; We.exec(es.charAt(ts + 1));) ts++;
                        ze.push(es.substr(os, ts - os + 1))
                    } else if (Ge.indexOf(es.charAt(ts)) !== -1) {
                        var ss = es.charAt(ts),
                            os = ts;
                        for (ts++; ts < es.length && es.charAt(ts) !== ss;) es.charAt(ts) === "\\" && ts++, ts++;
                        ze.push(es.substr(os, ts - os + 1))
                    } else {
                        var rs = es.charAt(ts);
                        ze.push(rs)
                    }
                    ts++
                }
                return ze
            }

            function Qe(es, ze, ts) {
                return $e.exec(es.charAt(0)) && es !== "true" && es !== "false" && es !== "this" && es !== ts && ze !== "."
            }

            function et(es, ze, ts) {
                if (ze[0] === "[") {
                    ze.shift();
                    for (var os = 1, ss = " return (function(" + ts + "){ return (", rs = null; ze.length > 0;) {
                        var is = ze[0];
                        if (is === "]") {
                            if (os--, os === 0) {
                                rs === null && (ss = ss + "true"), ze.shift(), ss += ")})";
                                try {
                                    var ns = Tr(es, function() {
                                        return Function(ss)()
                                    }, function() {
                                        return !0
                                    });
                                    return ns.source = ss, ns
                                } catch (as) {
                                    return fe(re().body, "htmx:syntax:error", {
                                        error: as,
                                        source: ss
                                    }), null
                                }
                            }
                        } else is === "[" && os++;
                        Qe(is, rs, ts) ? ss += "((" + ts + "." + is + ") ? (" + ts + "." + is + ") : (window." + is + "))" : ss = ss + is, rs = ze.shift()
                    }
                }
            }

            function y(es, ze) {
                for (var ts = ""; es.length > 0 && !ze.test(es[0]);) ts += es.shift();
                return ts
            }

            function tt(es) {
                var ze;
                return es.length > 0 && Ze.test(es[0]) ? (es.shift(), ze = y(es, Ke).trim(), es.shift()) : ze = y(es, x), ze
            }
            var rt = "input, textarea, select";

            function nt(es, ze, ts) {
                var os = [],
                    ss = Ye(ze);
                do {
                    y(ss, Je);
                    var rs = ss.length,
                        is = y(ss, /[,\[\s]/);
                    if (is !== "")
                        if (is === "every") {
                            var ns = {
                                trigger: "every"
                            };
                            y(ss, Je), ns.pollInterval = d(y(ss, /[,\[\s]/)), y(ss, Je);
                            var as = et(es, ss, "event");
                            as && (ns.eventFilter = as), os.push(ns)
                        } else if (is.indexOf("sse:") === 0) os.push({
                        trigger: "sse",
                        sseEvent: is.substr(4)
                    });
                    else {
                        var cs = {
                                trigger: is
                            },
                            as = et(es, ss, "event");
                        for (as && (cs.eventFilter = as); ss.length > 0 && ss[0] !== ",";) {
                            y(ss, Je);
                            var fs = ss.shift();
                            if (fs === "changed") cs.changed = !0;
                            else if (fs === "once") cs.once = !0;
                            else if (fs === "consume") cs.consume = !0;
                            else if (fs === "delay" && ss[0] === ":") ss.shift(), cs.delay = d(y(ss, x));
                            else if (fs === "from" && ss[0] === ":") {
                                if (ss.shift(), Ze.test(ss[0])) var vs = tt(ss);
                                else {
                                    var vs = y(ss, x);
                                    if (vs === "closest" || vs === "find" || vs === "next" || vs === "previous") {
                                        ss.shift();
                                        var ps = tt(ss);
                                        ps.length > 0 && (vs += " " + ps)
                                    }
                                }
                                cs.from = vs
                            } else fs === "target" && ss[0] === ":" ? (ss.shift(), cs.target = tt(ss)) : fs === "throttle" && ss[0] === ":" ? (ss.shift(), cs.throttle = d(y(ss, x))) : fs === "queue" && ss[0] === ":" ? (ss.shift(), cs.queue = y(ss, x)) : fs === "root" && ss[0] === ":" ? (ss.shift(), cs[fs] = tt(ss)) : fs === "threshold" && ss[0] === ":" ? (ss.shift(), cs[fs] = y(ss, x)) : fe(es, "htmx:syntax:error", {
                                token: ss.shift()
                            })
                        }
                        os.push(cs)
                    }
                    ss.length === rs && fe(es, "htmx:syntax:error", {
                        token: ss.shift()
                    }), y(ss, Je)
                } while (ss[0] === "," && ss.shift());
                return ts && (ts[ze] = os), os
            }

            function it(es) {
                var ze = te(es, "hx-trigger"),
                    ts = [];
                if (ze) {
                    var os = Q.config.triggerSpecsCache;
                    ts = os && os[ze] || nt(es, ze, os)
                }
                return ts.length > 0 ? ts : h(es, "form") ? [{
                    trigger: "submit"
                }] : h(es, 'input[type="button"], input[type="submit"]') ? [{
                    trigger: "click"
                }] : h(es, rt) ? [{
                    trigger: "change"
                }] : [{
                    trigger: "click"
                }]
            }

            function at(es) {
                ae(es).cancelled = !0
            }

            function ot(es, ze, ts) {
                var os = ae(es);
                os.timeout = setTimeout(function() {
                    se(es) && os.cancelled !== !0 && (ct(ts, es, Wt("hx:poll:trigger", {
                        triggerSpec: ts,
                        target: es
                    })) || ze(es), ot(es, ze, ts))
                }, ts.pollInterval)
            }

            function st(es) {
                return location.hostname === es.hostname && ee(es, "href") && ee(es, "href").indexOf("#") !== 0
            }

            function lt(es, ze, ts) {
                if (es.tagName === "A" && st(es) && (es.target === "" || es.target === "_self") || es.tagName === "FORM") {
                    ze.boosted = !0;
                    var os, ss;
                    if (es.tagName === "A") os = "get", ss = ee(es, "href");
                    else {
                        var rs = ee(es, "method");
                        os = rs ? rs.toLowerCase() : "get", ss = ee(es, "action")
                    }
                    ts.forEach(function(is) {
                        ht(es, function(ns, as) {
                            if (v(ns, Q.config.disableSelector)) {
                                p(ns);
                                return
                            }
                            he(os, ss, ns, as)
                        }, ze, is, !0)
                    })
                }
            }

            function ut(es, ze) {
                return !!((es.type === "submit" || es.type === "click") && (ze.tagName === "FORM" || h(ze, 'input[type="submit"], button') && v(ze, "form") !== null || ze.tagName === "A" && ze.href && (ze.getAttribute("href") === "#" || ze.getAttribute("href").indexOf("#") !== 0)))
            }

            function ft(es, ze) {
                return ae(es).boosted && es.tagName === "A" && ze.type === "click" && (ze.ctrlKey || ze.metaKey)
            }

            function ct(es, ze, ts) {
                var os = es.eventFilter;
                if (os) try {
                    return os.call(ze, ts) !== !0
                } catch (ss) {
                    return fe(re().body, "htmx:eventFilter:error", {
                        error: ss,
                        source: os.source
                    }), !0
                }
                return !1
            }

            function ht(es, ze, ts, os, ss) {
                var rs = ae(es),
                    is;
                os.from ? is = Z(es, os.from) : is = [es], os.changed && is.forEach(function(ns) {
                    var as = ae(ns);
                    as.lastValue = ns.value
                }), oe(is, function(ns) {
                    var as = function(cs) {
                        if (!se(es)) {
                            ns.removeEventListener(os.trigger, as);
                            return
                        }
                        if (!ft(es, cs) && ((ss || ut(cs, es)) && cs.preventDefault(), !ct(os, es, cs))) {
                            var fs = ae(cs);
                            if (fs.triggerSpec = os, fs.handledFor == null && (fs.handledFor = []), fs.handledFor.indexOf(es) < 0) {
                                if (fs.handledFor.push(es), os.consume && cs.stopPropagation(), os.target && cs.target && !h(cs.target, os.target)) return;
                                if (os.once) {
                                    if (rs.triggeredOnce) return;
                                    rs.triggeredOnce = !0
                                }
                                if (os.changed) {
                                    var vs = ae(ns);
                                    if (vs.lastValue === ns.value) return;
                                    vs.lastValue = ns.value
                                }
                                if (rs.delayed && clearTimeout(rs.delayed), rs.throttle) return;
                                os.throttle > 0 ? rs.throttle || (ze(es, cs), rs.throttle = setTimeout(function() {
                                    rs.throttle = null
                                }, os.throttle)) : os.delay > 0 ? rs.delayed = setTimeout(function() {
                                    ze(es, cs)
                                }, os.delay) : (ce(es, "htmx:trigger"), ze(es, cs))
                            }
                        }
                    };
                    ts.listenerInfos == null && (ts.listenerInfos = []), ts.listenerInfos.push({
                        trigger: os.trigger,
                        listener: as,
                        on: ns
                    }), ns.addEventListener(os.trigger, as)
                })
            }
            var vt = !1,
                dt = null;

            function gt() {
                dt || (dt = function() {
                    vt = !0
                }, window.addEventListener("scroll", dt), setInterval(function() {
                    vt && (vt = !1, oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(es) {
                        mt(es)
                    }))
                }, 200))
            }

            function mt(es) {
                if (!o(es, "data-hx-revealed") && X(es)) {
                    es.setAttribute("data-hx-revealed", "true");
                    var ze = ae(es);
                    ze.initHash ? ce(es, "revealed") : es.addEventListener("htmx:afterProcessNode", function(ts) {
                        ce(es, "revealed")
                    }, {
                        once: !0
                    })
                }
            }

            function pt(es, ze, ts) {
                for (var os = D(ts), ss = 0; ss < os.length; ss++) {
                    var rs = os[ss].split(/:(.+)/);
                    rs[0] === "connect" && xt(es, rs[1], 0), rs[0] === "send" && bt(es)
                }
            }

            function xt(es, ze, ts) {
                if (se(es)) {
                    if (ze.indexOf("/") == 0) {
                        var os = location.hostname + (location.port ? ":" + location.port : "");
                        location.protocol == "https:" ? ze = "wss://" + os + ze : location.protocol == "http:" && (ze = "ws://" + os + ze)
                    }
                    var ss = Q.createWebSocket(ze);
                    ss.onerror = function(rs) {
                        fe(es, "htmx:wsError", {
                            error: rs,
                            socket: ss
                        }), yt(es)
                    }, ss.onclose = function(rs) {
                        if ([1006, 1012, 1013].indexOf(rs.code) >= 0) {
                            var is = wt(ts);
                            setTimeout(function() {
                                xt(es, ze, ts + 1)
                            }, is)
                        }
                    }, ss.onopen = function(rs) {
                        ts = 0
                    }, ae(es).webSocket = ss, ss.addEventListener("message", function(rs) {
                        if (!yt(es)) {
                            var is = rs.data;
                            R(es, function(ps) {
                                is = ps.transformResponse(is, null, es)
                            });
                            for (var ns = T(es), as = l(is), cs = M(as.children), fs = 0; fs < cs.length; fs++) {
                                var vs = cs[fs];
                                Ee(te(vs, "hx-swap-oob") || "true", vs, ns)
                            }
                            nr(ns.tasks)
                        }
                    })
                }
            }

            function yt(es) {
                if (!se(es)) return ae(es).webSocket.close(), !0
            }

            function bt(es) {
                var ze = c(es, function(ts) {
                    return ae(ts).webSocket != null
                });
                ze ? es.addEventListener(it(es)[0].trigger, function(ts) {
                    var os = ae(ze).webSocket,
                        ss = xr(es, ze),
                        rs = dr(es, "post"),
                        is = rs.errors,
                        ns = rs.values,
                        as = Hr(es),
                        cs = le(ns, as),
                        fs = yr(cs, es);
                    if (fs.HEADERS = ss, is && is.length > 0) {
                        ce(es, "htmx:validation:halted", is);
                        return
                    }
                    os.send(JSON.stringify(fs)), ut(ts, es) && ts.preventDefault()
                }) : fe(es, "htmx:noWebSocketSourceError")
            }

            function wt(es) {
                var ze = Q.config.wsReconnectDelay;
                if (typeof ze == "function") return ze(es);
                if (ze === "full-jitter") {
                    var ts = Math.min(es, 6),
                        os = 1e3 * Math.pow(2, ts);
                    return os * Math.random()
                }
                b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')
            }

            function St(es, ze, ts) {
                for (var os = D(ts), ss = 0; ss < os.length; ss++) {
                    var rs = os[ss].split(/:(.+)/);
                    rs[0] === "connect" && Et(es, rs[1]), rs[0] === "swap" && Ct(es, rs[1])
                }
            }

            function Et(es, ze) {
                var ts = Q.createEventSource(ze);
                ts.onerror = function(os) {
                    fe(es, "htmx:sseError", {
                        error: os,
                        source: ts
                    }), Tt(es)
                }, ae(es).sseEventSource = ts
            }

            function Ct(es, ze) {
                var ts = c(es, Ot);
                if (ts) {
                    var os = ae(ts).sseEventSource,
                        ss = function(rs) {
                            if (!Tt(ts)) {
                                if (!se(es)) {
                                    os.removeEventListener(ze, ss);
                                    return
                                }
                                var is = rs.data;
                                R(es, function(fs) {
                                    is = fs.transformResponse(is, null, es)
                                });
                                var ns = wr(es),
                                    as = ye(es),
                                    cs = T(es);
                                je(ns.swapStyle, as, es, is, cs), nr(cs.tasks), ce(es, "htmx:sseMessage", rs)
                            }
                        };
                    ae(es).sseListener = ss, os.addEventListener(ze, ss)
                } else fe(es, "htmx:noSSESourceError")
            }

            function Rt(es, ze, ts) {
                var os = c(es, Ot);
                if (os) {
                    var ss = ae(os).sseEventSource,
                        rs = function() {
                            Tt(os) || (se(es) ? ze(es) : ss.removeEventListener(ts, rs))
                        };
                    ae(es).sseListener = rs, ss.addEventListener(ts, rs)
                } else fe(es, "htmx:noSSESourceError")
            }

            function Tt(es) {
                if (!se(es)) return ae(es).sseEventSource.close(), !0
            }

            function Ot(es) {
                return ae(es).sseEventSource != null
            }

            function qt(es, ze, ts, os) {
                var ss = function() {
                    ts.loaded || (ts.loaded = !0, ze(es))
                };
                os > 0 ? setTimeout(ss, os) : ss()
            }

            function Ht(es, ze, ts) {
                var os = !1;
                return oe(w, function(ss) {
                    if (o(es, "hx-" + ss)) {
                        var rs = te(es, "hx-" + ss);
                        os = !0, ze.path = rs, ze.verb = ss, ts.forEach(function(is) {
                            Lt(es, is, ze, function(ns, as) {
                                if (v(ns, Q.config.disableSelector)) {
                                    p(ns);
                                    return
                                }
                                he(ss, rs, ns, as)
                            })
                        })
                    }
                }), os
            }

            function Lt(es, ze, ts, os) {
                if (ze.sseEvent) Rt(es, os, ze.sseEvent);
                else if (ze.trigger === "revealed") gt(), ht(es, os, ts, ze), mt(es);
                else if (ze.trigger === "intersect") {
                    var ss = {};
                    ze.root && (ss.root = ue(es, ze.root)), ze.threshold && (ss.threshold = parseFloat(ze.threshold));
                    var rs = new IntersectionObserver(function(is) {
                        for (var ns = 0; ns < is.length; ns++) {
                            var as = is[ns];
                            if (as.isIntersecting) {
                                ce(es, "intersect");
                                break
                            }
                        }
                    }, ss);
                    rs.observe(es), ht(es, os, ts, ze)
                } else ze.trigger === "load" ? ct(ze, es, Wt("load", {
                    elt: es
                })) || qt(es, os, ts, ze.delay) : ze.pollInterval > 0 ? (ts.polling = !0, ot(es, os, ze)) : ht(es, os, ts, ze)
            }

            function At(es) {
                if (Q.config.allowScriptTags && (es.type === "text/javascript" || es.type === "module" || es.type === "")) {
                    var ze = re().createElement("script");
                    oe(es.attributes, function(os) {
                        ze.setAttribute(os.name, os.value)
                    }), ze.textContent = es.textContent, ze.async = !1, Q.config.inlineScriptNonce && (ze.nonce = Q.config.inlineScriptNonce);
                    var ts = es.parentElement;
                    try {
                        ts.insertBefore(ze, es)
                    } catch (os) {
                        b(os)
                    } finally {
                        es.parentElement && es.parentElement.removeChild(es)
                    }
                }
            }

            function Nt(es) {
                h(es, "script") && At(es), oe(f(es, "script"), function(ze) {
                    At(ze)
                })
            }

            function It(es) {
                for (var ze = es.attributes, ts = 0; ts < ze.length; ts++) {
                    var os = ze[ts].name;
                    if (s(os, "hx-on:") || s(os, "data-hx-on:") || s(os, "hx-on-") || s(os, "data-hx-on-")) return !0
                }
                return !1
            }

            function kt(es) {
                var ze = null,
                    ts = [];
                if (It(es) && ts.push(es), document.evaluate)
                    for (var os = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', es); ze = os.iterateNext();) ts.push(ze);
                else
                    for (var ss = es.getElementsByTagName("*"), rs = 0; rs < ss.length; rs++) It(ss[rs]) && ts.push(ss[rs]);
                return ts
            }

            function Pt(es) {
                if (es.querySelectorAll) {
                    var ze = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",
                        ts = es.querySelectorAll(i + ze + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
                    return ts
                } else return []
            }

            function Mt(es) {
                var ze = v(es.target, "button, input[type='submit']"),
                    ts = Dt(es);
                ts && (ts.lastButtonClicked = ze)
            }

            function Xt(es) {
                var ze = Dt(es);
                ze && (ze.lastButtonClicked = null)
            }

            function Dt(es) {
                var ze = v(es.target, "button, input[type='submit']");
                if (ze) {
                    var ts = g("#" + ee(ze, "form")) || v(ze, "form");
                    if (ts) return ae(ts)
                }
            }

            function Ut(es) {
                es.addEventListener("click", Mt), es.addEventListener("focusin", Mt), es.addEventListener("focusout", Xt)
            }

            function Bt(es) {
                for (var ze = Ye(es), ts = 0, os = 0; os < ze.length; os++) {
                    const ss = ze[os];
                    ss === "{" ? ts++ : ss === "}" && ts--
                }
                return ts
            }

            function Ft(es, ze, ts) {
                var os = ae(es);
                Array.isArray(os.onHandlers) || (os.onHandlers = []);
                var ss, rs = function(is) {
                    return Tr(es, function() {
                        ss || (ss = new Function("event", ts)), ss.call(es, is)
                    })
                };
                es.addEventListener(ze, rs), os.onHandlers.push({
                    event: ze,
                    listener: rs
                })
            }

            function Vt(es) {
                var ze = te(es, "hx-on");
                if (ze) {
                    for (var ts = {}, os = ze.split(`
`), ss = null, rs = 0; os.length > 0;) {
                        var is = os.shift(),
                            ns = is.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                        rs === 0 && ns ? (is.split(":"), ss = ns[1].slice(0, -1), ts[ss] = ns[2]) : ts[ss] += is, rs += Bt(is)
                    }
                    for (var as in ts) Ft(es, as, ts[as])
                }
            }

            function jt(es) {
                Ae(es);
                for (var ze = 0; ze < es.attributes.length; ze++) {
                    var ts = es.attributes[ze].name,
                        os = es.attributes[ze].value;
                    if (s(ts, "hx-on") || s(ts, "data-hx-on")) {
                        var ss = ts.indexOf("-on") + 3,
                            rs = ts.slice(ss, ss + 1);
                        if (rs === "-" || rs === ":") {
                            var is = ts.slice(ss + 1);
                            s(is, ":") ? is = "htmx" + is : s(is, "-") ? is = "htmx:" + is.slice(1) : s(is, "htmx-") && (is = "htmx:" + is.slice(5)), Ft(es, is, os)
                        }
                    }
                }
            }

            function _t(es) {
                if (v(es, Q.config.disableSelector)) {
                    p(es);
                    return
                }
                var ze = ae(es);
                if (ze.initHash !== Le(es)) {
                    Ne(es), ze.initHash = Le(es), Vt(es), ce(es, "htmx:beforeProcessNode"), es.value && (ze.lastValue = es.value);
                    var ts = it(es),
                        os = Ht(es, ze, ts);
                    os || (ne(es, "hx-boost") === "true" ? lt(es, ze, ts) : o(es, "hx-trigger") && ts.forEach(function(is) {
                        Lt(es, is, ze, function() {})
                    })), (es.tagName === "FORM" || ee(es, "type") === "submit" && o(es, "form")) && Ut(es);
                    var ss = te(es, "hx-sse");
                    ss && St(es, ze, ss);
                    var rs = te(es, "hx-ws");
                    rs && pt(es, ze, rs), ce(es, "htmx:afterProcessNode")
                }
            }

            function zt(es) {
                if (es = g(es), v(es, Q.config.disableSelector)) {
                    p(es);
                    return
                }
                _t(es), oe(Pt(es), function(ze) {
                    _t(ze)
                }), oe(kt(es), jt)
            }

            function $t(es) {
                return es.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function Wt(es, ze) {
                var ts;
                return window.CustomEvent && typeof window.CustomEvent == "function" ? ts = new CustomEvent(es, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ze
                }) : (ts = re().createEvent("CustomEvent"), ts.initCustomEvent(es, !0, !0, ze)), ts
            }

            function fe(es, ze, ts) {
                ce(es, ze, le({
                    error: ze
                }, ts))
            }

            function Gt(es) {
                return es === "htmx:afterProcessNode"
            }

            function R(es, ze) {
                oe(Fr(es), function(ts) {
                    try {
                        ze(ts)
                    } catch (os) {
                        b(os)
                    }
                })
            }

            function b(es) {
                console.error ? console.error(es) : console.log && console.log("ERROR: ", es)
            }

            function ce(es, ze, ts) {
                es = g(es), ts == null && (ts = {}), ts.elt = es;
                var os = Wt(ze, ts);
                Q.logger && !Gt(ze) && Q.logger(es, ze, ts), ts.error && (b(ts.error), ce(es, "htmx:error", {
                    errorInfo: ts
                }));
                var ss = es.dispatchEvent(os),
                    rs = $t(ze);
                if (ss && rs !== ze) {
                    var is = Wt(rs, os.detail);
                    ss = ss && es.dispatchEvent(is)
                }
                return R(es, function(ns) {
                    ss = ss && ns.onEvent(ze, os) !== !1 && !os.defaultPrevented
                }), ss
            }
            var Jt = location.pathname + location.search;

            function Zt() {
                var es = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
                return es || re().body
            }

            function Kt(es, ze, ts, os) {
                if (U()) {
                    if (Q.config.historyCacheSize <= 0) {
                        localStorage.removeItem("htmx-history-cache");
                        return
                    }
                    es = B(es);
                    for (var ss = E(localStorage.getItem("htmx-history-cache")) || [], rs = 0; rs < ss.length; rs++)
                        if (ss[rs].url === es) {
                            ss.splice(rs, 1);
                            break
                        }
                    var is = {
                        url: es,
                        content: ze,
                        title: ts,
                        scroll: os
                    };
                    for (ce(re().body, "htmx:historyItemCreated", {
                            item: is,
                            cache: ss
                        }), ss.push(is); ss.length > Q.config.historyCacheSize;) ss.shift();
                    for (; ss.length > 0;) try {
                        localStorage.setItem("htmx-history-cache", JSON.stringify(ss));
                        break
                    } catch (ns) {
                        fe(re().body, "htmx:historyCacheError", {
                            cause: ns,
                            cache: ss
                        }), ss.shift()
                    }
                }
            }

            function Yt(es) {
                if (!U()) return null;
                es = B(es);
                for (var ze = E(localStorage.getItem("htmx-history-cache")) || [], ts = 0; ts < ze.length; ts++)
                    if (ze[ts].url === es) return ze[ts];
                return null
            }

            function Qt(es) {
                var ze = Q.config.requestClass,
                    ts = es.cloneNode(!0);
                return oe(f(ts, "." + ze), function(os) {
                    n(os, ze)
                }), ts.innerHTML
            }

            function er() {
                var es = Zt(),
                    ze = Jt || location.pathname + location.search,
                    ts;
                try {
                    ts = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]')
                } catch {
                    ts = re().querySelector('[hx-history="false"],[data-hx-history="false"]')
                }
                ts || (ce(re().body, "htmx:beforeHistorySave", {
                    path: ze,
                    historyElt: es
                }), Kt(ze, Qt(es), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({
                    htmx: !0
                }, re().title, window.location.href)
            }

            function tr(es) {
                Q.config.getCacheBusterParam && (es = es.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (G(es, "&") || G(es, "?")) && (es = es.slice(0, -1))), Q.config.historyEnabled && history.pushState({
                    htmx: !0
                }, "", es), Jt = es
            }

            function rr(es) {
                Q.config.historyEnabled && history.replaceState({
                    htmx: !0
                }, "", es), Jt = es
            }

            function nr(es) {
                oe(es, function(ze) {
                    ze.call()
                })
            }

            function ir(es) {
                var ze = new XMLHttpRequest,
                    ts = {
                        path: es,
                        xhr: ze
                    };
                ce(re().body, "htmx:historyCacheMiss", ts), ze.open("GET", es, !0), ze.setRequestHeader("HX-Request", "true"), ze.setRequestHeader("HX-History-Restore-Request", "true"), ze.setRequestHeader("HX-Current-URL", re().location.href), ze.onload = function() {
                    if (this.status >= 200 && this.status < 400) {
                        ce(re().body, "htmx:historyCacheMissLoad", ts);
                        var os = l(this.response);
                        os = os.querySelector("[hx-history-elt],[data-hx-history-elt]") || os;
                        var ss = Zt(),
                            rs = T(ss),
                            is = Ve(this.response);
                        if (is) {
                            var ns = C("title");
                            ns ? ns.innerHTML = is : window.document.title = is
                        }
                        Ue(ss, os, rs), nr(rs.tasks), Jt = es, ce(re().body, "htmx:historyRestore", {
                            path: es,
                            cacheMiss: !0,
                            serverResponse: this.response
                        })
                    } else fe(re().body, "htmx:historyCacheMissLoadError", ts)
                }, ze.send()
            }

            function ar(es) {
                er(), es = es || location.pathname + location.search;
                var ze = Yt(es);
                if (ze) {
                    var ts = l(ze.content),
                        os = Zt(),
                        ss = T(os);
                    Ue(os, ts, ss), nr(ss.tasks), document.title = ze.title, setTimeout(function() {
                        window.scrollTo(0, ze.scroll)
                    }, 0), Jt = es, ce(re().body, "htmx:historyRestore", {
                        path: es,
                        item: ze
                    })
                } else Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(es)
            }

            function or(es) {
                var ze = pe(es, "hx-indicator");
                return ze == null && (ze = [es]), oe(ze, function(ts) {
                    var os = ae(ts);
                    os.requestCount = (os.requestCount || 0) + 1, ts.classList.add.call(ts.classList, Q.config.requestClass)
                }), ze
            }

            function sr(es) {
                var ze = pe(es, "hx-disabled-elt");
                return ze == null && (ze = []), oe(ze, function(ts) {
                    var os = ae(ts);
                    os.requestCount = (os.requestCount || 0) + 1, ts.setAttribute("disabled", "")
                }), ze
            }

            function lr(es, ze) {
                oe(es, function(ts) {
                    var os = ae(ts);
                    os.requestCount = (os.requestCount || 0) - 1, os.requestCount === 0 && ts.classList.remove.call(ts.classList, Q.config.requestClass)
                }), oe(ze, function(ts) {
                    var os = ae(ts);
                    os.requestCount = (os.requestCount || 0) - 1, os.requestCount === 0 && ts.removeAttribute("disabled")
                })
            }

            function ur(es, ze) {
                for (var ts = 0; ts < es.length; ts++) {
                    var os = es[ts];
                    if (os.isSameNode(ze)) return !0
                }
                return !1
            }

            function fr(es) {
                return es.name === "" || es.name == null || es.disabled || v(es, "fieldset[disabled]") || es.type === "button" || es.type === "submit" || es.tagName === "image" || es.tagName === "reset" || es.tagName === "file" ? !1 : es.type === "checkbox" || es.type === "radio" ? es.checked : !0
            }

            function cr(es, ze, ts) {
                if (es != null && ze != null) {
                    var os = ts[es];
                    os === void 0 ? ts[es] = ze : Array.isArray(os) ? Array.isArray(ze) ? ts[es] = os.concat(ze) : os.push(ze) : Array.isArray(ze) ? ts[es] = [os].concat(ze) : ts[es] = [os, ze]
                }
            }

            function hr(es, ze, ts, os, ss) {
                if (!(os == null || ur(es, os))) {
                    if (es.push(os), fr(os)) {
                        var rs = ee(os, "name"),
                            is = os.value;
                        os.multiple && os.tagName === "SELECT" && (is = M(os.querySelectorAll("option:checked")).map(function(as) {
                            return as.value
                        })), os.files && (is = M(os.files)), cr(rs, is, ze), ss && vr(os, ts)
                    }
                    if (h(os, "form")) {
                        var ns = os.elements;
                        oe(ns, function(as) {
                            hr(es, ze, ts, as, ss)
                        })
                    }
                }
            }

            function vr(es, ze) {
                es.willValidate && (ce(es, "htmx:validation:validate"), es.checkValidity() || (ze.push({
                    elt: es,
                    message: es.validationMessage,
                    validity: es.validity
                }), ce(es, "htmx:validation:failed", {
                    message: es.validationMessage,
                    validity: es.validity
                })))
            }

            function dr(es, ze) {
                var ts = [],
                    os = {},
                    ss = {},
                    rs = [],
                    is = ae(es);
                is.lastButtonClicked && !se(is.lastButtonClicked) && (is.lastButtonClicked = null);
                var ns = h(es, "form") && es.noValidate !== !0 || te(es, "hx-validate") === "true";
                if (is.lastButtonClicked && (ns = ns && is.lastButtonClicked.formNoValidate !== !0), ze !== "get" && hr(ts, ss, rs, v(es, "form"), ns), hr(ts, os, rs, es, ns), is.lastButtonClicked || es.tagName === "BUTTON" || es.tagName === "INPUT" && ee(es, "type") === "submit") {
                    var as = is.lastButtonClicked || es,
                        cs = ee(as, "name");
                    cr(cs, as.value, ss)
                }
                var fs = pe(es, "hx-include");
                return oe(fs, function(vs) {
                    hr(ts, os, rs, vs, ns), h(vs, "form") || oe(vs.querySelectorAll(rt), function(ps) {
                        hr(ts, os, rs, ps, ns)
                    })
                }), os = le(os, ss), {
                    errors: rs,
                    values: os
                }
            }

            function gr(es, ze, ts) {
                es !== "" && (es += "&"), String(ts) === "[object Object]" && (ts = JSON.stringify(ts));
                var os = encodeURIComponent(ts);
                return es += encodeURIComponent(ze) + "=" + os, es
            }

            function mr(es) {
                var ze = "";
                for (var ts in es)
                    if (es.hasOwnProperty(ts)) {
                        var os = es[ts];
                        Array.isArray(os) ? oe(os, function(ss) {
                            ze = gr(ze, ts, ss)
                        }) : ze = gr(ze, ts, os)
                    }
                return ze
            }

            function pr(es) {
                var ze = new FormData;
                for (var ts in es)
                    if (es.hasOwnProperty(ts)) {
                        var os = es[ts];
                        Array.isArray(os) ? oe(os, function(ss) {
                            ze.append(ts, ss)
                        }) : ze.append(ts, os)
                    }
                return ze
            }

            function xr(es, ze, ts) {
                var os = {
                    "HX-Request": "true",
                    "HX-Trigger": ee(es, "id"),
                    "HX-Trigger-Name": ee(es, "name"),
                    "HX-Target": te(ze, "id"),
                    "HX-Current-URL": re().location.href
                };
                return Rr(es, "hx-headers", !1, os), ts !== void 0 && (os["HX-Prompt"] = ts), ae(es).boosted && (os["HX-Boosted"] = "true"), os
            }

            function yr(es, ze) {
                var ts = ne(ze, "hx-params");
                if (ts) {
                    if (ts === "none") return {};
                    if (ts === "*") return es;
                    if (ts.indexOf("not ") === 0) return oe(ts.substr(4).split(","), function(ss) {
                        ss = ss.trim(), delete es[ss]
                    }), es;
                    var os = {};
                    return oe(ts.split(","), function(ss) {
                        ss = ss.trim(), os[ss] = es[ss]
                    }), os
                } else return es
            }

            function br(es) {
                return ee(es, "href") && ee(es, "href").indexOf("#") >= 0
            }

            function wr(es, ze) {
                var ts = ze || ne(es, "hx-swap"),
                    os = {
                        swapStyle: ae(es).boosted ? "innerHTML" : Q.config.defaultSwapStyle,
                        swapDelay: Q.config.defaultSwapDelay,
                        settleDelay: Q.config.defaultSettleDelay
                    };
                if (Q.config.scrollIntoViewOnBoost && ae(es).boosted && !br(es) && (os.show = "top"), ts) {
                    var ss = D(ts);
                    if (ss.length > 0)
                        for (var rs = 0; rs < ss.length; rs++) {
                            var is = ss[rs];
                            if (is.indexOf("swap:") === 0) os.swapDelay = d(is.substr(5));
                            else if (is.indexOf("settle:") === 0) os.settleDelay = d(is.substr(7));
                            else if (is.indexOf("transition:") === 0) os.transition = is.substr(11) === "true";
                            else if (is.indexOf("ignoreTitle:") === 0) os.ignoreTitle = is.substr(12) === "true";
                            else if (is.indexOf("scroll:") === 0) {
                                var ns = is.substr(7),
                                    as = ns.split(":"),
                                    cs = as.pop(),
                                    fs = as.length > 0 ? as.join(":") : null;
                                os.scroll = cs, os.scrollTarget = fs
                            } else if (is.indexOf("show:") === 0) {
                                var vs = is.substr(5),
                                    as = vs.split(":"),
                                    ps = as.pop(),
                                    fs = as.length > 0 ? as.join(":") : null;
                                os.show = ps, os.showTarget = fs
                            } else if (is.indexOf("focus-scroll:") === 0) {
                                var gs = is.substr(13);
                                os.focusScroll = gs == "true"
                            } else rs == 0 ? os.swapStyle = is : b("Unknown modifier in hx-swap: " + is)
                        }
                }
                return os
            }

            function Sr(es) {
                return ne(es, "hx-encoding") === "multipart/form-data" || h(es, "form") && ee(es, "enctype") === "multipart/form-data"
            }

            function Er(es, ze, ts) {
                var os = null;
                return R(ze, function(ss) {
                    os == null && (os = ss.encodeParameters(es, ts, ze))
                }), os ? ? (Sr(ze) ? pr(ts) : mr(ts))
            }

            function T(es) {
                return {
                    tasks: [],
                    elts: [es]
                }
            }

            function Cr(es, ze) {
                var ts = es[0],
                    os = es[es.length - 1];
                if (ze.scroll) {
                    var ss = null;
                    ze.scrollTarget && (ss = ue(ts, ze.scrollTarget)), ze.scroll === "top" && (ts || ss) && (ss = ss || ts, ss.scrollTop = 0), ze.scroll === "bottom" && (os || ss) && (ss = ss || os, ss.scrollTop = ss.scrollHeight)
                }
                if (ze.show) {
                    var ss = null;
                    if (ze.showTarget) {
                        var rs = ze.showTarget;
                        ze.showTarget === "window" && (rs = "body"), ss = ue(ts, rs)
                    }
                    ze.show === "top" && (ts || ss) && (ss = ss || ts, ss.scrollIntoView({
                        block: "start",
                        behavior: Q.config.scrollBehavior
                    })), ze.show === "bottom" && (os || ss) && (ss = ss || os, ss.scrollIntoView({
                        block: "end",
                        behavior: Q.config.scrollBehavior
                    }))
                }
            }

            function Rr(es, ze, ts, os) {
                if (os == null && (os = {}), es == null) return os;
                var ss = te(es, ze);
                if (ss) {
                    var rs = ss.trim(),
                        is = ts;
                    if (rs === "unset") return null;
                    rs.indexOf("javascript:") === 0 ? (rs = rs.substr(11), is = !0) : rs.indexOf("js:") === 0 && (rs = rs.substr(3), is = !0), rs.indexOf("{") !== 0 && (rs = "{" + rs + "}");
                    var ns;
                    is ? ns = Tr(es, function() {
                        return Function("return (" + rs + ")")()
                    }, {}) : ns = E(rs);
                    for (var as in ns) ns.hasOwnProperty(as) && os[as] == null && (os[as] = ns[as])
                }
                return Rr(u(es), ze, ts, os)
            }

            function Tr(es, ze, ts) {
                return Q.config.allowEval ? ze() : (fe(es, "htmx:evalDisallowedError"), ts)
            }

            function Or(es, ze) {
                return Rr(es, "hx-vars", !0, ze)
            }

            function qr(es, ze) {
                return Rr(es, "hx-vals", !1, ze)
            }

            function Hr(es) {
                return le(Or(es), qr(es))
            }

            function Lr(es, ze, ts) {
                if (ts !== null) try {
                    es.setRequestHeader(ze, ts)
                } catch {
                    es.setRequestHeader(ze, encodeURIComponent(ts)), es.setRequestHeader(ze + "-URI-AutoEncoded", "true")
                }
            }

            function Ar(es) {
                if (es.responseURL && typeof URL < "u") try {
                    var ze = new URL(es.responseURL);
                    return ze.pathname + ze.search
                } catch {
                    fe(re().body, "htmx:badResponseUrl", {
                        url: es.responseURL
                    })
                }
            }

            function O(es, ze) {
                return ze.test(es.getAllResponseHeaders())
            }

            function Nr(es, ze, ts) {
                return es = es.toLowerCase(), ts ? ts instanceof Element || I(ts, "String") ? he(es, ze, null, null, {
                    targetOverride: g(ts),
                    returnPromise: !0
                }) : he(es, ze, g(ts.source), ts.event, {
                    handler: ts.handler,
                    headers: ts.headers,
                    values: ts.values,
                    targetOverride: g(ts.target),
                    swapOverride: ts.swap,
                    select: ts.select,
                    returnPromise: !0
                }) : he(es, ze, null, null, {
                    returnPromise: !0
                })
            }

            function Ir(es) {
                for (var ze = []; es;) ze.push(es), es = es.parentElement;
                return ze
            }

            function kr(es, ze, ts) {
                var os, ss;
                if (typeof URL == "function") {
                    ss = new URL(ze, document.location.href);
                    var rs = document.location.origin;
                    os = rs === ss.origin
                } else ss = ze, os = s(ze, document.location.origin);
                return Q.config.selfRequestsOnly && !os ? !1 : ce(es, "htmx:validateUrl", le({
                    url: ss,
                    sameHost: os
                }, ts))
            }

            function he(es, ze, ts, os, ss, rs) {
                var is = null,
                    ns = null;
                if (ss = ss ? ? {}, ss.returnPromise && typeof Promise < "u") var as = new Promise(function(eo, oo) {
                    is = eo, ns = oo
                });
                ts == null && (ts = re().body);
                var cs = ss.handler || Mr,
                    fs = ss.select || null;
                if (!se(ts)) return ie(is), as;
                var vs = ss.targetOverride || ye(ts);
                if (vs == null || vs == me) return fe(ts, "htmx:targetError", {
                    target: te(ts, "hx-target")
                }), ie(ns), as;
                var ps = ae(ts),
                    gs = ps.lastButtonClicked;
                if (gs) {
                    var us = ee(gs, "formaction");
                    us != null && (ze = us);
                    var bs = ee(gs, "formmethod");
                    bs != null && bs.toLowerCase() !== "dialog" && (es = bs)
                }
                var Bs = ne(ts, "hx-confirm");
                if (rs === void 0) {
                    var Vs = function(eo) {
                            return he(es, ze, ts, os, ss, !!eo)
                        },
                        xs = {
                            target: vs,
                            elt: ts,
                            path: ze,
                            verb: es,
                            triggeringEvent: os,
                            etc: ss,
                            issueRequest: Vs,
                            question: Bs
                        };
                    if (ce(ts, "htmx:confirm", xs) === !1) return ie(is), as
                }
                var Ls = ts,
                    Rs = ne(ts, "hx-sync"),
                    Ms = null,
                    Js = !1;
                if (Rs) {
                    var Ts = Rs.split(":"),
                        Ps = Ts[0].trim();
                    if (Ps === "this" ? Ls = xe(ts, "hx-sync") : Ls = ue(ts, Ps), Rs = (Ts[1] || "drop").trim(), ps = ae(Ls), Rs === "drop" && ps.xhr && ps.abortable !== !0) return ie(is), as;
                    if (Rs === "abort") {
                        if (ps.xhr) return ie(is), as;
                        Js = !0
                    } else if (Rs === "replace") ce(Ls, "htmx:abort");
                    else if (Rs.indexOf("queue") === 0) {
                        var $s = Rs.split(" ");
                        Ms = ($s[1] || "last").trim()
                    }
                }
                if (ps.xhr)
                    if (ps.abortable) ce(Ls, "htmx:abort");
                    else {
                        if (Ms == null) {
                            if (os) {
                                var Cs = ae(os);
                                Cs && Cs.triggerSpec && Cs.triggerSpec.queue && (Ms = Cs.triggerSpec.queue)
                            }
                            Ms == null && (Ms = "last")
                        }
                        return ps.queuedRequests == null && (ps.queuedRequests = []), Ms === "first" && ps.queuedRequests.length === 0 ? ps.queuedRequests.push(function() {
                            he(es, ze, ts, os, ss)
                        }) : Ms === "all" ? ps.queuedRequests.push(function() {
                            he(es, ze, ts, os, ss)
                        }) : Ms === "last" && (ps.queuedRequests = [], ps.queuedRequests.push(function() {
                            he(es, ze, ts, os, ss)
                        })), ie(is), as
                    }
                var Es = new XMLHttpRequest;
                ps.xhr = Es, ps.abortable = Js;
                var Fs = function() {
                        if (ps.xhr = null, ps.abortable = !1, ps.queuedRequests != null && ps.queuedRequests.length > 0) {
                            var eo = ps.queuedRequests.shift();
                            eo()
                        }
                    },
                    Zs = ne(ts, "hx-prompt");
                if (Zs) {
                    var io = prompt(Zs);
                    if (io === null || !ce(ts, "htmx:prompt", {
                            prompt: io,
                            target: vs
                        })) return ie(is), Fs(), as
                }
                if (Bs && !rs && !confirm(Bs)) return ie(is), Fs(), as;
                var qs = xr(ts, vs, io);
                es !== "get" && !Sr(ts) && (qs["Content-Type"] = "application/x-www-form-urlencoded"), ss.headers && (qs = le(qs, ss.headers));
                var Ys = dr(ts, es),
                    zs = Ys.errors,
                    so = Ys.values;
                ss.values && (so = le(so, ss.values));
                var go = Hr(ts),
                    Bo = le(so, go),
                    uo = yr(Bo, ts);
                Q.config.getCacheBusterParam && es === "get" && (uo["org.htmx.cache-buster"] = ee(vs, "id") || "true"), (ze == null || ze === "") && (ze = re().location.href);
                var xo = Rr(ts, "hx-request"),
                    Vo = ae(ts).boosted,
                    vo = Q.config.methodsThatUseUrlParams.indexOf(es) >= 0,
                    Qs = {
                        boosted: Vo,
                        useUrlParams: vo,
                        parameters: uo,
                        unfilteredParameters: Bo,
                        headers: qs,
                        target: vs,
                        verb: es,
                        errors: zs,
                        withCredentials: ss.credentials || xo.credentials || Q.config.withCredentials,
                        timeout: ss.timeout || xo.timeout || Q.config.timeout,
                        path: ze,
                        triggeringEvent: os
                    };
                if (!ce(ts, "htmx:configRequest", Qs)) return ie(is), Fs(), as;
                if (ze = Qs.path, es = Qs.verb, qs = Qs.headers, uo = Qs.parameters, zs = Qs.errors, vo = Qs.useUrlParams, zs && zs.length > 0) return ce(ts, "htmx:validation:halted", Qs), ie(is), Fs(), as;
                var No = ze.split("#"),
                    Po = No[0],
                    So = No[1],
                    no = ze;
                if (vo) {
                    no = Po;
                    var yo = Object.keys(uo).length !== 0;
                    yo && (no.indexOf("?") < 0 ? no += "?" : no += "&", no += mr(uo), So && (no += "#" + So))
                }
                if (!kr(ts, no, Qs)) return fe(ts, "htmx:invalidPath", Qs), ie(ns), as;
                if (Es.open(es.toUpperCase(), no, !0), Es.overrideMimeType("text/html"), Es.withCredentials = Qs.withCredentials, Es.timeout = Qs.timeout, !xo.noHeaders) {
                    for (var mo in qs)
                        if (qs.hasOwnProperty(mo)) {
                            var $o = qs[mo];
                            Lr(Es, mo, $o)
                        }
                }
                var Ks = {
                    xhr: Es,
                    target: vs,
                    requestConfig: Qs,
                    etc: ss,
                    boosted: Vo,
                    select: fs,
                    pathInfo: {
                        requestPath: ze,
                        finalRequestPath: no,
                        anchor: So
                    }
                };
                if (Es.onload = function() {
                        try {
                            var eo = Ir(ts);
                            if (Ks.pathInfo.responsePath = Ar(Es), cs(ts, Ks), lr(Gs, bo), ce(ts, "htmx:afterRequest", Ks), ce(ts, "htmx:afterOnLoad", Ks), !se(ts)) {
                                for (var oo = null; eo.length > 0 && oo == null;) {
                                    var co = eo.shift();
                                    se(co) && (oo = co)
                                }
                                oo && (ce(oo, "htmx:afterRequest", Ks), ce(oo, "htmx:afterOnLoad", Ks))
                            }
                            ie(is), Fs()
                        } catch (Eo) {
                            throw fe(ts, "htmx:onLoadError", le({
                                error: Eo
                            }, Ks)), Eo
                        }
                    }, Es.onerror = function() {
                        lr(Gs, bo), fe(ts, "htmx:afterRequest", Ks), fe(ts, "htmx:sendError", Ks), ie(ns), Fs()
                    }, Es.onabort = function() {
                        lr(Gs, bo), fe(ts, "htmx:afterRequest", Ks), fe(ts, "htmx:sendAbort", Ks), ie(ns), Fs()
                    }, Es.ontimeout = function() {
                        lr(Gs, bo), fe(ts, "htmx:afterRequest", Ks), fe(ts, "htmx:timeout", Ks), ie(ns), Fs()
                    }, !ce(ts, "htmx:beforeRequest", Ks)) return ie(is), Fs(), as;
                var Gs = or(ts),
                    bo = sr(ts);
                oe(["loadstart", "loadend", "progress", "abort"], function(eo) {
                    oe([Es, Es.upload], function(oo) {
                        oo.addEventListener(eo, function(co) {
                            ce(ts, "htmx:xhr:" + eo, {
                                lengthComputable: co.lengthComputable,
                                loaded: co.loaded,
                                total: co.total
                            })
                        })
                    })
                }), ce(ts, "htmx:beforeSend", Ks);
                var Co = vo ? null : Er(Es, ts, uo);
                return Es.send(Co), as
            }

            function Pr(es, ze) {
                var ts = ze.xhr,
                    os = null,
                    ss = null;
                if (O(ts, /HX-Push:/i) ? (os = ts.getResponseHeader("HX-Push"), ss = "push") : O(ts, /HX-Push-Url:/i) ? (os = ts.getResponseHeader("HX-Push-Url"), ss = "push") : O(ts, /HX-Replace-Url:/i) && (os = ts.getResponseHeader("HX-Replace-Url"), ss = "replace"), os) return os === "false" ? {} : {
                    type: ss,
                    path: os
                };
                var rs = ze.pathInfo.finalRequestPath,
                    is = ze.pathInfo.responsePath,
                    ns = ne(es, "hx-push-url"),
                    as = ne(es, "hx-replace-url"),
                    cs = ae(es).boosted,
                    fs = null,
                    vs = null;
                return ns ? (fs = "push", vs = ns) : as ? (fs = "replace", vs = as) : cs && (fs = "push", vs = is || rs), vs ? vs === "false" ? {} : (vs === "true" && (vs = is || rs), ze.pathInfo.anchor && vs.indexOf("#") === -1 && (vs = vs + "#" + ze.pathInfo.anchor), {
                    type: fs,
                    path: vs
                }) : {}
            }

            function Mr(es, ze) {
                var ts = ze.xhr,
                    os = ze.target,
                    ss = ze.etc;
                ze.requestConfig;
                var rs = ze.select;
                if (ce(es, "htmx:beforeOnLoad", ze)) {
                    if (O(ts, /HX-Trigger:/i) && _e(ts, "HX-Trigger", es), O(ts, /HX-Location:/i)) {
                        er();
                        var is = ts.getResponseHeader("HX-Location"),
                            ns;
                        is.indexOf("{") === 0 && (ns = E(is), is = ns.path, delete ns.path), Nr("GET", is, ns).then(function() {
                            tr(is)
                        });
                        return
                    }
                    var as = O(ts, /HX-Refresh:/i) && ts.getResponseHeader("HX-Refresh") === "true";
                    if (O(ts, /HX-Redirect:/i)) {
                        location.href = ts.getResponseHeader("HX-Redirect"), as && location.reload();
                        return
                    }
                    if (as) {
                        location.reload();
                        return
                    }
                    O(ts, /HX-Retarget:/i) && (ts.getResponseHeader("HX-Retarget") === "this" ? ze.target = es : ze.target = ue(es, ts.getResponseHeader("HX-Retarget")));
                    var cs = Pr(es, ze),
                        fs = ts.status >= 200 && ts.status < 400 && ts.status !== 204,
                        vs = ts.response,
                        ps = ts.status >= 400,
                        gs = Q.config.ignoreTitle,
                        us = le({
                            shouldSwap: fs,
                            serverResponse: vs,
                            isError: ps,
                            ignoreTitle: gs
                        }, ze);
                    if (ce(os, "htmx:beforeSwap", us)) {
                        if (os = us.target, vs = us.serverResponse, ps = us.isError, gs = us.ignoreTitle, ze.target = os, ze.failed = ps, ze.successful = !ps, us.shouldSwap) {
                            ts.status === 286 && at(es), R(es, function(Ts) {
                                vs = Ts.transformResponse(vs, ts, es)
                            }), cs.type && er();
                            var bs = ss.swapOverride;
                            O(ts, /HX-Reswap:/i) && (bs = ts.getResponseHeader("HX-Reswap"));
                            var ns = wr(es, bs);
                            ns.hasOwnProperty("ignoreTitle") && (gs = ns.ignoreTitle), os.classList.add(Q.config.swappingClass);
                            var Bs = null,
                                Vs = null,
                                xs = function() {
                                    try {
                                        var Ts = document.activeElement,
                                            Ps = {};
                                        try {
                                            Ps = {
                                                elt: Ts,
                                                start: Ts ? Ts.selectionStart : null,
                                                end: Ts ? Ts.selectionEnd : null
                                            }
                                        } catch {}
                                        var $s;
                                        rs && ($s = rs), O(ts, /HX-Reselect:/i) && ($s = ts.getResponseHeader("HX-Reselect")), cs.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({
                                            history: cs
                                        }, ze)), cs.type === "push" ? (tr(cs.path), ce(re().body, "htmx:pushedIntoHistory", {
                                            path: cs.path
                                        })) : (rr(cs.path), ce(re().body, "htmx:replacedInHistory", {
                                            path: cs.path
                                        })));
                                        var Cs = T(os);
                                        if (je(ns.swapStyle, os, es, vs, Cs, $s), Ps.elt && !se(Ps.elt) && ee(Ps.elt, "id")) {
                                            var Es = document.getElementById(ee(Ps.elt, "id")),
                                                Fs = {
                                                    preventScroll: ns.focusScroll !== void 0 ? !ns.focusScroll : !Q.config.defaultFocusScroll
                                                };
                                            if (Es) {
                                                if (Ps.start && Es.setSelectionRange) try {
                                                    Es.setSelectionRange(Ps.start, Ps.end)
                                                } catch {}
                                                Es.focus(Fs)
                                            }
                                        }
                                        if (os.classList.remove(Q.config.swappingClass), oe(Cs.elts, function(qs) {
                                                qs.classList && qs.classList.add(Q.config.settlingClass), ce(qs, "htmx:afterSwap", ze)
                                            }), O(ts, /HX-Trigger-After-Swap:/i)) {
                                            var Zs = es;
                                            se(es) || (Zs = re().body), _e(ts, "HX-Trigger-After-Swap", Zs)
                                        }
                                        var io = function() {
                                            if (oe(Cs.tasks, function(so) {
                                                    so.call()
                                                }), oe(Cs.elts, function(so) {
                                                    so.classList && so.classList.remove(Q.config.settlingClass), ce(so, "htmx:afterSettle", ze)
                                                }), ze.pathInfo.anchor) {
                                                var qs = re().getElementById(ze.pathInfo.anchor);
                                                qs && qs.scrollIntoView({
                                                    block: "start",
                                                    behavior: "auto"
                                                })
                                            }
                                            if (Cs.title && !gs) {
                                                var Ys = C("title");
                                                Ys ? Ys.innerHTML = Cs.title : window.document.title = Cs.title
                                            }
                                            if (Cr(Cs.elts, ns), O(ts, /HX-Trigger-After-Settle:/i)) {
                                                var zs = es;
                                                se(es) || (zs = re().body), _e(ts, "HX-Trigger-After-Settle", zs)
                                            }
                                            ie(Bs)
                                        };
                                        ns.settleDelay > 0 ? setTimeout(io, ns.settleDelay) : io()
                                    } catch (qs) {
                                        throw fe(es, "htmx:swapError", ze), ie(Vs), qs
                                    }
                                },
                                Ls = Q.config.globalViewTransitions;
                            if (ns.hasOwnProperty("transition") && (Ls = ns.transition), Ls && ce(es, "htmx:beforeTransition", ze) && typeof Promise < "u" && document.startViewTransition) {
                                var Rs = new Promise(function(Ts, Ps) {
                                        Bs = Ts, Vs = Ps
                                    }),
                                    Ms = xs;
                                xs = function() {
                                    document.startViewTransition(function() {
                                        return Ms(), Rs
                                    })
                                }
                            }
                            ns.swapDelay > 0 ? setTimeout(xs, ns.swapDelay) : xs()
                        }
                        ps && fe(es, "htmx:responseError", le({
                            error: "Response Status Error Code " + ts.status + " from " + ze.pathInfo.requestPath
                        }, ze))
                    }
                }
            }
            var Xr = {};

            function Dr() {
                return {
                    init: function(es) {
                        return null
                    },
                    onEvent: function(es, ze) {
                        return !0
                    },
                    transformResponse: function(es, ze, ts) {
                        return es
                    },
                    isInlineSwap: function(es) {
                        return !1
                    },
                    handleSwap: function(es, ze, ts, os) {
                        return !1
                    },
                    encodeParameters: function(es, ze, ts) {
                        return null
                    }
                }
            }

            function Ur(es, ze) {
                ze.init && ze.init(r), Xr[es] = le(Dr(), ze)
            }

            function Br(es) {
                delete Xr[es]
            }

            function Fr(es, ze, ts) {
                if (es == null) return ze;
                ze == null && (ze = []), ts == null && (ts = []);
                var os = te(es, "hx-ext");
                return os && oe(os.split(","), function(ss) {
                    if (ss = ss.replace(/ /g, ""), ss.slice(0, 7) == "ignore:") {
                        ts.push(ss.slice(7));
                        return
                    }
                    if (ts.indexOf(ss) < 0) {
                        var rs = Xr[ss];
                        rs && ze.indexOf(rs) < 0 && ze.push(rs)
                    }
                }), Fr(u(es), ze, ts)
            }
            var Vr = !1;
            re().addEventListener("DOMContentLoaded", function() {
                Vr = !0
            });

            function jr(es) {
                Vr || re().readyState === "complete" ? es() : re().addEventListener("DOMContentLoaded", es)
            }

            function _r() {
                Q.config.includeIndicatorStyles !== !1 && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>")
            }

            function zr() {
                var es = re().querySelector('meta[name="htmx-config"]');
                return es ? E(es.content) : null
            }

            function $r() {
                var es = zr();
                es && (Q.config = le(Q.config, es))
            }
            return jr(function() {
                $r(), _r();
                var es = re().body;
                zt(es);
                var ze = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
                es.addEventListener("htmx:abort", function(os) {
                    var ss = os.target,
                        rs = ae(ss);
                    rs && rs.xhr && rs.xhr.abort()
                });
                const ts = window.onpopstate ? window.onpopstate.bind(window) : null;
                window.onpopstate = function(os) {
                    os.state && os.state.htmx ? (ar(), oe(ze, function(ss) {
                        ce(ss, "htmx:restored", {
                            document: re(),
                            triggerEvent: ce
                        })
                    })) : ts && ts(os)
                }, setTimeout(function() {
                    ce(es, "htmx:load", {}), es = null
                }, 0)
            }), Q
        }()
    })
})(htmx_min);
var glightbox_min$1 = {
    exports: {}
};
(function(es, ze) {
    (function(ts, os) {
        es.exports = os()
    })(commonjsGlobal, function() {
        function ts(ls) {
            var ds = function(ms, hs) {
                if (typeof ms != "object" || !ms) return ms;
                var ys = ms[Symbol.toPrimitive];
                if (ys !== void 0) {
                    var ks = ys.call(ms, hs || "default");
                    if (typeof ks != "object") return ks;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (hs === "string" ? String : Number)(ms)
            }(ls, "string");
            return typeof ds == "symbol" ? ds : ds + ""
        }

        function os(ls) {
            return (os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ds) {
                return typeof ds
            } : function(ds) {
                return ds && typeof Symbol == "function" && ds.constructor === Symbol && ds !== Symbol.prototype ? "symbol" : typeof ds
            })(ls)
        }

        function ss(ls, ds) {
            if (!(ls instanceof ds)) throw new TypeError("Cannot call a class as a function")
        }

        function rs(ls, ds) {
            for (var ms = 0; ms < ds.length; ms++) {
                var hs = ds[ms];
                hs.enumerable = hs.enumerable || !1, hs.configurable = !0, "value" in hs && (hs.writable = !0), Object.defineProperty(ls, ts(hs.key), hs)
            }
        }

        function is(ls, ds, ms) {
            return ds && rs(ls.prototype, ds), ms && rs(ls, ms), Object.defineProperty(ls, "prototype", {
                writable: !1
            }), ls
        }
        var ns = Date.now();

        function as() {
            var ls = {},
                ds = !0,
                ms = 0,
                hs = arguments.length;
            Object.prototype.toString.call(arguments[0]) === "[object Boolean]" && (ds = arguments[0], ms++);
            for (var ys = function(_s) {
                    for (var ws in _s) Object.prototype.hasOwnProperty.call(_s, ws) && (ds && Object.prototype.toString.call(_s[ws]) === "[object Object]" ? ls[ws] = as(!0, ls[ws], _s[ws]) : ls[ws] = _s[ws])
                }; ms < hs; ms++) {
                var ks = arguments[ms];
                ys(ks)
            }
            return ls
        }

        function cs(ls, ds) {
            if ((Fs(ls) || ls === window || ls === document) && (ls = [ls]), io(ls) || qs(ls) || (ls = [ls]), so(ls) != 0) {
                if (io(ls) && !qs(ls))
                    for (var ms = ls.length, hs = 0; hs < ms && ds.call(ls[hs], ls[hs], hs, ls) !== !1; hs++);
                else if (qs(ls)) {
                    for (var ys in ls)
                        if (zs(ls, ys) && ds.call(ls[ys], ls[ys], ys, ls) === !1) break
                }
            }
        }

        function fs(ls) {
            var ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                ms = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
                hs = ls[ns] = ls[ns] || [],
                ys = {
                    all: hs,
                    evt: null,
                    found: null
                };
            return ds && ms && so(hs) > 0 && cs(hs, function(ks, _s) {
                if (ks.eventName == ds && ks.fn.toString() == ms.toString()) return ys.found = !0, ys.evt = _s, !1
            }), ys
        }

        function vs(ls) {
            var ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                ms = ds.onElement,
                hs = ds.withCallback,
                ys = ds.avoidDuplicate,
                ks = ys === void 0 || ys,
                _s = ds.once,
                ws = _s !== void 0 && _s,
                Ss = ds.useCapture,
                Ns = Ss !== void 0 && Ss,
                Ds = arguments.length > 2 ? arguments[2] : void 0,
                Os = ms || [];

            function As(Is) {
                Cs(hs) && hs.call(Ds, Is, this), ws && As.destroy()
            }
            return Es(Os) && (Os = document.querySelectorAll(Os)), As.destroy = function() {
                cs(Os, function(Is) {
                    var Us = fs(Is, ls, As);
                    Us.found && Us.all.splice(Us.evt, 1), Is.removeEventListener && Is.removeEventListener(ls, As, Ns)
                })
            }, cs(Os, function(Is) {
                var Us = fs(Is, ls, As);
                (Is.addEventListener && ks && !Us.found || !ks) && (Is.addEventListener(ls, As, Ns), Us.all.push({
                    eventName: ls,
                    fn: As
                }))
            }), As
        }

        function ps(ls, ds) {
            cs(ds.split(" "), function(ms) {
                return ls.classList.add(ms)
            })
        }

        function gs(ls, ds) {
            cs(ds.split(" "), function(ms) {
                return ls.classList.remove(ms)
            })
        }

        function us(ls, ds) {
            return ls.classList.contains(ds)
        }

        function bs(ls, ds) {
            for (; ls !== document.body;) {
                if (!(ls = ls.parentElement)) return !1;
                if (typeof ls.matches == "function" ? ls.matches(ds) : ls.msMatchesSelector(ds)) return ls
            }
        }

        function Bs(ls) {
            var ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
                ms = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            if (!ls || ds === "") return !1;
            if (ds === "none") return Cs(ms) && ms(), !1;
            var hs = Js(),
                ys = ds.split(" ");
            cs(ys, function(ks) {
                ps(ls, "g" + ks)
            }), vs(hs, {
                onElement: ls,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function(ks, _s) {
                    cs(ys, function(ws) {
                        gs(_s, "g" + ws)
                    }), Cs(ms) && ms()
                }
            })
        }

        function Vs(ls) {
            var ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            if (ds === "") return ls.style.webkitTransform = "", ls.style.MozTransform = "", ls.style.msTransform = "", ls.style.OTransform = "", ls.style.transform = "", !1;
            ls.style.webkitTransform = ds, ls.style.MozTransform = ds, ls.style.msTransform = ds, ls.style.OTransform = ds, ls.style.transform = ds
        }

        function xs(ls) {
            ls.style.display = "block"
        }

        function Ls(ls) {
            ls.style.display = "none"
        }

        function Rs(ls) {
            var ds = document.createDocumentFragment(),
                ms = document.createElement("div");
            for (ms.innerHTML = ls; ms.firstChild;) ds.appendChild(ms.firstChild);
            return ds
        }

        function Ms() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        }

        function Js() {
            var ls, ds = document.createElement("fakeelement"),
                ms = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd"
                };
            for (ls in ms)
                if (ds.style[ls] !== void 0) return ms[ls]
        }

        function Ts(ls, ds, ms, hs) {
            if (ls()) ds();
            else {
                var ys;
                ms || (ms = 100);
                var ks = setInterval(function() {
                    ls() && (clearInterval(ks), ys && clearTimeout(ys), ds())
                }, ms);
                hs && (ys = setTimeout(function() {
                    clearInterval(ks)
                }, hs))
            }
        }

        function Ps(ls, ds, ms) {
            if (Ys(ls)) console.error("Inject assets error");
            else if (Cs(ds) && (ms = ds, ds = !1), Es(ds) && ds in window) Cs(ms) && ms();
            else {
                var hs;
                if (ls.indexOf(".css") !== -1) {
                    if ((hs = document.querySelectorAll('link[href="' + ls + '"]')) && hs.length > 0) return void(Cs(ms) && ms());
                    var ys = document.getElementsByTagName("head")[0],
                        ks = ys.querySelectorAll('link[rel="stylesheet"]'),
                        _s = document.createElement("link");
                    return _s.rel = "stylesheet", _s.type = "text/css", _s.href = ls, _s.media = "all", ks ? ys.insertBefore(_s, ks[0]) : ys.appendChild(_s), void(Cs(ms) && ms())
                }
                if ((hs = document.querySelectorAll('script[src="' + ls + '"]')) && hs.length > 0) {
                    if (Cs(ms)) {
                        if (Es(ds)) return Ts(function() {
                            return window[ds] !== void 0
                        }, function() {
                            ms()
                        }), !1;
                        ms()
                    }
                } else {
                    var ws = document.createElement("script");
                    ws.type = "text/javascript", ws.src = ls, ws.onload = function() {
                        if (Cs(ms)) {
                            if (Es(ds)) return Ts(function() {
                                return window[ds] !== void 0
                            }, function() {
                                ms()
                            }), !1;
                            ms()
                        }
                    }, document.body.appendChild(ws)
                }
            }
        }

        function $s() {
            return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
        }

        function Cs(ls) {
            return typeof ls == "function"
        }

        function Es(ls) {
            return typeof ls == "string"
        }

        function Fs(ls) {
            return !(!ls || !ls.nodeType || ls.nodeType != 1)
        }

        function Zs(ls) {
            return Array.isArray(ls)
        }

        function io(ls) {
            return ls && ls.length && isFinite(ls.length)
        }

        function qs(ls) {
            return os(ls) === "object" && ls != null && !Cs(ls) && !Zs(ls)
        }

        function Ys(ls) {
            return ls == null
        }

        function zs(ls, ds) {
            return ls !== null && hasOwnProperty.call(ls, ds)
        }

        function so(ls) {
            if (qs(ls)) {
                if (ls.keys) return ls.keys().length;
                var ds = 0;
                for (var ms in ls) zs(ls, ms) && ds++;
                return ds
            }
            return ls.length
        }

        function go(ls) {
            return !isNaN(parseFloat(ls)) && isFinite(ls)
        }

        function Bo() {
            var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1,
                ds = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
            if (!ds.length) return !1;
            if (ds.length == 1) return ds[0];
            typeof ls == "string" && (ls = parseInt(ls));
            var ms = [];
            cs(ds, function(ws) {
                ms.push(ws.getAttribute("data-taborder"))
            });
            var hs = Math.max.apply(Math, ms.map(function(ws) {
                    return parseInt(ws)
                })),
                ys = ls < 0 ? 1 : ls + 1;
            ys > hs && (ys = "1");
            var ks = ms.filter(function(ws) {
                    return ws >= parseInt(ys)
                }),
                _s = ks.sort()[0];
            return document.querySelector('.gbtn[data-taborder="'.concat(_s, '"]'))
        }

        function uo(ls) {
            if (ls.events.hasOwnProperty("keyboard")) return !1;
            ls.events.keyboard = vs("keydown", {
                onElement: window,
                withCallback: function(ds, ms) {
                    var hs = (ds = ds || window.event).keyCode;
                    if (hs == 9) {
                        var ys = document.querySelector(".gbtn.focused");
                        if (!ys) {
                            var ks = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                            if (ks == "input" || ks == "textarea" || ks == "button") return
                        }
                        ds.preventDefault();
                        var _s = document.querySelectorAll(".gbtn[data-taborder]");
                        if (!_s || _s.length <= 0) return;
                        if (!ys) {
                            var ws = Bo();
                            return void(ws && (ws.focus(), ps(ws, "focused")))
                        }
                        var Ss = Bo(ys.getAttribute("data-taborder"));
                        gs(ys, "focused"), Ss && (Ss.focus(), ps(Ss, "focused"))
                    }
                    hs == 39 && ls.nextSlide(), hs == 37 && ls.prevSlide(), hs == 27 && ls.close()
                }
            })
        }
        var xo = is(function ls(ds, ms) {
                var hs = this,
                    ys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (ss(this, ls), this.img = ds, this.slide = ms, this.onclose = ys, this.img.setZoomEvents) return !1;
                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(ks) {
                    return hs.dragStart(ks)
                }, !1), this.img.addEventListener("mouseup", function(ks) {
                    return hs.dragEnd(ks)
                }, !1), this.img.addEventListener("mousemove", function(ks) {
                    return hs.drag(ks)
                }, !1), this.img.addEventListener("click", function(ks) {
                    return hs.slide.classList.contains("dragging-nav") ? (hs.zoomOut(), !1) : hs.zoomedIn ? void(hs.zoomedIn && !hs.dragging && hs.zoomOut()) : hs.zoomIn()
                }, !1), this.img.setZoomEvents = !0
            }, [{
                key: "zoomIn",
                value: function() {
                    var ls = this.widowWidth();
                    if (!(this.zoomedIn || ls <= 768)) {
                        var ds = this.img;
                        if (ds.setAttribute("data-style", ds.getAttribute("style")), ds.style.maxWidth = ds.naturalWidth + "px", ds.style.maxHeight = ds.naturalHeight + "px", ds.naturalWidth > ls) {
                            var ms = ls / 2 - ds.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, ms, 0)
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0
                    }
                }
            }, {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && typeof this.onclose == "function" && this.onclose()
                }
            }, {
                key: "dragStart",
                value: function(ls) {
                    ls.preventDefault(), this.zoomedIn ? (ls.type === "touchstart" ? (this.initialX = ls.touches[0].clientX - this.xOffset, this.initialY = ls.touches[0].clientY - this.yOffset) : (this.initialX = ls.clientX - this.xOffset, this.initialY = ls.clientY - this.yOffset), ls.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
                }
            }, {
                key: "dragEnd",
                value: function(ls) {
                    var ds = this;
                    ls.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        ds.dragging = !1, ds.img.isDragging = !1, ds.img.classList.remove("dragging")
                    }, 100)
                }
            }, {
                key: "drag",
                value: function(ls) {
                    this.active && (ls.preventDefault(), ls.type === "touchmove" ? (this.currentX = ls.touches[0].clientX - this.initialX, this.currentY = ls.touches[0].clientY - this.initialY) : (this.currentX = ls.clientX - this.initialX, this.currentY = ls.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                }
            }, {
                key: "onMove",
                value: function(ls) {
                    if (this.zoomedIn) {
                        var ds = ls.clientX - this.img.naturalWidth / 2,
                            ms = ls.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, ds, ms)
                    }
                }
            }, {
                key: "setTranslate",
                value: function(ls, ds, ms) {
                    ls.style.transform = "translate3d(" + ds + "px, " + ms + "px, 0)"
                }
            }, {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            }]),
            Vo = is(function ls() {
                var ds = this,
                    ms = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                ss(this, ls);
                var hs = ms.dragEl,
                    ys = ms.toleranceX,
                    ks = ys === void 0 ? 40 : ys,
                    _s = ms.toleranceY,
                    ws = _s === void 0 ? 65 : _s,
                    Ss = ms.slide,
                    Ns = Ss === void 0 ? null : Ss,
                    Ds = ms.instance,
                    Os = Ds === void 0 ? null : Ds;
                this.el = hs, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = ks, this.toleranceY = ws, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = Ns, this.instance = Os, this.el.addEventListener("mousedown", function(As) {
                    return ds.dragStart(As)
                }, !1), this.el.addEventListener("mouseup", function(As) {
                    return ds.dragEnd(As)
                }, !1), this.el.addEventListener("mousemove", function(As) {
                    return ds.drag(As)
                }, !1)
            }, [{
                key: "dragStart",
                value: function(ls) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        ls.type === "touchstart" ? (this.initialX = ls.touches[0].clientX - this.xOffset, this.initialY = ls.touches[0].clientY - this.yOffset) : (this.initialX = ls.clientX - this.xOffset, this.initialY = ls.clientY - this.yOffset);
                        var ds = ls.target.nodeName.toLowerCase();
                        ls.target.classList.contains("nodrag") || bs(ls.target, ".nodrag") || ["input", "select", "textarea", "button", "a"].indexOf(ds) !== -1 ? this.active = !1 : (ls.preventDefault(), (ls.target === this.el || ds !== "img" && bs(ls.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = bs(ls.target, ".ginner-container")))
                    }
                }
            }, {
                key: "dragEnd",
                value: function(ls) {
                    var ds = this;
                    ls && ls.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, this.doSlideChange == "right" && this.instance.prevSlide(), this.doSlideChange == "left" && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        ds.instance.preventOutsideClick = !1, ds.toleranceReached = !1, ds.lastDirection = null, ds.dragging = !1, ds.el.isDragging = !1, ds.el.classList.remove("dragging"), ds.slide.classList.remove("dragging-nav"), ds.dragContainer.style.transform = "", ds.dragContainer.style.transition = ""
                    }, 100)
                }
            }, {
                key: "drag",
                value: function(ls) {
                    if (this.active) {
                        ls.preventDefault(), this.slide.classList.add("dragging-nav"), ls.type === "touchmove" ? (this.currentX = ls.touches[0].clientX - this.initialX, this.currentY = ls.touches[0].clientY - this.initialY) : (this.currentX = ls.clientX - this.initialX, this.currentY = ls.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var ds = Math.abs(this.currentX),
                            ms = Math.abs(this.currentY);
                        if (ds > 0 && ds >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == "x")) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var hs = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && hs && (this.doSlideChange = hs), this.instance.settings.dragAutoSnap && hs) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), hs == "right" && this.instance.prevSlide(), void(hs == "left" && this.instance.nextSlide())
                        }
                        if (this.toleranceY > 0 && ms > 0 && ms >= ds && (!this.lastDirection || this.lastDirection == "y")) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var ys = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && ys && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && ys && this.instance.close())
                        }
                    }
                }
            }, {
                key: "shouldChange",
                value: function() {
                    var ls = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var ds = this.currentX > 0 ? "right" : "left";
                        (ds == "left" && this.slide !== this.slide.parentNode.lastChild || ds == "right" && this.slide !== this.slide.parentNode.firstChild) && (ls = ds)
                    }
                    return ls
                }
            }, {
                key: "shouldClose",
                value: function() {
                    var ls = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (ls = !0), ls
                }
            }, {
                key: "setTranslate",
                value: function(ls, ds, ms) {
                    var hs = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                    ls.style.transition = hs ? "all .2s ease" : "", ls.style.transform = "translate3d(".concat(ds, "px, ").concat(ms, "px, 0)")
                }
            }]);

        function vo(ls, ds, ms, hs) {
            var ys = ls.querySelector(".gslide-media"),
                ks = new Image,
                _s = "gSlideTitle_" + ms,
                ws = "gSlideDesc_" + ms;
            ks.addEventListener("load", function() {
                Cs(hs) && hs()
            }, !1), ks.src = ds.href, ds.sizes != "" && ds.srcset != "" && (ks.sizes = ds.sizes, ks.srcset = ds.srcset), ks.alt = "", Ys(ds.alt) || ds.alt === "" || (ks.alt = ds.alt), ds.title !== "" && ks.setAttribute("aria-labelledby", _s), ds.description !== "" && ks.setAttribute("aria-describedby", ws), ds.hasOwnProperty("_hasCustomWidth") && ds._hasCustomWidth && (ks.style.width = ds.width), ds.hasOwnProperty("_hasCustomHeight") && ds._hasCustomHeight && (ks.style.height = ds.height), ys.insertBefore(ks, ys.firstChild)
        }

        function Qs(ls, ds, ms, hs) {
            var ys = this,
                ks = ls.querySelector(".ginner-container"),
                _s = "gvideo" + ms,
                ws = ls.querySelector(".gslide-media"),
                Ss = this.getAllPlayers();
            ps(ks, "gvideo-container"), ws.insertBefore(Rs('<div class="gvideo-wrapper"></div>'), ws.firstChild);
            var Ns = ls.querySelector(".gvideo-wrapper");
            Ps(this.settings.plyr.css, "Plyr");
            var Ds = ds.href,
                Os = ds == null ? void 0 : ds.videoProvider,
                As = !1;
            ws.style.maxWidth = ds.width, Ps(this.settings.plyr.js, "Plyr", function() {
                if (!Os && Ds.match(/vimeo\.com\/([0-9]*)/) && (Os = "vimeo"), !Os && (Ds.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || Ds.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || Ds.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || Ds.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)) && (Os = "youtube"), Os === "local" || !Os) {
                    Os = "local";
                    var Is = '<video id="' + _s + '" ';
                    Is += 'style="background:#000; max-width: '.concat(ds.width, ';" '), Is += 'preload="metadata" ', Is += 'x-webkit-airplay="allow" ', Is += "playsinline ", Is += "controls ", Is += 'class="gvideo-local">', Is += '<source src="'.concat(Ds, '">'), As = Rs(Is += "</video>")
                }
                var Us = As || Rs('<div id="'.concat(_s, '" data-plyr-provider="').concat(Os, '" data-plyr-embed-id="').concat(Ds, '"></div>'));
                ps(Ns, "".concat(Os, "-video gvideo")), Ns.appendChild(Us), Ns.setAttribute("data-id", _s), Ns.setAttribute("data-index", ms);
                var js = zs(ys.settings.plyr, "config") ? ys.settings.plyr.config : {},
                    ro = new Plyr("#" + _s, js);
                ro.on("ready", function(to) {
                    Ss[_s] = to.detail.plyr, Cs(hs) && hs()
                }), Ts(function() {
                    return ls.querySelector("iframe") && ls.querySelector("iframe").dataset.ready == "true"
                }, function() {
                    ys.resize(ls)
                }), ro.on("enterfullscreen", No), ro.on("exitfullscreen", No)
            })
        }

        function No(ls) {
            var ds = bs(ls.target, ".gslide-media");
            ls.type === "enterfullscreen" && ps(ds, "fullscreen"), ls.type === "exitfullscreen" && gs(ds, "fullscreen")
        }

        function Po(ls, ds, ms, hs) {
            var ys, ks = this,
                _s = ls.querySelector(".gslide-media"),
                ws = !(!zs(ds, "href") || !ds.href) && ds.href.split("#").pop().trim(),
                Ss = !(!zs(ds, "content") || !ds.content) && ds.content;
            if (Ss && (Es(Ss) && (ys = Rs('<div class="ginlined-content">'.concat(Ss, "</div>"))), Fs(Ss))) {
                Ss.style.display == "none" && (Ss.style.display = "block");
                var Ns = document.createElement("div");
                Ns.className = "ginlined-content", Ns.appendChild(Ss), ys = Ns
            }
            if (ws) {
                var Ds = document.getElementById(ws);
                if (!Ds) return !1;
                var Os = Ds.cloneNode(!0);
                Os.style.height = ds.height, Os.style.maxWidth = ds.width, ps(Os, "ginlined-content"), ys = Os
            }
            if (!ys) return console.error("Unable to append inline slide content", ds), !1;
            _s.style.height = ds.height, _s.style.width = ds.width, _s.appendChild(ys), this.events["inlineclose" + ws] = vs("click", {
                onElement: _s.querySelectorAll(".gtrigger-close"),
                withCallback: function(As) {
                    As.preventDefault(), ks.close()
                }
            }), Cs(hs) && hs()
        }

        function So(ls, ds, ms, hs) {
            var ys = ls.querySelector(".gslide-media"),
                ks = function(_s) {
                    var ws = _s.url,
                        Ss = _s.allow,
                        Ns = _s.callback,
                        Ds = _s.appendTo,
                        Os = document.createElement("iframe");
                    return Os.className = "vimeo-video gvideo", Os.src = ws, Os.style.width = "100%", Os.style.height = "100%", Ss && Os.setAttribute("allow", Ss), Os.onload = function() {
                        Os.onload = null, ps(Os, "node-ready"), Cs(Ns) && Ns()
                    }, Ds && Ds.appendChild(Os), Os
                }({
                    url: ds.href,
                    callback: hs
                });
            ys.parentNode.style.maxWidth = ds.width, ys.parentNode.style.height = ds.height, ys.appendChild(ks)
        }
        var no = is(function ls() {
                var ds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                ss(this, ls), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, qs(ds) && (this.defaults = as(this.defaults, ds))
            }, [{
                key: "sourceType",
                value: function(ls) {
                    var ds = ls;
                    return (ls = ls.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null ? "image" : ls.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || ls.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || ls.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || ls.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/) || ls.match(/vimeo\.com\/([0-9]*)/) || ls.match(/\.(mp4|ogg|webm|mov)/) !== null ? "video" : ls.match(/\.(mp3|wav|wma|aac|ogg)/) !== null ? "audio" : ls.indexOf("#") > -1 && ds.split("#").pop().trim() !== "" ? "inline" : ls.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig",
                value: function(ls, ds) {
                    var ms = this,
                        hs = as({
                            descPosition: ds.descPosition
                        }, this.defaults);
                    if (qs(ls) && !Fs(ls)) {
                        zs(ls, "type") || (zs(ls, "content") && ls.content ? ls.type = "inline" : zs(ls, "href") && (ls.type = this.sourceType(ls.href)));
                        var ys = as(hs, ls);
                        return this.setSize(ys, ds), ys
                    }
                    var ks = "",
                        _s = ls.getAttribute("data-glightbox"),
                        ws = ls.nodeName.toLowerCase();
                    if (ws === "a" && (ks = ls.href), ws === "img" && (ks = ls.src, hs.alt = ls.alt), hs.href = ks, cs(hs, function(Is, Us) {
                            zs(ds, Us) && Us !== "width" && (hs[Us] = ds[Us]);
                            var js = ls.dataset[Us];
                            Ys(js) || (hs[Us] = ms.sanitizeValue(js))
                        }), hs.content && (hs.type = "inline"), !hs.type && ks && (hs.type = this.sourceType(ks)), Ys(_s)) {
                        if (!hs.title && ws == "a") {
                            var Ss = ls.title;
                            Ys(Ss) || Ss === "" || (hs.title = Ss)
                        }
                        if (!hs.title && ws == "img") {
                            var Ns = ls.alt;
                            Ys(Ns) || Ns === "" || (hs.title = Ns)
                        }
                    } else {
                        var Ds = [];
                        cs(hs, function(Is, Us) {
                            Ds.push(";\\s?" + Us)
                        }), Ds = Ds.join("\\s?:|"), _s.trim() !== "" && cs(hs, function(Is, Us) {
                            var js = _s,
                                ro = new RegExp("s?" + Us + "s?:s?(.*?)(" + Ds + "s?:|$)"),
                                to = js.match(ro);
                            if (to && to.length && to[1]) {
                                var Xs = to[1].trim().replace(/;\s*$/, "");
                                hs[Us] = ms.sanitizeValue(Xs)
                            }
                        })
                    }
                    if (hs.description && hs.description.substring(0, 1) === ".") {
                        var Os;
                        try {
                            Os = document.querySelector(hs.description).innerHTML
                        } catch (Is) {
                            if (!(Is instanceof DOMException)) throw Is
                        }
                        Os && (hs.description = Os)
                    }
                    if (!hs.description) {
                        var As = ls.querySelector(".glightbox-desc");
                        As && (hs.description = As.innerHTML)
                    }
                    return this.setSize(hs, ds, ls), this.slideConfig = hs, hs
                }
            }, {
                key: "setSize",
                value: function(ls, ds) {
                    var ms = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
                        hs = ls.type == "video" ? this.checkSize(ds.videosWidth) : this.checkSize(ds.width),
                        ys = this.checkSize(ds.height);
                    return ls.width = zs(ls, "width") && ls.width !== "" ? this.checkSize(ls.width) : hs, ls.height = zs(ls, "height") && ls.height !== "" ? this.checkSize(ls.height) : ys, ms && ls.type == "image" && (ls._hasCustomWidth = !!ms.dataset.width, ls._hasCustomHeight = !!ms.dataset.height), ls
                }
            }, {
                key: "checkSize",
                value: function(ls) {
                    return go(ls) ? "".concat(ls, "px") : ls
                }
            }, {
                key: "sanitizeValue",
                value: function(ls) {
                    return ls !== "true" && ls !== "false" ? ls : ls === "true"
                }
            }]),
            yo = is(function ls(ds, ms, hs) {
                ss(this, ls), this.element = ds, this.instance = ms, this.index = hs
            }, [{
                key: "setContent",
                value: function() {
                    var ls = this,
                        ds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                        ms = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                    if (us(ds, "loaded")) return !1;
                    var hs = this.instance.settings,
                        ys = this.slideConfig,
                        ks = $s();
                    Cs(hs.beforeSlideLoad) && hs.beforeSlideLoad({
                        index: this.index,
                        slide: ds,
                        player: !1
                    });
                    var _s = ys.type,
                        ws = ys.descPosition,
                        Ss = ds.querySelector(".gslide-media"),
                        Ns = ds.querySelector(".gslide-title"),
                        Ds = ds.querySelector(".gslide-desc"),
                        Os = ds.querySelector(".gdesc-inner"),
                        As = ms,
                        Is = "gSlideTitle_" + this.index,
                        Us = "gSlideDesc_" + this.index;
                    if (Cs(hs.afterSlideLoad) && (As = function() {
                            Cs(ms) && ms(), hs.afterSlideLoad({
                                index: ls.index,
                                slide: ds,
                                player: ls.instance.getSlidePlayerInstance(ls.index)
                            })
                        }), ys.title == "" && ys.description == "" ? Os && Os.parentNode.parentNode.removeChild(Os.parentNode) : (Ns && ys.title !== "" ? (Ns.id = Is, Ns.innerHTML = ys.title) : Ns.parentNode.removeChild(Ns), Ds && ys.description !== "" ? (Ds.id = Us, ks && hs.moreLength > 0 ? (ys.smallDescription = this.slideShortDesc(ys.description, hs.moreLength, hs.moreText), Ds.innerHTML = ys.smallDescription, this.descriptionEvents(Ds, ys)) : Ds.innerHTML = ys.description) : Ds.parentNode.removeChild(Ds), ps(Ss.parentNode, "desc-".concat(ws)), ps(Os.parentNode, "description-".concat(ws))), ps(Ss, "gslide-".concat(_s)), ps(ds, "loaded"), _s !== "video") {
                        if (_s !== "external") return _s === "inline" ? (Po.apply(this.instance, [ds, ys, this.index, As]), void(ys.draggable && new Vo({
                            dragEl: ds.querySelector(".gslide-inline"),
                            toleranceX: hs.dragToleranceX,
                            toleranceY: hs.dragToleranceY,
                            slide: ds,
                            instance: this.instance
                        }))) : void(_s !== "image" ? Cs(As) && As() : vo(ds, ys, this.index, function() {
                            var js = ds.querySelector("img");
                            ys.draggable && new Vo({
                                dragEl: js,
                                toleranceX: hs.dragToleranceX,
                                toleranceY: hs.dragToleranceY,
                                slide: ds,
                                instance: ls.instance
                            }), ys.zoomable && js.naturalWidth > js.offsetWidth && (ps(js, "zoomable"), new xo(js, ds, function() {
                                ls.instance.resize()
                            })), Cs(As) && As()
                        }));
                        So.apply(this, [ds, ys, this.index, As])
                    } else Qs.apply(this.instance, [ds, ys, this.index, As])
                }
            }, {
                key: "slideShortDesc",
                value: function(ls) {
                    var ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50,
                        ms = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                        hs = document.createElement("div");
                    hs.innerHTML = ls;
                    var ys = hs.innerText,
                        ks = ms;
                    if ((ls = ys.trim()).length <= ds) return ls;
                    var _s = ls.substr(0, ds - 1);
                    return ks ? (hs = null, _s + '... <a href="#" class="desc-more">' + ms + "</a>") : _s
                }
            }, {
                key: "descriptionEvents",
                value: function(ls, ds) {
                    var ms = this,
                        hs = ls.querySelector(".desc-more");
                    if (!hs) return !1;
                    vs("click", {
                        onElement: hs,
                        withCallback: function(ys, ks) {
                            ys.preventDefault();
                            var _s = document.body,
                                ws = bs(ks, ".gslide-desc");
                            if (!ws) return !1;
                            ws.innerHTML = ds.description, ps(_s, "gdesc-open");
                            var Ss = vs("click", {
                                onElement: [_s, bs(ws, ".gslide-description")],
                                withCallback: function(Ns, Ds) {
                                    Ns.target.nodeName.toLowerCase() !== "a" && (gs(_s, "gdesc-open"), ps(_s, "gdesc-closed"), ws.innerHTML = ds.smallDescription, ms.descriptionEvents(ws, ds), setTimeout(function() {
                                        gs(_s, "gdesc-closed")
                                    }, 400), Ss.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create",
                value: function() {
                    return Rs(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig",
                value: function() {
                    Fs(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var ls = new no(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = ls.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]);

        function mo(ls) {
            return Math.sqrt(ls.x * ls.x + ls.y * ls.y)
        }

        function $o(ls, ds) {
            var ms = function(hs, ys) {
                var ks = mo(hs) * mo(ys);
                if (ks === 0) return 0;
                var _s = function(ws, Ss) {
                    return ws.x * Ss.x + ws.y * Ss.y
                }(hs, ys) / ks;
                return _s > 1 && (_s = 1), Math.acos(_s)
            }(ls, ds);
            return function(hs, ys) {
                return hs.x * ys.y - ys.x * hs.y
            }(ls, ds) > 0 && (ms *= -1), 180 * ms / Math.PI
        }
        var Ks = is(function ls(ds) {
            ss(this, ls), this.handlers = [], this.el = ds
        }, [{
            key: "add",
            value: function(ls) {
                this.handlers.push(ls)
            }
        }, {
            key: "del",
            value: function(ls) {
                ls || (this.handlers = []);
                for (var ds = this.handlers.length; ds >= 0; ds--) this.handlers[ds] === ls && this.handlers.splice(ds, 1)
            }
        }, {
            key: "dispatch",
            value: function() {
                for (var ls = 0, ds = this.handlers.length; ls < ds; ls++) {
                    var ms = this.handlers[ls];
                    typeof ms == "function" && ms.apply(this.el, arguments)
                }
            }
        }]);

        function Gs(ls, ds) {
            var ms = new Ks(ls);
            return ms.add(ds), ms
        }
        var bo = is(function ls(ds, ms) {
            ss(this, ls), this.element = typeof ds == "string" ? document.querySelector(ds) : ds, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var hs = function() {};
            this.rotate = Gs(this.element, ms.rotate || hs), this.touchStart = Gs(this.element, ms.touchStart || hs), this.multipointStart = Gs(this.element, ms.multipointStart || hs), this.multipointEnd = Gs(this.element, ms.multipointEnd || hs), this.pinch = Gs(this.element, ms.pinch || hs), this.swipe = Gs(this.element, ms.swipe || hs), this.tap = Gs(this.element, ms.tap || hs), this.doubleTap = Gs(this.element, ms.doubleTap || hs), this.longTap = Gs(this.element, ms.longTap || hs), this.singleTap = Gs(this.element, ms.singleTap || hs), this.pressMove = Gs(this.element, ms.pressMove || hs), this.twoFingerPressMove = Gs(this.element, ms.twoFingerPressMove || hs), this.touchMove = Gs(this.element, ms.touchMove || hs), this.touchEnd = Gs(this.element, ms.touchEnd || hs), this.touchCancel = Gs(this.element, ms.touchCancel || hs), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }, [{
            key: "start",
            value: function(ls) {
                if (ls.touches)
                    if (ls.target && ls.target.nodeName && ["a", "button", "input"].indexOf(ls.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", ls.target.nodeName.toLowerCase());
                    else {
                        this.now = Date.now(), this.x1 = ls.touches[0].pageX, this.y1 = ls.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(ls, this.element), this.preTapPosition.x !== null && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var ds = this.preV;
                        if (ls.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var ms = {
                                x: ls.touches[1].pageX - this.x1,
                                y: ls.touches[1].pageY - this.y1
                            };
                            ds.x = ms.x, ds.y = ms.y, this.pinchStartLen = mo(ds), this.multipointStart.dispatch(ls, this.element)
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                            this.longTap.dispatch(ls, this.element), this._preventTap = !0
                        }).bind(this), 750)
                    }
            }
        }, {
            key: "move",
            value: function(ls) {
                if (ls.touches) {
                    var ds = this.preV,
                        ms = ls.touches.length,
                        hs = ls.touches[0].pageX,
                        ys = ls.touches[0].pageY;
                    if (this.isDoubleTap = !1, ms > 1) {
                        var ks = ls.touches[1].pageX,
                            _s = ls.touches[1].pageY,
                            ws = {
                                x: ls.touches[1].pageX - hs,
                                y: ls.touches[1].pageY - ys
                            };
                        ds.x !== null && (this.pinchStartLen > 0 && (ls.zoom = mo(ws) / this.pinchStartLen, this.pinch.dispatch(ls, this.element)), ls.angle = $o(ws, ds), this.rotate.dispatch(ls, this.element)), ds.x = ws.x, ds.y = ws.y, this.x2 !== null && this.sx2 !== null ? (ls.deltaX = (hs - this.x2 + ks - this.sx2) / 2, ls.deltaY = (ys - this.y2 + _s - this.sy2) / 2) : (ls.deltaX = 0, ls.deltaY = 0), this.twoFingerPressMove.dispatch(ls, this.element), this.sx2 = ks, this.sy2 = _s
                    } else {
                        if (this.x2 !== null) {
                            ls.deltaX = hs - this.x2, ls.deltaY = ys - this.y2;
                            var Ss = Math.abs(this.x1 - this.x2),
                                Ns = Math.abs(this.y1 - this.y2);
                            (Ss > 10 || Ns > 10) && (this._preventTap = !0)
                        } else ls.deltaX = 0, ls.deltaY = 0;
                        this.pressMove.dispatch(ls, this.element)
                    }
                    this.touchMove.dispatch(ls, this.element), this._cancelLongTap(), this.x2 = hs, this.y2 = ys, ms > 1 && ls.preventDefault()
                }
            }
        }, {
            key: "end",
            value: function(ls) {
                if (ls.changedTouches) {
                    this._cancelLongTap();
                    var ds = this;
                    ls.touches.length < 2 && (this.multipointEnd.dispatch(ls, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (ls.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        ds.swipe.dispatch(ls, ds.element)
                    }, 0)) : (this.tapTimeout = setTimeout(function() {
                        ds._preventTap || ds.tap.dispatch(ls, ds.element), ds.isDoubleTap && (ds.doubleTap.dispatch(ls, ds.element), ds.isDoubleTap = !1)
                    }, 0), ds.isDoubleTap || (ds.singleTapTimeout = setTimeout(function() {
                        ds.singleTap.dispatch(ls, ds.element)
                    }, 250))), this.touchEnd.dispatch(ls, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll",
            value: function() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel",
            value: function(ls) {
                this.cancelAll(), this.touchCancel.dispatch(ls, this.element)
            }
        }, {
            key: "_cancelLongTap",
            value: function() {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap",
            value: function() {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection",
            value: function(ls, ds, ms, hs) {
                return Math.abs(ls - ds) >= Math.abs(ms - hs) ? ls - ds > 0 ? "Left" : "Right" : ms - hs > 0 ? "Up" : "Down"
            }
        }, {
            key: "on",
            value: function(ls, ds) {
                this[ls] && this[ls].add(ds)
            }
        }, {
            key: "off",
            value: function(ls, ds) {
                this[ls] && this[ls].del(ds)
            }
        }, {
            key: "destroy",
            value: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]);

        function Co(ls) {
            var ds = function() {
                    var _s, ws = document.createElement("fakeelement"),
                        Ss = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (_s in Ss)
                        if (ws.style[_s] !== void 0) return Ss[_s]
                }(),
                ms = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                hs = us(ls, "gslide-media") ? ls : ls.querySelector(".gslide-media"),
                ys = bs(hs, ".ginner-container"),
                ks = ls.querySelector(".gslide-description");
            ms > 769 && (hs = ys), ps(hs, "greset"), Vs(hs, "translate3d(0, 0, 0)"), vs(ds, {
                onElement: hs,
                once: !0,
                withCallback: function(_s, ws) {
                    gs(hs, "greset")
                }
            }), hs.style.opacity = "", ks && (ks.style.opacity = "")
        }

        function eo(ls) {
            if (ls.events.hasOwnProperty("touch")) return !1;
            var ds, ms, hs, ys = Ms(),
                ks = ys.width,
                _s = ys.height,
                ws = !1,
                Ss = null,
                Ns = null,
                Ds = null,
                Os = !1,
                As = 1,
                Is = 1,
                Us = !1,
                js = !1,
                ro = null,
                to = null,
                Xs = null,
                ho = null,
                ao = 0,
                _o = 0,
                ko = !1,
                wo = !1,
                lo = {},
                po = {},
                Oo = 0,
                Lo = 0,
                Mo = document.getElementById("glightbox-slider"),
                To = document.querySelector(".goverlay"),
                Uo = new bo(Mo, {
                    touchStart: function(Hs) {
                        if (ws = !0, (us(Hs.targetTouches[0].target, "ginner-container") || bs(Hs.targetTouches[0].target, ".gslide-desc") || Hs.targetTouches[0].target.nodeName.toLowerCase() == "a") && (ws = !1), bs(Hs.targetTouches[0].target, ".gslide-inline") && !us(Hs.targetTouches[0].target.parentNode, "gslide-inline") && (ws = !1), ws) {
                            if (po = Hs.targetTouches[0], lo.pageX = Hs.targetTouches[0].pageX, lo.pageY = Hs.targetTouches[0].pageY, Oo = Hs.targetTouches[0].clientX, Lo = Hs.targetTouches[0].clientY, Ss = ls.activeSlide, Ns = Ss.querySelector(".gslide-media"), hs = Ss.querySelector(".gslide-inline"), Ds = null, us(Ns, "gslide-image") && (Ds = Ns.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (Ns = Ss.querySelector(".ginner-container")), gs(To, "greset"), Hs.pageX > 20 && Hs.pageX < window.innerWidth - 20) return;
                            Hs.preventDefault()
                        }
                    },
                    touchMove: function(Hs) {
                        if (ws && (po = Hs.targetTouches[0], !Us && !js)) {
                            if (hs && hs.offsetHeight > _s) {
                                var Ws = lo.pageX - po.pageX;
                                if (Math.abs(Ws) <= 13) return !1
                            }
                            Os = !0;
                            var fo, Do = Hs.targetTouches[0].clientX,
                                Ro = Hs.targetTouches[0].clientY,
                                Fo = Oo - Do,
                                qo = Lo - Ro;
                            if (Math.abs(Fo) > Math.abs(qo) ? (ko = !1, wo = !0) : (wo = !1, ko = !0), ds = po.pageX - lo.pageX, ao = 100 * ds / ks, ms = po.pageY - lo.pageY, _o = 100 * ms / _s, ko && Ds && (fo = 1 - Math.abs(ms) / _s, To.style.opacity = fo, ls.settings.touchFollowAxis && (ao = 0)), wo && (fo = 1 - Math.abs(ds) / ks, Ns.style.opacity = fo, ls.settings.touchFollowAxis && (_o = 0)), !Ds) return Vs(Ns, "translate3d(".concat(ao, "%, 0, 0)"));
                            Vs(Ns, "translate3d(".concat(ao, "%, ").concat(_o, "%, 0)"))
                        }
                    },
                    touchEnd: function() {
                        if (ws) {
                            if (Os = !1, js || Us) return Xs = ro, void(ho = to);
                            var Hs = Math.abs(parseInt(_o)),
                                Ws = Math.abs(parseInt(ao));
                            if (!(Hs > 29 && Ds)) return Hs < 29 && Ws < 25 ? (ps(To, "greset"), To.style.opacity = 1, Co(Ns)) : void 0;
                            ls.close()
                        }
                    },
                    multipointEnd: function() {
                        setTimeout(function() {
                            Us = !1
                        }, 50)
                    },
                    multipointStart: function() {
                        Us = !0, As = Is || 1
                    },
                    pinch: function(Hs) {
                        if (!Ds || Os) return !1;
                        Us = !0, Ds.scaleX = Ds.scaleY = As * Hs.zoom;
                        var Ws = As * Hs.zoom;
                        if (js = !0, Ws <= 1) return js = !1, Ws = 1, ho = null, Xs = null, ro = null, to = null, void Ds.setAttribute("style", "");
                        Ws > 4.5 && (Ws = 4.5), Ds.style.transform = "scale3d(".concat(Ws, ", ").concat(Ws, ", 1)"), Is = Ws
                    },
                    pressMove: function(Hs) {
                        if (js && !Us) {
                            var Ws = po.pageX - lo.pageX,
                                fo = po.pageY - lo.pageY;
                            Xs && (Ws += Xs), ho && (fo += ho), ro = Ws, to = fo;
                            var Do = "translate3d(".concat(Ws, "px, ").concat(fo, "px, 0)");
                            Is && (Do += " scale3d(".concat(Is, ", ").concat(Is, ", 1)")), Vs(Ds, Do)
                        }
                    },
                    swipe: function(Hs) {
                        if (!js)
                            if (Us) Us = !1;
                            else {
                                if (Hs.direction == "Left") {
                                    if (ls.index == ls.elements.length - 1) return Co(Ns);
                                    ls.nextSlide()
                                }
                                if (Hs.direction == "Right") {
                                    if (ls.index == 0) return Co(Ns);
                                    ls.prevSlide()
                                }
                            }
                    }
                });
            ls.events.touch = Uo
        }
        var oo = $s(),
            co = $s() !== null || document.createTouch !== void 0 || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
            Eo = document.getElementsByTagName("html")[0],
            Ao = {
                selector: ".glightbox",
                elements: null,
                skin: "clean",
                theme: "clean",
                closeButton: !0,
                startAt: null,
                autoplayVideos: !0,
                autofocusVideos: !0,
                descPosition: "bottom",
                width: "900px",
                height: "506px",
                videosWidth: "960px",
                beforeSlideChange: null,
                afterSlideChange: null,
                beforeSlideLoad: null,
                afterSlideLoad: null,
                slideInserted: null,
                slideRemoved: null,
                slideExtraAttributes: null,
                onOpen: null,
                onClose: null,
                loop: !1,
                zoomable: !0,
                draggable: !0,
                dragAutoSnap: !1,
                dragToleranceX: 40,
                dragToleranceY: 65,
                preload: !0,
                oneSlidePerOpen: !1,
                touchNavigation: !0,
                touchFollowAxis: !0,
                keyboardNavigation: !0,
                closeOnOutsideClick: !0,
                plugins: !1,
                plyr: {
                    css: "https://cdn.plyr.io/3.6.12/plyr.css",
                    js: "https://cdn.plyr.io/3.6.12/plyr.js",
                    config: {
                        ratio: "16:9",
                        fullscreen: {
                            enabled: !0,
                            iosNative: !0
                        },
                        youtube: {
                            noCookie: !0,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            transparent: !1
                        }
                    }
                },
                openEffect: "zoom",
                closeEffect: "zoom",
                slideEffect: "slide",
                moreText: "See more",
                moreLength: 60,
                cssEfects: {
                    fade: { in: "fadeIn",
                        out: "fadeOut"
                    },
                    zoom: { in: "zoomIn",
                        out: "zoomOut"
                    },
                    slide: { in: "slideInRight",
                        out: "slideOutLeft"
                    },
                    slideBack: { in: "slideInLeft",
                        out: "slideOutRight"
                    },
                    none: { in: "none",
                        out: "none"
                    }
                },
                svg: {
                    close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                    next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                    prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
                },
                slideHTML: `<div class="gslide">
    <div class="gslide-inner-content">
        <div class="ginner-container">
            <div class="gslide-media">
            </div>
            <div class="gslide-description">
                <div class="gdesc-inner">
                    <h4 class="gslide-title"></h4>
                    <div class="gslide-desc"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,
                lightboxHTML: `<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
</div>
</div>`
            },
            Io = is(function ls() {
                var ds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                ss(this, ls), this.customOptions = ds, this.settings = as(Ao, ds), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }, [{
                key: "init",
                value: function() {
                    var ls = this,
                        ds = this.getSelector();
                    ds && (this.baseEvents = vs("click", {
                        onElement: ds,
                        withCallback: function(ms, hs) {
                            ms.preventDefault(), ls.open(hs)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                        ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    if (this.elements.length === 0) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var ms = go(ds) ? ds : this.settings.startAt;
                    if (Fs(ls)) {
                        var hs = ls.getAttribute("data-gallery");
                        hs && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, hs)), Ys(ms) && (ms = this.getElementIndex(ls)) < 0 && (ms = 0)
                    }
                    go(ms) || (ms = 0), this.build(), Bs(this.overlay, this.settings.openEffect === "none" ? "none" : this.settings.cssEfects.fade.in);
                    var ys = document.body,
                        ks = window.innerWidth - document.documentElement.clientWidth;
                    if (ks > 0) {
                        var _s = document.createElement("style");
                        _s.type = "text/css", _s.className = "gcss-styles", _s.innerText = ".gscrollbar-fixer {margin-right: ".concat(ks, "px}"), document.head.appendChild(_s), ps(ys, "gscrollbar-fixer")
                    }
                    ps(ys, "glightbox-open"), ps(Eo, "glightbox-open"), oo && (ps(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(ms, !0), this.elements.length === 1 ? (ps(this.prevButton, "glightbox-button-hidden"), ps(this.nextButton, "glightbox-button-hidden")) : (gs(this.prevButton, "glightbox-button-hidden"), gs(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), Cs(this.settings.onOpen) && this.settings.onOpen(), co && this.settings.touchNavigation && eo(this), this.settings.keyboardNavigation && uo(this)
                }
            }, {
                key: "openAt",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                    this.open(null, ls)
                }
            }, {
                key: "showSlide",
                value: function() {
                    var ls = this,
                        ds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        ms = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                    xs(this.loader), this.index = parseInt(ds);
                    var hs = this.slidesContainer.querySelector(".current");
                    hs && gs(hs, "current"), this.slideAnimateOut();
                    var ys = this.slidesContainer.querySelectorAll(".gslide")[ds];
                    if (us(ys, "loaded")) this.slideAnimateIn(ys, ms), Ls(this.loader);
                    else {
                        xs(this.loader);
                        var ks = this.elements[ds],
                            _s = {
                                index: this.index,
                                slide: ys,
                                slideNode: ys,
                                slideConfig: ks.slideConfig,
                                slideIndex: this.index,
                                trigger: ks.node,
                                player: null
                            };
                        this.trigger("slide_before_load", _s), ks.instance.setContent(ys, function() {
                            Ls(ls.loader), ls.resize(), ls.slideAnimateIn(ys, ms), ls.trigger("slide_after_load", _s)
                        })
                    }
                    this.slideDescription = ys.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && us(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(ds + 1), this.preloadSlide(ds - 1)), this.updateNavigationClasses(), this.activeSlide = ys
                }
            }, {
                key: "preloadSlide",
                value: function(ls) {
                    var ds = this;
                    if (ls < 0 || ls > this.elements.length - 1 || Ys(this.elements[ls])) return !1;
                    var ms = this.slidesContainer.querySelectorAll(".gslide")[ls];
                    if (us(ms, "loaded")) return !1;
                    var hs = this.elements[ls],
                        ys = hs.type,
                        ks = {
                            index: ls,
                            slide: ms,
                            slideNode: ms,
                            slideConfig: hs.slideConfig,
                            slideIndex: ls,
                            trigger: hs.node,
                            player: null
                        };
                    this.trigger("slide_before_load", ks), ys === "video" || ys === "external" ? setTimeout(function() {
                        hs.instance.setContent(ms, function() {
                            ds.trigger("slide_after_load", ks)
                        })
                    }, 200) : hs.instance.setContent(ms, function() {
                        ds.trigger("slide_after_load", ks)
                    })
                }
            }, {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (ls < 0 || ls > this.elements.length - 1)) return !1;
                    ls < 0 ? ls = this.elements.length - 1 : ls >= this.elements.length && (ls = 0), this.showSlide(ls)
                }
            }, {
                key: "insertSlide",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        ds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
                    ds < 0 && (ds = this.elements.length);
                    var ms = new yo(ls, this, ds),
                        hs = ms.getConfig(),
                        ys = as({}, hs),
                        ks = ms.create(),
                        _s = this.elements.length - 1;
                    ys.index = ds, ys.node = !1, ys.instance = ms, ys.slideConfig = hs, this.elements.splice(ds, 0, ys);
                    var ws = null,
                        Ss = null;
                    if (this.slidesContainer) {
                        if (ds > _s) this.slidesContainer.appendChild(ks);
                        else {
                            var Ns = this.slidesContainer.querySelectorAll(".gslide")[ds];
                            this.slidesContainer.insertBefore(ks, Ns)
                        }(this.settings.preload && this.index == 0 && ds == 0 || this.index - 1 == ds || this.index + 1 == ds) && this.preloadSlide(ds), this.index === 0 && ds === 0 && (this.index = 1), this.updateNavigationClasses(), ws = this.slidesContainer.querySelectorAll(".gslide")[ds], Ss = this.getSlidePlayerInstance(ds), ys.slideNode = ws
                    }
                    this.trigger("slide_inserted", {
                        index: ds,
                        slide: ws,
                        slideNode: ws,
                        slideConfig: hs,
                        slideIndex: ds,
                        trigger: null,
                        player: Ss
                    }), Cs(this.settings.slideInserted) && this.settings.slideInserted({
                        index: ds,
                        slide: ws,
                        player: Ss
                    })
                }
            }, {
                key: "removeSlide",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
                    if (ls < 0 || ls > this.elements.length - 1) return !1;
                    var ds = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[ls];
                    ds && (this.getActiveSlideIndex() == ls && (ls == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), ds.parentNode.removeChild(ds)), this.elements.splice(ls, 1), this.trigger("slide_removed", ls), Cs(this.settings.slideRemoved) && this.settings.slideRemoved(ls)
                }
            }, {
                key: "slideAnimateIn",
                value: function(ls, ds) {
                    var ms = this,
                        hs = ls.querySelector(".gslide-media"),
                        ys = ls.querySelector(".gslide-description"),
                        ks = {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlide,
                            slideConfig: Ys(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: Ys(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        _s = {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideConfig: this.elements[this.index].slideConfig,
                            slideIndex: this.index,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        };
                    if (hs.offsetWidth > 0 && ys && (Ls(ys), ys.style.display = ""), gs(ls, this.effectsClasses), ds) Bs(ls, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        ms.settings.autoplayVideos && ms.slidePlayerPlay(ls), ms.trigger("slide_changed", {
                            prev: ks,
                            current: _s
                        }), Cs(ms.settings.afterSlideChange) && ms.settings.afterSlideChange.apply(ms, [ks, _s])
                    });
                    else {
                        var ws = this.settings.slideEffect,
                            Ss = ws !== "none" ? this.settings.cssEfects[ws].in : ws;
                        this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide" && (Ss = this.settings.cssEfects.slideBack.in), Bs(ls, Ss, function() {
                            ms.settings.autoplayVideos && ms.slidePlayerPlay(ls), ms.trigger("slide_changed", {
                                prev: ks,
                                current: _s
                            }), Cs(ms.settings.afterSlideChange) && ms.settings.afterSlideChange.apply(ms, [ks, _s])
                        })
                    }
                    setTimeout(function() {
                        ms.resize(ls)
                    }, 100), ps(ls, "current")
                }
            }, {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var ls = this.prevActiveSlide;
                    gs(ls, this.effectsClasses), ps(ls, "prev");
                    var ds = this.settings.slideEffect,
                        ms = ds !== "none" ? this.settings.cssEfects[ds].out : ds;
                    this.slidePlayerPause(ls), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: Ys(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: Ys(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), Cs(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide" && (ms = this.settings.cssEfects.slideBack.out), Bs(ls, ms, function() {
                        var hs = ls.querySelector(".ginner-container"),
                            ys = ls.querySelector(".gslide-media"),
                            ks = ls.querySelector(".gslide-description");
                        hs.style.transform = "", ys.style.transform = "", gs(ys, "greset"), ys.style.opacity = "", ks && (ks.style.opacity = ""), gs(ls, "prev")
                    })
                }
            }, {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance",
                value: function(ls) {
                    var ds = "gvideo" + ls,
                        ms = this.getAllPlayers();
                    return !(!zs(ms, ds) || !ms[ds]) && ms[ds]
                }
            }, {
                key: "stopSlideVideo",
                value: function(ls) {
                    if (Fs(ls)) {
                        var ds = ls.querySelector(".gvideo-wrapper");
                        ds && (ls = ds.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var ms = this.getSlidePlayerInstance(ls);
                    ms && ms.playing && ms.pause()
                }
            }, {
                key: "slidePlayerPause",
                value: function(ls) {
                    if (Fs(ls)) {
                        var ds = ls.querySelector(".gvideo-wrapper");
                        ds && (ls = ds.getAttribute("data-index"))
                    }
                    var ms = this.getSlidePlayerInstance(ls);
                    ms && ms.playing && ms.pause()
                }
            }, {
                key: "playSlideVideo",
                value: function(ls) {
                    if (Fs(ls)) {
                        var ds = ls.querySelector(".gvideo-wrapper");
                        ds && (ls = ds.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var ms = this.getSlidePlayerInstance(ls);
                    ms && !ms.playing && ms.play()
                }
            }, {
                key: "slidePlayerPlay",
                value: function(ls) {
                    var ds;
                    if (!oo || (ds = this.settings.plyr.config) !== null && ds !== void 0 && ds.muted) {
                        if (Fs(ls)) {
                            var ms = ls.querySelector(".gvideo-wrapper");
                            ms && (ls = ms.getAttribute("data-index"))
                        }
                        var hs = this.getSlidePlayerInstance(ls);
                        hs && !hs.playing && (hs.play(), this.settings.autofocusVideos && hs.elements.container.focus())
                    }
                }
            }, {
                key: "setElements",
                value: function(ls) {
                    var ds = this;
                    this.settings.elements = !1;
                    var ms = [];
                    ls && ls.length && cs(ls, function(hs, ys) {
                        var ks = new yo(hs, ds, ys),
                            _s = ks.getConfig(),
                            ws = as({}, _s);
                        ws.slideConfig = _s, ws.instance = ks, ws.index = ys, ms.push(ws)
                    }), this.elements = ms, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (cs(this.elements, function() {
                        var hs = Rs(ds.settings.slideHTML);
                        ds.slidesContainer.appendChild(hs)
                    }), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex",
                value: function(ls) {
                    var ds = !1;
                    return cs(this.elements, function(ms, hs) {
                        if (zs(ms, "node") && ms.node == ls) return ds = hs, !0
                    }), ds
                }
            }, {
                key: "getElements",
                value: function() {
                    var ls = this,
                        ds = [];
                    this.elements = this.elements ? this.elements : [], !Ys(this.settings.elements) && Zs(this.settings.elements) && this.settings.elements.length && cs(this.settings.elements, function(hs, ys) {
                        var ks = new yo(hs, ls, ys),
                            _s = ks.getConfig(),
                            ws = as({}, _s);
                        ws.node = !1, ws.index = ys, ws.instance = ks, ws.slideConfig = _s, ds.push(ws)
                    });
                    var ms = !1;
                    return this.getSelector() && (ms = document.querySelectorAll(this.getSelector())), ms && cs(ms, function(hs, ys) {
                        var ks = new yo(hs, ls, ys),
                            _s = ks.getConfig(),
                            ws = as({}, _s);
                        ws.node = hs, ws.index = ys, ws.instance = ks, ws.slideConfig = _s, ws.gallery = hs.getAttribute("data-gallery"), ds.push(ws)
                    }), ds
                }
            }, {
                key: "getGalleryElements",
                value: function(ls, ds) {
                    return ls.filter(function(ms) {
                        return ms.gallery == ds
                    })
                }
            }, {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && this.settings.selector.substring(0, 5) == "data-" ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index
                }
            }, {
                key: "getAnimationClasses",
                value: function() {
                    var ls = [];
                    for (var ds in this.settings.cssEfects)
                        if (this.settings.cssEfects.hasOwnProperty(ds)) {
                            var ms = this.settings.cssEfects[ds];
                            ls.push("g".concat(ms.in)), ls.push("g".concat(ms.out))
                        }
                    return ls.join(" ")
                }
            }, {
                key: "build",
                value: function() {
                    var ls = this;
                    if (this.built) return !1;
                    var ds = document.body.childNodes,
                        ms = [];
                    cs(ds, function(Ns) {
                        Ns.parentNode == document.body && Ns.nodeName.charAt(0) !== "#" && Ns.hasAttribute && !Ns.hasAttribute("aria-hidden") && (ms.push(Ns), Ns.setAttribute("aria-hidden", "true"))
                    });
                    var hs = zs(this.settings.svg, "next") ? this.settings.svg.next : "",
                        ys = zs(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        ks = zs(this.settings.svg, "close") ? this.settings.svg.close : "",
                        _s = this.settings.lightboxHTML;
                    _s = Rs(_s = (_s = (_s = _s.replace(/{nextSVG}/g, hs)).replace(/{prevSVG}/g, ys)).replace(/{closeSVG}/g, ks)), document.body.appendChild(_s);
                    var ws = document.getElementById("glightbox-body");
                    this.modal = ws;
                    var Ss = ws.querySelector(".gclose");
                    this.prevButton = ws.querySelector(".gprev"), this.nextButton = ws.querySelector(".gnext"), this.overlay = ws.querySelector(".goverlay"), this.loader = ws.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = ms, this.events = {}, ps(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && Ss && (this.events.close = vs("click", {
                        onElement: Ss,
                        withCallback: function(Ns, Ds) {
                            Ns.preventDefault(), ls.close()
                        }
                    })), Ss && !this.settings.closeButton && Ss.parentNode.removeChild(Ss), this.nextButton && (this.events.next = vs("click", {
                        onElement: this.nextButton,
                        withCallback: function(Ns, Ds) {
                            Ns.preventDefault(), ls.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = vs("click", {
                        onElement: this.prevButton,
                        withCallback: function(Ns, Ds) {
                            Ns.preventDefault(), ls.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = vs("click", {
                        onElement: ws,
                        withCallback: function(Ns, Ds) {
                            ls.preventOutsideClick || us(document.body, "glightbox-mobile") || bs(Ns.target, ".ginner-container") || bs(Ns.target, ".gbtn") || us(Ns.target, "gnext") || us(Ns.target, "gprev") || ls.close()
                        }
                    })), cs(this.elements, function(Ns, Ds) {
                        ls.slidesContainer.appendChild(Ns.instance.create()), Ns.slideNode = ls.slidesContainer.querySelectorAll(".gslide")[Ds]
                    }), co && ps(document.body, "glightbox-touch"), this.events.resize = vs("resize", {
                        onElement: window,
                        withCallback: function() {
                            ls.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize",
                value: function() {
                    var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                    if ((ls = ls || this.activeSlide) && !us(ls, "zoomed")) {
                        var ds = Ms(),
                            ms = ls.querySelector(".gvideo-wrapper"),
                            hs = ls.querySelector(".gslide-image"),
                            ys = this.slideDescription,
                            ks = ds.width,
                            _s = ds.height;
                        if (ks <= 768 ? ps(document.body, "glightbox-mobile") : gs(document.body, "glightbox-mobile"), ms || hs) {
                            var ws = !1;
                            if (ys && (us(ys, "description-bottom") || us(ys, "description-top")) && !us(ys, "gabsolute") && (ws = !0), hs) {
                                if (ks <= 768) hs.querySelector("img");
                                else if (ws) {
                                    var Ss, Ns = ys.offsetHeight,
                                        Ds = hs.querySelector("img"),
                                        Os = this.elements[this.index].node,
                                        As = (Ss = Os.getAttribute("data-height")) !== null && Ss !== void 0 ? Ss : "100vh";
                                    Ds.setAttribute("style", "max-height: calc(".concat(As, " - ").concat(Ns, "px)")), ys.setAttribute("style", "max-width: ".concat(Ds.offsetWidth, "px;"))
                                }
                            }
                            if (ms) {
                                var Is = zs(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!Is) {
                                    var Us = ms.clientWidth,
                                        js = ms.clientHeight,
                                        ro = Us / js;
                                    Is = "".concat(Us / ro, ":").concat(js / ro)
                                }
                                var to = Is.split(":"),
                                    Xs = this.settings.videosWidth,
                                    ho = this.settings.videosWidth,
                                    ao = (ho = go(Xs) || Xs.indexOf("px") !== -1 ? parseInt(Xs) : Xs.indexOf("vw") !== -1 ? ks * parseInt(Xs) / 100 : Xs.indexOf("vh") !== -1 ? _s * parseInt(Xs) / 100 : Xs.indexOf("%") !== -1 ? ks * parseInt(Xs) / 100 : parseInt(ms.clientWidth)) / (parseInt(to[0]) / parseInt(to[1]));
                                if (ao = Math.floor(ao), ws && (_s -= ys.offsetHeight), ho > ks || ao > _s || _s < ao && ks > ho) {
                                    var _o = ms.offsetWidth,
                                        ko = ms.offsetHeight,
                                        wo = _s / ko,
                                        lo = {
                                            width: _o * wo,
                                            height: ko * wo
                                        };
                                    ms.parentNode.setAttribute("style", "max-width: ".concat(lo.width, "px")), ws && ys.setAttribute("style", "max-width: ".concat(lo.width, "px;"))
                                } else ms.parentNode.style.maxWidth = "".concat(Xs), ws && ys.setAttribute("style", "max-width: ".concat(Xs, ";"))
                            }
                        }
                    }
                }
            }, {
                key: "reload",
                value: function() {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses",
                value: function() {
                    var ls = this.loop();
                    gs(this.nextButton, "disabled"), gs(this.prevButton, "disabled"), this.index == 0 && this.elements.length - 1 == 0 ? (ps(this.prevButton, "disabled"), ps(this.nextButton, "disabled")) : this.index !== 0 || ls ? this.index !== this.elements.length - 1 || ls || ps(this.nextButton, "disabled") : ps(this.prevButton, "disabled")
                }
            }, {
                key: "loop",
                value: function() {
                    var ls = zs(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return ls = zs(this.settings, "loop") ? this.settings.loop : ls, ls
                }
            }, {
                key: "close",
                value: function() {
                    var ls = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var ds in this.events) this.events.hasOwnProperty(ds) && this.events[ds].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && cs(this.bodyHiddenChildElms, function(ms) {
                        ms.removeAttribute("aria-hidden")
                    }), ps(this.modal, "glightbox-closing"), Bs(this.overlay, this.settings.openEffect == "none" ? "none" : this.settings.cssEfects.fade.out), Bs(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (ls.activeSlide = null, ls.prevActiveSlideIndex = null, ls.prevActiveSlide = null, ls.built = !1, ls.events) {
                            for (var ms in ls.events) ls.events.hasOwnProperty(ms) && ls.events[ms].destroy();
                            ls.events = null
                        }
                        var hs = document.body;
                        gs(Eo, "glightbox-open"), gs(hs, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), ls.modal.parentNode.removeChild(ls.modal), ls.trigger("close"), Cs(ls.settings.onClose) && ls.settings.onClose();
                        var ys = document.querySelector(".gcss-styles");
                        ys && ys.parentNode.removeChild(ys), ls.lightboxOpen = !1, ls.closing = null
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on",
                value: function(ls, ds) {
                    var ms = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                    if (!ls || !Cs(ds)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: ls,
                        once: ms,
                        callback: ds
                    })
                }
            }, {
                key: "once",
                value: function(ls, ds) {
                    this.on(ls, ds, !0)
                }
            }, {
                key: "trigger",
                value: function(ls) {
                    var ds = this,
                        ms = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                        hs = [];
                    cs(this.apiEvents, function(ys, ks) {
                        var _s = ys.evt,
                            ws = ys.once,
                            Ss = ys.callback;
                        _s == ls && (Ss(ms), ws && hs.push(ks))
                    }), hs.length && cs(hs, function(ys) {
                        return ds.apiEvents.splice(ys, 1)
                    })
                }
            }, {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version",
                value: function() {
                    return "3.3.0"
                }
            }]);
        return function() {
            var ls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                ds = new Io(ls);
            return ds.init(), ds
        }
    })
})(glightbox_min$1);
var glightbox_minExports = glightbox_min$1.exports;
const GLightbox = getDefaultExportFromCjs(glightbox_minExports),
    glightbox_min = "";

function forEvents(es, ze) {
    es.split(/\s+/).forEach(ts => {
        ze(ts)
    })
}
class MicroEvent {
    constructor() {
        this._events = void 0, this._events = {}
    }
    on(ze, ts) {
        forEvents(ze, os => {
            const ss = this._events[os] || [];
            ss.push(ts), this._events[os] = ss
        })
    }
    off(ze, ts) {
        var os = arguments.length;
        if (os === 0) {
            this._events = {};
            return
        }
        forEvents(ze, ss => {
            if (os === 1) {
                delete this._events[ss];
                return
            }
            const rs = this._events[ss];
            rs !== void 0 && (rs.splice(rs.indexOf(ts), 1), this._events[ss] = rs)
        })
    }
    trigger(ze, ...ts) {
        var os = this;
        forEvents(ze, ss => {
            const rs = os._events[ss];
            rs !== void 0 && rs.forEach(is => {
                is.apply(os, ts)
            })
        })
    }
}

function MicroPlugin(es) {
    return es.plugins = {}, class extends es {
        constructor(...ze) {
            super(...ze), this.plugins = {
                names: [],
                settings: {},
                requested: {},
                loaded: {}
            }
        }
        static define(ze, ts) {
            es.plugins[ze] = {
                name: ze,
                fn: ts
            }
        }
        initializePlugins(ze) {
            var ts, os;
            const ss = this,
                rs = [];
            if (Array.isArray(ze)) ze.forEach(is => {
                typeof is == "string" ? rs.push(is) : (ss.plugins.settings[is.name] = is.options, rs.push(is.name))
            });
            else if (ze)
                for (ts in ze) ze.hasOwnProperty(ts) && (ss.plugins.settings[ts] = ze[ts], rs.push(ts));
            for (; os = rs.shift();) ss.require(os)
        }
        loadPlugin(ze) {
            var ts = this,
                os = ts.plugins,
                ss = es.plugins[ze];
            if (!es.plugins.hasOwnProperty(ze)) throw new Error('Unable to find "' + ze + '" plugin');
            os.requested[ze] = !0, os.loaded[ze] = ss.fn.apply(ts, [ts.plugins.settings[ze] || {}]), os.names.push(ze)
        }
        require(ze) {
            var ts = this,
                os = ts.plugins;
            if (!ts.plugins.loaded.hasOwnProperty(ze)) {
                if (os.requested[ze]) throw new Error('Plugin has circular dependency ("' + ze + '")');
                ts.loadPlugin(ze)
            }
            return os.loaded[ze]
        }
    }
} /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */
const arrayToPattern = es => (es = es.filter(Boolean), es.length < 2 ? es[0] || "" : maxValueLength(es) == 1 ? "[" + es.join("") + "]" : "(?:" + es.join("|") + ")"),
    sequencePattern = es => {
        if (!hasDuplicates(es)) return es.join("");
        let ze = "",
            ts = 0;
        const os = () => {
            ts > 1 && (ze += "{" + ts + "}")
        };
        return es.forEach((ss, rs) => {
            if (ss === es[rs - 1]) {
                ts++;
                return
            }
            os(), ze += ss, ts = 1
        }), os(), ze
    },
    setToPattern = es => {
        let ze = toArray(es);
        return arrayToPattern(ze)
    },
    hasDuplicates = es => new Set(es).size !== es.length,
    escape_regex = es => (es + "").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu, "\\$1"),
    maxValueLength = es => es.reduce((ze, ts) => Math.max(ze, unicodeLength(ts)), 0),
    unicodeLength = es => toArray(es).length,
    toArray = es => Array.from(es); /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */
const allSubstrings = es => {
    if (es.length === 1) return [
        [es]
    ];
    let ze = [];
    const ts = es.substring(1);
    return allSubstrings(ts).forEach(function(ss) {
        let rs = ss.slice(0);
        rs[0] = es.charAt(0) + rs[0], ze.push(rs), rs = ss.slice(0), rs.unshift(es.charAt(0)), ze.push(rs)
    }), ze
}; /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */
const code_points = [
        [0, 65535]
    ],
    accent_pat = "[̀-ͯ·ʾʼ]";
let unicode_map, multi_char_reg;
const max_char_length = 3,
    latin_convert = {},
    latin_condensed = {
        "/": "⁄∕",
        0: "߀",
        a: "ⱥɐɑ",
        aa: "ꜳ",
        ae: "æǽǣ",
        ao: "ꜵ",
        au: "ꜷ",
        av: "ꜹꜻ",
        ay: "ꜽ",
        b: "ƀɓƃ",
        c: "ꜿƈȼↄ",
        d: "đɗɖᴅƌꮷԁɦ",
        e: "ɛǝᴇɇ",
        f: "ꝼƒ",
        g: "ǥɠꞡᵹꝿɢ",
        h: "ħⱨⱶɥ",
        i: "ɨı",
        j: "ɉȷ",
        k: "ƙⱪꝁꝃꝅꞣ",
        l: "łƚɫⱡꝉꝇꞁɭ",
        m: "ɱɯϻ",
        n: "ꞥƞɲꞑᴎлԉ",
        o: "øǿɔɵꝋꝍᴑ",
        oe: "œ",
        oi: "ƣ",
        oo: "ꝏ",
        ou: "ȣ",
        p: "ƥᵽꝑꝓꝕρ",
        q: "ꝗꝙɋ",
        r: "ɍɽꝛꞧꞃ",
        s: "ßȿꞩꞅʂ",
        t: "ŧƭʈⱦꞇ",
        th: "þ",
        tz: "ꜩ",
        u: "ʉ",
        v: "ʋꝟʌ",
        vy: "ꝡ",
        w: "ⱳ",
        y: "ƴɏỿ",
        z: "ƶȥɀⱬꝣ",
        hv: "ƕ"
    };
for (let es in latin_condensed) {
    let ze = latin_condensed[es] || "";
    for (let ts = 0; ts < ze.length; ts++) {
        let os = ze.substring(ts, ts + 1);
        latin_convert[os] = es
    }
}
const convert_pat = new RegExp(Object.keys(latin_convert).join("|") + "|" + accent_pat, "gu"),
    initialize = es => {
        unicode_map === void 0 && (unicode_map = generateMap(es || code_points))
    },
    normalize = (es, ze = "NFKD") => es.normalize(ze),
    asciifold = es => toArray(es).reduce((ze, ts) => ze + _asciifold(ts), ""),
    _asciifold = es => (es = normalize(es).toLowerCase().replace(convert_pat, ze => latin_convert[ze] || ""), normalize(es, "NFC"));

function* generator(es) {
    for (const [ze, ts] of es)
        for (let os = ze; os <= ts; os++) {
            let ss = String.fromCharCode(os),
                rs = asciifold(ss);
            rs != ss.toLowerCase() && (rs.length > max_char_length || rs.length != 0 && (yield {
                folded: rs,
                composed: ss,
                code_point: os
            }))
        }
}
const generateSets = es => {
        const ze = {},
            ts = (os, ss) => {
                const rs = ze[os] || new Set,
                    is = new RegExp("^" + setToPattern(rs) + "$", "iu");
                ss.match(is) || (rs.add(escape_regex(ss)), ze[os] = rs)
            };
        for (let os of generator(es)) ts(os.folded, os.folded), ts(os.folded, os.composed);
        return ze
    },
    generateMap = es => {
        const ze = generateSets(es),
            ts = {};
        let os = [];
        for (let rs in ze) {
            let is = ze[rs];
            is && (ts[rs] = setToPattern(is)), rs.length > 1 && os.push(escape_regex(rs))
        }
        os.sort((rs, is) => is.length - rs.length);
        const ss = arrayToPattern(os);
        return multi_char_reg = new RegExp("^" + ss, "u"), ts
    },
    mapSequence = (es, ze = 1) => {
        let ts = 0;
        return es = es.map(os => (unicode_map[os] && (ts += os.length), unicode_map[os] || os)), ts >= ze ? sequencePattern(es) : ""
    },
    substringsToPattern = (es, ze = 1) => (ze = Math.max(ze, es.length - 1), arrayToPattern(allSubstrings(es).map(ts => mapSequence(ts, ze)))),
    sequencesToPattern = (es, ze = !0) => {
        let ts = es.length > 1 ? 1 : 0;
        return arrayToPattern(es.map(os => {
            let ss = [];
            const rs = ze ? os.length() : os.length() - 1;
            for (let is = 0; is < rs; is++) ss.push(substringsToPattern(os.substrs[is] || "", ts));
            return sequencePattern(ss)
        }))
    },
    inSequences = (es, ze) => {
        for (const ts of ze) {
            if (ts.start != es.start || ts.end != es.end || ts.substrs.join("") !== es.substrs.join("")) continue;
            let os = es.parts;
            const ss = is => {
                for (const ns of os) {
                    if (ns.start === is.start && ns.substr === is.substr) return !1;
                    if (!(is.length == 1 || ns.length == 1) && (is.start < ns.start && is.end > ns.start || ns.start < is.start && ns.end > is.start)) return !0
                }
                return !1
            };
            if (!(ts.parts.filter(ss).length > 0)) return !0
        }
        return !1
    };
class Sequence {
    constructor() {
        this.parts = [], this.substrs = [], this.start = 0, this.end = 0
    }
    add(ze) {
        ze && (this.parts.push(ze), this.substrs.push(ze.substr), this.start = Math.min(ze.start, this.start), this.end = Math.max(ze.end, this.end))
    }
    last() {
        return this.parts[this.parts.length - 1]
    }
    length() {
        return this.parts.length
    }
    clone(ze, ts) {
        let os = new Sequence,
            ss = JSON.parse(JSON.stringify(this.parts)),
            rs = ss.pop();
        for (const as of ss) os.add(as);
        let is = ts.substr.substring(0, ze - rs.start),
            ns = is.length;
        return os.add({
            start: rs.start,
            end: rs.start + ns,
            length: ns,
            substr: is
        }), os
    }
}
const getPattern = es => {
    initialize(), es = asciifold(es);
    let ze = "",
        ts = [new Sequence];
    for (let os = 0; os < es.length; os++) {
        let rs = es.substring(os).match(multi_char_reg);
        const is = es.substring(os, os + 1),
            ns = rs ? rs[0] : null;
        let as = [],
            cs = new Set;
        for (const fs of ts) {
            const vs = fs.last();
            if (!vs || vs.length == 1 || vs.end <= os)
                if (ns) {
                    const ps = ns.length;
                    fs.add({
                        start: os,
                        end: os + ps,
                        length: ps,
                        substr: ns
                    }), cs.add("1")
                } else fs.add({
                    start: os,
                    end: os + 1,
                    length: 1,
                    substr: is
                }), cs.add("2");
            else if (ns) {
                let ps = fs.clone(os, vs);
                const gs = ns.length;
                ps.add({
                    start: os,
                    end: os + gs,
                    length: gs,
                    substr: ns
                }), as.push(ps)
            } else cs.add("3")
        }
        if (as.length > 0) {
            as = as.sort((fs, vs) => fs.length() - vs.length());
            for (let fs of as) inSequences(fs, ts) || ts.push(fs);
            continue
        }
        if (os > 0 && cs.size == 1 && !cs.has("3")) {
            ze += sequencesToPattern(ts, !1);
            let fs = new Sequence;
            const vs = ts[0];
            vs && fs.add(vs.last()), ts = [fs]
        }
    }
    return ze += sequencesToPattern(ts, !0), ze
}; /*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
const getAttr = (es, ze) => {
        if (es) return es[ze]
    },
    getAttrNesting = (es, ze) => {
        if (es) {
            for (var ts, os = ze.split(".");
                (ts = os.shift()) && (es = es[ts]););
            return es
        }
    },
    scoreValue = (es, ze, ts) => {
        var os, ss;
        return !es || (es = es + "", ze.regex == null) || (ss = es.search(ze.regex), ss === -1) ? 0 : (os = ze.string.length / es.length, ss === 0 && (os += .5), os * ts)
    },
    propToArray = (es, ze) => {
        var ts = es[ze];
        if (typeof ts == "function") return ts;
        ts && !Array.isArray(ts) && (es[ze] = [ts])
    },
    iterate$1 = (es, ze) => {
        if (Array.isArray(es)) es.forEach(ze);
        else
            for (var ts in es) es.hasOwnProperty(ts) && ze(es[ts], ts)
    },
    cmp = (es, ze) => typeof es == "number" && typeof ze == "number" ? es > ze ? 1 : es < ze ? -1 : 0 : (es = asciifold(es + "").toLowerCase(), ze = asciifold(ze + "").toLowerCase(), es > ze ? 1 : ze > es ? -1 : 0); /*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
class Sifter {
    constructor(ze, ts) {
        this.items = void 0, this.settings = void 0, this.items = ze, this.settings = ts || {
            diacritics: !0
        }
    }
    tokenize(ze, ts, os) {
        if (!ze || !ze.length) return [];
        const ss = [],
            rs = ze.split(/\s+/);
        var is;
        return os && (is = new RegExp("^(" + Object.keys(os).map(escape_regex).join("|") + "):(.*)$")), rs.forEach(ns => {
            let as, cs = null,
                fs = null;
            is && (as = ns.match(is)) && (cs = as[1], ns = as[2]), ns.length > 0 && (this.settings.diacritics ? fs = getPattern(ns) || null : fs = escape_regex(ns), fs && ts && (fs = "\\b" + fs)), ss.push({
                string: ns,
                regex: fs ? new RegExp(fs, "iu") : null,
                field: cs
            })
        }), ss
    }
    getScoreFunction(ze, ts) {
        var os = this.prepareSearch(ze, ts);
        return this._getScoreFunction(os)
    }
    _getScoreFunction(ze) {
        const ts = ze.tokens,
            os = ts.length;
        if (!os) return function() {
            return 0
        };
        const ss = ze.options.fields,
            rs = ze.weights,
            is = ss.length,
            ns = ze.getAttrFn;
        if (!is) return function() {
            return 1
        };
        const as = function() {
            return is === 1 ? function(cs, fs) {
                const vs = ss[0].field;
                return scoreValue(ns(fs, vs), cs, rs[vs] || 1)
            } : function(cs, fs) {
                var vs = 0;
                if (cs.field) {
                    const ps = ns(fs, cs.field);
                    !cs.regex && ps ? vs += 1 / is : vs += scoreValue(ps, cs, 1)
                } else iterate$1(rs, (ps, gs) => {
                    vs += scoreValue(ns(fs, gs), cs, ps)
                });
                return vs / is
            }
        }();
        return os === 1 ? function(cs) {
            return as(ts[0], cs)
        } : ze.options.conjunction === "and" ? function(cs) {
            var fs, vs = 0;
            for (let ps of ts) {
                if (fs = as(ps, cs), fs <= 0) return 0;
                vs += fs
            }
            return vs / os
        } : function(cs) {
            var fs = 0;
            return iterate$1(ts, vs => {
                fs += as(vs, cs)
            }), fs / os
        }
    }
    getSortFunction(ze, ts) {
        var os = this.prepareSearch(ze, ts);
        return this._getSortFunction(os)
    }
    _getSortFunction(ze) {
        var ts, os = [];
        const ss = this,
            rs = ze.options,
            is = !ze.query && rs.sort_empty ? rs.sort_empty : rs.sort;
        if (typeof is == "function") return is.bind(this);
        const ns = function(fs, vs) {
            return fs === "$score" ? vs.score : ze.getAttrFn(ss.items[vs.id], fs)
        };
        if (is)
            for (let cs of is)(ze.query || cs.field !== "$score") && os.push(cs);
        if (ze.query) {
            ts = !0;
            for (let cs of os)
                if (cs.field === "$score") {
                    ts = !1;
                    break
                }
            ts && os.unshift({
                field: "$score",
                direction: "desc"
            })
        } else os = os.filter(cs => cs.field !== "$score");
        return os.length ? function(cs, fs) {
            var vs, ps;
            for (let gs of os)
                if (ps = gs.field, vs = (gs.direction === "desc" ? -1 : 1) * cmp(ns(ps, cs), ns(ps, fs)), vs) return vs;
            return 0
        } : null
    }
    prepareSearch(ze, ts) {
        const os = {};
        var ss = Object.assign({}, ts);
        if (propToArray(ss, "sort"), propToArray(ss, "sort_empty"), ss.fields) {
            propToArray(ss, "fields");
            const rs = [];
            ss.fields.forEach(is => {
                typeof is == "string" && (is = {
                    field: is,
                    weight: 1
                }), rs.push(is), os[is.field] = "weight" in is ? is.weight : 1
            }), ss.fields = rs
        }
        return {
            options: ss,
            query: ze.toLowerCase().trim(),
            tokens: this.tokenize(ze, ss.respect_word_boundaries, os),
            total: 0,
            items: [],
            weights: os,
            getAttrFn: ss.nesting ? getAttrNesting : getAttr
        }
    }
    search(ze, ts) {
        var os = this,
            ss, rs;
        rs = this.prepareSearch(ze, ts), ts = rs.options, ze = rs.query;
        const is = ts.score || os._getScoreFunction(rs);
        ze.length ? iterate$1(os.items, (as, cs) => {
            ss = is(as), (ts.filter === !1 || ss > 0) && rs.items.push({
                score: ss,
                id: cs
            })
        }) : iterate$1(os.items, (as, cs) => {
            rs.items.push({
                score: 1,
                id: cs
            })
        });
        const ns = os._getSortFunction(rs);
        return ns && rs.items.sort(ns), rs.total = rs.items.length, typeof ts.limit == "number" && (rs.items = rs.items.slice(0, ts.limit)), rs
    }
}
const iterate = (es, ze) => {
        if (Array.isArray(es)) es.forEach(ze);
        else
            for (var ts in es) es.hasOwnProperty(ts) && ze(es[ts], ts)
    },
    getDom = es => {
        if (es.jquery) return es[0];
        if (es instanceof HTMLElement) return es;
        if (isHtmlString(es)) {
            var ze = document.createElement("template");
            return ze.innerHTML = es.trim(), ze.content.firstChild
        }
        return document.querySelector(es)
    },
    isHtmlString = es => typeof es == "string" && es.indexOf("<") > -1,
    escapeQuery = es => es.replace(/['"\\]/g, "\\$&"),
    triggerEvent = (es, ze) => {
        var ts = document.createEvent("HTMLEvents");
        ts.initEvent(ze, !0, !1), es.dispatchEvent(ts)
    },
    applyCSS = (es, ze) => {
        Object.assign(es.style, ze)
    },
    addClasses = (es, ...ze) => {
        var ts = classesArray(ze);
        es = castAsArray(es), es.map(os => {
            ts.map(ss => {
                os.classList.add(ss)
            })
        })
    },
    removeClasses = (es, ...ze) => {
        var ts = classesArray(ze);
        es = castAsArray(es), es.map(os => {
            ts.map(ss => {
                os.classList.remove(ss)
            })
        })
    },
    classesArray = es => {
        var ze = [];
        return iterate(es, ts => {
            typeof ts == "string" && (ts = ts.trim().split(/[\11\12\14\15\40]/)), Array.isArray(ts) && (ze = ze.concat(ts))
        }), ze.filter(Boolean)
    },
    castAsArray = es => (Array.isArray(es) || (es = [es]), es),
    parentMatch = (es, ze, ts) => {
        if (!(ts && !ts.contains(es)))
            for (; es && es.matches;) {
                if (es.matches(ze)) return es;
                es = es.parentNode
            }
    },
    getTail = (es, ze = 0) => ze > 0 ? es[es.length - 1] : es[0],
    isEmptyObject = es => Object.keys(es).length === 0,
    nodeIndex = (es, ze) => {
        if (!es) return -1;
        ze = ze || es.nodeName;
        for (var ts = 0; es = es.previousElementSibling;) es.matches(ze) && ts++;
        return ts
    },
    setAttr = (es, ze) => {
        iterate(ze, (ts, os) => {
            ts == null ? es.removeAttribute(os) : es.setAttribute(os, "" + ts)
        })
    },
    replaceNode = (es, ze) => {
        es.parentNode && es.parentNode.replaceChild(ze, es)
    },
    highlight = (es, ze) => {
        if (ze === null) return;
        if (typeof ze == "string") {
            if (!ze.length) return;
            ze = new RegExp(ze, "i")
        }
        const ts = rs => {
                var is = rs.data.match(ze);
                if (is && rs.data.length > 0) {
                    var ns = document.createElement("span");
                    ns.className = "highlight";
                    var as = rs.splitText(is.index);
                    as.splitText(is[0].length);
                    var cs = as.cloneNode(!0);
                    return ns.appendChild(cs), replaceNode(as, ns), 1
                }
                return 0
            },
            os = rs => {
                rs.nodeType === 1 && rs.childNodes && !/(script|style)/i.test(rs.tagName) && (rs.className !== "highlight" || rs.tagName !== "SPAN") && Array.from(rs.childNodes).forEach(is => {
                    ss(is)
                })
            },
            ss = rs => rs.nodeType === 3 ? ts(rs) : (os(rs), 0);
        ss(es)
    },
    removeHighlight = es => {
        var ze = es.querySelectorAll("span.highlight");
        Array.prototype.forEach.call(ze, function(ts) {
            var os = ts.parentNode;
            os.replaceChild(ts.firstChild, ts), os.normalize()
        })
    },
    KEY_A = 65,
    KEY_RETURN = 13,
    KEY_ESC = 27,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KEY_BACKSPACE = 8,
    KEY_DELETE = 46,
    KEY_TAB = 9,
    IS_MAC = typeof navigator > "u" ? !1 : /Mac/.test(navigator.userAgent),
    KEY_SHORTCUT = IS_MAC ? "metaKey" : "ctrlKey";
var defaults = {
    options: [],
    optgroups: [],
    plugins: [],
    delimiter: ",",
    splitOn: null,
    persist: !0,
    diacritics: !0,
    create: null,
    createOnBlur: !1,
    createFilter: null,
    highlight: !0,
    openOnFocus: !0,
    shouldOpen: null,
    maxOptions: 50,
    maxItems: null,
    hideSelected: null,
    duplicates: !1,
    addPrecedence: !1,
    selectOnTab: !1,
    preload: null,
    allowEmptyOption: !1,
    refreshThrottle: 300,
    loadThrottle: 300,
    loadingClass: "loading",
    dataAttr: null,
    optgroupField: "optgroup",
    valueField: "value",
    labelField: "text",
    disabledField: "disabled",
    optgroupLabelField: "label",
    optgroupValueField: "value",
    lockOptgroupOrder: !1,
    sortField: "$order",
    searchField: ["text"],
    searchConjunction: "and",
    mode: null,
    wrapperClass: "ts-wrapper",
    controlClass: "ts-control",
    dropdownClass: "ts-dropdown",
    dropdownContentClass: "ts-dropdown-content",
    itemClass: "item",
    optionClass: "option",
    dropdownParent: null,
    controlInput: '<input type="text" autocomplete="off" size="1" />',
    copyClassesToDropdown: !1,
    placeholder: null,
    hidePlaceholder: null,
    shouldLoad: function(es) {
        return es.length > 0
    },
    render: {}
};
const hash_key = es => typeof es > "u" || es === null ? null : get_hash(es),
    get_hash = es => typeof es == "boolean" ? es ? "1" : "0" : es + "",
    escape_html = es => (es + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"),
    timeout = (es, ze) => ze > 0 ? setTimeout(es, ze) : (es.call(null), null),
    loadDebounce = (es, ze) => {
        var ts;
        return function(os, ss) {
            var rs = this;
            ts && (rs.loading = Math.max(rs.loading - 1, 0), clearTimeout(ts)), ts = setTimeout(function() {
                ts = null, rs.loadedSearches[os] = !0, es.call(rs, os, ss)
            }, ze)
        }
    },
    debounce_events = (es, ze, ts) => {
        var os, ss = es.trigger,
            rs = {};
        es.trigger = function() {
            var is = arguments[0];
            if (ze.indexOf(is) !== -1) rs[is] = arguments;
            else return ss.apply(es, arguments)
        }, ts.apply(es, []), es.trigger = ss;
        for (os of ze) os in rs && ss.apply(es, rs[os])
    },
    getSelection = es => ({
        start: es.selectionStart || 0,
        length: (es.selectionEnd || 0) - (es.selectionStart || 0)
    }),
    preventDefault = (es, ze = !1) => {
        es && (es.preventDefault(), ze && es.stopPropagation())
    },
    addEvent = (es, ze, ts, os) => {
        es.addEventListener(ze, ts, os)
    },
    isKeyDown = (es, ze) => {
        if (!ze || !ze[es]) return !1;
        var ts = (ze.altKey ? 1 : 0) + (ze.ctrlKey ? 1 : 0) + (ze.shiftKey ? 1 : 0) + (ze.metaKey ? 1 : 0);
        return ts === 1
    },
    getId = (es, ze) => {
        const ts = es.getAttribute("id");
        return ts || (es.setAttribute("id", ze), ze)
    },
    addSlashes = es => es.replace(/[\\"']/g, "\\$&"),
    append = (es, ze) => {
        ze && es.append(ze)
    };

function getSettings(es, ze) {
    var ts = Object.assign({}, defaults, ze),
        os = ts.dataAttr,
        ss = ts.labelField,
        rs = ts.valueField,
        is = ts.disabledField,
        ns = ts.optgroupField,
        as = ts.optgroupLabelField,
        cs = ts.optgroupValueField,
        fs = es.tagName.toLowerCase(),
        vs = es.getAttribute("placeholder") || es.getAttribute("data-placeholder");
    if (!vs && !ts.allowEmptyOption) {
        let bs = es.querySelector('option[value=""]');
        bs && (vs = bs.textContent)
    }
    var ps = {
            placeholder: vs,
            options: [],
            optgroups: [],
            items: [],
            maxItems: null
        },
        gs = () => {
            var bs, Bs = ps.options,
                Vs = {},
                xs = 1;
            let Ls = 0;
            var Rs = Ts => {
                    var Ps = Object.assign({}, Ts.dataset),
                        $s = os && Ps[os];
                    return typeof $s == "string" && $s.length && (Ps = Object.assign(Ps, JSON.parse($s))), Ps
                },
                Ms = (Ts, Ps) => {
                    var $s = hash_key(Ts.value);
                    if ($s != null && !(!$s && !ts.allowEmptyOption)) {
                        if (Vs.hasOwnProperty($s)) {
                            if (Ps) {
                                var Cs = Vs[$s][ns];
                                Cs ? Array.isArray(Cs) ? Cs.push(Ps) : Vs[$s][ns] = [Cs, Ps] : Vs[$s][ns] = Ps
                            }
                        } else {
                            var Es = Rs(Ts);
                            Es[ss] = Es[ss] || Ts.textContent, Es[rs] = Es[rs] || $s, Es[is] = Es[is] || Ts.disabled, Es[ns] = Es[ns] || Ps, Es.$option = Ts, Es.$order = Es.$order || ++Ls, Vs[$s] = Es, Bs.push(Es)
                        }
                        Ts.selected && ps.items.push($s)
                    }
                },
                Js = Ts => {
                    var Ps, $s;
                    $s = Rs(Ts), $s[as] = $s[as] || Ts.getAttribute("label") || "", $s[cs] = $s[cs] || xs++, $s[is] = $s[is] || Ts.disabled, $s.$order = $s.$order || ++Ls, ps.optgroups.push($s), Ps = $s[cs], iterate(Ts.children, Cs => {
                        Ms(Cs, Ps)
                    })
                };
            ps.maxItems = es.hasAttribute("multiple") ? null : 1, iterate(es.children, Ts => {
                bs = Ts.tagName.toLowerCase(), bs === "optgroup" ? Js(Ts) : bs === "option" && Ms(Ts)
            })
        },
        us = () => {
            const bs = es.getAttribute(os);
            if (bs) ps.options = JSON.parse(bs), iterate(ps.options, Vs => {
                ps.items.push(Vs[rs])
            });
            else {
                var Bs = es.value.trim() || "";
                if (!ts.allowEmptyOption && !Bs.length) return;
                const Vs = Bs.split(ts.delimiter);
                iterate(Vs, xs => {
                    const Ls = {};
                    Ls[ss] = xs, Ls[rs] = xs, ps.options.push(Ls)
                }), ps.items = Vs
            }
        };
    return fs === "select" ? gs() : us(), Object.assign({}, defaults, ps, ze)
}
var instance_i = 0;
class TomSelect extends MicroPlugin(MicroEvent) {
    constructor(ze, ts) {
        super(), this.control_input = void 0, this.wrapper = void 0, this.dropdown = void 0, this.control = void 0, this.dropdown_content = void 0, this.focus_node = void 0, this.order = 0, this.settings = void 0, this.input = void 0, this.tabIndex = void 0, this.is_select_tag = void 0, this.rtl = void 0, this.inputId = void 0, this._destroy = void 0, this.sifter = void 0, this.isOpen = !1, this.isDisabled = !1, this.isReadOnly = !1, this.isRequired = void 0, this.isInvalid = !1, this.isValid = !0, this.isLocked = !1, this.isFocused = !1, this.isInputHidden = !1, this.isSetup = !1, this.ignoreFocus = !1, this.ignoreHover = !1, this.hasOptions = !1, this.currentResults = void 0, this.lastValue = "", this.caretPos = 0, this.loading = 0, this.loadedSearches = {}, this.activeOption = null, this.activeItems = [], this.optgroups = {}, this.options = {}, this.userOptions = {}, this.items = [], this.refreshTimeout = null, instance_i++;
        var os, ss = getDom(ze);
        if (ss.tomselect) throw new Error("Tom Select already initialized on this element");
        ss.tomselect = this;
        var rs = window.getComputedStyle && window.getComputedStyle(ss, null);
        os = rs.getPropertyValue("direction");
        const is = getSettings(ss, ts);
        this.settings = is, this.input = ss, this.tabIndex = ss.tabIndex || 0, this.is_select_tag = ss.tagName.toLowerCase() === "select", this.rtl = /rtl/i.test(os), this.inputId = getId(ss, "tomselect-" + instance_i), this.isRequired = ss.required, this.sifter = new Sifter(this.options, {
            diacritics: is.diacritics
        }), is.mode = is.mode || (is.maxItems === 1 ? "single" : "multi"), typeof is.hideSelected != "boolean" && (is.hideSelected = is.mode === "multi"), typeof is.hidePlaceholder != "boolean" && (is.hidePlaceholder = is.mode !== "multi");
        var ns = is.createFilter;
        typeof ns != "function" && (typeof ns == "string" && (ns = new RegExp(ns)), ns instanceof RegExp ? is.createFilter = Bs => ns.test(Bs) : is.createFilter = Bs => this.settings.duplicates || !this.options[Bs]), this.initializePlugins(is.plugins), this.setupCallbacks(), this.setupTemplates();
        const as = getDom("<div>"),
            cs = getDom("<div>"),
            fs = this._render("dropdown"),
            vs = getDom('<div role="listbox" tabindex="-1">'),
            ps = this.input.getAttribute("class") || "",
            gs = is.mode;
        var us;
        if (addClasses(as, is.wrapperClass, ps, gs), addClasses(cs, is.controlClass), append(as, cs), addClasses(fs, is.dropdownClass, gs), is.copyClassesToDropdown && addClasses(fs, ps), addClasses(vs, is.dropdownContentClass), append(fs, vs), getDom(is.dropdownParent || as).appendChild(fs), isHtmlString(is.controlInput)) {
            us = getDom(is.controlInput);
            var bs = ["autocorrect", "autocapitalize", "autocomplete", "spellcheck"];
            iterate$1(bs, Bs => {
                ss.getAttribute(Bs) && setAttr(us, {
                    [Bs]: ss.getAttribute(Bs)
                })
            }), us.tabIndex = -1, cs.appendChild(us), this.focus_node = us
        } else is.controlInput ? (us = getDom(is.controlInput), this.focus_node = us) : (us = getDom("<input/>"), this.focus_node = cs);
        this.wrapper = as, this.dropdown = fs, this.dropdown_content = vs, this.control = cs, this.control_input = us, this.setup()
    }
    setup() {
        const ze = this,
            ts = ze.settings,
            os = ze.control_input,
            ss = ze.dropdown,
            rs = ze.dropdown_content,
            is = ze.wrapper,
            ns = ze.control,
            as = ze.input,
            cs = ze.focus_node,
            fs = {
                passive: !0
            },
            vs = ze.inputId + "-ts-dropdown";
        setAttr(rs, {
            id: vs
        }), setAttr(cs, {
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": "false",
            "aria-controls": vs
        });
        const ps = getId(cs, ze.inputId + "-ts-control"),
            gs = "label[for='" + escapeQuery(ze.inputId) + "']",
            us = document.querySelector(gs),
            bs = ze.focus.bind(ze);
        if (us) {
            addEvent(us, "click", bs), setAttr(us, {
                for: ps
            });
            const xs = getId(us, ze.inputId + "-ts-label");
            setAttr(cs, {
                "aria-labelledby": xs
            }), setAttr(rs, {
                "aria-labelledby": xs
            })
        }
        if (is.style.width = as.style.width, ze.plugins.names.length) {
            const xs = "plugin-" + ze.plugins.names.join(" plugin-");
            addClasses([is, ss], xs)
        }(ts.maxItems === null || ts.maxItems > 1) && ze.is_select_tag && setAttr(as, {
            multiple: "multiple"
        }), ts.placeholder && setAttr(os, {
            placeholder: ts.placeholder
        }), !ts.splitOn && ts.delimiter && (ts.splitOn = new RegExp("\\s*" + escape_regex(ts.delimiter) + "+\\s*")), ts.load && ts.loadThrottle && (ts.load = loadDebounce(ts.load, ts.loadThrottle)), addEvent(ss, "mousemove", () => {
            ze.ignoreHover = !1
        }), addEvent(ss, "mouseenter", xs => {
            var Ls = parentMatch(xs.target, "[data-selectable]", ss);
            Ls && ze.onOptionHover(xs, Ls)
        }, {
            capture: !0
        }), addEvent(ss, "click", xs => {
            const Ls = parentMatch(xs.target, "[data-selectable]");
            Ls && (ze.onOptionSelect(xs, Ls), preventDefault(xs, !0))
        }), addEvent(ns, "click", xs => {
            var Ls = parentMatch(xs.target, "[data-ts-item]", ns);
            if (Ls && ze.onItemSelect(xs, Ls)) {
                preventDefault(xs, !0);
                return
            }
            os.value == "" && (ze.onClick(), preventDefault(xs, !0))
        }), addEvent(cs, "keydown", xs => ze.onKeyDown(xs)), addEvent(os, "keypress", xs => ze.onKeyPress(xs)), addEvent(os, "input", xs => ze.onInput(xs)), addEvent(cs, "blur", xs => ze.onBlur(xs)), addEvent(cs, "focus", xs => ze.onFocus(xs)), addEvent(os, "paste", xs => ze.onPaste(xs));
        const Bs = xs => {
                const Ls = xs.composedPath()[0];
                if (!is.contains(Ls) && !ss.contains(Ls)) {
                    ze.isFocused && ze.blur(), ze.inputState();
                    return
                }
                Ls == os && ze.isOpen ? xs.stopPropagation() : preventDefault(xs, !0)
            },
            Vs = () => {
                ze.isOpen && ze.positionDropdown()
            };
        addEvent(document, "mousedown", Bs), addEvent(window, "scroll", Vs, fs), addEvent(window, "resize", Vs, fs), this._destroy = () => {
            document.removeEventListener("mousedown", Bs), window.removeEventListener("scroll", Vs), window.removeEventListener("resize", Vs), us && us.removeEventListener("click", bs)
        }, this.revertSettings = {
            innerHTML: as.innerHTML,
            tabIndex: as.tabIndex
        }, as.tabIndex = -1, as.insertAdjacentElement("afterend", ze.wrapper), ze.sync(!1), ts.items = [], delete ts.optgroups, delete ts.options, addEvent(as, "invalid", () => {
            ze.isValid && (ze.isValid = !1, ze.isInvalid = !0, ze.refreshState())
        }), ze.updateOriginalInput(), ze.refreshItems(), ze.close(!1), ze.inputState(), ze.isSetup = !0, as.disabled ? ze.disable() : as.readOnly ? ze.setReadOnly(!0) : ze.enable(), ze.on("change", this.onChange), addClasses(as, "tomselected", "ts-hidden-accessible"), ze.trigger("initialize"), ts.preload === !0 && ze.preload()
    }
    setupOptions(ze = [], ts = []) {
        this.addOptions(ze), iterate$1(ts, os => {
            this.registerOptionGroup(os)
        })
    }
    setupTemplates() {
        var ze = this,
            ts = ze.settings.labelField,
            os = ze.settings.optgroupLabelField,
            ss = {
                optgroup: rs => {
                    let is = document.createElement("div");
                    return is.className = "optgroup", is.appendChild(rs.options), is
                },
                optgroup_header: (rs, is) => '<div class="optgroup-header">' + is(rs[os]) + "</div>",
                option: (rs, is) => "<div>" + is(rs[ts]) + "</div>",
                item: (rs, is) => "<div>" + is(rs[ts]) + "</div>",
                option_create: (rs, is) => '<div class="create">Add <strong>' + is(rs.input) + "</strong>&hellip;</div>",
                no_results: () => '<div class="no-results">No results found</div>',
                loading: () => '<div class="spinner"></div>',
                not_loading: () => {},
                dropdown: () => "<div></div>"
            };
        ze.settings.render = Object.assign({}, ss, ze.settings.render)
    }
    setupCallbacks() {
        var ze, ts, os = {
            initialize: "onInitialize",
            change: "onChange",
            item_add: "onItemAdd",
            item_remove: "onItemRemove",
            item_select: "onItemSelect",
            clear: "onClear",
            option_add: "onOptionAdd",
            option_remove: "onOptionRemove",
            option_clear: "onOptionClear",
            optgroup_add: "onOptionGroupAdd",
            optgroup_remove: "onOptionGroupRemove",
            optgroup_clear: "onOptionGroupClear",
            dropdown_open: "onDropdownOpen",
            dropdown_close: "onDropdownClose",
            type: "onType",
            load: "onLoad",
            focus: "onFocus",
            blur: "onBlur"
        };
        for (ze in os) ts = this.settings[os[ze]], ts && this.on(ze, ts)
    }
    sync(ze = !0) {
        const ts = this,
            os = ze ? getSettings(ts.input, {
                delimiter: ts.settings.delimiter
            }) : ts.settings;
        ts.setupOptions(os.options, os.optgroups), ts.setValue(os.items || [], !0), ts.lastQuery = null
    }
    onClick() {
        var ze = this;
        if (ze.activeItems.length > 0) {
            ze.clearActiveItems(), ze.focus();
            return
        }
        ze.isFocused && ze.isOpen ? ze.blur() : ze.focus()
    }
    onMouseDown() {}
    onChange() {
        triggerEvent(this.input, "input"), triggerEvent(this.input, "change")
    }
    onPaste(ze) {
        var ts = this;
        if (ts.isInputHidden || ts.isLocked) {
            preventDefault(ze);
            return
        }
        ts.settings.splitOn && setTimeout(() => {
            var os = ts.inputValue();
            if (os.match(ts.settings.splitOn)) {
                var ss = os.trim().split(ts.settings.splitOn);
                iterate$1(ss, rs => {
                    hash_key(rs) && (this.options[rs] ? ts.addItem(rs) : ts.createItem(rs))
                })
            }
        }, 0)
    }
    onKeyPress(ze) {
        var ts = this;
        if (ts.isLocked) {
            preventDefault(ze);
            return
        }
        var os = String.fromCharCode(ze.keyCode || ze.which);
        if (ts.settings.create && ts.settings.mode === "multi" && os === ts.settings.delimiter) {
            ts.createItem(), preventDefault(ze);
            return
        }
    }
    onKeyDown(ze) {
        var ts = this;
        if (ts.ignoreHover = !0, ts.isLocked) {
            ze.keyCode !== KEY_TAB && preventDefault(ze);
            return
        }
        switch (ze.keyCode) {
            case KEY_A:
                if (isKeyDown(KEY_SHORTCUT, ze) && ts.control_input.value == "") {
                    preventDefault(ze), ts.selectAll();
                    return
                }
                break;
            case KEY_ESC:
                ts.isOpen && (preventDefault(ze, !0), ts.close()), ts.clearActiveItems();
                return;
            case KEY_DOWN:
                if (!ts.isOpen && ts.hasOptions) ts.open();
                else if (ts.activeOption) {
                    let os = ts.getAdjacent(ts.activeOption, 1);
                    os && ts.setActiveOption(os)
                }
                preventDefault(ze);
                return;
            case KEY_UP:
                if (ts.activeOption) {
                    let os = ts.getAdjacent(ts.activeOption, -1);
                    os && ts.setActiveOption(os)
                }
                preventDefault(ze);
                return;
            case KEY_RETURN:
                ts.canSelect(ts.activeOption) ? (ts.onOptionSelect(ze, ts.activeOption), preventDefault(ze)) : (ts.settings.create && ts.createItem() || document.activeElement == ts.control_input && ts.isOpen) && preventDefault(ze);
                return;
            case KEY_LEFT:
                ts.advanceSelection(-1, ze);
                return;
            case KEY_RIGHT:
                ts.advanceSelection(1, ze);
                return;
            case KEY_TAB:
                ts.settings.selectOnTab && (ts.canSelect(ts.activeOption) && (ts.onOptionSelect(ze, ts.activeOption), preventDefault(ze)), ts.settings.create && ts.createItem() && preventDefault(ze));
                return;
            case KEY_BACKSPACE:
            case KEY_DELETE:
                ts.deleteSelection(ze);
                return
        }
        ts.isInputHidden && !isKeyDown(KEY_SHORTCUT, ze) && preventDefault(ze)
    }
    onInput(ze) {
        if (this.isLocked) return;
        const ts = this.inputValue();
        if (this.lastValue !== ts) {
            if (this.lastValue = ts, ts == "") {
                this._onInput();
                return
            }
            this.refreshTimeout && clearTimeout(this.refreshTimeout), this.refreshTimeout = timeout(() => {
                this.refreshTimeout = null, this._onInput()
            }, this.settings.refreshThrottle)
        }
    }
    _onInput() {
        const ze = this.lastValue;
        this.settings.shouldLoad.call(this, ze) && this.load(ze), this.refreshOptions(), this.trigger("type", ze)
    }
    onOptionHover(ze, ts) {
        this.ignoreHover || this.setActiveOption(ts, !1)
    }
    onFocus(ze) {
        var ts = this,
            os = ts.isFocused;
        if (ts.isDisabled || ts.isReadOnly) {
            ts.blur(), preventDefault(ze);
            return
        }
        ts.ignoreFocus || (ts.isFocused = !0, ts.settings.preload === "focus" && ts.preload(), os || ts.trigger("focus"), ts.activeItems.length || (ts.inputState(), ts.refreshOptions(!!ts.settings.openOnFocus)), ts.refreshState())
    }
    onBlur(ze) {
        if (document.hasFocus() !== !1) {
            var ts = this;
            if (ts.isFocused) {
                ts.isFocused = !1, ts.ignoreFocus = !1;
                var os = () => {
                    ts.close(), ts.setActiveItem(), ts.setCaret(ts.items.length), ts.trigger("blur")
                };
                ts.settings.create && ts.settings.createOnBlur ? ts.createItem(null, os) : os()
            }
        }
    }
    onOptionSelect(ze, ts) {
        var os, ss = this;
        ts.parentElement && ts.parentElement.matches("[data-disabled]") || (ts.classList.contains("create") ? ss.createItem(null, () => {
            ss.settings.closeAfterSelect && ss.close()
        }) : (os = ts.dataset.value, typeof os < "u" && (ss.lastQuery = null, ss.addItem(os), ss.settings.closeAfterSelect && ss.close(), !ss.settings.hideSelected && ze.type && /click/.test(ze.type) && ss.setActiveOption(ts))))
    }
    canSelect(ze) {
        return !!(this.isOpen && ze && this.dropdown_content.contains(ze))
    }
    onItemSelect(ze, ts) {
        var os = this;
        return !os.isLocked && os.settings.mode === "multi" ? (preventDefault(ze), os.setActiveItem(ts, ze), !0) : !1
    }
    canLoad(ze) {
        return !(!this.settings.load || this.loadedSearches.hasOwnProperty(ze))
    }
    load(ze) {
        const ts = this;
        if (!ts.canLoad(ze)) return;
        addClasses(ts.wrapper, ts.settings.loadingClass), ts.loading++;
        const os = ts.loadCallback.bind(ts);
        ts.settings.load.call(ts, ze, os)
    }
    loadCallback(ze, ts) {
        const os = this;
        os.loading = Math.max(os.loading - 1, 0), os.lastQuery = null, os.clearActiveOption(), os.setupOptions(ze, ts), os.refreshOptions(os.isFocused && !os.isInputHidden), os.loading || removeClasses(os.wrapper, os.settings.loadingClass), os.trigger("load", ze, ts)
    }
    preload() {
        var ze = this.wrapper.classList;
        ze.contains("preloaded") || (ze.add("preloaded"), this.load(""))
    }
    setTextboxValue(ze = "") {
        var ts = this.control_input,
            os = ts.value !== ze;
        os && (ts.value = ze, triggerEvent(ts, "update"), this.lastValue = ze)
    }
    getValue() {
        return this.is_select_tag && this.input.hasAttribute("multiple") ? this.items : this.items.join(this.settings.delimiter)
    }
    setValue(ze, ts) {
        var os = ts ? [] : ["change"];
        debounce_events(this, os, () => {
            this.clear(ts), this.addItems(ze, ts)
        })
    }
    setMaxItems(ze) {
        ze === 0 && (ze = null), this.settings.maxItems = ze, this.refreshState()
    }
    setActiveItem(ze, ts) {
        var os = this,
            ss, rs, is, ns, as, cs;
        if (os.settings.mode !== "single") {
            if (!ze) {
                os.clearActiveItems(), os.isFocused && os.inputState();
                return
            }
            if (ss = ts && ts.type.toLowerCase(), ss === "click" && isKeyDown("shiftKey", ts) && os.activeItems.length) {
                for (cs = os.getLastActive(), is = Array.prototype.indexOf.call(os.control.children, cs), ns = Array.prototype.indexOf.call(os.control.children, ze), is > ns && (as = is, is = ns, ns = as), rs = is; rs <= ns; rs++) ze = os.control.children[rs], os.activeItems.indexOf(ze) === -1 && os.setActiveItemClass(ze);
                preventDefault(ts)
            } else ss === "click" && isKeyDown(KEY_SHORTCUT, ts) || ss === "keydown" && isKeyDown("shiftKey", ts) ? ze.classList.contains("active") ? os.removeActiveItem(ze) : os.setActiveItemClass(ze) : (os.clearActiveItems(), os.setActiveItemClass(ze));
            os.inputState(), os.isFocused || os.focus()
        }
    }
    setActiveItemClass(ze) {
        const ts = this,
            os = ts.control.querySelector(".last-active");
        os && removeClasses(os, "last-active"), addClasses(ze, "active last-active"), ts.trigger("item_select", ze), ts.activeItems.indexOf(ze) == -1 && ts.activeItems.push(ze)
    }
    removeActiveItem(ze) {
        var ts = this.activeItems.indexOf(ze);
        this.activeItems.splice(ts, 1), removeClasses(ze, "active")
    }
    clearActiveItems() {
        removeClasses(this.activeItems, "active"), this.activeItems = []
    }
    setActiveOption(ze, ts = !0) {
        ze !== this.activeOption && (this.clearActiveOption(), ze && (this.activeOption = ze, setAttr(this.focus_node, {
            "aria-activedescendant": ze.getAttribute("id")
        }), setAttr(ze, {
            "aria-selected": "true"
        }), addClasses(ze, "active"), ts && this.scrollToOption(ze)))
    }
    scrollToOption(ze, ts) {
        if (!ze) return;
        const os = this.dropdown_content,
            ss = os.clientHeight,
            rs = os.scrollTop || 0,
            is = ze.offsetHeight,
            ns = ze.getBoundingClientRect().top - os.getBoundingClientRect().top + rs;
        ns + is > ss + rs ? this.scroll(ns - ss + is, ts) : ns < rs && this.scroll(ns, ts)
    }
    scroll(ze, ts) {
        const os = this.dropdown_content;
        ts && (os.style.scrollBehavior = ts), os.scrollTop = ze, os.style.scrollBehavior = ""
    }
    clearActiveOption() {
        this.activeOption && (removeClasses(this.activeOption, "active"), setAttr(this.activeOption, {
            "aria-selected": null
        })), this.activeOption = null, setAttr(this.focus_node, {
            "aria-activedescendant": null
        })
    }
    selectAll() {
        const ze = this;
        if (ze.settings.mode === "single") return;
        const ts = ze.controlChildren();
        ts.length && (ze.inputState(), ze.close(), ze.activeItems = ts, iterate$1(ts, os => {
            ze.setActiveItemClass(os)
        }))
    }
    inputState() {
        var ze = this;
        ze.control.contains(ze.control_input) && (setAttr(ze.control_input, {
            placeholder: ze.settings.placeholder
        }), ze.activeItems.length > 0 || !ze.isFocused && ze.settings.hidePlaceholder && ze.items.length > 0 ? (ze.setTextboxValue(), ze.isInputHidden = !0) : (ze.settings.hidePlaceholder && ze.items.length > 0 && setAttr(ze.control_input, {
            placeholder: ""
        }), ze.isInputHidden = !1), ze.wrapper.classList.toggle("input-hidden", ze.isInputHidden))
    }
    inputValue() {
        return this.control_input.value.trim()
    }
    focus() {
        var ze = this;
        ze.isDisabled || ze.isReadOnly || (ze.ignoreFocus = !0, ze.control_input.offsetWidth ? ze.control_input.focus() : ze.focus_node.focus(), setTimeout(() => {
            ze.ignoreFocus = !1, ze.onFocus()
        }, 0))
    }
    blur() {
        this.focus_node.blur(), this.onBlur()
    }
    getScoreFunction(ze) {
        return this.sifter.getScoreFunction(ze, this.getSearchOptions())
    }
    getSearchOptions() {
        var ze = this.settings,
            ts = ze.sortField;
        return typeof ze.sortField == "string" && (ts = [{
            field: ze.sortField
        }]), {
            fields: ze.searchField,
            conjunction: ze.searchConjunction,
            sort: ts,
            nesting: ze.nesting
        }
    }
    search(ze) {
        var ts, os, ss = this,
            rs = this.getSearchOptions();
        if (ss.settings.score && (os = ss.settings.score.call(ss, ze), typeof os != "function")) throw new Error('Tom Select "score" setting must be a function that returns a function');
        return ze !== ss.lastQuery ? (ss.lastQuery = ze, ts = ss.sifter.search(ze, Object.assign(rs, {
            score: os
        })), ss.currentResults = ts) : ts = Object.assign({}, ss.currentResults), ss.settings.hideSelected && (ts.items = ts.items.filter(is => {
            let ns = hash_key(is.id);
            return !(ns && ss.items.indexOf(ns) !== -1)
        })), ts
    }
    refreshOptions(ze = !0) {
        var ts, os, ss, rs, is, ns, as, cs, fs, vs;
        const ps = {},
            gs = [];
        var us = this,
            bs = us.inputValue();
        const Bs = bs === us.lastQuery || bs == "" && us.lastQuery == null;
        var Vs = us.search(bs),
            xs = null,
            Ls = us.settings.shouldOpen || !1,
            Rs = us.dropdown_content;
        Bs && (xs = us.activeOption, xs && (fs = xs.closest("[data-group]"))), rs = Vs.items.length, typeof us.settings.maxOptions == "number" && (rs = Math.min(rs, us.settings.maxOptions)), rs > 0 && (Ls = !0);
        const Ms = (Ts, Ps) => {
            let $s = ps[Ts];
            if ($s !== void 0) {
                let Es = gs[$s];
                if (Es !== void 0) return [$s, Es.fragment]
            }
            let Cs = document.createDocumentFragment();
            return $s = gs.length, gs.push({
                fragment: Cs,
                order: Ps,
                optgroup: Ts
            }), [$s, Cs]
        };
        for (ts = 0; ts < rs; ts++) {
            let Ts = Vs.items[ts];
            if (!Ts) continue;
            let Ps = Ts.id,
                $s = us.options[Ps];
            if ($s === void 0) continue;
            let Cs = get_hash(Ps),
                Es = us.getOption(Cs, !0);
            for (us.settings.hideSelected || Es.classList.toggle("selected", us.items.includes(Cs)), is = $s[us.settings.optgroupField] || "", ns = Array.isArray(is) ? is : [is], os = 0, ss = ns && ns.length; os < ss; os++) {
                is = ns[os];
                let Fs = $s.$order,
                    Zs = us.optgroups[is];
                Zs === void 0 ? is = "" : Fs = Zs.$order;
                const [io, qs] = Ms(is, Fs);
                os > 0 && (Es = Es.cloneNode(!0), setAttr(Es, {
                    id: $s.$id + "-clone-" + os,
                    "aria-selected": null
                }), Es.classList.add("ts-cloned"), removeClasses(Es, "active"), us.activeOption && us.activeOption.dataset.value == Ps && fs && fs.dataset.group === is.toString() && (xs = Es)), qs.appendChild(Es), is != "" && (ps[is] = io)
            }
        }
        us.settings.lockOptgroupOrder && gs.sort((Ts, Ps) => Ts.order - Ps.order), as = document.createDocumentFragment(), iterate$1(gs, Ts => {
            let Ps = Ts.fragment,
                $s = Ts.optgroup;
            if (!Ps || !Ps.children.length) return;
            let Cs = us.optgroups[$s];
            if (Cs !== void 0) {
                let Es = document.createDocumentFragment(),
                    Fs = us.render("optgroup_header", Cs);
                append(Es, Fs), append(Es, Ps);
                let Zs = us.render("optgroup", {
                    group: Cs,
                    options: Es
                });
                append(as, Zs)
            } else append(as, Ps)
        }), Rs.innerHTML = "", append(Rs, as), us.settings.highlight && (removeHighlight(Rs), Vs.query.length && Vs.tokens.length && iterate$1(Vs.tokens, Ts => {
            highlight(Rs, Ts.regex)
        }));
        var Js = Ts => {
            let Ps = us.render(Ts, {
                input: bs
            });
            return Ps && (Ls = !0, Rs.insertBefore(Ps, Rs.firstChild)), Ps
        };
        if (us.loading ? Js("loading") : us.settings.shouldLoad.call(us, bs) ? Vs.items.length === 0 && Js("no_results") : Js("not_loading"), cs = us.canCreate(bs), cs && (vs = Js("option_create")), us.hasOptions = Vs.items.length > 0 || cs, Ls) {
            if (Vs.items.length > 0) {
                if (!xs && us.settings.mode === "single" && us.items[0] != null && (xs = us.getOption(us.items[0])), !Rs.contains(xs)) {
                    let Ts = 0;
                    vs && !us.settings.addPrecedence && (Ts = 1), xs = us.selectable()[Ts]
                }
            } else vs && (xs = vs);
            ze && !us.isOpen && (us.open(), us.scrollToOption(xs, "auto")), us.setActiveOption(xs)
        } else us.clearActiveOption(), ze && us.isOpen && us.close(!1)
    }
    selectable() {
        return this.dropdown_content.querySelectorAll("[data-selectable]")
    }
    addOption(ze, ts = !1) {
        const os = this;
        if (Array.isArray(ze)) return os.addOptions(ze, ts), !1;
        const ss = hash_key(ze[os.settings.valueField]);
        return ss === null || os.options.hasOwnProperty(ss) ? !1 : (ze.$order = ze.$order || ++os.order, ze.$id = os.inputId + "-opt-" + ze.$order, os.options[ss] = ze, os.lastQuery = null, ts && (os.userOptions[ss] = ts, os.trigger("option_add", ss, ze)), ss)
    }
    addOptions(ze, ts = !1) {
        iterate$1(ze, os => {
            this.addOption(os, ts)
        })
    }
    registerOption(ze) {
        return this.addOption(ze)
    }
    registerOptionGroup(ze) {
        var ts = hash_key(ze[this.settings.optgroupValueField]);
        return ts === null ? !1 : (ze.$order = ze.$order || ++this.order, this.optgroups[ts] = ze, ts)
    }
    addOptionGroup(ze, ts) {
        var os;
        ts[this.settings.optgroupValueField] = ze, (os = this.registerOptionGroup(ts)) && this.trigger("optgroup_add", os, ts)
    }
    removeOptionGroup(ze) {
        this.optgroups.hasOwnProperty(ze) && (delete this.optgroups[ze], this.clearCache(), this.trigger("optgroup_remove", ze))
    }
    clearOptionGroups() {
        this.optgroups = {}, this.clearCache(), this.trigger("optgroup_clear")
    }
    updateOption(ze, ts) {
        const os = this;
        var ss, rs;
        const is = hash_key(ze),
            ns = hash_key(ts[os.settings.valueField]);
        if (is === null) return;
        const as = os.options[is];
        if (as == null) return;
        if (typeof ns != "string") throw new Error("Value must be set in option data");
        const cs = os.getOption(is),
            fs = os.getItem(is);
        if (ts.$order = ts.$order || as.$order, delete os.options[is], os.uncacheValue(ns), os.options[ns] = ts, cs) {
            if (os.dropdown_content.contains(cs)) {
                const vs = os._render("option", ts);
                replaceNode(cs, vs), os.activeOption === cs && os.setActiveOption(vs)
            }
            cs.remove()
        }
        fs && (rs = os.items.indexOf(is), rs !== -1 && os.items.splice(rs, 1, ns), ss = os._render("item", ts), fs.classList.contains("active") && addClasses(ss, "active"), replaceNode(fs, ss)), os.lastQuery = null
    }
    removeOption(ze, ts) {
        const os = this;
        ze = get_hash(ze), os.uncacheValue(ze), delete os.userOptions[ze], delete os.options[ze], os.lastQuery = null, os.trigger("option_remove", ze), os.removeItem(ze, ts)
    }
    clearOptions(ze) {
        const ts = (ze || this.clearFilter).bind(this);
        this.loadedSearches = {}, this.userOptions = {}, this.clearCache();
        const os = {};
        iterate$1(this.options, (ss, rs) => {
            ts(ss, rs) && (os[rs] = ss)
        }), this.options = this.sifter.items = os, this.lastQuery = null, this.trigger("option_clear")
    }
    clearFilter(ze, ts) {
        return this.items.indexOf(ts) >= 0
    }
    getOption(ze, ts = !1) {
        const os = hash_key(ze);
        if (os === null) return null;
        const ss = this.options[os];
        if (ss != null) {
            if (ss.$div) return ss.$div;
            if (ts) return this._render("option", ss)
        }
        return null
    }
    getAdjacent(ze, ts, os = "option") {
        var ss = this,
            rs;
        if (!ze) return null;
        os == "item" ? rs = ss.controlChildren() : rs = ss.dropdown_content.querySelectorAll("[data-selectable]");
        for (let is = 0; is < rs.length; is++)
            if (rs[is] == ze) return ts > 0 ? rs[is + 1] : rs[is - 1];
        return null
    }
    getItem(ze) {
        if (typeof ze == "object") return ze;
        var ts = hash_key(ze);
        return ts !== null ? this.control.querySelector(`[data-value="${addSlashes(ts)}"]`) : null
    }
    addItems(ze, ts) {
        var os = this,
            ss = Array.isArray(ze) ? ze : [ze];
        ss = ss.filter(is => os.items.indexOf(is) === -1);
        const rs = ss[ss.length - 1];
        ss.forEach(is => {
            os.isPending = is !== rs, os.addItem(is, ts)
        })
    }
    addItem(ze, ts) {
        var os = ts ? [] : ["change", "dropdown_close"];
        debounce_events(this, os, () => {
            var ss, rs;
            const is = this,
                ns = is.settings.mode,
                as = hash_key(ze);
            if (!(as && is.items.indexOf(as) !== -1 && (ns === "single" && is.close(), ns === "single" || !is.settings.duplicates)) && !(as === null || !is.options.hasOwnProperty(as)) && (ns === "single" && is.clear(ts), !(ns === "multi" && is.isFull()))) {
                if (ss = is._render("item", is.options[as]), is.control.contains(ss) && (ss = ss.cloneNode(!0)), rs = is.isFull(), is.items.splice(is.caretPos, 0, as), is.insertAtCaret(ss), is.isSetup) {
                    if (!is.isPending && is.settings.hideSelected) {
                        let cs = is.getOption(as),
                            fs = is.getAdjacent(cs, 1);
                        fs && is.setActiveOption(fs)
                    }!is.isPending && !is.settings.closeAfterSelect && is.refreshOptions(is.isFocused && ns !== "single"), is.settings.closeAfterSelect != !1 && is.isFull() ? is.close() : is.isPending || is.positionDropdown(), is.trigger("item_add", as, ss), is.isPending || is.updateOriginalInput({
                        silent: ts
                    })
                }(!is.isPending || !rs && is.isFull()) && (is.inputState(), is.refreshState())
            }
        })
    }
    removeItem(ze = null, ts) {
        const os = this;
        if (ze = os.getItem(ze), !ze) return;
        var ss, rs;
        const is = ze.dataset.value;
        ss = nodeIndex(ze), ze.remove(), ze.classList.contains("active") && (rs = os.activeItems.indexOf(ze), os.activeItems.splice(rs, 1), removeClasses(ze, "active")), os.items.splice(ss, 1), os.lastQuery = null, !os.settings.persist && os.userOptions.hasOwnProperty(is) && os.removeOption(is, ts), ss < os.caretPos && os.setCaret(os.caretPos - 1), os.updateOriginalInput({
            silent: ts
        }), os.refreshState(), os.positionDropdown(), os.trigger("item_remove", is, ze)
    }
    createItem(ze = null, ts = () => {}) {
        arguments.length === 3 && (ts = arguments[2]), typeof ts != "function" && (ts = () => {});
        var os = this,
            ss = os.caretPos,
            rs;
        if (ze = ze || os.inputValue(), !os.canCreate(ze)) return ts(), !1;
        os.lock();
        var is = !1,
            ns = as => {
                if (os.unlock(), !as || typeof as != "object") return ts();
                var cs = hash_key(as[os.settings.valueField]);
                if (typeof cs != "string") return ts();
                os.setTextboxValue(), os.addOption(as, !0), os.setCaret(ss), os.addItem(cs), ts(as), is = !0
            };
        return typeof os.settings.create == "function" ? rs = os.settings.create.call(this, ze, ns) : rs = {
            [os.settings.labelField]: ze,
            [os.settings.valueField]: ze
        }, is || ns(rs), !0
    }
    refreshItems() {
        var ze = this;
        ze.lastQuery = null, ze.isSetup && ze.addItems(ze.items), ze.updateOriginalInput(), ze.refreshState()
    }
    refreshState() {
        const ze = this;
        ze.refreshValidityState();
        const ts = ze.isFull(),
            os = ze.isLocked;
        ze.wrapper.classList.toggle("rtl", ze.rtl);
        const ss = ze.wrapper.classList;
        ss.toggle("focus", ze.isFocused), ss.toggle("disabled", ze.isDisabled), ss.toggle("readonly", ze.isReadOnly), ss.toggle("required", ze.isRequired), ss.toggle("invalid", !ze.isValid), ss.toggle("locked", os), ss.toggle("full", ts), ss.toggle("input-active", ze.isFocused && !ze.isInputHidden), ss.toggle("dropdown-active", ze.isOpen), ss.toggle("has-options", isEmptyObject(ze.options)), ss.toggle("has-items", ze.items.length > 0)
    }
    refreshValidityState() {
        var ze = this;
        ze.input.validity && (ze.isValid = ze.input.validity.valid, ze.isInvalid = !ze.isValid)
    }
    isFull() {
        return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems
    }
    updateOriginalInput(ze = {}) {
        const ts = this;
        var os, ss;
        const rs = ts.input.querySelector('option[value=""]');
        if (ts.is_select_tag) {
            let as = function(cs, fs, vs) {
                return cs || (cs = getDom('<option value="' + escape_html(fs) + '">' + escape_html(vs) + "</option>")), cs != rs && ts.input.append(cs), is.push(cs), (cs != rs || ns > 0) && (cs.selected = !0), cs
            };
            const is = [],
                ns = ts.input.querySelectorAll("option:checked").length;
            ts.input.querySelectorAll("option:checked").forEach(cs => {
                cs.selected = !1
            }), ts.items.length == 0 && ts.settings.mode == "single" ? as(rs, "", "") : ts.items.forEach(cs => {
                if (os = ts.options[cs], ss = os[ts.settings.labelField] || "", is.includes(os.$option)) {
                    const fs = ts.input.querySelector(`option[value="${addSlashes(cs)}"]:not(:checked)`);
                    as(fs, cs, ss)
                } else os.$option = as(os.$option, cs, ss)
            })
        } else ts.input.value = ts.getValue();
        ts.isSetup && (ze.silent || ts.trigger("change", ts.getValue()))
    }
    open() {
        var ze = this;
        ze.isLocked || ze.isOpen || ze.settings.mode === "multi" && ze.isFull() || (ze.isOpen = !0, setAttr(ze.focus_node, {
            "aria-expanded": "true"
        }), ze.refreshState(), applyCSS(ze.dropdown, {
            visibility: "hidden",
            display: "block"
        }), ze.positionDropdown(), applyCSS(ze.dropdown, {
            visibility: "visible",
            display: "block"
        }), ze.focus(), ze.trigger("dropdown_open", ze.dropdown))
    }
    close(ze = !0) {
        var ts = this,
            os = ts.isOpen;
        ze && (ts.setTextboxValue(), ts.settings.mode === "single" && ts.items.length && ts.inputState()), ts.isOpen = !1, setAttr(ts.focus_node, {
            "aria-expanded": "false"
        }), applyCSS(ts.dropdown, {
            display: "none"
        }), ts.settings.hideSelected && ts.clearActiveOption(), ts.refreshState(), os && ts.trigger("dropdown_close", ts.dropdown)
    }
    positionDropdown() {
        if (this.settings.dropdownParent === "body") {
            var ze = this.control,
                ts = ze.getBoundingClientRect(),
                os = ze.offsetHeight + ts.top + window.scrollY,
                ss = ts.left + window.scrollX;
            applyCSS(this.dropdown, {
                width: ts.width + "px",
                top: os + "px",
                left: ss + "px"
            })
        }
    }
    clear(ze) {
        var ts = this;
        if (ts.items.length) {
            var os = ts.controlChildren();
            iterate$1(os, ss => {
                ts.removeItem(ss, !0)
            }), ts.inputState(), ze || ts.updateOriginalInput(), ts.trigger("clear")
        }
    }
    insertAtCaret(ze) {
        const ts = this,
            os = ts.caretPos,
            ss = ts.control;
        ss.insertBefore(ze, ss.children[os] || null), ts.setCaret(os + 1)
    }
    deleteSelection(ze) {
        var ts, os, ss, rs, is = this;
        ts = ze && ze.keyCode === KEY_BACKSPACE ? -1 : 1, os = getSelection(is.control_input);
        const ns = [];
        if (is.activeItems.length) rs = getTail(is.activeItems, ts), ss = nodeIndex(rs), ts > 0 && ss++, iterate$1(is.activeItems, as => ns.push(as));
        else if ((is.isFocused || is.settings.mode === "single") && is.items.length) {
            const as = is.controlChildren();
            let cs;
            ts < 0 && os.start === 0 && os.length === 0 ? cs = as[is.caretPos - 1] : ts > 0 && os.start === is.inputValue().length && (cs = as[is.caretPos]), cs !== void 0 && ns.push(cs)
        }
        if (!is.shouldDelete(ns, ze)) return !1;
        for (preventDefault(ze, !0), typeof ss < "u" && is.setCaret(ss); ns.length;) is.removeItem(ns.pop());
        return is.inputState(), is.positionDropdown(), is.refreshOptions(!1), !0
    }
    shouldDelete(ze, ts) {
        const os = ze.map(ss => ss.dataset.value);
        return !(!os.length || typeof this.settings.onDelete == "function" && this.settings.onDelete(os, ts) === !1)
    }
    advanceSelection(ze, ts) {
        var os, ss, rs = this;
        rs.rtl && (ze *= -1), !rs.inputValue().length && (isKeyDown(KEY_SHORTCUT, ts) || isKeyDown("shiftKey", ts) ? (os = rs.getLastActive(ze), os ? os.classList.contains("active") ? ss = rs.getAdjacent(os, ze, "item") : ss = os : ze > 0 ? ss = rs.control_input.nextElementSibling : ss = rs.control_input.previousElementSibling, ss && (ss.classList.contains("active") && rs.removeActiveItem(os), rs.setActiveItemClass(ss))) : rs.moveCaret(ze))
    }
    moveCaret(ze) {}
    getLastActive(ze) {
        let ts = this.control.querySelector(".last-active");
        if (ts) return ts;
        var os = this.control.querySelectorAll(".active");
        if (os) return getTail(os, ze)
    }
    setCaret(ze) {
        this.caretPos = this.items.length
    }
    controlChildren() {
        return Array.from(this.control.querySelectorAll("[data-ts-item]"))
    }
    lock() {
        this.setLocked(!0)
    }
    unlock() {
        this.setLocked(!1)
    }
    setLocked(ze = this.isReadOnly || this.isDisabled) {
        this.isLocked = ze, this.refreshState()
    }
    disable() {
        this.setDisabled(!0), this.close()
    }
    enable() {
        this.setDisabled(!1)
    }
    setDisabled(ze) {
        this.focus_node.tabIndex = ze ? -1 : this.tabIndex, this.isDisabled = ze, this.input.disabled = ze, this.control_input.disabled = ze, this.setLocked()
    }
    setReadOnly(ze) {
        this.isReadOnly = ze, this.input.readOnly = ze, this.control_input.readOnly = ze, this.setLocked()
    }
    destroy() {
        var ze = this,
            ts = ze.revertSettings;
        ze.trigger("destroy"), ze.off(), ze.wrapper.remove(), ze.dropdown.remove(), ze.input.innerHTML = ts.innerHTML, ze.input.tabIndex = ts.tabIndex, removeClasses(ze.input, "tomselected", "ts-hidden-accessible"), ze._destroy(), delete ze.input.tomselect
    }
    render(ze, ts) {
        var os, ss;
        const rs = this;
        if (typeof this.settings.render[ze] != "function" || (ss = rs.settings.render[ze].call(this, ts, escape_html), !ss)) return null;
        if (ss = getDom(ss), ze === "option" || ze === "option_create" ? ts[rs.settings.disabledField] ? setAttr(ss, {
                "aria-disabled": "true"
            }) : setAttr(ss, {
                "data-selectable": ""
            }) : ze === "optgroup" && (os = ts.group[rs.settings.optgroupValueField], setAttr(ss, {
                "data-group": os
            }), ts.group[rs.settings.disabledField] && setAttr(ss, {
                "data-disabled": ""
            })), ze === "option" || ze === "item") {
            const is = get_hash(ts[rs.settings.valueField]);
            setAttr(ss, {
                "data-value": is
            }), ze === "item" ? (addClasses(ss, rs.settings.itemClass), setAttr(ss, {
                "data-ts-item": ""
            })) : (addClasses(ss, rs.settings.optionClass), setAttr(ss, {
                role: "option",
                id: ts.$id
            }), ts.$div = ss, rs.options[is] = ts)
        }
        return ss
    }
    _render(ze, ts) {
        const os = this.render(ze, ts);
        if (os == null) throw "HTMLElement expected";
        return os
    }
    clearCache() {
        iterate$1(this.options, ze => {
            ze.$div && (ze.$div.remove(), delete ze.$div)
        })
    }
    uncacheValue(ze) {
        const ts = this.getOption(ze);
        ts && ts.remove()
    }
    canCreate(ze) {
        return this.settings.create && ze.length > 0 && this.settings.createFilter.call(this, ze)
    }
    hook(ze, ts, os) {
        var ss = this,
            rs = ss[ts];
        ss[ts] = function() {
            var is, ns;
            return ze === "after" && (is = rs.apply(ss, arguments)), ns = os.apply(ss, arguments), ze === "instead" ? ns : (ze === "before" && (is = rs.apply(ss, arguments)), is)
        }
    }
}

function change_listener() {
    addEvent(this.input, "change", () => {
        this.sync()
    })
}

function checkbox_options(es) {
    var ze = this,
        ts = ze.onOptionSelect;
    ze.settings.hideSelected = !1;
    const os = Object.assign({
        className: "tomselect-checkbox",
        checkedClassNames: void 0,
        uncheckedClassNames: void 0
    }, es);
    var ss = function(ns, as) {
            as ? (ns.checked = !0, os.uncheckedClassNames && ns.classList.remove(...os.uncheckedClassNames), os.checkedClassNames && ns.classList.add(...os.checkedClassNames)) : (ns.checked = !1, os.checkedClassNames && ns.classList.remove(...os.checkedClassNames), os.uncheckedClassNames && ns.classList.add(...os.uncheckedClassNames))
        },
        rs = function(ns) {
            setTimeout(() => {
                var as = ns.querySelector("input." + os.className);
                as instanceof HTMLInputElement && ss(as, ns.classList.contains("selected"))
            }, 1)
        };
    ze.hook("after", "setupTemplates", () => {
        var is = ze.settings.render.option;
        ze.settings.render.option = (ns, as) => {
            var cs = getDom(is.call(ze, ns, as)),
                fs = document.createElement("input");
            os.className && fs.classList.add(os.className), fs.addEventListener("click", function(ps) {
                preventDefault(ps)
            }), fs.type = "checkbox";
            const vs = hash_key(ns[ze.settings.valueField]);
            return ss(fs, !!(vs && ze.items.indexOf(vs) > -1)), cs.prepend(fs), cs
        }
    }), ze.on("item_remove", is => {
        var ns = ze.getOption(is);
        ns && (ns.classList.remove("selected"), rs(ns))
    }), ze.on("item_add", is => {
        var ns = ze.getOption(is);
        ns && rs(ns)
    }), ze.hook("instead", "onOptionSelect", (is, ns) => {
        if (ns.classList.contains("selected")) {
            ns.classList.remove("selected"), ze.removeItem(ns.dataset.value), ze.refreshOptions(), preventDefault(is, !0);
            return
        }
        ts.call(ze, is, ns), rs(ns)
    })
}

function clear_button(es) {
    const ze = this,
        ts = Object.assign({
            className: "clear-button",
            title: "Clear All",
            html: os => `<div class="${os.className}" title="${os.title}">&#10799;</div>`
        }, es);
    ze.on("initialize", () => {
        var os = getDom(ts.html(ts));
        os.addEventListener("click", ss => {
            ze.isLocked || (ze.clear(), ze.settings.mode === "single" && ze.settings.allowEmptyOption && ze.addItem(""), ss.preventDefault(), ss.stopPropagation())
        }), ze.control.appendChild(os)
    })
}
const insertAfter = (es, ze) => {
        var ts;
        (ts = es.parentNode) == null || ts.insertBefore(ze, es.nextSibling)
    },
    insertBefore = (es, ze) => {
        var ts;
        (ts = es.parentNode) == null || ts.insertBefore(ze, es)
    },
    isBefore = (es, ze) => {
        do {
            var ts;
            if (ze = (ts = ze) == null ? void 0 : ts.previousElementSibling, es == ze) return !0
        } while (ze && ze.previousElementSibling);
        return !1
    };

function drag_drop() {
    var es = this;
    if (es.settings.mode !== "multi") return;
    var ze = es.lock,
        ts = es.unlock;
    let os = !0,
        ss;
    es.hook("after", "setupTemplates", () => {
        var rs = es.settings.render.item;
        es.settings.render.item = (is, ns) => {
            const as = getDom(rs.call(es, is, ns));
            setAttr(as, {
                draggable: "true"
            });
            const cs = bs => {
                    os || preventDefault(bs), bs.stopPropagation()
                },
                fs = bs => {
                    ss = as, setTimeout(() => {
                        as.classList.add("ts-dragging")
                    }, 0)
                },
                vs = bs => {
                    bs.preventDefault(), as.classList.add("ts-drag-over"), gs(as, ss)
                },
                ps = () => {
                    as.classList.remove("ts-drag-over")
                },
                gs = (bs, Bs) => {
                    Bs !== void 0 && (isBefore(Bs, as) ? insertAfter(bs, Bs) : insertBefore(bs, Bs))
                },
                us = () => {
                    var bs;
                    document.querySelectorAll(".ts-drag-over").forEach(Vs => Vs.classList.remove("ts-drag-over")), (bs = ss) == null || bs.classList.remove("ts-dragging"), ss = void 0;
                    var Bs = [];
                    es.control.querySelectorAll("[data-value]").forEach(Vs => {
                        if (Vs.dataset.value) {
                            let xs = Vs.dataset.value;
                            xs && Bs.push(xs)
                        }
                    }), es.setValue(Bs)
                };
            return addEvent(as, "mousedown", cs), addEvent(as, "dragstart", fs), addEvent(as, "dragenter", vs), addEvent(as, "dragover", vs), addEvent(as, "dragleave", ps), addEvent(as, "dragend", us), as
        }
    }), es.hook("instead", "lock", () => (os = !1, ze.call(es))), es.hook("instead", "unlock", () => (os = !0, ts.call(es)))
}

function dropdown_header(es) {
    const ze = this,
        ts = Object.assign({
            title: "Untitled",
            headerClass: "dropdown-header",
            titleRowClass: "dropdown-header-title",
            labelClass: "dropdown-header-label",
            closeClass: "dropdown-header-close",
            html: os => '<div class="' + os.headerClass + '"><div class="' + os.titleRowClass + '"><span class="' + os.labelClass + '">' + os.title + '</span><a class="' + os.closeClass + '">&times;</a></div></div>'
        }, es);
    ze.on("initialize", () => {
        var os = getDom(ts.html(ts)),
            ss = os.querySelector("." + ts.closeClass);
        ss && ss.addEventListener("click", rs => {
            preventDefault(rs, !0), ze.close()
        }), ze.dropdown.insertBefore(os, ze.dropdown.firstChild)
    })
}

function caret_position() {
    var es = this;
    es.hook("instead", "setCaret", ze => {
        es.settings.mode === "single" || !es.control.contains(es.control_input) ? ze = es.items.length : (ze = Math.max(0, Math.min(es.items.length, ze)), ze != es.caretPos && !es.isPending && es.controlChildren().forEach((ts, os) => {
            os < ze ? es.control_input.insertAdjacentElement("beforebegin", ts) : es.control.appendChild(ts)
        })), es.caretPos = ze
    }), es.hook("instead", "moveCaret", ze => {
        if (!es.isFocused) return;
        const ts = es.getLastActive(ze);
        if (ts) {
            const os = nodeIndex(ts);
            es.setCaret(ze > 0 ? os + 1 : os), es.setActiveItem(), removeClasses(ts, "last-active")
        } else es.setCaret(es.caretPos + ze)
    })
}

function dropdown_input() {
    const es = this;
    es.settings.shouldOpen = !0, es.hook("before", "setup", () => {
        es.focus_node = es.control, addClasses(es.control_input, "dropdown-input");
        const ze = getDom('<div class="dropdown-input-wrap">');
        ze.append(es.control_input), es.dropdown.insertBefore(ze, es.dropdown.firstChild);
        const ts = getDom('<input class="items-placeholder" tabindex="-1" />');
        ts.placeholder = es.settings.placeholder || "", es.control.append(ts)
    }), es.on("initialize", () => {
        es.control_input.addEventListener("keydown", ts => {
            switch (ts.keyCode) {
                case KEY_ESC:
                    es.isOpen && (preventDefault(ts, !0), es.close()), es.clearActiveItems();
                    return;
                case KEY_TAB:
                    es.focus_node.tabIndex = -1;
                    break
            }
            return es.onKeyDown.call(es, ts)
        }), es.on("blur", () => {
            es.focus_node.tabIndex = es.isDisabled ? -1 : es.tabIndex
        }), es.on("dropdown_open", () => {
            es.control_input.focus()
        });
        const ze = es.onBlur;
        es.hook("instead", "onBlur", ts => {
            if (!(ts && ts.relatedTarget == es.control_input)) return ze.call(es)
        }), addEvent(es.control_input, "blur", () => es.onBlur()), es.hook("before", "close", () => {
            es.isOpen && es.focus_node.focus({
                preventScroll: !0
            })
        })
    })
}

function input_autogrow() {
    var es = this;
    es.on("initialize", () => {
        var ze = document.createElement("span"),
            ts = es.control_input;
        ze.style.cssText = "position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ", es.wrapper.appendChild(ze);
        var os = ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"];
        for (const rs of os) ze.style[rs] = ts.style[rs];
        var ss = () => {
            ze.textContent = ts.value, ts.style.width = ze.clientWidth + "px"
        };
        ss(), es.on("update item_add item_remove", ss), addEvent(ts, "input", ss), addEvent(ts, "keyup", ss), addEvent(ts, "blur", ss), addEvent(ts, "update", ss)
    })
}

function no_backspace_delete() {
    var es = this,
        ze = es.deleteSelection;
    this.hook("instead", "deleteSelection", ts => es.activeItems.length ? ze.call(es, ts) : !1)
}

function no_active_items() {
    this.hook("instead", "setActiveItem", () => {}), this.hook("instead", "selectAll", () => {})
}

function optgroup_columns() {
    var es = this,
        ze = es.onKeyDown;
    es.hook("instead", "onKeyDown", ts => {
        var os, ss, rs, is;
        if (!es.isOpen || !(ts.keyCode === KEY_LEFT || ts.keyCode === KEY_RIGHT)) return ze.call(es, ts);
        es.ignoreHover = !0, is = parentMatch(es.activeOption, "[data-group]"), os = nodeIndex(es.activeOption, "[data-selectable]"), is && (ts.keyCode === KEY_LEFT ? is = is.previousSibling : is = is.nextSibling, is && (rs = is.querySelectorAll("[data-selectable]"), ss = rs[Math.min(rs.length - 1, os)], ss && es.setActiveOption(ss)))
    })
}

function remove_button(es) {
    const ze = Object.assign({
        label: "&times;",
        title: "Remove",
        className: "remove",
        append: !0
    }, es);
    var ts = this;
    if (ze.append) {
        var os = '<a href="javascript:void(0)" class="' + ze.className + '" tabindex="-1" title="' + escape_html(ze.title) + '">' + ze.label + "</a>";
        ts.hook("after", "setupTemplates", () => {
            var ss = ts.settings.render.item;
            ts.settings.render.item = (rs, is) => {
                var ns = getDom(ss.call(ts, rs, is)),
                    as = getDom(os);
                return ns.appendChild(as), addEvent(as, "mousedown", cs => {
                    preventDefault(cs, !0)
                }), addEvent(as, "click", cs => {
                    ts.isLocked || (preventDefault(cs, !0), !ts.isLocked && ts.shouldDelete([ns], cs) && (ts.removeItem(ns), ts.refreshOptions(!1), ts.inputState()))
                }), ns
            }
        })
    }
}

function restore_on_backspace(es) {
    const ze = this,
        ts = Object.assign({
            text: os => os[ze.settings.labelField]
        }, es);
    ze.on("item_remove", function(os) {
        if (ze.isFocused && ze.control_input.value.trim() === "") {
            var ss = ze.options[os];
            ss && ze.setTextboxValue(ts.text.call(ze, ss))
        }
    })
}

function virtual_scroll() {
    const es = this,
        ze = es.canLoad,
        ts = es.clearActiveOption,
        os = es.loadCallback;
    var ss = {},
        rs, is = !1,
        ns, as = [];
    if (es.settings.shouldLoadMore || (es.settings.shouldLoadMore = () => {
            if (rs.clientHeight / (rs.scrollHeight - rs.scrollTop) > .9) return !0;
            if (es.activeOption) {
                var ps = es.selectable(),
                    gs = Array.from(ps).indexOf(es.activeOption);
                if (gs >= ps.length - 2) return !0
            }
            return !1
        }), !es.settings.firstUrl) throw "virtual_scroll plugin requires a firstUrl() method";
    es.settings.sortField = [{
        field: "$order"
    }, {
        field: "$score"
    }];
    const cs = vs => typeof es.settings.maxOptions == "number" && rs.children.length >= es.settings.maxOptions ? !1 : !!(vs in ss && ss[vs]),
        fs = (vs, ps) => es.items.indexOf(ps) >= 0 || as.indexOf(ps) >= 0;
    es.setNextUrl = (vs, ps) => {
        ss[vs] = ps
    }, es.getUrl = vs => {
        if (vs in ss) {
            const ps = ss[vs];
            return ss[vs] = !1, ps
        }
        return es.clearPagination(), es.settings.firstUrl.call(es, vs)
    }, es.clearPagination = () => {
        ss = {}
    }, es.hook("instead", "clearActiveOption", () => {
        if (!is) return ts.call(es)
    }), es.hook("instead", "canLoad", vs => vs in ss ? cs(vs) : ze.call(es, vs)), es.hook("instead", "loadCallback", (vs, ps) => {
        if (!is) es.clearOptions(fs);
        else if (ns) {
            const gs = vs[0];
            gs !== void 0 && (ns.dataset.value = gs[es.settings.valueField])
        }
        os.call(es, vs, ps), is = !1
    }), es.hook("after", "refreshOptions", () => {
        const vs = es.lastValue;
        var ps;
        cs(vs) ? (ps = es.render("loading_more", {
            query: vs
        }), ps && (ps.setAttribute("data-selectable", ""), ns = ps)) : vs in ss && !rs.querySelector(".no-results") && (ps = es.render("no_more_results", {
            query: vs
        })), ps && (addClasses(ps, es.settings.optionClass), rs.append(ps))
    }), es.on("initialize", () => {
        as = Object.keys(es.options), rs = es.dropdown_content, es.settings.render = Object.assign({}, {
            loading_more: () => '<div class="loading-more-results">Loading more results ... </div>',
            no_more_results: () => '<div class="no-more-results">No more results</div>'
        }, es.settings.render), rs.addEventListener("scroll", () => {
            es.settings.shouldLoadMore.call(es) && cs(es.lastValue) && (is || (is = !0, es.load.call(es, es.lastValue)))
        })
    })
}
TomSelect.define("change_listener", change_listener);
TomSelect.define("checkbox_options", checkbox_options);
TomSelect.define("clear_button", clear_button);
TomSelect.define("drag_drop", drag_drop);
TomSelect.define("dropdown_header", dropdown_header);
TomSelect.define("caret_position", caret_position);
TomSelect.define("dropdown_input", dropdown_input);
TomSelect.define("input_autogrow", input_autogrow);
TomSelect.define("no_backspace_delete", no_backspace_delete);
TomSelect.define("no_active_items", no_active_items);
TomSelect.define("optgroup_columns", optgroup_columns);
TomSelect.define("remove_button", remove_button);
TomSelect.define("restore_on_backspace", restore_on_backspace);
TomSelect.define("virtual_scroll", virtual_scroll);
const lazyframe = "",
    Lazyframe = () => {
        let es;
        const ze = [],
            ts = {
                vendor: void 0,
                id: void 0,
                src: void 0,
                thumbnail: void 0,
                title: void 0,
                initialized: !1,
                y: void 0,
                debounce: 250,
                lazyload: !0,
                autoplay: !0,
                initinview: !1,
                onLoad: us => {},
                onAppend: us => {},
                onThumbnailLoad: us => {}
            },
            os = {
                regex: {
                    youtube_nocookie: /(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,
                    youtube: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,
                    vimeo: /vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/
                },
                condition: {
                    youtube: us => us && us[1].length == 11 ? us[1] : !1,
                    youtube_nocookie: us => us && us[1].length == 11 ? us[1] : !1,
                    vimeo: us => us && us[1].length === 9 || us[1].length === 8 ? us[1] : !1
                },
                src: {
                    youtube: us => `https://www.youtube.com/embed/${us.id}/?autoplay=${us.autoplay?"1":"0"}&${us.query}`,
                    youtube_nocookie: us => `https://www.youtube-nocookie.com/embed/${us.id}/?autoplay=${us.autoplay?"1":"0"}&${us.query}`,
                    vimeo: us => `https://player.vimeo.com/video/${us.id}/?autoplay=${us.autoplay?"1":"0"}&${us.query}`
                },
                endpoint: us => `https://noembed.com/embed?url=${us.src}`,
                response: {
                    title: us => us.title,
                    thumbnail: us => us.thumbnail_url
                }
            };

        function ss(us, ...bs) {
            if (es = Object.assign({}, ts, bs[0]), typeof us == "string") {
                const Bs = document.querySelectorAll(us);
                for (let Vs = 0; Vs < Bs.length; Vs++) rs(Bs[Vs])
            } else if (typeof us.length > "u") rs(us);
            else
                for (let Bs = 0; Bs < us.length; Bs++) rs(us[Bs]);
            es.lazyload && vs()
        }

        function rs(us) {
            if (!(us instanceof HTMLElement) || us.classList.contains("lazyframe--loaded")) return;
            const bs = {
                el: us,
                settings: is(us)
            };
            bs.el.addEventListener("click", () => {
                bs.el.appendChild(bs.iframe);
                const Bs = us.querySelectorAll("iframe");
                bs.settings.onAppend.call(this, Bs[0])
            }), es.lazyload ? ps(bs) : cs(bs, !!bs.settings.thumbnail)
        }

        function is(us) {
            const bs = Array.prototype.slice.apply(us.attributes).filter(Vs => Vs.value !== "").reduce((Vs, xs) => {
                    let Ls = xs.name.indexOf("data-") === 0 ? xs.name.split("data-")[1] : xs.name;
                    return Vs[Ls] = xs.value, Vs
                }, {}),
                Bs = Object.assign({}, es, bs, {
                    y: us.offsetTop,
                    originalSrc: bs.src,
                    query: ns(bs.src)
                });
            if (Bs.vendor) {
                const Vs = Bs.src.match(os.regex[Bs.vendor]);
                Bs.id = os.condition[Bs.vendor](Vs)
            }
            return Bs
        }

        function ns(us) {
            const bs = us.split("?");
            return bs[1] ? bs[1] : null
        }

        function as(us) {
            return us.vendor ? !us.title || !us.thumbnail : !1
        }

        function cs(us) {
            as(us.settings) ? fs(us, (bs, Bs) => {
                if (bs) return;
                const Vs = Bs[0],
                    xs = Bs[1];
                if (xs.settings.title || (xs.settings.title = os.response.title(Vs)), !xs.settings.thumbnail) {
                    const Ls = os.response.thumbnail(Vs);
                    xs.settings.thumbnail = Ls, us.settings.onThumbnailLoad.call(this, Ls)
                }
                ps(xs, !0)
            }) : ps(us, !0)
        }

        function fs(us, bs) {
            const Bs = os.endpoint(us.settings),
                Vs = new XMLHttpRequest;
            Vs.open("GET", Bs, !0), Vs.onload = function() {
                if (Vs.status >= 200 && Vs.status < 400) {
                    const xs = JSON.parse(Vs.responseText);
                    bs(null, [xs, us])
                } else bs(!0)
            }, Vs.onerror = function() {
                bs(!0)
            }, Vs.send()
        }

        function vs() {
            const us = window.innerHeight;
            let bs = ze.length;
            const Bs = (Ms, Js) => {
                Ms.settings.initialized = !0, Ms.el.classList.add("lazyframe--loaded"), bs--, cs(Ms), Ms.settings.initinview && Ms.el.click(), Ms.settings.onLoad.call(this, Ms)
            };
            ze.filter(Ms => Ms.settings.y < us).forEach(Bs);
            const Vs = Rs(() => {
                Ls = xs < window.pageYOffset, xs = window.pageYOffset, Ls && ze.filter(Ms => Ms.settings.y < us + xs && Ms.settings.initialized === !1).forEach(Bs), bs === 0 && window.removeEventListener("scroll", Vs, !1)
            }, es.debounce);
            let xs = 0,
                Ls = !1;
            window.addEventListener("scroll", Vs, !1);

            function Rs(Ms, Js, Ts) {
                let Ps;
                return function() {
                    let $s = this,
                        Cs = arguments,
                        Es = function() {
                            Ps = null, Ts || Ms.apply($s, Cs)
                        },
                        Fs = Ts && !Ps;
                    clearTimeout(Ps), Ps = setTimeout(Es, Js), Fs && Ms.apply($s, Cs)
                }
            }
        }

        function ps(us, bs) {
            if (us.iframe = gs(us.settings), us.settings.thumbnail && bs && (us.el.style.backgroundImage = `url(${us.settings.thumbnail})`), us.settings.title && us.el.children.length === 0) {
                const Bs = document.createDocumentFragment(),
                    Vs = document.createElement("span");
                Vs.className = "lazyframe__title", Vs.innerHTML = us.settings.title, Bs.appendChild(Vs), us.el.appendChild(Bs)
            }
            es.lazyload || (us.el.classList.add("lazyframe--loaded"), us.settings.onLoad.call(this, us), ze.push(us)), us.settings.initialized || ze.push(us)
        }

        function gs(us) {
            const bs = document.createDocumentFragment(),
                Bs = document.createElement("iframe");
            return us.vendor && (us.src = os.src[us.vendor](us)), Bs.setAttribute("id", `lazyframe-${us.id}`), Bs.setAttribute("src", us.src), Bs.setAttribute("frameborder", 0), Bs.setAttribute("allowfullscreen", ""), us.autoplay && (Bs.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), bs.appendChild(Bs), bs
        }
        return ss
    },
    lf = Lazyframe(),
    _hoisted_1$o = {
        class: "mb"
    },
    _hoisted_2$n = {
        class: "flex flex-gap"
    },
    _hoisted_3$m = {
        class: "flex-center"
    },
    _hoisted_4$m = {
        class: "flex flex-center"
    },
    _hoisted_5$l = ["onUpdate:modelValue"],
    _hoisted_6$l = {
        class: "flex flex-center"
    },
    _hoisted_7$k = ["onUpdate:modelValue"],
    _sfc_main$v = {
        __name: "AdminProductCodes",
        props: {
            platforms: {
                type: Array,
                required: !0
            },
            csrfToken: String,
            actionUrl: String,
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                {
                    formData: ts,
                    onSubmit: os
                } = useFetch(ze);
            return (ss, rs) => (openBlock(), createElementBlock("form", {
                onSubmit: rs[0] || (rs[0] = withModifiers(is => unref(os)(es.actionUrl, unref(ts)), ["prevent"])),
                onChange: rs[1] || (rs[1] = (...is) => ss.onChange && ss.onChange(...is)),
                onInvalidCapture: rs[2] || (rs[2] = withModifiers((...is) => ss.onInvalid && ss.onInvalid(...is), ["prevent"])),
                class: "border border-sm mb"
            }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(es.platforms, is => (openBlock(), createElementBlock("div", _hoisted_1$o, [createBaseVNode("div", _hoisted_2$n, [createBaseVNode("div", _hoisted_3$m, [createBaseVNode("b", null, toDisplayString(is.name), 1)]), createBaseVNode("div", _hoisted_4$m, [rs[3] || (rs[3] = createTextVNode(" ASIN ")), withDirectives(createBaseVNode("input", {
                type: "text",
                class: "form-input ms-1",
                name: "asin",
                "onUpdate:modelValue": ns => unref(ts)[is.id].asin = ns
            }, null, 8, _hoisted_5$l), [
                [vModelText, unref(ts)[is.id].asin]
            ])]), createBaseVNode("div", _hoisted_6$l, [rs[4] || (rs[4] = createTextVNode(" eBayID ")), withDirectives(createBaseVNode("input", {
                type: "text",
                class: "form-input ms-1",
                name: "ebay_id",
                "onUpdate:modelValue": ns => unref(ts)[is.id].ebay_id = ns
            }, null, 8, _hoisted_7$k), [
                [vModelText, unref(ts)[is.id].ebay_id]
            ])])])]))), 256)), rs[5] || (rs[5] = createBaseVNode("div", null, [createBaseVNode("button", {
                class: "btn btn-sm btn-primary"
            }, "Update")], -1))], 32))
        }
    },
    _sfc_main$u = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            userId: {
                type: Number,
                required: !0
            },
            commercial: {
                type: Boolean,
                required: !0
            },
            productId: {
                type: String
            },
            billingCycle: {
                type: String
            },
            apiTermsUrl: {
                type: String,
                required: !0
            }
        },
        setup: useFetch,
        data() {
            return {
                formData: {
                    application_name: null,
                    application_url: null,
                    description: null,
                    commercial: this.commercial,
                    agree: !1,
                    user_id: this.userId,
                    product_id: this.productId,
                    billing_cycle: this.billingCycle
                }
            }
        }
    },
    _hoisted_1$n = {
        class: "form-group"
    },
    _hoisted_2$m = {
        class: "form-group"
    },
    _hoisted_3$l = {
        class: "form-group"
    },
    _hoisted_4$l = {
        class: "form-group"
    },
    _hoisted_5$k = ["href"],
    _hoisted_6$k = {
        class: "form-checkbox"
    },
    _hoisted_7$j = ["checked"],
    _hoisted_8$i = ["disabled"];

function _sfc_render$f(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[4] || (ze[4] = withModifiers(as => es.onSubmit(ts.actionUrl, ss.formData), ["prevent"])),
        onChange: ze[5] || (ze[5] = (...as) => es.onChange && es.onChange(...as)),
        onInvalidCapture: ze[6] || (ze[6] = withModifiers((...as) => es.onInvalid && es.onInvalid(...as), ["prevent"])),
        class: "mb"
    }, [createBaseVNode("div", _hoisted_1$n, [ze[7] || (ze[7] = createBaseVNode("label", {
        class: "form-label"
    }, "App / Website / Plugin Name", -1)), withDirectives(createBaseVNode("input", {
        type: "text",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.application_name
        }]),
        name: "application_name",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => ss.formData.application_name = as),
        placeholder: "The name of your app, website or plugin where the data will be used",
        maxlength: "1024",
        required: ""
    }, null, 2), [
        [vModelText, ss.formData.application_name]
    ]), es.result.errors.application_name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.application_name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_2$m, [ze[8] || (ze[8] = createBaseVNode("label", {
        class: "form-label"
    }, "URL", -1)), withDirectives(createBaseVNode("input", {
        type: "url",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.application_url
        }]),
        name: "application_url",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => ss.formData.application_url = as),
        placeholder: "https://example.com"
    }, null, 2), [
        [vModelText, ss.formData.application_url]
    ]), es.result.errors.application_url ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.application_url
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_3$l, [ze[9] || (ze[9] = createBaseVNode("label", {
        class: "form-label"
    }, "Description of your application or use case", -1)), withDirectives(createBaseVNode("textarea", {
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.description
        }]),
        rows: "5",
        name: "description",
        "onUpdate:modelValue": ze[2] || (ze[2] = as => ss.formData.description = as),
        placeholder: "How are you planning to use MobyGames data?",
        maxlength: "10000",
        required: ""
    }, "      ", 2), [
        [vModelText, ss.formData.description]
    ]), es.result.errors.description ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.description
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_4$l, [createBaseVNode("p", null, [ze[10] || (ze[10] = createTextVNode(" Your use of the MobyGames API is governed by the ")), createBaseVNode("a", {
        href: ts.apiTermsUrl
    }, "API License Agreement", 8, _hoisted_5$k), ze[11] || (ze[11] = createTextVNode(". "))]), createBaseVNode("label", _hoisted_6$k, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "agree",
        "onUpdate:modelValue": ze[3] || (ze[3] = as => ss.formData.agree = as),
        checked: ss.formData.agree,
        required: ""
    }, null, 8, _hoisted_7$j), [
        [vModelCheckbox, ss.formData.agree]
    ]), ze[12] || (ze[12] = createTextVNode(" I agree to the API License Agreement "))]), es.result.errors.agree ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.agree
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createVNode(ns, {
        error: es.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: es.result.loading || !ss.formData.agree
    }, toDisplayString(ts.productId ? "Subscribe" : "Submit"), 9, _hoisted_8$i)], 32)
}
const ApiApplication = _export_sfc(_sfc_main$u, [
        ["render", _sfc_render$f]
    ]),
    _hoisted_1$m = {
        class: "border border-1 mb"
    },
    _hoisted_2$l = {
        key: 0
    },
    _hoisted_3$k = ["href"],
    _hoisted_4$k = {
        key: 1
    },
    _hoisted_5$j = {
        class: "form-group mb-1"
    },
    _hoisted_6$j = {
        class: "form-group mb-1"
    },
    _hoisted_7$i = {
        class: "form-group mb-1"
    },
    _hoisted_8$h = {
        class: "form-group"
    },
    _hoisted_9$g = {
        class: "form-group flex flex-gap"
    },
    _sfc_main$t = {
        __name: "ApproverAssociateDeveloper",
        props: {
            csrfToken: {
                type: String,
                required: !0
            },
            actionUrl: {
                type: String,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                ts = ref(!1),
                {
                    formData: os,
                    result: ss,
                    onSubmit: rs
                } = useFetch(ze),
                is = async () => {
                    if (ts.value = !1, ss.loading) return;
                    await rs(ze.actionUrl, os, !1) ? window.location.reload() : alert("Failed to unlink developer")
                };
            return (ns, as) => {
                const cs = resolveComponent("form-alert");
                return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1$m, [unref(os).userUrl ? (openBlock(), createElementBlock("div", _hoisted_2$l, [as[7] || (as[7] = createTextVNode(" This person is ")), createBaseVNode("a", {
                    href: unref(os).userUrl
                }, "a user of MobyGames", 8, _hoisted_3$k), as[8] || (as[8] = createTextVNode(". [ ")), createBaseVNode("a", {
                    href: "#",
                    onClick: as[0] || (as[0] = fs => ts.value = !0),
                    class: "link-danger"
                }, "unlink"), as[9] || (as[9] = createTextVNode(" ] "))])) : (openBlock(), createElementBlock("details", _hoisted_4$k, [as[11] || (as[11] = createBaseVNode("summary", {
                    class: "no-select"
                }, "Does this person have a MobyGames account?", -1)), createBaseVNode("div", _hoisted_5$j, [as[10] || (as[10] = createTextVNode(" User ID: ")), withDirectives(createBaseVNode("input", {
                    type: "number",
                    class: "form-input form-input-sm display-inline width-auto me-sm",
                    "onUpdate:modelValue": as[1] || (as[1] = fs => unref(os).user_id = fs),
                    required: ""
                }, null, 512), [
                    [vModelText, unref(os).user_id]
                ])]), createBaseVNode("div", _hoisted_6$j, [withDirectives(createBaseVNode("textarea", {
                    class: "form-input",
                    "onUpdate:modelValue": as[2] || (as[2] = fs => unref(os).reason = fs),
                    placeholder: "Notes, proof, etc."
                }, null, 512), [
                    [vModelText, unref(os).reason]
                ])]), createBaseVNode("div", _hoisted_7$i, [unref(ss).errors.SERVER_ERROR ? (openBlock(), createBlock(cs, {
                    key: 0,
                    msg: unref(ss).errors.SERVER_ERROR
                }, null, 8, ["msg"])) : createCommentVNode("", !0), createBaseVNode("button", {
                    onClick: as[3] || (as[3] = fs => unref(rs)(es.actionUrl, unref(os))),
                    class: "btn btn-sm btn-primary"
                }, "Link Account")])]))]), createVNode(Modal, {
                    show: ts.value,
                    onClose: as[6] || (as[6] = fs => ts.value = !1)
                }, {
                    header: withCtx(() => as[12] || (as[12] = [createBaseVNode("h4", null, "Confirm", -1)])),
                    body: withCtx(() => as[13] || (as[13] = [createTextVNode(" Are you sure you want to unlink this developer? ")])),
                    footer: withCtx(() => [createBaseVNode("div", _hoisted_8$h, [withDirectives(createBaseVNode("textarea", {
                        class: "form-input",
                        "onUpdate:modelValue": as[4] || (as[4] = fs => unref(os).reason = fs),
                        placeholder: "Notes, proof, etc."
                    }, null, 512), [
                        [vModelText, unref(os).reason]
                    ])]), createBaseVNode("div", _hoisted_9$g, [createBaseVNode("button", {
                        class: "btn btn-block",
                        onClick: as[5] || (as[5] = fs => ts.value = !1)
                    }, "No"), createBaseVNode("button", {
                        class: "btn btn-block btn-primary",
                        onClick: is
                    }, "Yes")])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    },
    _sfc_main$s = {
        __name: "ChartMobyStats",
        props: {
            data: Object
        },
        setup(es) {
            const ze = ref(null),
                ts = es,
                os = {
                    width: 3,
                    cap: "round"
                },
                ss = {
                    title: {
                        text: "MobyGames Database Stats",
                        left: "center",
                        textStyle: {
                            fontSize: 15
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        right: 150
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    xAxis: {
                        type: "time",
                        axisLabel: {
                            margin: 30
                        },
                        boundaryGap: !1
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {
                            margin: 30,
                            formatter: "{value}"
                        }
                    },
                    series: [{
                        name: "Games",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Games: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.games
                    }, {
                        name: "Add-ons",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Add-ons: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.addons
                    }, {
                        name: "People",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `People: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.people
                    }, {
                        name: "Companies",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Companies: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.companies
                    }, {
                        name: "Screenshots",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Screenshots: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.screenshots
                    }, {
                        name: "Cover Art",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Cover Art: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.covers
                    }, {
                        name: "Promo Art",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Promo Art: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.promo
                    }, {
                        name: "Game Relations",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Game Relations: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.game_relations
                    }, {
                        name: "Critic Reviews",
                        type: "line",
                        showSymbol: !1,
                        endLabel: {
                            show: !0,
                            formatter: rs => `Critic Reviews: ${rs.value[1].toLocaleString()}`
                        },
                        emphasis: {
                            focus: "series"
                        },
                        lineStyle: os,
                        data: ts.data.critic_reviews
                    }]
                };
            return onMounted(() => {
                const rs = init(ze.value, getCookie("darkMode") === "true" ? "dark" : "");
                ss.backgroundColor = getComputedStyle(document.querySelector(".bg-mobypro")).getPropertyValue("background-color"), rs.setOption(ss), window.addEventListener("resize", () => {
                    rs.resize()
                })
            }), (rs, is) => (openBlock(), createElementBlock("div", {
                ref_key: "chart",
                ref: ze,
                style: {
                    height: "750px"
                }
            }, null, 512))
        }
    },
    _sfc_main$r = {
        __name: "ChartPlatform",
        props: {
            data: Array
        },
        setup(es) {
            const ze = ref(null),
                ts = es,
                os = {
                    title: {
                        text: `Releases Per Year on ${ts.data.name}`,
                        left: "center",
                        subtext: "Data by MobyGames.com",
                        textStyle: {
                            fontSize: 15
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: !1
                    },
                    yAxis: {
                        type: "value",
                        show: !1
                    },
                    series: [{
                        name: "Releases",
                        type: "line",
                        data: ts.data.peryear,
                        showSymbol: !1,
                        lineStyle: {
                            width: 2,
                            cap: "round"
                        }
                    }]
                };
            return onMounted(() => {
                const ss = init(ze.value, getCookie("darkMode") === "true" ? "dark" : "");
                os.backgroundColor = getComputedStyle(document.querySelector(".bg-mobypro")).getPropertyValue("background-color"), ss.setOption(os), window.addEventListener("resize", () => {
                    ss.resize()
                })
            }), (ss, rs) => (openBlock(), createElementBlock("div", {
                ref_key: "chart",
                ref: ze,
                style: {
                    height: "200px"
                }
            }, null, 512))
        }
    },
    _sfc_main$q = {
        __name: "ChartPlatforms",
        props: {
            data: Array
        },
        setup(es) {
            const ze = ref(null),
                os = {
                    title: {
                        text: "MobyGames Platform Stats",
                        left: "center",
                        textStyle: {
                            fontSize: 15
                        }
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: !0
                    },
                    xAxis: {
                        type: "category",
                        axisLabel: {
                            margin: 30,
                            fontSize: 12
                        },
                        boundaryGap: !1
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {
                            margin: 30,
                            fontSize: 12,
                            formatter: "{value}"
                        }
                    },
                    series: es.data.games
                };
            return onMounted(() => {
                const ss = init(ze.value, getCookie("darkMode") === "true" ? "dark" : "");
                os.backgroundColor = getComputedStyle(document.querySelector(".bg-mobypro")).getPropertyValue("background-color"), ss.setOption(os), window.addEventListener("resize", () => {
                    ss.resize()
                })
            }), (ss, rs) => (openBlock(), createElementBlock("div", {
                ref_key: "chart",
                ref: ze,
                style: {
                    height: "750px"
                }
            }, null, 512))
        }
    },
    updateFrequency = 1e3,
    startIndex = 0,
    _sfc_main$p = {
        __name: "ChartPlatformsRace",
        props: {
            data: Array
        },
        setup(es) {
            const ze = ref(null),
                ts = es;
            let os = ts.data.slice(1).map(vs => vs[2]);
            os = [...new Set(os)];
            const ss = os[startIndex];
            let rs = null,
                is = [];
            const ns = {
                title: {
                    text: "MobyGames Platform Bar Race",
                    left: "center",
                    textStyle: {
                        fontSize: 15
                    }
                },
                yAxis: {
                    type: "category",
                    max: 10,
                    inverse: !0,
                    animationDuration: 250,
                    animationDurationUpdate: 250
                },
                xAxis: {
                    max: "dataMax"
                },
                dataset: {
                    source: ts.data.slice(1).filter(vs => vs[2] === ss)
                },
                animationDuration: 0,
                animationDurationUpdate: updateFrequency,
                animationEasing: "linear",
                animationEasingUpdate: "linear",
                series: [{
                    realtimeSort: !0,
                    seriesLayoutBy: "column",
                    type: "bar",
                    encode: {
                        x: 0,
                        y: 1
                    },
                    label: {
                        show: !0,
                        position: "right",
                        fontFamily: "monospace"
                    }
                }],
                graphic: {
                    elements: [{
                        type: "text",
                        right: 160,
                        bottom: 60,
                        style: {
                            text: ss,
                            font: "bolder 80px monospace",
                            fill: "rgba(100, 100, 100, 0.25)"
                        },
                        z: 100
                    }]
                }
            };

            function as() {
                rs !== null && rs.dispose(), rs = init(ze.value, getCookie("darkMode") === "true" ? "dark" : ""), rs.setOption(ns)
            }

            function cs() {
                is.forEach(clearTimeout), is = [], os.forEach((vs, ps) => {
                    const gs = setTimeout(() => {
                        const us = ts.data.slice(1).filter(bs => bs[2] === vs);
                        ns.series[0].data = us, ns.graphic.elements[0].style.text = vs, rs.setOption(ns, !0)
                    }, ps * updateFrequency);
                    is.push(gs)
                })
            }

            function fs() {
                as(), cs()
            }
            return onMounted(() => {
                as(), cs()
            }), (vs, ps) => (openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", {
                ref_key: "chart",
                ref: ze,
                style: {
                    height: "750px"
                }
            }, null, 512), createBaseVNode("button", {
                onClick: fs
            }, "Restart Race")], 64))
        }
    },
    _hoisted_1$l = {
        id: "phs",
        class: "mt",
        open: ""
    },
    _hoisted_2$k = {
        class: "grid-split-20-80"
    },
    _hoisted_3$j = {
        class: "border border-1 border-mobypro text-sm"
    },
    _hoisted_4$j = {
        class: "list-group mt-1"
    },
    _hoisted_5$i = {
        class: "form-checkbox text-sm mb-1"
    },
    _hoisted_6$i = ["value"],
    _hoisted_7$h = {
        key: 0,
        class: "form-checkbox mb-1"
    },
    _hoisted_8$g = {
        class: "border border-1 border-mobypro text-sm"
    },
    _hoisted_9$f = {
        class: "list-group three-column mt-1 mb-0"
    },
    _hoisted_10$f = {
        class: "form-checkbox mb-1"
    },
    _hoisted_11$f = ["value"],
    storePrefsKey = "store-prefs-20240912",
    platformPrefsKey = "platform-prefs-20240912",
    _sfc_main$o = {
        __name: "ChartPriceHistory",
        props: {
            prices: Array,
            title: String,
            stores: Object,
            platforms: Array
        },
        setup(es) {
            const ze = ref(null),
                ts = es,
                os = ref(Object.values(ts.stores).filter(us => us.active && us.name !== "Amazon" && us.name !== "eBay").sort((us, bs) => us.name.localeCompare(bs.name))),
                ss = ref([...new Set(Object.values(os.value).flatMap(us => us.platforms))].map(us => ts.platforms.find(bs => bs.id === us)).sort((us, bs) => us.name.localeCompare(bs.name))),
                rs = ref([]),
                is = ref(localStorage.getItem("used-prices") === "true"),
                ns = ref([]);
            localStorage.getItem(storePrefsKey) ? rs.value = JSON.parse(localStorage.getItem(storePrefsKey)) : rs.value = os.value.map(us => us.id), localStorage.getItem(platformPrefsKey) ? ns.value = JSON.parse(localStorage.getItem(platformPrefsKey)) : ns.value = ss.value.map(us => us.id);
            let as = null,
                cs = "MobyPlus";
            rs.value.includes(2) && (cs += ". Note that eBay prices are estimates.");
            const fs = us => us.store_id === 2 && us.name.includes("(used)") ? is.value && us.platforms.some(bs => ns.value.includes(bs)) : !!(rs.value.includes(us.store_id) && us.platforms.some(bs => ns.value.includes(bs))),
                vs = {
                    title: {
                        text: `Price History for ${ts.title}`,
                        subtext: cs,
                        left: "center",
                        textStyle: {
                            fontSize: 15
                        }
                    },
                    legend: {
                        data: ts.prices.map(us => ({
                            name: us.name,
                            icon: "circle"
                        })),
                        selected: ts.prices.reduce((us, bs) => (us[bs.name] = fs(bs), us), {}),
                        bottom: 0
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: "time"
                    },
                    yAxis: {
                        type: "value",
                        name: "Price",
                        nameLocation: "middle",
                        nameGap: 60,
                        axisLabel: {
                            formatter: us => `$${us}`
                        }
                    },
                    tooltip: {
                        order: "valueDesc",
                        trigger: "axis",
                        valueFormatter: us => Number.isNaN(us) ? "n/a" : `$${us}`
                    },
                    series: ts.prices.map(us => ({
                        type: "line",
                        step: "end",
                        data: us.prices,
                        name: us.name,
                        showSymbol: !0,
                        lineStyle: {
                            width: 3,
                            cap: "round"
                        },
                        connectNulls: !0
                    }))
                },
                ps = () => {
                    cs = "MobyPlus", (rs.value.includes(2) || is.value) && (cs += ". Note that eBay prices are estimates.")
                },
                gs = () => {
                    ps(), as.setOption({
                        title: {
                            subtext: cs
                        }
                    })
                };
            return onMounted(() => {
                as = init(ze.value, getCookie("darkMode") === "true" ? "dark" : ""), vs.backgroundColor = getComputedStyle(document.querySelector(".bg-mobypro")).getPropertyValue("background-color"), as.on("legendselectchanged", gs), ps(), as.setOption(vs), window.addEventListener("resize", () => {
                    as.resize()
                })
            }), watch(rs, () => {
                localStorage.setItem(storePrefsKey, JSON.stringify(rs.value)), ps(), as.setOption({
                    title: {
                        subtext: cs
                    },
                    legend: {
                        selected: ts.prices.reduce((us, bs) => (us[bs.name] = fs(bs), us), {})
                    }
                })
            }), watch(is, () => {
                localStorage.setItem("used-prices", is.value), ps(), as.setOption({
                    title: {
                        subtext: cs
                    },
                    legend: {
                        selected: ts.prices.reduce((us, bs) => (us[bs.name] = fs(bs), us), {})
                    }
                })
            }), watch(ns, () => {
                localStorage.setItem(platformPrefsKey, JSON.stringify(ns.value)), as.setOption({
                    legend: {
                        selected: ts.prices.reduce((us, bs) => (us[bs.name] = fs(bs), us), {})
                    }
                })
            }), (us, bs) => (openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", {
                ref_key: "chartDom",
                ref: ze,
                style: {
                    height: "350px"
                }
            }, null, 512), createBaseVNode("details", _hoisted_1$l, [bs[6] || (bs[6] = createBaseVNode("summary", {
                class: "no-select"
            }, [createBaseVNode("b", null, "Store & Platform Settings")], -1)), bs[7] || (bs[7] = createBaseVNode("p", {
                class: "text-sm text-muted"
            }, " Select the stores and platforms you want enabled in price history charts. This applies globally across the site. ", -1)), createBaseVNode("div", _hoisted_2$k, [createBaseVNode("div", _hoisted_3$j, [bs[4] || (bs[4] = createBaseVNode("b", null, "Stores", -1)), createBaseVNode("ul", _hoisted_4$j, [(openBlock(!0), createElementBlock(Fragment, null, renderList(os.value, Bs => (openBlock(), createElementBlock("li", {
                key: Bs.id
            }, [createBaseVNode("label", _hoisted_5$i, [withDirectives(createBaseVNode("input", {
                type: "checkbox",
                value: Bs.id,
                "onUpdate:modelValue": bs[0] || (bs[0] = Vs => rs.value = Vs)
            }, null, 8, _hoisted_6$i), [
                [vModelCheckbox, rs.value]
            ]), createTextVNode(" " + toDisplayString(Bs.name) + " ", 1), Bs.id === 2 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createTextVNode("(new)")], 64)) : createCommentVNode("", !0)]), Bs.id === 2 ? (openBlock(), createElementBlock("label", _hoisted_7$h, [withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": bs[1] || (bs[1] = Vs => is.value = Vs)
            }, null, 512), [
                [vModelCheckbox, is.value]
            ]), bs[3] || (bs[3] = createTextVNode(" eBay (used) "))])) : createCommentVNode("", !0)]))), 128))])]), createBaseVNode("div", _hoisted_8$g, [bs[5] || (bs[5] = createBaseVNode("b", null, "Platforms", -1)), createBaseVNode("ul", _hoisted_9$f, [(openBlock(!0), createElementBlock(Fragment, null, renderList(ss.value, Bs => (openBlock(), createElementBlock("li", {
                key: Bs.id
            }, [createBaseVNode("label", _hoisted_10$f, [withDirectives(createBaseVNode("input", {
                type: "checkbox",
                value: Bs.id,
                "onUpdate:modelValue": bs[2] || (bs[2] = Vs => ns.value = Vs)
            }, null, 8, _hoisted_11$f), [
                [vModelCheckbox, ns.value]
            ]), createTextVNode(" " + toDisplayString(Bs.name), 1)])]))), 128))])])])])], 64))
        }
    },
    _sfc_main$n = {
        __name: "ChartResearchRank",
        props: {
            data: Array,
            title: String
        },
        setup(es) {
            const ze = ref(null),
                ts = es,
                os = Math.min(...ts.data.map(ns => ns[1])),
                ss = Math.max(...ts.data.map(ns => ns[1])),
                rs = Math.round(ts.data.reduce((ns, as) => ns + as[1], 0) / ts.data.length),
                is = {
                    title: {
                        text: `Research Ranking for ${ts.title}`,
                        subtext: `Average: #${rs.toLocaleString()} · High: #${os.toLocaleString()} · Low: #${ss.toLocaleString()}`,
                        left: "center",
                        textStyle: {
                            fontSize: 15
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: "time",
                        offset: 10
                    },
                    yAxis: {
                        type: "value",
                        inverse: !0,
                        min: 1,
                        name: "Rank",
                        nameLocation: "middle",
                        nameGap: 60
                    },
                    tooltip: {
                        order: "valueDesc",
                        trigger: "axis"
                    },
                    series: [{
                        data: ts.data,
                        type: "line",
                        lineStyle: {
                            width: 3,
                            cap: "round"
                        },
                        showSymbol: !1
                    }]
                };
            return onMounted(() => {
                const ns = init(ze.value, getCookie("darkMode") === "true" ? "dark" : "");
                is.backgroundColor = getComputedStyle(document.querySelector(".bg-mobypro")).getPropertyValue("background-color"), ns.setOption(is), window.addEventListener("resize", () => {
                    ns.resize()
                })
            }), (ns, as) => (openBlock(), createElementBlock("div", {
                ref_key: "chart",
                ref: ze,
                style: {
                    height: "250px"
                }
            }, null, 512))
        }
    },
    _hoisted_1$k = {
        class: "dot-list mb-0"
    },
    _hoisted_2$j = {
        key: 0
    },
    _hoisted_3$i = {
        key: 1
    },
    _hoisted_4$i = {
        key: 2
    },
    _hoisted_5$h = {
        key: 3
    },
    _hoisted_6$h = {
        key: 1
    },
    _hoisted_7$g = ["href"],
    _sfc_main$m = {
        __name: "CoverSwapLinks",
        props: {
            frontImage: Object,
            backImage: Object,
            numCovers: Number,
            moreUrl: String
        },
        setup(es) {
            const ze = es,
                ts = ref(!0),
                os = computed(() => ze.backImage.url ? ze.numCovers - 2 : ze.numCovers - 1),
                ss = () => {
                    ts.value = !ts.value, ts.value ? (document.querySelector("#cover").href = ze.frontImage.url, document.querySelector("#cover > img").src = ze.frontImage.image) : (document.querySelector("#cover").href = ze.backImage.url, document.querySelector("#cover > img").src = ze.backImage.image)
                };
            return (rs, is) => (openBlock(), createElementBlock("ul", _hoisted_1$k, [es.backImage.url ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [ts.value ? (openBlock(), createElementBlock("li", _hoisted_2$j, " front ")) : (openBlock(), createElementBlock("li", _hoisted_3$i, [createBaseVNode("a", {
                href: "#",
                onClick: is[0] || (is[0] = withModifiers(ns => ss(), ["prevent"]))
            }, "front")])), ts.value ? (openBlock(), createElementBlock("li", _hoisted_5$h, [createBaseVNode("a", {
                href: "#",
                onClick: is[1] || (is[1] = withModifiers(ns => ss(), ["prevent"]))
            }, "back")])) : (openBlock(), createElementBlock("li", _hoisted_4$i, " back "))], 64)) : createCommentVNode("", !0), os.value > 0 ? (openBlock(), createElementBlock("li", _hoisted_6$h, [createBaseVNode("a", {
                href: es.moreUrl
            }, toDisplayString(os.value) + " more", 9, _hoisted_7$g)])) : createCommentVNode("", !0)]))
        }
    },
    _hoisted_1$j = {
        class: "overflow-x-scroll mb"
    },
    _hoisted_2$i = {
        class: "table table-hover"
    },
    _hoisted_3$h = {
        class: "text-nowrap"
    },
    _hoisted_4$h = {
        class: "text-nowrap text-center"
    },
    _hoisted_5$g = {
        class: "text-nowrap text-center"
    },
    _hoisted_6$g = ["onClick"],
    _hoisted_7$f = {
        class: "text-nowrap no-select"
    },
    _hoisted_8$f = {
        href: "#"
    },
    _hoisted_9$e = {
        class: "text-center text-nowrap"
    },
    _hoisted_10$e = {
        class: "text-center text-nowrap"
    },
    _hoisted_11$e = {
        key: 0,
        href: "#"
    },
    _hoisted_12$e = {
        key: 1,
        href: "#"
    },
    _hoisted_13$d = {
        key: 0
    },
    _hoisted_14$d = {
        colspan: "3"
    },
    _hoisted_15$c = {
        class: "text-sm mb-0"
    },
    _hoisted_16$c = ["href"],
    _hoisted_17$c = ["href"],
    _hoisted_18$b = ["title"],
    _hoisted_19$a = ["href"],
    _hoisted_20$a = {
        key: 0
    },
    _sfc_main$l = {
        __name: "CriticReviews",
        props: {
            isApprover: Boolean,
            reviews: Array,
            expanded: {
                type: Boolean,
                default: !1
            }
        },
        setup(es) {
            const ze = es,
                ts = ref(30);
            ze.expanded && (ts.value = 999);
            const os = ref("score"),
                ss = ref(!0),
                rs = ps => {
                    ps === os.value && (ss.value = !ss.value), os.value = ps
                },
                is = ref([]),
                ns = ref("critic-reviews-all");
            ze.expanded && (ns.value = "critic-reviews-overview");
            const as = JSON.parse(localStorage.getItem(ns.value)),
                cs = ps => {
                    is.value.includes(ps) ? is.value = is.value.filter(gs => gs !== ps) : is.value.push(ps)
                },
                fs = () => {
                    is.value.length === ze.reviews.length ? (is.value = [], localStorage.setItem(ns.value, 0)) : (is.value = ze.reviews.map(ps => ps.id), localStorage.setItem(ns.value, 1))
                };
            as === 1 && fs();
            const vs = computed(() => ze.reviews.sort((ps, gs) => {
                if (os.value === "name") {
                    if (ps.source.name.toUpperCase() < gs.source.name.toUpperCase()) return ss.value ? -1 : 1;
                    if (ps.source.name.toUpperCase() > gs.source.name.toUpperCase()) return ss.value ? 1 : -1
                } else if (os.value === "platform") {
                    if (ps.platform.name.toUpperCase() < gs.platform.name.toUpperCase()) return ss.value ? -1 : 1;
                    if (ps.platform.name.toUpperCase() > gs.platform.name.toUpperCase()) return ss.value ? 1 : -1
                } else if (os.value === "score") {
                    if ((ps.normalized_score || 0) < (gs.normalized_score || 0)) return ss.value ? 1 : -1;
                    if ((ps.normalized_score || 0) > (gs.normalized_score || 0)) return ss.value ? -1 : 1
                }
                return 0
            }));
            return (ps, gs) => (openBlock(), createElementBlock("div", _hoisted_1$j, [createBaseVNode("table", _hoisted_2$i, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", _hoisted_3$h, [createBaseVNode("a", {
                href: "#",
                onClick: gs[0] || (gs[0] = withModifiers(us => rs("name"), ["prevent"]))
            }, "Critic"), os.value === "name" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ss.value,
                    "arrow-up": !ss.value
                }])
            }, null, 2)) : createCommentVNode("", !0), gs[5] || (gs[5] = createTextVNode(" [ ")), createBaseVNode("a", {
                href: "#",
                onClick: gs[1] || (gs[1] = withModifiers(us => fs(), ["prevent"]))
            }, toDisplayString(is.value.length < es.reviews.length ? "Expand" : "Close") + " All", 1), gs[6] || (gs[6] = createTextVNode(" ] "))]), createBaseVNode("th", _hoisted_4$h, [createBaseVNode("a", {
                href: "#",
                onClick: gs[2] || (gs[2] = withModifiers(us => rs("platform"), ["prevent"]))
            }, "Platform"), os.value === "platform" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ss.value,
                    "arrow-up": !ss.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_5$g, [createBaseVNode("a", {
                href: "#",
                onClick: gs[3] || (gs[3] = withModifiers(us => rs("score"), ["prevent"]))
            }, "Score"), os.value === "score" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ss.value,
                    "arrow-up": !ss.value
                }])
            }, null, 2)) : createCommentVNode("", !0)])])]), createBaseVNode("tbody", null, [(openBlock(!0), createElementBlock(Fragment, null, renderList(vs.value.filter(us => us.platform_id !== null).slice(0, ts.value), us => (openBlock(), createElementBlock(Fragment, {
                key: us
            }, [createBaseVNode("tr", {
                class: normalizeClass([{
                    "bg-notice": is.value.includes(us.id)
                }, "cursor-zoom"]),
                onClick: withModifiers(bs => cs(us.id), ["prevent"])
            }, [createBaseVNode("td", _hoisted_7$f, [createBaseVNode("a", _hoisted_8$f, toDisplayString(us.source.name), 1)]), createBaseVNode("td", _hoisted_9$e, toDisplayString(us.platform.name), 1), createBaseVNode("td", _hoisted_10$e, [us.type.id !== 6 ? (openBlock(), createElementBlock("a", _hoisted_11$e, toDisplayString(parseFloat(us.normalized_score.toFixed(0))) + "%", 1)) : (openBlock(), createElementBlock("a", _hoisted_12$e, "Unscored"))])], 10, _hoisted_6$g), is.value.includes(us.id) ? (openBlock(), createElementBlock("tr", _hoisted_13$d, [createBaseVNode("td", _hoisted_14$d, [createBaseVNode("p", null, toDisplayString(us.citation), 1), createBaseVNode("p", _hoisted_15$c, [es.isApprover ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [gs[7] || (gs[7] = createTextVNode(" Approver: ")), createBaseVNode("a", {
                href: us.edit_object_url,
                class: "link-approver"
            }, "Edit", 8, _hoisted_16$c), gs[8] || (gs[8] = createBaseVNode("br", null, null, -1))], 64)) : createCommentVNode("", !0), us.url ? (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [gs[9] || (gs[9] = createTextVNode(" URL: ")), createBaseVNode("a", {
                href: us.url,
                class: "link-external",
                rel: "nofollow",
                target: "_blank"
            }, "Full Review", 8, _hoisted_17$c), gs[10] || (gs[10] = createBaseVNode("br", null, null, -1))], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 2
            }, [gs[11] || (gs[11] = createTextVNode(" URL: Offline Review")), gs[12] || (gs[12] = createBaseVNode("br", null, null, -1))], 64)), us.score && us.max_score ? (openBlock(), createElementBlock(Fragment, {
                key: 3
            }, [gs[13] || (gs[13] = createTextVNode(" Score: ")), createBaseVNode("span", {
                title: us.type.name
            }, toDisplayString(us.score) + " of " + toDisplayString(us.max_score), 9, _hoisted_18$b), gs[14] || (gs[14] = createBaseVNode("br", null, null, -1))], 64)) : createCommentVNode("", !0), createTextVNode(" Date: " + toDisplayString(us.date), 1), gs[15] || (gs[15] = createBaseVNode("br", null, null, -1)), gs[16] || (gs[16] = createTextVNode(" Source: ")), createBaseVNode("a", {
                href: us.source.internal_url
            }, toDisplayString(us.source.name), 9, _hoisted_19$a), gs[17] || (gs[17] = createTextVNode()), us.source.num_reviews ? (openBlock(), createElementBlock(Fragment, {
                key: 4
            }, [createTextVNode("(" + toDisplayString(us.source.num_reviews) + " reviews)", 1)], 64)) : createCommentVNode("", !0)])])])) : createCommentVNode("", !0)], 64))), 128))])]), ts.value < es.reviews.length ? (openBlock(), createElementBlock("p", _hoisted_20$a, [gs[18] || (gs[18] = createTextVNode(" [ ")), gs[19] || (gs[19] = createBaseVNode("span", {
                class: "arrow arrow-down ms-1"
            }, null, -1)), gs[20] || (gs[20] = createTextVNode()), createBaseVNode("a", {
                href: "#",
                onClick: gs[4] || (gs[4] = withModifiers(us => ts.value = es.reviews.length, ["prevent"]))
            }, toDisplayString(es.reviews.length - ts.value) + " More", 1), gs[21] || (gs[21] = createTextVNode(" ] "))])) : createCommentVNode("", !0)]))
        }
    },
    _hoisted_1$i = {
        class: "overflow-x-scroll mb",
        style: {
            "max-height": "600px"
        }
    },
    _hoisted_2$h = {
        class: "table table-nowrap table-striped table-hover table-sticky mb"
    },
    _hoisted_3$g = {
        class: "bg-darker"
    },
    _hoisted_4$g = {
        class: "text-right"
    },
    _hoisted_5$f = {
        class: "text-center"
    },
    _hoisted_6$f = {
        key: 0,
        class: "text-center"
    },
    _hoisted_7$e = {
        class: "text-center"
    },
    _hoisted_8$e = {
        class: "text-center"
    },
    _hoisted_9$d = {
        class: "text-center"
    },
    _hoisted_10$d = {
        class: "text-center"
    },
    _hoisted_11$d = {
        class: "text-right"
    },
    _hoisted_12$d = ["href"],
    _hoisted_13$c = {
        class: "text-center"
    },
    _hoisted_14$c = {
        key: 0,
        class: "text-center"
    },
    _hoisted_15$b = {
        class: "text-center"
    },
    _hoisted_16$b = {
        class: "text-center"
    },
    _hoisted_17$b = {
        class: "text-center"
    },
    _hoisted_18$a = {
        class: "text-center"
    },
    _sfc_main$k = {
        __name: "DbStats",
        props: {
            stats: Array
        },
        setup(es) {
            const ze = es,
                ts = ref("name"),
                os = ref(!0),
                ss = is => {
                    ts.value === is ? os.value = !os.value : os.value = !0, ts.value = is
                },
                rs = computed(() => ze.stats.sort((is, ns) => {
                    if (ts.value === "name") {
                        if (is.name.toUpperCase() > ns.name.toUpperCase()) return os.value ? 1 : -1;
                        if (is.name.toUpperCase() < ns.name.toUpperCase()) return os.value ? -1 : 1
                    } else {
                        if ((is[ts.value] || 0) < (ns[ts.value] || 0)) return os.value ? 1 : -1;
                        if ((is[ts.value] || 0) > (ns[ts.value] || 0)) return os.value ? -1 : 1
                    }
                    return 0
                }));
            return (is, ns) => (openBlock(), createElementBlock("div", _hoisted_1$i, [createBaseVNode("table", _hoisted_2$h, [createBaseVNode("thead", null, [createBaseVNode("tr", _hoisted_3$g, [createBaseVNode("th", _hoisted_4$g, [createBaseVNode("a", {
                href: "#",
                onClick: ns[0] || (ns[0] = withModifiers(as => ss("name"), ["prevent"]))
            }, "Platform"), ts.value === "name" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_5$f, [createBaseVNode("a", {
                href: "#",
                onClick: ns[1] || (ns[1] = withModifiers(as => ss("games"), ["prevent"]))
            }, "Games"), ts.value === "games" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), rs.value[0].hasOwnProperty("addons") ? (openBlock(), createElementBlock("th", _hoisted_6$f, [createBaseVNode("a", {
                href: "#",
                onClick: ns[2] || (ns[2] = withModifiers(as => ss("addons"), ["prevent"]))
            }, "Add-ons"), ts.value === "addons" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), createBaseVNode("th", _hoisted_7$e, [createBaseVNode("a", {
                href: "#",
                onClick: ns[3] || (ns[3] = withModifiers(as => ss("covers"), ["prevent"]))
            }, "Cover Art"), ts.value === "covers" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_8$e, [createBaseVNode("a", {
                href: "#",
                onClick: ns[4] || (ns[4] = withModifiers(as => ss("shots"), ["prevent"]))
            }, "Screenshots"), ts.value === "shots" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_9$d, [createBaseVNode("a", {
                href: "#",
                onClick: ns[5] || (ns[5] = withModifiers(as => ss("reviews"), ["prevent"]))
            }, "Player Reviews"), ts.value === "reviews" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_10$d, [createBaseVNode("a", {
                href: "#",
                onClick: ns[6] || (ns[6] = withModifiers(as => ss("critic_reviews"), ["prevent"]))
            }, "Critic Reviews"), ts.value === "critic_reviews" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": os.value,
                    "arrow-up": !os.value
                }])
            }, null, 2)) : createCommentVNode("", !0)])])]), createBaseVNode("tbody", null, [(openBlock(!0), createElementBlock(Fragment, null, renderList(rs.value, as => (openBlock(), createElementBlock("tr", {
                key: as
            }, [createBaseVNode("td", _hoisted_11$d, [createBaseVNode("a", {
                href: as.url
            }, toDisplayString(as.name), 9, _hoisted_12$d)]), createBaseVNode("td", _hoisted_13$c, toDisplayString(as.games.toLocaleString()), 1), as.hasOwnProperty("addons") ? (openBlock(), createElementBlock("td", _hoisted_14$c, toDisplayString(as.addons.toLocaleString()), 1)) : createCommentVNode("", !0), createBaseVNode("td", _hoisted_15$b, toDisplayString(as.covers.toLocaleString()), 1), createBaseVNode("td", _hoisted_16$b, toDisplayString(as.shots.toLocaleString()), 1), createBaseVNode("td", _hoisted_17$b, toDisplayString(as.reviews.toLocaleString()), 1), createBaseVNode("td", _hoisted_18$a, toDisplayString(as.critic_reviews.toLocaleString()), 1)]))), 128))])])]))
        }
    },
    _sfc_main$j = {
        setup: useFetch,
        data() {
            return {
                showDangerZone: !1,
                showChangePassword: !1,
                deleteConfirmed: !1,
                deleteText: "",
                newPassword: "",
                passChanged: !1,
                hasAvatarToUpload: !1
            }
        },
        props: ["actionUrl", "csrfToken", "closeAccountUrl", "initialValues", "timeZones", "regions", "uploadAvatarUrl", "changePasswordUrl", "mobyproUrl"],
        watch: {
            deleteText() {
                this.deleteText === "delete" ? this.deleteConfirmed = !0 : this.deleteConfirmed = !1
            }
        },
        methods: {
            fileCheck() {
                this.$refs.avatarfile.files && (this.hasAvatarToUpload = !0)
            },
            async uploadAvatar() {
                this.file = this.$refs.avatarfile.files[0];
                const es = new FormData;
                es.append("_csrf_token", this.csrfToken), es.append("file", this.file), es.append("user_id", this.formData.user_id);
                const {
                    result: ze,
                    onSubmit: ts
                } = useFetch(this.$props);
                await ts(this.uploadAvatarUrl, es, !1, !0) ? this.formData.avatar = ze.data.avatar : (this.modal = !0, this.modalBodyText = ze.errors.SERVER_ERROR)
            },
            toggleClose() {
                this.showDangerZone = !this.showDangerZone
            },
            toggleChangePassword() {
                this.showChangePassword = !this.showChangePassword, this.passChanged = !1
            },
            async changePassword() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    user_id: this.formData.user_id,
                    new_password: this.newPassword
                };
                await ze(this.changePasswordUrl, ts) ? (this.passChanged = es.data.password_changed, this.showChangePassword = !1, this.newPassword = "") : console.error(es.errors)
            },
            closeAccount() {
                const {
                    onSubmit: es
                } = useFetch(this.$props);
                es(this.closeAccountUrl, {
                    user_id: this.formData.user_id
                })
            }
        }
    },
    _hoisted_1$h = {
        class: "position-relative border border-mobypro mb form-group"
    },
    _hoisted_2$g = {
        key: 0,
        class: "mt mb-0"
    },
    _hoisted_3$f = ["href"],
    _hoisted_4$f = {
        class: "form-checkbox mt"
    },
    _hoisted_5$e = ["checked", "disabled"],
    _hoisted_6$e = {
        class: "form-checkbox mt"
    },
    _hoisted_7$d = ["checked", "disabled"],
    _hoisted_8$d = {
        class: "form-checkbox mt"
    },
    _hoisted_9$c = ["checked", "disabled"],
    _hoisted_10$c = {
        class: "form-group"
    },
    _hoisted_11$c = {
        class: "form-group"
    },
    _hoisted_12$c = {
        class: "form-group"
    },
    _hoisted_13$b = {
        class: "form-group"
    },
    _hoisted_14$b = {
        class: "flex flex-gap"
    },
    _hoisted_15$a = ["src", "width", "height"],
    _hoisted_16$a = {
        class: "flex flex-gap"
    },
    _hoisted_17$a = {
        class: "form-group"
    },
    _hoisted_18$9 = {
        class: "form-group"
    },
    _hoisted_19$9 = ["value"],
    _hoisted_20$9 = {
        class: "form-group"
    },
    _hoisted_21$8 = {
        class: "form-group"
    },
    _hoisted_22$8 = ["label"],
    _hoisted_23$7 = ["value"],
    _hoisted_24$7 = {
        key: 0,
        class: "form-group"
    },
    _hoisted_25$7 = {
        key: 1,
        class: "form-group"
    },
    _hoisted_26$7 = {
        key: 2,
        class: "form-group"
    },
    _hoisted_27$7 = {
        key: 3,
        class: "form-group"
    },
    _hoisted_28$6 = {
        key: 4,
        class: "form-group"
    },
    _hoisted_29$6 = {
        class: "form-group"
    },
    _hoisted_30$6 = {
        class: "form-group"
    },
    _hoisted_31$6 = {
        class: "form-group"
    },
    _hoisted_32$6 = {
        class: "form-group"
    },
    _hoisted_33$6 = {
        class: "form-checkbox"
    },
    _hoisted_34$6 = ["checked"],
    _hoisted_35$6 = {
        class: "form-group"
    },
    _hoisted_36$6 = {
        class: "form-checkbox"
    },
    _hoisted_37$6 = ["checked"],
    _hoisted_38$6 = {
        class: "form-group"
    },
    _hoisted_39$6 = {
        class: "form-checkbox"
    },
    _hoisted_40$5 = ["checked"],
    _hoisted_41$3 = {
        class: "form-group"
    },
    _hoisted_42$3 = {
        class: "me"
    },
    _hoisted_43$2 = {
        class: "me"
    },
    _hoisted_44$2 = {
        class: "flex"
    },
    _hoisted_45$2 = ["disabled"],
    _hoisted_46$2 = {
        key: 5,
        class: "alert bg-highlight mt"
    },
    _hoisted_47$2 = {
        class: "form-group"
    },
    _hoisted_48$2 = {
        key: 6,
        class: "alert bg-highlight mt"
    },
    _hoisted_49$2 = {
        key: 7,
        class: "alert bg-highlight mt"
    },
    _hoisted_50$2 = {
        key: 0
    },
    _hoisted_51$2 = {
        key: 1
    },
    _hoisted_52$2 = {
        class: "form-group"
    },
    _hoisted_53$2 = ["disabled"];

function _sfc_render$e(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[33] || (ze[33] = withModifiers(as => es.onSubmit(ts.actionUrl, es.formData), ["prevent"])),
        onChange: ze[34] || (ze[34] = (...as) => es.onChange && es.onChange(...as)),
        onInvalidCapture: ze[35] || (ze[35] = withModifiers((...as) => es.onInvalid && es.onInvalid(...as), ["prevent"])),
        class: "mb"
    }, [createBaseVNode("div", _hoisted_1$h, [ze[41] || (ze[41] = createBaseVNode("a", {
        href: "/mobyplus/",
        class: "mobypro"
    }, "MobyPlus", -1)), es.formData.mobypro ? createCommentVNode("", !0) : (openBlock(), createElementBlock("p", _hoisted_2$g, [ze[36] || (ze[36] = createTextVNode(" Upgrade to ")), createBaseVNode("a", {
        href: ts.mobyproUrl
    }, "MobyPlus", 8, _hoisted_3$f), ze[37] || (ze[37] = createTextVNode(" to unlock these settings. "))])), createBaseVNode("label", _hoisted_4$f, [withDirectives(createBaseVNode("input", {
        name: "hide_buybox",
        class: "form-check-input",
        type: "checkbox",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => es.formData.hide_buybox = as),
        checked: es.formData.hide_buybox,
        disabled: !es.formData.mobypro
    }, null, 8, _hoisted_5$e), [
        [vModelCheckbox, es.formData.hide_buybox]
    ]), ze[38] || (ze[38] = createTextVNode(" Hide Buy box on game overview "))]), createBaseVNode("label", _hoisted_6$e, [withDirectives(createBaseVNode("input", {
        name: "hide_ebay",
        class: "form-check-input",
        type: "checkbox",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => es.formData.hide_ebay = as),
        checked: es.formData.hide_ebay,
        disabled: !es.formData.mobypro
    }, null, 8, _hoisted_7$d), [
        [vModelCheckbox, es.formData.hide_ebay]
    ]), ze[39] || (ze[39] = createTextVNode(" Hide Related eBay Results "))]), createBaseVNode("label", _hoisted_8$d, [withDirectives(createBaseVNode("input", {
        name: "hide_ads",
        class: "form-check-input",
        type: "checkbox",
        "onUpdate:modelValue": ze[2] || (ze[2] = as => es.formData.hide_ads = as),
        checked: es.formData.hide_ads,
        disabled: !es.formData.mobypro
    }, null, 8, _hoisted_9$c), [
        [vModelCheckbox, es.formData.hide_ads]
    ]), ze[40] || (ze[40] = createTextVNode(" Hide Ads "))])]), createBaseVNode("div", _hoisted_10$c, [ze[42] || (ze[42] = createBaseVNode("label", {
        class: "form-label",
        for: "display_name"
    }, "Display Name", -1)), withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.display_name
        }]),
        name: "display_name",
        "onUpdate:modelValue": ze[3] || (ze[3] = as => es.formData.display_name = as),
        placeholder: "Display Name",
        minlength: "3",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.display_name]
    ]), es.result.errors.display_name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.display_name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_11$c, [ze[43] || (ze[43] = createBaseVNode("label", {
        class: "form-label",
        for: "user_name"
    }, "Username", -1)), withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.user_name
        }]),
        name: "user_name",
        "onUpdate:modelValue": ze[4] || (ze[4] = as => es.formData.user_name = as),
        placeholder: "Username",
        minlength: "3",
        maxlength: "20",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.user_name]
    ]), es.result.errors.user_name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.user_name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_12$c, [ze[44] || (ze[44] = createBaseVNode("label", {
        class: "form-label",
        for: "email"
    }, "Email", -1)), withDirectives(createBaseVNode("input", {
        type: "email",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.email
        }]),
        name: "email",
        autocomplete: "username",
        "onUpdate:modelValue": ze[5] || (ze[5] = as => es.formData.email = as),
        placeholder: "Email",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.email]
    ]), es.result.errors.email ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.email
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_13$b, [ze[45] || (ze[45] = createBaseVNode("label", {
        class: "form-label",
        for: "avatar"
    }, "Avatar", -1)), createBaseVNode("div", _hoisted_14$b, [es.formData.avatar !== null ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: es.formData.avatar.image_url,
        width: es.formData.avatar.width,
        height: es.formData.avatar.height,
        class: "avatar mb"
    }, null, 8, _hoisted_15$a)) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_16$a, [createBaseVNode("input", {
        onChange: ze[6] || (ze[6] = (...as) => rs.fileCheck && rs.fileCheck(...as)),
        type: "file",
        name: "avatar",
        class: "form-input height-max-content",
        ref: "avatarfile"
    }, null, 544), ss.hasAvatarToUpload ? (openBlock(), createElementBlock("button", {
        key: 0,
        type: "button",
        class: "btn btn-primary height-max-content",
        onClick: ze[7] || (ze[7] = (...as) => rs.uploadAvatar && rs.uploadAvatar(...as))
    }, "Upload")) : createCommentVNode("", !0)])])]), createBaseVNode("div", _hoisted_17$a, [ze[46] || (ze[46] = createBaseVNode("label", {
        class: "form-label",
        for: "url"
    }, "Homepage", -1)), withDirectives(createBaseVNode("input", {
        type: "url",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.url
        }]),
        name: "url",
        "onUpdate:modelValue": ze[8] || (ze[8] = as => es.formData.homepage = as),
        placeholder: "URL"
    }, null, 2), [
        [vModelText, es.formData.homepage]
    ]), es.result.errors.url ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.url
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_18$9, [ze[47] || (ze[47] = createBaseVNode("label", {
        class: "form-label",
        for: "time_zone"
    }, "Time zone", -1)), withDirectives(createBaseVNode("select", {
        name: "level",
        class: "form-control form-select",
        "onUpdate:modelValue": ze[9] || (ze[9] = as => es.formData.time_zone = as)
    }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(ts.timeZones, as => (openBlock(), createElementBlock("option", {
        value: as.zone,
        key: as.zone
    }, toDisplayString(as.zone) + " (" + toDisplayString(as.offset) + ")", 9, _hoisted_19$9))), 128))], 512), [
        [vModelSelect, es.formData.time_zone]
    ])]), createBaseVNode("div", _hoisted_20$9, [ze[48] || (ze[48] = createBaseVNode("label", {
        class: "form-label",
        for: "city"
    }, "City", -1)), withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.city
        }]),
        name: "city",
        "onUpdate:modelValue": ze[10] || (ze[10] = as => es.formData.city = as),
        placeholder: "City",
        maxlength: "64"
    }, null, 2), [
        [vModelText, es.formData.city]
    ]), es.result.errors.city ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.city
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_21$8, [ze[50] || (ze[50] = createBaseVNode("label", {
        class: "form-label",
        for: "country"
    }, "Country", -1)), withDirectives(createBaseVNode("select", {
        name: "level",
        class: "form-control form-select",
        "onUpdate:modelValue": ze[11] || (ze[11] = as => es.formData.country = as)
    }, [ze[49] || (ze[49] = createBaseVNode("option", {
        value: "",
        selected: "",
        disabled: ""
    }, "Select Country", -1)), (openBlock(!0), createElementBlock(Fragment, null, renderList(ts.regions, as => (openBlock(), createElementBlock("optgroup", {
        label: as.region,
        key: as.region
    }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(as.countries, cs => (openBlock(), createElementBlock("option", {
        value: cs.country_code,
        key: cs.country_code
    }, toDisplayString(cs.name), 9, _hoisted_23$7))), 128))], 8, _hoisted_22$8))), 128))], 512), [
        [vModelSelect, es.formData.country]
    ])]), es.formData.im_accounts.aim ? (openBlock(), createElementBlock("div", _hoisted_24$7, [ze[51] || (ze[51] = createBaseVNode("label", {
        class: "form-label",
        for: "aim"
    }, "AIM", -1)), withDirectives(createBaseVNode("input", {
        name: "aim",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.aim
        }]),
        "onUpdate:modelValue": ze[12] || (ze[12] = as => es.formData.im_accounts.aim = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.aim]
    ]), es.result.errors.aim ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.aim
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), es.formData.im_accounts.msn ? (openBlock(), createElementBlock("div", _hoisted_25$7, [ze[52] || (ze[52] = createBaseVNode("label", {
        class: "form-label",
        for: "msn"
    }, "MSN", -1)), withDirectives(createBaseVNode("input", {
        name: "msn",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.msn
        }]),
        "onUpdate:modelValue": ze[13] || (ze[13] = as => es.formData.im_accounts.msn = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.msn]
    ]), es.result.errors.msn ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.msn
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), es.formData.im_accounts.icq ? (openBlock(), createElementBlock("div", _hoisted_26$7, [ze[53] || (ze[53] = createBaseVNode("label", {
        class: "form-label",
        for: "icq"
    }, "ICQ", -1)), withDirectives(createBaseVNode("input", {
        name: "icq",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.icq
        }]),
        "onUpdate:modelValue": ze[14] || (ze[14] = as => es.formData.im_accounts.icq = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.icq]
    ]), es.result.errors.icq ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.icq
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), es.formData.im_accounts.yahoo ? (openBlock(), createElementBlock("div", _hoisted_27$7, [ze[54] || (ze[54] = createBaseVNode("label", {
        class: "form-label",
        for: "yahoo"
    }, "Yahoo", -1)), withDirectives(createBaseVNode("input", {
        name: "yahoo",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.yahoo
        }]),
        "onUpdate:modelValue": ze[15] || (ze[15] = as => es.formData.im_accounts.yahoo = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.yahoo]
    ]), es.result.errors.yahoo ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.yahoo
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), es.formData.im_accounts.gamertag ? (openBlock(), createElementBlock("div", _hoisted_28$6, [ze[55] || (ze[55] = createBaseVNode("label", {
        class: "form-label",
        for: "gamertag"
    }, "Xbox GamerTag", -1)), withDirectives(createBaseVNode("input", {
        name: "gamertag",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.gamertag
        }]),
        "onUpdate:modelValue": ze[16] || (ze[16] = as => es.formData.im_accounts.gamertag = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.gamertag]
    ]), es.result.errors.gamertag ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.gamertag
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_29$6, [ze[56] || (ze[56] = createBaseVNode("label", {
        class: "form-label",
        for: "steam"
    }, "Steam Community ID", -1)), withDirectives(createBaseVNode("input", {
        name: "steam",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.steam
        }]),
        "onUpdate:modelValue": ze[17] || (ze[17] = as => es.formData.im_accounts.steam = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.steam]
    ]), es.result.errors.steam ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.steam
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_30$6, [ze[57] || (ze[57] = createBaseVNode("label", {
        class: "form-label",
        for: "discord"
    }, "Discord", -1)), withDirectives(createBaseVNode("input", {
        name: "discord",
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.discord
        }]),
        "onUpdate:modelValue": ze[18] || (ze[18] = as => es.formData.im_accounts.discord = as),
        maxlength: "255"
    }, null, 2), [
        [vModelText, es.formData.im_accounts.discord]
    ]), es.result.errors.discord ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.discord
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_31$6, [ze[58] || (ze[58] = createBaseVNode("label", {
        class: "form-label",
        for: "about_me"
    }, "About Me", -1)), withDirectives(createBaseVNode("textarea", {
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.about_me
        }]),
        rows: "5",
        name: "about_me",
        "onUpdate:modelValue": ze[19] || (ze[19] = as => es.formData.about_me = as),
        placeholder: "What would you like to say about yourself?",
        maxlength: "10000"
    }, "      ", 2), [
        [vModelText, es.formData.about_me]
    ]), es.result.errors.about_me ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.about_me
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_32$6, [createBaseVNode("label", _hoisted_33$6, [withDirectives(createBaseVNode("input", {
        name: "html_email",
        type: "checkbox",
        "onUpdate:modelValue": ze[20] || (ze[20] = as => es.formData.html_email = as),
        checked: es.formData.html_email
    }, null, 8, _hoisted_34$6), [
        [vModelCheckbox, es.formData.html_email]
    ]), ze[59] || (ze[59] = createTextVNode(" Receive HTML email "))]), es.result.errors.html_email ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.html_email
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_35$6, [createBaseVNode("label", _hoisted_36$6, [withDirectives(createBaseVNode("input", {
        name: "moby_mail_list",
        type: "checkbox",
        "onUpdate:modelValue": ze[21] || (ze[21] = as => es.formData.moby_mail_list = as),
        checked: es.formData.moby_mail_list
    }, null, 8, _hoisted_37$6), [
        [vModelCheckbox, es.formData.moby_mail_list]
    ]), ze[60] || (ze[60] = createTextVNode(" Subscribe to the MobyGames mailing list "))]), es.result.errors.moby_mail_list ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.moby_mail_list
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_38$6, [createBaseVNode("label", _hoisted_39$6, [withDirectives(createBaseVNode("input", {
        name: "receive_approval_notifications",
        type: "checkbox",
        "onUpdate:modelValue": ze[22] || (ze[22] = as => es.formData.receive_approval_notifications = as),
        checked: es.formData.receive_approval_notifications
    }, null, 8, _hoisted_40$5), [
        [vModelCheckbox, es.formData.receive_approval_notifications]
    ]), ze[61] || (ze[61] = createTextVNode(" Receive approval notifications by email "))]), es.result.errors.receive_approval_notifications ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.receive_approval_notifications
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_41$3, [ze[65] || (ze[65] = createTextVNode(" Receive forum reply notifications... ")), createBaseVNode("label", _hoisted_42$3, [withDirectives(createBaseVNode("input", {
        type: "radio",
        name: "forum_reply_notifications",
        "onUpdate:modelValue": ze[23] || (ze[23] = as => es.formData.forum_reply_notifications = as),
        value: "both"
    }, null, 512), [
        [vModelRadio, es.formData.forum_reply_notifications]
    ]), ze[62] || (ze[62] = createTextVNode(" On site and email "))]), createBaseVNode("label", _hoisted_43$2, [withDirectives(createBaseVNode("input", {
        type: "radio",
        name: "forum_reply_notifications",
        "onUpdate:modelValue": ze[24] || (ze[24] = as => es.formData.forum_reply_notifications = as),
        value: "site"
    }, null, 512), [
        [vModelRadio, es.formData.forum_reply_notifications]
    ]), ze[63] || (ze[63] = createTextVNode(" On site only "))]), createBaseVNode("label", null, [withDirectives(createBaseVNode("input", {
        type: "radio",
        name: "forum_reply_notifications",
        "onUpdate:modelValue": ze[25] || (ze[25] = as => es.formData.forum_reply_notifications = as),
        value: "none"
    }, null, 512), [
        [vModelRadio, es.formData.forum_reply_notifications]
    ]), ze[64] || (ze[64] = createTextVNode(" None "))]), es.result.errors.receive_approval_notifications ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.receive_approval_notifications
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createVNode(ns, {
        error: es.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("div", _hoisted_44$2, [createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: es.result.loading
    }, "Update", 8, _hoisted_45$2), createBaseVNode("button", {
        type: "button",
        class: "btn me-sm",
        onClick: ze[26] || (ze[26] = (...as) => rs.toggleChangePassword && rs.toggleChangePassword(...as))
    }, "Change Password"), createBaseVNode("button", {
        type: "button",
        class: "btn",
        onClick: ze[27] || (ze[27] = (...as) => rs.toggleClose && rs.toggleClose(...as))
    }, "Delete Account")]), ss.showChangePassword ? (openBlock(), createElementBlock("div", _hoisted_46$2, [createBaseVNode("div", _hoisted_47$2, [withDirectives(createBaseVNode("input", {
        type: "password",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.new_password
        }]),
        name: "new_password",
        autocomplete: "new-password",
        "onUpdate:modelValue": ze[28] || (ze[28] = as => ss.newPassword = as),
        placeholder: "Password (at least 6 characters)",
        minlength: "6",
        maxlength: "255",
        required: ""
    }, null, 2), [
        [vModelText, ss.newPassword]
    ]), es.result.errors.new_password ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.new_password
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("button", {
        type: "button",
        class: "btn btn-danger",
        onClick: ze[29] || (ze[29] = (...as) => rs.changePassword && rs.changePassword(...as))
    }, "Submit")])) : createCommentVNode("", !0), ss.passChanged ? (openBlock(), createElementBlock("div", _hoisted_48$2, ze[66] || (ze[66] = [createBaseVNode("b", {
        class: "text-success"
    }, "Your password was successfully updated!", -1), createTextVNode(" All other logged-in devices have been logged out. ")]))) : createCommentVNode("", !0), ss.showDangerZone ? (openBlock(), createElementBlock("div", _hoisted_49$2, [ze[68] || (ze[68] = createBaseVNode("p", null, [createBaseVNode("b", {
        class: "text-danger"
    }, "DELETING YOUR ACCOUNT IS NOT REVERSABLE!"), createTextVNode(" Seriously. We won't be able to recover your account. ")], -1)), ze[69] || (ze[69] = createBaseVNode("p", null, " Are you 100% sure you want to delete your account? ", -1)), es.formData.stripe.mobypro ? (openBlock(), createElementBlock("p", _hoisted_50$2, " You have an active subscription to MobyPlus. Closing your account will immediately cancel your subscription, forfeiting any remaining time. ")) : createCommentVNode("", !0), es.formData.stripe.api ? (openBlock(), createElementBlock("p", _hoisted_51$2, " You have an active subscription to the MobyGames API. Closing your account will immediately cancel your subscription, forfeiting any remaining time. ")) : createCommentVNode("", !0), createBaseVNode("div", null, [ze[67] || (ze[67] = createBaseVNode("p", null, ' Enter the word "delete" to confirm: ', -1)), createBaseVNode("div", _hoisted_52$2, [withDirectives(createBaseVNode("input", {
        type: "text",
        "onUpdate:modelValue": ze[30] || (ze[30] = as => ss.deleteText = as),
        class: "form-input"
    }, null, 512), [
        [vModelText, ss.deleteText]
    ])]), createBaseVNode("button", {
        type: "button",
        class: "btn btn me-sm",
        onClick: ze[31] || (ze[31] = (...as) => rs.toggleClose && rs.toggleClose(...as))
    }, "No, just kidding!"), createBaseVNode("button", {
        type: "button",
        class: "btn btn-danger",
        disabled: !ss.deleteConfirmed,
        onClick: ze[32] || (ze[32] = (...as) => rs.closeAccount && rs.closeAccount(...as))
    }, "Permanently Delete Account", 8, _hoisted_53$2)])])) : createCommentVNode("", !0)], 32)
}
const EditUserProfile = _export_sfc(_sfc_main$j, [
        ["render", _sfc_render$e]
    ]),
    _hoisted_1$g = {
        class: "mb border bg-highlight"
    },
    _hoisted_2$f = {
        class: "form-group mt"
    },
    _hoisted_3$e = {
        class: "form-group flex flex-gap"
    },
    _hoisted_4$e = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_5$d = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_6$d = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_7$c = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_8$c = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_9$b = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_10$b = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_11$b = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_12$b = {
        key: 0
    },
    _hoisted_13$a = {
        class: "form-group"
    },
    _hoisted_14$a = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_15$9 = {
        class: "flex flex-wrap flex-gap form-group"
    },
    _hoisted_16$9 = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_17$9 = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_18$8 = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_19$8 = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_20$8 = ["disabled"],
    _sfc_main$i = {
        __name: "FeedSettings",
        props: {
            csrfToken: String,
            actionUrl: String,
            userId: Number,
            platforms: {
                type: Array,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                {
                    formData: ts,
                    result: os,
                    onSubmit: ss
                } = useFetch(ze),
                rs = async () => {
                    if (os.loading) return;
                    await ss(ze.actionUrl, ts, !1) && window.location.reload()
                },
                is = ref(!1);
            return watch(ts, () => {
                is.value = !0
            }), (ns, as) => {
                const cs = resolveComponent("v-select");
                return openBlock(), createElementBlock("details", _hoisted_1$g, [as[31] || (as[31] = createBaseVNode("summary", {
                    class: "no-select text-primary"
                }, "Customize your Feed", -1)), createBaseVNode("div", _hoisted_2$f, [createBaseVNode("div", _hoisted_3$e, [createBaseVNode("label", _hoisted_4$e, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "games",
                    "onUpdate:modelValue": as[0] || (as[0] = fs => unref(ts).games = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).games]
                ]), as[14] || (as[14] = createTextVNode("Games"))]), createBaseVNode("label", _hoisted_5$d, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "covers",
                    "onUpdate:modelValue": as[1] || (as[1] = fs => unref(ts).covers = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).covers]
                ]), as[15] || (as[15] = createTextVNode("Covers"))]), createBaseVNode("label", _hoisted_6$d, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "screenshots",
                    "onUpdate:modelValue": as[2] || (as[2] = fs => unref(ts).screenshots = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).screenshots]
                ]), as[16] || (as[16] = createTextVNode("Screenshots"))]), createBaseVNode("label", _hoisted_7$c, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "promo_art",
                    "onUpdate:modelValue": as[3] || (as[3] = fs => unref(ts).promo_art = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).promo_art]
                ]), as[17] || (as[17] = createTextVNode("Promo Art"))]), createBaseVNode("label", _hoisted_8$c, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "credits",
                    "onUpdate:modelValue": as[4] || (as[4] = fs => unref(ts).credits = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).credits]
                ]), as[18] || (as[18] = createTextVNode("Credits"))]), createBaseVNode("label", _hoisted_9$b, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "descriptions",
                    "onUpdate:modelValue": as[5] || (as[5] = fs => unref(ts).descriptions = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).descriptions]
                ]), as[19] || (as[19] = createTextVNode("Descriptions"))]), createBaseVNode("label", _hoisted_10$b, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "trivia",
                    "onUpdate:modelValue": as[6] || (as[6] = fs => unref(ts).trivia = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).trivia]
                ]), as[20] || (as[20] = createTextVNode("Trivia"))])]), createBaseVNode("div", null, [createBaseVNode("label", _hoisted_11$b, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "all_platforms",
                    "onUpdate:modelValue": as[7] || (as[7] = fs => unref(ts).all_platforms = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).all_platforms]
                ]), as[21] || (as[21] = createTextVNode("All Platforms"))])]), unref(ts).all_platforms ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_12$b, [createVNode(cs, {
                    name: "my_platforms",
                    options: es.platforms,
                    label: "name",
                    reduce: fs => fs.id,
                    multiple: !0,
                    placeholder: "Select platforms to include in your feed. Type to search.",
                    modelValue: unref(ts).platforms,
                    "onUpdate:modelValue": as[8] || (as[8] = fs => unref(ts).platforms = fs)
                }, null, 8, ["options", "reduce", "modelValue"])]))]), createBaseVNode("div", _hoisted_13$a, [createBaseVNode("label", _hoisted_14$a, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "groups",
                    "onUpdate:modelValue": as[9] || (as[9] = fs => unref(ts).groups = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).groups]
                ]), as[22] || (as[22] = createTextVNode("Groups"))])]), createBaseVNode("div", _hoisted_15$9, [createBaseVNode("label", _hoisted_16$9, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "company_logos",
                    "onUpdate:modelValue": as[10] || (as[10] = fs => unref(ts).company_logos = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).company_logos]
                ]), as[23] || (as[23] = createTextVNode("Company Logos"))]), createBaseVNode("label", _hoisted_17$9, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "company_overviews",
                    "onUpdate:modelValue": as[11] || (as[11] = fs => unref(ts).company_overviews = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).company_overviews]
                ]), as[24] || (as[24] = createTextVNode("Company Overviews"))]), createBaseVNode("label", _hoisted_18$8, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "company_trivia",
                    "onUpdate:modelValue": as[12] || (as[12] = fs => unref(ts).company_trivia = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).company_trivia]
                ]), as[25] || (as[25] = createTextVNode("Company Trivia"))]), createBaseVNode("label", _hoisted_19$8, [withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    class: "form-check-input",
                    name: "company_history",
                    "onUpdate:modelValue": as[13] || (as[13] = fs => unref(ts).company_history = fs)
                }, null, 512), [
                    [vModelCheckbox, unref(ts).company_history]
                ]), as[26] || (as[26] = createTextVNode("Company History"))])]), createBaseVNode("div", null, [es.userId > 0 ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "btn btn-primary btn-sm",
                    onClick: rs,
                    disabled: !is.value || unref(os).loading
                }, toDisplayString(unref(os).loading ? "Saving..." : "Apply"), 9, _hoisted_20$8)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                }, [as[27] || (as[27] = createBaseVNode("a", {
                    href: "/user/login/"
                }, "Login", -1)), as[28] || (as[28] = createTextVNode(" or ")), as[29] || (as[29] = createBaseVNode("a", {
                    href: "/user/register/"
                }, "Register", -1)), as[30] || (as[30] = createTextVNode(" to apply and save settings. "))], 64))])])
            }
        }
    },
    UrlHashMixin = {
        methods: {
            getHashValue(es) {
                const ze = decodeURIComponent(window.location.hash.substr(1));
                if (ze.length > 0) {
                    const ts = JSON.parse(ze);
                    return es in ts ? ts[es] : null
                }
                return null
            },
            setHashValue(es, ze, ts) {
                if (this.getHashValue(es) === ze) return;
                const os = decodeURIComponent(window.location.hash.substr(1));
                let ss;
                os.length > 0 ? ss = JSON.parse(os) : ss = {}, ze === null ? delete ss[es] : ss[es] = ze;
                const rs = encodeURIComponent(JSON.stringify(ss));
                ts && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.state !== null && window.history.replaceState({
                    hash: window.history.state.hash,
                    changed: window.history.state.changed,
                    nextChanged: [es],
                    id: window.history.state.id
                }, "", "#".concat(encodeURIComponent(os))), window.history.pushState(JSON.stringify({
                    hash: ss,
                    changed: [es],
                    nextChanged: [],
                    id: window.max_state_id + 1
                }), "", "#".concat(rs)), window.max_state_id += 1, window.current_state_id = window.max_state_id)
            },
            setHash(es) {
                const ze = encodeURIComponent(JSON.stringify(es));
                window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    hash: es,
                    id: window.max_state_id + 1
                }), "", "#".concat(ze)), window.max_state_id += 1, window.current_state_id = window.max_state_id
            }
        }
    },
    _sfc_main$h = {
        mixins: [UrlHashMixin],
        props: ["initialValues", "approvalPrivileges", "showColumns", "pagingMethod", "initialPagingParams", "pagingDisabled", "showIcons", "showPlatforms"],
        data() {
            return {
                games: this.initialValues.games,
                total: this.initialValues.total,
                page: this.initialValues.page,
                perPage: this.initialValues.perPage,
                maxPages: this.initialValues.maxPages,
                baseUrl: this.initialValues.baseUrl,
                pageUrl: window.location,
                loadingPage: !1,
                pagingParams: this.initialPagingParams,
                selectedPlatforms: this.initialPagingParams.platform,
                totalPages: Math.ceil(this.initialValues.total / this.initialValues.perPage)
            }
        },
        setup(es, ze) {
            return useFetch({ ...es,
                initialValues: {
                    games: es.initialValues.games,
                    total: es.initialValues.total,
                    page: es.initialValues.page,
                    perPage: es.initialValues.perPage,
                    baseUrl: es.initialValues.baseUrl,
                    loadingPage: !1,
                    pagingParams: es.initialPagingParams,
                    selectedPlatforms: es.initialPagingParams.platform
                }
            }, ze)
        },
        mounted() {
            this.pagingDisabled || (window.addEventListener("popstate", this.onPopState), window.addEventListener("keyup", this.onHotkey))
        },
        beforeUnmount() {
            this.pagingDisabled || (window.removeEventListener("popstate", this.onPopState), window.removeEventListener("keyup", this.onHotkey))
        },
        computed: {
            totalPagesLabel() {
                return `of ${this.totalPages}`
            },
            numPages() {
                return clamp(this.totalPages, 0, this.maxPages)
            },
            showPaging() {
                return !!(this.numPages > 1 || this.pagingDisabled)
            }
        },
        methods: {
            truncateTitle(es) {
                return truncate(es, 50)
            },
            mobyScoreStyle(es) {
                return `background: ${{0:"#888",1:"#ff0000",2:"#ff0000",3:"#ff0000",4:"#ff0000",5:"#ff8000",6:"#ffff00",7:"#00ff00",8:"#31ffec",9:"#00bcff",10:"#ff00ff"}[Math.floor(es.toFixed(1))]}`
            },
            onHotkey(es) {
                switch (es.code) {
                    case "ArrowLeft":
                        this.fetchPage(this.page - 1, !0);
                        break;
                    case "ArrowRight":
                        this.fetchPage(this.page + 1, !0);
                        break
                }
            },
            isSortFieldEnabled() {
                return this.pagingParams.sort === "moby_score" || this.pagingParams.sort === "-moby_score" || this.pagingParams.sort === "critic_score" || this.pagingParams.sort === "-critic_score" || this.pagingParams.sort === "user_score" || this.pagingParams.sort === "-user_score" || this.pagingParams.sort === "added" || this.pagingParams.sort === "-added" || this.pagingParams.sort === "modified" || this.pagingParams.sort === "-modified"
            },
            getSortFieldName() {
                return this.pagingParams.sort === "moby_score" || this.pagingParams.sort === "-moby_score" ? "Moby Score" : this.pagingParams.sort === "critic_score" || this.pagingParams.sort === "-critic_score" ? "Critic Score" : this.pagingParams.sort === "user_score" || this.pagingParams.sort === "-user_score" ? "Player Score" : this.pagingParams.sort === "added" || this.pagingParams.sort === "-added" ? "Date Added" : this.pagingParams.sort === "modified" || this.pagingParams.sort === "-modified" ? "Date Modified" : "Year"
            },
            getReleaseDates(es) {
                const ze = new Set;
                for (const [ts] of Object.entries(this.selectedPlatforms)) {
                    const os = this.selectedPlatforms[ts],
                        ss = es.find(rs => rs.id === os);
                    ss && ze.add(ss.release_date)
                }
                return [...ze].sort().join(", ")
            },
            getDeveloperName(es) {
                const ze = es.find(({
                    title_id: ts
                }) => ts === 2);
                return ze ? `${ze.name}` : null
            },
            getPlatformNames(es) {
                return es.sort((ze, ts) => ze.name < ts.name ? -1 : ze.name > ts.name ? 1 : 0), es.length > 6 ? `${es[0].name}, ${es[1].name}, ${es[2].name}, ${es[3].name}, ${es[4].name}, ${es[5].name}...` : es.map(ze => ze.name).join(", ")
            },
            async fetchPage(es, ze) {
                if (es < 1 || es >= this.numPages + 1 || this.loadingPage) return;
                this.loadingPage = !0, await this.onSubmit(this.baseUrl, { ...this.pagingParams,
                    page: es
                }) ? (this.games = this.result.data.games, this.baseUrl = this.result.data.baseUrl, this.pageUrl = this.result.data.newUrl, this.page = this.result.data.page, this.total = this.result.data.total, ze && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    params: { ...this.pagingParams,
                        page: es,
                        id: window.max_state_id + 1
                    }
                }), "", this.result.data.newUrl)), this.loadingPage = !1) : (this.$emit("fetchPageFailed", this.result.error), this.loadingPage = !1)
            },
            onPopState(es) {
                if (es.state === null) return;
                const ze = JSON.parse(es.state);
                "params" in ze && (this.pagingParams = ze.params), this.fetchPage(this.pagingParams.page), window.current_state_id = ze.id
            }
        }
    },
    _hoisted_1$f = {
        key: 0,
        class: "table table-hover mb"
    },
    _hoisted_2$e = ["href"],
    _hoisted_3$d = ["src", "width", "height"],
    _hoisted_4$d = ["href"],
    _hoisted_5$c = {
        key: 2,
        class: "text-muted hide-sm"
    },
    _hoisted_6$c = {
        key: 0,
        class: "text-center hide-sm"
    },
    _hoisted_7$b = {
        key: 1,
        class: "text-center hide-sm"
    },
    _hoisted_8$b = {
        key: 0
    },
    _hoisted_9$a = {
        key: 1,
        "data-tooltip": "{{getSortFieldName()}}"
    },
    _hoisted_10$a = {
        key: 2,
        class: "text-center hide-sm"
    },
    _hoisted_11$a = {
        key: 0
    },
    _hoisted_12$a = {
        key: 1
    },
    _hoisted_13$9 = {
        key: 3,
        class: "text-center hide-sm"
    },
    _hoisted_14$9 = {
        key: 0
    },
    _hoisted_15$8 = {
        key: 4,
        class: "text-center hide-sm"
    },
    _hoisted_16$8 = {
        key: 0
    },
    _hoisted_17$8 = {
        class: "text-center hide-sm"
    },
    _hoisted_18$7 = {
        class: "hide-sm"
    },
    _hoisted_19$7 = {
        key: 1
    },
    _hoisted_20$7 = {
        key: 2,
        class: "no-select text-muted"
    },
    _hoisted_21$7 = {
        key: 0,
        class: "text-disabled"
    },
    _hoisted_22$7 = {
        key: 2,
        class: "text-disabled"
    },
    _hoisted_23$6 = {
        key: 3,
        class: "border border-1 text-bold"
    },
    _hoisted_24$6 = ["href"],
    _hoisted_25$6 = ["href"],
    _hoisted_26$6 = {
        key: 4,
        class: "border border-1 text-bold"
    },
    _hoisted_27$6 = {
        key: 5,
        class: "mb-0"
    };

function _sfc_render$d(es, ze, ts, os, ss, rs) {
    return openBlock(), createElementBlock("div", null, [ss.total > 0 ? (openBlock(), createElementBlock("table", _hoisted_1$f, [createBaseVNode("tbody", null, [(openBlock(!0), createElementBlock(Fragment, null, renderList(ss.games, is => (openBlock(), createElementBlock("tr", {
        key: is.game_id
    }, [createBaseVNode("td", null, [ts.showIcons ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: is.internal_url,
        class: "me-1"
    }, [is.cover !== null ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: is.cover.tiny_url,
        width: is.cover.tiny_width,
        height: is.cover.tiny_height,
        alt: "game thumbnail",
        class: "img-thumbnail-box img-thumbnail-sm"
    }, null, 8, _hoisted_3$d)) : (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["icon icon-game", {
            "icon-game-sm": !ts.showPlatforms
        }])
    }, null, 2))], 8, _hoisted_2$e)) : createCommentVNode("", !0), createBaseVNode("a", {
        href: is.internal_url
    }, toDisplayString(rs.truncateTitle(is.title)), 9, _hoisted_4$d), is.adult ? (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[2] || (ze[2] = createTextVNode(" (")), ze[3] || (ze[3] = createBaseVNode("span", {
        class: "text-danger"
    }, "NSFW", -1)), ze[4] || (ze[4] = createTextVNode(")"))], 64)) : createCommentVNode("", !0), ze[5] || (ze[5] = createBaseVNode("br", null, null, -1)), ts.showPlatforms ? (openBlock(), createElementBlock("small", _hoisted_5$c, toDisplayString(rs.getPlatformNames(is.platforms)), 1)) : createCommentVNode("", !0)]), ss.pagingParams.sort === "moby_score" || ss.pagingParams.sort === "-moby_score" ? (openBlock(), createElementBlock("td", _hoisted_6$c, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score))
    }, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score.toFixed(1)), 5)) : ss.selectedPlatforms.length !== 1 && is.moby_score ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(is.moby_score))
    }, toDisplayString(is.moby_score.toFixed(1)), 5)) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(0)),
        "data-tooltip": "Not enough reviews available to compute a Moby Score"
    }, " ... ", 4))])) : createCommentVNode("", !0), ss.pagingParams.sort === "critic_score" || ss.pagingParams.sort === "-critic_score" ? (openBlock(), createElementBlock("td", _hoisted_7$b, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).critic_score ? (openBlock(), createElementBlock("div", _hoisted_8$b, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).critic_score.toFixed()) + "% ", 1)) : ss.selectedPlatforms.length !== 1 && is.critic_score ? (openBlock(), createElementBlock("div", _hoisted_9$a, toDisplayString(is.critic_score.toFixed()) + "% ", 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "user_score" || ss.pagingParams.sort === "-user_score" ? (openBlock(), createElementBlock("td", _hoisted_10$a, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).user_score ? (openBlock(), createElementBlock("div", _hoisted_11$a, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).user_score.toFixed(1)), 1)) : ss.selectedPlatforms.length !== 1 && is.user_score ? (openBlock(), createElementBlock("div", _hoisted_12$a, toDisplayString(is.user_score.toFixed(1)), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "added" || ss.pagingParams.sort === "-added" ? (openBlock(), createElementBlock("td", _hoisted_13$9, [is.created ? (openBlock(), createElementBlock("div", _hoisted_14$9, toDisplayString(is.created), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "modified" || ss.pagingParams.sort === "-modified" ? (openBlock(), createElementBlock("td", _hoisted_15$8, [is.last_modified ? (openBlock(), createElementBlock("div", _hoisted_16$8, toDisplayString(is.last_modified), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), createBaseVNode("td", _hoisted_17$8, [ss.selectedPlatforms.length > 0 ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode(toDisplayString(rs.getReleaseDates(is.platforms)), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(toDisplayString(is.release_date), 1)], 64))]), createBaseVNode("td", _hoisted_18$7, toDisplayString(rs.getDeveloperName(is.companies)), 1)]))), 128))])])) : (openBlock(), createElementBlock("p", _hoisted_19$7, ze[6] || (ze[6] = [createBaseVNode("b", {
        class: "text-danger"
    }, "No games found with the selected parameters.", -1)]))), rs.showPaging ? (openBlock(), createElementBlock("p", _hoisted_20$7, [ze[7] || (ze[7] = createTextVNode(" [ ")), ss.page <= 1 ? (openBlock(), createElementBlock("span", _hoisted_21$7, "Prev")) : (openBlock(), createElementBlock("a", {
        key: 1,
        href: "#",
        onClick: ze[0] || (ze[0] = withModifiers(is => rs.fetchPage(ss.page - 1, !0), ["prevent"])),
        rel: "nofollow"
    }, "Prev")), ze[8] || (ze[8] = createTextVNode(" ] [ ")), ss.page === rs.numPages ? (openBlock(), createElementBlock("span", _hoisted_22$7, "Next")) : (openBlock(), createElementBlock("a", {
        key: 3,
        href: "#",
        onClick: ze[1] || (ze[1] = withModifiers(is => rs.fetchPage(ss.page + 1, !0), ["prevent"])),
        rel: "nofollow"
    }, "Next")), createTextVNode(" ] [ Page " + toDisplayString(ss.page) + " " + toDisplayString(rs.totalPagesLabel) + " ] [ " + toDisplayString(ss.total.toLocaleString()) + toDisplayString(ss.total === 1e4 ? "+" : "") + " results ] ", 1)])) : createCommentVNode("", !0), ts.approvalPrivileges.mobypro ? (openBlock(), createElementBlock("p", _hoisted_23$6, [ze[9] || (ze[9] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[10] || (ze[10] = createTextVNode(": Export ")), ss.total > 2500 ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode("first 2,500")], 64)) : createCommentVNode("", !0), ze[11] || (ze[11] = createTextVNode(" results as ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=csv"
    }, "CSV", 8, _hoisted_24$6), ze[12] || (ze[12] = createTextVNode(" or ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=json"
    }, "JSON", 8, _hoisted_25$6)])) : (openBlock(), createElementBlock("p", _hoisted_26$6, ze[13] || (ze[13] = [createTextVNode(" Upgrade to "), createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1), createTextVNode(" to export results as CSV or JSON. ")]))), rs.showPaging && ss.page >= ss.maxPages ? (openBlock(), createElementBlock("p", _hoisted_27$6, [ts.approvalPrivileges.id === null ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[14] || (ze[14] = createBaseVNode("b", null, "Sorry, guest/bot limit reached.", -1)), ze[15] || (ze[15] = createTextVNode(" Please ")), ze[16] || (ze[16] = createBaseVNode("a", {
        href: "/user/login/"
    }, "login", -1)), ze[17] || (ze[17] = createTextVNode(" (")), ze[18] || (ze[18] = createBaseVNode("a", {
        href: "/user/register/"
    }, "register", -1)), ze[19] || (ze[19] = createTextVNode(") to increase the limit (or unlimited with ")), ze[20] || (ze[20] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[21] || (ze[21] = createTextVNode("!) "))], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[22] || (ze[22] = createBaseVNode("b", null, "Sorry, limit reached.", -1)), ze[23] || (ze[23] = createTextVNode(" Please modify your search or upgrade to ")), ze[24] || (ze[24] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[25] || (ze[25] = createTextVNode(" to unlock unlimited results. "))], 64))])) : createCommentVNode("", !0)])
}
const GameBrowserList = _export_sfc(_sfc_main$h, [
        ["render", _sfc_render$d]
    ]),
    _sfc_main$g = {
        mixins: [UrlHashMixin],
        data() {
            return {
                narrow: this.initialValues.narrow,
                companySearchLoading: !1,
                companyOptions: this.initialValues.narrow.companies,
                groupOptions: this.initialValues.narrow.groups,
                attributeOptions: this.initialValues.narrow.attributes,
                submitDisabled: !1,
                fetching: !1,
                showComponent: "game-browser-list",
                showList: !0,
                showIcons: getCookie("showIcons") ? getCookie("showIcons") === "true" : !0,
                showPlatforms: getCookie("showPlatforms") ? getCookie("showPlatforms") === "true" : !1,
                gamesList: this.initialValues,
                yearOptionsReversed: []
            }
        },
        components: {
            Alert,
            GameBrowserList
        },
        props: ["actionUrl", "csrfToken", "approvalPrivileges", "platformListUrl", "companyListUrl", "genreListUrl", "groupListUrl", "attributeListUrl", "attributeSearchUrl", "companySearchUrl", "groupSearchUrl", "genreIndexUrl", "groupIndexUrl", "attributeIndexUrl", "initialValues", "searchParams", "allPlatforms", "allGenres"],
        setup(es, ze) {
            return useFetch({ ...es,
                initialValues: {
                    title: es.searchParams.title,
                    platform: es.searchParams.platform,
                    genres: es.searchParams.genres,
                    attributes: es.searchParams.attributes,
                    company: es.searchParams.company,
                    groups: es.searchParams.groups,
                    year: es.searchParams.year,
                    endyear: es.searchParams.endyear,
                    sort: es.searchParams.order_by,
                    perpage: es.initialValues.perPage,
                    min_critic_votes: es.initialValues.min_critic_votes,
                    min_user_votes: es.initialValues.min_user_votes,
                    include_dlc: es.initialValues.include_dlc
                }
            }, ze)
        },
        mounted() {
            window.addEventListener("popstate", this.onPopState)
        },
        beforeUnmount() {
            window.removeEventListener("popstate", this.onPopState)
        },
        computed: {
            yearOptions() {
                return [...Array(this.narrow.max_year - this.narrow.min_year + 1).keys()].map(es => es + this.narrow.min_year)
            }
        },
        methods: {
            onTitleChange: lodashExports.debounce(function es() {
                this.$nextTick(() => {
                    this.fetchGames(!0)
                })
            }, 500),
            onChange(es = null) {
                this.$nextTick(() => {
                    es === "year" && (this.formData.endyear === null || this.formData.endyear < this.formData.year) && (this.formData.endyear = this.formData.year), setCookie("minCriticRatings", this.formData.min_critic_votes), setCookie("minUserRatings", this.formData.min_user_votes), setCookie("perPage", this.formData.perpage), setCookie("browserSort", this.formData.sort), setCookie("includeDLC", this.formData.include_dlc), this.fetchGames(!0)
                })
            },
            toggleIconDisplay() {
                this.showIcons = !this.showIcons, setCookie("showIcons", this.showIcons)
            },
            togglePlatformDisplay() {
                this.showPlatforms = !this.showPlatforms, setCookie("showPlatforms", this.showPlatforms)
            },
            findCompany: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "") return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.companySearchUrl, {
                    query: ze
                }) ? (this.companyOptions = this.result.data.items.map(ss => ({
                    id: ss.id,
                    name: ss.name,
                    company_id: ss.company_id
                })), ts(!1), this.submitDisabled = !1) : this.companyOptions = []
            }, 500),
            findAttribute: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "" || ze.length < 2) return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.attributeSearchUrl, {
                    query: ze,
                    platforms: this.formData.platform
                }) ? (this.attributeOptions = this.attributeOptions.filter(ss => this.formData.attributes.includes(ss.id)).concat(this.result.data.items), ts(!1), this.submitDisabled = !1) : (this.attributeOptions = [], ts(!1), this.submitDisabled = !1)
            }, 500),
            findGroup: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "") return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.groupSearchUrl, {
                    query: ze
                }) ? (this.groupOptions = this.groupOptions.filter(ss => this.formData.groups.includes(ss.id)).concat(this.result.data.items), ts(!1), this.submitDisabled = !1) : (this.groupOptions = [], ts(!1))
            }, 500),
            async fetchGames(es) {
                this.submitDisabled = !0, this.showList = !1, this.showComponent = null, this.fetching = !0, await this.onSubmit(this.actionUrl, this.formData) ? (es && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    params: { ...this.formData,
                        page: 1,
                        id: window.max_state_id + 1
                    }
                }), "", this.result.data.newUrl)), this.gamesList = this.result.data, this.result.data.narrow !== null && (this.narrow = this.result.data.narrow, this.groupOptions = this.groupOptions.filter(ts => this.formData.groups.includes(ts.id)).concat(this.narrow.groups.filter(ts => !this.formData.groups.includes(ts.id))), this.companyOptions = this.companyOptions.filter(ts => this.formData.company === ts).concat(this.narrow.companies), this.attributeOptions = this.attributeOptions.filter(ts => this.formData.attributes.includes(ts.id)).concat(this.narrow.attributes.filter(ts => !this.formData.attributes.includes(ts.id)))), this.fetching = !1, this.showList = !0, this.showComponent = "game-browser-list", this.fetching = !1, this.submitDisabled = !1) : (this.gamesList = [], this.fetching = !1, this.submitDisabled = !1)
            },
            onPopState(es) {
                if (es.state === null) return;
                const ze = JSON.parse(es.state);
                "params" in ze && (this.formData = ze.params, this.fetchGames())
            }
        }
    },
    _hoisted_1$e = {
        class: "browser-grid mb"
    },
    _hoisted_2$d = {
        id: "form-game-browser",
        class: "mb"
    },
    _hoisted_3$c = {
        class: "form-group"
    },
    _hoisted_4$c = {
        key: 0
    },
    _hoisted_5$b = {
        key: 1
    },
    _hoisted_6$b = {
        key: 0
    },
    _hoisted_7$a = {
        key: 1
    },
    _hoisted_8$a = {
        class: "text-muted"
    },
    _hoisted_9$9 = ["href"],
    _hoisted_10$9 = {
        class: "form-group"
    },
    _hoisted_11$9 = {
        class: "loading"
    },
    _hoisted_12$9 = {
        class: "text-muted"
    },
    _hoisted_13$8 = ["href"],
    _hoisted_14$8 = {
        class: "form-group"
    },
    _hoisted_15$7 = {
        key: 0
    },
    _hoisted_16$7 = {
        key: 1
    },
    _hoisted_17$7 = {
        key: 0
    },
    _hoisted_18$6 = {
        key: 1
    },
    _hoisted_19$6 = {
        class: "text-muted"
    },
    _hoisted_20$6 = ["href"],
    _hoisted_21$6 = {
        class: "form-group"
    },
    _hoisted_22$6 = {
        class: "loading"
    },
    _hoisted_23$5 = {
        class: "text-muted"
    },
    _hoisted_24$5 = ["href"],
    _hoisted_25$5 = {
        class: "form-group"
    },
    _hoisted_26$5 = {
        class: "loading"
    },
    _hoisted_27$5 = {
        class: "text-muted"
    },
    _hoisted_28$5 = ["href"],
    _hoisted_29$5 = {
        class: "form-inline"
    },
    _hoisted_30$5 = {
        class: "form-group me",
        style: {
            flex: "1"
        }
    },
    _hoisted_31$5 = {
        class: "form-group",
        style: {
            flex: "1"
        }
    },
    _hoisted_32$5 = {
        class: "form-group"
    },
    _hoisted_33$5 = {
        class: "form-group"
    },
    _hoisted_34$5 = {
        key: 0,
        class: "form-group flex flex-center"
    },
    _hoisted_35$5 = {
        key: 1,
        class: "form-group flex flex-center"
    },
    _hoisted_36$5 = {
        class: "form-group hide-sm"
    },
    _hoisted_37$5 = {
        class: "form-checkbox"
    },
    _hoisted_38$5 = ["checked"],
    _hoisted_39$5 = {
        class: "hide-sm"
    },
    _hoisted_40$4 = {
        key: 0,
        class: "loading"
    };

function _sfc_render$c(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("v-select");
    return openBlock(), createElementBlock("div", _hoisted_1$e, [createBaseVNode("div", null, [createBaseVNode("form", _hoisted_2$d, [createBaseVNode("div", _hoisted_3$c, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[0] || (ze[0] = ns => es.formData.platform = ns)],
        name: "platform",
        modelValue: es.formData.platform,
        multiple: !0,
        options: ts.allPlatforms.filter(ns => this.narrow.platforms.includes(ns.id) || this.formData.platform.includes(ns.id)),
        reduce: ns => ns.id,
        selectable: ns => !this.formData.platform.includes(ns.id),
        label: "name",
        placeholder: "All Platforms"
    }, {
        option: withCtx(({
            name: ns
        }) => [es.formData.platform.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_4$c, toDisplayString(ns), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$b, "or " + toDisplayString(ns), 1))]),
        "selected-option": withCtx(({
            id: ns,
            name: as
        }) => [es.formData.platform[0] === ns ? (openBlock(), createElementBlock("span", _hoisted_6$b, toDisplayString(as), 1)) : (openBlock(), createElementBlock("span", _hoisted_7$a, "or " + toDisplayString(as), 1))]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable"]), createBaseVNode("small", _hoisted_8$a, [ze[20] || (ze[20] = createTextVNode("[ ")), createBaseVNode("a", {
        href: ts.platformListUrl
    }, "platform list", 8, _hoisted_9$9), ze[21] || (ze[21] = createTextVNode(" ]"))])]), createBaseVNode("div", _hoisted_10$9, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[1] || (ze[1] = ns => es.formData.company = ns)],
        name: "company",
        modelValue: es.formData.company,
        options: ss.companyOptions,
        filterable: !1,
        label: "name",
        placeholder: "All Companies",
        onSearch: rs.findCompany
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[22] || (ze[22] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_11$9, "Loading", 512), [
            [vShow, ns]
        ])]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "onSearch"]), createBaseVNode("small", _hoisted_12$9, [ze[23] || (ze[23] = createTextVNode("[ ")), createBaseVNode("a", {
        href: ts.companyListUrl
    }, "company list", 8, _hoisted_13$8), ze[24] || (ze[24] = createTextVNode(" ]"))])]), createBaseVNode("div", _hoisted_14$8, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[2] || (ze[2] = ns => es.formData.genres = ns)],
        name: "genres",
        modelValue: es.formData.genres,
        multiple: !0,
        options: ts.allGenres.reduce((ns, as) => ns.concat(as.genres), []).filter(ns => this.narrow.genres.includes(ns.id) || this.formData.genres.includes(ns.id)),
        reduce: ns => ns.id,
        selectable: ns => !this.formData.genres.includes(ns.id),
        label: "name",
        placeholder: "All Genres"
    }, {
        option: withCtx(({
            name: ns
        }) => [es.formData.genres.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_15$7, toDisplayString(ns), 1)) : (openBlock(), createElementBlock("span", _hoisted_16$7, "and " + toDisplayString(ns), 1))]),
        "selected-option": withCtx(({
            id: ns,
            name: as
        }) => [es.formData.genres[0] === ns ? (openBlock(), createElementBlock("span", _hoisted_17$7, toDisplayString(as), 1)) : (openBlock(), createElementBlock("span", _hoisted_18$6, "and " + toDisplayString(as), 1))]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable"]), createBaseVNode("small", _hoisted_19$6, [ze[25] || (ze[25] = createTextVNode("[ ")), createBaseVNode("a", {
        href: ts.genreListUrl
    }, "genre list", 8, _hoisted_20$6), ze[26] || (ze[26] = createTextVNode(" ]"))])]), createBaseVNode("div", _hoisted_21$6, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[3] || (ze[3] = ns => es.formData.groups = ns)],
        name: "groups",
        modelValue: es.formData.groups,
        options: ss.groupOptions,
        multiple: !0,
        reduce: ns => ns.id,
        filterable: !1,
        selectable: ns => !this.formData.groups.includes(ns.id),
        label: "name",
        placeholder: "All Game Groups",
        onSearch: rs.findGroup
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[27] || (ze[27] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_22$6, "Loading", 512), [
            [vShow, ns]
        ])]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable", "onSearch"]), createBaseVNode("small", _hoisted_23$5, [ze[28] || (ze[28] = createTextVNode("[ ")), createBaseVNode("a", {
        href: ts.groupListUrl
    }, "group list", 8, _hoisted_24$5), ze[29] || (ze[29] = createTextVNode(" ]"))])]), createBaseVNode("div", _hoisted_25$5, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[4] || (ze[4] = ns => es.formData.attributes = ns)],
        name: "attributes",
        modelValue: es.formData.attributes,
        options: ss.attributeOptions,
        multiple: !0,
        filterable: !1,
        label: "name",
        placeholder: "All Attributes",
        reduce: ns => ns.id,
        onSearch: rs.findAttribute
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[30] || (ze[30] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_26$5, "Loading", 512), [
            [vShow, ns]
        ])]),
        option: withCtx(({
            name: ns,
            category: as
        }) => [createTextVNode(toDisplayString(ns) + " ", 1), createBaseVNode("small", null, "(" + toDisplayString(as) + ")", 1)]),
        "selected-option": withCtx(({
            name: ns,
            category: as
        }) => [createTextVNode(toDisplayString(ns) + " (" + toDisplayString(as) + ") ", 1)]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "onSearch"]), createBaseVNode("small", _hoisted_27$5, [ze[31] || (ze[31] = createTextVNode("[ ")), createBaseVNode("a", {
        href: ts.attributeListUrl
    }, "attribute list", 8, _hoisted_28$5), ze[32] || (ze[32] = createTextVNode(" ]"))])]), createBaseVNode("div", _hoisted_29$5, [createBaseVNode("div", _hoisted_30$5, [createVNode(is, {
        "onUpdate:modelValue": [ze[5] || (ze[5] = ns => rs.onChange("year")), ze[6] || (ze[6] = ns => es.formData.year = ns)],
        name: "year",
        modelValue: es.formData.year,
        options: rs.yearOptions.filter(ns => ss.narrow.min_year <= ns && ss.narrow.max_year >= ns),
        placeholder: "From"
    }, null, 8, ["modelValue", "options"])]), createBaseVNode("div", _hoisted_31$5, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[7] || (ze[7] = ns => es.formData.endyear = ns)],
        name: "endyear",
        modelValue: es.formData.endyear,
        options: rs.yearOptions.filter(ns => ss.narrow.min_year <= ns && ss.narrow.max_year >= ns),
        placeholder: "Until"
    }, null, 8, ["onUpdate:modelValue", "modelValue", "options"])])]), createBaseVNode("div", _hoisted_32$5, [withDirectives(createBaseVNode("input", {
        type: "text",
        class: "form-input",
        onInput: ze[8] || (ze[8] = (...ns) => rs.onTitleChange && rs.onTitleChange(...ns)),
        name: "title",
        "onUpdate:modelValue": ze[9] || (ze[9] = ns => es.formData.title = ns),
        placeholder: "Title",
        maxlength: "50"
    }, null, 544), [
        [vModelText, es.formData.title]
    ])]), createBaseVNode("div", _hoisted_33$5, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[10] || (ze[10] = ns => es.formData.sort = ns)],
        name: "sort",
        modelValue: es.formData.sort,
        label: "name",
        options: [{
            id: "title",
            name: "Alphabetical (a→z)"
        }, {
            id: "-title",
            name: "Alphabetical (z→a)"
        }, {
            id: "added",
            name: "Date Added (newest)"
        }, {
            id: "-added",
            name: "Date Added (oldest)"
        }, {
            id: "critic_score",
            name: "Critic Score (best)"
        }, {
            id: "-critic_score",
            name: "Critic Score (worst)"
        }, {
            id: "moby_score",
            name: "Moby Score (best)"
        }, {
            id: "-moby_score",
            name: "Moby Score (worst)"
        }, {
            id: "user_score",
            name: "Player Score (best)"
        }, {
            id: "-user_score",
            name: "Player Score (worst)"
        }, {
            id: "date",
            name: "Release Date (oldest)"
        }, {
            id: "-date",
            name: "Release Date (newest)"
        }, {
            id: "modified",
            name: "Updated (newest)"
        }, {
            id: "-modified",
            name: "Updated (oldest)"
        }],
        reduce: ns => ns.id,
        clearable: !1
    }, null, 8, ["onUpdate:modelValue", "modelValue", "reduce"])]), es.formData.sort == "critic_score" || es.formData.sort == "-critic_score" ? (openBlock(), createElementBlock("div", _hoisted_34$5, [ze[33] || (ze[33] = createBaseVNode("div", {
        class: "text-sm text-nowrap me-sm"
    }, " Min. Critic Ratings ", -1)), createBaseVNode("div", null, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: "form-input",
        onInput: ze[11] || (ze[11] = (...ns) => rs.onChange && rs.onChange(...ns)),
        name: "min_critic_votes",
        "onUpdate:modelValue": ze[12] || (ze[12] = ns => es.formData.min_critic_votes = ns),
        placeholder: "Min. Critic Scores",
        min: "0"
    }, null, 544), [
        [vModelText, es.formData.min_critic_votes]
    ])])])) : createCommentVNode("", !0), es.formData.sort == "user_score" || es.formData.sort == "-user_score" ? (openBlock(), createElementBlock("div", _hoisted_35$5, [ze[34] || (ze[34] = createBaseVNode("div", {
        class: "text-sm text-nowrap me-sm"
    }, " Min. Player Ratings ", -1)), createBaseVNode("div", null, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: "form-input form-input-sm",
        onInput: ze[13] || (ze[13] = (...ns) => rs.onChange && rs.onChange(...ns)),
        name: "min_user_votes",
        "onUpdate:modelValue": ze[14] || (ze[14] = ns => es.formData.min_user_votes = ns),
        placeholder: "Min. Player Ratings",
        min: "0"
    }, null, 544), [
        [vModelText, es.formData.min_user_votes]
    ])])])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_36$5, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[15] || (ze[15] = ns => es.formData.perpage = ns)],
        name: "perPage",
        modelValue: es.formData.perpage,
        label: "name",
        options: [{
            id: 12,
            name: "12 Results Per Page"
        }, {
            id: 18,
            name: "18 Results Per Page"
        }, {
            id: 24,
            name: "24 Results Per Page"
        }, {
            id: 30,
            name: "30 Results Per Page"
        }, {
            id: 40,
            name: "40 Results Per Page"
        }, {
            id: 50,
            name: "50 Results Per Page"
        }],
        reduce: ns => ns.id,
        clearable: !1
    }, null, 8, ["onUpdate:modelValue", "modelValue", "reduce"])]), createBaseVNode("label", _hoisted_37$5, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "dlc",
        "onUpdate:modelValue": ze[16] || (ze[16] = ns => es.formData.include_dlc = ns),
        checked: es.formData.include_dlc,
        onChange: ze[17] || (ze[17] = (...ns) => rs.onChange && rs.onChange(...ns))
    }, null, 40, _hoisted_38$5), [
        [vModelCheckbox, es.formData.include_dlc]
    ]), ze[35] || (ze[35] = createTextVNode(" Include Add-ons "))])]), createBaseVNode("div", _hoisted_39$5, [createBaseVNode("p", null, [ze[38] || (ze[38] = createBaseVNode("b", {
        class: "text-muted"
    }, "Display Settings", -1)), ze[39] || (ze[39] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
        href: "#",
        onClick: ze[18] || (ze[18] = (...ns) => rs.toggleIconDisplay && rs.toggleIconDisplay(...ns))
    }, [ze[36] || (ze[36] = createTextVNode(" Icons ")), createBaseVNode("span", {
        class: normalizeClass(["icon", {
            "icon-toggle-on": ss.showIcons,
            "icon-toggle-off": !ss.showIcons
        }])
    }, null, 2)]), ze[40] || (ze[40] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
        href: "#",
        onClick: ze[19] || (ze[19] = (...ns) => rs.togglePlatformDisplay && rs.togglePlatformDisplay(...ns))
    }, [ze[37] || (ze[37] = createTextVNode(" Platforms ")), createBaseVNode("span", {
        class: normalizeClass(["icon", {
            "icon-toggle-on": ss.showPlatforms,
            "icon-toggle-off": !ss.showPlatforms
        }])
    }, null, 2)])]), ze[41] || (ze[41] = createBaseVNode("p", {
        class: "text-muted"
    }, [createBaseVNode("b", null, "Hotkeys"), createBaseVNode("br"), createBaseVNode("small", null, [createTextVNode(" Left Arrow (Prev)"), createBaseVNode("br"), createTextVNode(" Right Arrow (Next) ")])], -1))])]), ss.fetching ? (openBlock(), createElementBlock("div", _hoisted_40$4, "Loading")) : createCommentVNode("", !0), ss.showList ? (openBlock(), createBlock(resolveDynamicComponent(ss.showComponent), {
        key: 1,
        "initial-values": ss.gamesList,
        "paging-method": "POST",
        "show-icons": ss.showIcons,
        "show-platforms": ss.showPlatforms,
        "approval-privileges": ts.approvalPrivileges,
        "initial-paging-params": es.formData
    }, null, 8, ["initial-values", "show-icons", "show-platforms", "approval-privileges", "initial-paging-params"])) : createCommentVNode("", !0)])
}
const GameBrowser = _export_sfc(_sfc_main$g, [
        ["render", _sfc_render$c]
    ]),
    _sfc_main$f = {
        mixins: [UrlHashMixin],
        props: ["initialValues", "approvalPrivileges", "showColumns", "pagingMethod", "initialPagingParams", "pagingDisabled"],
        data() {
            return {
                games: this.initialValues.games,
                total: this.initialValues.total,
                page: this.initialValues.page,
                perPage: this.initialValues.perPage,
                maxPages: this.initialValues.maxPages,
                baseUrl: this.initialValues.baseUrl,
                pageUrl: window.location,
                loadingPage: !1,
                pagingParams: this.initialPagingParams,
                selectedPlatforms: this.initialPagingParams.platform,
                totalPages: Math.ceil(this.initialValues.total / this.initialValues.perPage),
                showIcons: getCookie("showIcons") ? getCookie("showIcons") === "true" : !0,
                showPlatforms: getCookie("showPlatforms") ? getCookie("showPlatforms") === "true" : !1,
                showGenres: getCookie("showGenres") ? getCookie("showGenres") === "true" : !1,
                showDevelopers: getCookie("showDevelopers") ? getCookie("showDevelopers") === "true" : !1,
                showPublishers: getCookie("showPublishers") ? getCookie("showPublishers") === "true" : !1,
                showNSFW: getCookie("showNSFW") ? getCookie("showNSFW") === "true" : !1,
                expandTable: getCookie("expandTable") ? getCookie("expandTable") === "true" : !1
            }
        },
        setup(es, ze) {
            return useFetch({ ...es,
                initialValues: {
                    games: es.initialValues.games,
                    total: es.initialValues.total,
                    page: es.initialValues.page,
                    perPage: es.initialValues.perPage,
                    baseUrl: es.initialValues.baseUrl,
                    loadingPage: !1,
                    pagingParams: es.initialPagingParams,
                    selectedPlatforms: es.initialPagingParams.platform
                }
            }, ze)
        },
        mounted() {
            this.pagingDisabled || (window.addEventListener("popstate", this.onPopState), window.addEventListener("keyup", this.onHotkey)), this.initTableExpand(), this.total > 0 && this.$refs.gamesContainer.addEventListener("click", es => {
                const ze = es.target.closest(".toggle-items");
                if (ze) {
                    es.preventDefault();
                    const {
                        id: ts
                    } = ze.closest("span").dataset;
                    this.toggleLineClamp(ts)
                }
            })
        },
        beforeUnmount() {
            this.pagingDisabled || (window.removeEventListener("popstate", this.onPopState), window.removeEventListener("keyup", this.onHotkey))
        },
        computed: {
            totalPagesLabel() {
                return `of ${this.totalPages}`
            },
            numPages() {
                return clamp(this.totalPages, 0, this.maxPages)
            },
            showPaging() {
                return !!(this.numPages > 1 || this.pagingDisabled)
            }
        },
        methods: {
            toggleIconDisplay() {
                this.showIcons = !this.showIcons, setCookie("showIcons", this.showIcons)
            },
            toggleDisplay(es) {
                this[es] = !this[es], setCookie(es, this[es])
            },
            toggleTableExpand() {
                this.expandTable = !this.expandTable, setCookie("expandTable", this.expandTable), this.initTableExpand()
            },
            initTableExpand() {
                this.expandTable ? document.querySelectorAll("span.toggle-long-text").forEach(ze => {
                    ze.classList.remove("line-clamp-1")
                }) : document.querySelectorAll("span.toggle-long-text").forEach(ze => {
                    ze.classList.add("line-clamp-1")
                })
            },
            truncateTitle(es) {
                return truncate(es, 50)
            },
            mobyScoreStyle(es) {
                return `background: ${{0:"#888",1:"#ff0000",2:"#ff0000",3:"#ff0000",4:"#ff0000",5:"#ff8000",6:"#ffff00",7:"#00ff00",8:"#31ffec",9:"#00bcff",10:"#ff00ff"}[Math.floor(es.toFixed(1))]}`
            },
            onHotkey(es) {
                switch (es.code) {
                    case "ArrowLeft":
                        this.fetchPage(this.page - 1, !0);
                        break;
                    case "ArrowRight":
                        this.fetchPage(this.page + 1, !0);
                        break
                }
            },
            isSortFieldEnabled() {
                return this.pagingParams.sort === "moby_score" || this.pagingParams.sort === "-moby_score" || this.pagingParams.sort === "critic_score" || this.pagingParams.sort === "-critic_score" || this.pagingParams.sort === "user_score" || this.pagingParams.sort === "-user_score" || this.pagingParams.sort === "added" || this.pagingParams.sort === "-added" || this.pagingParams.sort === "modified" || this.pagingParams.sort === "-modified"
            },
            getSortFieldName() {
                return this.pagingParams.sort === "moby_score" || this.pagingParams.sort === "-moby_score" ? "Score" : this.pagingParams.sort === "critic_score" || this.pagingParams.sort === "-critic_score" ? "Critic Score" : this.pagingParams.sort === "user_score" || this.pagingParams.sort === "-user_score" ? "Player Score" : this.pagingParams.sort === "added" || this.pagingParams.sort === "-added" ? "Date Added" : this.pagingParams.sort === "modified" || this.pagingParams.sort === "-modified" ? "Date Modified" : "Year"
            },
            getReleaseDates(es) {
                const ze = new Set;
                for (const [ts] of Object.entries(this.selectedPlatforms)) {
                    const os = this.selectedPlatforms[ts],
                        ss = es.find(rs => rs.id === os);
                    ss && ze.add(ss.release_date)
                }
                return [...ze].sort().join(", ")
            },
            getGenres(es) {
                let ze = "",
                    ts = "";
                return es.forEach((os, ss) => {
                    ss === 0 ? (ze += `${os.name}`, es.length > 1 && (ze += ` <a href="#!" class="${this.expandTable?"toggle-items text-sm hide":"toggle-items text-sm"}">+${es.length-1}</a>`)) : ts += `<br>${os.name}`
                }), ze + ts
            },
            getDevelopers(es) {
                const ze = es.filter(({
                    title_id: ss
                }) => ss === 2);
                let ts = "",
                    os = "";
                return ze.forEach((ss, rs) => {
                    rs === 0 ? (ts += `${ss.name}`, ze.length > 1 && !this.expandTable && (ts += ` <a href="#!" class="${this.expandTable?"toggle-items text-sm hide":"toggle-items text-sm"}">+${ze.length-1}</a>`)) : os += `<br>${ss.name}`
                }), ts + os
            },
            getPublishers(es) {
                const ze = es.filter(({
                    title_id: ss
                }) => ss === 1);
                let ts = "",
                    os = "";
                return ze.forEach((ss, rs) => {
                    rs === 0 ? (ts += `${ss.name}`, ze.length > 1 && !this.expandTable && (ts += ` <a href="#!" class="${this.expandTable?"toggle-items text-sm hide":"toggle-items text-sm"}">+${ze.length-1}</a>`)) : os += `<br>${ss.name}`
                }), ts + os
            },
            getPlatforms(es) {
                es.sort((os, ss) => os.name < ss.name ? -1 : os.name > ss.name ? 1 : 0);
                let ze = "",
                    ts = "";
                return es.forEach((os, ss) => {
                    ss === 0 ? (ze += `${os.name}`, es.length > 1 && !this.expandTable && (ze += ` <a href="#!" class="${this.expandTable?"toggle-items text-sm hide":"toggle-items text-sm"}">+${es.length-1}</a>`)) : ts += `<br>${os.name}`
                }), ze + ts
            },
            toggleLineClamp(es) {
                document.querySelector(`span[data-id="${es}"]`).classList.toggle("more")
            },
            async fetchPage(es, ze) {
                if (es < 1 || es >= this.numPages + 1 || this.loadingPage) return;
                this.loadingPage = !0, await this.onSubmit(this.baseUrl, { ...this.pagingParams,
                    page: es
                }) ? (this.games = this.result.data.games, this.baseUrl = this.result.data.baseUrl, this.pageUrl = this.result.data.newUrl, this.page = this.result.data.page, this.total = this.result.data.total, ze && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    params: { ...this.pagingParams,
                        page: es,
                        id: window.max_state_id + 1
                    }
                }), "", this.result.data.newUrl)), this.loadingPage = !1) : (this.$emit("fetchPageFailed", this.result.error), this.loadingPage = !1), this.$nextTick(() => {
                    this.initTableExpand()
                })
            },
            onPopState(es) {
                if (es.state === null) return;
                const ze = JSON.parse(es.state);
                "params" in ze && (this.pagingParams = ze.params), this.fetchPage(this.pagingParams.page), window.current_state_id = ze.id
            }
        }
    },
    _hoisted_1$d = {
        key: 0,
        class: "overflow-x-scroll mb"
    },
    _hoisted_2$c = {
        class: "table table-borders table-hover",
        ref: "gamesContainer"
    },
    _hoisted_3$b = {
        colspan: "7"
    },
    _hoisted_4$b = {
        key: 0,
        class: "text-normal"
    },
    _hoisted_5$a = ["href"],
    _hoisted_6$a = ["href"],
    _hoisted_7$9 = {
        key: 1
    },
    _hoisted_8$9 = {
        colspan: "7"
    },
    _hoisted_9$8 = {
        class: "flex flex-gap text-normal"
    },
    _hoisted_10$8 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_11$8 = ["checked"],
    _hoisted_12$8 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_13$7 = ["checked"],
    _hoisted_14$7 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_15$6 = ["checked"],
    _hoisted_16$6 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_17$6 = ["checked"],
    _hoisted_18$5 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_19$5 = ["checked"],
    _hoisted_20$5 = {
        class: "form-checkbox flex-center"
    },
    _hoisted_21$5 = ["checked"],
    _hoisted_22$5 = {
        class: "bg-darker"
    },
    _hoisted_23$4 = {
        key: 0,
        class: "text-center text-nowrap"
    },
    _hoisted_24$4 = {
        key: 1
    },
    _hoisted_25$4 = {
        key: 2
    },
    _hoisted_26$4 = {
        key: 3
    },
    _hoisted_27$4 = {
        key: 4
    },
    _hoisted_28$4 = {
        valign: "top",
        class: "text-nowrap"
    },
    _hoisted_29$4 = ["href"],
    _hoisted_30$4 = ["src", "width", "height"],
    _hoisted_31$4 = {
        key: 1,
        class: "icon icon-game icon-game-sm"
    },
    _hoisted_32$4 = ["href"],
    _hoisted_33$4 = {
        valign: "top",
        class: "text-center"
    },
    _hoisted_34$4 = {
        key: 0,
        valign: "top",
        class: "text-center"
    },
    _hoisted_35$4 = {
        key: 1,
        valign: "top",
        class: "text-center"
    },
    _hoisted_36$4 = {
        key: 0
    },
    _hoisted_37$4 = {
        key: 1
    },
    _hoisted_38$4 = {
        key: 2,
        valign: "top",
        class: "text-center"
    },
    _hoisted_39$4 = {
        key: 0
    },
    _hoisted_40$3 = {
        key: 1
    },
    _hoisted_41$2 = {
        key: 3,
        valign: "top",
        class: "text-center"
    },
    _hoisted_42$2 = {
        key: 0
    },
    _hoisted_43$1 = {
        key: 4,
        valign: "top",
        class: "text-center"
    },
    _hoisted_44$1 = {
        key: 0
    },
    _hoisted_45$1 = {
        key: 5,
        valign: "top",
        class: "text-nowrap"
    },
    _hoisted_46$1 = ["data-id", "innerHTML"],
    _hoisted_47$1 = {
        key: 6,
        valign: "top",
        class: "text-nowrap"
    },
    _hoisted_48$1 = ["data-id", "innerHTML"],
    _hoisted_49$1 = {
        key: 7,
        valign: "top",
        class: "text-nowrap"
    },
    _hoisted_50$1 = ["data-id", "innerHTML"],
    _hoisted_51$1 = {
        key: 8,
        valign: "top",
        class: "text-nowrap"
    },
    _hoisted_52$1 = ["data-id", "innerHTML"],
    _hoisted_53$1 = {
        key: 1
    },
    _hoisted_54$1 = {
        key: 2,
        class: "no-select"
    },
    _hoisted_55$1 = {
        key: 0,
        class: "text-disabled"
    },
    _hoisted_56$1 = {
        key: 2,
        class: "text-disabled"
    },
    _hoisted_57$1 = {
        key: 4
    },
    _hoisted_58$1 = ["href"],
    _hoisted_59$1 = ["href"],
    _hoisted_60$1 = {
        key: 5
    },
    _hoisted_61$1 = {
        key: 6,
        class: "mb-0"
    };

function _sfc_render$b(es, ze, ts, os, ss, rs) {
    return openBlock(), createElementBlock(Fragment, null, [ss.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$d, [createBaseVNode("table", _hoisted_2$c, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", _hoisted_3$b, [createTextVNode(toDisplayString(ss.total.toLocaleString()) + toDisplayString(ss.total === 1e4 ? "+" : "") + " results with your current filters ", 1), ts.approvalPrivileges.mobypro ? (openBlock(), createElementBlock("span", _hoisted_4$b, [ze[8] || (ze[8] = createTextVNode(" [ ")), ze[9] || (ze[9] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[10] || (ze[10] = createTextVNode(": Export ")), ss.total > 2500 ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode("first 2,500")], 64)) : createCommentVNode("", !0), ze[11] || (ze[11] = createTextVNode(" results as ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=csv"
    }, "CSV", 8, _hoisted_5$a), ze[12] || (ze[12] = createTextVNode(" or ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=json"
    }, "JSON", 8, _hoisted_6$a), ze[13] || (ze[13] = createTextVNode(" ] "))])) : (openBlock(), createElementBlock("span", _hoisted_7$9, ze[14] || (ze[14] = [createTextVNode(" [ Upgrade to "), createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1), createTextVNode(" to export results as CSV or JSON ] ")])))])]), createBaseVNode("tr", null, [createBaseVNode("th", _hoisted_8$9, [createBaseVNode("div", _hoisted_9$8, [createBaseVNode("label", _hoisted_10$8, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.showIcons,
        onChange: ze[0] || (ze[0] = (...is) => rs.toggleIconDisplay && rs.toggleIconDisplay(...is))
    }, null, 40, _hoisted_11$8), ze[15] || (ze[15] = createTextVNode(" Icons "))]), createBaseVNode("label", _hoisted_12$8, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.showGenres,
        onChange: ze[1] || (ze[1] = is => rs.toggleDisplay("showGenres"))
    }, null, 40, _hoisted_13$7), ze[16] || (ze[16] = createTextVNode(" Genres "))]), createBaseVNode("label", _hoisted_14$7, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.showPlatforms,
        onChange: ze[2] || (ze[2] = is => rs.toggleDisplay("showPlatforms"))
    }, null, 40, _hoisted_15$6), ze[17] || (ze[17] = createTextVNode(" Platforms "))]), createBaseVNode("label", _hoisted_16$6, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.showDevelopers,
        onChange: ze[3] || (ze[3] = is => rs.toggleDisplay("showDevelopers"))
    }, null, 40, _hoisted_17$6), ze[18] || (ze[18] = createTextVNode(" Developers "))]), createBaseVNode("label", _hoisted_18$5, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.showPublishers,
        onChange: ze[4] || (ze[4] = is => rs.toggleDisplay("showPublishers"))
    }, null, 40, _hoisted_19$5), ze[19] || (ze[19] = createTextVNode(" Publishers "))]), createBaseVNode("label", _hoisted_20$5, [createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input me-1",
        checked: ss.expandTable,
        onChange: ze[5] || (ze[5] = (...is) => rs.toggleTableExpand && rs.toggleTableExpand(...is))
    }, null, 40, _hoisted_21$5), ze[20] || (ze[20] = createTextVNode(" Expand Table "))])])])]), createBaseVNode("tr", _hoisted_22$5, [ze[21] || (ze[21] = createBaseVNode("th", null, "Title", -1)), ze[22] || (ze[22] = createBaseVNode("th", {
        class: "text-center"
    }, "Year", -1)), rs.isSortFieldEnabled() ? (openBlock(), createElementBlock("th", _hoisted_23$4, toDisplayString(rs.getSortFieldName()), 1)) : createCommentVNode("", !0), ss.showGenres ? (openBlock(), createElementBlock("th", _hoisted_24$4, "Genres")) : createCommentVNode("", !0), ss.showPlatforms ? (openBlock(), createElementBlock("th", _hoisted_25$4, "Platforms")) : createCommentVNode("", !0), ss.showDevelopers ? (openBlock(), createElementBlock("th", _hoisted_26$4, "Developers")) : createCommentVNode("", !0), ss.showPublishers ? (openBlock(), createElementBlock("th", _hoisted_27$4, "Publishers")) : createCommentVNode("", !0)])]), createBaseVNode("tbody", null, [(openBlock(!0), createElementBlock(Fragment, null, renderList(ss.games, is => (openBlock(), createElementBlock("tr", {
        key: is.game_id
    }, [createBaseVNode("td", _hoisted_28$4, [ss.showIcons ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: is.internal_url,
        class: "me-1"
    }, [is.cover !== null ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: is.cover.tiny_url,
        width: is.cover.tiny_width,
        height: is.cover.tiny_height,
        alt: "game thumbnail",
        class: "img-thumbnail-box img-thumbnail-sm"
    }, null, 8, _hoisted_30$4)) : (openBlock(), createElementBlock("span", _hoisted_31$4))], 8, _hoisted_29$4)) : createCommentVNode("", !0), createBaseVNode("a", {
        href: is.internal_url
    }, toDisplayString(rs.truncateTitle(is.title)), 9, _hoisted_32$4), is.adult ? (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[23] || (ze[23] = createTextVNode(" (")), ze[24] || (ze[24] = createBaseVNode("span", {
        class: "text-danger"
    }, "NSFW", -1)), ze[25] || (ze[25] = createTextVNode(")"))], 64)) : createCommentVNode("", !0)]), createBaseVNode("td", _hoisted_33$4, [ss.selectedPlatforms.length > 0 ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode(toDisplayString(rs.getReleaseDates(is.platforms)), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(toDisplayString(is.release_date), 1)], 64))]), ss.pagingParams.sort === "moby_score" || ss.pagingParams.sort === "-moby_score" ? (openBlock(), createElementBlock("td", _hoisted_34$4, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score))
    }, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).moby_score.toFixed(1)), 5)) : ss.selectedPlatforms.length !== 1 && is.moby_score ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(is.moby_score))
    }, toDisplayString(is.moby_score.toFixed(1)), 5)) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: "mobyscore",
        style: normalizeStyle(rs.mobyScoreStyle(0)),
        "data-tooltip": "Not enough reviews available to compute a Moby Score"
    }, " ... ", 4))])) : createCommentVNode("", !0), ss.pagingParams.sort === "critic_score" || ss.pagingParams.sort === "-critic_score" ? (openBlock(), createElementBlock("td", _hoisted_35$4, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).critic_score ? (openBlock(), createElementBlock("div", _hoisted_36$4, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).critic_score.toFixed()) + "% ", 1)) : ss.selectedPlatforms.length !== 1 && is.critic_score ? (openBlock(), createElementBlock("div", _hoisted_37$4, toDisplayString(is.critic_score.toFixed()) + "% ", 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "user_score" || ss.pagingParams.sort === "-user_score" ? (openBlock(), createElementBlock("td", _hoisted_38$4, [ss.selectedPlatforms.length === 1 && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]) && is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).user_score ? (openBlock(), createElementBlock("div", _hoisted_39$4, toDisplayString(is.platforms.find(ns => ns.id === ss.selectedPlatforms[0]).user_score.toFixed(1)), 1)) : ss.selectedPlatforms.length !== 1 && is.user_score ? (openBlock(), createElementBlock("div", _hoisted_40$3, toDisplayString(is.user_score.toFixed(1)), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "added" || ss.pagingParams.sort === "-added" ? (openBlock(), createElementBlock("td", _hoisted_41$2, [is.created ? (openBlock(), createElementBlock("div", _hoisted_42$2, toDisplayString(is.created), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.pagingParams.sort === "modified" || ss.pagingParams.sort === "-modified" ? (openBlock(), createElementBlock("td", _hoisted_43$1, [is.last_modified ? (openBlock(), createElementBlock("div", _hoisted_44$1, toDisplayString(is.last_modified), 1)) : createCommentVNode("", !0)])) : createCommentVNode("", !0), ss.showGenres ? (openBlock(), createElementBlock("td", _hoisted_45$1, [createBaseVNode("span", {
        "data-id": `g-${is.game_id}`,
        class: "toggle-long-text line-clamp-1",
        innerHTML: rs.getGenres(is.genres)
    }, null, 8, _hoisted_46$1)])) : createCommentVNode("", !0), ss.showPlatforms ? (openBlock(), createElementBlock("td", _hoisted_47$1, [createBaseVNode("span", {
        "data-id": `p-${is.game_id}`,
        class: "toggle-long-text line-clamp-1",
        innerHTML: rs.getPlatforms(is.platforms)
    }, null, 8, _hoisted_48$1)])) : createCommentVNode("", !0), ss.showDevelopers ? (openBlock(), createElementBlock("td", _hoisted_49$1, [createBaseVNode("span", {
        "data-id": `d-${is.game_id}`,
        class: "toggle-long-text line-clamp-1",
        innerHTML: rs.getDevelopers(is.companies)
    }, null, 8, _hoisted_50$1)])) : createCommentVNode("", !0), ss.showPublishers ? (openBlock(), createElementBlock("td", _hoisted_51$1, [createBaseVNode("span", {
        "data-id": `pub-${is.game_id}`,
        class: "toggle-long-text line-clamp-1",
        innerHTML: rs.getPublishers(is.companies)
    }, null, 8, _hoisted_52$1)])) : createCommentVNode("", !0)]))), 128))])], 512)])) : (openBlock(), createElementBlock("div", _hoisted_53$1, ze[26] || (ze[26] = [createBaseVNode("p", null, [createBaseVNode("b", {
        class: "text-danger"
    }, "No games found with the selected parameters.")], -1)]))), rs.showPaging ? (openBlock(), createElementBlock("p", _hoisted_54$1, [ze[46] || (ze[46] = createTextVNode(" [ ")), ss.page <= 1 ? (openBlock(), createElementBlock("span", _hoisted_55$1, "Prev")) : (openBlock(), createElementBlock("a", {
        key: 1,
        href: "#",
        onClick: ze[6] || (ze[6] = withModifiers(is => rs.fetchPage(ss.page - 1, !0), ["prevent"])),
        rel: "nofollow"
    }, "Prev")), ze[47] || (ze[47] = createTextVNode(" ] [ ")), ss.page === rs.numPages ? (openBlock(), createElementBlock("span", _hoisted_56$1, "Next")) : (openBlock(), createElementBlock("a", {
        key: 3,
        href: "#",
        onClick: ze[7] || (ze[7] = withModifiers(is => rs.fetchPage(ss.page + 1, !0), ["prevent"])),
        rel: "nofollow"
    }, "Next")), createTextVNode(" ] [ Page " + toDisplayString(ss.page) + " " + toDisplayString(rs.totalPagesLabel) + " ] [ " + toDisplayString(ss.total.toLocaleString()) + toDisplayString(ss.total === 1e4 ? "+" : "") + " results ] ", 1), ts.approvalPrivileges.mobypro ? (openBlock(), createElementBlock("span", _hoisted_57$1, [ze[27] || (ze[27] = createTextVNode(" [ ")), ze[28] || (ze[28] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[29] || (ze[29] = createTextVNode(": Export ")), ss.total > 2500 ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode("first 2,500")], 64)) : createCommentVNode("", !0), ze[30] || (ze[30] = createTextVNode(" results as ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=csv"
    }, "CSV", 8, _hoisted_58$1), ze[31] || (ze[31] = createTextVNode(" or ")), createBaseVNode("a", {
        href: this.pageUrl + "?export=json"
    }, "JSON", 8, _hoisted_59$1), ze[32] || (ze[32] = createTextVNode(" ] "))])) : (openBlock(), createElementBlock("span", _hoisted_60$1, ze[33] || (ze[33] = [createTextVNode(" [ Upgrade to "), createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1), createTextVNode(" to export results as CSV or JSON ] ")]))), rs.showPaging && ss.page >= ss.maxPages ? (openBlock(), createElementBlock("span", _hoisted_61$1, [ts.approvalPrivileges.id === null ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[34] || (ze[34] = createBaseVNode("b", null, "Sorry, guest/bot limit reached.", -1)), ze[35] || (ze[35] = createTextVNode(" Please ")), ze[36] || (ze[36] = createBaseVNode("a", {
        href: "/user/login/"
    }, "login", -1)), ze[37] || (ze[37] = createTextVNode(" (")), ze[38] || (ze[38] = createBaseVNode("a", {
        href: "/user/register/"
    }, "register", -1)), ze[39] || (ze[39] = createTextVNode(") to increase the limit (or unlimited with ")), ze[40] || (ze[40] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[41] || (ze[41] = createTextVNode("!) "))], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[42] || (ze[42] = createBaseVNode("b", null, "Sorry, limit reached.", -1)), ze[43] || (ze[43] = createTextVNode(" Please modify your search or upgrade to ")), ze[44] || (ze[44] = createBaseVNode("a", {
        href: "/mobyplus/"
    }, "MobyPlus", -1)), ze[45] || (ze[45] = createTextVNode(" to unlock unlimited results. "))], 64))])) : createCommentVNode("", !0)])) : createCommentVNode("", !0)], 64)
}
const GameBrowserListV2 = _export_sfc(_sfc_main$f, [
        ["render", _sfc_render$b]
    ]),
    _sfc_main$e = {
        mixins: [UrlHashMixin],
        data() {
            return {
                narrow: this.initialValues.narrow,
                companySearchLoading: !1,
                companyOptions: this.initialValues.narrow.companies,
                groupOptions: this.initialValues.narrow.groups,
                attributeOptions: this.initialValues.narrow.attributes,
                submitDisabled: !1,
                fetching: !1,
                showComponent: "game-browser-list-v2",
                showList: !0,
                gamesList: this.initialValues,
                yearOptionsReversed: [],
                platformSetting: getCookie("platformSetting") ? getCookie("platformSetting") : "default"
            }
        },
        components: {
            Alert,
            GameBrowserListV2
        },
        props: ["actionUrl", "csrfToken", "dbStats", "approvalPrivileges", "platformListUrl", "companyListUrl", "genreListUrl", "groupListUrl", "attributeListUrl", "attributeSearchUrl", "companySearchUrl", "groupSearchUrl", "genreIndexUrl", "groupIndexUrl", "attributeIndexUrl", "initialValues", "searchParams", "allPlatforms", "allGenres"],
        setup(es, ze) {
            return useFetch({ ...es,
                initialValues: {
                    title: es.searchParams.title,
                    platform: es.searchParams.platform,
                    genres: es.searchParams.genres,
                    attributes: es.searchParams.attributes,
                    company: es.searchParams.company,
                    groups: es.searchParams.groups,
                    year: es.searchParams.year,
                    endyear: es.searchParams.endyear,
                    sort: es.searchParams.order_by,
                    perpage: es.initialValues.perPage,
                    min_critic_votes: es.initialValues.min_critic_votes,
                    min_user_votes: es.initialValues.min_user_votes,
                    include_dlc: es.initialValues.include_dlc,
                    include_nsfw: es.initialValues.include_nsfw
                }
            }, ze)
        },
        mounted() {
            window.addEventListener("popstate", this.onPopState)
        },
        beforeUnmount() {
            window.removeEventListener("popstate", this.onPopState)
        },
        computed: {
            yearOptions() {
                return [...Array(this.narrow.max_year - this.narrow.min_year + 1).keys()].map(es => es + this.narrow.min_year)
            }
        },
        methods: {
            onTitleChange: lodashExports.debounce(function es() {
                this.$nextTick(() => {
                    this.fetchGames(!0)
                })
            }, 500),
            onChange(es = null) {
                this.$nextTick(() => {
                    es === "year" && (this.formData.endyear === null || this.formData.endyear < this.formData.year) && (this.formData.endyear = this.formData.year), setCookie("minCriticRatings", this.formData.min_critic_votes), setCookie("minUserRatings", this.formData.min_user_votes), setCookie("perPage", this.formData.perpage), setCookie("browserSort", this.formData.sort), setCookie("includeDLC", this.formData.include_dlc), this.fetchGames(!0)
                })
            },
            saveSetting(es, ze) {
                this[es] = ze, setCookie(es, ze)
            },
            findCompany: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "") return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.companySearchUrl, {
                    query: ze
                }) ? (this.companyOptions = this.result.data.items.map(ss => ({
                    id: ss.id,
                    name: ss.name,
                    company_id: ss.company_id
                })), ts(!1), this.submitDisabled = !1) : this.companyOptions = []
            }, 500),
            findAttribute: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "" || ze.length < 2) return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.attributeSearchUrl, {
                    query: ze,
                    platforms: this.formData.platform
                }) ? (this.attributeOptions = this.attributeOptions.filter(ss => this.formData.attributes.includes(ss.id)).concat(this.result.data.items), ts(!1), this.submitDisabled = !1) : (this.attributeOptions = [], ts(!1), this.submitDisabled = !1)
            }, 500),
            findGroup: lodashExports.debounce(async function es(ze, ts) {
                if (ze === null || ze === "") return;
                this.submitDisabled = !0, ts(!0), await this.onSubmit(this.groupSearchUrl, {
                    query: ze
                }) ? (this.groupOptions = this.groupOptions.filter(ss => this.formData.groups.includes(ss.id)).concat(this.result.data.items), ts(!1), this.submitDisabled = !1) : (this.groupOptions = [], ts(!1))
            }, 500),
            async fetchGames(es) {
                this.submitDisabled = !0, this.showList = !1, this.showComponent = null, this.fetching = !0, await this.onSubmit(this.actionUrl, this.formData) ? (es && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    params: { ...this.formData,
                        page: 1,
                        id: window.max_state_id + 1
                    }
                }), "", this.result.data.newUrl)), this.gamesList = this.result.data, this.result.data.narrow !== null && (this.narrow = this.result.data.narrow, this.groupOptions = this.groupOptions.filter(ts => this.formData.groups.includes(ts.id)).concat(this.narrow.groups.filter(ts => !this.formData.groups.includes(ts.id))), this.companyOptions = this.companyOptions.filter(ts => this.formData.company === ts).concat(this.narrow.companies), this.attributeOptions = this.attributeOptions.filter(ts => this.formData.attributes.includes(ts.id)).concat(this.narrow.attributes.filter(ts => !this.formData.attributes.includes(ts.id)))), this.fetching = !1, this.showList = !0, this.showComponent = "game-browser-list-v2", this.fetching = !1, this.submitDisabled = !1) : (this.gamesList = [], this.fetching = !1, this.submitDisabled = !1)
            },
            onPopState(es) {
                if (es.state === null) return;
                const ze = JSON.parse(es.state);
                "params" in ze && (this.formData = ze.params, this.fetchGames())
            }
        }
    },
    _hoisted_1$c = {
        class: "flex flex-wrap text-bold"
    },
    _hoisted_2$b = {
        class: "me-1"
    },
    _hoisted_3$a = {
        class: "flex-center text-normal me-1"
    },
    _hoisted_4$a = {
        class: "form-checkbox"
    },
    _hoisted_5$9 = ["checked"],
    _hoisted_6$9 = {
        class: "flex-center text-normal"
    },
    _hoisted_7$8 = {
        class: "form-checkbox"
    },
    _hoisted_8$8 = ["checked"],
    _hoisted_9$7 = {
        id: "form-game-browser"
    },
    _hoisted_10$7 = {
        class: "grid-split mb"
    },
    _hoisted_11$7 = {
        class: "flex flex-gap-1"
    },
    _hoisted_12$7 = ["href"],
    _hoisted_13$6 = {
        key: 0
    },
    _hoisted_14$6 = {
        key: 1
    },
    _hoisted_15$5 = {
        key: 0
    },
    _hoisted_16$5 = {
        key: 1
    },
    _hoisted_17$5 = {
        class: "text-muted"
    },
    _hoisted_18$4 = ["href"],
    _hoisted_19$4 = {
        class: "loading"
    },
    _hoisted_20$4 = {
        class: "text-muted"
    },
    _hoisted_21$4 = ["href"],
    _hoisted_22$4 = {
        key: 0
    },
    _hoisted_23$3 = {
        key: 1
    },
    _hoisted_24$3 = {
        key: 0
    },
    _hoisted_25$3 = {
        key: 1
    },
    _hoisted_26$3 = {
        class: "text-muted"
    },
    _hoisted_27$3 = ["href"],
    _hoisted_28$3 = {
        class: "loading"
    },
    _hoisted_29$3 = {
        class: "text-muted"
    },
    _hoisted_30$3 = ["href"],
    _hoisted_31$3 = {
        class: "loading"
    },
    _hoisted_32$3 = {
        key: 0,
        class: "form-group flex flex-align-center float-end mt-1"
    },
    _hoisted_33$3 = {
        key: 1,
        class: "form-group flex flex-align-center float-end mt-1"
    },
    _hoisted_34$3 = {
        class: "flex flex-gap"
    },
    _hoisted_35$3 = {
        class: "flex-grow"
    },
    _hoisted_36$3 = {
        class: "flex-grow"
    },
    _hoisted_37$3 = {
        key: 0,
        class: "loading"
    },
    _hoisted_38$3 = {
        key: 2
    },
    _hoisted_39$3 = {
        class: "form-group",
        style: {
            "max-width": "200px"
        }
    };

function _sfc_render$a(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("v-select");
    return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("p", _hoisted_1$c, [createBaseVNode("div", _hoisted_2$b, " Explore our database of " + toDisplayString(ts.dbStats.games.toLocaleString()) + " games from " + toDisplayString(ts.dbStats.platforms) + " platforms! ", 1), createBaseVNode("div", _hoisted_3$a, [createBaseVNode("label", _hoisted_4$a, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "dlc",
        "onUpdate:modelValue": ze[0] || (ze[0] = ns => es.formData.include_dlc = ns),
        checked: es.formData.include_dlc,
        onChange: ze[1] || (ze[1] = (...ns) => rs.onChange && rs.onChange(...ns))
    }, null, 40, _hoisted_5$9), [
        [vModelCheckbox, es.formData.include_dlc]
    ]), createTextVNode(" Include " + toDisplayString(ts.dbStats.addons.toLocaleString()) + " Add-ons ", 1)])]), createBaseVNode("div", _hoisted_6$9, [createBaseVNode("label", _hoisted_7$8, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "nsfw",
        "onUpdate:modelValue": ze[2] || (ze[2] = ns => es.formData.include_nsfw = ns),
        checked: es.formData.include_nsfw,
        onChange: ze[3] || (ze[3] = (...ns) => rs.onChange && rs.onChange(...ns))
    }, null, 40, _hoisted_8$8), [
        [vModelCheckbox, es.formData.include_nsfw]
    ]), ze[20] || (ze[20] = createTextVNode(" Include NSFW games "))])])]), createBaseVNode("form", _hoisted_9$7, [createBaseVNode("div", _hoisted_10$7, [createBaseVNode("div", null, [createBaseVNode("small", _hoisted_11$7, [createBaseVNode("div", null, [ze[21] || (ze[21] = createTextVNode("Platforms [ ")), createBaseVNode("a", {
        href: ts.platformListUrl
    }, "list", 8, _hoisted_12$7), ze[22] || (ze[22] = createTextVNode(" ]"))])]), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[4] || (ze[4] = ns => es.formData.platform = ns)],
        name: "platform",
        modelValue: es.formData.platform,
        multiple: !0,
        options: ts.allPlatforms.filter(ns => this.narrow.platforms.includes(ns.id) || this.formData.platform.includes(ns.id)),
        reduce: ns => ns.id,
        selectable: ns => !this.formData.platform.includes(ns.id),
        label: "name",
        placeholder: "All Platforms"
    }, {
        option: withCtx(({
            name: ns
        }) => [es.formData.platform.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_13$6, toDisplayString(ns), 1)) : (openBlock(), createElementBlock("span", _hoisted_14$6, "or " + toDisplayString(ns), 1))]),
        "selected-option": withCtx(({
            id: ns,
            name: as
        }) => [es.formData.platform[0] === ns ? (openBlock(), createElementBlock("span", _hoisted_15$5, toDisplayString(as), 1)) : (openBlock(), createElementBlock("span", _hoisted_16$5, "or " + toDisplayString(as), 1))]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable"])]), createBaseVNode("div", null, [createBaseVNode("small", _hoisted_17$5, [ze[23] || (ze[23] = createTextVNode("Companies [ ")), createBaseVNode("a", {
        href: ts.companyListUrl
    }, "list", 8, _hoisted_18$4), ze[24] || (ze[24] = createTextVNode(" ]"))]), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[5] || (ze[5] = ns => es.formData.company = ns)],
        name: "company",
        modelValue: es.formData.company,
        options: ss.companyOptions,
        filterable: !1,
        label: "name",
        placeholder: "All Companies",
        onSearch: rs.findCompany
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[25] || (ze[25] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_19$4, "Loading", 512), [
            [vShow, ns]
        ])]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "onSearch"])]), createBaseVNode("div", null, [createBaseVNode("small", _hoisted_20$4, [ze[26] || (ze[26] = createTextVNode("Genres [ ")), createBaseVNode("a", {
        href: ts.genreListUrl
    }, "list", 8, _hoisted_21$4), ze[27] || (ze[27] = createTextVNode(" ]"))]), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[6] || (ze[6] = ns => es.formData.genres = ns)],
        name: "genres",
        modelValue: es.formData.genres,
        multiple: !0,
        options: ts.allGenres.reduce((ns, as) => ns.concat(as.genres), []).filter(ns => this.narrow.genres.includes(ns.id) || this.formData.genres.includes(ns.id)),
        reduce: ns => ns.id,
        selectable: ns => !this.formData.genres.includes(ns.id),
        label: "name",
        placeholder: "All Genres"
    }, {
        option: withCtx(({
            name: ns
        }) => [es.formData.genres.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_22$4, toDisplayString(ns), 1)) : (openBlock(), createElementBlock("span", _hoisted_23$3, "and " + toDisplayString(ns), 1))]),
        "selected-option": withCtx(({
            id: ns,
            name: as
        }) => [es.formData.genres[0] === ns ? (openBlock(), createElementBlock("span", _hoisted_24$3, toDisplayString(as), 1)) : (openBlock(), createElementBlock("span", _hoisted_25$3, "and " + toDisplayString(as), 1))]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable"])]), createBaseVNode("div", null, [ze[28] || (ze[28] = createBaseVNode("small", null, "Filter by Title", -1)), withDirectives(createBaseVNode("input", {
        type: "text",
        class: "form-input",
        onInput: ze[7] || (ze[7] = (...ns) => rs.onTitleChange && rs.onTitleChange(...ns)),
        name: "title",
        "onUpdate:modelValue": ze[8] || (ze[8] = ns => es.formData.title = ns),
        placeholder: "Title",
        maxlength: "50"
    }, null, 544), [
        [vModelText, es.formData.title]
    ])]), createBaseVNode("div", null, [createBaseVNode("small", _hoisted_26$3, [ze[29] || (ze[29] = createTextVNode("Groups [ ")), createBaseVNode("a", {
        href: ts.groupListUrl
    }, "list", 8, _hoisted_27$3), ze[30] || (ze[30] = createTextVNode(" ]"))]), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[9] || (ze[9] = ns => es.formData.groups = ns)],
        name: "groups",
        modelValue: es.formData.groups,
        options: ss.groupOptions,
        multiple: !0,
        reduce: ns => ns.id,
        filterable: !1,
        selectable: ns => !this.formData.groups.includes(ns.id),
        label: "name",
        placeholder: "All Game Groups",
        onSearch: rs.findGroup
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[31] || (ze[31] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_28$3, "Loading", 512), [
            [vShow, ns]
        ])]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "selectable", "onSearch"])]), createBaseVNode("div", null, [createBaseVNode("small", _hoisted_29$3, [ze[32] || (ze[32] = createTextVNode("Attributes [ ")), createBaseVNode("a", {
        href: ts.attributeListUrl
    }, "list", 8, _hoisted_30$3), ze[33] || (ze[33] = createTextVNode(" ]"))]), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[10] || (ze[10] = ns => es.formData.attributes = ns)],
        name: "attributes",
        modelValue: es.formData.attributes,
        options: ss.attributeOptions,
        multiple: !0,
        filterable: !1,
        label: "name",
        placeholder: "All Attributes",
        reduce: ns => ns.id,
        onSearch: rs.findAttribute
    }, {
        "no-options": withCtx(({
            search: ns,
            searching: as,
            loading: cs
        }) => ze[34] || (ze[34] = [createTextVNode(" type to search... ")])),
        spinner: withCtx(({
            loading: ns
        }) => [withDirectives(createBaseVNode("div", _hoisted_31$3, "Loading", 512), [
            [vShow, ns]
        ])]),
        option: withCtx(({
            name: ns,
            category: as
        }) => [createTextVNode(toDisplayString(ns) + " ", 1), createBaseVNode("small", null, "(" + toDisplayString(as) + ")", 1)]),
        "selected-option": withCtx(({
            name: ns,
            category: as
        }) => [createTextVNode(toDisplayString(ns) + " (" + toDisplayString(as) + ") ", 1)]),
        _: 1
    }, 8, ["onUpdate:modelValue", "modelValue", "options", "reduce", "onSearch"])]), createBaseVNode("div", null, [ze[37] || (ze[37] = createBaseVNode("small", {
        class: "text-muted"
    }, "Sort", -1)), createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[11] || (ze[11] = ns => es.formData.sort = ns)],
        name: "sort",
        modelValue: es.formData.sort,
        label: "name",
        options: [{
            id: "title",
            name: "Alphabetical (a→z)"
        }, {
            id: "-title",
            name: "Alphabetical (z→a)"
        }, {
            id: "added",
            name: "Date Added (newest)"
        }, {
            id: "-added",
            name: "Date Added (oldest)"
        }, {
            id: "critic_score",
            name: "Critic Score (best)"
        }, {
            id: "-critic_score",
            name: "Critic Score (worst)"
        }, {
            id: "moby_score",
            name: "Moby Score (best)"
        }, {
            id: "-moby_score",
            name: "Moby Score (worst)"
        }, {
            id: "user_score",
            name: "Player Score (best)"
        }, {
            id: "-user_score",
            name: "Player Score (worst)"
        }, {
            id: "date",
            name: "Release Date (oldest)"
        }, {
            id: "-date",
            name: "Release Date (newest)"
        }, {
            id: "modified",
            name: "Updated (newest)"
        }, {
            id: "-modified",
            name: "Updated (oldest)"
        }],
        reduce: ns => ns.id,
        clearable: !1
    }, null, 8, ["onUpdate:modelValue", "modelValue", "reduce"]), es.formData.sort == "critic_score" || es.formData.sort == "-critic_score" ? (openBlock(), createElementBlock("div", _hoisted_32$3, [ze[35] || (ze[35] = createBaseVNode("div", {
        class: "text-sm text-nowrap me-1"
    }, " Min. Critic Ratings: ", -1)), createBaseVNode("div", null, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: "form-input form-input-sm",
        onInput: ze[12] || (ze[12] = (...ns) => rs.onChange && rs.onChange(...ns)),
        name: "min_critic_votes",
        "onUpdate:modelValue": ze[13] || (ze[13] = ns => es.formData.min_critic_votes = ns),
        placeholder: "Min. Critic Scores",
        min: "0"
    }, null, 544), [
        [vModelText, es.formData.min_critic_votes]
    ])])])) : createCommentVNode("", !0), es.formData.sort == "user_score" || es.formData.sort == "-user_score" ? (openBlock(), createElementBlock("div", _hoisted_33$3, [ze[36] || (ze[36] = createBaseVNode("div", {
        class: "text-sm text-nowrap me-1"
    }, " Min. Player Ratings: ", -1)), createBaseVNode("div", null, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: "form-input form-input-sm",
        onInput: ze[14] || (ze[14] = (...ns) => rs.onChange && rs.onChange(...ns)),
        name: "min_user_votes",
        "onUpdate:modelValue": ze[15] || (ze[15] = ns => es.formData.min_user_votes = ns),
        placeholder: "Min. Player Ratings",
        min: "0"
    }, null, 544), [
        [vModelText, es.formData.min_user_votes]
    ])])])) : createCommentVNode("", !0)]), createBaseVNode("div", null, [ze[38] || (ze[38] = createBaseVNode("small", {
        class: "text-muted"
    }, "Release Date", -1)), createBaseVNode("div", _hoisted_34$3, [createBaseVNode("div", _hoisted_35$3, [createVNode(is, {
        "onUpdate:modelValue": [ze[16] || (ze[16] = ns => rs.onChange("year")), ze[17] || (ze[17] = ns => es.formData.year = ns)],
        name: "year",
        modelValue: es.formData.year,
        options: rs.yearOptions.filter(ns => ss.narrow.min_year <= ns && ss.narrow.max_year >= ns),
        placeholder: "From"
    }, null, 8, ["modelValue", "options"])]), createBaseVNode("div", _hoisted_36$3, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[18] || (ze[18] = ns => es.formData.endyear = ns)],
        name: "endyear",
        modelValue: es.formData.endyear,
        options: rs.yearOptions.filter(ns => ss.narrow.min_year <= ns && ss.narrow.max_year >= ns),
        placeholder: "To"
    }, null, 8, ["onUpdate:modelValue", "modelValue", "options"])])])])])]), ss.fetching ? (openBlock(), createElementBlock("div", _hoisted_37$3, "Loading")) : createCommentVNode("", !0), ss.showList ? (openBlock(), createBlock(resolveDynamicComponent(ss.showComponent), {
        key: 1,
        "initial-values": ss.gamesList,
        "paging-method": "POST",
        "approval-privileges": ts.approvalPrivileges,
        "initial-paging-params": es.formData
    }, null, 8, ["initial-values", "approval-privileges", "initial-paging-params"])) : createCommentVNode("", !0), ss.gamesList.total > es.formData.perpage ? (openBlock(), createElementBlock("div", _hoisted_38$3, [createBaseVNode("div", _hoisted_39$3, [createVNode(is, {
        "onUpdate:modelValue": [rs.onChange, ze[19] || (ze[19] = ns => es.formData.perpage = ns)],
        name: "perPage",
        modelValue: es.formData.perpage,
        label: "name",
        options: [{
            id: 12,
            name: "12 Results Per Page"
        }, {
            id: 18,
            name: "18 Results Per Page"
        }, {
            id: 24,
            name: "24 Results Per Page"
        }, {
            id: 30,
            name: "30 Results Per Page"
        }, {
            id: 40,
            name: "40 Results Per Page"
        }, {
            id: 50,
            name: "50 Results Per Page"
        }, {
            id: 100,
            name: "100 Results Per Page"
        }],
        reduce: ns => ns.id,
        clearable: !1
    }, null, 8, ["onUpdate:modelValue", "modelValue", "reduce"])]), ze[39] || (ze[39] = createBaseVNode("div", {
        class: "hide-sm"
    }, [createBaseVNode("p", {
        class: "text-muted"
    }, [createBaseVNode("b", null, "Hotkeys"), createBaseVNode("br"), createBaseVNode("small", null, [createTextVNode(" Left Arrow (Prev)"), createBaseVNode("br"), createTextVNode(" Right Arrow (Next) ")])])], -1))])) : createCommentVNode("", !0)], 64)
}
const GameBrowserV2 = _export_sfc(_sfc_main$e, [
        ["render", _sfc_render$a]
    ]),
    _sfc_main$d = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            title: {
                type: String,
                required: !0
            }
        },
        setup: useFetch
    },
    _hoisted_1$b = {
        class: "form-group"
    },
    _hoisted_2$a = {
        class: "form-group"
    },
    _hoisted_3$9 = {
        class: "form-group"
    },
    _hoisted_4$9 = {
        class: "form-group"
    },
    _hoisted_5$8 = {
        class: "form-group"
    },
    _hoisted_6$8 = {
        class: "form-group"
    },
    _hoisted_7$7 = {
        class: "form-group"
    },
    _hoisted_8$7 = ["placeholder"],
    _hoisted_9$6 = {
        class: "alert"
    },
    _hoisted_10$6 = {
        class: "form-group text-sm text-bold mb-0"
    },
    _hoisted_11$6 = ["checked"],
    _hoisted_12$6 = ["disabled"],
    _hoisted_13$5 = {
        key: 0,
        class: "loading"
    },
    _hoisted_14$5 = {
        key: 1,
        class: "text-bold text-success"
    };

function _sfc_render$9(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[8] || (ze[8] = withModifiers(as => es.onSubmit(ts.actionUrl, es.formData), ["prevent"])),
        onChange: ze[9] || (ze[9] = (...as) => es.onChange && es.onChange(...as)),
        onInvalidCapture: ze[10] || (ze[10] = withModifiers((...as) => es.onInvalid && es.onInvalid(...as), ["prevent"])),
        class: "border mb"
    }, [ze[13] || (ze[13] = createBaseVNode("h2", null, "IP Licensing Request", -1)), createBaseVNode("p", null, " Submit this form to register your interest in the " + toDisplayString(ts.title) + " IP. ", 1), createBaseVNode("div", _hoisted_1$b, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.name
        }]),
        name: "name",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => es.formData.name = as),
        placeholder: "Your Name",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.name]
    ]), es.result.errors.name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_2$a, [withDirectives(createBaseVNode("input", {
        type: "email",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.email
        }]),
        name: "email",
        autocomplete: "username",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => es.formData.email = as),
        placeholder: "Email Address",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.email]
    ]), es.result.errors.email ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.email
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_3$9, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.company
        }]),
        name: "company",
        "onUpdate:modelValue": ze[2] || (ze[2] = as => es.formData.company = as),
        placeholder: "Company Name",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.company]
    ]), es.result.errors.company ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.company
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_4$9, [withDirectives(createBaseVNode("input", {
        type: "url",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.url
        }]),
        name: "url",
        "onUpdate:modelValue": ze[3] || (ze[3] = as => es.formData.url = as),
        placeholder: "Company Website (optional)"
    }, null, 2), [
        [vModelText, es.formData.url]
    ]), es.result.errors.url ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.url
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_5$8, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.phone
        }]),
        name: "phone",
        "onUpdate:modelValue": ze[4] || (ze[4] = as => es.formData.phone = as),
        placeholder: "Phone Number (optional)",
        maxlength: "50"
    }, null, 2), [
        [vModelText, es.formData.phone]
    ]), es.result.errors.phone ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.phone
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_6$8, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.budget
        }]),
        name: "budget",
        "onUpdate:modelValue": ze[5] || (ze[5] = as => es.formData.budget = as),
        placeholder: "What's your budget or royalty proposal?",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.budget]
    ]), es.result.errors.budget ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.budget
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_7$7, [withDirectives(createBaseVNode("textarea", {
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.body
        }]),
        rows: "10",
        name: "body",
        "onUpdate:modelValue": ze[6] || (ze[6] = as => es.formData.body = as),
        placeholder: "What would you like to use the " + ts.title + " IP for?",
        minlength: "100",
        maxlength: "10000",
        required: ""
    }, "      ", 10, _hoisted_8$7), [
        [vModelText, es.formData.body]
    ]), es.result.errors.body ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.body
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_9$6, [ze[12] || (ze[12] = createBaseVNode("p", {
        class: "text-sm"
    }, " The information provided by this form does not create a binding offer. MobyGames will attempt to communicate the interest to license or purchase video game intellectual property if the ownership of the video game intellectual property is known to MobyGames and the submitting party hereby consents to such communication. If MobyGames is unable to identify the owner of the intellectual property, it will retain the request information in the event an owner is identified in the future. ", -1)), createBaseVNode("div", _hoisted_10$6, [createBaseVNode("label", null, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        class: "form-check-input",
        name: "enabled",
        "onUpdate:modelValue": ze[7] || (ze[7] = as => es.formData.enabled = as),
        checked: es.formData.enabled,
        required: ""
    }, null, 8, _hoisted_11$6), [
        [vModelCheckbox, es.formData.enabled]
    ]), ze[11] || (ze[11] = createTextVNode(" I agree "))]), es.result.errors.enabled ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.enabled
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])]), createVNode(ns, {
        error: es.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: !es.formData.enabled || es.result.loading
    }, "Submit", 8, _hoisted_12$6), es.result.loading ? (openBlock(), createElementBlock("span", _hoisted_13$5, "Loading")) : es.result.data.success ? (openBlock(), createElementBlock("span", _hoisted_14$5, "Success!")) : createCommentVNode("", !0)], 32)
}
const GameLicensing = _export_sfc(_sfc_main$d, [
        ["render", _sfc_render$9]
    ]),
    _sfc_main$c = {
        props: {
            prevUrl: {
                type: String,
                default: ""
            },
            nextUrl: {
                type: String,
                default: ""
            }
        },
        mounted() {
            window.addEventListener("keyup", es => {
                this.onHotkey(es.code)
            })
        },
        methods: {
            onHotkey(es) {
                if (!document.querySelector("#glightbox-body")) switch (es) {
                    case "ArrowLeft":
                        this.prevUrl && (window.location.href = this.prevUrl);
                        break;
                    case "ArrowRight":
                        this.nextUrl && (window.location.href = this.nextUrl);
                        break
                }
            }
        }
    },
    _hoisted_1$a = {
        class: "text-muted text-sm text-left"
    };

function _sfc_render$8(es, ze, ts, os, ss, rs) {
    return openBlock(), createElementBlock("div", _hoisted_1$a, ze[0] || (ze[0] = [createBaseVNode("b", null, "HOTKEYS", -1), createBaseVNode("br", null, null, -1), createTextVNode(" Left Arrow (Prev)"), createBaseVNode("br", null, null, -1), createTextVNode(" Right Arrow (Next) ")]))
}
const ImageHotkeys = _export_sfc(_sfc_main$c, [
        ["render", _sfc_render$8]
    ]),
    _sfc_main$b = {
        props: {
            id: {
                type: Number
            },
            userId: {
                type: Number
            },
            origName: {
                type: String
            },
            origDescription: {
                type: String
            },
            origPrivate: {
                type: Boolean
            },
            purchasePrivate: {
                type: Boolean
            },
            isOwner: {
                type: Boolean
            },
            csrfToken: {
                type: String
            },
            rateUrl: {
                type: String
            },
            editUrl: {
                type: String
            },
            exportUrl: {
                type: String
            },
            addItemUrl: {
                type: String
            },
            deleteItemUrl: {
                type: String
            },
            searchUrl: {
                type: String
            },
            games: {
                type: Array
            },
            numUniqueGames: {
                type: Number
            },
            collectionUrl: {
                type: String
            },
            fetchUrl: {
                type: String
            },
            total: {
                type: Number
            },
            perPage: {
                type: Number
            },
            order: {
                type: String
            },
            steamImportUrl: {
                type: String
            },
            addQueueUrl: {
                type: String
            },
            pending: {
                type: Number
            },
            unknown: {
                type: Number
            },
            platforms: {
                type: Array
            },
            allPlatforms: {
                type: Array
            },
            spid: {
                type: Number
            },
            startPage: {
                type: Number
            },
            steamProfileUrlInit: {
                type: String
            },
            steamPlatformsInit: {
                type: Array
            },
            lastSynced: {
                type: String
            },
            isSynchronizedInit: {
                type: Boolean
            },
            disableSyncUrl: {
                type: String
            }
        },
        data() {
            return {
                loading: !1,
                list: this.games,
                sortBy: this.order,
                hasBuyInfo: !1,
                hasComments: !1,
                numPages: Math.ceil(this.total / this.perPage),
                totalEntries: this.total,
                transitionName: "none",
                editing: !1,
                dirty: !1,
                description: this.origDescription,
                name: this.origName,
                private: this.origPrivate,
                oldName: this.origDescription,
                oldDescription: this.origName,
                oldPrivate: this.origPrivate,
                steamProfileUrl: this.steamProfileUrlInit,
                steamPlatforms: this.steamPlatformsInit,
                selectedPlatform: this.spid,
                platformOptions: [{
                    id: 0,
                    name: "All Platforms"
                }],
                title: null,
                page: this.startPage,
                steamError: "",
                steamSuccess: !1,
                synchronize: !0,
                isSynchronized: this.isSynchronizedInit
            }
        },
        created() {
            this.platformOptions = this.platformOptions.concat(this.allPlatforms.filter(es => this.platforms.includes(es.id)))
        },
        mounted() {
            this.initTable()
        },
        computed: {
            totalPagesLabel() {
                return `of ${this.numPages}`
            },
            showPaging() {
                return this.numPages > 1
            }
        },
        watch: {
            name() {
                this.dirty = !0
            },
            description() {
                this.dirty = !0
            },
            private() {
                this.dirty = !0
            },
            steamProfileUrl() {
                this.saveSettings()
            },
            steamPlatforms() {
                this.saveSettings()
            }
        },
        methods: {
            initTable() {
                this.hasBuyInfo = this.list.some(es => es.purchase_price || es.purchase_date), this.hasComments = this.list.some(es => es.comments)
            },
            onTitleChange: lodashExports.debounce(function es() {
                this.$nextTick(() => {
                    this.fetchPage(1)
                })
            }, 500),
            sort(es) {
                es === this.sortBy && (es = es.startsWith("-") ? es.substring(1) : `-${es}`), this.sortBy = es, this.saveSettings(), this.fetchPage(1)
            },
            saveSettings() {
                localStorage.setItem("game-list-settings", JSON.stringify({
                    sort: this.sortBy,
                    steamProfileUrl: this.steamProfileUrl,
                    steamPlatforms: this.steamPlatforms
                }))
            },
            platformFilter() {
                this.fetchPage(1)
            },
            toggleEdit() {
                this.editing = !this.editing, this.editing ? (this.oldName = this.name, this.oldDescription = this.description, this.oldPrivate = this.private, this.dirty = !1) : (this.name = this.oldName, this.description = this.oldDescription, this.private = this.oldPrivate)
            },
            async saveEdit() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    _csrf_token: this.csrfToken,
                    id: this.id,
                    name: this.name,
                    private: this.private,
                    purchase_private: this.purchasePrivate,
                    description: this.description,
                    object_class: "HaveList"
                };
                await ze(this.editUrl, ts, !1, !1, !1) ? (this.editing = !1, this.dirty = !1) : console.error(es.errors)
            },
            addItemToList(es) {
                this.list.unshift(es), this.totalEntries += 1
            },
            async fetchPage(es, ze = !0) {
                if (es < 1 || this.loading) return;
                this.loading = !0;
                const {
                    result: ts,
                    onSubmit: os
                } = useFetch(this.$props);
                await os(this.fetchUrl, {
                    page: es,
                    sort: this.sortBy,
                    platform_id: this.selectedPlatform,
                    title: this.title
                }) ? (this.list = ts.data.games, this.page = ts.data.page, this.totalEntries = ts.data.total, this.numPages = Math.ceil(this.totalEntries / this.perPage), ze && (window.current_state_id = window.current_state_id || 0, window.max_state_id = window.max_state_id || 0, window.history.pushState(JSON.stringify({
                    page: es,
                    sort: this.sortBy
                }), "", ts.data.url)), this.loading = !1, this.initTable()) : (console.error(ts.errors), this.loading = !1)
            },
            onPopState(es) {
                es.state !== null && ("page" in es.state && (this.page = es.state.page), "sort" in es.state && (this.sortBy = es.state.sort), this.fetchPage(this.page, !1), window.current_state_id = es.state.id)
            },
            async doDelete(es) {
                if (this.loading) return;
                this.loading = !0;
                const {
                    result: ze,
                    onSubmit: ts
                } = useFetch(this.$props);
                if (await ts(this.deleteItemUrl, {
                        id: es
                    })) {
                    const ss = this.list.find(({
                        id: rs
                    }) => rs === es);
                    ss && (this.list = this.list.filter(rs => rs !== ss)), this.loading = !1
                } else console.error(ze.errors), this.loading = !1
            },
            async steamImport() {
                if (this.loading) return;
                this.loading = !0;
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props);
                await ze(this.steamImportUrl, {
                    url: this.steamProfileUrl,
                    platforms: this.steamPlatforms,
                    synchronize: this.synchronize
                }) ? (this.$refs.steamContainer.open = !1, this.steamSuccess = !0) : this.steamError = es.errors.SERVER_ERROR, this.loading = !1
            },
            async disableSync(es) {
                if (this.loading) return;
                this.loading = !0;
                const {
                    result: ze,
                    onSubmit: ts
                } = useFetch(this.$props);
                await ts(this.disableSyncUrl, {
                    add_source_id: es
                }) ? (this.$refs.steamContainer.open = !1, this.isSynchronized = !1) : this.steamError = ze.errors.SERVER_ERROR, this.loading = !1
            }
        }
    },
    _hoisted_1$9 = {
        class: "mb-0"
    },
    _hoisted_2$9 = ["href"],
    _hoisted_3$8 = {
        key: 0,
        class: "text-normal"
    },
    _hoisted_4$8 = ["href"],
    _hoisted_5$7 = {
        class: "text-muted"
    },
    _hoisted_6$7 = {
        key: 0
    },
    _hoisted_7$6 = {
        key: 1,
        class: "bg-highlight border border-sm mb"
    },
    _hoisted_8$6 = {
        class: "form-group"
    },
    _hoisted_9$5 = {
        class: "form-group"
    },
    _hoisted_10$5 = {
        class: "form-group"
    },
    _hoisted_11$5 = {
        class: "form-checkbox"
    },
    _hoisted_12$5 = ["disabled"],
    _hoisted_13$4 = {
        key: 2,
        ref: "steamContainer",
        class: "mb"
    },
    _hoisted_14$4 = ["value"],
    _hoisted_15$4 = {
        class: "form-group"
    },
    _hoisted_16$4 = {
        class: "form-group"
    },
    _hoisted_17$4 = {
        class: "flex flex-gap"
    },
    _hoisted_18$3 = {
        class: "form-checkbox"
    },
    _hoisted_19$3 = {
        class: "form-checkbox"
    },
    _hoisted_20$3 = {
        class: "form-checkbox"
    },
    _hoisted_21$3 = {
        class: "form-group"
    },
    _hoisted_22$3 = {
        class: "form-checkbox"
    },
    _hoisted_23$2 = {
        key: 0,
        class: "text-danger"
    },
    _hoisted_24$2 = ["disabled"],
    _hoisted_25$2 = {
        key: 1
    },
    _hoisted_26$2 = ["href"],
    _hoisted_27$2 = ["disabled"],
    _hoisted_28$2 = {
        key: 3
    },
    _hoisted_29$2 = {
        key: 4
    },
    _hoisted_30$2 = {
        key: 5
    },
    _hoisted_31$2 = ["href"],
    _hoisted_32$2 = {
        key: 6,
        class: "mb"
    },
    _hoisted_33$2 = {
        key: 7,
        class: "flex flex-align-center mb"
    },
    _hoisted_34$2 = {
        key: 0
    },
    _hoisted_35$2 = {
        class: "overflow-x-scroll"
    },
    _hoisted_36$2 = {
        key: 0,
        class: "table table-striped mb"
    },
    _hoisted_37$2 = {
        class: "text-center text-nowrap"
    },
    _hoisted_38$2 = {
        class: "text-center text-nowrap"
    },
    _hoisted_39$2 = {
        class: "text-center text-nowrap"
    },
    _hoisted_40$2 = {
        class: "text-center text-nowrap"
    },
    _hoisted_41$1 = {
        key: 1
    },
    _hoisted_42$1 = {
        class: "text-center text-nowrap"
    },
    _hoisted_43 = {
        key: 2,
        class: "text-center"
    },
    _hoisted_44 = {
        class: "td-nowrap text-ellipsis",
        style: {
            "max-width": "300px"
        }
    },
    _hoisted_45 = ["href"],
    _hoisted_46 = ["src", "width", "height"],
    _hoisted_47 = {
        key: 1,
        class: "icon icon-game icon-game-sm display-inline vertical-align-middle"
    },
    _hoisted_48 = ["href"],
    _hoisted_49 = {
        class: "text-center td-nowrap"
    },
    _hoisted_50 = {
        key: 0,
        class: "text-center td-nowrap"
    },
    _hoisted_51 = {
        key: 0,
        class: "text-center"
    },
    _hoisted_52 = ["href", "data-tooltip"],
    _hoisted_53 = {
        key: 1,
        class: "text-center"
    },
    _hoisted_54 = {
        class: "text-center text-nowrap"
    },
    _hoisted_55 = ["href"],
    _hoisted_56 = ["href"],
    _hoisted_57 = {
        class: "text-center text-nowrap"
    },
    _hoisted_58 = ["href"],
    _hoisted_59 = ["href"],
    _hoisted_60 = {
        class: "text-center"
    },
    _hoisted_61 = {
        class: "text-center text-nowrap"
    },
    _hoisted_62 = {
        key: 3
    },
    _hoisted_63 = {
        class: "overflow-auto",
        style: {
            "max-height": "48px"
        }
    },
    _hoisted_64 = {
        class: "text-center text-nowrap"
    },
    _hoisted_65 = {
        key: 4,
        class: "text-center td-nowrap"
    },
    _hoisted_66 = ["href"],
    _hoisted_67 = ["onClick"],
    _hoisted_68 = {
        colspan: "7"
    },
    _hoisted_69 = {
        key: 0,
        class: "no-select text-muted"
    },
    _hoisted_70 = {
        key: 0,
        class: "text-disabled"
    },
    _hoisted_71 = {
        key: 2,
        class: "text-disabled"
    };

function _sfc_render$7(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("search"),
        ns = resolveComponent("v-select"),
        as = resolveComponent("rate-game");
    return openBlock(), createElementBlock("div", null, [createBaseVNode("h2", _hoisted_1$9, [createBaseVNode("a", {
        href: ts.collectionUrl
    }, "Collection", 8, _hoisted_2$9), createTextVNode(" > " + toDisplayString(ss.name) + " ", 1), ts.isOwner ? (openBlock(), createElementBlock("small", _hoisted_3$8, [ze[31] || (ze[31] = createTextVNode(" [ ")), createBaseVNode("a", {
        href: ts.exportUrl
    }, "export", 8, _hoisted_4$8), ze[32] || (ze[32] = createTextVNode(" ] ")), ss.editing ? createCommentVNode("", !0) : (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[27] || (ze[27] = createTextVNode(" [ ")), createBaseVNode("a", {
        href: "#",
        onClick: ze[0] || (ze[0] = cs => rs.toggleEdit())
    }, "edit"), ze[28] || (ze[28] = createTextVNode(" ] "))], 64)), ss.editing ? (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[29] || (ze[29] = createTextVNode(" [ ")), createBaseVNode("a", {
        href: "#",
        onClick: ze[1] || (ze[1] = cs => rs.toggleEdit()),
        class: "text-danger"
    }, "cancel"), ze[30] || (ze[30] = createTextVNode(" ] "))], 64)) : createCommentVNode("", !0)])) : createCommentVNode("", !0)]), createBaseVNode("p", _hoisted_5$7, [ts.numUniqueGames === ss.totalEntries ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode(" (" + toDisplayString(ts.numUniqueGames) + " games) ", 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(" (" + toDisplayString(ts.numUniqueGames) + " unique games, " + toDisplayString(ss.totalEntries) + " entries) ", 1)], 64)), createTextVNode(" (" + toDisplayString(ss.private ? "private" : "public") + " list) ", 1)]), ss.description ? (openBlock(), createElementBlock("p", _hoisted_6$7, toDisplayString(ss.description), 1)) : createCommentVNode("", !0), ss.editing ? (openBlock(), createElementBlock("div", _hoisted_7$6, [createBaseVNode("div", _hoisted_8$6, [ze[33] || (ze[33] = createBaseVNode("small", null, "List Title", -1)), withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": ze[2] || (ze[2] = cs => ss.name = cs),
        onKeyup: ze[3] || (ze[3] = withKeys(cs => rs.saveEdit(), ["enter"])),
        class: "form-input",
        placeholder: "List name",
        minlength: "1",
        maxlength: "40",
        required: ""
    }, null, 544), [
        [vModelText, ss.name]
    ])]), createBaseVNode("div", _hoisted_9$5, [ze[34] || (ze[34] = createBaseVNode("small", null, "List Description", -1)), withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": ze[4] || (ze[4] = cs => ss.description = cs),
        onKeyup: ze[5] || (ze[5] = withKeys(cs => rs.saveEdit(), ["enter"])),
        class: "form-input",
        placeholder: "Description (optional)",
        maxlength: "255"
    }, null, 544), [
        [vModelText, ss.description]
    ])]), createBaseVNode("div", _hoisted_10$5, [createBaseVNode("label", _hoisted_11$5, [withDirectives(createBaseVNode("input", {
        name: "private",
        type: "checkbox",
        "onUpdate:modelValue": ze[6] || (ze[6] = cs => ss.private = cs)
    }, null, 512), [
        [vModelCheckbox, ss.private]
    ]), ze[35] || (ze[35] = createTextVNode(" Private "))])]), createBaseVNode("div", null, [createBaseVNode("button", {
        onClick: ze[7] || (ze[7] = cs => rs.saveEdit()),
        class: normalizeClass(["btn btn-sm", {
            "btn-primary": ss.dirty
        }]),
        disabled: ss.dirty === !1
    }, "Save", 10, _hoisted_12$5)])])) : createCommentVNode("", !0), ts.isOwner && ts.pending === ts.unknown ? (openBlock(), createElementBlock("details", _hoisted_13$4, [ze[43] || (ze[43] = createBaseVNode("summary", {
        class: "no-select text-primary"
    }, "Import my games from Steam", -1)), ss.isSynchronized ? (openBlock(), createElementBlock("div", _hoisted_25$2, [ze[40] || (ze[40] = createTextVNode(" This list is synchronized with ")), createBaseVNode("a", {
        href: ts.steamProfileUrlInit
    }, "your steam account", 8, _hoisted_26$2), ze[41] || (ze[41] = createTextVNode(" [ ")), createBaseVNode("a", {
        href: "#",
        onClick: ze[14] || (ze[14] = cs => rs.disableSync(1)),
        disabled: ss.loading
    }, "Unlink", 8, _hoisted_27$2), ze[42] || (ze[42] = createTextVNode(" ] "))])) : (openBlock(), createElementBlock("form", {
        key: 0,
        onSubmit: ze[13] || (ze[13] = withModifiers((...cs) => rs.steamImport && rs.steamImport(...cs), ["prevent"])),
        class: "bg-highlight border border-xs border-radius"
    }, [createBaseVNode("input", {
        type: "hidden",
        name: "_csrf_token",
        value: ts.csrfToken
    }, null, 8, _hoisted_14$4), createBaseVNode("div", _hoisted_15$4, [withDirectives(createBaseVNode("input", {
        type: "url",
        "onUpdate:modelValue": ze[8] || (ze[8] = cs => ss.steamProfileUrl = cs),
        name: "profile_url",
        class: "form-input",
        placeholder: "https://steamcommunity.com/id/YOUR_STEAM_NAME/ or https://steamcommunity.com/profiles/123456...",
        required: ""
    }, null, 512), [
        [vModelText, ss.steamProfileUrl]
    ])]), createBaseVNode("div", _hoisted_16$4, [createBaseVNode("div", _hoisted_17$4, [createBaseVNode("label", _hoisted_18$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[9] || (ze[9] = cs => ss.steamPlatforms = cs),
        name: "steam_platforms",
        value: "Windows",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[36] || (ze[36] = createTextVNode(" Windows "))]), createBaseVNode("label", _hoisted_19$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[10] || (ze[10] = cs => ss.steamPlatforms = cs),
        name: "steam_platforms",
        value: "Macintosh",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[37] || (ze[37] = createTextVNode(" Macintosh "))]), createBaseVNode("label", _hoisted_20$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[11] || (ze[11] = cs => ss.steamPlatforms = cs),
        name: "steam_platforms",
        value: "Linux",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[38] || (ze[38] = createTextVNode(" Linux "))])])]), createBaseVNode("div", _hoisted_21$3, [createBaseVNode("label", _hoisted_22$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[12] || (ze[12] = cs => ss.synchronize = cs),
        name: "synchronize",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.synchronize]
    ]), ze[39] || (ze[39] = createTextVNode(" Keep updated (auto-sync) "))])]), ss.steamError ? (openBlock(), createElementBlock("p", _hoisted_23$2, toDisplayString(ss.steamError), 1)) : createCommentVNode("", !0), createBaseVNode("div", null, [createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary",
        disabled: !ss.steamProfileUrl
    }, "Import", 8, _hoisted_24$2)])], 32))], 512)) : createCommentVNode("", !0), ss.steamSuccess || ts.steamProfileUrlInit !== "" && ts.lastSynced === "Undated" ? (openBlock(), createElementBlock("p", _hoisted_28$2, " Importing your Steam games... Reload this page in a few moments to see results. ")) : ts.steamProfileUrlInit !== "" && ts.lastSynced !== "Undated" ? (openBlock(), createElementBlock("p", _hoisted_29$2, " Your Steam games were last imported " + toDisplayString(ts.lastSynced) + ". ", 1)) : createCommentVNode("", !0), ts.pending > 0 ? (openBlock(), createElementBlock("p", _hoisted_30$2, [createTextVNode(" You have " + toDisplayString(ts.pending) + " game" + toDisplayString(ts.pending > 1 ? "s" : "") + " from Steam in the queue. ", 1), ts.unknown > 0 && ts.pending === ts.unknown ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[44] || (ze[44] = createTextVNode(" These are not currently available on MobyGames, or are not available for the platform(s) you selected. When they are added to the database, they will show up in your list automatically! To speed up this process, you can ")), createBaseVNode("a", {
        href: ts.addQueueUrl
    }, "contribute the missing games", 8, _hoisted_31$2), ze[45] || (ze[45] = createTextVNode(". "))], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(" Check back shortly! ")], 64))])) : createCommentVNode("", !0), ts.isOwner ? (openBlock(), createElementBlock("div", _hoisted_32$2, [createVNode(is, {
        "csrf-token": ts.csrfToken,
        "add-item-url": ts.addItemUrl,
        "a-url": ts.searchUrl,
        "game-only": !0,
        "is-add-to-list": !0,
        "list-id": ts.id,
        onAddItemToList: rs.addItemToList,
        class: "mb",
        placeholder: "Search for game to add..."
    }, null, 8, ["csrf-token", "add-item-url", "a-url", "list-id", "onAddItemToList"])])) : createCommentVNode("", !0), ts.platforms.length > 1 || ts.numUniqueGames > 15 ? (openBlock(), createElementBlock("div", _hoisted_33$2, [ze[46] || (ze[46] = createBaseVNode("div", {
        class: "text-sm text-nowrap me-1"
    }, [createBaseVNode("b", null, "Filter by")], -1)), ts.numUniqueGames > 15 ? (openBlock(), createElementBlock("div", _hoisted_34$2, [withDirectives(createBaseVNode("input", {
        type: "text",
        class: "form-input form-input-sm",
        onInput: ze[15] || (ze[15] = (...cs) => rs.onTitleChange && rs.onTitleChange(...cs)),
        name: "title",
        "onUpdate:modelValue": ze[16] || (ze[16] = cs => ss.title = cs),
        placeholder: "Title",
        maxlength: "50"
    }, null, 544), [
        [vModelText, ss.title]
    ])])) : createCommentVNode("", !0), ts.platforms.length > 1 ? (openBlock(), createBlock(ns, {
        key: 1,
        class: "v-select-sm ms-1 w100",
        modelValue: ss.selectedPlatform,
        "onUpdate:modelValue": [ze[17] || (ze[17] = cs => ss.selectedPlatform = cs), rs.platformFilter],
        options: ss.platformOptions,
        label: "name",
        reduce: cs => cs.id,
        clearable: !1
    }, null, 8, ["modelValue", "options", "reduce", "onUpdate:modelValue"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_35$2, [ss.list.length > 0 ? (openBlock(), createElementBlock("table", _hoisted_36$2, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, [createBaseVNode("a", {
        href: "#",
        onClick: ze[18] || (ze[18] = withModifiers(cs => rs.sort("title"), ["prevent"]))
    }, "Title"), ss.sortBy === "title" || ss.sortBy === "-title" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "title",
            "arrow-up": ss.sortBy === "-title"
        }])
    }, null, 2)) : createCommentVNode("", !0), ze[47] || (ze[47] = createTextVNode(" (")), createBaseVNode("a", {
        href: "#",
        onClick: ze[19] || (ze[19] = withModifiers(cs => rs.sort("released"), ["prevent"]))
    }, "Year"), ss.sortBy === "released" || ss.sortBy === "-released" ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "released",
            "arrow-up": ss.sortBy === "-released"
        }])
    }, null, 2)) : createCommentVNode("", !0), ze[48] || (ze[48] = createTextVNode(") "))]), createBaseVNode("th", _hoisted_37$2, [createBaseVNode("a", {
        href: "#",
        onClick: ze[20] || (ze[20] = withModifiers(cs => rs.sort("platform"), ["prevent"]))
    }, "Platform"), ss.sortBy === "platform" || ss.sortBy === "-platform" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "platform",
            "arrow-up": ss.sortBy === "-platform"
        }])
    }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_38$2, [createBaseVNode("a", {
        href: "#",
        onClick: ze[21] || (ze[21] = withModifiers(cs => rs.sort("rating"), ["prevent"]))
    }, "Rating"), ss.sortBy === "rating" || ss.sortBy === "-rating" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "rating",
            "arrow-up": ss.sortBy === "-rating"
        }])
    }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_39$2, [createBaseVNode("a", {
        href: "#",
        onClick: ze[22] || (ze[22] = withModifiers(cs => rs.sort("used_price"), ["prevent"]))
    }, "Used $"), ss.sortBy === "used_price" || ss.sortBy === "-used_price" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "used_price",
            "arrow-up": ss.sortBy === "-used_price"
        }])
    }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_40$2, [createBaseVNode("a", {
        href: "#",
        onClick: ze[23] || (ze[23] = withModifiers(cs => rs.sort("new_price"), ["prevent"]))
    }, "New $"), ss.sortBy === "new_price" || ss.sortBy === "-new_price" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "new_price",
            "arrow-up": ss.sortBy === "-new_price"
        }])
    }, null, 2)) : createCommentVNode("", !0)]), ss.hasBuyInfo && (ts.isOwner || !ts.purchasePrivate) ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[49] || (ze[49] = createBaseVNode("th", {
        class: "text-center"
    }, "Paid", -1)), ze[50] || (ze[50] = createBaseVNode("th", {
        class: "text-center text-nowrap"
    }, "Buy Date", -1))], 64)) : createCommentVNode("", !0), ss.hasComments ? (openBlock(), createElementBlock("th", _hoisted_41$1, "Comments")) : createCommentVNode("", !0), createBaseVNode("th", _hoisted_42$1, [createBaseVNode("a", {
        href: "#",
        onClick: ze[24] || (ze[24] = withModifiers(cs => rs.sort("added"), ["prevent"]))
    }, "Added"), ss.sortBy === "added" || ss.sortBy === "-added" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["arrow ms-1", {
            "arrow-down": ss.sortBy === "added",
            "arrow-up": ss.sortBy === "-added"
        }])
    }, null, 2)) : createCommentVNode("", !0)]), ts.isOwner ? (openBlock(), createElementBlock("th", _hoisted_43, "Manage")) : createCommentVNode("", !0)])]), createVNode(TransitionGroup, {
        name: ss.transitionName,
        tag: "tbody"
    }, {
        default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(ss.list, cs => (openBlock(), createElementBlock("tr", {
            key: cs.id
        }, [createBaseVNode("td", _hoisted_44, [cs.cover ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: cs.game_url
        }, [createBaseVNode("img", {
            src: cs.cover.url,
            width: cs.cover.width,
            height: cs.cover.height,
            alt: "cover",
            class: "img-thumbnail-box img-thumbnail-sm"
        }, null, 8, _hoisted_46)], 8, _hoisted_45)) : (openBlock(), createElementBlock("span", _hoisted_47)), ze[51] || (ze[51] = createTextVNode("  ")), createBaseVNode("a", {
            href: cs.game_url
        }, toDisplayString(cs.game_title), 9, _hoisted_48), createTextVNode(" (" + toDisplayString(cs.initial_date !== null ? cs.initial_date.substring(0, 4) : "Undated") + ") ", 1)]), createBaseVNode("td", _hoisted_49, toDisplayString(cs.platform), 1), ts.isOwner ? (openBlock(), createElementBlock(Fragment, {
            key: 0
        }, [ts.isOwner ? (openBlock(), createElementBlock("td", _hoisted_50, [createVNode(as, {
            "csrf-token": ts.csrfToken,
            "action-url": ts.rateUrl,
            "user-id": ts.userId,
            "game-id": cs.game_id,
            "platform-id": cs.platform_id,
            "rating-orig": cs.rating.rating
        }, null, 8, ["csrf-token", "action-url", "user-id", "game-id", "platform-id", "rating-orig"])])) : createCommentVNode("", !0)], 64)) : (openBlock(), createElementBlock(Fragment, {
            key: 1
        }, [cs.rating.rating ? (openBlock(), createElementBlock("td", _hoisted_51, [createBaseVNode("a", {
            href: cs.rating.url,
            "data-tooltip": `${cs.rating.rating} stars`
        }, [createBaseVNode("span", {
            class: "stars stars-sm",
            style: normalizeStyle(`--rating: ${cs.rating.rating}`)
        }, null, 4)], 8, _hoisted_52)])) : (openBlock(), createElementBlock("td", _hoisted_53, "   "))], 64)), createBaseVNode("td", _hoisted_54, [cs.used_price ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: cs.ebay_url,
            target: "_blank",
            class: "link-external",
            onclick: "gtag('event', 'ebay-collection-price', { 'event_category': 'click' });"
        }, toDisplayString(cs.used_price), 9, _hoisted_55)) : cs.ebay_url ? (openBlock(), createElementBlock("a", {
            key: 1,
            href: cs.ebay_url,
            target: "_blank",
            class: "link-external",
            onclick: "gtag('event', 'ebay-collection-price', { 'event_category': 'click' });"
        }, "check", 8, _hoisted_56)) : createCommentVNode("", !0)]), createBaseVNode("td", _hoisted_57, [cs.new_price ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: cs.ebay_url,
            target: "_blank",
            class: "link-external",
            onclick: "gtag('event', 'ebay-collection-price', { 'event_category': 'click' });"
        }, toDisplayString(cs.new_price), 9, _hoisted_58)) : cs.ebay_url ? (openBlock(), createElementBlock("a", {
            key: 1,
            href: cs.ebay_url,
            target: "_blank",
            class: "link-external",
            onclick: "gtag('event', 'ebay-collection-price', { 'event_category': 'click' });"
        }, "check", 8, _hoisted_59)) : createCommentVNode("", !0)]), ss.hasBuyInfo && (ts.isOwner || !ts.purchasePrivate) ? (openBlock(), createElementBlock(Fragment, {
            key: 2
        }, [createBaseVNode("td", _hoisted_60, toDisplayString(cs.purchase_price), 1), createBaseVNode("td", _hoisted_61, toDisplayString(cs.purchase_date), 1)], 64)) : createCommentVNode("", !0), ss.hasComments ? (openBlock(), createElementBlock("td", _hoisted_62, [createBaseVNode("div", _hoisted_63, toDisplayString(cs.comments), 1)])) : createCommentVNode("", !0), createBaseVNode("td", _hoisted_64, toDisplayString(new Date(cs.created).toISOString().slice(0, 10)), 1), ts.isOwner ? (openBlock(), createElementBlock("td", _hoisted_65, [ze[52] || (ze[52] = createTextVNode(" [ ")), createBaseVNode("a", {
            href: cs.edit_url
        }, "edit", 8, _hoisted_66), ze[53] || (ze[53] = createTextVNode(" ] [ ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(fs => rs.doDelete(cs.id), ["prevent"]),
            class: "text-danger"
        }, "x", 8, _hoisted_67), ze[54] || (ze[54] = createTextVNode(" ] "))])) : createCommentVNode("", !0)]))), 128))]),
        _: 1
    }, 8, ["name"]), createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_68, [rs.showPaging ? (openBlock(), createElementBlock("p", _hoisted_69, [ze[55] || (ze[55] = createTextVNode(" [ ")), ss.page <= 1 ? (openBlock(), createElementBlock("span", _hoisted_70, "Prev")) : (openBlock(), createElementBlock("a", {
        key: 1,
        href: "#",
        onClick: ze[25] || (ze[25] = withModifiers(cs => rs.fetchPage(ss.page - 1), ["prevent"]))
    }, "Prev")), ze[56] || (ze[56] = createTextVNode(" ] [ ")), ss.page === ss.numPages ? (openBlock(), createElementBlock("span", _hoisted_71, "Next")) : (openBlock(), createElementBlock("a", {
        key: 3,
        href: "#",
        onClick: ze[26] || (ze[26] = withModifiers(cs => rs.fetchPage(ss.page + 1), ["prevent"]))
    }, "Next")), createTextVNode(" ] [ Page " + toDisplayString(ss.page) + " " + toDisplayString(rs.totalPagesLabel) + " ] [ " + toDisplayString(ss.totalEntries.toLocaleString()) + toDisplayString(ss.totalEntries === 1e4 ? "+" : "") + " games ] ", 1)])) : createCommentVNode("", !0)])])])) : createCommentVNode("", !0)])])
}
const List = _export_sfc(_sfc_main$b, [
        ["render", _sfc_render$7]
    ]),
    _sfc_main$a = {
        props: {
            owner: {
                type: Boolean
            },
            csrfToken: {
                type: String
            },
            userLists: {
                type: Array
            },
            actionUrl: {
                type: String
            },
            editUrl: {
                type: String
            },
            deleteUrl: {
                type: String
            },
            importUrl: {
                type: String
            },
            steamProfileUrlInit: {
                type: String
            },
            steamPlatformsInit: {
                type: Array
            }
        },
        data() {
            return {
                loading: !1,
                importing: !1,
                deleteId: -1,
                editId: -1,
                lists: this.userLists,
                sortBy: "",
                descOrder: !0,
                title: "",
                description: "",
                privateList: !1,
                privatePurchase: !1,
                modal: !1,
                modalBodyText: "",
                hasFilesToUpload: !1,
                steamProfileUrl: this.steamProfileUrlInit,
                steamPlatforms: this.steamPlatformsInit,
                enableSteamImport: !1,
                synchronize: !0
            }
        },
        created() {
            const es = JSON.parse(localStorage.getItem("collection-settings"));
            es && (this.sortBy = es.sort, this.descOrder = es.order)
        },
        computed: {
            sortedList() {
                return this.editId > -1 ? this.lists : this.sortBy === "games" ? this.descOrder ? this.lists.sort((es, ze) => es.games.length - ze.games.length) : this.lists.sort((es, ze) => ze.games.length - es.games.length) : this.sortBy === "name" ? this.lists.sort((es, ze) => {
                    const ts = this.descOrder ? es.name.toUpperCase() : ze.name.toUpperCase(),
                        os = this.descOrder ? ze.name.toUpperCase() : es.name.toUpperCase();
                    return ts < os ? -1 : ts > os ? 1 : 0
                }) : this.lists
            }
        },
        methods: {
            sort(es) {
                es === this.sortBy && (this.descOrder = !this.descOrder), this.sortBy = es, localStorage.setItem("collection-settings", JSON.stringify({
                    sort: this.sortBy,
                    order: this.descOrder
                }))
            },
            importCheck() {
                this.$refs.upload.files && (this.hasFilesToUpload = !0)
            },
            async importLists() {
                if (this.importing) return;
                this.importing = !0;
                const es = new FormData,
                    {
                        files: ze
                    } = this.$refs.upload;
                [...ze].forEach(rs => {
                    es.append("files", rs)
                }), es.append("_csrf_token", this.csrfToken);
                const {
                    result: ts,
                    onSubmit: os
                } = useFetch(this.$props);
                await os(this.importUrl, es, !1, !0) ? ([...ts.data.lists].forEach(rs => {
                    this.lists.unshift(rs)
                }), this.importing = !1) : (this.modal = !0, this.modalBodyText = ts.errors.SERVER_ERROR, this.importing = !1)
            },
            async add() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    _csrf_token: this.csrfToken,
                    name: this.title,
                    description: this.description,
                    private: this.privateList,
                    purchase_private: this.privatePurchase,
                    enable_steam_import: this.enableSteamImport,
                    steam_url: this.steamProfileUrl,
                    steam_platforms: this.steamPlatforms,
                    synchronize: this.synchronize
                };
                await ze(this.actionUrl, ts) ? (this.title = "", this.description = "", this.lists.unshift(es.data.list), this.loading = !1) : (this.modal = !0, this.modalBodyText = es.errors.SERVER_ERROR, this.loading = !1)
            },
            editMode(es) {
                this.editId = es.id
            },
            cancelEdit() {
                this.editId = -1
            },
            async saveEdit(es) {
                const {
                    result: ze,
                    onSubmit: ts
                } = useFetch(this.$props), os = {
                    _csrf_token: this.csrfToken,
                    id: es.id,
                    name: es.name,
                    description: es.description,
                    private: es.private,
                    object_class: "HaveList",
                    purchase_private: es.purchase_private
                };
                await ts(this.editUrl, os, !1, !1, !1) ? this.cancelEdit() : (this.modal = !0, this.modalBodyText = ze.errors.SERVER_ERROR)
            },
            cancelDelete() {
                this.deleteId = -1
            },
            deleteRequest(es) {
                this.deleteId = es
            },
            async deleteList(es, ze = !1) {
                const {
                    result: ts,
                    onSubmit: os
                } = useFetch(this.$props), ss = {
                    _csrf_token: this.csrfToken,
                    id: es,
                    confirmed: ze
                };
                if (await os(this.deleteUrl, ss)) {
                    const is = this.lists.find(({
                        id: ns
                    }) => ns === es);
                    is && (this.lists = this.lists.filter(ns => ns !== is))
                } else this.modal = !0, this.modalBodyText = ts.errors.SERVER_ERROR, this.cancelDelete()
            }
        }
    },
    _hoisted_1$8 = {
        class: "mb"
    },
    _hoisted_2$8 = {
        key: 0
    },
    _hoisted_3$7 = {
        key: 1,
        class: "mb-sm"
    },
    _hoisted_4$7 = {
        class: "form-group"
    },
    _hoisted_5$6 = {
        class: "form-group"
    },
    _hoisted_6$6 = {
        class: "form-group"
    },
    _hoisted_7$5 = {
        class: "form-checkbox ms-1"
    },
    _hoisted_8$5 = {
        key: 0,
        class: "border border-sm"
    },
    _hoisted_9$4 = {
        class: "form-group text-sm mt-sm mb-1 flex"
    },
    _hoisted_10$4 = {
        class: "form-checkbox"
    },
    _hoisted_11$4 = {
        class: "form-checkbox ms-1"
    },
    _hoisted_12$4 = {
        class: "form-checkbox ms-1"
    },
    _hoisted_13$3 = {
        class: "text-sm"
    },
    _hoisted_14$3 = {
        class: "form-checkbox"
    },
    _hoisted_15$3 = {
        class: "flex flex-align-center"
    },
    _hoisted_16$3 = {
        class: "form-checkbox text-nowrap"
    },
    _hoisted_17$3 = {
        class: "bg-highlight border border-radius p-sm"
    },
    _hoisted_18$2 = {
        key: 0,
        class: "mt-sm mb-0"
    },
    _hoisted_19$2 = {
        class: "overflow-x-scroll"
    },
    _hoisted_20$2 = {
        key: 0,
        class: "table table-striped mb"
    },
    _hoisted_21$2 = {
        key: 0,
        class: "text-center"
    },
    _hoisted_22$2 = {
        class: "text-center"
    },
    _hoisted_23$1 = {
        key: 1
    },
    _hoisted_24$1 = ["onUpdate:modelValue", "onKeyup"],
    _hoisted_25$1 = ["href"],
    _hoisted_26$1 = ["onUpdate:modelValue", "onKeyup"],
    _hoisted_27$1 = {
        key: 1
    },
    _hoisted_28$1 = ["onUpdate:modelValue", "onKeyup"],
    _hoisted_29$1 = {
        key: 1
    },
    _hoisted_30$1 = {
        class: "text-center"
    },
    _hoisted_31$1 = {
        key: 1,
        class: "td-nowrap"
    },
    _hoisted_32$1 = {
        key: 0,
        class: "text-nowrap"
    },
    _hoisted_33$1 = ["onClick"],
    _hoisted_34$1 = ["onClick"],
    _hoisted_35$1 = ["onClick"],
    _hoisted_36$1 = ["href"],
    _hoisted_37$1 = {
        key: 0
    },
    _hoisted_38$1 = ["onClick"],
    _hoisted_39$1 = {
        key: 1
    },
    _hoisted_40$1 = ["onClick"],
    _hoisted_41 = ["innerHTML"],
    _hoisted_42 = {
        class: "flex flex-gap"
    };

function _sfc_render$6(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("modal");
    return openBlock(), createElementBlock("div", _hoisted_1$8, [ss.lists.length < 1 ? (openBlock(), createElementBlock("div", _hoisted_2$8, " No game collection yet! ")) : createCommentVNode("", !0), ts.owner ? (openBlock(), createElementBlock("div", _hoisted_3$7, [createBaseVNode("details", null, [ze[26] || (ze[26] = createBaseVNode("summary", {
        class: "no-select text-primary"
    }, "Create or Import List", -1)), createBaseVNode("form", {
        onSubmit: ze[9] || (ze[9] = withModifiers((...ns) => rs.add && rs.add(...ns), ["prevent"])),
        class: "bg-highlight border border-radius p-sm mt-sm mb-sm"
    }, [ze[24] || (ze[24] = createBaseVNode("p", {
        class: "text-bold mb-xs"
    }, "Create List", -1)), createBaseVNode("div", _hoisted_4$7, [withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": ze[0] || (ze[0] = ns => ss.title = ns),
        class: "form-input",
        placeholder: "List name",
        maxlength: "40",
        required: ""
    }, null, 512), [
        [vModelText, ss.title]
    ])]), createBaseVNode("div", _hoisted_5$6, [withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": ze[1] || (ze[1] = ns => ss.description = ns),
        class: "form-input",
        placeholder: "Description (optional)",
        maxlength: "255"
    }, null, 512), [
        [vModelText, ss.description]
    ])]), createBaseVNode("div", _hoisted_6$6, [createBaseVNode("label", _hoisted_7$5, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[2] || (ze[2] = ns => ss.enableSteamImport = ns),
        name: "enable_steam_import",
        value: "false"
    }, null, 512), [
        [vModelCheckbox, ss.enableSteamImport]
    ]), ze[18] || (ze[18] = createTextVNode(" Import my games from Steam "))]), ss.enableSteamImport ? (openBlock(), createElementBlock("div", _hoisted_8$5, [createBaseVNode("div", null, [withDirectives(createBaseVNode("input", {
        type: "url",
        "onUpdate:modelValue": ze[3] || (ze[3] = ns => ss.steamProfileUrl = ns),
        name: "steam_url",
        class: "form-input",
        placeholder: "https://steamcommunity.com/id/YOUR_STEAM_NAME/ or https://steamcommunity.com/profiles/123456..."
    }, null, 512), [
        [vModelText, ss.steamProfileUrl]
    ])]), createBaseVNode("div", _hoisted_9$4, [createBaseVNode("label", _hoisted_10$4, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[4] || (ze[4] = ns => ss.steamPlatforms = ns),
        name: "steam_platforms",
        value: "Windows",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[19] || (ze[19] = createTextVNode(" Windows "))]), createBaseVNode("label", _hoisted_11$4, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[5] || (ze[5] = ns => ss.steamPlatforms = ns),
        name: "steam_platforms",
        value: "Macintosh",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[20] || (ze[20] = createTextVNode(" Macintosh "))]), createBaseVNode("label", _hoisted_12$4, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[6] || (ze[6] = ns => ss.steamPlatforms = ns),
        name: "steam_platforms",
        value: "Linux",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.steamPlatforms]
    ]), ze[21] || (ze[21] = createTextVNode(" Linux "))])]), createBaseVNode("div", _hoisted_13$3, [createBaseVNode("label", _hoisted_14$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[7] || (ze[7] = ns => ss.synchronize = ns),
        name: "synchronize",
        checked: ""
    }, null, 512), [
        [vModelCheckbox, ss.synchronize]
    ]), ze[22] || (ze[22] = createTextVNode(" Keep updated (auto-sync) "))])])])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_15$3, [createBaseVNode("button", {
        class: normalizeClass(["btn btn-primary me-sm", {
            disabled: ss.loading
        }])
    }, toDisplayString(ss.loading ? "Adding..." : "Add"), 3), createBaseVNode("label", _hoisted_16$3, [withDirectives(createBaseVNode("input", {
        name: "private",
        type: "checkbox",
        "onUpdate:modelValue": ze[8] || (ze[8] = ns => ss.privateList = ns)
    }, null, 512), [
        [vModelCheckbox, ss.privateList]
    ]), ze[23] || (ze[23] = createTextVNode(" Private List "))])])], 32), createBaseVNode("div", _hoisted_17$3, [ze[25] || (ze[25] = createBaseVNode("p", {
        class: "text-bold mb-xs"
    }, "Import .csv file(s)", -1)), createBaseVNode("input", {
        onChange: ze[10] || (ze[10] = (...ns) => rs.importCheck && rs.importCheck(...ns)),
        ref: "upload",
        type: "file",
        id: "csv",
        name: "file",
        accept: ".csv",
        multiple: ""
    }, null, 544), ss.hasFilesToUpload ? (openBlock(), createElementBlock("p", _hoisted_18$2, [createBaseVNode("button", {
        class: "btn btn-primary",
        onClick: ze[11] || (ze[11] = (...ns) => rs.importLists && rs.importLists(...ns))
    }, toDisplayString(ss.importing ? "Importing..." : "Import"), 1)])) : createCommentVNode("", !0)])])])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_19$2, [ss.lists.length > 0 ? (openBlock(), createElementBlock("table", _hoisted_20$2, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, [createBaseVNode("a", {
        href: "#",
        onClick: ze[12] || (ze[12] = withModifiers(ns => rs.sort("name"), ["prevent"]))
    }, "Name")]), ze[27] || (ze[27] = createBaseVNode("th", null, "Description", -1)), ts.owner ? (openBlock(), createElementBlock("th", _hoisted_21$2, "Privacy")) : createCommentVNode("", !0), createBaseVNode("th", _hoisted_22$2, [createBaseVNode("a", {
        href: "#",
        onClick: ze[13] || (ze[13] = withModifiers(ns => rs.sort("games"), ["prevent"]))
    }, "Games")]), ts.owner ? (openBlock(), createElementBlock("th", _hoisted_23$1, "Manage")) : createCommentVNode("", !0)])]), createVNode(TransitionGroup, {
        name: "list",
        tag: "tbody"
    }, {
        default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(rs.sortedList, ns => (openBlock(), createElementBlock("tr", {
            class: normalizeClass({
                "bg-notice": ns.new
            }),
            key: ns.id
        }, [createBaseVNode("td", null, [ns.id === ss.editId ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": as => ns.name = as,
            onKeyup: withKeys(as => rs.saveEdit(ns), ["enter"]),
            class: "form-input form-input-sm form-input-inline-edit",
            placeholder: "List name",
            maxlength: "40",
            required: ""
        }, null, 40, _hoisted_24$1)), [
            [vModelText, ns.name]
        ]) : (openBlock(), createElementBlock("a", {
            key: 1,
            href: ns.internal_url
        }, toDisplayString(ns.name), 9, _hoisted_25$1))]), createBaseVNode("td", null, [ns.id === ss.editId ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": as => ns.description = as,
            onKeyup: withKeys(as => rs.saveEdit(ns), ["enter"]),
            class: "form-input form-input-sm form-input-inline-edit",
            placeholder: "Description (optional)",
            maxlength: "255"
        }, null, 40, _hoisted_26$1)), [
            [vModelText, ns.description]
        ]) : (openBlock(), createElementBlock("span", _hoisted_27$1, toDisplayString(ns.description), 1))]), ts.owner ? (openBlock(), createElementBlock("td", {
            key: 0,
            class: normalizeClass(["text-center", {
                "text-danger": ns.private
            }])
        }, [ns.id === ss.editId ? withDirectives((openBlock(), createElementBlock("select", {
            key: 0,
            "onUpdate:modelValue": as => ns.private = as,
            onKeyup: withKeys(as => rs.saveEdit(ns), ["enter"]),
            class: "form-input-inline-edit text-sm",
            style: {
                padding: "0px"
            }
        }, ze[28] || (ze[28] = [createBaseVNode("option", {
            value: !1
        }, "public", -1), createBaseVNode("option", {
            value: !0
        }, "private", -1)]), 40, _hoisted_28$1)), [
            [vModelSelect, ns.private]
        ]) : (openBlock(), createElementBlock("span", _hoisted_29$1, toDisplayString(ns.private ? "private" : "public"), 1))], 2)) : createCommentVNode("", !0), createBaseVNode("td", _hoisted_30$1, toDisplayString(ns.games.length), 1), ts.owner ? (openBlock(), createElementBlock("td", _hoisted_31$1, [ns.id === ss.editId ? (openBlock(), createElementBlock("span", _hoisted_32$1, [ze[29] || (ze[29] = createTextVNode(" [ ")), createBaseVNode("a", {
            href: "#",
            onClick: ze[14] || (ze[14] = withModifiers((...as) => rs.cancelEdit && rs.cancelEdit(...as), ["prevent"]))
        }, "cancel"), ze[30] || (ze[30] = createTextVNode(" ] [ ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(as => rs.saveEdit(ns), ["prevent"]),
            class: "text-success"
        }, "save", 8, _hoisted_33$1), ze[31] || (ze[31] = createTextVNode(" ] "))])) : (openBlock(), createElementBlock(Fragment, {
            key: 1
        }, [ns.id === ss.deleteId ? (openBlock(), createElementBlock(Fragment, {
            key: 0
        }, [ze[32] || (ze[32] = createTextVNode(" Delete list? ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(as => rs.deleteList(ns.id, !0), ["prevent"]),
            class: "text-danger"
        }, "yes", 8, _hoisted_34$1), ze[33] || (ze[33] = createTextVNode(" · ")), createBaseVNode("a", {
            href: "#",
            onClick: ze[15] || (ze[15] = withModifiers((...as) => rs.cancelDelete && rs.cancelDelete(...as), ["prevent"]))
        }, "no")], 64)) : (openBlock(), createElementBlock(Fragment, {
            key: 1
        }, [ze[38] || (ze[38] = createTextVNode(" [ ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(as => rs.editMode(ns), ["prevent"])
        }, "edit", 8, _hoisted_35$1), ze[39] || (ze[39] = createTextVNode(" ] [ ")), createBaseVNode("a", {
            href: ns.export_url
        }, "export", 8, _hoisted_36$1), ze[40] || (ze[40] = createTextVNode(" ] ")), ns.games.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_37$1, [ze[34] || (ze[34] = createTextVNode("[ ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(as => rs.deleteRequest(ns.id), ["prevent"]),
            class: "text-danger"
        }, "x", 8, _hoisted_38$1), ze[35] || (ze[35] = createTextVNode(" ]"))])) : (openBlock(), createElementBlock("span", _hoisted_39$1, [ze[36] || (ze[36] = createTextVNode("[ ")), createBaseVNode("a", {
            href: "#",
            onClick: withModifiers(as => rs.deleteList(ns.id), ["prevent"]),
            class: "text-danger"
        }, "x", 8, _hoisted_40$1), ze[37] || (ze[37] = createTextVNode(" ]"))]))], 64))], 64))])) : createCommentVNode("", !0)], 2))), 128))]),
        _: 1
    })])) : createCommentVNode("", !0)]), createVNode(is, {
        show: ss.modal,
        onClose: ze[17] || (ze[17] = ns => ss.modal = !1)
    }, {
        header: withCtx(() => ze[41] || (ze[41] = [createBaseVNode("h4", null, "Error", -1)])),
        body: withCtx(() => [createBaseVNode("span", {
            innerHTML: ss.modalBodyText
        }, null, 8, _hoisted_41)]),
        footer: withCtx(() => [createBaseVNode("div", _hoisted_42, [createBaseVNode("button", {
            class: "btn btn-block",
            onClick: ze[16] || (ze[16] = ns => ss.modal = !1)
        }, "Ok")])]),
        _: 1
    }, 8, ["show"])])
}
const ListManager = _export_sfc(_sfc_main$a, [
        ["render", _sfc_render$6]
    ]),
    reviewStruct = {
        rating: null,
        anonymous: !1,
        review_headline: "",
        review_good: "",
        review_bad: "",
        review_bottomline: "",
        dirty: !1,
        new: !0
    },
    _sfc_main$9 = {
        props: {
            authenticated: {
                type: Boolean,
                default: !1
            },
            userScore: {
                type: Number,
                default: 0
            },
            userPlatform: {
                type: Number
            },
            userReviews: {
                type: Object
            },
            userLists: {
                type: Array
            },
            actionUrl: {
                type: String
            },
            listActionUrl: {
                type: String
            },
            listAddUrl: {
                type: String
            },
            playlistUrl: {
                type: String
            },
            loginUrl: {
                type: String
            },
            csrfToken: {
                type: String
            },
            platforms: {
                type: Array
            },
            gameId: {
                type: Number
            },
            userId: {
                type: Number
            },
            coverUrl: {
                type: String
            }
        },
        data() {
            return {
                starsStyle: {
                    "--rating": this.mobyScore
                },
                displayedScore: this.userScore,
                originalReviews: null,
                reviews: Object.assign(Object.fromEntries(this.platforms.map(es => [es.id, { ...reviewStruct
                }])), this.userReviews),
                selectedPlatformId: this.userPlatform,
                selectedReviewPlatformId: this.userPlatform,
                hoverScore: 0,
                isReviewing: !1,
                reviewed: !1,
                modal: !1,
                modalBodyText: "",
                numReviews: 0,
                reviewUrl: null,
                isViewingLists: !1,
                listTitle: "",
                privateList: !1,
                lists: this.userLists,
                hasCollectedGame: !1
            }
        },
        created() {
            Object.keys(this.reviews).length === 0 && (this.reviews[this.selectedPlatformId] = { ...reviewStruct
            }), this.originalReviews = JSON.parse(JSON.stringify(this.reviews)), Object.keys(this.userReviews).length > 0 && (this.numReviews = Object.keys(this.userReviews).length), this.numReviews > 0 && (this.selectedReviewPlatformId = parseInt(Object.keys(this.userReviews)[0], 10)), this.checkIfCollected(!0), this.lists.length > 0 && this.lists.sort((es, ze) => {
                const ts = this.descOrder ? es.name.toUpperCase() : ze.name.toUpperCase(),
                    os = this.descOrder ? ze.name.toUpperCase() : es.name.toUpperCase();
                return ts > os ? -1 : ts < os ? 1 : 0
            }), window.addEventListener("click", es => {
                this.$el.contains(es.target) || (this.isViewingLists = !1, this.isReviewing && (this.selectedReview.review_headline || this.selectedReview.review_good || this.selectedReview.review_bad || this.selectedReview.review_bottomline || this.cancelReview()))
            })
        },
        watch: {
            selectedReview: {
                handler(es, ze) {
                    this.isReviewing && es === ze ? this.selectedReview.dirty = !0 : this.selectedReview.rating === null && (this.selectedReview.rating = this.displayedScore)
                },
                deep: !0
            }
        },
        computed: {
            userScoreLabel() {
                return this.isReviewing && (!this.hasReview || this.selectedReview.dirty) ? "Reviewing" : this.hasReview ? "Your Score" : "Review"
            },
            reviewButtonLabel() {
                return this.selectedReview.review_headline || this.selectedReview.review_good || this.selectedReview.review_bad || this.selectedReview.review_bottomline ? "Review" : "Rating Alone"
            },
            starsStyleUser() {
                return `--rating: ${this.displayedScore}`
            },
            userScoreTitle() {
                return this.hoverScore > 0 ? `Award ${this.hoverScore} stars` : this.displayedScore > 0 && this.numReviews > 1 && !this.isReviewing ? `You rated this an average of ${this.displayedScore} stars` : this.displayedScore > 0 ? `You rated this ${this.displayedScore} stars` : "You haven't rated this yet"
            },
            selectedReview() {
                return this.reviews[this.selectedReviewPlatformId]
            },
            hasReview() {
                return !!(this.selectedReview && (typeof this.selectedReview.rating == "number" || this.selectedReview.review_headline))
            },
            averageScore() {
                const es = Object.values(this.reviews).filter(ts => ts.rating !== null).map(ts => ts.rating);
                return (es.reduce((ts, os) => ts + os, 0) / es.length).toFixed(1)
            }
        },
        methods: {
            toggleLists() {
                if (this.isReviewing && (this.isReviewing = !1), !this.authenticated) {
                    this.showModal(`Please <a href="${this.loginUrl}">log in</a> to collect games.`);
                    return
                }
                this.isViewingLists = !this.isViewingLists
            },
            checkIfCollected(es = !1) {
                let ze = !1;
                this.lists.some(ts => (ze = ts.games.find(({
                    game_id: os
                }) => os === this.gameId), !!ze)), ze ? (this.hasCollectedGame = !0, es && !ze.platforms.includes(this.selectedPlatformId) && (this.selectedPlatformId = ze.platforms[0])) : this.hasCollectedGame = !1
            },
            getGameInList(es) {
                return es.games.find(({
                    game_id: ze
                }) => ze === this.gameId)
            },
            hasGameAndPlatformInList(es) {
                const ze = this.getGameInList(es);
                return !!(ze && ze.platforms.includes(this.selectedPlatformId))
            },
            async toggleGameInList(es) {
                if (!this.authenticated) {
                    this.showModal(`Please <a href="${this.loginUrl}">log in</a> to use this.`);
                    return
                }
                let ze = "add";
                if (this.hasGameAndPlatformInList(es)) {
                    const rs = this.getGameInList(es),
                        is = {};
                    if (Array.from(rs.platforms).forEach(as => {
                            is[as] = (is[as] || 0) + 1
                        }), is[this.selectedPlatformId] > 1) {
                        this.showModal(`You have multiple copies of this game in your list. You can select which one to remove via the <a href="${es.internal_url}">list view</a>.`), this.isLoading = !1;
                        return
                    }
                    ze = "remove"
                }
                const {
                    onSubmit: ts
                } = useFetch(this.$props), os = {
                    list_id: es.id,
                    platform_id: this.selectedPlatformId,
                    action: ze,
                    game_id: this.gameId
                };
                if (await ts(this.listActionUrl, os)) {
                    if (ze === "remove") {
                        const rs = this.getGameInList(es);
                        rs.platforms = rs.platforms.filter(is => is !== this.selectedPlatformId), rs.platforms.length === 0 && (es.games = es.games.filter(is => is.game_id !== this.gameId))
                    } else {
                        const rs = this.getGameInList(es);
                        rs ? rs.platforms.push(this.selectedPlatformId) : es.games.push({
                            game_id: this.gameId,
                            platforms: [this.selectedPlatformId]
                        })
                    }
                    this.isLoading = !1, this.checkIfCollected()
                }
            },
            async addList() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    _csrf_token: this.csrfToken,
                    name: this.listTitle,
                    description: "",
                    private: this.privateList,
                    purchase_private: !1
                };
                await ze(this.listAddUrl, ts) ? (this.listTitle = "", this.lists.push(es.data.list), this.$refs.addListToggle.removeAttribute("open")) : console.error(es.errors)
            },
            onStarHover(es) {
                (this.displayedScore === 0 || this.isReviewing) && (this.hoverScore = es)
            },
            showReview(es) {
                if (this.isViewingLists && (this.isViewingLists = !1), !this.authenticated) {
                    this.showModal(`Please <a href="${this.loginUrl}">log in</a> to review games.`);
                    return
                }(es && this.displayedScore === 0 || this.isReviewing) && (this.selectedReview.rating = es, this.displayedScore = es), this.isReviewing = !0
            },
            isReviewed(es) {
                return !this.reviews[es].new
            },
            mobystars(es) {
                return this.reviews[es].new ? "" : `<span class="stars stars-sm" style="--rating: ${this.reviews[es].rating}"></span>`
            },
            reset() {
                this.reviews = JSON.parse(JSON.stringify(this.originalReviews)), this.displayedScore = this.userScore, this.isReviewing = !1
            },
            cancelReview() {
                this.reset()
            },
            async deleteReview() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    _delete_review: !0,
                    value: this.selectedReview.rating,
                    anonymous: this.selectedReview.anonymous,
                    hidden: !1,
                    user_id: this.userId,
                    game_id: this.gameId,
                    platform_id: this.selectedReviewPlatformId
                };
                if (await ze(this.actionUrl, ts)) this.isReviewing = !1, this.reviews[this.selectedReviewPlatformId] = { ...reviewStruct
                }, this.numReviews = Object.keys(this.reviews).filter(ss => !this.reviews[ss].new).length, this.displayedScore = 0;
                else {
                    let ss = '<ul class="list-group">';
                    Object.values(es.errors).forEach(rs => {
                        ss = ss.concat("<li>", rs, "</li>")
                    }), this.showModal(ss.concat("</ul>"))
                }
            },
            async submitReview() {
                const {
                    result: es,
                    onSubmit: ze
                } = useFetch(this.$props), ts = {
                    _update_review_text: !0,
                    value: this.selectedReview.rating,
                    anonymous: this.selectedReview.anonymous,
                    hidden: !1,
                    user_id: this.userId,
                    game_id: this.gameId,
                    platform_id: this.selectedReviewPlatformId,
                    review_good: this.selectedReview.review_good,
                    review_bad: this.selectedReview.review_bad,
                    review_bottomline: this.selectedReview.review_bottomline,
                    review_headline: this.selectedReview.review_headline
                };
                if (await ze(this.actionUrl, ts)) this.reviewed = !0, this.isReviewing = !1, this.reviewUrl = es.data.url, this.selectedReview.new = !1, this.numReviews = Object.keys(this.reviews).filter(ss => !this.reviews[ss].new).length;
                else {
                    let ss = '<ul class="list-group">';
                    Object.values(es.errors).forEach(rs => {
                        ss = ss.concat("<li>", rs, "</li>")
                    }), this.showModal(ss.concat("</ul>"))
                }
            },
            showModal(es) {
                this.modal = !0, this.modalBodyText = es
            }
        }
    },
    _hoisted_1$7 = {
        class: "position-relative h100 hide-sm"
    },
    _hoisted_2$7 = {
        class: "flex h100"
    },
    _hoisted_3$6 = ["data-tooltip"],
    _hoisted_4$6 = {
        key: 0,
        class: "no-select"
    },
    _hoisted_5$5 = {
        key: 1
    },
    _hoisted_6$5 = {
        key: 2,
        class: "no-select"
    },
    _hoisted_7$4 = {
        key: 0,
        class: "icon icon-game",
        style: {
            display: "inline-block",
            width: "16px",
            height: "18px"
        },
        alt: "Missing game cover"
    },
    _hoisted_8$4 = ["src"],
    _hoisted_9$3 = {
        key: 0,
        class: "bg-highlight form-review"
    },
    _hoisted_10$3 = {
        style: {
            display: "flex",
            "align-items": "baseline"
        }
    },
    _hoisted_11$3 = {
        key: 1,
        class: "list-group"
    },
    _hoisted_12$3 = {
        class: "flex flex-space-between p-1"
    },
    _hoisted_13$2 = {
        class: "text-ellipsis"
    },
    _hoisted_14$2 = ["onClick"],
    _hoisted_15$2 = {
        key: 0,
        class: "text-success"
    },
    _hoisted_16$2 = {
        class: "text-muted text-nowrap"
    },
    _hoisted_17$2 = ["href"],
    _hoisted_18$1 = {
        key: 2,
        class: "mb-sm"
    },
    _hoisted_19$1 = {
        ref: "addListToggle",
        class: "text-left"
    },
    _hoisted_20$1 = {
        class: "form-group text-left mt-sm mb-sm"
    },
    _hoisted_21$1 = {
        class: "form-group text-left mb-0"
    },
    _hoisted_22$1 = {
        class: "form-checkbox text-sm mb-1"
    },
    _hoisted_23 = {
        key: 1,
        class: "bg-highlight form-review"
    },
    _hoisted_24 = ["innerHTML"],
    _hoisted_25 = {
        style: {
            display: "flex",
            "align-items": "baseline"
        }
    },
    _hoisted_26 = ["innerHTML"],
    _hoisted_27 = {
        key: 1
    },
    _hoisted_28 = {
        class: "form-group mb-sm"
    },
    _hoisted_29 = {
        class: "form-group mb-sm"
    },
    _hoisted_30 = {
        class: "form-group mb-sm"
    },
    _hoisted_31 = {
        class: "form-group mb-sm"
    },
    _hoisted_32 = {
        class: "form-group mb-sm"
    },
    _hoisted_33 = {
        class: "form-checkbox"
    },
    _hoisted_34 = {
        class: "flex"
    },
    _hoisted_35 = {
        key: 2,
        class: "form-review text-center"
    },
    _hoisted_36 = {
        class: "text-bold"
    },
    _hoisted_37 = ["href"],
    _hoisted_38 = {
        class: "flex"
    },
    _hoisted_39 = ["href"],
    _hoisted_40 = ["innerHTML"];

function _sfc_render$5(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("v-select"),
        ns = resolveComponent("modal");
    return openBlock(), createElementBlock("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$7, [createBaseVNode("div", {
        class: normalizeClass(["width-max-content flex-center me border border-xxs border-bottom-none", {
            "bg-highlight": ss.isReviewing
        }]),
        "data-tooltip": rs.userScoreTitle
    }, [createBaseVNode("div", null, [createBaseVNode("b", null, toDisplayString(rs.userScoreLabel), 1), ze[36] || (ze[36] = createBaseVNode("br", null, null, -1)), ss.numReviews > 1 && !ss.isReviewing ? (openBlock(), createElementBlock("div", _hoisted_4$6, [createBaseVNode("a", {
        href: "#",
        onClick: ze[0] || (ze[0] = withModifiers(as => rs.showReview(), ["stop", "prevent"]))
    }, toDisplayString(rs.averageScore) + "/5 Average", 1)])) : ss.displayedScore > 0 && !ss.isReviewing ? (openBlock(), createElementBlock("div", _hoisted_5$5, [createBaseVNode("a", {
        href: "#",
        class: "stars stars-sm",
        style: normalizeStyle(rs.starsStyleUser),
        onClick: ze[1] || (ze[1] = withModifiers(as => rs.showReview(), ["stop", "prevent"]))
    }, null, 4)])) : (openBlock(), createElementBlock("div", _hoisted_6$5, [createBaseVNode("a", {
        href: "#",
        onMouseover: ze[2] || (ze[2] = as => rs.onStarHover(5)),
        onMouseleave: ze[3] || (ze[3] = as => rs.onStarHover(0)),
        onClick: ze[4] || (ze[4] = withModifiers(as => rs.showReview(5), ["prevent"])),
        class: normalizeClass(["score", {
            "score-selected": rs.selectedReview.rating == 5 && ss.hoverScore == 0
        }])
    }, "★", 34), createBaseVNode("a", {
        href: "#",
        onMouseover: ze[5] || (ze[5] = as => rs.onStarHover(4)),
        onMouseleave: ze[6] || (ze[6] = as => rs.onStarHover(0)),
        onClick: ze[7] || (ze[7] = withModifiers(as => rs.showReview(4), ["prevent"])),
        class: normalizeClass(["score", {
            "score-selected": rs.selectedReview.rating >= 4 && ss.hoverScore == 0
        }])
    }, "★", 34), createBaseVNode("a", {
        href: "#",
        onMouseover: ze[8] || (ze[8] = as => rs.onStarHover(3)),
        onMouseleave: ze[9] || (ze[9] = as => rs.onStarHover(0)),
        onClick: ze[10] || (ze[10] = withModifiers(as => rs.showReview(3), ["prevent"])),
        class: normalizeClass(["score", {
            "score-selected": rs.selectedReview.rating >= 3 && ss.hoverScore == 0
        }])
    }, "★", 34), createBaseVNode("a", {
        href: "#",
        onMouseover: ze[11] || (ze[11] = as => rs.onStarHover(2)),
        onMouseleave: ze[12] || (ze[12] = as => rs.onStarHover(0)),
        onClick: ze[13] || (ze[13] = withModifiers(as => rs.showReview(2), ["prevent"])),
        class: normalizeClass(["score", {
            "score-selected": rs.selectedReview.rating >= 2 && ss.hoverScore == 0
        }])
    }, "★", 34), createBaseVNode("a", {
        href: "#",
        onMouseover: ze[14] || (ze[14] = as => rs.onStarHover(1)),
        onMouseleave: ze[15] || (ze[15] = as => rs.onStarHover(0)),
        onClick: ze[16] || (ze[16] = withModifiers(as => rs.showReview(1), ["prevent"])),
        class: normalizeClass(["score", {
            "score-selected": rs.selectedReview.rating >= 1 && ss.hoverScore == 0
        }])
    }, "★", 34)]))])], 10, _hoisted_3$6), createBaseVNode("div", {
        class: normalizeClass(["flex-center border border-xxs border-bottom-none", {
            "bg-highlight": ss.isViewingLists
        }])
    }, [createBaseVNode("div", null, [ss.hasCollectedGame ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [ze[37] || (ze[37] = createBaseVNode("b", {
        class: "text-success"
    }, "Collected", -1)), ze[38] || (ze[38] = createBaseVNode("br", null, null, -1)), ts.coverUrl === "None" ? (openBlock(), createElementBlock("span", _hoisted_7$4)) : (openBlock(), createElementBlock("img", {
        key: 1,
        src: ts.coverUrl,
        class: "img-thumbnail-box img-thumbnail-xs",
        alt: "Game cover"
    }, null, 8, _hoisted_8$4)), ze[39] || (ze[39] = createTextVNode()), createBaseVNode("a", {
        href: "#",
        onClick: ze[17] || (ze[17] = withModifiers((...as) => rs.toggleLists && rs.toggleLists(...as), ["prevent"]))
    }, "Edit")], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [ze[40] || (ze[40] = createBaseVNode("b", null, "Add To", -1)), ze[41] || (ze[41] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
        href: "#",
        onClick: ze[18] || (ze[18] = withModifiers((...as) => rs.toggleLists && rs.toggleLists(...as), ["prevent"]))
    }, "Collection")], 64))])], 2)]), ss.isViewingLists ? (openBlock(), createElementBlock("div", _hoisted_9$3, [ts.platforms.length > 1 ? (openBlock(), createBlock(is, {
        key: 0,
        name: "platform",
        class: "mb-sm",
        modelValue: ss.selectedPlatformId,
        "onUpdate:modelValue": ze[19] || (ze[19] = as => ss.selectedPlatformId = as),
        placeholder: "Platform",
        label: "name",
        reduce: as => as.id,
        options: ts.platforms
    }, {
        option: withCtx(({
            name: as,
            release_date: cs
        }) => [createTextVNode(toDisplayString(as) + " (" + toDisplayString(cs.split("-")[0]) + ") ", 1)]),
        "selected-option": withCtx(({
            name: as,
            release_date: cs
        }) => [createBaseVNode("div", _hoisted_10$3, toDisplayString(as) + " (" + toDisplayString(cs.split("-")[0]) + ") ", 1)]),
        _: 1
    }, 8, ["modelValue", "reduce", "options"])) : createCommentVNode("", !0), ze[47] || (ze[47] = createBaseVNode("p", null, " Add this game to your collection: ", -1)), ss.lists.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_11$3, [(openBlock(!0), createElementBlock(Fragment, null, renderList(ss.lists, as => (openBlock(), createElementBlock("li", _hoisted_12$3, [createBaseVNode("span", _hoisted_13$2, [createBaseVNode("a", {
        href: "#",
        onClick: withModifiers(cs => rs.toggleGameInList(as), ["prevent"])
    }, [rs.hasGameAndPlatformInList(as) ? (openBlock(), createElementBlock("span", _hoisted_15$2, "✓")) : createCommentVNode("", !0), createTextVNode(" " + toDisplayString(as.name), 1)], 8, _hoisted_14$2), createTextVNode(" (" + toDisplayString(as.games.length) + ") ", 1), as.private ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createTextVNode(" (private) ")], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(" (public) ")], 64))]), createBaseVNode("span", _hoisted_16$2, [ze[42] || (ze[42] = createTextVNode(" [ ")), createBaseVNode("a", {
        href: as.internal_url
    }, "view list", 8, _hoisted_17$2), ze[43] || (ze[43] = createTextVNode(" ] "))])]))), 256))])) : createCommentVNode("", !0), ss.lists.length > 0 ? (openBlock(), createElementBlock("hr", _hoisted_18$1)) : createCommentVNode("", !0), createBaseVNode("details", _hoisted_19$1, [ze[46] || (ze[46] = createBaseVNode("summary", {
        class: "no-select text-sm"
    }, "Add New List", -1)), createBaseVNode("form", {
        onSubmit: ze[22] || (ze[22] = withModifiers((...as) => rs.addList && rs.addList(...as), ["prevent"]))
    }, [createBaseVNode("div", _hoisted_20$1, [withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": ze[20] || (ze[20] = as => ss.listTitle = as),
        class: "form-input form-input-sm text-sm",
        placeholder: "Title",
        maxlength: "40",
        required: ""
    }, null, 512), [
        [vModelText, ss.listTitle]
    ])]), createBaseVNode("div", _hoisted_21$1, [createBaseVNode("label", _hoisted_22$1, [withDirectives(createBaseVNode("input", {
        name: "private",
        type: "checkbox",
        "onUpdate:modelValue": ze[21] || (ze[21] = as => ss.privateList = as)
    }, null, 512), [
        [vModelCheckbox, ss.privateList]
    ]), ze[44] || (ze[44] = createTextVNode(" Private "))]), ze[45] || (ze[45] = createBaseVNode("button", {
        class: "btn btn-xs btn-primary"
    }, "Add New List", -1))])], 32)], 512)])) : createCommentVNode("", !0), ss.isReviewing ? (openBlock(), createElementBlock("div", _hoisted_23, [ts.platforms.length > 1 ? (openBlock(), createBlock(is, {
        key: 0,
        name: "platform",
        class: "mb-sm",
        modelValue: ss.selectedReviewPlatformId,
        "onUpdate:modelValue": ze[23] || (ze[23] = as => ss.selectedReviewPlatformId = as),
        placeholder: "Platform",
        label: "name",
        reduce: as => as.id,
        options: ts.platforms
    }, {
        option: withCtx(({
            id: as,
            name: cs,
            release_date: fs
        }) => [createTextVNode(toDisplayString(cs) + " (" + toDisplayString(fs.split("-")[0]) + ") ", 1), createBaseVNode("span", {
            innerHTML: rs.mobystars(as)
        }, null, 8, _hoisted_24)]),
        "selected-option": withCtx(({
            id: as,
            name: cs,
            release_date: fs
        }) => [createBaseVNode("div", _hoisted_25, [createTextVNode(toDisplayString(cs) + " (" + toDisplayString(fs.split("-")[0]) + ") ", 1), createBaseVNode("span", {
            innerHTML: rs.mobystars(as)
        }, null, 8, _hoisted_26)])]),
        _: 1
    }, 8, ["modelValue", "reduce", "options"])) : createCommentVNode("", !0), rs.selectedReview.new ? (openBlock(), createElementBlock("p", _hoisted_27, [ze[48] || (ze[48] = createTextVNode(" You can ")), createBaseVNode("a", {
        href: "#",
        onClick: ze[24] || (ze[24] = withModifiers((...as) => rs.submitReview && rs.submitReview(...as), ["prevent"]))
    }, "submit your rating (" + toDisplayString(rs.selectedReview.rating) + "/5) by itself", 1), ze[49] || (ze[49] = createTextVNode(", or even better, add your review: "))])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_28, [ze[50] || (ze[50] = createBaseVNode("small", {
        class: "text-muted"
    }, "Headline / Summary", -1)), ze[51] || (ze[51] = createBaseVNode("br", null, null, -1)), withDirectives(createBaseVNode("input", {
        type: "text",
        "onUpdate:modelValue": ze[25] || (ze[25] = as => rs.selectedReview.review_headline = as),
        name: "review_headline",
        class: "form-input",
        maxlength: "80"
    }, null, 512), [
        [vModelText, rs.selectedReview.review_headline]
    ])]), createBaseVNode("div", _hoisted_29, [ze[52] || (ze[52] = createBaseVNode("small", {
        class: "text-muted"
    }, "The Good", -1)), ze[53] || (ze[53] = createBaseVNode("br", null, null, -1)), withDirectives(createBaseVNode("textarea", {
        "onUpdate:modelValue": ze[26] || (ze[26] = as => rs.selectedReview.review_good = as),
        class: "form-input",
        rows: "3"
    }, null, 512), [
        [vModelText, rs.selectedReview.review_good]
    ])]), createBaseVNode("div", _hoisted_30, [ze[54] || (ze[54] = createBaseVNode("small", {
        class: "text-muted"
    }, "The Bad", -1)), ze[55] || (ze[55] = createBaseVNode("br", null, null, -1)), withDirectives(createBaseVNode("textarea", {
        "onUpdate:modelValue": ze[27] || (ze[27] = as => rs.selectedReview.review_bad = as),
        class: "form-input",
        rows: "3"
    }, null, 512), [
        [vModelText, rs.selectedReview.review_bad]
    ])]), createBaseVNode("div", _hoisted_31, [ze[56] || (ze[56] = createBaseVNode("small", {
        class: "text-muted"
    }, "The Bottom Line", -1)), ze[57] || (ze[57] = createBaseVNode("br", null, null, -1)), withDirectives(createBaseVNode("textarea", {
        "onUpdate:modelValue": ze[28] || (ze[28] = as => rs.selectedReview.review_bottomline = as),
        class: "form-input",
        rows: "3"
    }, null, 512), [
        [vModelText, rs.selectedReview.review_bottomline]
    ])]), createBaseVNode("div", _hoisted_32, [createBaseVNode("label", _hoisted_33, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": ze[29] || (ze[29] = as => rs.selectedReview.anonymous = as),
        name: "anonymous"
    }, null, 512), [
        [vModelCheckbox, rs.selectedReview.anonymous]
    ]), ze[58] || (ze[58] = createTextVNode(" Anonymous "))])]), ze[59] || (ze[59] = createBaseVNode("p", {
        class: "text-muted text-sm"
    }, [createBaseVNode("b", null, "Note:"), createTextVNode(" We currently only support English reviews. Non-English will be removed. ")], -1)), createBaseVNode("div", _hoisted_34, [createBaseVNode("button", {
        class: "btn btn-sm btn-block me-sm",
        onClick: ze[30] || (ze[30] = (...as) => rs.cancelReview && rs.cancelReview(...as))
    }, "Cancel"), rs.selectedReview.new ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "btn btn-sm btn-primary btn-block",
        onClick: ze[31] || (ze[31] = (...as) => rs.submitReview && rs.submitReview(...as))
    }, "Submit " + toDisplayString(rs.reviewButtonLabel), 1)) : createCommentVNode("", !0), rs.hasReview && rs.selectedReview.dirty && !rs.selectedReview.new ? (openBlock(), createElementBlock("button", {
        key: 1,
        class: "btn btn-sm btn-warning btn-block",
        onClick: ze[32] || (ze[32] = (...as) => rs.submitReview && rs.submitReview(...as))
    }, "Edit Review")) : createCommentVNode("", !0), rs.hasReview && !rs.selectedReview.dirty && !rs.selectedReview.new ? (openBlock(), createElementBlock("button", {
        key: 2,
        class: "btn btn-sm btn-danger btn-block",
        onClick: ze[33] || (ze[33] = (...as) => rs.deleteReview && rs.deleteReview(...as))
    }, "Delete Review")) : createCommentVNode("", !0)])])) : createCommentVNode("", !0), ss.reviewed ? (openBlock(), createElementBlock("div", _hoisted_35, [ze[61] || (ze[61] = createBaseVNode("h4", null, "Thanks!", -1)), createBaseVNode("p", _hoisted_36, [rs.selectedReview.review ? (openBlock(), createElementBlock(Fragment, {
        key: 0
    }, [createBaseVNode("a", {
        href: ss.reviewUrl
    }, "Your review", 8, _hoisted_37), ze[60] || (ze[60] = createTextVNode(" has been posted. "))], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
    }, [createTextVNode(" You rating has been recorded. ")], 64))]), createBaseVNode("div", _hoisted_38, [createBaseVNode("button", {
        class: "btn btn-sm btn-block me-sm",
        onClick: ze[34] || (ze[34] = as => ss.reviewed = !ss.reviewed)
    }, "Close"), createBaseVNode("a", {
        href: ss.reviewUrl,
        class: "btn btn-sm btn-primary btn-block"
    }, "View", 8, _hoisted_39)])])) : createCommentVNode("", !0), createVNode(ns, {
        show: ss.modal,
        onClose: ze[35] || (ze[35] = as => ss.modal = !1)
    }, {
        header: withCtx(() => ze[62] || (ze[62] = [createBaseVNode("h4", {
            class: "text-danger"
        }, "Error", -1)])),
        body: withCtx(() => [createBaseVNode("span", {
            innerHTML: ss.modalBodyText
        }, null, 8, _hoisted_40)]),
        _: 1
    }, 8, ["show"])])
}
const PlayerTools = _export_sfc(_sfc_main$9, [
        ["render", _sfc_render$5]
    ]),
    _sfc_main$8 = {
        __name: "Random",
        props: {
            uri: {
                type: String,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                ts = (os, ss) => {
                    if (!(os.target.nodeName === "INPUT" || os.target.nodeName === "TEXTAREA")) switch (ss) {
                        case "ArrowLeft":
                            window.history.go(-1);
                            break;
                        case "ArrowRight":
                            window.location.href = `/random/${ze.uri}/`;
                            break
                    }
                };
            return onMounted(() => {
                window.addEventListener("keyup", os => {
                    ts(os, os.code)
                })
            }), (os, ss) => (openBlock(), createElementBlock("div"))
        }
    },
    _hoisted_1$6 = {
        key: 0,
        class: "width-max-content no-select"
    },
    _hoisted_2$6 = {
        key: 1
    },
    _sfc_main$7 = {
        __name: "RateGame",
        props: {
            csrfToken: {
                type: String,
                required: !0
            },
            actionUrl: {
                type: String,
                required: !0
            },
            userId: {
                type: Number,
                required: !0
            },
            gameId: {
                type: Number,
                required: !0
            },
            platformId: {
                type: Number,
                required: !0
            },
            ratingOrig: {
                type: Number,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                ts = ref(ze.ratingOrig),
                os = ref(0),
                {
                    result: ss,
                    onSubmit: rs
                } = useFetch(ze),
                is = async as => {
                    const cs = {
                        value: as,
                        anonymous: !1,
                        hidden: !1,
                        user_id: ze.userId,
                        game_id: ze.gameId,
                        platform_id: ze.platformId,
                        review_good: "",
                        review_bad: "",
                        review_bottomline: "",
                        review_headline: ""
                    };
                    await rs(ze.actionUrl, cs) ? (ts.value = as, os.value = 0) : console.error(ss.error)
                },
                ns = as => {
                    os.value = as
                };
            return (as, cs) => unref(ss).loading ? (openBlock(), createElementBlock("div", _hoisted_2$6, cs[15] || (cs[15] = [createBaseVNode("small", {
                class: "text-muted"
            }, "Saving...", -1)]))) : (openBlock(), createElementBlock("div", _hoisted_1$6, [createBaseVNode("a", {
                href: "#",
                onMouseover: cs[0] || (cs[0] = fs => ns(5)),
                onMouseleave: cs[1] || (cs[1] = fs => ns(0)),
                onClick: cs[2] || (cs[2] = withModifiers(fs => is(5), ["prevent"])),
                class: normalizeClass(["score", {
                    "score-selected": ts.value == 5 && os.value == 0
                }])
            }, "★", 34), createBaseVNode("a", {
                href: "#",
                onMouseover: cs[3] || (cs[3] = fs => ns(4)),
                onMouseleave: cs[4] || (cs[4] = fs => ns(0)),
                onClick: cs[5] || (cs[5] = withModifiers(fs => is(4), ["prevent"])),
                class: normalizeClass(["score", {
                    "score-selected": ts.value >= 4 && os.value == 0
                }])
            }, "★", 34), createBaseVNode("a", {
                href: "#",
                onMouseover: cs[6] || (cs[6] = fs => ns(3)),
                onMouseleave: cs[7] || (cs[7] = fs => ns(0)),
                onClick: cs[8] || (cs[8] = withModifiers(fs => is(3), ["prevent"])),
                class: normalizeClass(["score", {
                    "score-selected": ts.value >= 3 && os.value == 0
                }])
            }, "★", 34), createBaseVNode("a", {
                href: "#",
                onMouseover: cs[9] || (cs[9] = fs => ns(2)),
                onMouseleave: cs[10] || (cs[10] = fs => ns(0)),
                onClick: cs[11] || (cs[11] = withModifiers(fs => is(2), ["prevent"])),
                class: normalizeClass(["score", {
                    "score-selected": ts.value >= 2 && os.value == 0
                }])
            }, "★", 34), createBaseVNode("a", {
                href: "#",
                onMouseover: cs[12] || (cs[12] = fs => ns(1)),
                onMouseleave: cs[13] || (cs[13] = fs => ns(0)),
                onClick: cs[14] || (cs[14] = withModifiers(fs => is(1), ["prevent"])),
                class: normalizeClass(["score", {
                    "score-selected": ts.value >= 1 && os.value == 0
                }])
            }, "★", 34)]))
        }
    },
    _hoisted_1$5 = {
        class: "text-sm mt border border-1 border-radius bg-highlight"
    },
    _hoisted_2$5 = {
        key: 0,
        class: "mb-0"
    },
    _hoisted_3$5 = {
        key: 1,
        class: "mb-0"
    },
    _hoisted_4$5 = {
        class: "flex flex-align-center"
    },
    _hoisted_5$4 = {
        key: 0,
        class: "loading text-normal"
    },
    _hoisted_6$4 = ["innerHTML"],
    _sfc_main$6 = {
        __name: "RateReview",
        props: {
            csrfToken: String,
            authenticated: Boolean,
            actionUrl: String,
            loginUrl: String,
            reviewId: Number,
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const ze = es,
                ts = ref(!1),
                os = ref(""),
                {
                    formData: ss,
                    result: rs,
                    onSubmit: is
                } = useFetch(ze),
                ns = async as => {
                    if (!ze.authenticated) {
                        ts.value = !0, os.value = `Please <a href="${ze.loginUrl}">log in</a> to rate reviews.`;
                        return
                    }
                    if (rs.loading) return;
                    let cs = as !== 0;
                    ss.score === as && (cs = -1);
                    const fs = {
                        helpful: cs,
                        review_id: ze.reviewId
                    };
                    await is(ze.actionUrl, fs) && (rs.data.result === "deleted" ? (ss.num_votes -= 1, ss.score === 1 && (ss.num_helpful -= 1), ss.score = -1) : (ss.score === -1 ? (ss.num_votes += 1, as === 1 && (ss.num_helpful += 1)) : (ss.score === 0 && as === 1 && (ss.num_helpful += 1), ss.score === 1 && as === 0 && (ss.num_helpful -= 1)), ss.score = as))
                };
            return (as, cs) => (openBlock(), createElementBlock("div", _hoisted_1$5, [unref(ss).num_votes > 0 ? (openBlock(), createElementBlock("p", _hoisted_2$5, toDisplayString(unref(ss).num_helpful) + " of " + toDisplayString(unref(ss).num_votes) + " Moby users rated this review helpful. ", 1)) : (openBlock(), createElementBlock("p", _hoisted_3$5, " Be the first to rate this review! ")), createBaseVNode("div", _hoisted_4$5, [cs[5] || (cs[5] = createBaseVNode("p", {
                class: "mb-0"
            }, [createBaseVNode("b", null, "Did you find this review helpful?")], -1)), createBaseVNode("button", {
                onClick: cs[0] || (cs[0] = fs => ns(1)),
                class: normalizeClass(["btn btn-thumb btn-thumb-sm flex-center text-bold", {
                    "btn-thumb-selected": unref(ss).score == 1,
                    "text-success": unref(ss).score == 1,
                    "btn-thumb-fade": unref(ss).score == 0
                }])
            }, cs[3] || (cs[3] = [createBaseVNode("span", {
                class: "icon icon-thumb-up"
            }, null, -1), createTextVNode(" YES ")]), 2), createBaseVNode("button", {
                onClick: cs[1] || (cs[1] = fs => ns(0)),
                class: normalizeClass(["btn btn-thumb btn-thumb-sm flex-center text-bold", {
                    "btn-thumb-selected": unref(ss).score == 0,
                    "text-danger": unref(ss).score == 0,
                    "btn-thumb-fade": unref(ss).score == 1
                }])
            }, cs[4] || (cs[4] = [createBaseVNode("span", {
                class: "icon icon-thumb-down"
            }, null, -1), createTextVNode(" NO ")]), 2), unref(rs).loading ? (openBlock(), createElementBlock("span", _hoisted_5$4, "Loading")) : createCommentVNode("", !0)]), createVNode(Modal, {
                show: ts.value,
                onClose: cs[2] || (cs[2] = fs => ts.value = !1)
            }, {
                header: withCtx(() => cs[6] || (cs[6] = [createBaseVNode("h4", {
                    class: "text-danger"
                }, "Error", -1)])),
                body: withCtx(() => [createBaseVNode("span", {
                    innerHTML: os.value
                }, null, 8, _hoisted_6$4)]),
                _: 1
            }, 8, ["show"])]))
        }
    },
    _sfc_main$5 = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            privacyUrl: {
                type: String,
                required: !0
            },
            termsUrl: {
                type: String,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup: useFetch
    },
    _hoisted_1$4 = {
        class: "form-group"
    },
    _hoisted_2$4 = {
        class: "form-group"
    },
    _hoisted_3$4 = {
        class: "form-group"
    },
    _hoisted_4$4 = {
        class: "form-group"
    },
    _hoisted_5$3 = {
        class: "form-group"
    },
    _hoisted_6$3 = {
        class: "form-checkbox"
    },
    _hoisted_7$3 = ["checked"],
    _hoisted_8$3 = {
        class: "form-group"
    },
    _hoisted_9$2 = {
        class: "form-checkbox"
    },
    _hoisted_10$2 = ["href"],
    _hoisted_11$2 = ["href"],
    _hoisted_12$2 = ["disabled"];

function _sfc_render$4(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[6] || (ze[6] = withModifiers(as => es.onSubmit(ts.actionUrl, es.formData), ["prevent"])),
        onChange: ze[7] || (ze[7] = (...as) => es.onChange && es.onChange(...as)),
        onInvalidCapture: ze[8] || (ze[8] = withModifiers((...as) => es.onInvalid && es.onInvalid(...as), ["prevent"])),
        class: "mb"
    }, [ze[16] || (ze[16] = createBaseVNode("h1", null, "Register", -1)), createBaseVNode("div", _hoisted_1$4, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input floating", {
            "border-danger": es.result.errors.display_name
        }]),
        name: "display_name",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => es.formData.display_name = as),
        placeholder: " ",
        minlength: "3",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.display_name]
    ]), ze[9] || (ze[9] = createBaseVNode("span", {
        class: "floating-label"
    }, "Display Name", -1)), es.result.errors.display_name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.display_name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_2$4, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input floating", {
            "border-danger": es.result.errors.user_name
        }]),
        name: "user_name",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => es.formData.user_name = as),
        placeholder: " ",
        minlength: "3",
        maxlength: "20",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.user_name]
    ]), ze[10] || (ze[10] = createBaseVNode("span", {
        class: "floating-label"
    }, "Username", -1)), es.result.errors.user_name ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.user_name
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_3$4, [withDirectives(createBaseVNode("input", {
        type: "email",
        class: normalizeClass(["form-input floating", {
            "border-danger": es.result.errors.email
        }]),
        name: "email",
        autocomplete: "username",
        "onUpdate:modelValue": ze[2] || (ze[2] = as => es.formData.email = as),
        placeholder: " ",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.email]
    ]), ze[11] || (ze[11] = createBaseVNode("span", {
        class: "floating-label"
    }, "Email", -1)), es.result.errors.email ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.email
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_4$4, [withDirectives(createBaseVNode("input", {
        type: "password",
        class: normalizeClass(["form-input floating", {
            "border-danger": es.result.errors.password
        }]),
        name: "password",
        autocomplete: "new-password",
        "onUpdate:modelValue": ze[3] || (ze[3] = as => es.formData.password = as),
        placeholder: " ",
        minlength: "6",
        maxlength: "255",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.password]
    ]), ze[12] || (ze[12] = createBaseVNode("span", {
        class: "floating-label"
    }, "Password", -1)), es.result.errors.password ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.password
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_5$3, [createBaseVNode("label", _hoisted_6$3, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "moby_mail_list",
        "onUpdate:modelValue": ze[4] || (ze[4] = as => es.formData.moby_mail_list = as),
        checked: es.formData.moby_mail_list
    }, null, 8, _hoisted_7$3), [
        [vModelCheckbox, es.formData.moby_mail_list]
    ]), ze[13] || (ze[13] = createTextVNode(" Subscribe to the MobyGames mailing list "))])]), createBaseVNode("div", _hoisted_8$3, [createBaseVNode("label", _hoisted_9$2, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "agree",
        "onUpdate:modelValue": ze[5] || (ze[5] = as => es.formData.agree = as),
        required: ""
    }, null, 512), [
        [vModelCheckbox, es.formData.agree]
    ]), createBaseVNode("span", null, [ze[14] || (ze[14] = createTextVNode("I agree to the MobyGames ")), createBaseVNode("a", {
        href: ts.termsUrl,
        target: "_blank"
    }, "Terms", 8, _hoisted_10$2), ze[15] || (ze[15] = createTextVNode(" & ")), createBaseVNode("a", {
        href: ts.privacyUrl,
        target: "_blank"
    }, "Privacy Policy", 8, _hoisted_11$2)])]), es.result.errors.agree ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.agree
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createVNode(ns, {
        error: es.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary",
        disabled: es.result.loading
    }, "Register", 8, _hoisted_12$2)], 32)
}
const Register = _export_sfc(_sfc_main$5, [
        ["render", _sfc_render$4]
    ]),
    _hoisted_1$3 = {
        class: "overflow-x-scroll mb"
    },
    _hoisted_2$3 = {
        class: "table table-striped"
    },
    _hoisted_3$3 = {
        key: 0
    },
    _hoisted_4$3 = {
        class: "text-center"
    },
    _hoisted_5$2 = {
        class: "text-center"
    },
    _hoisted_6$2 = {
        class: "text-center"
    },
    _hoisted_7$2 = {
        key: 0,
        class: "bg-highlight border-bottom"
    },
    _hoisted_8$2 = {
        key: 0,
        class: "text-muted"
    },
    _hoisted_9$1 = {
        class: "text-center text-sm"
    },
    _hoisted_10$1 = ["href"],
    _hoisted_11$1 = {
        class: "text-center text-sm"
    },
    _hoisted_12$1 = ["innerHTML", "data-tooltip"],
    _hoisted_13$1 = ["href"],
    _hoisted_14$1 = {
        class: "text-center text-sm"
    },
    _hoisted_15$1 = {
        class: "text-muted"
    },
    _hoisted_16$1 = {
        class: "text-center text-sm"
    },
    _hoisted_17$1 = ["href"],
    _hoisted_18 = {
        class: "text-center text-sm"
    },
    _hoisted_19 = ["innerHTML", "data-tooltip"],
    _hoisted_20 = ["href"],
    _hoisted_21 = {
        class: "text-center text-sm"
    },
    _hoisted_22 = {
        key: 0
    },
    _sfc_main$4 = {
        __name: "Reviews",
        props: {
            reviews: Array,
            mobyrank: Object,
            mobyScore: Number,
            criticScore: Number,
            usersScore: Number,
            url: String
        },
        setup(es) {
            const ze = es,
                ts = ref(8),
                os = {
                    0: "#888",
                    1: "#ff0000",
                    2: "#ff0000",
                    3: "#ff0000",
                    4: "#ff0000",
                    5: "#ff8000",
                    6: "#ffff00",
                    7: "#00ff00",
                    8: "#31ffec",
                    9: "#00bcff",
                    10: "#ff00ff"
                },
                ss = ps => `background: ${os[Math.floor(ps)]};`,
                rs = (ps, gs = !0, us = !1) => `<span class="stars${gs?" stars-sm":""}${us?" stars-10":""}" style="--rating: ${Math.round(ps*10)/10}"></span>`,
                is = ref("platform"),
                ns = ref(!0),
                as = ps => {
                    ps === is.value && (ns.value = !ns.value), is.value = ps
                },
                cs = computed(() => ze.reviews.sort((ps, gs) => {
                    if (is.value === "user_score") {
                        if ((ps.user_total.rating || 0) < (gs.user_total.rating || 0)) return ns.value ? 1 : -1;
                        if ((ps.user_total.rating || 0) > (gs.user_total.rating || 0)) return ns.value ? -1 : 1
                    } else if (is.value === "platform") {
                        if (ps.platform.toUpperCase() < gs.platform.toUpperCase()) return ns.value ? -1 : 1;
                        if (ps.platform.toUpperCase() > gs.platform.toUpperCase()) return ns.value ? 1 : -1
                    } else {
                        if ((ps[is.value] || 0) < (gs[is.value] || 0)) return ns.value ? 1 : -1;
                        if ((ps[is.value] || 0) > (gs[is.value] || 0)) return ns.value ? -1 : 1
                    }
                    return 0
                })),
                fs = ps => ze.mobyrank.platform_ranks.find(gs => gs.id === ps),
                vs = computed(() => ze.reviews.find(ps => ps.platform_id === null));
            return (ps, gs) => (openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("table", _hoisted_2$3, [es.reviews.length > 2 ? (openBlock(), createElementBlock("thead", _hoisted_3$3, [createBaseVNode("tr", null, [createBaseVNode("th", null, [createBaseVNode("a", {
                href: "#",
                onClick: gs[0] || (gs[0] = withModifiers(us => as("platform"), ["prevent"]))
            }, "Platform"), is.value === "platform" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ns.value,
                    "arrow-up": !ns.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_4$3, [createBaseVNode("a", {
                href: "#",
                onClick: gs[1] || (gs[1] = withModifiers(us => as("critic_score"), ["prevent"]))
            }, "Critics"), is.value === "critic_score" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ns.value,
                    "arrow-up": !ns.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_5$2, [createBaseVNode("a", {
                href: "#",
                onClick: gs[2] || (gs[2] = withModifiers(us => as("user_score"), ["prevent"]))
            }, "Players"), is.value === "user_score" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ns.value,
                    "arrow-up": !ns.value
                }])
            }, null, 2)) : createCommentVNode("", !0)]), createBaseVNode("th", _hoisted_6$2, [createBaseVNode("a", {
                href: "#",
                onClick: gs[3] || (gs[3] = withModifiers(us => as("moby_score"), ["prevent"]))
            }, "Moby Score"), is.value === "moby_score" ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow ms-1", {
                    "arrow-down": ns.value,
                    "arrow-up": !ns.value
                }])
            }, null, 2)) : createCommentVNode("", !0)])])])) : createCommentVNode("", !0), createBaseVNode("tbody", null, [es.reviews.length > 2 ? (openBlock(), createElementBlock("tr", _hoisted_7$2, [createBaseVNode("td", null, [gs[5] || (gs[5] = createBaseVNode("b", null, "Overall", -1)), gs[6] || (gs[6] = createBaseVNode("br", null, null, -1)), es.mobyrank.rank.rank ? (openBlock(), createElementBlock("small", _hoisted_8$2, " Ranked #" + toDisplayString(es.mobyrank.rank.rank.toLocaleString()) + " of " + toDisplayString(es.mobyrank.rank.total.toLocaleString()) + " games ", 1)) : createCommentVNode("", !0)]), createBaseVNode("td", _hoisted_9$1, [vs.value.num_critic_reviews > 0 && vs.value.critic_score ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createTextVNode(toDisplayString(vs.value.critic_score) + "%", 1), gs[7] || (gs[7] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
                href: es.url
            }, toDisplayString(vs.value.num_critic_reviews) + " ratings", 9, _hoisted_10$1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [gs[8] || (gs[8] = createBaseVNode("span", {
                class: "text-muted"
            }, "n/a", -1)), gs[9] || (gs[9] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(vs.value.num_critic_reviews) + " ratings ", 1)], 64))]), createBaseVNode("td", _hoisted_11$1, [vs.value.user_total.count > 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createBaseVNode("span", {
                innerHTML: rs(vs.value.user_total.rating),
                "data-tooltip": `${vs.value.user_total.rating} stars`
            }, null, 8, _hoisted_12$1), gs[10] || (gs[10] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
                href: es.url
            }, toDisplayString(vs.value.user_total.count) + " ratings", 9, _hoisted_13$1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [gs[11] || (gs[11] = createBaseVNode("span", {
                class: "text-muted"
            }, "n/a", -1)), gs[12] || (gs[12] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(vs.value.user_total.count) + " ratings ", 1)], 64))]), createBaseVNode("td", _hoisted_14$1, [vs.value.moby_score !== null ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "mobyscore mobyscore-lg",
                style: normalizeStyle(ss(vs.value.moby_score)),
                "data-tooltip": "Based on a bayesian average of critic and player ratings"
            }, toDisplayString(vs.value.moby_score), 5)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "mobyscore mobyscore-lg",
                style: normalizeStyle(ss(0)),
                "data-tooltip": "Not enough reviews available"
            }, " n/a ", 4))])])) : createCommentVNode("", !0), (openBlock(!0), createElementBlock(Fragment, null, renderList(cs.value.filter(us => us.platform_id !== null).slice(0, ts.value), us => (openBlock(), createElementBlock("tr", {
                key: us
            }, [createBaseVNode("td", null, [createTextVNode(toDisplayString(us.platform), 1), gs[13] || (gs[13] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", _hoisted_15$1, [fs(us.platform_id) ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createTextVNode(" Ranked #" + toDisplayString(fs(us.platform_id).rank.toLocaleString()) + " of " + toDisplayString(fs(us.platform_id).total.toLocaleString()) + " games ", 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [createTextVNode(" Unranked (needs more reviews) ")], 64))])]), createBaseVNode("td", _hoisted_16$1, [us.critic_score != null ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createTextVNode(toDisplayString(us.critic_score) + "%", 1), gs[14] || (gs[14] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
                href: us.reviews_url
            }, toDisplayString(us.num_critic_reviews) + " " + toDisplayString(us.num_critic_reviews === 1 ? "rating" : "ratings"), 9, _hoisted_17$1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [gs[15] || (gs[15] = createBaseVNode("span", {
                class: "text-muted"
            }, "n/a", -1)), gs[16] || (gs[16] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(us.num_critic_reviews) + " " + toDisplayString(us.num_critic_reviews === 1 ? "rating" : "ratings"), 1)], 64))]), createBaseVNode("td", _hoisted_18, [us.user_total.count > 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
            }, [createBaseVNode("span", {
                innerHTML: rs(us.user_total.rating),
                "data-tooltip": `${us.user_total.rating} stars`
            }, null, 8, _hoisted_19), gs[17] || (gs[17] = createBaseVNode("br", null, null, -1)), createBaseVNode("a", {
                href: us.reviews_url
            }, toDisplayString(us.user_total.count) + " " + toDisplayString(us.user_total.count === 1 ? "rating" : "ratings"), 9, _hoisted_20)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
            }, [gs[18] || (gs[18] = createBaseVNode("span", {
                class: "text-muted"
            }, "n/a", -1)), gs[19] || (gs[19] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(us.user_total.count) + " " + toDisplayString(us.user_total.count === 1 ? "rating" : "ratings"), 1)], 64))]), createBaseVNode("td", _hoisted_21, [us.moby_score !== null ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "mobyscore mobyscore-lg",
                style: normalizeStyle(ss(us.moby_score)),
                "data-tooltip": "Based on a bayesian average of critic and player ratings"
            }, toDisplayString(us.moby_score), 5)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "mobyscore mobyscore-lg",
                style: normalizeStyle(ss(0)),
                "data-tooltip": "Not enough reviews available"
            }, " n/a ", 4))])]))), 128))])]), ts.value < es.reviews.length ? (openBlock(), createElementBlock("p", _hoisted_22, [gs[20] || (gs[20] = createTextVNode(" [ ")), gs[21] || (gs[21] = createBaseVNode("span", {
                class: "arrow arrow-down ms-1"
            }, null, -1)), gs[22] || (gs[22] = createTextVNode()), createBaseVNode("a", {
                href: "#",
                onClick: gs[4] || (gs[4] = withModifiers(us => ts.value = es.reviews.length, ["prevent"]))
            }, toDisplayString(es.reviews.length - ts.value) + " More", 1), gs[23] || (gs[23] = createTextVNode(" ] "))])) : createCommentVNode("", !0)]))
        }
    },
    _sfc_main$3 = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const {
                formData: ze,
                result: ts,
                onSubmit: os,
                onChange: ss,
                onInvalid: rs
            } = useFetch(es);
            return {
                onCustomSubmit: async () => {
                    const ns = {
                        _csrf_token: es.csrfToken,
                        title: ze.title,
                        body: ze.body,
                        enabled: ze.enabled
                    };
                    os(es.actionUrl, ns, ze.delay)
                },
                onChange: ss,
                onInvalid: rs,
                formData: ze,
                result: ts
            }
        }
    },
    _hoisted_1$2 = {
        class: "form-group"
    },
    _hoisted_2$2 = {
        class: "form-group"
    },
    _hoisted_3$2 = {
        class: "form-group"
    },
    _hoisted_4$2 = {
        class: "form-group"
    },
    _hoisted_5$1 = {
        class: "form-group"
    },
    _hoisted_6$1 = {
        class: "form-group"
    },
    _hoisted_7$1 = {
        class: "form-group"
    },
    _hoisted_8$1 = {
        class: "form-group"
    },
    _hoisted_9 = {
        class: "grid grid-split"
    },
    _hoisted_10 = {
        class: "form-group"
    },
    _hoisted_11 = {
        class: "form-group"
    },
    _hoisted_12 = {
        class: "form-group"
    },
    _hoisted_13 = {
        class: "form-checkbox"
    },
    _hoisted_14 = ["checked"],
    _hoisted_15 = ["disabled"],
    _hoisted_16 = {
        key: 0,
        class: "loading"
    },
    _hoisted_17 = {
        key: 1,
        class: "text-bold text-success"
    };

function _sfc_render$3(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[11] || (ze[11] = withModifiers((...as) => os.onCustomSubmit && os.onCustomSubmit(...as), ["prevent"])),
        onChange: ze[12] || (ze[12] = (...as) => os.onChange && os.onChange(...as)),
        onInvalidCapture: ze[13] || (ze[13] = withModifiers((...as) => os.onInvalid && os.onInvalid(...as), ["prevent"]))
    }, [createBaseVNode("div", _hoisted_1$2, [withDirectives(createBaseVNode("input", {
        type: "text",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.title
        }]),
        name: "title",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => os.formData.title = as),
        placeholder: "Text Input (at least 1 character)",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.title]
    ]), os.result.errors.title ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.title
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_2$2, [withDirectives(createBaseVNode("textarea", {
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.body
        }]),
        rows: "5",
        name: "body",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => os.formData.body = as),
        placeholder: "Textarea (at least 5 characters)",
        minlength: "5",
        maxlength: "10000",
        required: ""
    }, "      ", 2), [
        [vModelText, os.formData.body]
    ]), os.result.errors.body ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.body
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_3$2, [withDirectives(createBaseVNode("select", {
        "onUpdate:modelValue": ze[2] || (ze[2] = as => os.formData.select = as),
        name: "select",
        class: normalizeClass(["form-select", {
            "border-danger": os.result.errors.select
        }]),
        required: ""
    }, ze[14] || (ze[14] = [createBaseVNode("option", {
        disabled: "",
        selected: "",
        value: ""
    }, "Select Option", -1), createBaseVNode("option", {
        value: "1"
    }, "First Option", -1), createBaseVNode("option", {
        value: "2"
    }, "Second Option", -1), createBaseVNode("option", {
        value: "3"
    }, "Third Option", -1)]), 2), [
        [vModelSelect, os.formData.select]
    ]), createTextVNode(" " + toDisplayString(os.formData.select) + " ", 1), os.result.errors.select ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.select
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_4$2, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.howmany
        }]),
        name: "howmany",
        "onUpdate:modelValue": ze[3] || (ze[3] = as => os.formData.howmany = as),
        placeholder: "Integer input (enter a number greater than 1)",
        step: "1",
        min: "1",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.howmany]
    ]), os.result.errors.howmany ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.howmany
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_5$1, [withDirectives(createBaseVNode("input", {
        type: "number",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.float
        }]),
        name: "float",
        "onUpdate:modelValue": ze[4] || (ze[4] = as => os.formData.float = as),
        placeholder: "Float input (0.01 to 10.0)",
        step: "0.01",
        min: "0.01",
        max: "10",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.float]
    ]), os.result.errors.float ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.float
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_6$1, [withDirectives(createBaseVNode("input", {
        type: "url",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.url
        }]),
        name: "url",
        "onUpdate:modelValue": ze[5] || (ze[5] = as => os.formData.url = as),
        placeholder: "URL",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.url]
    ]), os.result.errors.url ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.url
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_7$1, [withDirectives(createBaseVNode("input", {
        type: "email",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.email
        }]),
        name: "email",
        autocomplete: "username",
        "onUpdate:modelValue": ze[6] || (ze[6] = as => os.formData.email = as),
        placeholder: "Email address",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.email]
    ]), os.result.errors.email ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.email
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_8$1, [withDirectives(createBaseVNode("input", {
        type: "password",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.password
        }]),
        name: "password",
        autocomplete: "new-password",
        "onUpdate:modelValue": ze[7] || (ze[7] = as => os.formData.password = as),
        placeholder: "Password (min 8 characters)",
        minlength: "8",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.password]
    ]), os.result.errors.password ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.password
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [ze[15] || (ze[15] = createBaseVNode("label", null, "A date between September 5th and 10th", -1)), withDirectives(createBaseVNode("input", {
        type: "date",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.date
        }]),
        name: "date",
        "onUpdate:modelValue": ze[8] || (ze[8] = as => os.formData.date = as),
        min: "2022-09-05",
        max: "2022-09-10",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.date]
    ]), os.result.errors.date ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.date
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_11, [ze[16] || (ze[16] = createBaseVNode("label", null, "Any 2022 date", -1)), withDirectives(createBaseVNode("input", {
        type: "date",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.date2022
        }]),
        name: "date2022",
        "onUpdate:modelValue": ze[9] || (ze[9] = as => os.formData.date2022 = as),
        min: "2022-01-01",
        max: "2022-12-31",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.date2022]
    ]), os.result.errors.date2022 ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.date2022
    }, null, 8, ["msg"])) : createCommentVNode("", !0)])]), createBaseVNode("div", _hoisted_12, [createBaseVNode("label", _hoisted_13, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "enabled",
        "onUpdate:modelValue": ze[10] || (ze[10] = as => os.formData.enabled = as),
        checked: os.formData.enabled,
        required: ""
    }, null, 8, _hoisted_14), [
        [vModelCheckbox, os.formData.enabled]
    ]), ze[17] || (ze[17] = createTextVNode(" I agree "))]), os.result.errors.enabled ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.enabled
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createVNode(ns, {
        error: os.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: os.result.loading
    }, "Submit", 8, _hoisted_15), os.result.loading ? (openBlock(), createElementBlock("span", _hoisted_16, "Loading")) : os.result.data.success ? (openBlock(), createElementBlock("span", _hoisted_17, "Success!")) : createCommentVNode("", !0)], 32)
}
const SandboxForm = _export_sfc(_sfc_main$3, [
        ["render", _sfc_render$3]
    ]),
    _sfc_main$2 = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup(es) {
            const {
                formData: ze,
                result: ts,
                onSubmit: os,
                onChange: ss,
                onInvalid: rs
            } = useFetch(es);
            return {
                onCustomSubmit: async () => {
                    const ns = {
                        title: ze.title,
                        orphan: ze.orphan
                    };
                    await os(es.actionUrl, ns, ze.delay)
                },
                onChange: ss,
                onInvalid: rs,
                formData: ze,
                result: ts
            }
        }
    },
    _hoisted_1$1 = {
        class: "form-group"
    },
    _hoisted_2$1 = {
        class: "form-group"
    },
    _hoisted_3$1 = {
        class: "form-checkbox"
    },
    _hoisted_4$1 = {
        class: "form-group"
    },
    _hoisted_5 = {
        class: "form-checkbox"
    },
    _hoisted_6 = ["disabled"],
    _hoisted_7 = {
        key: 0,
        class: "loading"
    },
    _hoisted_8 = {
        key: 1,
        class: "text-bold text-success"
    };

function _sfc_render$2(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[3] || (ze[3] = withModifiers((...as) => os.onCustomSubmit && os.onCustomSubmit(...as), ["prevent"])),
        onChange: ze[4] || (ze[4] = (...as) => os.onChange && os.onChange(...as)),
        onInvalidCapture: ze[5] || (ze[5] = withModifiers((...as) => os.onInvalid && os.onInvalid(...as), ["prevent"]))
    }, [createBaseVNode("div", _hoisted_1$1, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": os.result.errors.title
        }]),
        name: "title",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => os.formData.title = as),
        placeholder: "Text Input (at least 1 character)",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, os.formData.title]
    ]), os.result.errors.title ? (openBlock(), createBlock(is, {
        key: 0,
        msg: os.result.errors.title
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createBaseVNode("div", _hoisted_2$1, [createBaseVNode("label", _hoisted_3$1, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "delay",
        "onUpdate:modelValue": ze[1] || (ze[1] = as => os.formData.delay = as)
    }, null, 512), [
        [vModelCheckbox, os.formData.delay]
    ]), ze[6] || (ze[6] = createTextVNode(" Add Loading Delay "))])]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("label", _hoisted_5, [withDirectives(createBaseVNode("input", {
        type: "checkbox",
        name: "orphan",
        "onUpdate:modelValue": ze[2] || (ze[2] = as => os.formData.orphan = as)
    }, null, 512), [
        [vModelCheckbox, os.formData.orphan]
    ]), ze[7] || (ze[7] = createTextVNode(" Test Orphan Error "))])]), createVNode(ns, {
        error: os.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: os.result.loading
    }, "Submit", 8, _hoisted_6), os.result.loading ? (openBlock(), createElementBlock("span", _hoisted_7, "Loading")) : os.result.data.success ? (openBlock(), createElementBlock("span", _hoisted_8, "Success!")) : createCommentVNode("", !0)], 32)
}
const SandboxFormCustom = _export_sfc(_sfc_main$2, [
        ["render", _sfc_render$2]
    ]),
    _sfc_main$1 = {
        props: {
            actionUrl: {
                type: String,
                required: !0
            },
            csrfToken: {
                type: String,
                required: !0
            },
            initialValues: {
                type: Object,
                required: !0
            }
        },
        setup: useFetch
    },
    _hoisted_1 = {
        class: "form-group"
    },
    _hoisted_2 = ["disabled"],
    _hoisted_3 = {
        key: 0,
        class: "loading"
    },
    _hoisted_4 = {
        key: 1,
        class: "text-bold text-success"
    };

function _sfc_render$1(es, ze, ts, os, ss, rs) {
    const is = resolveComponent("form-alert"),
        ns = resolveComponent("error");
    return openBlock(), createElementBlock("form", {
        onSubmit: ze[1] || (ze[1] = withModifiers(as => es.onSubmit(ts.actionUrl, es.formData), ["prevent"])),
        onChange: ze[2] || (ze[2] = (...as) => es.onChange && es.onChange(...as)),
        onInvalidCapture: ze[3] || (ze[3] = withModifiers((...as) => es.onInvalid && es.onInvalid(...as), ["prevent"]))
    }, [createBaseVNode("div", _hoisted_1, [withDirectives(createBaseVNode("input", {
        type: "type",
        class: normalizeClass(["form-input", {
            "border-danger": es.result.errors.title
        }]),
        name: "title",
        "onUpdate:modelValue": ze[0] || (ze[0] = as => es.formData.title = as),
        placeholder: "Text Input (at least 1 character)",
        minlength: "1",
        maxlength: "50",
        required: ""
    }, null, 2), [
        [vModelText, es.formData.title]
    ]), es.result.errors.title ? (openBlock(), createBlock(is, {
        key: 0,
        msg: es.result.errors.title
    }, null, 8, ["msg"])) : createCommentVNode("", !0)]), createVNode(ns, {
        error: es.result.errors.SERVER_ERROR
    }, null, 8, ["error"]), createBaseVNode("button", {
        type: "submit",
        class: "btn btn-primary me-sm",
        disabled: es.result.loading
    }, "Submit", 8, _hoisted_2), es.result.loading ? (openBlock(), createElementBlock("span", _hoisted_3, "Loading")) : es.result.data.success ? (openBlock(), createElementBlock("span", _hoisted_4, "Success!")) : createCommentVNode("", !0)], 32)
}
const SandboxFormSimple = _export_sfc(_sfc_main$1, [
        ["render", _sfc_render$1]
    ]),
    _sfc_main = {
        props: {
            elementId: {
                type: String
            },
            smallText: {
                type: Boolean,
                default: !1
            },
            singleLinePerItem: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {
                show: !1,
                label: "Show More",
                isTruncated: !1,
                numLinesNotDisplayed: 0,
                textEl: null
            }
        },
        mounted() {
            if (this.textEl = document.getElementById(this.elementId), !this.textEl) return;
            const es = window.getComputedStyle(this.textEl),
                ze = parseInt(es.getPropertyValue("line-height"), 10),
                ts = Math.ceil(this.textEl.clientHeight / ze);
            this.numLinesNotDisplayed = Math.ceil(this.textEl.scrollHeight / ze) - ts, this.numLinesNotDisplayed < 2 ? this.textEl.style["-webkit-line-clamp"] = 1e3 : (this.show = !0, this.isTruncated = !0), this.setMoreLabel()
        },
        methods: {
            setMoreLabel() {
                this.singleLinePerItem ? this.label = `${this.numLinesNotDisplayed} More` : this.label = "More"
            },
            toggle() {
                this.isTruncated ? (this.label = "Less", this.textEl.classList.add("more"), this.isTruncated = !1) : (this.setMoreLabel(), this.textEl.classList.remove("more"), this.isTruncated = !0)
            }
        }
    };

function _sfc_render(es, ze, ts, os, ss, rs) {
    return ss.show ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: "#!",
        onClick: ze[0] || (ze[0] = withModifiers((...is) => rs.toggle && rs.toggle(...is), ["prevent"])),
        class: normalizeClass(["display-block text-muted text-nowrap", {
            "mt-sm": !ts.smallText,
            "text-sm": ts.smallText
        }])
    }, [createBaseVNode("i", {
        class: normalizeClass(["arrow", {
            "arrow-up": !ss.isTruncated,
            "arrow-down": ss.isTruncated,
            "arrow-sm": ts.smallText
        }])
    }, null, 2), createTextVNode(" " + toDisplayString(ss.label), 1)], 2)) : createCommentVNode("", !0)
}
const ToggleLongText = _export_sfc(_sfc_main, [
        ["render", _sfc_render]
    ]),
    app = createApp({
        setup() {
            const es = ref(null),
                ze = ref(null);
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (document.body.addEventListener("mouseover", os => {
                const ss = os.target.closest("[data-tooltip]"),
                    rs = os.target.closest("[data-popover]");
                if (ss) {
                    const is = ss.getAttribute("data-tooltip");
                    es.value.show(ss, is)
                }
                if (rs) {
                    const is = JSON.parse(rs.getAttribute("data-popover"));
                    ze.value.show(rs, is)
                }
            }, !0), document.body.addEventListener("mouseout", os => {
                const ss = os.target.closest("[data-tooltip]"),
                    rs = os.target.closest("[data-popover]");
                ss && es.value.hide(), rs && ze.value.hide()
            }, !0)), {
                tooltip: es,
                popover: ze
            }
        }
    });
app.component("AdminProductCodes", _sfc_main$v);
app.component("ApiApplication", ApiApplication);
app.component("App", _sfc_main$w);
app.component("ApproverAssociateDeveloper", _sfc_main$t);
app.component("ApprovalHistory", _sfc_main$x);
app.component("Alert", Alert);
app.component("ChartMobyStats", _sfc_main$s);
app.component("ChartPlatform", _sfc_main$r);
app.component("ChartPlatforms", _sfc_main$q);
app.component("ChartPlatformsRace", _sfc_main$p);
app.component("ChartPriceHistory", _sfc_main$o);
app.component("ChartResearchRank", _sfc_main$n);
app.component("CriticReviews", _sfc_main$l);
app.component("CoverSwapLinks", _sfc_main$m);
app.component("DbStats", _sfc_main$k);
app.component("EditUserProfile", EditUserProfile);
app.component("Error", Error$1);
app.component("FeedSettings", _sfc_main$i);
app.component("FormAlert", FormAlert);
app.component("FormSelect", FormSelect);
app.component("GameBrowser", GameBrowser);
app.component("GameBrowserV2", GameBrowserV2);
app.component("GameLicensing", GameLicensing);
app.component("GameList", GameList);
app.component("ImageHotkeys", ImageHotkeys);
app.component("List", List);
app.component("ListManager", ListManager);
app.component("PlayerTools", PlayerTools);
app.component("Popover", _sfc_main$y);
app.component("Modal", Modal);
app.component("Random", _sfc_main$8);
app.component("RateGame", _sfc_main$7);
app.component("RateReview", _sfc_main$6);
app.component("Register", Register);
app.component("Reviews", _sfc_main$4);
app.component("SandboxForm", SandboxForm);
app.component("SandboxFormCustom", SandboxFormCustom);
app.component("SandboxFormSimple", SandboxFormSimple);
app.component("Search", Search);
app.component("GroupedSubList", GroupedSubList);
app.component("Tooltip", _sfc_main$z);
app.component("ToggleDarkMode", ToggleDarkMode);
app.component("ToggleLongText", ToggleLongText);
app.component("ApiRequest", ApiRequest);
app.component("vSelect", Ce);
app.config.compilerOptions.whitespace = "preserve";
app.config.compilerOptions.isCustomElement = es => es === "moby";
app.mount("#root");
lf(".lazyframe");
const details = document.querySelectorAll("details");
details.forEach(es => {
    if (es.id === "") return;
    const ze = localStorage.getItem(es.id);
    ze === "open" ? es.open = !0 : ze === "closed" && (es.open = !1), es.addEventListener("toggle", () => {
        if (!es.getAttribute("data-listener-added")) {
            es.setAttribute("data-listener-added", !0);
            return
        }
        localStorage.setItem(es.id, es.open ? "open" : "closed")
    })
});
document.body.addEventListener("htmx:beforeSwap", es => {
    const {
        detail: ze
    } = es;
    ze.xhr.status === 404 ? alert("Error: Could Not Find Resource") : ze.xhr.status === 500 ? alert("Error: Internal Server Error") : ze.xhr.status === 400 && (ze.shouldSwap = !0, ze.isError = !1)
});
document.body.addEventListener("htmx:load", () => {
    GLightbox({
        touchNavigation: !0,
        loop: !1,
        openEffect: "none",
        closeEffect: "none"
    })
});
document.querySelectorAll(".tselect").forEach(es => {
    const ze = {
        maxOptions: 1e3
    };
    new TomSelect(es, ze)
});
document.querySelectorAll(".tselect-multi").forEach(es => {
    const ze = {
        maxOptions: 1e3,
        plugins: ["remove_button"]
    };
    new TomSelect(es, ze)
});