<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-request</h2>
    <button @click="test" class="k-btn k-btn-primary">test</button>
    <div class="split-line"></div>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import "kuan-css";
import { createApi } from "@packages/vue-request";
const request = createApi();

export default {
  name: "request",
  data() {
    return {
      text: "提示信息",
      data: ""
    };
  },
  methods: {
    async test() {
      const data = await request({
        url: "https://www.luzhongkuan.cn/api/blog/article/218"
      });
      console.log(data);
      this.data = data;
    }
  }
};
</script>
