/**
 * Created by betty on 10/9/18.
 */
'use strict';

const moment = require('moment');

module.exports = {
  /**
   * 相对时间
   */
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },

  /**
   * 检查用户是否登录
   */

};
