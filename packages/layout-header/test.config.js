module.exports = {
  publicPath: '/', // public path
  devServer: {
    port: '10086'
  },
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      symlinks: false // 使用npm link
    },
    entry: {
      app: './index.js'
    }
  },
  productionSourceMap: false
}
