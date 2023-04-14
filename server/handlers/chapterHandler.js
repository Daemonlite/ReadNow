const Chapter = require('../models/chapterModel')
const Story = require('../models/storyModel')

const cloudinary = require("cloudinary").v2;


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getChapters = async (req,res) => {
    try {
        const chapter = await Chapter.find();
        res.json(chapter);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve chapter" });
      }
}

const getchapterById = async (req,res) => {
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
}