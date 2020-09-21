const { getAllOrders, addOrder,getOrders } = require('../dao/ordersDao');

//添加订单
module.exports.addOrder = async function (data) {
    await addOrder(data);
};

//获取所有订单
module.exports.getAllOrders = async function (data) {
    let msg = await getAllOrders(data);
    if (msg.rows.length > 0) {
        return data = {
            rows: msg.rows,
            success: true
        }
    } else {
        return data = {
            rows: null,
            success: false
        }
    }
};

//获取场馆订单
module.exports.getOrders = async function (data) {
    let msg = await getOrders(data);
    if (msg.rows.length > 0) {
        return data = {
            rows: msg.rows,
            success: true
        }
    } else {
        return data = {
            rows: null,
            success: false
        }
    }
};