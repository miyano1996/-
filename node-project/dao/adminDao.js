const { adminModel } = require('./modules/adminModel')

module.exports.login = async (data) => {
	return await adminModel.find(data);
}