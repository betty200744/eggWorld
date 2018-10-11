'use strict';

// had enabled by egg
// exports.static = true;

exports.graphql = {
  enable: true,
  package: 'egg-graphql',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

/*
exports.redis = {

};*/

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

/*
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
*/
