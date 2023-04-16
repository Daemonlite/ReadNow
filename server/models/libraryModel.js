const mongoose = require('mongoose')


const librarySchema = new mongoose.Schema({
    name:{
        type:String,
        rquire:true
    },
    descr:{
        type:String,
        rquire:true 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    stories:{
        type:Array
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('Library',librarySchema)