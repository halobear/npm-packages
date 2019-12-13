## @halobear/vue-upload

> axios 在 vue 中使用, 添加 loading、根据幻熊自动提示错误

## 安装

```bash
yarn add @halobear/vue-upload
```

## 使用

```js
import { createApi, encrypt } from "@halobear/vue-upload";

const request = createApi({
  /* 自定义loading */
  // loading: () => {},

  /* 自定义提示 */
  // toast: () => {},

  /* 自定义错误处理 */
  // handleError: () => {},

  /* axios默认配置 */
  // createOptions: {
  //   baseURL: 'https://test.com'
  // },

  /* 返回401登陆之后再次尝试发送请求 */
  // loginForce() {
  //   console.log('登录逻辑')
  // },

  // 动态设置 headers
  setHeaders(config) {
    const { params = {}, data = {} } = config;
    const key = "";
    const token = "";
    const now = Date.parse(new Date()) / 1000;
    const headers = {
      "X-Halo-App": "oa-dkp",
      "X-Http-Request-Halo-Time": now,
      "X-Http-Request-Halo-Sign": encrypt(
        { ...params, ...data, time: now },
        key
      )
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }
});
```

## [示例](https://halobear.github.io/npm-packages/vue-upload/demo.html)
