import VueEditor from './src/index.vue'

VueEditor.install = Vue => {
  Vue.component('vue-editor', VueEditor)
}

export default VueEditor
