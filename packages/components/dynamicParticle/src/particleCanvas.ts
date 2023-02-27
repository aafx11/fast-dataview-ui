import { Particle } from './particle';
import { Img } from './img';

// 设置粒子动画时长
const animateTime = 30;

// 画布类 
export class ParticleCanvas {
  canvasEle: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number; // 画布宽度
  height: number; // 画布高度
  particleArr: Particle[]; // 粒子数组
  radius: number; // 粒子的半径
  strength: number; // 吸引和排斥的力度
  mouseX?: number; // 鼠标X轴位置
  mouseY?: number; // 鼠标Y轴位置
  requestID?: number; // 动画的id，用于停止动画
  constructor(target: HTMLCanvasElement, radius: number, strength: number) {
    this.radius = radius;
    this.strength = strength;
    this.canvasEle = target;
    this.ctx = target.getContext("2d") as CanvasRenderingContext2D;
    this.width = target.width;
    this.height = target.height;
    this.particleArr = [];
    // 监听鼠标进入
    // this.canvasEle.onmouseenter = () => {
    //   console.log('监听鼠标进入开始动画');
    //   this.drawCanvas();
    // };
    // 监听鼠标离开
    this.canvasEle.onmouseleave = () => {
      this.mouseX = 0;
      this.mouseY = 0;
      // if (this.requestID) {
      //   console.log('监听鼠标离开取消动画');
      //   window.cancelAnimationFrame(this.requestID);
      // }
    };
  }
  // 修改图片，复用粒子
  changeImg(img: Img) {
    // 旧粒子数组有长度
    if (this.particleArr.length) {
      // 新旧数组粒子
      let newParticleArr = img.particleData;
      let newLen = newParticleArr.length;
      let oldParticleArr = this.particleArr;
      let oldLen = oldParticleArr.length;

      // 修改旧粒子到新坐标
      for (let i = 0; i < newLen; i++) {
        const { targetX, targetY, colors } = newParticleArr[i];
        if (oldParticleArr[i]) {
          // 旧数组已存在该粒子，只需要修改粒子的坐标和颜色
          oldParticleArr[i].change(targetX, targetY, colors);
        } else {
          // 新数组的长度大于旧数组，需要在新建
          oldParticleArr[i] = new Particle(this.width, this.height, targetX, targetY, animateTime, this.radius, colors);
        }
      }

      // 新数组比旧数组长度小，删除多余的粒子
      if (newLen < oldLen) {
        // 截取新数组的长度
        this.particleArr = oldParticleArr.splice(0, newLen);
      }
      oldParticleArr = this.particleArr;
      let temp_oldLen = oldParticleArr.length;

      // 打乱粒子的位置，实现切换效果
      while (temp_oldLen) {
        // 获取随机一个粒子
        let randomIndex = ~~(Math.random() * temp_oldLen--);
        let randomParticle = oldParticleArr[randomIndex];
        let { targetX, targetY, colors } = randomParticle;

        // 随机粒子与最后一个粒子调换位置和颜色
        randomParticle.targetX = oldParticleArr[temp_oldLen].targetX;
        randomParticle.targetY = oldParticleArr[temp_oldLen].targetY;
        randomParticle.colors = oldParticleArr[temp_oldLen].colors;
        oldParticleArr[temp_oldLen].targetX = targetX;
        oldParticleArr[temp_oldLen].targetY = targetY;
        oldParticleArr[temp_oldLen].colors = colors;
      }
    } else {
      // 旧粒子数组没有长度，新建粒子数组
      this.particleArr = img.particleData.map(item => {
        return new Particle(this.width, this.height, item.targetX, item.targetY, animateTime, this.radius, item.colors);
      });
    }
  }

  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particleArr.forEach(particle => {
      particle.update(30, this.strength, this.mouseX, this.mouseY);
      particle.draw(this.ctx);
    });
    this.requestID = window.requestAnimationFrame(() => this.drawCanvas());
  }
}