<template>
  <upload v-model:value="value" :limit="10" />
  <hr />
  {{ value }}
</template>

<script>
import Upload from "./upload/index.vue";

export default {
  components: {
    Upload,
  },
  data() {
    return {
      value: [
        {
          key: 1,
          url: `https://www.luzhongkuan.cn/static/temp/de201d5d5af015fa7d1d4dfb94b80df8.jpeg`,
        },
        {
          key: 2,
          url: `https://www.luzhongkuan.cn/static/temp/0b97b79a76eb5d3e29582778ab2ea0bc.jpeg`,
        },
        {
          key: 3,
          url: `https://www.luzhongkuan.cn/static/temp/5c7804df658fc60761161fc8d5262900.jpeg`,
        },
      ],
    };
  },
};
</script>
