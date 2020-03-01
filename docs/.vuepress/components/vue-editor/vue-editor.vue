<template>
  <div class="test-container">
    <h2 class="title">富文本编辑器</h2>
    <vue-editor class="editor-content" type="word" v-model="text" :inset-image="insetImage"></vue-editor>
    <h2 class="title">markdown编辑器</h2>
    <vue-editor class="editor-content" type="markdown" v-model="text"></vue-editor>
  </div>
</template>

<script>
import VueEditor from "@halobear/vue-editor";

import text from "./text.js";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.text = text;
    }, 1000);
  },
  methods: {
    insetImage() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            "http://pic.kuan1.top/2eb148653cc2130accb78e714999931d.png",
            {
              style: "width: 250px;margin: 20px"
            }
          ]);
        });
      });
    }
  }
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