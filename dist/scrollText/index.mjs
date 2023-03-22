import { defineComponent as v, ref as x, computed as y, openBlock as $, createElementBlock as C, normalizeClass as S, createElementVNode as T, normalizeStyle as _, unref as k, renderSlot as w } from "vue";
const d = /* @__PURE__ */ v({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 }
  },
  setup(t) {
    const e = t, i = x(), r = x(), h = y(() => {
      var f, a, u, p;
      let l = ((f = i.value) == null ? void 0 : f.offsetWidth) || 0, s = ((a = i.value) == null ? void 0 : a.offsetHeight) || 0, m = ((u = r.value) == null ? void 0 : u.offsetWidth) || 0, g = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0, n, o, c;
      return ["up", "down"].includes(e.direction) && (n = s + g, o = n / e.speed || 0, c = `up-scroll linear ${o}s infinite ${e.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(e.direction) && (n = l + m, o = n / e.speed || 0, c = `left-scroll linear ${o}s infinite ${e.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${l}px`,
        "--text-scroll-height": `${s}px`,
        animation: c
      };
    });
    return (l, s) => ($(), C("div", {
      ref_key: "scrollText",
      ref: i,
      class: S(["f-scroll-text", `f-scroll-text--${e.type}`])
    }, [
      T("div", {
        ref_key: "textContent",
        ref: r,
        class: "text-content",
        style: _(k(h))
      }, [
        w(l.$slots, "default")
      ], 4)
    ], 2));
  }
});
d.install = function(t) {
  t.component("FScrollText", d);
};
const W = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(t) {
    t.use(d);
  }
};
export {
  d as ScrollText,
  W as default
};
