var express = require('express');
var router = express.Router();
const {upCarousel,getAllCarousel} = require('../service/carouselService.js');

//中间写内容
//上传轮播图
router.post('/upCarousel',async (req,res,next)=>{
    const data =await upCarousel(req.body)
    res.send(data)
})

//获取所有轮播图
router.get('/getAllCarousel',async (req,res)=>{
    const data = await getAllCarousel(req.query);
    res.send(data)
})


module.exports = router;