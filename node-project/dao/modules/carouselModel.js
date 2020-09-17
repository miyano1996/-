const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    images:Array,
    _ids:Array//（保存对应下标图片的id，用户点击时根据id查找场馆信息）
}, { versionKey: false });
module.exports.carouselModel = mongoose.model('carouselModel', carouselSchema, 'carousel');