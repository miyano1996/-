var express = require('express');
var router = express.Router();
const { getOne, reg, login, getStudent, delStudent,upLoadAll,upLat,getStuByText,updatePassword } = require('../service/studentsService')

router.post('/details', async (req, res, next) => {
  const data = await getOne(req.body)
  res.send(data)
})

router.post('/reg', async (req, res) => {
  const data = await reg(req.body);
  res.send(data);
})

//登录
router.post('/login', async (req, res) => {
  // console.log(req.body);
  const data = await login(req.body);
  console.log(data);
  res.send(data)
})
//获取全部学生
router.post("/getallStudents", async (req, res, next) => {
  const data = await getStudent(req.body);
  res.send(data)
})
//删除学生
router.post("/delStudent", async (req, res, next) => {
  const data = await delStudent(req.body);
  res.send(data);
})

router.post('/upLoadAll',async (req,res)=>{
  const data = await upLoadAll(req.body);
  res.send(data);
})

router.post('/upLat',async (req,res)=>{
  console.log(req.body);
  const data = await upLat(req.body);
  res.send(data);
})
//修改密码
router.post('/updatePassword',async (req,res)=>{
  console.log(req.body);
  const data = await updatePassword(req.body);
  res.send(data);
})

router.get('/getStuByText',async (req,res)=>{
  const data = await getStuByText(req.query);
  res.send(data);
})

module.exports = router;
