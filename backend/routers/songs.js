const { Router } = require("express");
const { songsController, createSongController } = require("../controllers/songs");

const router = Router();

router.get("/" , songsController);
router.use("/create"  , createSongController)
exports.songsRoute = router;