<template>
  <div v-if="visible" class="resizeable-action" :style="style" @click.stop @mousedown.stop>
    <rotate-icon :rotate="computedRotate" :lockStyle="lockStyle" @mousedown="bindEvent($event, 'rotate')" />
    <div v-for="item in actions" :key="item" :style="actionStyle[item]" :class="item" @mousedown="bindEvent($event, item)"></div>
  </div>
</template>

<script>
import RotateIcon from './RotateIcon';

const noop = () => {};

export default {
  components: {
    RotateIcon
  },
  data() {
    return {
      visible: false,
      actions: ['t', 'r', 'b', 'l', 'tr', 'tl', 'br', 'bl'],
      container: null,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      rotate: 0,
      min: 3,
      change: noop,
      changeParent: noop
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
    computedRotate() {
      const r = this.rotate < -180 ? this.rotate + 360 : this.rotate;
      return ~~r;
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
  methods: {
    bindEvent(e, className) {
      if (typeof document === 'undefined') return;
      const { width, height, left, top } = this;
      // 鼠标按下时的位置
      const clientx = e.clientX;
      const clienty = e.clientY;
      const parentPos = this.container.offsetParent.getBoundingClientRect();
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
          this.rotate = rotate;
        } else if (className === 's') {
          // 拖动
          this.top = top + e.clientY - clienty;
          this.left = left + (e.clientX - clientx);
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
            this.width = ratio * originWidth;
            this.height = ratio * originHeight;
          } else {
            h && (this.height = h);
            w && (this.width = w);
          }

          className.includes('t') && (this.top = top + originHeight - this.height);
          className.includes('l') && (this.left = left + originWidth - this.width);
        }
        this.change(this.newData);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.dragging = false;
        if (!objectEqual(this.newData, lastData)) {
          this.change(this.newData);
          this.changeParent(this.newData);
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