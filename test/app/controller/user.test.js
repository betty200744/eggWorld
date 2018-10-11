/**
 * Created by betty on 10/10/18.
 */
"use strict";

const { app, assert } = require('egg-mock/bootstrap');
const moment = require('moment');
const clearAll = require('../../clearAll');
const {expect} = require('chai');

describe('app/controler/user.test.js', async () => {
  beforeEach(async () => {
    await clearAll();
  });

  it('userInfo', async () => {
    const query = `query {
  userInfo{
    username
  }
}`;

    await app.model.User.create({username: 'betty', password: '123456', updatedAt: Date()});
    const result = await app.httpRequest()
      .post('/graphql')
      .send({query})
      .expect(200);
    expect(result.body.data.userInfo).to.have.property('username', 'betty');
  });

  it('should get a ctx', async () => {
    const ctx = app.mockContext({
      method: 'POST',
    });
    assert(ctx.method === 'POST');
  });

});