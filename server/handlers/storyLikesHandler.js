const storyLike = require('../models/likeStoryModel')
const Story = require('../models/storyModel')

const getLikes = async (req, res) => {
    try {
      const Like = await storyLike.find();
      res.json(Like);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve Likes" });
    }
  };
  
  const getLikeById = async (req, res) => {
    try {
      const like = await storyLike.findById(req.params.id);
      if (!like) {
        return res.status(404).json({ message: "like not found" });
      }
      res.json(like);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve like" });
    }
  };

const likeStory = async (req,res) => {
    const {userProfile,userName,story} = req.body

    
    if(!userProfile || !userName || !story){
        return res.status(400).json({messge:"fill out required fields"})
    }

    let createdstory;
    try {
      createdstory = await Story.findById(story);
    } catch (error) {
      console.log(error);
    }

    const like = new storyLike({
        userProfile,
        userName,
        story
    })

    try {
        await like.save();
        createdstory.likes.unshift(like);
        await createdstory.save();
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
      }
      return res.status(201).json(like);
}

const unlikeStory = async (req,res) => {
    const id = req.params.id;

    let like;
    try {
      like = await storyLike.findOne({ _id: id });
      if (!like) {
        return res
          .status(404)
          .json({ message: "The specified like was not found." });
      }
      await like.deleteOne({ _id: id });
      await Story.updateOne(
        { _id: like.story },
        { $pull: { likes: { _id: like._id } } }
      );
    } catch (err) {
      return res.status(500).json({
        message:
          "Unable to like the story",
      });
    }
    return res
      .status(200)
      .json({ message: "story liked" });
}

module.exports = {
    getLikeById,
    getLikes,
    likeStory
}