const mongoose = require('mongoose')


const librarySchema = new mongoose.Schema({
    name:{
        type:String,
        rquire:true
    },
    decsr:{
        type:String,
        rquire:true 
    },
    stories:{
        type:Array
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Library',librarySchema)