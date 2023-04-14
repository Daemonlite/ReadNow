const router = require("express").Router();
const {
  getChapters,
  getchapterById,
  createChapter,
  deleteChapter,
} = require("../handlers/chapterHandler");

const { verifyToken } = require("../middleware/verify");

router.get("/", verifyToken, getChapters);
router.get("/:id", verifyToken, getchapterById);
router.post("/", verifyToken, createChapter);
router.delete("/:id", verifyToken, deleteChapter);

module.exports = router;
