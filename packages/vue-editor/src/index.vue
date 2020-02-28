<template>
  <div class="editor-frame">
    <textarea ref="editor" class="editor" :value="value" @input="$emit('input', value)"></textarea>
    <div ref="preview" class="preview">{{value}}{{value}}</div>
  </div>
</template>

<script>
import MarkdowIt from "markdown-it";

import SyncScroll from "./utils/SyncScroll";

export default {
  model: {
    event: "change"
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      v: this.value
    };
  },
  watch: {
    value() {
      this.v = this.value;
    }
  },
  mounted() {
    this.init();
    const { editor, preview } = this.$refs;
    console.log(editor, preview);
    this.syncScroll = new SyncScroll(editor, preview);
  },
  methods: {
    init() {
      this.md = new MarkdowIt();
    },
    html() {
      if (!this.md) return "";
      return this.md.render(this.sourceData);
    },
    change(value) {
      this.v = this.value;
      this.$emit("change", value);
    }
  }
};
</script> 

<style lang="less" scoped>
.editor-frame {
  background-color: #eae9ea;
  padding: 10px;
  min-height: 300px;
  height: 500px;
  display: flex;
  font-size: 14px;
  line-height: 1.3;
}
.editor {
  flex: 1;
  padding: 12px;
  box-sizing: border-box;
  margin-right: 5px;
  border: none;
  resize: none;
}
.preview {
  flex: 1;
  background-color: #fff;
  padding: 12px;
  margin-left: 5px;
  overflow: auto;
}
</style>