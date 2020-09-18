var express = require('express');
var router = express.Router();

const { register,login,addGym,getGym,updateGym } = require('../service/gymService');

//注册
router.post('/register',async (req,res,next)=>{
    const data =await register(req.body)
    res.send(data)
  })
//登录
router.post('/login',async (req,res)=>{
    const data = await login(req.body);
    res.send(data)
})
//新增场馆
router.post('/addGym',async (req,res)=>{
  const data = await addGym(req.body);
  res.send(data);
})

//获取场馆信息
router.get('/getGym',async (req,res)=>{
  const data = await getGym(req.query);
  res.send(data)
});

//更改场馆信息
router.post('/updateGym',async (req,res)=>{
  const data = await updateGym(req.body)
  res.send(data)
})

module.exports = router;
