const { gymModel } = require('./modules/gymModel');

//注册
module.exports.register = async data => await gymModel.create(data);

//验证重名
module.exports.isReuse = async ({ account }) => await gymModel.find({ account });

//登录
module.exports.login = async ({ account, password }) => await gymModel.find({ account, password });

//新增场馆
module.exports.addGym = async ({ _id, telephone, name, images, address, status, time }) => await gymModel.updateOne({ _id }, { telephone, name, images, address, status, time });

//根据状态获取场馆信息
module.exports.getGymByStatus = async ({ status }) => await gymModel.find({ status });

//改变场馆状态
module.exports.changeGymStatus = async ({ _id, status }) => await gymModel.updateOne({ _id }, { status });

//根据一个字段信息获取场馆信息
module.exports.getGymByText = async (data) => await gymModel.find(data);

//获取场馆信息
module.exports.getGym = async (data) => await gymModel.find({ _id: data._id, isDelete: false })

//更改场馆信息
module.exports.updateGym = async (data) => await gymModel.updateOne({ _id: data._id }, { ...data })
//将验证码存入数据库
module.exports.saveCheckCode = async ({ _id, checkCode }) => await gymModel.updateOne({ _id }, { checkCode })

//修改密码
module.exports.changePassword = async ({ _id, password }) => await gymModel.updateOne({ _id }, { password })

//获取所有场馆
module.exports.getAllGym = async ({ pageSize, pageNumber }) => {
    let totalCount = await gymModel.find({ status: '1', isDelete: false });
    let arr = await gymModel.find({ status: '1', isDelete: false }).limit(pageSize - 0).skip((pageNumber - 1) * pageSize);
    return { arr, totalCount: totalCount.length, pageSize, pageNumber };
}

//删除场馆

module.exports.delGym = async ({ _id, isDelete }) => await gymModel.update({ _id }, { isDelete })
