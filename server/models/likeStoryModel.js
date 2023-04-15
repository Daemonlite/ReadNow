const mongoose = require('mongoose')

const storyLikesSchema = new mongoose.Schema({
    userProfile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true 
    },
    story:{
        type:mongoose.Schema.Types.ObjectId
      },
},{
    timeStamps:true
})

module.exports = mongoose.model('StoryLikes',storyLikesSchema)