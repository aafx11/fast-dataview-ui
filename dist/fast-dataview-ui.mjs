import './style.css';
import { defineComponent as _, computed as k, createVNode as w, renderSlot as Y, getCurrentScope as U, onScopeDispose as j, unref as V, watch as q, ref as f, onMounted as A, onUnmounted as G, nextTick as K, reactive as J, provide as E, openBlock as T, createElementBlock as z, createElementVNode as F, inject as D } from "vue";
const Z = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, y = /* @__PURE__ */ _({
  name: "FIcon",
  props: Z,
  setup(t, {
    slots: n
  }) {
    return k(() => !t.size && !t.color ? {} : {
      ...t.size ? {
        "font-size": t.size + "px"
      } : {},
      ...t.color ? {
        color: t.color
      } : {}
    }), () => w("div", {
      class: "f-icon",
      style: {
        border: "1px solid black"
      }
    }, [Y(n, "default")]);
  }
});
y.install = function(t) {
  t.component(y.name, y);
};
const ee = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(t) {
    t.use(y);
  }
};
function te(t, n) {
  const e = new MutationObserver(n);
  return e.observe(t, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), e;
}
var W;
const L = typeof window < "u", ne = (t) => typeof t == "string", I = () => {
};
L && ((W = window == null ? void 0 : window.navigator) != null && W.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function x(t) {
  return typeof t == "function" ? t() : V(t);
}
function ie(t, n) {
  function e(...i) {
    return new Promise((s, o) => {
      Promise.resolve(t(() => n.apply(this, i), { fn: n, thisArg: this, args: i })).then(s).catch(o);
    });
  }
  return e;
}
function se(t, n = {}) {
  let e, i, s = I;
  const o = (a) => {
    clearTimeout(a), s(), s = I;
  };
  return (a) => {
    const r = x(t), c = x(n.maxWait);
    return e && o(e), r <= 0 || c !== void 0 && c <= 0 ? (i && (o(i), i = null), Promise.resolve(a())) : new Promise((u, h) => {
      s = n.rejectOnCancel ? h : u, c && !i && (i = setTimeout(() => {
        e && o(e), i = null, u(a());
      }, c)), e = setTimeout(() => {
        i && o(i), i = null, u(a());
      }, r);
    });
  };
}
function ae(t) {
  return t;
}
function re(t) {
  return U() ? (j(t), !0) : !1;
}
function oe(t, n = 200, e = {}) {
  return ie(se(n, e), t);
}
function le(t) {
  var n;
  const e = x(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const ce = L ? window : void 0;
function ue(...t) {
  let n, e, i, s;
  if (ne(t[0]) || Array.isArray(t[0]) ? ([e, i, s] = t, n = ce) : [n, e, i, s] = t, !n)
    return I;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], l = () => {
    o.forEach((u) => u()), o.length = 0;
  }, a = (u, h, d) => (u.addEventListener(h, d, s), () => u.removeEventListener(h, d, s)), r = q(() => le(n), (u) => {
    l(), u && o.push(...e.flatMap((h) => i.map((d) => a(u, h, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    r(), l();
  };
  return re(c), c;
}
const O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, P = "__vueuse_ssr_handlers__";
O[P] = O[P] || {};
O[P];
var $;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})($ || ($ = {}));
var he = Object.defineProperty, H = Object.getOwnPropertySymbols, de = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable, B = (t, n, e) => n in t ? he(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, ge = (t, n) => {
  for (var e in n || (n = {}))
    de.call(n, e) && B(t, e, n[e]);
  if (H)
    for (var e of H(n))
      fe.call(n, e) && B(t, e, n[e]);
  return t;
};
const pe = {
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
ge({
  linear: ae
}, pe);
const M = (t, n, e) => {
  const i = f(0), s = f(0), o = f(0), l = f(0);
  let a, r = null, c = null;
  const u = (v = !0) => new Promise((p) => {
    K(() => {
      c = t.value, i.value = t.value ? t.value.clientWidth : 0, s.value = t.value ? t.value.clientHeight : 0, o.value = c ? c.getBoundingClientRect().width : 0, l.value = c ? c.getBoundingClientRect().height : 0, t.value ? (!i.value || !s.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && v && n(), p(!0);
    });
  }), h = () => {
    r = te(c, a), ue(window, "resize", a);
  }, d = () => {
    r && (r.disconnect(), r.takeRecords(), r = null);
  }, g = async () => {
    await u(!1), a = oe(u, 200), h(), typeof e == "function" && e();
  };
  return A(() => {
    g();
  }), G(() => {
    d();
  }), {
    width: i,
    height: s,
    afterWidth: o,
    afterHeight: l,
    initWH: u
  };
}, b = /* @__PURE__ */ _({
  name: "FBorderBox1",
  setup(t, {
    slots: n
  }) {
    const e = f(null), {
      width: i,
      height: s,
      initWH: o
    } = M(e);
    return A(() => {
      console.log("边框加载", e.value);
    }), {
      width: i,
      height: s,
      initWH: o,
      borderBox1: e
    };
  },
  render() {
    const {
      $slots: t,
      width: n,
      height: e
    } = this;
    return console.log("边框宽高", n, "/", e), w("div", {
      ref: "borderBox1",
      class: "f-border-box-1"
    }, [w("svg", {
      class: "f-svg-container",
      width: n,
      height: e
    }, null), w("div", null, [Y(t, "default")])]);
  }
});
b.install = function(t) {
  t.component(b.name, b);
};
const ve = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(t) {
    t.use(b);
  }
}, me = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => {
  } }
}, we = { class: "f-screen-container" }, C = /* @__PURE__ */ _({
  name: "index",
  props: me,
  setup(t) {
    const n = t, e = f(null), i = J({
      width: 0,
      height: 0,
      screenWidth: 0,
      screenHeight: 0,
      scaleX: 1,
      scaleY: 1,
      isReady: !1
    });
    let s = f(1), o = f(1);
    E("scaleX", s), E("scaleY", o);
    const l = () => {
      n.width && n.height ? (i.width = n.width, i.height = n.height) : (i.width = e.value.clientWidth, i.height = e.value.clientHeight);
      const { width: h, height: d } = window.screen;
      i.screenWidth = h, i.screenHeight = d;
    }, a = () => {
      i.width && i.height ? (e.value.style.width = `${i.width}px`, e.value.style.height = `${i.height}px`) : (e.value.style.width = `${i.screenWidth}px`, e.value.style.height = `${i.screenHeight}px`);
    }, r = () => {
      const h = document.body.clientWidth, d = document.body.clientHeight, g = i.width || i.screenWidth, v = i.height || i.screenHeight, p = h / +g, m = d / +v;
      s.value = p, o.value = m, e.value.style.transform = `scale(${p}, ${m})`;
    };
    return M(e, () => {
      l(), a(), r();
    }, () => {
      a(), r(), n.onAfterResize(), i.isReady = !0;
    }), (h, d) => (T(), z("div", we, [
      F("div", {
        class: "f-screen-inner",
        ref_key: "screenContainer",
        ref: e
      }, [
        Y(h.$slots, "default")
      ], 512)
    ]));
  }
});
C.install = function(t) {
  t.component("FScreenContainer", C);
};
const ye = {
  title: "container 容器",
  category: "容器",
  status: "20%",
  install(t) {
    t.use(C);
  }
}, be = {
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  radius: { type: Number, default: 1.2 },
  strength: { type: Number, default: 2 },
  src: { type: String }
}, _e = 30, Ie = 1 / _e;
class R {
  constructor(n, e, i, s, o, l, a) {
    this.x = Math.random() * n >> 0, this.y = Math.random() * e >> 0, this.targetX = i, this.targetY = s, this.time = o, this.radius = l, this.colors = a, this.opacity = 0;
  }
  draw(n) {
    n.fillStyle = `${this.colors}`, n.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), n.fill();
  }
  update(n, e, i, s) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, i && s) {
      let o = i - this.x, l = s - this.y, a = Math.sqrt(o ** 2 + l ** 2), r = n / a;
      r = r > 7 ? 7 : r;
      let c = Math.atan2(l, o), u = Math.cos(c), h = Math.sin(c), d = u * r * -e, g = h * r * -e;
      this.velocityX += d, this.velocityY += g;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += Ie);
  }
  change(n, e, i) {
    this.targetX = n, this.targetY = e, this.colors = i;
  }
}
const N = 30;
class xe {
  constructor(n, e, i) {
    this.radius = e, this.strength = i, this.canvasEle = n, this.ctx = n.getContext("2d"), this.width = n.width, this.height = n.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  changeImg(n) {
    if (this.particleArr.length) {
      let e = n.particleData, i = e.length, s = this.particleArr, o = s.length;
      for (let a = 0; a < i; a++) {
        const { targetX: r, targetY: c, colors: u } = e[a];
        s[a] ? s[a].change(r, c, u) : s[a] = new R(this.width, this.height, r, c, N, this.radius, u);
      }
      i < o && (this.particleArr = s.splice(0, i)), s = this.particleArr;
      let l = s.length;
      for (; l; ) {
        let a = ~~(Math.random() * l--), r = s[a], { targetX: c, targetY: u, colors: h } = r;
        r.targetX = s[l].targetX, r.targetY = s[l].targetY, r.colors = s[l].colors, s[l].targetX = c, s[l].targetY = u, s[l].colors = h;
      }
    } else
      this.particleArr = n.particleData.map((e) => new R(this.width, this.height, e.targetX, e.targetY, N, this.radius, e.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((n) => {
      n.update(30, this.strength, this.mouseX, this.mouseY), n.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const Oe = 30;
class S {
  constructor(n, e, i, s) {
    this.src = n, this.width = e, this.height = i, this.particleData = [], this.radius = s;
  }
  createParticleData(n = this.src) {
    return new Promise((e, i) => {
      let s = new Image();
      s.crossOrigin = "", s.src = decodeURI(new URL(n, import.meta.url).href), s.onload = () => {
        const o = document.createElement("canvas"), l = o.getContext("2d"), a = this.width, r = this.height;
        o.width = a, o.height = r, l == null || l.drawImage(s, 0, 0, a, r);
        const c = l == null ? void 0 : l.getImageData(0, 0, a, r).data;
        l == null || l.clearRect(0, 0, this.width, this.height);
        for (let u = 0; u < r; u += 5)
          for (let h = 0; h < a; h += 5) {
            const d = (h + u * a) * 4, g = c[d + 3];
            if (g == 0)
              continue;
            const v = c[d], p = c[d + 1], m = c[d + 2];
            if (v + p + m + g) {
              const Q = new R(this.width, this.height, h, u, Oe, this.radius, `rgba(${v},${p},${m},${g})`);
              this.particleData.push(Q);
            }
          }
        e(this.particleData);
      }, s.onerror = () => {
        i("图片转化成粒子失败");
      };
    });
  }
}
const Pe = ["width", "height"], X = /* @__PURE__ */ _({
  name: "index",
  props: be,
  setup(t, { expose: n }) {
    const e = t;
    let i = D("scaleX", f(1)), s = D("scaleY", f(1));
    const o = f(null), l = f(null);
    let a = f(), r = f();
    const c = async (h) => {
      r.value = new S(h, e.width, e.height, e.radius), await r.value.createParticleData(), a.value.changeImg(r.value);
    }, u = async () => {
      r.value = new S(e.src, e.width, e.height, e.radius), await r.value.createParticleData(), o.value && (l.value = o.value.getContext("2d"), a.value = new xe(o.value, e.radius, e.strength), o.value.addEventListener("mousemove", (h) => {
        const { left: d, top: g } = o.value.getBoundingClientRect(), { clientX: v, clientY: p } = h;
        a.value.mouseX = (v - d) * (1 / i.value), a.value.mouseY = (p - g) * (1 / s.value);
      }), a.value.drawCanvas(), a.value.changeImg(r.value));
    };
    return A(() => {
      u();
    }), n({
      toggleImg: c
    }), (h, d) => (T(), z("div", null, [
      F("canvas", {
        ref_key: "canvasRef",
        ref: o,
        width: e.width,
        height: e.height
      }, null, 8, Pe)
    ]));
  }
});
X.install = function(t) {
  t.component("FDynamicParticle", X);
};
const Ce = {
  title: "particle 粒子",
  category: "粒子",
  status: "20%",
  install(t) {
    t.use(X);
  }
}, Re = [
  ee,
  ve,
  ye,
  Ce
], Ae = {
  version: "1.0.12",
  install(t) {
    Re.forEach((n) => t.use(n));
  }
};
export {
  b as BorderBox1,
  X as DynamicParticle,
  y as Icon,
  C as ScreenContainer,
  Ae as default
};
