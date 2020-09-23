var express = require('express');
var router = express.Router();

const { getOne,reg,login,getStudent } = require('../service/studentsService')

router.post('/details',async (req,res,next)=>{
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

module.exports = router;
