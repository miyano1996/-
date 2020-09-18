const { gymModel } = require('./modules/gymModel');

//注册
module.exports.register= async data => await gymModel.create(data);

//验证重名
module.exports.isReuse= async ({account}) => await gymModel.find({account});

//登录
module.exports.login= async ({account,password}) => await gymModel.find({account,password});

//新增场馆
module.exports.addGym = async ({_id,telephone,name,images,address,status})=>await gymModel.updateOne({_id},{telephone,name,images,address,status});

//获取场馆信息
module.exports.getGym = async (data) =>await gymModel.find(data)

//更改场馆信息
module.exports.updateGym = async (data) =>await gymModel.updateOne({_id:data._id,...data})