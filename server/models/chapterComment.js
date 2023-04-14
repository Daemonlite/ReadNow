const mongoose = require('mongoose')


const chapterCommentSchema = new mongoose.Schema({
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
    chapter:{
        type:mongoose.Schema.Types.ObjectId
      },
},{
    timestamps:true
})
module.exports = mongoose.model('chapterComment',chapterCommentSchema)