const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API Routes
router.use("/api", apiRoutes);

// If no API routes hit - go to 404.html
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/404.html"));
});
module.exports = router;
