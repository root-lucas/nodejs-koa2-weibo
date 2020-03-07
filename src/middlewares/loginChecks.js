/**
 * @description 登录验证的中间件
 * @lucas lucas
 */

const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
    // 已登录
        await next()
        return
    }
    // 未登录
    ctx.body = new ErrorModel(loginCheckFailInfo)
}

/**
 * 页面登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginRedirect(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
    // 已登录
        await next()
        return
    }
    // 未登录 #
    const curUrl = ctx.url
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl))
    // 例如：http://localhost:3000/login?url=%2Fsetting 登录成功后
    // 最终跳转到 http://localhost:3000/setting
}

module.exports = {
    loginCheck,
    loginRedirect
}
