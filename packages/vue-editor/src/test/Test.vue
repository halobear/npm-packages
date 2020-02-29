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
    this.text = [...Array(100).keys()]
      .map(() => "```js\nconsole.log(1324)\n```\n\n")
      .join("\n");
  }
};
</script>

<style lang="less">
body {
  min-height: 100vh;
  background-color: #f8f8f8;
}
.test-container {
  width: 1300px;
  margin: 0 auto;
}
</style>