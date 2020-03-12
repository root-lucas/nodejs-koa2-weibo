/**
 * @description 首页 API 路由
 * @author lucas
 */

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginChecks')
const { create } = require('../../controller/blog-home')

router.prefix('/api/blog')

// 创建微博
router.post('/create', loginCheck, async (ctx, next) => {
    const { content, image } = ctx.request.body
    const { id: userId } = ctx.session.userInfo // userInfo.id 改别名为 userId
    ctx.body = await create({ userId, content, image })
})

module.exports = router
