const router = require("express").Router();
const soccerRoutes = require("./soccerRoutes");

console.log(`API ROUTES`);
router.use("/soccer", soccerRoutes)

module.exports = router;