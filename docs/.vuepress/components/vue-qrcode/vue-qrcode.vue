<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-qrcode</h2>
    <vue-qrcode :url="url" />
    <div class="split-line"></div>
    <input class="k-input" type="text" v-model="url" />
  </div>
</template>

<script>
import VueQrcode from "@halobear/vue-qrcode";

console.log(VueQrcode);

export default {
  components: {
    VueQrcode
  },
  data() {
    return {
      url: "https://www.baidu.com/"
    };
  }
};
</script>

<style lang="less" scoped>
@import "~kuan-css";
.test-container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
