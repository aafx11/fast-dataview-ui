import { defineComponent as $, ref as m, computed as v, openBlock as y, createElementBlock as w, normalizeClass as C, createElementVNode as S, normalizeStyle as T, unref as _, renderSlot as k } from "vue";
const d = /* @__PURE__ */ $({
  name: "index",
  props: {
    type: { default: "default" },
    direction: { default: "up" },
    speed: { default: 60 },
    mode: { default: "infinite" }
  },
  setup(l) {
    const e = l, r = m(), s = m(), g = v(() => {
      var u, p, x, h;
      let t = ((u = r.value) == null ? void 0 : u.offsetWidth) || 0, n = ((p = r.value) == null ? void 0 : p.offsetHeight) || 0, f = ((x = s.value) == null ? void 0 : x.offsetWidth) || 0, a = ((h = s.value) == null ? void 0 : h.offsetHeight) || 0;
      if (e.mode === "overflow" && (["up", "down"].includes(e.direction) && a < n || ["left", "right"].includes(e.direction) && f < t))
        return {
          "--text-scroll-width": `${t}px`,
          "--text-scroll-height": `${n}px`,
          animation: ""
        };
      let i, o, c;
      return ["up", "down"].includes(e.direction) && (i = n + a, o = i / e.speed || 0, c = `up-scroll linear ${o}s infinite ${e.direction === "down" ? "reverse" : ""}`), ["left", "right"].includes(e.direction) && (i = t + f, o = i / e.speed || 0, c = `left-scroll linear ${o}s infinite ${e.direction === "right" ? "reverse" : ""}`), {
        "--text-scroll-width": `${t}px`,
        "--text-scroll-height": `${n}px`,
        animation: c
      };
    });
    return (t, n) => (y(), w("div", {
      ref_key: "scrollText",
      ref: r,
      class: C(["f-scroll-text", `f-scroll-text--${e.type}`])
    }, [
      S("div", {
        ref_key: "textContent",
        ref: s,
        class: "text-content",
        style: T(_(g))
      }, [
        k(t.$slots, "default")
      ], 4)
    ], 2));
  }
});
d.install = function(l) {
  l.component("FScrollText", d);
};
const W = {
  title: "border 边框",
  category: "边框",
  status: "20%",
  install(l) {
    l.use(d);
  }
};
export {
  d as ScrollText,
  W as default
};
