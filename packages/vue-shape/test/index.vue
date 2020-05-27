<template>
  <div>
    <vue-shape :disabled="false" :x="data.x" :y="data.y" :w="data.w" :h="data.h">
      <h2
        style="padding: 0;margin: 0;position: absolute: left: 0;top: 0;width: 100%; height: 100%; background: gray"
      >默认内容</h2>
    </vue-shape>
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
        x: 300,
        y: 300,
        w: 300,
        h: 200
      }
    };
  }
};
</script>

<style>
</style>