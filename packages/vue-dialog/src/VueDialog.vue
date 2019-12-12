<template>
  <transition name="fade">
    <div v-if="visible" @click="close" :class="[direction]" class="my-dialog-container">
      <div @click.stop class="my-dialog-inner">
        <slot></slot>
      </div>
      <div></div>
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'close' // bottom top
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="less" scoped>
.my-dialog-container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  .my-dialog-inner {
    position: relative;
  }
  &.center {
    align-items: center;
    .my-dialog-inner {
      animation: fadeZoomIn 0.5s cubic-bezier(0.8, 0, 0, 1.5);
    }
  }
  &.top {
    align-items: flex-start;
    .my-dialog-inner {
      animation: slideInDown 0.3s linear;
    }
  }
  &.bottom {
    align-items: flex-end;
    .my-dialog-inner {
      animation: slideInUp 0.3s linear;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes fadeZoomIn {
  from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
