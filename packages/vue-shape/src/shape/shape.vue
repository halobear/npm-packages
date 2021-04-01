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

  <actions
    ref="actionEl"
    v-if="state.active"
    :style="style"
    :rotate="rect.rotate"
    @actionDown="actionDown"
  />
</template>

<script>
import {
  defineComponent,
  computed,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
} from "vue";

import Actions from "./actions.vue";

const transformOriginMap = {
  tl: "bottom right",
  tm: "bottom center",
  tr: "bottom left",
  mr: "left center",
  br: "top left",
  bm: "top center",
  bl: "top right",
  ml: "right center",
};

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
    r: {
      type: Number,
      default: 0,
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
  emits: ["click", "change"],
  setup(props, { emit }) {
    const el = ref();
    const actionEl = ref();

    const state = reactive({
      active: false,
    });

    const rect = reactive({
      rotate: props.r,
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
      transform: `rotateZ(${rect.rotate}deg)`,
    }));

    // 开始位置记录
    let startPos = {
      pageX: 0,
      pageY: 0,
      left: 0,
      right: 0,
      width: props.w,
      height: props.h,
    };

    // 旋转中心
    let centerPointer = {
      x: 0,
      y: 0,
    };

    // 当前操作是移动还是变形
    let action = ""; // move transform rotate
    // 变形操作方向
    let direction = []; // x y xy

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
      if (props.disabled || !state.active || !action) return;
      e.stopPropagation();
      if (action === "move") {
        dragMove(e);
      } else if (action === "transform") {
        actionMove(e);
      } else if (action === "rotate") {
        rotateMove(e);
      }
    };

    // 拖拽移动事件
    const dragMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      rect.left = pageX - startPos.pageX + startPos.left;
      rect.top = pageY - startPos.pageY + startPos.top;
    };

    // 鼠标/手势离开
    const up = () => {
      if (action === "transform") {
        // 调整旋转中心
        adjustTransform("center center");
      }
      action = "";
      emit("change", {
        x: ~~rect.left,
        y: ~~rect.top,
        w: ~~rect.width,
        h: ~~rect.height,
        r: ~~rect.rotate,
      });
    };

    // 调整设置旋转中心位置
    const adjustTransform = (transformOrigin) => {
      const currentPos = el.value.getBoundingClientRect();
      el.value.style.transformOrigin = transformOrigin;
      actionEl.value.$el.style.transformOrigin = transformOrigin;
      const newPos = el.value.getBoundingClientRect();
      rect.left = rect.left + currentPos.x - newPos.x;
      rect.top = rect.top + currentPos.y - newPos.y;
    };

    // 拖拽变形按下
    const actionDown = (e, type) => {
      if (!state.active) return;
      // 变形
      if (type !== "rotate") {
        action = "transform";
        direction = type.split("");
        // 调整旋转中心
        adjustTransform(transformOriginMap[type]);
      }

      startPos.pageX = e.touches ? e.touches[0].pageX : e.pageX;
      startPos.pageY = e.touches ? e.touches[0].pageY : e.pageY;
      startPos.left = rect.left;
      startPos.top = rect.top;
      startPos.width = rect.width;
      startPos.height = rect.height;

      // 旋转
      if (type === "rotate") {
        centerPointer = {
          x: startPos.left + startPos.width / 2,
          y: startPos.top + startPos.height / 2,
        };
        action = "rotate";
      }
    };

    // 拖拽变形移动
    const actionMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      const realDistanceX = startPos.pageX - pageX;
      const realDistanceY = startPos.pageY - pageY;
      const { rotate } = rect;
      const distanceX =
        Math.cos((-rotate * Math.PI) / 180) * realDistanceX -
        Math.sin((-rotate * Math.PI) / 180) * realDistanceY;
      const distanceY =
        Math.sin((-rotate * Math.PI) / 180) * realDistanceX +
        Math.cos((-rotate * Math.PI) / 180) * realDistanceY;
      switch (direction[0]) {
        case "b":
          rect.height = startPos.height - distanceY;
          break;
        case "t":
          rect.top = startPos.top - distanceY;
          rect.height = startPos.height + distanceY;
          break;
      }
      switch (direction[1]) {
        case "l":
          rect.width = startPos.width + distanceX;
          rect.left = startPos.left - distanceX;
          break;
        case "r":
          rect.width = startPos.width - distanceX;
          break;
      }
    };

    const rotateMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      const x = pageX - centerPointer.x;
      const y = pageY - centerPointer.y;
      rect.rotate = ~~(Math.atan2(y, x) / (Math.PI / 180) - 90);
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
      actionEl,
      state,
      rect,
      style,
      down,
      actionDown,
    };
  },
});
</script>

<style lang="less">
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
