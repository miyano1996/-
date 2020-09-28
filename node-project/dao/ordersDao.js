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

//获取任意字段订单
module.exports.getOrderByText = async data => await ordersModel.find(data).populate('students').populate('coaches').populate('gym');
//修改订单
module.exports.updateOrders = async data => {
    console.log(data);
    return await ordersModel.updateOne({ _id: data._id }, data)
}
//删除红点
module.exports.appearRed = async data => {
    console.log(data);
    const data1 = await ordersModel.find({_id:data._id, payment: '0.5' })
    const data2 = await ordersModel.find({_id:data._id, payment: '1.5' })
    var msg1, msg2;
    for (var i = 0; i <= data1.length; i++) {
        msg1 =await ordersModel.updateOne({_id:data._id, payment: '0.5' }, { payment: '1' })
    }

    for (var i = 0; i <= data2.length; i++) {
        msg2 =await ordersModel.updateOne({_id:data._id, payment: '1.5' }, { payment: '2' })
    }
    return { msg1, msg2 }
} 
