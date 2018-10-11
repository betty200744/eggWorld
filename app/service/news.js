/**
 * Created by betty on 10/8/18.
 */
'use strict';

const Service = require('egg').Service;
const Promise = require('bluebird');
const rp = require('request-promise');

/**
 * can use for restful and graphql
 */
class NewsService extends Service {
  async list() {
    const { serverUrl } = this.config.news;
    const idList = await rp({ uri: `${serverUrl}/topstories.json`, json: true });
    const newsList = await Promise.map(idList.slice(0, 6), async id => {
      return rp({ uri: `${serverUrl}/item/${id}.json`, json: true });
    });
    console.log(newsList[0]);
    return newsList;
  }
}

module.exports = NewsService;
