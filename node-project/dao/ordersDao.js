const { ordersModel } = require('./modules/ordersModel');
// 添加订单
module.exports.addOrder = async function (data) {
    await ordersModel.create(data);
};
// 用户结账
// module.exports.pay = async function (data) {
//     let msg = await ordersModel.updateOne({ _id: data._id }, { pay: true});
//     return {
//         msg: msg
//     }
// };



// 获取所有订单
module.exports.getAllOrders = async function (data) {
    // const num = await ordersModel.find({ delet: false });
    // const delnum = await ordersModel.find({ removed: true });
    const msg = await ordersModel.find({ gym: data.id, delet: false }).populate('students').populate('coaches').populate('gym')
    // .limit(data.datanum - 0).skip((data.pagenum - 1) * (data.datanum - 0));
    return data = {
        rows: msg,
        // num: num.length,
        // delnum: delnum.length
    }

};
//获取场馆订单
module.exports.getOrders = async function (obj) {
    const msg = await ordersModel.find({ gym: "5f684a17ed6c0000ef007954" })
    return data = {
        rows: msg
    }
};
// 获取指定的订单
module.exports.getOrder = async function (data) {
    const msg = await ordersModel.find({ _id: data })
    return data = {
        rows: msg
    }
};
// 删除订单(软删除)
module.exports.delOrder = async function (data) {
    await ordersModel.updateOne({ _id: data._id }, { delet: data.success });
}
