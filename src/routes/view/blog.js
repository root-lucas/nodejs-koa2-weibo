/**
 * @description 微博 view 路由
 * @author lucas
 */

const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginChecks')
const { getProfileBlogList } = require('../../controller/blog-profile')
const { isExist } = require('../../controller/user')
const { getSquareBlogList } = require('../../controller/blog-square')

router.get('/', loginRedirect, async (ctx, next) => {
    await ctx.render('index', {})
})

// 个人主页
router.get('/profile', loginRedirect, async (ctx, next) => {
    const { userName } = ctx.session.userInfo
    ctx.redirect(`/profile/${userName}`)
})

router.get('/profile/:userName', loginRedirect, async (ctx, next) => {
    const myUserInfo = ctx.session.userInfo
    const myUserName = myUserInfo.userName
    const { userName: curUserName } = ctx.params
    const isMe = myUserName === curUserName

    let curUserInfo

    if (isMe) {
    // 是当前登录用户
        curUserInfo = myUserInfo
    } else {
    // 不是当前登录用户
    // 判断该用户是否存在
        const existUserInfo = await isExist(curUserName)
        if (existUserInfo.errno !== 0) {
            // 用户不存在
            return
        }
        curUserInfo = existUserInfo.data
    }

    const result = await getProfileBlogList(curUserName, 0)
    const { isEmpty, count, pageIndex, pageSize, blogList } = result.data

    await ctx.render('profile', {
        blogData: {
            isEmpty,
            count,
            blogList,
            pageSize,
            pageIndex
        },
        userData: {
            userInfo: curUserInfo,
            isMe
        }
    })
})

// 广场
router.get('/square', loginRedirect, async (ctx, next) => {
    // 获取微博数据，第一页
    const result = await getSquareBlogList(0)
    const { isEmpty, blogList, pageSize, pageIndex, count } = result.data || {}

    await ctx.render('square', {
        blogData: {
            isEmpty,
            blogList,
            pageSize,
            pageIndex,
            count
        }
    })
})

module.exports = router
