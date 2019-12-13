<template>
  <draggable
    class="vue-upload-container"
    draggable=".image-card"
    :value="value"
    @input="changeValue"
  >
    <image-card v-for="(item, key) in value" :key="key" :data="item" @remove="remove(key)" />
    <upload-card v-if="dataValue.length < limit" :progress="progress" @click="upload" />
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
      type: Function
    },
    limit: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 20 // 限制文件大小20
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    needMD5: {
      type: Boolean,
      default: true // 是否获取文件MD5
    }
  },
  data() {
    return {
      dataValue: this.value || [],
      progress: 0
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
    changeValue(value) {
      this.dataValue = value;
      this.$emit("change", value);
    },
    onProgress(progress) {
      const { loaded, total } = progress;
      this.progress = Math.floor((loaded * 100) / total);
    },
    remove(index) {
      this.dataValue.splice(index, 1);
      this.changeValue(this.dataValue);
    },
    async upload() {
      const res = await upload({
        formData: this.params,
        size: this.size,
        limit: this.limit - this.dataValue.length,
        needMD5: this.needMD5,
        fetchToken: this.fetchToken,
        onProgress: this.onProgress,
        width: this.width,
        height: this.height
      });
      this.changeValue([...this.dataValue, ...res]);
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
