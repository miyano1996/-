const { ordersModel } = require('./modules/ordersModel');
// 添加订单
module.exports.addOrder = async function (data) {
   return await ordersModel.create(data);
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
    const { pageSize, pageSee, id } = data
    const total = await ordersModel.find({ gym: id, delet: false }).populate('students').populate('coaches').populate('gym').countDocuments();
    const msg = await ordersModel.find({ gym: id, delet: false }).populate('students').populate('coaches').populate('gym')
        //展示的数据数量，方法内的数据类型必须为number
        .limit(pageSize - 0)
        //跳过的数据数量
        .skip((pageSee - 1) * pageSize);
    return data = {
        rows: msg,
        total
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
