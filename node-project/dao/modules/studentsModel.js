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
    role:String,//用于手机端角色识别
}, { versionKey: false });
module.exports.studentsModel = mongoose.model('studentsModel', studentsSchema, 'students');