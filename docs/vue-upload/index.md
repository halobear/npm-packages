## @halobear/vue-upload

> vue 上传组件封装

## 安装

```bash
yarn add @halobear/vue-upload
```

## 使用

```html
<template>
  <div>
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
  import Upload from "../index.vue";

  function testToken() {
    return "";
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
```

## [示例](./demo)
