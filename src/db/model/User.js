/**
 * @description 用户数据模型
 * @author lucas
 */

const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')

// users
const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '唯一，用户名不能重复'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称'
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别 (1 男性, 2 女性, 3 保密)'
    },
    picture: {
        type: STRING,
        comment: '头像, 图片地址'
    },
    city: {
        type: STRING,
        comment: '城市'
    }
})

module.exports = User
