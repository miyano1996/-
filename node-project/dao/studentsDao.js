const { studentsModel } = require('./modules/studentsModel')

module.exports.login = async (data) => {
	return await studentsModel.find(data);
}