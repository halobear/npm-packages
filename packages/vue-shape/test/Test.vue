<template>
  <div @click="disabled = true" class="test-container" ref="container">
    <div @click.stop>
      <vue-shape v-bind="data" :disabled.sync="disabled" :container="$refs.container" @change="changeData">
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
      disabled: true,
      draggable: false
    };
  },
  methods: {
    changeData(data = {}) {
      console.log('接收', data);
    }
  }
};
</script>

<style lang="less" scoped>
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