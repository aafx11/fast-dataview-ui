import { defineComponent as s, computed as c, createVNode as l, renderSlot as r, onMounted as i } from "vue";
const a = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}, t = /* @__PURE__ */ s({
  name: "FIcon",
  props: a,
  setup(o, {
    slots: e
  }) {
    return c(() => !o.size && !o.color ? {} : {
      ...o.size ? {
        "font-size": o.size + "px"
      } : {},
      ...o.color ? {
        color: o.color
      } : {}
    }), () => l("div", {
      class: "f-icon",
      style: {
        border: "1px solid black"
      }
    }, [r(e, "default")]);
  }
});
t.install = function(o) {
  o.component(t.name, t);
};
const u = {
  title: "Icon 图标",
  category: "装饰",
  status: "20%",
  install(o) {
    o.use(t);
  }
}, n = /* @__PURE__ */ s({
  name: "FBorderBox1",
  setup(o, {
    slots: e
  }) {
    return i(() => {
      console.log("onMounted");
    }), () => l("div", {
      class: "f-border",
      style: {
        height: "100px"
      }
    }, [r(e, "default")]);
  }
});
n.install = function(o) {
  o.component(n.name, n);
};
const d = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(o) {
    o.use(n);
  }
}, f = [
  u,
  d
], p = {
  version: "1.0.12",
  install(o) {
    f.forEach((e) => o.use(e));
  }
};
export {
  n as BorderBox1,
  t as Icon,
  p as default
};
