const { getAllOrders, addOrder, delOrder, getOrder } = require('../dao/ordersDao');

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
            success: true
        }
    }
};

//删除订单
module.exports.delOrder = async function (data) {
    await delOrder(data);
    const msg = await getOrder(data.id);
    return msg
};