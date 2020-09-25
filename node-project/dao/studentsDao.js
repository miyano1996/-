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
	return await studentsModel.create({
		account: data.account,
		password: data.password,
		telephone: "未设置",
		headImage: data.headImage || "",
		name: data.name || "暂无昵称",
		loginAdress: "未知",
		isDelete: false,//(是否被管理员删除)
		points: "0",//(学员积分)
		age: '未知',
		gender: '未知'
	});
}

//登录
module.exports.login = async ({ account, password }) => await studentsModel.find({ account, password });

//上传完善信息
module.exports.upLoadAll = async (data) => await studentsModel.updateOne({_id:data._id},{...data});

//登陆成功后获取当前经纬度
module.exports.upLat = async ({_id,loginAdress}) => await studentsModel.updateOne({_id},loginAdress);

//删除学生

module.exports.delStudent = async ({ _id, isDelete }) => {
	return await studentsModel.update({ _id }, { isDelete })
}
//修改密码

module.exports.updatePassword = async ({ account, password,newPassword }) => {
	return await studentsModel.update({ account,password }, { password:newPassword })
}
