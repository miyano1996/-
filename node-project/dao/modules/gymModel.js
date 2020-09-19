const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    account:String,
    password:String,
    role:String,//权限
    grade:String,//场馆等级
    telephone:String,
    coaches:Array,//保存所有教练数据
    students:Array,//保存所有学生数据
    name:String,
    images:Array,
    address:String,
    JD:String,//招聘信息
    isDelete:Boolean,//是否被管理员删除
    status:String,//状态值：0表示正在申请，1表示申请成功，2表示申请失败
    time:String//申请时间
}, {versionKey:false});

module.exports.gymModel = mongoose.model('gymModel', gymSchema, 'gym');