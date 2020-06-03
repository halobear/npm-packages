<template>
  <div class="rotate-icon" :style="{...lockStyle, cursor}" v-on="$listeners">
    <div class="icon"></div>
    <div class="num" :style="{transform: `rotate(${360 - this.rotate}deg)`}">{{rotate}}°</div>
  </div>
</template>

<script>
import getRotateCursor from '../utils/getRotateCursor';

export default {
  props: {
    rotate: {
      type: Number,
      default: 30
    },
    lockStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cursor() {
      return getRotateCursor(this.rotate);
    }
  }
};
</script>

<style lang="less" scoped>
.rotate-icon {
  position: absolute;
  user-select: none;
  margin-top: 18px;
}
.icon {
  width: 18px;
  height: 18px;
  background: white url('../images/rotate_icon.png') center center no-repeat;
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