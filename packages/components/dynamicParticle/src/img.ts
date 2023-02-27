import { Particle } from './particle';
import { unref, toRaw } from 'vue';
// 设置粒子动画时长
const animateTime = 30;

// 图片类，用于将图片转换成粒子
export class Img {
  src: string; // 图片地址
  // name?: string; // 图片名称
  width: number; // 画布宽度
  height: number; // 画布高度
  particleData: Particle[]; // 用于保存筛选后的粒子
  radius: number; // 粒子的半径
  // particleColors: string; // 粒子的颜色
  constructor(src: string, width: number, height: number, radius: number) {  
    this.src = src;
    this.width = width;
    this.height = height;
    this.particleData = [];
    this.radius = radius;
    // this.particleColors = particleColors

    // let img = new Image();
    // img.crossOrigin = "";
    // img.src = decodeURI(new URL(src, import.meta.url).href);

    // // 生成粒子
    // img.onload = () => {
    //   const temp_canvas = document.createElement("canvas");
    //   const temp_ctx = temp_canvas.getContext("2d");

    //   /*    const imgHWidth = this.width;
    //         const imgHeight = ~~(this.width * (img.height / img.width));
    //         const imgHeight = this.height;
    //         console.log('imgHWidth', imgHWidth);
    //         console.log('imgHeight', imgHeight);
      
    //         temp_canvas.width = imgHWidth;
    //         temp_canvas.height = imgHeight; */
    //   console.log('宽高', this.width, '/', this.height);

    //   const imgHWidth = this.width;
    //   const imgHeight = this.height;
    //   temp_canvas.width = imgHWidth;
    //   temp_canvas.height = imgHeight;

    //   // 在canvas中绘制图片
    //   temp_ctx?.drawImage(img, 0, 0, imgHWidth, imgHeight);

    //   // 获取像素点
    //   const pixelData = temp_ctx?.getImageData(0, 0, imgHWidth, imgHeight).data;

    //   temp_ctx?.clearRect(0, 0, this.width, this.height);

    //   // 筛选像素点
    //   for (let y = 0; y < imgHeight; y += 5) {
    //     for (let x = 0; x < imgHWidth; x += 5) {
    //       // 像素点的序号
    //       const index = (x + y * imgHWidth) * 4;

    //       const a = pixelData![index + 3];

    //       if (a == 0) {
    //         continue;
    //       }

    //       // 在数组中对应的值
    //       const r = pixelData![index];
    //       const g = pixelData![index + 1];
    //       const b = pixelData![index + 2];
    //       const sum = r + g + b + a;

    //       // 筛选条件
    //       if (sum) {
    //         const particle = new Particle(this.width, this.height, x, y, animateTime, this.radius, `rgba(${r},${g},${b},${a})`);
    //         // const particle = new Particle(this.width, this.height, x, y, animateTime, this.radius, 'gold');
    //         this.particleData.push(particle);
    //       }
    //     }
    //   }
    // };
  }
  createParticleData(src = this.src) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = "";
      img.src = decodeURI(new URL(src, import.meta.url).href);
      img.onload = () => {
        const temp_canvas = document.createElement("canvas");
        const temp_ctx = temp_canvas.getContext("2d");

        const imgHWidth = this.width;
        const imgHeight = this.height;
        temp_canvas.width = imgHWidth;
        temp_canvas.height = imgHeight;

        // 在canvas中绘制图片
        temp_ctx?.drawImage(img, 0, 0, imgHWidth, imgHeight);
        // 获取像素点
        const pixelData = temp_ctx?.getImageData(0, 0, imgHWidth, imgHeight).data;

        temp_ctx?.clearRect(0, 0, this.width, this.height);

        // 筛选像素点
        for (let y = 0; y < imgHeight; y += 5) {
          for (let x = 0; x < imgHWidth; x += 5) {
            // 像素点的序号
            const index = (x + y * imgHWidth) * 4;

            const a = pixelData![index + 3];

            if (a == 0) {
              continue;
            }

            // 在数组中对应的值
            const r = pixelData![index];
            const g = pixelData![index + 1];
            const b = pixelData![index + 2];
            const sum = r + g + b + a;

            // 筛选条件
            if (sum) {
              const particle = new Particle(this.width, this.height, x, y, animateTime, this.radius, `rgba(${r},${g},${b},${a})`);
              // const particle = new Particle(this.width, this.height, x, y, animateTime, this.radius, 'gold');
              this.particleData.push(particle);
            }
          }
        }

        resolve(this.particleData);
      };
      img.onerror = () => {
        reject('图片转化成粒子失败');
      };
    });
  }
}