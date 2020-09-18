
const { getCoaches } = require("../dao/coachesDao");

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