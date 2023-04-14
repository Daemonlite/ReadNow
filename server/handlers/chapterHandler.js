const Chapter = require("../models/chapterModel");
const Story = require("../models/storyModel");

const getChapters = async (req, res) => {
  try {
    const chapter = await Chapter.find();
    res.json(chapter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve chapter" });
  }
};

const getchapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: "chapter not found" });
    }
    res.json(chapter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve chapter" });
  }
};

const createChapter = async (req, res) => {
  const { title, content, chapterNumber, chapterNote, story } = req.body;

  if (!title || !content || !chapterNumber || !chapterNote) {
    return res.status(400).json({
      message: "fill out required fields",
    });
  }

  let createdStory;
  try {
    createdStory = await Story.findById(story);
  } catch (error) {
    console.log(error);
  }

  const chapter = new Chapter({
    title,
    content,
    chapterNumber,
    chapterNote,
    story,
  });

  try {
    await chapter.save();
    createdStory.chapters.push(chapter);
    await createdStory.save();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
  return res.status(201).json(chapter);
};

const deleteChapter = async (req, res) => {
  const id = req.params.id;

  let chapter;
  try {
    chapter = await Chapter.findOne({ _id: id });
    if (!chapter) {
      return res
        .status(404)
        .json({ message: "The specified chapter was not found." });
    }
    await chapter.deleteOne({ _id: id });
    await Story.updateOne(
      { _id: chapter.story },
      { $pull: { chapters: { _id: chapter._id } } }
    );
  } catch (err) {
    return res.status(500).json({
      message:
        "Unable to delete the  chapter. An internal server error has occurred.",
    });
  }
  return res
    .status(200)
    .json({ message: "Successfully deleted the  chapter." });
};

module.exports = {
  getChapters,
  getchapterById,
  createChapter,
  deleteChapter,
};
