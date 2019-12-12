const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', '..', dir)
}

function mapPackage() {
  const dirList = fs.readdirSync(resolve('packages'))
  return dirList.reduce((obj = {}, name) => {
    obj[`@luzhongk/${name}`] = resolve(`packages/${name}/index.js`)
    return obj
  }, {})
}

module.exports = {
  resolve,
  mapPackage
}
