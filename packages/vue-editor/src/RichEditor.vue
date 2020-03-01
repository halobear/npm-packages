<template>
  <div class="rich-outer">
    <div class="rich-action">
      <div>
        <span @click="makeHeader('h1')" class="icon-h1 iconfont"></span>
        <span @click="makeHeader('h2')" class="icon-h2 iconfont"></span>
        <span @click="makeHeader('h3')" class="icon-h3 iconfont"></span>
        <span @click="edit('bold')" class="icon-bold iconfont"></span>
        <span @click="edit('italic')" class="icon-italic iconfont"></span>
        <span @click="edit('underline')" class="icon-wuxuliebiao iconfont"></span>
        <span @click="edit('makeOrderedList')" class="icon-underline iconfont"></span>
        <span @click="edit('setTextAlignment', 'left')" class="icon-align-left iconfont"></span>
        <span @click="edit('setTextAlignment', 'center')" class="icon-align-center iconfont"></span>
        <span @click="edit('setTextAlignment', 'right')" class="icon-align-right iconfont"></span>
        <span v-if="insetImage" @click="insetImg" class="balloon" data-balloon="上传图片">
          <i class="icon-file-image iconfont"></i>
        </span>
        <span @click="edit('undo')" class="icon-undo iconfont"></span>
        <span @click="edit('redo')" class="icon-redo iconfont"></span>
        <span style="padding-left: 10px;" @click="clear" class="balloon" data-balloon="清空内容">
          <i class="icon-clear iconfont"></i>
        </span>
        <span @click="changePreview" class="balloon" data-balloon="切换预览">
          <i class="icon-eye iconfont"></i>
        </span>
        <span @click="copy" class="balloon" data-balloon="复制html">
          <i class="icon-file-copy iconfont"></i>
        </span>
      </div>
      <div v-if="multiple">
        <span class="balloon" data-balloon="切换编辑器">
          <i @click="$emit('update:type', 'markdown')" class="icon-file-markdown iconfont"></i>
        </span>
      </div>
    </div>
    <div class="editor-outer">
      <div v-show="!html" ref="editor" class="rich-editor"></div>
      <div v-show="html" class="rich-editor">{{html}}</div>
    </div>
  </div>
</template>

<script>
import Squire from "./utils/Squire";
import copy from "./utils/copy";

const events = ["input", "focus", "blur"];

Squire.prototype.makeHeader = function(h) {
  return this.modifyBlocks(function(frag) {
    var output = this._doc.createDocumentFragment();
    var block = frag;
    console.log(frag);
    while ((block = Squire.getNextBlock(block))) {
      output.appendChild(this.createElement(h, [Squire.empty(block)]));
    }
    return output;
  });
};

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
  data() {
    return {
      html: "",
      icons: [{}]
    };
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
    },
    change() {
      this.$emit("input", this.editor.getHTML());
    },
    clear() {
      this.editor.setHTML("");
      this.change();
    },
    copy() {
      copy(this.editor.getHTML());
      alert("复制HTML成功");
    },
    changePreview() {
      this.html = this.html ? "" : this.editor.getHTML();
    },
    edit(event, value) {
      if (this.editor) {
        this.editor[event](value);
      }
    },
    makeHeader(h) {
      if (this.editor) {
        this.editor.makeHeader(h);
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
  color: #333;
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
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>