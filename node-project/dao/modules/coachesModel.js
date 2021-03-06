const mongoose = require('mongoose');

const coachesSchema = new mongoose.Schema({
    account: String,
    password: String,
    students: Array,
    headImage: String,//头像
    name: String,
    loginAdress: String,//登录时所在地址
    workingTime: String,//工作时间
    price: String,//（课时费）
    telephone: String,
    gym:{
        type: mongoose.Schema.Types.ObjectId,
		ref: 'gymModel'
    },
    isRest: Boolean,//（是否休息中）
    course: Array,//(所教授课程)，
    isDelete: Boolean//（是否被管理员、场馆删除）

}, { versionKey: false });
module.exports.coachesModel = mongoose.model('coachesModel', coachesSchema, 'coaches');