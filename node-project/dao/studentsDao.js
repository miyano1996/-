const { studentsModel } = require('./modules/studentsModel')

module.exports.getOne = async (data) => {
	console.log(data.id,'aaa')
	return await studentsModel.find({_id:data.id});
}