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
    Z_ID: 2, // 此处对应数据库表的 id 字段
    Z_USER_NAME: 'zhangsan',
    Z_COOKIE:
    'weibo.sid=REOa5gPDwNwkNVEkq-KPn96eFIwTSVpt; weibo.sid.sig=QHORdFRvCB2_UDXAjr0WAWG_VQA',

    // 李四
    L_ID: 1,
    L_USER_NAME: 'lisi',
    L_COOKIE:
    'weibo.sid=0Qeg9hVPqA5MfFObrsGBEVIiDK89itRI; weibo.sid.sig=wH3_yb6fFS6nLXqJYMsXasC9_yk'
}
