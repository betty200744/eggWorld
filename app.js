/**
 * Created by betty on 10/12/18.
 */
"use strict";

/**
 * 自定义app启动前的初始化工作， 如链接数据库，启动其他服务， graphql mock
 */

const {addMockFunctionsToSchema} = require('graphql-tools');

module.exports = app => {
  app.beforeStart(async () => {
    if (app.config.graphql.mock) {
      addMockFunctionsToSchema({
        schema: app.schema,
        preserveResolvers: true,
        mocks: {
          Date: () => {
            return new Date();
          }},
      });
    }
    console.log('app start now!')
  });
};

