const { coachesModel } = require('./modules/coachesModel');

module.exports.getCoaches = async function (data) {
    let arr = await coachesModel.find();
    return arr;
}
module.exports.getOne = async (data) => {
    console.log(data)
	return await coachesModel.find({_id:data.id}).populate('gym');
	// return await coachesModel.find({_id:data.id});
}
//验证是否重名
module.exports.isExist = async data =>{
	return await coachesModel.find({account:data.account});
}
//注册
module.exports.reg = async data =>{
	return await coachesModel.create(data);
}

//登录
module.exports.login= async ({account,password}) => await coachesModel.find({account,password});

module.exports.addCoach = async (data) => {
	return await coachesModel.create(data);
}
