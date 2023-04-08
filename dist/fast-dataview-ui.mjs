import './style.css';
import { getCurrentScope as Re, onScopeDispose as Ae, unref as $, watch as q, ref as x, onMounted as Z, onUnmounted as Be, nextTick as Oe, defineComponent as T, computed as b, createVNode as m, renderSlot as B, openBlock as v, createElementBlock as w, normalizeStyle as E, createElementVNode as _, toDisplayString as I, reactive as K, provide as ge, createCommentVNode as z, inject as fe, normalizeClass as A, getCurrentInstance as Ne, onBeforeUnmount as We, Fragment as N, renderList as W, TransitionGroup as xe, withCtx as ee, normalizeProps as ze, guardReactiveProps as Fe, withDirectives as he, vShow as pe } from "vue";
function He(e, t) {
  const r = window.MutationObserver, n = new r(t);
  return n.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), n;
}
var ye;
const be = typeof window < "u", Xe = (e) => typeof e == "string", te = () => {
};
be && ((ye = window == null ? void 0 : window.navigator) != null && ye.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function re(e) {
  return typeof e == "function" ? e() : $(e);
}
function Ye(e, t) {
  function r(...n) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(a);
    });
  }
  return r;
}
function Me(e, t = {}) {
  let r, n, o = te;
  const a = (l) => {
    clearTimeout(l), o(), o = te;
  };
  return (l) => {
    const s = re(e), i = re(t.maxWait);
    return r && a(r), s <= 0 || i !== void 0 && i <= 0 ? (n && (a(n), n = null), Promise.resolve(l())) : new Promise((c, h) => {
      o = t.rejectOnCancel ? h : c, i && !n && (n = setTimeout(() => {
        r && a(r), n = null, c(l());
      }, i)), r = setTimeout(() => {
        n && a(n), n = null, c(l());
      }, s);
    });
  };
}
function Ve(e) {
  return e;
}
function Qe(e) {
  return Re() ? (Ae(e), !0) : !1;
}
function Ue(e, t = 200, r = {}) {
  return Ye(Me(t, r), e);
}
function Ge(e) {
  var t;
  const r = re(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const qe = be ? window : void 0;
function Ze(...e) {
  let t, r, n, o;
  if (Xe(e[0]) || Array.isArray(e[0]) ? ([r, n, o] = e, t = qe) : [t, r, n, o] = e, !t)
    return te;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [], u = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, h, f) => (c.addEventListener(h, f, o), () => c.removeEventListener(h, f, o)), s = q(() => Ge(t), (c) => {
    u(), c && a.push(...r.flatMap((h) => n.map((f) => l(c, h, f))));
  }, { immediate: !0, flush: "post" }), i = () => {
    s(), u();
  };
  return Qe(i), i;
}
const ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, le = "__vueuse_ssr_handlers__";
ne[le] = ne[le] || {};
ne[le];
var me;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(me || (me = {}));
var Ke = Object.defineProperty, ve = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, we = (e, t, r) => t in e ? Ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, et = (e, t) => {
  for (var r in t || (t = {}))
    Je.call(t, r) && we(e, r, t[r]);
  if (ve)
    for (var r of ve(t))
      je.call(t, r) && we(e, r, t[r]);
  return e;
};
const tt = {
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
et({
  linear: Ve
}, tt);
const J = (e, t, r, n) => {
  const o = x(0), a = x(0), u = x(0), l = x(0);
  let s, i = null, c = null;
  const h = (g = !0) => new Promise((y) => {
    Oe(() => {
      c = e.value, o.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = c ? c.getBoundingClientRect().width : 0, l.value = c ? c.getBoundingClientRect().height : 0, e.value ? (!o.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && g && t(), y(!0);
    });
  }), f = () => {
    i = He(c, s), Ze(window, "resize", s);
  }, p = () => {
    i && (i.disconnect(), i.takeRecords(), i = null);
  }, d = async () => {
    await h(!1), s = Ue(h, 200), f(), typeof r == "function" && r();
  };
  return Z(() => {
    d();
  }), Be(() => {
    p();
  }), {
    width: o,
    height: a,
    afterWidth: u,
    afterHeight: l,
    initWH: h
  };
}, Se = {
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
}, H = Object.assign, X = (e) => Array.isArray(e) && e.length, Ce = (e) => Array.isArray(e) && e || [], L = (e) => e >= 0 ? e : 0, rt = (e, t, r = "reverse") => e.sort(nt(t, r)), nt = (e, t = "reverse") => function(r, n) {
  return r[e] < n[e] ? t === "normal" ? -1 : 1 : r[e] > n[e] ? t === "normal" ? 1 : -1 : 0;
}, de = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  for (let n in e)
    e.hasOwnProperty(n) && (r[n] = de(e[n], t));
  return r;
}, M = /* @__PURE__ */ T({
  name: "FBorderBox1",
  props: Se,
  setup(e, {
    slots: t
  }) {
    const r = x(null), n = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let o = b(() => X(e.color) ? H(n, e.color) : n);
    const {
      width: a,
      height: u,
      initWH: l
    } = J(r);
    return {
      width: a,
      height: u,
      initWH: l,
      borderBox1: r,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      backgroundColor: n,
      strokeWidth: o,
      realColor: a,
      title: u
    } = this, l = 20;
    let s = o || 2, i = L(t - s - 2), c = L(r - s - 2);
    return m("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [m("svg", {
      class: "f-svg-container",
      width: i,
      height: c
    }, [m("polygon", {
      fill: n,
      stroke: a[0],
      "stroke-width": s,
      points: `
            ${l} ${s}, ${i - l} ${s}, ${i - s} ${l}, ${i - s} ${c - l}, ${i - l} ${c},
            ${l} ${c}, ${s} ${c - l}, ${s} ${l}
          `
    }, null), m("polyline", {
      stroke: a[1],
      "stroke-width": s + 1,
      points: `
            ${l - 8} 0,0 ${l - 8}
          `
    }, null), m("polyline", {
      stroke: a[1],
      "stroke-width": s + 1,
      points: `
            ${i} ${c - l + 8}, ${i - l + 8 + s} ${c}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": s + 2,
      points: `
            ${s} ${l + 15}, ${s} ${l}, ${l} ${s} , ${l + 15} ${s}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": s + 2,
      points: `
           ${l + 15} ${c}, ${l}  ${c}, ${s} ${c - l}, ${s} ${c - l - 15}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": s + 2,
      points: `
           ${i - l - 15} ${s}, ${i - l} ${s}, ${i - s} ${l}, ${i - s} ${l + 15}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": s + 2,
      points: `
          ${i - l - 15} ${c}, ${i - l} ${c}, ${i - s} ${c - l}, ${i - s} ${c - l - 15}
          `
    }, null), u ? m("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${l} ${s}, ${i - l} ${s}, ${i - s} ${l}, ${i - s} ${l + 15}, ${s} ${l + 15},
            ${s} ${l}
          `
    }, null) : null, u ? m("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), m("div", {
      class: "f-border-box-content"
    }, [m("div", null, [B(e, "default")])])]);
  }
});
M.install = function(e) {
  e.component(M.name, M);
};
const lt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(M);
  }
}, V = /* @__PURE__ */ T({
  name: "FBorderBox2",
  props: Se,
  setup(e, {
    slots: t
  }) {
    const r = x(null), n = ["white"];
    let o = b(() => X(e.color) ? H(n, e.color) : n);
    const {
      width: a,
      height: u,
      initWH: l
    } = J(r);
    return {
      width: a,
      height: u,
      initWH: l,
      borderBox2: r,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      backgroundColor: n,
      strokeWidth: o,
      realColor: a,
      duration: u
    } = this;
    let l = o || 3, s = L(l), i = L(l), c = L(t - l), h = L(l), f = L(t - l), p = L(r - l), d = L(l), g = L(r - l);
    return m("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [m("svg", {
      class: "f-svg-container",
      width: t,
      height: r
    }, [m("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`
      },
      stroke: a[0],
      "stroke-width": l,
      fill: n,
      d: `M ${s} ${i}, L ${c} ${h}, L ${f} ${p}, L ${d} ${g}, Z`
    }, null)]), m("div", {
      class: "f-border-box-content"
    }, [B(e, "default")])]);
  }
});
V.install = function(e) {
  e.component(V.name, V);
};
const st = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(V);
  }
}, Q = /* @__PURE__ */ T({
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
    const r = x(null), n = ["#4f29f0", "#c3c8de", "#414856"];
    let o = b(() => X(e.color) ? H(n, e.color) : n);
    const {
      width: a,
      height: u,
      initWH: l
    } = J(r);
    return {
      width: a,
      height: u,
      initWH: l,
      loading1: r,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: r,
      duration: n
    } = this;
    return m("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${n}s`
      }
    }, [m("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [m("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), m("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), m("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [m("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), m("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), m("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [m("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), m("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), r ? m("div", {
      class: "f-loading-text",
      "data-text": r
    }, null) : null]);
  }
});
Q.install = function(e) {
  e.component(Q.name, Q);
};
const it = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(Q);
  }
}, at = T({
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
    let n = b(() => X(e.color) ? H(r, e.color) : r);
    return {
      getLoadingStyle: b(() => ({
        width: e.width,
        height: e.height,
        color: n.value[2],
        "--border-color": n.value[0],
        "--border-top-color": n.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), Pe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, ot = /* @__PURE__ */ _("div", { class: "f-loading-round" }, null, -1), ct = { class: "loading-text" };
function ut(e, t, r, n, o, a) {
  return v(), w("div", {
    class: "f-loading-2",
    style: E(e.getLoadingStyle)
  }, [
    ot,
    _("div", ct, [
      B(e.$slots, "default", {}, () => [
        _("div", null, I(e.text), 1)
      ])
    ])
  ], 4);
}
const U = /* @__PURE__ */ Pe(at, [["render", ut]]);
U.install = function(e) {
  e.component(U.name, U);
};
const dt = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(U);
  }
}, gt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, ft = { class: "f-screen-container" }, se = /* @__PURE__ */ T({
  name: "index",
  props: gt,
  setup(e) {
    const t = e, r = x(null), n = K({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let o = x(1), a = x(1);
    ge("scaleX", o), ge("scaleY", a);
    const u = () => {
      t.width && t.height ? (n.width = t.width, n.height = t.height) : (n.width = r.value.clientWidth, n.height = r.value.clientHeight);
      const { width: h, height: f } = window.screen;
      n.screenWidth = h, n.screenHeight = f;
    }, l = () => {
      n.width && n.height ? (r.value.style.width = `${n.width}px`, r.value.style.height = `${n.height}px`) : (r.value.style.width = `${n.screenWidth}px`, r.value.style.height = `${n.screenHeight}px`);
    }, s = () => {
      const h = document.body.clientWidth, f = document.body.clientHeight, p = n.width || n.screenWidth, d = n.height || n.screenHeight, g = h / +p, y = f / +d;
      o.value = g, a.value = y, r.value.style.transform = `scale(${g}, ${y})`;
    };
    return J(r, () => {
      s();
    }, () => {
      u(), l(), s(), t.onAfterResize(), n.isReady = !0;
    }), (h, f) => (v(), w("div", ft, [
      _("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: r
      }, [
        n.isReady ? B(h.$slots, "default", { key: 0 }) : z("", !0)
      ], 512)
    ]));
  }
});
se.install = function(e) {
  e.component("FScreenContainer", se);
};
const ht = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(se);
  }
}, pt = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, yt = 30, mt = 1 / yt;
class ie {
  constructor(t, r, n, o, a, u, l) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * r >> 0, this.targetX = n, this.targetY = o, this.time = a, this.radius = u, this.colors = l, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, r, n, o) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, n && o) {
      let a = n - this.x, u = o - this.y, l = Math.sqrt(a ** 2 + u ** 2), s = t / l;
      s = s > 7 ? 7 : s;
      let i = Math.atan2(u, a), c = Math.cos(i), h = Math.sin(i), f = c * s * -r, p = h * s * -r;
      this.velocityX += f, this.velocityY += p;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += mt);
  }
  change(t, r, n) {
    this.targetX = t, this.targetY = r, this.colors = n;
  }
}
const _e = 30;
class vt {
  constructor(t, r, n) {
    this.radius = r, this.strength = n, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let r = t.particleData, n = r.length, o = this.particleArr, a = o.length;
      for (let l = 0; l < n; l++) {
        const { targetX: s, targetY: i, colors: c } = r[l];
        o[l] ? o[l].change(s, i, c) : o[l] = new ie(this.width, this.height, s, i, _e, this.radius, c);
      }
      n < a && (this.particleArr = o.splice(0, n)), o = this.particleArr;
      let u = o.length;
      for (; u; ) {
        let l = ~~(Math.random() * u--), s = o[l], { targetX: i, targetY: c, colors: h } = s;
        s.targetX = o[u].targetX, s.targetY = o[u].targetY, s.colors = o[u].colors, o[u].targetX = i, o[u].targetY = c, o[u].colors = h;
      }
    } else
      this.particleArr = t.particleData.map((r) => new ie(this.width, this.height, r.targetX, r.targetY, _e, this.radius, r.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const wt = 30;
class $e {
  constructor(t, r, n, o) {
    this.src = t, this.width = r, this.height = n, this.particleData = [], this.radius = o;
  }
  createParticleData(t = this.src) {
    return new Promise((r, n) => {
      let o = new Image();
      o.crossOrigin = "", o.src = decodeURI(new URL(t, import.meta.url).href), o.onload = () => {
        const a = document.createElement("canvas"), u = a.getContext("2d"), l = this.width, s = this.height;
        a.width = l, a.height = s, u == null || u.drawImage(o, 0, 0, l, s);
        const i = u == null ? void 0 : u.getImageData(0, 0, l, s).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let c = 0; c < s; c += 5)
          for (let h = 0; h < l; h += 5) {
            const f = (h + c * l) * 4, p = i[f + 3];
            if (p == 0)
              continue;
            const d = i[f], g = i[f + 1], y = i[f + 2];
            if (d + g + y + p) {
              const D = new ie(this.width, this.height, h, c, wt, this.radius, `rgba(${d},${g},${y},${p})`);
              this.particleData.push(D);
            }
          }
        r(this.particleData);
      }, o.onerror = () => {
        n("图片转化成粒子失败");
      };
    });
  }
}
const _t = ["width", "height"], ae = /* @__PURE__ */ T({
  name: "index",
  props: pt,
  setup(e, { expose: t }) {
    const r = e;
    let n = fe("scaleX", x(1)), o = fe("scaleY", x(1));
    const a = x(null), u = x(null);
    let l = x(), s = x();
    const i = async (h) => {
      s.value = new $e(h, r.width, r.height, r.radius), await s.value.createParticleData(), l.value.changeImg(s.value);
    }, c = async () => {
      s.value = new $e(r.src, r.width, r.height, r.radius), await s.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), l.value = new vt(a.value, r.radius, r.strength), a.value.addEventListener("mousemove", (h) => {
        const { left: f, top: p } = a.value.getBoundingClientRect(), { clientX: d, clientY: g } = h;
        l.value.mouseX = (d - f) * (1 / n.value), l.value.mouseY = (g - p) * (1 / o.value);
      }), l.value.drawCanvas(), l.value.changeImg(s.value));
    };
    return Z(() => {
      c();
    }), t({
      toggleImg: i
    }), (h, f) => (v(), w("div", null, [
      _("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: r.width,
        height: r.height
      }, null, 8, _t)
    ]));
  }
});
ae.install = function(e) {
  e.component("FDynamicParticle", ae);
};
const $t = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(e) {
    e.use(ae);
  }
};
function ke(e) {
  return {
    handleToggle: (n) => {
      e.emit("handle-toggle", n);
    },
    handleCellClick: (n, o, a, u, l) => {
      e.emit("cell-click", o, a, u, l, n);
    }
  };
}
function xt(e, t, r) {
  const { handleToggle: n } = ke(r), o = (f) => {
    let p = Ce(f);
    return de(p);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name);
  }, u = async (f, p, d) => {
    let g = d;
    p.map((y) => y._index_ = ++g), e.currData.length ? f === t.pageSize ? e.currData = [...p] : (e.currData.push(...p), e.currData.splice(0, f)) : e.currData.push(...p);
  }, l = async () => {
    if (e.tableData.length) {
      c(!1, !0), e.isEmpty = !1;
      let f;
      t.mode === "single" ? f = t.togglePage : f = t.pageSize;
      let p, d;
      e.currPage === 1 ? (p = 0, d = t.pageSize) : (p = f * (e.currPage - 2) + t.pageSize, d = f * (e.currPage - 1) + t.pageSize);
      let g = e.tableData.slice(p, d);
      g.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, g, p) : e.currPage === 1 ? await u(t.pageSize, g, p) : await u(f, g, p) : (e.currPage = 1, a(), l()), s();
    } else
      c(), e.currPage = 1, e.currData = [], e.isEmpty = !0, i();
  }, s = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, l();
    }, t.toggleDur));
  }, i = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      n(t.name);
    }, t.emptyEmitDur));
  }, c = (f = !0, p = !0) => {
    e.intervalId && f && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && p && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: o,
    setCurrData: l,
    setPageInterval: s,
    setEmptyTimeout: i,
    clearTimer: c,
    setPage: (f = 1) => {
      c(), e.currPage = f;
      let p;
      t.mode === "single" ? p = t.togglePage : p = t.pageSize;
      let d = p * (e.currPage - 1), g = p * (e.currPage - 1) + t.pageSize, y = e.tableData.slice(d, g);
      y.length ? (u(t.pageSize, y, d), s()) : l(), e.tableData.length || i();
    }
  };
}
function bt(e, t) {
  const r = b(() => function(i, c) {
    const h = ["f-scroll-table__row"];
    return t.stripe && c % 2 === 1 && h.push("f-scroll-table_row--striped"), h;
  }), n = b(() => {
    const i = ["cell"];
    return t.wrap ? i.push("cell--wrap") : i.push("cell--nowrap"), i;
  }), o = b(() => function(i) {
    let c = i.reduce((h, f) => h += f.width, 0);
    return {
      width: `${c}px`,
      "max-width": `${c}px`
    };
  }), a = b(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = b(() => function(i) {
    return {};
  }), l = b(() => function(i) {
    return {
      width: `${i.width}px`,
      "max-width": `${i.width}px`,
      "text-align": i.align || t.align || "start"
    };
  }), s = b(() => function(i, c, h, f) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: h,
      columnIndex: f,
      row: i,
      column: c
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: r,
    getCellClass: n,
    getTableStyle: o,
    getBodyStyle: a,
    getRowStyle: u,
    getExtraCellStyle: l,
    getCellStyle: s
  };
}
const G = /* @__PURE__ */ T({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, r = x(), n = x(), o = b(() => {
      var f, p, d, g;
      let a = ((f = r.value) == null ? void 0 : f.offsetWidth) || 0, u = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0, l = ((d = n.value) == null ? void 0 : d.offsetWidth) || 0, s = ((g = n.value) == null ? void 0 : g.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && s < u || ["left", "right"].includes(t.direction) && l < a))
        return {
          "--text-scroll-width": `${a}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let i, c, h;
      return ["up", "down"].includes(t.direction) && (i = u + s, c = i / t.speed || 0, h = `up-scroll linear ${c}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (i = a + l, c = i / t.speed || 0, h = `left-scroll linear ${c}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${a}px`,
        "--text-scroll-height": `${u}px`,
        animation: h
      };
    });
    return (a, u) => (v(), w("div", {
      ref_key: "scrollText",
      ref: r,
      class: A(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      _("div", {
        ref_key: "textContent",
        ref: n,
        class: "text-content",
        style: E($(o))
      }, [
        B(a.$slots, "default")
      ], 4)
    ], 2));
  }
});
G.install = function(e) {
  e.component("FScrollText", G);
};
const St = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(G);
  }
}, Ct = {
  class: "f-scroll-table__head"
}, Pt = ["onClick"], kt = {
  key: 1
}, oe = /* @__PURE__ */ T({
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
    const r = e, n = K({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), o = Ne(), a = x(), {
      deepCloneArr: u,
      setCurrData: l,
      setPageInterval: s,
      setEmptyTimeout: i,
      clearTimer: c,
      setPage: h
    } = xt(n, r, o), {
      handleCellClick: f
    } = ke(o), {
      getRowClass: p,
      getCellClass: d,
      getTableStyle: g,
      getBodyStyle: y,
      getRowStyle: C,
      getExtraCellStyle: D,
      getCellStyle: R
    } = bt(n, r), Ie = (S) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr";
    }, Te = (S, Y) => {
      S.offsetWidth, S.style.opacity = "1", S.style.gridTemplateRows = "1fr", Y();
    }, De = async (S) => {
      S.style.opacity = "1";
    }, Le = async (S, Y) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr", await new Promise((P) => {
        setTimeout(() => {
          S.remove(), P(!0);
        }, r.pageAnimateDur);
      }), Y();
    };
    return q(() => r.data, (S) => {
      n.tableData = u(S), l();
    }, {
      immediate: !0,
      deep: !0
    }), Z(() => {
      r.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        c(!0, !0), n.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        n.isStopToggle = !1, n.tableData.length ? s() : i();
      }));
    }), We(() => {
      c();
    }), t({
      setPage: h
    }), (S, Y) => (v(), w("div", {
      ref: "scrollTable",
      class: A(["f-scroll-table", {
        "is-border": r.border
      }]),
      style: E($(g)(r.columns))
    }, [_("div", Ct, [(v(!0), w(N, null, W(r.columns, (P, O) => (v(), w("div", {
      class: "f-scroll-table__cell",
      style: E($(D)(P)),
      key: O
    }, I(P.label), 5))), 128))]), _("div", {
      ref_key: "scrollTable__body",
      ref: a,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: E($(y))
    }, [m(xe, {
      tag: "div",
      css: !1,
      onBeforeEnter: Ie,
      onEnter: Te,
      onBeforeLeave: De,
      onLeave: Le
    }, {
      default: ee(() => [(v(!0), w(N, null, W(n.currData, (P, O) => (v(), w("div", {
        class: "f-scroll-table__row-wrap",
        key: P
      }, [_("div", {
        class: A($(p)(P, O))
      }, [(v(!0), w(N, null, W(r.columns, (k, j) => (v(), w("div", {
        class: "f-scroll-table__cell",
        style: E([$(D)(k), $(R)(P, k.type === "index" ? "_index_" : k.prop, O, j)]),
        key: `${P[k.prop]}${j}`,
        onClick: (Ee) => $(f)(Ee, P, P[k.prop], O, j)
      }, [k.type === "index" ? (v(), w("div", {
        key: 0,
        class: A($(d))
      }, I(P._index_ || ""), 3)) : k.type === "scroll" ? (v(), w("div", kt, [m($(G), ze(Fe(k.scrollOption)), {
        default: ee(() => [_("div", null, I(P[k.prop]), 1)]),
        _: 2
      }, 1040)])) : k.slot ? (v(), w("div", {
        key: 2,
        class: A($(d))
      }, [B(S.$slots, k.slot, {
        params: {
          row: P,
          column: k.prop,
          $index: O
        }
      })], 2)) : (v(), w("div", {
        key: 3,
        class: A($(d))
      }, I(P[k.prop]), 3))], 12, Pt))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
oe.install = function(e) {
  e.component("FScrollTable", oe);
};
const It = {
  title: "ScrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(oe);
  }
}, Tt = T({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const r = ["#d1d5db", "#3b82f6", "white"];
    let n = b(() => X(e.color) ? H(r, e.color) : r);
    return {
      getProgressStyle: b(() => ({
        "--bgc": n.value[0],
        "--progress-color": n.value[1],
        "--progress-text-color": n.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Dt(e, t, r, n, o, a) {
  return v(), w("div", {
    class: "f-progress",
    style: E(e.getProgressStyle)
  }, [
    _("div", {
      class: "progress-inner",
      style: E({ width: `${e.percent}%` })
    }, [
      B(e.$slots, "default", { percent: e.percent }, () => [
        _("span", null, I(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const F = /* @__PURE__ */ Pe(Tt, [["render", Dt]]);
F.install = function(e) {
  e.component(F.name, F);
};
const Lt = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(F);
  }
}, Et = { class: "f-digital-scroll" }, Rt = { class: "f-digital-scroll__list" }, At = { class: "f-digital-scroll__point" }, ce = /* @__PURE__ */ T({
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
    let r = K({
      stringList: []
    });
    const n = (a) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`);
      console.log("reg", u);
      let l = Number(a.toString().match(u));
      console.log("digitalToStringList", l);
      let s = l.toString(), i = s.indexOf(".");
      for (i < 0 && (i = s.length, s += "."); s.length <= i + t.digit; )
        s += "0";
      return s.split("");
    }, o = b(() => function(a) {
      return console.log("str", a), {
        top: `-${Number(a) * 100}%`
      };
    });
    return Z(() => {
      r.stringList = n(t.number);
    }), q(
      () => t.number,
      (a) => {
        console.log("变化", a), r.stringList = n(t.number);
      }
    ), (a, u) => (v(), w("div", Et, [
      _("div", Rt, [
        (v(!0), w(N, null, W($(r).stringList, (l, s) => (v(), w("div", {
          class: A(["f-digital-scroll__item", { "is-small": l === "." }]),
          key: s
        }, [
          he(_("div", At, ".", 512), [
            [pe, l === "."]
          ]),
          he(_("div", {
            class: "f-digital-scroll__digital-list",
            style: E($(o)(l))
          }, [
            (v(), w(N, null, W(10, (i, c) => _("div", {
              class: "f-digital-scroll__digital-item",
              key: c
            }, I(c), 1)), 64))
          ], 4), [
            [pe, l !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
ce.install = function(e) {
  e.component("FDigitalScroll", ce);
};
const Bt = {
  title: "digitalScroll 数字滚动",
  category: "数字滚动",
  status: "20%",
  install(e) {
    e.use(ce);
  }
}, Ot = { class: "f-scroll-rank" }, Nt = { class: "f-scroll-rank__item-wrap" }, Wt = { class: "f-scroll-rank__item-info" }, zt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Ft = { class: "f-scroll-rank__item-name" }, Ht = { class: "f-scroll-rank__item-info-right" }, Xt = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, Yt = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, Mt = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, Vt = { class: "f-scroll-rank__item-progress" }, ue = /* @__PURE__ */ T({
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
    let r = K({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const n = (d) => {
      let g = de(Ce(d)), y = [];
      t.order === "default" ? y = g : y = rt(g, "value", t.order), typeof t.valueFormatter == "function" && (y = y.map((C, D) => {
        var R;
        return C.formattedValue = (R = t.valueFormatter) == null ? void 0 : R.call(null, {
          name: C.name,
          value: C.value,
          maxValue: s.value,
          index: D
        }), C;
      })), r.dataList = y;
    }, o = async (d, g, y) => {
      let C = y;
      g.map((D) => D._index_ = ++C), r.currList.length ? d === t.pageSize ? r.currList = [...g] : (r.currList.push(...g), r.currList.splice(0, d)) : r.currList.push(...g);
    }, a = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let g, y;
        r.currPage === 1 ? (g = 0, y = t.pageSize) : (g = d * (r.currPage - 2) + t.pageSize, y = d * (r.currPage - 1) + t.pageSize);
        let C = r.dataList.slice(g, y);
        C.length ? r.currPage === 1 ? await o(t.pageSize, C, g) : await o(d, C, g) : (r.currPage = 1, a()), u();
      } else
        l(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, u = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, a();
      }, t.toggleDur));
    }, l = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, s = b(() => {
      var d, g;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = r.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((g = r.currList[0]) == null ? void 0 : g.value) || 0;
    }), i = b(() => function(d) {
      let g, y = s.value;
      g = d / y;
      const C = (D, R) => Math.round(D * Math.pow(10, R)) / Math.pow(10, R);
      return typeof g == "number" ? C(g * 100, 1) : 0;
    }), c = (d) => {
      d.style.opacity = "0", d.style.gridTemplateRows = "0fr";
    }, h = (d, g) => {
      d.offsetWidth, d.style.opacity = "1", d.style.gridTemplateRows = "1fr", g();
    }, f = async (d) => {
      d.style.opacity = "1";
    }, p = async (d, g) => {
      d.style.opacity = "0", d.style.margin = "0", d.style.gridTemplateRows = "0fr", await new Promise((y) => {
        setTimeout(() => {
          d.remove(), y(!0);
        }, t.toggleDuration);
      }), g();
    };
    return q(
      () => t.data,
      (d) => {
        n(d), a();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, g) => (v(), w("div", Ot, [
      _("div", {
        class: "f-scroll-rank__list",
        style: E({ "--page-animate-dur": `${t.toggleDuration}ms` })
      }, [
        m(xe, {
          tag: "div",
          css: !1,
          onBeforeEnter: c,
          onEnter: h,
          onBeforeLeave: f,
          onLeave: p
        }, {
          default: ee(() => [
            (v(!0), w(N, null, W($(r).currList, (y, C) => (v(), w("div", {
              class: "f-scroll-rank__item",
              key: y
            }, [
              _("div", Nt, [
                _("div", Wt, [
                  t.showRank ? (v(), w("span", zt, I(`NO.${y._index_}`), 1)) : z("", !0),
                  _("span", Ft, I(y.name || ""), 1),
                  _("div", Ht, [
                    t.showPercent ? (v(), w("span", Xt, I(`${$(i)(y.value)}%`), 1)) : z("", !0),
                    t.showRatio && typeof t.valueFormatter != "function" ? (v(), w("span", Yt, I(`${y.value} / ${$(s)}`), 1)) : z("", !0),
                    typeof t.valueFormatter == "function" ? (v(), w("span", Mt, I(`${y.formattedValue}`), 1)) : z("", !0)
                  ])
                ]),
                _("div", Vt, [
                  m($(F), {
                    percent: $(i)(y.value),
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
ue.install = function(e) {
  e.component("FScrollRank", ue);
};
const Qt = {
  title: "ScrollRank 滚动排名",
  category: "滚动排名",
  status: "20%",
  install(e) {
    e.use(ue);
  }
}, Ut = [
  lt,
  st,
  it,
  dt,
  ht,
  $t,
  It,
  St,
  Lt,
  Bt,
  Qt
], qt = {
  version: "1.0.12",
  install(e) {
    Ut.forEach((t) => e.use(t));
  }
};
export {
  M as BorderBox1,
  V as BorderBox2,
  ce as DigitalScroll,
  ae as DynamicParticle,
  Q as Loading1,
  U as Loading2,
  F as Progress,
  se as ScreenContainer,
  ue as ScrollRank,
  oe as ScrollTable,
  G as ScrollText,
  qt as default
};
