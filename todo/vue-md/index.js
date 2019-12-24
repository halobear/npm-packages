import VueAmap from "./src/index.vue";

VueAmap.install = Vue => {
  Vue.component("vue-md", VueAmap);
};

export default VueAmap;
