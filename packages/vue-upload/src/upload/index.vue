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
    <upload-card v-if="dataValue.length < limit" />
  </div>
</template>

<script>
import { watch, ref } from "vue";

import useDraggable from "./use/use-draggable";

import ImageCard from "./components/image-card.vue";
import UploadCard from "./components/upload-card.vue";

export default {
  components: {
    ImageCard,
    UploadCard,
  },
  props: {
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
  },
  emits: ["change", "update:value"],
  setup(props, { emit }) {
    const dataValue = ref(props.value || []);

    watch(props.value, (value) => {
      dataValue.value = value;
    });

    const changeValue = (value) => {
      dataValue.value = value;
      emit("update:value", value);
      emit("change", value);
    };

    const { container } = useDraggable(props, changeValue);

    const remove = (index) => {
      dataValue.value.splice(index, 1);
      changeValue(dataValue.value);
    };

    return {
      container,
      dataValue,
      remove,
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