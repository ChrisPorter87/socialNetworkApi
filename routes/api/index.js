const router = require("express").Router();
const userRoutes = require("./user-routes");
// add prefix of '/users' to all routes in userRoutes
router.use("/users", userRoutes);
module.exports = router;
