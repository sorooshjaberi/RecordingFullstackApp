const express = require("express");
const { songsRoute } = require("./routers/songs");
const { artistsRoute } = require("./routers/artists");
const { sequelize } = require("./utils/database");
const { Song } = require("./models/songs");
const { Artist } = require("./models/artist");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/songs", songsRoute);

app.use("/artists", artistsRoute);

Artist.hasMany(Song);

sequelize.sync(
  // { force: false }
  ).then(() => {
  // Song.create({

  // })
  // Artist.create({name : "maroon5"})
  app.listen(9000);
});
