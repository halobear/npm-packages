<template>
  <div>
    <div ref="action" class="resizeable-action" :style="style" @click.stop @mousedown.stop>
      <rotate-icon
        :rotate="computedRotate"
        :lockStyle="lockStyle"
        @mousedown="bindEvent($event, 'rotate')"
      />
      <div
        v-for="item in actions"
        :key="item"
        :style="actionStyle[item]"
        :class="item"
        @mousedown="bindEvent($event, item)"
      ></div>
    </div>
  </div>
</template>

<script>
import RotateIcon from './RotateIcon';

export default {
  components: {
    RotateIcon
  },
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    rotate: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 3
    },
    computedRotate: {
      type: Number,
      default: 0
    },
    container: {
      type: Element,
      default: () => document.body
    }
  },
  data() {
    return {
      actions: ['t', 'r', 'b', 'l', 'tr', 'tl', 'br', 'bl']
    };
  },
  computed: {
    newData() {
      return {
        left: this.left,
        top: this.top,
        width: Math.max(this.width, this.min),
        height: Math.max(this.height, this.min),
        rotate: this.rotate
      };
    },
    centerPointer() {
      const { left, top, width, height } = this;
      return {
        x: left + width / 2,
        y: top + height / 2
      };
    },
    style() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
        transformOrigin: `${this.width / 2}px ${this.height / 2}px`,
        transform: `rotate(${this.computedRotate}deg)`
      };
    },
    lockStyle() {
      return {
        left: `${this.width / 2 - 20}px`,
        top: `${this.height}px`
      };
    },
    actionStyle() {
      const halfW = `${this.width / 2 - 5}px`;
      const halfH = `${this.height / 2 - 5}px`;
      return {
        t: {
          left: halfW,
          top: '-5px'
        },
        r: {
          top: halfH,
          left: `${this.width - 5}px`
        },
        b: {
          left: halfW,
          top: `${this.height - 5}px`
        },
        l: {
          left: '-5px',
          top: halfH
        },
        tl: {
          left: '-5px',
          top: '-5px'
        },
        tr: {
          left: `${this.width - 5}px`,
          top: '-5px'
        },
        bl: {
          left: `-5px`,
          top: `${this.height - 5}px`
        },
        br: {
          left: `${this.width - 5}px`,
          top: `${this.height - 5}px`
        }
      };
    }
  },
  watch: {
    container() {
      this.container.appendChild(this.$refs.action);
    }
  },
  mounted() {
    this.container.appendChild(this.$refs.action);
  },
  beforeDestroy() {
    this.$refs.action.parentElement.removeChild(this.$refs.action);
  },
  methods: {
    bindEvent(e, className) {
      if (typeof document === 'undefined') return;
      const { width, height, left, top } = this;
      // 鼠标按下时的位置
      const clientx = e.clientX;
      const clienty = e.clientY;
      const container = this.container.offsetParent || this.container;
      const parentPos = container.getBoundingClientRect();
      const min = this.min;
      const originHeight = this.height;
      const originWidth = this.width;
      const lastData = { ...this.newData };
      document.onmousemove = e => {
        if (className === 'rotate') {
          // 旋转
          const y = e.clientY - this.centerPointer.y - parentPos.top;
          const x = e.clientX - this.centerPointer.x - parentPos.left;
          const rotate = Math.atan2(y, x) / (Math.PI / 180) - 90;
          this.$emit('update:rotate', rotate);
        } else {
          let h;
          let w;
          // 变形
          if (className.includes('t')) {
            h = Math.max(height + clienty - e.clientY, min);
          }
          if (className.includes('b')) {
            h = Math.max(height + e.clientY - clienty, min);
          }
          if (className.includes('r')) {
            w = Math.max(width + e.clientX - clientx, min);
          }
          if (className.includes('l')) {
            w = Math.max(width + clientx - e.clientX, min);
          }
          if (h && w) {
            const ratio = Math.min(h / originHeight, w / originWidth);
            this.$emit('update:width', ratio * originWidth);
            this.$emit('update:height', ratio * originHeight);
          } else {
            h && this.$emit('update:height', h);
            w && this.$emit('update:width', w);
          }

          className.includes('t') && this.$emit('update:top', top + originHeight - this.height);
          className.includes('l') && this.$emit('update:left', left + originWidth - this.width);
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.dragging = false;
        if (!objectEqual(this.newData, lastData)) {
          this.$emit('change', this.newData);
        }
      };
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
.resizeable-action {
  position: absolute;
  z-index: 10000;
}
.t,
.l,
.r,
.b {
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
  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
}
.t,
.b {
  cursor: ns-resize;
}
.l,
.r {
  cursor: ew-resize;
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
  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
}
.tl {
  cursor: nwse-resize;
}
.tr {
  cursor: nesw-resize;
}
.bl {
  cursor: nesw-resize;
}
.br {
  cursor: nwse-resize;
}
</style>