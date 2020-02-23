/**
 * @description sequelize 实例
 * @author lucas
 */

const ENV = process.NODE_ENV

module.exports = {
    isDev: ENV === 'dev',
    notDEV: ENV !== 'dev',
    isProd: ENV === 'production',
    notProd: ENV !== 'production',
    isTest: ENV === 'test',
    notTest: ENV !== 'test'
}