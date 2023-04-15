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