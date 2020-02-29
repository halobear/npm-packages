<template>
  <div class="editor-frame">
    <textarea ref="editor" class="editor" :value="value" @input="change"></textarea>
    <div ref="preview" class="preview md-body" v-html="transfer"></div>
  </div>
</template>

<script>
import MarkdowIt from "markdown-it";
import hljs from "highlight.js";

import SyncScroll from "./utils/SyncScroll";

import "./style/index.less";

export default {
  model: {
    event: "change"
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    sync: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      v: this.value,
      transfer: ""
    };
  },
  watch: {
    value() {
      this.v = this.value;
      this.transferValue();
    }
  },
  mounted() {
    if (this.sync) {
      const { editor, preview } = this.$refs;
      this.syncScroll = new SyncScroll(editor, preview);
    }
    this.init();
    this.transferValue();
  },
  beforeDestroy() {
    if (this.syncScroll) {
      this.syncScroll.destroy();
    }
  },
  methods: {
    init() {
      this.md = new MarkdowIt({
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs"><code>${
                hljs.highlight(lang, str, true).value
              }</code></pre>`;
            } catch (e) {
              console.error("highlight.js:", e);
            }
          }
          return ""; // use external default escaping
        }
      });
    },
    transferValue() {
      if (!this.md) return;
      this.transfer = this.md.render(this.value);
    },
    change(e) {
      const { value } = e.target;
      this.v = value;
      this.$emit("change", value);
    }
  }
};
</script> 

<style lang="less" scoped>
.editor-frame {
  border: 1px solid #dbdbdb;
  background-color: #e7e7ef;
  padding: 5px;
  min-height: 300px;
  height: 600px;
  display: flex;
  font-size: 14px;
  line-height: 1.3;
  border-radius: 3px;
}
.editor {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  resize: none;
  outline: none;
  font-size: 14px;
  line-height: 1.3;
  background-color: #fff;
  margin-right: 1px;
}
.preview {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}
.editor,
.preview {
  &::-webkit-scrollbar {
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    background: #efefef;
    &:hover {
      background: #e5e5e5;
    }
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}
</style>