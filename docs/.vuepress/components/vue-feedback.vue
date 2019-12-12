<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-feedback</h2>
    <button @click="showLoading" class="k-btn k-btn-primary">loading</button>
    <div class="split-line"></div>
    <input
      class="k-input"
      type="text"
      placeholder="请输入提示信息"
      v-model="text"
    />
    <button @click="showToast" class="k-btn k-btn-primary">toast</button>
  </div>
</template>

<script>
import "kuan-css";
import { toast, loading } from "@halobear/vue-feedback";

console.log(2134);

export default {
  name: "feedback",
  data() {
    return {
      text: "hello, vue-feedback!!!"
    };
  },
  methods: {
    showLoading() {
      loading.show();
      setTimeout(() => {
        loading.hide();
      }, 1000);
    },
    showToast() {
      toast(this.text);
    }
  }
};
</script>
