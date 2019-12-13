<template>
  <ClientOnly>
    <components v-if="is" :is="is"></components>
  </ClientOnly>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      is: ""
    };
  },
  mounted() {
    import("./vue-upload").then(module => {
      this.is = module.default;
    });
  }
};
</script>

<style></style>
