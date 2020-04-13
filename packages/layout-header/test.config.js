const path = require('path')

module.exports = {
  publicPath: '/', // public path
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      symlinks: false // 使用npm link
    },
    entry: {
      app: path.resolve(__dirname, 'src/test')
    }
  },
  productionSourceMap: false
}
