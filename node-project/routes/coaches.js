var express = require('express');
var router = express.Router();

//中间写内容
let { getCoaches, delCoaches, getOne, updateCoaches, addCoach,reg,login,upLoadAll,updatePassword,getEveryCoaches } = require("../service/coachesService");


router.post("/getCoaches", async (req, res, next) => {
  let data = await getCoaches(req.body);
  res.send(data);
})

router.post("/delCoaches", async (req, res, next) => {
  const msg = await delCoaches(req.body);
  res.send(msg);
})
//修改信息
router.post("/updateCoaches", async (req, res, next) => {
  const msg = await updateCoaches(req.body);
  res.send(msg)
})
//获取所有教练
router.get('/getEveryCoaches', async (req, res, next) => {
  const data = await getEveryCoaches(req.body)
  res.send(data)
})
//详细信息
router.post('/details', async (req, res, next) => {
  // console.log(req.body);
  const data = await getOne(req.body)
  res.send(data)
})
router.post('/reg', async (req, res) => {
  const data = await reg(req.body);
  res.send(data);
})
//login
router.post('/login', async (req, res) => {
  const data = await login(req.body);
  console.log(data)
  res.send(data)
})
//新增教练
router.get('/addCoach', async (req, res, next) => {
  const rows = await addCoach(req.query)
  res.send(rows)
})
//上传详细信息
router.post('/upLoadAll',async (req,res)=>{
  const data = await upLoadAll(req.body);
  res.send(data);
})
//修改密码
router.post('/updatePassword',async (req,res)=>{
  const data = await updatePassword(req.body);
  res.send(data);
})
module.exports = router;