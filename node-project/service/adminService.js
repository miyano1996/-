const { login } = require('../dao/adminDao');

module.exports.login = async (data)=>{
	// 调用第三层的 login
	const isLogin = await login(data);
	if(isLogin.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "登录成功" };
	} else {
		return { success: false,msg: '登录失败'};
	}
}