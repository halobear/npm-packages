import VueDebug from './src/VueDebug.vue'

VueDebug.install = Vue => {
  Vue.component('vue-debug', VueDebug)
}

export default VueDebug
