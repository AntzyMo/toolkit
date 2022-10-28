<script setup lang="ts">
import { onMounted,useSlots } from 'vue';
interface props{
  text:string|number
}
const slots = useSlots()
console.log('slots', slots.default());
const porps=defineProps<props>()


  const createCanvas = (options: watermarkType) => {
  const { text, fontSize } = options

  const canvasEl = document.createElement('canvas')
  // 设置生成单个水印画布的大小
  canvasEl.width = 200
  canvasEl.height = 200

  const ctx = canvasEl.getContext('2d')!
  ctx.rotate((-15 * Math.PI) / 180) // 旋转角度
  ctx.font = `${fontSize}px normal`
  ctx.fillStyle = 'red'

  // 文字显示的坐标
  ctx.fillText(text, canvasEl.width / 100, canvasEl.height / 2)
  return canvasEl.toDataURL('image/png')
}
onMounted(()=>{
  createCanvas()
})

</script>

<template>
  <slot />
  <div class="water-mark" ></div>
</template>

<style lang="scss" scoped>
.water-mark {
  display: inline-block;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>