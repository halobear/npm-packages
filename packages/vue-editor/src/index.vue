<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import MarkdowIt from "markdown-it";

export default {
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sourceData: this.source
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.md = new MarkdowIt();
    },
    html() {
      if (!this.md) return "";
      return this.md.render(this.sourceData);
    }
  }
};
</script>

<style>
</style>