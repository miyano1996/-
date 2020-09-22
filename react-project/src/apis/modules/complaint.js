import axios from '../axios'

const complaint = {
    getAllComplaint(id) {
        return axios({
            url: '/complaint/getAllComplaints',
            method: 'GET',
            params: { id }
        })
    },
    delComplaint(id) {
        return axios({
            url: '/complaint/delComplaint',
            method: 'POST',
            data: { id, success: true }
        })
    }
}

export default complaint