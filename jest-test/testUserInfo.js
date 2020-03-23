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
    'weibo.sid=Sqm7qijFO5R_EYHuNwq4P98Mfp0mUpG2; weibo.sid.sig=yl4paEv2Q52imRtWOsU8O_KIzxw',

    // 李四
    L_ID: 1,
    L_USER_NAME: 'lisi',
    L_COOKIE:
    'weibo.sid=4Vro-JIlkZy7CwI2V-brouFQUPVc1vHj; weibo.sid.sig=URRREJpn0Ve49AF0x3UjkrWlErU'
}
