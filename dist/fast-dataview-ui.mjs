import './style.css';
import { unref as w, getCurrentScope as Xe, onScopeDispose as Ye, watch as ee, ref as L, onMounted as te, onUnmounted as Ve, nextTick as Qe, defineComponent as F, computed as S, createVNode as b, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as z, createElementVNode as x, toDisplayString as N, reactive as Z, provide as we, createCommentVNode as E, inject as xe, normalizeClass as K, getCurrentInstance as Ee, onBeforeUnmount as Ge, Fragment as M, renderList as Q, TransitionGroup as Oe, withCtx as fe, normalizeProps as Ue, guardReactiveProps as qe, withDirectives as be, vShow as ke, createStaticVNode as Ke } from "vue";
function Ze(e, t) {
  const r = window.MutationObserver, l = new r(t);
  return l.observe(e, {
    attributes: !0,
    // 观察所有监听的节点属性值的变化
    attributeFilter: ["style"],
    // 监听的属性
    attributeOldValue: !0
    // 记录上一次被监听的节点的属性变化 
  }), l;
}
var Se;
const Ne = typeof window < "u", Je = (e) => typeof e == "string", he = () => {
};
Ne && ((Se = window == null ? void 0 : window.navigator) != null && Se.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return typeof e == "function" ? e() : w(e);
}
function je(e, t) {
  function r(...l) {
    return new Promise((c, a) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(c).catch(a);
    });
  }
  return r;
}
function et(e, t = {}) {
  let r, l, c = he;
  const a = (i) => {
    clearTimeout(i), c(), c = he;
  };
  return (i) => {
    const n = ce(e), s = ce(t.maxWait);
    return r && a(r), n <= 0 || s !== void 0 && s <= 0 ? (l && (a(l), l = null), Promise.resolve(i())) : new Promise((o, p) => {
      c = t.rejectOnCancel ? p : o, s && !l && (l = setTimeout(() => {
        r && a(r), l = null, o(i());
      }, s)), r = setTimeout(() => {
        l && a(l), l = null, o(i());
      }, n);
    });
  };
}
function tt(e) {
  return e;
}
function rt(e) {
  return Xe() ? (Ye(e), !0) : !1;
}
function lt(e, t = 200, r = {}) {
  return je(et(t, r), e);
}
function nt(e) {
  var t;
  const r = ce(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const it = Ne ? window : void 0;
function st(...e) {
  let t, r, l, c;
  if (Je(e[0]) || Array.isArray(e[0]) ? ([r, l, c] = e, t = it) : [t, r, l, c] = e, !t)
    return he;
  Array.isArray(r) || (r = [r]), Array.isArray(l) || (l = [l]);
  const a = [], u = () => {
    a.forEach((o) => o()), a.length = 0;
  }, i = (o, p, g, m) => (o.addEventListener(p, g, m), () => o.removeEventListener(p, g, m)), n = ee(() => [nt(t), ce(c)], ([o, p]) => {
    u(), o && a.push(...r.flatMap((g) => l.map((m) => i(o, g, m, p))));
  }, { immediate: !0, flush: "post" }), s = () => {
    n(), u();
  };
  return rt(s), s;
}
const Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = "__vueuse_ssr_handlers__";
Ce[Pe] = Ce[Pe] || {};
var Ie;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ie || (Ie = {}));
var ot = Object.defineProperty, Le = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, De = (e, t, r) => t in e ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ut = (e, t) => {
  for (var r in t || (t = {}))
    at.call(t, r) && De(e, r, t[r]);
  if (Le)
    for (var r of Le(t))
      ct.call(t, r) && De(e, r, t[r]);
  return e;
};
const dt = {
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
ut({
  linear: tt
}, dt);
const re = (e, t, r, l) => {
  const c = L(0), a = L(0), u = L(0), i = L(0);
  let n, s = null, o = null;
  const p = (h = !0) => new Promise(($) => {
    Qe(() => {
      o = e.value, c.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = o ? o.getBoundingClientRect().width : 0, i.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!c.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && h && t(), $(!0);
    });
  }), g = () => {
    s = Ze(o, n), st(window, "resize", n);
  }, m = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, d = async () => {
    await p(!1), n = lt(p, 200), g(), typeof r == "function" && r();
  };
  return te(() => {
    d();
  }), Ve(() => {
    m();
  }), {
    width: c,
    height: a,
    afterWidth: u,
    afterHeight: i,
    initWH: p
  };
}, Be = {
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
}, V = Object.assign, le = (e) => Array.isArray(e) && e.length, ue = (e) => Array.isArray(e) && e || [], H = (e) => e >= 0 ? e : 0, ft = (e, t, r = "reverse") => e.sort(ht(t, r)), ht = (e, t = "reverse") => function(r, l) {
  return r[e] < l[e] ? t === "normal" ? -1 : 1 : r[e] > l[e] ? t === "normal" ? 1 : -1 : 0;
}, Y = (e, t = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (t.get(e))
    return t.get(e);
  let r = new e.constructor();
  t.set(e, r);
  for (let l in e)
    e.hasOwnProperty(l) && (r[l] = Y(e[l], t));
  return r;
}, Te = (e, t) => {
  const r = Math.abs(e[0] - t[0]), l = Math.abs(e[1] - t[1]);
  return Math.sqrt(r * r + l * l);
}, ie = /* @__PURE__ */ F({
  name: "FBorderBox1",
  props: Be,
  setup(e, {
    slots: t
  }) {
    const r = L(null), l = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = S(() => le(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(r);
    return {
      width: a,
      height: u,
      initWH: i,
      borderBox1: r,
      defaultColor: l,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      backgroundColor: l,
      strokeWidth: c,
      realColor: a,
      title: u
    } = this, i = 20;
    let n = c || 2, s = H(t - n - 2), o = H(r - n - 2);
    return b("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [b("svg", {
      class: "f-svg-container",
      width: s,
      height: o
    }, [b("polygon", {
      fill: l,
      stroke: a[0],
      "stroke-width": n,
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${o - i}, ${s - i} ${o},
            ${i} ${o}, ${n} ${o - i}, ${n} ${i}
          `
    }, null), b("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${i - 8} 0,0 ${i - 8}
          `
    }, null), b("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${s} ${o - i + 8}, ${s - i + 8 + n} ${o}
          `
    }, null), b("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
            ${n} ${i + 15}, ${n} ${i}, ${i} ${n} , ${i + 15} ${n}
          `
    }, null), b("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${i + 15} ${o}, ${i}  ${o}, ${n} ${o - i}, ${n} ${o - i - 15}
          `
    }, null), b("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${s - i - 15} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}
          `
    }, null), b("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
          ${s - i - 15} ${o}, ${s - i} ${o}, ${s - n} ${o - i}, ${s - n} ${o - i - 15}
          `
    }, null), u ? b("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}, ${n} ${i + 15},
            ${n} ${i}
          `
    }, null) : null, u ? b("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), b("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
ie.install = function(e) {
  e.component(ie.name, ie);
};
const gt = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ie);
  }
}, se = /* @__PURE__ */ F({
  name: "FBorderBox2",
  props: Be,
  setup(e, {
    slots: t
  }) {
    const r = L(null), l = ["white"];
    let c = S(() => le(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(r);
    return {
      width: a,
      height: u,
      initWH: i,
      borderBox2: r,
      defaultColor: l,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      backgroundColor: l,
      strokeWidth: c,
      realColor: a,
      duration: u,
      strokeDasharray: i
    } = this;
    let n = c || 3, s = H(n), o = H(n), p = H(t - n), g = H(n), m = H(t - n), d = H(r - n), h = H(n), $ = H(r - n);
    return b("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [b("svg", {
      class: "f-svg-container",
      width: t,
      height: r
    }, [b("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`,
        "--border-stroke-dasharray": i
      },
      stroke: a[0],
      "stroke-width": n,
      fill: l,
      d: `M ${s} ${o}, L ${p} ${g}, L ${m} ${d}, L ${h} ${$}, Z`
    }, null)]), b("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
se.install = function(e) {
  e.component(se.name, se);
};
const yt = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(se);
  }
}, oe = /* @__PURE__ */ F({
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
    slots: t
  }) {
    const r = L(null), l = ["#4f29f0", "#c3c8de", "#414856"];
    let c = S(() => le(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(r);
    return {
      width: a,
      height: u,
      initWH: i,
      loading1: r,
      defaultColor: l,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: r,
      duration: l
    } = this;
    return b("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${l}s`
      }
    }, [b("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [b("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), b("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), b("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [b("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), b("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), b("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [b("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), b("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), r ? b("div", {
      class: "f-loading-text",
      "data-text": r
    }, null) : null]);
  }
});
oe.install = function(e) {
  e.component(oe.name, oe);
};
const pt = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(oe);
  }
}, mt = F({
  name: "FLoading2",
  props: {
    width: { type: String, default: "100px" },
    height: { type: String, default: "100px" },
    color: { type: Array, default: () => [] },
    text: { type: String, default: "" },
    duration: { type: Number, default: 0.8 }
  },
  setup(e, { slots: t }) {
    const r = ["#d1d5db", "#3b82f6", "#3b82f6"];
    let l = S(() => le(e.color) ? V(r, e.color) : r);
    return {
      getLoadingStyle: S(() => ({
        width: e.width,
        height: e.height,
        color: l.value[2],
        "--border-color": l.value[0],
        "--border-top-color": l.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), ze = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [l, c] of t)
    r[l] = c;
  return r;
}, vt = /* @__PURE__ */ x(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), _t = { class: "loading-text" };
function $t(e, t, r, l, c, a) {
  return v(), _(
    "div",
    {
      class: "f-loading-2",
      style: z(e.getLoadingStyle)
    },
    [
      vt,
      x("div", _t, [
        G(e.$slots, "default", {}, () => [
          x(
            "div",
            null,
            N(e.text),
            1
            /* TEXT */
          )
        ])
      ])
    ],
    4
    /* STYLE */
  );
}
const ae = /* @__PURE__ */ ze(mt, [["render", $t]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const wt = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(ae);
  }
}, xt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, bt = { class: "f-screen-container" }, ge = /* @__PURE__ */ F({
  __name: "index",
  props: xt,
  setup(e) {
    const t = e, r = L(null), l = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let c = L(1), a = L(1);
    we("scaleX", c), we("scaleY", a);
    const u = () => {
      t.width && t.height ? (l.width = t.width, l.height = t.height) : (l.width = r.value.clientWidth, l.height = r.value.clientHeight);
      const { width: p, height: g } = window.screen;
      l.screenWidth = p, l.screenHeight = g;
    }, i = () => {
      l.width && l.height ? (r.value.style.width = `${l.width}px`, r.value.style.height = `${l.height}px`) : (r.value.style.width = `${l.screenWidth}px`, r.value.style.height = `${l.screenHeight}px`);
    }, n = () => {
      const p = document.body.clientWidth, g = document.body.clientHeight, m = l.width || l.screenWidth, d = l.height || l.screenHeight, h = p / +m, $ = g / +d;
      c.value = h, a.value = $, r.value.style.transform = `scale(${h}, ${$})`;
    };
    return re(r, () => {
      n();
    }, () => {
      u(), i(), n(), t.onAfterResize(), l.isReady = !0;
    }), (p, g) => (v(), _("div", bt, [
      x(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: r
        },
        [
          l.isReady ? G(p.$slots, "default", { key: 0 }) : E("v-if", !0),
          E(" <slot></slot> ")
        ],
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
ge.install = function(e) {
  e.component("FScreenContainer", ge);
};
const kt = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(ge);
  }
}, St = {
  width: { type: Number, default: 400 },
  // 画布宽度
  height: { type: Number, default: 400 },
  // 画布高度
  radius: { type: Number, default: 1.2 },
  // 粒子半径
  strength: { type: Number, default: 2 },
  // 吸引和排斥的力度
  // particleColors: { type: String, default: 'rgba(255, 255, 255, 1)' }, // 粒子颜色
  src: { type: String }
  // 图片url
}, Ct = 30, Pt = 1 / Ct;
class ye {
  // 粒子的透明度
  constructor(t, r, l, c, a, u, i) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * r >> 0, this.targetX = l, this.targetY = c, this.time = a, this.radius = u, this.colors = i, this.opacity = 0;
  }
  // 绘制粒子
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  /**
   * 根据鼠标与粒子的位置，更新粒子
   * @param {number} radius 鼠标影响的半径范围
   * @param {number} strength 吸引和排斥的力度
   * @param {number} mouseX 鼠标在X轴的位置
   * @param {number} mouseY 鼠标在Y轴的位置
   */
  update(t, r, l, c) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, l && c) {
      let a = l - this.x, u = c - this.y, i = Math.sqrt(a ** 2 + u ** 2), n = t / i;
      n = n > 7 ? 7 : n;
      let s = Math.atan2(u, a), o = Math.cos(s), p = Math.sin(s), g = o * n * -r, m = p * n * -r;
      this.velocityX += g, this.velocityY += m;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Pt);
  }
  // 切换粒子
  change(t, r, l) {
    this.targetX = t, this.targetY = r, this.colors = l;
  }
}
const Re = 30;
class It {
  // 动画的id，用于停止动画
  constructor(t, r, l) {
    this.radius = r, this.strength = l, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(t) {
    if (this.particleArr.length) {
      let r = t.particleData, l = r.length, c = this.particleArr, a = c.length;
      for (let i = 0; i < l; i++) {
        const { targetX: n, targetY: s, colors: o } = r[i];
        c[i] ? c[i].change(n, s, o) : c[i] = new ye(this.width, this.height, n, s, Re, this.radius, o);
      }
      l < a && (this.particleArr = c.splice(0, l)), c = this.particleArr;
      let u = c.length;
      for (; u; ) {
        let i = ~~(Math.random() * u--), n = c[i], { targetX: s, targetY: o, colors: p } = n;
        n.targetX = c[u].targetX, n.targetY = c[u].targetY, n.colors = c[u].colors, c[u].targetX = s, c[u].targetY = o, c[u].colors = p;
      }
    } else
      this.particleArr = t.particleData.map((r) => new ye(this.width, this.height, r.targetX, r.targetY, Re, this.radius, r.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const Lt = 30;
class Ae {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, r, l, c) {
    this.src = t, this.width = r, this.height = l, this.particleData = [], this.radius = c;
  }
  createParticleData(t = this.src) {
    return new Promise((r, l) => {
      let c = new Image();
      c.crossOrigin = "", c.src = decodeURI(new URL(t, import.meta.url).href), c.onload = () => {
        const a = document.createElement("canvas"), u = a.getContext("2d"), i = this.width, n = this.height;
        a.width = i, a.height = n, u == null || u.drawImage(c, 0, 0, i, n);
        const s = u == null ? void 0 : u.getImageData(0, 0, i, n).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let o = 0; o < n; o += 5)
          for (let p = 0; p < i; p += 5) {
            const g = (p + o * i) * 4, m = s[g + 3];
            if (m == 0)
              continue;
            const d = s[g], h = s[g + 1], $ = s[g + 2];
            if (d + h + $ + m) {
              const R = new ye(this.width, this.height, p, o, Lt, this.radius, `rgba(${d},${h},${$},${m})`);
              this.particleData.push(R);
            }
          }
        r(this.particleData);
      }, c.onerror = () => {
        l("图片转化成粒子失败");
      };
    });
  }
}
const Dt = ["width", "height"], pe = /* @__PURE__ */ F({
  __name: "index",
  props: St,
  setup(e, { expose: t }) {
    const r = e;
    let l = xe("scaleX", L(1)), c = xe("scaleY", L(1));
    const a = L(null), u = L(null);
    let i = L(), n = L();
    const s = async (p) => {
      n.value = new Ae(p, r.width, r.height, r.radius), await n.value.createParticleData(), i.value.changeImg(n.value);
    }, o = async () => {
      n.value = new Ae(r.src, r.width, r.height, r.radius), await n.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), i.value = new It(a.value, r.radius, r.strength), a.value.addEventListener("mousemove", (p) => {
        const { left: g, top: m } = a.value.getBoundingClientRect(), { clientX: d, clientY: h } = p;
        i.value.mouseX = (d - g) * (1 / l.value), i.value.mouseY = (h - m) * (1 / c.value);
      }), i.value.drawCanvas(), i.value.changeImg(n.value));
    };
    return te(() => {
      o();
    }), t({
      toggleImg: s
    }), (p, g) => (v(), _("div", null, [
      x("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: r.width,
        height: r.height
      }, null, 8, Dt)
    ]));
  }
});
pe.install = function(e) {
  e.component("FDynamicParticle", pe);
};
const Tt = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "20%",
  install(e) {
    e.use(pe);
  }
};
function Fe(e) {
  return {
    handleToggle: (l) => {
      e.emit("handle-toggle", l);
    },
    handleCellClick: (l, c, a, u, i) => {
      e.emit("cell-click", c, a, u, i, l);
    }
  };
}
function Rt(e, t, r) {
  const { handleToggle: l } = Fe(r), c = (g) => {
    let m = ue(g);
    return Y(m);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && l(t.name);
  }, u = async (g, m, d) => {
    let h = d;
    m.map(($) => $._index_ = ++h), e.currData.length ? g === t.pageSize ? e.currData = [...m] : (e.currData.push(...m), e.currData.splice(0, g)) : e.currData.push(...m);
  }, i = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let g;
      t.mode === "single" ? g = t.togglePage : g = t.pageSize;
      let m, d;
      e.currPage === 1 ? (m = 0, d = t.pageSize) : (m = g * (e.currPage - 2) + t.pageSize, d = g * (e.currPage - 1) + t.pageSize);
      let h = e.tableData.slice(m, d);
      h.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, h, m) : e.currPage === 1 ? await u(t.pageSize, h, m) : await u(g, h, m) : (e.currPage = 1, a(), i()), n();
    } else
      o(), e.currPage = 1, e.currData = [], e.isEmpty = !0, s();
  }, n = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, i();
    }, t.toggleDur));
  }, s = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      l(t.name);
    }, t.emptyEmitDur));
  }, o = (g = !0, m = !0) => {
    e.intervalId && g && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && m && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: c,
    setCurrData: i,
    setPageInterval: n,
    setEmptyTimeout: s,
    clearTimer: o,
    setPage: (g = 1) => {
      o(), e.currPage = g;
      let m;
      t.mode === "single" ? m = t.togglePage : m = t.pageSize;
      let d = m * (e.currPage - 1), h = m * (e.currPage - 1) + t.pageSize, $ = e.tableData.slice(d, h);
      $.length ? (u(t.pageSize, $, d), n()) : i(), e.tableData.length || s();
    }
  };
}
function At(e, t) {
  const r = S(() => function(s, o) {
    const p = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && p.push("f-scroll-table_row--striped"), p;
  }), l = S(() => {
    const s = ["cell"];
    return t.wrap ? s.push("cell--wrap") : s.push("cell--nowrap"), s;
  }), c = S(() => function(s) {
    let o = s.reduce((p, g) => p += g.width, 0);
    return {
      width: `${o}px`,
      "max-width": `${o}px`
    };
  }), a = S(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = S(() => function(s) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), i = S(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), n = S(() => function(s, o, p, g) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: p,
      columnIndex: g,
      row: s,
      column: o
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: r,
    getCellClass: l,
    getTableStyle: c,
    getBodyStyle: a,
    getRowStyle: u,
    getExtraCellStyle: i,
    getCellStyle: n
  };
}
const de = /* @__PURE__ */ F({
  __name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "left" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, r = L(), l = L(), c = S(() => {
      var g, m, d, h;
      let a = ((g = r.value) == null ? void 0 : g.offsetWidth) || 0, u = ((m = r.value) == null ? void 0 : m.offsetHeight) || 0, i = ((d = l.value) == null ? void 0 : d.offsetWidth) || 0, n = ((h = l.value) == null ? void 0 : h.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && n < u || ["left", "right"].includes(t.direction) && i < a))
        return {
          "--text-scroll-width": `${a}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let s, o, p;
      return ["up", "down"].includes(t.direction) && (s = u + n, o = s / t.speed || 0, p = `up-scroll linear ${o}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = a + i, o = s / t.speed || 0, p = `left-scroll linear ${o}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${a}px`,
        "--text-scroll-height": `${u}px`,
        animation: p
      };
    });
    return (a, u) => (v(), _(
      "div",
      {
        ref_key: "scrollText",
        ref: r,
        class: K(["f-scroll-text", `f-scroll-text--${t.type}`])
      },
      [
        x(
          "div",
          {
            ref_key: "textContent",
            ref: l,
            class: "text-content",
            style: z(w(c))
          },
          [
            G(a.$slots, "default")
          ],
          4
          /* STYLE */
        )
      ],
      2
      /* CLASS */
    ));
  }
});
de.install = function(e) {
  e.component("FScrollText", de);
};
const Et = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(de);
  }
}, Ot = {
  class: "f-scroll-table__head"
}, Nt = ["onClick"], Bt = {
  key: 1
}, me = /* @__PURE__ */ F({
  __name: "index",
  props: {
    name: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    border: {
      type: Boolean,
      default: !0
    },
    stripe: {
      type: Boolean,
      default: !0
    },
    wrap: {
      type: Boolean,
      default: !0
    },
    align: {
      type: String,
      default: "center"
    },
    cellStyle: {
      type: [Object, Function],
      default: () => {
      }
    },
    maxHeight: {
      type: String,
      default: "auto"
    },
    mode: {
      type: String,
      default: "single"
    },
    pageSize: {
      type: Number,
      default: 5
    },
    togglePage: {
      type: Number,
      default: 1
    },
    toggleDur: {
      type: Number,
      default: 5 * 1e3
    },
    emptyEmitDur: {
      type: Number,
      default: 5 * 1e3
    },
    emitCondition: {
      type: Number,
      default: 2
    },
    pageAnimateDur: {
      type: Number,
      default: 300
    },
    mouseEvent: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["handle-toggle", "cell-click"],
  setup(e, {
    expose: t
  }) {
    const r = e, l = Z({
      tableData: [],
      // 所有表格数据
      currData: [],
      // 当前展示的数据
      pageData: [],
      // 分页数据
      currPage: 1,
      // 当前页
      toggleCount: 0,
      // 切换完成的次数
      intervalId: null,
      // 切换页面定时器
      setTimeoutId: null,
      // 没有数据时,发送事件的定时器
      isStopToggle: !1,
      // 是否停止切换页面(当鼠标移动到表格时，停止切换)
      isEmpty: !1
      // 当前没有数据
    }), c = Ee(), a = L(), {
      deepCloneArr: u,
      setCurrData: i,
      setPageInterval: n,
      setEmptyTimeout: s,
      clearTimer: o,
      setPage: p
    } = Rt(l, r, c), {
      handleCellClick: g
    } = Fe(c), {
      getRowClass: m,
      getCellClass: d,
      getTableStyle: h,
      getBodyStyle: $,
      getRowStyle: T,
      getExtraCellStyle: R,
      getCellStyle: y
    } = At(l, r), D = (C) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr";
    }, f = (C, X) => {
      C.offsetWidth, C.style.opacity = "1", C.style.gridTemplateRows = "1fr", X();
    }, B = async (C) => {
      C.style.opacity = "1";
    }, k = async (C, X) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr", await new Promise((P) => {
        setTimeout(() => {
          C.remove(), P(!0);
        }, r.pageAnimateDur);
      }), X();
    };
    return ee(() => r.data, (C) => {
      l.tableData = u(C), i();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      r.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        o(!0, !0), l.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        l.isStopToggle = !1, l.tableData.length ? n() : s();
      }));
    }), Ge(() => {
      o();
    }), t({
      setPage: p
    }), (C, X) => (v(), _(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": r.border
        }]),
        style: z(w(h)(r.columns))
      },
      [x("div", Ot, [(v(!0), _(
        M,
        null,
        Q(r.columns, (P, O) => (v(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: z(w(R)(P)),
            key: O
          },
          N(P.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), x(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: a,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: z(w($))
        },
        [b(Oe, {
          tag: "div",
          css: !1,
          onBeforeEnter: D,
          onEnter: f,
          onBeforeLeave: B,
          onLeave: k
        }, {
          default: fe(() => [(v(!0), _(
            M,
            null,
            Q(l.currData, (P, O) => (v(), _("div", {
              class: "f-scroll-table__row-wrap",
              key: P
            }, [x(
              "div",
              {
                class: K(w(m)(P, O))
              },
              [(v(!0), _(
                M,
                null,
                Q(r.columns, (I, W) => (v(), _("div", {
                  class: "f-scroll-table__cell",
                  style: z([w(R)(I), w(y)(P, I.type === "index" ? "_index_" : I.prop, O, W)]),
                  key: `${P[I.prop]}${W}`,
                  onClick: (U) => w(g)(U, P, P[I.prop], O, W)
                }, [I.type === "index" ? (v(), _(
                  "div",
                  {
                    key: 0,
                    class: K(w(d))
                  },
                  N(P._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : I.type === "scroll" ? (v(), _("div", Bt, [b(
                  w(de),
                  Ue(qe(I.scrollOption)),
                  {
                    default: fe(() => [x(
                      "div",
                      null,
                      N(P[I.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : I.slot ? (v(), _(
                  "div",
                  {
                    key: 2,
                    class: K(w(d))
                  },
                  [G(C.$slots, I.slot, {
                    params: {
                      row: P,
                      column: I.prop,
                      $index: O
                    }
                  })],
                  2
                  /* CLASS */
                )) : (v(), _(
                  "div",
                  {
                    key: 3,
                    class: K(w(d))
                  },
                  N(P[I.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, Nt))),
                128
                /* KEYED_FRAGMENT */
              ))],
              2
              /* CLASS */
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          _: 3
          /* FORWARDED */
        })],
        4
        /* STYLE */
      )],
      6
      /* CLASS, STYLE */
    ));
  }
});
me.install = function(e) {
  e.component("FScrollTable", me);
};
const zt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(me);
  }
}, Ft = F({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const r = ["#d1d5db", "#3b82f6", "white"];
    let l = S(() => le(e.color) ? V(r, e.color) : r);
    return {
      getProgressStyle: S(() => ({
        "--bgc": l.value[0],
        "--progress-color": l.value[1],
        "--progress-text-color": l.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Wt(e, t, r, l, c, a) {
  return v(), _(
    "div",
    {
      class: "f-progress",
      style: z(e.getProgressStyle)
    },
    [
      x(
        "div",
        {
          class: "progress-inner",
          style: z({ width: `${e.percent}%` })
        },
        [
          G(e.$slots, "default", { percent: e.percent }, () => [
            x(
              "span",
              null,
              N(e.percent ? `${e.percent}%` : ""),
              1
              /* TEXT */
            )
          ])
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const j = /* @__PURE__ */ ze(Ft, [["render", Wt]]);
j.install = function(e) {
  e.component(j.name, j);
};
const Ht = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(j);
  }
}, Mt = { class: "f-digital-scroll" }, Xt = { class: "f-digital-scroll__list" }, Yt = { class: "f-digital-scroll__point" }, ve = /* @__PURE__ */ F({
  __name: "index",
  props: {
    number: {
      type: Number,
      default: 0
    },
    digit: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = e;
    let r = Z({
      stringList: []
    });
    const l = (a) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), n = Number(a.toString().match(u)).toString(), s = n.indexOf(".");
      for (s < 0 && (s = n.length, n += "."); n.length <= s + t.digit; )
        n += "0";
      return n.split("");
    }, c = S(() => function(a) {
      return {
        top: `-${Number(a) * 100}%`
      };
    });
    return te(() => {
      r.stringList = l(t.number);
    }), ee(
      () => t.number,
      (a) => {
        r.stringList = l(t.number);
      }
    ), (a, u) => (v(), _("div", Mt, [
      x("div", Xt, [
        (v(!0), _(
          M,
          null,
          Q(w(r).stringList, (i, n) => (v(), _(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": i === "." }]),
              key: n
            },
            [
              be(x(
                "div",
                Yt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [ke, i === "."]
              ]),
              be(x(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: z(w(c)(i))
                },
                [
                  (v(), _(
                    M,
                    null,
                    Q(10, (s, o) => x(
                      "div",
                      {
                        class: "f-digital-scroll__digital-item",
                        key: o
                      },
                      N(o),
                      1
                      /* TEXT */
                    )),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              ), [
                [ke, i !== "."]
              ])
            ],
            2
            /* CLASS */
          ))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
});
ve.install = function(e) {
  e.component("FDigitalScroll", ve);
};
const Vt = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ve);
  }
}, Qt = { class: "f-scroll-rank" }, Gt = { class: "f-scroll-rank__item-wrap" }, Ut = { class: "f-scroll-rank__item-info" }, qt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Kt = { class: "f-scroll-rank__item-name" }, Zt = { class: "f-scroll-rank__item-info-right" }, Jt = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, jt = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, er = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, tr = { class: "f-scroll-rank__item-progress" }, _e = /* @__PURE__ */ F({
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: Number,
      default: 5
    },
    togglePage: {
      type: Number,
      default: 3
    },
    toggleDur: {
      type: Number,
      default: 3 * 1e3
    },
    toggleDuration: {
      type: Number,
      default: 500
    },
    maxValue: {
      type: Number
    },
    valueFormatter: {
      type: Function
    },
    order: {
      type: String,
      default: "reverse"
    },
    showRank: {
      type: Boolean,
      default: !0
    },
    showPercent: {
      type: Boolean,
      default: !0
    },
    showRatio: {
      type: Boolean,
      default: !0
    },
    color: {
      type: Array,
      default: () => ["#24293e", "#024be4"]
    },
    progressDuration: {
      type: Number,
      default: 0.5
    }
  },
  setup(e) {
    const t = e;
    let r = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const l = (d) => {
      let h = Y(ue(d)), $ = [];
      t.order === "default" ? $ = h : $ = ft(h, "value", t.order), typeof t.valueFormatter == "function" && ($ = $.map((T, R) => {
        var y;
        return T.formattedValue = (y = t.valueFormatter) == null ? void 0 : y.call(null, {
          name: T.name,
          value: T.value,
          maxValue: n.value,
          index: R
        }), T;
      })), r.dataList = $;
    }, c = async (d, h, $) => {
      let T = $;
      h.map((R) => R._index_ = ++T), r.currList.length ? d === t.pageSize ? r.currList = [...h] : (r.currList.push(...h), r.currList.splice(0, d)) : r.currList.push(...h);
    }, a = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let h, $;
        r.currPage === 1 ? (h = 0, $ = t.pageSize) : (h = d * (r.currPage - 2) + t.pageSize, $ = d * (r.currPage - 1) + t.pageSize);
        let T = r.dataList.slice(h, $);
        T.length ? r.currPage === 1 ? await c(t.pageSize, T, h) : await c(d, T, h) : (r.currPage = 1, a()), u();
      } else
        i(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, u = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, a();
      }, t.toggleDur));
    }, i = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, n = S(() => {
      var d, h;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = r.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((h = r.currList[0]) == null ? void 0 : h.value) || 0;
    }), s = S(() => function(d) {
      let h, $ = n.value;
      h = d / $;
      const T = (R, y) => Math.round(R * Math.pow(10, y)) / Math.pow(10, y);
      return typeof h == "number" ? T(h * 100, 1) : 0;
    }), o = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, p = (d, h) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", h();
    }, g = async (d) => {
      d.style.opacity = "1";
    }, m = async (d, h) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise(($) => {
        setTimeout(() => {
          d.remove(), $(!0);
        }, t.toggleDuration);
      }), h();
    };
    return ee(
      () => t.data,
      (d) => {
        l(d), a();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, h) => (v(), _("div", Qt, [
      x(
        "div",
        {
          class: "f-scroll-rank__list",
          style: z({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          b(Oe, {
            tag: "div",
            css: !1,
            onBeforeEnter: o,
            onEnter: p,
            onBeforeLeave: g,
            onLeave: m
          }, {
            default: fe(() => [
              (v(!0), _(
                M,
                null,
                Q(w(r).currList, ($, T) => (v(), _("div", {
                  class: "f-scroll-rank__item",
                  key: $
                }, [
                  x("div", Gt, [
                    x("div", Ut, [
                      t.showRank ? (v(), _(
                        "span",
                        qt,
                        N(`NO.${$._index_}`),
                        1
                        /* TEXT */
                      )) : E("v-if", !0),
                      x(
                        "span",
                        Kt,
                        N($.name || ""),
                        1
                        /* TEXT */
                      ),
                      x("div", Zt, [
                        t.showPercent ? (v(), _(
                          "span",
                          Jt,
                          N(`${w(s)($.value)}%`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (v(), _(
                          "span",
                          jt,
                          N(`${$.value} / ${w(n)}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        typeof t.valueFormatter == "function" ? (v(), _(
                          "span",
                          er,
                          N(`${$.formattedValue}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0)
                      ])
                    ]),
                    x("div", tr, [
                      b(w(j), {
                        percent: w(s)($.value),
                        color: t.color,
                        duration: t.progressDuration
                      }, null, 8, ["percent", "color", "duration"])
                    ])
                  ])
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ],
        4
        /* STYLE */
      )
    ]));
  }
});
_e.install = function(e) {
  e.component("FScrollRank", _e);
};
const rr = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, lr = {
  width: "100%",
  height: "100%"
}, nr = /* @__PURE__ */ Ke('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), ir = ["id", "cx", "cy"], sr = ["values", "dur"], or = ["dur"], ar = ["id"], cr = ["xlink:href"], ur = ["xlink:href", "fill", "mask"], dr = ["fill", "x", "y"], fr = ["href", "width", "height", "x", "y"], hr = ["id", "d"], gr = ["id"], yr = ["r"], pr = ["dur", "path"], mr = ["xlink:href", "stroke-width", "stroke"], vr = ["xlink:href", "stroke-width", "stroke", "mask"], _r = ["from", "to", "dur"], $r = { key: 2 }, $e = /* @__PURE__ */ F({
  __name: "index",
  props: {
    bgUrl: { type: String },
    points: {
      type: Array,
      default: () => []
    },
    paths: {
      type: Array,
      default: () => []
    },
    line: {
      type: Object,
      default: () => ({
        show: !0,
        type: "line",
        width: 2,
        color: "#0080ff",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 2e3,
        radius: 100,
        k: -0.5,
        curvature: 5
      })
    },
    halo: {
      type: Object,
      default: () => ({
        show: !0,
        duration: 2e3,
        color: "#3891c2",
        radius: 100
      })
    },
    title: {
      type: Object,
      default: () => ({
        show: !0,
        offest: [0, -10],
        color: "black",
        fontSize: 16
      })
    },
    icon: {
      type: Object,
      default: () => ({
        show: !0,
        url: "",
        width: 10,
        height: 10
      })
    }
  },
  emits: ["chart-click"],
  setup(e) {
    const t = e, r = L();
    let l;
    te(() => {
      l = Ee();
    });
    const c = Z({
      halo: {
        show: !0,
        duration: 2e3,
        color: "#3891c2",
        radius: 100
      },
      title: {
        show: !0,
        offest: [0, -10],
        color: "black",
        fontSize: 16
      },
      icon: {
        show: !0,
        url: "",
        width: 10,
        height: 10
      },
      line: {
        show: !0,
        width: 3,
        color: "#ffde93",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 700,
        radius: 100,
        k: -0.5,
        curvature: 5
      }
    }), a = Z({
      points: [],
      paths: []
    }), u = (y) => {
      let { offsetX: D, offsetY: f } = y;
      const B = (D / s.value).toFixed(2), k = (f / o.value).toFixed(2);
      l == null || l.emit("chart-click", B, k, y);
    }, i = () => {
      p(), g();
    }, n = () => {
      p(), g();
    }, { width: s, height: o } = re(r, i, n), p = () => {
      let y = Y(ue(t.points));
      a.points = y.map((D, f) => ({
        ...D,
        halo: V({}, c.halo, Y(t.halo), D.halo),
        title: V({}, c.title, Y(t.title), D.title),
        icon: V({}, c.icon, Y(t.icon), D.icon),
        key: `${D.coordinate.toString()}${f}`
      }));
    }, g = () => {
      let y = Y(ue(t.paths));
      a.paths = y.map((D, f) => {
        var ne, q;
        let { source: B, route: k, target: C, line: X } = D, P = V({}, c.line, Y(t.line), X), O = (ne = a.points.find(({ name: A }) => A === B)) == null ? void 0 : ne.coordinate, I = (q = a.points.find(({ name: A }) => A === C)) == null ? void 0 : q.coordinate, W = k ? [O, ...k, I] : [O, I];
        W = W.filter((A) => A !== void 0);
        let U = [];
        for (let A = 0; A < W.length - 1; A++) {
          let We = W[A], J = m(We, W[A + 1], P.k, P.curvature), He = `M${J[0].toString()} Q${J[1].toString()} ${J[2].toString()}`, Me = `${J.toString()}`;
          U.push({ path: J, d: He, key: Me });
        }
        return {
          ...D,
          line: P,
          routeList: U
        };
      });
    }, m = (y, D, f, B) => {
      let [k, C] = y, [X, P] = D;
      const [O, I] = [(k + X) / 2, (C + P) / 2];
      let U = Te([k, C], [X, P]) / B, ne = U / 2, [q, A] = [O, I];
      do
        q += ne, A = d(f, [O, I], q)[1];
      while (Te([O, I], [q, A]) < U);
      return [y, [q, A], D];
    };
    function d(y, [D, f], B) {
      const k = f - y * D + y * B;
      return [B, k];
    }
    let h = S(() => function(y) {
      return `M${y[0][0] * s.value},${y[0][1] * o.value} 
    Q${y[1][0] * s.value},${y[1][1] * o.value} 
    ${y[2][0] * s.value},${y[2][1] * o.value}`;
    }), $ = S(() => function(y) {
      return `M${y[0][0] * s.value},${y[0][1] * o.value} 
    Q${y[1][0] * s.value},${y[1][1] * o.value} 
    ${y[2][0] * s.value},${y[2][1] * o.value}`;
    }), T = S(() => function(y) {
      return {
        x1: y[0][0] * s.value,
        y1: y[0][1] * o.value,
        x2: y[1][0] * s.value,
        y2: y[1][1] * o.value,
        x3: y[2][0] * s.value,
        y3: y[2][1] * o.value
      };
    });
    S(() => function(y) {
      return `"M${y[0][0] * s.value},${y[0][1] * o.value} Q${y[1][0] * s.value},${y[1][1] * o.value} ${y[2][0] * s.value},${y[2][1] * o.value}"`;
    });
    let R = S(() => function(y) {
      return l ? l.proxy.$refs[y][0].getTotalLength() : 0;
    });
    return ee(() => t, (y) => {
      p(), g();
    }, {
      deep: !0,
      immediate: !0
    }), (y, D) => (v(), _(
      "div",
      {
        ref_key: "flightChart",
        ref: r,
        class: "f-flight-chart"
      },
      [
        x(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: z(`background-image: url(${t.bgUrl})`),
            onClick: u
          },
          [
            (v(), _("svg", lr, [
              nr,
              (v(!0), _(
                M,
                null,
                Q(a.points, (f, B) => (v(), _("g", {
                  key: f.key
                }, [
                  x("defs", null, [
                    f.halo.show ? (v(), _("circle", {
                      key: 0,
                      id: `halo${f.key}`,
                      cx: f.coordinate[0] * w(s),
                      cy: f.coordinate[1] * w(o)
                    }, [
                      x("animate", {
                        attributeName: "r",
                        values: `1;${f.halo.radius}`,
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, sr),
                      x("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, or)
                    ], 8, ir)) : E("v-if", !0),
                    x("mask", {
                      id: `mask${f.key}`
                    }, [
                      x("use", {
                        "xlink:href": `#halo${f.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, cr)
                    ], 8, ar)
                  ]),
                  f.halo.show ? (v(), _("use", {
                    key: 0,
                    "xlink:href": `#halo${f.key}`,
                    fill: f.halo.color,
                    mask: `url(#mask${f.key})`
                  }, null, 8, ur)) : E("v-if", !0),
                  f.title.show ? (v(), _("text", {
                    key: 1,
                    class: "point__title",
                    style: z({ fontSize: `${f.title.fontSize}px` }),
                    fill: f.title.color,
                    x: f.coordinate[0] * w(s) + f.title.offest[0],
                    y: f.coordinate[1] * w(o) + f.title.offest[1]
                  }, N(f.name), 13, dr)) : E("v-if", !0),
                  f.icon.show ? (v(), _("image", {
                    key: 2,
                    class: "point__icon",
                    href: f.icon.url,
                    width: f.icon.width,
                    height: f.icon.height,
                    x: f.coordinate[0] * w(s) - f.icon.width / 2,
                    y: f.coordinate[1] * w(o) - f.icon.height / 2
                  }, null, 8, fr)) : E("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (v(!0), _(
                M,
                null,
                Q(a.paths, (f, B) => (v(), _(
                  M,
                  null,
                  [
                    (v(!0), _(
                      M,
                      null,
                      Q(f.routeList, (k, C) => (v(), _("g", null, [
                        x("defs", null, [
                          x("path", {
                            id: k.key,
                            ref_for: !0,
                            ref: k.key,
                            d: w(h)(k.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, hr),
                          f.line.show && !f.line.slot ? (v(), _("mask", {
                            key: 0,
                            id: `mask${k.key}`
                          }, [
                            x("circle", {
                              cx: "0",
                              cy: "0",
                              r: f.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              x("animateMotion", {
                                dur: `${f.line.duration}ms`,
                                path: w(h)(k.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, pr)
                            ], 8, yr)
                          ], 8, gr)) : E("v-if", !0)
                        ]),
                        f.line.show ? (v(), _("use", {
                          key: 0,
                          "xlink:href": `#${k.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.orbitColor
                        }, null, 8, mr)) : E("v-if", !0),
                        f.line.show && !f.line.slot ? (v(), _("use", {
                          key: 1,
                          "xlink:href": `#${k.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.color,
                          mask: `url(#mask${k.key})`
                        }, [
                          x("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${w(R)(k.key)}`,
                            to: `${w(R)(k.key)}, 0`,
                            dur: `${f.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, _r)
                        ], 8, vr)) : E("v-if", !0),
                        f.line.show && f.line.slot ? (v(), _("g", $r, [
                          G(y.$slots, f.line.slot, {
                            path: w($)(k.path),
                            pathArr: w(T)(k.path),
                            totalLength: w(R)(k.key),
                            line: f.line
                          })
                        ])) : E("v-if", !0)
                      ]))),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]))
          ],
          4
          /* STYLE */
        )
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
$e.install = function(e) {
  e.component("FFlightChart", $e);
};
const wr = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, xr = [
  gt,
  yt,
  pt,
  wt,
  kt,
  Tt,
  zt,
  Et,
  Ht,
  Vt,
  rr,
  wr
], kr = {
  version: "1.0.12",
  install(e) {
    xr.forEach((t) => e.use(t));
  }
};
export {
  ie as BorderBox1,
  se as BorderBox2,
  ve as DigitalScroll,
  pe as DynamicParticle,
  $e as FlightChart,
  oe as Loading1,
  ae as Loading2,
  j as Progress,
  ge as ScreenContainer,
  _e as ScrollRank,
  me as ScrollTable,
  de as ScrollText,
  kr as default,
  xr as installs
};
