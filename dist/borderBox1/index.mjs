import { defineComponent as n, onMounted as r, createVNode as s, renderSlot as d } from "vue";
const o = /* @__PURE__ */ n({
  name: "FBorderBox1",
  setup(e, {
    slots: t
  }) {
    return r(() => {
      console.log("onMounted");
    }), () => s("div", {
      class: "f-border",
      style: {
        height: "100px"
      }
    }, [d(t, "default")]);
  }
});
o.install = function(e) {
  e.component(o.name, o);
};
const a = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(e) {
    e.use(o);
  }
};
export {
  o as BorderBox1,
  a as default
};
