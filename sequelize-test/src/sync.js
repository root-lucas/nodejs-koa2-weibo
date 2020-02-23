const seq = require('./seq');
require('./model');

// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth err');
})

// 执行同步, 会先删掉表后再建表
seq.sync({ force: true}).then(() => {
    console.log('sync ok');
    process.exit()
})