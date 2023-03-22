import { getCurrentScope as A, onScopeDispose as B, unref as N, watch as $, ref as h, onMounted as L, onUnmounted as S, nextTick as k, defineComponent as F, computed as Q, createVNode as y, renderSlot as H } from "vue";
function R(e, n) {
  const t = window.MutationObserver, r = new t(n);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var I;
const W = typeof window < "u", D = (e) => typeof e == "string", w = () => {
};
W && ((I = window == null ? void 0 : window.navigator) != null && I.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function O(e) {
  return typeof e == "function" ? e() : N(e);
}
function j(e, n) {
  function t(...r) {
    return new Promise((s, a) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(s).catch(a);
    });
  }
  return t;
}
function M(e, n = {}) {
  let t, r, s = w;
  const a = (o) => {
    clearTimeout(o), s(), s = w;
  };
  return (o) => {
    const d = O(e), u = O(n.maxWait);
    return t && a(t), d <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(o())) : new Promise((i, l) => {
      s = n.rejectOnCancel ? l : i, u && !r && (r = setTimeout(() => {
        t && a(t), r = null, i(o());
      }, u)), t = setTimeout(() => {
        r && a(r), r = null, i(o());
      }, d);
    });
  };
}
function U(e) {
  return e;
}
function z(e) {
  return A() ? (B(e), !0) : !1;
}
function V(e, n = 200, t = {}) {
  return j(M(n, t), e);
}
function G(e) {
  var n;
  const t = O(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Z = W ? window : void 0;
function K(...e) {
  let n, t, r, s;
  if (D(e[0]) || Array.isArray(e[0]) ? ([t, r, s] = e, n = Z) : [n, t, r, s] = e, !n)
    return w;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const a = [], c = () => {
    a.forEach((i) => i()), a.length = 0;
  }, o = (i, l, f) => (i.addEventListener(l, f, s), () => i.removeEventListener(l, f, s)), d = $(() => G(n), (i) => {
    c(), i && a.push(...t.flatMap((l) => r.map((f) => o(i, l, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    d(), c();
  };
  return z(u), u;
}
const _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, x = "__vueuse_ssr_handlers__";
_[x] = _[x] || {};
_[x];
var C;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(C || (C = {}));
var q = Object.defineProperty, P = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, E = (e, n, t) => n in e ? q(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Y = (e, n) => {
  for (var t in n || (n = {}))
    J.call(n, t) && E(e, t, n[t]);
  if (P)
    for (var t of P(n))
      X.call(n, t) && E(e, t, n[t]);
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
  const s = h(0), a = h(0), c = h(0), o = h(0);
  let d, u = null, i = null;
  const l = (m = !0) => new Promise((T) => {
    k(() => {
      i = e.value, s.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, c.value = i ? i.getBoundingClientRect().width : 0, o.value = i ? i.getBoundingClientRect().height : 0, e.value ? (!s.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && m && n(), T(!0);
    });
  }), f = () => {
    u = R(i, d), K(window, "resize", d);
  }, v = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, g = async () => {
    await l(!1), d = V(l, 200), f(), typeof t == "function" && t();
  };
  return L(() => {
    g();
  }), S(() => {
    v();
  }), {
    width: s,
    height: a,
    afterWidth: c,
    afterHeight: o,
    initWH: l
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
  }
}, re = Object.assign, oe = (e) => Array.isArray(e) && e.length, p = (e) => e >= 0 ? e : 0, b = /* @__PURE__ */ F({
  name: "FBorderBox2",
  props: ne,
  setup(e, {
    slots: n
  }) {
    const t = h(null), r = ["white"];
    let s = Q(() => oe(e.color) ? re(r, e.color) : r);
    const {
      width: a,
      height: c,
      initWH: o
    } = te(t);
    return {
      width: a,
      height: c,
      initWH: o,
      borderBox2: t,
      defaultColor: r,
      realColor: s
    };
  },
  render() {
    const {
      $slots: e,
      width: n,
      height: t,
      backgroundColor: r,
      strokeWidth: s,
      realColor: a,
      duration: c
    } = this;
    let o = s || 3, d = p(o), u = p(o), i = p(n - o), l = p(o), f = p(n - o), v = p(t - o), g = p(o), m = p(t - o);
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
        "--duration": `${c}s`
      },
      stroke: a[0],
      "stroke-width": o,
      fill: r,
      d: `M ${d} ${u}, L ${i} ${l}, L ${f} ${v}, L ${g} ${m}, Z`
    }, null)]), y("div", {
      class: "f-border-box-content"
    }, [H(e, "default")])]);
  }
});
b.install = function(e) {
  e.component(b.name, b);
};
const se = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(b);
  }
};
export {
  b as BorderBox2,
  se as default
};
