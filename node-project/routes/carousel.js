var express = require('express');
var router = express.Router();
const {upCarousel} = require('../service/carouselService.js');

//中间写内容
//上传轮播图
router.post('/upCarousel',async (req,res,next)=>{
    const data =await upCarousel(req.body)
    res.send(data)
})


module.exports = router;