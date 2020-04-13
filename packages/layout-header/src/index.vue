<template>
  <div id="app">
    <div class="layout-header-wrapper">
      <Modal :data="value" v-model="visible" :isShow="isShow" @select="open" @add="add"></Modal>
      <swiper ref="mySwiper" :options="swiperOptions" class="banner-list">
        <swiper-slide>
          <div
            @mouseleave="visible=false,isShow=false"
            @mouseover="visible=true,isShow=false"
            class="banner-item"
          >幻熊产品</div>
        </swiper-slide>
        <swiper-slide
          class="banner-item"
          :class="location.includes(it.path) ? 'active' : ''"
          v-for="(it, i) in menuRoutes"
          :key="i"
        >{{ it.name }}</swiper-slide>
        <swiper-slide class="icon-item">
          <img class="icon" @click="isShow=true,visible=true" src="./image/add.png" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import menuRoutes from "./config";
import Modal from "./components/Modal";

import "swiper/css/swiper.css";

export default {
  name: "layout-header",
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    location() {
      return this.$route ? this.$route.path : window.location.hash;
    }
  },
  data() {
    let that = this;
    return {
      menuRoutes,
      isShow: false,
      visible: false,
      swiperOptions: {
        freeMode: true,
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 8,
            spaceBetween: 20
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 18,
            spaceBetween: 30
          }
        },
        on: {
          click: function() {
            if (
              this.clickedIndex &&
              this.clickedIndex === menuRoutes.length - 1
            ) {
              let it = menuRoutes[this.clickedIndex];
              that.open(it);
            }
          }
        }
      }
    };
  },
  methods: {
    // 点击跳转事件
    open(it) {
      this.$emit("select", it);
    },
    // 点击添加事件
    add(res) {
      this.$emit("add", res);
      this.$emit("change", res);
      this.$emit("input", res);
    }
  }
};
</script>
<style lang="less" scoped>
.layout-header-wrapper {
  font-size: 14px;
  width: 100%;
  height: 65px;
  // background-color: red;
  display: flex;
  align-items: center;
  color: #a5abb2;
  position: relative;
  z-index: 9999;
  .banner-list {
    height: 100%;
    width: 100%;
    .banner-item {
      cursor: pointer;
      line-height: 65px;
      text-align: center;
      &:hover {
        color: rgb(62, 108, 194);
      }
    }
    .icon-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
    .active {
      color: rgb(62, 108, 194);
    }
  }
}
</style>
