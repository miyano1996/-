const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    gym:Object,//{_id,name}（场馆）
    coaches:Object,//{_id,name}（教练）
    students:Object,//{_id,name}（学员）
    time:String,//（订单生成时间）
    status:String,//（订单状态）
    orderPrice:String//（订单价格
}, { versionKey: false });
module.exports.ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');