import VueAmap from "./src/index.vue";

VueAmap.install = Vue => {
  Vue.component("vue-boilerplate", VueAmap);
};

export default VueAmap;