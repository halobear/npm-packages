## @halobear/vue-drawer

> 一个 vue 的抽屉组件

## 安装

```bash
yarn add @halobear/vue-drawer
```

## 使用

```html
<template>
  <div>
    <vue-drawer
      v-model="active"
      :data="data"
      :visible.sync="visible"
      @click="handleClick"
    >
      <template #title>
        <h1 class="title">
          <a href="https://www.luzhongkuan.cn/">Kuan's Blog</a>
        </h1>
      </template>
    </vue-drawer>
    <div style="padding-top: 50px;text-align: center">{{visible}}</div>
  </div>
</template>

<script>
  import { VueDrawer } from "@packages/vue/index";

  export default {
    components: {
      VueDrawer
    },
    data() {
      return {
        data: [
          { name: "首页", to: { path: "/aaa" } },
          { name: "百度一下" },
          { name: "百度二下" },
          { name: "百度三下" },
          {
            name: "资源列表",
            children: [
              { name: "首页二", to: { path: "/bbb" } },
              { name: "百度四下" },
              { name: "百度五下" }
            ]
          },
          { name: "首页三", to: { path: "/ccc" } },
          { name: "百度六下" },
          { name: "百度七下" },
          { name: "百度八下" }
        ],
        visible: false,
        active: "百度一下1"
      };
    },
    methods: {
      handleClick(name) {
        this.visible = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .title {
    font-size: 16px;
  }
</style>
```

## [示例](./demo)
