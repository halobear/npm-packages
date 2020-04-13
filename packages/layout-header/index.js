import Vue from 'vue'
import Upload from './src/index.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(Upload)
}).$mount('#app')
