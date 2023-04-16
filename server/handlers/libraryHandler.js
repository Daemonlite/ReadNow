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

  const createLibrary = async (req,res) => {
    const {name,descr,user} = req.body

    if(!name || !descr || !user){
        return res.status(400).json({message:"fill in required fields"})
    }

    let existingUser;
    try {
        existingUser = User.findById(user)
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