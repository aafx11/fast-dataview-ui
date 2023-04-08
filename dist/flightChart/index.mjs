const t = {};
t.install = function(n) {
  n.component(t.name, t);
};
const a = {
  title: "loading 加载",
  category: "加载",
  status: "20%",
  install(n) {
    n.use(t);
  }
};
export {
  t as FlightChart,
  a as default
};
