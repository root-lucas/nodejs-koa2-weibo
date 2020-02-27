const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const { SECRET } = require('../conf/constants')

router.prefix('/users')

// 模拟登陆
router.post('/login', async function(ctx, next) {
    const { userName, password } = ctx.request.body

    let userInfo
    if (userName === 'zhangsan' && password === 'abc') {
    // 登陆成功, 获取用户信息
        userInfo = {
            userId: 1,
            userName: 'zhangsan',
            nickName: '张三',
            gender: 1
        }
    }

    // 加密 userInfo
    let token
    if (userInfo) {
        token = jwt.sign(userInfo, SECRET, {
            expiresIn: '1h'
        })
    }

    if (userInfo == null) {
        ctx.body = {
            errno: -1,
            msg: '登录失败'
        }
        return
    }
    ctx.body = {
        errno: 0,
        data: token
    }
})

// 获取用户信息
router.get('/getUserInfo', async (ctx, next) => {
    const token = ctx.header.authorization // 必须小写
    try {
        const payload = await verify(token.split(' ')[1], SECRET)
        ctx.body = {
            errno: 0,
            userInfo: payload
        }
    } catch (ex) {
        console.error(ex)
        ctx.body = {
            errno: -1,
            userInfo: 'verify token failed'
        }
    }
})

module.exports = router
