var express = require('express');
var router = express.Router();

const { getOne } = require('../service/studentsService')

router.post('/details',async (req,res,next)=>{
  const data =await getOne(req.body)
  console.log(data,'ss')
  res.send(data)
})

module.exports = router;
