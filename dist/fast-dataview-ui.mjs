import './style.css';
import { unref as $, getCurrentScope as Ve, onScopeDispose as Qe, watch as ee, ref as T, onMounted as te, onUnmounted as Ge, nextTick as Ee, defineComponent as F, computed as P, createVNode as x, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as z, createElementVNode as w, toDisplayString as B, reactive as Z, provide as we, createCommentVNode as E, inject as xe, normalizeClass as K, getCurrentInstance as Oe, onBeforeUnmount as Be, Fragment as M, renderList as Q, TransitionGroup as Ne, withCtx as fe, normalizeProps as Ue, guardReactiveProps as qe, withDirectives as ke, vShow as be, createStaticVNode as Ke } from "vue";
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
const ze = typeof window < "u", Je = (e) => typeof e == "string", he = () => {
};
ze && ((Se = window == null ? void 0 : window.navigator) != null && Se.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return typeof e == "function" ? e() : $(e);
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
    return l && a(l), n <= 0 || s !== void 0 && s <= 0 ? (r && (a(r), r = null), Promise.resolve(i())) : new Promise((o, y) => {
      c = t.rejectOnCancel ? y : o, s && !r && (r = setTimeout(() => {
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
function rt(e) {
  return Ve() ? (Qe(e), !0) : !1;
}
function lt(e, t = 200, l = {}) {
  return je(et(t, l), e);
}
function nt(e) {
  var t;
  const l = ce(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const it = ze ? window : void 0;
function st(...e) {
  let t, l, r, c;
  if (Je(e[0]) || Array.isArray(e[0]) ? ([l, r, c] = e, t = it) : [t, l, r, c] = e, !t)
    return he;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const a = [], u = () => {
    a.forEach((o) => o()), a.length = 0;
  }, i = (o, y, h, p) => (o.addEventListener(y, h, p), () => o.removeEventListener(y, h, p)), n = ee(() => [nt(t), ce(c)], ([o, y]) => {
    u(), o && a.push(...l.flatMap((h) => r.map((p) => i(o, h, p, y))));
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
var ot = Object.defineProperty, Le = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, De = (e, t, l) => t in e ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, ut = (e, t) => {
  for (var l in t || (t = {}))
    at.call(t, l) && De(e, l, t[l]);
  if (Le)
    for (var l of Le(t))
      ct.call(t, l) && De(e, l, t[l]);
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
const re = (e, t, l, r) => {
  const c = T(0), a = T(0), u = T(0), i = T(0);
  let n, s = null, o = null;
  const y = (d = !0) => new Promise((m) => {
    Ee(() => {
      o = e.value, c.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = o ? o.getBoundingClientRect().width : 0, i.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!c.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && d && t(), m(!0);
    });
  }), h = () => {
    s = Ze(o, n), st(window, "resize", n);
  }, p = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, k = async () => {
    await y(!1), n = lt(y, 200), h(), typeof l == "function" && l();
  };
  return te(() => {
    k();
  }), Ge(() => {
    p();
  }), {
    width: c,
    height: a,
    afterWidth: u,
    afterHeight: i,
    initWH: y
  };
}, Fe = {
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
}, V = Object.assign, le = (e) => Array.isArray(e) && e.length, ue = (e) => Array.isArray(e) && e || [], H = (e) => e >= 0 ? e : 0, ft = (e, t, l = "reverse") => e.sort(ht(t, l)), ht = (e, t = "reverse") => function(l, r) {
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
}, Te = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, ie = /* @__PURE__ */ F({
  name: "FBorderBox1",
  props: Fe,
  setup(e, {
    slots: t
  }) {
    const l = T(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = P(() => le(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(l);
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
    return x("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [x("svg", {
      class: "f-svg-container",
      width: s,
      height: o
    }, [x("polygon", {
      fill: r,
      stroke: a[0],
      "stroke-width": n,
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${o - i}, ${s - i} ${o},
            ${i} ${o}, ${n} ${o - i}, ${n} ${i}
          `
    }, null), x("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${i - 8} 0,0 ${i - 8}
          `
    }, null), x("polyline", {
      stroke: a[1],
      "stroke-width": n + 1,
      points: `
            ${s} ${o - i + 8}, ${s - i + 8 + n} ${o}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
            ${n} ${i + 15}, ${n} ${i}, ${i} ${n} , ${i + 15} ${n}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${i + 15} ${o}, ${i}  ${o}, ${n} ${o - i}, ${n} ${o - i - 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
           ${s - i - 15} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": n + 2,
      points: `
          ${s - i - 15} ${o}, ${s - i} ${o}, ${s - n} ${o - i}, ${s - n} ${o - i - 15}
          `
    }, null), u ? x("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${i} ${n}, ${s - i} ${n}, ${s - n} ${i}, ${s - n} ${i + 15}, ${n} ${i + 15},
            ${n} ${i}
          `
    }, null) : null, u ? x("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), x("div", {
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
  props: Fe,
  setup(e, {
    slots: t
  }) {
    const l = T(null), r = ["white"];
    let c = P(() => le(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(l);
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
    let n = c || 3, s = H(n), o = H(n), y = H(t - n), h = H(n), p = H(t - n), k = H(l - n), d = H(n), m = H(l - n);
    return x("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [x("svg", {
      class: "f-svg-container",
      width: t,
      height: l
    }, [x("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`,
        "--border-stroke-dasharray": i
      },
      stroke: a[0],
      "stroke-width": n,
      fill: r,
      d: `M ${s} ${o}, L ${y} ${h}, L ${p} ${k}, L ${d} ${m}, Z`
    }, null)]), x("div", {
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
    const l = T(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let c = P(() => le(e.color) ? V(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: i
    } = re(l);
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
    return x("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${r}s`
      }
    }, [x("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [x("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), x("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), x("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [x("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), x("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), x("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [x("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), x("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), l ? x("div", {
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
    let r = P(() => le(e.color) ? V(l, e.color) : l);
    return {
      getLoadingStyle: P(() => ({
        width: e.width,
        height: e.height,
        color: r.value[2],
        "--border-color": r.value[0],
        "--border-top-color": r.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), We = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, c] of t)
    l[r] = c;
  return l;
}, vt = /* @__PURE__ */ w(
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
      style: z(e.getLoadingStyle)
    },
    [
      vt,
      w("div", _t, [
        G(e.$slots, "default", {}, () => [
          w(
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
const ae = /* @__PURE__ */ We(mt, [["render", $t]]);
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
    const t = e, l = T(null), r = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let c = T(1), a = T(1);
    we("scaleX", c), we("scaleY", a);
    const u = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: y, height: h } = window.screen;
      r.screenWidth = y, r.screenHeight = h;
    }, i = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, n = () => {
      const y = document.body.clientWidth, h = document.body.clientHeight, p = r.width || r.screenWidth, k = r.height || r.screenHeight, d = y / +p, m = h / +k;
      c.value = d, a.value = m, l.value.style.transform = `scale(${d}, ${m})`;
    };
    return re(l, () => {
      n();
    }, () => {
      u(), i(), n(), t.onAfterResize(), r.isReady = !0;
    }), (y, h) => (v(), _("div", kt, [
      w(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: l
        },
        [
          r.isReady ? G(y.$slots, "default", { key: 0 }) : E("v-if", !0),
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
      let s = Math.atan2(u, a), o = Math.cos(s), y = Math.sin(s), h = o * n * -l, p = y * n * -l;
      this.velocityX += h, this.velocityY += p;
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
        let i = ~~(Math.random() * u--), n = c[i], { targetX: s, targetY: o, colors: y } = n;
        n.targetX = c[u].targetX, n.targetY = c[u].targetY, n.colors = c[u].colors, c[u].targetX = s, c[u].targetY = o, c[u].colors = y;
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
class Ae {
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
          for (let y = 0; y < i; y += 5) {
            const h = (y + o * i) * 4, p = s[h + 3];
            if (p == 0)
              continue;
            const k = s[h], d = s[h + 1], m = s[h + 2];
            if (k + d + m + p) {
              const I = new ye(this.width, this.height, y, o, Lt, this.radius, `rgba(${k},${d},${m},${p})`);
              this.particleData.push(I);
            }
          }
        l(this.particleData);
      }, c.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const Dt = ["width", "height"], pe = /* @__PURE__ */ F({
  __name: "index",
  props: St,
  setup(e, { expose: t }) {
    const l = e;
    let r = xe("scaleX", T(1)), c = xe("scaleY", T(1));
    const a = T(null), u = T(null);
    let i = T(), n = T();
    const s = async (y) => {
      n.value = new Ae(y, l.width, l.height, l.radius), await n.value.createParticleData(), i.value.changeImg(n.value);
    }, o = async () => {
      n.value = new Ae(l.src, l.width, l.height, l.radius), await n.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), i.value = new It(a.value, l.radius, l.strength), a.value.addEventListener("mousemove", (y) => {
        const { left: h, top: p } = a.value.getBoundingClientRect(), { clientX: k, clientY: d } = y;
        i.value.mouseX = (k - h) * (1 / r.value), i.value.mouseY = (d - p) * (1 / c.value);
      }), i.value.drawCanvas(), i.value.changeImg(n.value));
    };
    return te(() => {
      o();
    }), t({
      toggleImg: s
    }), (y, h) => (v(), _("div", null, [
      w("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: l.width,
        height: l.height
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
  status: "100%",
  install(e) {
    e.use(pe);
  }
};
function He(e) {
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
  const { handleToggle: r } = He(l), c = (h) => {
    let p = ue(h);
    return Y(p);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, u = async (h, p, k) => {
    let d = k;
    p.map((m) => m._index_ = ++d), e.currData.length ? h === t.pageSize ? e.currData = [...p] : (e.currData.push(...p), e.currData.splice(0, h)) : e.currData.push(...p);
  }, i = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let h;
      t.mode === "single" ? h = t.togglePage : h = t.pageSize;
      let p, k;
      e.currPage === 1 ? (p = 0, k = t.pageSize) : (p = h * (e.currPage - 2) + t.pageSize, k = h * (e.currPage - 1) + t.pageSize);
      let d = e.tableData.slice(p, k);
      d.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, d, p) : e.currPage === 1 ? await u(t.pageSize, d, p) : await u(h, d, p) : (e.currPage = 1, a(), i()), n();
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
  }, o = (h = !0, p = !0) => {
    e.intervalId && h && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && p && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: c,
    setCurrData: i,
    setPageInterval: n,
    setEmptyTimeout: s,
    clearTimer: o,
    setPage: (h = 1) => {
      o(), e.currPage = h;
      let p;
      t.mode === "single" ? p = t.togglePage : p = t.pageSize;
      let k = p * (e.currPage - 1), d = p * (e.currPage - 1) + t.pageSize, m = e.tableData.slice(k, d);
      m.length ? (u(t.pageSize, m, k), n()) : i(), e.tableData.length || s();
    }
  };
}
function At(e, t) {
  const l = P(() => function(s, o) {
    const y = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && y.push("f-scroll-table_row--striped"), y;
  }), r = P(() => {
    const s = ["cell"];
    return t.wrap ? s.push("cell--wrap") : s.push("cell--nowrap"), s;
  }), c = P(() => function(s) {
    let o = s.reduce((y, h) => y += h.width, 0);
    return {
      width: `${o}px`,
      "max-width": `${o}px`
    };
  }), a = P(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = P(() => function(s) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), i = P(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), n = P(() => function(s, o, y, h) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: y,
      columnIndex: h,
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
    direction: { default: "left" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = T(), r = T(), c = P(() => {
      var h, p, k, d;
      let a = ((h = l.value) == null ? void 0 : h.offsetWidth) || 0, u = ((p = l.value) == null ? void 0 : p.offsetHeight) || 0, i = ((k = r.value) == null ? void 0 : k.offsetWidth) || 0, n = ((d = r.value) == null ? void 0 : d.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && n < u || ["left", "right"].includes(t.direction) && i < a))
        return {
          "--text-scroll-width": `${a}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let s, o, y;
      return ["up", "down"].includes(t.direction) && (s = u + n, o = s / t.speed || 0, y = `up-scroll linear ${o}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = a + i, o = s / t.speed || 0, y = `left-scroll linear ${o}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${a}px`,
        "--text-scroll-height": `${u}px`,
        animation: y
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
        w(
          "div",
          {
            ref_key: "textContent",
            ref: r,
            class: "text-content",
            style: z($(c))
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
}, Bt = ["onClick"], Nt = {
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
    }), c = Oe(), a = T(), {
      deepCloneArr: u,
      setCurrData: i,
      setPageInterval: n,
      setEmptyTimeout: s,
      clearTimer: o,
      setPage: y
    } = Rt(r, l, c), {
      handleCellClick: h
    } = He(c), {
      getRowClass: p,
      getCellClass: k,
      getTableStyle: d,
      getBodyStyle: m,
      getRowStyle: b,
      getExtraCellStyle: I,
      getCellStyle: g
    } = At(r, l), C = (L) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr";
    }, f = (L, X) => {
      L.offsetWidth, L.style.opacity = "1", L.style.gridTemplateRows = "1fr", X();
    }, N = async (L) => {
      L.style.opacity = "1";
    }, S = async (L, X) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr", await new Promise((D) => {
        setTimeout(() => {
          L.remove(), D(!0);
        }, l.pageAnimateDur);
      }), X();
    };
    return ee(() => l.data, (L) => {
      r.tableData = u(L), i();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      l.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        o(!0, !0), r.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? n() : s();
      }));
    }), Be(() => {
      o();
    }), t({
      setPage: y
    }), (L, X) => (v(), _(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": l.border
        }]),
        style: z($(d)(l.columns))
      },
      [w("div", Ot, [(v(!0), _(
        M,
        null,
        Q(l.columns, (D, O) => (v(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: z($(I)(D)),
            key: O
          },
          B(D.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), w(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: a,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: z($(m))
        },
        [x(Ne, {
          tag: "div",
          css: !1,
          onBeforeEnter: C,
          onEnter: f,
          onBeforeLeave: N,
          onLeave: S
        }, {
          default: fe(() => [(v(!0), _(
            M,
            null,
            Q(r.currData, (D, O) => (v(), _("div", {
              class: "f-scroll-table__row-wrap",
              key: D
            }, [w(
              "div",
              {
                class: K($(p)(D, O))
              },
              [(v(!0), _(
                M,
                null,
                Q(l.columns, (R, W) => (v(), _("div", {
                  class: "f-scroll-table__cell",
                  style: z([$(I)(R), $(g)(D, R.type === "index" ? "_index_" : R.prop, O, W)]),
                  key: `${D[R.prop]}${W}`,
                  onClick: (U) => $(h)(U, D, D[R.prop], O, W)
                }, [R.type === "index" ? (v(), _(
                  "div",
                  {
                    key: 0,
                    class: K($(k))
                  },
                  B(D._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : R.type === "scroll" ? (v(), _("div", Nt, [x(
                  $(de),
                  Ue(qe(R.scrollOption)),
                  {
                    default: fe(() => [w(
                      "div",
                      null,
                      B(D[R.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : R.slot ? (v(), _(
                  "div",
                  {
                    key: 2,
                    class: K($(k))
                  },
                  [G(L.$slots, R.slot, {
                    params: {
                      row: D,
                      column: R.prop,
                      $index: O
                    }
                  })],
                  2
                  /* CLASS */
                )) : (v(), _(
                  "div",
                  {
                    key: 3,
                    class: K($(k))
                  },
                  B(D[R.prop]),
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
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = P(() => le(e.color) ? V(l, e.color) : l);
    return {
      getProgressStyle: P(() => ({
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
      style: z(e.getProgressStyle)
    },
    [
      w(
        "div",
        {
          class: "progress-inner",
          style: z({ width: `${e.percent}%` })
        },
        [
          G(e.$slots, "default", { percent: e.percent }, () => [
            w(
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
const j = /* @__PURE__ */ We(Ft, [["render", Wt]]);
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
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), n = Number(a.toString().match(u)).toString(), s = n.indexOf(".");
      for (s < 0 && (s = n.length, n += "."); n.length <= s + t.digit; )
        n += "0";
      return n.split("");
    }, c = P(() => function(a) {
      return {
        top: `-${Number(a) * 100}%`
      };
    });
    return te(() => {
      l.stringList = r(t.number);
    }), ee(
      () => t.number,
      (a) => {
        l.stringList = r(t.number);
      }
    ), (a, u) => (v(), _("div", Mt, [
      w("div", Xt, [
        (v(!0), _(
          M,
          null,
          Q($(l).stringList, (i, n) => (v(), _(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": i === "." }]),
              key: n
            },
            [
              ke(w(
                "div",
                Yt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [be, i === "."]
              ]),
              ke(w(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: z($(c)(i))
                },
                [
                  (v(), _(
                    M,
                    null,
                    Q(10, (s, o) => w(
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
      default: 300
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
    const t = e, l = T();
    let r = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const c = (d) => {
      let m = Y(ue(d)), b = [];
      t.order === "default" ? b = m : b = ft(m, "value", t.order), typeof t.valueFormatter == "function" && (b = b.map((I, g) => {
        var C;
        return I.formattedValue = (C = t.valueFormatter) == null ? void 0 : C.call(null, {
          name: I.name,
          value: I.value,
          maxValue: s.value,
          index: g
        }), I;
      })), r.dataList = b;
    }, a = async (d, m, b) => {
      let I = b;
      m.map((g) => g._index_ = ++I), r.currList.length ? d === t.pageSize ? r.currList = [...m] : (r.currList.push(...m), r.currList.splice(0, d)) : r.currList.push(...m), Ee(() => {
        l.value && (l.value.style.maxHeight = `${l.value.getBoundingClientRect().height}px`, l.value.style.height = `${l.value.getBoundingClientRect().height}px`);
      });
    }, u = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let m, b;
        r.currPage === 1 ? (m = 0, b = t.pageSize) : (m = d * (r.currPage - 2) + t.pageSize, b = d * (r.currPage - 1) + t.pageSize);
        let I = r.dataList.slice(m, b);
        I.length ? r.currPage === 1 ? await a(t.pageSize, I, m) : await a(d, I, m) : (r.currPage = 1, u()), i();
      } else
        n(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, i = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, u();
      }, t.toggleDur));
    }, n = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, s = P(() => {
      var d, m;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = r.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((m = r.currList[0]) == null ? void 0 : m.value) || 0;
    }), o = P(() => function(d) {
      let m, b = s.value;
      m = d / b;
      const I = (g, C) => Math.round(g * Math.pow(10, C)) / Math.pow(10, C);
      return typeof m == "number" ? I(m * 100, 1) : 0;
    }), y = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, h = (d, m) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", m();
    }, p = async (d) => {
      d.style.opacity = "1", d.style.margin = "0";
    }, k = async (d, m) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise((b) => {
        setTimeout(() => {
          d.remove(), b(!0);
        }, t.toggleDuration);
      }), m();
    };
    return Be(() => {
      n();
    }), ee(
      () => t.data,
      (d) => {
        c(d), u();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, m) => (v(), _("div", Qt, [
      w(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: l,
          style: z({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          x(Ne, {
            tag: "div",
            css: !1,
            onBeforeEnter: y,
            onEnter: h,
            onBeforeLeave: p,
            onLeave: k
          }, {
            default: fe(() => [
              (v(!0), _(
                M,
                null,
                Q($(r).currList, (b, I) => (v(), _("div", {
                  class: "f-scroll-rank__item",
                  key: b
                }, [
                  w("div", Gt, [
                    w("div", Ut, [
                      t.showRank ? (v(), _(
                        "span",
                        qt,
                        B(`NO.${b._index_}`),
                        1
                        /* TEXT */
                      )) : E("v-if", !0),
                      w(
                        "span",
                        Kt,
                        B(b.name || ""),
                        1
                        /* TEXT */
                      ),
                      w("div", Zt, [
                        t.showPercent ? (v(), _(
                          "span",
                          Jt,
                          B(`${$(o)(b.value)}%`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (v(), _(
                          "span",
                          jt,
                          B(`${b.value} / ${$(s)}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        typeof t.valueFormatter == "function" ? (v(), _(
                          "span",
                          er,
                          B(`${b.formattedValue}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0)
                      ])
                    ]),
                    w("div", tr, [
                      x($(j), {
                        percent: $(o)(b.value),
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
    const t = e, l = T();
    let r;
    te(() => {
      r = Oe();
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
    }), u = (g) => {
      let { offsetX: C, offsetY: f } = g;
      const N = (C / s.value).toFixed(2), S = (f / o.value).toFixed(2);
      r == null || r.emit("chart-click", N, S, g);
    }, i = () => {
      y(), h();
    }, n = () => {
      y(), h();
    }, { width: s, height: o } = re(l, i, n), y = () => {
      let g = Y(ue(t.points));
      a.points = g.map((C, f) => ({
        ...C,
        halo: V({}, c.halo, Y(t.halo), C.halo),
        title: V({}, c.title, Y(t.title), C.title),
        icon: V({}, c.icon, Y(t.icon), C.icon),
        key: `${C.coordinate.toString()}${f}`
      }));
    }, h = () => {
      let g = Y(ue(t.paths));
      a.paths = g.map((C, f) => {
        var ne, q;
        let { source: N, route: S, target: L, line: X } = C, D = V({}, c.line, Y(t.line), X), O = (ne = a.points.find(({ name: A }) => A === N)) == null ? void 0 : ne.coordinate, R = (q = a.points.find(({ name: A }) => A === L)) == null ? void 0 : q.coordinate, W = S ? [O, ...S, R] : [O, R];
        W = W.filter((A) => A !== void 0);
        let U = [];
        for (let A = 0; A < W.length - 1; A++) {
          let Me = W[A], J = p(Me, W[A + 1], D.k, D.curvature), Xe = `M${J[0].toString()} Q${J[1].toString()} ${J[2].toString()}`, Ye = `${J.toString()}`;
          U.push({ path: J, d: Xe, key: Ye });
        }
        return {
          ...C,
          line: D,
          routeList: U
        };
      });
    }, p = (g, C, f, N) => {
      let [S, L] = g, [X, D] = C;
      const [O, R] = [(S + X) / 2, (L + D) / 2];
      let U = Te([S, L], [X, D]) / N, ne = U / 2, [q, A] = [O, R];
      do
        q += ne, A = k(f, [O, R], q)[1];
      while (Te([O, R], [q, A]) < U);
      return [g, [q, A], C];
    };
    function k(g, [C, f], N) {
      const S = f - g * C + g * N;
      return [N, S];
    }
    let d = P(() => function(g) {
      return `M${g[0][0] * s.value},${g[0][1] * o.value} 
    Q${g[1][0] * s.value},${g[1][1] * o.value} 
    ${g[2][0] * s.value},${g[2][1] * o.value}`;
    }), m = P(() => function(g) {
      return `M${g[0][0] * s.value},${g[0][1] * o.value} 
    Q${g[1][0] * s.value},${g[1][1] * o.value} 
    ${g[2][0] * s.value},${g[2][1] * o.value}`;
    }), b = P(() => function(g) {
      return {
        x1: g[0][0] * s.value,
        y1: g[0][1] * o.value,
        x2: g[1][0] * s.value,
        y2: g[1][1] * o.value,
        x3: g[2][0] * s.value,
        y3: g[2][1] * o.value
      };
    });
    P(() => function(g) {
      return `"M${g[0][0] * s.value},${g[0][1] * o.value} Q${g[1][0] * s.value},${g[1][1] * o.value} ${g[2][0] * s.value},${g[2][1] * o.value}"`;
    });
    let I = P(() => function(g) {
      return r ? r.proxy.$refs[g][0].getTotalLength() : 0;
    });
    return ee(() => t, (g) => {
      y(), h();
    }, {
      deep: !0,
      immediate: !0
    }), (g, C) => (v(), _(
      "div",
      {
        ref_key: "flightChart",
        ref: l,
        class: "f-flight-chart"
      },
      [
        w(
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
                Q(a.points, (f, N) => (v(), _("g", {
                  key: f.key
                }, [
                  w("defs", null, [
                    f.halo.show ? (v(), _("circle", {
                      key: 0,
                      id: `halo${f.key}`,
                      cx: f.coordinate[0] * $(s),
                      cy: f.coordinate[1] * $(o)
                    }, [
                      w("animate", {
                        attributeName: "r",
                        values: `1;${f.halo.radius}`,
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, sr),
                      w("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, or)
                    ], 8, ir)) : E("v-if", !0),
                    w("mask", {
                      id: `mask${f.key}`
                    }, [
                      w("use", {
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
                    x: f.coordinate[0] * $(s) + f.title.offest[0],
                    y: f.coordinate[1] * $(o) + f.title.offest[1]
                  }, B(f.name), 13, dr)) : E("v-if", !0),
                  f.icon.show ? (v(), _("image", {
                    key: 2,
                    class: "point__icon",
                    href: f.icon.url,
                    width: f.icon.width,
                    height: f.icon.height,
                    x: f.coordinate[0] * $(s) - f.icon.width / 2,
                    y: f.coordinate[1] * $(o) - f.icon.height / 2
                  }, null, 8, fr)) : E("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (v(!0), _(
                M,
                null,
                Q(a.paths, (f, N) => (v(), _(
                  M,
                  null,
                  [
                    (v(!0), _(
                      M,
                      null,
                      Q(f.routeList, (S, L) => (v(), _("g", null, [
                        w("defs", null, [
                          w("path", {
                            id: S.key,
                            ref_for: !0,
                            ref: S.key,
                            d: $(d)(S.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, hr),
                          f.line.show && !f.line.slot ? (v(), _("mask", {
                            key: 0,
                            id: `mask${S.key}`
                          }, [
                            w("circle", {
                              cx: "0",
                              cy: "0",
                              r: f.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              w("animateMotion", {
                                dur: `${f.line.duration}ms`,
                                path: $(d)(S.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, pr)
                            ], 8, yr)
                          ], 8, gr)) : E("v-if", !0)
                        ]),
                        f.line.show ? (v(), _("use", {
                          key: 0,
                          "xlink:href": `#${S.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.orbitColor
                        }, null, 8, mr)) : E("v-if", !0),
                        f.line.show && !f.line.slot ? (v(), _("use", {
                          key: 1,
                          "xlink:href": `#${S.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.color,
                          mask: `url(#mask${S.key})`
                        }, [
                          w("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${$(I)(S.key)}`,
                            to: `${$(I)(S.key)}, 0`,
                            dur: `${f.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, _r)
                        ], 8, vr)) : E("v-if", !0),
                        f.line.show && f.line.slot ? (v(), _("g", $r, [
                          G(g.$slots, f.line.slot, {
                            path: $(m)(S.path),
                            pathArr: $(b)(S.path),
                            totalLength: $(I)(S.key),
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
  bt,
  Tt,
  zt,
  Et,
  Ht,
  Vt,
  rr,
  wr
], br = {
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
  br as default,
  xr as installs
};
