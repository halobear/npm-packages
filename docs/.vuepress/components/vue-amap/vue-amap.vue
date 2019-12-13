<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-amap</h2>
    <vue-map v-model="center" keyword="上海"></vue-map>

    <div class="res">结果：{{ center }}</div>
  </div>
</template>

<script>
import VueMap from "@halobear/vue-amap";

export default {
  components: {
    VueMap
  },
  data() {
    return {
      center: [116.39, 39.9]
    };
  }
};
</script>
