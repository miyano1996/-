var express = require('express');
var router = express.Router();

//中间写内容
const { getOne } = require('../service/coachesService')

router.post('/details',async (req,res,next)=>{
  const data =await getOne(req.body)
  res.send(data)
})
module.exports = router;