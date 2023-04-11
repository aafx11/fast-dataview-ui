import { getCurrentScope as W, onScopeDispose as A, unref as T, watch as B, ref as $, onMounted as N, onUnmounted as S, nextTick as F, defineComponent as H, computed as Q, createVNode as d, renderSlot as L } from "vue";
function R(e, o) {
  const r = window.MutationObserver, l = new r(o);
  return l.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), l;
}
var v;
const I = typeof window < "u", D = (e) => typeof e == "string", y = () => {
};
I && ((v = window == null ? void 0 : window.navigator) != null && v.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function g(e) {
  return typeof e == "function" ? e() : T(e);
}
function j(e, o) {
  function r(...l) {
    return new Promise((a, u) => {
      Promise.resolve(e(() => o.apply(this, l), { fn: o, thisArg: this, args: l })).then(a).catch(u);
    });
  }
  return r;
}
function z(e, o = {}) {
  let r, l, a = y;
  const u = (t) => {
    clearTimeout(t), a(), a = y;
  };
  return (t) => {
    const n = g(e), s = g(o.maxWait);
    return r && u(r), n <= 0 || s !== void 0 && s <= 0 ? (l && (u(l), l = null), Promise.resolve(t())) : new Promise((i, f) => {
      a = o.rejectOnCancel ? f : i, s && !l && (l = setTimeout(() => {
        r && u(r), l = null, i(t());
      }, s)), r = setTimeout(() => {
        l && u(l), l = null, i(t());
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
function G(e, o = 200, r = {}) {
  return j(z(o, r), e);
}
function V(e) {
  var o;
  const r = g(e);
  return (o = r == null ? void 0 : r.$el) != null ? o : r;
}
const K = I ? window : void 0;
function Z(...e) {
  let o, r, l, a;
  if (D(e[0]) || Array.isArray(e[0]) ? ([r, l, a] = e, o = K) : [o, r, l, a] = e, !o)
    return y;
  Array.isArray(r) || (r = [r]), Array.isArray(l) || (l = [l]);
  const u = [], c = () => {
    u.forEach((i) => i()), u.length = 0;
  }, t = (i, f, p) => (i.addEventListener(f, p, a), () => i.removeEventListener(f, p, a)), n = B(() => V(o), (i) => {
    c(), i && u.push(...r.flatMap((f) => l.map((p) => t(i, f, p))));
  }, { immediate: !0, flush: "post" }), s = () => {
    n(), c();
  };
  return U(s), s;
}
const w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = "__vueuse_ssr_handlers__";
w[b] = w[b] || {};
w[b];
var m;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(m || (m = {}));
var q = Object.defineProperty, O = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, k = (e, o, r) => o in e ? q(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Y = (e, o) => {
  for (var r in o || (o = {}))
    J.call(o, r) && k(e, r, o[r]);
  if (O)
    for (var r of O(o))
      X.call(o, r) && k(e, r, o[r]);
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
const te = (e, o, r, l) => {
  const a = $(0), u = $(0), c = $(0), t = $(0);
  let n, s = null, i = null;
  const f = (P = !0) => new Promise((E) => {
    F(() => {
      i = e.value, a.value = e.value ? e.value.clientWidth : 0, u.value = e.value ? e.value.clientHeight : 0, c.value = i ? i.getBoundingClientRect().width : 0, t.value = i ? i.getBoundingClientRect().height : 0, e.value ? (!a.value || !u.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof o == "function" && P && o(), E(!0);
    });
  }), p = () => {
    s = R(i, n), Z(window, "resize", n);
  }, x = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, C = async () => {
    await f(!1), n = G(f, 200), p(), typeof r == "function" && r();
  };
  return N(() => {
    C();
  }), S(() => {
    x();
  }), {
    width: a,
    height: u,
    afterWidth: c,
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
  },
  strokeDasharray: {
    type: String,
    default: "300 300"
  }
}, re = Object.assign, oe = (e) => Array.isArray(e) && e.length, _ = (e) => e >= 0 ? e : 0, h = /* @__PURE__ */ H({
  name: "FBorderBox1",
  props: ne,
  setup(e, {
    slots: o
  }) {
    const r = $(null), l = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let a = Q(() => oe(e.color) ? re(l, e.color) : l);
    const {
      width: u,
      height: c,
      initWH: t
    } = te(r);
    return {
      width: u,
      height: c,
      initWH: t,
      borderBox1: r,
      defaultColor: l,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      width: o,
      height: r,
      backgroundColor: l,
      strokeWidth: a,
      realColor: u,
      title: c
    } = this, t = 20;
    let n = a || 2, s = _(o - n - 2), i = _(r - n - 2);
    return d("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [d("svg", {
      class: "f-svg-container",
      width: s,
      height: i
    }, [d("polygon", {
      fill: l,
      stroke: u[0],
      "stroke-width": n,
      points: `
            ${t} ${n}, ${s - t} ${n}, ${s - n} ${t}, ${s - n} ${i - t}, ${s - t} ${i},
            ${t} ${i}, ${n} ${i - t}, ${n} ${t}
          `
    }, null), d("polyline", {
      stroke: u[1],
      "stroke-width": n + 1,
      points: `
            ${t - 8} 0,0 ${t - 8}
          `
    }, null), d("polyline", {
      stroke: u[1],
      "stroke-width": n + 1,
      points: `
            ${s} ${i - t + 8}, ${s - t + 8 + n} ${i}
          `
    }, null), d("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
            ${n} ${t + 15}, ${n} ${t}, ${t} ${n} , ${t + 15} ${n}
          `
    }, null), d("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
           ${t + 15} ${i}, ${t}  ${i}, ${n} ${i - t}, ${n} ${i - t - 15}
          `
    }, null), d("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
           ${s - t - 15} ${n}, ${s - t} ${n}, ${s - n} ${t}, ${s - n} ${t + 15}
          `
    }, null), d("polyline", {
      fill: "none",
      stroke: u[1],
      "stroke-width": n + 2,
      points: `
          ${s - t - 15} ${i}, ${s - t} ${i}, ${s - n} ${i - t}, ${s - n} ${i - t - 15}
          `
    }, null), c ? d("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${t} ${n}, ${s - t} ${n}, ${s - n} ${t}, ${s - n} ${t + 15}, ${n} ${t + 15},
            ${n} ${t}
          `
    }, null) : null, c ? d("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [c]) : null]), d("div", {
      class: "f-border-box-content"
    }, [L(e, "default")])]);
  }
});
h.install = function(e) {
  e.component(h.name, h);
};
const se = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(h);
  }
};
export {
  h as BorderBox1,
  se as default
};
