import { defineComponent as n, computed as s, createVNode as c, renderSlot as l } from "vue";
const i = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, o = /* @__PURE__ */ n({
  name: "FIcon",
  props: i,
  setup(e, {
    slots: t
  }) {
    return s(() => !e.size && !e.color ? {} : {
      ...e.size ? {
        "font-size": e.size + "px"
      } : {},
      ...e.color ? {
        color: e.color
      } : {}
    }), () => c("div", {
      style: {
        border: "1px solid black"
      }
    }, [l(t, "default")]);
  }
});
o.install = function(e) {
  e.component(o.name, o);
};
const r = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(e) {
    e.use(o);
  }
}, a = [
  r
], d = {
  version: "1.0.12",
  install(e) {
    a.forEach((t) => e.use(t));
  }
};
export {
  o as Icon,
  d as default
};
