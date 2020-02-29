<template>
  <div class="editor-outer">
    <md-editor v-if="t === 'markdown'" :type.sync="t" v-bind="$attrs" v-on="$listeners"></md-editor>
  </div>
</template>

<script>
import MdEditor from "./MdEditor";

export default {
  components: {
    MdEditor
  },
  props: {
    type: {
      type: String,
      default: "markdown"
    }
  },
  data() {
    return {
      t: this.type
    };
  }
};
</script>