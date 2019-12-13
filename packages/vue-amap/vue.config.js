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
      axios: "axios"
    }
  },
  productionSourceMap: false
};
