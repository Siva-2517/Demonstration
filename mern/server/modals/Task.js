const mongoose = require('mongoose')

const TaskSchema=new mongoose.model('TaskInfo',{
    title:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },status:{
        type:String,
        default:'pending',
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserInfo',
        
    }
    })
module.exports=TaskSchema;