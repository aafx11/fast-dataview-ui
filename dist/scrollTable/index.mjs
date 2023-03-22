import { computed as C, defineComponent as H, reactive as M, getCurrentInstance as F, watch as N, openBlock as o, createElementBlock as i, normalizeClass as _, createElementVNode as y, Fragment as T, renderList as v, normalizeStyle as x, toDisplayString as A, unref as h, createVNode as O, TransitionGroup as V, withCtx as W, renderSlot as $ } from "vue";
function G(e) {
  return {
    handleToggle: (n) => {
      e.emit("handleToggle", n);
    }
  };
}
const U = (e) => Array.isArray(e) && e || [], E = (e, l = /* @__PURE__ */ new WeakMap()) => {
  if (e === null)
    return e;
  if (e instanceof Date)
    return new Date(e);
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e != "object")
    return e;
  if (l.get(e))
    return l.get(e);
  let n = new e.constructor();
  l.set(e, n);
  for (let r in e)
    e.hasOwnProperty(r) && (n[r] = E(e[r], l));
  return n;
};
function q(e, l, n) {
  const { handleToggle: r } = G(n), D = (t) => {
    let c = U(t);
    return E(c);
  }, b = C(() => {
    if (l.mode === "page")
      return e.pageData[e.currPage - 1] || [];
    if (l.mode === "single")
      return e.currData || [];
  }), S = () => {
    if (l.mode === "page")
      if (e.tableData.length) {
        let t = [], c = Math.ceil(e.tableData.length / l.pageSize);
        for (let f = 1; f <= c; f++) {
          let d = e.tableData.slice(f * l.pageSize - l.pageSize, f * l.pageSize);
          t.push(d);
        }
        e.pageData = t, t[e.currPage - 1] || (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= l.emitCondition && r(l.name));
      } else
        e.pageData = [[]], e.currPage = 1, e.toggleCount = 0, r(l.name);
  }, g = () => {
    e.intervalId === null && !e.isStopToggle && l.mode === "page" && (e.intervalId = setInterval(() => {
      e.pageData[e.currPage] ? e.currPage += 1 : (e.currPage = 1, e.toggleCount += 1, e.toggleCount >= l.emitCondition && r(l.name));
    }, l.toggleDur));
  }, w = (t = 1) => {
    I(), e.currPage = t, g();
  }, u = async (t, c = 1, f = []) => {
    console.log("shiftLen", c), console.log("arr", t), t.push(...f), await new Promise((d) => setTimeout(d, 300));
    for (let d = 0; d < c; d++)
      t[d] = {};
    t.splice(0, c);
  }, P = async () => {
    if (l.mode === "single")
      if (e.tableData.length) {
        const t = Math.ceil((e.tableData.length - l.pageSize) / l.togglePage) + 1;
        if (t === 1 && (console.log("1"), e.currPage = 1, e.toggleCount += 1, u(e.currData, l.pageSize, e.tableData.slice()), e.toggleCount >= l.emitCondition && r(l.name)), t !== 1 && e.currPage <= t && (console.log("2"), e.currPage === 1 ? (console.log("2-1"), e.currData = e.tableData.slice(0, l.pageSize)) : (console.log("2-2"), console.log("start", l.pageSize - 1 + (e.currPage - 2) * l.togglePage + 1), console.log("end", l.pageSize - 1 + (e.currPage - 1) * l.togglePage + 1), u(e.currData, l.togglePage, e.tableData.slice(
          l.pageSize - 1 + (e.currPage - 2) * l.togglePage + 1,
          l.pageSize - 1 + (e.currPage - 1) * l.togglePage + 1
        )))), e.currPage > t) {
          console.log("3"), e.currPage = 1, e.toggleCount += 1, e.toggleCount >= l.emitCondition && r(l.name), P();
          return;
        }
      } else
        e.rowsHeight = [], e.currData = [], e.currPage = 1, e.toggleCount = 0, r(l.name);
  }, z = () => {
    e.intervalId === null && !e.isStopToggle && l.mode === "single" && (e.intervalId = setInterval(() => {
      e.currPage += 1, P();
    }, l.toggleDur));
  }, I = () => {
    e.intervalId && (clearInterval(e.intervalId), e.intervalId = null);
  };
  return {
    deepCloneArr: D,
    getCurrData: b,
    setPageData: S,
    setPageTimer: g,
    setPage: w,
    setCurrData: P,
    setToggleTimer: z,
    clearTimer: I,
    setIndex: (t) => {
      t.map((c, f) => c._index_ = f + 1);
    }
  };
}
function J(e, l) {
  const n = C(() => function(g, w) {
    const u = ["f-scroll-table_row"];
    return l.stripe && w % 2 === 1 && u.push("f-scroll-table_row--striped"), l.wrap && u.push("f-scroll-table_row--nowrap"), u;
  }), r = C(() => {
    const g = ["cell"];
    return l.wrap || g.push("cell--nowrap"), g;
  }), D = C(() => ({})), b = C(() => function(g) {
    return {
      "max-height": e.rowsHeight[g] || "auto"
    };
  }), S = C(() => function(g, w, u, P) {
    return typeof l.cellStyle == "function" ? l.cellStyle.call(null, {
      rowIndex: u,
      columnIndex: P,
      row: g,
      column: w
    }) : l.cellStyle || {};
  });
  return {
    getRowClass: n,
    getCellClass: r,
    getBodyStyle: D,
    getRowStyle: b,
    getCellStyle: S
  };
}
const K = {
  class: "f-scroll-table_header-wrapper"
}, L = {
  class: "f-scroll-table_header",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, Q = ["width"], X = {
  class: "cell"
}, Y = {
  class: "f-scroll-table_body",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, Z = ["width"], B = /* @__PURE__ */ H({
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
    expose: l
  }) {
    const n = e, r = M({
      tableData: [],
      currData: [],
      pageData: [],
      currPage: 1,
      toggleCount: 0,
      intervalId: null,
      isStopToggle: !1,
      isAnimate: !1,
      rowsHeight: []
    }), D = F(), {
      deepCloneArr: b,
      getCurrData: S,
      setPageData: g,
      setPageTimer: w,
      setCurrData: u,
      setToggleTimer: P,
      setPage: z,
      setIndex: I
    } = q(r, n, D), {
      getRowClass: R,
      getCellClass: t,
      getBodyStyle: c,
      getRowStyle: f,
      getCellStyle: d
    } = J(r, n);
    return N(() => n.data, (k) => {
      r.tableData = b(k), I(r.tableData), g(), w(), u(), P();
    }), l({
      setPage: z
    }), (k, j) => (o(), i("div", {
      ref: "scrollTable",
      class: _(["f-scroll-table", {
        "f-scroll-table--border": n.border
      }])
    }, [y("div", K, [y("table", L, [y("colgroup", null, [(o(!0), i(T, null, v(n.columns, (a, s) => (o(), i("col", {
      width: a.width,
      key: s
    }, null, 8, Q))), 128))]), y("thead", null, [y("tr", null, [(o(!0), i(T, null, v(n.columns, (a, s) => (o(), i("td", {
      class: "f-scroll-table_cell",
      style: x({
        "max-width": a.width
      }),
      key: s
    }, [y("div", X, A(a.label), 1)], 4))), 128))])])])]), y("div", {
      class: "f-scroll-table_body-wrapper is-hidden-scrollbar",
      ref: "bodyWrapper",
      style: x(h(c))
    }, [y("table", Y, [y("colgroup", null, [(o(!0), i(T, null, v(n.columns, (a, s) => (o(), i("col", {
      width: a.width,
      key: s
    }, null, 8, Z))), 128))]), O(V, {
      tag: "tbody",
      name: "fade",
      class: "f-scroll-table_body-inner"
    }, {
      default: W(() => [(o(!0), i(T, null, v(h(S), (a, s) => (o(), i("tr", {
        class: _(h(R)(a, s)),
        key: a
      }, [(o(!0), i(T, null, v(n.columns, (m, p) => (o(), i("td", {
        class: "f-scroll-table_cell is-hidden-scrollbar",
        style: x({
          width: m.width,
          "max-width": m.width
        }),
        key: p
      }, [m.slot ? (o(), i("div", {
        key: 0,
        class: _(h(t))
      }, [$(k.$slots, m.slot, {
        params: {
          row: a,
          column: m.prop,
          $index: s
        }
      })], 2)) : m.type == "index" ? (o(), i("div", {
        key: 1,
        class: _(h(t)),
        style: x(h(d)(a, m.prop, s, p))
      }, A(a._index_), 7)) : (o(), i("div", {
        key: 2,
        class: _(h(t)),
        style: x(h(d)(a, m.prop, s, p))
      }, A(a[m.prop]), 7))], 4))), 128))], 2))), 128))]),
      _: 3
    })])], 4)], 2));
  }
});
B.install = function(e) {
  e.component("FScrollTable", B);
};
const le = {
  title: "scrollTable 滚动表格",
  category: "数据展示",
  status: "20%",
  install(e) {
    e.use(B);
  }
};
export {
  B as ScrollTable,
  le as default
};
