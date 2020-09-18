const mongoose = require('mongoose');
const { studentsModel } = require('./studentsModel')
const { coachesModel } = require('./coachesModel')
const { gymModel } = require('./gymModel')

const ordersSchema = new mongoose.Schema({
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gymModel'
    },//{_id,name}（场馆）
    coaches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coachesModel'
    },//{_id,name}（教练）
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentsModel'
    },//{_id,name}（学员）
    time: String,//（订单生成时间）
    pay: Boolean,//（订单状态）布尔值  true:已付款
    delet: Boolean,//删除状态,负责店家软删除  true为删除
    orderPrice: String,//（订单价格
    className: String
}, { versionKey: false });
module.exports.ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');