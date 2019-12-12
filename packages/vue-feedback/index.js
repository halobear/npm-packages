import loading from "./src/loading";
import toast from "./src/toast";

export { loading, toast };

export default {
  install(Vue) {
    Vue.prototype.$toast = toast;
    Vue.prototype.$loading = loading;
  }
};
