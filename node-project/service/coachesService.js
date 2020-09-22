
const { getCoaches, delCoaches, getOne, updateCoaches, addCoach,reg } = require("../dao/coachesDao");

//获取教练
module.exports.getCoaches = async function (data) {
    let { arr, totalCount, pageSize, pageNumber } = await getCoaches(data);
    if (arr.length > 0) {
        return {
            success: true,
            msg: "获取成功",
            rows: arr,
            totalCount,
            pageSize,
            pageNumber
        };
    }
}
//删除教练
module.exports.delCoaches = async function (data) {
    let msg = await delCoaches(data);
    if (msg.ok === 1) {
        return { success: true, msg: "删除成功" }
    }
};
//修改教练信息
module.exports.updateCoaches = async function (data) {
    let msg = await updateCoaches(data);
    if (msg.ok === 1) {
        return { success: true, msg: "删除成功" }
    }
}

//详细信息
module.exports.getOne = async (data) => {
    const getdata = await getOne(data);
    // console.log('vv',getdata)
    if (getdata.length > 0) {
        // 后端返回处理结果给前端
        return { success: true, msg: "获取信息成功", getdata };
    } else {
        return { success: false, msg: '获取信息失败' };
    }
}
//新增教练
module.exports.addCoach = async (data) => {
    const rows = await addCoach(data);
    // console.log('vv',getdata)
    // 后端返回处理结果给前端
    return { success: true, msg: "获取教练成功", rows };

}

//教练注册
module.exports.reg = async data => {
	const isReg = await isExist(data);
	if (isReg.length > 0) {
		return { success: false, msg: "该用户名已被注册" };
	} else {
		const obj = await reg(data);
		// console.log(obj);
		if (obj._id) {
			return { success: true, msg: "注册成功", obj };
		}
		return { success: false, msg: "注册失败", obj };
	}
}