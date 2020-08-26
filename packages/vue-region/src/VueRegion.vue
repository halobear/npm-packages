<template>
  <a-cascader
    :options="options"
    placeholder="Please select"
    @change="onChange"
  />
</template>
<script>
import { Cascader } from 'ant-design-vue';

export default {
  components: {
    [Cascader.name]: Cascader,
  },
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

