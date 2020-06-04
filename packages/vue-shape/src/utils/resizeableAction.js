import Vue from 'vue'
import ResizeableAction from '../components/ResizeableAction'

const noop = () => {}
let views
let lastShowTime = 0

const resizeableAction = {
  show(options = {}, body = document.body) {
    const { data = {}, change = noop, changeParent = noop } = options
    // 服务端渲染
    if (typeof document === 'undefined') return
    // 触发显示后隐藏
    lastShowTime = new Date().getTime()

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
    if (!views || new Date().getTime() - lastShowTime < 300) return
    views.visible = false
    views.change = noop
    views.changeParent = noop
  },
}

export default resizeableAction
