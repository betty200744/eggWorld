/**
 * Created by betty on 10/11/18.
 */
"use strict";

module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'eggworld-test',
    username: 'root',
    password: '1q2w3e4r',
    timezone: '+08:00',
  }
};