<template>
  <draggable
    class="vue-upload-container"
    draggable=".image-card"
    :value="value"
    @input="$emit('input', $event)"
    @start="dragStart"
    @end="dragEnd"
  >
    <image-card v-for="(item, key) in value" :key="key" :data="item" />
    <upload-card />
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import ImageCard from "./components/ImageCard";
import UploadCard from "./components/UploadCard";

export default {
  components: {
    draggable,
    ImageCard,
    UploadCard
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    dragStart() {
      console.log("start");
    },
    dragEnd() {
      console.log("end");
    }
  }
};
</script>

<style lang="less">
@import "./styles/iconfont.css";
.vue-upload-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
