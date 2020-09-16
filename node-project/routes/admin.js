var express = require('express');
var router = express.Router();

const { login } = require('../service/adminService')

router.post('admin/login',async (req,res,next)=>{
  const data = login(req.body)
  res.send(data)
})

module.exports = router;
