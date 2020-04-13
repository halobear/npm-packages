<template>
  <div class="layout-wrapper">
    {{menus}}
    <aa @select="onSelect" v-model="menus" @change="onChange"></aa>
  </div>
</template>

<script>
import aa from "@halobear/layout-header";

export default {
  components: {
    aa
  },
  data() {
    return {
      menus: ["licheng", "four"]
    };
  },
  methods: {
    onChange() {
      console.log(this.menus, "menus");
    },
    onSelect(res) {
      console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
