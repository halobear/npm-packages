module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es7.object.entries']
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
