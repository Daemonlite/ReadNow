const Library = require('../models/libraryModel')
const User = require('../models/userModel')

const geLibraries = async (req, res) => {
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