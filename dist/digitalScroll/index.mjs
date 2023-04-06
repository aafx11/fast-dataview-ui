import { defineComponent as y, reactive as b, computed as L, onMounted as x, watch as D, openBlock as r, createElementBlock as o, createElementVNode as a, Fragment as _, renderList as p, unref as f, normalizeClass as N, withDirectives as h, vShow as S, normalizeStyle as k, toDisplayString as w } from "vue";
const E = { class: "f-digital-scroll" }, z = { class: "f-digital-scroll__list" }, B = { class: "f-digital-scroll__point" }, d = /* @__PURE__ */ y({
  name: "index",
  props: {
    number: {
      type: Number,
      default: 0
    },
    digit: {
      type: Number,
      default: 2
    }
  },
  setup(l) {
    const s = l;
    let c = b({
      stringList: []
    });
    const u = (i) => {
      let g = RegExp(`^\\d+(?:\\.\\d{0,${s.digit}})?`);
      console.log("reg", g);
      let e = Number(i.toString().match(g));
      console.log("digitalToStringList", e);
      let t = e.toString(), n = t.indexOf(".");
      for (n < 0 && (n = t.length, t += "."); t.length <= n + s.digit; )
        t += "0";
      return t.split("");
    }, v = L(() => function(i) {
      return console.log("str", i), {
        top: `-${Number(i) * 100}%`
      };
    });
    return x(() => {
      c.stringList = u(s.number);
    }), D(
      () => s.number,
      (i) => {
        console.log("变化", i), c.stringList = u(s.number);
      }
    ), (i, g) => (r(), o("div", E, [
      a("div", z, [
        (r(!0), o(_, null, p(f(c).stringList, (e, t) => (r(), o("div", {
          class: N(["f-digital-scroll__item", { "is-small": e === "." }]),
          key: t
        }, [
          h(a("div", B, ".", 512), [
            [S, e === "."]
          ]),
          h(a("div", {
            class: "f-digital-scroll__digital-list",
            style: k(f(v)(e))
          }, [
            (r(), o(_, null, p(10, (n, m) => a("div", {
              class: "f-digital-scroll__digital-item",
              key: m
            }, w(m), 1)), 64))
          ], 4), [
            [S, e !== "."]
          ])
        ], 2))), 128))
      ])
    ]));
  }
});
d.install = function(l) {
  l.component("FDigitalScroll", d);
};
const F = {
  title: "digitalScroll 数字滚动",
  category: "数字滚动",
  status: "20%",
  install(l) {
    l.use(d);
  }
};
export {
  d as DigitalScroll,
  F as default
};
