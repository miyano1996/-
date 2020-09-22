import axios from '../axios'

const code = {
    sendCode(data) {
        return axios({
            url: '/code/sendCode',
            method: 'POST',
            data
        })
    }
}

export default code