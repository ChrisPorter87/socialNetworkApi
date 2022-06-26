const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");
//set up get all and post at /api/users
router.route("/").get(getAllUsers).post(createUser);
//set up get, put, and delete at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
//route to add a friend to a user and remove a friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
