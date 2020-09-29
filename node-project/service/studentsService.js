
const { getOne, reg, isExist, login, getStudent, delStudent,upLoadAll,upLat,getStuByText,updatePassword  } = require('../dao/studentsDao');

const jwt = require('jsonwebtoken'); //token
const { KEY } = require('../utils/consts.js'); //封装的密钥串


//删除学生
module.exports.delStudent = async (data) => {
	const msg = await delStudent(data);
	if (msg.ok === 1) {
		return msg;
	}
}

//获取学生
module.exports.getStudent = async (data) => {
	const { arr, totalCount, pageSize, pageNumber } = await getStudent(data);
	if (arr.length > 0) {
		return {
			success: true,
			msg: '获取成功',
			totalCount, pageSize, pageNumber, arr
		}
	}
}

module.exports.getOne = async (data) => {
	const getdata = await getOne(data);
	console.log('vv',getdata)
	if (getdata.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "获取信息成功", getdata };
	} else {
		return { success: false, msg: '获取信息失败' };
	}
}


module.exports.reg = async data => {
	const isReg = await isExist(data);
	if (isReg.length > 0) {
		return { success: false, msg: "该用户名已被注册" };
	} else {
		const obj = await reg(data);
		// console.log(obj);
		if (obj._id) {
			return { success: true, msg: "注册成功", obj };
		}
		return { success: false, msg: "注册失败", obj };
	}
}

//登录
module.exports.login = async data => {
	const isLogin = await login(data);
	if (isLogin.length) {
		const { account, name, role, _id } = isLogin[0];
		console.log(role)
		const token = jwt.sign(
			{ account },//用于设置token中要保存的用户信息
			KEY,//密钥， 任意字符串
			{ expiresIn: 60 * 60 }//设置token的有效期，单位秒
		)
		return { success: true, msg: "登录成功", rows: { userInfo: { name, _id, role}, token } };
	} else {
		return { success: false, msg: '账号或密码错误' };
	}
}

//上传所有信息
module.exports.upLoadAll = async data =>{
	const obj = await upLoadAll(data);
	if(obj.nModified == '1'){
		return {success:true,msg:'修改信息成功',rows:obj}
	}
	return {success:false,msg:'修改信息失败',rows:obj};
}
//修改密码
module.exports.updatePassword = async data =>{
	const obj = await updatePassword(data);
	if(obj.nModified == '1'){
		return {success:true,msg:'修改密码成功',rows:obj}
	}
	return {success:false,msg:'修改密码失败',rows:obj};
}

//上传经纬度
module.exports.upLat = async data =>{
	const obj = await upLat(data);
	if(obj.nModified == '1'){
		return {success:true,msg:'经纬度上传成功',rows:obj}
	}
	return {success:false,msg:'经纬度上传失败',rows:obj};
}

//获取任意字段所有学员
module.exports.getStuByText = async data =>{
	const obj = await getStuByText(data);
	if(obj.length>0){
		return {success:true,msg:'获取所有学员成功',rows:obj}
	}
	return {success:false,msg:'获取所有学员失败',rows:obj}
}

