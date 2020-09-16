const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    account:String,
    password:String
}, {versionKey:false});
module.exports.adminModel = mongoose.model('adminModel', adminSchema, 'admin');