/**
 * Created by betty on 10/9/18.
 */
'use strict';

module.exports = (ctx, next) => {
  console.log(ctx.query);
  next();
};
