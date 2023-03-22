import { defineComponent as p, computed as l, openBlock as u, createElementBlock as i, normalizeStyle as a, createElementVNode as c, renderSlot as d, toDisplayString as g } from "vue";
const f = Object.assign, y = (e) => Array.isArray(e) && e.length, m = p({
  name: "FProgress",
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array, default: () => [] },
    duration: { type: Number, default: 0.5 }
  },
  setup(e, { slots: s }) {
    const t = ["#d1d5db", "#3b82f6", "white"];
    let r = l(() => y(e.color) ? f(t, e.color) : t);
    return {
      getProgressStyle: l(() => ({
        "--bgc": r.value[0],
        "--progress-color": r.value[1],
        "--progress-text-color": r.value[2],
        "--duration": `${e.duration}s`
      }))
    };
  }
}), $ = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of s)
    t[r] = n;
  return t;
};
function b(e, s, t, r, n, v) {
  return u(), i("div", {
    class: "f-progress",
    style: a(e.getProgressStyle)
  }, [
    c("div", {
      class: "progress-inner",
      style: a({ width: `${e.percent}%` })
    }, [
      d(e.$slots, "default", { percent: e.percent }, () => [
        c("span", null, g(e.percent ? `${e.percent}%` : ""), 1)
      ])
    ], 4)
  ], 4);
}
const o = /* @__PURE__ */ $(m, [["render", b]]);
o.install = function(e) {
  e.component(o.name, o);
};
const P = {
  title: "progress 进度条",
  category: "进度条",
  status: "20%",
  install(e) {
    e.use(o);
  }
};
export {
  o as Progress,
  P as default
};
