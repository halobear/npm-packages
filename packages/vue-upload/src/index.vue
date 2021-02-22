<template>
  <div
    @drop.prevent="drop"
    @dragover.prevent="isOver = true"
    @dragleave.prevent="isOver = false"
  >
    <draggable
      class="vue-upload-container"
      :class="{ 'file-upload-container': accept !== 'image/*' }"
      draggable=".image-card"
      :value="value"
      @input="changeValue"
    >
      <image-card
        v-for="(item, key) in value"
        :key="key"
        :accept="accept"
        :data="item"
        @remove="remove(key)"
      />
      <upload-card
        v-if="dataValue.length < limit"
        :progress="progress"
        :class="{ 'is-over': isOver }"
        @click="upload"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import uploader from "kuan-utils/lib/uploader";
import upload from "./utils/upload";

import ImageCard from "./components/ImageCard";
import UploadCard from "./components/UploadCard";

export default {
  components: {
    draggable,
    ImageCard,
    UploadCard,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Array,
    },
    params: {
      type: Object,
      default: () => ({}),
    },
    fetchToken: {
      type: Function,
    },
    limit: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 20, // 限制文件大小20
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    accept: {
      type: String,
      default: "image/*",
    },
    needMD5: {
      type: Boolean,
      default: false, // 是否获取文件MD5
    },
  },
  data() {
    return {
      dataValue: this.value || [],
      progress: 0,
      isOver: false,
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.dataValue = value || [];
      },
    },
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
    async drop(e) {
      const filesList = [...((e.dataTransfer && e.dataTransfer.files) || [])];
      // 获取文件列表
      const files = await filesList.map((file) => ({
        file,
        name: file.name,
      }));
      if (this.beforeUpload) {
        await this.beforeUpload(filesList);
      }
      this.$emit("beforeUpload", filesList);
      const res = await upload({
        files,
        formData: this.params,
        size: this.size,
        limit: this.limit - this.dataValue.length,
        needMD5: this.needMD5,
        fetchToken: this.fetchToken,
        onProgress: this.onProgress,
        width: this.width,
        height: this.height,
        beforeUpload: this.beforeUpload,
      });
      this.changeValue([...this.dataValue, ...res]);
    },
    async upload() {
      // 获取文件列表
      const files = await uploader.getFiles({
        multiple: this.limit > 1,
        needMD5: this.needMD5,
        accept: this.accept,
      });
      const filesList = files.map((item) => item.file);
      if (this.beforeUpload) {
        await this.beforeUpload(filesList);
      }
      this.$emit("beforeUpload", filesList);
      const res = await upload({
        files,
        formData: this.params,
        size: this.size,
        limit: this.limit - this.dataValue.length,
        needMD5: this.needMD5,
        fetchToken: this.fetchToken,
        onProgress: this.onProgress,
        width: this.width,
        height: this.height,
        beforeUpload: this.beforeUpload,
      });
      this.changeValue([...this.dataValue, ...res]);
    },
  },
};
</script>

<style lang="less">
@import "./styles/iconfont.css";
.vue-upload-container {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
}
.file-upload-container {
  display: block;
}
</style>
