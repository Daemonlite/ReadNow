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

const createStory = async (req,res) => {
 const {title,coverImage,author,descr,category,PG,user} = req.body
  
 if(!title || !coverImage || !author || !descr || !category || !PG || !user){
  return res.status(400).json({message:"Fill out require fields"})

 }
 
const story = new Story({
  title,
  coverImage,
  author,
  descr,
  category,
  PG,
  user,
  chapters:[],
  comments:[],
  rating:[],
  likes:[],

})
try {
  await story.save()
  return res.status(201).json(story)
} catch (error) {
  console.log (error)
}
}

const updateStory = async (req,res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  
  try {
    const updatedStory = await Story.findByIdAndUpdate(id, updatedInfo, {
      new: true,
    });
    
    if (!updatedStory) {
      return res.status(404).json({ message: "story not found" });
    }
    
    res.status(200).json(updatedStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update story info" });
  }
}