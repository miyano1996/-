var express = require('express');
var router = express.Router();

//中间写内容
let { getCoaches, delCoaches } = require("../service/coachesService");

router.post("/getCoaches", async (req, res, next) => {
    let data = await getCoaches(req.body);
    res.send(data);
})
router.post("/delCoaches", async (req, res, next) => {
    const msg = await delCoaches(req.body);
    res.send(msg);
})






module.exports = router;