<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-upload</h2>
    <upload
      v-model="value"
      :fetchToken="testToken"
      :params="params"
      :limit="5"
    />
    <p style="padding-top: 20px;">{{ value }}</p>
  </div>
</template>

<script>
import Upload from "@halobear/vue-upload";

function testToken() {
  return "m_bQ6vCqK-1n_myddynLMQxg0rxw3YqRptv5D7_i:8Oba8VIRsUzpOY1EGZ1QsT7jMlE=:eyJzY29wZSI6ImNybXB1YiIsImRlYWRsaW5lIjoxNTc3OTQ4NDI5LCJzYXZlS2V5Ijoid2VkZGluZ1wvJChldGFnKSQoc3VmZml4KSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6XC9cL2FwcC1kYXNoYm9hcmQud2VkZGluZ2VlLmNvbVwvYXBpXC9oYWxvLWRhc2hib2FyZFwvdjFcL3VwbG9hZFwvcWluaXUiLCJjYWxsYmFja0JvZHkiOiJrZXk9JChrZXkpJnc9JChpbWFnZUluZm8ud2lkdGgpJmg9JChpbWFnZUluZm8uaGVpZ2h0KSZmbmFtZT0kKGZuYW1lKSZmc2l6ZT0kKGZzaXplKSZtaW1lVHlwZT0kKG1pbWVUeXBlKSZmdHlwZT0ke3g6ZnR5cGV9Jm1vZHVsZT0ke3g6bW9kdWxlfSZoYWxsX21vZHVsZT0ke3g6aGFsbF9tb2R1bGV9JnR5cGU9Y3JtcHViIn0=";
}

export default {
  components: {
    Upload
  },
  data() {
    return {
      value: [
        { url: "http://pic.kuan1.top/e12720a8cee945216bc5e516fcb36028.png" },
        { url: "http://pic.kuan1.top/0b5934b623f3c6f5377f221959d77982.gif" },
        { url: "http://pic.kuan1.top/38d54e7711a19ac1ca08f134934bdbf3.png" }
      ],
      params: {
        test: 1
      }
    };
  },
  methods: {
    testToken
  }
};
</script>

<style></style>
