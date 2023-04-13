import { defineComponent as x, computed as k, openBlock as i, createElementBlock as u, normalizeStyle as w, createElementVNode as c, renderSlot as F, toDisplayString as p, reactive as z, watch as I, createVNode as S, TransitionGroup as B, withCtx as C, Fragment as T, renderList as M, unref as m, createCommentVNode as _ } from "vue";
const O = Object.assign, b = (e) => Array.isArray(e) && e.length, W = (e) => Array.isArray(e) && e || [], G = (e, r, t = "reverse") => e.sort(q(r, t)), q = (e, r = "reverse") => function(t, o) {
  return t[e] < o[e] ? r === "normal" ? -1 : 1 : t[e] > o[e] ? r === "normal" ? 1 : -1 : 0;
}, $ = (e, r = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (r.get(e))
    return r.get(e);
  let t = new e.constructor();
  r.set(e, t);
  for (let o in e)
    e.hasOwnProperty(o) && (t[o] = $(e[o], r));
  return t;
}, H = x({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: r }) {
    const t = ["#d1d5db", "#3b82f6", "white"];
    let o = k(() => b(e.color) ? O(t, e.color) : t);
    return {
      getProgressStyle: k(() => ({
        "--bgc": o.value[0],
        "--progress-color": o.value[1],
        "--progress-text-color": o.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), J = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, f] of r)
    t[o] = f;
  return t;
};
function K(e, r, t, o, f, y) {
  return i(), u(
    "div",
    {
      class: "f-progress",
      style: w(e.getProgressStyle)
    },
    [
      c(
        "div",
        {
          class: "progress-inner",
          style: w({ width: `${e.percent}%` })
        },
        [
          F(e.$slots, "default", { percent: e.percent }, () => [
            c(
              "span",
              null,
              p(e.percent ? `${e.percent}%` : ""),
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
const v = /* @__PURE__ */ J(H, [["render", K]]);
v.install = function(e) {
  e.component(v.name, v);
};
const Q = { class: "f-scroll-rank" }, U = { class: "f-scroll-rank__item-wrap" }, X = { class: "f-scroll-rank__item-info" }, Y = {
  key: 0,
  class: "f-scroll-rank__item-rank"
}, Z = { class: "f-scroll-rank__item-name" }, j = { class: "f-scroll-rank__item-info-right" }, ee = {
  key: 0,
  class: "f-scroll-rank__item-percent"
}, te = {
  key: 1,
  class: "f-scroll-rank__item-ratio"
}, re = {
  key: 2,
  class: "f-scroll-rank__item-format"
}, ae = { class: "f-scroll-rank__item-progress" }, P = /* @__PURE__ */ x({
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
    const r = e;
    let t = z({
      dataList: [],
      currList: [],
      currPage: 1,
      isEmpty: !1,
      intervalId: null
    });
    const o = (a) => {
      let n = $(W(a)), s = [];
      r.order === "default" ? s = n : s = G(n, "value", r.order), typeof r.valueFormatter == "function" && (s = s.map((l, d) => {
        var g;
        return l.formattedValue = (g = r.valueFormatter) == null ? void 0 : g.call(null, {
          name: l.name,
          value: l.value,
          maxValue: h.value,
          index: d
        }), l;
      })), t.dataList = s;
    }, f = async (a, n, s) => {
      let l = s;
      n.map((d) => d._index_ = ++l), t.currList.length ? a === r.pageSize ? t.currList = [...n] : (t.currList.push(...n), t.currList.splice(0, a)) : t.currList.push(...n);
    }, y = async () => {
      if (t.dataList.length) {
        t.isEmpty = !1;
        let a;
        r.togglePage >= r.pageSize ? a = r.pageSize : a = r.togglePage;
        let n, s;
        t.currPage === 1 ? (n = 0, s = r.pageSize) : (n = a * (t.currPage - 2) + r.pageSize, s = a * (t.currPage - 1) + r.pageSize);
        let l = t.dataList.slice(n, s);
        l.length ? t.currPage === 1 ? await f(r.pageSize, l, n) : await f(a, l, n) : (t.currPage = 1, y()), N();
      } else
        R(), t.isEmpty = !0, t.currPage = 1, t.currList = [];
    }, N = () => {
      t.intervalId === null && (t.intervalId = setInterval(() => {
        t.currPage += 1, y();
      }, r.toggleDur));
    }, R = () => {
      t.intervalId && (clearInterval(t.intervalId), t.intervalId = null);
    }, h = k(() => {
      var a, n;
      return r.maxValue ? r.maxValue : r.order === "normal" ? ((a = t.currList.at(-1)) == null ? void 0 : a.value) || 0 : ((n = t.currList[0]) == null ? void 0 : n.value) || 0;
    }), L = k(() => function(a) {
      let n, s = h.value;
      n = a / s;
      const l = (d, g) => Math.round(d * Math.pow(10, g)) / Math.pow(10, g);
      return typeof n == "number" ? l(n * 100, 1) : 0;
    }), A = (a) => {
      a.style.opacity = "0", a.style.gridTemplateRows = "0fr";
    }, V = (a, n) => {
      a.offsetWidth, a.style.opacity = "1", a.style.gridTemplateRows = "1fr", n();
    }, D = async (a) => {
      a.style.opacity = "1";
    }, E = async (a, n) => {
      a.style.opacity = "0", a.style.margin = "0", a.style.gridTemplateRows = "0fr", await new Promise((s) => {
        setTimeout(() => {
          a.remove(), s(!0);
        }, r.toggleDuration);
      }), n();
    };
    return I(
      () => r.data,
      (a) => {
        o(a), y();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (a, n) => (i(), u("div", Q, [
      c(
        "div",
        {
          class: "f-scroll-rank__list",
          style: w({ "--page-animate-dur": `${r.toggleDuration}ms` })
        },
        [
          S(B, {
            tag: "div",
            css: !1,
            onBeforeEnter: A,
            onEnter: V,
            onBeforeLeave: D,
            onLeave: E
          }, {
            default: C(() => [
              (i(!0), u(
                T,
                null,
                M(m(t).currList, (s, l) => (i(), u("div", {
                  class: "f-scroll-rank__item",
                  key: s
                }, [
                  c("div", U, [
                    c("div", X, [
                      r.showRank ? (i(), u(
                        "span",
                        Y,
                        p(`NO.${s._index_}`),
                        1
                        /* TEXT */
                      )) : _("v-if", !0),
                      c(
                        "span",
                        Z,
                        p(s.name || ""),
                        1
                        /* TEXT */
                      ),
                      c("div", j, [
                        r.showPercent ? (i(), u(
                          "span",
                          ee,
                          p(`${m(L)(s.value)}%`),
                          1
                          /* TEXT */
                        )) : _("v-if", !0),
                        r.showRatio && typeof r.valueFormatter != "function" ? (i(), u(
                          "span",
                          te,
                          p(`${s.value} / ${m(h)}`),
                          1
                          /* TEXT */
                        )) : _("v-if", !0),
                        typeof r.valueFormatter == "function" ? (i(), u(
                          "span",
                          re,
                          p(`${s.formattedValue}`),
                          1
                          /* TEXT */
                        )) : _("v-if", !0)
                      ])
                    ]),
                    c("div", ae, [
                      S(m(v), {
                        percent: m(L)(s.value),
                        color: r.color,
                        duration: r.progressDuration
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
P.install = function(e) {
  e.component("FScrollRank", P);
};
const se = {
  title: "scrollRank 轮播排名表格",
  name: "scrollRank",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(P);
  }
};
export {
  P as ScrollRank,
  se as default
};
