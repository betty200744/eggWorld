# eggworld



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


## 项目结构说明

```
app
├── controller					// restful请求写在这里
│   └── home.js
├── graphql						// 所有graphql的接口都在这个目录里
│   ├── common					// 通用模块
│   │   ├── resolver.js
│   │   ├── scalars
│   │   │   └── date.js
│   │   └── schema.graphql
│   ├── mutation
│   │   └── schema.graphql		// 所有Mutation类型的请求都写在这个文件里
│   ├── query
│   │   └── schema.graphql		// 所有Query类型的请求都写在这个文件里
│   └── user					// 这是一个业务模块
│       ├── resolver.js			// graphql方法的resolver
│       └── schema.graphql		// 定义该模块下graphql请求 schema中的输入、输出类型
├── model						// 数据库定义
├── public
├── router.js // 路由
└── service						// 所有的业务逻辑都写在这里
    └── user.js
```

## 项目依赖服务

- redis
- mysql

## 项目功能
- 首页， hackerNewsList， graphql, model, testcase, resolver, service 
- 首页， 登录， login,  graphql, model, testcase, resolver, service, 
- 首页，注册, register,  graphql, model, testcase, resolver, service, 
- 个人, userInfo,  graphql, model, testcase, resolver, service, 
- 我的收藏， favoritesNews,  graphql, model, testcase, resolver, service, 
- 定时任务, 定时抓取hacker news , 定时写入数据,  graphql, model, testcase, resolver, service, 
- 



