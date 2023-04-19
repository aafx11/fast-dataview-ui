import './style.css';
import { unref as b, getCurrentScope as Qe, onScopeDispose as Ge, watch as J, ref as A, onMounted as j, onUnmounted as Ue, nextTick as xe, defineComponent as F, computed as L, createVNode as S, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as H, createElementVNode as x, toDisplayString as z, reactive as Z, provide as ke, createCommentVNode as O, inject as Se, normalizeClass as K, getCurrentInstance as Oe, onBeforeUnmount as be, Fragment as M, renderList as Y, TransitionGroup as ze, withCtx as fe, normalizeProps as qe, guardReactiveProps as Ke, withDirectives as Ce, vShow as Pe, createStaticVNode as Ze, onBeforeMount as Je, onUpdated as je } from "vue";
function et(e, t) {
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
var Ie;
const He = typeof window < "u", tt = (e) => typeof e == "string", he = () => {
};
He && ((Ie = window == null ? void 0 : window.navigator) != null && Ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return typeof e == "function" ? e() : b(e);
}
function lt(e, t) {
  function l(...r) {
    return new Promise((d, c) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(d).catch(c);
    });
  }
  return l;
}
function rt(e, t = {}) {
  let l, r, d = he;
  const c = (s) => {
    clearTimeout(s), d(), d = he;
  };
  return (s) => {
    const i = ce(e), o = ce(t.maxWait);
    return l && c(l), i <= 0 || o !== void 0 && o <= 0 ? (r && (c(r), r = null), Promise.resolve(s())) : new Promise((a, h) => {
      d = t.rejectOnCancel ? h : a, o && !r && (r = setTimeout(() => {
        l && c(l), r = null, a(s());
      }, o)), l = setTimeout(() => {
        r && c(r), r = null, a(s());
      }, i);
    });
  };
}
function nt(e) {
  return e;
}
function it(e) {
  return Qe() ? (Ge(e), !0) : !1;
}
function st(e, t = 200, l = {}) {
  return lt(rt(t, l), e);
}
function ot(e) {
  var t;
  const l = ce(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const at = He ? window : void 0;
function ct(...e) {
  let t, l, r, d;
  if (tt(e[0]) || Array.isArray(e[0]) ? ([l, r, d] = e, t = at) : [t, l, r, d] = e, !t)
    return he;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const c = [], n = () => {
    c.forEach((a) => a()), c.length = 0;
  }, s = (a, h, g, y) => (a.addEventListener(h, g, y), () => a.removeEventListener(h, g, y)), i = J(() => [ot(t), ce(d)], ([a, h]) => {
    n(), a && c.push(...l.flatMap((g) => r.map((y) => s(a, g, y, h))));
  }, { immediate: !0, flush: "post" }), o = () => {
    i(), n();
  };
  return it(o), o;
}
const Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, De = "__vueuse_ssr_handlers__";
Le[De] = Le[De] || {};
var Te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Te || (Te = {}));
var ut = Object.defineProperty, Re = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, ft = Object.prototype.propertyIsEnumerable, Ae = (e, t, l) => t in e ? ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, ht = (e, t) => {
  for (var l in t || (t = {}))
    dt.call(t, l) && Ae(e, l, t[l]);
  if (Re)
    for (var l of Re(t))
      ft.call(t, l) && Ae(e, l, t[l]);
  return e;
};
const gt = {
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
ht({
  linear: nt
}, gt);
const le = (e, t, l, r) => {
  const d = A(0), c = A(0), n = A(0), s = A(0);
  let i, o = null, a = null;
  const h = (f = !0) => new Promise((m) => {
    xe(() => {
      a = e.value, d.value = e.value ? e.value.clientWidth : 0, c.value = e.value ? e.value.clientHeight : 0, n.value = a ? a.getBoundingClientRect().width : 0, s.value = a ? a.getBoundingClientRect().height : 0, e.value ? (!d.value || !c.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && f && t(), m(!0);
    });
  }), g = () => {
    o = et(a, i), ct(window, "resize", i);
  }, y = () => {
    o && (o.disconnect(), o.takeRecords(), o = null);
  }, k = async () => {
    await h(!1), i = st(h, 200), g(), typeof l == "function" && l();
  };
  return j(() => {
    k();
  }), Ue(() => {
    y();
  }), {
    width: d,
    height: c,
    afterWidth: n,
    afterHeight: s,
    initWH: h
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
}, Q = Object.assign, re = (e) => Array.isArray(e) && e.length, ue = (e) => Array.isArray(e) && e || [], X = (e) => e >= 0 ? e : 0, pt = (e, t, l = "reverse") => e.sort(yt(t, l)), yt = (e, t = "reverse") => function(l, r) {
  return l[e] < r[e] ? t === "normal" ? -1 : 1 : l[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, V = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
    e.hasOwnProperty(r) && (l[r] = V(e[r], t));
  return l;
}, Ee = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, ie = /* @__PURE__ */ F({
  name: "FBorderBox1",
  props: Fe,
  setup(e, {
    slots: t
  }) {
    const l = A(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let d = L(() => re(e.color) ? Q(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: s
    } = le(l);
    return {
      width: c,
      height: n,
      initWH: s,
      borderBox1: l,
      defaultColor: r,
      realColor: d
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: d,
      realColor: c,
      title: n
    } = this, s = 20;
    let i = d || 2, o = X(t - i - 2), a = X(l - i - 2);
    return S("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [S("svg", {
      class: "f-svg-container",
      width: o,
      height: a
    }, [S("polygon", {
      fill: r,
      stroke: c[0],
      "stroke-width": i,
      points: `
            ${s} ${i}, ${o - s} ${i}, ${o - i} ${s}, ${o - i} ${a - s}, ${o - s} ${a},
            ${s} ${a}, ${i} ${a - s}, ${i} ${s}
          `
    }, null), S("polyline", {
      stroke: c[1],
      "stroke-width": i + 1,
      points: `
            ${s - 8} 0,0 ${s - 8}
          `
    }, null), S("polyline", {
      stroke: c[1],
      "stroke-width": i + 1,
      points: `
            ${o} ${a - s + 8}, ${o - s + 8 + i} ${a}
          `
    }, null), S("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${s + 15}, ${i} ${s}, ${s} ${i} , ${s + 15} ${i}
          `
    }, null), S("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
           ${s + 15} ${a}, ${s}  ${a}, ${i} ${a - s}, ${i} ${a - s - 15}
          `
    }, null), S("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
           ${o - s - 15} ${i}, ${o - s} ${i}, ${o - i} ${s}, ${o - i} ${s + 15}
          `
    }, null), S("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
          ${o - s - 15} ${a}, ${o - s} ${a}, ${o - i} ${a - s}, ${o - i} ${a - s - 15}
          `
    }, null), n ? S("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${s} ${i}, ${o - s} ${i}, ${o - i} ${s}, ${o - i} ${s + 15}, ${i} ${s + 15},
            ${i} ${s}
          `
    }, null) : null, n ? S("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [n]) : null]), S("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
ie.install = function(e) {
  e.component(ie.name, ie);
};
const mt = {
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
    const l = A(null), r = ["white"];
    let d = L(() => re(e.color) ? Q(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: s
    } = le(l);
    return {
      width: c,
      height: n,
      initWH: s,
      borderBox2: l,
      defaultColor: r,
      realColor: d
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: d,
      realColor: c,
      duration: n,
      strokeDasharray: s
    } = this;
    let i = d || 3, o = X(i), a = X(i), h = X(t - i), g = X(i), y = X(t - i), k = X(l - i), f = X(i), m = X(l - i);
    return S("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [S("svg", {
      class: "f-svg-container",
      width: t,
      height: l
    }, [S("path", {
      class: "f-container-path",
      style: {
        "--duration": `${n}s`,
        "--border-stroke-dasharray": s
      },
      stroke: c[0],
      "stroke-width": i,
      fill: r,
      d: `M ${o} ${a}, L ${h} ${g}, L ${y} ${k}, L ${f} ${m}, Z`
    }, null)]), S("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
se.install = function(e) {
  e.component(se.name, se);
};
const vt = {
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
    const l = A(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let d = L(() => re(e.color) ? Q(r, e.color) : r);
    const {
      width: c,
      height: n,
      initWH: s
    } = le(l);
    return {
      width: c,
      height: n,
      initWH: s,
      loading1: l,
      defaultColor: r,
      realColor: d
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: l,
      duration: r
    } = this;
    return S("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${r}s`
      }
    }, [S("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [S("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), S("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), S("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [S("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), S("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), S("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [S("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), S("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), l ? S("div", {
      class: "f-loading-text",
      "data-text": l
    }, null) : null]);
  }
});
oe.install = function(e) {
  e.component(oe.name, oe);
};
const _t = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(oe);
  }
}, $t = F({
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
    let r = L(() => re(e.color) ? Q(l, e.color) : l);
    return {
      getLoadingStyle: L(() => ({
        width: e.width,
        height: e.height,
        color: r.value[2],
        "--border-color": r.value[0],
        "--border-top-color": r.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), Me = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, d] of t)
    l[r] = d;
  return l;
}, wt = /* @__PURE__ */ x(
  "div",
  { class: "f-loading-round" },
  null,
  -1
  /* HOISTED */
), xt = { class: "loading-text" };
function bt(e, t, l, r, d, c) {
  return v(), _(
    "div",
    {
      class: "f-loading-2",
      style: H(e.getLoadingStyle)
    },
    [
      wt,
      x("div", xt, [
        G(e.$slots, "default", {}, () => [
          x(
            "div",
            null,
            z(e.text),
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
const ae = /* @__PURE__ */ Me($t, [["render", bt]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const kt = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(ae);
  }
}, St = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, Ct = { class: "f-screen-container" }, ge = /* @__PURE__ */ F({
  __name: "index",
  props: St,
  setup(e) {
    const t = e, l = A(null), r = Z({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let d = A(1), c = A(1);
    ke("scaleX", d), ke("scaleY", c);
    const n = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: h, height: g } = window.screen;
      r.screenWidth = h, r.screenHeight = g;
    }, s = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, i = () => {
      const h = document.body.clientWidth, g = document.body.clientHeight, y = r.width || r.screenWidth, k = r.height || r.screenHeight, f = h / +y, m = g / +k;
      d.value = f, c.value = m, l.value.style.transform = `scale(${f}, ${m})`;
    };
    return le(l, () => {
      i();
    }, () => {
      n(), s(), i(), t.onAfterResize(), r.isReady = !0;
    }), (h, g) => (v(), _("div", Ct, [
      x(
        "div",
        {
          class: "f-screen-inner",
          ref_key: "screenContainer",
          ref: l
        },
        [
          r.isReady ? G(h.$slots, "default", { key: 0 }) : O("v-if", !0),
          O(" <slot></slot> ")
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
const Pt = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(ge);
  }
}, It = {
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
}, Lt = 30, Dt = 1 / Lt;
class pe {
  // 粒子的透明度
  constructor(t, l, r, d, c, n, s) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = d, this.time = c, this.radius = n, this.colors = s, this.opacity = 0;
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
  update(t, l, r, d) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && d) {
      let c = r - this.x, n = d - this.y, s = Math.sqrt(c ** 2 + n ** 2), i = t / s;
      i = i > 7 ? 7 : i;
      let o = Math.atan2(n, c), a = Math.cos(o), h = Math.sin(o), g = a * i * -l, y = h * i * -l;
      this.velocityX += g, this.velocityY += y;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Dt);
  }
  // 切换粒子
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const Be = 30;
class Tt {
  // 动画的id，用于停止动画
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, d = this.particleArr, c = d.length;
      for (let s = 0; s < r; s++) {
        const { targetX: i, targetY: o, colors: a } = l[s];
        d[s] ? d[s].change(i, o, a) : d[s] = new pe(this.width, this.height, i, o, Be, this.radius, a);
      }
      r < c && (this.particleArr = d.splice(0, r)), d = this.particleArr;
      let n = d.length;
      for (; n; ) {
        let s = ~~(Math.random() * n--), i = d[s], { targetX: o, targetY: a, colors: h } = i;
        i.targetX = d[n].targetX, i.targetY = d[n].targetY, i.colors = d[n].colors, d[n].targetX = o, d[n].targetY = a, d[n].colors = h;
      }
    } else
      this.particleArr = t.particleData.map((l) => new pe(this.width, this.height, l.targetX, l.targetY, Be, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const Rt = 30;
class Ne {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(t, l, r, d) {
    this.src = t, this.width = l, this.height = r, this.particleData = [], this.radius = d;
  }
  createParticleData(t = this.src) {
    return new Promise((l, r) => {
      let d = new Image();
      d.crossOrigin = "", d.src = decodeURI(new URL(t, import.meta.url).href), d.onload = () => {
        const c = document.createElement("canvas"), n = c.getContext("2d"), s = this.width, i = this.height;
        c.width = s, c.height = i, n == null || n.drawImage(d, 0, 0, s, i);
        const o = n == null ? void 0 : n.getImageData(0, 0, s, i).data;
        n == null || n.clearRect(0, 0, this.width, this.height);
        for (let a = 0; a < i; a += 5)
          for (let h = 0; h < s; h += 5) {
            const g = (h + a * s) * 4, y = o[g + 3];
            if (y == 0)
              continue;
            const k = o[g], f = o[g + 1], m = o[g + 2];
            if (k + f + m + y) {
              const R = new pe(this.width, this.height, h, a, Rt, this.radius, `rgba(${k},${f},${m},${y})`);
              this.particleData.push(R);
            }
          }
        l(this.particleData);
      }, d.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const At = ["width", "height"], ye = /* @__PURE__ */ F({
  __name: "index",
  props: It,
  setup(e, { expose: t }) {
    const l = e;
    let r = Se("scaleX", A(1)), d = Se("scaleY", A(1));
    const c = A(null), n = A(null);
    let s = A(), i = A();
    const o = async (h) => {
      i.value = new Ne(h, l.width, l.height, l.radius), await i.value.createParticleData(), s.value.changeImg(i.value);
    }, a = async () => {
      i.value = new Ne(l.src, l.width, l.height, l.radius), await i.value.createParticleData(), c.value && (n.value = c.value.getContext("2d"), s.value = new Tt(c.value, l.radius, l.strength), c.value.addEventListener("mousemove", (h) => {
        const { left: g, top: y } = c.value.getBoundingClientRect(), { clientX: k, clientY: f } = h;
        s.value.mouseX = (k - g) * (1 / r.value), s.value.mouseY = (f - y) * (1 / d.value);
      }), s.value.drawCanvas(), s.value.changeImg(i.value));
    };
    return j(() => {
      a();
    }), t({
      toggleImg: o
    }), (h, g) => (v(), _("div", null, [
      x("canvas", {
        ref_key: "canvasRef",
        ref: c,
        width: l.width,
        height: l.height
      }, null, 8, At)
    ]));
  }
});
ye.install = function(e) {
  e.component("FDynamicParticle", ye);
};
const Et = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "100%",
  install(e) {
    e.use(ye);
  }
};
function We(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, d, c, n, s) => {
      e.emit("cell-click", d, c, n, s, r);
    }
  };
}
function Bt(e, t, l) {
  const { handleToggle: r } = We(l), d = (g) => {
    let y = ue(g);
    return V(y);
  }, c = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, n = async (g, y, k) => {
    let f = k;
    y.map((m) => m._index_ = ++f), e.currData.length ? g === t.pageSize ? e.currData = [...y] : (e.currData.push(...y), e.currData.splice(0, g)) : e.currData.push(...y);
  }, s = async () => {
    if (e.tableData.length) {
      a(!1, !0), e.isEmpty = !1;
      let g;
      t.mode === "single" ? g = t.togglePage : g = t.pageSize;
      let y, k;
      e.currPage === 1 ? (y = 0, k = t.pageSize) : (y = g * (e.currPage - 2) + t.pageSize, k = g * (e.currPage - 1) + t.pageSize);
      let f = e.tableData.slice(y, k);
      f.length ? e.currPage === 1 && e.toggleCount === 0 ? n(t.pageSize, f, y) : e.currPage === 1 ? await n(t.pageSize, f, y) : await n(g, f, y) : (e.currPage = 1, c(), s()), i();
    } else
      a(), e.currPage = 1, e.currData = [], e.isEmpty = !0, o();
  }, i = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, s();
    }, t.toggleDur));
  }, o = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      r(t.name);
    }, t.emptyEmitDur));
  }, a = (g = !0, y = !0) => {
    e.intervalId && g && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && y && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: d,
    setCurrData: s,
    setPageInterval: i,
    setEmptyTimeout: o,
    clearTimer: a,
    setPage: (g = 1) => {
      a(), e.currPage = g;
      let y;
      t.mode === "single" ? y = t.togglePage : y = t.pageSize;
      let k = y * (e.currPage - 1), f = y * (e.currPage - 1) + t.pageSize, m = e.tableData.slice(k, f);
      m.length ? (n(t.pageSize, m, k), i()) : s(), e.tableData.length || o();
    }
  };
}
function Nt(e, t) {
  const l = L(() => function(o, a) {
    const h = ["f-scroll-table__row"];
    return t.stripe && a % 2 === 1 && h.push("f-scroll-table_row--striped"), h;
  }), r = L(() => {
    const o = ["cell"];
    return t.wrap ? o.push("cell--wrap") : o.push("cell--nowrap"), o;
  }), d = L(() => function(o) {
    let a = o.reduce((h, g) => h += g.width, 0);
    return {
      width: `${a}px`,
      "max-width": `${a}px`
    };
  }), c = L(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), n = L(() => function(o) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), s = L(() => function(o) {
    return {
      width: `${o.width}px`,
      "max-width": `${o.width}px`,
      "text-align": o.align || t.align || "start"
    };
  }), i = L(() => function(o, a, h, g) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: h,
      columnIndex: g,
      row: o,
      column: a
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: r,
    getTableStyle: d,
    getBodyStyle: c,
    getRowStyle: n,
    getExtraCellStyle: s,
    getCellStyle: i
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
    const t = e, l = A(), r = A(), d = L(() => {
      var g, y, k, f;
      let c = ((g = l.value) == null ? void 0 : g.offsetWidth) || 0, n = ((y = l.value) == null ? void 0 : y.offsetHeight) || 0, s = ((k = r.value) == null ? void 0 : k.offsetWidth) || 0, i = ((f = r.value) == null ? void 0 : f.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && i < n || ["left", "right"].includes(t.direction) && s < c))
        return {
          "--text-scroll-width": `${c}px`,
          "--text-scroll-height": `${n}px`,
          animation: ""
        };
      let o, a, h;
      return ["up", "down"].includes(t.direction) && (o = n + i, a = o / t.speed || 0, h = `up-scroll linear ${a}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (o = c + s, a = o / t.speed || 0, h = `left-scroll linear ${a}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${c}px`,
        "--text-scroll-height": `${n}px`,
        animation: h
      };
    });
    return (c, n) => (v(), _(
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
            style: H(b(d))
          },
          [
            G(c.$slots, "default")
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
const Ot = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(de);
  }
}, zt = {
  class: "f-scroll-table__head"
}, Ht = ["onClick"], Ft = {
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
    }), d = Oe(), c = A(), {
      deepCloneArr: n,
      setCurrData: s,
      setPageInterval: i,
      setEmptyTimeout: o,
      clearTimer: a,
      setPage: h
    } = Bt(r, l, d), {
      handleCellClick: g
    } = We(d), {
      getRowClass: y,
      getCellClass: k,
      getTableStyle: f,
      getBodyStyle: m,
      getRowStyle: P,
      getExtraCellStyle: R,
      getCellStyle: p
    } = Nt(r, l), T = (C) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr";
    }, u = (C, B) => {
      C.offsetWidth, C.style.opacity = "1", C.style.gridTemplateRows = "1fr", B();
    }, w = async (C) => {
      C.style.opacity = "1";
    }, $ = async (C, B) => {
      C.style.opacity = "0", C.style.gridTemplateRows = "0fr", await new Promise((I) => {
        setTimeout(() => {
          C.remove(), I(!0);
        }, l.pageAnimateDur);
      }), B();
    };
    return J(() => l.data, (C) => {
      r.tableData = n(C), s();
    }, {
      immediate: !0,
      deep: !0
    }), j(() => {
      l.mouseEvent && (c.value.addEventListener("mouseenter", () => {
        a(!0, !0), r.isStopToggle = !0;
      }), c.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? i() : o();
      }));
    }), be(() => {
      a();
    }), t({
      setPage: h
    }), (C, B) => (v(), _(
      "div",
      {
        ref: "scrollTable",
        class: K(["f-scroll-table", {
          "is-border": l.border
        }]),
        style: H(b(f)(l.columns))
      },
      [x("div", zt, [(v(!0), _(
        M,
        null,
        Y(l.columns, (I, E) => (v(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: H(b(R)(I)),
            key: E
          },
          z(I.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), x(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: c,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: H(b(m))
        },
        [S(ze, {
          tag: "div",
          css: !1,
          onBeforeEnter: T,
          onEnter: u,
          onBeforeLeave: w,
          onLeave: $
        }, {
          default: fe(() => [(v(!0), _(
            M,
            null,
            Y(r.currData, (I, E) => (v(), _("div", {
              class: "f-scroll-table__row-wrap",
              key: I
            }, [x(
              "div",
              {
                class: K(b(y)(I, E))
              },
              [(v(!0), _(
                M,
                null,
                Y(l.columns, (D, W) => (v(), _("div", {
                  class: "f-scroll-table__cell",
                  style: H([b(R)(D), b(p)(I, D.type === "index" ? "_index_" : D.prop, E, W)]),
                  key: `${I[D.prop]}${W}`,
                  onClick: (U) => b(g)(U, I, I[D.prop], E, W)
                }, [D.type === "index" ? (v(), _(
                  "div",
                  {
                    key: 0,
                    class: K(b(k))
                  },
                  z(I._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : D.type === "scroll" ? (v(), _("div", Ft, [S(
                  b(de),
                  qe(Ke(D.scrollOption)),
                  {
                    default: fe(() => [x(
                      "div",
                      null,
                      z(I[D.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : D.slot ? (v(), _(
                  "div",
                  {
                    key: 2,
                    class: K(b(k))
                  },
                  [G(C.$slots, D.slot, {
                    params: {
                      row: I,
                      column: D.prop,
                      $index: E
                    }
                  })],
                  2
                  /* CLASS */
                )) : (v(), _(
                  "div",
                  {
                    key: 3,
                    class: K(b(k))
                  },
                  z(I[D.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, Ht))),
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
const Mt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(me);
  }
}, Wt = F({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = L(() => re(e.color) ? Q(l, e.color) : l);
    return {
      getProgressStyle: L(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Xt(e, t, l, r, d, c) {
  return v(), _(
    "div",
    {
      class: "f-progress",
      style: H(e.getProgressStyle)
    },
    [
      x(
        "div",
        {
          class: "progress-inner",
          style: H({ width: `${e.percent}%` })
        },
        [
          G(e.$slots, "default", { percent: e.percent }, () => [
            x(
              "span",
              null,
              z(e.percent ? `${e.percent}%` : ""),
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
const te = /* @__PURE__ */ Me(Wt, [["render", Xt]]);
te.install = function(e) {
  e.component(te.name, te);
};
const Yt = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(te);
  }
}, Vt = { class: "f-digital-scroll" }, Qt = { class: "f-digital-scroll__list" }, Gt = { class: "f-digital-scroll__point" }, ve = /* @__PURE__ */ F({
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
      let n = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`), i = Number(c.toString().match(n)).toString(), o = i.indexOf(".");
      for (o < 0 && (o = i.length, i += "."); i.length <= o + t.digit; )
        i += "0";
      return i.split("");
    }, d = L(() => function(c) {
      return {
        top: `-${Number(c) * 100}%`
      };
    });
    return j(() => {
      l.stringList = r(t.number);
    }), J(
      () => t.number,
      (c) => {
        l.stringList = r(t.number);
      }
    ), (c, n) => (v(), _("div", Vt, [
      x("div", Qt, [
        (v(!0), _(
          M,
          null,
          Y(b(l).stringList, (s, i) => (v(), _(
            "div",
            {
              class: K(["f-digital-scroll__item", { "is-small": s === "." }]),
              key: i
            },
            [
              Ce(x(
                "div",
                Gt,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [Pe, s === "."]
              ]),
              Ce(x(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: H(b(d)(s))
                },
                [
                  (v(), _(
                    M,
                    null,
                    Y(10, (o, a) => x(
                      "div",
                      {
                        class: "f-digital-scroll__digital-item",
                        key: a
                      },
                      z(a),
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
                [Pe, s !== "."]
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
const Ut = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ve);
  }
}, qt = { class: "f-scroll-rank" }, Kt = { class: "f-scroll-rank__item-wrap" }, Zt = { class: "f-scroll-rank__item-info" }, Jt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, jt = { class: "f-scroll-rank__item-name" }, el = { class: "f-scroll-rank__item-info-right" }, tl = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, ll = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, rl = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, nl = { class: "f-scroll-rank__item-progress" }, _e = /* @__PURE__ */ F({
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
    const t = e, l = A();
    let r = Z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const d = (f) => {
      let m = V(ue(f)), P = [];
      t.order === "default" ? P = m : P = pt(m, "value", t.order), typeof t.valueFormatter == "function" && (P = P.map((R, p) => {
        var T;
        return R.formattedValue = (T = t.valueFormatter) == null ? void 0 : T.call(null, {
          name: R.name,
          value: R.value,
          maxValue: o.value,
          index: p
        }), R;
      })), r.dataList = P;
    }, c = async (f, m, P) => {
      let R = P;
      m.map((p) => p._index_ = ++R), r.currList.length ? f === t.pageSize ? r.currList = [...m] : (r.currList.push(...m), r.currList.splice(0, f)) : r.currList.push(...m), xe(() => {
        l.value && (l.value.style.maxHeight = `${l.value.getBoundingClientRect().height}px`, l.value.style.height = `${l.value.getBoundingClientRect().height}px`);
      });
    }, n = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let f;
        t.togglePage >= t.pageSize ? f = t.pageSize : f = t.togglePage;
        let m, P;
        r.currPage === 1 ? (m = 0, P = t.pageSize) : (m = f * (r.currPage - 2) + t.pageSize, P = f * (r.currPage - 1) + t.pageSize);
        let R = r.dataList.slice(m, P);
        R.length ? r.currPage === 1 ? await c(t.pageSize, R, m) : await c(f, R, m) : (r.currPage = 1, n()), s();
      } else
        i(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, s = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, n();
      }, t.toggleDur));
    }, i = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, o = L(() => {
      var f, m;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((f = r.currList.at(-1)) == null ? void 0 : f.value) || 0 : ((m = r.currList[0]) == null ? void 0 : m.value) || 0;
    }), a = L(() => function(f) {
      let m, P = o.value;
      m = f / P;
      const R = (p, T) => Math.round(p * Math.pow(10, T)) / Math.pow(10, T);
      return typeof m == "number" ? R(m * 100, 1) : 0;
    }), h = (f) => {
      f.style.opacity = "0", f.style.gridTemplateRows = "0fr";
    }, g = (f, m) => {
      f.offsetWidth, f.style.opacity = "1", f.style.gridTemplateRows = "1fr", m();
    }, y = async (f) => {
      f.style.opacity = "1", f.style.margin = "0";
    }, k = async (f, m) => {
      f.style.opacity = "0", f.style.margin = "0", f.style.gridTemplateRows = "0fr", await new Promise((P) => {
        setTimeout(() => {
          f.remove(), P(!0);
        }, t.toggleDuration);
      }), m();
    };
    return be(() => {
      i();
    }), J(
      () => t.data,
      (f) => {
        d(f), n();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (f, m) => (v(), _("div", qt, [
      x(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: l,
          style: H({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          S(ze, {
            tag: "div",
            css: !1,
            onBeforeEnter: h,
            onEnter: g,
            onBeforeLeave: y,
            onLeave: k
          }, {
            default: fe(() => [
              (v(!0), _(
                M,
                null,
                Y(b(r).currList, (P, R) => (v(), _("div", {
                  class: "f-scroll-rank__item",
                  key: P
                }, [
                  x("div", Kt, [
                    x("div", Zt, [
                      t.showRank ? (v(), _(
                        "span",
                        Jt,
                        z(`NO.${P._index_}`),
                        1
                        /* TEXT */
                      )) : O("v-if", !0),
                      x(
                        "span",
                        jt,
                        z(P.name || ""),
                        1
                        /* TEXT */
                      ),
                      x("div", el, [
                        t.showPercent ? (v(), _(
                          "span",
                          tl,
                          z(`${b(a)(P.value)}%`),
                          1
                          /* TEXT */
                        )) : O("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (v(), _(
                          "span",
                          ll,
                          z(`${P.value} / ${b(o)}`),
                          1
                          /* TEXT */
                        )) : O("v-if", !0),
                        typeof t.valueFormatter == "function" ? (v(), _(
                          "span",
                          rl,
                          z(`${P.formattedValue}`),
                          1
                          /* TEXT */
                        )) : O("v-if", !0)
                      ])
                    ]),
                    x("div", nl, [
                      S(b(te), {
                        percent: b(a)(P.value),
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
const il = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, sl = {
  width: "100%",
  height: "100%"
}, ol = /* @__PURE__ */ Ze('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), al = ["id", "cx", "cy"], cl = ["values", "dur"], ul = ["dur"], dl = ["id"], fl = ["xlink:href"], hl = ["xlink:href", "fill", "mask"], gl = ["fill", "x", "y"], pl = ["href", "width", "height", "x", "y"], yl = ["id", "d"], ml = ["id"], vl = ["r"], _l = ["dur", "path"], $l = ["xlink:href", "stroke-width", "stroke"], wl = ["xlink:href", "stroke-width", "stroke", "mask"], xl = ["from", "to", "dur"], bl = { key: 2 }, $e = /* @__PURE__ */ F({
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
    const t = e, l = A();
    let r;
    j(() => {
      r = Oe();
    });
    const d = Z({
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
    }), n = (p) => {
      let { offsetX: T, offsetY: u } = p;
      const w = (T / o.value).toFixed(2), $ = (u / a.value).toFixed(2);
      r == null || r.emit("chart-click", w, $, p);
    }, s = () => {
      h(), g();
    }, i = () => {
      h(), g();
    }, { width: o, height: a } = le(l, s, i), h = () => {
      let p = V(ue(t.points));
      c.points = p.map((T, u) => ({
        ...T,
        halo: Q({}, d.halo, V(t.halo), T.halo),
        title: Q({}, d.title, V(t.title), T.title),
        icon: Q({}, d.icon, V(t.icon), T.icon),
        key: `${T.coordinate.toString()}${u}`
      }));
    }, g = () => {
      let p = V(ue(t.paths));
      c.paths = p.map((T, u) => {
        var ne, q;
        let { source: w, route: $, target: C, line: B } = T, I = Q({}, d.line, V(t.line), B), E = (ne = c.points.find(({ name: N }) => N === w)) == null ? void 0 : ne.coordinate, D = (q = c.points.find(({ name: N }) => N === C)) == null ? void 0 : q.coordinate, W = $ ? [E, ...$, D] : [E, D];
        W = W.filter((N) => N !== void 0);
        let U = [];
        for (let N = 0; N < W.length - 1; N++) {
          let Xe = W[N], ee = y(Xe, W[N + 1], I.k, I.curvature), Ye = `M${ee[0].toString()} Q${ee[1].toString()} ${ee[2].toString()}`, Ve = `${ee.toString()}`;
          U.push({ path: ee, d: Ye, key: Ve });
        }
        return {
          ...T,
          line: I,
          routeList: U
        };
      });
    }, y = (p, T, u, w) => {
      let [$, C] = p, [B, I] = T;
      const [E, D] = [($ + B) / 2, (C + I) / 2];
      let U = Ee([$, C], [B, I]) / w, ne = U / 2, [q, N] = [E, D];
      do
        q += ne, N = k(u, [E, D], q)[1];
      while (Ee([E, D], [q, N]) < U);
      return [p, [q, N], T];
    };
    function k(p, [T, u], w) {
      const $ = u - p * T + p * w;
      return [w, $];
    }
    let f = L(() => function(p) {
      return `M${p[0][0] * o.value},${p[0][1] * a.value} 
    Q${p[1][0] * o.value},${p[1][1] * a.value} 
    ${p[2][0] * o.value},${p[2][1] * a.value}`;
    }), m = L(() => function(p) {
      return `M${p[0][0] * o.value},${p[0][1] * a.value} 
    Q${p[1][0] * o.value},${p[1][1] * a.value} 
    ${p[2][0] * o.value},${p[2][1] * a.value}`;
    }), P = L(() => function(p) {
      return {
        x1: p[0][0] * o.value,
        y1: p[0][1] * a.value,
        x2: p[1][0] * o.value,
        y2: p[1][1] * a.value,
        x3: p[2][0] * o.value,
        y3: p[2][1] * a.value
      };
    });
    L(() => function(p) {
      return `"M${p[0][0] * o.value},${p[0][1] * a.value} Q${p[1][0] * o.value},${p[1][1] * a.value} ${p[2][0] * o.value},${p[2][1] * a.value}"`;
    });
    let R = L(() => function(p) {
      return r ? r.proxy.$refs[p][0].getTotalLength() : 0;
    });
    return J(() => t, (p) => {
      h(), g();
    }, {
      deep: !0,
      immediate: !0
    }), (p, T) => (v(), _(
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
            style: H(`background-image: url(${t.bgUrl})`),
            onClick: n
          },
          [
            (v(), _("svg", sl, [
              ol,
              (v(!0), _(
                M,
                null,
                Y(c.points, (u, w) => (v(), _("g", {
                  key: u.key
                }, [
                  x("defs", null, [
                    u.halo.show ? (v(), _("circle", {
                      key: 0,
                      id: `halo${u.key}`,
                      cx: u.coordinate[0] * b(o),
                      cy: u.coordinate[1] * b(a)
                    }, [
                      x("animate", {
                        attributeName: "r",
                        values: `1;${u.halo.radius}`,
                        dur: `${u.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, cl),
                      x("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${u.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, ul)
                    ], 8, al)) : O("v-if", !0),
                    x("mask", {
                      id: `mask${u.key}`
                    }, [
                      x("use", {
                        "xlink:href": `#halo${u.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, fl)
                    ], 8, dl)
                  ]),
                  u.halo.show ? (v(), _("use", {
                    key: 0,
                    "xlink:href": `#halo${u.key}`,
                    fill: u.halo.color,
                    mask: `url(#mask${u.key})`
                  }, null, 8, hl)) : O("v-if", !0),
                  u.title.show ? (v(), _("text", {
                    key: 1,
                    class: "point__title",
                    style: H({ fontSize: `${u.title.fontSize}px` }),
                    fill: u.title.color,
                    x: u.coordinate[0] * b(o) + u.title.offest[0],
                    y: u.coordinate[1] * b(a) + u.title.offest[1]
                  }, z(u.name), 13, gl)) : O("v-if", !0),
                  u.icon.show ? (v(), _("image", {
                    key: 2,
                    class: "point__icon",
                    href: u.icon.url,
                    width: u.icon.width,
                    height: u.icon.height,
                    x: u.coordinate[0] * b(o) - u.icon.width / 2,
                    y: u.coordinate[1] * b(a) - u.icon.height / 2
                  }, null, 8, pl)) : O("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (v(!0), _(
                M,
                null,
                Y(c.paths, (u, w) => (v(), _(
                  M,
                  null,
                  [
                    (v(!0), _(
                      M,
                      null,
                      Y(u.routeList, ($, C) => (v(), _("g", null, [
                        x("defs", null, [
                          x("path", {
                            id: $.key,
                            ref_for: !0,
                            ref: $.key,
                            d: b(f)($.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, yl),
                          u.line.show && !u.line.slot ? (v(), _("mask", {
                            key: 0,
                            id: `mask${$.key}`
                          }, [
                            x("circle", {
                              cx: "0",
                              cy: "0",
                              r: u.line.radius,
                              fill: "url(#lineGradient)"
                            }, [
                              x("animateMotion", {
                                dur: `${u.line.duration}ms`,
                                path: b(f)($.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, _l)
                            ], 8, vl)
                          ], 8, ml)) : O("v-if", !0)
                        ]),
                        u.line.show ? (v(), _("use", {
                          key: 0,
                          "xlink:href": `#${$.key}`,
                          "stroke-width": u.line.width,
                          stroke: u.line.orbitColor
                        }, null, 8, $l)) : O("v-if", !0),
                        u.line.show && !u.line.slot ? (v(), _("use", {
                          key: 1,
                          "xlink:href": `#${$.key}`,
                          "stroke-width": u.line.width,
                          stroke: u.line.color,
                          mask: `url(#mask${$.key})`
                        }, [
                          x("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${b(R)($.key)}`,
                            to: `${b(R)($.key)}, 0`,
                            dur: `${u.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, xl)
                        ], 8, wl)) : O("v-if", !0),
                        u.line.show && u.line.slot ? (v(), _("g", bl, [
                          G(p.$slots, u.line.slot, {
                            path: b(m)($.path),
                            pathArr: b(P)($.path),
                            totalLength: b(R)($.key),
                            line: u.line
                          })
                        ])) : O("v-if", !0)
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
const kl = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, Sl = {
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
  },
  // 是否开启滚动事件
  autoScroll: {
    type: Boolean,
    default: !1
  },
  // 每次滚动多少行
  scrollRow: {
    type: Number
  },
  // 每次滚动的距离
  scrollDistance: {
    type: Number
  },
  // 滚动间隔
  scrollInterval: {
    type: Number,
    default: 100
  }
}, Cl = ["id"], we = /* @__PURE__ */ F({
  __name: "index",
  props: Sl,
  setup(e) {
    const t = e, l = A(null), r = A(null), d = A(null), c = A(null), n = Z({
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
    Je(() => {
      s();
    }), j(() => {
      n.screenHeight = l.value.clientHeight, n.start = 0, n.end = n.start + h.value, R(), T();
    }), je(() => {
      xe(() => {
        var w, $;
        if (!c.value || !((w = c.value) != null && w.length))
          return;
        m();
        let u = ($ = n.positions.at(-1)) == null ? void 0 : $.bottom;
        r.value.style.height = `${u}px`, f();
      });
    }), be(() => {
      p();
    }), J(() => t.data, () => {
      s();
    });
    const s = () => {
      n.positions = t.data.map((u, w) => ({
        index: w,
        height: t.estimatedItemSize,
        top: w * t.estimatedItemSize,
        bottom: (w + 1) * t.estimatedItemSize
      }));
    }, i = (u = 0) => o(n.positions, u), o = (u, w) => {
      let $ = 0, C = u.length - 1, B = null;
      for (; $ <= C; ) {
        let I = parseInt(($ + C) / 2 + ""), E = u[I].bottom;
        if (E === w)
          return I + 1;
        E < w ? $ = I + 1 : E > w && ((B === null || B > I) && (B = I), C = C - 1);
      }
      return B;
    }, a = L(() => t.data.map((u, w) => ({
      _index_: w,
      ...u
    }))), h = L(() => Math.ceil(n.screenHeight / t.estimatedItemSize)), g = L(() => Math.min(n.start, t.bufferScale * h.value)), y = L(() => Math.min(t.data.length - n.end, t.bufferScale * h.value)), k = L(() => {
      let u = n.start - g.value, w = n.end + y.value;
      return a.value.slice(u, w);
    }), f = () => {
      let u = 0;
      if (n.start >= 1) {
        let w = n.positions[n.start].top - (n.positions[n.start - g.value] ? n.positions[n.start - g.value].top : 0);
        u = n.positions[n.start - 1].bottom - w;
      } else
        u = 0;
      d.value.style.transform = `translate3d(0,${u}px,0)`;
    }, m = () => {
      if (c.value)
        for (let u = 0; u < c.value.length; u++) {
          let w = c.value[u], C = w.getBoundingClientRect().height, B = +w.id, E = n.positions[B].height - C;
          if (E) {
            n.positions[B].bottom = n.positions[B].bottom - E, n.positions[B].height = C;
            for (let D = B + 1; D < n.positions.length; D++)
              n.positions[D].top = n.positions[D - 1].bottom, n.positions[D].bottom = n.positions[D].bottom - E;
          }
        }
    }, P = () => {
      let u = l.value.scrollTop;
      n.start = i(u), n.end = n.start + h.value, f();
    }, R = () => {
      n.intervalID === null && t.autoScroll && !n.isMouseHover && (console.log("添加自动滚动"), n.intervalID = setInterval(() => {
        if (l.value) {
          let u = t.scrollDistance || n.positions[n.start].height;
          if (t.scrollDistance && (u = t.scrollDistance), t.scrollRow) {
            let w = 0;
            for (let $ = 0; $ < t.scrollRow; $++)
              ;
            u = w;
          }
          l.value.scrollTo({
            top: l.value.scrollTop + u,
            behavior: "smooth"
          });
        }
      }, t.scrollInterval));
    }, p = () => {
      n.intervalID && (clearInterval(n.intervalID), n.intervalID = null);
    }, T = () => {
      l.value && (l.value.addEventListener("mouseenter", () => {
        p(), n.isMouseHover = !0;
      }), l.value.addEventListener("mouseleave", () => {
        n.isMouseHover = !1, R();
      }));
    };
    return (u, w) => (v(), _(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: l,
        style: H({ height: u.height }),
        onScroll: w[0] || (w[0] = ($) => P())
      },
      [
        x(
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
        x(
          "div",
          {
            class: "f-virtual-list__content",
            ref_key: "virtualList__content",
            ref: d
          },
          [
            (v(!0), _(
              M,
              null,
              Y(b(k), ($) => (v(), _("div", {
                class: "f-virtual-list__item",
                ref_for: !0,
                ref_key: "virtualList__item",
                ref: c,
                id: `${$._index_}`
              }, [
                G(u.$slots, "default", {
                  ref_for: !0,
                  ref: "slot",
                  item: $
                })
              ], 8, Cl))),
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
we.install = function(e) {
  e.component("FVirtualList", we);
};
const Pl = {
  title: "virtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(we);
  }
}, Il = [
  mt,
  vt,
  _t,
  kt,
  Pt,
  Et,
  Mt,
  Ot,
  Yt,
  Ut,
  il,
  kl,
  Pl
], Dl = {
  version: "1.0.12",
  install(e) {
    Il.forEach((t) => e.use(t));
  }
};
export {
  ie as BorderBox1,
  se as BorderBox2,
  ve as DigitalScroll,
  ye as DynamicParticle,
  $e as FlightChart,
  oe as Loading1,
  ae as Loading2,
  te as Progress,
  ge as ScreenContainer,
  _e as ScrollRank,
  me as ScrollTable,
  de as ScrollText,
  we as VirtualList,
  Dl as default,
  Il as installs
};
