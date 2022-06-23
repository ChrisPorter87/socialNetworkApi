const router = require("express").Router();
const {
  deletePizza,
} = require("../../../../pizza-hunt/pizza-hunt/controllers/pizza-controller");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
//set up get all and post at /api/users
router.route("/").get(getAllUsers).post(createUser);
//set up get, put, and delete at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
module.exports = router;
