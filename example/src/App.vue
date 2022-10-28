<script setup lang="ts">
import { onMounted, ref,reactive } from 'vue'
import VueWaterMark from './components/waterMark.vue'
import WaterMark from '../../src/index'
const imgRef = ref()
const style = reactive({
  fontSize:12
})

let waterMark={};
onMounted(() => {
   waterMark =new WaterMark({
  el: imgRef.value,
  text: 'AntzyMo',
  fontSize:style.fontSize
})

  waterMark.render()
})

const changeFontSize = (value:number) => {
   console.log(value,'value');

   console.log('waterMark', waterMark);
   waterMark.render()
}
</script>

<template>
  <div class="container">
    <div class="title-box">
      <h2>水印</h2>
    </div>
    <div  class="canvasBox">
      <!-- <VueWaterMark  text="AntzyMo"> -->
        <img ref="imgRef" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F11%2F20200411094551_ertqz.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669521856&t=e64c1cafe00e9c27a0bc303953ac8890"/>
      <!-- </VueWaterMark> -->
    </div>
    <div class="options-box">
      <div class="item-box">
        <div class="label">文字大小</div>
        <el-input-number  class="elInput" v-model="style.fontSize" @change="changeFontSize"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
 
  .title-box {
    margin-bottom: 60px;
  }

  .canvasBox {
    width: 600px;
    height: 400px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    img{
      width: 80%;
      height: 80%;
    }
  }

  .options-box{
    display: flex;
    width: 600px;

    .item-box{
      display: flex;
      height: 30px;
      align-items: center;
      .label{
        width: 73px;
      }

      .elInput{
        width: 100px;
      }
    }
  }
}

</style>
