const { complaintModel } = require('./modules/complaintModel');
// 添加投诉
module.exports.addComplaint = async function (data) {
    await complaintModel.create(data);
};

// 获取所有投诉
module.exports.getAllComplaints = async function (data) {
    // const num = await complaintModel.find({ status: false });
    // const delnum = await complaintModel.find({ removed: true });
    const msg = await complaintModel.find({ gymId: data.id }).populate('studentId').populate('coacheId').populate('gymId').populate("ordersId")
    // .limit(data.datanum - 0).skip((data.pagenum - 1) * (data.datanum - 0));
    return data = {
        rows: msg,
        // num: num.length,
        // delnum: delnum.length
    }

};
// 删除投诉(软删除)
module.exports.delComplaint = async function (data) {
    return await complaintModel.updateOne({ _id: data.id }, { status: data.success });
}
