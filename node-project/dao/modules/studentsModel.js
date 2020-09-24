const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    account: String,
    password: String,
    telephone: String,
    headImage: String,
    name: String,
    loginAdress: String,
    isDelete: Boolean,//(是否被管理员删除)
    points: String,//(学员积分)
    nick:String,//昵称
    gender:String,//性别
    social:String//社交状态
}, { versionKey: false });
module.exports.studentsModel = mongoose.model('studentsModel', studentsSchema, 'students');