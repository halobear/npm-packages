<template>
  <div
    @mouseleave="$emit('input',false)"
    @mousemove="$emit('input',true)"
    class="globale-modal-container"
    :class="visible ? 'show' : ''"
    v-show="visible"
  >
    <!-- 查看 -->
    <div v-if="!isShow" class="router-list flex">
      <div
        @click="open(it)"
        :class="location.includes(it.path) ? 'active' : ''"
        class="router-item"
        v-for="(it,i) in menuRoutes"
        :key="i"
      >{{it.name}}</div>
    </div>
    <!-- 添加 -->
    <div v-else class="router-list flex">
      <div class="item middle-flex" v-for="(it,i) in menuRoutes" :key="i">
        <input
          :id="it.path"
          :checked="data.includes(it.path)"
          type="checkbox"
          :name="it.name"
          :value="it.path"
          style="margin-right:5px"
          @click="onCheckoutChange"
        />
        <label :for="it.path" class="text">{{it.name}}</label>
      </div>
    </div>
    <!-- 确定，添加 -->
    <div v-if="isShow" class="middle-flex bottom">
      <div class="close" @click="$emit('input',false)">取消</div>
      <div class="enter" style="margin-right:10px;" @click="add">添加</div>
    </div>
  </div>
</template>

<script>
import menuRoutes from '../config'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuRoutes,
      visible: this.value,
      checkRoutes: this.data
    };
  },
  watch: {
    data() {
      this.checkRoutes = this.data
    },
    value() {
      this.visible = this.value
    }
  },
  computed: {
    location() {
      return window.location.hash
    }
  },
  methods: {
    onCheckoutChange(e) {
      let { value = '' } = e.target
      let index = this.checkRoutes.findIndex(it => it === value)
      if (index > -1) {
        this.checkRoutes.splice(index, 1)
      } else {
        this.checkRoutes.push(value)
      }
    },
    open(it) {
      this.$emit('select', it)
    },
    add() {
      this.$emit('add', this.checkRoutes)
    }
  },
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.middle-flex {
  display: flex;
  align-items: center;
}
.globale-modal-container {
  font-size: 14px;
  line-height: 1;
  position: fixed;
  z-index: 99;
  top: 65px;
  left: 0;
  width: 1000px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 5px 5px;
  z-index: 999;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  color: #a5abb2;
  .router-list {
    flex-wrap: wrap;
    padding: 20px;
    .item {
      margin-right: 15px;
      margin-bottom: 15px;
    }
    .router-item {
      flex-shrink: 0;
      margin-right: 15px;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
    }
    .active {
      color: #1890ff;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    flex-direction: row-reverse;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .close {
      background-color: #ffffff;
      border-radius: 3px;
      padding: 8px 12px;
      cursor: pointer;
    }
    .enter {
      background-color: rgb(62, 108, 194);
      border-radius: 3px;
      padding: 8px 12px;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
.show {
  opacity: 1;
}
</style>
