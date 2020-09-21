var express = require('express');
var router = express.Router();

//中间写内容
let { getCoaches,getOne,reg,login,addCoach } = require("../service/coachesService");

router.post("/getCoaches", async (req, res, next) => {
    console.log(12313);
    let data = await getCoaches(req.body);
    res.send(data);
})
//详细信息
router.post('/details',async (req,res,next)=>{
  const data =await getOne(req.body)
  res.send(data)
})
router.post('/reg',async (req,res)=>{
  const data = await reg(req.body);
  res.send(data);
})
router.post('/login',async (req,res)=>{
  const data = await login(req.body);
  res.send(data)
})
//新增教练
router.get('/addCoach',async (req,res,next)=>{
  const rows =await addCoach(req.query)
  console.log(req.query);
  res.send(rows)
})
module.exports = router;