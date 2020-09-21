const { addComplaint, getAllComplaints } = require('../dao/complaintDao');

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