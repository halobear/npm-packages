## @halobear/vue-region

> vue 中国城市选择

## 安装

```bash
yarn add @halobear/vue-region
```

## 使用

```html
<template>
  <div class="test-container">
    <vue-region v-model="region" @change="change" :level="2"></vue-region>
    <p>{{ region_name }}: {{ region.join("、") }}</p>
  </div>
</template>

<script>
  import VueRegion from "@halobear/vue-region";

  export default {
    components: {
      VueRegion
    },
    data() {
      return {
        region: ["0"],
        region_name: "全国"
      };
    },
    methods: {
      change(value, name) {
        this.region_name = name;
      }
    }
  };
</script>
```

## [示例](./demo)
