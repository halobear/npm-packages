<template>
  <div class="editor-outer">
    <md-editor
      v-if="t === 'markdown'"
      :type.sync="t"
      :multiple="multiple"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <rich-editor v-else />
  </div>
</template>

<script>
import MdEditor from "./MdEditor";
import RichEditor from "./RichEditor";

export default {
  components: {
    MdEditor,
    RichEditor
  },
  props: {
    type: {
      type: String,
      default: "markdown"
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      t: this.type
    };
  }
};
</script>