var express = require('express');
var router = express.Router();

const { register, login, addGym, getGymByStatus, changeGymStatus, getGymByText, getGym, updateGym, sendCheckCode, clearCheckCode, changePassword, getAllGym, delGym } = require('../service/gymService');

//获取所有场馆
router.post('/getAllGym', async (req, res, next) => {
  const data = await getAllGym(req.body);
  res.send(data);
})
//删除场馆信息
router.post('/delGym', async (req, res, next) => {
  const data = await delGym(req.body);
  res.send(data);
})
//注册
router.post('/register', async (req, res, next) => {
  const data = await register(req.body)
  res.send(data)
})
//登录
router.post('/login', async (req, res) => {
  const data = await login(req.body);
  res.send(data)
})
//新增场馆
router.post('/addGym', async (req, res) => {
  const data = await addGym(req.body);
  res.send(data);
})
//通过状态获取场馆
router.get('/getGymByStatus', async (req, res) => {
  const data = await getGymByStatus(req.query);
  res.send(data);
})
//改变场馆状态
router.post('/changeGymStatus', async (req, res) => {
  const data = await changeGymStatus(req.body);
  res.send(data);
})
//通过单个字段获取场馆信息
router.get('/getGymByText', async (req, res) => {
  const data = await getGymByText(req.query);
  res.send(data);
})

//获取场馆信息
router.get('/getGym', async (req, res) => {
  console.log(req.query)
  const data = await getGym(req.query);
  
  res.send(data)
});

//更改场馆信息
router.post('/updateGym', async (req, res) => {
  const data = await updateGym(req.body)
  res.send(data)
})

//发送验证码
router.post('/sendCheckCode', async (req, res) => {
  const data = await sendCheckCode(req.body);
  res.send(data)
})
//修改密码
router.post('/changePassword', async (req, res) => {
  const data = await changePassword(req.body);
  res.send(data);
})
//清空验证码
router.post('/clearCheckCode', async (req, res) => {
  const data = await clearCheckCode(req.body);
  res.send(data)
})
module.exports = router;
