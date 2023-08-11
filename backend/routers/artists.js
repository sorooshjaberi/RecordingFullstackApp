const { Router } = require("express");
const { artistsController } = require("../controllers/artists");

const router = Router();

router.get("/" , artistsController);

exports.artistsRoute = router;