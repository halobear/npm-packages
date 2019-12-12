import axios from "axios";
import loadingCtrl from "./utils/loading";
import toastCtrl from "./utils/toast";
import { getErrMsg, getErrStatus } from "./utils/util";

const noop = () => {};

// 数据缓存对象
const cache = {};

export default function createApi({
  loading = loadingCtrl, // loading方法
  toast = toastCtrl, // 提示方法
  setHeaders = noop, // 动态设置headers
  handleError = noop, // 自定义错误处理
  loginForce = null, // 返回401登录后再次尝试
  createOptions = {}, // axios默认设置
  maxCount = 1
} = {}) {
  // axios接口返回对象
  const instance = axios.create(createOptions);
  // 动态设置headers
  instance.interceptors.request.use(config => {
    const headers = setHeaders(config) || {};
    Object.assign(config.headers, headers);
    return config;
  });

  return async (
    options,
    { shouldLoading = true, shouldToast = true, shouldCache = false } = {}
  ) => {
    // 是否缓存
    if (shouldCache) {
      const targetCache = cache[options.url];
      if (targetCache) return targetCache;
    } else {
      delete cache[options.url];
    }

    // 是否loadding
    if (shouldLoading) loading.show();

    for (let i = 0; i < maxCount + 1; i++) {
      try {
        const response = await instance(options);
        const { data } = response;

        // 取消loading
        if (shouldLoading) loading.hide();

        // 缓存结果
        if (shouldCache) {
          cache[options.url] = data.data;
        }

        // 后台返回自定义错误
        if (!data.success && !data.iRet) {
          const message = data.info || data.error || ""; // 错误信息
          const err = new Error(message); // eslint-disable-line
          err.response = response;

          // 统一错误处理
          handleError(err);
          throw err;
        }

        // 返回接口内容
        return data.data;
      } catch (e) {
        console.error(`${options.url}`, e.response || "");
        if (i < maxCount) {
          const status = getErrStatus(e);
          // 401重新登录
          if (status === 401 && loginForce) {
            await loginForce();
            continue;
          }
        }

        // 消除错误提示
        if (shouldLoading) loading.hide(true);

        // 错误信息提示
        if (shouldToast) {
          toast(getErrMsg(e));
        }

        // 自定义错误处理
        handleError(e);
        return Promise.reject(e);
      }
    }
  };
}
