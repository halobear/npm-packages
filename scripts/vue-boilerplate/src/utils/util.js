/**
 * 状态码
 */
const codeMessage = {
  400: '请求有错误',
  401: '没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '404 未找到',
  405: '请求method错误',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网络超时'
}

/**
 * @description:
 * @param {Object} error 接口返回错误
 * @return: String
 */
export function getErrMsg(error = {}) {
  const { status = '', data = {} } = error.response || {}
  if (!status) return '网络超时'
  return data.info || data.msg || codeMessage[status] || '请求失败'
}

// 获取接口Http状态码
export function getErrStatus(error = {}) {
  const { status = 0 } = error.response || {}
  return status
}
