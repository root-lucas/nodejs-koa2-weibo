/**
 * @description 数据模型入口文件
 * @author lucas
 */

const User = require('./User')
const Blog = require('./Blog')
const UserRelation = require('./UserRelations')

// 查询微博的时候顺带查询用户
Blog.belongsTo(User, {
    foreignKey: 'userId'
})

UserRelation.belongsTo(User, {
    foreignKey: 'followerId'
})
User.hasMany(UserRelation, {
    foreignKey: 'userId'
})

Blog.belongsTo(UserRelation, {
    // 由于 上面的 Blog.userId与User建立了外键了,
    // 所以在数据表查询外键时看不到增加的外键，但并不影响二者的关联
    // Blog.userId ——> UserRelation.followerId
    foreignKey: 'userId',
    targetKey: 'followerId'
})

module.exports = {
    User,
    Blog,
    UserRelation
}
