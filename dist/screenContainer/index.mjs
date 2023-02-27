import './style.css';
import { getCurrentScope as E, onScopeDispose as H, unref as T, watch as A, ref as h, onMounted as S, onUnmounted as z, nextTick as F, defineComponent as N, reactive as Q, provide as I, openBlock as $, createElementBlock as B, createElementVNode as k, renderSlot as D } from "vue";
const L = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
};
function j(e, i) {
  const t = new MutationObserver(i);
  return t.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), t;
}
var C;
const P = typeof window < "u", U = (e) => typeof e == "string", w = () => {
};
P && ((C = window == null ? void 0 : window.navigator) != null && C.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function y(e) {
  return typeof e == "function" ? e() : T(e);
}
function X(e, i) {
  function t(...n) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(r).catch(s);
    });
  }
  return t;
}
function Y(e, i = {}) {
  let t, n, r = w;
  const s = (u) => {
    clearTimeout(u), r(), r = w;
  };
  return (u) => {
    const c = y(e), a = y(i.maxWait);
    return t && s(t), c <= 0 || a !== void 0 && a <= 0 ? (n && (s(n), n = null), Promise.resolve(u())) : new Promise((o, l) => {
      r = i.rejectOnCancel ? l : o, a && !n && (n = setTimeout(() => {
        t && s(t), n = null, o(u());
      }, a)), t = setTimeout(() => {
        n && s(n), n = null, o(u());
      }, c);
    });
  };
}
function M(e) {
  return e;
}
function V(e) {
  return E() ? (H(e), !0) : !1;
}
function G(e, i = 200, t = {}) {
  return X(Y(i, t), e);
}
function K(e) {
  var i;
  const t = y(e);
  return (i = t == null ? void 0 : t.$el) != null ? i : t;
}
const q = P ? window : void 0;
function J(...e) {
  let i, t, n, r;
  if (U(e[0]) || Array.isArray(e[0]) ? ([t, n, r] = e, i = q) : [i, t, n, r] = e, !i)
    return w;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const s = [], f = () => {
    s.forEach((o) => o()), s.length = 0;
  }, u = (o, l, d) => (o.addEventListener(l, d, r), () => o.removeEventListener(l, d, r)), c = A(() => K(i), (o) => {
    f(), o && s.push(...t.flatMap((l) => n.map((d) => u(o, l, d))));
  }, { immediate: !0, flush: "post" }), a = () => {
    c(), f();
  };
  return V(a), a;
}
const m = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _ = "__vueuse_ssr_handlers__";
m[_] = m[_] || {};
m[_];
var R;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(R || (R = {}));
var Z = Object.defineProperty, W = Object.getOwnPropertySymbols, ee = Object.prototype.hasOwnProperty, te = Object.prototype.propertyIsEnumerable, x = (e, i, t) => i in e ? Z(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, ne = (e, i) => {
  for (var t in i || (i = {}))
    ee.call(i, t) && x(e, t, i[t]);
  if (W)
    for (var t of W(i))
      te.call(i, t) && x(e, t, i[t]);
  return e;
};
const ie = {
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
ne({
  linear: M
}, ie);
const re = (e, i, t) => {
  const n = h(0), r = h(0), s = h(0), f = h(0);
  let u, c = null, a = null;
  const o = (g = !0) => new Promise((p) => {
    F(() => {
      a = e.value, n.value = e.value ? e.value.clientWidth : 0, r.value = e.value ? e.value.clientHeight : 0, s.value = a ? a.getBoundingClientRect().width : 0, f.value = a ? a.getBoundingClientRect().height : 0, e.value ? (!n.value || !r.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof i == "function" && g && i(), p(!0);
    });
  }), l = () => {
    c = j(a, u), J(window, "resize", u);
  }, d = () => {
    c && (c.disconnect(), c.takeRecords(), c = null);
  }, v = async () => {
    await o(!1), u = G(o, 200), l(), typeof t == "function" && t();
  };
  return S(() => {
    v();
  }), z(() => {
    d();
  }), {
    width: n,
    height: r,
    afterWidth: s,
    afterHeight: f,
    initWH: o
  };
}, se = { class: "f-screen-container" }, O = /* @__PURE__ */ N({
  name: "index",
  props: L,
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
    let r = h(1), s = h(1);
    I("scaleX", r), I("scaleY", s);
    const f = () => {
      i.width && i.height ? (n.width = i.width, n.height = i.height) : (n.width = t.value.clientWidth, n.height = t.value.clientHeight);
      const { width: l, height: d } = window.screen;
      n.screenWidth = l, n.screenHeight = d;
    }, u = () => {
      n.width && n.height ? (t.value.style.width = `${n.width}px`, t.value.style.height = `${n.height}px`) : (t.value.style.width = `${n.screenWidth}px`, t.value.style.height = `${n.screenHeight}px`);
    }, c = () => {
      const l = document.body.clientWidth, d = document.body.clientHeight, v = n.width || n.screenWidth, g = n.height || n.screenHeight, p = l / +v, b = d / +g;
      r.value = p, s.value = b, t.value.style.transform = `scale(${p}, ${b})`;
    };
    return re(t, () => {
      f(), u(), c();
    }, () => {
      u(), c(), i.onAfterResize(), n.isReady = !0;
    }), (l, d) => ($(), B("div", se, [
      k("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: t
      }, [
        D(l.$slots, "default")
      ], 512)
    ]));
  }
});
O.install = function(e) {
  e.component("FScreenContainer", O);
};
const ae = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(O);
  }
};
export {
  O as ScreenContainer,
  ae as default
};
