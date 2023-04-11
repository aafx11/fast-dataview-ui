import { getCurrentScope as k, onScopeDispose as A, unref as B, watch as N, ref as h, onMounted as S, onUnmounted as $, nextTick as L, defineComponent as F, computed as Q, createVNode as y, renderSlot as D } from "vue";
function H(e, n) {
  const t = window.MutationObserver, r = new t(n);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var C;
const T = typeof window < "u", R = (e) => typeof e == "string", O = () => {
};
T && ((C = window == null ? void 0 : window.navigator) != null && C.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _(e) {
  return typeof e == "function" ? e() : B(e);
}
function j(e, n) {
  function t(...r) {
    return new Promise((i, s) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(i).catch(s);
    });
  }
  return t;
}
function M(e, n = {}) {
  let t, r, i = O;
  const s = (l) => {
    clearTimeout(l), i(), i = O;
  };
  return (l) => {
    const a = _(e), u = _(n.maxWait);
    return t && s(t), a <= 0 || u !== void 0 && u <= 0 ? (r && (s(r), r = null), Promise.resolve(l())) : new Promise((o, c) => {
      i = n.rejectOnCancel ? c : o, u && !r && (r = setTimeout(() => {
        t && s(t), r = null, o(l());
      }, u)), t = setTimeout(() => {
        r && s(r), r = null, o(l());
      }, a);
    });
  };
}
function U(e) {
  return e;
}
function z(e) {
  return k() ? (A(e), !0) : !1;
}
function V(e, n = 200, t = {}) {
  return j(M(n, t), e);
}
function G(e) {
  var n;
  const t = _(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Z = T ? window : void 0;
function K(...e) {
  let n, t, r, i;
  if (R(e[0]) || Array.isArray(e[0]) ? ([t, r, i] = e, n = Z) : [n, t, r, i] = e, !n)
    return O;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const s = [], d = () => {
    s.forEach((o) => o()), s.length = 0;
  }, l = (o, c, f) => (o.addEventListener(c, f, i), () => o.removeEventListener(c, f, i)), a = N(() => G(n), (o) => {
    d(), o && s.push(...t.flatMap((c) => r.map((f) => l(o, c, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), d();
  };
  return z(u), u;
}
const x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, I = "__vueuse_ssr_handlers__";
x[I] = x[I] || {};
x[I];
var P;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(P || (P = {}));
var q = Object.defineProperty, E = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, W = (e, n, t) => n in e ? q(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Y = (e, n) => {
  for (var t in n || (n = {}))
    J.call(n, t) && W(e, t, n[t]);
  if (E)
    for (var t of E(n))
      X.call(n, t) && W(e, t, n[t]);
  return e;
};
const ee = {
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
Y({
  linear: U
}, ee);
const te = (e, n, t, r) => {
  const i = h(0), s = h(0), d = h(0), l = h(0);
  let a, u = null, o = null;
  const c = (m = !0) => new Promise((w) => {
    L(() => {
      o = e.value, i.value = e.value ? e.value.clientWidth : 0, s.value = e.value ? e.value.clientHeight : 0, d.value = o ? o.getBoundingClientRect().width : 0, l.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!i.value || !s.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && m && n(), w(!0);
    });
  }), f = () => {
    u = H(o, a), K(window, "resize", a);
  }, v = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, g = async () => {
    await c(!1), a = V(c, 200), f(), typeof t == "function" && t();
  };
  return S(() => {
    g();
  }), $(() => {
    v();
  }), {
    width: i,
    height: s,
    afterWidth: d,
    afterHeight: l,
    initWH: c
  };
}, ne = {
  color: {
    type: Array,
    default: () => []
  },
  backgroundColor: {
    type: String,
    default: "transparent"
  },
  strokeWidth: {
    type: Number
  },
  title: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 2
  },
  strokeDasharray: {
    type: String,
    default: "300 300"
  }
}, re = Object.assign, oe = (e) => Array.isArray(e) && e.length, p = (e) => e >= 0 ? e : 0, b = /* @__PURE__ */ F({
  name: "FBorderBox2",
  props: ne,
  setup(e, {
    slots: n
  }) {
    const t = h(null), r = ["white"];
    let i = Q(() => oe(e.color) ? re(r, e.color) : r);
    const {
      width: s,
      height: d,
      initWH: l
    } = te(t);
    return {
      width: s,
      height: d,
      initWH: l,
      borderBox2: t,
      defaultColor: r,
      realColor: i
    };
  },
  render() {
    const {
      $slots: e,
      width: n,
      height: t,
      backgroundColor: r,
      strokeWidth: i,
      realColor: s,
      duration: d,
      strokeDasharray: l
    } = this;
    let a = i || 3, u = p(a), o = p(a), c = p(n - a), f = p(a), v = p(n - a), g = p(t - a), m = p(a), w = p(t - a);
    return y("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [y("svg", {
      class: "f-svg-container",
      width: n,
      height: t
    }, [y("path", {
      class: "f-container-path",
      style: {
        "--duration": `${d}s`,
        "--border-stroke-dasharray": l
      },
      stroke: s[0],
      "stroke-width": a,
      fill: r,
      d: `M ${u} ${o}, L ${c} ${f}, L ${v} ${g}, L ${m} ${w}, Z`
    }, null)]), y("div", {
      class: "f-border-box-content"
    }, [D(e, "default")])]);
  }
});
b.install = function(e) {
  e.component(b.name, b);
};
const se = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(b);
  }
};
export {
  b as BorderBox2,
  se as default
};
