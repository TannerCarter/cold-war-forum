const router = require("express").Router();

const userRoutes = require("./user-routes");
const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");
const streamRoutes = require("./stream-routes");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/stream", streamRoutes);

module.exports = router;
