/**
 * @description 数据模型入口文件
 * @author lucas
 */

const User = require('./User')
const Blog = require('./Blog')

// 查询微博的时候顺带查询用户
Blog.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = {
    User,
    Blog
}
