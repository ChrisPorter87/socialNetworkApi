const router = require("express").Router();
const {
  deleteThought,
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  addReactionToThought,
  deleteReactionToThought,
} = require("../../controllers/thought-controller");
router.route("/").get(getAllThoughts).post(createThought);
// /api/thoughts/userId/thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThought)
  .put(updateThought);
router.route("/:thoughtId/reactions").post(addReactionToThought);
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReactionToThought);
module.exports = router;
