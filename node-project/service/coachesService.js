const jwt = require('jsonwebtoken'); //token
const { KEY } = require('../utils/consts.js'); //封装的密钥串
const { getCoaches, delCoaches, getOne, updateCoaches, addCoach, reg, isExist, login, upLoadAll, getCoachAll, updatePassword, getEveryCoaches } = require("../dao/coachesDao");

//获取教练
module.exports.getCoaches = async function (data) {
    console.log(data);
    let { arr, totalCount, pageSize, pageNumber, total } = await getCoaches(data);
    if (arr.length > 0) {
        return {
            success: true,
            msg: "获取成功",
            rows: arr,
            totalCount,
            pageSize,
            pageNumber,
        };
    } else {
        return {
            total
        };
    }
}
//获取所有教练
module.exports.getEveryCoaches = async (data) => {
    const getdata = await getEveryCoaches(data);
    // console.log('vv',getdata)
    if (getdata.length > 0) {
        // 后端返回处理结果给前端
        return { success: true, msg: "获取教练成功", getdata };
    } else {
        return { success: false, msg: '获取教练失败' };
    }
}
//删除教练
module.exports.delCoaches = async function (data) {
    let msg = await delCoaches(data);
    if (msg.ok === 1) {
        return { success: true, msg: "删除成功" }
    }
};
//修改教练信息
module.exports.updateCoaches = async function (data) {
    let msg = await updateCoaches(data);
    if (msg.ok === 1) {
        return { success: true, msg: "修改成功" }
    }
}

//详细信息
module.exports.getOne = async (data) => {
    const getdata = await getOne(data);
    console.log(getdata);

    // console.log('vv',getdata)
    if (getdata.length > 0) {
        // 后端返回处理结果给前端
        return { success: true, msg: "获取信息成功", getdata };
    } else {
        return { success: false, msg: '获取信息失败' };
    }
}
//新增教练
module.exports.addCoach = async (data) => {
    const rows = await addCoach(data);
    // console.log('vv',getdata)
    // 后端返回处理结果给前端
    return { success: true, msg: "获取教练成功", rows };

}

//教练注册
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
        const token = jwt.sign(
            { account },//用于设置token中要保存的用户信息
            KEY,//密钥， 任意字符串
            { expiresIn: 60 * 60 }//设置token的有效期，单位秒
        )
        return { success: true, msg: "登录成功", rows: { userInfo: { name, _id, role }, token } };
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

//获取所有教练
module.exports.getCoachAll = async data => {
    const obj = await getCoachAll(data);
    if (obj.length > 0) {
        return { success: true, msg: '获取所有教练成功', rows: obj }
    }
    return { success: false, msg: '获取所有教练失败', rows: obj }
}
//修改密码
module.exports.updatePassword = async data => {
    const obj = await updatePassword(data);
    if (obj.nModified == '1') {
        return { success: true, msg: '修改密码成功', rows: obj }
    }
    return { success: false, msg: '修改密码失败', rows: obj };
}