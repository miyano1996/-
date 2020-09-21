const { getOne, reg, isExist,login } = require('../dao/studentsDao');

module.exports.getOne = async (data) => {
	const getdata = await getOne(data);
	// console.log('vv',getdata)
	if (getdata.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "获取信息成功", getdata };
	} else {
		return { success: false, msg: '获取信息失败' };
	}
}

module.exports.login = async (data) => {
	const getdata = await login(data);
	// console.log('vv',getdata)
	if (getdata.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "登录成功", getdata };
	} else {
		return { success: false, msg: '登录失败，用户名或密码错误。' };
	}
}

module.exports.reg = async data => {
	const isReg = await isExist(data);
	if (isReg.length > 0) {
		return { success: false, msg: "该用户名已被注册" };
	} else {
		const obj = await reg(data);
		console.log(obj);
		if (obj._id) {
			return { success: true, msg: "注册成功", obj };
		}
		return { success: false, msg: "注册失败", obj };
	}

}
