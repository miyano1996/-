import axios from '../axios'

const admin = {
    login(data) {
        return axios({
            url: '/admin/login',
            method: 'POST',
            data
        })
    }
}

export default admin