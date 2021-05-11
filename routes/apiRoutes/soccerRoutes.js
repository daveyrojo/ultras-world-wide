const router = require("express").Router();
const soccerController = require("../../controllers/soccerController.js");

//endpoint /api/sport
console.log(`APIROUTES/SOCCERROUTES`);
router.route("/").get(soccerController.getStandings);

module.exports = router;
