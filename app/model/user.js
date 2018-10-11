/**
 * Created by betty on 10/10/18.
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  const { DATE, STRING, INTEGER, FLOAT } = DataTypes;
  const User = sequelize.define('user', {
    username: { type: STRING, unique: true },
    password: { type: STRING},
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
