const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");

const userRoutes = require("./user-routes");
// add prefix of '/users' to all routes in userRoutes
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);
module.exports = router;
