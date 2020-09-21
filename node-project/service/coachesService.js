
const { getCoaches,getOne,reg,isExist,login,addCoach } = require("../dao/coachesDao");

module.exports.getCoaches = async function (data) {
    let arr = await getCoaches(data);
    console.log(arr);
    if (arr.length > 0) {
        return {
            success: true,
            msg: "获取成功",
            rows: [arr]
        };
    }
}
//详细信息
module.exports.getOne = async (data)=>{
	const getdata = await getOne(data);
	// console.log('vv',getdata)
	if(getdata.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "获取信息成功",getdata };
	} else {
		return { success: false,msg: '获取信息失败'};
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

//登录
module.exports.login = async data =>{
    const isLogin = await login(data);
    if(isLogin.length){
		const {account,name,role,_id} = isLogin[0];
        const token = jwt.sign(
			{account},//用于设置token中要保存的用户信息
			KEY,//密钥， 任意字符串
			{ expiresIn: 60 * 60 }//设置token的有效期，单位秒
            )
        return { success: true, msg: "登录成功" ,rows:{userInfo:{name,_id,role},token}};
    }else{
        return { success: false,msg: '账号或密码错误'};
    }
}
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
//新增教练
module.exports.addCoach = async (data) => {
    const rows = await addCoach(data);
    // console.log('vv',getdata)
    // 后端返回处理结果给前端
    return { success: true, msg: "获取教练成功", rows };

}