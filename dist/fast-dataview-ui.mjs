import './style.css';
import { defineComponent as D, computed as x, createVNode as f, renderSlot as O, getCurrentScope as me, onScopeDispose as we, unref as S, watch as ue, ref as v, onMounted as de, onUnmounted as ve, nextTick as $e, openBlock as m, createElementBlock as w, normalizeStyle as T, createElementVNode as b, toDisplayString as z, reactive as ge, provide as ne, createCommentVNode as be, inject as le, getCurrentInstance as xe, normalizeClass as A, Fragment as B, renderList as R, TransitionGroup as _e, withCtx as Ce } from "vue";
const Pe = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, L = /* @__PURE__ */ D({
  name: "FIcon",
  props: Pe,
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
    }), () => f("div", {
      class: "f-icon",
      style: {
        border: "1px solid black"
      }
    }, [O(t, "default")]);
  }
});
L.install = function(e) {
  e.component(L.name, L);
};
const Se = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(e) {
    e.use(L);
  }
};
function Ie(e, t) {
  const n = window.MutationObserver, l = new n(t);
  return l.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), l;
}
var re;
const he = typeof window < "u", De = (e) => typeof e == "string", V = () => {
};
he && ((re = window == null ? void 0 : window.navigator) != null && re.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function G(e) {
  return typeof e == "function" ? e() : S(e);
}
function ke(e, t) {
  function n(...l) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(a);
    });
  }
  return n;
}
function Te(e, t = {}) {
  let n, l, o = V;
  const a = (r) => {
    clearTimeout(r), o(), o = V;
  };
  return (r) => {
    const i = G(e), s = G(t.maxWait);
    return n && a(n), i <= 0 || s !== void 0 && s <= 0 ? (l && (a(l), l = null), Promise.resolve(r())) : new Promise((c, d) => {
      o = t.rejectOnCancel ? d : c, s && !l && (l = setTimeout(() => {
        n && a(n), l = null, c(r());
      }, s)), n = setTimeout(() => {
        l && a(l), l = null, c(r());
      }, i);
    });
  };
}
function Oe(e) {
  return e;
}
function Ae(e) {
  return me() ? (we(e), !0) : !1;
}
function We(e, t = 200, n = {}) {
  return ke(Te(t, n), e);
}
function Be(e) {
  var t;
  const n = G(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Re = he ? window : void 0;
function ze(...e) {
  let t, n, l, o;
  if (De(e[0]) || Array.isArray(e[0]) ? ([n, l, o] = e, t = Re) : [t, n, l, o] = e, !t)
    return V;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const a = [], u = () => {
    a.forEach((c) => c()), a.length = 0;
  }, r = (c, d, h) => (c.addEventListener(d, h, o), () => c.removeEventListener(d, h, o)), i = ue(() => Be(t), (c) => {
    u(), c && a.push(...n.flatMap((d) => l.map((h) => r(c, d, h))));
  }, { immediate: !0, flush: "post" }), s = () => {
    i(), u();
  };
  return Ae(s), s;
}
const q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = "__vueuse_ssr_handlers__";
q[Z] = q[Z] || {};
q[Z];
var ie;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ie || (ie = {}));
var He = Object.defineProperty, oe = Object.getOwnPropertySymbols, Ee = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, se = (e, t, n) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ne = (e, t) => {
  for (var n in t || (t = {}))
    Ee.call(t, n) && se(e, n, t[n]);
  if (oe)
    for (var n of oe(t))
      Le.call(t, n) && se(e, n, t[n]);
  return e;
};
const Xe = {
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
Ne({
  linear: Oe
}, Xe);
const Q = (e, t, n, l) => {
  const o = v(0), a = v(0), u = v(0), r = v(0);
  let i, s = null, c = null;
  const d = (y = !0) => new Promise(($) => {
    $e(() => {
      c = e.value, o.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, u.value = c ? c.getBoundingClientRect().width : 0, r.value = c ? c.getBoundingClientRect().height : 0, e.value ? (!o.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof t == "function" && y && t(), $(!0);
    });
  }), h = () => {
    s = Ie(c, i), ze(window, "resize", i);
  }, p = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, g = async () => {
    await d(!1), i = We(d, 200), h(), typeof n == "function" && n();
  };
  return de(() => {
    g();
  }), ve(() => {
    p();
  }), {
    width: o,
    height: a,
    afterWidth: u,
    afterHeight: r,
    initWH: d
  };
}, fe = {
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
}, H = Object.assign, E = (e) => Array.isArray(e) && e.length, Ye = (e) => Array.isArray(e) && e || [], I = (e) => e >= 0 ? e : 0, ye = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  for (let l in e)
    e.hasOwnProperty(l) && (n[l] = ye(e[l], t));
  return n;
}, N = /* @__PURE__ */ D({
  name: "FBorderBox1",
  props: fe,
  setup(e, {
    slots: t
  }) {
    const n = v(null), l = ["rgba(46, 96, 153,0.85)", "rgba(71, 196, 245,0.85)"];
    let o = x(() => E(e.color) ? H(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: r
    } = Q(n);
    return {
      width: a,
      height: u,
      initWH: r,
      borderBox1: n,
      defaultColor: l,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: n,
      backgroundColor: l,
      strokeWidth: o,
      realColor: a,
      title: u
    } = this, r = 20;
    let i = o || 2, s = I(t - i - 2), c = I(n - i - 2);
    return f("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [f("svg", {
      class: "f-svg-container",
      width: s,
      height: c
    }, [f("polygon", {
      fill: l,
      stroke: a[0],
      "stroke-width": i,
      points: `
            ${r} ${i}, ${s - r} ${i}, ${s - i} ${r}, ${s - i} ${c - r}, ${s - r} ${c},
            ${r} ${c}, ${i} ${c - r}, ${i} ${r}
          `
    }, null), f("polyline", {
      stroke: a[1],
      "stroke-width": i + 1,
      points: `
            ${r - 8} 0,0 ${r - 8}
          `
    }, null), f("polyline", {
      stroke: a[1],
      "stroke-width": i + 1,
      points: `
            ${s} ${c - r + 8}, ${s - r + 8 + i} ${c}
          `
    }, null), f("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
            ${i} ${r + 15}, ${i} ${r}, ${r} ${i} , ${r + 15} ${i}
          `
    }, null), f("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
           ${r + 15} ${c}, ${r}  ${c}, ${i} ${c - r}, ${i} ${c - r - 15}
          `
    }, null), f("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
           ${s - r - 15} ${i}, ${s - r} ${i}, ${s - i} ${r}, ${s - i} ${r + 15}
          `
    }, null), f("polyline", {
      fill: "none",
      stroke: a[1],
      "stroke-width": i + 2,
      points: `
          ${s - r - 15} ${c}, ${s - r} ${c}, ${s - i} ${c - r}, ${s - i} ${c - r - 15}
          `
    }, null), u ? f("polygon", {
      fill: "rgba(33, 173, 238,0.1)",
      points: `
            ${r} ${i}, ${s - r} ${i}, ${s - i} ${r}, ${s - i} ${r + 15}, ${i} ${r + 15},
            ${i} ${r}
          `
    }, null) : null, u ? f("text", {
      x: "30",
      y: "25",
      "font-size": "16",
      "font-weight": "bold",
      fill: "#279fc7"
    }, [u]) : null]), f("div", {
      class: "f-border-box-content"
    }, [f("div", null, [O(e, "default")])])]);
  }
});
N.install = function(e) {
  e.component(N.name, N);
};
const Fe = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(N);
  }
}, X = /* @__PURE__ */ D({
  name: "FBorderBox2",
  props: fe,
  setup(e, {
    slots: t
  }) {
    const n = v(null), l = ["white"];
    let o = x(() => E(e.color) ? H(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: r
    } = Q(n);
    return {
      width: a,
      height: u,
      initWH: r,
      borderBox2: n,
      defaultColor: l,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: n,
      backgroundColor: l,
      strokeWidth: o,
      realColor: a,
      duration: u
    } = this;
    let r = o || 3, i = I(r), s = I(r), c = I(t - r), d = I(r), h = I(t - r), p = I(n - r), g = I(r), y = I(n - r);
    return f("div", {
      ref: "borderBox2",
      class: "f-border-box-2"
    }, [f("svg", {
      class: "f-svg-container",
      width: t,
      height: n
    }, [f("path", {
      class: "f-container-path",
      style: {
        "--duration": `${u}s`
      },
      stroke: a[0],
      "stroke-width": r,
      fill: l,
      d: `M ${i} ${s}, L ${c} ${d}, L ${h} ${p}, L ${g} ${y}, Z`
    }, null)]), f("div", {
      class: "f-border-box-content"
    }, [O(e, "default")])]);
  }
});
X.install = function(e) {
  e.component(X.name, X);
};
const Me = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(X);
  }
}, Y = /* @__PURE__ */ D({
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
    const n = v(null), l = ["#4f29f0", "#c3c8de", "#414856"];
    let o = x(() => E(e.color) ? H(l, e.color) : l);
    const {
      width: a,
      height: u,
      initWH: r
    } = Q(n);
    return {
      width: a,
      height: u,
      initWH: r,
      loading1: n,
      defaultColor: l,
      realColor: o
    };
  },
  render() {
    const {
      $slots: e,
      realColor: t,
      text: n,
      duration: l
    } = this;
    return f("div", {
      ref: "loading1",
      class: "f-loading-1",
      style: {
        "--front-color": t[0],
        "--back-color": t[1],
        "--text-color": t[2],
        "--duration": `${l}s`
      }
    }, [f("svg", {
      class: "f-circle-outer",
      viewBox: "0 0 86 86"
    }, [f("circle", {
      class: "f-back",
      cx: "43",
      cy: "43",
      r: "40"
    }, null), f("circle", {
      class: "f-front",
      cx: "43",
      cy: "43",
      r: "40"
    }, null)]), f("svg", {
      class: "f-circle-middle",
      viewBox: "0 0 60 60"
    }, [f("circle", {
      class: "f-back",
      cx: "30",
      cy: "30",
      r: "27"
    }, null), f("circle", {
      class: "f-front",
      cx: "30",
      cy: "30",
      r: "27"
    }, null)]), f("svg", {
      class: "f-circle-inner",
      viewBox: "0 0 34 34"
    }, [f("circle", {
      class: "f-back",
      cx: "17",
      cy: "17",
      r: "14"
    }, null), f("circle", {
      class: "f-front",
      cx: "17",
      cy: "17",
      r: "14"
    }, null)]), n ? f("div", {
      class: "f-loading-text",
      "data-text": n
    }, null) : null]);
  }
});
Y.install = function(e) {
  e.component(Y.name, Y);
};
const Qe = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(Y);
  }
}, Ue = D({
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
    let l = x(() => E(e.color) ? H(n, e.color) : n);
    return {
      getLoadingStyle: x(() => ({
        width: e.width,
        height: e.height,
        color: l.value[2],
        "--border-color": l.value[0],
        "--border-top-color": l.value[1],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Ve = /* @__PURE__ */ b("div", { class: "f-loading-round" }, null, -1), Ge = { class: "loading-text" };
function qe(e, t, n, l, o, a) {
  return m(), w("div", {
    class: "f-loading-2",
    style: T(e.getLoadingStyle)
  }, [
    Ve,
    b("div", Ge, [
      O(e.$slots, "default", {}, () => [
        b("div", null, z(e.text), 1)
      ])
    ])
  ], 4);
}
const F = /* @__PURE__ */ pe(Ue, [["render", qe]]);
F.install = function(e) {
  e.component(F.name, F);
};
const Ze = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(e) {
    e.use(F);
  }
}, Ke = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, Je = { class: "f-screen-container" }, K = /* @__PURE__ */ D({
  name: "index",
  props: Ke,
  setup(e) {
    const t = e, n = v(null), l = ge({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let o = v(1), a = v(1);
    ne("scaleX", o), ne("scaleY", a);
    const u = () => {
      t.width && t.height ? (l.width = t.width, l.height = t.height) : (l.width = n.value.clientWidth, l.height = n.value.clientHeight);
      const { width: d, height: h } = window.screen;
      l.screenWidth = d, l.screenHeight = h;
    }, r = () => {
      l.width && l.height ? (n.value.style.width = `${l.width}px`, n.value.style.height = `${l.height}px`) : (n.value.style.width = `${l.screenWidth}px`, n.value.style.height = `${l.screenHeight}px`);
    }, i = () => {
      const d = document.body.clientWidth, h = document.body.clientHeight, p = l.width || l.screenWidth, g = l.height || l.screenHeight, y = d / +p, $ = h / +g;
      o.value = y, a.value = $, n.value.style.transform = `scale(${y}, ${$})`;
    };
    return Q(n, () => {
      i();
    }, () => {
      u(), r(), i(), t.onAfterResize(), l.isReady = !0;
    }), (d, h) => (m(), w("div", Je, [
      b("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: n
      }, [
        l.isReady ? O(d.$slots, "default", { key: 0 }) : be("", !0)
      ], 512)
    ]));
  }
});
K.install = function(e) {
  e.component("FScreenContainer", K);
};
const je = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(e) {
    e.use(K);
  }
}, et = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, tt = 30, nt = 1 / tt;
class J {
  constructor(t, n, l, o, a, u, r) {
    this.x = Math.random() * t >> 0, this.y = Math.random() * n >> 0, this.targetX = l, this.targetY = o, this.time = a, this.radius = u, this.colors = r, this.opacity = 0;
  }
  draw(t) {
    t.fillStyle = `${this.colors}`, t.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), t.fill();
  }
  update(t, n, l, o) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, l && o) {
      let a = l - this.x, u = o - this.y, r = Math.sqrt(a ** 2 + u ** 2), i = t / r;
      i = i > 7 ? 7 : i;
      let s = Math.atan2(u, a), c = Math.cos(s), d = Math.sin(s), h = c * i * -n, p = d * i * -n;
      this.velocityX += h, this.velocityY += p;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += nt);
  }
  change(t, n, l) {
    this.targetX = t, this.targetY = n, this.colors = l;
  }
}
const ae = 30;
class lt {
  constructor(t, n, l) {
    this.radius = n, this.strength = l, this.canvasEle = t, this.ctx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(t) {
    if (this.particleArr.length) {
      let n = t.particleData, l = n.length, o = this.particleArr, a = o.length;
      for (let r = 0; r < l; r++) {
        const { targetX: i, targetY: s, colors: c } = n[r];
        o[r] ? o[r].change(i, s, c) : o[r] = new J(this.width, this.height, i, s, ae, this.radius, c);
      }
      l < a && (this.particleArr = o.splice(0, l)), o = this.particleArr;
      let u = o.length;
      for (; u; ) {
        let r = ~~(Math.random() * u--), i = o[r], { targetX: s, targetY: c, colors: d } = i;
        i.targetX = o[u].targetX, i.targetY = o[u].targetY, i.colors = o[u].colors, o[u].targetX = s, o[u].targetY = c, o[u].colors = d;
      }
    } else
      this.particleArr = t.particleData.map((n) => new J(this.width, this.height, n.targetX, n.targetY, ae, this.radius, n.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((t) => {
      t.update(30, this.strength, this.mouseX, this.mouseY), t.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const rt = 30;
class ce {
  constructor(t, n, l, o) {
    this.src = t, this.width = n, this.height = l, this.particleData = [], this.radius = o;
  }
  createParticleData(t = this.src) {
    return new Promise((n, l) => {
      let o = new Image();
      o.crossOrigin = "", o.src = decodeURI(new URL(t, import.meta.url).href), o.onload = () => {
        const a = document.createElement("canvas"), u = a.getContext("2d"), r = this.width, i = this.height;
        a.width = r, a.height = i, u == null || u.drawImage(o, 0, 0, r, i);
        const s = u == null ? void 0 : u.getImageData(0, 0, r, i).data;
        u == null || u.clearRect(0, 0, this.width, this.height);
        for (let c = 0; c < i; c += 5)
          for (let d = 0; d < r; d += 5) {
            const h = (d + c * r) * 4, p = s[h + 3];
            if (p == 0)
              continue;
            const g = s[h], y = s[h + 1], $ = s[h + 2];
            if (g + y + $ + p) {
              const W = new J(this.width, this.height, d, c, rt, this.radius, `rgba(${g},${y},${$},${p})`);
              this.particleData.push(W);
            }
          }
        n(this.particleData);
      }, o.onerror = () => {
        l("图片转化成粒子失败");
      };
    });
  }
}
const it = ["width", "height"], j = /* @__PURE__ */ D({
  name: "index",
  props: et,
  setup(e, { expose: t }) {
    const n = e;
    let l = le("scaleX", v(1)), o = le("scaleY", v(1));
    const a = v(null), u = v(null);
    let r = v(), i = v();
    const s = async (d) => {
      i.value = new ce(d, n.width, n.height, n.radius), await i.value.createParticleData(), r.value.changeImg(i.value);
    }, c = async () => {
      i.value = new ce(n.src, n.width, n.height, n.radius), await i.value.createParticleData(), a.value && (u.value = a.value.getContext("2d"), r.value = new lt(a.value, n.radius, n.strength), a.value.addEventListener("mousemove", (d) => {
        const { left: h, top: p } = a.value.getBoundingClientRect(), { clientX: g, clientY: y } = d;
        r.value.mouseX = (g - h) * (1 / l.value), r.value.mouseY = (y - p) * (1 / o.value);
      }), r.value.drawCanvas(), r.value.changeImg(i.value));
    };
    return de(() => {
      c();
    }), t({
      toggleImg: s
    }), (d, h) => (m(), w("div", null, [
      b("canvas", {
        ref_key: "canvasRef",
        ref: a,
        width: n.width,
        height: n.height
      }, null, 8, it)
    ]));
  }
});
j.install = function(e) {
  e.component("FDynamicParticle", j);
};
const ot = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(e) {
    e.use(j);
  }
};
function st(e) {
  return {
    handleToggle: (n) => {
      e.emit("handleToggle", n);
    }
  };
}
function at(e, t, n) {
  const { handleToggle: l } = st(n), o = (g) => {
    let y = Ye(g);
    return ye(y);
  }, a = x(() => {
    if (t.mode === "page")
      return e.pageData[e.currPage - 1] || [];
    if (t.mode === "single")
      return e.currData || [];
  }), u = () => {
    if (t.mode === "page")
      if (e.tableData.length) {
        let g = [], y = Math.ceil(e.tableData.length / t.pageSize);
        for (let $ = 1; $ <= y; $++) {
          let C = e.tableData.slice($ * t.pageSize - t.pageSize, $ * t.pageSize);
          g.push(C);
        }
        e.pageData = g, g[e.currPage - 1] || (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && l(t.name));
      } else
        e.pageData = [[]], e.currPage = 1, e.toggleCount = 0, l(t.name);
  }, r = () => {
    e.intervalId === null && !e.isStopToggle && t.mode === "page" && (e.intervalId = setInterval(() => {
      e.pageData[e.currPage] ? e.currPage += 1 : (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && l(t.name));
    }, t.toggleDur));
  }, i = (g = 1) => {
    h(), e.currPage = g, r();
  }, s = async (g, y = 1, $ = []) => {
    console.log("shiftLen", y), console.log("arr", g), g.push(...$), await new Promise((C) => setTimeout(C, 300));
    for (let C = 0; C < y; C++)
      g[C] = {};
    g.splice(0, y);
  }, c = async () => {
    if (t.mode === "single")
      if (e.tableData.length) {
        const g = Math.ceil((e.tableData.length - t.pageSize) / t.togglePage) + 1;
        if (g === 1 && (console.log("1"), e.currPage = 1, e.toggleCount += 1, s(e.currData, t.pageSize, e.tableData.slice()), e.toggleCount >= t.emitCondition && l(t.name)), g !== 1 && e.currPage <= g && (console.log("2"), e.currPage === 1 ? (console.log("2-1"), e.currData = e.tableData.slice(0, t.pageSize)) : (console.log("2-2"), console.log("start", t.pageSize - 1 + (e.currPage - 2) * t.togglePage + 1), console.log("end", t.pageSize - 1 + (e.currPage - 1) * t.togglePage + 1), s(e.currData, t.togglePage, e.tableData.slice(
          t.pageSize - 1 + (e.currPage - 2) * t.togglePage + 1,
          t.pageSize - 1 + (e.currPage - 1) * t.togglePage + 1
        )))), e.currPage > g) {
          console.log("3"), e.currPage = 1, e.toggleCount += 1, e.toggleCount >= t.emitCondition && l(t.name), c();
          return;
        }
      } else
        e.rowsHeight = [], e.currData = [], e.currPage = 1, e.toggleCount = 0, l(t.name);
  }, d = () => {
    e.intervalId === null && !e.isStopToggle && t.mode === "single" && (e.intervalId = setInterval(() => {
      e.currPage += 1, c();
    }, t.toggleDur));
  }, h = () => {
    e.intervalId && (clearInterval(e.intervalId), e.intervalId = null);
  };
  return {
    deepCloneArr: o,
    getCurrData: a,
    setPageData: u,
    setPageTimer: r,
    setPage: i,
    setCurrData: c,
    setToggleTimer: d,
    clearTimer: h,
    setIndex: (g) => {
      g.map((y, $) => y._index_ = $ + 1);
    }
  };
}
function ct(e, t) {
  const n = x(() => function(r, i) {
    const s = ["f-scroll-table_row"];
    return t.stripe && i % 2 === 1 && s.push("f-scroll-table_row--striped"), t.wrap && s.push("f-scroll-table_row--nowrap"), s;
  }), l = x(() => {
    const r = ["cell"];
    return t.wrap || r.push("cell--nowrap"), r;
  }), o = x(() => ({})), a = x(() => function(r) {
    return {
      "max-height": e.rowsHeight[r] || "auto"
    };
  }), u = x(() => function(r, i, s, c) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: s,
      columnIndex: c,
      row: r,
      column: i
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: n,
    getCellClass: l,
    getBodyStyle: o,
    getRowStyle: a,
    getCellStyle: u
  };
}
const ut = {
  class: "f-scroll-table_header-wrapper"
}, dt = {
  class: "f-scroll-table_header",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, gt = ["width"], ht = {
  class: "cell"
}, ft = {
  class: "f-scroll-table_body",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, yt = ["width"], ee = /* @__PURE__ */ D({
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
    const n = e, l = ge({
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
      deepCloneArr: a,
      getCurrData: u,
      setPageData: r,
      setPageTimer: i,
      setCurrData: s,
      setToggleTimer: c,
      setPage: d,
      setIndex: h
    } = at(l, n, o), {
      getRowClass: p,
      getCellClass: g,
      getBodyStyle: y,
      getRowStyle: $,
      getCellStyle: C
    } = ct(l, n);
    return ue(() => n.data, (W) => {
      l.tableData = a(W), h(l.tableData), r(), i(), s(), c();
    }), t({
      setPage: d
    }), (W, xt) => (m(), w("div", {
      ref: "scrollTable",
      class: A(["f-scroll-table", {
        "f-scroll-table--border": n.border
      }])
    }, [b("div", ut, [b("table", dt, [b("colgroup", null, [(m(!0), w(B, null, R(n.columns, (_, P) => (m(), w("col", {
      width: _.width,
      key: P
    }, null, 8, gt))), 128))]), b("thead", null, [b("tr", null, [(m(!0), w(B, null, R(n.columns, (_, P) => (m(), w("td", {
      class: "f-scroll-table_cell",
      style: T({
        "max-width": _.width
      }),
      key: P
    }, [b("div", ht, z(_.label), 1)], 4))), 128))])])])]), b("div", {
      class: "f-scroll-table_body-wrapper is-hidden-scrollbar",
      ref: "bodyWrapper",
      style: T(S(y))
    }, [b("table", ft, [b("colgroup", null, [(m(!0), w(B, null, R(n.columns, (_, P) => (m(), w("col", {
      width: _.width,
      key: P
    }, null, 8, yt))), 128))]), f(_e, {
      tag: "tbody",
      name: "fade",
      class: "f-scroll-table_body-inner"
    }, {
      default: Ce(() => [(m(!0), w(B, null, R(S(u), (_, P) => (m(), w("tr", {
        class: A(S(p)(_, P)),
        key: _
      }, [(m(!0), w(B, null, R(n.columns, (k, U) => (m(), w("td", {
        class: "f-scroll-table_cell is-hidden-scrollbar",
        style: T({
          width: k.width,
          "max-width": k.width
        }),
        key: U
      }, [k.slot ? (m(), w("div", {
        key: 0,
        class: A(S(g))
      }, [O(W.$slots, k.slot, {
        params: {
          row: _,
          column: k.prop,
          $index: P
        }
      })], 2)) : k.type == "index" ? (m(), w("div", {
        key: 1,
        class: A(S(g)),
        style: T(S(C)(_, k.prop, P, U))
      }, z(_._index_), 7)) : (m(), w("div", {
        key: 2,
        class: A(S(g)),
        style: T(S(C)(_, k.prop, P, U))
      }, z(_[k.prop]), 7))], 4))), 128))], 2))), 128))]),
      _: 3
    })])], 4)], 2));
  }
});
ee.install = function(e) {
  e.component("FScrollTable", ee);
};
const pt = {
  title: "scrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(ee);
  }
}, te = /* @__PURE__ */ D({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 }
  },
  setup(e) {
    const t = e, n = v(), l = v(), o = x(() => {
      var h, p, g, y;
      let a = ((h = n.value) == null ? void 0 : h.offsetWidth) || 0, u = ((p = n.value) == null ? void 0 : p.offsetHeight) || 0, r = ((g = l.value) == null ? void 0 : g.offsetWidth) || 0, i = ((y = l.value) == null ? void 0 : y.offsetHeight) || 0, s, c, d;
      return ["up", "down"].includes(t.direction) && (s = u + i, c = s / t.speed || 0, d = `up-scroll linear ${c}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (s = a + r, c = s / t.speed || 0, d = `left-scroll linear ${c}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${a}px`,
        "--text-scroll-height": `${u}px`,
        animation: d
      };
    });
    return (a, u) => (m(), w("div", {
      ref_key: "scrollText",
      ref: n,
      class: A(["f-scroll-text", `f-scroll-text--${t.type}`])
    }, [
      b("div", {
        ref_key: "textContent",
        ref: l,
        class: "text-content",
        style: T(S(o))
      }, [
        O(a.$slots, "default")
      ], 4)
    ], 2));
  }
});
te.install = function(e) {
  e.component("FScrollText", te);
};
const mt = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(te);
  }
}, wt = D({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const n = ["#d1d5db", "#3b82f6", "white"];
    let l = x(() => E(e.color) ? H(n, e.color) : n);
    return {
      getProgressStyle: x(() => ({
        "--bgc": l.value[0],
        "--progress-color": l.value[1],
        "--progress-text-color": l.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
});
function vt(e, t, n, l, o, a) {
  return m(), w("div", {
    class: "f-progress",
    style: T(e.getProgressStyle)
  }, [
    b("div", {
      class: "progress-inner",
      style: T({ width: `${e.percent}%` })
    }, [
      O(e.$slots, "default", { percent: e.percent }, () => [
        b("span", null, z(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const M = /* @__PURE__ */ pe(wt, [["render", vt]]);
M.install = function(e) {
  e.component(M.name, M);
};
const $t = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(M);
  }
}, bt = [
  Se,
  Fe,
  Me,
  Qe,
  Ze,
  je,
  ot,
  pt,
  mt,
  $t
], Ct = {
  version: "1.0.12",
  install(e) {
    bt.forEach((t) => e.use(t));
  }
};
export {
  N as BorderBox1,
  X as BorderBox2,
  j as DynamicParticle,
  L as Icon,
  Y as Loading1,
  F as Loading2,
  M as Progress,
  K as ScreenContainer,
  ee as ScrollTable,
  te as ScrollText,
  Ct as default
};
