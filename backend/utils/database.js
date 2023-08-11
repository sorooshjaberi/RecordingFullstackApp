const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "root",
  password: "0000",
  database: "soroush_record",
  dialect: "mysql",
});

exports.sequelize = sequelize;
