import { unref as A, getCurrentScope as W, onScopeDispose as N, watch as S, ref as v, onMounted as F, onUnmounted as L, nextTick as Q, defineComponent as B, computed as H, createVNode as u } from "vue";
function R(e, n) {
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
var w;
const C = typeof window < "u", k = (e) => typeof e == "string", h = () => {
};
C && ((w = window == null ? void 0 : window.navigator) != null && w.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function m(e) {
  return typeof e == "function" ? e() : A(e);
}
function D(e, n) {
  function t(...r) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(a).catch(i);
    });
  }
  return t;
}
function j(e, n = {}) {
  let t, r, a = h;
  const i = (l) => {
    clearTimeout(l), a(), a = h;
  };
  return (l) => {
    const d = m(e), s = m(n.maxWait);
    return t && i(t), d <= 0 || s !== void 0 && s <= 0 ? (r && (i(r), r = null), Promise.resolve(l())) : new Promise((o, c) => {
      a = n.rejectOnCancel ? c : o, s && !r && (r = setTimeout(() => {
        t && i(t), r = null, o(l());
      }, s)), t = setTimeout(() => {
        r && i(r), r = null, o(l());
      }, d);
    });
  };
}
function M(e) {
  return e;
}
function U(e) {
  return W() ? (N(e), !0) : !1;
}
function z(e, n = 200, t = {}) {
  return D(j(n, t), e);
}
function V(e) {
  var n;
  const t = m(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const $ = C ? window : void 0;
function G(...e) {
  let n, t, r, a;
  if (k(e[0]) || Array.isArray(e[0]) ? ([t, r, a] = e, n = $) : [n, t, r, a] = e, !n)
    return h;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const i = [], f = () => {
    i.forEach((o) => o()), i.length = 0;
  }, l = (o, c, p, g) => (o.addEventListener(c, p, g), () => o.removeEventListener(c, p, g)), d = S(() => [V(n), m(a)], ([o, c]) => {
    f(), o && i.push(...t.flatMap((p) => r.map((g) => l(o, p, g, c))));
  }, { immediate: !0, flush: "post" }), s = () => {
    d(), f();
  };
  return U(s), s;
}
const O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = "__vueuse_ssr_handlers__";
O[b] = O[b] || {};
var x;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(x || (x = {}));
var K = Object.defineProperty, _ = Object.getOwnPropertySymbols, q = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable, I = (e, n, t) => n in e ? K(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, X = (e, n) => {
  for (var t in n || (n = {}))
    q.call(n, t) && I(e, t, n[t]);
  if (_)
    for (var t of _(n))
      J.call(n, t) && I(e, t, n[t]);
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
  const a = v(0), i = v(0), f = v(0), l = v(0);
  let d, s = null, o = null;
  const c = (E = !0) => new Promise((T) => {
    Q(() => {
      o = e.value, a.value = e.value ? e.value.clientWidth : 0, i.value = e.value ? e.value.clientHeight : 0, f.value = o ? o.getBoundingClientRect().width : 0, l.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!a.value || !i.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && E && n(), T(!0);
    });
  }), p = () => {
    s = R(o, d), G(window, "resize", d);
  }, g = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, P = async () => {
    await c(!1), d = z(c, 200), p(), typeof t == "function" && t();
  };
  return F(() => {
    P();
  }), L(() => {
    g();
  }), {
    width: a,
    height: i,
    afterWidth: f,
    afterHeight: l,
    initWH: c
  };
}, ee = Object.assign, te = (e) => Array.isArray(e) && e.length, y = /* @__PURE__ */ B({
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
    const t = v(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let a = H(() => te(e.color) ? ee(r, e.color) : r);
    const {
      width: i,
      height: f,
      initWH: l
    } = Z(t);
    return {
      width: i,
      height: f,
      initWH: l,
      loading1: t,
      defaultColor: r,
      realColor: a
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
y.install = function(e) {
  e.component(y.name, y);
};
const re = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(y);
  }
};
export {
  y as Loading1,
  re as default
};
