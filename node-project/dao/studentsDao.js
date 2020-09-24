const { studentsModel } = require('./modules/studentsModel')

module.exports.getOne = async (data) => {
	return await studentsModel.find({_id:data.id});
}
//login
module.exports.login = async data =>{
	return await studentsModel.find(data);
}
//验证是否重名
module.exports.isExist = async data =>{
	return await studentsModel.find({account:data.account});
}

//注册
module.exports.reg = async data =>{
	return await studentsModel.create(data);
}

//登录
module.exports.login= async ({account,password}) => await studentsModel.find({account,password});

//上传完善信息
module.exports.upLoadAll = async ({_id,telephone,headImage,name,nick,gender,social,age}) => await studentsModel.updateOne({_id},{telephone,headImage,name,nick,gender,social,age});

//登陆成功后获取当前经纬度
module.exports.upLat = async ({_id,loginAdress}) => await studentsModel.updateOne({_id},loginAdress);

