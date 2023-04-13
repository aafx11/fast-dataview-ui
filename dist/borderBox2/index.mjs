import { unref as k, getCurrentScope as A, onScopeDispose as B, watch as N, ref as y, onMounted as S, onUnmounted as $, nextTick as L, defineComponent as F, computed as Q, createVNode as b, renderSlot as D } from "vue";
function H(e, n) {
  const t = window.MutationObserver, r = new t(n);
  return r.observe(e, {
    attributes: !0,
    // 观察所有监听的节点属性值的变化
    attributeFilter: ["style"],
    // 监听的属性
    attributeOldValue: !0
    // 记录上一次被监听的节点的属性变化 
  }), r;
}
var x;
const T = typeof window < "u", R = (e) => typeof e == "string", _ = () => {
};
T && ((x = window == null ? void 0 : window.navigator) != null && x.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function g(e) {
  return typeof e == "function" ? e() : k(e);
}
function j(e, n) {
  function t(...r) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(a).catch(i);
    });
  }
  return t;
}
function M(e, n = {}) {
  let t, r, a = _;
  const i = (l) => {
    clearTimeout(l), a(), a = _;
  };
  return (l) => {
    const s = g(e), u = g(n.maxWait);
    return t && i(t), s <= 0 || u !== void 0 && u <= 0 ? (r && (i(r), r = null), Promise.resolve(l())) : new Promise((o, c) => {
      a = n.rejectOnCancel ? c : o, u && !r && (r = setTimeout(() => {
        t && i(t), r = null, o(l());
      }, u)), t = setTimeout(() => {
        r && i(r), r = null, o(l());
      }, s);
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
  const t = g(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Z = T ? window : void 0;
function K(...e) {
  let n, t, r, a;
  if (R(e[0]) || Array.isArray(e[0]) ? ([t, r, a] = e, n = Z) : [n, t, r, a] = e, !n)
    return _;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const i = [], d = () => {
    i.forEach((o) => o()), i.length = 0;
  }, l = (o, c, f, p) => (o.addEventListener(c, f, p), () => o.removeEventListener(c, f, p)), s = N(() => [G(n), g(a)], ([o, c]) => {
    d(), o && i.push(...t.flatMap((f) => r.map((p) => l(o, f, p, c))));
  }, { immediate: !0, flush: "post" }), u = () => {
    s(), d();
  };
  return z(u), u;
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, C = "__vueuse_ssr_handlers__";
I[C] = I[C] || {};
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
  const a = y(0), i = y(0), d = y(0), l = y(0);
  let s, u = null, o = null;
  const c = (w = !0) => new Promise((O) => {
    L(() => {
      o = e.value, a.value = e.value ? e.value.clientWidth : 0, i.value = e.value ? e.value.clientHeight : 0, d.value = o ? o.getBoundingClientRect().width : 0, l.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!a.value || !i.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && w && n(), O(!0);
    });
  }), f = () => {
    u = H(o, s), K(window, "resize", s);
  }, p = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, m = async () => {
    await c(!1), s = V(c, 200), f(), typeof t == "function" && t();
  };
  return S(() => {
    m();
  }), $(() => {
    p();
  }), {
    width: a,
    height: i,
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
}, re = Object.assign, oe = (e) => Array.isArray(e) && e.length, h = (e) => e >= 0 ? e : 0, v = /* @__PURE__ */ F({
  name: "FBorderBox2",
  props: ne,
  setup(e, {
    slots: n
  }) {
    const t = y(null), r = ["white"];
    let a = Q(() => oe(e.color) ? re(r, e.color) : r);
    const {
      width: i,
      height: d,
      initWH: l
    } = te(t);
    return {
      width: i,
      height: d,
      initWH: l,
      borderBox2: t,
      defaultColor: r,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      width: n,
      height: t,
      backgroundColor: r,
      strokeWidth: a,
      realColor: i,
      duration: d,
      strokeDasharray: l
    } = this;
    let s = a || 3, u = h(s), o = h(s), c = h(n - s), f = h(s), p = h(n - s), m = h(t - s), w = h(s), O = h(t - s);
    return b("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [b("svg", {
      class: "f-svg-container",
      width: n,
      height: t
    }, [b("path", {
      class: "f-container-path",
      style: {
        "--duration": `${d}s`,
        "--border-stroke-dasharray": l
      },
      stroke: i[0],
      "stroke-width": s,
      fill: r,
      d: `M ${u} ${o}, L ${c} ${f}, L ${p} ${m}, L ${w} ${O}, Z`
    }, null)]), b("div", {
      class: "f-border-box-content"
    }, [D(e, "default")])]);
  }
});
v.install = function(e) {
  e.component(v.name, v);
};
const se = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(v);
  }
};
export {
  v as BorderBox2,
  se as default
};
