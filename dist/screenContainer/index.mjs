import './style.css';
import { unref as H, getCurrentScope as T, onScopeDispose as A, watch as S, ref as p, onMounted as N, onUnmounted as z, nextTick as F, defineComponent as Q, reactive as $, provide as O, openBlock as k, createElementBlock as B, createElementVNode as L, renderSlot as D, createCommentVNode as b } from "vue";
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
    // 观察所有监听的节点属性值的变化
    attributeFilter: ["style"],
    // 监听的属性
    attributeOldValue: !0
    // 记录上一次被监听的节点的属性变化 
  }), n;
}
var C;
const E = typeof window < "u", U = (e) => typeof e == "string", y = () => {
};
E && ((C = window == null ? void 0 : window.navigator) != null && C.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function w(e) {
  return typeof e == "function" ? e() : H(e);
}
function V(e, i) {
  function t(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return t;
}
function X(e, i = {}) {
  let t, n, o = y;
  const s = (l) => {
    clearTimeout(l), o(), o = y;
  };
  return (l) => {
    const c = w(e), u = w(i.maxWait);
    return t && s(t), c <= 0 || u !== void 0 && u <= 0 ? (n && (s(n), n = null), Promise.resolve(l())) : new Promise((r, a) => {
      o = i.rejectOnCancel ? a : r, u && !n && (n = setTimeout(() => {
        t && s(t), n = null, r(l());
      }, u)), t = setTimeout(() => {
        n && s(n), n = null, r(l());
      }, c);
    });
  };
}
function Y(e) {
  return e;
}
function G(e) {
  return T() ? (A(e), !0) : !1;
}
function K(e, i = 200, t = {}) {
  return V(X(i, t), e);
}
function q(e) {
  var i;
  const t = w(e);
  return (i = t == null ? void 0 : t.$el) != null ? i : t;
}
const J = E ? window : void 0;
function Z(...e) {
  let i, t, n, o;
  if (U(e[0]) || Array.isArray(e[0]) ? ([t, n, o] = e, i = J) : [i, t, n, o] = e, !i)
    return y;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const s = [], f = () => {
    s.forEach((r) => r()), s.length = 0;
  }, l = (r, a, d, h) => (r.addEventListener(a, d, h), () => r.removeEventListener(a, d, h)), c = S(() => [q(i), w(o)], ([r, a]) => {
    f(), r && s.push(...t.flatMap((d) => n.map((h) => l(r, d, h, a))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), f();
  };
  return G(u), u;
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, R = "__vueuse_ssr_handlers__";
I[R] = I[R] || {};
var W;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(W || (W = {}));
var ee = Object.defineProperty, x = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable, P = (e, i, t) => i in e ? ee(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, ie = (e, i) => {
  for (var t in i || (i = {}))
    te.call(i, t) && P(e, t, i[t]);
  if (x)
    for (var t of x(i))
      ne.call(i, t) && P(e, t, i[t]);
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
  const o = p(0), s = p(0), f = p(0), l = p(0);
  let c, u = null, r = null;
  const a = (v = !0) => new Promise((g) => {
    F(() => {
      r = e.value, o.value = e.value ? e.value.clientWidth : 0, s.value = e.value ? e.value.clientHeight : 0, f.value = r ? r.getBoundingClientRect().width : 0, l.value = r ? r.getBoundingClientRect().height : 0, e.value ? (!o.value || !s.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof i == "function" && v && i(), g(!0);
    });
  }), d = () => {
    u = M(r, c), Z(window, "resize", c);
  }, h = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, m = async () => {
    await a(!1), c = K(a, 300), d(), typeof t == "function" && t();
  };
  return N(() => {
    m();
  }), z(() => {
    h();
  }), {
    width: o,
    height: s,
    afterWidth: f,
    afterHeight: l,
    initWH: a
  };
}, oe = { class: "f-screen-container" }, _ = /* @__PURE__ */ Q({
  __name: "index",
  props: j,
  setup(e) {
    const i = e, t = p(null), n = $({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let o = p(1), s = p(1);
    O("scaleX", o), O("scaleY", s);
    const f = () => {
      i.width && i.height ? (n.width = i.width, n.height = i.height) : (n.width = t.value.clientWidth, n.height = t.value.clientHeight);
      const { width: a, height: d } = window.screen;
      n.screenWidth = a, n.screenHeight = d;
    }, l = () => {
      n.width && n.height ? (t.value.style.width = `${n.width}px`, t.value.style.height = `${n.height}px`) : (t.value.style.width = `${n.screenWidth}px`, t.value.style.height = `${n.screenHeight}px`);
    }, c = () => {
      const a = document.body.clientWidth, d = document.body.clientHeight, h = n.width || n.screenWidth, m = n.height || n.screenHeight, v = a / +h, g = d / +m;
      o.value = v, s.value = g, t.value.style.transform = `scale(${v}, ${g})`;
    };
    return se(t, () => {
      c();
    }, () => {
      f(), l(), c(), i.onAfterResize(), n.isReady = !0;
    }), (a, d) => (k(), B("div", oe, [
      L(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: t
        },
        [
          n.isReady ? D(a.$slots, "default", { key: 0 }) : b("v-if", !0),
          b(" <slot></slot> ")
        ],
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
_.install = function(e) {
  e.component("FScreenContainer", _);
};
const ue = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(_);
  }
};
export {
  _ as ScreenContainer,
  ue as default
};
