const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
createdAt:{
      type:Date,
      default:Date.now
  },
  name:{
      type:String,
      required:[true,"uploaded file must have a name"]
  }
})

const File = mongoose.model("File",UserSchema)

module.exports = File;