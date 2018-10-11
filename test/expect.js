/**
 * Created by betty on 10/11/18.
 */
"use strict";
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
chai.use(chaiAsPromise); // 目前用async await， 所以不需要chai-as-promised

module.exports = chai.expect;