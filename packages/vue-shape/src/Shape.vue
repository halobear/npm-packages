<template>
  <div :style="style" class="shape-container" :class="{disabled}">
    <div :class="{draggable: draggable}" class="shape-inner" @mousedown="bindEvent($event, 's')">
      <slot></slot>
    </div>
    <template v-if="!disabled">
      <div
        v-for="item in actions"
        :key="item"
        :style="item === 'ratote' ? {cursor: remoteCursor} : {}"
        :class="item"
        @mousedown="bindEvent($event, item)"
      ></div>
      <div
        class="rotate-num"
        :style="{transform: `rotate(${360-computedRotate}deg)`}"
      >{{computedRotate}}°</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    w: {
      type: Number,
      default: 100
    },
    h: {
      type: Number,
      default: 1000
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    r: {
      type: Number,
      default: 0
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lastData: {},
      disabled: false,
      dragging: false,
      width: this.w,
      height: this.h,
      left: this.x,
      top: this.y,
      actions: ["t", "r", "b", "l", "tr", "tl", "br", "bl", "ratote"],
      rotate: this.r,
      rotateCursor: {
        0: require("./images/rotation_0.svg"),
        45: require("./images/rotation_45.svg"),
        90: require("./images/rotation_90.svg"),
        135: require("./images/rotation_135.svg"),
        180: require("./images/rotation_180.svg"),
        "-45": require("./images/rotation2_45.svg"),
        "-90": require("./images/rotation2_90.svg"),
        "-135": require("./images/rotation2_135.svg")
      }
    };
  },
  computed: {
    computedRotate() {
      const r = this.rotate < -180 ? this.rotate + 360 : this.rotate;
      return ~~r;
    },
    style() {
      const { width, height, left, top, computedRotate, dragging } = this;
      return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
        transform: `rotate(${computedRotate}deg)`,
        ...(dragging ? { "user-select": "none" } : {})
      };
    },
    centerPointer() {
      const { left, top, width, height } = this;
      return {
        x: left + width / 2,
        y: top + height / 2
      };
    },
    remoteCursor() {
      const r = this.computedRotate;
      let key = 0;
      if ((r <= 0 && r >= -23) || (r >= 0 && r <= 23)) {
        key = 0;
      } else if (r >= 23 && r <= 68) {
        key = 45;
      } else if (r >= 68 && r <= 113) {
        key = 90;
      } else if (r >= 113 && r <= 158) {
        key = 135;
      } else if (r >= 158 || (r >= -180 && r <= -158)) {
        key = 180;
      } else if (r >= -158 && r <= -113) {
        key = -135;
      } else if (r >= -113 && r <= -68) {
        key = -90;
      } else if (r >= -68 && r <= 23) {
        key = -45;
      }
      return `url(${this.rotateCursor[key]}) 11 11,pointer`;
    }
  },
  watch: {
    x(x) {
      this.left = x;
    },
    y(y) {
      this.top = y;
    },
    w(w) {
      this.width = w;
    },
    h(h) {
      this.height = h;
    },
    rotate(r) {
      this.rotate = r;
    }
  },
  methods: {
    bindEvent(e, className) {
      if (this.disabled) return this.toggle();
      this.lastData = {
        x: this.left,
        y: this.top,
        w: this.width,
        h: this.height,
        r: this.computedRotate
      };
      this.dragging = true;
      const { width, height, left, top } = this;
      // 鼠标按下时的位置
      const clientx = e.clientX;
      const clienty = e.clientY;
      if (typeof document === "undefined") return;
      const min = 50;
      document.onmousemove = e => {
        if (className === "ratote") {
          const y = e.clientY - this.centerPointer.y;
          const x = e.clientX - this.centerPointer.x;
          this.rotate = Math.atan2(y, x) / (Math.PI / 180) - 90;
        } else if (className === "s") {
          if (this.draggable) return;
          this.top = top + e.clientY - clienty;
          this.left = left + (e.clientX - clientx);
        } else {
          if (className.includes("t")) {
            this.height = Math.max(height + clienty - e.clientY, min);
            this.top = top + e.clientY - clienty;
          }
          if (className.includes("b")) {
            this.height = Math.max(height + e.clientY - clienty, min);
          }
          if (className.includes("r")) {
            this.width = Math.max(width + e.clientX - clientx, min);
          }
          if (className.includes("l")) {
            this.width = Math.max(width + clientx - e.clientX, min);
            this.left = left + (e.clientX - clientx);
          }
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.dragging = false;
        const newData = {
          x: this.left,
          y: this.top,
          w: Math.max(this.width, 50),
          h: Math.max(this.height, 50),
          r: this.computedRotate
        };

        if (objectEqual(newData, this.lastData)) {
          this.toggle();
        } else {
          this.$emit("change", newData);
        }
      };
    },
    toggle() {
      this.disabled = !this.disabled;
    }
  }
};

function objectEqual(a = {}, b = {}) {
  let isEqual = true;
  for (let key in a) {
    if (a[key] !== b[key]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}
</script>

<style lang="less" scoped>
.shape-container {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 100px;
  left: 100px;
  border: 1px solid rgba(1, 133, 242, 0.8);
  cursor: pointer;
  &.disabled {
    border-color: transparent;
    cursor: default;
  }
}
.shape-inner {
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  bottom: -1px;
  &.draggable {
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }
}
.t,
.l,
.r,
.b {
  position: absolute;
  background-color: #fff;
  z-index: 1000;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(153, 153, 153, 1);
  margin: auto;
}
.t,
.b {
  left: 0;
  right: 0;
  cursor: ns-resize;
}
.t {
  top: -5px;
}
.b {
  bottom: -5px;
}
.l,
.r {
  cursor: ew-resize;
  top: 0;
  bottom: 0;
}
.l {
  left: -5px;
}
.r {
  right: -5px;
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
  z-index: 1000;
}
.tl {
  top: -5px;
  left: -5px;
  cursor: nwse-resize;
}
.tr {
  top: -5px;
  right: -5px;
  cursor: nesw-resize;
}
.bl {
  bottom: -5px;
  left: -5px;
  cursor: nesw-resize;
}
.br {
  bottom: -5px;
  right: -5px;
  cursor: nwse-resize;
}
.ratote {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -34px;
  z-index: 1000;
  width: 18px;
  height: 18px;
  margin: auto;
  background: url("./images/rotate_icon.png") center center no-repeat;
  background-size: 12px 12px;
  border: 1px solid #979797;
  border-radius: 50%;
}
.rotate-num {
  width: 40px;
  height: 28px;
  background: rgba(34, 34, 34, 1);
  border-radius: 2px;
  opacity: 0.8;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -74px;
  margin: auto;
  color: white;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
