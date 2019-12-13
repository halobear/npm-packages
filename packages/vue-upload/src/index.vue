<template>
  <draggable
    class="vue-upload-container"
    draggable=".image-card"
    :value="value"
    @input="changeValue"
    @start="dragStart"
    @end="dragEnd"
  >
    <image-card
      v-for="(item, key) in value"
      :key="key"
      :data="item"
      @remove="remove(key)"
    />
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
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {
      dataValue: this.value || []
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.dataValue = value;
      }
    }
  },
  methods: {
    dragStart() {
      console.log("start");
    },
    dragEnd() {
      console.log("end");
    },
    changeValue(value) {
      this.dataValue = value;
      this.$emit("change", value);
    },
    remove(index) {
      this.dataValue.splice(index, 1);
      this.changeValue(this.dataValue);
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
