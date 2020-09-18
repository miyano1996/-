var express = require('express');
var router = express.Router();

//中间写内容
let { getCoaches } = require("../service/coachesService");

router.post("/getCoaches", async (req, res, next) => {
    console.log(12313);
    let data = await getCoaches(req.body);
    res.send(data);
})







module.exports = router;