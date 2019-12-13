<template>
  <div @click="handleClick" class="image-card">
    <img class="origin-img animated fadeIn" v-if="data.url" :src="data.url" />
    <div class="action-box">
      <i @click.stop="preview" class="iconfont icon-eye"></i>
      <i @click="$emit('remove')" class="iconfont icon-delete"></i>
    </div>
  </div>
</template>

<script>
import photoSwipe from "kuan-vue-photoswipe";

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", this.data);
    },
    preview() {
      const { url = "" } = this.data;
      if (url) {
        photoSwipe.preview(url.replace(/-300x300/, "-w750"));
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";

.image-card {
  width: @outer-width;
  height: @outer-width;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin-right: 8px;
  position: relative;
  &:hover {
    .action-box {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
    }
  }
}
.origin-img {
  width: @inner-width;
  height: @inner-width;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.action-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: @inner-width;
  height: @inner-width;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  visibility: hidden;
  opacity: 0;
  .iconfont {
    padding: 0 5px;
    cursor: pointer;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}
</style>
