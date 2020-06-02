<template>
  <div @click="disabled = true" class="test-container">
    <div @click.stop>
      <button @click="disabled = !disabled">锁定</button>
      <button @click="draggable = !draggable">拖拽</button>
    </div>
    <div @click.stop>
      <vue-shape :disabled.sync="disabled" :draggable.sync="draggable" :x="data.x" :y="data.y" :w="data.w" :h="data.h">
        <h2 class="box">测试一</h2>
      </vue-shape>
    </div>
  </div>
</template>

<script>
import VueShape from '../src/Shape';

export default {
  components: {
    VueShape
  },
  data() {
    return {
      data: {
        x: 100,
        y: 100,
        w: 200,
        h: 200
      },
      disabled: false,
      draggable: true
    };
  }
};
</script>

<style lang="less" scoped>
.test-container {
  min-height: 100vh;
}
.box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>