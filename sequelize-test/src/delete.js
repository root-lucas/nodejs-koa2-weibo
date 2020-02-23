const { User, Blog } = require('./model');

!(async function () {
    // // 删除一条博客
    // const delBlogRes = await Blog.destroy({
    //     where: {
    //         id: 4
    //     }
    // })
    // console.log('delBlogRes: ', delBlogRes > 0); // 返回布尔值
    
    // 删除一个用户
    const delUserRes = await User.destroy({
        where: {
            id: 1
        }
    })
    // 需将 外键关联的 RESTRICT 改为 CASCADE
    console.log('delUserRes: ', delUserRes);
})()