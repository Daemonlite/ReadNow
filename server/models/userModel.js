const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:false
    },
    email:{
        type:String,
        require:false
    },
    bio:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:false
    },
    profile:{
        type:String,
        require:false
    },
    location:{
        type:String,
        require:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false  
    },
    isBanned:{
        type:Boolean,
        default:false  
    },
    subscribers:{
        type:Array
    },
    library:{
        type:Array
    }
 
},{
    timestamps:true
})
module.exports = mongoose.model('User',userSchema)