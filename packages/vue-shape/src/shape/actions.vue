<template>
  <div class="resizeable-action">
    <div
      v-for="item in actions"
      :key="item"
      :class="`${item}`"
      @mousedown.stop.prevent="actionDown($event, item)"
      @touchstart.stop.prevent="actionDown($event, item)"
    ></div>

    <div class="rotate-icon">
      <div class="icon"></div>
      <div class="num" :style="{ transform: `rotate(${360 - rotate}deg)` }">
        {{ rotate }}°
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      default: () => ["tl", "tm", "tr", "mr", "br", "bm", "bl", "ml"],
    },
    rotate: {
      type: Number,
      default: 0,
    },
  },
  emits: ["actionDown"],
  setup(_, { emit }) {
    return {
      actionDown: () => emit("actionDown"),
    };
  },
};
</script>

<style lang="less" scoped>
.resizeable-action {
  position: absolute;
  z-index: 10000;
  pointer-events: none;
}
.tm,
.ml,
.mr,
.bm {
  position: absolute;
  background-color: #fff;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(153, 153, 153, 1);
  margin: auto;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  pointer-events: auto;
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
}
.tm,
.bm {
  cursor: ns-resize;
}
.ml,
.mr {
  cursor: ew-resize;
}
.tm {
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);
}
.bm {
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(50%);
}
.ml {
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
}
.mr {
  top: 0;
  bottom: 0;
  right: 0;
  transform: translateX(50%);
}

.tl,
.tr,
.bl,
.br {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 100%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
}
.tl {
  cursor: nwse-resize;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}
.tr {
  cursor: nesw-resize;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
.bl {
  cursor: nesw-resize;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}
.br {
  cursor: nwse-resize;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}

.rotate-icon {
  position: absolute;
  user-select: none;
  margin-top: 18px;
  pointer-events: auto;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
  cursor: pointer;
  &:active {
    cursor: grabbing;
  }
}
.icon {
  width: 18px;
  height: 18px;
  background: white url("./images/rotate_icon.png") center center no-repeat;
  background-size: 12px 12px;
  border: 1px solid #979797;
  border-radius: 50%;
  margin: 0 auto 12px;
}
.num {
  width: 40px;
  height: 28px;
  background: rgba(34, 34, 34, 1);
  border-radius: 2px;
  opacity: 0.8;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
