<template>
  <div class="test-container">
    <test v-model="region" @change="change" :level="2"></test>
    <p>{{ region_name }}: {{ region.join("、") }}</p>
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
      region: ["0"],
      region_name: "全国"
    };
  },
  methods: {
    change(value, name) {
      this.region_name = name;
    }
  }
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: #eee;
  min-height: 50vh;
}
</style>
