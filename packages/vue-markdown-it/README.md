## @halobear/@halobear/vue-markdown-it

## 安装

```bash
yarn add @halobear/vue-markdown-it
```

## 使用

```html
<template>
  <div class="test-container">
    <h2 class="title">markdown编辑器</h2>
    <markdown-editor class="editor-content" type="markdown" v-model="text"></markdown-editor>
  </div>
</template>

<script>
  import markdownEditor from '@halobear/vue-markdown-it'
  import text from './text'

  export default {
    components: {
      markdownEditor,
    },
    data() {
      return {
        text,
      }
    },
    methods: {},
  }
</script>
```
