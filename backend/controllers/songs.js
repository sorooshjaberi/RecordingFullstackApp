const { Artist } = require("../models/artist");
const { Song } = require("../models/songs");
const { sequelize } = require("../utils/database");

exports.songsController = (req, res, next) => {
  Song.findAll().then((items) => {
    console.log({ items });
    res.send(items);
  });
};

exports.createSongController = async (req, res) => {
  // const { songName, artistName } = req.body;
  const artistName = "maroon5";
  const songName = "payphone";
  const artist = await Artist.findOne({ where: { name: artistName } });

  let [foundSong] = await artist.getSongs({ where: { name: songName } });
  if (!foundSong) {
    foundSong = await artist.createSong({
      name: songName,
    });
  }

  res.send(foundSong);
};
