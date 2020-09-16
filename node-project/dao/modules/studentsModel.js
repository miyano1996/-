const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  account:String,
  password:String,
  telephone:String,
  headImage:String,
  name:String,
  loginAdress:String,
  isDelete:Boolean,
  points:String,

}, {versionKey:false});
module.exports.studentsModel = mongoose.model('studentsModel', studentsSchema, 'students');