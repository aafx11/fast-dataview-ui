import { defineComponent as C, ref as m, reactive as T, onBeforeMount as $, onMounted as A, onUpdated as R, nextTick as F, onBeforeUnmount as O, watch as P, computed as d, openBlock as g, createElementBlock as _, normalizeStyle as U, createElementVNode as M, Fragment as j, renderList as q, unref as G, renderSlot as J } from "vue";
const K = {
  // 列表数据
  data: {
    type: Array,
    default: () => []
  },
  // 每行预告高度
  estimatedItemSize: {
    type: Number,
    required: !0
  },
  // 缓冲区比例
  bufferScale: {
    type: Number,
    default: 1
  },
  // 列表高度
  height: {
    type: String,
    default: "100%"
  },
  // 是否开启滚动事件
  autoScroll: {
    type: Boolean,
    default: !1
  },
  // 每次滚动多少行
  scrollRow: {
    type: Number
  },
  // 每次滚动的距离
  scrollDistance: {
    type: Number
  },
  // 滚动间隔
  scrollInterval: {
    type: Number,
    default: 100
  }
}, Q = ["id"], b = /* @__PURE__ */ C({
  __name: "index",
  props: K,
  setup(v) {
    const o = v, n = m(null), S = m(null), I = m(null), u = m(null), t = T({
      positions: [],
      // 每行的位置信息
      screenHeight: 0,
      // 可视区域高度
      start: 0,
      // 起始索引
      end: 0,
      // 结束索引
      isMouseHover: !1,
      // 鼠标是否移入列表
      intervalID: null
    });
    $(() => {
      y();
    }), A(() => {
      t.screenHeight = n.value.clientHeight, t.start = 0, t.end = t.start + p.value, D(), V();
    }), R(() => {
      F(() => {
        var l, s;
        if (!u.value || !((l = u.value) != null && l.length))
          return;
        E();
        let e = (s = t.positions.at(-1)) == null ? void 0 : s.bottom;
        S.value.style.height = `${e}px`, L();
      });
    }), O(() => {
      H();
    }), P(() => o.data, () => {
      y();
    });
    const y = () => {
      t.positions = o.data.map((e, l) => ({
        index: l,
        height: o.estimatedItemSize,
        top: l * o.estimatedItemSize,
        bottom: (l + 1) * o.estimatedItemSize
      }));
    }, x = (e = 0) => z(t.positions, e), z = (e, l) => {
      let s = 0, r = e.length - 1, i = null;
      for (; s <= r; ) {
        let c = parseInt((s + r) / 2 + ""), a = e[c].bottom;
        if (a === l)
          return c + 1;
        a < l ? s = c + 1 : a > l && ((i === null || i > c) && (i = c), r = r - 1);
      }
      return i;
    }, k = d(() => o.data.map((e, l) => ({
      _index_: l,
      ...e
    }))), p = d(() => Math.ceil(t.screenHeight / o.estimatedItemSize)), h = d(() => Math.min(t.start, o.bufferScale * p.value)), B = d(() => Math.min(o.data.length - t.end, o.bufferScale * p.value)), w = d(() => {
      let e = t.start - h.value, l = t.end + B.value;
      return k.value.slice(e, l);
    }), L = () => {
      let e = 0;
      if (t.start >= 1) {
        let l = t.positions[t.start].top - (t.positions[t.start - h.value] ? t.positions[t.start - h.value].top : 0);
        e = t.positions[t.start - 1].bottom - l;
      } else
        e = 0;
      I.value.style.transform = `translate3d(0,${e}px,0)`;
    }, E = () => {
      if (u.value)
        for (let e = 0; e < u.value.length; e++) {
          let l = u.value[e], r = l.getBoundingClientRect().height, i = +l.id, a = t.positions[i].height - r;
          if (a) {
            t.positions[i].bottom = t.positions[i].bottom - a, t.positions[i].height = r;
            for (let f = i + 1; f < t.positions.length; f++)
              t.positions[f].top = t.positions[f - 1].bottom, t.positions[f].bottom = t.positions[f].bottom - a;
          }
        }
    }, N = () => {
      let e = n.value.scrollTop;
      t.start = x(e), t.end = t.start + p.value, L();
    }, D = () => {
      t.intervalID === null && o.autoScroll && !t.isMouseHover && (console.log("添加自动滚动"), t.intervalID = setInterval(() => {
        if (n.value) {
          let e = o.scrollDistance || t.positions[t.start].height;
          if (o.scrollDistance && (e = o.scrollDistance), o.scrollRow) {
            let l = 0;
            for (let s = 0; s < o.scrollRow; s++)
              ;
            e = l;
          }
          n.value.scrollTo({
            top: n.value.scrollTop + e,
            behavior: "smooth"
          });
        }
      }, o.scrollInterval));
    }, H = () => {
      t.intervalID && (clearInterval(t.intervalID), t.intervalID = null);
    }, V = () => {
      n.value && (n.value.addEventListener("mouseenter", () => {
        H(), t.isMouseHover = !0;
      }), n.value.addEventListener("mouseleave", () => {
        t.isMouseHover = !1, D();
      }));
    };
    return (e, l) => (g(), _(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: n,
        style: U({ height: e.height }),
        onScroll: l[0] || (l[0] = (s) => N())
      },
      [
        M(
          "div",
          {
            class: "f-virtual-list__space",
            ref_key: "virtualList__space",
            ref: S
          },
          null,
          512
          /* NEED_PATCH */
        ),
        M(
          "div",
          {
            class: "f-virtual-list__content",
            ref_key: "virtualList__content",
            ref: I
          },
          [
            (g(!0), _(
              j,
              null,
              q(G(w), (s) => (g(), _("div", {
                class: "f-virtual-list__item",
                ref_for: !0,
                ref_key: "virtualList__item",
                ref: u,
                id: `${s._index_}`
              }, [
                J(e.$slots, "default", {
                  ref_for: !0,
                  ref: "slot",
                  item: s
                })
              ], 8, Q))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    ));
  }
});
b.install = function(v) {
  v.component("FVirtualList", b);
};
const X = {
  title: "virtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(v) {
    v.use(b);
  }
};
export {
  b as VirtualList,
  X as default
};
