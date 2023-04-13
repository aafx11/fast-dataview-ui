import './style.css';
import { unref as w, getCurrentScope as Xe, onScopeDispose as Ye, watch as ee, ref as L, onMounted as te, onUnmounted as Ve, nextTick as Qe, defineComponent as F, computed as S, createVNode as k, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as N, createElementVNode as x, toDisplayString as B, reactive as Z, provide as we, createCommentVNode as A, inject as xe, normalizeClass as K, getCurrentInstance as Ae, onBeforeUnmount as Ge, Fragment as M, renderList as Q, TransitionGroup as Oe, withCtx as fe, normalizeProps as Ue, guardReactiveProps as qe, withDirectives as ke, vShow as be, createStaticVNode as Ke } from "vue";
function Ze(e, t) {
  const l = window.MutationObserver, r = new l(t);
  return r.observe(e, {
    attributes: !0,
    // 观察所有监听的节点属性值的变化
    attributeFilter: ["style"],
    // 监听的属性
    attributeOldValue: !0
    // 记录上一次被监听的节点的属性变化 
  }), r;
}
var Se;
const Be = typeof window < "u", Je = (e) => typeof e == "string", he = () => {
};
Be && ((Se = window == null ? void 0 : window.navigator) != null && Se.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return typeof e == "function" ? e() : w(e);
}
function je(e, t) {
  function l(...r) {
    return new Promise((c, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(c).catch(a);
    });
  }
  return l;
}
function et(e, t = {}) {
  let l, r, c = he;
  const a = (i) => {
    clearTimeout(i), c(), c = he;
  };
  return (i) => {
    const n = ce(e), s = ce(t.maxWait);
    return l && a(l), n <= 0 || s !== void 0 && s <= 0 ? (r && (a(r), r = null), Promise.resolve(i())) : new Promise((o, p) => {
      c = t.rejectOnCancel ? p : o, s && !r && (r = setTimeout(() => {
        l && a(l), r = null, o(i());
      }, s)), l = setTimeout(() => {
        r && a(r), r = null, o(i());
      }, n);
    });
  };
}
function tt(e) {
  return e;
}
function lt(e) {
  return Xe() ? (Ye(e), !0) : !1;
}
function rt(e, t = 200, l = {}) {
  return je(et(t, l), e);
}
function nt(e) {
  var t;
  const l = ce(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const it = Be ? window : void 0;
function st(...e) {
  let t, l, r, c;
  if (Je(e[0]) || Array.isArray(e[0]) ? ([l, r, c] = e, t = it) : [t, l, r, c] = e, !t)
    return he;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const a = [], u = () => {
    a.forEach((o) => o()), a.length = 0;
  }, i = (o, p, g, m) => (o.addEventListener(p, g, m), () => o.removeEventListener(p, g, m)), n = ee(() => [nt(t), ce(c)], ([o, p]) => {
    u(), o && a.push(...l.flatMap((g) => r.map((m) => i(o, g, m, p))));
  }, { immediate: !0, flush: "post" }), s = () => {
    n(), u();
  };
  return lt(s), s;
}
const Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = "__vueuse_ssr_handlers__";
Ce[Pe] = Ce[Pe] || {};
var Ie;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ie || (Ie = {}));
var ot = Object.defineProperty, Le = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, Te = (e, t, l) => t in e ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, ut = (e, t) => {
  for (var l in t || (t = {}))
    at.call(t, l) && Te(e, l, t[l]);
  if (Le)
    for (var l of Le(t))
      ct.call(t, l) && Te(e, l, t[l]);
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
const le = (e, t, l, r) => {
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
    await p(!1), n = rt(p, 200), g(), typeof l == "function" && l();
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
}, ze = {
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
}, V = Object.assign, re = (e) => Array.isArray(e) && e.length, ue = (e) => Array.isArray(e) && e || [], H = (e) => e >= 0 ? e : 0, ft = (e, t, l = "reverse") => e.sort(ht(t, l)), ht = (e, t = "reverse") => function(l, r) {
  return l[e] < r[e] ? t === "normal" ? -1 : 1 : l[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
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
  let l = new e.constructor();
  t.set(e, l);
  for (let r in e)
    e.hasOwnProperty(r) && (l[r] = Y(e[r], t));
  return l;
}, De = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, ie = /* @__PURE__ */ F({
  name: "FBorderBox1",
  props: ze,
  setup(e, {
    slots: t
  }) {
    const l = L(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = S(() => re(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = le(l);
    return {
      width: a,
      height: u,
      initWH: i,
      borderBox1: l,
      defaultColor: r,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: c,
      realColor: a,
      title: u
    } = this, i = 20;
    let n = c || 2, s = H(t - n - 2), o = H(l - n - 2);
    return k("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [k("svg", {
      class: "f-svg-container",
      width: s,
      height: o
    }, [k("polygon", {
      fill: r,
      stroke: a[0],
      "stroke-width": n,
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${o - i}, ${s - i} ${o},
            ${i} ${o}, ${n} ${o - i}, ${n} ${i}
          `
    }, null), k("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${i - 8} 0,0 ${i - 8}
          `
    }, null), k("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${s} ${o - i + 8}, ${s - i + 8 + n} ${o}
          `
    }, null), k("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
            ${n} ${i + 15}, ${n} ${i}, ${i} ${n} , ${i + 15} ${n}
          `
    }, null), k("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${i + 15} ${o}, ${i}  ${o}, ${n} ${o - i}, ${n} ${o - i - 15}
          `
    }, null), k("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${s - i - 15} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}
          `
    }, null), k("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
          ${s - i - 15} ${o}, ${s - i} ${o}, ${s - n} ${o - i}, ${s - n} ${o - i - 15}
          `
    }, null), u ? k("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}, ${n} ${i + 15},
            ${n} ${i}
          `
    }, null) : null, u ? k("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), k("div", {
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
  props: ze,
  setup(e, {
    slots: t
  }) {
    const l = L(null), r = ["white"];
    let c = S(() => re(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = le(l);
    return {
      width: a,
      height: u,
      initWH: i,
      borderBox2: l,
      defaultColor: r,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: c,
      realColor: a,
      duration: u,
      strokeDasharray: i
    } = this;
    let n = c || 3, s = H(n), o = H(n), p = H(t - n), g = H(n), m = H(t - n), d = H(l - n), h = H(n), $ = H(l - n);
    return k("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [k("svg", {
      class: "f-svg-container",
      width: t,
      height: l
    }, [k("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`,
        "--border-stroke-dasharray": i
      },
      stroke: a[0],
      "stroke-width": n,
      fill: r,
      d: `M ${s} ${o}, L ${p} ${g}, L ${m} ${d}, L ${h} ${$}, Z`
    }, null)]), k("div", {
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
    const l = L(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let c = S(() => re(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = le(l);
    return {
      width: a,
      height: u,
      initWH: i,
      loading1: l,
      defaultColor: r,
      realColor: c
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: l,
      duration: r
    } = this;
    return k("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${r}s`
      }
    }, [k("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [k("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), k("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), k("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [k("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), k("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), k("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [k("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), k("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), l ? k("div", {
      class: "f-loading-text",
      "data-text": l
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
    const l = ["#d1d5db", "#3b82f6", "#3b82f6"];
    let r = S(() => re(e.color) ? V(l, e.color) : l);
    return {
      getLoadingStyle: S(() => ({
        width: e.width,
        height: e.height,
        color: r.value[2],
        "--border-color": r.value[0],
        "--border-top-color": r.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), Ne = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, c] of t)
    l[r] = c;
  return l;
}, vt = /* @__PURE__ */ x(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), _t = { class: "loading-text" };
function $t(e, t, l, r, c, a) {
  return v(), _(
    "div",
    {
      class: "f-loading-2",
      style: N(e.getLoadingStyle)
    },
    [
      vt,
      x("div", _t, [
        G(e.$slots, "default", {}, () => [
          x(
            "div",
            null,
            B(e.text),
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
const ae = /* @__PURE__ */ Ne(mt, [["render", $t]]);
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
}, kt = { class: "f-screen-container" }, ge = /* @__PURE__ */ F({
  __name: "index",
  props: xt,
  setup(e) {
    const t = e, l = L(null), r = Z({
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
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: p, height: g } = window.screen;
      r.screenWidth = p, r.screenHeight = g;
    }, i = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, n = () => {
      const p = document.body.clientWidth, g = document.body.clientHeight, m = r.width || r.screenWidth, d = r.height || r.screenHeight, h = p / +m, $ = g / +d;
      c.value = h, a.value = $, l.value.style.transform = `scale(${h}, ${$})`;
    };
    return le(l, () => {
      n();
    }, () => {
      u(), i(), n(), t.onAfterResize(), r.isReady = !0;
    }), (p, g) => (v(), _("div", kt, [
      x(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: l
        },
        [
          r.isReady ? G(p.$slots, "default", { key: 0 }) : A("v-if", !0),
          A(" <slot></slot> ")
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
const bt = {
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
  constructor(t, l, r, c, a, u, i) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = c, this.time = a, this.radius = u, this.colors = i, this.opacity = 0;
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
  update(t, l, r, c) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && c) {
      let a = r - this.x, u = c - this.y, i = Math.sqrt(a ** 2 + u ** 2), n = t / i;
      n = n > 7 ? 7 : n;
      let s = Math.atan2(u, a), o = Math.cos(s), p = Math.sin(s), g = o * n * -l, m = p * n * -l;
      this.velocityX += g, this.velocityY += m;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Pt);
  }
  // 切换粒子
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const Re = 30;
class It {
  // 动画的id，用于停止动画
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, c = this.particleArr, a = c.length;
      for (let i = 0; i < r; i++) {
        const { targetX: n, targetY: s, colors: o } = l[i];
        c[i] ? c[i].change(n, s, o) : c[i] = new ye(this.width, this.height, n, s, Re, this.radius, o);
      }
      r < a && (this.particleArr = c.splice(0, r)), c = this.particleArr;
      let u = c.length;
      for (; u; ) {
        let i = ~~(Math.random() * u--), n = c[i], { targetX: s, targetY: o, colors: p } = n;
        n.targetX = c[u].targetX, n.targetY = c[u].targetY, n.colors = c[u].colors, c[u].targetX = s, c[u].targetY = o, c[u].colors = p;
      }
    } else
      this.particleArr = t.particleData.map((l) => new ye(this.width, this.height, l.targetX, l.targetY, Re, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const Lt = 30;
class Ee {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, l, r, c) {
    this.src = t, this.width = l, this.height = r, this.particleData = [], this.radius = c;
  }
  createParticleData(t = this.src) {
    return new Promise((l, r) => {
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
        l(this.particleData);
      }, c.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const Tt = ["width", "height"], pe = /* @__PURE__ */ F({
  __name: "index",
  props: St,
  setup(e, { expose: t }) {
    const l = e;
    let r = xe("scaleX", L(1)), c = xe("scaleY", L(1));
    const a = L(null), u = L(null);
    let i = L(), n = L();
    const s = async (p) => {
      n.value = new Ee(p, l.width, l.height, l.radius), await n.value.createParticleData(), i.value.changeImg(n.value);
    }, o = async () => {
      n.value = new Ee(l.src, l.width, l.height, l.radius), await n.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), i.value = new It(a.value, l.radius, l.strength), a.value.addEventListener("mousemove", (p) => {
        const { left: g, top: m } = a.value.getBoundingClientRect(), { clientX: d, clientY: h } = p;
        i.value.mouseX = (d - g) * (1 / r.value), i.value.mouseY = (h - m) * (1 / c.value);
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
        width: l.width,
        height: l.height
      }, null, 8, Tt)
    ]));
  }
});
pe.install = function(e) {
  e.component("FDynamicParticle", pe);
};
const Dt = {
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
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, c, a, u, i) => {
      e.emit("cell-click", c, a, u, i, r);
    }
  };
}
function Rt(e, t, l) {
  const { handleToggle: r } = Fe(l), c = (g) => {
    let m = ue(g);
    return Y(m);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
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
      r(t.name);
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
function Et(e, t) {
  const l = S(() => function(s, o) {
    const p = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && p.push("f-scroll-table_row--striped"), p;
  }), r = S(() => {
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
    getRowClass: l,
    getCellClass: r,
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
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = L(), r = L(), c = S(() => {
      var g, m, d, h;
      let a = ((g = l.value) == null ? void 0 : g.offsetWidth) || 0, u = ((m = l.value) == null ? void 0 : m.offsetHeight) || 0, i = ((d = r.value) == null ? void 0 : d.offsetWidth) || 0, n = ((h = r.value) == null ? void 0 : h.offsetHeight) || 0;
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
        ref: l,
        class: K(["f-scroll-text", `f-scroll-text--${t.type}`])
      },
      [
        x(
          "div",
          {
            ref_key: "textContent",
            ref: r,
            class: "text-content",
            style: N(w(c))
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
const At = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(de);
  }
}, Ot = {
  class: "f-scroll-table__head"
}, Bt = ["onClick"], zt = {
  key: 1
}, me = /* @__PURE__ */ F({
  __name: "index",
  props: {
    name: {
      default: ""
    },
    data: {
      default: () => []
    },
    columns: {
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
      default: "center"
    },
    cellStyle: null,
    maxHeight: {
      default: "auto"
    },
    mode: {
      default: "single"
    },
    pageSize: {
      default: 5
    },
    togglePage: {
      default: 1
    },
    toggleDur: {
      default: 5 * 1e3
    },
    emptyEmitDur: {
      default: 10 * 1e3
    },
    emitCondition: {
      default: 2
    },
    pageAnimateDur: {
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
    const l = e, r = Z({
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
    }), c = Ae(), a = L(), {
      deepCloneArr: u,
      setCurrData: i,
      setPageInterval: n,
      setEmptyTimeout: s,
      clearTimer: o,
      setPage: p
    } = Rt(r, l, c), {
      handleCellClick: g
    } = Fe(c), {
      getRowClass: m,
      getCellClass: d,
      getTableStyle: h,
      getBodyStyle: $,
      getRowStyle: D,
      getExtraCellStyle: R,
      getCellStyle: y
    } = Et(r, l), T = (C) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr";
    }, f = (C, X) => {
      C.offsetWidth, C.style.opacity = "1", C.style.gridTemplateRows = "1fr", X();
    }, z = async (C) => {
      C.style.opacity = "1";
    }, b = async (C, X) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr", await new Promise((P) => {
        setTimeout(() => {
          C.remove(), P(!0);
        }, l.pageAnimateDur);
      }), X();
    };
    return ee(() => l.data, (C) => {
      r.tableData = u(C), i();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      l.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        o(!0, !0), r.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? n() : s();
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
          "is-border": l.border
        }]),
        style: N(w(h)(l.columns))
      },
      [x("div", Ot, [(v(!0), _(
        M,
        null,
        Q(l.columns, (P, O) => (v(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: N(w(R)(P)),
            key: O
          },
          B(P.label),
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
          style: N(w($))
        },
        [k(Oe, {
          tag: "div",
          css: !1,
          onBeforeEnter: T,
          onEnter: f,
          onBeforeLeave: z,
          onLeave: b
        }, {
          default: fe(() => [(v(!0), _(
            M,
            null,
            Q(r.currData, (P, O) => (v(), _("div", {
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
                Q(l.columns, (I, W) => (v(), _("div", {
                  class: "f-scroll-table__cell",
                  style: N([w(R)(I), w(y)(P, I.type === "index" ? "_index_" : I.prop, O, W)]),
                  key: `${P[I.prop]}${W}`,
                  onClick: (U) => w(g)(U, P, P[I.prop], O, W)
                }, [I.type === "index" ? (v(), _(
                  "div",
                  {
                    key: 0,
                    class: K(w(d))
                  },
                  B(P._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : I.type === "scroll" ? (v(), _("div", zt, [k(
                  w(de),
                  Ue(qe(I.scrollOption)),
                  {
                    default: fe(() => [x(
                      "div",
                      null,
                      B(P[I.prop]),
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
                  B(P[I.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, Bt))),
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
const Nt = {
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
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = S(() => re(e.color) ? V(l, e.color) : l);
    return {
      getProgressStyle: S(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Wt(e, t, l, r, c, a) {
  return v(), _(
    "div",
    {
      class: "f-progress",
      style: N(e.getProgressStyle)
    },
    [
      x(
        "div",
        {
          class: "progress-inner",
          style: N({ width: `${e.percent}%` })
        },
        [
          G(e.$slots, "default", { percent: e.percent }, () => [
            x(
              "span",
              null,
              B(e.percent ? `${e.percent}%` : ""),
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
const j = /* @__PURE__ */ Ne(Ft, [["render", Wt]]);
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
    let l = Z({
      stringList: []
    });
    const r = (a) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`);
      console.log("reg", u);
      let i = Number(a.toString().match(u));
      console.log("digitalToStringList", i);
      let n = i.toString(), s = n.indexOf(".");
      for (s < 0 && (s = n.length, n += "."); n.length <= s + t.digit; )
        n += "0";
      return n.split("");
    }, c = S(() => function(a) {
      return console.log("str", a), {
        top: `-${Number(a) * 100}%`
      };
    });
    return te(() => {
      l.stringList = r(t.number);
    }), ee(
      () => t.number,
      (a) => {
        console.log("变化", a), l.stringList = r(t.number);
      }
    ), (a, u) => (v(), _("div", Mt, [
      x("div", Xt, [
        (v(!0), _(
          M,
          null,
          Q(w(l).stringList, (i, n) => (v(), _(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": i === "." }]),
              key: n
            },
            [
              ke(x(
                "div",
                Yt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [be, i === "."]
              ]),
              ke(x(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: N(w(c)(i))
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
                      B(o),
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
                [be, i !== "."]
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
}, el = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, tl = { class: "f-scroll-rank__item-progress" }, _e = /* @__PURE__ */ F({
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
    let l = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const r = (d) => {
      let h = Y(ue(d)), $ = [];
      t.order === "default" ? $ = h : $ = ft(h, "value", t.order), typeof t.valueFormatter == "function" && ($ = $.map((D, R) => {
        var y;
        return D.formattedValue = (y = t.valueFormatter) == null ? void 0 : y.call(null, {
          name: D.name,
          value: D.value,
          maxValue: n.value,
          index: R
        }), D;
      })), l.dataList = $;
    }, c = async (d, h, $) => {
      let D = $;
      h.map((R) => R._index_ = ++D), l.currList.length ? d === t.pageSize ? l.currList = [...h] : (l.currList.push(...h), l.currList.splice(0, d)) : l.currList.push(...h);
    }, a = async () => {
      if (l.dataList.length) {
        l.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let h, $;
        l.currPage === 1 ? (h = 0, $ = t.pageSize) : (h = d * (l.currPage - 2) + t.pageSize, $ = d * (l.currPage - 1) + t.pageSize);
        let D = l.dataList.slice(h, $);
        D.length ? l.currPage === 1 ? await c(t.pageSize, D, h) : await c(d, D, h) : (l.currPage = 1, a()), u();
      } else
        i(), l.isEmpty = !0, l.currPage = 1, l.currList = [];
    }, u = () => {
      l.intervalId === null && (l.intervalId = setInterval(() => {
        l.currPage += 1, a();
      }, t.toggleDur));
    }, i = () => {
      l.intervalId && (clearInterval(l.intervalId), l.intervalId = null);
    }, n = S(() => {
      var d, h;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = l.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((h = l.currList[0]) == null ? void 0 : h.value) || 0;
    }), s = S(() => function(d) {
      let h, $ = n.value;
      h = d / $;
      const D = (R, y) => Math.round(R * Math.pow(10, y)) / Math.pow(10, y);
      return typeof h == "number" ? D(h * 100, 1) : 0;
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
        r(d), a();
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
          style: N({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          k(Oe, {
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
                Q(w(l).currList, ($, D) => (v(), _("div", {
                  class: "f-scroll-rank__item",
                  key: $
                }, [
                  x("div", Gt, [
                    x("div", Ut, [
                      t.showRank ? (v(), _(
                        "span",
                        qt,
                        B(`NO.${$._index_}`),
                        1
                        /* TEXT */
                      )) : A("v-if", !0),
                      x(
                        "span",
                        Kt,
                        B($.name || ""),
                        1
                        /* TEXT */
                      ),
                      x("div", Zt, [
                        t.showPercent ? (v(), _(
                          "span",
                          Jt,
                          B(`${w(s)($.value)}%`),
                          1
                          /* TEXT */
                        )) : A("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (v(), _(
                          "span",
                          jt,
                          B(`${$.value} / ${w(n)}`),
                          1
                          /* TEXT */
                        )) : A("v-if", !0),
                        typeof t.valueFormatter == "function" ? (v(), _(
                          "span",
                          el,
                          B(`${$.formattedValue}`),
                          1
                          /* TEXT */
                        )) : A("v-if", !0)
                      ])
                    ]),
                    x("div", tl, [
                      k(w(j), {
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
const ll = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, rl = {
  width: "100%",
  height: "100%"
}, nl = /* @__PURE__ */ Ke('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), il = ["id", "cx", "cy"], sl = ["values", "dur"], ol = ["dur"], al = ["id"], cl = ["xlink:href"], ul = ["xlink:href", "fill", "mask"], dl = ["fill", "x", "y"], fl = ["href", "width", "height", "x", "y"], hl = ["id", "d"], gl = ["id"], yl = ["r"], pl = ["dur", "path"], ml = ["xlink:href", "stroke-width", "stroke"], vl = ["xlink:href", "stroke-width", "stroke", "mask"], _l = ["from", "to", "dur"], $l = { key: 2 }, $e = /* @__PURE__ */ F({
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
    const t = e, l = L();
    let r;
    te(() => {
      r = Ae();
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
      let { offsetX: T, offsetY: f } = y;
      const z = (T / s.value).toFixed(2), b = (f / o.value).toFixed(2);
      r == null || r.emit("chart-click", z, b, y);
    }, i = () => {
      p(), g();
    }, n = () => {
      p(), g();
    }, { width: s, height: o } = le(l, i, n), p = () => {
      let y = Y(ue(t.points));
      a.points = y.map((T, f) => ({
        ...T,
        halo: V({}, c.halo, Y(t.halo), T.halo),
        title: V({}, c.title, Y(t.title), T.title),
        icon: V({}, c.icon, Y(t.icon), T.icon),
        key: `${T.coordinate.toString()}${f}`
      }));
    }, g = () => {
      let y = Y(ue(t.paths));
      a.paths = y.map((T, f) => {
        var ne, q;
        let { source: z, route: b, target: C, line: X } = T, P = V({}, c.line, Y(t.line), X), O = (ne = a.points.find(({ name: E }) => E === z)) == null ? void 0 : ne.coordinate, I = (q = a.points.find(({ name: E }) => E === C)) == null ? void 0 : q.coordinate, W = b ? [O, ...b, I] : [O, I];
        W = W.filter((E) => E !== void 0);
        let U = [];
        for (let E = 0; E < W.length - 1; E++) {
          let We = W[E], J = m(We, W[E + 1], P.k, P.curvature), He = `M${J[0].toString()} Q${J[1].toString()} ${J[2].toString()}`, Me = `${J.toString()}`;
          U.push({ path: J, d: He, key: Me });
        }
        return {
          ...T,
          line: P,
          routeList: U
        };
      });
    }, m = (y, T, f, z) => {
      let [b, C] = y, [X, P] = T;
      const [O, I] = [(b + X) / 2, (C + P) / 2];
      let U = De([b, C], [X, P]) / z, ne = U / 2, [q, E] = [O, I];
      do
        q += ne, E = d(f, [O, I], q)[1];
      while (De([O, I], [q, E]) < U);
      return [y, [q, E], T];
    };
    function d(y, [T, f], z) {
      const b = f - y * T + y * z;
      return [z, b];
    }
    let h = S(() => function(y) {
      return `M${y[0][0] * s.value},${y[0][1] * o.value} 
    Q${y[1][0] * s.value},${y[1][1] * o.value} 
    ${y[2][0] * s.value},${y[2][1] * o.value}`;
    }), $ = S(() => function(y) {
      return `M${y[0][0] * s.value},${y[0][1] * o.value} 
    Q${y[1][0] * s.value},${y[1][1] * o.value} 
    ${y[2][0] * s.value},${y[2][1] * o.value}`;
    }), D = S(() => function(y) {
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
      return r ? r.proxy.$refs[y][0].getTotalLength() : 0;
    });
    return ee(() => t, (y) => {
      p(), g();
    }, {
      deep: !0,
      immediate: !0
    }), (y, T) => (v(), _(
      "div",
      {
        ref_key: "flightChart",
        ref: l,
        class: "f-flight-chart"
      },
      [
        x(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: N(`background-image: url(${t.bgUrl})`),
            onClick: u
          },
          [
            (v(), _("svg", rl, [
              nl,
              (v(!0), _(
                M,
                null,
                Q(a.points, (f, z) => (v(), _("g", {
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
                      }, null, 8, sl),
                      x("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, ol)
                    ], 8, il)) : A("v-if", !0),
                    x("mask", {
                      id: `mask${f.key}`
                    }, [
                      x("use", {
                        "xlink:href": `#halo${f.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, cl)
                    ], 8, al)
                  ]),
                  f.halo.show ? (v(), _("use", {
                    key: 0,
                    "xlink:href": `#halo${f.key}`,
                    fill: f.halo.color,
                    mask: `url(#mask${f.key})`
                  }, null, 8, ul)) : A("v-if", !0),
                  f.title.show ? (v(), _("text", {
                    key: 1,
                    class: "point__title",
                    style: N({ fontSize: `${f.title.fontSize}px` }),
                    fill: f.title.color,
                    x: f.coordinate[0] * w(s) + f.title.offest[0],
                    y: f.coordinate[1] * w(o) + f.title.offest[1]
                  }, B(f.name), 13, dl)) : A("v-if", !0),
                  f.icon.show ? (v(), _("image", {
                    key: 2,
                    class: "point__icon",
                    href: f.icon.url,
                    width: f.icon.width,
                    height: f.icon.height,
                    x: f.coordinate[0] * w(s) - f.icon.width / 2,
                    y: f.coordinate[1] * w(o) - f.icon.height / 2
                  }, null, 8, fl)) : A("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (v(!0), _(
                M,
                null,
                Q(a.paths, (f, z) => (v(), _(
                  M,
                  null,
                  [
                    (v(!0), _(
                      M,
                      null,
                      Q(f.routeList, (b, C) => (v(), _("g", null, [
                        x("defs", null, [
                          x("path", {
                            id: b.key,
                            ref_for: !0,
                            ref: b.key,
                            d: w(h)(b.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, hl),
                          f.line.show && !f.line.slot ? (v(), _("mask", {
                            key: 0,
                            id: `mask${b.key}`
                          }, [
                            x("circle", {
                              cx: "0",
                              cy: "0",
                              r: f.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              x("animateMotion", {
                                dur: `${f.line.duration}ms`,
                                path: w(h)(b.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, pl)
                            ], 8, yl)
                          ], 8, gl)) : A("v-if", !0)
                        ]),
                        f.line.show ? (v(), _("use", {
                          key: 0,
                          "xlink:href": `#${b.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.orbitColor
                        }, null, 8, ml)) : A("v-if", !0),
                        f.line.show && !f.line.slot ? (v(), _("use", {
                          key: 1,
                          "xlink:href": `#${b.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.color,
                          mask: `url(#mask${b.key})`
                        }, [
                          x("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${w(R)(b.key)}`,
                            to: `${w(R)(b.key)}, 0`,
                            dur: `${f.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, _l)
                        ], 8, vl)) : A("v-if", !0),
                        f.line.show && f.line.slot ? (v(), _("g", $l, [
                          G(y.$slots, f.line.slot, {
                            path: w($)(b.path),
                            pathArr: w(D)(b.path),
                            totalLength: w(R)(b.key),
                            line: f.line
                          })
                        ])) : A("v-if", !0)
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
const wl = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, xl = [
  gt,
  yt,
  pt,
  wt,
  bt,
  Dt,
  Nt,
  At,
  Ht,
  Vt,
  ll,
  wl
], bl = {
  version: "1.0.12",
  install(e) {
    xl.forEach((t) => e.use(t));
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
  bl as default,
  xl as installs
};
