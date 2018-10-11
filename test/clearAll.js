/**
 * Created by betty on 10/11/18.
 */
"use strict";
const child_process = require('child_process');
const util = require('util');
const exec = util.promisify(child_process.exec);

module.exports = async () => {
  await exec(`sequelize db:migrate`);

};




