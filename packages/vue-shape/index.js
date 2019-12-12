import VueShape from "./src/index.vue";

VueShape.install = Vue => {
  Vue.component("vue-shape", VueShape);
};

export default VueShape;
