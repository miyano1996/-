const { login } = require('../dao/adminDao');

const jwt = require('jsonwebtoken'); //token
const { KEY } = require('../utils/consts.js'); //封装的密钥串

module.exports.login = async (data) => {
	// 调用第三层的 login
	const isLogin = await login(data);

	if (isLogin.length > 0) {
		const { account, owner, role } = isLogin[0];
		const token = jwt.sign(
			{ account },//用于设置token中要保存的用户信息
			KEY,//密钥， 任意字符串
			{ expiresIn: 60 * 60 }//设置token的有效期，单位秒
		)
		// 后端返回处理结果给前端
		return { success: true, msg: "登录成功", rows: { userInfo: { owner, role }, token } };
	} else {
		return { success: false, msg: '账号或密码错误' };
	}
}