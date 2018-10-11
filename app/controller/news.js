/**
 * Created by betty on 10/8/18.
 */
'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const newsList = await ctx.service.news.list(1);
    await this.ctx.render('list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
