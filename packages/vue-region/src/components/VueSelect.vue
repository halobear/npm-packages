<template>
  <div class="vue-select" :class="{active}">
    <div @click="active = !active" class="select">
      <span>Select Gender</span>
      <i class="iconfont icon-right"></i>
    </div>
    <ul class="dropdown-select">
      <li id="male">Male</li>
      <li id="female">Female</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/iconfont.css";
.vue-select {
  width: 200px;
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px rgb(204, 204, 204);
  transition: all 0.5s ease;
  position: relative;
  font-size: 14px;
  color: #474747;
  height: 100%;
  text-align: left;
}
.vue-select .select {
  cursor: pointer;
  display: block;
  padding: 10px;
}
.vue-select .select > i {
  font-size: 13px;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  float: right;
  line-height: 20px;
  transform: rotate(90deg);
}
.vue-select:hover {
  box-shadow: 0 0 4px rgb(204, 204, 204);
}
.vue-select:active {
  background-color: #f8f8f8;
}
.vue-select.active:hover,
.vue-select.active {
  box-shadow: 0 0 4px rgb(204, 204, 204);
  border-radius: 5px 5px 0 0;
  background-color: #f8f8f8;
}
.vue-select.active .select > i {
  transform: rotate(-90deg);
}
.vue-select .dropdown-select {
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
  padding: 0;
  margin-top: 1px;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 5px 5px;
  overflow: hidden;
  display: none;
  max-height: 144px;
  overflow-y: auto;
  z-index: 9;
  list-style: none;
}
.vue-select.active .dropdown-select {
  display: block;
}
.vue-select .dropdown-select li {
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.vue-select .dropdown-select li:hover {
  background-color: #f2f2f2;
}
.vue-select .dropdown-select li:active {
  background-color: #e2e2e2;
}
</style>
