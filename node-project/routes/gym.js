var express = require('express');
var router = express.Router();

const { register } = require('../service/gymService');

//注册
router.post('/register',async (req,res,next)=>{
    const data =await register(req.body)
    res.send(data)
  })

module.exports = router;