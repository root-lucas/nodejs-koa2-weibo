const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const session = require('koa-generic-session')
const redisStore = require('koa-redis')

// 路由
const index = require('./routes/index')
const userViewRouter = require('./routes/view/user')
const userAPIRouter = require('./routes/api/user')
const errorViewRouter = require('./routes/view/error')
const { isProd } = require('./utils/env')
const { REDIS_CONF } = require('./conf/db')
const { SESSION_SECRET_KEY } = require('./conf/secretKeys')

// error handler
let onerrorConf = {}
// 线上环境
if (isProd) {
    onerrorConf = {
        redirect: '/error'
    }
}
onerror(app, onerrorConf)

// middlewares
app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
    views(__dirname + '/views', {
        extension: 'ejs'
    })
)

// session 配置
app.keys = [SESSION_SECRET_KEY]
app.use(
    session({
        key: 'weibo.sid', // cookie name 默认是 ‘koa.sid’
        prefix: 'weibo:sess:', // redis key 的前缀，默认是 ‘koa:sess:’
        cookie: {
            // 配置 cookie
            path: '/',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 小时, cookie 过期时间
        },
        // ttl: 24 * 60 * 60 * 1000, // redis 过期时间, 默认和cookie相同
        store: redisStore({
            // 配置 redis
            all: '127.0.0.1:6379'
            // all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
        })
    })
)

// // logger
// app.use(async (ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods()) // 404 路由必须注册到最后面

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app
