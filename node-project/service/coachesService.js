
const { getCoaches, getOne, addCoach } = require("../dao/coachesDao");

module.exports.getCoaches = async function (data) {
    let arr = await getCoaches(data);
    console.log(arr);
    if (arr.length > 0) {
        return {
            success: true,
            msg: "获取成功",
            rows: [arr]
        };
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