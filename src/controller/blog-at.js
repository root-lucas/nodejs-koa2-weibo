/**
 * @description 微博 @ 关系 controller
 * @author lucas
 */

const { getAtRelationCount } = require('../services/at-relation')
const { SuccessModel } = require('../model/ResModel')

/**
* 获取 @ 我的微博数量
* @param {number} userId userId
*/
async function getAtMeCount(userId) {
    const count = await getAtRelationCount(userId)
    return new SuccessModel({
        count
    })
}

module.exports = {
    getAtMeCount
}