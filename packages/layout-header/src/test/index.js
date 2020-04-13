import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import Vue from 'vue'
import Upload from '../index.vue'

Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(Upload)
}).$mount('#app')
