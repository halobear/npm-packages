## @luzhongk/vue-dialog

> 一个简单 vue 弹窗

## 安装

```bash
yarn add @luzhongk/vue-dialog
```

## 使用

```js
import VueDialog from '@luzhongk/vue-dialog'

export default {
  components: {
    VueDialog
  },
  data() {
    return {
      visible: false
    }
  }
}
```

```html
<div>
  <vue-dialog v-model="visible" />
</div>
```

## [示例](./demo)
