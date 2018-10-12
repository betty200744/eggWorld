/**
 * Created by betty on 10/12/18.
 */
"use strict";

/**
 * 自定义app启动前的初始化工作， 如链接数据库，启动其他服务， graphql mock
 */

module.exports = app => {
  app.beforeStart(async () => {
    console.log('app start now!')
  });
};

