var express = require('express');
var router = express.Router();
<<<<<<< HEAD

//中间写内容










module.exports = router;
=======
const { addOrder, getAllOrders } = require('../service/ordersService')

router.post('/addOrder', async (req, res, next) => {
    const data = await addOrder(req.body)
    res.send(data)
})

router.get('/getAllOrders', async (req, res, next) => {
    const data = await getAllOrders(req.query)
    res.send(data)
})
module.exports = router;
>>>>>>> xueyanbo
