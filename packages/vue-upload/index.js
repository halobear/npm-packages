import Upload from "./src/index.vue";

Upload.install = Vue => {
  Vue.component("vue-qrcode", Upload);
};

export default Upload;
