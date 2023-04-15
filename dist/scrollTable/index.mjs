import './style.css';
import { computed as S, defineComponent as W, ref as B, openBlock as h, createElementBlock as _, normalizeClass as D, createElementVNode as b, normalizeStyle as P, unref as v, renderSlot as O, reactive as Q, getCurrentInstance as X, watch as Y, onMounted as Z, onBeforeUnmount as j, Fragment as I, renderList as z, toDisplayString as $, createVNode as N, TransitionGroup as ee, withCtx as H, normalizeProps as te, guardReactiveProps as le } from "vue";
function F(e) {
  return {
    handleToggle: (n) => {
      e.emit("handle-toggle", n);
    },
    handleCellClick: (n, x, s, u, f) => {
      e.emit("cell-click", x, s, u, f, n);
    }
  };
}
const ne = (e) => Array.isArray(e) && e || [], M = (e, t = /* @__PURE__ */ new WeakMap()) => {
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
  let i = new e.constructor();
  t.set(e, i);
  for (let n in e)
    e.hasOwnProperty(n) && (i[n] = M(e[n], t));
  return i;
};
function re(e, t, i) {
  const { handleToggle: n } = F(i), x = (a) => {
    let l = ne(a);
    return M(l);
  }, s = () => {
    e.toggleCount += 1, e.toggleCount >= t.emitCondition && n(t.name);
  }, u = async (a, l, d) => {
    let m = d;
    l.map((T) => T._index_ = ++m), e.currData.length ? a === t.pageSize ? e.currData = [...l] : (e.currData.push(...l), e.currData.splice(0, a)) : e.currData.push(...l);
  }, f = async () => {
    if (e.tableData.length) {
      o(!1, !0), e.isEmpty = !1;
      let a;
      t.mode === "single" ? a = t.togglePage : a = t.pageSize;
      let l, d;
      e.currPage === 1 ? (l = 0, d = t.pageSize) : (l = a * (e.currPage - 2) + t.pageSize, d = a * (e.currPage - 1) + t.pageSize);
      let m = e.tableData.slice(l, d);
      m.length ? e.currPage === 1 && e.toggleCount === 0 ? u(t.pageSize, m, l) : e.currPage === 1 ? await u(t.pageSize, m, l) : await u(a, m, l) : (e.currPage = 1, s(), f()), w();
    } else
      o(), e.currPage = 1, e.currData = [], e.isEmpty = !0, r();
  }, w = () => {
    e.intervalId === null && !e.isStopToggle && (e.intervalId = setInterval(() => {
      e.currPage += 1, f();
    }, t.toggleDur));
  }, r = () => {
    e.setTimeoutId === null && (e.setTimeoutId = setTimeout(() => {
      n(t.name);
    }, t.emptyEmitDur));
  }, o = (a = !0, l = !0) => {
    e.intervalId && a && (clearInterval(e.intervalId), e.intervalId = null), e.setTimeoutId && l && (clearTimeout(e.setTimeoutId), e.setTimeoutId = null);
  };
  return {
    deepCloneArr: x,
    setCurrData: f,
    setPageInterval: w,
    setEmptyTimeout: r,
    clearTimer: o,
    setPage: (a = 1) => {
      o(), e.currPage = a;
      let l;
      t.mode === "single" ? l = t.togglePage : l = t.pageSize;
      let d = l * (e.currPage - 1), m = l * (e.currPage - 1) + t.pageSize, T = e.tableData.slice(d, m);
      T.length ? (u(t.pageSize, T, d), w()) : f(), e.tableData.length || r();
    }
  };
}
function ae(e, t) {
  const i = S(() => function(r, o) {
    const y = ["f-scroll-table__row"];
    return t.stripe && o % 2 === 1 && y.push("f-scroll-table_row--striped"), y;
  }), n = S(() => {
    const r = ["cell"];
    return t.wrap ? r.push("cell--wrap") : r.push("cell--nowrap"), r;
  }), x = S(() => function(r) {
    let o = r.reduce((y, a) => y += a.width, 0);
    return {
      width: `${o}px`,
      "max-width": `${o}px`
    };
  }), s = S(() => ({
    height: t.maxHeight || "auto",
    "max-height": t.maxHeight || "auto",
    "--page-animate-dur": `${t.pageAnimateDur}ms`
  })), u = S(() => function(r) {
    return {
      // 'height': state.rowsHeight[i] || 'auto',
      // 'max-height': state.rowsHeight[i] || 'auto',
    };
  }), f = S(() => function(r) {
    return {
      width: `${r.width}px`,
      "max-width": `${r.width}px`,
      "text-align": r.align || t.align || "start"
    };
  }), w = S(() => function(r, o, y, a) {
    return typeof t.cellStyle == "function" ? t.cellStyle.call(null, {
      rowIndex: y,
      columnIndex: a,
      row: r,
      column: o
    }) : t.cellStyle || {};
  });
  return {
    getRowClass: i,
    getCellClass: n,
    getTableStyle: x,
    getBodyStyle: s,
    getRowStyle: u,
    getExtraCellStyle: f,
    getCellStyle: w
  };
}
const A = /* @__PURE__ */ W({
  __name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(e) {
    const t = e, i = B(), n = B(), x = S(() => {
      var a, l, d, m;
      let s = ((a = i.value) == null ? void 0 : a.offsetWidth) || 0, u = ((l = i.value) == null ? void 0 : l.offsetHeight) || 0, f = ((d = n.value) == null ? void 0 : d.offsetWidth) || 0, w = ((m = n.value) == null ? void 0 : m.offsetHeight) || 0;
      if (t.mode === "overflow" && (["up", "down"].includes(t.direction) && w < u || ["left", "right"].includes(t.direction) && f < s))
        return {
          "--text-scroll-width": `${s}px`,
          "--text-scroll-height": `${u}px`,
          animation: ""
        };
      let r, o, y;
      return ["up", "down"].includes(t.direction) && (r = u + w, o = r / t.speed || 0, y = `up-scroll linear ${o}s infinite ${t.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(t.direction) && (r = s + f, o = r / t.speed || 0, y = `left-scroll linear ${o}s infinite ${t.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${s}px`,
        "--text-scroll-height": `${u}px`,
        animation: y
      };
    });
    return (s, u) => (h(), _(
      "div",
      {
        ref_key: "scrollText",
        ref: i,
        class: D(["f-scroll-text", `f-scroll-text--${t.type}`])
      },
      [
        b(
          "div",
          {
            ref_key: "textContent",
            ref: n,
            class: "text-content",
            style: P(v(x))
          },
          [
            O(s.$slots, "default")
          ],
          4
          /* STYLE */
        )
      ],
      2
      /* CLASS */
    ));
  }
});
A.install = function(e) {
  e.component("FScrollText", A);
};
const ie = {
  class: "f-scroll-table__head"
}, oe = ["onClick"], se = {
  key: 1
}, R = /* @__PURE__ */ W({
  __name: "index",
  props: {
    name: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
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
      type: String,
      default: "center"
    },
    cellStyle: {
      type: Object,
      default: () => {
      }
    },
    maxHeight: {
      type: String,
      default: "auto"
    },
    mode: {
      type: String,
      default: "single"
    },
    pageSize: {
      type: Number,
      default: 5
    },
    togglePage: {
      type: Number,
      default: 1
    },
    toggleDur: {
      type: Number,
      default: 5 * 1e3
    },
    emptyEmitDur: {
      type: Number,
      default: 10 * 1e3
    },
    emitCondition: {
      type: Number,
      default: 2
    },
    pageAnimateDur: {
      type: Number,
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
    const i = e, n = Q({
      tableData: [],
      // 所有表格数据
      currData: [],
      // 当前展示的数据
      pageData: [],
      // 分页数据
      currPage: 1,
      // 当前页
      toggleCount: 0,
      // 切换完成的次数
      intervalId: null,
      // 切换页面定时器
      setTimeoutId: null,
      // 没有数据时,发送事件的定时器
      isStopToggle: !1,
      // 是否停止切换页面(当鼠标移动到表格时，停止切换)
      isEmpty: !1
      // 当前没有数据
    }), x = X(), s = B(), {
      deepCloneArr: u,
      setCurrData: f,
      setPageInterval: w,
      setEmptyTimeout: r,
      clearTimer: o,
      setPage: y
    } = re(n, i, x), {
      handleCellClick: a
    } = F(x), {
      getRowClass: l,
      getCellClass: d,
      getTableStyle: m,
      getBodyStyle: T,
      getRowStyle: ue,
      getExtraCellStyle: L,
      getCellStyle: U
    } = ae(n, i), V = (c) => {
      c.style.opacity = "0", c.style.gridTemplateRows = "0fr";
    }, G = (c, E) => {
      c.offsetWidth, c.style.opacity = "1", c.style.gridTemplateRows = "1fr", E();
    }, q = async (c) => {
      c.style.opacity = "1";
    }, J = async (c, E) => {
      c.style.opacity = "0", c.style.gridTemplateRows = "0fr", await new Promise((g) => {
        setTimeout(() => {
          c.remove(), g(!0);
        }, i.pageAnimateDur);
      }), E();
    };
    return Y(() => i.data, (c) => {
      n.tableData = u(c), f();
    }, {
      immediate: !0,
      deep: !0
    }), Z(() => {
      i.mouseEvent && (s.value.addEventListener("mouseenter", () => {
        o(!0, !0), n.isStopToggle = !0;
      }), s.value.addEventListener("mouseleave", () => {
        n.isStopToggle = !1, n.tableData.length ? w() : r();
      }));
    }), j(() => {
      o();
    }), t({
      setPage: y
    }), (c, E) => (h(), _(
      "div",
      {
        ref: "scrollTable",
        class: D(["f-scroll-table", {
          "is-border": i.border
        }]),
        style: P(v(m)(i.columns))
      },
      [b("div", ie, [(h(!0), _(
        I,
        null,
        z(i.columns, (g, C) => (h(), _(
          "div",
          {
            class: "f-scroll-table__cell",
            style: P(v(L)(g)),
            key: C
          },
          $(g.label),
          5
          /* TEXT, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))]), b(
        "div",
        {
          ref_key: "scrollTable__body",
          ref: s,
          class: "f-scroll-table__content is-hidden-scrollbar",
          style: P(v(T))
        },
        [N(ee, {
          tag: "div",
          css: !1,
          onBeforeEnter: V,
          onEnter: G,
          onBeforeLeave: q,
          onLeave: J
        }, {
          default: H(() => [(h(!0), _(
            I,
            null,
            z(n.currData, (g, C) => (h(), _("div", {
              class: "f-scroll-table__row-wrap",
              key: g
            }, [b(
              "div",
              {
                class: D(v(l)(g, C))
              },
              [(h(!0), _(
                I,
                null,
                z(i.columns, (p, k) => (h(), _("div", {
                  class: "f-scroll-table__cell",
                  style: P([v(L)(p), v(U)(g, p.type === "index" ? "_index_" : p.prop, C, k)]),
                  key: `${g[p.prop]}${k}`,
                  onClick: (K) => v(a)(K, g, g[p.prop], C, k)
                }, [p.type === "index" ? (h(), _(
                  "div",
                  {
                    key: 0,
                    class: D(v(d))
                  },
                  $(g._index_ || ""),
                  3
                  /* TEXT, CLASS */
                )) : p.type === "scroll" ? (h(), _("div", se, [N(
                  v(A),
                  te(le(p.scrollOption)),
                  {
                    default: H(() => [b(
                      "div",
                      null,
                      $(g[p.prop]),
                      1
                      /* TEXT */
                    )]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )])) : p.slot ? (h(), _(
                  "div",
                  {
                    key: 2,
                    class: D(v(d))
                  },
                  [O(c.$slots, p.slot, {
                    params: {
                      row: g,
                      column: p.prop,
                      $index: C
                    }
                  })],
                  2
                  /* CLASS */
                )) : (h(), _(
                  "div",
                  {
                    key: 3,
                    class: D(v(d))
                  },
                  $(g[p.prop]),
                  3
                  /* TEXT, CLASS */
                ))], 12, oe))),
                128
                /* KEYED_FRAGMENT */
              ))],
              2
              /* CLASS */
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          _: 3
          /* FORWARDED */
        })],
        4
        /* STYLE */
      )],
      6
      /* CLASS, STYLE */
    ));
  }
});
R.install = function(e) {
  e.component("FScrollTable", R);
};
const de = {
  title: "scrollTable 轮播表格",
  name: "scrollTable",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(R);
  }
};
export {
  R as ScrollTable,
  de as default
};
