<template>
  <div class="test-container">
    <h2>@halobear/vue-region</h2>
    <vue-region v-model="region" @change="change" :level="2"></vue-region>
    <p>{{ region_name }}: {{ region.join("、") }}</p>
  </div>
</template>

<script>
import VueRegion from "@halobear/vue-region";

export default {
  components: {
    VueRegion
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
