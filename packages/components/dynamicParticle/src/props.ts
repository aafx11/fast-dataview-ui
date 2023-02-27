export const dynamicParticleProps = {
  width: { type: Number, default: 400 }, // 画布宽度
  height: { type: Number, default: 400 }, // 画布高度
  radius: { type: Number, default: 1.2 }, // 粒子半径
  strength: { type: Number, default: 2 }, // 吸引和排斥的力度
  // particleColors: { type: String, default: 'rgba(255, 255, 255, 1)' }, // 粒子颜色
  src: { type: String }, // 图片url
}