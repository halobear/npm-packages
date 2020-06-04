<template>
  <div class="vue-shape" ref="container" :class="{disabled}" :style="style" @mousedown="mousedown" v-on="$listeners">
    <slot></slot>
    <lock-icon
      v-if="!draggable && !disabled"
      class="lock-icon"
      :style="{transform: `rotate(${360 - this.computedRotate}deg)`}"
      @click="changeDraggable"
    />
  </div>
</template>

<script>
import resizeableAction from './utils/resizeableAction';

import LockIcon from './components/LockIcon';

export default {
  components: {
    LockIcon
  },
  props: {
    w: {
      type: Number,
      default: 3
    },
    h: {
      type: Number,
      default: 3
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
    min: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: true
    },
    container: {
      type: Element
    },
    draggable: {
      type: Boolean,
      default: false
    },
    fid: {
      type: [String, Number], // 防止直接切换
      default: 0
    }
  },
  data() {
    return {
      width: this.w,
      height: this.h,
      left: this.x,
      top: this.y,
      rotate: this.r
    };
  },
  computed: {
    computedRotate() {
      const r = this.rotate < -180 ? this.rotate + 360 : this.rotate;
      return ~~r;
    },
    style() {
      const { width, height, left, top, computedRotate } = this;
      return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
        transform: `rotate(${computedRotate}deg)`
      };
    },
    data() {
      return {
        container: this.$refs.container,
        width: this.width,
        height: this.height,
        left: this.left,
        top: this.top,
        rotate: this.rotate,
        min: this.min
      };
    }
  },
  watch: {
    x(x) {
      this.left = x;
      resizeableAction.changeData(this.data);
    },
    y(y) {
      this.top = y;
      resizeableAction.changeData(this.data);
    },
    w(w) {
      this.width = w;
      resizeableAction.changeData(this.data);
    },
    h(h) {
      this.height = h;
      resizeableAction.changeData(this.data);
    },
    r(r) {
      this.rotate = r;
      resizeableAction.changeData(this.data);
    },
    min(min) {
      resizeableAction.changeData({ min });
    },
    disabled(disabled) {
      this.changeActionVisible(disabled);
      resizeableAction.changeData({ disabled });
    },
    draggable() {
      this.changeActionVisible(this.disabled);
    }
  },
  mounted() {
    !this.disabled && this.changeActionVisible();
  },
  methods: {
    async mousedown(e) {
      if (typeof document === 'undefined') return;
      if (this.disabled) {
        this.$emit('update:disabled', false);
        await this.$nextTick();
      }
      if (!this.draggable) return;
      const lastData = {
        x: this.left,
        y: this.top
      };
      const { left, top } = this;
      // 鼠标按下时的位置
      const clientx = e.clientX;
      const clienty = e.clientY;
      document.onmousemove = e => {
        this.top = top + e.clientY - clienty;
        this.left = left + (e.clientX - clientx);
        resizeableAction.changeData({
          top: this.top,
          left: this.left
        });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (this.left !== lastData.x || this.top !== lastData.y) {
          this.changeParent();
        }
      };
    },
    changeActionVisible(disabled) {
      if (disabled || !this.draggable) {
        return resizeableAction.hide();
      }
      resizeableAction.show(
        {
          data: this.data,
          change: this.change,
          changeParent: this.changeParent
        },
        this.container
      );
    },
    change(data = {}) {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      this.rotate = data.rotate;
    },
    changeParent() {
      this.$emit('change', {
        w: this.width,
        h: this.height,
        x: this.left,
        y: this.top,
        r: this.rotate
      });
    },
    changeDraggable() {
      this.$emit('update:draggable', true);
    }
  }
};
</script>

<style lang="less" scoped>
.vue-shape {
  position: absolute;
  outline: 1px solid rgba(1, 133, 242, 0.8);
  cursor: pointer;
  user-select: none;
  &.disabled {
    outline-color: transparent;
  }
  &:hover {
    outline-color: rgba(1, 133, 242, 0.6);
  }
}
.lock-icon {
  position: absolute;
  bottom: -10px;
  right: -10px;
}
</style>