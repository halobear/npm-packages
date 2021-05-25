<template>
  <div @click="click" :class="{ 'file-card': !isImage, 'image-card': isImage }">
    <img
      v-if="data.url && isImage"
      class="origin-img animated"
      :src="data.url"
    />
    <p @click="open(data.url)" v-else-if="!isImage">
      {{ data.path || data.url }}
    </p>
    <div class="action-box">
      <i v-if="isImage" @click.stop="preview" class="iconfont icon-eye"></i>
      <i @click="remove" class="iconfont icon-delete"></i>
    </div>
  </div>
</template>

<script>
import photoSwipe from "kuan-vue-photoswipe";
import { computed } from "vue";

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    accept: {
      type: String,
    },
  },
  emits: ["click", "remove"],
  setup(props, { emit }) {
    const isImage = computed(() => props.accept === "image/*");

    const click = () => {
      emit("click", props.data);
    };
    const remove = () => {
      emit("remove", props.data);
    };
    const preview = () => {
      let { url = "" } = props.data;
      if (!url.includes("?")) {
        url = url.replace(/-300x300/, "");
      }
      if (url) {
        photoSwipe.preview(url);
      }
    };
    const open = (url) => {
      window.open(url);
    };
    return {
      isImage,
      click,
      remove,
      preview,
      open,
    };
  },
};
</script>

<style lang="less">
.image-card.sortable-ghost {
  opacity: 0.2;
  .action-box {
    opacity: 0;
  }
}
.image-card.sortable-chosen {
  .action-box {
    opacity: 0;
  }
}
</style>

<style lang="less" scoped>
@import "../styles/variables.less";
.file-card {
  display: flex;
  align-items: center;
  padding-right: 20px;
  width: 100%;
  color: #666;
  &:hover {
    color: #333;
  }
  p {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    cursor: pointer;
    margin-right: 10px;
  }
  .iconfont {
    cursor: pointer;
  }
}

.image-card {
  width: @outer-width;
  height: @outer-width;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  margin-right: 8px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  &:hover {
    border-color: #ddd;
    .action-box {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
    }
  }
  .action-box {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: @inner-width;
    height: @inner-width;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    visibility: hidden;
    opacity: 0;
    .iconfont {
      padding: 0 5px;
      cursor: pointer;
    }
  }
}
.origin-img {
  object-fit: cover;
  width: @inner-width;
  height: @inner-width;
  animation-name: imgCard;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes imgCard {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
