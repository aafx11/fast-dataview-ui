import { getCurrentScope as B, onScopeDispose as W, unref as F, watch as Q, ref as p, onMounted as P, onUnmounted as A, nextTick as H, defineComponent as N, createVNode as h, renderSlot as R } from "vue";
function S(e, n) {
  const t = new MutationObserver(n);
  return t.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), t;
}
var b;
const x = typeof window < "u", D = (e) => typeof e == "string", m = () => {
};
x && ((b = window == null ? void 0 : window.navigator) != null && b.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function g(e) {
  return typeof e == "function" ? e() : F(e);
}
function L(e, n) {
  function t(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return t;
}
function j(e, n = {}) {
  let t, r, o = m;
  const i = (a) => {
    clearTimeout(a), o(), o = m;
  };
  return (a) => {
    const l = g(e), u = g(n.maxWait);
    return t && i(t), l <= 0 || u !== void 0 && u <= 0 ? (r && (i(r), r = null), Promise.resolve(a())) : new Promise((s, c) => {
      o = n.rejectOnCancel ? c : s, u && !r && (r = setTimeout(() => {
        t && i(t), r = null, s(a());
      }, u)), t = setTimeout(() => {
        r && i(r), r = null, s(a());
      }, l);
    });
  };
}
function U(e) {
  return e;
}
function k(e) {
  return B() ? (W(e), !0) : !1;
}
function z(e, n = 200, t = {}) {
  return L(j(n, t), e);
}
function M(e) {
  var n;
  const t = g(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const V = x ? window : void 0;
function G(...e) {
  let n, t, r, o;
  if (D(e[0]) || Array.isArray(e[0]) ? ([t, r, o] = e, n = V) : [n, t, r, o] = e, !n)
    return m;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const i = [], f = () => {
    i.forEach((s) => s()), i.length = 0;
  }, a = (s, c, d) => (s.addEventListener(c, d, o), () => s.removeEventListener(c, d, o)), l = Q(() => M(n), (s) => {
    f(), s && i.push(...t.flatMap((c) => r.map((d) => a(s, c, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), f();
  };
  return k(u), u;
}
const w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, O = "__vueuse_ssr_handlers__";
w[O] = w[O] || {};
w[O];
var y;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(y || (y = {}));
var $ = Object.defineProperty, _ = Object.getOwnPropertySymbols, K = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable, I = (e, n, t) => n in e ? $(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, J = (e, n) => {
  for (var t in n || (n = {}))
    K.call(n, t) && I(e, t, n[t]);
  if (_)
    for (var t of _(n))
      q.call(n, t) && I(e, t, n[t]);
  return e;
};
const X = {
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
J({
  linear: U
}, X);
const Y = (e, n, t) => {
  const r = p(0), o = p(0), i = p(0), f = p(0);
  let a, l = null, u = null;
  const s = (E = !0) => new Promise((T) => {
    H(() => {
      u = e.value, r.value = e.value ? e.value.clientWidth : 0, o.value = e.value ? e.value.clientHeight : 0, i.value = u ? u.getBoundingClientRect().width : 0, f.value = u ? u.getBoundingClientRect().height : 0, e.value ? (!r.value || !o.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && E && n(), T(!0);
    });
  }), c = () => {
    l = S(u, a), G(window, "resize", a);
  }, d = () => {
    l && (l.disconnect(), l.takeRecords(), l = null);
  }, C = async () => {
    await s(!1), a = z(s, 200), c(), typeof t == "function" && t();
  };
  return P(() => {
    C();
  }), A(() => {
    d();
  }), {
    width: r,
    height: o,
    afterWidth: i,
    afterHeight: f,
    initWH: s
  };
}, v = /* @__PURE__ */ N({
  name: "FBorderBox1",
  setup(e, {
    slots: n
  }) {
    const t = p(null), {
      width: r,
      height: o,
      initWH: i
    } = Y(t);
    return P(() => {
      console.log("边框加载", t.value);
    }), {
      width: r,
      height: o,
      initWH: i,
      borderBox1: t
    };
  },
  render() {
    const {
      $slots: e,
      width: n,
      height: t
    } = this;
    return console.log("边框宽高", n, "/", t), h("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [h("svg", {
      class: "f-svg-container",
      width: n,
      height: t
    }, null), h("div", null, [R(e, "default")])]);
  }
});
v.install = function(e) {
  e.component(v.name, v);
};
const ee = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(v);
  }
};
export {
  v as BorderBox1,
  ee as default
};
