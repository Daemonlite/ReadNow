const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
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
    chapters:{
        type:Array
    },
    category:{
        type:String,
        require:true
    },
    //in order to specify age limit
    PG:{
        type:String,
        require:true
    },
    rating:{
        type:Array
    },
    comments:{
        type:Array
      },
      likes:{
        type:Array
      },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    reads:{
        type:Array
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Story',storySchema)