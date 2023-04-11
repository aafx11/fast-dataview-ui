import { defineComponent as i, computed as d, openBlock as s, createElementBlock as c, normalizeStyle as u, createElementVNode as a, renderSlot as g, toDisplayString as f } from "vue";
const y = Object.assign, p = (t) => Array.isArray(t) && t.length, m = i({
  name: "FLoading2",
  props: {
    width: { type: String, default: "100px" },
    height: { type: String, default: "100px" },
    color: { type: Array, default: () => [] },
    text: { type: String, default: "" },
    duration: { type: Number, default: 0.8 }
  },
  setup(t, { slots: r }) {
    const e = ["#d1d5db", "#3b82f6", "#3b82f6"];
    let o = d(() => p(t.color) ? y(e, t.color) : e);
    return {
      getLoadingStyle: d(() => ({
        width: t.width,
        height: t.height,
        color: o.value[2],
        "--border-color": o.value[0],
        "--border-top-color": o.value[1],
        "--duration": `${t.duration}s`
      }))
    };
  }
}), h = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [o, l] of r)
    e[o] = l;
  return e;
}, _ = /* @__PURE__ */ a("div", { class: "f-loading-round" }, null, -1), S = { class: "loading-text" };
function v(t, r, e, o, l, b) {
  return s(), c("div", {
    class: "f-loading-2",
    style: u(t.getLoadingStyle)
  }, [
    _,
    a("div", S, [
      g(t.$slots, "default", {}, () => [
        a("div", null, f(t.text), 1)
      ])
    ])
  ], 4);
}
const n = /* @__PURE__ */ h(m, [["render", v]]);
n.install = function(t) {
  t.component(n.name, n);
};
const $ = {
  title: "loading-02 加载",
  name: "loading02",
  category: "加载",
  status: "100%",
  install(t) {
    t.use(n);
  }
};
export {
  n as Loading2,
  $ as default
};
