const { carouselModel } = require('./modules/carouselModel');

//上传轮播图
module.exports.upCarousel= async data => await carouselModel.create(data);
