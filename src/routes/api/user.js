/**
 * @description user API 路由
 * @author lucas
 */

const router = require('koa-router')()

const { isExist, register } = require('../../controller/user')
const userValidate = require('../../validator/user')
const genValidator = require('../../middlewares/validator')
router.prefix('/api/user')

// 注册路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
    const { userName, password, gender } = ctx.request.body
    ctx.body = await register({ userName, password, gender })
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body
    ctx.body = await isExist(userName)
})

module.exports = router
