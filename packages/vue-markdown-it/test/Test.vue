<template>
  <div class="test-container">
    <h2 class="title">markdown编辑器</h2>
    <markdown-editor class="editor-content" type="markdown" v-model="text"></markdown-editor>
  </div>
</template>

<script>
import markdownEditor from '../src/index.vue';
import text from './text';

export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      text
    };
  },
  methods: {}
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  background-color: #f8f8f8;
}
.title {
  margin: 20px 0;
}
.test-container {
  max-width: 1200px;
  margin: 30px auto;
}
.editor-content {
  max-width: 1200px;
  height: 500px;
}
</style>