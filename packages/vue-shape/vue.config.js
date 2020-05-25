const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const resolve = (dir) => path.resolve(__dirname, dir)

const distName = 'dist' // 项目名称

module.exports = {
  publicPath: isDev ? '/' : `/`, // public path
  outputDir: resolve(`${distName}`), // 输入地址
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
      app: './index.js',
    },
    externals: {
      vue: { commonjs: 'vue', commonjs2: 'vue', root: 'Vue' },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  productionSourceMap: false,
}
