import './style.css';
import { unref as C, getCurrentScope as Ge, onScopeDispose as Ue, watch as j, ref as O, onMounted as J, onUnmounted as Ke, nextTick as ke, defineComponent as z, computed as P, createVNode as x, renderSlot as Q, openBlock as _, createElementBlock as $, normalizeStyle as H, createElementVNode as S, toDisplayString as W, reactive as Z, provide as Ce, createCommentVNode as B, inject as Le, normalizeClass as K, getCurrentInstance as We, onBeforeUnmount as Se, Fragment as M, renderList as V, TransitionGroup as He, withCtx as ge, normalizeProps as Ze, guardReactiveProps as je, withDirectives as Pe, vShow as Ie, createStaticVNode as Je, onBeforeMount as et, onUpdated as tt } from "vue";
function lt(e, t) {
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
var De;
const Me = typeof window < "u", rt = (e) => typeof e == "string", pe = () => {
};
Me && ((De = window == null ? void 0 : window.navigator) != null && De.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function de(e) {
  return typeof e == "function" ? e() : C(e);
}
function nt(e, t) {
  function l(...r) {
    return new Promise((u, c) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(u).catch(c);
    });
  }
  return l;
}
function it(e, t = {}) {
  let l, r, u = pe;
  const c = (i) => {
    clearTimeout(i), u(), u = pe;
  };
  return (i) => {
    const a = de(e), o = de(t.maxWait);
    return l && c(l), a <= 0 || o !== void 0 && o <= 0 ? (r && (c(r), r = null), Promise.resolve(i())) : new Promise((s, p) => {
      u = t.rejectOnCancel ? p : s, o && !r && (r = setTimeout(() => {
        l && c(l), r = null, s(i());
      }, o)), l = setTimeout(() => {
        r && c(r), r = null, s(i());
      }, a);
    });
  };
}
function at(e) {
  return e;
}
function ot(e) {
  return Ge() ? (Ue(e), !0) : !1;
}
function st(e, t = 200, l = {}) {
  return nt(it(t, l), e);
}
function ct(e) {
  var t;
  const l = de(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const ut = Me ? window : void 0;
function dt(...e) {
  let t, l, r, u;
  if (rt(e[0]) || Array.isArray(e[0]) ? ([l, r, u] = e, t = ut) : [t, l, r, u] = e, !t)
    return pe;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const c = [], n = () => {
    c.forEach((s) => s()), c.length = 0;
  }, i = (s, p, v, f) => (s.addEventListener(p, v, f), () => s.removeEventListener(p, v, f)), a = j(() => [ct(t), de(u)], ([s, p]) => {
    n(), s && c.push(...l.flatMap((v) => r.map((f) => i(s, v, f, p))));
  }, { immediate: !0, flush: "post" }), o = () => {
    a(), n();
  };
  return ot(o), o;
}
const Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Re = "__vueuse_ssr_handlers__";
Te[Re] = Te[Re] || {};
var Oe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Oe || (Oe = {}));
var ft = Object.defineProperty, Ae = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, Ne = (e, t, l) => t in e ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, pt = (e, t) => {
  for (var l in t || (t = {}))
    ht.call(t, l) && Ne(e, l, t[l]);
  if (Ae)
    for (var l of Ae(t))
      gt.call(t, l) && Ne(e, l, t[l]);
  return e;
};
const vt = {
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
pt({
  linear: at
}, vt);
const ee = (e, t, l, r) => {
  const u = O(0), c = O(0), n = O(0), i = O(0);
  let a, o = null, s = null;
  const p = (h = !0) => new Promise((y) => {
    ke(() => {
      s = e.value, u.value = e.value ? e.value.clientWidth : 0, c.value = e.value ? e.value.clientHeight : 0, n.value = s ? s.getBoundingClientRect().width : 0, i.value = s ? s.getBoundingClientRect().height : 0, e.value ? (!u.value || !c.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && h && t(), y(!0);
    });
  }), v = () => {
    o = lt(s, a), dt(window, "resize", a);
  }, f = () => {
    o && (o.disconnect(), o.takeRecords(), o = null);
  }, m = async () => {
    await p(!1), a = st(p, 300), v(), typeof l == "function" && l();
  };
  return J(() => {
    m();
  }), Ke(() => {
    f();
  }), {
    width: u,
    height: c,
    afterWidth: n,
    afterHeight: i,
    initWH: p
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
}, F = Object.assign, re = (e) => Array.isArray(e) && e.length, fe = (e) => Array.isArray(e) && e || [], Y = (e) => e >= 0 ? e : 0, yt = (e, t, l = "reverse") => e.sort(mt(t, l)), mt = (e, t = "reverse") => function(l, r) {
  return l[e] < r[e] ? t === "normal" ? -1 : 1 : l[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, q = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
    e.hasOwnProperty(r) && (l[r] = q(e[r], t));
  return l;
}, Ee = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, ae = /* @__PURE__ */ z({
  name: "FBorderBox1",
  props: Fe,
  setup(e, {
    slots: t
  }) {
    const l = O(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let u = P(() => re(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = ee(l);
    return {
      width: c,
      height: n,
      initWH: i,
      borderBox1: l,
      defaultColor: r,
      realColor: u
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: u,
      realColor: c,
      title: n
    } = this, i = 20;
    let a = u || 2, o = Y(t - a - 2), s = Y(l - a - 2);
    return x("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [x("svg", {
      class: "f-svg-container",
      width: o,
      height: s
    }, [x("polygon", {
      fill: r,
      stroke: c[0],
      "stroke-width": a,
      points: `
            ${i} ${a}, ${o - i} ${a}, ${o - a} ${i}, ${o - a} ${s - i}, ${o - i} ${s},
            ${i} ${s}, ${a} ${s - i}, ${a} ${i}
          `
    }, null), x("polyline", {
      stroke: c[1],
      "stroke-width": a + 1,
      points: `
            ${i - 8} 0,0 ${i - 8}
          `
    }, null), x("polyline", {
      stroke: c[1],
      "stroke-width": a + 1,
      points: `
            ${o} ${s - i + 8}, ${o - i + 8 + a} ${s}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
            ${a} ${i + 15}, ${a} ${i}, ${i} ${a} , ${i + 15} ${a}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
           ${i + 15} ${s}, ${i}  ${s}, ${a} ${s - i}, ${a} ${s - i - 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
           ${o - i - 15} ${a}, ${o - i} ${a}, ${o - a} ${i}, ${o - a} ${i + 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
          ${o - i - 15} ${s}, ${o - i} ${s}, ${o - a} ${s - i}, ${o - a} ${s - i - 15}
          `
    }, null), n ? x("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${i} ${a}, ${o - i} ${a}, ${o - a} ${i}, ${o - a} ${i + 15}, ${a} ${i + 15},
            ${a} ${i}
          `
    }, null) : null, n ? x("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [n]) : null]), x("div", {
      class: "f-border-box-content"
    }, [Q(e, "default")])]);
  }
});
ae.install = function(e) {
  e.component(ae.name, ae);
};
const _t = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ae);
  }
}, oe = /* @__PURE__ */ z({
  name: "FBorderBox2",
  props: Fe,
  setup(e, {
    slots: t
  }) {
    const l = O(null), r = ["white"];
    let u = P(() => re(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = ee(l);
    return {
      width: c,
      height: n,
      initWH: i,
      borderBox2: l,
      defaultColor: r,
      realColor: u
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: u,
      realColor: c,
      duration: n,
      strokeDasharray: i
    } = this;
    let a = u || 3, o = Y(a), s = Y(a), p = Y(t - a), v = Y(a), f = Y(t - a), m = Y(l - a), h = Y(a), y = Y(l - a);
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
        "--duration": `${n}s`,
        "--border-stroke-dasharray": i
      },
      stroke: c[0],
      "stroke-width": a,
      fill: r,
      d: `M ${o} ${s}, L ${p} ${v}, L ${f} ${m}, L ${h} ${y}, Z`
    }, null)]), x("div", {
      class: "f-border-box-content"
    }, [Q(e, "default")])]);
  }
});
oe.install = function(e) {
  e.component(oe.name, oe);
};
const $t = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(oe);
  }
}, se = /* @__PURE__ */ z({
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
    const l = O(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let u = P(() => re(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = ee(l);
    return {
      width: c,
      height: n,
      initWH: i,
      loading1: l,
      defaultColor: r,
      realColor: u
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
se.install = function(e) {
  e.component(se.name, se);
};
const wt = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(se);
  }
}, xt = z({
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
    let r = P(() => re(e.color) ? F(l, e.color) : l);
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
}), Xe = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, u] of t)
    l[r] = u;
  return l;
}, bt = /* @__PURE__ */ S(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), kt = { class: "loading-text" };
function St(e, t, l, r, u, c) {
  return _(), $(
    "div",
    {
      class: "f-loading-2",
      style: H(e.getLoadingStyle)
    },
    [
      bt,
      S("div", kt, [
        Q(e.$slots, "default", {}, () => [
          S(
            "div",
            null,
            W(e.text),
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
const ce = /* @__PURE__ */ Xe(xt, [["render", St]]);
ce.install = function(e) {
  e.component(ce.name, ce);
};
const Ct = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(ce);
  }
}, Lt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, Pt = { class: "f-screen-container" }, ve = /* @__PURE__ */ z({
  __name: "index",
  props: Lt,
  setup(e) {
    const t = e, l = O(null), r = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let u = O(1), c = O(1);
    Ce("scaleX", u), Ce("scaleY", c);
    const n = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: p, height: v } = window.screen;
      r.screenWidth = p, r.screenHeight = v;
    }, i = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, a = () => {
      const p = document.body.clientWidth, v = document.body.clientHeight, f = r.width || r.screenWidth, m = r.height || r.screenHeight, h = p / +f, y = v / +m;
      u.value = h, c.value = y, l.value.style.transform = `scale(${h}, ${y})`;
    };
    return ee(l, () => {
      a();
    }, () => {
      n(), i(), a(), t.onAfterResize(), r.isReady = !0;
    }), (p, v) => (_(), $("div", Pt, [
      S(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: l
        },
        [
          r.isReady ? Q(p.$slots, "default", { key: 0 }) : B("v-if", !0),
          B(" <slot></slot> ")
        ],
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
ve.install = function(e) {
  e.component("FScreenContainer", ve);
};
const It = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(ve);
  }
}, Dt = {
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
}, Tt = 30, Rt = 1 / Tt;
class ye {
  // 粒子的透明度
  constructor(t, l, r, u, c, n, i) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = u, this.time = c, this.radius = n, this.colors = i, this.opacity = 0;
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
  update(t, l, r, u) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && u) {
      let c = r - this.x, n = u - this.y, i = Math.sqrt(c ** 2 + n ** 2), a = t / i;
      a = a > 7 ? 7 : a;
      let o = Math.atan2(n, c), s = Math.cos(o), p = Math.sin(o), v = s * a * -l, f = p * a * -l;
      this.velocityX += v, this.velocityY += f;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Rt);
  }
  // 切换粒子
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const Be = 30;
class Ot {
  // 动画的id，用于停止动画
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, u = this.particleArr, c = u.length;
      for (let i = 0; i < r; i++) {
        const { targetX: a, targetY: o, colors: s } = l[i];
        u[i] ? u[i].change(a, o, s) : u[i] = new ye(this.width, this.height, a, o, Be, this.radius, s);
      }
      r < c && (this.particleArr = u.splice(0, r)), u = this.particleArr;
      let n = u.length;
      for (; n; ) {
        let i = ~~(Math.random() * n--), a = u[i], { targetX: o, targetY: s, colors: p } = a;
        a.targetX = u[n].targetX, a.targetY = u[n].targetY, a.colors = u[n].colors, u[n].targetX = o, u[n].targetY = s, u[n].colors = p;
      }
    } else
      this.particleArr = t.particleData.map((l) => new ye(this.width, this.height, l.targetX, l.targetY, Be, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const At = 30;
class ze {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, l, r, u) {
    this.src = t, this.width = l, this.height = r, this.particleData = [], this.radius = u;
  }
  createParticleData(t = this.src) {
    return new Promise((l, r) => {
      let u = new Image();
      u.crossOrigin = "", u.src = decodeURI(new URL(t, import.meta.url).href), u.onload = () => {
        const c = document.createElement("canvas"), n = c.getContext("2d"), i = this.width, a = this.height;
        c.width = i, c.height = a, n == null || n.drawImage(u, 0, 0, i, a);
        const o = n == null ? void 0 : n.getImageData(0, 0, i, a).data;
        n == null || n.clearRect(0, 0, this.width, this.height);
        for (let s = 0; s < a; s += 5)
          for (let p = 0; p < i; p += 5) {
            const v = (p + s * i) * 4, f = o[v + 3];
            if (f == 0)
              continue;
            const m = o[v], h = o[v + 1], y = o[v + 2];
            if (m + h + y + f) {
              const I = new ye(this.width, this.height, p, s, At, this.radius, `rgba(${m},${h},${y},${f})`);
              this.particleData.push(I);
            }
          }
        l(this.particleData);
      }, u.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const Nt = ["width", "height"], me = /* @__PURE__ */ z({
  __name: "index",
  props: Dt,
  setup(e, { expose: t }) {
    const l = e;
    let r = Le("scaleX", O(1)), u = Le("scaleY", O(1));
    const c = O(null), n = O(null);
    let i = O(), a = O();
    const o = async (p) => {
      a.value = new ze(p, l.width, l.height, l.radius), await a.value.createParticleData(), i.value.changeImg(a.value);
    }, s = async () => {
      a.value = new ze(l.src, l.width, l.height, l.radius), await a.value.createParticleData(), c.value && (n.value = c.value.getContext("2d"), i.value = new Ot(c.value, l.radius, l.strength), c.value.addEventListener("mousemove", (p) => {
        const { left: v, top: f } = c.value.getBoundingClientRect(), { clientX: m, clientY: h } = p;
        i.value.mouseX = (m - v) * (1 / r.value), i.value.mouseY = (h - f) * (1 / u.value);
      }), i.value.drawCanvas(), i.value.changeImg(a.value));
    };
    return J(() => {
      s();
    }), t({
      toggleImg: o
    }), (p, v) => (_(), $("div", null, [
      S("canvas", {
        ref_key: "canvasRef",
        ref: c,
        width: l.width,
        height: l.height
      }, null, 8, Nt)
    ]));
  }
});
me.install = function(e) {
  e.component("FDynamicParticle", me);
};
const Et = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "100%",
  install(e) {
    e.use(me);
  }
};
function Ye(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, u, c, n, i) => {
      e.emit("cell-click", u, c, n, i, r);
    }
  };
}
function Bt(e, t, l) {
  const { handleToggle: r } = Ye(l), u = (v) => {
    let f = fe(v);
    return q(f);
  }, c = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, n = async (v, f, m) => {
    let h = m;
    f.map((y) => y._index_ = ++h), e.currData.length ? v === t.pageSize ? e.currData = [...f] : (e.currData.push(...f), e.currData.splice(0, v)) : e.currData.push(...f);
  }, i = async () => {
    if (e.tableData.length) {
      s(!1, !0), e.isEmpty = !1;
      let v;
      t.mode === "single" ? v = t.togglePage : v = t.pageSize;
      let f, m;
      e.currPage === 1 ? (f = 0, m = t.pageSize) : (f = v * (e.currPage - 2) + t.pageSize, m = v * (e.currPage - 1) + t.pageSize);
      let h = e.tableData.slice(f, m);
      h.length ? e.currPage === 1 && e.toggleCount === 0 ? n(t.pageSize, h, f) : e.currPage === 1 ? await n(t.pageSize, h, f) : await n(v, h, f) : (e.currPage = 1, c(), i()), a();
    } else
      s(), e.currPage = 1, e.currData = [], e.isEmpty = !0, o();
  }, a = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, i();
    }, t.toggleDur));
  }, o = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      r(t.name);
    }, t.emptyEmitDur));
  }, s = (v = !0, f = !0) => {
    e.intervalId && v && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && f && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: u,
    setCurrData: i,
    setPageInterval: a,
    setEmptyTimeout: o,
    clearTimer: s,
    setPage: (v = 1) => {
      s(), e.currPage = v;
      let f;
      t.mode === "single" ? f = t.togglePage : f = t.pageSize;
      let m = f * (e.currPage - 1), h = f * (e.currPage - 1) + t.pageSize, y = e.tableData.slice(m, h);
      y.length ? (n(t.pageSize, y, m), a()) : i(), e.tableData.length || o();
    }
  };
}
function zt(e, t) {
  const l = P(() => function(o, s) {
    const p = ["f-scroll-table__row"];
    return t.stripe && s % 2 === 1 && p.push("f-scroll-table_row--striped"), p;
  }), r = P(() => {
    const o = ["cell"];
    return t.wrap ? o.push("cell--wrap") : o.push("cell--nowrap"), o;
  }), u = P(() => function(o) {
    let s = o.reduce((p, v) => p += v.width, 0);
    return {
      width: `${s}px`,
      "max-width": `${s}px`
    };
  }), c = P(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), n = P(() => function(o) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), i = P(() => function(o) {
    return {
      width: `${o.width}px`,
      "max-width": `${o.width}px`,
      "text-align": o.align || t.align || "start"
    };
  }), a = P(() => function(o, s, p, v) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: p,
      columnIndex: v,
      row: o,
      column: s
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: r,
    getTableStyle: u,
    getBodyStyle: c,
    getRowStyle: n,
    getExtraCellStyle: i,
    getCellStyle: a
  };
}
const he = /* @__PURE__ */ z({
  __name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "left" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = O(), r = O(), u = P(() => {
      var v, f, m, h;
      let c = ((v = l.value) == null ? void 0 : v.offsetWidth) || 0, n = ((f = l.value) == null ? void 0 : f.offsetHeight) || 0, i = ((m = r.value) == null ? void 0 : m.offsetWidth) || 0, a = ((h = r.value) == null ? void 0 : h.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && a < n || ["left", "right"].includes(t.direction) && i < c))
        return {
          "--text-scroll-width": `${c}px`,
          "--text-scroll-height": `${n}px`,
          animation: ""
        };
      let o, s, p;
      return ["up", "down"].includes(t.direction) && (o = n + a, s = o / t.speed || 0, p = `up-scroll linear ${s}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (o = c + i, s = o / t.speed || 0, p = `left-scroll linear ${s}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${c}px`,
        "--text-scroll-height": `${n}px`,
        animation: p
      };
    });
    return (c, n) => (_(), $(
      "div",
      {
        ref_key: "scrollText",
        ref: l,
        class: K(["f-scroll-text", `f-scroll-text--${t.type}`])
      },
      [
        S(
          "div",
          {
            ref_key: "textContent",
            ref: r,
            class: "text-content",
            style: H(C(u))
          },
          [
            Q(c.$slots, "default")
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
he.install = function(e) {
  e.component("FScrollText", he);
};
const Wt = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(he);
  }
}, Ht = {
  class: "f-scroll-table__head"
}, Mt = ["onClick"], Ft = {
  key: 1
}, _e = /* @__PURE__ */ z({
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
    }), u = We(), c = O(), {
      deepCloneArr: n,
      setCurrData: i,
      setPageInterval: a,
      setEmptyTimeout: o,
      clearTimer: s,
      setPage: p
    } = Bt(r, l, u), {
      handleCellClick: v
    } = Ye(u), {
      getRowClass: f,
      getCellClass: m,
      getTableStyle: h,
      getBodyStyle: y,
      getRowStyle: k,
      getExtraCellStyle: I,
      getCellStyle: g
    } = zt(r, l), T = (L) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr";
    }, d = (L, A) => {
      L.offsetWidth, L.style.opacity = "1", L.style.gridTemplateRows = "1fr", A();
    }, b = async (L) => {
      L.style.opacity = "1";
    }, w = async (L, A) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr", await new Promise((D) => {
        setTimeout(() => {
          L.remove(), D(!0);
        }, l.pageAnimateDur);
      }), A();
    };
    return j(() => l.data, (L) => {
      r.tableData = n(L), i();
    }, {
      immediate: !0,
      deep: !0
    }), J(() => {
      l.mouseEvent && (c.value.addEventListener("mouseenter", () => {
        s(!0, !0), r.isStopToggle = !0;
      }), c.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? a() : o();
      }));
    }), Se(() => {
      s();
    }), t({
      setPage: p
    }), (L, A) => (_(), $(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": l.border
        }]),
        style: H(C(h)(l.columns))
      },
      [S("div", Ht, [(_(!0), $(
        M,
        null,
        V(l.columns, (D, N) => (_(), $(
          "div",
          {
            class: "f-scroll-table__cell",
            style: H(C(I)(D)),
            key: N
          },
          W(D.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), S(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: c,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: H(C(y))
        },
        [x(He, {
          tag: "div",
          css: !1,
          onBeforeEnter: T,
          onEnter: d,
          onBeforeLeave: b,
          onLeave: w
        }, {
          default: ge(() => [(_(!0), $(
            M,
            null,
            V(r.currData, (D, N) => (_(), $("div", {
              class: "f-scroll-table__row-wrap",
              key: D
            }, [S(
              "div",
              {
                class: K(C(f)(D, N))
              },
              [(_(!0), $(
                M,
                null,
                V(l.columns, (R, X) => (_(), $("div", {
                  class: "f-scroll-table__cell",
                  style: H([C(I)(R), C(g)(D, R.type === "index" ? "_index_" : R.prop, N, X)]),
                  key: `${D[R.prop]}${X}`,
                  onClick: (G) => C(v)(G, D, D[R.prop], N, X)
                }, [R.type === "index" ? (_(), $(
                  "div",
                  {
                    key: 0,
                    class: K(C(m))
                  },
                  W(D._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : R.type === "scroll" ? (_(), $("div", Ft, [x(
                  C(he),
                  Ze(je(R.scrollOption)),
                  {
                    default: ge(() => [S(
                      "div",
                      null,
                      W(D[R.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : R.slot ? (_(), $(
                  "div",
                  {
                    key: 2,
                    class: K(C(m))
                  },
                  [Q(L.$slots, R.slot, {
                    params: {
                      row: D,
                      column: R.prop,
                      $index: N
                    }
                  })],
                  2
                  /* CLASS */
                )) : (_(), $(
                  "div",
                  {
                    key: 3,
                    class: K(C(m))
                  },
                  W(D[R.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, Mt))),
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
_e.install = function(e) {
  e.component("FScrollTable", _e);
};
const Xt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, Yt = z({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = P(() => re(e.color) ? F(l, e.color) : l);
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
function Vt(e, t, l, r, u, c) {
  return _(), $(
    "div",
    {
      class: "f-progress",
      style: H(e.getProgressStyle)
    },
    [
      S(
        "div",
        {
          class: "progress-inner",
          style: H({ width: `${e.percent}%` })
        },
        [
          Q(e.$slots, "default", { percent: e.percent }, () => [
            S(
              "span",
              null,
              W(e.percent ? `${e.percent}%` : ""),
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
const le = /* @__PURE__ */ Xe(Yt, [["render", Vt]]);
le.install = function(e) {
  e.component(le.name, le);
};
const qt = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(le);
  }
}, Qt = { class: "f-digital-scroll" }, Gt = { class: "f-digital-scroll__list" }, Ut = { class: "f-digital-scroll__point" }, $e = /* @__PURE__ */ z({
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
    const r = (c) => {
      let n = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), a = Number(c.toString().match(n)).toString(), o = a.indexOf(".");
      for (o < 0 && (o = a.length, a += "."); a.length <= o + t.digit; )
        a += "0";
      return a.split("");
    }, u = P(() => function(c) {
      return {
        top: `-${Number(c) * 100}%`
      };
    });
    return J(() => {
      l.stringList = r(t.number);
    }), j(
      () => t.number,
      (c) => {
        l.stringList = r(t.number);
      }
    ), (c, n) => (_(), $("div", Qt, [
      S("div", Gt, [
        (_(!0), $(
          M,
          null,
          V(C(l).stringList, (i, a) => (_(), $(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": i === "." }]),
              key: a
            },
            [
              Pe(S(
                "div",
                Ut,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [Ie, i === "."]
              ]),
              Pe(S(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: H(C(u)(i))
                },
                [
                  (_(), $(
                    M,
                    null,
                    V(10, (o, s) => S(
                      "div",
                      {
                        class: "f-digital-scroll__digital-item",
                        key: s
                      },
                      W(s),
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
                [Ie, i !== "."]
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
$e.install = function(e) {
  e.component("FDigitalScroll", $e);
};
const Kt = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, Zt = { class: "f-scroll-rank" }, jt = { class: "f-scroll-rank__item-wrap" }, Jt = { class: "f-scroll-rank__item-info" }, el = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, tl = { class: "f-scroll-rank__item-name" }, ll = { class: "f-scroll-rank__item-info-right" }, rl = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, nl = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, il = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, al = { class: "f-scroll-rank__item-progress" }, we = /* @__PURE__ */ z({
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
    const t = e, l = O();
    let r = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const u = (h) => {
      let y = q(fe(h)), k = [];
      t.order === "default" ? k = y : k = yt(y, "value", t.order), typeof t.valueFormatter == "function" && (k = k.map((I, g) => {
        var T;
        return I.formattedValue = (T = t.valueFormatter) == null ? void 0 : T.call(null, {
          name: I.name,
          value: I.value,
          maxValue: o.value,
          index: g
        }), I;
      })), r.dataList = k;
    }, c = async (h, y, k) => {
      let I = k;
      y.map((g) => g._index_ = ++I), r.currList.length ? h === t.pageSize ? r.currList = [...y] : (r.currList.push(...y), r.currList.splice(0, h)) : r.currList.push(...y), ke(() => {
        l.value && (l.value.style.maxHeight = `${l.value.getBoundingClientRect().height}px`, l.value.style.height = `${l.value.getBoundingClientRect().height}px`);
      });
    }, n = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let h;
        t.togglePage >= t.pageSize ? h = t.pageSize : h = t.togglePage;
        let y, k;
        r.currPage === 1 ? (y = 0, k = t.pageSize) : (y = h * (r.currPage - 2) + t.pageSize, k = h * (r.currPage - 1) + t.pageSize);
        let I = r.dataList.slice(y, k);
        I.length ? r.currPage === 1 ? await c(t.pageSize, I, y) : await c(h, I, y) : (r.currPage = 1, n()), i();
      } else
        a(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, i = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, n();
      }, t.toggleDur));
    }, a = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, o = P(() => {
      var h, y;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((h = r.currList.at(-1)) == null ? void 0 : h.value) || 0 : ((y = r.currList[0]) == null ? void 0 : y.value) || 0;
    }), s = P(() => function(h) {
      let y, k = o.value;
      y = h / k;
      const I = (g, T) => Math.round(g * Math.pow(10, T)) / Math.pow(10, T);
      return typeof y == "number" ? I(y * 100, 1) : 0;
    }), p = (h) => {
      h.style.opacity = "0", h.style.gridTemplateRows = "0fr";
    }, v = (h, y) => {
      h.offsetWidth, h.style.opacity = "1", h.style.gridTemplateRows = "1fr", y();
    }, f = async (h) => {
      h.style.opacity = "1", h.style.margin = "0";
    }, m = async (h, y) => {
      h.style.opacity = "0", h.style.margin = "0", h.style.gridTemplateRows = "0fr", await new Promise((k) => {
        setTimeout(() => {
          h.remove(), k(!0);
        }, t.toggleDuration);
      }), y();
    };
    return Se(() => {
      a();
    }), j(
      () => t.data,
      (h) => {
        u(h), n();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (h, y) => (_(), $("div", Zt, [
      S(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: l,
          style: H({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          x(He, {
            tag: "div",
            css: !1,
            onBeforeEnter: p,
            onEnter: v,
            onBeforeLeave: f,
            onLeave: m
          }, {
            default: ge(() => [
              (_(!0), $(
                M,
                null,
                V(C(r).currList, (k, I) => (_(), $("div", {
                  class: "f-scroll-rank__item",
                  key: k
                }, [
                  S("div", jt, [
                    S("div", Jt, [
                      t.showRank ? (_(), $(
                        "span",
                        el,
                        W(`NO.${k._index_}`),
                        1
                        /* TEXT */
                      )) : B("v-if", !0),
                      S(
                        "span",
                        tl,
                        W(k.name || ""),
                        1
                        /* TEXT */
                      ),
                      S("div", ll, [
                        t.showPercent ? (_(), $(
                          "span",
                          rl,
                          W(`${C(s)(k.value)}%`),
                          1
                          /* TEXT */
                        )) : B("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (_(), $(
                          "span",
                          nl,
                          W(`${k.value} / ${C(o)}`),
                          1
                          /* TEXT */
                        )) : B("v-if", !0),
                        typeof t.valueFormatter == "function" ? (_(), $(
                          "span",
                          il,
                          W(`${k.formattedValue}`),
                          1
                          /* TEXT */
                        )) : B("v-if", !0)
                      ])
                    ]),
                    S("div", al, [
                      x(C(le), {
                        percent: C(s)(k.value),
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
we.install = function(e) {
  e.component("FScrollRank", we);
};
const ol = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(we);
  }
}, sl = {
  width: "100%",
  height: "100%"
}, cl = /* @__PURE__ */ Je('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), ul = ["id", "cx", "cy"], dl = ["values", "dur"], fl = ["dur"], hl = ["id"], gl = ["xlink:href"], pl = ["xlink:href", "fill", "mask"], vl = ["fill", "x", "y"], yl = ["href", "width", "height", "x", "y"], ml = ["id", "d"], _l = ["id"], $l = ["r"], wl = ["dur", "path"], xl = ["xlink:href", "stroke-width", "stroke"], bl = ["xlink:href", "stroke-width", "stroke", "mask"], kl = ["from", "to", "dur"], Sl = { key: 2 }, xe = /* @__PURE__ */ z({
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
    const t = e, l = O();
    let r;
    J(() => {
      r = We();
    });
    const u = Z({
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
    }), c = Z({
      points: [],
      paths: []
    }), n = (g) => {
      let { offsetX: T, offsetY: d } = g;
      const b = (T / o.value).toFixed(2), w = (d / s.value).toFixed(2);
      r == null || r.emit("chart-click", b, w, g);
    }, i = () => {
      p(), v();
    }, a = () => {
      p(), v();
    }, { width: o, height: s } = ee(l, i, a), p = () => {
      let g = q(fe(t.points));
      c.points = g.map((T, d) => ({
        ...T,
        halo: F({}, u.halo, q(t.halo), T.halo),
        title: F({}, u.title, q(t.title), T.title),
        icon: F({}, u.icon, q(t.icon), T.icon),
        key: `${T.coordinate.toString()}${d}`
      }));
    }, v = () => {
      let g = q(fe(t.paths));
      c.paths = g.map((T, d) => {
        var ne, U;
        let { source: b, route: w, target: L, line: A } = T, D = F({}, u.line, q(t.line), A), N = (ne = c.points.find(({ name: E }) => E === b)) == null ? void 0 : ne.coordinate, R = (U = c.points.find(({ name: E }) => E === L)) == null ? void 0 : U.coordinate, X = w ? [N, ...w, R] : [N, R];
        X = X.filter((E) => E !== void 0);
        let G = [];
        for (let E = 0; E < X.length - 1; E++) {
          let Ve = X[E], te = f(Ve, X[E + 1], D.k, D.curvature), qe = `M${te[0].toString()} Q${te[1].toString()} ${te[2].toString()}`, Qe = `${te.toString()}`;
          G.push({ path: te, d: qe, key: Qe });
        }
        return {
          ...T,
          line: D,
          routeList: G
        };
      });
    }, f = (g, T, d, b) => {
      let [w, L] = g, [A, D] = T;
      const [N, R] = [(w + A) / 2, (L + D) / 2];
      let G = Ee([w, L], [A, D]) / b, ne = G / 2, [U, E] = [N, R];
      do
        U += ne, E = m(d, [N, R], U)[1];
      while (Ee([N, R], [U, E]) < G);
      return [g, [U, E], T];
    };
    function m(g, [T, d], b) {
      const w = d - g * T + g * b;
      return [b, w];
    }
    let h = P(() => function(g) {
      return `M${g[0][0] * o.value},${g[0][1] * s.value} 
    Q${g[1][0] * o.value},${g[1][1] * s.value} 
    ${g[2][0] * o.value},${g[2][1] * s.value}`;
    }), y = P(() => function(g) {
      return `M${g[0][0] * o.value},${g[0][1] * s.value} 
    Q${g[1][0] * o.value},${g[1][1] * s.value} 
    ${g[2][0] * o.value},${g[2][1] * s.value}`;
    }), k = P(() => function(g) {
      return {
        x1: g[0][0] * o.value,
        y1: g[0][1] * s.value,
        x2: g[1][0] * o.value,
        y2: g[1][1] * s.value,
        x3: g[2][0] * o.value,
        y3: g[2][1] * s.value
      };
    });
    P(() => function(g) {
      return `"M${g[0][0] * o.value},${g[0][1] * s.value} Q${g[1][0] * o.value},${g[1][1] * s.value} ${g[2][0] * o.value},${g[2][1] * s.value}"`;
    });
    let I = P(() => function(g) {
      return r ? r.proxy.$refs[g][0].getTotalLength() : 0;
    });
    return j(() => t, (g) => {
      p(), v();
    }, {
      deep: !0,
      immediate: !0
    }), (g, T) => (_(), $(
      "div",
      {
        ref_key: "flightChart",
        ref: l,
        class: "f-flight-chart"
      },
      [
        S(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: H(`background-image: url(${t.bgUrl})`),
            onClick: n
          },
          [
            (_(), $("svg", sl, [
              cl,
              (_(!0), $(
                M,
                null,
                V(c.points, (d, b) => (_(), $("g", {
                  key: d.key
                }, [
                  S("defs", null, [
                    d.halo.show ? (_(), $("circle", {
                      key: 0,
                      id: `halo${d.key}`,
                      cx: d.coordinate[0] * C(o),
                      cy: d.coordinate[1] * C(s)
                    }, [
                      S("animate", {
                        attributeName: "r",
                        values: `1;${d.halo.radius}`,
                        dur: `${d.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, dl),
                      S("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${d.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, fl)
                    ], 8, ul)) : B("v-if", !0),
                    S("mask", {
                      id: `mask${d.key}`
                    }, [
                      S("use", {
                        "xlink:href": `#halo${d.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, gl)
                    ], 8, hl)
                  ]),
                  d.halo.show ? (_(), $("use", {
                    key: 0,
                    "xlink:href": `#halo${d.key}`,
                    fill: d.halo.color,
                    mask: `url(#mask${d.key})`
                  }, null, 8, pl)) : B("v-if", !0),
                  d.title.show ? (_(), $("text", {
                    key: 1,
                    class: "point__title",
                    style: H({ fontSize: `${d.title.fontSize}px` }),
                    fill: d.title.color,
                    x: d.coordinate[0] * C(o) + d.title.offest[0],
                    y: d.coordinate[1] * C(s) + d.title.offest[1]
                  }, W(d.name), 13, vl)) : B("v-if", !0),
                  d.icon.show ? (_(), $("image", {
                    key: 2,
                    class: "point__icon",
                    href: d.icon.url,
                    width: d.icon.width,
                    height: d.icon.height,
                    x: d.coordinate[0] * C(o) - d.icon.width / 2,
                    y: d.coordinate[1] * C(s) - d.icon.height / 2
                  }, null, 8, yl)) : B("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (_(!0), $(
                M,
                null,
                V(c.paths, (d, b) => (_(), $(
                  M,
                  null,
                  [
                    (_(!0), $(
                      M,
                      null,
                      V(d.routeList, (w, L) => (_(), $("g", null, [
                        S("defs", null, [
                          S("path", {
                            id: w.key,
                            ref_for: !0,
                            ref: w.key,
                            d: C(h)(w.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, ml),
                          d.line.show && !d.line.slot ? (_(), $("mask", {
                            key: 0,
                            id: `mask${w.key}`
                          }, [
                            S("circle", {
                              cx: "0",
                              cy: "0",
                              r: d.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              S("animateMotion", {
                                dur: `${d.line.duration}ms`,
                                path: C(h)(w.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, wl)
                            ], 8, $l)
                          ], 8, _l)) : B("v-if", !0)
                        ]),
                        d.line.show ? (_(), $("use", {
                          key: 0,
                          "xlink:href": `#${w.key}`,
                          "stroke-width": d.line.width,
                          stroke: d.line.orbitColor
                        }, null, 8, xl)) : B("v-if", !0),
                        d.line.show && !d.line.slot ? (_(), $("use", {
                          key: 1,
                          "xlink:href": `#${w.key}`,
                          "stroke-width": d.line.width,
                          stroke: d.line.color,
                          mask: `url(#mask${w.key})`
                        }, [
                          S("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${C(I)(w.key)}`,
                            to: `${C(I)(w.key)}, 0`,
                            dur: `${d.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, kl)
                        ], 8, bl)) : B("v-if", !0),
                        d.line.show && d.line.slot ? (_(), $("g", Sl, [
                          Q(g.$slots, d.line.slot, {
                            path: C(y)(w.path),
                            pathArr: C(k)(w.path),
                            totalLength: C(I)(w.key),
                            line: d.line
                          })
                        ])) : B("v-if", !0)
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
xe.install = function(e) {
  e.component("FFlightChart", xe);
};
const Cl = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(xe);
  }
}, Ll = {
  // 列表数据
  data: {
    type: Array,
    default: () => []
  },
  // 每行预估高度
  estimatedItemSize: {
    type: Number,
    required: !0
  },
  // 缓冲区比例
  bufferScale: {
    type: Number,
    default: 1
  },
  // 列表高度
  height: {
    type: String,
    default: "100%"
  },
  // 是否开启滚动事件
  autoScroll: {
    type: Boolean,
    default: !1
  },
  // 每次滚动多少行
  scrollRow: {
    type: Number,
    default: 1
  },
  // 每次滚动的距离
  scrollDistance: {
    type: Number
  },
  // 滚动间隔
  scrollInterval: {
    type: Number,
    default: 100
  },
  // 滚动到底部的停留时间
  stopTime: {
    type: Number,
    default: 10 * 1e3
  }
}, Pl = ["id"], be = /* @__PURE__ */ z({
  __name: "index",
  props: Ll,
  setup(e) {
    const t = e, l = O(null), r = O(null), u = O(null), c = O(null), n = Z({
      positions: [],
      // 每行的位置信息
      screenHeight: 0,
      // 可视区域高度
      start: 0,
      // 起始索引
      end: 0,
      // 结束索引
      isMouseHover: !1,
      // 鼠标是否移入列表
      intervalID: null
    });
    et(() => {
      i();
    }), J(() => {
      n.screenHeight = l.value.clientHeight, n.start = 0, n.end = n.start + p.value, I(), T();
    }), tt(() => {
      ke(() => {
        var b, w;
        if (!c.value || !((b = c.value) != null && b.length))
          return;
        y();
        let d = (w = n.positions.at(-1)) == null ? void 0 : w.bottom;
        r.value.style.height = `${d}px`, h();
      });
    }), Se(() => {
      g();
    }), j(
      () => t.data,
      () => {
        i();
      }
    );
    const i = () => {
      n.positions = t.data.map((d, b) => ({
        index: b,
        height: t.estimatedItemSize,
        top: b * t.estimatedItemSize,
        bottom: (b + 1) * t.estimatedItemSize
      }));
    }, a = (d = 0) => o(n.positions, d), o = (d, b) => {
      let w = 0, L = d.length - 1, A = null;
      for (; w <= L; ) {
        let D = parseInt((w + L) / 2 + ""), N = d[D].bottom;
        if (N === b)
          return D + 1;
        N < b ? w = D + 1 : N > b && ((A === null || A > D) && (A = D), L = L - 1);
      }
      return A;
    }, s = P(() => t.data.map((d, b) => ({
      _index_: b,
      ...d
    }))), p = P(() => Math.ceil(n.screenHeight / t.estimatedItemSize)), v = P(() => Math.min(n.start, t.bufferScale * p.value)), f = P(() => Math.min(
      t.data.length - n.end,
      t.bufferScale * p.value
    )), m = P(() => {
      let d = n.start - v.value, b = n.end + f.value;
      return s.value.slice(d, b);
    }), h = () => {
      let d = 0;
      if (n.start >= 1) {
        let b = n.positions[n.start].top - (n.positions[n.start - v.value] ? n.positions[n.start - v.value].top : 0);
        d = n.positions[n.start - 1].bottom - b;
      } else
        d = 0;
      u.value.style.transform = `translate3d(0,${d}px,0)`;
    }, y = () => {
      if (c.value)
        for (let d = 0; d < c.value.length; d++) {
          let b = c.value[d], L = b.getBoundingClientRect().height, A = +b.id, N = n.positions[A].height - L;
          if (N) {
            n.positions[A].bottom = n.positions[A].bottom - N, n.positions[A].height = L;
            for (let R = A + 1; R < n.positions.length; R++)
              n.positions[R].top = n.positions[R - 1].bottom, n.positions[R].bottom = n.positions[R].bottom - N;
          }
        }
    }, k = () => {
      let d = l.value.scrollTop;
      n.start = a(d), n.end = n.start + p.value, h();
    }, I = () => {
      n.intervalID === null && t.autoScroll && !n.isMouseHover && (n.intervalID = setInterval(() => {
        if (l.value) {
          let d = 0;
          if (t.scrollDistance && (d = t.scrollDistance), t.scrollRow && d === 0) {
            let b = 0;
            for (let w = 0; w < t.scrollRow; w++)
              b += n.positions[n.start + w].height;
            d = b;
          }
          if (Math.abs(l.value.scrollHeight - l.value.clientHeight - l.value.scrollTop) >= 1) {
            let b = l.value.scrollTop + d;
            l.value.scrollTo({ top: b, behavior: "smooth" });
          } else
            g(), setTimeout(() => {
              l.value.scrollTo({ top: 0, behavior: "instant" }), setTimeout(() => {
                I();
              }, 500);
            }, t.stopTime);
        }
      }, t.scrollInterval));
    }, g = () => {
      n.intervalID && (clearInterval(n.intervalID), n.intervalID = null);
    }, T = () => {
      l.value && (l.value.addEventListener("mouseenter", () => {
        g(), n.isMouseHover = !0;
      }), l.value.addEventListener("mouseleave", () => {
        n.isMouseHover = !1, I();
      }));
    };
    return (d, b) => (_(), $(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: l,
        style: H({ height: d.height }),
        onScroll: b[0] || (b[0] = (w) => k())
      },
      [
        S(
          "div",
          {
            class: "f-virtual-list__space",
            ref_key: "virtualList__space",
            ref: r
          },
          null,
          512
          /* NEED_PATCH */
        ),
        S(
          "div",
          {
            class: "f-virtual-list__content",
            ref_key: "virtualList__content",
            ref: u
          },
          [
            (_(!0), $(
              M,
              null,
              V(C(m), (w) => (_(), $("div", {
                class: "f-virtual-list__item",
                ref_for: !0,
                ref_key: "virtualList__item",
                ref: c,
                id: `${w._index_}`
              }, [
                Q(d.$slots, "default", {
                  ref_for: !0,
                  ref: "slot",
                  params: { row: w, $index: w._index_ }
                })
              ], 8, Pl))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    ));
  }
});
be.install = function(e) {
  e.component("FVirtualList", be);
};
const Il = {
  title: "virtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(be);
  }
}, Dl = {
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
}, Tl = (e, t, l, r, u) => {
  let n = F({}, {
    offestTop: 0,
    waveScale: 15,
    waveDirection: "right",
    waveDuration: 1e4,
    begin: 0,
    waveColor: "#4579e2"
  }, t), i = n.waveScale, a = 4 * i, o = 10 * i, s = Math.ceil(l / o || 0);
  if (!s || !u)
    return;
  let p = r - a, v = p * (1 - u), f = 3 * i, m = 1 * i, h = 8 * i, y = 4 * i, k = `m 0 ${v + n.offestTop} c ${f} ${-m}, ${h} ${-y}, ${o} 0`, I = `s${h} ${-y}, ${o} 0`, g = `s ${o - f} ${m}, ${o} 0`, T = `v ${p * u + a} H 0`, d = "";
  for (let A = 0; A < s - 1; A++)
    d = `${d}${I}${g}`;
  let b = `${k}${g}${d}${T}`, w = n.waveDirection === "left" ? "0 0" : `${-(2 * o)} 0`, L = n.waveDirection === "left" ? `${-(2 * o)} 0` : "0 0";
  return x("path", {
    class: e.e("wave"),
    d: b,
    fill: n.waveColor
  }, [x("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "translate",
    begin: n.begin ? `${n.begin}ms` : 0,
    from: w,
    to: L,
    dur: `${n.waveDuration}ms`,
    repeatCount: "indefinite"
  }, null)]);
};
function ie(e, t, l) {
  let r = e;
  return t && (r += `__${t}`), l && (r += `--${l}`), r;
}
function Rl(e, t = !1) {
  const l = t ? `.f-${e}` : `f-${e}`;
  return {
    b: () => ie(l),
    e: (i) => i ? ie(l, i) : "",
    m: (i) => i ? ie(l, "", i) : "",
    em: (i, a) => i && a ? ie(l, i, a) : ""
  };
}
const ue = /* @__PURE__ */ z({
  name: "FLiquidChart",
  props: Dl,
  setup(e, t) {
    const l = O(), r = Rl("liquid-chart"), {
      width: u,
      height: c,
      initWH: n
    } = ee(l), i = () => {
      let f = e.borderWidth / 2, m = `${f},0`, h = `${f},${c.value - f}`, y = `${u.value - f},${c.value - f}`, k = `${u.value - f},0`;
      return x("svg", {
        class: r.e("rect-wrap"),
        style: {
          background: e.background
        }
      }, [Array.from({
        length: 4
      }).map((I, g) => x("path", {
        class: r.e("top-border"),
        d: `M ${f},${0 + g * 4} ${u.value - f},${0 + g * 4}`,
        fill: "none",
        "stroke-dasharray": "20 10",
        stroke: e.borderColors[1],
        "stroke-width": 1
      }, null)), x("path", {
        d: `M ${m} ${h} ${y} ${k}`,
        fill: "none",
        stroke: e.borderColors[0],
        "stroke-width": e.borderWidth
      }, null)]);
    };
    let a = P(() => {
      let f = 0.5;
      return e.currLevel || (f = 0), e.maxLevel ? (f = e.currLevel / e.maxLevel, f > 1 ? 1 : f) : f;
    });
    const o = P(() => ({
      left: `${e.borderWidth}px`,
      width: `calc(100% - ${e.borderWidth * 2}px)`,
      height: `calc(100% - ${e.borderWidth}px)`
    })), s = () => x("svg", {
      class: r.e("wave-wrap"),
      style: {
        ...o.value
      }
    }, [e.waveOption.map((f) => Tl(r, f, u.value, c.value, a.value)), v()]), p = () => {
      let m = F({}, {
        show: !0,
        offest: [0, 0],
        fontSize: 18,
        color: "white"
      }, e.textOption);
      if (!m.show)
        return;
      let h = m.text, y = h ? h.replace("{level}", String(e.currLevel)).replace("{percent}", String((a.value * 100).toFixed(2))) : e.currLevel, k = P(() => ({
        color: m.color,
        fontSize: `${m.fontSize}px`,
        transform: `translate(calc(-50% + ${m.offest[0]}px), calc(-50% + ${m.offest[1]}px))`
      }));
      return x("text", {
        class: r.e("center-text"),
        style: {
          ...k.value
        }
      }, [y]);
    }, v = () => {
      if (e.maxLevel)
        return e.lineOption.map((f) => {
          let m = (1 - f.level / e.maxLevel) * c.value, h = f.text ? f.text.replace("{level}", String(f.level)) : f.level;
          return x(M, null, [x("path", {
            class: r.e("line"),
            d: `M 0 ${m},H ${u.value}`,
            fill: "none",
            "stroke-dasharray": "20 10",
            stroke: f.color,
            "stroke-width": 1
          }, null), x("text", {
            class: r.e("line-text"),
            x: u.value / 2,
            y: m,
            fill: f.color
          }, [h])]);
        });
    };
    return t.expose({
      resize: n
    }), () => x("div", {
      ref: l,
      class: r.b()
    }, [e.shape === "rect" ? i() : x("div", null, null), e.waterShape === "wave" ? s() : x("div", null, null), p()]);
  }
});
ue.install = function(e) {
  e.component(ue.name, ue);
};
const Ol = {
  title: "liquidChart 水位图",
  name: "liquidChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(ue);
  }
}, Al = [
  _t,
  $t,
  wt,
  Ct,
  It,
  Et,
  Xt,
  Wt,
  qt,
  Kt,
  ol,
  Cl,
  Il,
  Ol
], El = {
  version: "1.0.12",
  install(e) {
    Al.forEach((t) => e.use(t));
  }
};
export {
  ae as BorderBox1,
  oe as BorderBox2,
  $e as DigitalScroll,
  me as DynamicParticle,
  xe as FlightChart,
  ue as LiquidChart,
  se as Loading1,
  ce as Loading2,
  le as Progress,
  ve as ScreenContainer,
  we as ScrollRank,
  _e as ScrollTable,
  he as ScrollText,
  be as VirtualList,
  El as default,
  Al as installs
};
