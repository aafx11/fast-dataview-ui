import { createVNode as p, unref as Q, getCurrentScope as z, onScopeDispose as q, watch as B, ref as y, onMounted as j, onUnmounted as U, nextTick as V, defineComponent as X, computed as W, Fragment as G } from "vue";
const Y = {
  // 当前液位
  currLevel: {
    type: Number,
    default: 0
  },
  // 最高液位
  maxLevel: {
    type: Number
  },
  // 水位图的形状
  shape: {
    type: String,
    default: "rect"
  },
  // 水的形状
  waterShape: {
    type: String,
    default: "wave"
  },
  // 背景颜色
  background: {
    type: String,
    default: "transparent"
  },
  // 边框宽度
  borderWidth: {
    type: Number,
    default: 10
  },
  // 边框颜色
  borderColors: {
    type: Array,
    default: ["#294d99", "#294d99"]
  },
  // 是否展示中心圆球
  showCenterCircle: {
    type: Boolean,
    default: !0
  },
  // 中心圆球半径
  centerCircleRadius: {
    type: Number,
    default: 50
  },
  // 横线配置
  lineOption: {
    type: Array,
    default: () => []
  },
  // 波浪配置
  waveOption: {
    type: Array,
    default: () => [{
      offestTop: 0,
      waveScale: 15,
      waveDirection: "right",
      waveDuration: 10 * 1e3,
      begin: 0,
      waveColor: "#4579e2"
    }]
  },
  // 文本配置
  textOption: {
    type: Object,
    default: () => ({
      show: !0,
      offest: [0, 0],
      fontSize: 22,
      color: "white"
    })
  }
}, D = Object.assign, K = (e, n, t, r, o) => {
  let c = D({}, {
    offestTop: 0,
    waveScale: 15,
    waveDirection: "right",
    waveDuration: 1e4,
    begin: 0,
    waveColor: "#4579e2"
  }, n), l = c.waveScale, f = 4 * l, i = 10 * l, u = Math.ceil(t / i || 0);
  if (!u || !o)
    return;
  let v = r - f, w = v * (1 - o), a = 3 * l, d = 1 * l, h = 8 * l, m = 4 * l, b = `m 0 ${w + c.offestTop} c ${a} ${-d}, ${h} ${-m}, ${i} 0`, S = `s${h} ${-m}, ${i} 0`, g = `s ${i - a} ${d}, ${i} 0`, H = `v ${v * o + f} H 0`, C = "";
  for (let T = 0; T < u - 1; T++)
    C = `${C}${S}${g}`;
  let F = `${b}${g}${C}${H}`, R = c.waveDirection === "left" ? "0 0" : `${-(2 * i)} 0`, M = c.waveDirection === "left" ? `${-(2 * i)} 0` : "0 0";
  return p("path", {
    class: e.e("wave"),
    d: F,
    fill: c.waveColor
  }, [p("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "translate",
    begin: c.begin ? `${c.begin}ms` : 0,
    from: R,
    to: M,
    dur: `${c.waveDuration}ms`,
    repeatCount: "indefinite"
  }, null)]);
};
function $(e, n, t) {
  let r = e;
  return n && (r += `__${n}`), t && (r += `--${t}`), r;
}
function J(e, n = !1) {
  const t = n ? `.f-${e}` : `f-${e}`;
  return {
    b: () => $(t),
    e: (l) => l ? $(t, l) : "",
    m: (l) => l ? $(t, "", l) : "",
    em: (l, f) => l && f ? $(t, l, f) : ""
  };
}
function Z(e, n) {
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
var I;
const A = typeof window < "u", ee = (e) => typeof e == "string", _ = () => {
};
A && ((I = window == null ? void 0 : window.navigator) != null && I.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function x(e) {
  return typeof e == "function" ? e() : Q(e);
}
function te(e, n) {
  function t(...r) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(o).catch(s);
    });
  }
  return t;
}
function ne(e, n = {}) {
  let t, r, o = _;
  const s = (l) => {
    clearTimeout(l), o(), o = _;
  };
  return (l) => {
    const f = x(e), i = x(n.maxWait);
    return t && s(t), f <= 0 || i !== void 0 && i <= 0 ? (r && (s(r), r = null), Promise.resolve(l())) : new Promise((u, v) => {
      o = n.rejectOnCancel ? v : u, i && !r && (r = setTimeout(() => {
        t && s(t), r = null, u(l());
      }, i)), t = setTimeout(() => {
        r && s(r), r = null, u(l());
      }, f);
    });
  };
}
function re(e) {
  return e;
}
function ae(e) {
  return z() ? (q(e), !0) : !1;
}
function le(e, n = 200, t = {}) {
  return te(ne(n, t), e);
}
function oe(e) {
  var n;
  const t = x(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const ie = A ? window : void 0;
function ue(...e) {
  let n, t, r, o;
  if (ee(e[0]) || Array.isArray(e[0]) ? ([t, r, o] = e, n = ie) : [n, t, r, o] = e, !n)
    return _;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const s = [], c = () => {
    s.forEach((u) => u()), s.length = 0;
  }, l = (u, v, w, a) => (u.addEventListener(v, w, a), () => u.removeEventListener(v, w, a)), f = B(() => [oe(n), x(o)], ([u, v]) => {
    c(), u && s.push(...t.flatMap((w) => r.map((a) => l(u, w, a, v))));
  }, { immediate: !0, flush: "post" }), i = () => {
    f(), c();
  };
  return ae(i), i;
}
const L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, P = "__vueuse_ssr_handlers__";
L[P] = L[P] || {};
var E;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(E || (E = {}));
var se = Object.defineProperty, N = Object.getOwnPropertySymbols, ce = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable, k = (e, n, t) => n in e ? se(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, de = (e, n) => {
  for (var t in n || (n = {}))
    ce.call(n, t) && k(e, t, n[t]);
  if (N)
    for (var t of N(n))
      fe.call(n, t) && k(e, t, n[t]);
  return e;
};
const ve = {
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
de({
  linear: re
}, ve);
const pe = (e, n, t, r) => {
  const o = y(0), s = y(0), c = y(0), l = y(0);
  let f, i = null, u = null;
  const v = (h = !0) => new Promise((m) => {
    V(() => {
      u = e.value, o.value = e.value ? e.value.clientWidth : 0, s.value = e.value ? e.value.clientHeight : 0, c.value = u ? u.getBoundingClientRect().width : 0, l.value = u ? u.getBoundingClientRect().height : 0, e.value ? (!o.value || !s.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && h && n(), m(!0);
    });
  }), w = () => {
    i = Z(u, f), ue(window, "resize", f);
  }, a = () => {
    i && (i.disconnect(), i.takeRecords(), i = null);
  }, d = async () => {
    await v(!1), f = le(v, 300), w(), typeof t == "function" && t();
  };
  return j(() => {
    d();
  }), U(() => {
    a();
  }), {
    width: o,
    height: s,
    afterWidth: c,
    afterHeight: l,
    initWH: v
  };
}, O = /* @__PURE__ */ X({
  name: "FLiquidChart",
  props: Y,
  setup(e, n) {
    const t = y(), r = J("liquid-chart"), {
      width: o,
      height: s,
      initWH: c
    } = pe(t), l = () => {
      let a = e.borderWidth / 2, d = `${a},0`, h = `${a},${s.value - a}`, m = `${o.value - a},${s.value - a}`, b = `${o.value - a},0`;
      return p("svg", {
        class: r.e("rect-wrap"),
        style: {
          background: e.background
        }
      }, [Array.from({
        length: 4
      }).map((S, g) => p("path", {
        class: r.e("top-border"),
        d: `M ${a},${0 + g * 4} ${o.value - a},${0 + g * 4}`,
        fill: "none",
        "stroke-dasharray": "20 10",
        stroke: e.borderColors[1],
        "stroke-width": 1
      }, null)), p("path", {
        d: `M ${d} ${h} ${m} ${b}`,
        fill: "none",
        stroke: e.borderColors[0],
        "stroke-width": e.borderWidth
      }, null)]);
    };
    let f = W(() => {
      let a = 0.5;
      return e.currLevel || (a = 0), e.maxLevel ? (a = e.currLevel / e.maxLevel, a > 1 ? 1 : a) : a;
    });
    const i = W(() => ({
      left: `${e.borderWidth}px`,
      width: `calc(100% - ${e.borderWidth * 2}px)`,
      height: `calc(100% - ${e.borderWidth}px)`
    })), u = () => p("svg", {
      class: r.e("wave-wrap"),
      style: {
        ...i.value
      }
    }, [e.waveOption.map((a) => K(r, a, o.value, s.value, f.value)), w()]), v = () => {
      let d = D({}, {
        show: !0,
        offest: [0, 0],
        fontSize: 18,
        color: "white"
      }, e.textOption);
      if (!d.show)
        return;
      let h = d.text, m = h ? h.replace("{level}", String(e.currLevel)).replace("{percent}", String((f.value * 100).toFixed(2))) : e.currLevel, b = W(() => ({
        color: d.color,
        fontSize: `${d.fontSize}px`,
        transform: `translate(calc(-50% + ${d.offest[0]}px), calc(-50% + ${d.offest[1]}px))`
      }));
      return p("text", {
        class: r.e("center-text"),
        style: {
          ...b.value
        }
      }, [m]);
    }, w = () => {
      if (e.maxLevel)
        return e.lineOption.map((a) => {
          let d = (1 - a.level / e.maxLevel) * s.value, h = a.text ? a.text.replace("{level}", String(a.level)) : a.level;
          return p(G, null, [p("path", {
            class: r.e("line"),
            d: `M 0 ${d},H ${o.value}`,
            fill: "none",
            "stroke-dasharray": "20 10",
            stroke: a.color,
            "stroke-width": 1
          }, null), p("text", {
            class: r.e("line-text"),
            x: o.value / 2,
            y: d,
            fill: a.color
          }, [h])]);
        });
    };
    return n.expose({
      resize: c
    }), () => p("div", {
      ref: t,
      class: r.b()
    }, [e.shape === "rect" ? l() : p("div", null, null), e.waterShape === "wave" ? u() : p("div", null, null), v()]);
  }
});
O.install = function(e) {
  e.component(O.name, O);
};
const we = {
  title: "liquidChart 水位图",
  name: "liquidChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(O);
  }
};
export {
  O as LiquidChart,
  we as default
};
