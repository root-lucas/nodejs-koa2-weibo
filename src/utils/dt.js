/**
 * @description 时间相关的工具函数
 */

const { format } = require('date-fns')

/**
 * 格式化时间 09.05 12:40
 * @param {String} str 时间字符串
 */
function timeFormat(str) {
    return format(new Date(str), 'MM.dd HH:mm')
}

module.exports = {
    timeFormat
}
