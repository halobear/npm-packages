<template>
  <div class="test-container">
    <test v-model="region" :show-search="false"></test>
    <p>
      {{ region }}
    </p>
  </div>
</template>

<script>
import Test from "../index.vue";

export default {
  components: {
    Test
  },
  data() {
    return {
      region: []
    };
  }
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: #ccc;
  min-height: 50vh;
}
</style>
