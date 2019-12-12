import Vue from 'vue'

/**
 * @description: 通过js通知vue组件的显示隐藏
 * @param {Component} Component vue组件
 * @return: Object{show,hide}
 */
export default class VueMonitor {
  constructor(Component) {
    this.Component = Vue.extend(Component)
    this.instance = ''
  }
  // 显示组件
  show(...args) {
    if (typeof window === 'undefined') return
    if (!this.instance) {
      this.instance = new this.Component({
        el: document.createElement('div')
      })
      document.body.appendChild(this.instance.$el)
    }

    Vue.nextTick(() => {
      const { instance } = this
      if (instance) {
        instance.visible = true
        if (instance.show) {
          instance.show(...args)
        }
      }
    })
  }

  // 隐藏组件
  hide() {
    const { instance } = this
    if (instance) {
      this.instance.visible = false
      if (instance.hide) {
        instance.hide()
      }
    }
  }
}
