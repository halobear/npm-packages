import VueShape from './src/Shape.vue'

VueShape.install = (Vue) => {
  Vue.component('vue-shape', VueShape)
}

export default VueShape
