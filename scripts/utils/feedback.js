const inquirer = require('inquirer')

/**
 * 输入
 * @params {String} message 标题
 * @params {String} defaultValue 默认输入
 * @return {Promise}
 */
exports.input = async (message, defaultValue) => {
  const data = await inquirer.prompt({
    type: 'string',
    name: message,
    required: true,
    message: message,
    default: defaultValue
  })
  return Object.values(data)[0]
}
