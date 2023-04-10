import './style.css';
import { getCurrentScope as ce, onScopeDispose as de, unref as m, watch as oe, ref as L, onMounted as ie, onUnmounted as fe, nextTick as he, defineComponent as ye, getCurrentInstance as ge, reactive as J, computed as G, openBlock as f, createElementBlock as h, createElementVNode as _, normalizeStyle as B, Fragment as R, renderList as H, createCommentVNode as $, toDisplayString as pe, renderSlot as _e, createStaticVNode as me } from "vue";
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
function we(e, n) {
  const r = window.MutationObserver, o = new r(n);
  return o.observe(e, {
    attributes: !0,
    attributeFilter: ["style"],
    attributeOldValue: !0
  }), o;
}
var ee;
const le = typeof window < "u", ke = (e) => typeof e == "string", U = () => {
};
le && ((ee = window == null ? void 0 : window.navigator) != null && ee.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function V(e) {
  return typeof e == "function" ? e() : m(e);
}
function ve(e, n) {
  function r(...o) {
    return new Promise((c, a) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(c).catch(a);
    });
  }
  return r;
}
function xe(e, n = {}) {
  let r, o, c = U;
  const a = (g) => {
    clearTimeout(g), c(), c = U;
  };
  return (g) => {
    const w = V(e), s = V(n.maxWait);
    return r && a(r), w <= 0 || s !== void 0 && s <= 0 ? (o && (a(o), o = null), Promise.resolve(g())) : new Promise((l, y) => {
      c = n.rejectOnCancel ? y : l, s && !o && (o = setTimeout(() => {
        r && a(r), o = null, l(g());
      }, s)), r = setTimeout(() => {
        o && a(o), o = null, l(g());
      }, w);
    });
  };
}
function Oe(e) {
  return e;
}
function $e(e) {
  return ce() ? (de(e), !0) : !1;
}
function be(e, n = 200, r = {}) {
  return ve(xe(n, r), e);
}
function Ce(e) {
  var n;
  const r = V(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const Pe = le ? window : void 0;
function Ie(...e) {
  let n, r, o, c;
  if (ke(e[0]) || Array.isArray(e[0]) ? ([r, o, c] = e, n = Pe) : [n, r, o, c] = e, !n)
    return U;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const a = [], x = () => {
    a.forEach((l) => l()), a.length = 0;
  }, g = (l, y, k) => (l.addEventListener(y, k, c), () => l.removeEventListener(y, k, c)), w = oe(() => Ce(n), (l) => {
    x(), l && a.push(...r.flatMap((y) => o.map((k) => g(l, y, k))));
  }, { immediate: !0, flush: "post" }), s = () => {
    w(), x();
  };
  return $e(s), s;
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X = "__vueuse_ssr_handlers__";
K[X] = K[X] || {};
K[X];
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var Se = Object.defineProperty, ne = Object.getOwnPropertySymbols, Ee = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable, re = (e, n, r) => n in e ? Se(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Le = (e, n) => {
  for (var r in n || (n = {}))
    Ee.call(n, r) && re(e, r, n[r]);
  if (ne)
    for (var r of ne(n))
      Fe.call(n, r) && re(e, r, n[r]);
  return e;
};
const Ae = {
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
Le({
  linear: Oe
}, Ae);
const Te = (e, n, r, o) => {
  const c = L(0), a = L(0), x = L(0), g = L(0);
  let w, s = null, l = null;
  const y = (A = !0) => new Promise((z) => {
    he(() => {
      l = e.value, c.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, x.value = l ? l.getBoundingClientRect().width : 0, g.value = l ? l.getBoundingClientRect().height : 0, e.value ? (!c.value || !a.value) && console.warn("Component width or height is 0px") : console.warn("Failed to get dom node"), typeof n == "function" && A && n(), z(!0);
    });
  }), k = () => {
    s = we(l, w), Ie(window, "resize", w);
  }, Q = () => {
    s && (s.disconnect(), s.takeRecords(), s = null);
  }, W = async () => {
    await y(!1), w = be(y, 200), k(), typeof r == "function" && r();
  };
  return ie(() => {
    W();
  }), fe(() => {
    Q();
  }), {
    width: c,
    height: a,
    afterWidth: x,
    afterHeight: g,
    initWH: y
  };
}, Me = {
  width: "100%",
  height: "100%"
}, Ne = /* @__PURE__ */ me('<defs><radialGradient id="lineGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="1"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient><radialGradient id="haloGradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0"></stop><stop offset="100%" stop-color="#fff" stop-opacity="1"></stop></radialGradient></defs>', 1), Re = ["id", "cx", "cy"], De = ["values", "dur"], Qe = ["dur"], We = ["id"], ze = ["xlink:href"], Ge = ["xlink:href", "fill", "mask"], Be = ["fill", "x", "y"], He = ["href", "width", "height", "x", "y"], Ue = ["id", "d"], Ve = ["id"], Ke = ["r"], Xe = ["dur", "path"], Ye = ["xlink:href", "stroke-width", "stroke"], qe = ["xlink:href", "stroke-width", "stroke", "mask"], Je = ["from", "to", "dur"], Y = /* @__PURE__ */ ye({
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
    const n = e, r = L();
    let o;
    ie(() => {
      o = ge();
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
    }), a = J({
      points: [],
      paths: []
    }), x = (i) => {
      let { offsetX: d, offsetY: t } = i;
      const v = (d / s.value).toFixed(2), u = (t / l.value).toFixed(2);
      o == null || o.emit("map-click", v, u, i);
    }, g = () => {
      y(), k();
    }, w = () => {
      y(), k();
    }, { width: s, height: l } = Te(r, g, w), y = () => {
      let i = b(Z(n.points));
      a.points = i.map((d, t) => (console.log("icon", d.icon), {
        ...d,
        halo: D({}, c.halo, b(n.halo), d.halo),
        title: D({}, c.title, b(n.title), d.title),
        icon: D({}, c.icon, b(n.icon), d.icon),
        key: `${d.coordinate.toString()}${t}`
      })), console.log("points", a.points);
    }, k = () => {
      let i = b(Z(n.paths));
      a.paths = i.map((d, t) => {
        var N, O;
        let { source: v, route: u, target: E, line: T } = d, C = D({}, c.line, b(n.line), T), P = (N = a.points.find(({ name: p }) => p === v)) == null ? void 0 : N.coordinate, I = (O = a.points.find(({ name: p }) => p === E)) == null ? void 0 : O.coordinate, M = u ? [P, ...u, I] : [P, I], F = [];
        for (let p = 0; p < M.length - 1; p++) {
          let se = M[p], S = Q(se, M[p + 1], C.k, C.curvature);
          console.log("path", S);
          let ae = `M${S[0].toString()} Q${S[1].toString()} ${S[2].toString()}`, ue = `${S.toString()}`;
          F.push({ path: S, d: ae, key: ue });
        }
        return {
          ...d,
          line: C,
          routeList: F
        };
      }), console.log("state.paths", a.paths);
    }, Q = (i, d, t, v) => {
      console.log("start", i);
      let [u, E] = i, [T, C] = d;
      const [P, I] = [(u + T) / 2, (E + C) / 2];
      let F = j([u, E], [T, C]) / v, N = F / 2, [O, p] = [P, I];
      do
        O += N, p = W(t, [P, I], O)[1];
      while (j([P, I], [O, p]) < F);
      return [i, [O, p], d];
    };
    function W(i, [d, t], v) {
      const u = t - i * d + i * v;
      return [v, u];
    }
    let A = G(() => function(i) {
      return `M${i[0][0] * s.value},${i[0][1] * l.value} 
    Q${i[1][0] * s.value},${i[1][1] * l.value} 
    ${i[2][0] * s.value},${i[2][1] * l.value}`;
    }), z = G(() => function(i) {
      return `"M${i[0][0] * s.value},${i[0][1] * l.value} Q${i[1][0] * s.value},${i[1][1] * l.value} ${i[2][0] * s.value},${i[2][1] * l.value}"`;
    }), q = G(() => function(i) {
      return o ? o.proxy.$refs[i][0].getTotalLength() : 0;
    });
    return oe(() => n, (i) => {
      y(), k();
    }, {
      deep: !0,
      immediate: !0
    }), (i, d) => (f(), h("div", {
      ref_key: "flightChart",
      ref: r,
      class: "f-flight-chart"
    }, [
      _("div", {
        class: "f-flight-chart__wrap",
        style: B(`background-image: url(${n.bgUrl})`),
        onClick: x
      }, [
        (f(), h("svg", Me, [
          Ne,
          (f(!0), h(R, null, H(a.points, (t, v) => (f(), h("g", {
            key: t.key
          }, [
            _("defs", null, [
              t.halo.show ? (f(), h("circle", {
                key: 0,
                id: `halo${t.key}`,
                cx: t.coordinate[0] * m(s),
                cy: t.coordinate[1] * m(l)
              }, [
                _("animate", {
                  attributeName: "r",
                  values: `1;${t.halo.radius}`,
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, De),
                _("animate", {
                  attributeName: "opacity",
                  values: "1;0",
                  dur: `${t.halo.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Qe)
              ], 8, Re)) : $("", !0),
              _("mask", {
                id: `mask${t.key}`
              }, [
                _("use", {
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
            }, null, 8, Ge)) : $("", !0),
            t.title.show ? (f(), h("text", {
              key: 1,
              class: "point__title",
              style: B({ fontSize: `${t.title.fontSize}px` }),
              fill: t.title.color,
              x: t.coordinate[0] * m(s) + t.title.offest[0],
              y: t.coordinate[1] * m(l) + t.title.offest[1]
            }, pe(t.name), 13, Be)) : $("", !0),
            t.icon.show ? (f(), h("image", {
              key: 2,
              class: "point__icon",
              href: t.icon.url,
              width: t.icon.width,
              height: t.icon.height,
              x: t.coordinate[0] * m(s) - t.icon.width / 2,
              y: t.coordinate[1] * m(l) - t.icon.height / 2
            }, null, 8, He)) : $("", !0)
          ]))), 128)),
          (f(!0), h(R, null, H(a.paths, (t, v) => (f(), h(R, null, [
            (f(!0), h(R, null, H(t.routeList, (u, E) => (f(), h("g", null, [
              _("defs", null, [
                _("path", {
                  id: u.key,
                  ref_for: !0,
                  ref: u.key,
                  d: m(A)(u.path),
                  fill: "transparent"
                }, null, 8, Ue),
                _("mask", {
                  id: `mask${u.key}`
                }, [
                  _("circle", {
                    cx: "0",
                    cy: "0",
                    r: t.line.radius,
                    fill: "url(#lineGradient)"
                  }, [
                    _("animateMotion", {
                      dur: `${t.line.duration}ms`,
                      path: m(A)(u.path),
                      rotate: "auto",
                      repeatCount: "indefinite"
                    }, null, 8, Xe)
                  ], 8, Ke)
                ], 8, Ve)
              ]),
              t.line.show && t.line.slot ? (f(), h("g", {
                key: 0,
                class: "line__inner",
                style: B({ "offset-path": `path(${m(z)(u.path)})` })
              }, [
                _e(i.$slots, t.line.slot)
              ], 4)) : $("", !0),
              t.line.show ? (f(), h("use", {
                key: 1,
                "xlink:href": `#${u.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.orbitColor
              }, null, 8, Ye)) : $("", !0),
              t.line.show ? (f(), h("use", {
                key: 2,
                "xlink:href": `#${u.key}`,
                "stroke-width": t.line.width,
                stroke: t.line.color,
                mask: `url(#mask${u.key})`
              }, [
                _("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${m(q)(u.key)}`,
                  to: `${m(q)(u.key)}, 0`,
                  dur: `${t.line.duration}ms`,
                  repeatCount: "indefinite"
                }, null, 8, Je)
              ], 8, qe)) : $("", !0)
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
const je = {
  title: "FFlightChart 飞线图",
  category: "飞线图",
  status: "20%",
  install(e) {
    e.use(Y);
  }
};
export {
  Y as FlightChart,
  je as default
};
