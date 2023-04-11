import './style.css';
import { getCurrentScope as E, onScopeDispose as H, unref as T, watch as A, ref as h, onMounted as S, onUnmounted as N, nextTick as z, defineComponent as F, reactive as Q, provide as C, openBlock as $, createElementBlock as k, createElementVNode as B, renderSlot as L, createCommentVNode as D } from "vue";
const j = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
};
function M(e, i) {
  const t = window.MutationObserver, n = new t(i);
  return n.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), n;
}
var I;
const P = typeof window < "u", U = (e) => typeof e == "string", m = () => {
};
P && ((I = window == null ? void 0 : window.navigator) != null && I.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function y(e) {
  return typeof e == "function" ? e() : T(e);
}
function V(e, i) {
  function t(...n) {
    return new Promise((s, o) => {
      Promise.resolve(e(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(s).catch(o);
    });
  }
  return t;
}
function X(e, i = {}) {
  let t, n, s = m;
  const o = (l) => {
    clearTimeout(l), s(), s = m;
  };
  return (l) => {
    const c = y(e), u = y(i.maxWait);
    return t && o(t), c <= 0 || u !== void 0 && u <= 0 ? (n && (o(n), n = null), Promise.resolve(l())) : new Promise((r, a) => {
      s = i.rejectOnCancel ? a : r, u && !n && (n = setTimeout(() => {
        t && o(t), n = null, r(l());
      }, u)), t = setTimeout(() => {
        n && o(n), n = null, r(l());
      }, c);
    });
  };
}
function Y(e) {
  return e;
}
function G(e) {
  return E() ? (H(e), !0) : !1;
}
function K(e, i = 200, t = {}) {
  return V(X(i, t), e);
}
function q(e) {
  var i;
  const t = y(e);
  return (i = t == null ? void 0 : t.$el) != null ? i : t;
}
const J = P ? window : void 0;
function Z(...e) {
  let i, t, n, s;
  if (U(e[0]) || Array.isArray(e[0]) ? ([t, n, s] = e, i = J) : [i, t, n, s] = e, !i)
    return m;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const o = [], f = () => {
    o.forEach((r) => r()), o.length = 0;
  }, l = (r, a, d) => (r.addEventListener(a, d, s), () => r.removeEventListener(a, d, s)), c = A(() => q(i), (r) => {
    f(), r && o.push(...t.flatMap((a) => n.map((d) => l(r, a, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), f();
  };
  return G(u), u;
}
const _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, O = "__vueuse_ssr_handlers__";
_[O] = _[O] || {};
_[O];
var R;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(R || (R = {}));
var ee = Object.defineProperty, W = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable, x = (e, i, t) => i in e ? ee(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, ie = (e, i) => {
  for (var t in i || (i = {}))
    te.call(i, t) && x(e, t, i[t]);
  if (W)
    for (var t of W(i))
      ne.call(i, t) && x(e, t, i[t]);
  return e;
};
const re = {
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
ie({
  linear: Y
}, re);
const se = (e, i, t, n) => {
  const s = h(0), o = h(0), f = h(0), l = h(0);
  let c, u = null, r = null;
  const a = (p = !0) => new Promise((v) => {
    z(() => {
      r = e.value, s.value = e.value ? e.value.clientWidth : 0, o.value = e.value ? e.value.clientHeight : 0, f.value = r ? r.getBoundingClientRect().width : 0, l.value = r ? r.getBoundingClientRect().height : 0, e.value ? (!s.value || !o.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof i == "function" && p && i(), v(!0);
    });
  }), d = () => {
    u = M(r, c), Z(window, "resize", c);
  }, g = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, w = async () => {
    await a(!1), c = K(a, 200), d(), typeof t == "function" && t();
  };
  return S(() => {
    w();
  }), N(() => {
    g();
  }), {
    width: s,
    height: o,
    afterWidth: f,
    afterHeight: l,
    initWH: a
  };
}, oe = { class: "f-screen-container" }, b = /* @__PURE__ */ F({
  name: "index",
  props: j,
  setup(e) {
    const i = e, t = h(null), n = Q({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let s = h(1), o = h(1);
    C("scaleX", s), C("scaleY", o);
    const f = () => {
      i.width && i.height ? (n.width = i.width, n.height = i.height) : (n.width = t.value.clientWidth, n.height = t.value.clientHeight);
      const { width: a, height: d } = window.screen;
      n.screenWidth = a, n.screenHeight = d;
    }, l = () => {
      n.width && n.height ? (t.value.style.width = `${n.width}px`, t.value.style.height = `${n.height}px`) : (t.value.style.width = `${n.screenWidth}px`, t.value.style.height = `${n.screenHeight}px`);
    }, c = () => {
      const a = document.body.clientWidth, d = document.body.clientHeight, g = n.width || n.screenWidth, w = n.height || n.screenHeight, p = a / +g, v = d / +w;
      s.value = p, o.value = v, t.value.style.transform = `scale(${p}, ${v})`;
    };
    return se(t, () => {
      c();
    }, () => {
      f(), l(), c(), i.onAfterResize(), n.isReady = !0;
    }), (a, d) => ($(), k("div", oe, [
      B("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: t
      }, [
        n.isReady ? L(a.$slots, "default", { key: 0 }) : D("", !0)
      ], 512)
    ]));
  }
});
b.install = function(e) {
  e.component("FScreenContainer", b);
};
const ue = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(b);
  }
};
export {
  b as ScreenContainer,
  ue as default
};
