import VueAmap from "./src/index.vue";

VueAmap.install = Vue => {
  Vue.component("vue-region", VueAmap);
};

export default VueAmap;
