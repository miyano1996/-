const { coachesModel } = require('./modules/coachesModel');

module.exports.getCoaches = async function (data) {
    let arr = await coachesModel.find();
    return arr;
}
module.exports.getOne = async (data) => {
	return await coachesModel.find({_id:data.id}).populate('gym');
}
module.exports.addCoach = async (data) => {
	return await coachesModel.create(data);
}
