<template>
  <canvas :style="{ height: h, width: w }" :url="url" ref="canvas"></canvas>
</template>

<script>
export default {
  name: "qrcode",
  props: {
    url: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: 200
    },
    height: {
      type: [String, Number],
      default: 200
    }
  },
  computed: {
    w() {
      const w = this.width.toString();
      if (/^\d*$/.test(w)) {
        return `${w}px`;
      }
      return w;
    },
    h() {
      const h = this.height.toString();
      if (/^\d*$/.test(h)) {
        return `${h}px`;
      }
      return h;
    }
  },
  watch: {
    url() {
      this.generateCode();
    }
  },
  methods: {
    generateCode() {
      if (!this.url) return;
      const { canvas } = this.$refs;
      const QRcode = require("qrcode");
      QRcode.toCanvas(
        canvas,
        this.url,
        { width: this.width, height: this.height, margin: "1" },
        err => {
          if (err) {
            console.error(err);
          }
        }
      );
    }
  },
  mounted() {
    this.generateCode();
  }
};
</script>
