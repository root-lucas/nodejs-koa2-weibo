/**
 * @description 个人主页 controller
 * @author lucas
 */

const { getBlogListByUser } = require('../services/blog')
const { PAGE_SIZE } = require('../conf/constant')
const { SuccessModel } = require('../model/ResModel')

/**
 * 获取个人主页微博列表
 * @param {string} userName 用户名
 * @param {number} pageIndex 当前页面
 */
async function getProfileBlogList(userName, pageIndex = 0) {
    // services
    try {
        const result = await getBlogListByUser({
            userName,
            pageIndex,
            pageSize: PAGE_SIZE
        })
        const blogList = result.blogList

        return new SuccessModel({
            isEmpty: blogList.length === 0,
            blogList,
            count: result.count,
            pageIndex,
            pageSize: PAGE_SIZE
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProfileBlogList
}
