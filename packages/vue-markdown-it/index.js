import MarkdownEditor from './src/index.vue'

MarkdownEditor.install = (Vue) => {
  Vue.component('markdown-editor', MarkdownEditor)
}

export default MarkdownEditor
