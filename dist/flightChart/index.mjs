import './style.css';
import { getCurrentScope as de, onScopeDispose as fe, unref as v, watch as ie, ref as F, onMounted as oe, onUnmounted as he, nextTick as ye, defineComponent as ge, getCurrentInstance as ve, reactive as q, computed as M, openBlock as f, createElementBlock as h, createElementVNode as w, normalizeStyle as J, Fragment as R, renderList as H, createCommentVNode as $, toDisplayString as _e, renderSlot as we, createStaticVNode as me } from "vue";
const D = Object.assign, Z = (e) => Array.isArray(e) && e || [], b = (e, n = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (n.get(e))
    return n.get(e);
  let r = new e.constructor();
  n.set(e, r);
  for (let o in e)
    e.hasOwnProperty(o) && (r[o] = b(e[o], n));
  return r;
}, j = (e, n) => {
  const r = Math.abs(e[0] - n[0]), o = Math.abs(e[1] - n[1]);
  return Math.sqrt(r * r + o * o);
};
function ke(e, n) {
  const r = window.MutationObserver, o = new r(n);
  return o.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), o;
}
var ee;
const le = typeof window < "u", pe = (e) => typeof e == "string", U = () => {
};
le && ((ee = window == null ? void 0 : window.navigator) != null && ee.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function V(e) {
  return typeof e == "function" ? e() : v(e);
}
function xe(e, n) {
  function r(...o) {
    return new Promise((c, u) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(c).catch(u);
    });
  }
  return r;
}
function $e(e, n = {}) {
  let r, o, c = U;
  const u = (_) => {
    clearTimeout(_), c(), c = U;
  };
  return (_) => {
    const m = V(e), s = V(n.maxWait);
    return r && u(r), m <= 0 || s !== void 0 && s <= 0 ? (o && (u(o), o = null), Promise.resolve(_())) : new Promise((l, y) => {
      c = n.rejectOnCancel ? y : l, s && !o && (o = setTimeout(() => {
        r && u(r), o = null, l(_());
      }, s)), r = setTimeout(() => {
        o && u(o), o = null, l(_());
      }, m);
    });
  };
}
function Oe(e) {
  return e;
}
function be(e) {
  return de() ? (fe(e), !0) : !1;
}
function Ce(e, n = 200, r = {}) {
  return xe($e(n, r), e);
}
function Pe(e) {
  var n;
  const r = V(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const Ie = le ? window : void 0;
function Se(...e) {
  let n, r, o, c;
  if (pe(e[0]) || Array.isArray(e[0]) ? ([r, o, c] = e, n = Ie) : [n, r, o, c] = e, !n)
    return U;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const u = [], x = () => {
    u.forEach((l) => l()), u.length = 0;
  }, _ = (l, y, k) => (l.addEventListener(y, k, c), () => l.removeEventListener(y, k, c)), m = ie(() => Pe(n), (l) => {
    x(), l && u.push(...r.flatMap((y) => o.map((k) => _(l, y, k))));
  }, { immediate: !0, flush: "post" }), s = () => {
    m(), x();
  };
  return be(s), s;
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X = "__vueuse_ssr_handlers__";
K[X] = K[X] || {};
K[X];
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var Ee = Object.defineProperty, ne = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, re = (e, n, r) => n in e ? Ee(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Me = (e, n) => {
  for (var r in n || (n = {}))
    Ae.call(n, r) && re(e, r, n[r]);
  if (ne)
    for (var r of ne(n))
      Le.call(n, r) && re(e, r, n[r]);
  return e;
};
const Fe = {
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
Me({
  linear: Oe
}, Fe);
const Te = (e, n, r, o) => {
  const c = F(0), u = F(0), x = F(0), _ = F(0);
  let m, s = null, l = null;
  const y = (T = !0) => new Promise((G) => {
    ye(() => {
      l = e.value, c.value = e.value ? e.value.clientWidth : 0, u.value = e.value ? e.value.clientHeight : 0, x.value = l ? l.getBoundingClientRect().width : 0, _.value = l ? l.getBoundingClientRect().height : 0, e.value ? (!c.value || !u.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && T && n(), G(!0);
    });
  }), k = () => {
    s = ke(l, m), Se(window, "resize", m);
  }, W = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, z = async () => {
    await y(!1), m = Ce(y, 200), k(), typeof r == "function" && r();
  };
  return oe(() => {
    z();
  }), he(() => {
    W();
  }), {
    width: c,
    height: u,
    afterWidth: x,
    afterHeight: _,
    initWH: y
  };
}, Ne = {
  width: "100%",
  height: "100%"
}, Qe = /* @__PURE__ */ me('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), Re = ["id", "cx", "cy"], De = ["values", "dur"], We = ["dur"], ze = ["id"], Ge = ["xlink:href"], Be = ["xlink:href", "fill", "mask"], He = ["fill", "x", "y"], Ue = ["href", "width", "height", "x", "y"], Ve = ["id", "d"], Ke = ["id"], Xe = ["r"], Ye = ["dur", "path"], qe = ["xlink:href", "stroke-width", "stroke"], Je = ["xlink:href", "stroke-width", "stroke", "mask"], Ze = ["from", "to", "dur"], je = { key: 2 }, Y = /* @__PURE__ */ ge({
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
    const n = e, r = F();
    let o;
    oe(() => {
      o = ve();
    });
    const c = q({
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
    }), u = q({
      points: [],
      paths: []
    }), x = (i) => {
      let { offsetX: d, offsetY: t } = i;
      const p = (d / s.value).toFixed(2), a = (t / l.value).toFixed(2);
      o == null || o.emit("chart-click", p, a, i);
    }, _ = () => {
      y(), k();
    }, m = () => {
      y(), k();
    }, { width: s, height: l } = Te(r, _, m), y = () => {
      let i = b(Z(n.points));
      u.points = i.map((d, t) => ({
        ...d,
        halo: D({}, c.halo, b(n.halo), d.halo),
        title: D({}, c.title, b(n.title), d.title),
        icon: D({}, c.icon, b(n.icon), d.icon),
        key: `${d.coordinate.toString()}${t}`
      }));
    }, k = () => {
      let i = b(Z(n.paths));
      u.paths = i.map((d, t) => {
        var Q, O;
        let { source: p, route: a, target: E, line: N } = d, C = D({}, c.line, b(n.line), N), P = (Q = u.points.find(({ name: g }) => g === p)) == null ? void 0 : Q.coordinate, I = (O = u.points.find(({ name: g }) => g === E)) == null ? void 0 : O.coordinate, S = a ? [P, ...a, I] : [P, I];
        S = S.filter((g) => g !== void 0);
        let A = [];
        for (let g = 0; g < S.length - 1; g++) {
          let ae = S[g], L = W(ae, S[g + 1], C.k, C.curvature), ue = `M${L[0].toString()} Q${L[1].toString()} ${L[2].toString()}`, ce = `${L.toString()}`;
          A.push({ path: L, d: ue, key: ce });
        }
        return {
          ...d,
          line: C,
          routeList: A
        };
      });
    }, W = (i, d, t, p) => {
      let [a, E] = i, [N, C] = d;
      const [P, I] = [(a + N) / 2, (E + C) / 2];
      let A = j([a, E], [N, C]) / p, Q = A / 2, [O, g] = [P, I];
      do
        O += Q, g = z(t, [P, I], O)[1];
      while (j([P, I], [O, g]) < A);
      return [i, [O, g], d];
    };
    function z(i, [d, t], p) {
      const a = t - i * d + i * p;
      return [p, a];
    }
    let T = M(() => function(i) {
      return `M${i[0][0] * s.value},${i[0][1] * l.value} 
    Q${i[1][0] * s.value},${i[1][1] * l.value} 
    ${i[2][0] * s.value},${i[2][1] * l.value}`;
    }), G = M(() => function(i) {
      return `M${i[0][0] * s.value},${i[0][1] * l.value} 
    Q${i[1][0] * s.value},${i[1][1] * l.value} 
    ${i[2][0] * s.value},${i[2][1] * l.value}`;
    }), se = M(() => function(i) {
      return {
        x1: i[0][0] * s.value,
        y1: i[0][1] * l.value,
        x2: i[1][0] * s.value,
        y2: i[1][1] * l.value,
        x3: i[2][0] * s.value,
        y3: i[2][1] * l.value
      };
    });
    M(() => function(i) {
      return `"M${i[0][0] * s.value},${i[0][1] * l.value} Q${i[1][0] * s.value},${i[1][1] * l.value} ${i[2][0] * s.value},${i[2][1] * l.value}"`;
    });
    let B = M(() => function(i) {
      return o ? o.proxy.$refs[i][0].getTotalLength() : 0;
    });
    return ie(() => n, (i) => {
      y(), k();
    }, {
      deep: !0,
      immediate: !0
    }), (i, d) => (f(), h("div", {
      ref_key: "flightChart",
      ref: r,
      class: "f-flight-chart"
    }, [
      w("div", {
        class: "f-flight-chart__wrap",
        style: J(`background-image: url(${n.bgUrl})`),
        onClick: x
      }, [
        (f(), h("svg", Ne, [
          Qe,
          (f(!0), h(R, null, H(u.points, (t, p) => (f(), h("g", {
            key: t.key
          }, [
            w("defs", null, [
              t.halo.show ? (f(), h("circle", {
                key: 0,
                id: `halo${t.key}`,
                cx: t.coordinate[0] * v(s),
                cy: t.coordinate[1] * v(l)
              }, [
                w("animate", {
                  attributeName: "r",
                  values: `1;${t.halo.radius}`,
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, De),
                w("animate", {
                  attributeName: "opacity",
                  values: "1;0",
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, We)
              ], 8, Re)) : $("v-if", !0),
              w("mask", {
                id: `mask${t.key}`
              }, [
                w("use", {
                  "xlink:href": `#halo${t.key}`,
                  fill: "url(#haloGradient)"
                }, null, 8, Ge)
              ], 8, ze)
            ]),
            t.halo.show ? (f(), h("use", {
              key: 0,
              "xlink:href": `#halo${t.key}`,
              fill: t.halo.color,
              mask: `url(#mask${t.key})`
            }, null, 8, Be)) : $("v-if", !0),
            t.title.show ? (f(), h("text", {
              key: 1,
              class: "point__title",
              style: J({ fontSize: `${t.title.fontSize}px` }),
              fill: t.title.color,
              x: t.coordinate[0] * v(s) + t.title.offest[0],
              y: t.coordinate[1] * v(l) + t.title.offest[1]
            }, _e(t.name), 13, He)) : $("v-if", !0),
            t.icon.show ? (f(), h("image", {
              key: 2,
              class: "point__icon",
              href: t.icon.url,
              width: t.icon.width,
              height: t.icon.height,
              x: t.coordinate[0] * v(s) - t.icon.width / 2,
              y: t.coordinate[1] * v(l) - t.icon.height / 2
            }, null, 8, Ue)) : $("v-if", !0)
          ]))), 128)),
          (f(!0), h(R, null, H(u.paths, (t, p) => (f(), h(R, null, [
            (f(!0), h(R, null, H(t.routeList, (a, E) => (f(), h("g", null, [
              w("defs", null, [
                w("path", {
                  id: a.key,
                  ref_for: !0,
                  ref: a.key,
                  d: v(T)(a.path),
                  fill: "transparent",
                  style: { overflow: "hidden" }
                }, null, 8, Ve),
                t.line.show && !t.line.slot ? (f(), h("mask", {
                  key: 0,
                  id: `mask${a.key}`
                }, [
                  w("circle", {
                    cx: "0",
                    cy: "0",
                    r: t.line.radius,
                    fill: "url(#lineGradient)"
                  }, [
                    w("animateMotion", {
                      dur: `${t.line.duration}ms`,
                      path: v(T)(a.path),
                      rotate: "auto",
                      repeatCount: "indefinite"
                    }, null, 8, Ye)
                  ], 8, Xe)
                ], 8, Ke)) : $("v-if", !0)
              ]),
              t.line.show ? (f(), h("use", {
                key: 0,
                "xlink:href": `#${a.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.orbitColor
              }, null, 8, qe)) : $("v-if", !0),
              t.line.show && !t.line.slot ? (f(), h("use", {
                key: 1,
                "xlink:href": `#${a.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.color,
                mask: `url(#mask${a.key})`
              }, [
                w("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${v(B)(a.key)}`,
                  to: `${v(B)(a.key)}, 0`,
                  dur: `${t.line.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Ze)
              ], 8, Je)) : $("v-if", !0),
              t.line.show && t.line.slot ? (f(), h("g", je, [
                we(i.$slots, t.line.slot, {
                  path: v(G)(a.path),
                  pathArr: v(se)(a.path),
                  totalLength: v(B)(a.key),
                  line: t.line
                })
              ])) : $("v-if", !0)
            ]))), 256))
          ], 64))), 256))
        ]))
      ], 4)
    ], 512));
  }
});
Y.install = function(e) {
  e.component("FFlightChart", Y);
};
const tt = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(Y);
  }
};
export {
  Y as FlightChart,
  tt as default
};
