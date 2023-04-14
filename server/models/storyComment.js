const mongoose = require('mongoose')


const storyCommentSchema = new mongoose.Schema({
    userProfile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true 
    },
    content:{
        type:String,
        require:true
    },
    story:{
        type:mongoose.Schema.Types.ObjectId
      },
},{
    timestamps:true
})
module.exports = mongoose.model('StoryComment',storyCommentSchema)