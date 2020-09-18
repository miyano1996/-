const { gymModel } = require('./modules/gymModel');

//注册
module.exports.register= async data => await gymModel.create(data);

//验证重名
module.exports.isReuse= async ({account}) => await gymModel.find({account});

//登录
module.exports.login= async ({account,password}) => await gymModel.find({account,password});


