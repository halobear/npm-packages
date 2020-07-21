<template>
  <div class="test-container">
    <test v-model="region" @change="change" :level="2"></test>
    <p>{{ region_name }} {{region}}</p>
    <test v-model="region2" :autoSelect="false" @change="change2" :level="2"></test>
    <p>{{ region_name2 }} {{region2}}</p>
  </div>
</template>

<script>
import Test from '../index.vue';

export default {
  components: {
    Test
  },
  data() {
    return {
      region: ['0'],
      region_name: '全国',
      region2: ['0'],
      region_name2: '全国'
    };
  },
  methods: {
    change(value, name) {
      this.region_name = name.join('、');
    },
    change2(value, name) {
      this.region_name2 = name.join('、');
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
