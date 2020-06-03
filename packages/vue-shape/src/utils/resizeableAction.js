import Vue from 'vue'
import ResizeableAction from '../components/ResizeableAction'

const noop = () => {}
let views

const resizeableAction = {
  show(options = {}, body = document.body) {
    const { data = {}, change = noop, changeParent = noop } = options
    // 服务端渲染
    if (typeof document === 'undefined') return

    if (!views) {
      const Instance = Vue.extend(ResizeableAction)
      views = new Instance()
      const vm = views.$mount()
      body.appendChild(vm.$el)
    }
    views.visible = true
    views.change = change
    views.changeParent = changeParent
    resizeableAction.changeData(data)
  },
  changeData(data = {}) {
    if (!views) return
    Object.keys(data).forEach((key) => {
      views[key] = data[key]
    })
  },
  hide() {
    if (!views) return
    views.visible = false
    views.change = noop
    views.changeParent = noop
  },
}

export default resizeableAction
