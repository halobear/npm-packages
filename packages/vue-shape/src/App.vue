<template>
  <h2>测试vite</h2>
  <button @click="add">点击</button>
  <span>{{ count }}</span>

  <shape :x="100" :y="300" :w="200" :h="200">
    <!-- <div class="card">这里是内容</div> -->
    <img
      class="card"
      src="https://www.luzhongkuan.cn/static/temp/0b97b79a76eb5d3e29582778ab2ea0bc.jpeg"
      @dragstart.prevent
    />
  </shape>
</template>

<script>
import { ref } from "vue";
import shape from "./shape/index.vue";

export default {
  components: {
    shape,
  },
  setup() {
    const count = ref(1);
    return {
      count,
      add: () => (count.value += 1),
    };
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      45deg,
      #e1deb0 25%,
      transparent 25%,
      transparent 75%,
      #e1deb0 75%,
      #e1deb0
    ),
    linear-gradient(
      45deg,
      #e1deb0 26%,
      transparent 26%,
      transparent 74%,
      #e1deb0 74%,
      #e1deb0
    );
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  width: 100%;
  height: 100%;
}
</style>