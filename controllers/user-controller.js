const { User } = require("../models/");
const userController = {
  getAllUsers: (req, res) => {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id }).then((dbUserData) => {
      // If no user found, send 404
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    });
  },
};
module.exports = userController;
