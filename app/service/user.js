/**
 * Created by betty on 10/10/18.
 */
'use strict';

const Service = require('egg').Service;
const db = require('../model');

class UserService extends Service {
  async userInfo() {
    return db.user.findOne();
  }
}

module.exports = UserService;
