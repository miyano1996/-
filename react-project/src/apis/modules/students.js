import axios from '../axios'

const students = {
    getone(data) {//学员详细信息
        return axios({
            url: `/students/details`,
            method: 'POST',
            data
        })
    },
    regAsync(params) {
        return axios({
            url: `/students/reg`,
            method: 'get',
            params
        })
    },
    getallStudents() {

    }
}

export default students