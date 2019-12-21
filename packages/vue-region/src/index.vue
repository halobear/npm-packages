<template>
  <div class="region-outer">
    <vue-select
      class="vue-select"
      placeholder="选择省份"
      :showSearch="showSearch"
      :options="province"
      :value="region[0]"
      @input="changeProvince"
    />
    <vue-select
      v-if="city.length && level >= 1"
      class="vue-select"
      placeholder="选择城市"
      :showSearch="showSearch"
      :options="city"
      :value="region[1]"
      @input="changeCity"
    />
    <vue-select
      v-if="level === 2 && district.length"
      class="vue-select"
      placeholder="选择区域"
      :showSearch="showSearch"
      :options="district"
      v-model="region[2]"
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
    },
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      region: this.value || []
    };
  },
  computed: {
    province() {
      return data.filter(item => item.parent_id == 0);
    },
    city() {
      const c = this.region[0];
      if (!c) return [];
      return data.filter(item => item.parent_id && item.parent_id == c);
    },
    district() {
      const d = this.region[1];
      if (!d) return [];
      return data.filter(item => item.parent_id && item.parent_id == d);
    },
    region_name() {
      return this.region
        .map(value => {
          const target = data.find(item => item.value == value);
          return target ? target.label : "";
        })
        .filter(item => item)
        .join(" ");
    }
  },
  methods: {
    changeProvince(p = "0") {
      if (p == this.region[0]) return this.change();
      this.region = [p];
      // 选中默认城市
      this.changeCity();
    },
    changeCity(cityValue) {
      const { city = [] } = this;
      // 选择全国、只有一级选择
      if (!city.length) return this.change();
      let c = cityValue;
      // 默认选中当前省第一个城市
      if (!c) {
        c = city[0].value;
      }
      this.region = [this.region[0], c];
      // 只选择城市
      if (this.simple) return this.change();
      // 默认选中第一个地区
      const { district } = this;
      if (district.length) {
        this.region.push(district[0].value);
      }
      this.change();
    },
    change() {
      this.$emit("change", this.region, this.region_name);
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
