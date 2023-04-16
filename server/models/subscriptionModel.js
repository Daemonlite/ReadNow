const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    userProfile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Subscribe',subscriptionSchema)