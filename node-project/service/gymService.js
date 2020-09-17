const { register,isReuse,login } = require('../dao/gymDao');

const jwt = require('jsonwebtoken'); //token
const { KEY } = require('../utils/consts.js'); //封装的密钥串

//注册
module.exports.register = async data => {
    const res = await isReuse(data);
    if(res.length>0){
        return {success:false, msg:"用户名已存在"}
    }else{
        const res = await register(data);
        return res.id?{success:true,msg:"注册成功"}:{success:false,msg:"注册失败"}
    }
}

//登录
module.exports.login = async data =>{
    const isLogin = await login(data);
    if(isLogin.length){
		const {account,name,role} = isLogin[0];
        const token = jwt.sign(
			{account},//用于设置token中要保存的用户信息
			KEY,//密钥， 任意字符串
			{ expiresIn: 60 * 60 }//设置token的有效期，单位秒
            )
        return { success: true, msg: "登录成功" ,rows:{name,role,token}};
    }else{
        return { success: false,msg: '登录失败'};
    }

}