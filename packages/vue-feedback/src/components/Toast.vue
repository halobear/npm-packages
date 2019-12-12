<template>
  <div class="loading-container-monitor" v-if="visible">
    <div class="loading animated fadeIn">
      <span class="tips" v-html="tips"></span>
    </div>
  </div>
</template>
<script>
function preventDefault(e) {
  e.preventDefault()
}

export default {
  name: 'toast',
  data() {
    return {
      visible: false,
      tips: ''
    }
  },
  methods: {
    show(tips = '') {
      if (typeof window === 'undefined') return
      if (!tips) return
      this.tips = tips
      this.visible = true
      document.body.addEventListener('touchmove', preventDefault)
    },
    hide() {
      if (typeof window === 'undefined') return
      this.visible = false
      document.body.removeEventListener('touchmove', preventDefault)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>

