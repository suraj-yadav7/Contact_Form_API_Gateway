import mongoose from "mongoose";

const FORMSCHEMA= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default:'--'
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

export const UserFrom=mongoose.model("user_form", FORMSCHEMA)
