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
    images:Array,  //活动图片
    address:String,
    JD:String,//招聘信息
    isDelete:Boolean,//是否被管理员删除
    businessTime:String,//营业时间
    idea:String,//经营理念
    createTime:String,//会馆创建时间
    activeContent:Array,//活动详情，对应活动图片
    activeTitle:Array,//活动标题
    announcement:String,//公告
}, {versionKey:false});

module.exports.gymModel = mongoose.model('gymModel', gymSchema, 'gym');