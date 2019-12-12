<template>
  <div class="test-container">
    <h2 class="title">@halobear/vue-dialog</h2>
    <button @click="showDialog('center')" class="k-btn k-btn-primary">
      居中弹窗
    </button>
    <button @click="showDialog('bottom')" class="k-btn k-btn-primary">
      底部弹窗
    </button>
    <button @click="showDialog('top')" class="k-btn k-btn-primary">
      上部弹窗
    </button>
    <vue-dialog :direction="direction" v-model="visible">
      <div class="test-inner"></div>
    </vue-dialog>
  </div>
</template>

<script>
import "kuan-css";
import { VueDialog } from "@packages/vue/index";

export default {
  components: {
    VueDialog
  },
  data() {
    return {
      visible: false,
      direction: "center"
    };
  },
  methods: {
    showDialog(direction) {
      this.direction = direction;
      this.visible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.test-inner {
  width: 200px;
  height: 200px;
  background: white;
}
</style>
