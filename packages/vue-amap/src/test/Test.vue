<template>
  <div>
    <test v-model="center" keyword="上海"></test>

    <div class="res">结果：{{center}}</div>
  </div>
</template>

<script>
import Test from "../index.vue";

export default {
  data() {
    return {
      center: [116.39, 39.9]
    };
  },
  components: {
    Test
  }
};
</script>

<style>
</style>