## @halobear/layout-header

> vue 运营管理后台通用头部

## 安装

```bash
yarn add @halobear/layout-header
```

## 使用

```html
<template>
  <div class="layout-wrapper">
    <layout-header v-model="menus" @change="onChange"></layout-header>
  </div>
</template>

<script>
  import LayoutHeader from '@halobear/layout-header'

  export default {
    components: {
      LayoutHeader
    },
    data() {
      return {
        menus: ['licheng', 'four']
      }
    },
    methods: {
      onChange() {
        console.log(this.menus, 'menus')
      }
    }
  }
</script>

<style lang="less" scoped></style>
```

## [示例](./demo)
