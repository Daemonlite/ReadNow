const StoryComment = require('../models/storyComment')
const Story = require('../models/storyModel')

const getComments = async (req,res) => {
    try {
        const story = await StoryComment.find();
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
    const {userProfile,userName,content,story} = req.body

    if(!userProfile || !userName || !content || !story){
        return res.status(400).json({messge:"fill out required fields"})
    }

    let createdStory;
    try {
      createdStory = await Story.findById(story);
    } catch (error) {
      console.log(error);
    }
    
    const comment = new StoryComment({
        userProfile,
        userName,
        content,
        story
    })

    try {
        await comment.save();
        createdStory.comments.unshift(comment);
        await createdStory.save();
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
      await Story.updateOne(
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