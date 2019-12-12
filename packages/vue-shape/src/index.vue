<template>
  <div v-if="disabled">
    <slot></slot>
  </div>
  <div v-else :style="style" v-on="$listeners" class="shape-container">
    <div @mousedown="bindEvent($event, 's')" :class="{draggable: draggable}" class="shape-inner">
      <slot></slot>
    </div>
    <div v-for="item in actions" :key="item" @mousedown="bindEvent($event, item)" :class="item"></div>
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
    disabled: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: this.w,
      height: this.h,
      left: this.x,
      top: this.y,
      actions: ["t", "r", "b", "l", "tr", "tl", "br", "bl"]
    };
  },
  computed: {
    style() {
      const { width, height, left, top } = this;
      return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`
      };
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
    }
  },
  methods: {
    bindEvent(e, className) {
      if (this.disabled) return;
      const { width, height, left, top } = this;
      // 鼠标按下时的位置
      const clientx = e.clientX;
      const clienty = e.clientY;
      if (typeof document === "undefined") return;
      document.onmousemove = e => {
        if (className === "s") {
          if (this.draggable) return;
          this.top = top + e.clientY - clienty;
          this.left = left + (e.clientX - clientx);
        } else {
          if (className.includes("t")) {
            this.height = Math.max(height + clienty - e.clientY, 0);
            this.top = top + e.clientY - clienty;
          }
          if (className.includes("b")) {
            this.height = height + e.clientY - clienty;
          }
          if (className.includes("r")) {
            this.width = width + e.clientX - clientx;
          }
          if (className.includes("l")) {
            this.width = width + clientx - e.clientX;
            this.left = left + (e.clientX - clientx);
          }
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.$emit("change", {
          x: this.left,
          y: this.top,
          w: this.width,
          h: this.height
        });
      };
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
.shape-container {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 150px;
  height: 150px;
  top: 100px;
  left: 100px;
  border: 1px solid #2a86ff;
}
.shape-inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
}
.t,
.b {
  width: 16px;
  height: 6px;
  border: 1px solid rgba(112, 112, 119, 0.3);
  border-radius: 3.5px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: ns-resize;
}
.t {
  top: -4px;
}
.b {
  bottom: -4px;
}
.l,
.r {
  cursor: ew-resize;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 16px;
  width: 6px;
  border: 1px solid rgba(112, 112, 119, 0.3);
  border-radius: 3.5px;
}
.l {
  left: -4px;
}
.r {
  right: -4px;
}
.tl,
.tr,
.bl,
.br {
  z-index: 530;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid rgba(112, 112, 119, 0.3);
  border-radius: 50%;
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
</style>
