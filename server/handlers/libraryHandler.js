const Library = require('../models/libraryModel')
const User = require('../models/userModel')
const libraryStory = require('../models/libraryStoryModel')

const getLibraries = async (req, res) => {
    try {
      const library = await Library.find();
      res.json(library);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve Library" });
    }
  };
  
  const getlibraryById = async (req, res) => {
    try {
      const library = await Library.findById(req.params.id);
      if (!library) {
        return res.status(404).json({ message: "library not found" });
      }
      res.json(library);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve library" });
    }
  };

  const createLibrary = async (req,res) => {
    const {name,descr,user} = req.body

    if(!name || !descr || !user){
        return res.status(400).json({message:"fill in required fields"})
    }

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log(error)
    }

    const lib = new Library({
        name,
        descr,
        user,
        stories:[]
    })

    try {
        await lib.save()
        existingUser.library.unshift(lib)
        existingUser.save()
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error });
    }
    return res.status(201).json(lib);
  }

  const deleteLibrary = async (req,res) => {
    const id = req.params.id;

    let library;
    try {
      library = await Library.findOne({ _id: id });
      if (!library) {
        return res
          .status(404)
          .json({ message: "The specified library was not found." });
      }
      await library.deleteOne({ _id: id });
      await User.updateOne(
        { _id: library.user },
        { $pull: { librarys: { _id: library._id } } }
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

const addStory = async (req,res) => {
    const {title,coverImage,author,descr,category,story,user,lib} = req.body

    if(!title || !coverImage || !author || !descr || !category || !user || !lib || !story) {
      return res.status(400).json({message:"fill in required fields"})
    }


    let userLibrary;
    try {
      userLibrary = await Library.findById(lib)
    } catch (error) {
      cosole.log(error)
    }

    const userlib = new libraryStory({
      title,
      coverImage,
      author,
      descr,
      category,
      story,
      user,
      lib
    })

    try {
      await userlib.save()
      userLibrary.stories.unshift(userlib)
      await  userLibrary.save()
    } catch (error) {
      console.log(error)
        res.status(400).json({ error: error });
    }
    return res.status(201).json(userlib);
}

const getUserLibStory = async (req, res) => {
  try {
    const library = await libraryStory.find();
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve Story" });
  }
};

const getUserlibStoryById = async (req, res) => {
  try {
    const library = await libraryStory.findById(req.params.id);
    if (!library) {
      return res.status(404).json({ message: "library not found" });
    }
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve Story" });
  }
};

module.exports = {
    getlibraryById,
    getLibraries,
    createLibrary,
    deleteLibrary,
    addStory,
    getUserLibStory,
    getUserlibStoryById
}