/**
 * Created by betty on 10/10/18.
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async userInfo() {
    return { username: 'betty' };
  }
}

module.exports = UserService;
