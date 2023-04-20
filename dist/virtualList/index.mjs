import { defineComponent as V, ref as m, reactive as $, onBeforeMount as C, onMounted as A, onUpdated as R, nextTick as F, onBeforeUnmount as O, watch as P, computed as d, openBlock as b, createElementBlock as S, normalizeStyle as U, createElementVNode as x, Fragment as j, renderList as q, unref as G, renderSlot as J } from "vue";
const K = {
  // 列表数据
  data: {
    type: Array,
    default: () => []
  },
  // 每行预估高度
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
    type: Number,
    default: 1
  },
  // 每次滚动的距离
  scrollDistance: {
    type: Number
  },
  // 滚动间隔
  scrollInterval: {
    type: Number,
    default: 100
  },
  // 滚动到底部的停留时间
  stopTime: {
    type: Number,
    default: 10 * 1e3
  }
}, Q = ["id"], y = /* @__PURE__ */ V({
  __name: "index",
  props: K,
  setup(v) {
    const o = v, i = m(null), I = m(null), L = m(null), u = m(null), t = $({
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
    C(() => {
      D();
    }), A(() => {
      t.screenHeight = i.value.clientHeight, t.start = 0, t.end = t.start + p.value, g(), E();
    }), R(() => {
      F(() => {
        var l, s;
        if (!u.value || !((l = u.value) != null && l.length))
          return;
        B();
        let e = (s = t.positions.at(-1)) == null ? void 0 : s.bottom;
        I.value.style.height = `${e}px`, H();
      });
    }), O(() => {
      _();
    }), P(
      () => o.data,
      () => {
        D();
      }
    );
    const D = () => {
      t.positions = o.data.map((e, l) => ({
        index: l,
        height: o.estimatedItemSize,
        top: l * o.estimatedItemSize,
        bottom: (l + 1) * o.estimatedItemSize
      }));
    }, M = (e = 0) => T(t.positions, e), T = (e, l) => {
      let s = 0, n = e.length - 1, r = null;
      for (; s <= n; ) {
        let c = parseInt((s + n) / 2 + ""), a = e[c].bottom;
        if (a === l)
          return c + 1;
        a < l ? s = c + 1 : a > l && ((r === null || r > c) && (r = c), n = n - 1);
      }
      return r;
    }, z = d(() => o.data.map((e, l) => ({
      _index_: l,
      ...e
    }))), p = d(() => Math.ceil(t.screenHeight / o.estimatedItemSize)), h = d(() => Math.min(t.start, o.bufferScale * p.value)), k = d(() => Math.min(
      o.data.length - t.end,
      o.bufferScale * p.value
    )), w = d(() => {
      let e = t.start - h.value, l = t.end + k.value;
      return z.value.slice(e, l);
    }), H = () => {
      let e = 0;
      if (t.start >= 1) {
        let l = t.positions[t.start].top - (t.positions[t.start - h.value] ? t.positions[t.start - h.value].top : 0);
        e = t.positions[t.start - 1].bottom - l;
      } else
        e = 0;
      L.value.style.transform = `translate3d(0,${e}px,0)`;
    }, B = () => {
      if (u.value)
        for (let e = 0; e < u.value.length; e++) {
          let l = u.value[e], n = l.getBoundingClientRect().height, r = +l.id, a = t.positions[r].height - n;
          if (a) {
            t.positions[r].bottom = t.positions[r].bottom - a, t.positions[r].height = n;
            for (let f = r + 1; f < t.positions.length; f++)
              t.positions[f].top = t.positions[f - 1].bottom, t.positions[f].bottom = t.positions[f].bottom - a;
          }
        }
    }, N = () => {
      let e = i.value.scrollTop;
      t.start = M(e), t.end = t.start + p.value, H();
    }, g = () => {
      t.intervalID === null && o.autoScroll && !t.isMouseHover && (t.intervalID = setInterval(() => {
        if (i.value) {
          let e = 0;
          if (o.scrollDistance && (e = o.scrollDistance), o.scrollRow && e === 0) {
            let l = 0;
            for (let s = 0; s < o.scrollRow; s++)
              l += t.positions[t.start + s].height;
            e = l;
          }
          if (Math.abs(i.value.scrollHeight - i.value.clientHeight - i.value.scrollTop) >= 1) {
            let l = i.value.scrollTop + e;
            i.value.scrollTo({ top: l, behavior: "smooth" });
          } else
            _(), setTimeout(() => {
              i.value.scrollTo({ top: 0, behavior: "instant" }), setTimeout(() => {
                g();
              }, 500);
            }, o.stopTime);
        }
      }, o.scrollInterval));
    }, _ = () => {
      t.intervalID && (clearInterval(t.intervalID), t.intervalID = null);
    }, E = () => {
      i.value && (i.value.addEventListener("mouseenter", () => {
        _(), t.isMouseHover = !0;
      }), i.value.addEventListener("mouseleave", () => {
        t.isMouseHover = !1, g();
      }));
    };
    return (e, l) => (b(), S(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: i,
        style: U({ height: e.height }),
        onScroll: l[0] || (l[0] = (s) => N())
      },
      [
        x(
          "div",
          {
            class: "f-virtual-list__space",
            ref_key: "virtualList__space",
            ref: I
          },
          null,
          512
          /* NEED_PATCH */
        ),
        x(
          "div",
          {
            class: "f-virtual-list__content",
            ref_key: "virtualList__content",
            ref: L
          },
          [
            (b(!0), S(
              j,
              null,
              q(G(w), (s) => (b(), S("div", {
                class: "f-virtual-list__item",
                ref_for: !0,
                ref_key: "virtualList__item",
                ref: u,
                id: `${s._index_}`
              }, [
                J(e.$slots, "default", {
                  ref_for: !0,
                  ref: "slot",
                  params: { row: s, $index: s._index_ }
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
y.install = function(v) {
  v.component("FVirtualList", y);
};
const X = {
  title: "virtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(v) {
    v.use(y);
  }
};
export {
  y as VirtualList,
  X as default
};
