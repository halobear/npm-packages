<template>
  <div class="region-outer">
    <vue-select
      class="vue-select"
      placeholder="选择省份"
      :showSearch="showSearch"
      :options="province"
      v-model="region[0]"
      @input="change"
    />
    <vue-select
      class="vue-select"
      :showSearch="showSearch"
      placeholder="选择城市"
    />
    <vue-select
      class="vue-select"
      :showSearch="showSearch"
      placeholder="选择区域"
    />
  </div>
</template>

<script>
import VueSelect from "./components/VueSelect";
import data from "./utils/region.json";

export default {
  components: {
    VueSelect
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Array
    },
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      region: this.value || []
    };
  },
  computed: {
    province() {
      return data.filter(item => item.parent_id === 0);
    }
  },
  methods: {
    change() {
      console.log(this.region);
      this.$emit("change", this.region);
    }
  }
};
</script>

<style lang="less" scoped>
.region-outer {
  .vue-select:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
