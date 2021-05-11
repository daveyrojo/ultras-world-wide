const router = require("express").Router();
const soccerRoutes = require("./soccerRoutes");

router.use("/soccer", soccerRoutes)

module.exports = router;