## @halobear/vue-dialog

> 一个简单 vue 弹窗

## 安装

```bash
yarn add @halobear/vue-dialog
```

## 使用

```js
import VueDialog from "@halobear/vue-dialog";

export default {
  components: {
    VueDialog
  },
  data() {
    return {
      visible: false
    };
  }
};
```

```html
<div>
  <vue-dialog v-model="visible" />
</div>
```

## [示例](https://www.kuan1.top/luzhongk/vue-dialog/demo.html)
