## @luzhongk/vue-shape

> 编辑素材形状尺寸

## 安装

```bash
yarn add @luzhongk/vue-shape
```

## 使用

```html
<template>
  <div class="test-container">
    <h2 class="title">@luzhongk/vue-shape</h2>
    <div class="shape-outer">
      <vue-shape
        :x="data.x"
        :y="data.y"
        :w="data.w"
        :h="data.h"
        @change="data = $event"
      />
    </div>
    {{ data }}
  </div>
</template>

<script>
  import VueShape from "@luzhongk/vue-shape";

  export default {
    components: {
      VueShape
    },
    data() {
      return {
        data: {
          x: 0,
          y: 0,
          w: 100,
          h: 200
        }
      };
    }
  };
</script>

<style lang="less" scoped>
  .shape-outer {
    position: relative;
    background: #eee;
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }
</style>
```

## [示例](./demo)
