
const { getCoaches, delCoaches } = require("../dao/coachesDao");

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

module.exports.delCoaches = async function (data) {
    let msg = await delCoaches(data);
    if (msg.ok === 1) {
        return { success: true, msg: "删除成功" }
    }
};
