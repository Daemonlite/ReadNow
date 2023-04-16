const mongoose = require('mongoose')


const librarySchema = new mongoose.Schema({
    name:{
        type:String,
        rquire:false
    },
    descr:{
        type:String,
        rquire:false 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    stories:{
        type:Array
    },
    story:{
        type:mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Library',librarySchema)