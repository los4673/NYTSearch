const router = require("express").Router();
const articlesRoutes = require("./articles");

// Articles Routes
router.use("/articles", articlesRoutes);

module.exports = router;
