var express = require('express');
var router = express.Router();

const { login } = require('../service/adminService')

router.post('/login', async (req, res, next) => {
  const data = await login(req.body)
  res.send(data)
})

module.exports = router;
