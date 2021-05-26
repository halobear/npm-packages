import { ref, watch } from 'vue'

import { getFiles, getDropFiles, upload } from '@luzhongk/upload'

export default (props, { emit }) => {
  // 上传结果
  const dataValue = ref(props.value || [])
  // 上传进度
  const progress = ref(0)

  // 同步props.value
  watch(props.value, (value) => {
    dataValue.value = value
  })

  // 上传、删除、排序
  const change = (value) => {
    dataValue.value = value
    emit('update:value', value)
    emit('change', value)
  }

  // 删除
  const remove = (index) => {
    dataValue.value.splice(index, 1)
    change(dataValue.value)
  }

  // 进度
  const onProgress = (e) => {
    const { loaded, total } = e
    progress.value = Math.floor((loaded * 100) / total)
  }

  // 开始上传
  const toUpload = async (file) => {
    let token
    switch (typeof props.token) {
      case 'string':
        token = props.token
        break
      case 'function':
        token = await props.token()
        break
    }
    const params = { ...props.params, token }
    const f = new FormData()
    f.append('file', file)
    Object.keys(params).forEach((key) => {
      f.append(key, params[key])
    })
    return upload({ url: 'https://upload.qiniup.com', data: f, onProgress })
  }

  const uploadFiles = async (files) => {
    for (const file of files) {
      const res = await toUpload(file)
      if (!res.url) {
        const suffix = props.accept === 'image/*' ? '-300x300' : ''
        res.url = `${res.base_url}${res.path}${suffix}`
      }
      change([...dataValue.value, res])
      progress.value = 0
    }
  }

  // 点击上传
  const clickUpload = async () => {
    const limit = props.limit - dataValue.value.length
    const files = await getFiles({ multiple: limit > 1, accept: props.accept })
    uploadFiles([...files].slice(0, limit))
  }

  // 拖拽上传
  const dropUpload = (e) => {
    let files = getDropFiles(e) || []
    files = [...files].filter(
      (file) =>
        new RegExp(props.accept).test(file.type) || new RegExp(`${props.accept.split(',').join('|')}$`).test(file.name)
    )
    console.log('拖拽上传文件', files)
    const limit = props.limit - dataValue.value.length
    uploadFiles(files.slice(0, limit))
  }

  return {
    dataValue,
    progress,
    change,
    remove,
    clickUpload,
    dropUpload,
  }
}
