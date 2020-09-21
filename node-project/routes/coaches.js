var express = require('express');
var router = express.Router();

//中间写内容
let { getCoaches, delCoaches, getOne, updateCoaches } = require("../service/coachesService");


router.post("/getCoaches", async (req, res, next) => {
    let data = await getCoaches(req.body);
    res.send(data);
})

router.post("/delCoaches", async (req, res, next) => {
    const msg = await delCoaches(req.body);
    res.send(msg);
})
//修改信息
router.post("updateCoaches", async (req, res, next) => {
    const msg = await updateCoaches(req.body);
    res.send(msg)
})

//详细信息
router.post('/details', async (req, res, next) => {
    const data = await getOne(req.body)
    res.send(data)
})
module.exports = router;