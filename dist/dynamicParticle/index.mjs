import { defineComponent as D, inject as X, ref as m, onMounted as I, openBlock as A, createElementBlock as C, createElementVNode as M } from "vue";
const R = {
  width: { type: Number, default: 400 },
  // 画布宽度
  height: { type: Number, default: 400 },
  // 画布高度
  radius: { type: Number, default: 1.2 },
  // 粒子半径
  strength: { type: Number, default: 2 },
  // 吸引和排斥的力度
  // particleColors: { type: String, default: 'rgba(255, 255, 255, 1)' }, // 粒子颜色
  src: { type: String }
  // 图片url
}, E = 30, $ = 1 / E;
class w {
  // 粒子的透明度
  constructor(i, t, r, e, l, a, s) {
    this.x = Math.random() * i >> 0, this.y = Math.random() * t >> 0, this.targetX = r, this.targetY = e, this.time = l, this.radius = a, this.colors = s, this.opacity = 0;
  }
  // 绘制粒子
  draw(i) {
    i.fillStyle = `${this.colors}`, i.fillRect(this.x, this.y, this.radius * 2, this.radius * 2), i.fill();
  }
  /**
   * 根据鼠标与粒子的位置，更新粒子
   * @param {number} radius 鼠标影响的半径范围
   * @param {number} strength 吸引和排斥的力度
   * @param {number} mouseX 鼠标在X轴的位置
   * @param {number} mouseY 鼠标在Y轴的位置
   */
  update(i, t, r, e) {
    if (this.distanceX = this.targetX - this.x, this.distanceY = this.targetY - this.y, this.velocityX = this.distanceX / this.time, this.velocityY = this.distanceY / this.time, r && e) {
      let l = r - this.x, a = e - this.y, s = Math.sqrt(l ** 2 + a ** 2), h = i / s;
      h = h > 7 ? 7 : h;
      let n = Math.atan2(a, l), c = Math.cos(n), o = Math.sin(n), d = c * h * -t, g = o * h * -t;
      this.velocityX += d, this.velocityY += g;
    }
    this.x += this.velocityX, this.y += this.velocityY, this.opacity < 1 && (this.opacity += $);
  }
  // 切换粒子
  change(i, t, r) {
    this.targetX = i, this.targetY = t, this.colors = r;
  }
}
const Y = 30;
class b {
  // 动画的id，用于停止动画
  constructor(i, t, r) {
    this.radius = t, this.strength = r, this.canvasEle = i, this.ctx = i.getContext("2d"), this.width = i.width, this.height = i.height, this.particleArr = [], this.canvasEle.onmouseleave = () => {
      this.mouseX = 0, this.mouseY = 0;
    };
  }
  // 修改图片，复用粒子
  changeImg(i) {
    if (this.particleArr.length) {
      let t = i.particleData, r = t.length, e = this.particleArr, l = e.length;
      for (let s = 0; s < r; s++) {
        const { targetX: h, targetY: n, colors: c } = t[s];
        e[s] ? e[s].change(h, n, c) : e[s] = new w(this.width, this.height, h, n, Y, this.radius, c);
      }
      r < l && (this.particleArr = e.splice(0, r)), e = this.particleArr;
      let a = e.length;
      for (; a; ) {
        let s = ~~(Math.random() * a--), h = e[s], { targetX: n, targetY: c, colors: o } = h;
        h.targetX = e[a].targetX, h.targetY = e[a].targetY, h.colors = e[a].colors, e[a].targetX = n, e[a].targetY = c, e[a].colors = o;
      }
    } else
      this.particleArr = i.particleData.map((t) => new w(this.width, this.height, t.targetX, t.targetY, Y, this.radius, t.colors));
  }
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.particleArr.forEach((i) => {
      i.update(30, this.strength, this.mouseX, this.mouseY), i.draw(this.ctx);
    }), this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}
const _ = 30;
class x {
  // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(i, t, r, e) {
    this.src = i, this.width = t, this.height = r, this.particleData = [], this.radius = e;
  }
  createParticleData(i = this.src) {
    return new Promise((t, r) => {
      let e = new Image();
      e.crossOrigin = "", e.src = decodeURI(new URL(i, import.meta.url).href), e.onload = () => {
        const l = document.createElement("canvas"), a = l.getContext("2d"), s = this.width, h = this.height;
        l.width = s, l.height = h, a == null || a.drawImage(e, 0, 0, s, h);
        const n = a == null ? void 0 : a.getImageData(0, 0, s, h).data;
        a == null || a.clearRect(0, 0, this.width, this.height);
        for (let c = 0; c < h; c += 5)
          for (let o = 0; o < s; o += 5) {
            const d = (o + c * s) * 4, g = n[d + 3];
            if (g == 0)
              continue;
            const p = n[d], v = n[d + 1], y = n[d + 2];
            if (p + v + y + g) {
              const P = new w(this.width, this.height, o, c, _, this.radius, `rgba(${p},${v},${y},${g})`);
              this.particleData.push(P);
            }
          }
        t(this.particleData);
      }, e.onerror = () => {
        r("图片转化成粒子失败");
      };
    });
  }
}
const L = ["width", "height"], f = /* @__PURE__ */ D({
  __name: "index",
  props: R,
  setup(u, { expose: i }) {
    const t = u;
    let r = X("scaleX", m(1)), e = X("scaleY", m(1));
    const l = m(null), a = m(null);
    let s = m(), h = m();
    const n = async (o) => {
      h.value = new x(o, t.width, t.height, t.radius), await h.value.createParticleData(), s.value.changeImg(h.value);
    }, c = async () => {
      h.value = new x(t.src, t.width, t.height, t.radius), await h.value.createParticleData(), l.value && (a.value = l.value.getContext("2d"), s.value = new b(l.value, t.radius, t.strength), l.value.addEventListener("mousemove", (o) => {
        const { left: d, top: g } = l.value.getBoundingClientRect(), { clientX: p, clientY: v } = o;
        s.value.mouseX = (p - d) * (1 / r.value), s.value.mouseY = (v - g) * (1 / e.value);
      }), s.value.drawCanvas(), s.value.changeImg(h.value));
    };
    return I(() => {
      c();
    }), i({
      toggleImg: n
    }), (o, d) => (A(), C("div", null, [
      M("canvas", {
        ref_key: "canvasRef",
        ref: l,
        width: t.width,
        height: t.height
      }, null, 8, L)
    ]));
  }
});
f.install = function(u) {
  u.component("FDynamicParticle", f);
};
const q = {
  title: "particle 粒子动效",
  name: "particle",
  category: "canvas动效",
  status: "20%",
  install(u) {
    u.use(f);
  }
};
export {
  f as DynamicParticle,
  q as default
};
