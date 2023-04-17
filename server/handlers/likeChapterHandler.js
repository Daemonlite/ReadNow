const chapterLike = require('../models/likeChapter')
const Story = require('../models/storyModel')

const getLikes = async (req, res) => {
    try {
      const Like = await chapterLike.find();
      res.json(Like);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve Likes" });
    }
  };
  
  const getLikeById = async (req, res) => {
    try {
      const like = await chapterLike.findById(req.params.id);
      if (!like) {
        return res.status(404).json({ message: "like not found" });
      }
      res.json(like);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve like" });
    }
  };

const likeChapter = async (req,res) => {
    const {userProfile,userName,chapter} = req.body

    
    if(!userProfile || !userName || !chapter){
        return res.status(400).json({messge:"fill out required fields"})
    }

    let createdchapter;
    try {
      createdchapter = await chapter.findById(chapter);
    } catch (error) {
      console.log(error);
    }

    const like = new chapterLike({
        userProfile,
        userName,
        chapter
    })

    try {
        await like.save();
        createdchapter.likes.unshift(like);
        await createdchapter.save();
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
      }
      return res.status(201).json(like);
}

const unlikechapter = async (req,res) => {
    const id = req.params.id;

    let like;
    try {
      like = await chapterLike.findOne({ _id: id });
      if (!like) {
        return res
          .status(404)
          .json({ message: "The specified like was not found." });
      }
      await like.deleteOne({ _id: id });
      await chapter.updateOne(
        { _id: like.chapter },
        { $pull: { likes: { _id: like._id } } }
      );
    } catch (err) {
      return res.status(500).json({
        message:
          "Unable to like the chapter",
      });
    }
    return res
      .status(200)
      .json({ message: "chapter liked" });
}

module.exports = {
    getLikeById,
    getLikes,
    likeChapter,
    unlikechapter
}