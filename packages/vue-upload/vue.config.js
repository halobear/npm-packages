module.exports = {
  publicPath: "/", // public path
  devServer: {
    proxy: "https://www.luzhongkuan.cn",
    disableHostCheck: true
  },
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      symlinks: false // 使用npm link
    },
    entry: {
      app: "./index.js"
    },
    externals: {
      vue: { commonjs: "vue", commonjs2: "vue", root: "Vue" },
      axios: "axios",
      "spark-md5": "spark-md5",
      "kuan-vue-photoswipe": "kuan-vue-photoswipe",
      "@halobear/vue-feedback": "@halobear/vue-feedback"
    }
  },
  productionSourceMap: false
};
