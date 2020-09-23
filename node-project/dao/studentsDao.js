const { studentsModel } = require('./modules/studentsModel')

module.exports.getOne = async (data) => {
	// console.log(data,'sss')
	return await studentsModel.find({_id:data.id});
	// console.log(await studentsModel.find({_id:data.id}))
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

