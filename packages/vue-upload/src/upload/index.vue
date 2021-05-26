<template>
  <div
    ref="container"
    class="vue-upload-container"
    :class="{ 'file-upload-container': accept !== 'image/*' }"
  >
    <image-card
      v-for="(item, key) in dataValue"
      :key="(item || {}).key || key"
      :accept="accept"
      :data="item"
      @remove="remove(key)"
    />
    <upload-card
      v-if="dataValue.length < limit"
      :progress="progress"
      @click="clickUpload"
      @drop="dropUpload"
    />
  </div>
</template>

<script>
import useDraggable from "./use/use-draggable";
import useUpload from "./use/use-upload";

import ImageCard from "./components/image-card.vue";
import UploadCard from "./components/upload-card.vue";

export default {
  components: {
    ImageCard,
    UploadCard,
  },
  props: {
    action: {
      type: String,
      default: "https://upload.qiniup.com",
    },
    value: {
      type: Array,
      default: () => [],
    },
    accept: {
      type: String,
      default: "image/*",
    },
    limit: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 20, // 限制文件大小20M
    },
    params: {
      type: Object,
      default: () => ({}),
    },
    token: {
      type: [Function, String],
    },
    beforeUpload: {
      type: Function,
    },
  },
  emits: ["change", "update:value"],
  setup(props, context) {
    const {
      dataValue,
      progress,
      change,
      remove,
      clickUpload,
      dropUpload,
    } = useUpload(props, context);
    const { container } = useDraggable(props, change);

    return {
      dataValue,
      progress,
      remove,
      clickUpload,
      dropUpload,
      container,
    };
  },
};
</script>

<style lang="less">
@import "./styles/iconfont.css";
</style>

<style lang="less" scoped>
.vue-upload-container {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
}
.file-upload-container {
  display: block;
}
</style>