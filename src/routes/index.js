const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        msg: 'lucas',
        isMe: true,
        blogList: [{
            id: 1,
            title: 'aaa'
        },
        {
            id: 2,
            title: 'bbb'
        },
        {
            id: 3,
            title: 'ccc'
        }
        ]
    })
})

router.get('/json', async (ctx, next) => {
    // const session = ctx.session
    // console.log('session: ', session)
    // if (session.viewNum == null) {
    //     session.viewNum = 0
    // }
    // session.viewNum++

    ctx.body = {
        title: 'koa2 json'
        // viewNum: session.viewNum
    }
})

router.get('/profile/:userName', async (ctx, next) => {
    const {
        userName
    } = ctx.params

    // throw Error() // test,线上环境触发重定向到 /error 路由

    ctx.body = {
        title: 'this is profile page',
        userName
    }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
    const {
        userName,
        pageIndex
    } = ctx.params
    ctx.body = {
        title: 'this is loadMore API',
        userName,
        pageIndex
    }
})
module.exports = router