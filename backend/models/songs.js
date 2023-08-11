const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

const Song = sequelize.define("song", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

exports.Song = Song;
