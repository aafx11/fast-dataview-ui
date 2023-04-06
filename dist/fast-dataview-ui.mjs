import './style.css';
import { defineComponent as T, computed as x, createVNode as m, renderSlot as R, getCurrentScope as Ae, onScopeDispose as Be, unref as $, watch as Z, ref as b, onMounted as K, onUnmounted as Oe, nextTick as ze, openBlock as v, createElementBlock as _, normalizeStyle as E, createElementVNode as w, toDisplayString as I, reactive as J, provide as fe, createCommentVNode as W, inject as he, normalizeClass as B, getCurrentInstance as Ne, onBeforeUnmount as We, Fragment as z, renderList as N, TransitionGroup as be, withCtx as te, normalizeProps as Fe, guardReactiveProps as He, withDirectives as pe, vShow as ye } from "vue";
const Xe = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, M = /* @__PURE__ */ T({
  name: "FIcon",
  props: Xe,
  setup(e, {
    slots: t
  }) {
    return x(() => !e.size && !e.color ? {} : {
      ...e.size ? {
        "font-size": e.size + "px"
      } : {},
      ...e.color ? {
        color: e.color
      } : {}
    }), () => m("div", {
      class: "f-icon",
      style: {
        border: "1px solid black"
      }
    }, [R(t, "default")]);
  }
});
M.install = function(e) {
  e.component(M.name, M);
};
const Ye = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(e) {
    e.use(M);
  }
};
function Me(e, t) {
  const n = window.MutationObserver, r = new n(t);
  return r.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), r;
}
var me;
const Se = typeof window < "u", Ve = (e) => typeof e == "string", ne = () => {
};
Se && ((me = window == null ? void 0 : window.navigator) != null && me.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function re(e) {
  return typeof e == "function" ? e() : $(e);
}
function Qe(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function Ue(e, t = {}) {
  let n, r, o = ne;
  const a = (l) => {
    clearTimeout(l), o(), o = ne;
  };
  return (l) => {
    const s = re(e), i = re(t.maxWait);
    return n && a(n), s <= 0 || i !== void 0 && i <= 0 ? (r && (a(r), r = null), Promise.resolve(l())) : new Promise((c, h) => {
      o = t.rejectOnCancel ? h : c, i && !r && (r = setTimeout(() => {
        n && a(n), r = null, c(l());
      }, i)), n = setTimeout(() => {
        r && a(r), r = null, c(l());
      }, s);
    });
  };
}
function Ge(e) {
  return e;
}
function qe(e) {
  return Ae() ? (Be(e), !0) : !1;
}
function Ze(e, t = 200, n = {}) {
  return Qe(Ue(t, n), e);
}
function Ke(e) {
  var t;
  const n = re(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Je = Se ? window : void 0;
function je(...e) {
  let t, n, r, o;
  if (Ve(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Je) : [t, n, r, o] = e, !t)
    return ne;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], u = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, h, f) => (c.addEventListener(h, f, o), () => c.removeEventListener(h, f, o)), s = Z(() => Ke(t), (c) => {
    u(), c && a.push(...n.flatMap((h) => r.map((f) => l(c, h, f))));
  }, { immediate: !0, flush: "post" }), i = () => {
    s(), u();
  };
  return qe(i), i;
}
const le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, se = "__vueuse_ssr_handlers__";
le[se] = le[se] || {};
le[se];
var ve;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ve || (ve = {}));
var et = Object.defineProperty, _e = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, nt = Object.prototype.propertyIsEnumerable, we = (e, t, n) => t in e ? et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rt = (e, t) => {
  for (var n in t || (t = {}))
    tt.call(t, n) && we(e, n, t[n]);
  if (_e)
    for (var n of _e(t))
      nt.call(t, n) && we(e, n, t[n]);
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
rt({
  linear: Ge
}, lt);
const j = (e, t, n, r) => {
  const o = b(0), a = b(0), u = b(0), l = b(0);
  let s, i = null, c = null;
  const h = (g = !0) => new Promise((y) => {
    ze(() => {
      c = e.value, o.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = c ? c.getBoundingClientRect().width : 0, l.value = c ? c.getBoundingClientRect().height : 0, e.value ? (!o.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && g && t(), y(!0);
    });
  }), f = () => {
    i = Me(c, s), je(window, "resize", s);
  }, p = () => {
    i && (i.disconnect(), i.takeRecords(), i = null);
  }, d = async () => {
    await h(!1), s = Ze(h, 200), f(), typeof n == "function" && n();
  };
  return K(() => {
    d();
  }), Oe(() => {
    p();
  }), {
    width: o,
    height: a,
    afterWidth: u,
    afterHeight: l,
    initWH: h
  };
}, Ce = {
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
}, H = Object.assign, X = (e) => Array.isArray(e) && e.length, Pe = (e) => Array.isArray(e) && e || [], L = (e) => e >= 0 ? e : 0, st = (e, t, n = "reverse") => e.sort(it(t, n)), it = (e, t = "reverse") => function(n, r) {
  return n[e] < r[e] ? t === "normal" ? -1 : 1 : n[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, ge = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  let n = new e.constructor();
  t.set(e, n);
  for (let r in e)
    e.hasOwnProperty(r) && (n[r] = ge(e[r], t));
  return n;
}, V = /* @__PURE__ */ T({
  name: "FBorderBox1",
  props: Ce,
  setup(e, {
    slots: t
  }) {
    const n = b(null), r = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let o = x(() => X(e.color) ? H(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: l
    } = j(n);
    return {
      width: a,
      height: u,
      initWH: l,
      borderBox1: n,
      defaultColor: r,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: n,
      backgroundColor: r,
      strokeWidth: o,
      realColor: a,
      title: u
    } = this, l = 20;
    let s = o || 2, i = L(t - s - 2), c = L(n - s - 2);
    return m("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [m("svg", {
      class: "f-svg-container",
      width: i,
      height: c
    }, [m("polygon", {
      fill: r,
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
    }, [m("div", null, [R(e, "default")])])]);
  }
});
V.install = function(e) {
  e.component(V.name, V);
};
const at = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(V);
  }
}, Q = /* @__PURE__ */ T({
  name: "FBorderBox2",
  props: Ce,
  setup(e, {
    slots: t
  }) {
    const n = b(null), r = ["white"];
    let o = x(() => X(e.color) ? H(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: l
    } = j(n);
    return {
      width: a,
      height: u,
      initWH: l,
      borderBox2: n,
      defaultColor: r,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: n,
      backgroundColor: r,
      strokeWidth: o,
      realColor: a,
      duration: u
    } = this;
    let l = o || 3, s = L(l), i = L(l), c = L(t - l), h = L(l), f = L(t - l), p = L(n - l), d = L(l), g = L(n - l);
    return m("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [m("svg", {
      class: "f-svg-container",
      width: t,
      height: n
    }, [m("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`
      },
      stroke: a[0],
      "stroke-width": l,
      fill: r,
      d: `M ${s} ${i}, L ${c} ${h}, L ${f} ${p}, L ${d} ${g}, Z`
    }, null)]), m("div", {
      class: "f-border-box-content"
    }, [R(e, "default")])]);
  }
});
Q.install = function(e) {
  e.component(Q.name, Q);
};
const ot = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(Q);
  }
}, U = /* @__PURE__ */ T({
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
    const n = b(null), r = ["#4f29f0", "#c3c8de", "#414856"];
    let o = x(() => X(e.color) ? H(r, e.color) : r);
    const {
      width: a,
      height: u,
      initWH: l
    } = j(n);
    return {
      width: a,
      height: u,
      initWH: l,
      loading1: n,
      defaultColor: r,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: n,
      duration: r
    } = this;
    return m("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${r}s`
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
    }, null)]), n ? m("div", {
      class: "f-loading-text",
      "data-text": n
    }, null) : null]);
  }
});
U.install = function(e) {
  e.component(U.name, U);
};
const ct = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(U);
  }
}, ut = T({
  name: "FLoading2",
  props: {
    width: { type: String, default: "100px" },
    height: { type: String, default: "100px" },
    color: { type: Array, default: () => [] },
    text: { type: String, default: "" },
    duration: { type: Number, default: 0.8 }
  },
  setup(e, { slots: t }) {
    const n = ["#d1d5db", "#3b82f6", "#3b82f6"];
    let r = x(() => X(e.color) ? H(n, e.color) : n);
    return {
      getLoadingStyle: x(() => ({
        width: e.width,
        height: e.height,
        color: r.value[2],
        "--border-color": r.value[0],
        "--border-top-color": r.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, dt = /* @__PURE__ */ w("div", { class: "f-loading-round" }, null, -1), gt = { class: "loading-text" };
function ft(e, t, n, r, o, a) {
  return v(), _("div", {
    class: "f-loading-2",
    style: E(e.getLoadingStyle)
  }, [
    dt,
    w("div", gt, [
      R(e.$slots, "default", {}, () => [
        w("div", null, I(e.text), 1)
      ])
    ])
  ], 4);
}
const G = /* @__PURE__ */ ke(ut, [["render", ft]]);
G.install = function(e) {
  e.component(G.name, G);
};
const ht = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(G);
  }
}, pt = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, yt = { class: "f-screen-container" }, ie = /* @__PURE__ */ T({
  name: "index",
  props: pt,
  setup(e) {
    const t = e, n = b(null), r = J({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let o = b(1), a = b(1);
    fe("scaleX", o), fe("scaleY", a);
    const u = () => {
      t.width && t.height ? (r.width = t.width, r.height = t.height) : (r.width = n.value.clientWidth, r.height = n.value.clientHeight);
      const { width: h, height: f } = window.screen;
      r.screenWidth = h, r.screenHeight = f;
    }, l = () => {
      r.width && r.height ? (n.value.style.width = `${r.width}px`, n.value.style.height = `${r.height}px`) : (n.value.style.width = `${r.screenWidth}px`, n.value.style.height = `${r.screenHeight}px`);
    }, s = () => {
      const h = document.body.clientWidth, f = document.body.clientHeight, p = r.width || r.screenWidth, d = r.height || r.screenHeight, g = h / +p, y = f / +d;
      o.value = g, a.value = y, n.value.style.transform = `scale(${g}, ${y})`;
    };
    return j(n, () => {
      s();
    }, () => {
      u(), l(), s(), t.onAfterResize(), r.isReady = !0;
    }), (h, f) => (v(), _("div", yt, [
      w("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: n
      }, [
        r.isReady ? R(h.$slots, "default", { key: 0 }) : W("", !0)
      ], 512)
    ]));
  }
});
ie.install = function(e) {
  e.component("FScreenContainer", ie);
};
const mt = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(ie);
  }
}, vt = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, _t = 30, wt = 1 / _t;
class ae {
  constructor(t, n, r, o, a, u, l) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * n >> 0, this.targetX = r, this.targetY = o, this.time = a, this.radius = u, this.colors = l, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, n, r, o) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && o) {
      let a = r - this.x, u = o - this.y, l = Math.sqrt(a ** 2 + u ** 2), s = t / l;
      s = s > 7 ? 7 : s;
      let i = Math.atan2(u, a), c = Math.cos(i), h = Math.sin(i), f = c * s * -n, p = h * s * -n;
      this.velocityX += f, this.velocityY += p;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += wt);
  }
  change(t, n, r) {
    this.targetX = t, this.targetY = n, this.colors = r;
  }
}
const $e = 30;
class $t {
  constructor(t, n, r) {
    this.radius = n, this.strength = r, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let n = t.particleData, r = n.length, o = this.particleArr, a = o.length;
      for (let l = 0; l < r; l++) {
        const { targetX: s, targetY: i, colors: c } = n[l];
        o[l] ? o[l].change(s, i, c) : o[l] = new ae(this.width, this.height, s, i, $e, this.radius, c);
      }
      r < a && (this.particleArr = o.splice(0, r)), o = this.particleArr;
      let u = o.length;
      for (; u; ) {
        let l = ~~(Math.random() * u--), s = o[l], { targetX: i, targetY: c, colors: h } = s;
        s.targetX = o[u].targetX, s.targetY = o[u].targetY, s.colors = o[u].colors, o[u].targetX = i, o[u].targetY = c, o[u].colors = h;
      }
    } else
      this.particleArr = t.particleData.map((n) => new ae(this.width, this.height, n.targetX, n.targetY, $e, this.radius, n.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const xt = 30;
class xe {
  constructor(t, n, r, o) {
    this.src = t, this.width = n, this.height = r, this.particleData = [], this.radius = o;
  }
  createParticleData(t = this.src) {
    return new Promise((n, r) => {
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
              const D = new ae(this.width, this.height, h, c, xt, this.radius, `rgba(${d},${g},${y},${p})`);
              this.particleData.push(D);
            }
          }
        n(this.particleData);
      }, o.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const bt = ["width", "height"], oe = /* @__PURE__ */ T({
  name: "index",
  props: vt,
  setup(e, { expose: t }) {
    const n = e;
    let r = he("scaleX", b(1)), o = he("scaleY", b(1));
    const a = b(null), u = b(null);
    let l = b(), s = b();
    const i = async (h) => {
      s.value = new xe(h, n.width, n.height, n.radius), await s.value.createParticleData(), l.value.changeImg(s.value);
    }, c = async () => {
      s.value = new xe(n.src, n.width, n.height, n.radius), await s.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), l.value = new $t(a.value, n.radius, n.strength), a.value.addEventListener("mousemove", (h) => {
        const { left: f, top: p } = a.value.getBoundingClientRect(), { clientX: d, clientY: g } = h;
        l.value.mouseX = (d - f) * (1 / r.value), l.value.mouseY = (g - p) * (1 / o.value);
      }), l.value.drawCanvas(), l.value.changeImg(s.value));
    };
    return K(() => {
      c();
    }), t({
      toggleImg: i
    }), (h, f) => (v(), _("div", null, [
      w("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: n.width,
        height: n.height
      }, null, 8, bt)
    ]));
  }
});
oe.install = function(e) {
  e.component("FDynamicParticle", oe);
};
const St = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(e) {
    e.use(oe);
  }
};
function Ie(e) {
  return {
    handleToggle: (r) => {
      e.emit("handle-toggle", r);
    },
    handleCellClick: (r, o, a, u, l) => {
      e.emit("cell-click", o, a, u, l, r);
    }
  };
}
function Ct(e, t, n) {
  const { handleToggle: r } = Ie(n), o = (f) => {
    let p = Pe(f);
    return ge(p);
  }, a = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && r(t.name);
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
      r(t.name);
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
function Pt(e, t) {
  const n = x(() => function(i, c) {
    const h = ["f-scroll-table__row"];
    return t.stripe && c % 2 === 1 && h.push("f-scroll-table_row--striped"), h;
  }), r = x(() => {
    const i = ["cell"];
    return t.wrap ? i.push("cell--wrap") : i.push("cell--nowrap"), i;
  }), o = x(() => function(i) {
    let c = i.reduce((h, f) => h += f.width, 0);
    return {
      width: `${c}px`,
      "max-width": `${c}px`
    };
  }), a = x(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = x(() => function(i) {
    return {};
  }), l = x(() => function(i) {
    return {
      width: `${i.width}px`,
      "max-width": `${i.width}px`,
      "text-align": i.align || t.align || "start"
    };
  }), s = x(() => function(i, c, h, f) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: h,
      columnIndex: f,
      row: i,
      column: c
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: n,
    getCellClass: r,
    getTableStyle: o,
    getBodyStyle: a,
    getRowStyle: u,
    getExtraCellStyle: l,
    getCellStyle: s
  };
}
const q = /* @__PURE__ */ T({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, n = b(), r = b(), o = x(() => {
      var f, p, d, g;
      let a = ((f = n.value) == null ? void 0 : f.offsetWidth) || 0, u = ((p = n.value) == null ? void 0 : p.offsetHeight) || 0, l = ((d = r.value) == null ? void 0 : d.offsetWidth) || 0, s = ((g = r.value) == null ? void 0 : g.offsetHeight) || 0;
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
    return (a, u) => (v(), _("div", {
      ref_key: "scrollText",
      ref: n,
      class: B(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      w("div", {
        ref_key: "textContent",
        ref: r,
        class: "text-content",
        style: E($(o))
      }, [
        R(a.$slots, "default")
      ], 4)
    ], 2));
  }
});
q.install = function(e) {
  e.component("FScrollText", q);
};
const kt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(q);
  }
}, It = {
  class: "f-scroll-table__head"
}, Tt = ["onClick"], Dt = {
  key: 1
}, ce = /* @__PURE__ */ T({
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
    const n = e, r = J({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), o = Ne(), a = b(), {
      deepCloneArr: u,
      setCurrData: l,
      setPageInterval: s,
      setEmptyTimeout: i,
      clearTimer: c,
      setPage: h
    } = Ct(r, n, o), {
      handleCellClick: f
    } = Ie(o), {
      getRowClass: p,
      getCellClass: d,
      getTableStyle: g,
      getBodyStyle: y,
      getRowStyle: C,
      getExtraCellStyle: D,
      getCellStyle: A
    } = Pt(r, n), Te = (S) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr";
    }, De = (S, Y) => {
      S.offsetWidth, S.style.opacity = "1", S.style.gridTemplateRows = "1fr", Y();
    }, Le = async (S) => {
      S.style.opacity = "1";
    }, Ee = async (S, Y) => {
      S.style.opacity = "0", S.style.gridTemplateRows = "0fr", await new Promise((P) => {
        setTimeout(() => {
          S.remove(), P(!0);
        }, n.pageAnimateDur);
      }), Y();
    };
    return Z(() => n.data, (S) => {
      r.tableData = u(S), l();
    }, {
      immediate: !0,
      deep: !0
    }), K(() => {
      n.mouseEvent && (a.value.addEventListener("mouseenter", () => {
        c(!0, !0), r.isStopToggle = !0;
      }), a.value.addEventListener("mouseleave", () => {
        r.isStopToggle = !1, r.tableData.length ? s() : i();
      }));
    }), We(() => {
      c();
    }), t({
      setPage: h
    }), (S, Y) => (v(), _("div", {
      ref: "scrollTable",
      class: B(["f-scroll-table", {
        "is-border": n.border
      }]),
      style: E($(g)(n.columns))
    }, [w("div", It, [(v(!0), _(z, null, N(n.columns, (P, O) => (v(), _("div", {
      class: "f-scroll-table__cell",
      style: E($(D)(P)),
      key: O
    }, I(P.label), 5))), 128))]), w("div", {
      ref_key: "scrollTable__body",
      ref: a,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: E($(y))
    }, [m(be, {
      tag: "div",
      css: !1,
      onBeforeEnter: Te,
      onEnter: De,
      onBeforeLeave: Le,
      onLeave: Ee
    }, {
      default: te(() => [(v(!0), _(z, null, N(r.currData, (P, O) => (v(), _("div", {
        class: "f-scroll-table__row-wrap",
        key: P
      }, [w("div", {
        class: B($(p)(P, O))
      }, [(v(!0), _(z, null, N(n.columns, (k, ee) => (v(), _("div", {
        class: "f-scroll-table__cell",
        style: E([$(D)(k), $(A)(P, k.type === "index" ? "_index_" : k.prop, O, ee)]),
        key: `${P[k.prop]}${ee}`,
        onClick: (Re) => $(f)(Re, P, P[k.prop], O, ee)
      }, [k.type === "index" ? (v(), _("div", {
        key: 0,
        class: B($(d))
      }, I(P._index_ || ""), 3)) : k.type === "scroll" ? (v(), _("div", Dt, [m($(q), Fe(He(k.scrollOption)), {
        default: te(() => [w("div", null, I(P[k.prop]), 1)]),
        _: 2
      }, 1040)])) : k.slot ? (v(), _("div", {
        key: 2,
        class: B($(d))
      }, [R(S.$slots, k.slot, {
        params: {
          row: P,
          column: k.prop,
          $index: O
        }
      })], 2)) : (v(), _("div", {
        key: 3,
        class: B($(d))
      }, I(P[k.prop]), 3))], 12, Tt))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
ce.install = function(e) {
  e.component("FScrollTable", ce);
};
const Lt = {
  title: "ScrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(ce);
  }
}, Et = T({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const n = ["#d1d5db", "#3b82f6", "white"];
    let r = x(() => X(e.color) ? H(n, e.color) : n);
    return {
      getProgressStyle: x(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Rt(e, t, n, r, o, a) {
  return v(), _("div", {
    class: "f-progress",
    style: E(e.getProgressStyle)
  }, [
    w("div", {
      class: "progress-inner",
      style: E({ width: `${e.percent}%` })
    }, [
      R(e.$slots, "default", { percent: e.percent }, () => [
        w("span", null, I(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const F = /* @__PURE__ */ ke(Et, [["render", Rt]]);
F.install = function(e) {
  e.component(F.name, F);
};
const At = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(F);
  }
}, Bt = { class: "f-digital-scroll" }, Ot = { class: "f-digital-scroll__list" }, zt = { class: "f-digital-scroll__point" }, ue = /* @__PURE__ */ T({
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
    let n = J({
      stringList: []
    });
    const r = (a) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${t.digit}})?`);
      console.log("reg", u);
      let l = Number(a.toString().match(u));
      console.log("digitalToStringList", l);
      let s = l.toString(), i = s.indexOf(".");
      for (i < 0 && (i = s.length, s += "."); s.length <= i + t.digit; )
        s += "0";
      return s.split("");
    }, o = x(() => function(a) {
      return console.log("str", a), {
        top: `-${Number(a) * 100}%`
      };
    });
    return K(() => {
      n.stringList = r(t.number);
    }), Z(
      () => t.number,
      (a) => {
        console.log("变化", a), n.stringList = r(t.number);
      }
    ), (a, u) => (v(), _("div", Bt, [
      w("div", Ot, [
        (v(!0), _(z, null, N($(n).stringList, (l, s) => (v(), _("div", {
          class: B(["f-digital-scroll__item", { "is-small": l === "." }]),
          key: s
        }, [
          pe(w("div", zt, ".", 512), [
            [ye, l === "."]
          ]),
          pe(w("div", {
            class: "f-digital-scroll__digital-list",
            style: E($(o)(l))
          }, [
            (v(), _(z, null, N(10, (i, c) => w("div", {
              class: "f-digital-scroll__digital-item",
              key: c
            }, I(c), 1)), 64))
          ], 4), [
            [ye, l !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
ue.install = function(e) {
  e.component("FDigitalScroll", ue);
};
const Nt = {
  title: "digitalScroll 数字滚动",
  category: "数字滚动",
  status: "20%",
  install(e) {
    e.use(ue);
  }
}, Wt = { class: "f-scroll-rank" }, Ft = { class: "f-scroll-rank__item-wrap" }, Ht = { class: "f-scroll-rank__item-info" }, Xt = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Yt = { class: "f-scroll-rank__item-name" }, Mt = { class: "f-scroll-rank__item-info-right" }, Vt = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, Qt = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, Ut = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, Gt = { class: "f-scroll-rank__item-progress" }, de = /* @__PURE__ */ T({
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
    let n = J({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const r = (d) => {
      let g = ge(Pe(d)), y = [];
      t.order === "default" ? y = g : y = st(g, "value", t.order), typeof t.valueFormatter == "function" && (y = y.map((C, D) => {
        var A;
        return C.formattedValue = (A = t.valueFormatter) == null ? void 0 : A.call(null, {
          name: C.name,
          value: C.value,
          maxValue: s.value,
          index: D
        }), C;
      })), n.dataList = y;
    }, o = async (d, g, y) => {
      let C = y;
      g.map((D) => D._index_ = ++C), n.currList.length ? d === t.pageSize ? n.currList = [...g] : (n.currList.push(...g), n.currList.splice(0, d)) : n.currList.push(...g);
    }, a = async () => {
      if (n.dataList.length) {
        n.isEmpty = !1;
        let d;
        t.togglePage >= t.pageSize ? d = t.pageSize : d = t.togglePage;
        let g, y;
        n.currPage === 1 ? (g = 0, y = t.pageSize) : (g = d * (n.currPage - 2) + t.pageSize, y = d * (n.currPage - 1) + t.pageSize);
        let C = n.dataList.slice(g, y);
        C.length ? n.currPage === 1 ? await o(t.pageSize, C, g) : await o(d, C, g) : (n.currPage = 1, a()), u();
      } else
        l(), n.isEmpty = !0, n.currPage = 1, n.currList = [];
    }, u = () => {
      n.intervalId === null && (n.intervalId = setInterval(() => {
        n.currPage += 1, a();
      }, t.toggleDur));
    }, l = () => {
      n.intervalId && (clearInterval(n.intervalId), n.intervalId = null);
    }, s = x(() => {
      var d, g;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((d = n.currList.at(-1)) == null ? void 0 : d.value) || 0 : ((g = n.currList[0]) == null ? void 0 : g.value) || 0;
    }), i = x(() => function(d) {
      let g, y = s.value;
      g = d / y;
      const C = (D, A) => Math.round(D * Math.pow(10, A)) / Math.pow(10, A);
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
    return Z(
      () => t.data,
      (d) => {
        r(d), a();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (d, g) => (v(), _("div", Wt, [
      w("div", {
        class: "f-scroll-rank__list",
        style: E({ "--page-animate-dur": `${t.toggleDuration}ms` })
      }, [
        m(be, {
          tag: "div",
          css: !1,
          onBeforeEnter: c,
          onEnter: h,
          onBeforeLeave: f,
          onLeave: p
        }, {
          default: te(() => [
            (v(!0), _(z, null, N($(n).currList, (y, C) => (v(), _("div", {
              class: "f-scroll-rank__item",
              key: y
            }, [
              w("div", Ft, [
                w("div", Ht, [
                  t.showRank ? (v(), _("span", Xt, I(`NO.${y._index_}`), 1)) : W("", !0),
                  w("span", Yt, I(y.name || ""), 1),
                  w("div", Mt, [
                    t.showPercent ? (v(), _("span", Vt, I(`${$(i)(y.value)}%`), 1)) : W("", !0),
                    t.showRatio && typeof t.valueFormatter != "function" ? (v(), _("span", Qt, I(`${y.value} / ${$(s)}`), 1)) : W("", !0),
                    typeof t.valueFormatter == "function" ? (v(), _("span", Ut, I(`${y.formattedValue}`), 1)) : W("", !0)
                  ])
                ]),
                w("div", Gt, [
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
de.install = function(e) {
  e.component("FScrollRank", de);
};
const qt = {
  title: "ScrollRank 滚动排名",
  category: "滚动排名",
  status: "20%",
  install(e) {
    e.use(de);
  }
}, Zt = [
  Ye,
  at,
  ot,
  ct,
  ht,
  mt,
  St,
  Lt,
  kt,
  At,
  Nt,
  qt
], Jt = {
  version: "1.0.12",
  install(e) {
    Zt.forEach((t) => e.use(t));
  }
};
export {
  V as BorderBox1,
  Q as BorderBox2,
  ue as DigitalScroll,
  oe as DynamicParticle,
  M as Icon,
  U as Loading1,
  G as Loading2,
  F as Progress,
  ie as ScreenContainer,
  de as ScrollRank,
  ce as ScrollTable,
  q as ScrollText,
  Jt as default
};
