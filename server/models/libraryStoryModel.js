const mongoose = require('mongoose')


const libraryStorySchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    coverImage:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    descr:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    story:{
        type:mongoose.Schema.Types.ObjectId
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    lib:{
        type:mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true
})

module.exports = mongoose.model('LibraryStory',libraryStorySchema)