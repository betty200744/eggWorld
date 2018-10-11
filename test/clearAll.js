/**
 * Created by betty on 10/11/18.
 */
"use strict";
const child_process = require('child_process');
const util = require('util');
const exec = util.promisify(child_process.exec);

module.exports = async () => {
  await exec(`/Users/betty/.nvm/versions/node/v8.9.4/bin/node /Users/betty/.nvm/versions/node/v8.9.4/lib/node_modules/npm/bin/npm-cli.js run migrate:down:test --scripts-prepend-node-path=auto`);

  await exec(`/Users/betty/.nvm/versions/node/v8.9.4/bin/node /Users/betty/.nvm/versions/node/v8.9.4/lib/node_modules/npm/bin/npm-cli.js run migrate:up:test --scripts-prepend-node-path=auto`);

};