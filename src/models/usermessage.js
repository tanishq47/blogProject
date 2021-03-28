const mongoose = require('mongoose');
const validator = require('validator');

// defining user schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email!")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})

// Defining the collection(table)
const User = mongoose.model("User", userSchema);

// Exporting
module.exports = User;