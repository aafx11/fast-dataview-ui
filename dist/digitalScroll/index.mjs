import { defineComponent as y, reactive as b, computed as L, onMounted as x, watch as D, openBlock as n, createElementBlock as o, createElementVNode as a, Fragment as _, renderList as p, unref as f, normalizeClass as N, withDirectives as h, vShow as S, normalizeStyle as k, toDisplayString as w } from "vue";
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
  setup(i) {
    const e = i;
    let c = b({
      stringList: []
    });
    const g = (l) => {
      let u = RegExp(`^\\d+(?:\\.\\d{0,${e.digit}})?`), t = Number(l.toString().match(u)).toString(), r = t.indexOf(".");
      for (r < 0 && (r = t.length, t += "."); t.length <= r + e.digit; )
        t += "0";
      return t.split("");
    }, v = L(() => function(l) {
      return {
        top: `-${Number(l) * 100}%`
      };
    });
    return x(() => {
      c.stringList = g(e.number);
    }), D(
      () => e.number,
      (l) => {
        c.stringList = g(e.number);
      }
    ), (l, u) => (n(), o("div", E, [
      a("div", z, [
        (n(!0), o(
          _,
          null,
          p(f(c).stringList, (s, t) => (n(), o(
            "div",
            {
              class: N(["f-digital-scroll__item", { "is-small": s === "." }]),
              key: t
            },
            [
              h(a(
                "div",
                B,
                ".",
                512
                /* NEED_PATCH */
              ), [
                [S, s === "."]
              ]),
              h(a(
                "div",
                {
                  class: "f-digital-scroll__digital-list",
                  style: k(f(v)(s))
                },
                [
                  (n(), o(
                    _,
                    null,
                    p(10, (r, m) => a(
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
                [S, s !== "."]
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
d.install = function(i) {
  i.component("FDigitalScroll", d);
};
const F = {
  title: "digitalScroll 滚动数字",
  name: "digitalScroll",
  category: "数据展示",
  status: "100%",
  install(i) {
    i.use(d);
  }
};
export {
  d as DigitalScroll,
  F as default
};
