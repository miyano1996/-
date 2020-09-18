const { coachesModel } = require('./modules/coachesModel');

module.exports.getOne = async (data) => {
	return await coachesModel.find({_id:data.id}).populate('gym');
}
