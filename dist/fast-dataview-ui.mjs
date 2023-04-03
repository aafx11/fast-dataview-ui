import './style.css';
import { defineComponent as B, computed as $, createVNode as m, renderSlot as R, getCurrentScope as Ae, onScopeDispose as Ee, unref as b, watch as ue, ref as x, onMounted as de, onUnmounted as Be, nextTick as ze, openBlock as p, createElementBlock as v, normalizeStyle as I, createElementVNode as _, toDisplayString as O, reactive as ge, provide as ye, createCommentVNode as Oe, inject as me, getCurrentInstance as xe, normalizeClass as E, Fragment as H, renderList as L, TransitionGroup as Ce, withCtx as ee, onBeforeUnmount as Re, normalizeProps as We, guardReactiveProps as He } from "vue";
const Le = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, Q = /* @__PURE__ */ B({
  name: "FIcon",
  props: Le,
  setup(e, {
    slots: t
  }) {
    return $(() => !e.size && !e.color ? {} : {
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
Q.install = function(e) {
  e.component(Q.name, Q);
};
const Ne = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(e) {
    e.use(Q);
  }
};
function Xe(e, t) {
  const l = window.MutationObserver, n = new l(t);
  return n.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), n;
}
var pe;
const Pe = typeof window < "u", Ye = (e) => typeof e == "string", te = () => {
};
Pe && ((pe = window == null ? void 0 : window.navigator) != null && pe.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function le(e) {
  return typeof e == "function" ? e() : b(e);
}
function Fe(e, t) {
  function l(...n) {
    return new Promise((o, c) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(c);
    });
  }
  return l;
}
function Me(e, t = {}) {
  let l, n, o = te;
  const c = (r) => {
    clearTimeout(r), o(), o = te;
  };
  return (r) => {
    const i = le(e), a = le(t.maxWait);
    return l && c(l), i <= 0 || a !== void 0 && a <= 0 ? (n && (c(n), n = null), Promise.resolve(r())) : new Promise((s, g) => {
      o = t.rejectOnCancel ? g : s, a && !n && (n = setTimeout(() => {
        l && c(l), n = null, s(r());
      }, a)), l = setTimeout(() => {
        n && c(n), n = null, s(r());
      }, i);
    });
  };
}
function Qe(e) {
  return e;
}
function Ue(e) {
  return Ae() ? (Ee(e), !0) : !1;
}
function Ve(e, t = 200, l = {}) {
  return Fe(Me(t, l), e);
}
function Ge(e) {
  var t;
  const l = le(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const qe = Pe ? window : void 0;
function Ze(...e) {
  let t, l, n, o;
  if (Ye(e[0]) || Array.isArray(e[0]) ? ([l, n, o] = e, t = qe) : [t, l, n, o] = e, !t)
    return te;
  Array.isArray(l) || (l = [l]), Array.isArray(n) || (n = [n]);
  const c = [], u = () => {
    c.forEach((s) => s()), c.length = 0;
  }, r = (s, g, d) => (s.addEventListener(g, d, o), () => s.removeEventListener(g, d, o)), i = ue(() => Ge(t), (s) => {
    u(), s && c.push(...l.flatMap((g) => n.map((d) => r(s, g, d))));
  }, { immediate: !0, flush: "post" }), a = () => {
    i(), u();
  };
  return Ue(a), a;
}
const ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, re = "__vueuse_ssr_handlers__";
ne[re] = ne[re] || {};
ne[re];
var ve;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ve || (ve = {}));
var Ke = Object.defineProperty, we = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, $e = (e, t, l) => t in e ? Ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, et = (e, t) => {
  for (var l in t || (t = {}))
    Je.call(t, l) && $e(e, l, t[l]);
  if (we)
    for (var l of we(t))
      je.call(t, l) && $e(e, l, t[l]);
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
  linear: Qe
}, tt);
const J = (e, t, l, n) => {
  const o = x(0), c = x(0), u = x(0), r = x(0);
  let i, a = null, s = null;
  const g = (y = !0) => new Promise((w) => {
    ze(() => {
      s = e.value, o.value = e.value ? e.value.clientWidth : 0, c.value = e.value ? e.value.clientHeight : 0, u.value = s ? s.getBoundingClientRect().width : 0, r.value = s ? s.getBoundingClientRect().height : 0, e.value ? (!o.value || !c.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && y && t(), w(!0);
    });
  }), d = () => {
    a = Xe(s, i), Ze(window, "resize", i);
  }, f = () => {
    a && (a.disconnect(), a.takeRecords(), a = null);
  }, h = async () => {
    await g(!1), i = Ve(g, 200), d(), typeof l == "function" && l();
  };
  return de(() => {
    h();
  }), Be(() => {
    f();
  }), {
    width: o,
    height: c,
    afterWidth: u,
    afterHeight: r,
    initWH: g
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
}, Y = Object.assign, F = (e) => Array.isArray(e) && e.length, De = (e) => Array.isArray(e) && e || [], z = (e) => e >= 0 ? e : 0, he = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  for (let n in e)
    e.hasOwnProperty(n) && (l[n] = he(e[n], t));
  return l;
}, U = /* @__PURE__ */ B({
  name: "FBorderBox1",
  props: Se,
  setup(e, {
    slots: t
  }) {
    const l = x(null), n = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let o = $(() => F(e.color) ? Y(n, e.color) : n);
    const {
      width: c,
      height: u,
      initWH: r
    } = J(l);
    return {
      width: c,
      height: u,
      initWH: r,
      borderBox1: l,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: n,
      strokeWidth: o,
      realColor: c,
      title: u
    } = this, r = 20;
    let i = o || 2, a = z(t - i - 2), s = z(l - i - 2);
    return m("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [m("svg", {
      class: "f-svg-container",
      width: a,
      height: s
    }, [m("polygon", {
      fill: n,
      stroke: c[0],
      "stroke-width": i,
      points: `
            ${r} ${i}, ${a - r} ${i}, ${a - i} ${r}, ${a - i} ${s - r}, ${a - r} ${s},
            ${r} ${s}, ${i} ${s - r}, ${i} ${r}
          `
    }, null), m("polyline", {
      stroke: c[1],
      "stroke-width": i + 1,
      points: `
            ${r - 8} 0,0 ${r - 8}
          `
    }, null), m("polyline", {
      stroke: c[1],
      "stroke-width": i + 1,
      points: `
            ${a} ${s - r + 8}, ${a - r + 8 + i} ${s}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${r + 15}, ${i} ${r}, ${r} ${i} , ${r + 15} ${i}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
           ${r + 15} ${s}, ${r}  ${s}, ${i} ${s - r}, ${i} ${s - r - 15}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
           ${a - r - 15} ${i}, ${a - r} ${i}, ${a - i} ${r}, ${a - i} ${r + 15}
          `
    }, null), m("polyline", {
      fill: "none",
      stroke: c[1],
      "stroke-width": i + 2,
      points: `
          ${a - r - 15} ${s}, ${a - r} ${s}, ${a - i} ${s - r}, ${a - i} ${s - r - 15}
          `
    }, null), u ? m("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${r} ${i}, ${a - r} ${i}, ${a - i} ${r}, ${a - i} ${r + 15}, ${i} ${r + 15},
            ${i} ${r}
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
U.install = function(e) {
  e.component(U.name, U);
};
const lt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(U);
  }
}, V = /* @__PURE__ */ B({
  name: "FBorderBox2",
  props: Se,
  setup(e, {
    slots: t
  }) {
    const l = x(null), n = ["white"];
    let o = $(() => F(e.color) ? Y(n, e.color) : n);
    const {
      width: c,
      height: u,
      initWH: r
    } = J(l);
    return {
      width: c,
      height: u,
      initWH: r,
      borderBox2: l,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: l,
      backgroundColor: n,
      strokeWidth: o,
      realColor: c,
      duration: u
    } = this;
    let r = o || 3, i = z(r), a = z(r), s = z(t - r), g = z(r), d = z(t - r), f = z(l - r), h = z(r), y = z(l - r);
    return m("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [m("svg", {
      class: "f-svg-container",
      width: t,
      height: l
    }, [m("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`
      },
      stroke: c[0],
      "stroke-width": r,
      fill: n,
      d: `M ${i} ${a}, L ${s} ${g}, L ${d} ${f}, L ${h} ${y}, Z`
    }, null)]), m("div", {
      class: "f-border-box-content"
    }, [R(e, "default")])]);
  }
});
V.install = function(e) {
  e.component(V.name, V);
};
const nt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(V);
  }
}, G = /* @__PURE__ */ B({
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
    const l = x(null), n = ["#4f29f0", "#c3c8de", "#414856"];
    let o = $(() => F(e.color) ? Y(n, e.color) : n);
    const {
      width: c,
      height: u,
      initWH: r
    } = J(l);
    return {
      width: c,
      height: u,
      initWH: r,
      loading1: l,
      defaultColor: n,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: l,
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
    }, null)]), l ? m("div", {
      class: "f-loading-text",
      "data-text": l
    }, null) : null]);
  }
});
G.install = function(e) {
  e.component(G.name, G);
};
const rt = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(G);
  }
}, it = B({
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
    let n = $(() => F(e.color) ? Y(l, e.color) : l);
    return {
      getLoadingStyle: $(() => ({
        width: e.width,
        height: e.height,
        color: n.value[2],
        "--border-color": n.value[0],
        "--border-top-color": n.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), Ie = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, o] of t)
    l[n] = o;
  return l;
}, at = /* @__PURE__ */ _("div", { class: "f-loading-round" }, null, -1), ot = { class: "loading-text" };
function st(e, t, l, n, o, c) {
  return p(), v("div", {
    class: "f-loading-2",
    style: I(e.getLoadingStyle)
  }, [
    at,
    _("div", ot, [
      R(e.$slots, "default", {}, () => [
        _("div", null, O(e.text), 1)
      ])
    ])
  ], 4);
}
const q = /* @__PURE__ */ Ie(it, [["render", st]]);
q.install = function(e) {
  e.component(q.name, q);
};
const ct = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(q);
  }
}, ut = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, dt = { class: "f-screen-container" }, ie = /* @__PURE__ */ B({
  name: "index",
  props: ut,
  setup(e) {
    const t = e, l = x(null), n = ge({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let o = x(1), c = x(1);
    ye("scaleX", o), ye("scaleY", c);
    const u = () => {
      t.width && t.height ? (n.width = t.width, n.height = t.height) : (n.width = l.value.clientWidth, n.height = l.value.clientHeight);
      const { width: g, height: d } = window.screen;
      n.screenWidth = g, n.screenHeight = d;
    }, r = () => {
      n.width && n.height ? (l.value.style.width = `${n.width}px`, l.value.style.height = `${n.height}px`) : (l.value.style.width = `${n.screenWidth}px`, l.value.style.height = `${n.screenHeight}px`);
    }, i = () => {
      const g = document.body.clientWidth, d = document.body.clientHeight, f = n.width || n.screenWidth, h = n.height || n.screenHeight, y = g / +f, w = d / +h;
      o.value = y, c.value = w, l.value.style.transform = `scale(${y}, ${w})`;
    };
    return J(l, () => {
      i();
    }, () => {
      u(), r(), i(), t.onAfterResize(), n.isReady = !0;
    }), (g, d) => (p(), v("div", dt, [
      _("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: l
      }, [
        n.isReady ? R(g.$slots, "default", { key: 0 }) : Oe("", !0)
      ], 512)
    ]));
  }
});
ie.install = function(e) {
  e.component("FScreenContainer", ie);
};
const gt = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(ie);
  }
}, ht = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, ft = 30, yt = 1 / ft;
class ae {
  constructor(t, l, n, o, c, u, r) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * l >> 0, this.targetX = n, this.targetY = o, this.time = c, this.radius = u, this.colors = r, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, l, n, o) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, n && o) {
      let c = n - this.x, u = o - this.y, r = Math.sqrt(c ** 2 + u ** 2), i = t / r;
      i = i > 7 ? 7 : i;
      let a = Math.atan2(u, c), s = Math.cos(a), g = Math.sin(a), d = s * i * -l, f = g * i * -l;
      this.velocityX += d, this.velocityY += f;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += yt);
  }
  change(t, l, n) {
    this.targetX = t, this.targetY = l, this.colors = n;
  }
}
const be = 30;
class mt {
  constructor(t, l, n) {
    this.radius = l, this.strength = n, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let l = t.particleData, n = l.length, o = this.particleArr, c = o.length;
      for (let r = 0; r < n; r++) {
        const { targetX: i, targetY: a, colors: s } = l[r];
        o[r] ? o[r].change(i, a, s) : o[r] = new ae(this.width, this.height, i, a, be, this.radius, s);
      }
      n < c && (this.particleArr = o.splice(0, n)), o = this.particleArr;
      let u = o.length;
      for (; u; ) {
        let r = ~~(Math.random() * u--), i = o[r], { targetX: a, targetY: s, colors: g } = i;
        i.targetX = o[u].targetX, i.targetY = o[u].targetY, i.colors = o[u].colors, o[u].targetX = a, o[u].targetY = s, o[u].colors = g;
      }
    } else
      this.particleArr = t.particleData.map((l) => new ae(this.width, this.height, l.targetX, l.targetY, be, this.radius, l.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const pt = 30;
class _e {
  constructor(t, l, n, o) {
    this.src = t, this.width = l, this.height = n, this.particleData = [], this.radius = o;
  }
  createParticleData(t = this.src) {
    return new Promise((l, n) => {
      let o = new Image();
      o.crossOrigin = "", o.src = decodeURI(new URL(t, import.meta.url).href), o.onload = () => {
        const c = document.createElement("canvas"), u = c.getContext("2d"), r = this.width, i = this.height;
        c.width = r, c.height = i, u == null || u.drawImage(o, 0, 0, r, i);
        const a = u == null ? void 0 : u.getImageData(0, 0, r, i).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let s = 0; s < i; s += 5)
          for (let g = 0; g < r; g += 5) {
            const d = (g + s * r) * 4, f = a[d + 3];
            if (f == 0)
              continue;
            const h = a[d], y = a[d + 1], w = a[d + 2];
            if (h + y + w + f) {
              const W = new ae(this.width, this.height, g, s, pt, this.radius, `rgba(${h},${y},${w},${f})`);
              this.particleData.push(W);
            }
          }
        l(this.particleData);
      }, o.onerror = () => {
        n("图片转化成粒子失败");
      };
    });
  }
}
const vt = ["width", "height"], oe = /* @__PURE__ */ B({
  name: "index",
  props: ht,
  setup(e, { expose: t }) {
    const l = e;
    let n = me("scaleX", x(1)), o = me("scaleY", x(1));
    const c = x(null), u = x(null);
    let r = x(), i = x();
    const a = async (g) => {
      i.value = new _e(g, l.width, l.height, l.radius), await i.value.createParticleData(), r.value.changeImg(i.value);
    }, s = async () => {
      i.value = new _e(l.src, l.width, l.height, l.radius), await i.value.createParticleData(), c.value && (u.value = c.value.getContext("2d"), r.value = new mt(c.value, l.radius, l.strength), c.value.addEventListener("mousemove", (g) => {
        const { left: d, top: f } = c.value.getBoundingClientRect(), { clientX: h, clientY: y } = g;
        r.value.mouseX = (h - d) * (1 / n.value), r.value.mouseY = (y - f) * (1 / o.value);
      }), r.value.drawCanvas(), r.value.changeImg(i.value));
    };
    return de(() => {
      s();
    }), t({
      toggleImg: a
    }), (g, d) => (p(), v("div", null, [
      _("canvas", {
        ref_key: "canvasRef",
        ref: c,
        width: l.width,
        height: l.height
      }, null, 8, vt)
    ]));
  }
});
oe.install = function(e) {
  e.component("FDynamicParticle", oe);
};
const wt = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(e) {
    e.use(oe);
  }
};
function $t(e) {
  return {
    handleToggle: (l) => {
      e.emit("handleToggle", l);
    }
  };
}
function bt(e, t, l) {
  const { handleToggle: n } = $t(l), o = (h) => {
    let y = De(h);
    return he(y);
  }, c = $(() => {
    if (t.mode === "page")
      return e.pageData[e.currPage - 1] || [];
    if (t.mode === "single")
      return e.currData || [];
  }), u = () => {
    if (t.mode === "page")
      if (e.tableData.length) {
        let h = [], y = Math.ceil(e.tableData.length / t.pageSize);
        for (let w = 1; w <= y; w++) {
          let T = e.tableData.slice(w * t.pageSize - t.pageSize, w * t.pageSize);
          h.push(T);
        }
        e.pageData = h, h[e.currPage - 1] || (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name));
      } else
        e.pageData = [[]], e.currPage = 1, e.toggleCount = 0, n(t.name);
  }, r = () => {
    e.intervalId === null && !e.isStopToggle && t.mode === "page" && (e.intervalId = setInterval(() => {
      e.pageData[e.currPage] ? e.currPage += 1 : (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name));
    }, t.toggleDur));
  }, i = (h = 1) => {
    d(), e.currPage = h, r();
  }, a = async (h, y = 1, w = []) => {
    console.log("shiftLen", y), console.log("arr", h), h.push(...w), await new Promise((T) => setTimeout(T, 300));
    for (let T = 0; T < y; T++)
      h[T] = {};
    h.splice(0, y);
  }, s = async () => {
    if (t.mode === "single")
      if (e.tableData.length) {
        const h = Math.ceil((e.tableData.length - t.pageSize) / t.togglePage) + 1;
        if (h === 1 && (console.log("1"), e.currPage = 1, e.toggleCount += 1, a(e.currData, t.pageSize, e.tableData.slice()), e.toggleCount >= t.emitCondition && n(t.name)), h !== 1 && e.currPage <= h && (console.log("2"), e.currPage === 1 ? (console.log("2-1"), e.currData = e.tableData.slice(0, t.pageSize)) : (console.log("2-2"), console.log("start", t.pageSize - 1 + (e.currPage - 2) * t.togglePage + 1), console.log("end", t.pageSize - 1 + (e.currPage - 1) * t.togglePage + 1), a(e.currData, t.togglePage, e.tableData.slice(
          t.pageSize - 1 + (e.currPage - 2) * t.togglePage + 1,
          t.pageSize - 1 + (e.currPage - 1) * t.togglePage + 1
        )))), e.currPage > h) {
          console.log("3"), e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name), s();
          return;
        }
      } else
        e.rowsHeight = [], e.currData = [], e.currPage = 1, e.toggleCount = 0, n(t.name);
  }, g = () => {
    e.intervalId === null && !e.isStopToggle && t.mode === "single" && (e.intervalId = setInterval(() => {
      e.currPage += 1, s();
    }, t.toggleDur));
  }, d = () => {
    e.intervalId && (clearInterval(e.intervalId), e.intervalId = null);
  };
  return {
    deepCloneArr: o,
    getCurrData: c,
    setPageData: u,
    setPageTimer: r,
    setPage: i,
    setCurrData: s,
    setToggleTimer: g,
    clearTimer: d,
    setIndex: (h) => {
      h.map((y, w) => y._index_ = w + 1);
    }
  };
}
function _t(e, t) {
  const l = $(() => function(r, i) {
    const a = ["f-scroll-table_row"];
    return t.stripe && i % 2 === 1 && a.push("f-scroll-table_row--striped"), t.wrap && a.push("f-scroll-table_row--nowrap"), a;
  }), n = $(() => {
    const r = ["cell"];
    return t.wrap || r.push("cell--nowrap"), r;
  }), o = $(() => ({})), c = $(() => function(r) {
    return {
      "max-height": e.rowsHeight[r] || "auto"
    };
  }), u = $(() => function(r, i, a, s) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: a,
      columnIndex: s,
      row: r,
      column: i
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: n,
    getBodyStyle: o,
    getRowStyle: c,
    getCellStyle: u
  };
}
const xt = {
  class: "f-scroll-table_header-wrapper"
}, Ct = {
  class: "f-scroll-table_header",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, Pt = ["width"], St = {
  class: "cell"
}, Dt = {
  class: "f-scroll-table_body",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, It = ["width"], se = /* @__PURE__ */ B({
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
    maxHeight: {
      default: "auto"
    },
    cellStyle: null,
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
    emitCondition: {
      default: 2
    }
  },
  setup(e, {
    expose: t
  }) {
    const l = e, n = ge({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      isStopToggle: !1,
      isAnimate: !1,
      rowsHeight: []
    }), o = xe(), {
      deepCloneArr: c,
      getCurrData: u,
      setPageData: r,
      setPageTimer: i,
      setCurrData: a,
      setToggleTimer: s,
      setPage: g,
      setIndex: d
    } = bt(n, l, o), {
      getRowClass: f,
      getCellClass: h,
      getBodyStyle: y,
      getRowStyle: w,
      getCellStyle: T
    } = _t(n, l);
    return ue(() => l.data, (W) => {
      n.tableData = c(W), d(n.tableData), r(), i(), a(), s();
    }), t({
      setPage: g
    }), (W, fe) => (p(), v("div", {
      ref: "scrollTable",
      class: E(["f-scroll-table", {
        "f-scroll-table--border": l.border
      }])
    }, [_("div", xt, [_("table", Ct, [_("colgroup", null, [(p(!0), v(H, null, L(l.columns, (C, k) => (p(), v("col", {
      width: C.width,
      key: k
    }, null, 8, Pt))), 128))]), _("thead", null, [_("tr", null, [(p(!0), v(H, null, L(l.columns, (C, k) => (p(), v("td", {
      class: "f-scroll-table_cell",
      style: I({
        "max-width": C.width
      }),
      key: k
    }, [_("div", St, O(C.label), 1)], 4))), 128))])])])]), _("div", {
      class: "f-scroll-table_body-wrapper is-hidden-scrollbar",
      ref: "bodyWrapper",
      style: I(b(y))
    }, [_("table", Dt, [_("colgroup", null, [(p(!0), v(H, null, L(l.columns, (C, k) => (p(), v("col", {
      width: C.width,
      key: k
    }, null, 8, It))), 128))]), m(Ce, {
      tag: "tbody",
      name: "fade",
      class: "f-scroll-table_body-inner"
    }, {
      default: ee(() => [(p(!0), v(H, null, L(b(u), (C, k) => (p(), v("tr", {
        class: E(b(f)(C, k)),
        key: C
      }, [(p(!0), v(H, null, L(l.columns, (A, X) => (p(), v("td", {
        class: "f-scroll-table_cell is-hidden-scrollbar",
        style: I({
          width: A.width,
          "max-width": A.width
        }),
        key: X
      }, [A.slot ? (p(), v("div", {
        key: 0,
        class: E(b(h))
      }, [R(W.$slots, A.slot, {
        params: {
          row: C,
          column: A.prop,
          $index: k
        }
      })], 2)) : A.type == "index" ? (p(), v("div", {
        key: 1,
        class: E(b(h)),
        style: I(b(T)(C, A.prop, k, X))
      }, O(C._index_), 7)) : (p(), v("div", {
        key: 2,
        class: E(b(h)),
        style: I(b(T)(C, A.prop, k, X))
      }, O(C[A.prop]), 7))], 4))), 128))], 2))), 128))]),
      _: 3
    })])], 4)], 2));
  }
});
se.install = function(e) {
  e.component("FScrollTable", se);
};
const Tt = {
  title: "scrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(se);
  }
}, K = /* @__PURE__ */ B({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, l = x(), n = x(), o = $(() => {
      var d, f, h, y;
      let c = ((d = l.value) == null ? void 0 : d.offsetWidth) || 0, u = ((f = l.value) == null ? void 0 : f.offsetHeight) || 0, r = ((h = n.value) == null ? void 0 : h.offsetWidth) || 0, i = ((y = n.value) == null ? void 0 : y.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && i < u || ["left", "right"].includes(t.direction) && r < c))
        return {
          "--text-scroll-width": `${c}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let a, s, g;
      return ["up", "down"].includes(t.direction) && (a = u + i, s = a / t.speed || 0, g = `up-scroll linear ${s}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (a = c + r, s = a / t.speed || 0, g = `left-scroll linear ${s}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${c}px`,
        "--text-scroll-height": `${u}px`,
        animation: g
      };
    });
    return (c, u) => (p(), v("div", {
      ref_key: "scrollText",
      ref: l,
      class: E(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      _("div", {
        ref_key: "textContent",
        ref: n,
        class: "text-content",
        style: I(b(o))
      }, [
        R(c.$slots, "default")
      ], 4)
    ], 2));
  }
});
K.install = function(e) {
  e.component("FScrollText", K);
};
const kt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(K);
  }
}, At = B({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const l = ["#d1d5db", "#3b82f6", "white"];
    let n = $(() => F(e.color) ? Y(l, e.color) : l);
    return {
      getProgressStyle: $(() => ({
        "--bgc": n.value[0],
        "--progress-color": n.value[1],
        "--progress-text-color": n.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function Et(e, t, l, n, o, c) {
  return p(), v("div", {
    class: "f-progress",
    style: I(e.getProgressStyle)
  }, [
    _("div", {
      class: "progress-inner",
      style: I({ width: `${e.percent}%` })
    }, [
      R(e.$slots, "default", { percent: e.percent }, () => [
        _("span", null, O(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const Z = /* @__PURE__ */ Ie(At, [["render", Et]]);
Z.install = function(e) {
  e.component(Z.name, Z);
};
const Bt = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(Z);
  }
};
function Te(e) {
  return {
    handleToggle: (n) => {
      e.emit("handle-toggle", n);
    },
    handleCellClick: (n, o, c, u, r) => {
      e.emit("cell-click", o, c, u, r, n);
    }
  };
}
function zt(e, t, l) {
  const { handleToggle: n } = Te(l), o = (d) => {
    let f = De(d);
    return he(f);
  }, c = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name);
  }, u = async (d, f, h) => {
    let y = h;
    f.map((w) => w._index_ = ++y), e.currData.length ? d === t.pageSize ? e.currData = [...f] : (e.currData.push(...f), e.currData.splice(0, d)) : e.currData.push(...f);
  }, r = async () => {
    if (e.tableData.length) {
      s(!1, !0), e.isEmpty = !1;
      let d;
      t.mode === "single" ? d = t.togglePage : d = t.pageSize;
      let f, h;
      e.currPage === 1 ? (f = 0, h = t.pageSize) : (f = d * (e.currPage - 2) + t.pageSize, h = d * (e.currPage - 1) + t.pageSize);
      let y = e.tableData.slice(f, h);
      y.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, y, f) : e.currPage === 1 ? await u(t.pageSize, y, f) : await u(d, y, f) : (e.currPage = 1, c(), r()), i();
    } else
      s(), e.currPage = 1, e.currData = [], e.isEmpty = !0, a();
  }, i = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, r();
    }, t.toggleDur));
  }, a = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      n(t.name);
    }, t.emptyEmitDur));
  }, s = (d = !0, f = !0) => {
    e.intervalId && d && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && f && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: o,
    setCurrData: r,
    setPageInterval: i,
    setEmptyTimeout: a,
    clearTimer: s,
    setPage: (d = 1) => {
      s(), e.currPage = d;
      let f;
      t.mode === "single" ? f = t.togglePage : f = t.pageSize;
      let h = f * (e.currPage - 1), y = f * (e.currPage - 1) + t.pageSize, w = e.tableData.slice(h, y);
      w.length ? (u(t.pageSize, w, h), i()) : r(), e.tableData.length || a();
    }
  };
}
function Ot(e, t) {
  const l = $(() => function(a, s) {
    const g = ["f-scroll-table__row"];
    return t.stripe && s % 2 === 1 && g.push("f-scroll-table_row--striped"), g;
  }), n = $(() => {
    const a = ["cell"];
    return t.wrap ? a.push("cell--wrap") : a.push("cell--nowrap"), a;
  }), o = $(() => function(a) {
    let s = a.reduce((g, d) => g += d.width, 0);
    return {
      width: `${s}px`,
      "max-width": `${s}px`
    };
  }), c = $(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = $(() => function(a) {
    return {};
  }), r = $(() => function(a) {
    return {
      width: `${a.width}px`,
      "max-width": `${a.width}px`,
      "text-align": a.align || t.align || "start"
    };
  }), i = $(() => function(a, s, g, d) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: g,
      columnIndex: d,
      row: a,
      column: s
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: l,
    getCellClass: n,
    getTableStyle: o,
    getBodyStyle: c,
    getRowStyle: u,
    getExtraCellStyle: r,
    getCellStyle: i
  };
}
const Rt = {
  class: "f-scroll-table__head"
}, Wt = ["onClick"], Ht = {
  key: 1
}, ce = /* @__PURE__ */ B({
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
    const l = e, n = ge({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      setTimeoutId: null,
      isStopToggle: !1,
      isEmpty: !1
    }), o = xe(), c = x(), {
      deepCloneArr: u,
      setCurrData: r,
      setPageInterval: i,
      setEmptyTimeout: a,
      clearTimer: s,
      setPage: g
    } = zt(n, l, o), {
      handleCellClick: d
    } = Te(o), {
      getRowClass: f,
      getCellClass: h,
      getTableStyle: y,
      getBodyStyle: w,
      getRowStyle: T,
      getExtraCellStyle: W,
      getCellStyle: fe
    } = Ot(n, l), C = (P) => {
      P.style.opacity = "0", P.style.gridTemplateRows = "0fr";
    }, k = (P, M) => {
      P.offsetWidth, P.style.opacity = "1", P.style.gridTemplateRows = "1fr", M();
    }, A = async (P) => {
      P.style.opacity = "1";
    }, X = async (P, M) => {
      P.style.opacity = "0", P.style.gridTemplateRows = "0fr", await new Promise((S) => {
        setTimeout(() => {
          P.remove(), S(!0);
        }, l.pageAnimateDur);
      }), M();
    };
    return ue(() => l.data, (P) => {
      n.tableData = u(P), r();
    }, {
      immediate: !0,
      deep: !0
    }), de(() => {
      l.mouseEvent && (c.value.addEventListener("mouseenter", () => {
        s(!0, !0), n.isStopToggle = !0;
      }), c.value.addEventListener("mouseleave", () => {
        n.isStopToggle = !1, n.tableData.length ? i() : a();
      }));
    }), Re(() => {
      s();
    }), t({
      setPage: g
    }), (P, M) => (p(), v("div", {
      ref: "scrollTable",
      class: E(["f-scroll-table2", {
        "is-border": l.border
      }]),
      style: I(b(y)(l.columns))
    }, [_("div", Rt, [(p(!0), v(H, null, L(l.columns, (S, N) => (p(), v("div", {
      class: "f-scroll-table__cell",
      style: I(b(W)(S)),
      key: N
    }, O(S.label), 5))), 128))]), _("div", {
      ref_key: "scrollTable__body",
      ref: c,
      class: "f-scroll-table__content is-hidden-scrollbar",
      style: I(b(w))
    }, [m(Ce, {
      tag: "div",
      css: !1,
      onBeforeEnter: C,
      onEnter: k,
      onBeforeLeave: A,
      onLeave: X
    }, {
      default: ee(() => [(p(!0), v(H, null, L(n.currData, (S, N) => (p(), v("div", {
        class: "f-scroll-table__row-wrap",
        key: S
      }, [_("div", {
        class: E(b(f)(S, N))
      }, [(p(!0), v(H, null, L(l.columns, (D, j) => (p(), v("div", {
        class: "f-scroll-table__cell",
        style: I([b(W)(D), b(fe)(S, D.type === "index" ? "_index_" : D.prop, N, j)]),
        key: `${S[D.prop]}${j}`,
        onClick: (ke) => b(d)(ke, S, S[D.prop], N, j)
      }, [D.type === "index" ? (p(), v("div", {
        key: 0,
        class: E(b(h))
      }, O(S._index_ || ""), 3)) : D.type === "scroll" ? (p(), v("div", Ht, [m(b(K), We(He(D.scrollOption)), {
        default: ee(() => [_("div", null, O(S[D.prop]), 1)]),
        _: 2
      }, 1040)])) : D.slot ? (p(), v("div", {
        key: 2,
        class: E(b(h))
      }, [R(P.$slots, D.slot, {
        params: {
          row: S,
          column: D.prop,
          $index: N
        }
      })], 2)) : (p(), v("div", {
        key: 3,
        class: E(b(h))
      }, O(S[D.prop]), 3))], 12, Wt))), 128))], 2)]))), 128))]),
      _: 3
    })], 4)], 6));
  }
});
ce.install = function(e) {
  e.component("FScrollTable2", ce);
};
const Lt = {
  title: "scrollTable2 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(ce);
  }
}, Nt = [
  Ne,
  lt,
  nt,
  rt,
  ct,
  gt,
  wt,
  Tt,
  Lt,
  kt,
  Bt
], Yt = {
  version: "1.0.12",
  install(e) {
    Nt.forEach((t) => e.use(t));
  }
};
export {
  U as BorderBox1,
  V as BorderBox2,
  oe as DynamicParticle,
  Q as Icon,
  G as Loading1,
  q as Loading2,
  Z as Progress,
  ie as ScreenContainer,
  se as ScrollTable,
  ce as ScrollTable2,
  K as ScrollText,
  Yt as default
};
