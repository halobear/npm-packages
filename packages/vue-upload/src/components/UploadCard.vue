<template>
  <div
    @click="$emit('click')"
    @drop.prevent="$emit('drop', $event)"
    @dragover.prevent="$emit('dragover')"
    @dragleave.prevent="$emit('dragleave')"
    class="upload-card"
  >
    <i class="icon-plus iconfont"></i>
    <span>点击上传</span>
    <div
      v-if="progress && progress !== 100"
      :style="{ width: `${progress}%` }"
      class="upload-progress"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.upload-card {
  width: @outer-width;
  height: @outer-width;
  border-radius: 3px;
  border: 1px dashed #dbdbdb;
  box-sizing: border-box;
  position: relative;
  transition: border-color 0.3s;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  cursor: pointer;
  &:hover,
  &.is-over {
    border-color: #1890ff;
    color: #1890ff;
    transition: 0.3s;
    .iconfont {
      color: #1890ff;
    }
  }
  .iconfont {
    font-size: 24px;
    transition: color 1s;
    opacity: 0.8;
    padding-bottom: 5px;
  }
  .upload-progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 2px;
    background-color: #1890ff;
    transition: width 0.1s;
  }
}
</style>
