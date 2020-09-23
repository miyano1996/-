const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    account:String,
    password:String,
    role:String,//权限
    grade:String,//场馆等级
    telephone:String,
    coaches:Array,//保存所有教练数据
    students:Array,//保存所有学生数据
    owner:String,//馆主姓名
    name:String,//场馆名字
    images:Array,  //活动图片
    address:String,
    JD:String,//招聘信息
    isDelete:Boolean,//是否被管理员删除
    businessTime:String,//营业时间
    idea:String,//经营理念
    time:String,//会馆创建时间
    activeContent:Array,//活动详情，对应活动图片
    activeTitle:Array,//活动标题
    announcement:Array,//公告
    status:String,//状态值：0表示正在申请，1表示申请成功，2表示申请失败
    activeImage:Array,
    checkCode:String,//验证码
}, {versionKey:false});

module.exports.gymModel = mongoose.model('gymModel', gymSchema, 'gym');