import './style.css';
import { getCurrentScope as Me, onScopeDispose as Xe, unref as x, watch as ee, ref as L, onMounted as te, onUnmounted as Ye, nextTick as Ve, defineComponent as N, computed as P, createVNode as k, renderSlot as Q, openBlock as _, createElementBlock as $, normalizeStyle as z, createElementVNode as w, toDisplayString as E, reactive as Z, provide as xe, createCommentVNode as B, inject as ke, normalizeClass as q, getCurrentInstance as Ee, onBeforeUnmount as Qe, Fragment as H, renderList as V, TransitionGroup as Ae, withCtx as ue, normalizeProps as Ge, guardReactiveProps as Ue, withDirectives as be, vShow as Se, createStaticVNode as qe } from "vue";
function Ke(e, t) {
  const l = window.MutationObserver, r = new l(t);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var Ce;
const Oe = typeof window < "u", Ze = (e) => typeof e == "string", de = () => {
};
Oe && ((Ce = window == null ? void 0 : window.navigator) != null && Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function he(e) {
  return typeof e == "function" ? e() : x(e);
}
function Je(e, t) {
  function l(...r) {
    return new Promise((c, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(c).catch(a);
    });
  }
  return l;
}
function je(e, t = {}) {
  let l, r, c = de;
  const a = (i) => {
    clearTimeout(i), c(), c = de;
  };
  return (i) => {
    const n = he(e), s = he(t.maxWait);
    return l && a(l), n <= 0 || s !== void 0 && s <= 0 ? (r && (a(r), r = null), Promise.resolve(i())) : new Promise((o, y) => {
      c = t.rejectOnCancel ? y : o, s && !r && (r = setTimeout(() => {
        l && a(l), r = null, o(i());
      }, s)), l = setTimeout(() => {
        r && a(r), r = null, o(i());
      }, n);
    });
  };
}
function et(e) {
  return e;
}
function tt(e) {
  return Me() ? (Xe(e), !0) : !1;
}
function lt(e, t = 200, l = {}) {
  return Je(je(t, l), e);
}
function rt(e) {
  var t;
  const l = he(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const nt = Oe ? window : void 0;
function it(...e) {
  let t, l, r, c;
  if (Ze(e[0]) || Array.isArray(e[0]) ? ([l, r, c] = e, t = nt) : [t, l, r, c] = e, !t)
    return de;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const a = [], u = () => {
    a.forEach((o) => o()), a.length = 0;
  }, i = (o, y, g) => (o.addEventListener(y, g, c), () => o.removeEventListener(y, g, c)), n = ee(() => rt(t), (o) => {
    u(), o && a.push(...l.flatMap((y) => r.map((g) => i(o, y, g))));
  }, { immediate: !0, flush: "post" }), s = () => {
    n(), u();
  };
  return tt(s), s;
}
const fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
fe[ge] = fe[ge] || {};
fe[ge];
var Pe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Pe || (Pe = {}));
var st = Object.defineProperty, Ie = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, at = Object.prototype.propertyIsEnumerable, Le = (e, t, l) => t in e ? st(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, ct = (e, t) => {
  for (var l in t || (t = {}))
    ot.call(t, l) && Le(e, l, t[l]);
  if (Ie)
    for (var l of Ie(t))
      at.call(t, l) && Le(e, l, t[l]);
  return e;
};
const ut = {
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
ct({
  linear: et
}, ut);
const le = (e, t, l, r) => {
  const c = L(0), a = L(0), u = L(0), i = L(0);
  let n, s = null, o = null;
  const y = (f = !0) => new Promise((v) => {
    Ve(() => {
      o = e.value, c.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = o ? o.getBoundingClientRect().width : 0, i.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!c.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && f && t(), v(!0);
    });
  }), g = () => {
    s = Ke(o, n), it(window, "resize", n);
  }, m = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, d = async () => {
    await y(!1), n = lt(y, 200), g(), typeof l == "function" && l();
  };
  return te(() => {
    d();
  }), Ye(() => {
    m();
  }), {
    width: c,
    height: a,
    afterWidth: u,
    afterHeight: i,
    initWH: y
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
}, Y = Object.assign, re = (e) => Array.isArray(e) && e.length, ae = (e) => Array.isArray(e) && e || [], W = (e) => e >= 0 ? e : 0, dt = (e, t, l = "reverse") => e.sort(ht(t, l)), ht = (e, t = "reverse") => function(l, r) {
  return l[e] < r[e] ? t === "normal" ? -1 : 1 : l[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, X = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
    e.hasOwnProperty(r) && (l[r] = X(e[r], t));
  return l;
}, Te = (e, t) => {
  const l = Math.abs(e[0] - t[0]), r = Math.abs(e[1] - t[1]);
  return Math.sqrt(l * l + r * r);
}, ne = /* @__PURE__ */ N({
  name: "FBorderBox1",
  props: Be,
  setup(e, {
    slots: t
  }) {
    const l = L(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = P(() => re(e.color) ? Y(r, e.color) : r);
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
    let n = c || 2, s = W(t - n - 2), o = W(l - n - 2);
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
    }, [Q(e, "default")])]);
  }
});
ne.install = function(e) {
  e.component(ne.name, ne);
};
const ft = {
  title: "border-01 边框",
  name: "border01",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ne);
  }
}, ie = /* @__PURE__ */ N({
  name: "FBorderBox2",
  props: Be,
  setup(e, {
    slots: t
  }) {
    const l = L(null), r = ["white"];
    let c = P(() => re(e.color) ? Y(r, e.color) : r);
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
    let n = c || 3, s = W(n), o = W(n), y = W(t - n), g = W(n), m = W(t - n), d = W(l - n), f = W(n), v = W(l - n);
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
      d: `M ${s} ${o}, L ${y} ${g}, L ${m} ${d}, L ${f} ${v}, Z`
    }, null)]), k("div", {
      class: "f-border-box-content"
    }, [Q(e, "default")])]);
  }
});
ie.install = function(e) {
  e.component(ie.name, ie);
};
const gt = {
  title: "border-02 边框",
  name: "border02",
  category: "边框",
  status: "100%",
  install(e) {
    e.use(ie);
  }
}, se = /* @__PURE__ */ N({
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
    let c = P(() => re(e.color) ? Y(r, e.color) : r);
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
se.install = function(e) {
  e.component(se.name, se);
};
const yt = {
  title: "loading-01 加载",
  name: "loading01",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(se);
  }
}, pt = N({
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
    let r = P(() => re(e.color) ? Y(l, e.color) : l);
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
}), ze = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, c] of t)
    l[r] = c;
  return l;
}, mt = /* @__PURE__ */ w("div", { class: "f-loading-round" }, null, -1), vt = { class: "loading-text" };
function _t(e, t, l, r, c, a) {
  return _(), $("div", {
    class: "f-loading-2",
    style: z(e.getLoadingStyle)
  }, [
    mt,
    w("div", vt, [
      Q(e.$slots, "default", {}, () => [
        w("div", null, E(e.text), 1)
      ])
    ])
  ], 4);
}
const oe = /* @__PURE__ */ ze(pt, [["render", _t]]);
oe.install = function(e) {
  e.component(oe.name, oe);
};
const $t = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(e) {
    e.use(oe);
  }
}, wt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, xt = { class: "f-screen-container" }, ye = /* @__PURE__ */ N({
  name: "index",
  props: wt,
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
    xe("scaleX", c), xe("scaleY", a);
    const u = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: y, height: g } = window.screen;
      r.screenWidth = y, r.screenHeight = g;
    }, i = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, n = () => {
      const y = document.body.clientWidth, g = document.body.clientHeight, m = r.width || r.screenWidth, d = r.height || r.screenHeight, f = y / +m, v = g / +d;
      c.value = f, a.value = v, l.value.style.transform = `scale(${f}, ${v})`;
    };
    return le(l, () => {
      n();
    }, () => {
      u(), i(), n(), t.onAfterResize(), r.isReady = !0;
    }), (y, g) => (_(), $("div", xt, [
      w("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: l
      }, [
        r.isReady ? Q(y.$slots, "default", { key: 0 }) : B("", !0)
      ], 512)
    ]));
  }
});
ye.install = function(e) {
  e.component("FScreenContainer", ye);
};
const kt = {
  title: "container 容器",
  name: "container",
  category: "容器",
  status: "100%",
  install(e) {
    e.use(ye);
  }
}, bt = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, St = 30, Ct = 1 / St;
class pe {
  constructor(t, l, r, c, a, u, i) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = c, this.time = a, this.radius = u, this.colors = i, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, l, r, c) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && c) {
      let a = r - this.x, u = c - this.y, i = Math.sqrt(a ** 2 + u ** 2), n = t / i;
      n = n > 7 ? 7 : n;
      let s = Math.atan2(u, a), o = Math.cos(s), y = Math.sin(s), g = o * n * -l, m = y * n * -l;
      this.velocityX += g, this.velocityY += m;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Ct);
  }
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const De = 30;
class Pt {
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, c = this.particleArr, a = c.length;
      for (let i = 0; i < r; i++) {
        const { targetX: n, targetY: s, colors: o } = l[i];
        c[i] ? c[i].change(n, s, o) : c[i] = new pe(this.width, this.height, n, s, De, this.radius, o);
      }
      r < a && (this.particleArr = c.splice(0, r)), c = this.particleArr;
      let u = c.length;
      for (; u; ) {
        let i = ~~(Math.random() * u--), n = c[i], { targetX: s, targetY: o, colors: y } = n;
        n.targetX = c[u].targetX, n.targetY = c[u].targetY, n.colors = c[u].colors, c[u].targetX = s, c[u].targetY = o, c[u].colors = y;
      }
    } else
      this.particleArr = t.particleData.map((l) => new pe(this.width, this.height, l.targetX, l.targetY, De, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const It = 30;
class Re {
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
            const g = (y + o * i) * 4, m = s[g + 3];
            if (m == 0)
              continue;
            const d = s[g], f = s[g + 1], v = s[g + 2];
            if (d + f + v + m) {
              const p = new pe(this.width, this.height, y, o, It, this.radius, `rgba(${d},${f},${v},${m})`);
              this.particleData.push(p);
            }
          }
        l(this.particleData);
      }, c.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const Lt = ["width", "height"], me = /* @__PURE__ */ N({
  name: "index",
  props: bt,
  setup(e, { expose: t }) {
    const l = e;
    let r = ke("scaleX", L(1)), c = ke("scaleY", L(1));
    const a = L(null), u = L(null);
    let i = L(), n = L();
    const s = async (y) => {
      n.value = new Re(y, l.width, l.height, l.radius), await n.value.createParticleData(), i.value.changeImg(n.value);
    }, o = async () => {
      n.value = new Re(l.src, l.width, l.height, l.radius), await n.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), i.value = new Pt(a.value, l.radius, l.strength), a.value.addEventListener("mousemove", (y) => {
        const { left: g, top: m } = a.value.getBoundingClientRect(), { clientX: d, clientY: f } = y;
        i.value.mouseX = (d - g) * (1 / r.value), i.value.mouseY = (f - m) * (1 / c.value);
      }), i.value.drawCanvas(), i.value.changeImg(n.value));
    };
    return te(() => {
      o();
    }), t({
      toggleImg: s
    }), (y, g) => (_(), $("div", null, [
      w("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: l.width,
        height: l.height
      }, null, 8, Lt)
    ]));
  }
});
me.install = function(e) {
  e.component("FDynamicParticle", me);
};
const Tt = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "20%",
  install(e) {
    e.use(me);
  }
};
function Ne(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, c, a, u, i) => {
      e.emit("cell-click", c, a, u, i, r);
    }
  };
}
function Dt(e, t, l) {
  const { handleToggle: r } = Ne(l), c = (g) => {
    let m = ae(g);
    return X(m);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, u = async (g, m, d) => {
    let f = d;
    m.map((v) => v._index_ = ++f), e.currData.length ? g === t.pageSize ? e.currData = [...m] : (e.currData.push(...m), e.currData.splice(0, g)) : e.currData.push(...m);
  }, i = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let g;
      t.mode === "single" ? g = t.togglePage : g = t.pageSize;
      let m, d;
      e.currPage === 1 ? (m = 0, d = t.pageSize) : (m = g * (e.currPage - 2) + t.pageSize, d = g * (e.currPage - 1) + t.pageSize);
      let f = e.tableData.slice(m, d);
      f.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, f, m) : e.currPage === 1 ? await u(t.pageSize, f, m) : await u(g, f, m) : (e.currPage = 1, a(), i()), n();
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
      let d = m * (e.currPage - 1), f = m * (e.currPage - 1) + t.pageSize, v = e.tableData.slice(d, f);
      v.length ? (u(t.pageSize, v, d), n()) : i(), e.tableData.length || s();
    }
  };
}
function Rt(e, t) {
  const l = P(() => function(s, o) {
    const y = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && y.push("f-scroll-table_row--striped"), y;
  }), r = P(() => {
    const s = ["cell"];
    return t.wrap ? s.push("cell--wrap") : s.push("cell--nowrap"), s;
  }), c = P(() => function(s) {
    let o = s.reduce((y, g) => y += g.width, 0);
    return {
      width: `${o}px`,
      "max-width": `${o}px`
    };
  }), a = P(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = P(() => function(s) {
    return {};
  }), i = P(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), n = P(() => function(s, o, y, g) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: y,
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
const ce = /* @__PURE__ */ N({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = L(), r = L(), c = P(() => {
      var g, m, d, f;
      let a = ((g = l.value) == null ? void 0 : g.offsetWidth) || 0, u = ((m = l.value) == null ? void 0 : m.offsetHeight) || 0, i = ((d = r.value) == null ? void 0 : d.offsetWidth) || 0, n = ((f = r.value) == null ? void 0 : f.offsetHeight) || 0;
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
    return (a, u) => (_(), $("div", {
      ref_key: "scrollText",
      ref: l,
      class: q(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      w("div", {
        ref_key: "textContent",
        ref: r,
        class: "text-content",
        style: z(x(c))
      }, [
        Q(a.$slots, "default")
      ], 4)
    ], 2));
  }
});
ce.install = function(e) {
  e.component("FScrollText", ce);
};
const Et = {
  title: "scrollText 轮播文本",
  name: "scrollText",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ce);
  }
}, At = {
  class: "f-scroll-table__head"
}, Ot = ["onClick"], Bt = {
  key: 1
}, ve = /* @__PURE__ */ N({
  name: "index",
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
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), c = Ee(), a = L(), {
      deepCloneArr: u,
      setCurrData: i,
      setPageInterval: n,
      setEmptyTimeout: s,
      clearTimer: o,
      setPage: y
    } = Dt(r, l, c), {
      handleCellClick: g
    } = Ne(c), {
      getRowClass: m,
      getCellClass: d,
      getTableStyle: f,
      getBodyStyle: v,
      getRowStyle: T,
      getExtraCellStyle: p,
      getCellStyle: b
    } = Rt(r, l), h = (I) => {
      I.style.opacity = "0", I.style.gridTemplateRows = "0fr";
    }, A = (I, F) => {
      I.offsetWidth, I.style.opacity = "1", I.style.gridTemplateRows = "1fr", F();
    }, S = async (I) => {
      I.style.opacity = "1";
    }, G = async (I, F) => {
      I.style.opacity = "0", I.style.gridTemplateRows = "0fr", await new Promise((C) => {
        setTimeout(() => {
          I.remove(), C(!0);
        }, l.pageAnimateDur);
      }), F();
    };
    return ee(() => l.data, (I) => {
      r.tableData = u(I), i();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      l.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        o(!0, !0), r.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? n() : s();
      }));
    }), Qe(() => {
      o();
    }), t({
      setPage: y
    }), (I, F) => (_(), $("div", {
      ref: "scrollTable",
      class: q(["f-scroll-table", {
        "is-border": l.border
      }]),
      style: z(x(f)(l.columns))
    }, [w("div", At, [(_(!0), $(H, null, V(l.columns, (C, R) => (_(), $("div", {
      class: "f-scroll-table__cell",
      style: z(x(p)(C)),
      key: R
    }, E(C.label), 5))), 128))]), w("div", {
      ref_key: "scrollTable__body",
      ref: a,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: z(x(v))
    }, [k(Ae, {
      tag: "div",
      css: !1,
      onBeforeEnter: h,
      onEnter: A,
      onBeforeLeave: S,
      onLeave: G
    }, {
      default: ue(() => [(_(!0), $(H, null, V(r.currData, (C, R) => (_(), $("div", {
        class: "f-scroll-table__row-wrap",
        key: C
      }, [w("div", {
        class: q(x(m)(C, R))
      }, [(_(!0), $(H, null, V(l.columns, (D, M) => (_(), $("div", {
        class: "f-scroll-table__cell",
        style: z([x(p)(D), x(b)(C, D.type === "index" ? "_index_" : D.prop, R, M)]),
        key: `${C[D.prop]}${M}`,
        onClick: (K) => x(g)(K, C, C[D.prop], R, M)
      }, [D.type === "index" ? (_(), $("div", {
        key: 0,
        class: q(x(d))
      }, E(C._index_ || ""), 3)) : D.type === "scroll" ? (_(), $("div", Bt, [k(x(ce), Ge(Ue(D.scrollOption)), {
        default: ue(() => [w("div", null, E(C[D.prop]), 1)]),
        _: 2
      }, 1040)])) : D.slot ? (_(), $("div", {
        key: 2,
        class: q(x(d))
      }, [Q(I.$slots, D.slot, {
        params: {
          row: C,
          column: D.prop,
          $index: R
        }
      })], 2)) : (_(), $("div", {
        key: 3,
        class: q(x(d))
      }, E(C[D.prop]), 3))], 12, Ot))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
ve.install = function(e) {
  e.component("FScrollTable", ve);
};
const zt = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(ve);
  }
}, Nt = N({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = P(() => re(e.color) ? Y(l, e.color) : l);
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
function Ft(e, t, l, r, c, a) {
  return _(), $("div", {
    class: "f-progress",
    style: z(e.getProgressStyle)
  }, [
    w("div", {
      class: "progress-inner",
      style: z({ width: `${e.percent}%` })
    }, [
      Q(e.$slots, "default", { percent: e.percent }, () => [
        w("span", null, E(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const j = /* @__PURE__ */ ze(Nt, [["render", Ft]]);
j.install = function(e) {
  e.component(j.name, j);
};
const Wt = {
  title: "progress 进度条",
  name: "progress",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(j);
  }
}, Ht = { class: "f-digital-scroll" }, Mt = { class: "f-digital-scroll__list" }, Xt = { class: "f-digital-scroll__point" }, _e = /* @__PURE__ */ N({
  name: "index",
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
    }, c = P(() => function(a) {
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
    ), (a, u) => (_(), $("div", Ht, [
      w("div", Mt, [
        (_(!0), $(H, null, V(x(l).stringList, (i, n) => (_(), $("div", {
          class: q(["f-digital-scroll__item", { "is-small": i === "." }]),
          key: n
        }, [
          be(w("div", Xt, ".", 512), [
            [Se, i === "."]
          ]),
          be(w("div", {
            class: "f-digital-scroll__digital-list",
            style: z(x(c)(i))
          }, [
            (_(), $(H, null, V(10, (s, o) => w("div", {
              class: "f-digital-scroll__digital-item",
              key: o
            }, E(o), 1)), 64))
          ], 4), [
            [Se, i !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
_e.install = function(e) {
  e.component("FDigitalScroll", _e);
};
const Yt = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(_e);
  }
}, Vt = { class: "f-scroll-rank" }, Qt = { class: "f-scroll-rank__item-wrap" }, Gt = { class: "f-scroll-rank__item-info" }, Ut = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, qt = { class: "f-scroll-rank__item-name" }, Kt = { class: "f-scroll-rank__item-info-right" }, Zt = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, Jt = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, jt = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, el = { class: "f-scroll-rank__item-progress" }, $e = /* @__PURE__ */ N({
  name: "index",
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
      let f = X(ae(d)), v = [];
      t.order === "default" ? v = f : v = dt(f, "value", t.order), typeof t.valueFormatter == "function" && (v = v.map((T, p) => {
        var b;
        return T.formattedValue = (b = t.valueFormatter) == null ? void 0 : b.call(null, {
          name: T.name,
          value: T.value,
          maxValue: n.value,
          index: p
        }), T;
      })), l.dataList = v;
    }, c = async (d, f, v) => {
      let T = v;
      f.map((p) => p._index_ = ++T), l.currList.length ? d === t.pageSize ? l.currList = [...f] : (l.currList.push(...f), l.currList.splice(0, d)) : l.currList.push(...f);
    }, a = async () => {
      if (l.dataList.length) {
        l.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let f, v;
        l.currPage === 1 ? (f = 0, v = t.pageSize) : (f = d * (l.currPage - 2) + t.pageSize, v = d * (l.currPage - 1) + t.pageSize);
        let T = l.dataList.slice(f, v);
        T.length ? l.currPage === 1 ? await c(t.pageSize, T, f) : await c(d, T, f) : (l.currPage = 1, a()), u();
      } else
        i(), l.isEmpty = !0, l.currPage = 1, l.currList = [];
    }, u = () => {
      l.intervalId === null && (l.intervalId = setInterval(() => {
        l.currPage += 1, a();
      }, t.toggleDur));
    }, i = () => {
      l.intervalId && (clearInterval(l.intervalId), l.intervalId = null);
    }, n = P(() => {
      var d, f;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = l.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((f = l.currList[0]) == null ? void 0 : f.value) || 0;
    }), s = P(() => function(d) {
      let f, v = n.value;
      f = d / v;
      const T = (p, b) => Math.round(p * Math.pow(10, b)) / Math.pow(10, b);
      return typeof f == "number" ? T(f * 100, 1) : 0;
    }), o = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, y = (d, f) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", f();
    }, g = async (d) => {
      d.style.opacity = "1";
    }, m = async (d, f) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise((v) => {
        setTimeout(() => {
          d.remove(), v(!0);
        }, t.toggleDuration);
      }), f();
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
    ), (d, f) => (_(), $("div", Vt, [
      w("div", {
        class: "f-scroll-rank__list",
        style: z({ "--page-animate-dur": `${t.toggleDuration}ms` })
      }, [
        k(Ae, {
          tag: "div",
          css: !1,
          onBeforeEnter: o,
          onEnter: y,
          onBeforeLeave: g,
          onLeave: m
        }, {
          default: ue(() => [
            (_(!0), $(H, null, V(x(l).currList, (v, T) => (_(), $("div", {
              class: "f-scroll-rank__item",
              key: v
            }, [
              w("div", Qt, [
                w("div", Gt, [
                  t.showRank ? (_(), $("span", Ut, E(`NO.${v._index_}`), 1)) : B("", !0),
                  w("span", qt, E(v.name || ""), 1),
                  w("div", Kt, [
                    t.showPercent ? (_(), $("span", Zt, E(`${x(s)(v.value)}%`), 1)) : B("", !0),
                    t.showRatio && typeof t.valueFormatter != "function" ? (_(), $("span", Jt, E(`${v.value} / ${x(n)}`), 1)) : B("", !0),
                    typeof t.valueFormatter == "function" ? (_(), $("span", jt, E(`${v.formattedValue}`), 1)) : B("", !0)
                  ])
                ]),
                w("div", el, [
                  k(x(j), {
                    percent: x(s)(v.value),
                    color: t.color,
                    duration: t.progressDuration
                  }, null, 8, ["percent", "color", "duration"])
                ])
              ])
            ]))), 128))
          ]),
          _: 1
        })
      ], 4)
    ]));
  }
});
$e.install = function(e) {
  e.component("FScrollRank", $e);
};
const tl = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use($e);
  }
}, ll = {
  width: "100%",
  height: "100%"
}, rl = /* @__PURE__ */ qe('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), nl = ["id", "cx", "cy"], il = ["values", "dur"], sl = ["dur"], ol = ["id"], al = ["xlink:href"], cl = ["xlink:href", "fill", "mask"], ul = ["fill", "x", "y"], dl = ["href", "width", "height", "x", "y"], hl = ["id", "d"], fl = ["id"], gl = ["r"], yl = ["dur", "path"], pl = ["xlink:href", "stroke-width", "stroke"], ml = ["xlink:href", "stroke-width", "stroke", "mask"], vl = ["from", "to", "dur"], _l = { key: 2 }, we = /* @__PURE__ */ N({
  name: "index",
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
        duration: 700,
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
  emits: ["map-click"],
  setup(e) {
    const t = e, l = L();
    let r;
    te(() => {
      r = Ee();
    });
    const c = Z({
      halo: {
        show: !0,
        duration: 700,
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
    }), u = (p) => {
      let { offsetX: b, offsetY: h } = p;
      const A = (b / s.value).toFixed(2), S = (h / o.value).toFixed(2);
      r == null || r.emit("map-click", A, S, p);
    }, i = () => {
      y(), g();
    }, n = () => {
      y(), g();
    }, { width: s, height: o } = le(l, i, n), y = () => {
      let p = X(ae(t.points));
      a.points = p.map((b, h) => ({
        ...b,
        halo: Y({}, c.halo, X(t.halo), b.halo),
        title: Y({}, c.title, X(t.title), b.title),
        icon: Y({}, c.icon, X(t.icon), b.icon),
        key: `${b.coordinate.toString()}${h}`
      }));
    }, g = () => {
      let p = X(ae(t.paths));
      a.paths = p.map((b, h) => {
        var K, U;
        let { source: A, route: S, target: G, line: I } = b, F = Y({}, c.line, X(t.line), I), C = (K = a.points.find(({ name: O }) => O === A)) == null ? void 0 : K.coordinate, R = (U = a.points.find(({ name: O }) => O === G)) == null ? void 0 : U.coordinate, D = S ? [C, ...S, R] : [C, R], M = [];
        for (let O = 0; O < D.length - 1; O++) {
          let Fe = D[O], J = m(Fe, D[O + 1], F.k, F.curvature), We = `M${J[0].toString()} Q${J[1].toString()} ${J[2].toString()}`, He = `${J.toString()}`;
          M.push({ path: J, d: We, key: He });
        }
        return {
          ...b,
          line: F,
          routeList: M
        };
      });
    }, m = (p, b, h, A) => {
      let [S, G] = p, [I, F] = b;
      const [C, R] = [(S + I) / 2, (G + F) / 2];
      let M = Te([S, G], [I, F]) / A, K = M / 2, [U, O] = [C, R];
      do
        U += K, O = d(h, [C, R], U)[1];
      while (Te([C, R], [U, O]) < M);
      return [p, [U, O], b];
    };
    function d(p, [b, h], A) {
      const S = h - p * b + p * A;
      return [A, S];
    }
    let f = P(() => function(p) {
      return `M${p[0][0] * s.value},${p[0][1] * o.value} 
    Q${p[1][0] * s.value},${p[1][1] * o.value} 
    ${p[2][0] * s.value},${p[2][1] * o.value}`;
    }), v = P(() => function(p) {
      return `M${p[0][0] * s.value},${p[0][1] * o.value} 
    Q${p[1][0] * s.value},${p[1][1] * o.value} 
    ${p[2][0] * s.value},${p[2][1] * o.value}`;
    });
    P(() => function(p) {
      return `"M${p[0][0] * s.value},${p[0][1] * o.value} Q${p[1][0] * s.value},${p[1][1] * o.value} ${p[2][0] * s.value},${p[2][1] * o.value}"`;
    });
    let T = P(() => function(p) {
      return r ? r.proxy.$refs[p][0].getTotalLength() : 0;
    });
    return ee(() => t, (p) => {
      y(), g();
    }, {
      deep: !0,
      immediate: !0
    }), (p, b) => (_(), $("div", {
      ref_key: "flightChart",
      ref: l,
      class: "f-flight-chart"
    }, [
      w("div", {
        class: "f-flight-chart__wrap",
        style: z(`background-image: url(${t.bgUrl})`),
        onClick: u
      }, [
        (_(), $("svg", ll, [
          rl,
          (_(!0), $(H, null, V(a.points, (h, A) => (_(), $("g", {
            key: h.key
          }, [
            w("defs", null, [
              h.halo.show ? (_(), $("circle", {
                key: 0,
                id: `halo${h.key}`,
                cx: h.coordinate[0] * x(s),
                cy: h.coordinate[1] * x(o)
              }, [
                w("animate", {
                  attributeName: "r",
                  values: `1;${h.halo.radius}`,
                  dur: `${h.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, il),
                w("animate", {
                  attributeName: "opacity",
                  values: "1;0",
                  dur: `${h.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, sl)
              ], 8, nl)) : B("", !0),
              w("mask", {
                id: `mask${h.key}`
              }, [
                w("use", {
                  "xlink:href": `#halo${h.key}`,
                  fill: "url(#haloGradient)"
                }, null, 8, al)
              ], 8, ol)
            ]),
            h.halo.show ? (_(), $("use", {
              key: 0,
              "xlink:href": `#halo${h.key}`,
              fill: h.halo.color,
              mask: `url(#mask${h.key})`
            }, null, 8, cl)) : B("", !0),
            h.title.show ? (_(), $("text", {
              key: 1,
              class: "point__title",
              style: z({ fontSize: `${h.title.fontSize}px` }),
              fill: h.title.color,
              x: h.coordinate[0] * x(s) + h.title.offest[0],
              y: h.coordinate[1] * x(o) + h.title.offest[1]
            }, E(h.name), 13, ul)) : B("", !0),
            h.icon.show ? (_(), $("image", {
              key: 2,
              class: "point__icon",
              href: h.icon.url,
              width: h.icon.width,
              height: h.icon.height,
              x: h.coordinate[0] * x(s) - h.icon.width / 2,
              y: h.coordinate[1] * x(o) - h.icon.height / 2
            }, null, 8, dl)) : B("", !0)
          ]))), 128)),
          (_(!0), $(H, null, V(a.paths, (h, A) => (_(), $(H, null, [
            (_(!0), $(H, null, V(h.routeList, (S, G) => (_(), $("g", null, [
              w("defs", null, [
                w("path", {
                  id: S.key,
                  ref_for: !0,
                  ref: S.key,
                  d: x(f)(S.path),
                  fill: "transparent",
                  style: { overflow: "hidden" }
                }, null, 8, hl),
                w("mask", {
                  id: `mask${S.key}`
                }, [
                  w("circle", {
                    cx: "0",
                    cy: "0",
                    r: h.line.radius,
                    fill: "url(#lineGradient)"
                  }, [
                    w("animateMotion", {
                      dur: `${h.line.duration}ms`,
                      path: x(f)(S.path),
                      rotate: "auto",
                      repeatCount: "indefinite"
                    }, null, 8, yl)
                  ], 8, gl)
                ], 8, fl)
              ]),
              h.line.show ? (_(), $("use", {
                key: 0,
                "xlink:href": `#${S.key}`,
                "stroke-width": h.line.width,
                stroke: h.line.orbitColor
              }, null, 8, pl)) : B("", !0),
              h.line.show && !h.line.slot ? (_(), $("use", {
                key: 1,
                "xlink:href": `#${S.key}`,
                "stroke-width": h.line.width,
                stroke: h.line.color,
                mask: `url(#mask${S.key})`
              }, [
                w("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${x(T)(S.key)}`,
                  to: `${x(T)(S.key)}, 0`,
                  dur: `${h.line.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, vl)
              ], 8, ml)) : B("", !0),
              h.line.show && h.line.slot ? (_(), $("g", _l, [
                Q(p.$slots, h.line.slot, {
                  path: x(v)(S.path),
                  totalLength: x(T)(S.key)
                })
              ])) : B("", !0)
            ]))), 256))
          ], 64))), 256))
        ]))
      ], 4)
    ], 512));
  }
});
we.install = function(e) {
  e.component("FFlightChart", we);
};
const $l = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(we);
  }
}, wl = [
  ft,
  gt,
  yt,
  $t,
  kt,
  Tt,
  zt,
  Et,
  Wt,
  Yt,
  tl,
  $l
], kl = {
  version: "1.0.12",
  install(e) {
    wl.forEach((t) => e.use(t));
  }
};
export {
  ne as BorderBox1,
  ie as BorderBox2,
  _e as DigitalScroll,
  me as DynamicParticle,
  we as FlightChart,
  se as Loading1,
  oe as Loading2,
  j as Progress,
  ye as ScreenContainer,
  $e as ScrollRank,
  ve as ScrollTable,
  ce as ScrollText,
  kl as default,
  wl as installs
};
