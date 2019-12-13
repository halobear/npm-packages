<template>
  <div class="amap-outer">
    <div class="amap-container" ref="el"></div>
    <div class="lnglat">{{center.join('、')}}</div>
    <div class="search-box">
      <input
        @keyup.enter.stop.prevent="search"
        v-if="!disabled"
        v-model="word"
        placeholder="输入地点名搜索"
        class="k-input"
        ref="input"
      />
      <button @click="search" class="k-btn">确认搜索</button>
    </div>
  </div>
</template>

<script>
import amap from "./utils/amap";
import { BEIJING } from "./utils/constant.js";

export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Array
    },
    city: {
      type: String
    },
    keyword: {
      type: String,
      default: ""
    },
    zoom: {
      type: Number,
      default: 12
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      center: this.value || BEIJING,
      word: this.keyword,
      map: null,
      marker: null
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.center = value;
        this.addMarker(value);
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化地图
    async init() {
      const { center, disabled, zoom } = this;
      const { el, input } = this.$refs;
      const { map, marker } = await amap.init(
        { el, input, center, disabled, zoom },
        this.change
      );
      this.map = map;
      this.marker = marker;
    },
    // 删除旧的marker，添加新的marker
    addMarker([lng, lat]) {
      if (!this.marker || !this.map) return;
      // 删除旧的marker
      if (this.marker) {
        this.map.remove(this.marker);
      }
      this.marker = amap.addMarker(
        {
          map: this.map,
          lng,
          lat
        },
        this.change
      );
    },
    // 中心位置改变
    change(value, eventName) {
      if (eventName === "click") {
        this.addMarker(value);
      }
      if (this.map) {
        this.map.setCenter(value);
      }
      this.dataValue = value;
      this.$emit("change", this.dataValue);
    },
    // 搜索
    search() {
      setTimeout(async () => {
        const res = await amap.search(this.word, this.city);
        if (!res) return;
        const { lng, lat } = res.location || {};
        if (lng && lat) {
          // 添加markdown
          this.change([lng, lat], "click");
        }
      }, 50);
    }
  }
};
</script>

<style lang="less" scoped>
.amap-outer {
  height: 300px;
  position: relative;
}
.amap-container {
  height: 100%;
}
.lnglat {
  position: absolute;
  z-index: 1000;
  bottom: 5px;
  right: 5px;
}
.search-box {
  position: absolute;
  z-index: 1000;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 3px;
}
// input
.k-input {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px 12px;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  width: 250px;
  margin-right: 10px;
  &::-webkit-input-placeholder {
    color: #ccc;
  }
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
}
// button
.k-btn {
  appearance: none;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: inherit;
  font-size: 14px;
  height: 34px;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 0 10px;
  border: 1px solid #1890ff;
  cursor: pointer;
  background: #1890ff;
  color: white;
  &::after {
    content: "";
    opacity: 0;
    display: block;
    background: black;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  &:hover:not(:active)::after {
    opacity: 0.05;
  }
  &:active::after {
    opacity: 0.2;
  }
}
</style>