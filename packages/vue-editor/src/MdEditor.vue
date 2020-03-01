<template>
  <div class="md-outer">
    <div class="md-action">
      <div>
        <span class="balloon" data-balloon="切换预览">
          <i @click="visible = !visible" class="icon-eye iconfont"></i>
        </span>
        <span class="balloon" data-balloon="复制html">
          <i @click="copy" class="icon-file-copy iconfont"></i>
        </span>
      </div>
      <div v-if="multiple">
        <span class="balloon" data-balloon="切换编辑器">
          <i @click="$emit('update:type', 'word')" class="icon-file-markdown iconfont"></i>
        </span>
      </div>
    </div>
    <div class="md-frame">
      <textarea v-show="visible" :value="value" @input="change" ref="editor" class="editor"></textarea>
      <div ref="preview" class="preview md-body" v-html="transfer"></div>
    </div>
  </div>
</template>

<script>
import MarkdowIt from "markdown-it";
import hljs from "highlight.js";

import SyncScroll from "./utils/SyncScroll";
import copy from "./utils/copy";

import "./style/index.less";

export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    sync: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      v: this.value,
      transfer: "",
      visible: true
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
      this.$emit("input", value);
    },
    copy() {
      copy(this.transfer);
      this.$emit("copy", this.transfer);
      alert("复制HTML成功");
    }
  }
};
</script> 

<style lang="less" scoped>
@import "./style/mixins.less";

.md-outer {
  height: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
}
.md-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  background-color: #fff;
  padding: 0 6px;
  .balloon {
    .balloon(top);
  }
  .iconfont {
    cursor: pointer;
    margin: 0 4px;
  }
}
.md-frame {
  background-color: #e7e7ef;
  padding: 6px 4px;
  min-height: 400px;
  height: calc(100% - 30px);
  display: flex;
  font-size: 14px;
  line-height: 1.3;
  box-sizing: border-box;
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