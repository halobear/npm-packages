<template>
  <div class="rich-outer">
    <div class="md-action">
      <div>
        <span class="balloon" data-balloon="切换预览">
          <i class="icon-eye iconfont"></i>
        </span>
        <span class="balloon" data-balloon="复制html">
          <i class="icon-file-copy iconfont"></i>
        </span>
      </div>
      <div v-if="multiple">
        <span class="balloon" data-balloon="切换编辑器">
          <i @click="$emit('update:type', 'word')" class="icon-file-markdown iconfont"></i>
        </span>
      </div>
    </div>
    <div class="rich-editor"></div>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.rich-outer {
  height: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  padding: 5px;
  box-sizing: border-box;
}
.rich-editor {
  min-height: 400px;
  height: calc(100% - 30px);
}
</style>