import VueAmap from "./src/index.vue";

VueAmap.install = Vue => {
  Vue.component("vue-amap", VueAmap);
};

export default VueAmap;
