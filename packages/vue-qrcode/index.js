import Qrcode from './src/Qrcode.vue'

Qrcode.install = Vue => {
  Vue.component('vue-qrcode', Qrcode)
}

export default Qrcode
