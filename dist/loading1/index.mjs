import { getCurrentScope as A, onScopeDispose as W, unref as N, watch as S, ref as g, onMounted as F, onUnmounted as L, nextTick as Q, defineComponent as B, computed as H, createVNode as u } from "vue";
function R(e, n) {
  const t = window.MutationObserver, r = new t(n);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var O;
const I = typeof window < "u", k = (e) => typeof e == "string", y = () => {
};
I && ((O = window == null ? void 0 : window.navigator) != null && O.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function m(e) {
  return typeof e == "function" ? e() : N(e);
}
function D(e, n) {
  function t(...r) {
    return new Promise((i, a) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(i).catch(a);
    });
  }
  return t;
}
function j(e, n = {}) {
  let t, r, i = y;
  const a = (l) => {
    clearTimeout(l), i(), i = y;
  };
  return (l) => {
    const d = m(e), s = m(n.maxWait);
    return t && a(t), d <= 0 || s !== void 0 && s <= 0 ? (r && (a(r), r = null), Promise.resolve(l())) : new Promise((o, c) => {
      i = n.rejectOnCancel ? c : o, s && !r && (r = setTimeout(() => {
        t && a(t), r = null, o(l());
      }, s)), t = setTimeout(() => {
        r && a(r), r = null, o(l());
      }, d);
    });
  };
}
function M(e) {
  return e;
}
function U(e) {
  return A() ? (W(e), !0) : !1;
}
function z(e, n = 200, t = {}) {
  return D(j(n, t), e);
}
function V(e) {
  var n;
  const t = m(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const $ = I ? window : void 0;
function G(...e) {
  let n, t, r, i;
  if (k(e[0]) || Array.isArray(e[0]) ? ([t, r, i] = e, n = $) : [n, t, r, i] = e, !n)
    return y;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const a = [], f = () => {
    a.forEach((o) => o()), a.length = 0;
  }, l = (o, c, p) => (o.addEventListener(c, p, i), () => o.removeEventListener(c, p, i)), d = S(() => V(n), (o) => {
    f(), o && a.push(...t.flatMap((c) => r.map((p) => l(o, c, p))));
  }, { immediate: !0, flush: "post" }), s = () => {
    d(), f();
  };
  return U(s), s;
}
const h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, w = "__vueuse_ssr_handlers__";
h[w] = h[w] || {};
h[w];
var b;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(b || (b = {}));
var K = Object.defineProperty, x = Object.getOwnPropertySymbols, q = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable, _ = (e, n, t) => n in e ? K(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, X = (e, n) => {
  for (var t in n || (n = {}))
    q.call(n, t) && _(e, t, n[t]);
  if (x)
    for (var t of x(n))
      J.call(n, t) && _(e, t, n[t]);
  return e;
};
const Y = {
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
X({
  linear: M
}, Y);
const Z = (e, n, t, r) => {
  const i = g(0), a = g(0), f = g(0), l = g(0);
  let d, s = null, o = null;
  const c = (E = !0) => new Promise((T) => {
    Q(() => {
      o = e.value, i.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, f.value = o ? o.getBoundingClientRect().width : 0, l.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!i.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && E && n(), T(!0);
    });
  }), p = () => {
    s = R(o, d), G(window, "resize", d);
  }, C = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, P = async () => {
    await c(!1), d = z(c, 200), p(), typeof t == "function" && t();
  };
  return F(() => {
    P();
  }), L(() => {
    C();
  }), {
    width: i,
    height: a,
    afterWidth: f,
    afterHeight: l,
    initWH: c
  };
}, ee = Object.assign, te = (e) => Array.isArray(e) && e.length, v = /* @__PURE__ */ B({
  name: "FLoading1",
  props: {
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "100px"
    },
    color: {
      type: Array,
      default: () => []
    },
    text: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  setup(e, {
    slots: n
  }) {
    const t = g(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let i = H(() => te(e.color) ? ee(r, e.color) : r);
    const {
      width: a,
      height: f,
      initWH: l
    } = Z(t);
    return {
      width: a,
      height: f,
      initWH: l,
      loading1: t,
      defaultColor: r,
      realColor: i
    };
  },
  render() {
    const {
      $slots: e,
      realColor: n,
      text: t,
      duration: r
    } = this;
    return u("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": n[0],
        "--back-color": n[1],
        "--text-color": n[2],
        "--duration": `${r}s`
      }
    }, [u("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [u("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), u("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), u("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [u("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), u("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), u("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [u("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), u("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), t ? u("div", {
      class: "f-loading-text",
      "data-text": t
    }, null) : null]);
  }
});
v.install = function(e) {
  e.component(v.name, v);
};
const re = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(v);
  }
};
export {
  v as Loading1,
  re as default
};
