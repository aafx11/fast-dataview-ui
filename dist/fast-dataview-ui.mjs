import './style.css';
import { unref as L, getCurrentScope as Ke, onScopeDispose as Ze, watch as J, ref as R, onMounted as ee, onUnmounted as je, nextTick as Ce, defineComponent as B, computed as P, createVNode as x, renderSlot as Q, openBlock as $, createElementBlock as w, normalizeStyle as H, createElementVNode as C, toDisplayString as W, reactive as Z, provide as Pe, createCommentVNode as E, inject as Ie, normalizeClass as K, getCurrentInstance as Me, onBeforeUnmount as Le, Fragment as M, renderList as V, TransitionGroup as Fe, withCtx as ve, normalizeProps as Je, guardReactiveProps as et, withDirectives as De, vShow as Te, createStaticVNode as tt, onBeforeMount as lt, onUpdated as rt } from "vue";
function nt(e, t) {
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
var Re;
const Xe = typeof window < "u", it = (e) => typeof e == "string", ye = () => {
};
Xe && ((Re = window == null ? void 0 : window.navigator) != null && Re.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function he(e) {
  return typeof e == "function" ? e() : L(e);
}
function at(e, t) {
  function l(...r) {
    return new Promise((s, c) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(c);
    });
  }
  return l;
}
function ot(e, t = {}) {
  let l, r, s = ye;
  const c = (i) => {
    clearTimeout(i), s(), s = ye;
  };
  return (i) => {
    const a = he(e), u = he(t.maxWait);
    return l && c(l), a <= 0 || u !== void 0 && u <= 0 ? (r && (c(r), r = null), Promise.resolve(i())) : new Promise((o, g) => {
      s = t.rejectOnCancel ? g : o, u && !r && (r = setTimeout(() => {
        l && c(l), r = null, o(i());
      }, u)), l = setTimeout(() => {
        r && c(r), r = null, o(i());
      }, a);
    });
  };
}
function st(e) {
  return e;
}
function ct(e) {
  return Ke() ? (Ze(e), !0) : !1;
}
function ut(e, t = 200, l = {}) {
  return at(ot(t, l), e);
}
function dt(e) {
  var t;
  const l = he(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const ft = Xe ? window : void 0;
function ht(...e) {
  let t, l, r, s;
  if (it(e[0]) || Array.isArray(e[0]) ? ([l, r, s] = e, t = ft) : [t, l, r, s] = e, !t)
    return ye;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const c = [], n = () => {
    c.forEach((o) => o()), c.length = 0;
  }, i = (o, g, v, d) => (o.addEventListener(g, v, d), () => o.removeEventListener(g, v, d)), a = J(() => [dt(t), he(s)], ([o, g]) => {
    n(), o && c.push(...l.flatMap((v) => r.map((d) => i(o, v, d, g))));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), n();
  };
  return ct(u), u;
}
const Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ae = "__vueuse_ssr_handlers__";
Oe[Ae] = Oe[Ae] || {};
var Ne;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ne || (Ne = {}));
var gt = Object.defineProperty, ze = Object.getOwnPropertySymbols, pt = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, Ee = (e, t, l) => t in e ? gt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, yt = (e, t) => {
  for (var l in t || (t = {}))
    pt.call(t, l) && Ee(e, l, t[l]);
  if (ze)
    for (var l of ze(t))
      vt.call(t, l) && Ee(e, l, t[l]);
  return e;
};
const mt = {
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
yt({
  linear: st
}, mt);
const te = (e, t, l, r) => {
  const s = R(0), c = R(0), n = R(0), i = R(0);
  let a, u = null, o = null;
  const g = (p = !0) => new Promise((y) => {
    Ce(() => {
      o = e.value, s.value = e.value ? e.value.clientWidth : 0, c.value = e.value ? e.value.clientHeight : 0, n.value = o ? o.getBoundingClientRect().width : 0, i.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!s.value || !c.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && p && t(), y(!0);
    });
  }), v = () => {
    u = nt(o, a), ht(window, "resize", a);
  }, d = () => {
    u && (u.disconnect(), u.takeRecords(), u = null);
  }, m = async () => {
    await g(!1), a = ut(g, 300), v(), typeof l == "function" && l();
  };
  return ee(() => {
    m();
  }), je(() => {
    d();
  }), {
    width: s,
    height: c,
    afterWidth: n,
    afterHeight: i,
    initWH: g
  };
}, Ye = {
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
}, F = Object.assign, ie = (e) => Array.isArray(e) && e.length, ge = (e) => Array.isArray(e) && e || [], Y = (e) => e >= 0 ? e : 0, _t = (e, t, l = "reverse") => e.sort($t(t, l)), $t = (e, t = "reverse") => function(l, r) {
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
}, Be = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, se = /* @__PURE__ */ B({
  name: "FBorderBox1",
  props: Ye,
  setup(e, t) {
    const l = R(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let s = P(() => ie(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = te(l);
    return t.expose({
      resize: i
    }), {
      width: c,
      height: n,
      initWH: i,
      borderBox1: l,
      defaultColor: r,
      realColor: s
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: s,
      realColor: c,
      title: n
    } = this, i = 20;
    let a = s || 2, u = Y(t - a - 2), o = Y(l - a - 2);
    return x("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [x("svg", {
      class: "f-svg-container",
      width: u,
      height: o
    }, [x("polygon", {
      fill: r,
      stroke: c[0],
      "stroke-width": a,
      points: `
            ${i} ${a}, ${u - i} ${a}, ${u - a} ${i}, ${u - a} ${o - i}, ${u - i} ${o},
            ${i} ${o}, ${a} ${o - i}, ${a} ${i}
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
            ${u} ${o - i + 8}, ${u - i + 8 + a} ${o}
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
           ${i + 15} ${o}, ${i}  ${o}, ${a} ${o - i}, ${a} ${o - i - 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
           ${u - i - 15} ${a}, ${u - i} ${a}, ${u - a} ${i}, ${u - a} ${i + 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": a + 2,
      points: `
          ${u - i - 15} ${o}, ${u - i} ${o}, ${u - a} ${o - i}, ${u - a} ${o - i - 15}
          `
    }, null), n ? x("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${i} ${a}, ${u - i} ${a}, ${u - a} ${i}, ${u - a} ${i + 15}, ${a} ${i + 15},
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
se.install = function(e) {
  e.component(se.name, se);
};
const wt = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(se);
  }
}, ce = /* @__PURE__ */ B({
  name: "FBorderBox2",
  props: Ye,
  setup(e, t) {
    const l = R(null), r = ["white"];
    let s = P(() => ie(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = te(l);
    return t.expose({
      resize: i
    }), {
      width: c,
      height: n,
      initWH: i,
      borderBox2: l,
      defaultColor: r,
      realColor: s
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: s,
      realColor: c,
      duration: n,
      strokeDasharray: i
    } = this;
    let a = s || 3, u = Y(a), o = Y(a), g = Y(t - a), v = Y(a), d = Y(t - a), m = Y(l - a), p = Y(a), y = Y(l - a);
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
      d: `M ${u} ${o}, L ${g} ${v}, L ${d} ${m}, L ${p} ${y}, Z`
    }, null)]), x("div", {
      class: "f-border-box-content"
    }, [Q(e, "default")])]);
  }
});
ce.install = function(e) {
  e.component(ce.name, ce);
};
const xt = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ce);
  }
}, ue = /* @__PURE__ */ B({
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
    const l = R(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let s = P(() => ie(e.color) ? F(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: i
    } = te(l);
    return {
      width: c,
      height: n,
      initWH: i,
      loading1: l,
      defaultColor: r,
      realColor: s
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
ue.install = function(e) {
  e.component(ue.name, ue);
};
const bt = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(ue);
  }
}, kt = B({
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
    let r = P(() => ie(e.color) ? F(l, e.color) : l);
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
}), Ve = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, s] of t)
    l[r] = s;
  return l;
}, St = /* @__PURE__ */ C(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), Ct = { class: "loading-text" };
function Lt(e, t, l, r, s, c) {
  return $(), w(
    "div",
    {
      class: "f-loading-2",
      style: H(e.getLoadingStyle)
    },
    [
      St,
      C("div", Ct, [
        Q(e.$slots, "default", {}, () => [
          C(
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
const de = /* @__PURE__ */ Ve(kt, [["render", Lt]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Pt = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(de);
  }
}, It = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, Dt = { class: "f-screen-container" }, me = /* @__PURE__ */ B({
  __name: "index",
  props: It,
  setup(e) {
    const t = e, l = R(null), r = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let s = R(1), c = R(1);
    Pe("scaleX", s), Pe("scaleY", c);
    const n = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: g, height: v } = window.screen;
      r.screenWidth = g, r.screenHeight = v;
    }, i = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, a = () => {
      const g = document.body.clientWidth, v = document.body.clientHeight, d = r.width || r.screenWidth, m = r.height || r.screenHeight, p = g / +d, y = v / +m;
      s.value = p, c.value = y, l.value.style.transform = `scale(${p}, ${y})`;
    };
    return te(l, () => {
      a();
    }, () => {
      n(), i(), a(), t.onAfterResize(), r.isReady = !0;
    }), (g, v) => ($(), w("div", Dt, [
      C(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: l
        },
        [
          r.isReady ? Q(g.$slots, "default", { key: 0 }) : E("v-if", !0),
          E(" <slot></slot> ")
        ],
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
me.install = function(e) {
  e.component("FScreenContainer", me);
};
const Tt = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(me);
  }
}, Rt = {
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
}, Ot = 30, At = 1 / Ot;
class _e {
  // 粒子的透明度
  constructor(t, l, r, s, c, n, i) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = s, this.time = c, this.radius = n, this.colors = i, this.opacity = 0;
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
  update(t, l, r, s) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && s) {
      let c = r - this.x, n = s - this.y, i = Math.sqrt(c ** 2 + n ** 2), a = t / i;
      a = a > 7 ? 7 : a;
      let u = Math.atan2(n, c), o = Math.cos(u), g = Math.sin(u), v = o * a * -l, d = g * a * -l;
      this.velocityX += v, this.velocityY += d;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += At);
  }
  // 切换粒子
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const We = 30;
class Nt {
  // 动画的id，用于停止动画
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, s = this.particleArr, c = s.length;
      for (let i = 0; i < r; i++) {
        const { targetX: a, targetY: u, colors: o } = l[i];
        s[i] ? s[i].change(a, u, o) : s[i] = new _e(this.width, this.height, a, u, We, this.radius, o);
      }
      r < c && (this.particleArr = s.splice(0, r)), s = this.particleArr;
      let n = s.length;
      for (; n; ) {
        let i = ~~(Math.random() * n--), a = s[i], { targetX: u, targetY: o, colors: g } = a;
        a.targetX = s[n].targetX, a.targetY = s[n].targetY, a.colors = s[n].colors, s[n].targetX = u, s[n].targetY = o, s[n].colors = g;
      }
    } else
      this.particleArr = t.particleData.map((l) => new _e(this.width, this.height, l.targetX, l.targetY, We, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const zt = 30;
class He {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, l, r, s) {
    this.src = t, this.width = l, this.height = r, this.particleData = [], this.radius = s;
  }
  createParticleData(t = this.src) {
    return new Promise((l, r) => {
      let s = new Image();
      s.crossOrigin = "", s.src = decodeURI(new URL(t, import.meta.url).href), s.onload = () => {
        const c = document.createElement("canvas"), n = c.getContext("2d"), i = this.width, a = this.height;
        c.width = i, c.height = a, n == null || n.drawImage(s, 0, 0, i, a);
        const u = n == null ? void 0 : n.getImageData(0, 0, i, a).data;
        n == null || n.clearRect(0, 0, this.width, this.height);
        for (let o = 0; o < a; o += 5)
          for (let g = 0; g < i; g += 5) {
            const v = (g + o * i) * 4, d = u[v + 3];
            if (d == 0)
              continue;
            const m = u[v], p = u[v + 1], y = u[v + 2];
            if (m + p + y + d) {
              const D = new _e(this.width, this.height, g, o, zt, this.radius, `rgba(${m},${p},${y},${d})`);
              this.particleData.push(D);
            }
          }
        l(this.particleData);
      }, s.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const Et = ["width", "height"], $e = /* @__PURE__ */ B({
  __name: "index",
  props: Rt,
  setup(e, { expose: t }) {
    const l = e;
    let r = Ie("scaleX", R(1)), s = Ie("scaleY", R(1));
    const c = R(null), n = R(null);
    let i = R(), a = R();
    const u = async (g) => {
      a.value = new He(g, l.width, l.height, l.radius), await a.value.createParticleData(), i.value.changeImg(a.value);
    }, o = async () => {
      a.value = new He(l.src, l.width, l.height, l.radius), await a.value.createParticleData(), c.value && (n.value = c.value.getContext("2d"), i.value = new Nt(c.value, l.radius, l.strength), c.value.addEventListener("mousemove", (g) => {
        const { left: v, top: d } = c.value.getBoundingClientRect(), { clientX: m, clientY: p } = g;
        i.value.mouseX = (m - v) * (1 / r.value), i.value.mouseY = (p - d) * (1 / s.value);
      }), i.value.drawCanvas(), i.value.changeImg(a.value));
    };
    return ee(() => {
      o();
    }), t({
      toggleImg: u
    }), (g, v) => ($(), w("div", null, [
      C("canvas", {
        ref_key: "canvasRef",
        ref: c,
        width: l.width,
        height: l.height
      }, null, 8, Et)
    ]));
  }
});
$e.install = function(e) {
  e.component("FDynamicParticle", $e);
};
const Bt = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "100%",
  install(e) {
    e.use($e);
  }
};
function qe(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, s, c, n, i) => {
      e.emit("cell-click", s, c, n, i, r);
    }
  };
}
function Wt(e, t, l) {
  const { handleToggle: r } = qe(l), s = (v) => {
    let d = ge(v);
    return q(d);
  }, c = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, n = async (v, d, m) => {
    let p = m;
    d.map((y) => y._index_ = ++p), e.currData.length ? v === t.pageSize ? e.currData = [...d] : (e.currData.push(...d), e.currData.splice(0, v)) : e.currData.push(...d);
  }, i = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let v;
      t.mode === "single" ? v = t.togglePage : v = t.pageSize;
      let d, m;
      e.currPage === 1 ? (d = 0, m = t.pageSize) : (d = v * (e.currPage - 2) + t.pageSize, m = v * (e.currPage - 1) + t.pageSize);
      let p = e.tableData.slice(d, m);
      p.length ? e.currPage === 1 && e.toggleCount === 0 ? n(t.pageSize, p, d) : e.currPage === 1 ? await n(t.pageSize, p, d) : await n(v, p, d) : (e.currPage = 1, c(), i()), a();
    } else
      o(), e.currPage = 1, e.currData = [], e.isEmpty = !0, u();
  }, a = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, i();
    }, t.toggleDur));
  }, u = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      r(t.name);
    }, t.emptyEmitDur));
  }, o = (v = !0, d = !0) => {
    e.intervalId && v && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && d && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: s,
    setCurrData: i,
    setPageInterval: a,
    setEmptyTimeout: u,
    clearTimer: o,
    setPage: (v = 1) => {
      o(), e.currPage = v;
      let d;
      t.mode === "single" ? d = t.togglePage : d = t.pageSize;
      let m = d * (e.currPage - 1), p = d * (e.currPage - 1) + t.pageSize, y = e.tableData.slice(m, p);
      y.length ? (n(t.pageSize, y, m), a()) : i(), e.tableData.length || u();
    }
  };
}
function Ht(e, t) {
  const l = P(() => function(u, o) {
    const g = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && g.push("f-scroll-table_row--striped"), g;
  }), r = P(() => {
    const u = ["cell"];
    return t.wrap ? u.push("cell--wrap") : u.push("cell--nowrap"), u;
  }), s = P(() => function(u) {
    let o = u.reduce((g, v) => g += v.width, 0);
    return {
      width: `${o}px`,
      "max-width": `${o}px`
    };
  }), c = P(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), n = P(() => function(u) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), i = P(() => function(u) {
    return {
      width: `${u.width}px`,
      "max-width": `${u.width}px`,
      "text-align": u.align || t.align || "start"
    };
  }), a = P(() => function(u, o, g, v) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: g,
      columnIndex: v,
      row: u,
      column: o
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: r,
    getTableStyle: s,
    getBodyStyle: c,
    getRowStyle: n,
    getExtraCellStyle: i,
    getCellStyle: a
  };
}
const pe = /* @__PURE__ */ B({
  __name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "left" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = R(), r = R(), s = P(() => {
      var v, d, m, p;
      let c = ((v = l.value) == null ? void 0 : v.offsetWidth) || 0, n = ((d = l.value) == null ? void 0 : d.offsetHeight) || 0, i = ((m = r.value) == null ? void 0 : m.offsetWidth) || 0, a = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && a < n || ["left", "right"].includes(t.direction) && i < c))
        return {
          "--text-scroll-width": `${c}px`,
          "--text-scroll-height": `${n}px`,
          animation: ""
        };
      let u, o, g;
      return ["up", "down"].includes(t.direction) && (u = n + a, o = u / t.speed || 0, g = `up-scroll linear ${o}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (u = c + i, o = u / t.speed || 0, g = `left-scroll linear ${o}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${c}px`,
        "--text-scroll-height": `${n}px`,
        animation: g
      };
    });
    return (c, n) => ($(), w(
      "div",
      {
        ref_key: "scrollText",
        ref: l,
        class: K(["f-scroll-text", `f-scroll-text--${t.type}`])
      },
      [
        C(
          "div",
          {
            ref_key: "textContent",
            ref: r,
            class: "text-content",
            style: H(L(s))
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
pe.install = function(e) {
  e.component("FScrollText", pe);
};
const Mt = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(pe);
  }
}, Ft = {
  class: "f-scroll-table__head"
}, Xt = ["onClick"], Yt = {
  key: 1
}, we = /* @__PURE__ */ B({
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
    }), s = Me(), c = R(), {
      deepCloneArr: n,
      setCurrData: i,
      setPageInterval: a,
      setEmptyTimeout: u,
      clearTimer: o,
      setPage: g
    } = Wt(r, l, s), {
      handleCellClick: v
    } = qe(s), {
      getRowClass: d,
      getCellClass: m,
      getTableStyle: p,
      getBodyStyle: y,
      getRowStyle: S,
      getExtraCellStyle: D,
      getCellStyle: O
    } = Ht(r, l), N = (k) => {
      k.style.opacity = "0", k.style.gridTemplateRows = "0fr";
    }, f = (k, b) => {
      k.offsetWidth, k.style.opacity = "1", k.style.gridTemplateRows = "1fr", b();
    }, _ = async (k) => {
      k.style.opacity = "1";
    }, h = async (k, b) => {
      k.style.opacity = "0", k.style.gridTemplateRows = "0fr", await new Promise((I) => {
        setTimeout(() => {
          k.remove(), I(!0);
        }, l.pageAnimateDur);
      }), b();
    };
    return J(() => l.data, (k) => {
      r.tableData = n(k), i();
    }, {
      immediate: !0,
      deep: !0
    }), ee(() => {
      l.mouseEvent && (c.value.addEventListener("mouseenter", () => {
        o(!0, !0), r.isStopToggle = !0;
      }), c.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? a() : u();
      }));
    }), Le(() => {
      o();
    }), t({
      setPage: g
    }), (k, b) => ($(), w(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": l.border
        }]),
        style: H(L(p)(l.columns))
      },
      [C("div", Ft, [($(!0), w(
        M,
        null,
        V(l.columns, (I, A) => ($(), w(
          "div",
          {
            class: "f-scroll-table__cell",
            style: H(L(D)(I)),
            key: A
          },
          W(I.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), C(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: c,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: H(L(y))
        },
        [x(Fe, {
          tag: "div",
          css: !1,
          onBeforeEnter: N,
          onEnter: f,
          onBeforeLeave: _,
          onLeave: h
        }, {
          default: ve(() => [($(!0), w(
            M,
            null,
            V(r.currData, (I, A) => ($(), w("div", {
              class: "f-scroll-table__row-wrap",
              key: I
            }, [C(
              "div",
              {
                class: K(L(d)(I, A))
              },
              [($(!0), w(
                M,
                null,
                V(l.columns, (T, X) => ($(), w("div", {
                  class: "f-scroll-table__cell",
                  style: H([L(D)(T), L(O)(I, T.type === "index" ? "_index_" : T.prop, A, X)]),
                  key: `${I[T.prop]}${X}`,
                  onClick: (G) => L(v)(G, I, I[T.prop], A, X)
                }, [T.type === "index" ? ($(), w(
                  "div",
                  {
                    key: 0,
                    class: K(L(m))
                  },
                  W(I._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : T.type === "scroll" ? ($(), w("div", Yt, [x(
                  L(pe),
                  Je(et(T.scrollOption)),
                  {
                    default: ve(() => [C(
                      "div",
                      null,
                      W(I[T.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : T.slot ? ($(), w(
                  "div",
                  {
                    key: 2,
                    class: K(L(m))
                  },
                  [Q(k.$slots, T.slot, {
                    params: {
                      row: I,
                      column: T.prop,
                      $index: A
                    }
                  })],
                  2
                  /* CLASS */
                )) : ($(), w(
                  "div",
                  {
                    key: 3,
                    class: K(L(m))
                  },
                  W(I[T.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, Xt))),
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
we.install = function(e) {
  e.component("FScrollTable", we);
};
const Vt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(we);
  }
}, qt = B({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = P(() => ie(e.color) ? F(l, e.color) : l);
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
function Qt(e, t, l, r, s, c) {
  return $(), w(
    "div",
    {
      class: "f-progress",
      style: H(e.getProgressStyle)
    },
    [
      C(
        "div",
        {
          class: "progress-inner",
          style: H({ width: `${e.percent}%` })
        },
        [
          Q(e.$slots, "default", { percent: e.percent }, () => [
            C(
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
const ne = /* @__PURE__ */ Ve(qt, [["render", Qt]]);
ne.install = function(e) {
  e.component(ne.name, ne);
};
const Gt = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ne);
  }
}, Ut = { class: "f-digital-scroll" }, Kt = { class: "f-digital-scroll__list" }, Zt = { class: "f-digital-scroll__point" }, xe = /* @__PURE__ */ B({
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
      let n = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), a = Number(c.toString().match(n)).toString(), u = a.indexOf(".");
      for (u < 0 && (u = a.length, a += "."); a.length <= u + t.digit; )
        a += "0";
      return a.split("");
    }, s = P(() => function(c) {
      return {
        top: `-${Number(c) * 100}%`
      };
    });
    return ee(() => {
      l.stringList = r(t.number);
    }), J(
      () => t.number,
      (c) => {
        l.stringList = r(t.number);
      }
    ), (c, n) => ($(), w("div", Ut, [
      C("div", Kt, [
        ($(!0), w(
          M,
          null,
          V(L(l).stringList, (i, a) => ($(), w(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": i === "." }]),
              key: a
            },
            [
              De(C(
                "div",
                Zt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [Te, i === "."]
              ]),
              De(C(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: H(L(s)(i))
                },
                [
                  ($(), w(
                    M,
                    null,
                    V(10, (u, o) => C(
                      "div",
                      {
                        class: "f-digital-scroll__digital-item",
                        key: o
                      },
                      W(o),
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
                [Te, i !== "."]
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
xe.install = function(e) {
  e.component("FDigitalScroll", xe);
};
const jt = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(xe);
  }
}, Jt = { class: "f-scroll-rank" }, el = { class: "f-scroll-rank__item-wrap" }, tl = { class: "f-scroll-rank__item-info" }, ll = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, rl = { class: "f-scroll-rank__item-name" }, nl = { class: "f-scroll-rank__item-info-right" }, il = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, al = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, ol = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, sl = { class: "f-scroll-rank__item-progress" }, be = /* @__PURE__ */ B({
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
    const t = e, l = R();
    let r = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const s = (p) => {
      let y = q(ge(p)), S = [];
      t.order === "default" ? S = y : S = _t(y, "value", t.order), typeof t.valueFormatter == "function" && (S = S.map((D, O) => {
        var N;
        return D.formattedValue = (N = t.valueFormatter) == null ? void 0 : N.call(null, {
          name: D.name,
          value: D.value,
          maxValue: u.value,
          index: O
        }), D;
      })), r.dataList = S;
    }, c = async (p, y, S) => {
      let D = S;
      y.map((O) => O._index_ = ++D), r.currList.length ? p === t.pageSize ? r.currList = [...y] : (r.currList.push(...y), r.currList.splice(0, p)) : r.currList.push(...y), Ce(() => {
        l.value && (l.value.style.maxHeight = `${l.value.getBoundingClientRect().height}px`, l.value.style.height = `${l.value.getBoundingClientRect().height}px`);
      });
    }, n = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let p;
        t.togglePage >= t.pageSize ? p = t.pageSize : p = t.togglePage;
        let y, S;
        r.currPage === 1 ? (y = 0, S = t.pageSize) : (y = p * (r.currPage - 2) + t.pageSize, S = p * (r.currPage - 1) + t.pageSize);
        let D = r.dataList.slice(y, S);
        D.length ? r.currPage === 1 ? await c(t.pageSize, D, y) : await c(p, D, y) : (r.currPage = 1, n()), i();
      } else
        a(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, i = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, n();
      }, t.toggleDur));
    }, a = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, u = P(() => {
      var p, y;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((p = r.currList.at(-1)) == null ? void 0 : p.value) || 0 : ((y = r.currList[0]) == null ? void 0 : y.value) || 0;
    }), o = P(() => function(p) {
      let y, S = u.value;
      y = p / S;
      const D = (O, N) => Math.round(O * Math.pow(10, N)) / Math.pow(10, N);
      return typeof y == "number" ? D(y * 100, 1) : 0;
    }), g = (p) => {
      p.style.opacity = "0", p.style.gridTemplateRows = "0fr";
    }, v = (p, y) => {
      p.offsetWidth, p.style.opacity = "1", p.style.gridTemplateRows = "1fr", y();
    }, d = async (p) => {
      p.style.opacity = "1", p.style.margin = "0";
    }, m = async (p, y) => {
      p.style.opacity = "0", p.style.margin = "0", p.style.gridTemplateRows = "0fr", await new Promise((S) => {
        setTimeout(() => {
          p.remove(), S(!0);
        }, t.toggleDuration);
      }), y();
    };
    return Le(() => {
      a();
    }), J(
      () => t.data,
      (p) => {
        s(p), n();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (p, y) => ($(), w("div", Jt, [
      C(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: l,
          style: H({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          x(Fe, {
            tag: "div",
            css: !1,
            onBeforeEnter: g,
            onEnter: v,
            onBeforeLeave: d,
            onLeave: m
          }, {
            default: ve(() => [
              ($(!0), w(
                M,
                null,
                V(L(r).currList, (S, D) => ($(), w("div", {
                  class: "f-scroll-rank__item",
                  key: S
                }, [
                  C("div", el, [
                    C("div", tl, [
                      t.showRank ? ($(), w(
                        "span",
                        ll,
                        W(`NO.${S._index_}`),
                        1
                        /* TEXT */
                      )) : E("v-if", !0),
                      C(
                        "span",
                        rl,
                        W(S.name || ""),
                        1
                        /* TEXT */
                      ),
                      C("div", nl, [
                        t.showPercent ? ($(), w(
                          "span",
                          il,
                          W(`${L(o)(S.value)}%`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? ($(), w(
                          "span",
                          al,
                          W(`${S.value} / ${L(u)}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0),
                        typeof t.valueFormatter == "function" ? ($(), w(
                          "span",
                          ol,
                          W(`${S.formattedValue}`),
                          1
                          /* TEXT */
                        )) : E("v-if", !0)
                      ])
                    ]),
                    C("div", sl, [
                      x(L(ne), {
                        percent: L(o)(S.value),
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
be.install = function(e) {
  e.component("FScrollRank", be);
};
const cl = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(be);
  }
}, ul = {
  width: "100%",
  height: "100%"
}, dl = /* @__PURE__ */ tt('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), fl = ["id", "cx", "cy"], hl = ["values", "dur"], gl = ["dur"], pl = ["id"], vl = ["xlink:href"], yl = ["xlink:href", "fill", "mask"], ml = ["fill", "x", "y"], _l = ["href", "width", "height", "x", "y"], $l = ["id", "d"], wl = ["id"], xl = ["r"], bl = ["dur", "path"], kl = ["xlink:href", "stroke-width", "stroke"], Sl = ["xlink:href", "stroke-width", "stroke", "mask"], Cl = ["from", "to", "dur"], Ll = { key: 2 }, ke = /* @__PURE__ */ B({
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
  setup(e, { expose: t }) {
    const l = e, r = R();
    let s;
    ee(() => {
      s = Me();
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
    }), n = Z({
      points: [],
      paths: []
    }), i = (f) => {
      let { offsetX: _, offsetY: h } = f;
      const k = (_ / o.value).toFixed(2), b = (h / g.value).toFixed(2);
      s == null || s.emit("chart-click", k, b, f);
    }, a = () => {
      d(), m();
    }, u = () => {
      d(), m();
    }, { width: o, height: g, initWH: v } = te(r, a, u);
    t({
      resize: v
    });
    const d = () => {
      let f = q(ge(l.points));
      n.points = f.map((_, h) => ({
        ..._,
        halo: F({}, c.halo, q(l.halo), _.halo),
        title: F({}, c.title, q(l.title), _.title),
        icon: F({}, c.icon, q(l.icon), _.icon),
        key: `${_.coordinate.toString()}${h}`
      }));
    }, m = () => {
      let f = q(ge(l.paths));
      n.paths = f.map((_, h) => {
        var ae, U;
        let { source: k, route: b, target: I, line: A } = _, T = F({}, c.line, q(l.line), A), X = (ae = n.points.find(({ name: z }) => z === k)) == null ? void 0 : ae.coordinate, G = (U = n.points.find(({ name: z }) => z === I)) == null ? void 0 : U.coordinate, j = b ? [X, ...b, G] : [X, G];
        j = j.filter((z) => z !== void 0);
        let le = [];
        for (let z = 0; z < j.length - 1; z++) {
          let Qe = j[z], re = p(Qe, j[z + 1], T.k, T.curvature), Ge = `M${re[0].toString()} Q${re[1].toString()} ${re[2].toString()}`, Ue = `${re.toString()}`;
          le.push({ path: re, d: Ge, key: Ue });
        }
        return {
          ..._,
          line: T,
          routeList: le
        };
      });
    }, p = (f, _, h, k) => {
      let [b, I] = f, [A, T] = _;
      const [X, G] = [(b + A) / 2, (I + T) / 2];
      let le = Be([b, I], [A, T]) / k, ae = le / 2, [U, z] = [X, G];
      do
        U += ae, z = y(h, [X, G], U)[1];
      while (Be([X, G], [U, z]) < le);
      return [f, [U, z], _];
    };
    function y(f, [_, h], k) {
      const b = h - f * _ + f * k;
      return [k, b];
    }
    let S = P(() => function(f) {
      return `M${f[0][0] * o.value},${f[0][1] * g.value} 
    Q${f[1][0] * o.value},${f[1][1] * g.value} 
    ${f[2][0] * o.value},${f[2][1] * g.value}`;
    }), D = P(() => function(f) {
      return `M${f[0][0] * o.value},${f[0][1] * g.value} 
    Q${f[1][0] * o.value},${f[1][1] * g.value} 
    ${f[2][0] * o.value},${f[2][1] * g.value}`;
    }), O = P(() => function(f) {
      return {
        x1: f[0][0] * o.value,
        y1: f[0][1] * g.value,
        x2: f[1][0] * o.value,
        y2: f[1][1] * g.value,
        x3: f[2][0] * o.value,
        y3: f[2][1] * g.value
      };
    });
    P(() => function(f) {
      return `"M${f[0][0] * o.value},${f[0][1] * g.value} Q${f[1][0] * o.value},${f[1][1] * g.value} ${f[2][0] * o.value},${f[2][1] * g.value}"`;
    });
    let N = P(() => function(f) {
      return s ? s.proxy.$refs[f][0].getTotalLength() : 0;
    });
    return J(() => l, (f) => {
      d(), m();
    }, {
      deep: !0,
      immediate: !0
    }), (f, _) => ($(), w(
      "div",
      {
        ref_key: "flightChart",
        ref: r,
        class: "f-flight-chart"
      },
      [
        C(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: H(`background-image: url(${l.bgUrl})`),
            onClick: i
          },
          [
            ($(), w("svg", ul, [
              dl,
              ($(!0), w(
                M,
                null,
                V(n.points, (h, k) => ($(), w("g", {
                  key: h.key
                }, [
                  C("defs", null, [
                    h.halo.show ? ($(), w("circle", {
                      key: 0,
                      id: `halo${h.key}`,
                      cx: h.coordinate[0] * L(o),
                      cy: h.coordinate[1] * L(g)
                    }, [
                      C("animate", {
                        attributeName: "r",
                        values: `1;${h.halo.radius}`,
                        dur: `${h.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, hl),
                      C("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${h.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, gl)
                    ], 8, fl)) : E("v-if", !0),
                    C("mask", {
                      id: `mask${h.key}`
                    }, [
                      C("use", {
                        "xlink:href": `#halo${h.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, vl)
                    ], 8, pl)
                  ]),
                  h.halo.show ? ($(), w("use", {
                    key: 0,
                    "xlink:href": `#halo${h.key}`,
                    fill: h.halo.color,
                    mask: `url(#mask${h.key})`
                  }, null, 8, yl)) : E("v-if", !0),
                  h.title.show ? ($(), w("text", {
                    key: 1,
                    class: "point__title",
                    style: H({ fontSize: `${h.title.fontSize}px` }),
                    fill: h.title.color,
                    x: h.coordinate[0] * L(o) + h.title.offest[0],
                    y: h.coordinate[1] * L(g) + h.title.offest[1]
                  }, W(h.name), 13, ml)) : E("v-if", !0),
                  h.icon.show ? ($(), w("image", {
                    key: 2,
                    class: "point__icon",
                    href: h.icon.url,
                    width: h.icon.width,
                    height: h.icon.height,
                    x: h.coordinate[0] * L(o) - h.icon.width / 2,
                    y: h.coordinate[1] * L(g) - h.icon.height / 2
                  }, null, 8, _l)) : E("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              ($(!0), w(
                M,
                null,
                V(n.paths, (h, k) => ($(), w(
                  M,
                  null,
                  [
                    ($(!0), w(
                      M,
                      null,
                      V(h.routeList, (b, I) => ($(), w("g", null, [
                        C("defs", null, [
                          C("path", {
                            id: b.key,
                            ref_for: !0,
                            ref: b.key,
                            d: L(S)(b.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, $l),
                          h.line.show && !h.line.slot ? ($(), w("mask", {
                            key: 0,
                            id: `mask${b.key}`
                          }, [
                            C("circle", {
                              cx: "0",
                              cy: "0",
                              r: h.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              C("animateMotion", {
                                dur: `${h.line.duration}ms`,
                                path: L(S)(b.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, bl)
                            ], 8, xl)
                          ], 8, wl)) : E("v-if", !0)
                        ]),
                        h.line.show ? ($(), w("use", {
                          key: 0,
                          "xlink:href": `#${b.key}`,
                          "stroke-width": h.line.width,
                          stroke: h.line.orbitColor
                        }, null, 8, kl)) : E("v-if", !0),
                        h.line.show && !h.line.slot ? ($(), w("use", {
                          key: 1,
                          "xlink:href": `#${b.key}`,
                          "stroke-width": h.line.width,
                          stroke: h.line.color,
                          mask: `url(#mask${b.key})`
                        }, [
                          C("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${L(N)(b.key)}`,
                            to: `${L(N)(b.key)}, 0`,
                            dur: `${h.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, Cl)
                        ], 8, Sl)) : E("v-if", !0),
                        h.line.show && h.line.slot ? ($(), w("g", Ll, [
                          Q(f.$slots, h.line.slot, {
                            path: L(D)(b.path),
                            pathArr: L(O)(b.path),
                            totalLength: L(N)(b.key),
                            line: h.line
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
ke.install = function(e) {
  e.component("FFlightChart", ke);
};
const Pl = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(ke);
  }
}, Il = {
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
}, Dl = ["id"], Se = /* @__PURE__ */ B({
  __name: "index",
  props: Il,
  setup(e) {
    const t = e, l = R(null), r = R(null), s = R(null), c = R(null), n = Z({
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
    lt(() => {
      i();
    }), ee(() => {
      n.screenHeight = l.value.clientHeight, n.start = 0, n.end = n.start + g.value, D(), N();
    }), rt(() => {
      Ce(() => {
        var _, h;
        if (!c.value || !((_ = c.value) != null && _.length))
          return;
        y();
        let f = (h = n.positions.at(-1)) == null ? void 0 : h.bottom;
        r.value.style.height = `${f}px`, p();
      });
    }), Le(() => {
      O();
    }), J(
      () => t.data,
      () => {
        i();
      }
    );
    const i = () => {
      n.positions = t.data.map((f, _) => ({
        index: _,
        height: t.estimatedItemSize,
        top: _ * t.estimatedItemSize,
        bottom: (_ + 1) * t.estimatedItemSize
      }));
    }, a = (f = 0) => u(n.positions, f), u = (f, _) => {
      let h = 0, k = f.length - 1, b = null;
      for (; h <= k; ) {
        let I = parseInt((h + k) / 2 + ""), A = f[I].bottom;
        if (A === _)
          return I + 1;
        A < _ ? h = I + 1 : A > _ && ((b === null || b > I) && (b = I), k = k - 1);
      }
      return b;
    }, o = P(() => t.data.map((f, _) => ({
      _index_: _,
      ...f
    }))), g = P(() => Math.ceil(n.screenHeight / t.estimatedItemSize)), v = P(() => Math.min(n.start, t.bufferScale * g.value)), d = P(() => Math.min(
      t.data.length - n.end,
      t.bufferScale * g.value
    )), m = P(() => {
      let f = n.start - v.value, _ = n.end + d.value;
      return o.value.slice(f, _);
    }), p = () => {
      let f = 0;
      if (n.start >= 1) {
        let _ = n.positions[n.start].top - (n.positions[n.start - v.value] ? n.positions[n.start - v.value].top : 0);
        f = n.positions[n.start - 1].bottom - _;
      } else
        f = 0;
      s.value.style.transform = `translate3d(0,${f}px,0)`;
    }, y = () => {
      if (c.value)
        for (let f = 0; f < c.value.length; f++) {
          let _ = c.value[f], k = _.getBoundingClientRect().height, b = +_.id, A = n.positions[b].height - k;
          if (A) {
            n.positions[b].bottom = n.positions[b].bottom - A, n.positions[b].height = k;
            for (let T = b + 1; T < n.positions.length; T++)
              n.positions[T].top = n.positions[T - 1].bottom, n.positions[T].bottom = n.positions[T].bottom - A;
          }
        }
    }, S = () => {
      let f = l.value.scrollTop;
      n.start = a(f), n.end = n.start + g.value, p();
    }, D = () => {
      n.intervalID === null && t.autoScroll && !n.isMouseHover && (n.intervalID = setInterval(() => {
        if (l.value) {
          let f = 0;
          if (t.scrollDistance && (f = t.scrollDistance), t.scrollRow && f === 0) {
            let _ = 0;
            for (let h = 0; h < t.scrollRow; h++)
              _ += n.positions[n.start + h].height;
            f = _;
          }
          if (Math.abs(l.value.scrollHeight - l.value.clientHeight - l.value.scrollTop) >= 1) {
            let _ = l.value.scrollTop + f;
            l.value.scrollTo({ top: _, behavior: "smooth" });
          } else
            O(), setTimeout(() => {
              l.value.scrollTo({ top: 0, behavior: "instant" }), setTimeout(() => {
                D();
              }, 500);
            }, t.stopTime);
        }
      }, t.scrollInterval));
    }, O = () => {
      n.intervalID && (clearInterval(n.intervalID), n.intervalID = null);
    }, N = () => {
      l.value && (l.value.addEventListener("mouseenter", () => {
        O(), n.isMouseHover = !0;
      }), l.value.addEventListener("mouseleave", () => {
        n.isMouseHover = !1, D();
      }));
    };
    return (f, _) => ($(), w(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: l,
        style: H({ height: f.height }),
        onScroll: _[0] || (_[0] = (h) => S())
      },
      [
        C(
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
        C(
          "div",
          {
            class: "f-virtual-list__content",
            ref_key: "virtualList__content",
            ref: s
          },
          [
            ($(!0), w(
              M,
              null,
              V(L(m), (h) => ($(), w("div", {
                class: "f-virtual-list__item",
                ref_for: !0,
                ref_key: "virtualList__item",
                ref: c,
                id: `${h._index_}`
              }, [
                Q(f.$slots, "default", {
                  ref_for: !0,
                  ref: "slot",
                  params: { row: h, $index: h._index_ }
                })
              ], 8, Dl))),
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
Se.install = function(e) {
  e.component("FVirtualList", Se);
};
const Tl = {
  title: "virtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(Se);
  }
}, Rl = {
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
}, Ol = (e, t, l, r, s) => {
  let n = F({}, {
    offestTop: 0,
    waveScale: 15,
    waveDirection: "right",
    waveDuration: 1e4,
    begin: 0,
    waveColor: "#4579e2"
  }, t), i = n.waveScale, a = 4 * i, u = 10 * i, o = Math.ceil(l / u || 0);
  if (!o || !s)
    return;
  let g = r - a, v = g * (1 - s), d = 3 * i, m = 1 * i, p = 8 * i, y = 4 * i, S = `m 0 ${v + n.offestTop} c ${d} ${-m}, ${p} ${-y}, ${u} 0`, D = `s${p} ${-y}, ${u} 0`, O = `s ${u - d} ${m}, ${u} 0`, N = `v ${g * s + a} H 0`, f = "";
  for (let b = 0; b < o - 1; b++)
    f = `${f}${D}${O}`;
  let _ = `${S}${O}${f}${N}`, h = n.waveDirection === "left" ? "0 0" : `${-(2 * u)} 0`, k = n.waveDirection === "left" ? `${-(2 * u)} 0` : "0 0";
  return x("path", {
    class: e.e("wave"),
    d: _,
    fill: n.waveColor
  }, [x("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "translate",
    begin: n.begin ? `${n.begin}ms` : 0,
    from: h,
    to: k,
    dur: `${n.waveDuration}ms`,
    repeatCount: "indefinite"
  }, null)]);
};
function oe(e, t, l) {
  let r = e;
  return t && (r += `__${t}`), l && (r += `--${l}`), r;
}
function Al(e, t = !1) {
  const l = t ? `.f-${e}` : `f-${e}`;
  return {
    b: () => oe(l),
    e: (i) => i ? oe(l, i) : "",
    m: (i) => i ? oe(l, "", i) : "",
    em: (i, a) => i && a ? oe(l, i, a) : ""
  };
}
const fe = /* @__PURE__ */ B({
  name: "FLiquidChart",
  props: Rl,
  setup(e, t) {
    const l = R(), r = Al("liquid-chart"), {
      width: s,
      height: c,
      initWH: n
    } = te(l), i = () => {
      let d = e.borderWidth / 2, m = `${d},0`, p = `${d},${c.value - d}`, y = `${s.value - d},${c.value - d}`, S = `${s.value - d},0`;
      return x("svg", {
        class: r.e("rect-wrap"),
        style: {
          background: e.background
        }
      }, [Array.from({
        length: 4
      }).map((D, O) => x("path", {
        class: r.e("top-border"),
        d: `M ${d},${0 + O * 4} ${s.value - d},${0 + O * 4}`,
        fill: "none",
        "stroke-dasharray": "20 10",
        stroke: e.borderColors[1],
        "stroke-width": 1
      }, null)), x("path", {
        d: `M ${m} ${p} ${y} ${S}`,
        fill: "none",
        stroke: e.borderColors[0],
        "stroke-width": e.borderWidth
      }, null)]);
    };
    let a = P(() => {
      let d = 0.5;
      return e.currLevel || (d = 0), e.maxLevel ? (d = e.currLevel / e.maxLevel, d > 1 ? 1 : d) : d;
    });
    const u = P(() => ({
      left: `${e.borderWidth}px`,
      width: `calc(100% - ${e.borderWidth * 2}px)`,
      height: `calc(100% - ${e.borderWidth}px)`
    })), o = () => x("svg", {
      class: r.e("wave-wrap"),
      style: {
        ...u.value
      }
    }, [e.waveOption.map((d) => Ol(r, d, s.value, c.value, a.value)), v()]), g = () => {
      let m = F({}, {
        show: !0,
        offest: [0, 0],
        fontSize: 18,
        color: "white"
      }, e.textOption);
      if (!m.show)
        return;
      let p = m.text, y = p ? p.replace("{level}", String(e.currLevel)).replace("{percent}", String((a.value * 100).toFixed(2))) : e.currLevel, S = P(() => ({
        color: m.color,
        fontSize: `${m.fontSize}px`,
        transform: `translate(calc(-50% + ${m.offest[0]}px), calc(-50% + ${m.offest[1]}px))`
      }));
      return x("text", {
        class: r.e("center-text"),
        style: {
          ...S.value
        }
      }, [y]);
    }, v = () => {
      if (e.maxLevel)
        return e.lineOption.map((d) => {
          let m = (1 - d.level / e.maxLevel) * c.value, p = d.text ? d.text.replace("{level}", String(d.level)) : d.level;
          return x(M, null, [x("path", {
            class: r.e("line"),
            d: `M 0 ${m},H ${s.value}`,
            fill: "none",
            "stroke-dasharray": "20 10",
            stroke: d.color,
            "stroke-width": 1
          }, null), x("text", {
            class: r.e("line-text"),
            x: s.value / 2,
            y: m,
            fill: d.color
          }, [p])]);
        });
    };
    return t.expose({
      resize: n
    }), () => x("div", {
      ref: l,
      class: r.b()
    }, [e.shape === "rect" ? i() : x("div", null, null), e.waterShape === "wave" ? o() : x("div", null, null), g()]);
  }
});
fe.install = function(e) {
  e.component(fe.name, fe);
};
const Nl = {
  title: "liquidChart 水位图",
  name: "liquidChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(fe);
  }
}, zl = [
  wt,
  xt,
  bt,
  Pt,
  Tt,
  Bt,
  Vt,
  Mt,
  Gt,
  jt,
  cl,
  Pl,
  Tl,
  Nl
], Bl = {
  version: "1.0.12",
  install(e) {
    zl.forEach((t) => e.use(t));
  }
};
export {
  se as BorderBox1,
  ce as BorderBox2,
  xe as DigitalScroll,
  $e as DynamicParticle,
  ke as FlightChart,
  fe as LiquidChart,
  ue as Loading1,
  de as Loading2,
  ne as Progress,
  me as ScreenContainer,
  be as ScrollRank,
  we as ScrollTable,
  pe as ScrollText,
  Se as VirtualList,
  Bl as default,
  zl as installs
};
