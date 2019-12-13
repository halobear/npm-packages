<template>
  <div class="test-container">
    <test></test>
  </div>
</template>

<script>
import Test from "../index.vue";

export default {
  components: {
    Test
  }
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: #ccc;
  min-height: 50vh;
}
</style>