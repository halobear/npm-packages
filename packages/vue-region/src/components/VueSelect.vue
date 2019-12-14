<template>
  <div
    class="vue-select"
    :class="{ active: active && options.length, 'show-search': showSearch }"
  >
    <div class="select">
      <input
        :readonly="!showSearch"
        :placeholder="text || placeholder"
        :value="active ? filterText : text"
        @focus="show"
        @blur="hide"
        @input="changeValue"
        class="text"
      />
      <i v-if="options.length" class="iconfont icon-right"></i>
    </div>
    <transition-view class="dropdown-outer" :visible="active">
      <ul class="dropdown-select">
        <li
          v-for="item in filterOptions"
          :key="item.value"
          :class="{ active: item.value == value }"
          @click.stop="select(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition-view>
  </div>
</template>

<script>
import TransitionView from "./TransitionView";

export default {
  components: {
    TransitionView
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: false,
      filterText: ""
    };
  },
  computed: {
    text() {
      const { options = [], value = "" } = this;
      const target = options.find(item => item.value === value);
      return target ? target.label : value;
    },
    filterOptions() {
      const { filterText } = this;
      if (!filterText) return this.options;
      return this.options.filter(item => item.label.includes(filterText));
    }
  },
  methods: {
    changeValue(e) {
      this.filterText = e.target.value;
    },
    select(value) {
      this.$emit("input", value);
    },
    hide() {
      setTimeout(() => {
        this.active = false;
      }, 200);
    },
    show() {
      this.active = true;
      this.filterText = "";
    }
  }
};
</script>

<style lang="less" scoped>
@primary-color: #1890ff;
@plain-color: #e6f7ff;
@plain-shadow: 0 0 0 1px rgba(24, 144, 255, 0.2);

@import "../styles/iconfont.css";
.vue-select {
  max-width: 120px;
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
  transition: all 0.5s ease;
  position: relative;
  font-size: 12px;
  color: #474747;
  height: 100%;
  text-align: left;
  border: 1px solid #d9d9d9;
}
.vue-select .select {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 8px;
  .text {
    width: 100%;
    flex: 1;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 8px 0;
    font-size: 12px;
    background-color: transparent;
  }
}
.vue-select .select > i {
  font-size: 13px;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  float: right;
  line-height: 15px;
  transform: rotate(90deg);
}
.vue-select:hover {
  box-shadow: 0 0 4px rgb(204, 204, 204);
}
.vue-select:active {
  background-color: #fafafa;
}
.vue-select.active:hover,
.vue-select.active {
  border-radius: 3px 3px 0 0;
  background-color: #fafafa;
  border-color: @primary-color;
  border-bottom-color: none;
  box-shadow: @plain-shadow;
}
.vue-select.active.show-search {
  .text {
    cursor: text;
  }
}
.vue-select.active .select > i {
  transform: rotate(-90deg);
}
.vue-select .dropdown-outer {
  position: absolute;
  width: 100%;
  left: 0;
  margin-top: 1px;
}
.vue-select .dropdown-select {
  background-color: #fff;
  padding: 5px 0;
  margin-top: 0;
  box-shadow: 0 1px 5px rgb(204, 204, 204);
  border-radius: 0 1px 5px 5px;
  display: block;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9;
  list-style: none;
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
}
.vue-select .dropdown-select li {
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  box-sizing: border-box;
  &.active {
    background-color: #f7f7f7;
  }
  &:hover,
  &:active {
    background-color: @plain-color;
  }
}
</style>
