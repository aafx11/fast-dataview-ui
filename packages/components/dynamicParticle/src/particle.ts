// 设置粒子动画时长
const animateTime = 30;
const opacityStep = 1 / animateTime;

// 粒子类
export class Particle {
  x: number; // 粒子x轴的初始位置
  y: number; // 粒子y轴的初始位置
  targetX: number; // 粒子x轴的目标位置
  targetY: number; // 粒子y轴的目标位置
  distanceX?: number; // 粒子x轴需要移动的距离
  distanceY?: number; // 粒子y轴需要移动的距离
  velocityX?: number; // 粒子x轴移动的速度
  velocityY?: number; // 粒子y轴移动的速度
  time: number; // 粒子移动耗时
  radius: number; // 粒子的半径
  colors: string; // 粒子的颜色
  opacity: number; // 粒子的透明度
  constructor(width: number, height: number, targetX: number, targetY: number, time: number, radius: number, colors: string) {
    this.x = (Math.random() * width) >> 0;
    this.y = (Math.random() * height) >> 0;
    this.targetX = targetX;
    this.targetY = targetY;
    this.time = time;
    this.radius = radius;
    this.colors = colors;
    this.opacity = 0;
  }

  // 绘制粒子
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = `${this.colors}`;
    context.fillRect(this.x, this.y, this.radius * 2, this.radius * 2);
    context.fill();
  }

  /**
   * 根据鼠标与粒子的位置，更新粒子
   * @param {number} radius 鼠标影响的半径范围
   * @param {number} strength 吸引和排斥的力度
   * @param {number} mouseX 鼠标在X轴的位置
   * @param {number} mouseY 鼠标在Y轴的位置
   */
  update(radius: number, strength: number, mouseX?: number, mouseY?: number) {
    // 计算粒子需要移动的距离，目标位置 - 当前位置
    this.distanceX = this.targetX - this.x;
    this.distanceY = this.targetY - this.y;

    // 计算粒子的移动速度，所需移动距离 / 移动耗时
    this.velocityX = this.distanceX / this.time;
    this.velocityY = this.distanceY / this.time;

    // 计算粒子与鼠标的距离
    if (mouseX && mouseY) {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      // 直线距离
      let distance = Math.sqrt(dx ** 2 + dy ** 2);
      // 计算粒子相对于鼠标距离的比例(计算distance距离是多少个半径)，判断受到的力度比例
      let disPercent = radius / distance;
      // 设置阈值 避免粒子受到的斥力过大
      disPercent = disPercent > 7 ? 7 : disPercent;
      // 获得夹角值 正弦值 余弦值
      let angle = Math.atan2(dy, dx);
      let cos = Math.cos(angle);
      let sin = Math.sin(angle);
      // 在原有的速度上，加上力度（距离越远，力度越小,速度越小）
      let repX = cos * disPercent * -strength;
      let repY = sin * disPercent * -strength;
      this.velocityX += repX;
      this.velocityY += repY;
    }

    this.x += this.velocityX;
    this.y += this.velocityY;
    if (this.opacity < 1) this.opacity += opacityStep;
  }

  // 切换粒子
  change(x: number, y: number, colors: string) {
    this.targetX = x;
    this.targetY = y;
    this.colors = colors;
  }
}