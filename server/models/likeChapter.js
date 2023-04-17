const mongoose = require('mongoose')

const chapterLikesSchema = new mongoose.Schema({
    userProfile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true 
    },
    chapter:{
        type:mongoose.Schema.Types.ObjectId
      },
},{
    timeStamps:true
})

module.exports = mongoose.model('ChapterLikes',chapterLikesSchema)