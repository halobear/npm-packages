<template>
  <div class="test-container">
    <test style="height: 90vh;" v-model="text"></test>
  </div>
</template>

<script>
import Test from "../index.vue";

import text from "./text.js";

export default {
  components: {
    Test
  },
  data() {
    return {
      text
    };
  }
};
</script>

<style lang="less">
body {
  background-color: #f8f8f8;
}
.test-container {
  width: 1300px;
  margin: 0 auto;
}
</style>