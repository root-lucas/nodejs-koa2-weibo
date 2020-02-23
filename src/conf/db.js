/**
 * @description sequelize 实例
 * @author lucas
 */

const {
    isProd
} = require('../utils/env')

let MYSQL_CONF
let REDIS_CONF

// redis
REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

// mysql
MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: '3306',
    database: 'koa2_weibo_db'
}

if (isProd) {
    // 线上的 redis 配置
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }

    // 线上的 mysql 配置
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        port: '3306',
        database: 'koa2_weibo_db'
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}