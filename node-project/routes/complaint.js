var express = require('express');
var router = express.Router();

const { addComplaint, getAllComplaints, delComplaint } = require('../service/complaintService')
//添加投诉
router.post('/addComplaint', async (req, res, next) => {
    const data = await addComplaint(req.body)
    res.send(data)
})

//获取所有投诉信息
router.get('/getAllComplaints', async (req, res, next) => {
    const data = await getAllComplaints(req.query)
    res.send(data)
})

//软删除投诉
router.post('/delComplaint', async (req, res, next) => {
    const data = await delComplaint(req.body)
    res.send(data)
})
module.exports = router;
