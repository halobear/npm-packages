import md5 from 'blueimp-md5'
import { sha256 } from 'js-sha256'

/**
 * 加密
 * @param {Object} params 加密参数
 * @param {String} encryptKey 加密key
 * @param {Boolean} isDebug 是否是开发模式
 */
export default function encrypt(params = {}, encryptKey, isDebug) {
  if (!encryptKey) return ''
  const keys = Object.keys(params).sort()
  const sign = keys
    .reduce((collect, key) => {
      let item = params[key]
      if (['number', 'string'].includes(typeof item)) {
        item = `${item}`.trim()
      }
      collect.push(item)
      return collect
    }, [])
    .join('')
  const res = sha256(`${md5(encodeURIComponent(sign))}${encryptKey}`)
  if (isDebug) {
    console.log(sign, res)
  }
  return res
}
