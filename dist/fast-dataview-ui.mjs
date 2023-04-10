import './style.css';
import { getCurrentScope as Xe, onScopeDispose as Ye, unref as k, watch as ee, ref as L, onMounted as te, onUnmounted as Me, nextTick as Ve, defineComponent as N, computed as I, createVNode as x, renderSlot as G, openBlock as v, createElementBlock as _, normalizeStyle as O, createElementVNode as $, toDisplayString as E, reactive as J, provide as xe, createCommentVNode as z, inject as ke, normalizeClass as q, getCurrentInstance as Ee, onBeforeUnmount as Ge, Fragment as H, renderList as V, TransitionGroup as Oe, withCtx as ue, normalizeProps as Qe, guardReactiveProps as Ue, withDirectives as be, vShow as Se, createStaticVNode as qe } from "vue";
function Ke(e, t) {
  const l = window.MutationObserver, r = new l(t);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var Ce;
const Ae = typeof window < "u", Ze = (e) => typeof e == "string", de = () => {
};
Ae && ((Ce = window == null ? void 0 : window.navigator) != null && Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function he(e) {
  return typeof e == "function" ? e() : k(e);
}
function Je(e, t) {
  function l(...r) {
    return new Promise((c, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(c).catch(o);
    });
  }
  return l;
}
function je(e, t = {}) {
  let l, r, c = de;
  const o = (n) => {
    clearTimeout(n), c(), c = de;
  };
  return (n) => {
    const i = he(e), s = he(t.maxWait);
    return l && o(l), i <= 0 || s !== void 0 && s <= 0 ? (r && (o(r), r = null), Promise.resolve(n())) : new Promise((a, p) => {
      c = t.rejectOnCancel ? p : a, s && !r && (r = setTimeout(() => {
        l && o(l), r = null, a(n());
      }, s)), l = setTimeout(() => {
        r && o(r), r = null, a(n());
      }, i);
    });
  };
}
function et(e) {
  return e;
}
function tt(e) {
  return Xe() ? (Ye(e), !0) : !1;
}
function lt(e, t = 200, l = {}) {
  return Je(je(t, l), e);
}
function rt(e) {
  var t;
  const l = he(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const nt = Ae ? window : void 0;
function it(...e) {
  let t, l, r, c;
  if (Ze(e[0]) || Array.isArray(e[0]) ? ([l, r, c] = e, t = nt) : [t, l, r, c] = e, !t)
    return de;
  Array.isArray(l) || (l = [l]), Array.isArray(r) || (r = [r]);
  const o = [], u = () => {
    o.forEach((a) => a()), o.length = 0;
  }, n = (a, p, g) => (a.addEventListener(p, g, c), () => a.removeEventListener(p, g, c)), i = ee(() => rt(t), (a) => {
    u(), a && o.push(...l.flatMap((p) => r.map((g) => n(a, p, g))));
  }, { immediate: !0, flush: "post" }), s = () => {
    i(), u();
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
  const c = L(0), o = L(0), u = L(0), n = L(0);
  let i, s = null, a = null;
  const p = (f = !0) => new Promise((w) => {
    Ve(() => {
      a = e.value, c.value = e.value ? e.value.clientWidth : 0, o.value = e.value ? e.value.clientHeight : 0, u.value = a ? a.getBoundingClientRect().width : 0, n.value = a ? a.getBoundingClientRect().height : 0, e.value ? (!c.value || !o.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && f && t(), w(!0);
    });
  }), g = () => {
    s = Ke(a, i), it(window, "resize", i);
  }, y = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, d = async () => {
    await p(!1), i = lt(p, 200), g(), typeof l == "function" && l();
  };
  return te(() => {
    d();
  }), Me(() => {
    y();
  }), {
    width: c,
    height: o,
    afterWidth: u,
    afterHeight: n,
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
  }
}, M = Object.assign, re = (e) => Array.isArray(e) && e.length, ae = (e) => Array.isArray(e) && e || [], W = (e) => e >= 0 ? e : 0, dt = (e, t, l = "reverse") => e.sort(ht(t, l)), ht = (e, t = "reverse") => function(l, r) {
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
}, ne = /* @__PURE__ */ N({
  name: "FBorderBox1",
  props: Be,
  setup(e, {
    slots: t
  }) {
    const l = L(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let c = I(() => re(e.color) ? M(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = le(l);
    return {
      width: o,
      height: u,
      initWH: n,
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
      realColor: o,
      title: u
    } = this, n = 20;
    let i = c || 2, s = W(t - i - 2), a = W(l - i - 2);
    return x("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [x("svg", {
      class: "f-svg-container",
      width: s,
      height: a
    }, [x("polygon", {
      fill: r,
      stroke: o[0],
      "stroke-width": i,
      points: `
            ${n} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${a - n}, ${s - n} ${a},
            ${n} ${a}, ${i} ${a - n}, ${i} ${n}
          `
    }, null), x("polyline", {
      stroke: o[1],
      "stroke-width": i + 1,
      points: `
            ${n - 8} 0,0 ${n - 8}
          `
    }, null), x("polyline", {
      stroke: o[1],
      "stroke-width": i + 1,
      points: `
            ${s} ${a - n + 8}, ${s - n + 8 + i} ${a}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${n + 15}, ${i} ${n}, ${n} ${i} , ${n + 15} ${i}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
           ${n + 15} ${a}, ${n}  ${a}, ${i} ${a - n}, ${i} ${a - n - 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
           ${s - n - 15} ${i}, ${s - n} ${i}, ${s - i} ${n}, ${s - i} ${n + 15}
          `
    }, null), x("polyline", {
      fill: "none",
      stroke: o[1],
      "stroke-width": i + 2,
      points: `
          ${s - n - 15} ${a}, ${s - n} ${a}, ${s - i} ${a - n}, ${s - i} ${a - n - 15}
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
    }, [x("div", null, [G(e, "default")])])]);
  }
});
ne.install = function(e) {
  e.component(ne.name, ne);
};
const ft = {
  title: "border 边框",
  category: "边框",
  status: "20%",
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
    let c = I(() => re(e.color) ? M(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = le(l);
    return {
      width: o,
      height: u,
      initWH: n,
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
      realColor: o,
      duration: u
    } = this;
    let n = c || 3, i = W(n), s = W(n), a = W(t - n), p = W(n), g = W(t - n), y = W(l - n), d = W(n), f = W(l - n);
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
        "--duration": `${u}s`
      },
      stroke: o[0],
      "stroke-width": n,
      fill: r,
      d: `M ${i} ${s}, L ${a} ${p}, L ${g} ${y}, L ${d} ${f}, Z`
    }, null)]), x("div", {
      class: "f-border-box-content"
    }, [G(e, "default")])]);
  }
});
ie.install = function(e) {
  e.component(ie.name, ie);
};
const gt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
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
    let c = I(() => re(e.color) ? M(r, e.color) : r);
    const {
      width: o,
      height: u,
      initWH: n
    } = le(l);
    return {
      width: o,
      height: u,
      initWH: n,
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
se.install = function(e) {
  e.component(se.name, se);
};
const pt = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(se);
  }
}, yt = N({
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
    let r = I(() => re(e.color) ? M(l, e.color) : l);
    return {
      getLoadingStyle: I(() => ({
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
}, mt = /* @__PURE__ */ $("div", { class: "f-loading-round" }, null, -1), vt = { class: "loading-text" };
function _t(e, t, l, r, c, o) {
  return v(), _("div", {
    class: "f-loading-2",
    style: O(e.getLoadingStyle)
  }, [
    mt,
    $("div", vt, [
      G(e.$slots, "default", {}, () => [
        $("div", null, E(e.text), 1)
      ])
    ])
  ], 4);
}
const oe = /* @__PURE__ */ ze(yt, [["render", _t]]);
oe.install = function(e) {
  e.component(oe.name, oe);
};
const wt = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(oe);
  }
}, $t = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, xt = { class: "f-screen-container" }, pe = /* @__PURE__ */ N({
  name: "index",
  props: $t,
  setup(e) {
    const t = e, l = L(null), r = J({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let c = L(1), o = L(1);
    xe("scaleX", c), xe("scaleY", o);
    const u = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = l.value.clientWidth, r.height = l.value.clientHeight);
      const { width: p, height: g } = window.screen;
      r.screenWidth = p, r.screenHeight = g;
    }, n = () => {
      r.width && r.height ? (l.value.style.width = `${r.width}px`, l.value.style.height = `${r.height}px`) : (l.value.style.width = `${r.screenWidth}px`, l.value.style.height = `${r.screenHeight}px`);
    }, i = () => {
      const p = document.body.clientWidth, g = document.body.clientHeight, y = r.width || r.screenWidth, d = r.height || r.screenHeight, f = p / +y, w = g / +d;
      c.value = f, o.value = w, l.value.style.transform = `scale(${f}, ${w})`;
    };
    return le(l, () => {
      i();
    }, () => {
      u(), n(), i(), t.onAfterResize(), r.isReady = !0;
    }), (p, g) => (v(), _("div", xt, [
      $("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: l
      }, [
        r.isReady ? G(p.$slots, "default", { key: 0 }) : z("", !0)
      ], 512)
    ]));
  }
});
pe.install = function(e) {
  e.component("FScreenContainer", pe);
};
const kt = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(pe);
  }
}, bt = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, St = 30, Ct = 1 / St;
class ye {
  constructor(t, l, r, c, o, u, n) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = r, this.targetY = c, this.time = o, this.radius = u, this.colors = n, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, l, r, c) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && c) {
      let o = r - this.x, u = c - this.y, n = Math.sqrt(o ** 2 + u ** 2), i = t / n;
      i = i > 7 ? 7 : i;
      let s = Math.atan2(u, o), a = Math.cos(s), p = Math.sin(s), g = a * i * -l, y = p * i * -l;
      this.velocityX += g, this.velocityY += y;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Ct);
  }
  change(t, l, r) {
    this.targetX = t, this.targetY = l, this.colors = r;
  }
}
const Te = 30;
class Pt {
  constructor(t, l, r) {
    this.radius = l, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, r = l.length, c = this.particleArr, o = c.length;
      for (let n = 0; n < r; n++) {
        const { targetX: i, targetY: s, colors: a } = l[n];
        c[n] ? c[n].change(i, s, a) : c[n] = new ye(this.width, this.height, i, s, Te, this.radius, a);
      }
      r < o && (this.particleArr = c.splice(0, r)), c = this.particleArr;
      let u = c.length;
      for (; u; ) {
        let n = ~~(Math.random() * u--), i = c[n], { targetX: s, targetY: a, colors: p } = i;
        i.targetX = c[u].targetX, i.targetY = c[u].targetY, i.colors = c[u].colors, c[u].targetX = s, c[u].targetY = a, c[u].colors = p;
      }
    } else
      this.particleArr = t.particleData.map((l) => new ye(this.width, this.height, l.targetX, l.targetY, Te, this.radius, l.colors));
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
        const o = document.createElement("canvas"), u = o.getContext("2d"), n = this.width, i = this.height;
        o.width = n, o.height = i, u == null || u.drawImage(c, 0, 0, n, i);
        const s = u == null ? void 0 : u.getImageData(0, 0, n, i).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let a = 0; a < i; a += 5)
          for (let p = 0; p < n; p += 5) {
            const g = (p + a * n) * 4, y = s[g + 3];
            if (y == 0)
              continue;
            const d = s[g], f = s[g + 1], w = s[g + 2];
            if (d + f + w + y) {
              const m = new ye(this.width, this.height, p, a, It, this.radius, `rgba(${d},${f},${w},${y})`);
              this.particleData.push(m);
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
    const o = L(null), u = L(null);
    let n = L(), i = L();
    const s = async (p) => {
      i.value = new Re(p, l.width, l.height, l.radius), await i.value.createParticleData(), n.value.changeImg(i.value);
    }, a = async () => {
      i.value = new Re(l.src, l.width, l.height, l.radius), await i.value.createParticleData(), o.value && (u.value = o.value.getContext("2d"), n.value = new Pt(o.value, l.radius, l.strength), o.value.addEventListener("mousemove", (p) => {
        const { left: g, top: y } = o.value.getBoundingClientRect(), { clientX: d, clientY: f } = p;
        n.value.mouseX = (d - g) * (1 / r.value), n.value.mouseY = (f - y) * (1 / c.value);
      }), n.value.drawCanvas(), n.value.changeImg(i.value));
    };
    return te(() => {
      a();
    }), t({
      toggleImg: s
    }), (p, g) => (v(), _("div", null, [
      $("canvas", {
        ref_key: "canvasRef",
        ref: o,
        width: l.width,
        height: l.height
      }, null, 8, Lt)
    ]));
  }
});
me.install = function(e) {
  e.component("FDynamicParticle", me);
};
const Dt = {
  title: "particle 粒子",
  category: "粒子",
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
    handleCellClick: (r, c, o, u, n) => {
      e.emit("cell-click", c, o, u, n, r);
    }
  };
}
function Tt(e, t, l) {
  const { handleToggle: r } = Ne(l), c = (g) => {
    let y = ae(g);
    return Y(y);
  }, o = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
  }, u = async (g, y, d) => {
    let f = d;
    y.map((w) => w._index_ = ++f), e.currData.length ? g === t.pageSize ? e.currData = [...y] : (e.currData.push(...y), e.currData.splice(0, g)) : e.currData.push(...y);
  }, n = async () => {
    if (e.tableData.length) {
      a(!1, !0), e.isEmpty = !1;
      let g;
      t.mode === "single" ? g = t.togglePage : g = t.pageSize;
      let y, d;
      e.currPage === 1 ? (y = 0, d = t.pageSize) : (y = g * (e.currPage - 2) + t.pageSize, d = g * (e.currPage - 1) + t.pageSize);
      let f = e.tableData.slice(y, d);
      f.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, f, y) : e.currPage === 1 ? await u(t.pageSize, f, y) : await u(g, f, y) : (e.currPage = 1, o(), n()), i();
    } else
      a(), e.currPage = 1, e.currData = [], e.isEmpty = !0, s();
  }, i = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, n();
    }, t.toggleDur));
  }, s = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      r(t.name);
    }, t.emptyEmitDur));
  }, a = (g = !0, y = !0) => {
    e.intervalId && g && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && y && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: c,
    setCurrData: n,
    setPageInterval: i,
    setEmptyTimeout: s,
    clearTimer: a,
    setPage: (g = 1) => {
      a(), e.currPage = g;
      let y;
      t.mode === "single" ? y = t.togglePage : y = t.pageSize;
      let d = y * (e.currPage - 1), f = y * (e.currPage - 1) + t.pageSize, w = e.tableData.slice(d, f);
      w.length ? (u(t.pageSize, w, d), i()) : n(), e.tableData.length || s();
    }
  };
}
function Rt(e, t) {
  const l = I(() => function(s, a) {
    const p = ["f-scroll-table__row"];
    return t.stripe && a % 2 === 1 && p.push("f-scroll-table_row--striped"), p;
  }), r = I(() => {
    const s = ["cell"];
    return t.wrap ? s.push("cell--wrap") : s.push("cell--nowrap"), s;
  }), c = I(() => function(s) {
    let a = s.reduce((p, g) => p += g.width, 0);
    return {
      width: `${a}px`,
      "max-width": `${a}px`
    };
  }), o = I(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = I(() => function(s) {
    return {};
  }), n = I(() => function(s) {
    return {
      width: `${s.width}px`,
      "max-width": `${s.width}px`,
      "text-align": s.align || t.align || "start"
    };
  }), i = I(() => function(s, a, p, g) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: p,
      columnIndex: g,
      row: s,
      column: a
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: r,
    getTableStyle: c,
    getBodyStyle: o,
    getRowStyle: u,
    getExtraCellStyle: n,
    getCellStyle: i
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
    const t = e, l = L(), r = L(), c = I(() => {
      var g, y, d, f;
      let o = ((g = l.value) == null ? void 0 : g.offsetWidth) || 0, u = ((y = l.value) == null ? void 0 : y.offsetHeight) || 0, n = ((d = r.value) == null ? void 0 : d.offsetWidth) || 0, i = ((f = r.value) == null ? void 0 : f.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && i < u || ["left", "right"].includes(t.direction) && n < o))
        return {
          "--text-scroll-width": `${o}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let s, a, p;
      return ["up", "down"].includes(t.direction) && (s = u + i, a = s / t.speed || 0, p = `up-scroll linear ${a}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = o + n, a = s / t.speed || 0, p = `left-scroll linear ${a}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${o}px`,
        "--text-scroll-height": `${u}px`,
        animation: p
      };
    });
    return (o, u) => (v(), _("div", {
      ref_key: "scrollText",
      ref: l,
      class: q(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      $("div", {
        ref_key: "textContent",
        ref: r,
        class: "text-content",
        style: O(k(c))
      }, [
        G(o.$slots, "default")
      ], 4)
    ], 2));
  }
});
ce.install = function(e) {
  e.component("FScrollText", ce);
};
const Et = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(ce);
  }
}, Ot = {
  class: "f-scroll-table__head"
}, At = ["onClick"], Bt = {
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
    const l = e, r = J({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), c = Ee(), o = L(), {
      deepCloneArr: u,
      setCurrData: n,
      setPageInterval: i,
      setEmptyTimeout: s,
      clearTimer: a,
      setPage: p
    } = Tt(r, l, c), {
      handleCellClick: g
    } = Ne(c), {
      getRowClass: y,
      getCellClass: d,
      getTableStyle: f,
      getBodyStyle: w,
      getRowStyle: D,
      getExtraCellStyle: m,
      getCellStyle: b
    } = Rt(r, l), h = (P) => {
      P.style.opacity = "0", P.style.gridTemplateRows = "0fr";
    }, A = (P, F) => {
      P.offsetWidth, P.style.opacity = "1", P.style.gridTemplateRows = "1fr", F();
    }, S = async (P) => {
      P.style.opacity = "1";
    }, Q = async (P, F) => {
      P.style.opacity = "0", P.style.gridTemplateRows = "0fr", await new Promise((C) => {
        setTimeout(() => {
          P.remove(), C(!0);
        }, l.pageAnimateDur);
      }), F();
    };
    return ee(() => l.data, (P) => {
      r.tableData = u(P), n();
    }, {
      immediate: !0,
      deep: !0
    }), te(() => {
      l.mouseEvent && (o.value.addEventListener("mouseenter", () => {
        a(!0, !0), r.isStopToggle = !0;
      }), o.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? i() : s();
      }));
    }), Ge(() => {
      a();
    }), t({
      setPage: p
    }), (P, F) => (v(), _("div", {
      ref: "scrollTable",
      class: q(["f-scroll-table", {
        "is-border": l.border
      }]),
      style: O(k(f)(l.columns))
    }, [$("div", Ot, [(v(!0), _(H, null, V(l.columns, (C, R) => (v(), _("div", {
      class: "f-scroll-table__cell",
      style: O(k(m)(C)),
      key: R
    }, E(C.label), 5))), 128))]), $("div", {
      ref_key: "scrollTable__body",
      ref: o,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: O(k(w))
    }, [x(Oe, {
      tag: "div",
      css: !1,
      onBeforeEnter: h,
      onEnter: A,
      onBeforeLeave: S,
      onLeave: Q
    }, {
      default: ue(() => [(v(!0), _(H, null, V(r.currData, (C, R) => (v(), _("div", {
        class: "f-scroll-table__row-wrap",
        key: C
      }, [$("div", {
        class: q(k(y)(C, R))
      }, [(v(!0), _(H, null, V(l.columns, (T, X) => (v(), _("div", {
        class: "f-scroll-table__cell",
        style: O([k(m)(T), k(b)(C, T.type === "index" ? "_index_" : T.prop, R, X)]),
        key: `${C[T.prop]}${X}`,
        onClick: (K) => k(g)(K, C, C[T.prop], R, X)
      }, [T.type === "index" ? (v(), _("div", {
        key: 0,
        class: q(k(d))
      }, E(C._index_ || ""), 3)) : T.type === "scroll" ? (v(), _("div", Bt, [x(k(ce), Qe(Ue(T.scrollOption)), {
        default: ue(() => [$("div", null, E(C[T.prop]), 1)]),
        _: 2
      }, 1040)])) : T.slot ? (v(), _("div", {
        key: 2,
        class: q(k(d))
      }, [G(P.$slots, T.slot, {
        params: {
          row: C,
          column: T.prop,
          $index: R
        }
      })], 2)) : (v(), _("div", {
        key: 3,
        class: q(k(d))
      }, E(C[T.prop]), 3))], 12, At))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
ve.install = function(e) {
  e.component("FScrollTable", ve);
};
const zt = {
  title: "ScrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
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
    let r = I(() => re(e.color) ? M(l, e.color) : l);
    return {
      getProgressStyle: I(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Ft(e, t, l, r, c, o) {
  return v(), _("div", {
    class: "f-progress",
    style: O(e.getProgressStyle)
  }, [
    $("div", {
      class: "progress-inner",
      style: O({ width: `${e.percent}%` })
    }, [
      G(e.$slots, "default", { percent: e.percent }, () => [
        $("span", null, E(e.percent ? `${e.percent}%` : ""), 1)
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
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(j);
  }
}, Ht = { class: "f-digital-scroll" }, Xt = { class: "f-digital-scroll__list" }, Yt = { class: "f-digital-scroll__point" }, _e = /* @__PURE__ */ N({
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
    let l = J({
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
    }, c = I(() => function(o) {
      return console.log("str", o), {
        top: `-${Number(o) * 100}%`
      };
    });
    return te(() => {
      l.stringList = r(t.number);
    }), ee(
      () => t.number,
      (o) => {
        console.log("变化", o), l.stringList = r(t.number);
      }
    ), (o, u) => (v(), _("div", Ht, [
      $("div", Xt, [
        (v(!0), _(H, null, V(k(l).stringList, (n, i) => (v(), _("div", {
          class: q(["f-digital-scroll__item", { "is-small": n === "." }]),
          key: i
        }, [
          be($("div", Yt, ".", 512), [
            [Se, n === "."]
          ]),
          be($("div", {
            class: "f-digital-scroll__digital-list",
            style: O(k(c)(n))
          }, [
            (v(), _(H, null, V(10, (s, a) => $("div", {
              class: "f-digital-scroll__digital-item",
              key: a
            }, E(a), 1)), 64))
          ], 4), [
            [Se, n !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
_e.install = function(e) {
  e.component("FDigitalScroll", _e);
};
const Mt = {
  title: "digitalScroll 数字滚动",
  category: "数字滚动",
  status: "20%",
  install(e) {
    e.use(_e);
  }
}, Vt = { class: "f-scroll-rank" }, Gt = { class: "f-scroll-rank__item-wrap" }, Qt = { class: "f-scroll-rank__item-info" }, Ut = {
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
}, el = { class: "f-scroll-rank__item-progress" }, we = /* @__PURE__ */ N({
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
    let l = J({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const r = (d) => {
      let f = Y(ae(d)), w = [];
      t.order === "default" ? w = f : w = dt(f, "value", t.order), typeof t.valueFormatter == "function" && (w = w.map((D, m) => {
        var b;
        return D.formattedValue = (b = t.valueFormatter) == null ? void 0 : b.call(null, {
          name: D.name,
          value: D.value,
          maxValue: i.value,
          index: m
        }), D;
      })), l.dataList = w;
    }, c = async (d, f, w) => {
      let D = w;
      f.map((m) => m._index_ = ++D), l.currList.length ? d === t.pageSize ? l.currList = [...f] : (l.currList.push(...f), l.currList.splice(0, d)) : l.currList.push(...f);
    }, o = async () => {
      if (l.dataList.length) {
        l.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let f, w;
        l.currPage === 1 ? (f = 0, w = t.pageSize) : (f = d * (l.currPage - 2) + t.pageSize, w = d * (l.currPage - 1) + t.pageSize);
        let D = l.dataList.slice(f, w);
        D.length ? l.currPage === 1 ? await c(t.pageSize, D, f) : await c(d, D, f) : (l.currPage = 1, o()), u();
      } else
        n(), l.isEmpty = !0, l.currPage = 1, l.currList = [];
    }, u = () => {
      l.intervalId === null && (l.intervalId = setInterval(() => {
        l.currPage += 1, o();
      }, t.toggleDur));
    }, n = () => {
      l.intervalId && (clearInterval(l.intervalId), l.intervalId = null);
    }, i = I(() => {
      var d, f;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = l.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((f = l.currList[0]) == null ? void 0 : f.value) || 0;
    }), s = I(() => function(d) {
      let f, w = i.value;
      f = d / w;
      const D = (m, b) => Math.round(m * Math.pow(10, b)) / Math.pow(10, b);
      return typeof f == "number" ? D(f * 100, 1) : 0;
    }), a = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, p = (d, f) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", f();
    }, g = async (d) => {
      d.style.opacity = "1";
    }, y = async (d, f) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise((w) => {
        setTimeout(() => {
          d.remove(), w(!0);
        }, t.toggleDuration);
      }), f();
    };
    return ee(
      () => t.data,
      (d) => {
        r(d), o();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, f) => (v(), _("div", Vt, [
      $("div", {
        class: "f-scroll-rank__list",
        style: O({ "--page-animate-dur": `${t.toggleDuration}ms` })
      }, [
        x(Oe, {
          tag: "div",
          css: !1,
          onBeforeEnter: a,
          onEnter: p,
          onBeforeLeave: g,
          onLeave: y
        }, {
          default: ue(() => [
            (v(!0), _(H, null, V(k(l).currList, (w, D) => (v(), _("div", {
              class: "f-scroll-rank__item",
              key: w
            }, [
              $("div", Gt, [
                $("div", Qt, [
                  t.showRank ? (v(), _("span", Ut, E(`NO.${w._index_}`), 1)) : z("", !0),
                  $("span", qt, E(w.name || ""), 1),
                  $("div", Kt, [
                    t.showPercent ? (v(), _("span", Zt, E(`${k(s)(w.value)}%`), 1)) : z("", !0),
                    t.showRatio && typeof t.valueFormatter != "function" ? (v(), _("span", Jt, E(`${w.value} / ${k(i)}`), 1)) : z("", !0),
                    typeof t.valueFormatter == "function" ? (v(), _("span", jt, E(`${w.formattedValue}`), 1)) : z("", !0)
                  ])
                ]),
                $("div", el, [
                  x(k(j), {
                    percent: k(s)(w.value),
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
we.install = function(e) {
  e.component("FScrollRank", we);
};
const tl = {
  title: "ScrollRank 滚动排名",
  category: "滚动排名",
  status: "20%",
  install(e) {
    e.use(we);
  }
}, ll = {
  width: "100%",
  height: "100%"
}, rl = /* @__PURE__ */ qe('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), nl = ["id", "cx", "cy"], il = ["values", "dur"], sl = ["dur"], ol = ["id"], al = ["xlink:href"], cl = ["xlink:href", "fill", "mask"], ul = ["fill", "x", "y"], dl = ["href", "width", "height", "x", "y"], hl = ["id", "d"], fl = ["id"], gl = ["r"], pl = ["dur", "path"], yl = ["xlink:href", "stroke-width", "stroke"], ml = ["xlink:href", "stroke-width", "stroke", "mask"], vl = ["from", "to", "dur"], $e = /* @__PURE__ */ N({
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
        color: "#ffde93",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 700,
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
    const c = J({
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
        type: "line",
        width: 3,
        color: "#ffde93",
        orbitColor: "rgba(103, 224, 227, .2)",
        duration: 700,
        radius: 100,
        k: -0.5,
        curvature: 5
      }
    }), o = J({
      points: [],
      paths: []
    }), u = (m) => {
      let { offsetX: b, offsetY: h } = m;
      const A = (b / s.value).toFixed(2), S = (h / a.value).toFixed(2);
      r == null || r.emit("map-click", A, S, m);
    }, n = () => {
      p(), g();
    }, i = () => {
      p(), g();
    }, { width: s, height: a } = le(l, n, i), p = () => {
      let m = Y(ae(t.points));
      o.points = m.map((b, h) => (console.log("icon", b.icon), {
        ...b,
        halo: M({}, c.halo, Y(t.halo), b.halo),
        title: M({}, c.title, Y(t.title), b.title),
        icon: M({}, c.icon, Y(t.icon), b.icon),
        key: `${b.coordinate.toString()}${h}`
      })), console.log("points", o.points);
    }, g = () => {
      let m = Y(ae(t.paths));
      o.paths = m.map((b, h) => {
        var K, U;
        let { source: A, route: S, target: Q, line: P } = b, F = M({}, c.line, Y(t.line), P), C = (K = o.points.find(({ name: B }) => B === A)) == null ? void 0 : K.coordinate, R = (U = o.points.find(({ name: B }) => B === Q)) == null ? void 0 : U.coordinate, T = S ? [C, ...S, R] : [C, R], X = [];
        for (let B = 0; B < T.length - 1; B++) {
          let Fe = T[B], Z = y(Fe, T[B + 1], F.k, F.curvature);
          console.log("path", Z);
          let We = `M${Z[0].toString()} Q${Z[1].toString()} ${Z[2].toString()}`, He = `${Z.toString()}`;
          X.push({ path: Z, d: We, key: He });
        }
        return {
          ...b,
          line: F,
          routeList: X
        };
      }), console.log("state.paths", o.paths);
    }, y = (m, b, h, A) => {
      console.log("start", m);
      let [S, Q] = m, [P, F] = b;
      const [C, R] = [(S + P) / 2, (Q + F) / 2];
      let X = De([S, Q], [P, F]) / A, K = X / 2, [U, B] = [C, R];
      do
        U += K, B = d(h, [C, R], U)[1];
      while (De([C, R], [U, B]) < X);
      return [m, [U, B], b];
    };
    function d(m, [b, h], A) {
      const S = h - m * b + m * A;
      return [A, S];
    }
    let f = I(() => function(m) {
      return `M${m[0][0] * s.value},${m[0][1] * a.value} 
    Q${m[1][0] * s.value},${m[1][1] * a.value} 
    ${m[2][0] * s.value},${m[2][1] * a.value}`;
    }), w = I(() => function(m) {
      return `"M${m[0][0] * s.value},${m[0][1] * a.value} Q${m[1][0] * s.value},${m[1][1] * a.value} ${m[2][0] * s.value},${m[2][1] * a.value}"`;
    }), D = I(() => function(m) {
      return r ? r.proxy.$refs[m][0].getTotalLength() : 0;
    });
    return ee(() => t, (m) => {
      p(), g();
    }, {
      deep: !0,
      immediate: !0
    }), (m, b) => (v(), _("div", {
      ref_key: "flightChart",
      ref: l,
      class: "f-flight-chart"
    }, [
      $("div", {
        class: "f-flight-chart__wrap",
        style: O(`background-image: url(${t.bgUrl})`),
        onClick: u
      }, [
        (v(), _("svg", ll, [
          rl,
          (v(!0), _(H, null, V(o.points, (h, A) => (v(), _("g", {
            key: h.key
          }, [
            $("defs", null, [
              h.halo.show ? (v(), _("circle", {
                key: 0,
                id: `halo${h.key}`,
                cx: h.coordinate[0] * k(s),
                cy: h.coordinate[1] * k(a)
              }, [
                $("animate", {
                  attributeName: "r",
                  values: `1;${h.halo.radius}`,
                  dur: `${h.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, il),
                $("animate", {
                  attributeName: "opacity",
                  values: "1;0",
                  dur: `${h.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, sl)
              ], 8, nl)) : z("", !0),
              $("mask", {
                id: `mask${h.key}`
              }, [
                $("use", {
                  "xlink:href": `#halo${h.key}`,
                  fill: "url(#haloGradient)"
                }, null, 8, al)
              ], 8, ol)
            ]),
            h.halo.show ? (v(), _("use", {
              key: 0,
              "xlink:href": `#halo${h.key}`,
              fill: h.halo.color,
              mask: `url(#mask${h.key})`
            }, null, 8, cl)) : z("", !0),
            h.title.show ? (v(), _("text", {
              key: 1,
              class: "point__title",
              style: O({ fontSize: `${h.title.fontSize}px` }),
              fill: h.title.color,
              x: h.coordinate[0] * k(s) + h.title.offest[0],
              y: h.coordinate[1] * k(a) + h.title.offest[1]
            }, E(h.name), 13, ul)) : z("", !0),
            h.icon.show ? (v(), _("image", {
              key: 2,
              class: "point__icon",
              href: h.icon.url,
              width: h.icon.width,
              height: h.icon.height,
              x: h.coordinate[0] * k(s) - h.icon.width / 2,
              y: h.coordinate[1] * k(a) - h.icon.height / 2
            }, null, 8, dl)) : z("", !0)
          ]))), 128)),
          (v(!0), _(H, null, V(o.paths, (h, A) => (v(), _(H, null, [
            (v(!0), _(H, null, V(h.routeList, (S, Q) => (v(), _("g", null, [
              $("defs", null, [
                $("path", {
                  id: S.key,
                  ref_for: !0,
                  ref: S.key,
                  d: k(f)(S.path),
                  fill: "transparent"
                }, null, 8, hl),
                $("mask", {
                  id: `mask${S.key}`
                }, [
                  $("circle", {
                    cx: "0",
                    cy: "0",
                    r: h.line.radius,
                    fill: "url(#lineGradient)"
                  }, [
                    $("animateMotion", {
                      dur: `${h.line.duration}ms`,
                      path: k(f)(S.path),
                      rotate: "auto",
                      repeatCount: "indefinite"
                    }, null, 8, pl)
                  ], 8, gl)
                ], 8, fl)
              ]),
              h.line.show && h.line.slot ? (v(), _("g", {
                key: 0,
                class: "line__inner",
                style: O({ "offset-path": `path(${k(w)(S.path)})` })
              }, [
                G(m.$slots, h.line.slot)
              ], 4)) : z("", !0),
              h.line.show ? (v(), _("use", {
                key: 1,
                "xlink:href": `#${S.key}`,
                "stroke-width": h.line.width,
                stroke: h.line.orbitColor
              }, null, 8, yl)) : z("", !0),
              h.line.show ? (v(), _("use", {
                key: 2,
                "xlink:href": `#${S.key}`,
                "stroke-width": h.line.width,
                stroke: h.line.color,
                mask: `url(#mask${S.key})`
              }, [
                $("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${k(D)(S.key)}`,
                  to: `${k(D)(S.key)}, 0`,
                  dur: `${h.line.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, vl)
              ], 8, ml)) : z("", !0)
            ]))), 256))
          ], 64))), 256))
        ]))
      ], 4)
    ], 512));
  }
});
$e.install = function(e) {
  e.component("FFlightChart", $e);
};
const _l = {
  title: "FFlightChart 飞线图",
  category: "飞线图",
  status: "20%",
  install(e) {
    e.use($e);
  }
}, wl = [
  ft,
  gt,
  pt,
  wt,
  kt,
  Dt,
  zt,
  Et,
  Wt,
  Mt,
  tl,
  _l
], xl = {
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
  $e as FlightChart,
  se as Loading1,
  oe as Loading2,
  j as Progress,
  pe as ScreenContainer,
  we as ScrollRank,
  ve as ScrollTable,
  ce as ScrollText,
  xl as default
};
