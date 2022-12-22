import { defineComponent as n, computed as c, createVNode as i, renderSlot as r } from "vue";
const s = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, o = /* @__PURE__ */ n({
  name: "FIcon",
  props: s,
  setup(e, {
    slots: t
  }) {
    return c(() => !e.size && !e.color ? {} : {
      ...e.size ? {
        "font-size": e.size + "px"
      } : {},
      ...e.color ? {
        color: e.color
      } : {}
    }), () => i("div", {
      class: "f-icon",
      style: {
        border: "1px solid black"
      }
    }, [r(t, "default")]);
  }
});
o.install = function(e) {
  e.component(o.name, o);
};
const a = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(e) {
    e.use(o);
  }
};
export {
  o as Icon,
  a as default
};
