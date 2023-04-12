const Story = require('../models/storyModel')
const cloudinary = require("cloudinary").v2;


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getStories = async (req,res) => {
    try {
        const story = await Story.find();
        res.json(story);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve story" });
      }
}

const getStoryById = async (req,res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
          return res.status(404).json({ message: "story not found" });
        }
        res.json(story);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve story" });
      }
}