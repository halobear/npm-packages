<template>
  <div class="rich-outer">
    <div class="rich-action">
      <div>
        <span @click="insetImg" class="balloon" data-balloon="上传图片">
          <i class="icon-file-image iconfont"></i>
        </span>
        <span class="balloon" data-balloon="复制html">
          <i class="icon-file-copy iconfont"></i>
        </span>
        <span class="balloon" data-balloon="切换预览">
          <i class="icon-eye iconfont"></i>
        </span>
      </div>
      <div v-if="multiple">
        <span class="balloon" data-balloon="切换编辑器">
          <i @click="$emit('update:type', 'markdown')" class="icon-file-markdown iconfont"></i>
        </span>
      </div>
    </div>
    <div class="editor-outer">
      <div ref="editor" class="rich-editor"></div>
    </div>
  </div>
</template>

<script>
import Squire from "./utils/Squire";

const events = ["input", "focus", "blur"];

export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: true
    },
    insetImage: {
      type: Function
    }
  },
  mounted() {
    const { editor } = this.$refs;
    this.editor = new Squire(editor);
    this.editor.setHTML(this.value);
    events.forEach(event => {
      this.editor.addEventListener(event, () =>
        this.$emit(event, this.editor.getHTML())
      );
    });
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  },
  methods: {
    async insetImg() {
      if (!this.insetImage) return;
      const [src = "", options = {}] = (await this.insetImage()) || [];
      if (src) {
        this.editor.insertImage(src, options);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style/mixins.less";

.rich-outer {
  height: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
}
.editor-outer {
  min-height: 400px;
  box-sizing: border-box;
  padding: 6px 4px;
  height: calc(100% - 30px);
  background-color: #e7e7ef;
  color: #2b2b2b;
}
.rich-editor {
  outline: none;
  background-color: white;
  height: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  overflow: auto;
}
.rich-action {
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
</style>