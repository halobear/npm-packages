const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const resolve = dir => path.resolve(__dirname, dir)

const distName = 'dist' // 项目名称

module.exports = {
  publicPath: isDev ? '/' : `/`, // public path
  outputDir: resolve(`${distName}`), // 输入地址
  devServer: {
    proxy: 'https://www.luzhongkuan.cn',
    disableHostCheck: true
  },
  css: {
    extract: false
  },
  // configureWebpack: config => {
  //   // config.entry.app = './index.js'
  //   config.resolve.symlinks = false
  //   console.log(config.externals)
  //   return config
  // },
  configureWebpack: {
    resolve: {
      symlinks: false // 使用npm link
    },
    entry: {
      app: './index.js'
    },
    externals: {
      vue: { commonjs: 'vue', commonjs2: 'vue', root: 'Vue' },
      axios: 'axios',
      'js-sha256': 'js-sha256',
      '@luzhongk/vue-feedback': '@luzhongk/vue-feedback'
    }
  },
  productionSourceMap: false
}
