const { getOne } = require('../dao/studentsDao');

module.exports.getOne = async (data)=>{
	const getdata = await getOne(data);
	// console.log('vv',getdata)
	if(getdata.length > 0) {
		// 后端返回处理结果给前端
		return { success: true, msg: "获取信息成功",getdata };
	} else {
		return { success: false,msg: '获取信息失败'};
	}
}