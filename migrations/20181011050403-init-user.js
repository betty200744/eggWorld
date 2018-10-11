'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { primaryKey: true, type: INTEGER, autoIncrement: true },
      username: { type: STRING, unique: true },
      password: { type: STRING},
      email: { type: STRING, validate: { isEmail: true } },
      createdAt: DATE,
      updatedAt: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
