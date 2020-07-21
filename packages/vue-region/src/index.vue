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
      v-if="isVisible(1, city)"
      class="vue-select"
      placeholder="选择城市"
      :showSearch="showSearch"
      :options="city"
      :value="region[1]"
      @input="changeCity"
    />
    <vue-select
      v-if="isVisible(2, district)"
      class="vue-select"
      placeholder="选择区域"
      :showSearch="showSearch"
      :options="district"
      v-model="region[2]"
      @input="change"
    />
  </div>
</template>

<script>
import VueSelect from './components/VueSelect';
import data from './utils/region.json';

export default {
  components: {
    VueSelect
  },
  model: {
    prop: 'value',
    event: 'change'
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
    },
    format: {
      type: Function
    },
    autoSelect: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let d = data;
    if (this.format) {
      d = this.format(data);
    }
    return {
      region: this.value || [],
      data: d
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.region = value || [];
      }
    }
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
        .filter(item => item)
        .map(value => {
          const target = data.find(item => item.value == value);
          return target ? target.label : '';
        })
        .join(' ');
    }
  },
  methods: {
    isVisible(index, data) {
      if (this.level < index) return false;
      return data.length || !this.autoSelect;
    },
    changeProvince(p = '0') {
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
      if (!c) {
        if (!this.autoSelect) {
          this.region = [this.region[0], '', ''].slice(0, this.level);
          return this.change();
        } else {
          c = city[0].value;
        }
      }
      this.region = [this.region[0], c];
      if (this.autoSelect) {
        // 默认选中第一个地区
        const { district } = this;
        if (district.length) {
          this.region.push(district[0].value);
        }
      }
      this.change();
    },
    change() {
      const region_name = this.region_name
        .split(' ')
        .filter(item => item)
        .slice(0, this.level + 1);
      console.log(this.region_name, region_name);
      this.$emit('change', this.region, region_name);
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
