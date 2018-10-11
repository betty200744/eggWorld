/**
 * Created by betty on 10/9/18.
 */
'use strict';

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
