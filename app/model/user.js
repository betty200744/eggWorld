/**
 * Created by betty on 10/10/18.
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    username: { type: STRING, unique: true },
    password: { type: STRING, unique: true },
    email: { type: STRING, validate: { isEmail: true }},
  },
  {
    timestamps: true,
    tableName: 'users',
    underscored: false,
  });

  User.associate = function() {
  };

  return User;
};
