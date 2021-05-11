const router = require("express").Router();
const soccerController = require("../../controllers/soccerController.js");

//endpoint /api/sport

router.route("/").get(sportController.getStandings);

module.exports = router;
