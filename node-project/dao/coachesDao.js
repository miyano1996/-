const { coachesModel } = require('./modules/coachesModel');

module.exports.getOne = async (data) => {
	// console.log(data.id,'aaa')
	return await coachesModel.find();
}
