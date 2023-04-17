const router = require("express").Router();
const {
  getStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
} = require("../handlers/storyHandler");
const { verifyToken } = require("../middleware/verify");

router.get("/", getStories);
router.get("/:id", verifyToken, getStoryById);
router.post("/", verifyToken, createStory);
router.put("/:id", verifyToken, updateStory);
router.delete("/:id", verifyToken, deleteStory);

module.exports = router;
