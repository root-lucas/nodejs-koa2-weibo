/**
 * @description user API 路由
 * @author lucas
 */

const router = require('koa-router')()

const {
    isExist,
    register,
    login,
    deleteCurUser,
    changeInfo,
    changePassword,
    logout
} = require('../../controller/user')
const userValidate = require('../../validator/user')
const genValidator = require('../../middlewares/validator')
const { isTest } = require('../../utils/env')
const { loginCheck } = require('../../middlewares/loginChecks')

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

// 登录
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body
    ctx.body = await login(ctx, userName, password)
})

// 删除
router.post('/delete', loginCheck, async (ctx, next) => {
    if (isTest) {
    // 测试环境下，测试账号登录之后，删除自己
        const { username } = ctx.session.userInfo // 注意这里必须是小写
        ctx.body = await deleteCurUser(username)
    }
})

// 修改个人信息
router.patch(
    '/changeInfo',
    loginCheck,
    genValidator(userValidate),
    async (ctx, next) => {
        const { nickName, city, picture } = ctx.request.body
        ctx.body = await changeInfo(ctx, { nickName, city, picture })
    }
)

// 修改密码
router.patch(
    '/changePassword',
    loginCheck,
    genValidator(userValidate),
    async (ctx, next) => {
        const { password, newPassword } = ctx.request.body

        const { userName } = ctx.session.userInfo // session 自动转小写
        ctx.body = await changePassword(userName, password, newPassword)
    }
)

// 退出登录
router.post('/logout', loginCheck, async (ctx, next) => {
    ctx.body = await logout(ctx)
})

module.exports = router
