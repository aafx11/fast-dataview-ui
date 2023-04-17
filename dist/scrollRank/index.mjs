import { defineComponent as $, computed as v, openBlock as i, createElementBlock as u, normalizeStyle as P, createElementVNode as c, renderSlot as F, toDisplayString as f, ref as z, reactive as C, onBeforeUnmount as I, watch as T, createVNode as S, TransitionGroup as M, withCtx as O, Fragment as b, renderList as W, unref as y, createCommentVNode as m, nextTick as G } from "vue";
const H = Object.assign, U = (e) => Array.isArray(e) && e.length, q = (e) => Array.isArray(e) && e || [], J = (e, t, o = "reverse") => e.sort(K(t, o)), K = (e, t = "reverse") => function(o, r) {
  return o[e] < r[e] ? t === "normal" ? -1 : 1 : o[e] > r[e] ? t === "normal" ? 1 : -1 : 0;
}, N = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  let o = new e.constructor();
  t.set(e, o);
  for (let r in e)
    e.hasOwnProperty(r) && (o[r] = N(e[r], t));
  return o;
}, Q = $({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: t }) {
    const o = ["#d1d5db", "#3b82f6", "white"];
    let r = v(() => U(e.color) ? H(o, e.color) : o);
    return {
      getProgressStyle: v(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), X = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, p] of t)
    o[r] = p;
  return o;
};
function Y(e, t, o, r, p, h) {
  return i(), u(
    "div",
    {
      class: "f-progress",
      style: P(e.getProgressStyle)
    },
    [
      c(
        "div",
        {
          class: "progress-inner",
          style: P({ width: `${e.percent}%` })
        },
        [
          F(e.$slots, "default", { percent: e.percent }, () => [
            c(
              "span",
              null,
              f(e.percent ? `${e.percent}%` : ""),
              1
              /* TEXT */
            )
          ])
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const _ = /* @__PURE__ */ X(Q, [["render", Y]]);
_.install = function(e) {
  e.component(_.name, _);
};
const Z = { class: "f-scroll-rank" }, j = { class: "f-scroll-rank__item-wrap" }, ee = { class: "f-scroll-rank__item-info" }, te = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, re = { class: "f-scroll-rank__item-name" }, ae = { class: "f-scroll-rank__item-info-right" }, ne = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, se = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, oe = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, le = { class: "f-scroll-rank__item-progress" }, L = /* @__PURE__ */ $({
  __name: "index",
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
      default: 300
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
    const t = e, o = z();
    let r = C({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const p = (a) => {
      let n = N(q(a)), s = [];
      t.order === "default" ? s = n : s = J(n, "value", t.order), typeof t.valueFormatter == "function" && (s = s.map((l, d) => {
        var g;
        return l.formattedValue = (g = t.valueFormatter) == null ? void 0 : g.call(null, {
          name: l.name,
          value: l.value,
          maxValue: w.value,
          index: d
        }), l;
      })), r.dataList = s;
    }, h = async (a, n, s) => {
      let l = s;
      n.map((d) => d._index_ = ++l), r.currList.length ? a === t.pageSize ? r.currList = [...n] : (r.currList.push(...n), r.currList.splice(0, a)) : r.currList.push(...n), G(() => {
        o.value && (o.value.style.maxHeight = `${o.value.getBoundingClientRect().height}px`, o.value.style.height = `${o.value.getBoundingClientRect().height}px`);
      });
    }, k = async () => {
      if (r.dataList.length) {
        r.isEmpty = !1;
        let a;
        t.togglePage >= t.pageSize ? a = t.pageSize : a = t.togglePage;
        let n, s;
        r.currPage === 1 ? (n = 0, s = t.pageSize) : (n = a * (r.currPage - 2) + t.pageSize, s = a * (r.currPage - 1) + t.pageSize);
        let l = r.dataList.slice(n, s);
        l.length ? r.currPage === 1 ? await h(t.pageSize, l, n) : await h(a, l, n) : (r.currPage = 1, k()), A();
      } else
        x(), r.isEmpty = !0, r.currPage = 1, r.currList = [];
    }, A = () => {
      r.intervalId === null && (r.intervalId = setInterval(() => {
        r.currPage += 1, k();
      }, t.toggleDur));
    }, x = () => {
      r.intervalId && (clearInterval(r.intervalId), r.intervalId = null);
    }, w = v(() => {
      var a, n;
      return t.maxValue ? t.maxValue : t.order === "normal" ? ((a = r.currList.at(-1)) == null ? void 0 : a.value) || 0 : ((n = r.currList[0]) == null ? void 0 : n.value) || 0;
    }), R = v(() => function(a) {
      let n, s = w.value;
      n = a / s;
      const l = (d, g) => Math.round(d * Math.pow(10, g)) / Math.pow(10, g);
      return typeof n == "number" ? l(n * 100, 1) : 0;
    }), V = (a) => {
      a.style.opacity = "0", a.style.gridTemplateRows = "0fr";
    }, B = (a, n) => {
      a.offsetWidth, a.style.opacity = "1", a.style.gridTemplateRows = "1fr", n();
    }, D = async (a) => {
      a.style.opacity = "1", a.style.margin = "0";
    }, E = async (a, n) => {
      a.style.opacity = "0", a.style.margin = "0", a.style.gridTemplateRows = "0fr", await new Promise((s) => {
        setTimeout(() => {
          a.remove(), s(!0);
        }, t.toggleDuration);
      }), n();
    };
    return I(() => {
      x();
    }), T(
      () => t.data,
      (a) => {
        p(a), k();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (a, n) => (i(), u("div", Z, [
      c(
        "div",
        {
          class: "f-scroll-rank__list",
          ref_key: "scrollRank",
          ref: o,
          style: P({ "--page-animate-dur": `${t.toggleDuration}ms` })
        },
        [
          S(M, {
            tag: "div",
            css: !1,
            onBeforeEnter: V,
            onEnter: B,
            onBeforeLeave: D,
            onLeave: E
          }, {
            default: O(() => [
              (i(!0), u(
                b,
                null,
                W(y(r).currList, (s, l) => (i(), u("div", {
                  class: "f-scroll-rank__item",
                  key: s
                }, [
                  c("div", j, [
                    c("div", ee, [
                      t.showRank ? (i(), u(
                        "span",
                        te,
                        f(`NO.${s._index_}`),
                        1
                        /* TEXT */
                      )) : m("v-if", !0),
                      c(
                        "span",
                        re,
                        f(s.name || ""),
                        1
                        /* TEXT */
                      ),
                      c("div", ae, [
                        t.showPercent ? (i(), u(
                          "span",
                          ne,
                          f(`${y(R)(s.value)}%`),
                          1
                          /* TEXT */
                        )) : m("v-if", !0),
                        t.showRatio && typeof t.valueFormatter != "function" ? (i(), u(
                          "span",
                          se,
                          f(`${s.value} / ${y(w)}`),
                          1
                          /* TEXT */
                        )) : m("v-if", !0),
                        typeof t.valueFormatter == "function" ? (i(), u(
                          "span",
                          oe,
                          f(`${s.formattedValue}`),
                          1
                          /* TEXT */
                        )) : m("v-if", !0)
                      ])
                    ]),
                    c("div", le, [
                      S(y(_), {
                        percent: y(R)(s.value),
                        color: t.color,
                        duration: t.progressDuration
                      }, null, 8, ["percent", "color", "duration"])
                    ])
                  ])
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ],
        4
        /* STYLE */
      )
    ]));
  }
});
L.install = function(e) {
  e.component("FScrollRank", L);
};
const ue = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(L);
  }
};
export {
  L as ScrollRank,
  ue as default
};
