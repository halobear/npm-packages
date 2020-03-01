<template>
  <div class="test-container">
    <test style="height: 90vh;" type="word" v-model="text" :inset-image="insetImage" @input="input"></test>
  </div>
</template>

<script>
import Test from "../index.vue";

// import text from "./text.js";

export default {
  components: {
    Test
  },
  data() {
    return {
      text: "<h1>1234</h1>"
    };
  },
  methods: {
    input(value) {
      console.log(value);
    },
    insetImage() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            "http://pic.kuan1.top/2eb148653cc2130accb78e714999931d.png",
            {
              style: "width: 250px;margin: 20px"
            }
          ]);
        });
      });
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  background-color: #f8f8f8;
  overflow: hidden;
}
.test-container {
  padding-top: 40px;
  max-width: 1300px;
  margin: 0 auto;
}
</style>