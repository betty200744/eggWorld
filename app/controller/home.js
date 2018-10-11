'use strict';

const Controller = require('egg').Controller;

/**
 * this Controller is only for restful api
 */
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
