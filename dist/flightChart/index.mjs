import './style.css';
import { getCurrentScope as ce, onScopeDispose as de, unref as _, watch as oe, ref as F, onMounted as ie, onUnmounted as fe, nextTick as he, defineComponent as ye, getCurrentInstance as ge, reactive as q, computed as Q, openBlock as f, createElementBlock as h, createElementVNode as m, normalizeStyle as J, Fragment as R, renderList as H, createCommentVNode as O, toDisplayString as _e, renderSlot as ve, createStaticVNode as me } from "vue";
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
  for (let i in e)
    e.hasOwnProperty(i) && (r[i] = b(e[i], n));
  return r;
}, j = (e, n) => {
  const r = Math.abs(e[0] - n[0]), i = Math.abs(e[1] - n[1]);
  return Math.sqrt(r * r + i * i);
};
function we(e, n) {
  const r = window.MutationObserver, i = new r(n);
  return i.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), i;
}
var ee;
const le = typeof window < "u", pe = (e) => typeof e == "string", U = () => {
};
le && ((ee = window == null ? void 0 : window.navigator) != null && ee.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function V(e) {
  return typeof e == "function" ? e() : _(e);
}
function ke(e, n) {
  function r(...i) {
    return new Promise((c, u) => {
      Promise.resolve(e(() => n.apply(this, i), { fn: n, thisArg: this, args: i })).then(c).catch(u);
    });
  }
  return r;
}
function xe(e, n = {}) {
  let r, i, c = U;
  const u = (v) => {
    clearTimeout(v), c(), c = U;
  };
  return (v) => {
    const w = V(e), s = V(n.maxWait);
    return r && u(r), w <= 0 || s !== void 0 && s <= 0 ? (i && (u(i), i = null), Promise.resolve(v())) : new Promise((l, y) => {
      c = n.rejectOnCancel ? y : l, s && !i && (i = setTimeout(() => {
        r && u(r), i = null, l(v());
      }, s)), r = setTimeout(() => {
        i && u(i), i = null, l(v());
      }, w);
    });
  };
}
function $e(e) {
  return e;
}
function Oe(e) {
  return ce() ? (de(e), !0) : !1;
}
function be(e, n = 200, r = {}) {
  return ke(xe(n, r), e);
}
function Ce(e) {
  var n;
  const r = V(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const Pe = le ? window : void 0;
function Ie(...e) {
  let n, r, i, c;
  if (pe(e[0]) || Array.isArray(e[0]) ? ([r, i, c] = e, n = Pe) : [n, r, i, c] = e, !n)
    return U;
  Array.isArray(r) || (r = [r]), Array.isArray(i) || (i = [i]);
  const u = [], x = () => {
    u.forEach((l) => l()), u.length = 0;
  }, v = (l, y, p) => (l.addEventListener(y, p, c), () => l.removeEventListener(y, p, c)), w = oe(() => Ce(n), (l) => {
    x(), l && u.push(...r.flatMap((y) => i.map((p) => v(l, y, p))));
  }, { immediate: !0, flush: "post" }), s = () => {
    w(), x();
  };
  return Oe(s), s;
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X = "__vueuse_ssr_handlers__";
K[X] = K[X] || {};
K[X];
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var Se = Object.defineProperty, ne = Object.getOwnPropertySymbols, Ee = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, re = (e, n, r) => n in e ? Se(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Ae = (e, n) => {
  for (var r in n || (n = {}))
    Ee.call(n, r) && re(e, r, n[r]);
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
Ae({
  linear: $e
}, Fe);
const Me = (e, n, r, i) => {
  const c = F(0), u = F(0), x = F(0), v = F(0);
  let w, s = null, l = null;
  const y = (M = !0) => new Promise((G) => {
    he(() => {
      l = e.value, c.value = e.value ? e.value.clientWidth : 0, u.value = e.value ? e.value.clientHeight : 0, x.value = l ? l.getBoundingClientRect().width : 0, v.value = l ? l.getBoundingClientRect().height : 0, e.value ? (!c.value || !u.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && M && n(), G(!0);
    });
  }), p = () => {
    s = we(l, w), Ie(window, "resize", w);
  }, W = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, z = async () => {
    await y(!1), w = be(y, 200), p(), typeof r == "function" && r();
  };
  return ie(() => {
    z();
  }), fe(() => {
    W();
  }), {
    width: c,
    height: u,
    afterWidth: x,
    afterHeight: v,
    initWH: y
  };
}, Te = {
  width: "100%",
  height: "100%"
}, Ne = /* @__PURE__ */ me('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), Qe = ["id", "cx", "cy"], Re = ["values", "dur"], De = ["dur"], We = ["id"], ze = ["xlink:href"], Ge = ["xlink:href", "fill", "mask"], Be = ["fill", "x", "y"], He = ["href", "width", "height", "x", "y"], Ue = ["id", "d"], Ve = ["id"], Ke = ["r"], Xe = ["dur", "path"], Ye = ["xlink:href", "stroke-width", "stroke"], qe = ["xlink:href", "stroke-width", "stroke", "mask"], Je = ["from", "to", "dur"], Ze = { key: 2 }, Y = /* @__PURE__ */ ye({
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
  emits: ["chart-click"],
  setup(e) {
    const n = e, r = F();
    let i;
    ie(() => {
      i = ge();
    });
    const c = q({
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
    }), u = q({
      points: [],
      paths: []
    }), x = (o) => {
      let { offsetX: d, offsetY: t } = o;
      const k = (d / s.value).toFixed(2), a = (t / l.value).toFixed(2);
      i == null || i.emit("chart-click", k, a, o);
    }, v = () => {
      y(), p();
    }, w = () => {
      y(), p();
    }, { width: s, height: l } = Me(r, v, w), y = () => {
      let o = b(Z(n.points));
      u.points = o.map((d, t) => ({
        ...d,
        halo: D({}, c.halo, b(n.halo), d.halo),
        title: D({}, c.title, b(n.title), d.title),
        icon: D({}, c.icon, b(n.icon), d.icon),
        key: `${d.coordinate.toString()}${t}`
      }));
    }, p = () => {
      let o = b(Z(n.paths));
      u.paths = o.map((d, t) => {
        var N, $;
        let { source: k, route: a, target: E, line: T } = d, C = D({}, c.line, b(n.line), T), P = (N = u.points.find(({ name: g }) => g === k)) == null ? void 0 : N.coordinate, I = ($ = u.points.find(({ name: g }) => g === E)) == null ? void 0 : $.coordinate, S = a ? [P, ...a, I] : [P, I];
        S = S.filter((g) => g !== void 0);
        let L = [];
        for (let g = 0; g < S.length - 1; g++) {
          let se = S[g], A = W(se, S[g + 1], C.k, C.curvature), ae = `M${A[0].toString()} Q${A[1].toString()} ${A[2].toString()}`, ue = `${A.toString()}`;
          L.push({ path: A, d: ae, key: ue });
        }
        return {
          ...d,
          line: C,
          routeList: L
        };
      });
    }, W = (o, d, t, k) => {
      let [a, E] = o, [T, C] = d;
      const [P, I] = [(a + T) / 2, (E + C) / 2];
      let L = j([a, E], [T, C]) / k, N = L / 2, [$, g] = [P, I];
      do
        $ += N, g = z(t, [P, I], $)[1];
      while (j([P, I], [$, g]) < L);
      return [o, [$, g], d];
    };
    function z(o, [d, t], k) {
      const a = t - o * d + o * k;
      return [k, a];
    }
    let M = Q(() => function(o) {
      return `M${o[0][0] * s.value},${o[0][1] * l.value} 
    Q${o[1][0] * s.value},${o[1][1] * l.value} 
    ${o[2][0] * s.value},${o[2][1] * l.value}`;
    }), G = Q(() => function(o) {
      return `M${o[0][0] * s.value},${o[0][1] * l.value} 
    Q${o[1][0] * s.value},${o[1][1] * l.value} 
    ${o[2][0] * s.value},${o[2][1] * l.value}`;
    });
    Q(() => function(o) {
      return `"M${o[0][0] * s.value},${o[0][1] * l.value} Q${o[1][0] * s.value},${o[1][1] * l.value} ${o[2][0] * s.value},${o[2][1] * l.value}"`;
    });
    let B = Q(() => function(o) {
      return i ? i.proxy.$refs[o][0].getTotalLength() : 0;
    });
    return oe(() => n, (o) => {
      y(), p();
    }, {
      deep: !0,
      immediate: !0
    }), (o, d) => (f(), h("div", {
      ref_key: "flightChart",
      ref: r,
      class: "f-flight-chart"
    }, [
      m("div", {
        class: "f-flight-chart__wrap",
        style: J(`background-image: url(${n.bgUrl})`),
        onClick: x
      }, [
        (f(), h("svg", Te, [
          Ne,
          (f(!0), h(R, null, H(u.points, (t, k) => (f(), h("g", {
            key: t.key
          }, [
            m("defs", null, [
              t.halo.show ? (f(), h("circle", {
                key: 0,
                id: `halo${t.key}`,
                cx: t.coordinate[0] * _(s),
                cy: t.coordinate[1] * _(l)
              }, [
                m("animate", {
                  attributeName: "r",
                  values: `1;${t.halo.radius}`,
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Re),
                m("animate", {
                  attributeName: "opacity",
                  values: "1;0",
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, De)
              ], 8, Qe)) : O("", !0),
              m("mask", {
                id: `mask${t.key}`
              }, [
                m("use", {
                  "xlink:href": `#halo${t.key}`,
                  fill: "url(#haloGradient)"
                }, null, 8, ze)
              ], 8, We)
            ]),
            t.halo.show ? (f(), h("use", {
              key: 0,
              "xlink:href": `#halo${t.key}`,
              fill: t.halo.color,
              mask: `url(#mask${t.key})`
            }, null, 8, Ge)) : O("", !0),
            t.title.show ? (f(), h("text", {
              key: 1,
              class: "point__title",
              style: J({ fontSize: `${t.title.fontSize}px` }),
              fill: t.title.color,
              x: t.coordinate[0] * _(s) + t.title.offest[0],
              y: t.coordinate[1] * _(l) + t.title.offest[1]
            }, _e(t.name), 13, Be)) : O("", !0),
            t.icon.show ? (f(), h("image", {
              key: 2,
              class: "point__icon",
              href: t.icon.url,
              width: t.icon.width,
              height: t.icon.height,
              x: t.coordinate[0] * _(s) - t.icon.width / 2,
              y: t.coordinate[1] * _(l) - t.icon.height / 2
            }, null, 8, He)) : O("", !0)
          ]))), 128)),
          (f(!0), h(R, null, H(u.paths, (t, k) => (f(), h(R, null, [
            (f(!0), h(R, null, H(t.routeList, (a, E) => (f(), h("g", null, [
              m("defs", null, [
                m("path", {
                  id: a.key,
                  ref_for: !0,
                  ref: a.key,
                  d: _(M)(a.path),
                  fill: "transparent",
                  style: { overflow: "hidden" }
                }, null, 8, Ue),
                m("mask", {
                  id: `mask${a.key}`
                }, [
                  m("circle", {
                    cx: "0",
                    cy: "0",
                    r: t.line.radius,
                    fill: "url(#lineGradient)"
                  }, [
                    m("animateMotion", {
                      dur: `${t.line.duration}ms`,
                      path: _(M)(a.path),
                      rotate: "auto",
                      repeatCount: "indefinite"
                    }, null, 8, Xe)
                  ], 8, Ke)
                ], 8, Ve)
              ]),
              t.line.show ? (f(), h("use", {
                key: 0,
                "xlink:href": `#${a.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.orbitColor
              }, null, 8, Ye)) : O("", !0),
              t.line.show && !t.line.slot ? (f(), h("use", {
                key: 1,
                "xlink:href": `#${a.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.color,
                mask: `url(#mask${a.key})`
              }, [
                m("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${_(B)(a.key)}`,
                  to: `${_(B)(a.key)}, 0`,
                  dur: `${t.line.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Je)
              ], 8, qe)) : O("", !0),
              t.line.show && t.line.slot ? (f(), h("g", Ze, [
                ve(o.$slots, t.line.slot, {
                  path: _(G)(a.path),
                  totalLength: _(B)(a.key)
                })
              ])) : O("", !0)
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
const et = {
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
  et as default
};
