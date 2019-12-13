<template>
  <div class="upload-card">
    <i class="icon-cloud-upload iconfont"></i>
    <span>点击上传</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.upload-card {
  width: @outer-width;
  height: @outer-width;
  border-radius: 3px;
  border: 1px dotted #dbdbdb;
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
  &:hover {
    border-color: #1890ff;
    .iconfont {
      color: #1890ff;
    }
  }
  .iconfont {
    font-size: 30px;
    transition: color 1s;
    opacity: 0.8s;
  }
}
</style>
