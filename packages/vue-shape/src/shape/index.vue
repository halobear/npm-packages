<template>
  <div
    ref="el"
    class="vue-shape"
    :class="{ active: state.active }"
    :style="style"
    @mousedown="down"
    @touchstart="down"
  >
    <slot></slot>
  </div>

  <actions v-if="state.active" :style="style" />
</template>

<script>
import {
  defineComponent,
  computed,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
} from "vue";

import Actions from "./actions.vue";

export default defineComponent({
  components: {
    Actions,
  },
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    w: {
      type: Number,
      default: 10,
    },
    h: {
      type: Number,
      default: 10,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 根据父元素限制拖拽
    dragLimit: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click", "dragging", "dragup", "change"],
  setup(props, { emit }) {
    const el = ref();

    const state = reactive({
      active: false,
    });

    const rect = reactive({
      left: props.x,
      top: props.y,
      width: props.w,
      height: props.h,
    });

    const style = computed(() => ({
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      top: `${rect.top}px`,
      left: `${rect.left}px`,
    }));

    // 开始位置记录
    let startPos = { pageX: 0, pageY: 0, left: 0, right: 0 };
    // 当前操作是移动还是变形
    let action = ""; // move transform

    // 鼠标/手势按下事件
    const down = (e) => {
      emit("click", e);
      if (props.disabled) return;
      state.active = true;
      e.stopPropagation();
      e.preventDefault();
      action = "move";
      startPos.pageX = e.touches ? e.touches[0].pageX : e.pageX;
      startPos.pageY = e.touches ? e.touches[0].pageY : e.pageY;
      startPos.left = rect.left;
      startPos.top = rect.top;
    };

    // 鼠标/手势移动事件
    const move = (e) => {
      if (props.disabled || !action) return;
      e.stopPropagation();
      if (action === "move") {
        dragMove(e);
      }
    };

    // 拖拽移动事件
    const dragMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      rect.left = pageX - startPos.pageX + startPos.left;
      rect.top = pageY - startPos.pageY + startPos.top;
      emit("dragging", rect);
    };

    // 拖拽移动抬起事件
    const dragUp = () => {
      emit("dragup", rect);
      emit("change", rect);
    };

    // 鼠标/手势离开
    const up = () => {
      action = "";
      if (action === "move") {
        dragUp(e);
      }
    };

    // 取消聚焦
    const blur = () => {
      if (props.disabled || !state.active) return;
      state.active = false;
      action = "";
    };

    onMounted(() => {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      window.addEventListener("mouseleave", up);
      window.addEventListener("mousedown", blur);

      window.addEventListener("touchmove", move);
      window.addEventListener("touchend", up);
      window.addEventListener("touchcancel", up);
      window.addEventListener("touchcancel", up);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", up);
      window.removeEventListener("mousedown", blur);

      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchcancel", up);
      window.removeEventListener("touchcancel", up);
    });

    return {
      el,
      state,
      rect,
      style,
      down,
    };
  },
});
</script>


<style lang="less" scoped>
.vue-shape {
  position: absolute;
  user-select: none;
  &:active {
    cursor: move;
  }
  &:hover {
    outline: 1px solid rgba(1, 133, 242, 0.5);
  }
  &.active {
    outline: 1px solid rgba(1, 133, 242, 0.8);
  }
}
</style>