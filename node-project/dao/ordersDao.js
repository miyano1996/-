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
    // console.log({ gym: data.id, delet: false });
    const {pageSize,pageSee} = data
    // console.log(data);
    const total = await ordersModel.find({ gym: data._id, delet: false }).populate('students').populate('coaches').populate('gym').countDocuments();
    const msg = await ordersModel.find({ gym: data._id, delet: false }).populate('students').populate('coaches').populate('gym')
        //展示的数据数量，方法内的数据类型必须为number
        .limit(pageSize - 0)
        //跳过的数据数量
        .skip((pageSee - 1) * pageSize);
        // console.log(total);
    return data = {
        rows: msg,
        total
        // num: num.length,
        // delnum: delnum.length
    }

};
//获取场馆订单
module.exports.getOrders = async function (obj) {
    const msg = await ordersModel.find({ gym: "5f684a17ed6c0000ef007954" })
    console.log(obj);
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
