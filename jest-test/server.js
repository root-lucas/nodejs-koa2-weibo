/**
 * @description jest server
 * @author lucas
 */

const requests = require('supertest')
const server = require('../src/app').callback()

module.exports = requests(server)