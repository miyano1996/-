const { register,isReuse,login,addGym,getGymByStatus,changeGymStatus,getGymByText} = require('../dao/gymDao');

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

//新增场馆
module.exports.addGym = async data =>{
    const res = await addGym(data);
    if(res.nModified == '1'){
        return {success:true,msg:'新增成功',rows:res}
    }
    return {success:false,msg:'新增失败',rows:res}
}

//根据状态获取场馆
module.exports.getGymByStatus = async data =>{
    const obj = await getGymByStatus(data);
    console.log(obj);
    if(obj.length){
        return {success:true,msg:'获取成功',rows:obj}
    }
    return {success:false,msg:'获取失败'}
}

//改变场馆状态
module.exports.changeGymStatus = async data =>{
    const obj = await changeGymStatus(data);
    if(obj.nModified == '1'){
        return {success:true,msg:'改变状态成功',rows:obj}
    }
    return {success:false,msg:'改变状态失败',rows:obj}
}

//通过单个字段获取场馆信息
module.exports.getGymByText = async data =>{
    const obj = await getGymByText(data);
    if(obj.length){
        return {success:true,msg:'获取成功',rows:obj}
    }
    return {success:false,msg:'获取失败'}
}