/**
 * Created by betty on 10/10/18.
 */
'use strict';

const Service = require('egg').Service;
const db = require('../model');

/**
 * can use for restful and graphql
 */
class UserService extends Service {
  async userInfo(userId) {
    return db.user.findOne();
  }

  async register(data) {
    await db.user.create(data);
    return true;
  }
}

module.exports = UserService;
