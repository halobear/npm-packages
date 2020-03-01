## @halobear/vue-editor

## [示例](https://halobear.github.io/npm-packages/vue-editor/demo.html)

## 安装

```bash
yarn add @halobear/vue-editor
```

## 使用

```html
<template>
  <div class="test-container">
    <h2 class="title">富文本编辑器</h2>
    <vue-editor
      class="editor-content"
      type="word"
      v-model="text"
      :inset-image="insetImage"
    ></vue-editor>
    <h2 class="title">markdown编辑器</h2>
    <vue-editor
      class="editor-content"
      type="markdown"
      v-model="text"
    ></vue-editor>
  </div>
</template>

<script>
  import VueEditor from '../index.vue'

  export default {
    components: {
      VueEditor
    }
  }
</script>
```

## 使用了以下开源代码

- [vue-markdown](https://github.com/miaolz123/vue-markdown)
- [Squire](https://github.com/neilj/Squire)
