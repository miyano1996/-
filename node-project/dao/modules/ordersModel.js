const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gymModel'
    },//{_id,name}（场馆）      5f685c1fa04e0000f1000cff
    coaches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coachesModel'
    },//{_id,name}（教练）     5f685c60a04e0000f1000d00
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentsModel'
    },//{_id,name}（学员）   5f685c6ea04e0000f1000d01
    time: String,//（订单生成时间）
    status: Boolean,//（订单状态）布尔值  true:已付款
    delet: Boolean,//删除状态,负责店家软删除  true为删除
    orderPrice: String,//（订单价格
    className: String
}, { versionKey: false });
module.exports.ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');