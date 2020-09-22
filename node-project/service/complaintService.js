const { addComplaint, getAllComplaints, delComplaint } = require('../dao/complaintDao');

//添加投诉
module.exports.addComplaint = async data => {
    const msg = await addComplaint(data);
}


//获取所有投诉信息
module.exports.getAllComplaints = async data => {
    const msg = await getAllComplaints(data);
    return data = {
        rows: msg.rows,
        success: true
    }
}
module.exports.delComplaint = async (data) => {
    const msg = await delComplaint(data);
    if (msg.nModified == 1) {
        return data = {
            success: true
        }
    }

}