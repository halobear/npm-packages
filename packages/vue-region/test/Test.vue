<template>
  <div class="test-container">
    <vue-region
      changeOnSelect
      v-model="region"
      :simple="false"
      @change="change"
    ></vue-region>
    <p>{{ region_name }}: {{ region.join("、") }}</p>
  </div>
</template>

<script>
import VueRegion from '../src/index';

export default {
  components: {
    VueRegion,
  },
  data() {
    return {
      region: ['0'],
      region_name: '全国',
    };
  },
  methods: {
    change(value, name) {
      this.region_name = name;
    },
  },
};
</script>