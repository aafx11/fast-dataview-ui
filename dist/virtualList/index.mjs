import { defineComponent as u, ref as m, reactive as d, onBeforeMount as p, openBlock as _, createElementBlock as f, normalizeStyle as v, createElementVNode as s } from "vue";
const h = {
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
  }
}, y = {
  class: "f-virtual-list__space",
  ref: "virtualList__space"
}, L = {
  class: "f-virtual-list__content",
  ref: "virtualList__content"
}, S = /* @__PURE__ */ s(
  "div",
  null,
  null,
  -1
  /* HOISTED */
), g = [
  S
], o = /* @__PURE__ */ u({
  __name: "index",
  props: h,
  setup(e) {
    const i = e, a = m(), r = d({
      positions: [],
      // 每行的位置信息
      screenHeight: 0,
      // 可视区域高度
      start: 0,
      // 起始索引
      end: 0
      // 结束索引
    });
    p(() => {
      l();
    });
    const l = () => {
      r.positions = i.data.map((n, t) => ({
        index: t,
        height: i.estimatedItemSize,
        top: t * i.estimatedItemSize,
        bottom: (t + 1) * i.estimatedItemSize
      }));
    }, c = () => {
    };
    return (n, t) => (_(), f(
      "div",
      {
        class: "f-virtual-list",
        ref_key: "virtualList",
        ref: a,
        style: v({ height: n.height }),
        onScroll: t[0] || (t[0] = (z) => c())
      },
      [
        s(
          "div",
          y,
          null,
          512
          /* NEED_PATCH */
        ),
        s(
          "div",
          L,
          g,
          512
          /* NEED_PATCH */
        )
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    ));
  }
});
o.install = function(e) {
  e.component("FVirtualList", o);
};
const I = {
  title: "VirtualList 虚拟列表",
  name: "virtualList",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(o);
  }
};
export {
  o as VirtualList,
  I as default
};
