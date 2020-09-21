import axios from '../axios'

const complaint = {
    getAllComplaint(id) {
        return axios({
            url: '/complaint/getAllComplaints',
            method: 'GET',
            params: { id }
        })
    }
}

export default complaint