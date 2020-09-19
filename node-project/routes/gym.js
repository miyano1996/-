var express = require('express');
var router = express.Router();

const { register,login,addGym,getGymByStatus,changeGymStatus,getGymByText } = require('../service/gymService');

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
//通过状态获取场馆
router.get('/getGymByStatus',async (req,res)=>{
  const data = await getGymByStatus(req.query);
  res.send(data);
})
//改变场馆状态
router.post('/changeGymStatus',async (req,res)=>{
  const data = await changeGymStatus(req.body);
  res.send(data);
})
//通过单个字段获取场馆信息
router.get('/getGymByText',async (req,res)=>{
  const data = await getGymByText(req.query);
  res.send(data);
})

module.exports = router;