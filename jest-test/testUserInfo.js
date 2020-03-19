/**
 * @description 单元测试的用户信息
 * @author lucas
 */

/**
 * 【特别提醒】cookie 是用户的敏感信息，此处只能是**测试**用户的 cookie
 * 每次测试用户重新登录，都需要更新这里的 cookie
 */

module.exports = {
    // 张三
    Z_ID: 1, // 此处对应数据库表的 id 字段
    Z_USER_NAME: 'zhangsan',
    Z_COOKIE:
    'weibo.sid=REOa5gPDwNwkNVEkq-KPn96eFIwTSVpt; weibo.sid.sig=QHORdFRvCB2_UDXAjr0WAWG_VQA',

    // 李四
    L_ID: 2,
    L_USER_NAME: 'lisi',
    L_COOKIE:
    'weibo.sid=urXFvj844UuyGjV6vV1raD-8FuMQ85tH; weibo.sid.sig=ngTHlkSY16JrPj72p2wwIwiJOqU'
}
