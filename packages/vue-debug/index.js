import VueDebug from './src/VueDebug.vue'

import 'kuan-css/index.css'

VueDebug.install = Vue => {
  Vue.component('vue-debug', VueDebug)
}

export default VueDebug
