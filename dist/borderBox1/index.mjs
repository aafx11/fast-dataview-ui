import { getCurrentScope as W, onScopeDispose as A, unref as T, watch as B, ref as $, onMounted as N, onUnmounted as S, nextTick as F, defineComponent as H, computed as Q, createVNode as c, renderSlot as L } from "vue";
function R(e, r) {
  const o = window.MutationObserver, s = new o(r);
  return s.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), s;
}
var v;
const I = typeof window < "u", D = (e) => typeof e == "string", g = () => {
};
I && ((v = window == null ? void 0 : window.navigator) != null && v.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function y(e) {
  return typeof e == "function" ? e() : T(e);
}
function j(e, r) {
  function o(...s) {
    return new Promise((a, u) => {
      Promise.resolve(e(() => r.apply(this, s), { fn: r, thisArg: this, args: s })).then(a).catch(u);
    });
  }
  return o;
}
function z(e, r = {}) {
  let o, s, a = g;
  const u = (t) => {
    clearTimeout(t), a(), a = g;
  };
  return (t) => {
    const n = y(e), l = y(r.maxWait);
    return o && u(o), n <= 0 || l !== void 0 && l <= 0 ? (s && (u(s), s = null), Promise.resolve(t())) : new Promise((i, f) => {
      a = r.rejectOnCancel ? f : i, l && !s && (s = setTimeout(() => {
        o && u(o), s = null, i(t());
      }, l)), o = setTimeout(() => {
        s && u(s), s = null, i(t());
      }, n);
    });
  };
}
function M(e) {
  return e;
}
function U(e) {
  return W() ? (A(e), !0) : !1;
}
function G(e, r = 200, o = {}) {
  return j(z(r, o), e);
}
function V(e) {
  var r;
  const o = y(e);
  return (r = o == null ? void 0 : o.$el) != null ? r : o;
}
const K = I ? window : void 0;
function Z(...e) {
  let r, o, s, a;
  if (D(e[0]) || Array.isArray(e[0]) ? ([o, s, a] = e, r = K) : [r, o, s, a] = e, !r)
    return g;
  Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]);
  const u = [], d = () => {
    u.forEach((i) => i()), u.length = 0;
  }, t = (i, f, p) => (i.addEventListener(f, p, a), () => i.removeEventListener(f, p, a)), n = B(() => V(r), (i) => {
    d(), i && u.push(...o.flatMap((f) => s.map((p) => t(i, f, p))));
  }, { immediate: !0, flush: "post" }), l = () => {
    n(), d();
  };
  return U(l), l;
}
const w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = "__vueuse_ssr_handlers__";
w[b] = w[b] || {};
w[b];
var m;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(m || (m = {}));
var q = Object.defineProperty, O = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, _ = (e, r, o) => r in e ? q(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Y = (e, r) => {
  for (var o in r || (r = {}))
    J.call(r, o) && _(e, o, r[o]);
  if (O)
    for (var o of O(r))
      X.call(r, o) && _(e, o, r[o]);
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
  linear: M
}, ee);
const te = (e, r, o, s) => {
  const a = $(0), u = $(0), d = $(0), t = $(0);
  let n, l = null, i = null;
  const f = (P = !0) => new Promise((E) => {
    F(() => {
      i = e.value, a.value = e.value ? e.value.clientWidth : 0, u.value = e.value ? e.value.clientHeight : 0, d.value = i ? i.getBoundingClientRect().width : 0, t.value = i ? i.getBoundingClientRect().height : 0, e.value ? (!a.value || !u.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof r == "function" && P && r(), E(!0);
    });
  }), p = () => {
    l = R(i, n), Z(window, "resize", n);
  }, x = () => {
    l && (l.disconnect(), l.takeRecords(), l = null);
  }, C = async () => {
    await f(!1), n = G(f, 200), p(), typeof o == "function" && o();
  };
  return N(() => {
    C();
  }), S(() => {
    x();
  }), {
    width: a,
    height: u,
    afterWidth: d,
    afterHeight: t,
    initWH: f
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
}, oe = Object.assign, re = (e) => Array.isArray(e) && e.length, k = (e) => e >= 0 ? e : 0, h = /* @__PURE__ */ H({
  name: "FBorderBox1",
  props: ne,
  setup(e, {
    slots: r
  }) {
    const o = $(null), s = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let a = Q(() => re(e.color) ? oe(s, e.color) : s);
    const {
      width: u,
      height: d,
      initWH: t
    } = te(o);
    return {
      width: u,
      height: d,
      initWH: t,
      borderBox1: o,
      defaultColor: s,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      width: r,
      height: o,
      backgroundColor: s,
      strokeWidth: a,
      realColor: u,
      title: d
    } = this, t = 20;
    let n = a || 2, l = k(r - n - 2), i = k(o - n - 2);
    return c("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [c("svg", {
      class: "f-svg-container",
      width: l,
      height: i
    }, [c("polygon", {
      fill: s,
      stroke: u[0],
      "stroke-width": n,
      points: `
            ${t} ${n}, ${l - t} ${n}, ${l - n} ${t}, ${l - n} ${i - t}, ${l - t} ${i},
            ${t} ${i}, ${n} ${i - t}, ${n} ${t}
          `
    }, null), c("polyline", {
      stroke: u[1],
      "stroke-width": n + 1,
      points: `
            ${t - 8} 0,0 ${t - 8}
          `
    }, null), c("polyline", {
      stroke: u[1],
      "stroke-width": n + 1,
      points: `
            ${l} ${i - t + 8}, ${l - t + 8 + n} ${i}
          `
    }, null), c("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
            ${n} ${t + 15}, ${n} ${t}, ${t} ${n} , ${t + 15} ${n}
          `
    }, null), c("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
           ${t + 15} ${i}, ${t}  ${i}, ${n} ${i - t}, ${n} ${i - t - 15}
          `
    }, null), c("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
           ${l - t - 15} ${n}, ${l - t} ${n}, ${l - n} ${t}, ${l - n} ${t + 15}
          `
    }, null), c("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
          ${l - t - 15} ${i}, ${l - t} ${i}, ${l - n} ${i - t}, ${l - n} ${i - t - 15}
          `
    }, null), d ? c("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${t} ${n}, ${l - t} ${n}, ${l - n} ${t}, ${l - n} ${t + 15}, ${n} ${t + 15},
            ${n} ${t}
          `
    }, null) : null, d ? c("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [d]) : null]), c("div", {
      class: "f-border-box-content"
    }, [c("div", null, [L(e, "default")])])]);
  }
});
h.install = function(e) {
  e.component(h.name, h);
};
const le = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(h);
  }
};
export {
  h as BorderBox1,
  le as default
};
