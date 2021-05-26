## @halobear/vue-shape

> 编辑素材形状尺寸 vue3.0 组件（vue2.0 请使用 @halobear/vue-shape@1.1.1）

## Gif

![demo gif 效果](https://github.com/halobear/npm-packages/raw/dev/packages/vue-shape/preview.gif)

## Install

```bash
yarn add @halobear/vue-shape
```

## Usage

```vue
<template>
  <div>{{ state }}</div>
  <shape :x="state.x" :y="state.y" :w="state.w" :h="state.h" :r="state.r" @change="state = $event">
    <!-- <div class="card">这里是内容</div> -->
    <img
      class="card"
      src="https://www.luzhongkuan.cn/static/temp/0b97b79a76eb5d3e29582778ab2ea0bc.jpeg"
      @dragstart.prevent
    />
  </shape>
</template>

<script>
import { ref } from 'vue'
import shape from '@halobear/vue-shape'
import '@halobear/vue-shape/lib/style.css'

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
    })
    return {
      state,
    }
  },
}
</script>
```
