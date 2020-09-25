const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    account:String,
    password:String,
    owner:String,
    role:String//权限
}, {versionKey:false});
module.exports.adminModel = mongoose.model('adminModel', adminSchema, 'admin');