/**
 * @description utils api 路由
 * @author lucas
 */

const router = require('koa-router')()

const { loginCheck } = require('../../middlewares/loginChecks')
const koaFrom = require('formidable-upload-koa')
const { saveFile } = require('../../controller/utils')

router.prefix('/api/utils')

// 上传图片
router.post('/upload', loginCheck, koaFrom(), async (ctx, next) => {
    const file = ctx.req.files['file'] // file 对应是 my-ajax.js的upload的formData.append('file')
    if (!file) {
        return
    }
    const { size, path, name, type } = file
    ctx.body = await saveFile({
        name,
        type,
        size,
        filePath: path
    })
})

module.exports = router
