这是一个基于 `nodejs + koa2`框架实现模拟某微博基本功能完备的的项目

## Test Environment

```
redis-cli 5.0.14.1
mysql 8.0.31
node v18.17.0
win10

项目信息配置文件：
	- src/conf/db.js
	- src/app.js
```



## Usage install

**Tip：** 开启`MySQL、Redis`本地服务，打开 `navicat` 连接`mysql`并新建`koa2_weibo_db`数据库名，运行导入上述准备的`koa2_weibo_db.sql`文件导入数据。

```sh
# 安装依赖
yarn install 

# 启动项目
yarn run dev

# 页面链接
http://localhost:3000

# 测试账号
lisi	123
lucas	123
```



## 分层架构设计

- 视图层：SSR渲染呈现页面 和 页面请求 API 接口
- 路由层：view渲染、API处理、校验请求
- 控制层：实现基本业务逻辑、用户校验与返回数据格式
- 缓存层：实现`redis和 mysql`数据库之间对数据的是否缓存
- 数据层：对数据库的增删改查操作，最后返回数据实体对象
- 封装层：使用` Sequelize `对 数据层进行封装操作

> 分层处理无参杂具体的其他层业务，防止多人开发时接口调用调试成本增加

## 项目功能点

- 用户登陆与注册功能
- 用户设置功能
- 关注与取关功能
- 微博首页与广场页功能
- 创建微博和回复功能
- @ 和 回复功能

> 所有页面均采用服务端渲染(SSR)使用 `ejs`模板引擎进行页面排版。呈现简单是为了方便用户，把复杂的东西放在背后，正是技术能力的一种体现

## 数据存储

- `redis` 和 `session` 实现用户登陆信息校验与操作
- 用户信息`CRUD`操作采用 `Mysql` 数据库存储
- 使用`Sequelize` 描述对象和数据库之间映射实现持久化数据层

数据库使用` redis ` 和 `mysql` 实现用户 session 和 对用户信息的存储。

## 中间件

- 第三方中间件（body-parser等等....）
- koa2 自有中间件（很多这里就不多写了[网址](https://github.com/koajs)）
- 自主开发的中间件
  - 检测 API 请求的登录状态
  - 检测网页请求的登录状态
  - 进行 `post `请求的`json`数据进行 `schema `验证

## 单元测试

单元测试框架采用 jest 

- 对各个API 测试
- 对用户信息校验测试
- 对数据模型（`Sequelize`）测试
