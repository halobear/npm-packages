<template>
  <a-cascader
    placeholder="请选择"
    :value="dataValue"
    :fieldNames="fieldNames"
    :changeOnSelect="changeOnSelect"
    :options="options"
    :showSearch="{ filter }"
    @change="onChange"
  />
</template>
<script>
import { Cascader } from 'ant-design-vue';

import data from './data/region.json';
import getRegion from './utils/getRegion';

export default {
  components: {
    [Cascader.name]: Cascader,
  },
  model: {
    event: 'change',
  },
  props: {
    format: {
      type: Function,
    },
    value: {
      type: Array,
    },
    simple: {
      type: Boolean,
      default: true,
    },
    changeOnSelect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const { format, simple } = this;
    const region = format ? format(data) : data;
    const options = getRegion(region, simple);
    return {
      region: region,
      fieldNames: { label: 'n', value: 'id', children: 'children' },
      options,
      dataValue: this.value || [],
    };
  },
  watch: {
    value() {
      this.dataValue = [...this.value];
    },
  },
  methods: {
    filter(inputValue, path) {
      return path.some((option) => option.n.indexOf(inputValue) > -1);
    },
    onChange(value) {
      this.dataValue = value;
      this.change();
    },
    change() {
      const { dataValue, region } = this;
      const name = dataValue
        .map((item) => {
          const target = region.find((it) => it.id === item) || {};
          return target.n;
        })
        .filter((item) => item)
        .join(' ');
      this.$emit('change', dataValue, name);
    },
  },
};
</script>

