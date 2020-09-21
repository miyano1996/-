const { coachesModel } = require('./modules/coachesModel');

module.exports.getCoaches = async function ({ pageSize, pageNumber }) {
    let total = await coachesModel.find();
    let totalCount = total.filter(item => item.isDelete == false);
    let arr = await coachesModel.find({ isDelete: false }).limit(pageSize - 0).skip((pageNumber - 1) * pageSize);
    return { arr, totalCount: totalCount.length, pageSize, pageNumber };
}
module.exports.delCoaches = async function ({ _id, isDelete }) {
    const msg = await coachesModel.update({ _id }, { isDelete });
    return msg
}