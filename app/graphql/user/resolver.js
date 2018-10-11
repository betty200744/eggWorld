/**
 * Created by betty on 10/9/18.
 */
'use strict';

/**
 * resolver like controller , only use ctx.service
 */
const resolver = {
  Query: {
    userInfo(root, _, ctx) {
      return ctx.service.user.userInfo();
    },
  },
  Mutation: {
    register(body) {
      return true;
    },
  },
};

module.exports = resolver;
