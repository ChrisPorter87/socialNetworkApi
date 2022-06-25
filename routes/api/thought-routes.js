const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");
router.route("/:userId").get(getAllThoughts).post(addThought);
// /api/thoughts/userId/thoughtId
router.route("/:userId/:thoughtId").get(getThoughtById).delete(removeThought);
module.exports = router;
