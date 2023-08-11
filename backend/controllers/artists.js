const { Artist } = require("../models/artist");
const { sequelize } = require("../utils/database");
exports.artistsController = (req, res, next) => {
  Artist.findAll().then((items) => {
    console.log({ items });
    res.send(items);
  });
};
