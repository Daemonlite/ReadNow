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
      },
      //leave a message for readers
      chapterNote:{
        type: String,
        required: false
      },
      story:{
        type:mongoose.Schema.Types.ObjectId
      },
      comments:{
        type:Array
      },
      likes:{
        type:Array
      }
},{
    timestamps:true
})

module.exports = mongoose.model('Chapter',chapterSchema)