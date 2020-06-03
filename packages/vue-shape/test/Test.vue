<template>
  <div class="test-container" ref="container">
    <div>
      <button @click="disabled = !disabled">切换disabled</button>
      <button @click="draggable = !draggable">切换dragaable</button>
      <input type="text" placeholder="x" v-model.number="data.x" />
      <input type="text" placeholder="r" v-model.number="data.r" />
    </div>
    <div @click.stop>
      <vue-shape v-bind="data" :disabled.sync="disabled" :draggable.sync="draggable" :container="$refs.container" @change="changeData">
        <h2 class="box">测试一</h2>
      </vue-shape>
    </div>
  </div>
</template>

<script>
import VueShape from '../src';

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
        h: 200,
        r: 0
      },
      disabled: false,
      draggable: true
    };
  },
  methods: {
    changeData(data = {}) {
      console.log('接收', data);
      this.data = data;
    }
  }
};
</script>

<style lang="less" scoped>
.test-container {
  min-height: 80vh;
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