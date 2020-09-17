const { register,isReuse } = require('../dao/adminDao');

module.exports.register = async data => {
    const res = await isReuse(data);
    if(res.length>0){
        return {success:false, msg:"用户名已存在"}
    }else{
        const res = await register(data);
        return res.id?{success:true,msg:"注册成功"}:{success:false,msg:"注册失败"}
    }
}
