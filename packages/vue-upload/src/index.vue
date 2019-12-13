<template>
  <draggable
    class="vue-upload-container"
    draggable=".image-card"
    :value="value"
    @input="changeValue"
    @start="dragStart"
    @end="dragEnd"
  >
    <image-card v-for="(item, key) in value" :key="key" :data="item" @remove="remove(key)" />
    <upload-card @click="upload" />
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import upload from "./utils/upload";

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
    },
    params: {
      type: Object,
      default: () => ({})
    },
    fetchToken: {
      type: Object,
      default: () => ({ token: "" })
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
    onProgress(progress) {
      console.log("上传进度", progress);
    },
    remove(index) {
      this.dataValue.splice(index, 1);
      this.changeValue(this.dataValue);
    },
    async upload() {
      const res = await upload({
        formData: this.params,
        fetchToken: this.fetchToken
      });
      console.log(res);
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
