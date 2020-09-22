const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    gymId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gymModel'
    },//{_id,name}（场馆）    5f685c1fa04e0000f1000cff
    coacheId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coachesModel'
    },//{_id,name}（教练）      5f685c60a04e0000f1000d00
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentsModel'
    },//{_id,name}（学员）   5f685c6ea04e0000f1000d01
    ordersId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ordersModel'
    },    //5f685daca04e0000f1000d02
    status: Boolean,//是否被处理
    time: String,//（投诉时间）
    text: String,//投诉文本
}, { versionKey: false });
module.exports.complaintModel = mongoose.model('complaintModel', complaintSchema, 'complaints');