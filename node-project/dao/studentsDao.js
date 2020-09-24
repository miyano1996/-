const { model } = require('mongoose');
const { studentsModel } = require('./modules/studentsModel')
const { ordersModel } = require('./modules/ordersModel');
module.exports.getOne = async (data) => {
	return await studentsModel.find({ _id: data.id });
}


//获取学生

module.exports.getStudent = async ({ _id, pageSize, pageNumber }) => {
	let totalCount = await (await studentsModel.find({ isDelete: false })).filter(item => item.gym.includes(_id)).length;
	let arr = await studentsModel.find({ isDelete: false, gym: { $elemMatch: { $eq: _id } } }).limit(pageSize - 0).skip((pageNumber - 1) * pageSize);
	return { arr, totalCount, pageSize, pageNumber };
}

//login
module.exports.login = async data => {
	return await studentsModel.find(data);
}
//验证是否重名
module.exports.isExist = async data => {
	return await studentsModel.find({ account: data.account });
}

//注册
module.exports.reg = async data => {
	return await studentsModel.create(data);
}

//登录
module.exports.login = async ({ account, password }) => await studentsModel.find({ account, password });

//删除学生

module.exports.delStudent = async ({ _id, isDelete }) => {
	return await studentsModel.update({ _id }, { isDelete })
}
