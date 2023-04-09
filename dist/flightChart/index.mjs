import { getCurrentScope as Q, onScopeDispose as L, unref as y, watch as z, ref as w, onMounted as B, onUnmounted as H, nextTick as $, defineComponent as M, getCurrentInstance as U, reactive as F, openBlock as p, createElementBlock as g, createElementVNode as b, normalizeStyle as S, Fragment as V, renderList as G, createCommentVNode as O, toDisplayString as K } from "vue";
const x = Object.assign, X = (e) => Array.isArray(e) && e || [], m = (e, t = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (t.get(e))
    return t.get(e);
  let n = new e.constructor();
  t.set(e, n);
  for (let r in e)
    e.hasOwnProperty(r) && (n[r] = m(e[r], t));
  return n;
};
function Y(e, t) {
  const n = window.MutationObserver, r = new n(t);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var A;
const D = typeof window < "u", q = (e) => typeof e == "string", C = () => {
};
D && ((A = window == null ? void 0 : window.navigator) != null && A.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function k(e) {
  return typeof e == "function" ? e() : y(e);
}
function J(e, t) {
  function n(...r) {
    return new Promise((a, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(s);
    });
  }
  return n;
}
function Z(e, t = {}) {
  let n, r, a = C;
  const s = (d) => {
    clearTimeout(d), a(), a = C;
  };
  return (d) => {
    const f = k(e), l = k(t.maxWait);
    return n && s(n), f <= 0 || l !== void 0 && l <= 0 ? (r && (s(r), r = null), Promise.resolve(d())) : new Promise((i, u) => {
      a = t.rejectOnCancel ? u : i, l && !r && (r = setTimeout(() => {
        n && s(n), r = null, i(d());
      }, l)), n = setTimeout(() => {
        r && s(r), r = null, i(d());
      }, f);
    });
  };
}
function j(e) {
  return e;
}
function ee(e) {
  return Q() ? (L(e), !0) : !1;
}
function te(e, t = 200, n = {}) {
  return J(Z(t, n), e);
}
function ne(e) {
  var t;
  const n = k(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const re = D ? window : void 0;
function oe(...e) {
  let t, n, r, a;
  if (q(e[0]) || Array.isArray(e[0]) ? ([n, r, a] = e, t = re) : [t, n, r, a] = e, !t)
    return C;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], h = () => {
    s.forEach((i) => i()), s.length = 0;
  }, d = (i, u, c) => (i.addEventListener(u, c, a), () => i.removeEventListener(u, c, a)), f = z(() => ne(t), (i) => {
    h(), i && s.push(...n.flatMap((u) => r.map((c) => d(i, u, c))));
  }, { immediate: !0, flush: "post" }), l = () => {
    f(), h();
  };
  return ee(l), l;
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, P = "__vueuse_ssr_handlers__";
I[P] = I[P] || {};
I[P];
var T;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(T || (T = {}));
var ie = Object.defineProperty, R = Object.getOwnPropertySymbols, ae = Object.prototype.hasOwnProperty, se = Object.prototype.propertyIsEnumerable, W = (e, t, n) => t in e ? ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, le = (e, t) => {
  for (var n in t || (t = {}))
    ae.call(t, n) && W(e, n, t[n]);
  if (R)
    for (var n of R(t))
      se.call(t, n) && W(e, n, t[n]);
  return e;
};
const ue = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
le({
  linear: j
}, ue);
const ce = (e, t, n, r) => {
  const a = w(0), s = w(0), h = w(0), d = w(0);
  let f, l = null, i = null;
  const u = (_ = !0) => new Promise((N) => {
    $(() => {
      i = e.value, a.value = e.value ? e.value.clientWidth : 0, s.value = e.value ? e.value.clientHeight : 0, h.value = i ? i.getBoundingClientRect().width : 0, d.value = i ? i.getBoundingClientRect().height : 0, e.value ? (!a.value || !s.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && _ && t(), N(!0);
    });
  }), c = () => {
    l = Y(i, f), oe(window, "resize", f);
  }, o = () => {
    l && (l.disconnect(), l.takeRecords(), l = null);
  }, v = async () => {
    await u(!1), f = te(u, 200), c(), typeof n == "function" && n();
  };
  return B(() => {
    v();
  }), H(() => {
    o();
  }), {
    width: a,
    height: s,
    afterWidth: h,
    afterHeight: d,
    initWH: u
  };
}, fe = {
  width: "100%",
  height: "100%"
}, de = ["cx", "cy"], he = ["values", "dur"], pe = ["fill"], ge = ["fill", "x", "y"], ye = ["href", "width", "height", "x", "y"], E = /* @__PURE__ */ M({
  name: "index",
  props: {
    bgUrl: { type: String },
    points: {
      type: Array,
      default: () => []
    },
    paths: {
      type: Array,
      default: () => []
    },
    line: {
      type: Object,
      default: () => ({
        show: !0,
        type: "line",
        width: 1,
        color: "#ffde93",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 700,
        radius: 100
      })
    },
    halo: {
      type: Object,
      default: () => ({
        show: !0,
        duration: 700,
        color: "#3891c2",
        radius: 100
      })
    },
    title: {
      type: Object,
      default: () => ({
        show: !0,
        offest: [0, 0],
        color: "black",
        fontSize: 16
      })
    },
    icon: {
      type: Object,
      default: () => ({
        show: !0,
        url: "",
        width: 10,
        height: 10
      })
    }
  },
  emits: ["map-click"],
  setup(e) {
    const t = e, n = w(), r = U(), a = F({
      halo: {
        show: !0,
        duration: 700,
        color: "#3891c2",
        radius: 100
      },
      title: {
        show: !0,
        offest: [0, 0],
        color: "black",
        fontSize: 16
      },
      icon: {
        show: !0,
        url: "",
        width: 10,
        height: 10
      }
    }), s = F({
      points: []
    }), h = (u) => {
      let { offsetX: c, offsetY: o } = u;
      const v = (c / f.value).toFixed(2), _ = (o / l.value).toFixed(2);
      r == null || r.emit("map-click", v, _, u);
    }, d = () => {
    }, { width: f, height: l } = ce(n, d), i = () => {
      let u = m(X(t.points));
      s.points = u.map((c, o) => (console.log("icon", c.icon), {
        ...c,
        halo: x({}, a.halo, m(t.halo), c.halo),
        title: x({}, a.title, m(t.title), c.title),
        icon: x({}, a.icon, m(t.icon), c.icon),
        key: `${c.coordinate.toString()}${o}`
      })), console.log("points", s.points);
    };
    return z(() => t, (u) => {
      i();
    }, {
      deep: !0,
      immediate: !0
    }), (u, c) => (p(), g("div", {
      ref_key: "flightChart",
      ref: n,
      class: "f-flight-chart"
    }, [
      b("div", {
        class: "f-flight-chart__wrap",
        style: S(`background-image: url(${t.bgUrl})`),
        onClick: h
      }, [
        (p(), g("svg", fe, [
          (p(!0), g(V, null, G(s.points, (o, v) => (p(), g("g", {
            key: o.key
          }, [
            b("defs", null, [
              o.halo.show ? (p(), g("circle", {
                key: 0,
                id: "halo",
                cx: o.coordinate[0] * y(f),
                cy: o.coordinate[1] * y(l)
              }, [
                b("animate", {
                  "attribute-name": "r",
                  values: `1;${o.halo.radius}`,
                  dur: `${o.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, he)
              ], 8, de)) : O("", !0)
            ]),
            o.halo.show ? (p(), g("use", {
              key: 0,
              "xlink:href": "#halo",
              fill: o.halo.color
            }, null, 8, pe)) : O("", !0),
            o.title.show ? (p(), g("text", {
              key: 1,
              style: S({ fontSize: `${o.title.fontSize}px` }),
              fill: o.title.color,
              x: o.coordinate[0] * y(f) + o.title.offest[0],
              y: o.coordinate[1] * y(l) + o.title.offest[1]
            }, K(o.name), 13, ge)) : O("", !0),
            o.icon.show ? (p(), g("image", {
              key: 2,
              href: o.icon.url,
              width: o.icon.width,
              height: o.icon.height,
              x: o.coordinate[0] * y(f),
              y: o.coordinate[1] * y(l)
            }, null, 8, ye)) : O("", !0)
          ]))), 128))
        ]))
      ], 4)
    ], 512));
  }
});
E.install = function(e) {
  e.component("FFlightChart", E);
};
const me = {
  title: "FFlightChart 飞线图",
  category: "飞线图",
  status: "20%",
  install(e) {
    e.use(E);
  }
};
export {
  E as FlightChart,
  me as default
};
