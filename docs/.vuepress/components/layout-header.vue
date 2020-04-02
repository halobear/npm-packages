<template>
  <div class="layout-wrapper">
    {{menus}}
    <layout-header @select="onSelect" v-model="menus" @change="onChange"></layout-header>
  </div>
</template>

<script>
import LayoutHeader from "@halobear/layout-header";

export default {
  components: {
    LayoutHeader
  },
  data() {
    return {
      menus: ['licheng', 'four']
    };
  },
  methods: {
    onChange() {
      console.log(this.menus, 'menus')
    },
    onSelect(res) {
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
