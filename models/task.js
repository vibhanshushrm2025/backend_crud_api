import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    } ,
    description : {
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, // Don't put directly String , but put this form for id
        ref:"User",                          // This refers to the model name you have given , from where you are finding id
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export const Task = mongoose.model("Task",schema);

