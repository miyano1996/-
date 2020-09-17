const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    gym: Object,//{_id,name}（场馆）
    coaches: Object,//{_id,name}（教练）
    students: Object,//{_id,name}（学员）
    time: String,//（订单生成时间）
}, { versionKey: false });
module.exports.complaintModel = mongoose.model('complaintModel', complaintSchema, 'complaints');