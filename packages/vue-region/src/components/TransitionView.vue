<template>
  <div
    @transitionend="transitionend"
    ref="container"
    class="transition-container"
  >
    <div v-if="visible" @click="$emit('toggle')" class="close-bg"></div>
    <div class="transition-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import getEleSize from "../utils/getEleSize.js";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(visible) {
      if (visible) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted() {
    this.transitionend();
  },
  methods: {
    hide() {
      if (this.visible) return;
      const { container } = this.$refs;
      container.style.display = "block";
      const { height } = getEleSize(container);
      container.style.height = `${height}px`;
      setTimeout(() => {
        container.style.height = 0;
      });
    },
    show() {
      const { container } = this.$refs;
      container.style.height = "";
      const { height } = getEleSize(container);
      container.style.display = "block";
      container.style.height = 0;
      setTimeout(() => {
        container.style.height = `${height}px`;
      });
    },
    transitionend() {
      const { container } = this.$refs;
      container.style.display = this.visible ? "block" : "none";
      container.style.height = "";
    }
  }
};
</script>

<style lang="less">
.transition-container {
  overflow: hidden;
  position: relative;
  transition: height 0.2s;
}
</style>
