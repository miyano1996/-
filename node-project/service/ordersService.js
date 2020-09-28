const { getAllOrders, addOrder, delOrder, getOrder, getOrders,getOrderByText,updateOrders,appearRed } = require('../dao/ordersDao');

//添加订单
module.exports.addOrder = async function (data) {
    return await addOrder(data);
};

//获取所有订单
module.exports.getAllOrders = async function (data) {
    let msg = await getAllOrders(data);
    if (msg.rows.length > 0) {
        return data = {
            rows: msg.rows,
            success: true,
            total:msg.total
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
}
//获取场馆订单
module.exports.getOrders = async function (data) {
    let msg = await getOrders(data);
    if (msg.rows.length > 0) {
        return data = {
            rows: msg.rows,
            success: true,
            // total:msg.total
        }
    } else {
        return data = {
            rows: null,
            success: false
        }
    }
};

//获取任意字段订单
module.exports.getOrderByText = async data =>{
    const obj = await getOrderByText(data);
    if(obj.length > 0){
        return {success:true,msg:'获取订单成功',rows:obj}
    }
    return {success:false,msg:'获取订单失败',rows:obj}
}
//修改订单
module.exports.updateOrders = async data =>{
    const obj = await updateOrders(data);
    // console.log(data);
    if(obj.nModified == '1'){
        return {success:true,msg:'修改订单成功',rows:obj}
    }
    return {success:false,msg:'修改订单失败',rows:obj}
}
//删除红点
module.exports.appearRed = async data =>{
    const obj = await appearRed(data);
    // console.log(data);
    
    return obj
}