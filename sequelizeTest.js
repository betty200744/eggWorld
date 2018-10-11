/**
 * Created by betty on 10/11/18.
 */
"use strict";

const Sequelize = require('sequelize');
const {STRING, INTEGER, DATE} = Sequelize;
const sequelize = new Sequelize('eggworld', 'root', '1q2w3e4r', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('success connnect');
  })
  .catch((error) => {
    console.error(error);
  });


const User = sequelize.define('test', {
  name: {type: STRING}
});

(async () => {
  await User.sync({force: true});
  await User.create({name: 'betty'});
})();

const findAll = async () => {
  await User.sync({force: true});
  const users = await User.findAll();
  console.log(users);
};

findAll();



