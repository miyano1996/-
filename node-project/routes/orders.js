var express = require('express');
var router = express.Router();
const { addOrder, getAllOrders,getOrders } = require('../service/ordersService')

router.post('/addOrder', async (req, res, next) => {
    const data = await addOrder(req.body)
    res.send(data)
})

router.get('/getAllOrders', async (req, res, next) => {
    const data = await getAllOrders(req.query)
    res.send(data)
})

router.get('/getOrders', async (req, res, next) => {
    // console.log(req.query);
    const data = await getOrders(req.query)
    res.send(data)
})


module.exports = router;
