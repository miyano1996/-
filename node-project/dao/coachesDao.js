const { coachesModel } = require('./modules/coachesModel');

module.exports.getCoaches = async function ({ pageSize, pageNumber, _id }) {
    console.log(_id);
    let total = await coachesModel.find();
    let totalCount = total.filter(item => item.isDelete == false && item.gym == _id);
    let arr = await coachesModel.find({ isDelete: false, gym: _id }).limit(pageSize - 0).skip((pageNumber - 1) * pageSize);
    return { arr, totalCount: totalCount.length, pageSize, pageNumber };
}
module.exports.getOne = async (data) => {
    console.log(data)
    return await coachesModel.find({ _id: data.id }).populate('gym');
    // return await coachesModel.find({_id:data.id});
}
//验证是否重名
module.exports.isExist = async data => {
    return await coachesModel.find({ account: data.account });
}
//注册
module.exports.reg = async data => {
    return await coachesModel.create(data);
}

//登录
module.exports.login = async ({ account, password }) => await coachesModel.find({ account, password });

module.exports.delCoaches = async function ({ _id, isDelete }) {
    const msg = await coachesModel.update({ _id }, { isDelete });
    return msg
}
module.exports.getOne = async (data) => {
    return await coachesModel.find({ _id: data.id }).populate('gym');
}
module.exports.updateCoaches = async function ({ data, _id }) {
    const msg = await coachesModel.updateOne({ _id }, { ...data });
    return msg
}
module.exports.addCoach = async (data) => {
    return await coachesModel.create(data);
}

//上传完善信息
module.exports.upLoadAll = async (data) => await coachesModel.updateOne({_id:data},{...data});
//修改密码
module.exports.updatePassword = async ({ account, password,newPassword }) => {
	return await coachesModel.update({ account,password }, { password:newPassword })
}