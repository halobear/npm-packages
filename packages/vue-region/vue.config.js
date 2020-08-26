const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

const config = {
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      symlinks: false, // 使用npm link
    },
    entry: {
      app: resolve('src'),
    },
    externals: {
      vue: { commonjs: 'vue', commonjs2: 'vue', root: 'Vue' },
      'ant-design-vue': {
        commonjs: 'ant-design-vue',
        commonjs2: 'ant-design-vue',
        root: 'ant-design-vue',
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  productionSourceMap: false,
}

const testConfig = {
  publicPath: '/', // public path
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, 'test/index.js'),
    },
  },
}

module.exports = process.env.BUILD_TARGET === 'test' ? testConfig : config
