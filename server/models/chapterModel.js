const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      chapterNumber: {
        type: Number,
        required: true
      }
},{
    timestamps:true
})

module.exports = mongoose.model('Chapter',chapterSchema)