var express = require('express');
var router = express.Router();
const { addOrder, getAllOrders, getOrders } = require('../service/ordersService')

//新增订单
router.post('/addOrder', async (req, res, next) => {
    const data = await addOrder(req.body)
    res.send(data)
})
// 获取所有未被删除的订单
router.get('/getAllOrders', async (req, res, next) => {
    const data = await getAllOrders(req.query)
    res.send(data)
})

// 删除订单
router.post('/deleteOrder', async (req, res, next) => {
    await delOrder(req.body)
    res.send({ success: true })
})

router.get('/getOrders', async (req, res, next) => {
    // console.log(req.query);
    const data = await getOrders(req.query)
    res.send(data)
})


module.exports = router;
