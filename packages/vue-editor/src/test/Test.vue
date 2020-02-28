<template>
  <div class="test-container">
    <test v-model="text"></test>
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
      text: ""
    };
  },
  mounted() {
    this.text = [...Array(10000).keys()].join("\n");
  }
};
</script>

<style lang="less" scoped>
.test-container {
  width: 1300px;
  margin: 0 auto;
}
</style>