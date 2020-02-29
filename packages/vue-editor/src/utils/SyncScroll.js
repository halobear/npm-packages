/**
 * @description: 同步滚动
 * @param l 左边容器
 * @param r 右边容器
 */
class SyncScroll {
  constructor(l, r) {
    this.currentTab = 1
    this.l = l
    this.r = r
    this.lScroll = this.lScroll.bind(this)
    this.rScroll = this.rScroll.bind(this)
    this.lOver = this.lOver.bind(this)
    this.rOver = this.rOver.bind(this)
    this.init()
  }
  init() {
    this.l.addEventListener('scroll', this.lScroll)
    this.r.addEventListener('scroll', this.rScroll)
    this.l.addEventListener('mouseover', this.lOver)
    this.r.addEventListener('mouseover', this.rOver)
  }
  destroy() {
    this.l && this.l.removeEventListener('scroll', this.lScroll)
    this.r && this.r.removeEventListener('scroll', this.rScroll)
    this.l && this.l.removeEventListener('mouseover', this.lOver)
    this.r && this.r.removeEventListener('mouseover', this.rOver)
  }
  lScroll() {
    if (this.currentTab !== 1) return
    this.r.scrollTop = this.l.scrollTop * this.getScale()
  }
  rScroll() {
    if (this.currentTab !== 2) return
    this.l.scrollTop = this.r.scrollTop / this.getScale()
  }
  lOver() {
    this.currentTab = 1
  }
  rOver() {
    this.currentTab = 2
  }
  getScale() {
    const rh = this.r.scrollHeight - this.r.offsetHeight
    const lh = this.l.scrollHeight - this.l.offsetHeight
    return rh / lh
  }
}

export default SyncScroll
