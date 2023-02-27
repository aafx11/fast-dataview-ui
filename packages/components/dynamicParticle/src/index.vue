<template>
  <div>
    <canvas ref="canvasRef" :width="props.width" :height="props.height"></canvas>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, onMounted, inject } from 'vue';
import { dynamicParticleProps } from './props';
import { ParticleCanvas } from './particleCanvas';
import { Img } from './img';
let scaleX = inject('scaleX', ref(1));
let scaleY = inject('scaleY', ref(1));

const props = defineProps(dynamicParticleProps);

const canvasRef = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);

// 画布实体对象
let particleCanvas = ref<ParticleCanvas>();

let img = ref<Img>();

// 切换图片，生成新粒子
const toggleImg = async (src: string) => {
  img.value = new Img(src, props.width, props.height, props.radius);
  await img.value.createParticleData();
  particleCanvas.value!.changeImg(img.value!);
};

const init = async () => {
  img.value = new Img(props.src!, props.width, props.height, props.radius);
  await img.value.createParticleData();

  if (canvasRef.value) {
    context.value = canvasRef.value.getContext('2d');
    particleCanvas.value = new ParticleCanvas(canvasRef.value, props.radius, props.strength);

    canvasRef.value!.addEventListener('mousemove', (e) => {
      // 元素距离视图窗口左侧和顶部的距离
      const { left, top } = canvasRef.value!.getBoundingClientRect();
      // 鼠标距离视图窗口的水平坐标和垂直坐标
      const { clientX, clientY } = e;
      // 计算鼠标在画布中的坐标
      particleCanvas.value!.mouseX = (clientX - left) * (1 / scaleX.value);
      particleCanvas.value!.mouseY = (clientY - top) * (1 / scaleY.value);
    });

    particleCanvas.value!.drawCanvas();
    particleCanvas.value!.changeImg(img.value!);
  }
};

onMounted(() => {
  init();
});

defineExpose({
  toggleImg
});
</script>