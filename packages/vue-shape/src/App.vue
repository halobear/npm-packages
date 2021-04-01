<template>
  <h2>
    <span>素材形状编辑组件测试</span>
    <small>（vue3 & vite）</small>
  </h2>
  <div>{{ state }}</div>
  <shape
    :x="state.x"
    :y="state.y"
    :w="state.w"
    :h="state.h"
    :r="state.r"
    @change="state = $event"
  >
    <!-- <div class="card">这里是内容</div> -->
    <img
      class="card"
      src="https://www.luzhongkuan.cn/static/temp/0b97b79a76eb5d3e29582778ab2ea0bc.jpeg"
      @dragstart.prevent
    />
  </shape>
</template>

<script>
import { ref } from "vue";
import shape from "./shape/index.js";

export default {
  components: {
    shape,
  },
  setup() {
    const state = ref({
      x: 300, // x方向定位
      y: 300, // y方向定位
      w: 210, // 宽度
      h: 250, // 高度
      r: 30, // 旋转角度
    });
    return {
      state,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      45deg,
      #e1deb0 25%,
      transparent 25%,
      transparent 75%,
      #e1deb0 75%,
      #e1deb0
    ),
    linear-gradient(
      45deg,
      #e1deb0 26%,
      transparent 26%,
      transparent 74%,
      #e1deb0 74%,
      #e1deb0
    );
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  width: 100%;
  height: 100%;
}
</style>