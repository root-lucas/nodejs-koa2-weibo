/**
 * @descript user service
 * @author lucas
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
    // 查询条件
    const whereOpt = {
        userName
    }
    if (password) {
        Object.assign(whereOpt, { password })
    }

    // 查询
    let result = await User.findOne({
        attributes: ['id', 'username', 'nickName', 'picture', 'city'],
        where: whereOpt
    })

    // 未找到
    if (result == null) {
        return result
    }

    // 格式化
    const formatRes = formatUser(result.dataValues)
    return formatRes
}

module.exports = {
    getUserInfo
}
