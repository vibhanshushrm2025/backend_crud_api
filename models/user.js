import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    } ,
    email : {
        type:String,
        required:true,
        unique:true // It should be unique
    },
    password:{
        type:String,
        required:true,
        select:false // It won't be fetched if you don't use .select("password") or select("+password")
                    // .select("password") will not give you the password
                    // .select("+password") will give you the password along with the entities which are not select :false
    },
    createdAt:{
        type:Date,
        default:Date.now // these two things can be go in any database
    }
})
export const mdl = mongoose.model("User",schema);

