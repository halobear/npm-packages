import { loading } from '@luzhongk/vue-feedback'

export default {
  num: 0,
  show() {
    this.num += 1
    if (this.num === 1) {
      loading.show()
    }
  },
  hide(force = false) {
    if (force) {
      this.num = 0
      loading.hide()
      return
    }
    // 等待发出去的请求返回结果后结束loading
    if (this.num > 0) this.num -= 1
    if (this.num === 0) {
      loading.hide()
    }
  }
}
