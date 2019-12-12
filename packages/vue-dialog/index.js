import VueDialog from './src/VueDialog.vue'

VueDialog.install = Vue => {
  Vue.component('vue-dialog', VueDialog)
}

export default VueDialog
