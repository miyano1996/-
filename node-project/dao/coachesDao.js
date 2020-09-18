const { coachesModel } = require('./modules/coachesModel');

module.exports.getCoaches = async function (data) {
    let arr = await coachesModel.find();
    return arr;
}