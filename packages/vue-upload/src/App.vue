<template>
  <h2>图片上传</h2>
  <upload v-model:value="images" :limit="5" :token="fetchToken" />
  <hr />
  {{ images }}
  <hr />
  <br />
  <br />

  <h2>文件上传</h2>
  <upload
    accept="video/*"
    v-model:value="videos"
    :limit="10"
    :token="fetchToken"
  />
</template>

<script>
import { ref } from "vue";

import Upload from "./upload/index.vue";

export default {
  components: {
    Upload,
  },
  setup() {
    const fetchToken = () => {
      const token = `m_bQ6vCqK-1n_myddynLMQxg0rxw3YqRptv5D7_i:PWEJwMqQWQ4BONQ8smBe9D72qho=:eyJzY29wZSI6ImNybXB1YiIsImRlYWRsaW5lIjoxNjIzNzI3MjE4LCJzYXZlS2V5Ijoid2VkZGluZ1wvJChldGFnKSQoc3VmZml4KSIsImZvcmNlU2F2ZUtleSI6dHJ1ZSwiY2FsbGJhY2tVcmwiOiJodHRwczpcL1wvYXBwLWRhc2hib2FyZC1kZXYud2VkZGluZ2VlLmNvbVwvYXBpXC9oYWxvLWRhc2hib2FyZFwvdjFcL3VwbG9hZFwvcWluaXUiLCJjYWxsYmFja0JvZHkiOiJrZXk9JChrZXkpJnc9JChpbWFnZUluZm8ud2lkdGgpJmg9JChpbWFnZUluZm8uaGVpZ2h0KSZmbmFtZT0kKGZuYW1lKSZmc2l6ZT0kKGZzaXplKSZtaW1lVHlwZT0kKG1pbWVUeXBlKSZmdHlwZT0ke3g6ZnR5cGV9Jm1vZHVsZT0ke3g6bW9kdWxlfSZoYWxsX21vZHVsZT0ke3g6aGFsbF9tb2R1bGV9JnR5cGU9Y3JtcHViIn0=`;
      return Promise.resolve(token);
    };
    const images = ref([
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
    ]);
    // const videos = ref([]);
    return {
      fetchToken,
      images,
      videos: [],
    };
  },
};
</script>
