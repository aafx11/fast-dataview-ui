import './style.css';
import { unref as w, getCurrentScope as Qe, onScopeDispose as Ge, watch as ee, ref as T, onMounted as te, onUnmounted as Ue, nextTick as Oe, defineComponent as z, computed as P, createVNode as x, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as N, createElementVNode as $, toDisplayString as B, reactive as Z, provide as xe, createCommentVNode as E, inject as be, normalizeClass as K, getCurrentInstance as Be, onBeforeUnmount as Ne, Fragment as M, renderList as Q, TransitionGroup as ze, withCtx as fe, normalizeProps as qe, guardReactiveProps as Ke, withDirectives as ke, vShow as Se, createStaticVNode as Ze, onBeforeMount as Je } from "vue";
function je(e, t) {
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
var Ce;
const Fe = typeof window < "u", et = (e) => typeof e == "string", he = () => {
};
Fe && ((Ce = window == null ? void 0 : window.navigator) != null && Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return typeof e == "function" ? e() : w(e);
}
function tt(e, t) {
  function r(...l) {
    return new Promise((c, a) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(c).catch(a);
    });
  }
  return r;
}
function lt(e, t = {}) {
  let r, l, c = he;
  const a = (n) => {
    clearTimeout(n), c(), c = he;
  };
  return (n) => {
    const i = ce(e), s = ce(t.maxWait);
    return r && a(r), i <= 0 || s !== void 0 && s <= 0 ? (l && (a(l), l = null), Promise.resolve(n())) : new Promise((o, y) => {
      c = t.rejectOnCancel ? y : o, s && !l && (l = setTimeout(() => {
        r && a(r), l = null, o(n());
      }, s)), r = setTimeout(() => {
        l && a(l), l = null, o(n());
      }, i);
    });
  };
}
function rt(e) {
  return e;
}
function nt(e) {
  return Qe() ? (Ge(e), !0) : !1;
}
function it(e, t = 200, r = {}) {
  return tt(lt(t, r), e);
}
function st(e) {
  var t;
  const r = ce(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const ot = Fe ? window : void 0;
function at(...e) {
  let t, r, l, c;
  if (et(e[0]) || Array.isArray(e[0]) ? ([r, l, c] = e, t = ot) : [t, r, l, c] = e, !t)
    return he;
  Array.isArray(r) || (r = [r]), Array.isArray(l) || (l = [l]);
  const a = [], u = () => {
    a.forEach((o) => o()), a.length = 0;
  }, n = (o, y, h, p) => (o.addEventListener(y, h, p), () => o.removeEventListener(y, h, p)), i = ee(() => [st(t), ce(c)], ([o, y]) => {
    u(), o && a.push(...r.flatMap((h) => l.map((p) => n(o, h, p, y))));
  }, { immediate: !0, flush: "post" }), s = () => {
    i(), u();
  };
  return nt(s), s;
}
const Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ie = "__vueuse_ssr_handlers__";
Pe[Ie] = Pe[Ie] || {};
var Le;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Le || (Le = {}));
var ct = Object.defineProperty, De = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable, Te = (e, t, r) => t in e ? ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ft = (e, t) => {
  for (var r in t || (t = {}))
    ut.call(t, r) && Te(e, r, t[r]);
  if (De)
    for (var r of De(t))
      dt.call(t, r) && Te(e, r, t[r]);
  return e;
};
const ht = {
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
ft({
  linear: rt
}, ht);
const le = (e, t, r, l) => {
  const c = T(0), a = T(0), u = T(0), n = T(0);
  let i, s = null, o = null;
  const y = (d = !0) => new Promise((m) => {
    Oe(() => {
      o = e.value, c.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = o ? o.getBoundingClientRect().width : 0, n.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!c.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && d && t(), m(!0);
    });
  }), h = () => {
    s = je(o, i), at(window, "resize", i);
  }, p = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, b = async () => {
    await y(!1), i = it(y, 200), h(), typeof r == "function" && r();
  };
  return te(() => {
    b();
  }), Ue(() => {
    p();
  }), {
    width: c,
    height: a,
    afterWidth: u,
    afterHeight: n,
    initWH: y
  };
}, We = {
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
}, V = Object.assign, re = (e) => Array.isArray(e) && e.length, ue = (e) => Array.isArray(e) && e || [], H = (e) => e >= 0 ? e : 0, gt = (e, t, r = "reverse") => e.sort(yt(t, r)), yt = (e, t = "reverse") => function(r, l) {
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
}, Re = (e, t) => {
  const r = Math.abs(e[0] - t[0]), l = Math.abs(e[1] - t[1]);
  return Math.sqrt(r * r + l * l);
}, ie = /* @__PURE__ */ z({
  name: "FBorderBox1",
  props: We,
  setup(e, {
    slots: t
  }) {
    const r = T(null), l = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = P(() => re(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: n
    } = le(r);
    return {
      width: a,
      height: u,
      initWH: n,
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
    } = this, n = 20;
    let i = c || 2, s = H(t - i - 2), o = H(r - i - 2);
    return x("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [x("svg", {
      class: "f-svg-container",
      width: s,
      height: o
    }, [x("polygon", {
      fill: l,
      stroke: a[0],
      "stroke-width": i,
      points: `
            ${n} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${o - n}, ${s - n} ${o},
            ${n} ${o}, ${i} ${o - n}, ${i} ${n}
          `
    }, null), x("polyline", {
      stroke: a[1],
      "stroke-width": i + 1,
      points: `
            ${n - 8} 0,0 ${n - 8}
          `
    }, null), x("polyline", {
      stroke: a[1],
      "stroke-width": i + 1,
      points: `
            ${s} ${o - n + 8}, ${s - n + 8 + i} ${o}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${n + 15}, ${i} ${n}, ${n} ${i} , ${n + 15} ${i}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
           ${n + 15} ${o}, ${n}  ${o}, ${i} ${o - n}, ${i} ${o - n - 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
           ${s - n - 15} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${n + 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
          ${s - n - 15} ${o}, ${s - n} ${o}, ${s - i} ${o - n}, ${s - i} ${o - n - 15}
          `
    }, null), u ? x("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${n} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${n + 15}, ${i} ${n + 15},
            ${i} ${n}
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
const pt = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ie);
  }
}, se = /* @__PURE__ */ z({
  name: "FBorderBox2",
  props: We,
  setup(e, {
    slots: t
  }) {
    const r = T(null), l = ["white"];
    let c = P(() => re(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: n
    } = le(r);
    return {
      width: a,
      height: u,
      initWH: n,
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
      strokeDasharray: n
    } = this;
    let i = c || 3, s = H(i), o = H(i), y = H(t - i), h = H(i), p = H(t - i), b = H(r - i), d = H(i), m = H(r - i);
    return x("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [x("svg", {
      class: "f-svg-container",
      width: t,
      height: r
    }, [x("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`,
        "--border-stroke-dasharray": n
      },
      stroke: a[0],
      "stroke-width": i,
      fill: l,
      d: `M ${s} ${o}, L ${y} ${h}, L ${p} ${b}, L ${d} ${m}, Z`
    }, null)]), x("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
se.install = function(e) {
  e.component(se.name, se);
};
const mt = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(se);
  }
}, oe = /* @__PURE__ */ z({
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
    const r = T(null), l = ["#4f29f0", "#c3c8de", "#414856"];
    let c = P(() => re(e.color) ? V(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: n
    } = le(r);
    return {
      width: a,
      height: u,
      initWH: n,
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
    return x("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${l}s`
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
    }, null)]), r ? x("div", {
      class: "f-loading-text",
      "data-text": r
    }, null) : null]);
  }
});
oe.install = function(e) {
  e.component(oe.name, oe);
};
const vt = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(oe);
  }
}, _t = z({
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
    let l = P(() => re(e.color) ? V(r, e.color) : r);
    return {
      getLoadingStyle: P(() => ({
        width: e.width,
        height: e.height,
        color: l.value[2],
        "--border-color": l.value[0],
        "--border-top-color": l.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), He = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [l, c] of t)
    r[l] = c;
  return r;
}, $t = /* @__PURE__ */ $(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), wt = { class: "loading-text" };
function xt(e, t, r, l, c, a) {
  return v(), _(
    "div",
    {
      class: "f-loading-2",
      style: N(e.getLoadingStyle)
    },
    [
      $t,
      $("div", wt, [
        G(e.$slots, "default", {}, () => [
          $(
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
const ae = /* @__PURE__ */ He(_t, [["render", xt]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const bt = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(ae);
  }
}, kt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, St = { class: "f-screen-container" }, ge = /* @__PURE__ */ z({
  __name: "index",
  props: kt,
  setup(e) {
    const t = e, r = T(null), l = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let c = T(1), a = T(1);
    xe("scaleX", c), xe("scaleY", a);
    const u = () => {
      t.width && t.height ? (l.width = t.width, l.height = t.height) : (l.width = r.value.clientWidth, l.height = r.value.clientHeight);
      const { width: y, height: h } = window.screen;
      l.screenWidth = y, l.screenHeight = h;
    }, n = () => {
      l.width && l.height ? (r.value.style.width = `${l.width}px`, r.value.style.height = `${l.height}px`) : (r.value.style.width = `${l.screenWidth}px`, r.value.style.height = `${l.screenHeight}px`);
    }, i = () => {
      const y = document.body.clientWidth, h = document.body.clientHeight, p = l.width || l.screenWidth, b = l.height || l.screenHeight, d = y / +p, m = h / +b;
      c.value = d, a.value = m, r.value.style.transform = `scale(${d}, ${m})`;
    };
    return le(r, () => {
      i();
    }, () => {
      u(), n(), i(), t.onAfterResize(), l.isReady = !0;
    }), (y, h) => (v(), _("div", St, [
      $(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: r
        },
        [
          l.isReady ? G(y.$slots, "default", { key: 0 }) : E("v-if", !0),
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
const Ct = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(ge);
  }
}, Pt = {
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
}, It = 30, Lt = 1 / It;
class ye {
  // 粒子的透明度
  constructor(t, r, l, c, a, u, n) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * r >> 0, this.targetX = l, this.targetY = c, this.time = a, this.radius = u, this.colors = n, this.opacity = 0;
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
      let a = l - this.x, u = c - this.y, n = Math.sqrt(a ** 2 + u ** 2), i = t / n;
      i = i > 7 ? 7 : i;
      let s = Math.atan2(u, a), o = Math.cos(s), y = Math.sin(s), h = o * i * -r, p = y * i * -r;
      this.velocityX += h, this.velocityY += p;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Lt);
  }
  // 切换粒子
  change(t, r, l) {
    this.targetX = t, this.targetY = r, this.colors = l;
  }
}
const Ae = 30;
class Dt {
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
      for (let n = 0; n < l; n++) {
        const { targetX: i, targetY: s, colors: o } = r[n];
        c[n] ? c[n].change(i, s, o) : c[n] = new ye(this.width, this.height, i, s, Ae, this.radius, o);
      }
      l < a && (this.particleArr = c.splice(0, l)), c = this.particleArr;
      let u = c.length;
      for (; u; ) {
        let n = ~~(Math.random() * u--), i = c[n], { targetX: s, targetY: o, colors: y } = i;
        i.targetX = c[u].targetX, i.targetY = c[u].targetY, i.colors = c[u].colors, c[u].targetX = s, c[u].targetY = o, c[u].colors = y;
      }
    } else
      this.particleArr = t.particleData.map((r) => new ye(this.width, this.height, r.targetX, r.targetY, Ae, this.radius, r.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const Tt = 30;
class Ee {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, r, l, c) {
    this.src = t, this.width = r, this.height = l, this.particleData = [], this.radius = c;
  }
  createParticleData(t = this.src) {
    return new Promise((r, l) => {
      let c = new Image();
      c.crossOrigin = "", c.src = decodeURI(new URL(t, import.meta.url).href), c.onload = () => {
        const a = document.createElement("canvas"), u = a.getContext("2d"), n = this.width, i = this.height;
        a.width = n, a.height = i, u == null || u.drawImage(c, 0, 0, n, i);
        const s = u == null ? void 0 : u.getImageData(0, 0, n, i).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let o = 0; o < i; o += 5)
          for (let y = 0; y < n; y += 5) {
            const h = (y + o * n) * 4, p = s[h + 3];
            if (p == 0)
              continue;
            const b = s[h], d = s[h + 1], m = s[h + 2];
            if (b + d + m + p) {
              const I = new ye(this.width, this.height, y, o, Tt, this.radius, `rgba(${b},${d},${m},${p})`);
              this.particleData.push(I);
            }
          }
        r(this.particleData);
      }, c.onerror = () => {
        l("图片转化成粒子失败");
      };
    });
  }
}
const Rt = ["width", "height"], pe = /* @__PURE__ */ z({
  __name: "index",
  props: Pt,
  setup(e, { expose: t }) {
    const r = e;
    let l = be("scaleX", T(1)), c = be("scaleY", T(1));
    const a = T(null), u = T(null);
    let n = T(), i = T();
    const s = async (y) => {
      i.value = new Ee(y, r.width, r.height, r.radius), await i.value.createParticleData(), n.value.changeImg(i.value);
    }, o = async () => {
      i.value = new Ee(r.src, r.width, r.height, r.radius), await i.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), n.value = new Dt(a.value, r.radius, r.strength), a.value.addEventListener("mousemove", (y) => {
        const { left: h, top: p } = a.value.getBoundingClientRect(), { clientX: b, clientY: d } = y;
        n.value.mouseX = (b - h) * (1 / l.value), n.value.mouseY = (d - p) * (1 / c.value);
      }), n.value.drawCanvas(), n.value.changeImg(i.value));
    };
    return te(() => {
      o();
    }), t({
      toggleImg: s
    }), (y, h) => (v(), _("div", null, [
      $("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: r.width,
        height: r.height
      }, null, 8, Rt)
    ]));
  }
});
pe.install = function(e) {
  e.component("FDynamicParticle", pe);
};
const At = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "100%",
  install(e) {
    e.use(pe);
  }
};
function Me(e) {
  return {
    handleToggle: (l) => {
      e.emit("handle-toggle", l);
    },
    handleCellClick: (l, c, a, u, n) => {
      e.emit("cell-click", c, a, u, n, l);
    }
  };
}
function Et(e, t, r) {
  const { handleToggle: l } = Me(r), c = (h) => {
    let p = ue(h);
    return Y(p);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && l(t.name);
  }, u = async (h, p, b) => {
    let d = b;
    p.map((m) => m._index_ = ++d), e.currData.length ? h === t.pageSize ? e.currData = [...p] : (e.currData.push(...p), e.currData.splice(0, h)) : e.currData.push(...p);
  }, n = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let h;
      t.mode === "single" ? h = t.togglePage : h = t.pageSize;
      let p, b;
      e.currPage === 1 ? (p = 0, b = t.pageSize) : (p = h * (e.currPage - 2) + t.pageSize, b = h * (e.currPage - 1) + t.pageSize);
      let d = e.tableData.slice(p, b);
      d.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, d, p) : e.currPage === 1 ? await u(t.pageSize, d, p) : await u(h, d, p) : (e.currPage = 1, a(), n()), i();
    } else
      o(), e.currPage = 1, e.currData = [], e.isEmpty = !0, s();
  }, i = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, n();
    }, t.toggleDur));
  }, s = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      l(t.name);
    }, t.emptyEmitDur));
  }, o = (h = !0, p = !0) => {
    e.intervalId && h && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && p && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: c,
    setCurrData: n,
    setPageInterval: i,
    setEmptyTimeout: s,
    clearTimer: o,
    setPage: (h = 1) => {
      o(), e.currPage = h;
      let p;
      t.mode === "single" ? p = t.togglePage : p = t.pageSize;
      let b = p * (e.currPage - 1), d = p * (e.currPage - 1) + t.pageSize, m = e.tableData.slice(b, d);
      m.length ? (u(t.pageSize, m, b), i()) : n(), e.tableData.length || s();
    }
  };
}
function Ot(e, t) {
  const r = P(() => function(s, o) {
    const y = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && y.push("f-scroll-table_row--striped"), y;
  }), l = P(() => {
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
  }), n = P(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), i = P(() => function(s, o, y, h) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: y,
      columnIndex: h,
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
    getExtraCellStyle: n,
    getCellStyle: i
  };
}
const de = /* @__PURE__ */ z({
  __name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "left" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, r = T(), l = T(), c = P(() => {
      var h, p, b, d;
      let a = ((h = r.value) == null ? void 0 : h.offsetWidth) || 0, u = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0, n = ((b = l.value) == null ? void 0 : b.offsetWidth) || 0, i = ((d = l.value) == null ? void 0 : d.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && i < u || ["left", "right"].includes(t.direction) && n < a))
        return {
          "--text-scroll-width": `${a}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let s, o, y;
      return ["up", "down"].includes(t.direction) && (s = u + i, o = s / t.speed || 0, y = `up-scroll linear ${o}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = a + n, o = s / t.speed || 0, y = `left-scroll linear ${o}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${a}px`,
        "--text-scroll-height": `${u}px`,
        animation: y
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
        $(
          "div",
          {
            ref_key: "textContent",
            ref: l,
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
const Bt = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(de);
  }
}, Nt = {
  class: "f-scroll-table__head"
}, zt = ["onClick"], Ft = {
  key: 1
}, me = /* @__PURE__ */ z({
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
    }), c = Be(), a = T(), {
      deepCloneArr: u,
      setCurrData: n,
      setPageInterval: i,
      setEmptyTimeout: s,
      clearTimer: o,
      setPage: y
    } = Et(l, r, c), {
      handleCellClick: h
    } = Me(c), {
      getRowClass: p,
      getCellClass: b,
      getTableStyle: d,
      getBodyStyle: m,
      getRowStyle: k,
      getExtraCellStyle: I,
      getCellStyle: g
    } = Ot(l, r), C = (L) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr";
    }, f = (L, X) => {
      L.offsetWidth, L.style.opacity = "1", L.style.gridTemplateRows = "1fr", X();
    }, F = async (L) => {
      L.style.opacity = "1";
    }, S = async (L, X) => {
      L.style.opacity = "0", L.style.gridTemplateRows = "0fr", await new Promise((D) => {
        setTimeout(() => {
          L.remove(), D(!0);
        }, r.pageAnimateDur);
      }), X();
    };
    return ee(() => r.data, (L) => {
      l.tableData = u(L), n();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      r.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        o(!0, !0), l.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        l.isStopToggle = !1, l.tableData.length ? i() : s();
      }));
    }), Ne(() => {
      o();
    }), t({
      setPage: y
    }), (L, X) => (v(), _(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": r.border
        }]),
        style: N(w(d)(r.columns))
      },
      [$("div", Nt, [(v(!0), _(
        M,
        null,
        Q(r.columns, (D, O) => (v(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: N(w(I)(D)),
            key: O
          },
          B(D.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), $(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: a,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: N(w(m))
        },
        [x(ze, {
          tag: "div",
          css: !1,
          onBeforeEnter: C,
          onEnter: f,
          onBeforeLeave: F,
          onLeave: S
        }, {
          default: fe(() => [(v(!0), _(
            M,
            null,
            Q(l.currData, (D, O) => (v(), _("div", {
              class: "f-scroll-table__row-wrap",
              key: D
            }, [$(
              "div",
              {
                class: K(w(p)(D, O))
              },
              [(v(!0), _(
                M,
                null,
                Q(r.columns, (R, W) => (v(), _("div", {
                  class: "f-scroll-table__cell",
                  style: N([w(I)(R), w(g)(D, R.type === "index" ? "_index_" : R.prop, O, W)]),
                  key: `${D[R.prop]}${W}`,
                  onClick: (U) => w(h)(U, D, D[R.prop], O, W)
                }, [R.type === "index" ? (v(), _(
                  "div",
                  {
                    key: 0,
                    class: K(w(b))
                  },
                  B(D._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : R.type === "scroll" ? (v(), _("div", Ft, [x(
                  w(de),
                  qe(Ke(R.scrollOption)),
                  {
                    default: fe(() => [$(
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
                    class: K(w(b))
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
                    class: K(w(b))
                  },
                  B(D[R.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, zt))),
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
const Wt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(me);
  }
}, Ht = z({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const r = ["#d1d5db", "#3b82f6", "white"];
    let l = P(() => re(e.color) ? V(r, e.color) : r);
    return {
      getProgressStyle: P(() => ({
        "--bgc": l.value[0],
        "--progress-color": l.value[1],
        "--progress-text-color": l.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Mt(e, t, r, l, c, a) {
  return v(), _(
    "div",
    {
      class: "f-progress",
      style: N(e.getProgressStyle)
    },
    [
      $(
        "div",
        {
          class: "progress-inner",
          style: N({ width: `${e.percent}%` })
        },
        [
          G(e.$slots, "default", { percent: e.percent }, () => [
            $(
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
const j = /* @__PURE__ */ He(Ht, [["render", Mt]]);
j.install = function(e) {
  e.component(j.name, j);
};
const Xt = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(j);
  }
}, Yt = { class: "f-digital-scroll" }, Vt = { class: "f-digital-scroll__list" }, Qt = { class: "f-digital-scroll__point" }, ve = /* @__PURE__ */ z({
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
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), i = Number(a.toString().match(u)).toString(), s = i.indexOf(".");
      for (s < 0 && (s = i.length, i += "."); i.length <= s + t.digit; )
        i += "0";
      return i.split("");
    }, c = P(() => function(a) {
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
    ), (a, u) => (v(), _("div", Yt, [
      $("div", Vt, [
        (v(!0), _(
          M,
          null,
          Q(w(r).stringList, (n, i) => (v(), _(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": n === "." }]),
              key: i
            },
            [
              ke($(
                "div",
                Qt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [Se, n === "."]
              ]),
              ke($(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: N(w(c)(n))
                },
                [
                  (v(), _(
                    M,
                    null,
                    Q(10, (s, o) => $(
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
                [Se, n !== "."]
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
const Gt = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ve);
  }
}, Ut = { class: "f-scroll-rank" }, qt = { class: "f-scroll-rank__item-wrap" }, Kt = { class: "f-scroll-rank__item-info" }, Zt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Jt = { class: "f-scroll-rank__item-name" }, jt = { class: "f-scroll-rank__item-info-right" }, el = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, tl = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, ll = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, rl = { class: "f-scroll-rank__item-progress" }, _e = /* @__PURE__ */ z({
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
    const t = e, r = T();
    let l = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const c = (d) => {
      let m = Y(ue(d)), k = [];
      t.order === "default" ? k = m : k = gt(m, "value", t.order), typeof t.valueFormatter == "function" && (k = k.map((I, g) => {
        var C;
        return I.formattedValue = (C = t.valueFormatter) == null ? void 0 : C.call(null, {
          name: I.name,
          value: I.value,
          maxValue: s.value,
          index: g
        }), I;
      })), l.dataList = k;
    }, a = async (d, m, k) => {
      let I = k;
      m.map((g) => g._index_ = ++I), l.currList.length ? d === t.pageSize ? l.currList = [...m] : (l.currList.push(...m), l.currList.splice(0, d)) : l.currList.push(...m), Oe(() => {
        r.value && (r.value.style.maxHeight = `${r.value.getBoundingClientRect().height}px`, r.value.style.height = `${r.value.getBoundingClientRect().height}px`);
      });
    }, u = async () => {
      if (l.dataList.length) {
        l.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let m, k;
        l.currPage === 1 ? (m = 0, k = t.pageSize) : (m = d * (l.currPage - 2) + t.pageSize, k = d * (l.currPage - 1) + t.pageSize);
        let I = l.dataList.slice(m, k);
        I.length ? l.currPage === 1 ? await a(t.pageSize, I, m) : await a(d, I, m) : (l.currPage = 1, u()), n();
      } else
        i(), l.isEmpty = !0, l.currPage = 1, l.currList = [];
    }, n = () => {
      l.intervalId === null && (l.intervalId = setInterval(() => {
        l.currPage += 1, u();
      }, t.toggleDur));
    }, i = () => {
      l.intervalId && (clearInterval(l.intervalId), l.intervalId = null);
    }, s = P(() => {
      var d, m;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = l.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((m = l.currList[0]) == null ? void 0 : m.value) || 0;
    }), o = P(() => function(d) {
      let m, k = s.value;
      m = d / k;
      const I = (g, C) => Math.round(g * Math.pow(10, C)) / Math.pow(10, C);
      return typeof m == "number" ? I(m * 100, 1) : 0;
    }), y = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, h = (d, m) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", m();
    }, p = async (d) => {
      d.style.opacity = "1", d.style.margin = "0";
    }, b = async (d, m) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise((k) => {
        setTimeout(() => {
          d.remove(), k(!0);
        }, t.toggleDuration);
      }), m();
    };
    return Ne(() => {
      i();
    }), ee(
      () => t.data,
      (d) => {
        c(d), u();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, m) => (v(), _("div", Ut, [
      $(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: r,
          style: N({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          x(ze, {
            tag: "div",
            css: !1,
            onBeforeEnter: y,
            onEnter: h,
            onBeforeLeave: p,
            onLeave: b
          }, {
            default: fe(() => [
              (v(!0), _(
                M,
                null,
                Q(w(l).currList, (k, I) => (v(), _("div", {
                  class: "f-scroll-rank__item",
                  key: k
                }, [
                  $("div", qt, [
                    $("div", Kt, [
                      t.showRank ? (v(), _(
                        "span",
                        Zt,
                        B(`NO.${k._index_}`),
                        1
                        /* TEXT */
                      )) : E("v-if", !0),
                      $(
                        "span",
                        Jt,
                        B(k.name || ""),
                        1
                        /* TEXT */
                      ),
                      $("div", jt, [
                        t.showPercent ? (v(), _(
                          "span",
                          el,
                          B(`${w(o)(k.value)}%`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (v(), _(
                          "span",
                          tl,
                          B(`${k.value} / ${w(s)}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        typeof t.valueFormatter == "function" ? (v(), _(
                          "span",
                          ll,
                          B(`${k.formattedValue}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0)
                      ])
                    ]),
                    $("div", rl, [
                      x(w(j), {
                        percent: w(o)(k.value),
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
const nl = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, il = {
  width: "100%",
  height: "100%"
}, sl = /* @__PURE__ */ Ze('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), ol = ["id", "cx", "cy"], al = ["values", "dur"], cl = ["dur"], ul = ["id"], dl = ["xlink:href"], fl = ["xlink:href", "fill", "mask"], hl = ["fill", "x", "y"], gl = ["href", "width", "height", "x", "y"], yl = ["id", "d"], pl = ["id"], ml = ["r"], vl = ["dur", "path"], _l = ["xlink:href", "stroke-width", "stroke"], $l = ["xlink:href", "stroke-width", "stroke", "mask"], wl = ["from", "to", "dur"], xl = { key: 2 }, $e = /* @__PURE__ */ z({
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
    const t = e, r = T();
    let l;
    te(() => {
      l = Be();
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
      const F = (C / s.value).toFixed(2), S = (f / o.value).toFixed(2);
      l == null || l.emit("chart-click", F, S, g);
    }, n = () => {
      y(), h();
    }, i = () => {
      y(), h();
    }, { width: s, height: o } = le(r, n, i), y = () => {
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
        let { source: F, route: S, target: L, line: X } = C, D = V({}, c.line, Y(t.line), X), O = (ne = a.points.find(({ name: A }) => A === F)) == null ? void 0 : ne.coordinate, R = (q = a.points.find(({ name: A }) => A === L)) == null ? void 0 : q.coordinate, W = S ? [O, ...S, R] : [O, R];
        W = W.filter((A) => A !== void 0);
        let U = [];
        for (let A = 0; A < W.length - 1; A++) {
          let Xe = W[A], J = p(Xe, W[A + 1], D.k, D.curvature), Ye = `M${J[0].toString()} Q${J[1].toString()} ${J[2].toString()}`, Ve = `${J.toString()}`;
          U.push({ path: J, d: Ye, key: Ve });
        }
        return {
          ...C,
          line: D,
          routeList: U
        };
      });
    }, p = (g, C, f, F) => {
      let [S, L] = g, [X, D] = C;
      const [O, R] = [(S + X) / 2, (L + D) / 2];
      let U = Re([S, L], [X, D]) / F, ne = U / 2, [q, A] = [O, R];
      do
        q += ne, A = b(f, [O, R], q)[1];
      while (Re([O, R], [q, A]) < U);
      return [g, [q, A], C];
    };
    function b(g, [C, f], F) {
      const S = f - g * C + g * F;
      return [F, S];
    }
    let d = P(() => function(g) {
      return `M${g[0][0] * s.value},${g[0][1] * o.value} 
    Q${g[1][0] * s.value},${g[1][1] * o.value} 
    ${g[2][0] * s.value},${g[2][1] * o.value}`;
    }), m = P(() => function(g) {
      return `M${g[0][0] * s.value},${g[0][1] * o.value} 
    Q${g[1][0] * s.value},${g[1][1] * o.value} 
    ${g[2][0] * s.value},${g[2][1] * o.value}`;
    }), k = P(() => function(g) {
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
      return l ? l.proxy.$refs[g][0].getTotalLength() : 0;
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
        ref: r,
        class: "f-flight-chart"
      },
      [
        $(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: N(`background-image: url(${t.bgUrl})`),
            onClick: u
          },
          [
            (v(), _("svg", il, [
              sl,
              (v(!0), _(
                M,
                null,
                Q(a.points, (f, F) => (v(), _("g", {
                  key: f.key
                }, [
                  $("defs", null, [
                    f.halo.show ? (v(), _("circle", {
                      key: 0,
                      id: `halo${f.key}`,
                      cx: f.coordinate[0] * w(s),
                      cy: f.coordinate[1] * w(o)
                    }, [
                      $("animate", {
                        attributeName: "r",
                        values: `1;${f.halo.radius}`,
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, al),
                      $("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${f.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, cl)
                    ], 8, ol)) : E("v-if", !0),
                    $("mask", {
                      id: `mask${f.key}`
                    }, [
                      $("use", {
                        "xlink:href": `#halo${f.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, dl)
                    ], 8, ul)
                  ]),
                  f.halo.show ? (v(), _("use", {
                    key: 0,
                    "xlink:href": `#halo${f.key}`,
                    fill: f.halo.color,
                    mask: `url(#mask${f.key})`
                  }, null, 8, fl)) : E("v-if", !0),
                  f.title.show ? (v(), _("text", {
                    key: 1,
                    class: "point__title",
                    style: N({ fontSize: `${f.title.fontSize}px` }),
                    fill: f.title.color,
                    x: f.coordinate[0] * w(s) + f.title.offest[0],
                    y: f.coordinate[1] * w(o) + f.title.offest[1]
                  }, B(f.name), 13, hl)) : E("v-if", !0),
                  f.icon.show ? (v(), _("image", {
                    key: 2,
                    class: "point__icon",
                    href: f.icon.url,
                    width: f.icon.width,
                    height: f.icon.height,
                    x: f.coordinate[0] * w(s) - f.icon.width / 2,
                    y: f.coordinate[1] * w(o) - f.icon.height / 2
                  }, null, 8, gl)) : E("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (v(!0), _(
                M,
                null,
                Q(a.paths, (f, F) => (v(), _(
                  M,
                  null,
                  [
                    (v(!0), _(
                      M,
                      null,
                      Q(f.routeList, (S, L) => (v(), _("g", null, [
                        $("defs", null, [
                          $("path", {
                            id: S.key,
                            ref_for: !0,
                            ref: S.key,
                            d: w(d)(S.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, yl),
                          f.line.show && !f.line.slot ? (v(), _("mask", {
                            key: 0,
                            id: `mask${S.key}`
                          }, [
                            $("circle", {
                              cx: "0",
                              cy: "0",
                              r: f.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              $("animateMotion", {
                                dur: `${f.line.duration}ms`,
                                path: w(d)(S.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, vl)
                            ], 8, ml)
                          ], 8, pl)) : E("v-if", !0)
                        ]),
                        f.line.show ? (v(), _("use", {
                          key: 0,
                          "xlink:href": `#${S.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.orbitColor
                        }, null, 8, _l)) : E("v-if", !0),
                        f.line.show && !f.line.slot ? (v(), _("use", {
                          key: 1,
                          "xlink:href": `#${S.key}`,
                          "stroke-width": f.line.width,
                          stroke: f.line.color,
                          mask: `url(#mask${S.key})`
                        }, [
                          $("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${w(I)(S.key)}`,
                            to: `${w(I)(S.key)}, 0`,
                            dur: `${f.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, wl)
                        ], 8, $l)) : E("v-if", !0),
                        f.line.show && f.line.slot ? (v(), _("g", xl, [
                          G(g.$slots, f.line.slot, {
                            path: w(m)(S.path),
                            pathArr: w(k)(S.path),
                            totalLength: w(I)(S.key),
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
const bl = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, kl = {
  // 列表数据
  data: {
    type: Array,
    default: () => []
  },
  // 每行预告高度
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
  }
}, Sl = {
  class: "f-virtual-list__space",
  ref: "virtualList__space"
}, Cl = {
  class: "f-virtual-list__content",
  ref: "virtualList__content"
}, Pl = /* @__PURE__ */ $(
  "div",
  null,
  null,
  -1
  /* HOISTED */
), Il = [
  Pl
], we = /* @__PURE__ */ z({
  __name: "index",
  props: kl,
  setup(e) {
    const t = e, r = T(), l = Z({
      positions: [],
      // 每行的位置信息
      screenHeight: 0,
      // 可视区域高度
      start: 0,
      // 起始索引
      end: 0
      // 结束索引
    });
    Je(() => {
      c();
    });
    const c = () => {
      l.positions = t.data.map((u, n) => ({
        index: n,
        height: t.estimatedItemSize,
        top: n * t.estimatedItemSize,
        bottom: (n + 1) * t.estimatedItemSize
      }));
    }, a = () => {
    };
    return (u, n) => (v(), _(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: r,
        style: N({ height: u.height }),
        onScroll: n[0] || (n[0] = (i) => a())
      },
      [
        $(
          "div",
          Sl,
          null,
          512
          /* NEED_PATCH */
        ),
        $(
          "div",
          Cl,
          Il,
          512
          /* NEED_PATCH */
        )
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    ));
  }
});
we.install = function(e) {
  e.component("FVirtualList", we);
};
const Ll = {
  title: "VirtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(we);
  }
}, Dl = [
  pt,
  mt,
  vt,
  bt,
  Ct,
  At,
  Wt,
  Bt,
  Xt,
  Gt,
  nl,
  bl,
  Ll
], Rl = {
  version: "1.0.12",
  install(e) {
    Dl.forEach((t) => e.use(t));
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
  we as VirtualList,
  Rl as default,
  Dl as installs
};
