import LayoutHeader from './src/index.vue'

LayoutHeader.install = Vue => {
  Vue.component('layout-header', LayoutHeader)
}

export default LayoutHeader
