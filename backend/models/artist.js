const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

const Artist = sequelize.define("artist", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

exports.Artist = Artist;
