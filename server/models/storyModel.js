const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    title:{
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
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Story',storySchema)