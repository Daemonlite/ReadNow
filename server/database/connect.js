const mongoose = require('mongoose')

const connectDataBase = async (req,res) => {
  try {
    const conect = await mongoose.connect(process.env.MONGO_URI)
    console.log('DB CONNECTED')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDataBase