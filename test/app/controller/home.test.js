'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

  it('should get a ctx', async () => {
    const ctx = app.mockContext();
    assert(ctx.method === 'GET');
  });

});
