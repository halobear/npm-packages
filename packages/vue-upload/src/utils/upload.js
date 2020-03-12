import uploader from 'kuan-utils/lib/uploader'
import { toast } from '@halobear/vue-feedback'
import validate from './validateImageSize'

/**
 * @description: 上传单个文件
 * @param {File} file 文件对象
 * @param {String} name 文件md5
 * @param {Object} formData 上传额外参数
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
async function upload({
  name,
  file,
  formData = {},
  onProgress,
  needMD5 = false
}) {
  const { host = 'https://upload.qiniup.com', dir = '' } = formData
  if (name && needMD5) {
    formData.key = `${dir}${name}`
  }
  delete formData.host
  delete formData.dir
  const fd = new FormData()
  Object.entries(formData).forEach(([key, value]) => {
    fd.append(key, value)
  })
  fd.append('file', file)
  const data = await uploader.upload({
    url: host,
    data: fd,
    onProgress
  })
  return {
    ...data,
    url: `${data.base_url}${data.path}-300x300`
  }
}

/**
 * @description: 上传多个文件
 * @param {Object} formData 上传额外参数
 * @param {Number} size 文件大小限制20M
 * @param {Number} width 限制文件宽度
 * @param {Number} height 限制文件高度
 * @param {String} accept 文件类型
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
export default async ({
  formData = {},
  size = 20,
  limit = 1,
  width,
  height,
  needMD5 = false,
  accept = 'image/*',
  fetchToken = () => {},
  onProgress
} = {}) => {
  // 获取文件列表
  const fileList = await uploader.getFiles({
    multiple: limit > 1,
    needMD5,
    accept
  })
  // 获取token
  formData.token = await fetchToken()
  // 限制文件大小
  let filterList = fileList.filter(
    ({ file }) => file.size / 1024 / 1024 <= size
  )
  if (filterList.length !== fileList.length) {
    const info = `${fileList.length - filterList.length}个文件大小超出${size}M`
    toast(info)
  }
  // 限制图片大小
  if (width || height) {
    const oldList = filterList
    filterList = await Promise.all(
      oldList.map(async fileData => {
        const res = await validate({ file: fileData.file, width, height })
        return res ? fileData : undefined
      })
    )
    filterList = filterList.filter(item => item)
    if (oldList.length !== filterList.length) {
      toast(`尺寸限制：宽 ${width}, 高 ${height}`)
    }
  }
  // 开始上传
  const resList = await Promise.all(
    filterList.slice(0, limit).map(fileData => {
      const { name, file } = fileData
      return upload({
        name,
        file,
        formData,
        onProgress,
        needMD5
      })
    })
  )
  return resList
}
