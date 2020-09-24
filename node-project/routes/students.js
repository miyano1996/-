var express = require('express');
var router = express.Router();

const { getOne,reg,login,getStudent,upLoadAll,upLat } = require('../service/studentsService')

router.post('/details',async (req,res,next)=>{
  console.log(req.body);
  const data =await getOne(req.body)
  res.send(data)
})

router.post('/reg',async (req,res)=>{
  const data = await reg(req.body);
  res.send(data);
}) 

//登录
router.post('/login',async (req,res)=>{
  const data = await login(req.body);
  res.send(data)
})

router.post('/upLoadAll',async (req,res)=>{
  const data = await upLoadAll(req.body);
  res.send(data);
})

router.post('/upLat',async (req,res)=>{
  const data = await upLat(req.body);
  res.send(data);
})

module.exports = router;
