const chapterComment = require('../models/chapterComment')
const Chapter = require('../models/chapterModel')

const getComments = async (req,res) => {
    try {
        const story = await  chapterComment.find();
        res.json(story);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve Comment" });
      }
}

const getcommentById = async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).json({ message: "comment not found" });
      }
      res.json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve comment" });
    }
  };

const addComment = async (req,res) => {
    const {userProfile,userName,content,chapter} = req.body

    if(!userProfile || !userName || !content || !chapter){
        return res.status(400).json({messge:"fill out required fields"})
    }

    let createdChapter;
    try {
      createdChapter = await Chapter.findById(chapter);
    } catch (error) {
      console.log(error);
    }
    
    const comment = new chapterComment({
        userProfile,
        userName,
        content,
        chapter
    })

    try {
        await comment.save();
        createdChapter.comments.unshift(comment);
        await createdChapter.save();
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
      }
      return res.status(201).json(comment);
}

const deleteComment = async (req,res) => {
    const id = req.params.id;

    let comment;
    try {
      comment = await Comment.findOne({ _id: id });
      if (!comment) {
        return res
          .status(404)
          .json({ message: "The specified comment was not found." });
      }
      await comment.deleteOne({ _id: id });
      await Chapter.updateOne(
        { _id: comment.story },
        { $pull: { comments: { _id: comment._id } } }
      );
    } catch (err) {
      return res.status(500).json({
        message:
          "Unable to delete the  comment. An internal server error has occurred.",
      });
    }
    return res
      .status(200)
      .json({ message: "Successfully deleted the  comment." });
}

module.exports = {
    getComments,
    getcommentById,
    addComment,
    deleteComment
}