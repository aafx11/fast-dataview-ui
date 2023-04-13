import { defineComponent as y, reactive as b, computed as L, onMounted as x, watch as D, openBlock as r, createElementBlock as o, createElementVNode as a, Fragment as _, renderList as p, unref as f, normalizeClass as N, withDirectives as S, vShow as h, normalizeStyle as k, toDisplayString as w } from "vue";
const E = { class: "f-digital-scroll" }, z = { class: "f-digital-scroll__list" }, B = { class: "f-digital-scroll__point" }, d = /* @__PURE__ */ y({
  __name: "index",
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
  setup(e) {
    const s = e;
    let c = b({
      stringList: []
    });
    const u = (i) => {
      let g = RegExp(`^\\d+(?:\\.\\d{0,${s.digit}})?`);
      console.log("reg", g);
      let l = Number(i.toString().match(g));
      console.log("digitalToStringList", l);
      let t = l.toString(), n = t.indexOf(".");
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
        (r(!0), o(
          _,
          null,
          p(f(c).stringList, (l, t) => (r(), o(
            "div",
            {
              class: N(["f-digital-scroll__item", { "is-small": l === "." }]),
              key: t
            },
            [
              S(a(
                "div",
                B,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [h, l === "."]
              ]),
              S(a(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: k(f(v)(l))
                },
                [
                  (r(), o(
                    _,
                    null,
                    p(10, (n, m) => a(
                      "div",
                      {
                        class: "f-digital-scroll__digital-item",
                        key: m
                      },
                      w(m),
                      1
                      /* TEXT */
                    )),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              ), [
                [h, l !== "."]
              ])
            ],
            2
            /* CLASS */
          ))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
});
d.install = function(e) {
  e.component("FDigitalScroll", d);
};
const F = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(e) {
    e.use(d);
  }
};
export {
  d as DigitalScroll,
  F as default
};
