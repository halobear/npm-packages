const path = require('path')

module.exports = {
  publicPath: '/', // public path
  devServer: {
    proxy: 'https://www.luzhongkuan.cn',
    disableHostCheck: true,
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      symlinks: false, // 使用npm link
    },
    entry: {
      app: path.resolve(__dirname, 'test/index.js'),
    },
  },
  productionSourceMap: false,
}
