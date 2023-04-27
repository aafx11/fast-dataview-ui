import './style.css';
import { unref as v, getCurrentScope as he, onScopeDispose as ye, watch as oe, ref as N, onMounted as le, onUnmounted as ge, nextTick as ve, defineComponent as _e, getCurrentInstance as we, reactive as Y, computed as T, openBlock as f, createElementBlock as h, createElementVNode as m, normalizeStyle as q, Fragment as D, renderList as U, createCommentVNode as O, toDisplayString as me, renderSlot as ke, createStaticVNode as pe } from "vue";
const W = Object.assign, J = (e) => Array.isArray(e) && e || [], C = (e, i = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (i.get(e))
    return i.get(e);
  let n = new e.constructor();
  i.set(e, n);
  for (let l in e)
    e.hasOwnProperty(l) && (n[l] = C(e[l], i));
  return n;
}, Z = (e, i) => {
  const n = Math.abs(e[0] - i[0]), l = Math.abs(e[1] - i[1]);
  return Math.sqrt(n * n + l * l);
};
function xe(e, i) {
  const n = window.MutationObserver, l = new n(i);
  return l.observe(e, {
    attributes: !0,
    // 观察所有监听的节点属性值的变化
    attributeFilter: ["style"],
    // 监听的属性
    attributeOldValue: !0
    // 记录上一次被监听的节点的属性变化 
  }), l;
}
var j;
const se = typeof window < "u", $e = (e) => typeof e == "string", V = () => {
};
se && ((j = window == null ? void 0 : window.navigator) != null && j.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function z(e) {
  return typeof e == "function" ? e() : v(e);
}
function Oe(e, i) {
  function n(...l) {
    return new Promise((u, c) => {
      Promise.resolve(e(() => i.apply(this, l), { fn: i, thisArg: this, args: l })).then(u).catch(c);
    });
  }
  return n;
}
function be(e, i = {}) {
  let n, l, u = V;
  const c = (w) => {
    clearTimeout(w), u(), u = V;
  };
  return (w) => {
    const k = z(e), y = z(i.maxWait);
    return n && c(n), k <= 0 || y !== void 0 && y <= 0 ? (l && (c(l), l = null), Promise.resolve(w())) : new Promise((o, s) => {
      u = i.rejectOnCancel ? s : o, y && !l && (l = setTimeout(() => {
        n && c(n), l = null, o(w());
      }, y)), n = setTimeout(() => {
        l && c(l), l = null, o(w());
      }, k);
    });
  };
}
function Ce(e) {
  return e;
}
function Pe(e) {
  return he() ? (ye(e), !0) : !1;
}
function Ie(e, i = 200, n = {}) {
  return Oe(be(i, n), e);
}
function Se(e) {
  var i;
  const n = z(e);
  return (i = n == null ? void 0 : n.$el) != null ? i : n;
}
const Ee = se ? window : void 0;
function Ae(...e) {
  let i, n, l, u;
  if ($e(e[0]) || Array.isArray(e[0]) ? ([n, l, u] = e, i = Ee) : [i, n, l, u] = e, !i)
    return V;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const c = [], _ = () => {
    c.forEach((o) => o()), c.length = 0;
  }, w = (o, s, $, p) => (o.addEventListener(s, $, p), () => o.removeEventListener(s, $, p)), k = oe(() => [Se(i), z(u)], ([o, s]) => {
    _(), o && c.push(...n.flatMap(($) => l.map((p) => w(o, $, p, s))));
  }, { immediate: !0, flush: "post" }), y = () => {
    k(), _();
  };
  return Pe(y), y;
}
const ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, te = "__vueuse_ssr_handlers__";
ee[te] = ee[te] || {};
var ne;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ne || (ne = {}));
var Le = Object.defineProperty, re = Object.getOwnPropertySymbols, Me = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable, ie = (e, i, n) => i in e ? Le(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n, Te = (e, i) => {
  for (var n in i || (i = {}))
    Me.call(i, n) && ie(e, n, i[n]);
  if (re)
    for (var n of re(i))
      Fe.call(i, n) && ie(e, n, i[n]);
  return e;
};
const Ne = {
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
Te({
  linear: Ce
}, Ne);
const Qe = (e, i, n, l) => {
  const u = N(0), c = N(0), _ = N(0), w = N(0);
  let k, y = null, o = null;
  const s = (G = !0) => new Promise((B) => {
    ve(() => {
      o = e.value, u.value = e.value ? e.value.clientWidth : 0, c.value = e.value ? e.value.clientHeight : 0, _.value = o ? o.getBoundingClientRect().width : 0, w.value = o ? o.getBoundingClientRect().height : 0, e.value ? (!u.value || !c.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof i == "function" && G && i(), B(!0);
    });
  }), $ = () => {
    y = xe(o, k), Ae(window, "resize", k);
  }, p = () => {
    y && (y.disconnect(), y.takeRecords(), y = null);
  }, A = async () => {
    await s(!1), k = Ie(s, 300), $(), typeof n == "function" && n();
  };
  return le(() => {
    A();
  }), ge(() => {
    p();
  }), {
    width: u,
    height: c,
    afterWidth: _,
    afterHeight: w,
    initWH: s
  };
}, Re = {
  width: "100%",
  height: "100%"
}, De = /* @__PURE__ */ pe('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), We = ["id", "cx", "cy"], ze = ["values", "dur"], Ge = ["dur"], Be = ["id"], He = ["xlink:href"], Ue = ["xlink:href", "fill", "mask"], Ve = ["fill", "x", "y"], Ke = ["href", "width", "height", "x", "y"], Xe = ["id", "d"], Ye = ["id"], qe = ["r"], Je = ["dur", "path"], Ze = ["xlink:href", "stroke-width", "stroke"], je = ["xlink:href", "stroke-width", "stroke", "mask"], et = ["from", "to", "dur"], tt = { key: 2 }, K = /* @__PURE__ */ _e({
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
  setup(e, { expose: i }) {
    const n = e, l = N();
    let u;
    le(() => {
      u = we();
    });
    const c = Y({
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
    }), _ = Y({
      points: [],
      paths: []
    }), w = (r) => {
      let { offsetX: d, offsetY: t } = r;
      const x = (d / o.value).toFixed(2), a = (t / s.value).toFixed(2);
      u == null || u.emit("chart-click", x, a, r);
    }, k = () => {
      p(), A();
    }, y = () => {
      p(), A();
    }, { width: o, height: s, initWH: $ } = Qe(l, k, y);
    i({
      resize: $
    });
    const p = () => {
      let r = C(J(n.points));
      _.points = r.map((d, t) => ({
        ...d,
        halo: W({}, c.halo, C(n.halo), d.halo),
        title: W({}, c.title, C(n.title), d.title),
        icon: W({}, c.icon, C(n.icon), d.icon),
        key: `${d.coordinate.toString()}${t}`
      }));
    }, A = () => {
      let r = C(J(n.paths));
      _.paths = r.map((d, t) => {
        var R, b;
        let { source: x, route: a, target: L, line: Q } = d, P = W({}, c.line, C(n.line), Q), I = (R = _.points.find(({ name: g }) => g === x)) == null ? void 0 : R.coordinate, S = (b = _.points.find(({ name: g }) => g === L)) == null ? void 0 : b.coordinate, E = a ? [I, ...a, S] : [I, S];
        E = E.filter((g) => g !== void 0);
        let M = [];
        for (let g = 0; g < E.length - 1; g++) {
          let ce = E[g], F = G(ce, E[g + 1], P.k, P.curvature), de = `M${F[0].toString()} Q${F[1].toString()} ${F[2].toString()}`, fe = `${F.toString()}`;
          M.push({ path: F, d: de, key: fe });
        }
        return {
          ...d,
          line: P,
          routeList: M
        };
      });
    }, G = (r, d, t, x) => {
      let [a, L] = r, [Q, P] = d;
      const [I, S] = [(a + Q) / 2, (L + P) / 2];
      let M = Z([a, L], [Q, P]) / x, R = M / 2, [b, g] = [I, S];
      do
        b += R, g = B(t, [I, S], b)[1];
      while (Z([I, S], [b, g]) < M);
      return [r, [b, g], d];
    };
    function B(r, [d, t], x) {
      const a = t - r * d + r * x;
      return [x, a];
    }
    let X = T(() => function(r) {
      return `M${r[0][0] * o.value},${r[0][1] * s.value} 
    Q${r[1][0] * o.value},${r[1][1] * s.value} 
    ${r[2][0] * o.value},${r[2][1] * s.value}`;
    }), ae = T(() => function(r) {
      return `M${r[0][0] * o.value},${r[0][1] * s.value} 
    Q${r[1][0] * o.value},${r[1][1] * s.value} 
    ${r[2][0] * o.value},${r[2][1] * s.value}`;
    }), ue = T(() => function(r) {
      return {
        x1: r[0][0] * o.value,
        y1: r[0][1] * s.value,
        x2: r[1][0] * o.value,
        y2: r[1][1] * s.value,
        x3: r[2][0] * o.value,
        y3: r[2][1] * s.value
      };
    });
    T(() => function(r) {
      return `"M${r[0][0] * o.value},${r[0][1] * s.value} Q${r[1][0] * o.value},${r[1][1] * s.value} ${r[2][0] * o.value},${r[2][1] * s.value}"`;
    });
    let H = T(() => function(r) {
      return u ? u.proxy.$refs[r][0].getTotalLength() : 0;
    });
    return oe(() => n, (r) => {
      p(), A();
    }, {
      deep: !0,
      immediate: !0
    }), (r, d) => (f(), h(
      "div",
      {
        ref_key: "flightChart",
        ref: l,
        class: "f-flight-chart"
      },
      [
        m(
          "div",
          {
            class: "f-flight-chart__wrap",
            style: q(`background-image: url(${n.bgUrl})`),
            onClick: w
          },
          [
            (f(), h("svg", Re, [
              De,
              (f(!0), h(
                D,
                null,
                U(_.points, (t, x) => (f(), h("g", {
                  key: t.key
                }, [
                  m("defs", null, [
                    t.halo.show ? (f(), h("circle", {
                      key: 0,
                      id: `halo${t.key}`,
                      cx: t.coordinate[0] * v(o),
                      cy: t.coordinate[1] * v(s)
                    }, [
                      m("animate", {
                        attributeName: "r",
                        values: `1;${t.halo.radius}`,
                        dur: `${t.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, ze),
                      m("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: `${t.halo.duration}ms`,
                        repeatCount: "indefinite"
                      }, null, 8, Ge)
                    ], 8, We)) : O("v-if", !0),
                    m("mask", {
                      id: `mask${t.key}`
                    }, [
                      m("use", {
                        "xlink:href": `#halo${t.key}`,
                        fill: "url(#haloGradient)"
                      }, null, 8, He)
                    ], 8, Be)
                  ]),
                  t.halo.show ? (f(), h("use", {
                    key: 0,
                    "xlink:href": `#halo${t.key}`,
                    fill: t.halo.color,
                    mask: `url(#mask${t.key})`
                  }, null, 8, Ue)) : O("v-if", !0),
                  t.title.show ? (f(), h("text", {
                    key: 1,
                    class: "point__title",
                    style: q({ fontSize: `${t.title.fontSize}px` }),
                    fill: t.title.color,
                    x: t.coordinate[0] * v(o) + t.title.offest[0],
                    y: t.coordinate[1] * v(s) + t.title.offest[1]
                  }, me(t.name), 13, Ve)) : O("v-if", !0),
                  t.icon.show ? (f(), h("image", {
                    key: 2,
                    class: "point__icon",
                    href: t.icon.url,
                    width: t.icon.width,
                    height: t.icon.height,
                    x: t.coordinate[0] * v(o) - t.icon.width / 2,
                    y: t.coordinate[1] * v(s) - t.icon.height / 2
                  }, null, 8, Ke)) : O("v-if", !0)
                ]))),
                128
                /* KEYED_FRAGMENT */
              )),
              (f(!0), h(
                D,
                null,
                U(_.paths, (t, x) => (f(), h(
                  D,
                  null,
                  [
                    (f(!0), h(
                      D,
                      null,
                      U(t.routeList, (a, L) => (f(), h("g", null, [
                        m("defs", null, [
                          m("path", {
                            id: a.key,
                            ref_for: !0,
                            ref: a.key,
                            d: v(X)(a.path),
                            fill: "transparent",
                            style: { overflow: "hidden" }
                          }, null, 8, Xe),
                          t.line.show && !t.line.slot ? (f(), h("mask", {
                            key: 0,
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
                                path: v(X)(a.path),
                                rotate: "auto",
                                repeatCount: "indefinite"
                              }, null, 8, Je)
                            ], 8, qe)
                          ], 8, Ye)) : O("v-if", !0)
                        ]),
                        t.line.show ? (f(), h("use", {
                          key: 0,
                          "xlink:href": `#${a.key}`,
                          "stroke-width": t.line.width,
                          stroke: t.line.orbitColor
                        }, null, 8, Ze)) : O("v-if", !0),
                        t.line.show && !t.line.slot ? (f(), h("use", {
                          key: 1,
                          "xlink:href": `#${a.key}`,
                          "stroke-width": t.line.width,
                          stroke: t.line.color,
                          mask: `url(#mask${a.key})`
                        }, [
                          m("animate", {
                            attributeName: "stroke-dasharray",
                            from: `0, ${v(H)(a.key)}`,
                            to: `${v(H)(a.key)}, 0`,
                            dur: `${t.line.duration}ms`,
                            repeatCount: "indefinite"
                          }, null, 8, et)
                        ], 8, je)) : O("v-if", !0),
                        t.line.show && t.line.slot ? (f(), h("g", tt, [
                          ke(r.$slots, t.line.slot, {
                            path: v(ae)(a.path),
                            pathArr: v(ue)(a.path),
                            totalLength: v(H)(a.key),
                            line: t.line
                          })
                        ])) : O("v-if", !0)
                      ]))),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]))
          ],
          4
          /* STYLE */
        )
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
K.install = function(e) {
  e.component("FFlightChart", K);
};
const rt = {
  title: "flightChart 飞线图",
  name: "flightChart",
  category: "图表",
  status: "100%",
  install(e) {
    e.use(K);
  }
};
export {
  K as FlightChart,
  rt as default
};
