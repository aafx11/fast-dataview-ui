import './style.css';
import { getCurrentScope as Ae, onScopeDispose as Be, unref as _, watch as M, ref as x, onMounted as j, onUnmounted as ze, nextTick as Fe, defineComponent as D, computed as b, createVNode as w, renderSlot as W, openBlock as m, createElementBlock as v, normalizeStyle as T, createElementVNode as $, toDisplayString as I, reactive as X, provide as ge, createCommentVNode as R, inject as pe, normalizeClass as B, getCurrentInstance as Se, onBeforeUnmount as Ne, Fragment as F, renderList as N, TransitionGroup as ke, withCtx as te, normalizeProps as We, guardReactiveProps as He, withDirectives as ye, vShow as me } from "vue";
function Xe(e, t) {
  const l = window.MutationObserver, r = new l(t);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var ve;
const Ce = typeof window < "u", Ye = (e) => typeof e == "string", le = () => {
};
Ce && ((ve = window == null ? void 0 : window.navigator) != null && ve.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function re(e) {
  return typeof e == "function" ? e() : _(e);
}
function Me(e, t) {
  function l(...r) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return l;
}
function Ve(e, t = {}) {
  let l, r, a = le;
  const o = (n) => {
    clearTimeout(n), a(), a = le;
  };
  return (n) => {
    const i = re(e), s = re(t.maxWait);
    return l && o(l), i <= 0 || s !== void 0 && s <= 0 ? (r && (o(r), r = null), Promise.resolve(n())) : new Promise((c, g) => {
      a = t.rejectOnCancel ? g : c, s && !r && (r = setTimeout(() => {
        l && o(l), r = null, c(n());
      }, s)), l = setTimeout(() => {
        r && o(r), r = null, c(n());
      }, i);
    });
  };
}
function Ue(e) {
  return e;
}
function Qe(e) {
  return Ae() ? (Be(e), !0) : !1;
}
function Ge(e, t = 200, l = {}) {
  return Me(Ve(t, l), e);
}
function qe(e) {
  var t;
  const l = re(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const Ze = Ce ? window : void 0;
function Ke(...e) {
  let t, l, r, a;
  if (Ye(e[0]) || Array.isArray(e[0]) ? ([l, r, a] = e, t = Ze) : [t, l, r, a] = e, !t)
    return le;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const o = [], u = () => {
    o.forEach((c) => c()), o.length = 0;
  }, n = (c, g, f) => (c.addEventListener(g, f, a), () => c.removeEventListener(g, f, a)), i = M(() => qe(t), (c) => {
    u(), c && o.push(...l.flatMap((g) => r.map((f) => n(c, g, f))));
  }, { immediate: !0, flush: "post" }), s = () => {
    i(), u();
  };
  return Qe(s), s;
}
const ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ie = "__vueuse_ssr_handlers__";
ne[ie] = ne[ie] || {};
ne[ie];
var we;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(we || (we = {}));
var Je = Object.defineProperty, _e = Object.getOwnPropertySymbols, je = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, $e = (e, t, l) => t in e ? Je(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, tt = (e, t) => {
  for (var l in t || (t = {}))
    je.call(t, l) && $e(e, l, t[l]);
  if (_e)
    for (var l of _e(t))
      et.call(t, l) && $e(e, l, t[l]);
  return e;
};
const lt = {
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
tt({
  linear: Ue
}, lt);
const V = (e, t, l, r) => {
  const a = x(0), o = x(0), u = x(0), n = x(0);
  let i, s = null, c = null;
  const g = (p = !0) => new Promise((y) => {
    Fe(() => {
      c = e.value, a.value = e.value ? e.value.clientWidth : 0, o.value = e.value ? e.value.clientHeight : 0, u.value = c ? c.getBoundingClientRect().width : 0, n.value = c ? c.getBoundingClientRect().height : 0, e.value ? (!a.value || !o.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && p && t(), y(!0);
    });
  }), f = () => {
    s = Xe(c, i), Ke(window, "resize", i);
  }, d = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, h = async () => {
    await g(!1), i = Ge(g, 200), f(), typeof l == "function" && l();
  };
  return j(() => {
    h();
  }), ze(() => {
    d();
  }), {
    width: a,
    height: o,
    afterWidth: u,
    afterHeight: n,
    initWH: g
  };
}, Pe = {
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
  }
}, O = Object.assign, U = (e) => Array.isArray(e) && e.length, fe = (e) => Array.isArray(e) && e || [], E = (e) => e >= 0 ? e : 0, rt = (e, t, l = "reverse") => e.sort(nt(t, l)), nt = (e, t = "reverse") => function(l, r) {
  return l[e] < r[e] ? t === "normal" ? -1 : 1 : l[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, z = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
    e.hasOwnProperty(r) && (l[r] = z(e[r], t));
  return l;
}, G = /* @__PURE__ */ D({
  name: "FBorderBox1",
  props: Pe,
  setup(e, {
    slots: t
  }) {
    const l = x(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let a = b(() => U(e.color) ? O(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = V(l);
    return {
      width: o,
      height: u,
      initWH: n,
      borderBox1: l,
      defaultColor: r,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: a,
      realColor: o,
      title: u
    } = this, n = 20;
    let i = a || 2, s = E(t - i - 2), c = E(l - i - 2);
    return w("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [w("svg", {
      class: "f-svg-container",
      width: s,
      height: c
    }, [w("polygon", {
      fill: r,
      stroke: o[0],
      "stroke-width": i,
      points: `
            ${n} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${c - n}, ${s - n} ${c},
            ${n} ${c}, ${i} ${c - n}, ${i} ${n}
          `
    }, null), w("polyline", {
      stroke: o[1],
      "stroke-width": i + 1,
      points: `
            ${n - 8} 0,0 ${n - 8}
          `
    }, null), w("polyline", {
      stroke: o[1],
      "stroke-width": i + 1,
      points: `
            ${s} ${c - n + 8}, ${s - n + 8 + i} ${c}
          `
    }, null), w("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${n + 15}, ${i} ${n}, ${n} ${i} , ${n + 15} ${i}
          `
    }, null), w("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
           ${n + 15} ${c}, ${n}  ${c}, ${i} ${c - n}, ${i} ${c - n - 15}
          `
    }, null), w("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
           ${s - n - 15} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${n + 15}
          `
    }, null), w("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
          ${s - n - 15} ${c}, ${s - n} ${c}, ${s - i} ${c - n}, ${s - i} ${c - n - 15}
          `
    }, null), u ? w("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${n} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${n + 15}, ${i} ${n + 15},
            ${i} ${n}
          `
    }, null) : null, u ? w("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), w("div", {
      class: "f-border-box-content"
    }, [w("div", null, [W(e, "default")])])]);
  }
});
G.install = function(e) {
  e.component(G.name, G);
};
const it = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(G);
  }
}, q = /* @__PURE__ */ D({
  name: "FBorderBox2",
  props: Pe,
  setup(e, {
    slots: t
  }) {
    const l = x(null), r = ["white"];
    let a = b(() => U(e.color) ? O(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = V(l);
    return {
      width: o,
      height: u,
      initWH: n,
      borderBox2: l,
      defaultColor: r,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: r,
      strokeWidth: a,
      realColor: o,
      duration: u
    } = this;
    let n = a || 3, i = E(n), s = E(n), c = E(t - n), g = E(n), f = E(t - n), d = E(l - n), h = E(n), p = E(l - n);
    return w("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [w("svg", {
      class: "f-svg-container",
      width: t,
      height: l
    }, [w("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`
      },
      stroke: o[0],
      "stroke-width": n,
      fill: r,
      d: `M ${i} ${s}, L ${c} ${g}, L ${f} ${d}, L ${h} ${p}, Z`
    }, null)]), w("div", {
      class: "f-border-box-content"
    }, [W(e, "default")])]);
  }
});
q.install = function(e) {
  e.component(q.name, q);
};
const st = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(q);
  }
}, Z = /* @__PURE__ */ D({
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
    const l = x(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let a = b(() => U(e.color) ? O(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = V(l);
    return {
      width: o,
      height: u,
      initWH: n,
      loading1: l,
      defaultColor: r,
      realColor: a
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: l,
      duration: r
    } = this;
    return w("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${r}s`
      }
    }, [w("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [w("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), w("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), w("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [w("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), w("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), w("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [w("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), w("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), l ? w("div", {
      class: "f-loading-text",
      "data-text": l
    }, null) : null]);
  }
});
Z.install = function(e) {
  e.component(Z.name, Z);
};
const ot = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(Z);
  }
}, at = D({
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
    let r = b(() => U(e.color) ? O(l, e.color) : l);
    return {
      getLoadingStyle: b(() => ({
        width: e.width,
        height: e.height,
        color: r.value[2],
        "--border-color": r.value[0],
        "--border-top-color": r.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), Ie = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, a] of t)
    l[r] = a;
  return l;
}, ct = /* @__PURE__ */ $("div", { class: "f-loading-round" }, null, -1), ut = { class: "loading-text" };
function dt(e, t, l, r, a, o) {
  return m(), v("div", {
    class: "f-loading-2",
    style: T(e.getLoadingStyle)
  }, [
    ct,
    $("div", ut, [
      W(e.$slots, "default", {}, () => [
        $("div", null, I(e.text), 1)
      ])
    ])
  ], 4);
}
const K = /* @__PURE__ */ Ie(at, [["render", dt]]);
K.install = function(e) {
  e.component(K.name, K);
};
const ht = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(K);
  }
}, ft = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, gt = { class: "f-screen-container" }, se = /* @__PURE__ */ D({
  name: "index",
  props: ft,
  setup(e) {
    const t = e, l = x(null), r = X({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let a = x(1), o = x(1);
    ge("scaleX", a), ge("scaleY", o);
    const u = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: g, height: f } = window.screen;
      r.screenWidth = g, r.screenHeight = f;
    }, n = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, i = () => {
      const g = document.body.clientWidth, f = document.body.clientHeight, d = r.width || r.screenWidth, h = r.height || r.screenHeight, p = g / +d, y = f / +h;
      a.value = p, o.value = y, l.value.style.transform = `scale(${p}, ${y})`;
    };
    return V(l, () => {
      i();
    }, () => {
      u(), n(), i(), t.onAfterResize(), r.isReady = !0;
    }), (g, f) => (m(), v("div", gt, [
      $("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: l
      }, [
        r.isReady ? W(g.$slots, "default", { key: 0 }) : R("", !0)
      ], 512)
    ]));
  }
});
se.install = function(e) {
  e.component("FScreenContainer", se);
};
const pt = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(se);
  }
}, yt = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, mt = 30, vt = 1 / mt;
class oe {
  constructor(t, l, r, a, o, u, n) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = a, this.time = o, this.radius = u, this.colors = n, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, l, r, a) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && a) {
      let o = r - this.x, u = a - this.y, n = Math.sqrt(o ** 2 + u ** 2), i = t / n;
      i = i > 7 ? 7 : i;
      let s = Math.atan2(u, o), c = Math.cos(s), g = Math.sin(s), f = c * i * -l, d = g * i * -l;
      this.velocityX += f, this.velocityY += d;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += vt);
  }
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const xe = 30;
class wt {
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, a = this.particleArr, o = a.length;
      for (let n = 0; n < r; n++) {
        const { targetX: i, targetY: s, colors: c } = l[n];
        a[n] ? a[n].change(i, s, c) : a[n] = new oe(this.width, this.height, i, s, xe, this.radius, c);
      }
      r < o && (this.particleArr = a.splice(0, r)), a = this.particleArr;
      let u = a.length;
      for (; u; ) {
        let n = ~~(Math.random() * u--), i = a[n], { targetX: s, targetY: c, colors: g } = i;
        i.targetX = a[u].targetX, i.targetY = a[u].targetY, i.colors = a[u].colors, a[u].targetX = s, a[u].targetY = c, a[u].colors = g;
      }
    } else
      this.particleArr = t.particleData.map((l) => new oe(this.width, this.height, l.targetX, l.targetY, xe, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const _t = 30;
class be {
  constructor(t, l, r, a) {
    this.src = t, this.width = l, this.height = r, this.particleData = [], this.radius = a;
  }
  createParticleData(t = this.src) {
    return new Promise((l, r) => {
      let a = new Image();
      a.crossOrigin = "", a.src = decodeURI(new URL(t, import.meta.url).href), a.onload = () => {
        const o = document.createElement("canvas"), u = o.getContext("2d"), n = this.width, i = this.height;
        o.width = n, o.height = i, u == null || u.drawImage(a, 0, 0, n, i);
        const s = u == null ? void 0 : u.getImageData(0, 0, n, i).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let c = 0; c < i; c += 5)
          for (let g = 0; g < n; g += 5) {
            const f = (g + c * n) * 4, d = s[f + 3];
            if (d == 0)
              continue;
            const h = s[f], p = s[f + 1], y = s[f + 2];
            if (h + p + y + d) {
              const L = new oe(this.width, this.height, g, c, _t, this.radius, `rgba(${h},${p},${y},${d})`);
              this.particleData.push(L);
            }
          }
        l(this.particleData);
      }, a.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const $t = ["width", "height"], ae = /* @__PURE__ */ D({
  name: "index",
  props: yt,
  setup(e, { expose: t }) {
    const l = e;
    let r = pe("scaleX", x(1)), a = pe("scaleY", x(1));
    const o = x(null), u = x(null);
    let n = x(), i = x();
    const s = async (g) => {
      i.value = new be(g, l.width, l.height, l.radius), await i.value.createParticleData(), n.value.changeImg(i.value);
    }, c = async () => {
      i.value = new be(l.src, l.width, l.height, l.radius), await i.value.createParticleData(), o.value && (u.value = o.value.getContext("2d"), n.value = new wt(o.value, l.radius, l.strength), o.value.addEventListener("mousemove", (g) => {
        const { left: f, top: d } = o.value.getBoundingClientRect(), { clientX: h, clientY: p } = g;
        n.value.mouseX = (h - f) * (1 / r.value), n.value.mouseY = (p - d) * (1 / a.value);
      }), n.value.drawCanvas(), n.value.changeImg(i.value));
    };
    return j(() => {
      c();
    }), t({
      toggleImg: s
    }), (g, f) => (m(), v("div", null, [
      $("canvas", {
        ref_key: "canvasRef",
        ref: o,
        width: l.width,
        height: l.height
      }, null, 8, $t)
    ]));
  }
});
ae.install = function(e) {
  e.component("FDynamicParticle", ae);
};
const xt = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(e) {
    e.use(ae);
  }
};
function Te(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, a, o, u, n) => {
      e.emit("cell-click", a, o, u, n, r);
    }
  };
}
function bt(e, t, l) {
  const { handleToggle: r } = Te(l), a = (f) => {
    let d = fe(f);
    return z(d);
  }, o = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, u = async (f, d, h) => {
    let p = h;
    d.map((y) => y._index_ = ++p), e.currData.length ? f === t.pageSize ? e.currData = [...d] : (e.currData.push(...d), e.currData.splice(0, f)) : e.currData.push(...d);
  }, n = async () => {
    if (e.tableData.length) {
      c(!1, !0), e.isEmpty = !1;
      let f;
      t.mode === "single" ? f = t.togglePage : f = t.pageSize;
      let d, h;
      e.currPage === 1 ? (d = 0, h = t.pageSize) : (d = f * (e.currPage - 2) + t.pageSize, h = f * (e.currPage - 1) + t.pageSize);
      let p = e.tableData.slice(d, h);
      p.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, p, d) : e.currPage === 1 ? await u(t.pageSize, p, d) : await u(f, p, d) : (e.currPage = 1, o(), n()), i();
    } else
      c(), e.currPage = 1, e.currData = [], e.isEmpty = !0, s();
  }, i = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, n();
    }, t.toggleDur));
  }, s = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      r(t.name);
    }, t.emptyEmitDur));
  }, c = (f = !0, d = !0) => {
    e.intervalId && f && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && d && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: a,
    setCurrData: n,
    setPageInterval: i,
    setEmptyTimeout: s,
    clearTimer: c,
    setPage: (f = 1) => {
      c(), e.currPage = f;
      let d;
      t.mode === "single" ? d = t.togglePage : d = t.pageSize;
      let h = d * (e.currPage - 1), p = d * (e.currPage - 1) + t.pageSize, y = e.tableData.slice(h, p);
      y.length ? (u(t.pageSize, y, h), i()) : n(), e.tableData.length || s();
    }
  };
}
function St(e, t) {
  const l = b(() => function(s, c) {
    const g = ["f-scroll-table__row"];
    return t.stripe && c % 2 === 1 && g.push("f-scroll-table_row--striped"), g;
  }), r = b(() => {
    const s = ["cell"];
    return t.wrap ? s.push("cell--wrap") : s.push("cell--nowrap"), s;
  }), a = b(() => function(s) {
    let c = s.reduce((g, f) => g += f.width, 0);
    return {
      width: `${c}px`,
      "max-width": `${c}px`
    };
  }), o = b(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = b(() => function(s) {
    return {};
  }), n = b(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), i = b(() => function(s, c, g, f) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: g,
      columnIndex: f,
      row: s,
      column: c
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: r,
    getTableStyle: a,
    getBodyStyle: o,
    getRowStyle: u,
    getExtraCellStyle: n,
    getCellStyle: i
  };
}
const J = /* @__PURE__ */ D({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = x(), r = x(), a = b(() => {
      var f, d, h, p;
      let o = ((f = l.value) == null ? void 0 : f.offsetWidth) || 0, u = ((d = l.value) == null ? void 0 : d.offsetHeight) || 0, n = ((h = r.value) == null ? void 0 : h.offsetWidth) || 0, i = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && i < u || ["left", "right"].includes(t.direction) && n < o))
        return {
          "--text-scroll-width": `${o}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let s, c, g;
      return ["up", "down"].includes(t.direction) && (s = u + i, c = s / t.speed || 0, g = `up-scroll linear ${c}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = o + n, c = s / t.speed || 0, g = `left-scroll linear ${c}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${o}px`,
        "--text-scroll-height": `${u}px`,
        animation: g
      };
    });
    return (o, u) => (m(), v("div", {
      ref_key: "scrollText",
      ref: l,
      class: B(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      $("div", {
        ref_key: "textContent",
        ref: r,
        class: "text-content",
        style: T(_(a))
      }, [
        W(o.$slots, "default")
      ], 4)
    ], 2));
  }
});
J.install = function(e) {
  e.component("FScrollText", J);
};
const kt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(J);
  }
}, Ct = {
  class: "f-scroll-table__head"
}, Pt = ["onClick"], It = {
  key: 1
}, ce = /* @__PURE__ */ D({
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
    const l = e, r = X({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), a = Se(), o = x(), {
      deepCloneArr: u,
      setCurrData: n,
      setPageInterval: i,
      setEmptyTimeout: s,
      clearTimer: c,
      setPage: g
    } = bt(r, l, a), {
      handleCellClick: f
    } = Te(a), {
      getRowClass: d,
      getCellClass: h,
      getTableStyle: p,
      getBodyStyle: y,
      getRowStyle: k,
      getExtraCellStyle: L,
      getCellStyle: A
    } = St(r, l), De = (S) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr";
    }, Le = (S, Q) => {
      S.offsetWidth, S.style.opacity = "1", S.style.gridTemplateRows = "1fr", Q();
    }, Ee = async (S) => {
      S.style.opacity = "1";
    }, Re = async (S, Q) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr", await new Promise((C) => {
        setTimeout(() => {
          S.remove(), C(!0);
        }, l.pageAnimateDur);
      }), Q();
    };
    return M(() => l.data, (S) => {
      r.tableData = u(S), n();
    }, {
      immediate: !0,
      deep: !0
    }), j(() => {
      l.mouseEvent && (o.value.addEventListener("mouseenter", () => {
        c(!0, !0), r.isStopToggle = !0;
      }), o.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? i() : s();
      }));
    }), Ne(() => {
      c();
    }), t({
      setPage: g
    }), (S, Q) => (m(), v("div", {
      ref: "scrollTable",
      class: B(["f-scroll-table", {
        "is-border": l.border
      }]),
      style: T(_(p)(l.columns))
    }, [$("div", Ct, [(m(!0), v(F, null, N(l.columns, (C, H) => (m(), v("div", {
      class: "f-scroll-table__cell",
      style: T(_(L)(C)),
      key: H
    }, I(C.label), 5))), 128))]), $("div", {
      ref_key: "scrollTable__body",
      ref: o,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: T(_(y))
    }, [w(ke, {
      tag: "div",
      css: !1,
      onBeforeEnter: De,
      onEnter: Le,
      onBeforeLeave: Ee,
      onLeave: Re
    }, {
      default: te(() => [(m(!0), v(F, null, N(r.currData, (C, H) => (m(), v("div", {
        class: "f-scroll-table__row-wrap",
        key: C
      }, [$("div", {
        class: B(_(d)(C, H))
      }, [(m(!0), v(F, null, N(l.columns, (P, ee) => (m(), v("div", {
        class: "f-scroll-table__cell",
        style: T([_(L)(P), _(A)(C, P.type === "index" ? "_index_" : P.prop, H, ee)]),
        key: `${C[P.prop]}${ee}`,
        onClick: (Oe) => _(f)(Oe, C, C[P.prop], H, ee)
      }, [P.type === "index" ? (m(), v("div", {
        key: 0,
        class: B(_(h))
      }, I(C._index_ || ""), 3)) : P.type === "scroll" ? (m(), v("div", It, [w(_(J), We(He(P.scrollOption)), {
        default: te(() => [$("div", null, I(C[P.prop]), 1)]),
        _: 2
      }, 1040)])) : P.slot ? (m(), v("div", {
        key: 2,
        class: B(_(h))
      }, [W(S.$slots, P.slot, {
        params: {
          row: C,
          column: P.prop,
          $index: H
        }
      })], 2)) : (m(), v("div", {
        key: 3,
        class: B(_(h))
      }, I(C[P.prop]), 3))], 12, Pt))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
ce.install = function(e) {
  e.component("FScrollTable", ce);
};
const Tt = {
  title: "ScrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(ce);
  }
}, Dt = D({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let r = b(() => U(e.color) ? O(l, e.color) : l);
    return {
      getProgressStyle: b(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Lt(e, t, l, r, a, o) {
  return m(), v("div", {
    class: "f-progress",
    style: T(e.getProgressStyle)
  }, [
    $("div", {
      class: "progress-inner",
      style: T({ width: `${e.percent}%` })
    }, [
      W(e.$slots, "default", { percent: e.percent }, () => [
        $("span", null, I(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const Y = /* @__PURE__ */ Ie(Dt, [["render", Lt]]);
Y.install = function(e) {
  e.component(Y.name, Y);
};
const Et = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(Y);
  }
}, Rt = { class: "f-digital-scroll" }, Ot = { class: "f-digital-scroll__list" }, At = { class: "f-digital-scroll__point" }, ue = /* @__PURE__ */ D({
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
    let l = X({
      stringList: []
    });
    const r = (o) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`);
      console.log("reg", u);
      let n = Number(o.toString().match(u));
      console.log("digitalToStringList", n);
      let i = n.toString(), s = i.indexOf(".");
      for (s < 0 && (s = i.length, i += "."); i.length <= s + t.digit; )
        i += "0";
      return i.split("");
    }, a = b(() => function(o) {
      return console.log("str", o), {
        top: `-${Number(o) * 100}%`
      };
    });
    return j(() => {
      l.stringList = r(t.number);
    }), M(
      () => t.number,
      (o) => {
        console.log("变化", o), l.stringList = r(t.number);
      }
    ), (o, u) => (m(), v("div", Rt, [
      $("div", Ot, [
        (m(!0), v(F, null, N(_(l).stringList, (n, i) => (m(), v("div", {
          class: B(["f-digital-scroll__item", { "is-small": n === "." }]),
          key: i
        }, [
          ye($("div", At, ".", 512), [
            [me, n === "."]
          ]),
          ye($("div", {
            class: "f-digital-scroll__digital-list",
            style: T(_(a)(n))
          }, [
            (m(), v(F, null, N(10, (s, c) => $("div", {
              class: "f-digital-scroll__digital-item",
              key: c
            }, I(c), 1)), 64))
          ], 4), [
            [me, n !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
ue.install = function(e) {
  e.component("FDigitalScroll", ue);
};
const Bt = {
  title: "digitalScroll 数字滚动",
  category: "数字滚动",
  status: "20%",
  install(e) {
    e.use(ue);
  }
}, zt = { class: "f-scroll-rank" }, Ft = { class: "f-scroll-rank__item-wrap" }, Nt = { class: "f-scroll-rank__item-info" }, Wt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Ht = { class: "f-scroll-rank__item-name" }, Xt = { class: "f-scroll-rank__item-info-right" }, Yt = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, Mt = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, Vt = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, Ut = { class: "f-scroll-rank__item-progress" }, de = /* @__PURE__ */ D({
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
    let l = X({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const r = (h) => {
      let p = z(fe(h)), y = [];
      t.order === "default" ? y = p : y = rt(p, "value", t.order), typeof t.valueFormatter == "function" && (y = y.map((k, L) => {
        var A;
        return k.formattedValue = (A = t.valueFormatter) == null ? void 0 : A.call(null, {
          name: k.name,
          value: k.value,
          maxValue: i.value,
          index: L
        }), k;
      })), l.dataList = y;
    }, a = async (h, p, y) => {
      let k = y;
      p.map((L) => L._index_ = ++k), l.currList.length ? h === t.pageSize ? l.currList = [...p] : (l.currList.push(...p), l.currList.splice(0, h)) : l.currList.push(...p);
    }, o = async () => {
      if (l.dataList.length) {
        l.isEmpty = !1;
        let h;
        t.togglePage >= t.pageSize ? h = t.pageSize : h = t.togglePage;
        let p, y;
        l.currPage === 1 ? (p = 0, y = t.pageSize) : (p = h * (l.currPage - 2) + t.pageSize, y = h * (l.currPage - 1) + t.pageSize);
        let k = l.dataList.slice(p, y);
        k.length ? l.currPage === 1 ? await a(t.pageSize, k, p) : await a(h, k, p) : (l.currPage = 1, o()), u();
      } else
        n(), l.isEmpty = !0, l.currPage = 1, l.currList = [];
    }, u = () => {
      l.intervalId === null && (l.intervalId = setInterval(() => {
        l.currPage += 1, o();
      }, t.toggleDur));
    }, n = () => {
      l.intervalId && (clearInterval(l.intervalId), l.intervalId = null);
    }, i = b(() => {
      var h, p;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((h = l.currList.at(-1)) == null ? void 0 : h.value) || 0 : ((p = l.currList[0]) == null ? void 0 : p.value) || 0;
    }), s = b(() => function(h) {
      let p, y = i.value;
      p = h / y;
      const k = (L, A) => Math.round(L * Math.pow(10, A)) / Math.pow(10, A);
      return typeof p == "number" ? k(p * 100, 1) : 0;
    }), c = (h) => {
      h.style.opacity = "0", h.style.gridTemplateRows = "0fr";
    }, g = (h, p) => {
      h.offsetWidth, h.style.opacity = "1", h.style.gridTemplateRows = "1fr", p();
    }, f = async (h) => {
      h.style.opacity = "1";
    }, d = async (h, p) => {
      h.style.opacity = "0", h.style.margin = "0", h.style.gridTemplateRows = "0fr", await new Promise((y) => {
        setTimeout(() => {
          h.remove(), y(!0);
        }, t.toggleDuration);
      }), p();
    };
    return M(
      () => t.data,
      (h) => {
        r(h), o();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (h, p) => (m(), v("div", zt, [
      $("div", {
        class: "f-scroll-rank__list",
        style: T({ "--page-animate-dur": `${t.toggleDuration}ms` })
      }, [
        w(ke, {
          tag: "div",
          css: !1,
          onBeforeEnter: c,
          onEnter: g,
          onBeforeLeave: f,
          onLeave: d
        }, {
          default: te(() => [
            (m(!0), v(F, null, N(_(l).currList, (y, k) => (m(), v("div", {
              class: "f-scroll-rank__item",
              key: y
            }, [
              $("div", Ft, [
                $("div", Nt, [
                  t.showRank ? (m(), v("span", Wt, I(`NO.${y._index_}`), 1)) : R("", !0),
                  $("span", Ht, I(y.name || ""), 1),
                  $("div", Xt, [
                    t.showPercent ? (m(), v("span", Yt, I(`${_(s)(y.value)}%`), 1)) : R("", !0),
                    t.showRatio && typeof t.valueFormatter != "function" ? (m(), v("span", Mt, I(`${y.value} / ${_(i)}`), 1)) : R("", !0),
                    typeof t.valueFormatter == "function" ? (m(), v("span", Vt, I(`${y.formattedValue}`), 1)) : R("", !0)
                  ])
                ]),
                $("div", Ut, [
                  w(_(Y), {
                    percent: _(s)(y.value),
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
de.install = function(e) {
  e.component("FScrollRank", de);
};
const Qt = {
  title: "ScrollRank 滚动排名",
  category: "滚动排名",
  status: "20%",
  install(e) {
    e.use(de);
  }
}, Gt = {
  width: "100%",
  height: "100%"
}, qt = ["cx", "cy"], Zt = ["values", "dur"], Kt = ["fill"], Jt = ["fill", "x", "y"], jt = ["href", "width", "height", "x", "y"], he = /* @__PURE__ */ D({
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
        width: 1,
        color: "#ffde93",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 700,
        radius: 100
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
        offest: [0, 0],
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
    const t = e, l = x(), r = Se(), a = X({
      halo: {
        show: !0,
        duration: 700,
        color: "#3891c2",
        radius: 100
      },
      title: {
        show: !0,
        offest: [0, 0],
        color: "black",
        fontSize: 16
      },
      icon: {
        show: !0,
        url: "",
        width: 10,
        height: 10
      }
    }), o = X({
      points: []
    }), u = (g) => {
      let { offsetX: f, offsetY: d } = g;
      const h = (f / i.value).toFixed(2), p = (d / s.value).toFixed(2);
      r == null || r.emit("map-click", h, p, g);
    }, n = () => {
    }, { width: i, height: s } = V(l, n), c = () => {
      let g = z(fe(t.points));
      o.points = g.map((f, d) => (console.log("icon", f.icon), {
        ...f,
        halo: O({}, a.halo, z(t.halo), f.halo),
        title: O({}, a.title, z(t.title), f.title),
        icon: O({}, a.icon, z(t.icon), f.icon),
        key: `${f.coordinate.toString()}${d}`
      })), console.log("points", o.points);
    };
    return M(() => t, (g) => {
      c();
    }, {
      deep: !0,
      immediate: !0
    }), (g, f) => (m(), v("div", {
      ref_key: "flightChart",
      ref: l,
      class: "f-flight-chart"
    }, [
      $("div", {
        class: "f-flight-chart__wrap",
        style: T(`background-image: url(${t.bgUrl})`),
        onClick: u
      }, [
        (m(), v("svg", Gt, [
          (m(!0), v(F, null, N(o.points, (d, h) => (m(), v("g", {
            key: d.key
          }, [
            $("defs", null, [
              d.halo.show ? (m(), v("circle", {
                key: 0,
                id: "halo",
                cx: d.coordinate[0] * _(i),
                cy: d.coordinate[1] * _(s)
              }, [
                $("animate", {
                  "attribute-name": "r",
                  values: `1;${d.halo.radius}`,
                  dur: `${d.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Zt)
              ], 8, qt)) : R("", !0)
            ]),
            d.halo.show ? (m(), v("use", {
              key: 0,
              "xlink:href": "#halo",
              fill: d.halo.color
            }, null, 8, Kt)) : R("", !0),
            d.title.show ? (m(), v("text", {
              key: 1,
              style: T({ fontSize: `${d.title.fontSize}px` }),
              fill: d.title.color,
              x: d.coordinate[0] * _(i) + d.title.offest[0],
              y: d.coordinate[1] * _(s) + d.title.offest[1]
            }, I(d.name), 13, Jt)) : R("", !0),
            d.icon.show ? (m(), v("image", {
              key: 2,
              href: d.icon.url,
              width: d.icon.width,
              height: d.icon.height,
              x: d.coordinate[0] * _(i),
              y: d.coordinate[1] * _(s)
            }, null, 8, jt)) : R("", !0)
          ]))), 128))
        ]))
      ], 4)
    ], 512));
  }
});
he.install = function(e) {
  e.component("FFlightChart", he);
};
const el = {
  title: "FFlightChart 飞线图",
  category: "飞线图",
  status: "20%",
  install(e) {
    e.use(he);
  }
}, tl = [
  it,
  st,
  ot,
  ht,
  pt,
  xt,
  Tt,
  kt,
  Et,
  Bt,
  Qt,
  el
], rl = {
  version: "1.0.12",
  install(e) {
    tl.forEach((t) => e.use(t));
  }
};
export {
  G as BorderBox1,
  q as BorderBox2,
  ue as DigitalScroll,
  ae as DynamicParticle,
  he as FlightChart,
  Z as Loading1,
  K as Loading2,
  Y as Progress,
  se as ScreenContainer,
  de as ScrollRank,
  ce as ScrollTable,
  J as ScrollText,
  rl as default
};
